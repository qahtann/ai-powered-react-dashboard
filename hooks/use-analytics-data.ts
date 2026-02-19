import { useQuery } from "@tanstack/react-query"
import { fetchKpiData, fetchTimeSeriesData, fetchActivities } from "@/lib/api"
import { useEffect, useState } from "react"

export function useKpiData() {
  return useQuery({
    queryKey: ["kpi"],
    queryFn: fetchKpiData,
    refetchInterval: 10000, // Refetch every 10 seconds for real-time feel
  })
}

export function useTimeSeriesData(days: number = 30) {
  return useQuery({
    queryKey: ["timeSeries", days],
    queryFn: () => fetchTimeSeriesData(days),
    refetchInterval: 5000, // Refetch every 5 seconds
  })
}

export function useActivities() {
  return useQuery({
    queryKey: ["activities"],
    queryFn: fetchActivities,
    refetchInterval: 8000, // Refetch every 8 seconds
  })
}

// Hook for animated counter
export function useAnimatedCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const startValue = count
    const difference = target - startValue

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(startValue + difference * easeOut))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration])

  return count
}
