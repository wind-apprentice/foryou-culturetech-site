import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <nav className="container-default h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900">ForYou</span>
          <span className="hidden sm:inline text-sm text-zinc-500">Culture & Tech</span>
        </Link>
        <ul className="flex items-center gap-2 sm:gap-4 text-sm">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/products', label: 'Products' },
            { href: '/contact', label: 'Contact' },
          ].map((item) => (
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
      </nav>
    </header>
  )
}


