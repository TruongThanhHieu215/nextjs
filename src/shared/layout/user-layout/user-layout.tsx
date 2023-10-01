"use client"

export function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className=" w-full">{children}</main>
    </>
  )
}
