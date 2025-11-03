'use client'

import { useEffect, useState } from 'react'

function getCookie(name: string) {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : null
}

export default function LanguageToggle() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh')

  useEffect(() => {
    const current = (getCookie('lang') as 'zh' | 'en') || 'zh'
    setLang(current)
  }, [])

  const setLanguage = (value: 'zh' | 'en') => {
    if (typeof document === 'undefined') return
    document.cookie = `lang=${value}; path=/; max-age=31536000`
    setLang(value)
    window.location.reload()
  }

  return (
    <div className="inline-flex rounded-full border border-zinc-300 bg-white/80 backdrop-blur overflow-hidden text-xs">
      <button
        type="button"
        onClick={() => setLanguage('zh')}
        className={`px-3 h-8 ${lang === 'zh' ? 'bg-zinc-100 text-gray-900' : 'text-zinc-600 hover:bg-zinc-50'}`}
      >中文</button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-3 h-8 ${lang === 'en' ? 'bg-zinc-100 text-gray-900' : 'text-zinc-600 hover:bg-zinc-50'}`}
      >EN</button>
    </div>
  )
}


