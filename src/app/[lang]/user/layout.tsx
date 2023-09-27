"use client"
import { Suspense, useEffect } from "react"
import "../globals.css"
import { UserLayoutComponent } from "@/layout/user-layout/user-layout.component"

export default async function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<p>Loading ...</p>}>
        <section className="h-[calc(100vh-55px)] overflow-auto">{children}</section>
      </Suspense>
    </>
  )
}
