export default function ContactPage() {
  return (
    <div className="container-default py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">聯絡我們</h1>

      <p className="mt-4 text-zinc-700">公司信箱：
        <a href="mailto:contact@foryouculturetech.com" className="ml-1 text-brand-red hover:opacity-80 transition">contact@foryouculturetech.com</a>
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 聯絡表單：可改為實際 Formspree endpoint */}
        <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700">姓名</label>
            <input name="name" type="text" required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold" placeholder="您的姓名" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">Email</label>
            <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold" placeholder="name@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700">訊息內容</label>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold" placeholder="想說的話..." />
          </div>
          <button type="submit" className="inline-flex h-11 items-center rounded-full bg-brand-red px-6 text-white font-medium shadow-sm hover:opacity-90">送出</button>
        </form>

        {/* 地圖或背景圖佔位 */}
        <div className="h-64 lg:h-full rounded-2xl bg-gradient-to-br from-brand-gold/25 to-brand-red/15 flex items-center justify-center text-zinc-600">
          地圖 / 圖片區塊（可置換）
        </div>
      </div>
    </div>
  )
}


