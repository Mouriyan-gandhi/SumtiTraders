'use client'

import React, { useState } from 'react'
import SiteLayout from '@/components/SiteLayout'
import { TinyDiamond, Divider, Ornament } from '@/components/Patterns'

const BRANCHES = [
  {
    name: 'Sowcarpet',
    sub: 'The Mother Branch',
    addr: '142, Mint Street\nSowcarpet, Chennai 600 079',
    phone: '+91 44 2538 1970',
    hours: 'Mon — Sat · 10:00 – 20:00',
    note: 'Where Sumti began in 1970. Walk-in wholesale; the workbench is upstairs.',
    estd: '1970',
  },
  {
    name: 'T. Nagar',
    sub: 'The Retail Heart',
    addr: '28, Ranganathan Street\nT. Nagar, Chennai 600 017',
    phone: '+91 44 2434 1995',
    hours: 'Mon — Sat · 10:00 – 21:00',
    note: "Set in Chennai's busiest retail belt. Full catalogue display.",
    estd: '1995',
  },
  {
    name: 'Anna Nagar',
    sub: 'The New Atelier',
    addr: '5, II Avenue\nAnna Nagar West, Chennai 600 040',
    phone: '+91 44 2628 2015',
    hours: 'Mon — Sat · 10:00 – 20:30',
    note: 'Our newest branch — open since 2015, the FT flagship floor.',
    estd: '2015',
  },
]

function Field({ label, wide }: { label: string; wide?: boolean }) {
  return (
    <div style={{ gridColumn: wide ? '1 / -1' : 'auto' }}>
      <label htmlFor={label.replace(/\s+/g, '-').toLowerCase()} style={{ display: 'block' }}>
        <div className="eyebrow" style={{ fontSize: 9, marginBottom: 6 }}>{label}</div>
      </label>
      <input
        id={label.replace(/\s+/g, '-').toLowerCase()}
        type="text"
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [interested, setInterested] = useState(['All houses'])

  const toggleInterest = (h: string) => {
    setInterested(prev => prev.includes(h) ? prev.filter(x => x !== h) : [...prev, h])
  }

  return (
    <SiteLayout>
      {/* HERO */}
      <section style={{
        padding: 'clamp(40px, 5vw, 70px) clamp(22px, 4vw, 60px) clamp(30px, 4vw, 50px)',
        background: 'var(--cream-paper)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: '-15%', top: '-20%',
          width: '700px', height: '700px',
          backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: .4,
        }} aria-hidden="true" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><TinyDiamond />&nbsp;<span>Visit · Write · Order</span></div>
          <h1 className="display" style={{ fontSize: 'clamp(50px, 8vw, 128px)', lineHeight: 0.9, marginTop: 18 }}>
            Three branches.<br /><em>One</em> Chennai.
          </h1>
          <p className="thin" style={{ fontSize: 22, fontStyle: 'italic', color: 'var(--ink-soft)', marginTop: 22, maxWidth: 560 }}>
            Walk in, write to us, or open a wholesale account from anywhere in India. We answer.
          </p>
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
            <div key={b.name} style={{
              background: 'var(--cream-paper)',
              padding: 36,
              border: '1px solid rgba(138,109,42,.2)',
              position: 'relative',
              minHeight: 320,
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
                <span className="eyebrow" style={{ color: 'var(--ink)', cursor: 'pointer' }}>Directions →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABSTRACT MAP */}
      <section style={{
        padding: 'clamp(40px, 5vw, 70px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-warm)',
        position: 'relative',
      }}>
        <div className="sect-head">
          <div className="left">
            <div className="eyebrow"><span className="snum">N° 02</span> · <span>On the map</span></div>
            <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              A map of <em>Chennai.</em>
            </h2>
          </div>
        </div>

        <div className="aspect-square md:aspect-[21/9]" style={{
          background: 'var(--cream-paper)',
          border: '1px solid rgba(138,109,42,.25)',
          position: 'relative', overflow: 'hidden',
        }}>
          <svg viewBox="0 0 800 380" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }} aria-label="Abstract map of Chennai showing three Sumti Traders branches">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.6" fill="#8a6d2a" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="800" height="380" fill="url(#dots)" />
            <g stroke="#8a6d2a" strokeWidth="0.8" opacity="0.5" fill="none">
              <path d="M0 100 Q200 120 400 90 T800 110" />
              <path d="M0 220 Q300 180 500 240 T800 200" />
              <path d="M150 0 Q170 200 200 380" />
              <path d="M450 0 Q500 180 480 380" />
              <path d="M680 0 Q650 200 700 380" />
            </g>
            <path d="M740 0 Q720 200 780 380 L800 380 L800 0 Z" fill="#8a6d2a" opacity="0.06" />
            <text x="760" y="190" fill="#8a6d2a" fontFamily="Cormorant Garamond" fontSize="11" fontStyle="italic" opacity="0.6">Bay of Bengal</text>

            {[
              { x: 180, y: 90, name: 'Sowcarpet', est: '1970' },
              { x: 430, y: 230, name: 'T. Nagar', est: '1995' },
              { x: 660, y: 130, name: 'Anna Nagar', est: '2015' },
            ].map(p => (
              <g key={p.name}>
                <circle cx={p.x} cy={p.y} r="22" fill="#1a1612" />
                <circle cx={p.x} cy={p.y} r="14" fill="none" stroke="#a3863f" />
                <text x={p.x} y={p.y + 4} textAnchor="middle" fill="#faf3e0" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="13">ST</text>
                <text x={p.x} y={p.y + 44} textAnchor="middle" fill="#1a1612" fontFamily="Manrope" fontSize="10" letterSpacing="2">{p.name.toUpperCase()}</text>
                <text x={p.x} y={p.y + 58} textAnchor="middle" fill="#8a6d2a" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="11">est {p.est}</text>
              </g>
            ))}

            <text x="30" y="40" fill="#1a1612" fontFamily="Manrope" fontSize="9" letterSpacing="3">CHENNAI</text>
            <text x="30" y="56" fill="#8a6d2a" fontFamily="Cormorant Garamond" fontStyle="italic" fontSize="16">Tamil Nadu, India</text>
          </svg>
        </div>
      </section>

      {/* WHOLESALE FORM */}
      <section style={{
        padding: 'clamp(60px, 8vw, 110px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-paper)',
        position: 'relative',
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

          <div style={{ background: 'var(--cream-warm)', padding: 40, border: '1px solid rgba(138,109,42,.2)' }}>
            {!submitted ? (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Your name" />
                  <Field label="Store / Brand name" />
                  <Field label="City, State" />
                  <Field label="Phone" />
                </div>
                <div style={{ marginTop: 18 }}>
                  <Field label="Email" wide />
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
                  <div className="eyebrow" style={{ fontSize: 9, marginBottom: 8 }}>Message</div>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your store…"
                    style={{
                      width: '100%', resize: 'vertical',
                      background: 'var(--cream-paper)', border: '1px solid rgba(138,109,42,.3)',
                      padding: 14, fontFamily: 'var(--f-body)', fontSize: 13, color: 'var(--ink)',
                      outline: 'none',
                    }}
                  />
                </div>
                <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
                  <p className="body-sm" style={{ maxWidth: 260, fontSize: 11 }}>By submitting, you allow our wholesale desk to write back at the email above.</p>
                  <button type="submit" className="btn solid">Submit enquiry <span className="arr">→</span></button>
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
