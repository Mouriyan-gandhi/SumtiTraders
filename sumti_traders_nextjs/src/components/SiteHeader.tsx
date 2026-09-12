'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PAGES = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'brands', label: 'Our Houses', href: '/houses' },
  { id: 'catalogue', label: 'Catalogue', href: '/catalogue' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="logo">
        <span className="display" style={{ fontSize: 26, letterSpacing: '.04em', textTransform: 'none' }}>Sumti</span>
        <em className="display" style={{ fontStyle: 'italic', fontSize: 26, letterSpacing: '.02em', textTransform: 'none' }}>Traders</em>
        <span className="est" style={{ display: 'none' }}>· SINCE 1970</span>
        <span className="est hidden md:inline">·  SINCE 1970</span>
      </Link>

      <nav className="hidden md:flex" style={{ gap: 28 }}>
        {PAGES.map(p => (
          <Link
            key={p.id}
            href={p.href}
            className={isActive(p.href) ? 'active' : ''}
            style={{
              fontFamily: 'var(--f-caps)',
              fontSize: 11,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: isActive(p.href) ? 'var(--ink)' : 'var(--ink-soft)',
              cursor: 'pointer',
              transition: 'color .2s',
              position: 'relative',
              padding: '4px 0',
            }}
          >
            {p.label}
            {isActive(p.href) && (
              <span style={{
                position: 'absolute', bottom: -2, left: 0, right: 0,
                height: 1, background: 'var(--gold)',
              }} />
            )}
          </Link>
        ))}
      </nav>

      <div className="right">
        <Link
          href="/contact"
          className="btn hidden md:inline-flex"
          style={{ padding: '10px 14px', fontSize: 10 }}
        >
          Wholesale →
        </Link>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 4 }}
        >
          <span style={{ width: 22, height: 1, background: 'var(--ink)', display: 'block' }} />
          <span style={{ width: 22, height: 1, background: 'var(--ink)', display: 'block' }} />
          <span style={{ width: 22, height: 1, background: 'var(--ink)', display: 'block' }} />
        </button>
      </div>

      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--cream-paper)',
          borderBottom: '1px solid rgba(138,109,42,.2)',
          padding: '12px 22px 20px',
          display: 'flex', flexDirection: 'column', gap: 10,
          zIndex: 40,
        }}>
          {PAGES.map(p => (
            <Link
              key={p.id}
              href={p.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--f-caps)', fontSize: 12, letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: isActive(p.href) ? 'var(--ink)' : 'var(--ink-soft)',
                padding: '8px 0',
                borderBottom: '1px solid rgba(138,109,42,.15)',
                display: 'block',
              }}
            >
              {p.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn solid"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: 8, textAlign: 'center' }}
          >
            Wholesale enquiry →
          </Link>
        </div>
      )}
    </header>
  )
}
