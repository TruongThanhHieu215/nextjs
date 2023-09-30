import "./globals.css"
import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { Providers } from "store/providers.redux"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import PrimaryLayout from "@/layout/primary-layout/primary-layout.component"

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Matching",
  description: "Generated by create next app",
}

type RootLayoutProps = {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const messages = {}
  try {
    // messages = (await import(`../../locales/${params.lang || "ja"}.json`)).default
  } catch (error) {
    notFound()
  }
  return (
    <html lang={params.lang || "ja"}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={params.lang} messages={messages}>
          <Providers>
            <Suspense fallback={<p>Loading</p>}>
              <PrimaryLayout>{children}</PrimaryLayout>
            </Suspense>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
