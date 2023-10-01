import "./globals.css"
import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import { Providers } from "store/providers.redux"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import PrimaryLayout from "@/layout/primary-layout/primary-layout"
import { siteConfig } from "@/constants/config"
import { Metadata } from "next"

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] })

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
    apple: "favicon.ico",
  },
  manifest: ``,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
}

export type RootLayoutProps = {
  children: React.ReactNode
  params: {
    lang: string
  }
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  let messages = {}
  try {
    messages = (await import(`../../locales/${params.lang || "ja"}.json`)).default
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

export default RootLayout
