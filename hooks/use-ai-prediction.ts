"use client"

import { useState } from "react"
import { generateAiPrediction } from "@/lib/api"

export function useAiPrediction() {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  const generatePrediction = async (prompt: string) => {
    setIsLoading(true)
    setError(null)
    setResponse("")

    try {
      // For real implementation, you would use Vercel AI SDK here
      // For now, using mock response
      const result = await generateAiPrediction(prompt)
      
      // Simulate streaming by adding characters progressively
      let currentText = ""
      for (let i = 0; i < result.length; i++) {
        currentText += result[i]
        setResponse(currentText)
        await new Promise((resolve) => setTimeout(resolve, 10))
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate prediction")
    } finally {
      setIsLoading(false)
    }
  }

  return {
    generatePrediction,
    isLoading,
    response,
    error,
  }
}
