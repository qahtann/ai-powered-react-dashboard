"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAiPrediction } from "@/hooks/use-ai-prediction"
import { Sparkles, Loader2 } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { useTimeSeriesData } from "@/hooks/use-analytics-data"
import { format } from "date-fns"

export default function PredictionsPage() {
  const [prompt, setPrompt] = useState("Generate insights for last month")
  const { generatePrediction, isLoading, response, error } = useAiPrediction()
  const { data: timeSeriesData } = useTimeSeriesData(30)

  // Generate forecast data based on existing trend
  const forecastData = timeSeriesData
    ? [
        ...timeSeriesData.slice(-10).map((point) => ({
          date: format(new Date(point.date), "MMM dd"),
          value: point.value,
          type: "actual",
        })),
        ...Array.from({ length: 5 }, (_, i) => {
          const lastValue = timeSeriesData[timeSeriesData.length - 1]?.value ?? 1000
          const trend = 50 // Estimated growth per period
          return {
            date: `Forecast ${i + 1}`,
            value: Math.round(lastValue + trend * (i + 1)),
            type: "forecast",
          }
        }),
      ]
    : []

  const handleGenerate = () => {
    if (prompt.trim()) {
      generatePrediction(prompt)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Predictions</h1>
        <p className="text-muted-foreground">
          Get AI-powered insights and predictions for your data
        </p>
      </div>

      {/* AI Input Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            AI Insights Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter your prompt (e.g., 'Generate insights for last month')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleGenerate()
                }
              }}
              disabled={isLoading}
            />
            <Button onClick={handleGenerate} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate"
              )}
            </Button>
          </div>

          {error && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {response && (
            <div className="rounded-lg border bg-muted/50 p-4">
              <h3 className="mb-2 font-semibold">AI Response:</h3>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-sm">
                  {response}
                </pre>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Forecast Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="date"
                className="text-xs"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                className="text-xs"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                strokeDasharray={
                  forecastData.some((d) => d.type === "forecast")
                    ? "5 5"
                    : undefined
                }
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary" />
              <span>Actual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary/50 border-2 border-dashed border-primary" />
              <span>Forecast</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Anomaly Highlights */}
      <Card>
        <CardHeader>
          <CardTitle>Anomaly Detection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-medium">Unusual spike detected</p>
                <p className="text-sm text-muted-foreground">
                  March 15th showed +45% above average
                </p>
              </div>
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                Anomaly
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-medium">Category dip detected</p>
                <p className="text-sm text-muted-foreground">
                  Clothing category -8% vs previous period
                </p>
              </div>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                Warning
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
