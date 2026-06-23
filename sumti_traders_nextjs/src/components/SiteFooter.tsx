'use client'

import React from 'react'
import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: '700px', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat' }} aria-hidden="true" />
      <div className="grid" style={{ position: 'relative' }}>
        <div className="lockup">
          <div className="name">Sumti <em style={{ fontStyle: 'italic' }}>Traders</em></div>
          <div className="sub">Wholesale · Chennai · Since 1970</div>
          <p>Gold covering jewellery, made for the Indian retail floor since the 1970s. Three houses: First Touch, Swarnika, FT.</p>
        </div>
        <div>
          <h4>Houses</h4>
          <ul>
            <li><Link href="/houses">First Touch</Link></li>
            <li><Link href="/houses">Swarnika</Link></li>
            <li><Link href="/houses">FT</Link></li>
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li><Link href="/contact">Sowcarpet</Link></li>
            <li><Link href="/contact">T. Nagar</Link></li>
            <li><Link href="/contact">Anna Nagar</Link></li>
          </ul>
        </div>
        <div>
          <h4>Atelier</h4>
          <ul>
            <li><Link href="/about">The story</Link></li>
            <li><Link href="/catalogue">Catalogue</Link></li>
            <li><Link href="/contact">Wholesale desk</Link></li>
            <li><Link href="/contact">Press</Link></li>
          </ul>
        </div>
      </div>
      <div className="legal" style={{ position: 'relative' }}>
        <span>© 2026 Sumti Traders · Chennai</span>
        <span className="hidden md:inline">Empowering 10,000+ retail partners across India</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  )
}
