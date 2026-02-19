export interface KpiData {
  totalUsers: number
  revenue: number
  conversionRate: number
  activeUsers: number
}

export interface ChartDataPoint {
  date: string
  value: number
  label?: string
}

export interface ActivityItem {
  id: string
  type: "sale" | "signup" | "conversion" | "event"
  description: string
  timestamp: Date
  value?: number
}

export interface AnalyticsData {
  category: string
  value: number
  percentage: number
}

export interface PredictionInsight {
  forecast: number
  confidence: number
  reasoning: string
  anomalies?: string[]
}

export interface TableData {
  id: string
  name: string
  category: string
  value: number
  date: Date
  status: "active" | "pending" | "completed"
}
