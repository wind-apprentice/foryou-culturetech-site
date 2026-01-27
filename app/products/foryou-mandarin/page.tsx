import { cookies } from 'next/headers'
import Link from 'next/link'

export default function ForYouMandarinProductPage() {
  const lang = cookies().get('lang')?.value === 'en' ? 'en' as const : 'zh'

  return (
    <div className="container-default py-16 space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
          ForYou Mandarin
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {lang === 'en'
            ? 'Learn Chinese immersively with real videos and cultural context.'
            : '透過真實影片與文化情境，沈浸式學習華語。'}
        </p>
      </div>

      <div className="space-y-4">
        <a
          href="https://foryou-mandarin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-sky-700 transition"
        >
          {lang === 'en' ? 'Visit ForYou Mandarin Website' : '前往 ForYou Mandarin 官方網站'}
        </a>

        <div className="text-sm text-gray-600">
          <Link
            href="/products/foryou-mandarin/privacy"
            className="underline underline-offset-4 hover:text-gray-900"
          >
            {lang === 'en'
              ? 'View ForYou Mandarin Privacy Policy'
              : '查看 ForYou Mandarin 隱私權政策'}
          </Link>
        </div>
      </div>
    </div>
  )
}

