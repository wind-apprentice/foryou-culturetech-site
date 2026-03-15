'use client'

import { useState } from 'react'

type Lang = 'en' | 'zh'

const messages: Record<Lang, string> = {
  zh: '請寄信至 contact@foryouculturetech.com 申請刪除帳號，我們將在 3 個工作天內移除您的所有學習紀錄與個資。',
  en: 'Please send an email to contact@foryouculturetech.com to request account deletion. We will remove all your learning records and personal data within 3 business days.',
}

const buttonLabels: Record<Lang, string> = {
  zh: '刪除帳號要求',
  en: 'Request Account Deletion',
}

const closeLabels: Record<Lang, string> = {
  zh: '關閉',
  en: 'Close',
}

export default function DeleteAccountModal({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-sm text-gray-600 underline underline-offset-4 hover:text-gray-900"
      >
        {buttonLabels[lang]}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-account-modal-title"
        >
          <div
            className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="delete-account-modal-title"
              className="text-lg font-semibold text-gray-900"
            >
              {buttonLabels[lang]}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {messages[lang].split('contact@foryouculturetech.com').map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <a
                      href="mailto:contact@foryouculturetech.com"
                      className="text-sky-600 hover:text-sky-700 underline underline-offset-4"
                    >
                      contact@foryouculturetech.com
                    </a>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
              >
                {closeLabels[lang]}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
