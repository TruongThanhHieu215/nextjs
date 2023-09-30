"use client"
import { Suspense } from "react"
import "../globals.css"

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<p>Loading ...</p>}>
        <section className="h-[calc(100vh-55px)] overflow-auto">{children}</section>
      </Suspense>
    </>
  )
}
