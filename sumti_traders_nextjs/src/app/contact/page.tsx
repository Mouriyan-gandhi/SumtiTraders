'use client'

import React, { useState } from 'react'
import SiteLayout from '@/components/SiteLayout'
import { TinyDiamond, Divider, Ornament } from '@/components/Patterns'

const BRANCHES = [
  {
    id: 'sowcarpet',
    name: 'Sowcarpet',
    sub: 'The Mother Branch',
    addr: '142, Mint Street\nSowcarpet, Chennai 600 079',
    phone: '+91 44 2538 1970',
    hours: 'Mon — Sat · 10:00 – 20:00',
    note: 'Where Sumti began in 1970. Walk-in wholesale; the workbench is upstairs.',
    estd: '1970',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sumti+Traders+Sowcarpet+Chennai',
  },
  {
    id: 't-nagar',
    name: 'T. Nagar',
    sub: 'The Retail Heart',
    addr: '28, Ranganathan Street\nT. Nagar, Chennai 600 017',
    phone: '+91 44 2434 1995',
    hours: 'Mon — Sat · 10:00 – 21:00',
    note: "Set in Chennai's busiest retail belt. Full catalogue display.",
    estd: '1995',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sumti+Traders+T+Nagar+Chennai',
  },
  {
    id: 'anna-nagar',
    name: 'Anna Nagar',
    sub: 'The New Atelier',
    addr: '5, II Avenue\nAnna Nagar West, Chennai 600 040',
    phone: '+91 44 2628 2015',
    hours: 'Mon — Sat · 10:00 – 20:30',
    note: 'Our newest branch — open since 2015, the FT flagship floor.',
    estd: '2015',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sumti+Traders+Anna+Nagar+Chennai',
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

const MAP_PINS = [
  { id: 'sowcarpet', x: 200, y: 130, name: 'Sowcarpet',  est: '1970', addr: '142, Mint Street\nSowcarpet, Chennai 600 079' },
  { id: 't-nagar',   x: 380, y: 320, name: 'T. Nagar',   est: '1995', addr: '28, Ranganathan Street\nT. Nagar, Chennai 600 017' },
  { id: 'anna-nagar',x: 560, y: 200, name: 'Anna Nagar', est: '2015', addr: '5, II Avenue\nAnna Nagar West, Chennai 600 040' },
]

function ChennaiMap() {
  const [active, setActive] = useState<typeof MAP_PINS[number] | null>(null)
  return (
    <section style={{
      padding: 'clamp(40px, 5vw, 70px) clamp(22px, 4vw, 60px)',
      background: 'var(--cream-warm)',
      position: 'relative',
    }}>
      <div className="sect-head fadeup">
        <div className="left">
          <div className="eyebrow"><span className="snum">N° 02</span> · <span>On the map</span></div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            A map of <em>Chennai.</em>
          </h2>
        </div>
        <div className="right">
          <p className="body">Hover a pin to reveal the branch. Click to open in Google Maps.</p>
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
        <svg viewBox="0 0 800 550" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} aria-label="Abstract map of Chennai showing three Sumti Traders branches">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="0.6" fill="#8a6d2a" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="800" height="550" fill="url(#dots)" />
          <g stroke="#8a6d2a" strokeWidth="0.8" opacity="0.5" fill="none">
            <path d="M0 140 Q200 160 400 130 T800 150" />
            <path d="M0 300 Q300 260 500 320 T800 280" />
            <path d="M0 440 Q220 400 480 460 T800 420" />
            <path d="M160 0 Q180 280 210 550" />
            <path d="M420 0 Q460 260 440 550" />
            <path d="M640 0 Q610 280 660 550" />
          </g>
          <path d="M720 0 Q700 280 760 550 L800 550 L800 0 Z" fill="#8a6d2a" opacity="0.06" />
          <text x="750" y="270" fill="#8a6d2a" fontFamily="Cormorant Garamond" fontSize="12" fontStyle="italic" opacity="0.6" transform="rotate(-90 750 270)">Bay of Bengal</text>
          <text x="30" y="50" fill="#1a1612" fontFamily="Manrope" fontSize="10" letterSpacing="3">CHENNAI</text>
          <text x="30" y="72" fill="#8a6d2a" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="18">Tamil Nadu, India</text>

          {MAP_PINS.map(p => {
            const isActive = active?.id === p.id
            return (
              <g key={p.id} style={{ cursor: 'pointer' }}
                 onMouseEnter={() => setActive(p)}
                 onMouseLeave={() => setActive(null)}
                 onFocus={() => setActive(p)}
                 onBlur={() => setActive(null)}
                 onClick={() => { window.open(`https://www.google.com/maps/search/?api=1&query=Sumti+Traders+${encodeURIComponent(p.name)}+Chennai`, '_blank', 'noopener') }}
                 tabIndex={0}
              >
                {/* pulse ring */}
                <circle cx={p.x} cy={p.y} r={isActive ? 38 : 30} fill="none" stroke="#a3863f" strokeOpacity={isActive ? .6 : .3} style={{ transition: 'all .35s ease' }} />
                <circle cx={p.x} cy={p.y} r={isActive ? 26 : 22} fill="#1a1612" style={{ transition: 'r .3s ease' }} />
                <circle cx={p.x} cy={p.y} r={isActive ? 18 : 14} fill="none" stroke="#a3863f" style={{ transition: 'r .3s ease' }} />
                <text x={p.x} y={p.y + 5} textAnchor="middle" fill="#faf3e0" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="14">ST</text>
                <text x={p.x} y={p.y + 52} textAnchor="middle" fill="#1a1612" fontFamily="Manrope" fontSize="11" letterSpacing="2">{p.name.toUpperCase()}</text>
                <text x={p.x} y={p.y + 68} textAnchor="middle" fill="#8a6d2a" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="12">est {p.est}</text>
              </g>
            )
          })}
        </svg>

        {/* Info card on hover */}
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
              <div className="eyebrow" style={{ fontSize: 9, color: 'var(--gold)' }}>Est · {active.est}</div>
              <h3 className="display" style={{ fontSize: 24, marginTop: 6, lineHeight: 1 }}>
                {active.name}
              </h3>
              <p className="body-sm" style={{ marginTop: 8, fontSize: 12, whiteSpace: 'pre-line' }}>{active.addr}</p>
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
        <div style={{
          position: 'absolute', right: '-15%', top: '-20%',
          width: '700px', height: '700px',
          backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: .4,
        }} aria-hidden="true" />
        <div className="fadeup relative grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-8 md:gap-14 items-end">
          <div>
            <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><TinyDiamond />&nbsp;<span>Visit · Write · Order</span></div>
            <h1 className="display" style={{ fontSize: 'clamp(46px, 7vw, 108px)', lineHeight: 0.92, marginTop: 16 }}>
              Three branches.<br /><em>One</em> Chennai.
            </h1>
            <p className="thin" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', fontStyle: 'italic', color: 'var(--ink-soft)', marginTop: 22, maxWidth: 560, lineHeight: 1.4 }}>
              Walk in, write to us, or open a wholesale account from anywhere in India. We answer.
            </p>
          </div>

          {/* Right — wholesale desk quick-reach panel */}
          <div className="hidden md:block" style={{
            border: '1px solid rgba(138,109,42,.25)',
            background: 'rgba(255,255,255,.4)',
            padding: '24px 26px',
          }}>
            <div className="eyebrow" style={{ fontSize: 9, color: 'var(--gold)' }}>Wholesale Desk</div>
            <a href="tel:+914425381970" className="display" style={{ display: 'block', fontSize: 24, marginTop: 8, fontStyle: 'italic', color: 'var(--ink)' }}>+91 44 2538 1970</a>
            <a href="mailto:wholesale@sumtitraders.in" className="display" style={{ display: 'block', fontSize: 18, marginTop: 4, fontStyle: 'italic', color: 'var(--gold)' }}>wholesale@sumtitraders.in</a>

            <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid rgba(138,109,42,.2)' }}>
              <div className="eyebrow" style={{ fontSize: 9, marginBottom: 10 }}>Jump to a branch</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {BRANCHES.map(b => (
                  <a key={b.id} href={`#${b.id}`} className="body-sm" style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '6px 0', fontSize: 12,
                    borderBottom: '1px solid rgba(138,109,42,.12)',
                  }}>
                    <span style={{ color: 'var(--ink)' }}>{b.name}</span>
                    <span style={{ color: 'var(--ink-muted)', letterSpacing: '.15em', textTransform: 'uppercase', fontSize: 9 }}>Est · {b.estd}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANCH CARDS */}
      <section style={{
        padding: 'clamp(40px, 5vw, 50px) clamp(22px, 4vw, 60px) clamp(60px, 8vw, 100px)',
        background: 'var(--cream-base)',
        position: 'relative',
      }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {BRANCHES.map((b, i) => (
            <div key={b.name} id={b.id} className={`fadeup ${i > 0 ? `fadeup-delay-${i}` : ''}`} style={{
              background: 'var(--cream-paper)',
              padding: 36,
              border: '1px solid rgba(138,109,42,.2)',
              position: 'relative',
              minHeight: 320,
              scrollMarginTop: 80,
            }}>
              <div style={{ position: 'absolute', top: 18, right: 18, opacity: .45 }} aria-hidden="true">
                <Ornament size={60} />
              </div>

              <div className="thin" style={{ fontSize: 14, color: 'var(--gold)', letterSpacing: '.3em' }}>BRANCH · {String(i + 1).padStart(2, '0')}</div>
              <h3 className="display" style={{ fontSize: 36, marginTop: 14, lineHeight: 1 }}>
                {b.name.split(' ').map((w, wi) =>
                  wi === b.name.split(' ').length - 1 ? <em key={wi}>{w}</em> : <span key={wi}>{w} </span>
                )}
              </h3>
              <p className="thin" style={{ fontSize: 16, fontStyle: 'italic', color: 'var(--ink-soft)', marginTop: 4 }}>{b.sub}</p>

              <Divider />

              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <div className="eyebrow" style={{ fontSize: 9 }}>Address</div>
                  <p className="body-sm" style={{ marginTop: 4, whiteSpace: 'pre-line' }}>{b.addr}</p>
                </div>
                <div>
                  <div className="eyebrow" style={{ fontSize: 9 }}>Telephone</div>
                  <p className="display" style={{ fontSize: 18, marginTop: 4, fontStyle: 'italic' }}>{b.phone}</p>
                </div>
                <div>
                  <div className="eyebrow" style={{ fontSize: 9 }}>Hours</div>
                  <p className="body-sm" style={{ marginTop: 4 }}>{b.hours}</p>
                </div>
              </div>

              <div style={{ marginTop: 20, padding: '12px 14px', background: 'var(--cream-warm)', borderLeft: '2px solid var(--gold)' }}>
                <p className="thin" style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--ink-soft)' }}>{b.note}</p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 18 }}>
                <span className="chip">Est · {b.estd}</span>
                <a
                  href={b.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow"
                  style={{ color: 'var(--ink)', cursor: 'pointer', textDecoration: 'none' }}
                >
                  Directions →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE MAP */}
      <ChennaiMap />


      {/* WHOLESALE FORM */}
      <section id="wholesale" style={{
        padding: 'clamp(60px, 8vw, 110px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-paper)',
        position: 'relative',
        scrollMarginTop: 80,
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .16, backgroundImage: 'url(/patterns/paisley.svg)', backgroundSize: '320px' }} aria-hidden="true" />
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-[60px]">
          <div>
            <div className="eyebrow"><span className="snum">N° 03</span> · <span>Wholesale Enquiry</span></div>
            <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 0.95, marginTop: 14 }}>
              Open an<br /><em>account</em>.
            </h2>
            <p className="body" style={{ marginTop: 22, fontSize: 14, lineHeight: 1.7 }}>
              For retailers, distributors, and bulk buyers. Tell us a little about your store, and our wholesale desk will write back within forty-eight hours.
            </p>
            <Divider />
            <div style={{ marginTop: 16 }}>
              <div className="eyebrow" style={{ fontSize: 9 }}>Wholesale Desk</div>
              <p className="display" style={{ fontSize: 22, marginTop: 6, fontStyle: 'italic' }}>wholesale@sumtitraders.in</p>
              <p className="display" style={{ fontSize: 22, marginTop: 2, fontStyle: 'italic' }}>+91 44 2538 1970</p>
            </div>
          </div>

          <div className="fadeup fadeup-delay-1" style={{ background: 'var(--cream-warm)', padding: 40, border: '1px solid rgba(138,109,42,.2)' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot — hidden from users, catches bots */}
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
