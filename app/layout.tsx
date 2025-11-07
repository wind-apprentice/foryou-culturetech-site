import type { Metadata } from 'next'
import './globals.css'
import { Inter, Noto_Sans_TC } from 'next/font/google'

// 載入英文字體 Inter 與中文字體 Noto Sans TC
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansTC = Noto_Sans_TC({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-notosanstc' })

export const metadata: Metadata = {
  title: 'ForYou Culture & Tech',
  description: 'Where Culture Meets Technology. 讓文化與科技相遇。',
  metadataBase: new URL('https://www.foryouculturetech.com'),
  openGraph: {
    title: 'ForYou Culture & Tech',
    description: 'Where Culture Meets Technology. 讓文化與科技相遇。',
    url: 'https://www.foryouculturetech.com',
    siteName: 'ForYou Culture & Tech',
    images: [
      {
        url: '/og-image.png', // 請放置 1200x630 的 Open Graph 圖片到 public/og-image.png
        width: 1200,
        height: 630,
        alt: 'ForYou Culture & Tech',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForYou Culture & Tech',
    description: 'Where Culture Meets Technology. 讓文化與科技相遇。',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/src/logo.png',
    apple: '/src/logo.png',
  },
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" className={`${inter.variable} ${notoSansTC.variable}`}>
      <body className="font-sans min-h-dvh flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
