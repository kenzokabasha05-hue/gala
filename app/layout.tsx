import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const title = 'Lights On — Kigali Source Company'
const description =
  'One evening at Kigali Source Company, KN 76 St, Kigali: every light in the shop switched on at once. Friday 12 February 2027, 6pm until late.'

// Absolute URLs are required for link previews (WhatsApp, X, Facebook).
// On Vercel this resolves to the production domain; set NEXT_PUBLIC_SITE_URL to override.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'Kigali Source Company',
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Kigali Source Company',
    title,
    description,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf9f6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
