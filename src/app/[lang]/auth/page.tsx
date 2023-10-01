"use client"
import { useRouter } from "next-intl/client"
import { useEffect } from "react"

const Auth = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("auth/login")
  }, [router])

  return <></>
}

export default Auth
