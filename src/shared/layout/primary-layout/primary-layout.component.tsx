"use client"
import React from "react"

export default function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full h-screen">
      <main>{children}</main>
    </section>
  )
}
