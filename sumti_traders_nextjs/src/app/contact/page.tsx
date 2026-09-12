'use client'

import React, { useState } from 'react'
import SiteLayout from '@/components/SiteLayout'
import { TinyDiamond, Divider, Ornament } from '@/components/Patterns'

const WHOLESALE_EMAIL = 'sumtitraders@gmail.com'
const WHOLESALE_WHATSAPP_INTL = '919344761821'
const WHOLESALE_WHATSAPP_DISPLAY = '+91 93447 61821'
const GOOGLE_LISTING_URL = 'https://share.google/NGklS60WLQc9htghf'
const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir//SUMTI+TRADERS+(FT+CODE),+37%2F1,+Perumal+Mudali+St,+Sowcarpet,+George+Town,+Chennai,+Tamil+Nadu+600079/@12.8319488,80.0391168,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a526f56f4c67717:0x95ac040058c86a95!2m2!1d80.2794522!2d13.0903519'
const INSTAGRAM_URL = 'https://www.instagram.com/ft_swarnika_code_manufacturer'

type Unit = {
  id: string
  kind: 'branch' | 'warehouse'
  name: string
  sub: string
  addr: string
  hours?: string
  note: string
  estd: string
  mapsUrl: string
  listingUrl?: string
}

const UNITS: Unit[] = [
  {
    id: 'sowcarpet-main',
    kind: 'branch',
    name: 'Sowcarpet Head Office',
    sub: 'Main branch & wholesale counter',
    addr: '37/1, Perumal Mudali Street\nSowcarpet, George Town\nChennai, Tamil Nadu 600 079',
    hours: 'Mon to Sat · 10:00 to 20:00',
    note: 'Walk-in wholesale. Full range of First Touch, Swarnika and FT under one roof. This is the address that ships to every Sumti retailer in India.',
    estd: '1970',
    mapsUrl: GOOGLE_MAPS_URL,
    listingUrl: GOOGLE_LISTING_URL,
  },
  {
    id: 'sowcarpet-warehouse-2',
    kind: 'warehouse',
    name: 'Sowcarpet Warehouse II',
    sub: 'Overflow stock, dispatch bench',
    addr: 'Perumal Mudali Street\nSowcarpet, George Town\nChennai 600 079',
    note: 'Second Sowcarpet unit. Bulk stock, dispatch and quality-check bench. Not open to walk-ins; accessible via the head office.',
    estd: 'Sowcarpet · Unit II',
    mapsUrl: GOOGLE_MAPS_URL,
  },
  {
    id: 'sowcarpet-warehouse-3',
    kind: 'warehouse',
    name: 'Sowcarpet Warehouse III',
    sub: 'Karigar workbench, forming line',
    addr: 'Perumal Mudali Street\nSowcarpet, George Town\nChennai 600 079',
    note: 'Third Sowcarpet unit. Karigar workbench and forming line. Not open to walk-ins; accessible via the head office.',
    estd: 'Sowcarpet · Unit III',
    mapsUrl: GOOGLE_MAPS_URL,
  },
]

type FormValues = {
  name: string
  store: string
  city: string
  phone: string
  email: string
  message: string
}

function Field({
  label,
  name,
  type = 'text',
  autoComplete,
  wide,
  value,
  onChange,
  required,
}: {
  label: string
  name: keyof FormValues
  type?: string
  autoComplete?: string
  wide?: boolean
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  const id = `field-${name}`
  return (
    <div style={{ gridColumn: wide ? '1 / -1' : 'auto' }}>
      <label htmlFor={id} style={{ display: 'block' }}>
        <div className="eyebrow" style={{ fontSize: 9, marginBottom: 6 }}>
          {label}{required && <span aria-hidden="true"> *</span>}
        </div>
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%', background: 'transparent',
          borderTop: 0, borderLeft: 0, borderRight: 0,
          borderBottom: '1px solid rgba(26,22,18,.4)',
          padding: '8px 0',
          fontFamily: 'var(--f-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--ink)',
          outline: 'none',
        }}
      />
    </div>
  )
}

function InstagramGlyph({ color = 'currentColor', size = 14 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill={color} stroke="none" />
    </svg>
  )
}

function WhatsAppGlyph({ color = 'currentColor', size = 14 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20 L5.4 15.6 A8 8 0 1 1 8.4 18.6 L4 20 Z" />
      <path d="M9 10 c0 3 2 5 5 5 l1.5 -0.5 l1 1.5 l-1 1 c-3.5 1 -8 -3.5 -7 -7 l1 -1 l1.5 1 l-0.5 1.5 c-0.5 0 -1.5 0.5 -1.5 -0.5 z" fill={color} stroke="none" opacity=".85" />
    </svg>
  )
}

const SOWCARPET_PINS = [
  { id: 'sowcarpet-main',       x: 380, y: 260, name: 'Head Office',   kind: 'branch',    est: '1970' },
  { id: 'sowcarpet-warehouse-2', x: 300, y: 310, name: 'Warehouse II', kind: 'warehouse', est: 'Unit II' },
  { id: 'sowcarpet-warehouse-3', x: 460, y: 300, name: 'Warehouse III', kind: 'warehouse', est: 'Unit III' },
]

function SowcarpetMap() {
  const [active, setActive] = useState<typeof SOWCARPET_PINS[number] | null>(null)
  return (
    <section style={{
      padding: 'clamp(40px, 5vw, 70px) clamp(22px, 4vw, 60px)',
      background: 'var(--cream-warm)',
      position: 'relative',
    }}>
      <div className="sect-head fadeup">
        <div className="left">
          <div className="eyebrow"><span>On the map</span></div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            All three, <em>walking distance.</em>
          </h2>
        </div>
        <div className="right">
          <p className="body">Our head office is on Perumal Mudali Street in Sowcarpet. The two warehouses sit within a two-minute walk. Click any pin to open in Google Maps.</p>
        </div>
      </div>

      <div className="fadeup fadeup-delay-1" style={{
        aspectRatio: '4 / 3',
        maxHeight: 620,
        background: 'var(--cream-paper)',
        border: '1px solid rgba(138,109,42,.25)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <svg viewBox="0 0 800 550" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} aria-label="Abstract map of Sowcarpet showing the Sumti Traders head office and two warehouses">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="0.6" fill="#8a6d2a" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="800" height="550" fill="url(#dots)" />
          {/* abstract lanes suggesting Perumal Mudali St + neighbouring lanes */}
          <g stroke="#8a6d2a" strokeWidth="1" opacity="0.5" fill="none">
            <path d="M60 260 Q220 250 380 260 T760 275" />
            <path d="M60 320 Q220 305 380 315 T760 325" />
            <path d="M280 60 Q290 220 300 320 Q310 460 320 540" />
            <path d="M420 60 Q430 220 460 320 Q470 460 480 540" />
          </g>
          <text x="400" y="120" textAnchor="middle" fill="#8a6d2a" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="18" opacity="0.75">Perumal Mudali Street</text>
          <text x="40" y="52" fill="#1a1612" fontFamily="Manrope" fontSize="10" letterSpacing="3">SOWCARPET</text>
          <text x="40" y="74" fill="#8a6d2a" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="18">George Town, Chennai</text>

          {SOWCARPET_PINS.map(p => {
            const isActive = active?.id === p.id
            const isBranch = p.kind === 'branch'
            return (
              <g key={p.id} style={{ cursor: 'pointer' }}
                 onMouseEnter={() => setActive(p)}
                 onMouseLeave={() => setActive(null)}
                 onFocus={() => setActive(p)}
                 onBlur={() => setActive(null)}
                 onClick={() => { window.open(GOOGLE_MAPS_URL, '_blank', 'noopener') }}
                 tabIndex={0}
              >
                <circle cx={p.x} cy={p.y} r={isActive ? 38 : 30} fill="none" stroke="#a3863f" strokeOpacity={isActive ? .6 : .3} style={{ transition: 'all .35s ease' }} />
                <circle cx={p.x} cy={p.y} r={isActive ? 26 : 22} fill={isBranch ? '#1a1612' : '#faf3e0'} stroke={isBranch ? 'none' : '#1a1612'} strokeWidth={isBranch ? 0 : 1.2} style={{ transition: 'r .3s ease' }} />
                <circle cx={p.x} cy={p.y} r={isActive ? 18 : 14} fill="none" stroke="#a3863f" style={{ transition: 'r .3s ease' }} />
                <text x={p.x} y={p.y + 5} textAnchor="middle" fill={isBranch ? '#faf3e0' : '#1a1612'} fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="14">ST</text>
                <text x={p.x} y={p.y + 52} textAnchor="middle" fill="#1a1612" fontFamily="Manrope" fontSize="11" letterSpacing="2">{p.name.toUpperCase()}</text>
                <text x={p.x} y={p.y + 68} textAnchor="middle" fill="#8a6d2a" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="12">{p.est}</text>
              </g>
            )
          })}
        </svg>

        <div
          aria-live="polite"
          style={{
            position: 'absolute',
            left: 22,
            bottom: 22,
            maxWidth: 320,
            padding: '18px 22px',
            background: 'var(--cream-paper)',
            border: '1px solid rgba(138,109,42,.35)',
            transform: active ? 'translateY(0)' : 'translateY(20px)',
            opacity: active ? 1 : 0,
            transition: 'opacity .35s ease, transform .35s ease',
            pointerEvents: 'none',
          }}
        >
          {active && (
            <>
              <div className="eyebrow" style={{ fontSize: 9, color: 'var(--gold)' }}>{active.est}</div>
              <h3 className="display" style={{ fontSize: 24, marginTop: 6, lineHeight: 1 }}>
                {active.name}
              </h3>
              <div className="eyebrow" style={{ fontSize: 9, marginTop: 10, color: 'var(--ink-muted)' }}>Click pin to open in Maps</div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [interested, setInterested] = useState(['All houses'])
  const [values, setValues] = useState<FormValues>({ name: '', store: '', city: '', phone: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const setField = (k: keyof FormValues) => (v: string) => setValues(prev => ({ ...prev, [k]: v }))

  const toggleInterest = (h: string) => {
    setInterested(prev => prev.includes(h) ? prev.filter(x => x !== h) : [...prev, h])
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSending(true)
    try {
      const honey = (e.currentTarget.elements.namedItem('company_website') as HTMLInputElement | null)?.value || ''
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, interested, company_website: honey }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) {
        throw new Error(data?.error || 'Could not send your enquiry. Please try again in a moment.')
      }
      setSubmitted(true)
      setValues({ name: '', store: '', city: '', phone: '', email: '', message: '' })
      setInterested(['All houses'])
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Could not send your enquiry.'
      setError(msg)
    } finally {
      setSending(false)
    }
  }

  return (
    <SiteLayout>
      {/* HERO */}
      <section style={{
        padding: 'clamp(40px, 5vw, 70px) clamp(22px, 4vw, 60px) clamp(40px, 5vw, 60px)',
        background: 'var(--cream-paper)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="fadeup relative grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-8 md:gap-14 items-end">
          <div>
            <div className="lead-eyebrow">Visit · Write · Order</div>
            <h1 className="display" style={{ fontSize: 'clamp(46px, 7vw, 108px)', lineHeight: 0.92, marginTop: 16 }}>
              One address.<br /><em>Everything</em> Sumti.
            </h1>
            <p className="thin" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', fontStyle: 'italic', color: 'var(--ink-soft)', marginTop: 22, maxWidth: 560, lineHeight: 1.4 }}>
              Walk in to our Sowcarpet head office, message us on WhatsApp, or open a wholesale account from anywhere in India. We answer.
            </p>
          </div>

          {/* Wholesale desk quick-reach panel */}
          <div className="hidden md:block" style={{
            border: '1px solid rgba(138,109,42,.25)',
            background: 'rgba(255,255,255,.4)',
            padding: '24px 26px',
          }}>
            <div className="eyebrow" style={{ fontSize: 9, color: 'var(--gold)' }}>Wholesale Desk</div>
            <a href={`mailto:${WHOLESALE_EMAIL}`} className="display" style={{ display: 'block', fontSize: 22, marginTop: 8, fontStyle: 'italic', color: 'var(--ink)' }}>{WHOLESALE_EMAIL}</a>
            <a href={`https://wa.me/${WHOLESALE_WHATSAPP_INTL}`} target="_blank" rel="noopener noreferrer" className="display" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 18, marginTop: 6, fontStyle: 'italic', color: 'var(--gold)' }}>
              <WhatsAppGlyph color="#8a6d2a" /> {WHOLESALE_WHATSAPP_DISPLAY}
            </a>

            <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid rgba(138,109,42,.2)' }}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 10, color: 'var(--ink)', letterSpacing: '.28em' }}>
                <InstagramGlyph color="#1a1612" /> On Instagram
              </a>
              <div className="body-sm" style={{ fontSize: 11, marginTop: 6, color: 'var(--ink-muted)' }}>For FT &amp; Swarnika drops</div>
            </div>

            <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(138,109,42,.2)' }}>
              <div className="eyebrow" style={{ fontSize: 9, marginBottom: 8 }}>Sowcarpet units</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {UNITS.map(u => (
                  <a key={u.id} href={`#${u.id}`} className="body-sm" style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '6px 0', fontSize: 12,
                    borderBottom: '1px solid rgba(138,109,42,.12)',
                  }}>
                    <span style={{ color: 'var(--ink)' }}>{u.name}</span>
                    <span style={{ color: 'var(--ink-muted)', letterSpacing: '.15em', textTransform: 'uppercase', fontSize: 9 }}>{u.kind === 'branch' ? 'Branch' : 'Warehouse'}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIT CARDS */}
      <section style={{
        padding: 'clamp(40px, 5vw, 50px) clamp(22px, 4vw, 60px) clamp(60px, 8vw, 100px)',
        background: 'var(--cream-base)',
        position: 'relative',
      }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {UNITS.map((u, i) => {
            const isBranch = u.kind === 'branch'
            return (
              <div key={u.id} id={u.id} className={`fadeup ${i > 0 ? `fadeup-delay-${i}` : ''}`} style={{
                background: isBranch ? 'var(--cream-paper)' : 'var(--cream-warm)',
                padding: '36px 34px',
                border: `1px solid rgba(138,109,42,${isBranch ? '.28' : '.18'})`,
                position: 'relative',
                scrollMarginTop: 80,
                display: 'flex', flexDirection: 'column',
              }}>
                <div className="eyebrow" style={{ color: 'var(--rust)', letterSpacing: '.3em', fontSize: 10 }}>{isBranch ? 'Head Office · Since ' + u.estd : u.estd}</div>
                <h3 className="display" style={{ fontSize: isBranch ? 32 : 26, marginTop: 10, lineHeight: 1.05 }}>
                  {u.name.split(' ').map((w, wi, arr) =>
                    wi === arr.length - 1 ? <em key={wi}>{w}</em> : <span key={wi}>{w} </span>
                  )}
                </h3>
                <p className="body-sm" style={{ marginTop: 6, color: 'var(--ink-muted)', fontSize: 12 }}>{u.sub}</p>

                <p className="body-sm" style={{ marginTop: 22, whiteSpace: 'pre-line', lineHeight: 1.55, color: 'var(--ink-soft)' }}>{u.addr}</p>

                {isBranch && (
                  <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(138,109,42,.2)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <a href={`https://wa.me/${WHOLESALE_WHATSAPP_INTL}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontStyle: 'italic', fontFamily: 'var(--f-display)', color: 'var(--ink)' }}>
                      <WhatsAppGlyph color="#1a1612" /> {WHOLESALE_WHATSAPP_DISPLAY}
                    </a>
                    <span className="body-sm" style={{ fontSize: 12, color: 'var(--ink-muted)' }}>{u.hours}</span>
                  </div>
                )}

                <div style={{ marginTop: 'auto', paddingTop: 24, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  {u.listingUrl && (
                    <a href={u.listingUrl} target="_blank" rel="noopener noreferrer" className="eyebrow" style={{ color: 'var(--rust)', textDecoration: 'none', fontSize: 10 }}>
                      Google listing →
                    </a>
                  )}
                  <a href={u.mapsUrl} target="_blank" rel="noopener noreferrer" className="eyebrow" style={{ color: 'var(--ink)', textDecoration: 'none', fontSize: 10 }}>
                    Directions →
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* INTERACTIVE MAP */}
      <SowcarpetMap />

      {/* WHOLESALE FORM */}
      <section id="wholesale" style={{
        padding: 'clamp(60px, 8vw, 110px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-paper)',
        position: 'relative',
        scrollMarginTop: 80,
      }}>
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-[60px]">
          <div>
            <div className="eyebrow"><span>Wholesale Enquiry</span></div>
            <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 0.95, marginTop: 14 }}>
              Open an<br /><em>account</em>.
            </h2>
            <p className="body" style={{ marginTop: 22, fontSize: 14, lineHeight: 1.7 }}>
              For retailers, distributors, and bulk buyers. Tell us a little about your store, and our wholesale desk will write back within forty-eight hours.
            </p>
            <Divider />
            <div style={{ marginTop: 16 }}>
              <div className="eyebrow" style={{ fontSize: 9 }}>Wholesale Desk</div>
              <a href={`mailto:${WHOLESALE_EMAIL}`} className="display" style={{ display: 'block', fontSize: 22, marginTop: 6, fontStyle: 'italic', color: 'var(--ink)' }}>{WHOLESALE_EMAIL}</a>
              <a href={`https://wa.me/${WHOLESALE_WHATSAPP_INTL}`} target="_blank" rel="noopener noreferrer" className="display" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 20, marginTop: 6, fontStyle: 'italic', color: 'var(--ink)' }}>
                <WhatsAppGlyph color="#1a1612" /> {WHOLESALE_WHATSAPP_DISPLAY}
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 14, fontSize: 10, color: 'var(--ink)', letterSpacing: '.28em' }}>
                <InstagramGlyph color="#1a1612" /> On Instagram (FT &amp; Swarnika)
              </a>
            </div>
          </div>

          <div className="fadeup fadeup-delay-1" style={{ background: 'var(--cream-warm)', padding: 40, border: '1px solid rgba(138,109,42,.2)' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, opacity: 0 }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Your name" name="name" required autoComplete="name" value={values.name} onChange={setField('name')} />
                  <Field label="Store / Brand name" name="store" autoComplete="organization" value={values.store} onChange={setField('store')} />
                  <Field label="City, State" name="city" autoComplete="address-level2" value={values.city} onChange={setField('city')} />
                  <Field label="Phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={setField('phone')} />
                </div>
                <div style={{ marginTop: 18 }}>
                  <Field label="Email" name="email" type="email" autoComplete="email" required wide value={values.email} onChange={setField('email')} />
                </div>
                <div style={{ marginTop: 18 }}>
                  <div className="eyebrow" style={{ fontSize: 9, marginBottom: 8 }}>Interested in</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {['First Touch', 'Swarnika', 'FT', 'All houses'].map(h => (
                      <label key={h} className="chip" style={{ cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          style={{ marginRight: 6 }}
                          checked={interested.includes(h)}
                          onChange={() => toggleInterest(h)}
                        />
                        {h}
                      </label>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: 20 }}>
                  <label htmlFor="field-message" className="eyebrow" style={{ display: 'block', fontSize: 9, marginBottom: 8 }}>Message</label>
                  <textarea
                    id="field-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your store…"
                    value={values.message}
                    onChange={e => setField('message')(e.target.value)}
                    style={{
                      width: '100%', resize: 'vertical',
                      background: 'var(--cream-paper)', border: '1px solid rgba(138,109,42,.3)',
                      padding: 14, fontFamily: 'var(--f-body)', fontSize: 13, color: 'var(--ink)',
                      outline: 'none',
                    }}
                  />
                </div>

                {error && (
                  <div role="alert" style={{ marginTop: 18, padding: '10px 14px', background: 'rgba(122,58,42,.08)', borderLeft: '2px solid #7a3a2a', color: '#7a3a2a', fontSize: 13 }}>
                    {error}
                  </div>
                )}

                <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
                  <p className="body-sm" style={{ maxWidth: 260, fontSize: 11 }}>By submitting, you allow our wholesale desk to write back at the email above.</p>
                  <button type="submit" className="btn solid" disabled={sending} aria-busy={sending}>
                    {sending ? 'Sending…' : <>Submit enquiry <span className="arr">→</span></>}
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <Ornament size={80} />
                <h3 className="display" style={{ fontSize: 36, marginTop: 18 }}>Thank <em>you</em>.</h3>
                <p className="body" style={{ marginTop: 14, maxWidth: 360, marginLeft: 'auto', marginRight: 'auto' }}>Your enquiry has reached our Sowcarpet desk. Expect a reply within forty-eight hours.</p>
                <div style={{ marginTop: 22 }}>
                  <button className="btn" onClick={() => setSubmitted(false)}>Send another</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
