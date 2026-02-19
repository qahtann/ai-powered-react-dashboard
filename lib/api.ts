import { generateKpiData, generateTimeSeriesData, generateActivities, generateAnalyticsData, generateTableData } from "./mock-data"
import { KpiData, ChartDataPoint, ActivityItem, AnalyticsData, TableData } from "./types"

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchKpiData(): Promise<KpiData> {
  await delay(300)
  return generateKpiData()
}

export async function fetchTimeSeriesData(days: number = 30): Promise<ChartDataPoint[]> {
  await delay(400)
  return generateTimeSeriesData(days)
}

export async function fetchActivities(): Promise<ActivityItem[]> {
  await delay(200)
  return generateActivities(10)
}

export async function fetchAnalyticsData(): Promise<AnalyticsData[]> {
  await delay(350)
  return generateAnalyticsData()
}

export async function fetchTableData(): Promise<TableData[]> {
  await delay(500)
  return generateTableData(50)
}

// Mock AI prediction function
export async function generateAiPrediction(prompt: string): Promise<string> {
  await delay(1000)
  
  // Mock AI response
  const mockResponse = `Based on the sales data analysis for the last month:

**Key Insights:**
- Revenue trend shows a **+12.3% increase** compared to the previous period
- Peak performance observed on weekends (Saturday-Sunday)
- Electronics category leads with 34% of total sales

**Predictions for Next Quarter:**
- Expected revenue: **$1,450,000** (with 85% confidence)
- Growth rate: **+15-18%** projected
- Recommended focus areas: Electronics and Services categories

**Anomalies Detected:**
- Unusual spike on March 15th (+45% above average)
- Slight dip in Clothing category (-8% vs. previous period)

**Recommendations:**
1. Increase inventory for Electronics category
2. Launch promotional campaign for Clothing to boost sales
3. Monitor weekend performance patterns for optimization`

  return mockResponse
}
