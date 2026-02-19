import { KpiData, ChartDataPoint, ActivityItem, AnalyticsData, TableData } from "./types"
import { subDays, format } from "date-fns"

// Generate mock KPI data
export function generateKpiData(): KpiData {
  return {
    totalUsers: 45231,
    revenue: 1254300,
    conversionRate: 3.24,
    activeUsers: 12340,
  }
}

// Generate time series data for charts
export function generateTimeSeriesData(days: number = 30): ChartDataPoint[] {
  const data: ChartDataPoint[] = []
  const baseValue = 1000
  const now = new Date()

  for (let i = days; i >= 0; i--) {
    const date = subDays(now, i)
    const variance = Math.random() * 200 - 100
    const trend = (days - i) * 10
    const value = Math.max(0, baseValue + variance + trend)

    data.push({
      date: format(date, "yyyy-MM-dd"),
      value: Math.round(value),
      label: format(date, "MMM dd"),
    })
  }

  return data
}

// Generate recent activities
export function generateActivities(count: number = 10): ActivityItem[] {
  const activities: ActivityItem[] = []
  const types: ActivityItem["type"][] = ["sale", "signup", "conversion", "event"]
  const now = new Date()

  for (let i = 0; i < count; i++) {
    const type = types[Math.floor(Math.random() * types.length)]
    const timestamp = new Date(now.getTime() - i * 60000 * (Math.random() * 10 + 1))

    activities.push({
      id: `activity-${i}`,
      type,
      description: `${type === "sale" ? "New sale" : type === "signup" ? "User signup" : type === "conversion" ? "Conversion" : "Event"} recorded`,
      timestamp,
      value: type === "sale" ? Math.random() * 1000 + 50 : undefined,
    })
  }

  return activities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
}

// Generate analytics data by category
export function generateAnalyticsData(): AnalyticsData[] {
  const categories = ["Electronics", "Clothing", "Food", "Services", "Other"]
  const total = 10000
  const data: AnalyticsData[] = []

  categories.forEach((category, index) => {
    const value = Math.floor(total * (0.3 - index * 0.05))
    data.push({
      category,
      value,
      percentage: (value / total) * 100,
    })
  })

  return data
}

// Generate table data
export function generateTableData(count: number = 50): TableData[] {
  const data: TableData[] = []
  const categories = ["Electronics", "Clothing", "Food", "Services", "Other"]
  const statuses: TableData["status"][] = ["active", "pending", "completed"]
  const names = ["Product A", "Product B", "Product C", "Service X", "Service Y"]

  for (let i = 0; i < count; i++) {
    data.push({
      id: `item-${i}`,
      name: `${names[Math.floor(Math.random() * names.length)]} ${i + 1}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      value: Math.floor(Math.random() * 5000 + 100),
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
      status: statuses[Math.floor(Math.random() * statuses.length)],
    })
  }

  return data
}
