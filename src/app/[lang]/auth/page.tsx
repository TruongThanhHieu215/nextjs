"use client"
import { useRouter } from "next-intl/client"
import { useEffect } from "react"

export default function Auth() {
  const router = useRouter()
  useEffect(() => {
    router.push("auth/login")
  }, [router])

  return <></>
}
