export default function AboutPage() {
  return (
    <div className="container-default py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">關於我們</h1>
      <div className="mt-8 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">公司使命</h2>
          <div className="mt-4 space-y-3 text-zinc-700 leading-relaxed">
            <p>We believe culture is more than language — it’s a way of thinking.</p>
            <p>我們相信文化不只是語言，更是一種思維方式。</p>
            <p>透過科技，我們讓世界更容易理解亞洲的故事。</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">公司故事</h2>
          <div className="mt-4 space-y-4 text-zinc-700 leading-relaxed">
            {/* 可替換為實際時間軸或段落敘述 */}
            <p>
              ForYou Culture & Tech 成立於 2025 年，專注於結合語言教育、文化內容與 AI 技術，打造創新學習體驗。
            </p>
            <p>
              我們從語言學習出發，延伸至影音科技與創作工具，期望讓知識與文化的傳遞更有效率、更具沉浸感。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">創辦人介紹</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* 佔位：可換成實際人物資料與照片 */}
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
                <div className="h-40 bg-zinc-100 flex items-center justify-center text-zinc-500">Photo Placeholder</div>
                <div className="p-5">
                  <p className="font-semibold text-gray-900">創辦人 {i}</p>
                  <p className="mt-1 text-sm text-zinc-700">簡短介紹文字，包含背景、願景與專長領域。</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}


