"use client"

import { useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import HomePage from "@/components/home-page"

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && <HomePage />}
    </>
  )
}
