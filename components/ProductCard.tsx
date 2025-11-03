type ProductCardProps = {
  title: string
  description: string
  // 可替換為實際圖片連結或 <Image/>
  imageAlt?: string
}

export default function ProductCard({ title, description, imageAlt = 'product placeholder' }: ProductCardProps) {
  return (
    <div className="group rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-sm shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
      {/* 佔位圖區塊，可換成 next/image */}
      <div className="h-40 bg-gradient-to-tr from-zinc-100 to-zinc-50 flex items-center justify-center text-xs text-zinc-600">
        {imageAlt}
      </div>
      <div className="p-5">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-zinc-700 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}


