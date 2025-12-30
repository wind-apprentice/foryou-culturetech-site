export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200/60 bg-white">
      <div className="container-default py-10">
        <div className="flex flex-col gap-4 text-sm text-zinc-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="font-medium text-gray-900">福語文化有限公司</p>
              <p>© 2025 ForYou Mandarin Co., Ltd.</p>
            </div>
            <a href="mailto:contact@foryouculturetech.com" className="text-brand-red hover:opacity-80 transition">
              contact@foryouculturetech.com
            </a>
          </div>
          <p className="text-zinc-500">台北市和平東路一段6號11樓</p>
        </div>
      </div>
    </footer>
  )
}


