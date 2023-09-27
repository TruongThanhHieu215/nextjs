"use client";
import { Suspense, } from "react";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {


  return (
    <Suspense fallback={<p>Loading...</p>}>
      {children}
    </Suspense>
  );
}
