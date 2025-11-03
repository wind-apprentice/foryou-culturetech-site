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
