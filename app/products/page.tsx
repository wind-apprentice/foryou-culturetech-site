import ProductCard from '@/components/ProductCard'

export default function ProductsPage() {
  return (
    <div className="container-default py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">產品與服務</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <ProductCard
          title="ForYou Mandarin"
          description="沉浸式中文學習平台，結合影音與 AI。"
        />
        <ProductCard
          title="NiHao.AI Voice Coach"
          description="AI 聲調與發音訓練平台，融合文化情境學習。"
        />
      </div>
    </div>
  )
}


