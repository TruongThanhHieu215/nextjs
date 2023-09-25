"use client";
import { useRouter } from "next-intl/client";
import React, { useEffect } from "react";

export default async function User() {
  const router = useRouter();
  useEffect(() => {
    router.push("user/target-matching");
  }, []);
  return ;
}
