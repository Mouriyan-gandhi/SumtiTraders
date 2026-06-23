'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PAGES = [
  { id: 'inventory', label: 'Inventory', href: '/' },
]

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="logo">
        <span className="display" style={{ fontSize: 26, letterSpacing: '.04em', textTransform: 'none' }}>Sumti</span>
        <em className="display" style={{ fontStyle: 'italic', fontSize: 26, letterSpacing: '.02em', textTransform: 'none', color: 'var(--ink-soft)' }}>Admin Portal</em>
      </div>

      <nav className="hidden md:flex" style={{ gap: 28 }}>
        {PAGES.map(p => (
          <Link
            key={p.id}
            href={p.href}
            className="active"
            style={{
              fontFamily: 'var(--f-caps)',
              fontSize: 11,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              cursor: 'pointer',
              position: 'relative',
              padding: '4px 0',
            }}
          >
            {p.label}
          </Link>
        ))}
      </nav>

      <div className="right">
        <span className="lang hidden md:inline">STAFF ACCESS</span>
      </div>
    </header>
  )
}
