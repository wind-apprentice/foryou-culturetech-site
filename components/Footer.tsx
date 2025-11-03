export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200/60 bg-white">
      <div className="container-default py-10 text-sm text-zinc-600">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>© 2025 ForYou Culture & Tech Co., Ltd.</p>
          <a href="mailto:contact@foryouculturetech.com" className="text-brand-red hover:opacity-80 transition">
            contact@foryouculturetech.com
          </a>
        </div>
      </div>
    </footer>
  )
}


