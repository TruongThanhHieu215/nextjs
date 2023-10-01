"use client"
import { useRouter } from "next-intl/client"
import { useEffect } from "react"

const User = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("user/target-matching")
  }, [router])

  return <></>
}

export default User
