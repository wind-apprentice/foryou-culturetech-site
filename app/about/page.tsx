export default function AboutPage() {
  return (
    <div className="container-default py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">關於我們</h1>

      <div className="mt-10 grid grid-cols-1 gap-8">
        {/* 公司使命：重點卡片 + 左側色條 */}
        <section className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-brand-red to-brand-gold" />
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-gray-900">公司使命</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 text-zinc-700 leading-relaxed">
              <p className="text-base">We believe culture is more than language — it’s a way of thinking.</p>
              <div>
                <p>我們相信文化不只是語言，更是一種思維方式。</p>
                <p className="mt-1">透過科技，我們讓世界更容易理解亞洲的故事。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 公司故事：極簡時間軸 */}
        <section className="rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-gray-900">公司故事</h2>
          <ol className="mt-6 relative border-l border-zinc-200 pl-6 space-y-6">
            <li className="relative">
              <span className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-red" />
              <p className="text-sm text-zinc-500">2025</p>
              <p className="mt-1 text-zinc-700">ForYou Culture & Tech 成立，聚焦文化 × 語言 × AI。</p>
            </li>
            <li className="relative">
              <span className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-gold" />
              <p className="text-sm text-zinc-500">未來</p>
              <p className="mt-1 text-zinc-700">從語言學習延伸至影音科技與創作工具，打造沉浸式知識體驗。</p>
            </li>
          </ol>
        </section>

        {/* 創辦人：卡片 + 標籤 */}
        <section className="rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-gray-900">創辦人介紹</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">N</div>
                <div>
                  <p className="font-semibold text-gray-900">Neo</p>
                  <p className="text-sm text-zinc-600">Founder</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-700 leading-relaxed">專注於語言、文化與 AI 的融合應用與產品設計。</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-zinc-300 px-2.5 h-7 text-xs text-zinc-700">Language</span>
                <span className="inline-flex items-center rounded-full border border-zinc-300 px-2.5 h-7 text-xs text-zinc-700">Culture</span>
                <span className="inline-flex items-center rounded-full border border-zinc-300 px-2.5 h-7 text-xs text-zinc-700">AI</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


