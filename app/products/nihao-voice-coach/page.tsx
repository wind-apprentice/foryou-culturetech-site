import { cookies } from 'next/headers'
import Link from 'next/link'

export default function NiHaoVoiceCoachProductPage() {
  const lang = cookies().get('lang')?.value === 'en' ? 'en' as const : 'zh'

  return (
    <div className="container-default py-16 space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
          NiHao.AI Voice Coach
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {lang === 'en'
            ? 'AI-powered tone and pronunciation training platform with cultural context learning.'
            : 'AI 聲調與發音訓練平台，結合文化情境的互動式學習體驗。'}
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-gray-700">
          {lang === 'en'
            ? 'More details about NiHao.AI Voice Coach are coming soon.'
            : 'NiHao.AI Voice Coach 的更多產品資訊將於日後更新。'}
        </p>

        <div className="text-sm text-gray-600">
          <Link
            href="/products/nihao-voice-coach/privacy"
            className="underline underline-offset-4 hover:text-gray-900"
          >
            {lang === 'en'
              ? 'View NiHao.AI Voice Coach Privacy Policy'
              : '查看 NiHao.AI Voice Coach 隱私權政策'}
          </Link>
        </div>
      </div>
    </div>
  )
}

