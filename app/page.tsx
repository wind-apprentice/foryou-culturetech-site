import HeroSection from '@/components/HeroSection'
import ProductCard from '@/components/ProductCard'
import { cookies } from 'next/headers'

export default function HomePage() {
  const lang = cookies().get('lang')?.value === 'en' ? 'en' as const : 'zh'
  const copy = lang === 'en'
    ? {
        title: 'Where Culture Meets Technology.',
        subtitle: 'Where culture meets technology.',
        desc: 'ForYou Culture & Tech builds a cultural learning platform that blends language education, media technology, and AI innovation.',
        cta: 'Learn more',
        solutions: 'Solutions',
        tagline: 'Language, culture, and AI coming together',
      }
    : {
        title: 'Where Culture Meets Technology.',
        subtitle: '讓文化與科技相遇。',
        desc: 'ForYou Culture & Tech 致力於打造結合語言教育、影音科技與 AI 創新的文化學習平台。',
        cta: '了解更多',
        solutions: 'Solutions',
        tagline: '語言、文化、AI 的交匯',
      }
  return (
    <div>
      <HeroSection
        titleEn={copy.title}
        subtitleZh={copy.subtitle}
        description={copy.desc}
        ctaLabel={copy.cta}
        ctaHref="/about"
      />

      <section className="container-default py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{copy.solutions}</h2>
          <span className="text-sm text-zinc-500">{copy.tagline}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ProductCard
            title="ForYou Mandarin"
            description="影音與 AI 結合的中文學習平台"
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

