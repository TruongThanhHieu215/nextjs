"use client";

export function UserLayoutComponent({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className=" w-full">{children}</main>
    </>
  );
}
