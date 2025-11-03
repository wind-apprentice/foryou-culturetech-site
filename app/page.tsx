import HeroSection from '@/components/HeroSection'
import ProductCard from '@/components/ProductCard'

export default function HomePage() {
  return (
    <div>
      <HeroSection
        titleEn="Where Culture Meets Technology."
        subtitleZh="讓文化與科技相遇。"
        description="ForYou Culture & Tech 致力於打造結合語言教育、影音科技與 AI 創新的文化學習平台。"
        ctaLabel="了解更多"
        ctaHref="/about"
      />

      <section className="container-default py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Solutions</h2>
          <span className="text-sm text-zinc-500">語言、文化、AI 的交匯</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ProductCard
            title="ForYou Mandarin"
            description="影音與 AI 結合的中文學習平台"
          />
          <ProductCard
            title="VioMind"
            description="AI 影音筆記與創作工具"
          />
          <ProductCard
            title="NiHao.AI Voice Coach"
            description="AI 聲調與發音訓練工具"
          />
        </div>
      </section>
    </div>
  )
}

