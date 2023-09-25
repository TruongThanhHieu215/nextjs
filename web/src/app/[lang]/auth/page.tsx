"use client";
import { useRouter } from "next-intl/client";
import React, { useEffect } from "react";

const Auth = () => {
  const router = useRouter();
  useEffect(() => {
    // router.push("auth/login");
  }, []);
};

export default Auth;
