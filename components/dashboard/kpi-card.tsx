"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAnimatedCounter } from "@/hooks/use-analytics-data"
import { formatCurrency, formatNumber, formatPercentage } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface KpiCardProps {
  title: string
  value: number
  format?: "currency" | "number" | "percentage"
  icon: LucideIcon
  description?: string
  trend?: {
    value: number
    isPositive: boolean
  }
}

export function KpiCard({
  title,
  value,
  format = "number",
  icon: Icon,
  description,
  trend,
}: KpiCardProps) {
  const animatedValue = useAnimatedCounter(value)

  const formattedValue =
    format === "currency"
      ? formatCurrency(animatedValue)
      : format === "percentage"
      ? formatPercentage(animatedValue)
      : formatNumber(animatedValue)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formattedValue}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trend && (
          <p
            className={`text-xs mt-1 ${
              trend.isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend.isPositive ? "+" : ""}
            {trend.value}% from last period
          </p>
        )}
      </CardContent>
    </Card>
  )
}
