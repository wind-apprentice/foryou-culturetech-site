import Image from 'next/image'
import Link from 'next/link'
import type { Route } from 'next'

type ProductCardProps = {
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  href?: string | Route
  externalLink?: boolean
}

export default function ProductCard({ 
  title, 
  description, 
  imageSrc,
  imageAlt = 'product placeholder',
  href,
  externalLink = false
}: ProductCardProps) {
  const content = (
    <div className="group rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-sm shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
      {/* 圖片區塊 */}
      <div className="h-40 bg-gradient-to-tr from-zinc-100 to-zinc-50 flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <Image src={imageSrc} alt={imageAlt} width={200} height={160} className="object-contain" />
        ) : (
          <span className="text-xs text-zinc-600">{imageAlt}</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-zinc-700 leading-relaxed">{description}</p>
      </div>
    </div>
  )

  if (href) {
    if (externalLink || href.startsWith('http')) {
      return (
        <a href={href as string} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      )
    }
    return (
      <Link href={href as Route} className="block">
        {content}
      </Link>
    )
  }

  return content
}


