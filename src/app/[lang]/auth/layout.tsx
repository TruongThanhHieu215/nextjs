"use client"
import { Suspense } from "react"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
}

export default RootLayout
