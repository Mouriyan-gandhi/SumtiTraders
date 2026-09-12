'use client'

import { useEffect, useState } from 'react'

const NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999').replace(/\D/g, '')
const MESSAGE = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  'Hello Sumti Traders, I would like to enquire about your wholesale range.'

export default function WhatsAppBubble() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 900)
    return () => window.clearTimeout(t)
  }, [])

  const href = `https://wa.me/${NUMBER}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`wa-bubble ${visible ? 'in' : ''}`}
    >
      <span className="wa-label">WhatsApp us</span>
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.42 1.27 4.86L2 22l5.34-1.4a9.94 9.94 0 004.7 1.2h.01c5.52 0 10-4.48 10-10s-4.5-9.8-10.01-9.8zm5.83 14.15c-.25.7-1.46 1.35-2.02 1.42-.51.06-1.16.09-1.87-.12-.43-.13-.99-.31-1.7-.62-2.99-1.29-4.94-4.3-5.09-4.5-.15-.19-1.22-1.62-1.22-3.09s.77-2.2 1.05-2.5c.28-.31.61-.39.81-.39h.58c.19 0 .45-.07.7.53.25.62.87 2.13.94 2.28.07.15.12.34.02.53-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.15.29.68 1.13 1.47 1.83 1.01.91 1.86 1.19 2.14 1.33.29.15.45.13.62-.07.17-.2.72-.83.91-1.12.19-.29.38-.24.64-.14.26.09 1.65.78 1.94.92.28.14.47.21.54.32.07.12.07.66-.19 1.35z"
        />
      </svg>
    </a>
  )
}
