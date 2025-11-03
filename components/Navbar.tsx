import Link from 'next/link'
import Image from 'next/image'
import LanguageToggle from '@/components/LanguageToggle'
import type { Route } from 'next'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <nav className="container-default h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          {/* 目前檔案位於 public/src/logo.png */}
          <Image src="/src/logo.png" alt="ForYou logo" width={44} height={44} className="rounded-sm" />
          <div className="flex flex-col leading-none">
            <span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900">ForYou</span>
            <span className="hidden sm:block text-[10px] text-zinc-500">Culture & Tech</span>
          </div>
        </Link>
        <ul className="flex items-center gap-2 sm:gap-4 text-sm">
          {([
            { href: '/' as Route, label: 'Home' },
            { href: '/about' as Route, label: 'About' },
            { href: '/products' as Route, label: 'Products' },
            { href: '/contact' as Route, label: 'Contact' },
          ]).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex h-9 items-center rounded-full px-3 text-zinc-700 hover:text-gray-900 hover:bg-zinc-100 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageToggle />
      </nav>
    </header>
  )
}


