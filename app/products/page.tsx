import ProductCard from '@/components/ProductCard'
import { cookies } from 'next/headers'

export default function ProductsPage() {
  const lang = cookies().get('lang')?.value === 'en' ? 'en' as const : 'zh'
  
  return (
    <div className="container-default py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
        {lang === 'en' ? 'Products & Services' : '產品與服務'}
      </h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <ProductCard
          title="ForYou Mandarin"
          description={lang === 'en' ? 'Learn Chinese immersively with real videos!' : '看真實影片 沉浸式學中文!'}
          imageSrc="/foryou_mandarin_logo.png"
          imageAlt="ForYou Mandarin Logo"
          href="/products/foryou-mandarin"
        />
        <ProductCard
          title="NiHao.AI Voice Coach"
          description={lang === 'en' ? 'AI tone and pronunciation training platform with cultural context learning.' : 'AI 聲調與發音訓練平台，融合文化情境學習。'}
          href="/products/nihao-voice-coach"
        />
      </div>
    </div>
  )
}


