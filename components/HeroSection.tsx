import Link from 'next/link'

type HeroSectionProps = {
  titleEn: string
  subtitleZh: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export default function HeroSection({ titleEn, subtitleZh, description, ctaLabel, ctaHref }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* 柔和漸層與圓形光影背景，可替換為圖片/影片 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-red/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-zinc-50" />
      </div>

      <div className="container-default relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            {titleEn}
          </h1>
          <p className="mt-4 text-xl text-brand-red">{subtitleZh}</p>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-700 leading-relaxed">{description}</p>
          <div className="mt-10 flex items-center gap-3">
            <Link href={ctaHref} className="inline-flex items-center h-11 rounded-full bg-brand-red px-6 text-white font-medium shadow-sm transition hover:opacity-90">
              {ctaLabel}
            </Link>
            <Link href="/products" className="inline-flex items-center h-11 rounded-full border border-zinc-300 px-6 text-gray-900 hover:bg-zinc-100 transition">
              查看產品
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


