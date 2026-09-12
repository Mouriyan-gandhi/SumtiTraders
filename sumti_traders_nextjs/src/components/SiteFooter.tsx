'use client'

import React from 'react'
import Link from 'next/link'

const WHOLESALE_EMAIL = 'sumtitraders@gmail.com'
const WHATSAPP_INTL = '919344761821'
const WHATSAPP_DISPLAY = '+91 93447 61821'
const INSTAGRAM_URL = 'https://www.instagram.com/ft_swarnika_code_manufacturer'

function IgGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}
function WaGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.3A10 10 0 1 0 12 2Zm5.9 14.2c-.3.7-1.5 1.3-2.1 1.4-.5.1-1.2.1-1.9-.1a17 17 0 0 1-1.7-.6c-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4-.1.7.5.3.6.9 2.1 1 2.3.1.2.1.3 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.7 1.1 1.5 1.8 1 .9 1.9 1.2 2.1 1.3.3.2.4.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1s1.6.8 1.9.9.4.2.5.3c.1.1.1.7-.2 1.3Z" />
    </svg>
  )
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div style={{ position: 'absolute', inset: 0, opacity: .03, backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: '700px', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat' }} aria-hidden="true" />
      <div className="grid" style={{ position: 'relative' }}>
        <div className="lockup">
          <div className="name">Sumti <em style={{ fontStyle: 'italic' }}>Traders</em></div>
          <div className="sub">Wholesale · Sowcarpet, Chennai · Since 1970</div>
          <p>Gold covering jewellery, made for the Indian retail floor since the 1970s. Three houses: First Touch, Swarnika, FT.</p>
          <div style={{ marginTop: 18, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'inherit', textDecoration: 'none' }}>
              <IgGlyph /> Instagram
            </a>
            <a href={`https://wa.me/${WHATSAPP_INTL}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'inherit', textDecoration: 'none' }}>
              <WaGlyph /> WhatsApp
            </a>
          </div>
        </div>
        <div>
          <h4>Houses</h4>
          <ul>
            <li><Link href="/houses#firsttouch">First Touch</Link></li>
            <li><Link href="/houses#swarnika">Swarnika</Link></li>
            <li><Link href="/houses#ft">FT</Link></li>
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li><Link href="/contact#sowcarpet-main">Sowcarpet Head Office</Link></li>
            <li><Link href="/contact#sowcarpet-warehouse-2">Warehouse II</Link></li>
            <li><Link href="/contact#sowcarpet-warehouse-3">Warehouse III</Link></li>
          </ul>
        </div>
        <div>
          <h4>Wholesale Desk</h4>
          <ul>
            <li><a href={`mailto:${WHOLESALE_EMAIL}`}>{WHOLESALE_EMAIL}</a></li>
            <li><a href={`https://wa.me/${WHATSAPP_INTL}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a></li>
            <li><Link href="/contact#wholesale">Open an account</Link></li>
          </ul>
        </div>
      </div>
      <div className="legal" style={{ position: 'relative' }}>
        <span>© 2026 Sumti Traders · Sowcarpet, Chennai</span>
        <span className="hidden md:inline">Empowering 10,000+ retail partners across India</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  )
}
