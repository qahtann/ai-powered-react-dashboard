"use client"

import { Suspense } from "react"
import { KpiCard } from "@/components/dashboard/kpi-card"
import { RealtimeChart } from "@/components/dashboard/realtime-chart"
import { useKpiData, useTimeSeriesData, useActivities } from "@/hooks/use-analytics-data"
import { Users, DollarSign, TrendingUp, Activity } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { formatCurrency } from "@/lib/utils"

function OverviewContent() {
  const { data: kpiData, isLoading: kpiLoading } = useKpiData()
  const { data: timeSeriesData, isLoading: chartLoading } = useTimeSeriesData(30)
  const { data: activities, isLoading: activitiesLoading } = useActivities()

  if (kpiLoading || chartLoading || activitiesLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground">
          Real-time analytics and key performance indicators
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Total Users"
          value={kpiData?.totalUsers ?? 0}
          format="number"
          icon={Users}
          description="Active users"
          trend={{ value: 12.5, isPositive: true }}
        />
        <KpiCard
          title="Revenue"
          value={kpiData?.revenue ?? 0}
          format="currency"
          icon={DollarSign}
          description="Total revenue"
          trend={{ value: 8.2, isPositive: true }}
        />
        <KpiCard
          title="Conversion Rate"
          value={kpiData?.conversionRate ?? 0}
          format="percentage"
          icon={TrendingUp}
          description="Conversion percentage"
          trend={{ value: 2.1, isPositive: true }}
        />
        <KpiCard
          title="Active Users"
          value={kpiData?.activeUsers ?? 0}
          format="number"
          icon={Activity}
          description="Currently active"
          trend={{ value: 5.3, isPositive: true }}
        />
      </div>

      {/* Real-time Chart */}
      <RealtimeChart
        data={timeSeriesData ?? []}
        title="Revenue Trend (Last 30 Days)"
        type="area"
      />

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities?.slice(0, 10).map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="capitalize">{activity.type}</TableCell>
                  <TableCell>{activity.description}</TableCell>
                  <TableCell>
                    {activity.value ? formatCurrency(activity.value) : "-"}
                  </TableCell>
                  <TableCell>
                    {format(activity.timestamp, "MMM dd, HH:mm")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default function OverviewPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OverviewContent />
    </Suspense>
  )
}
