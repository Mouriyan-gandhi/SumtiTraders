'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import SiteLayout from '@/components/SiteLayout'
import { TinyDiamond, Divider, CornerOrnament, Jewel } from '@/components/Patterns'
import { supabase } from '@/lib/supabase'

const SHARED_INSTAGRAM = 'https://www.instagram.com/ft_swarnika_code_manufacturer'

function InstagramGlyph({ color = 'currentColor', size = 14 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill={color} stroke="none" />
    </svg>
  )
}

const BRANDS = [
  {
    id: 'firsttouch',
    name: 'First Touch',
    italic: 'Touch',
    market: 'Gold Covering · Forming',
    tagline: 'Made for the moment.',
    color: '#7a3a2a',
    accentCream: '#f0dac7',
    logoBrown: '/logos/firsttouch-brown.png',
    desc: 'The flagship house. First Touch is gold covering and traditional forming jewellery. Bridal sets, temple-inspired haarams, statement jhumkas. Built for the occasions a family will frame on the wall.',
    pillars: ['Gold covering sets', 'Forming jewellery', 'Bridal haarams', 'Temple-inspired'],
    estd: 'Flagship',
    quote: 'A bride is not adorned. She is announced.',
    stats: [['200+', 'designs in rotation'], ['38', 'master karigars'], ['1970', 'flagship since']],
    instagram: null as string | null,
  },
  {
    id: 'swarnika',
    name: 'Swarnika',
    italic: 'rnika',
    market: 'Temple · American Diamond',
    tagline: "The connoisseur's house.",
    color: '#8a5028',
    accentCream: '#ecdbb7',
    logoBrown: '/logos/swarnika-brown.png',
    desc: 'Premium-quality temple jewellery and American diamond pieces. The kind that earn a closer look. Swarnika is for the customer who notices the cut of a stone, the weight of a clasp, the patina of a finish.',
    pillars: ['Temple jewellery', 'American diamond', 'Premium finish', 'Wedding-ready'],
    estd: '1988',
    quote: 'The closer it is looked at, the better it answers.',
    stats: [['450+', 'premium designs'], ['AD', 'grade stones'], ['1988', 'launched']],
    instagram: SHARED_INSTAGRAM,
  },
  {
    id: 'ft',
    name: 'FT',
    italic: 'T',
    market: 'Affordable · Fashion',
    tagline: 'Daily floor, refined finish.',
    color: '#2c2520',
    accentCream: '#e8d9b7',
    logoBrown: '/logos/ft-brown.png',
    desc: 'Budget-friendly fashion jewellery for retailers who move volume. FT keeps the price accessible without dropping the finish. The line that turns walk-ins into regulars.',
    pillars: ['Budget-friendly', 'Fashion-forward', 'High turnover', 'Retail-ready'],
    estd: '2008',
    quote: 'Approachable is a finish too.',
    stats: [['6', 'drops a year'], ['85+', 'retail partners'], ['2008', 'launched']],
    instagram: SHARED_INSTAGRAM,
  },
]

type Brand = typeof BRANDS[0]

const LOGO_CREAM: Record<string, string> = {
  firsttouch: '/logos/firsttouch-gold.png',
  swarnika: '/logos/swarnika-cream.png',
  ft: '/logos/ft-cream.png',
}

/* Variant A — logo panel + editorial copy (default alternating) */
function BrandSectionEditorial({ brand, reverse, onOpen }: { brand: Brand; reverse: boolean; onOpen: () => void }) {
  return (
    <section id={brand.id} style={{
      padding: 'clamp(60px, 8vw, 120px) clamp(22px, 4vw, 60px)',
      background: 'var(--cream-paper)',
      position: 'relative', overflow: 'hidden',
      scrollMarginTop: 80,
    }}>

      <div className={`fadeup grid gap-10 md:gap-20 items-center relative ${reverse ? 'grid-cols-1 md:grid-cols-[1fr_1.2fr]' : 'grid-cols-1 md:grid-cols-[1.2fr_1fr]'}`}>
        <div style={{
          order: reverse ? 1 : 0,
          position: 'relative',
          aspectRatio: '4 / 5',
          background: brand.accentCream,
          border: `1px solid ${brand.color}33`,
          padding: 56,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div style={{ position: 'absolute', top: 16, left: 16, opacity: .5 }} aria-hidden="true"><CornerOrnament size={70} /></div>
          <div style={{ position: 'absolute', top: 16, right: 16, transform: 'scaleX(-1)', opacity: .5 }} aria-hidden="true"><CornerOrnament size={70} /></div>
          <div style={{ position: 'absolute', bottom: 16, left: 16, transform: 'scaleY(-1)', opacity: .5 }} aria-hidden="true"><CornerOrnament size={70} /></div>
          <div style={{ position: 'absolute', bottom: 16, right: 16, transform: 'scale(-1,-1)', opacity: .5 }} aria-hidden="true"><CornerOrnament size={70} /></div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <div className="eyebrow" style={{ color: brand.color, fontSize: 10, letterSpacing: '.28em' }}>Chennai Atelier</div>
            <div className="eyebrow" style={{ color: brand.color, fontSize: 9 }}>{brand.estd === 'Flagship' ? 'SINCE 1970' : `SINCE ${brand.estd}`}</div>
          </div>

          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 0' }}>
            <Image src={brand.logoBrown} alt={brand.name} width={320} height={320} style={{ maxWidth: '80%', maxHeight: 320, filter: 'drop-shadow(0 8px 22px rgba(58,24,32,.12))', objectFit: 'contain' }} />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <Divider />
            <div style={{ textAlign: 'center', marginTop: 8 }}>
              <div className="eyebrow" style={{ color: brand.color, fontSize: 10 }}>{brand.market}</div>
            </div>
          </div>
        </div>

        <div style={{ order: reverse ? 0 : 1 }}>
          <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ color: brand.color }}>{brand.tagline}</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(56px, 6.5vw, 88px)', lineHeight: 0.92, marginTop: 12, color: brand.color }}>
            {brand.name.replace(brand.italic, '')}<em>{brand.italic}</em>
          </h2>
          <p className="body" style={{ marginTop: 22, maxWidth: 460, fontSize: 14, lineHeight: 1.75 }}>{brand.desc}</p>

          <div style={{ display: 'flex', gap: 36, marginTop: 30, flexWrap: 'wrap' }}>
            {brand.stats.map(([n, l], idx) => (
              <div key={idx} style={{ borderTop: `1px solid ${brand.color}55`, paddingTop: 12, minWidth: 100 }}>
                <div className="display" style={{ fontSize: 28, color: brand.color }}>{n}</div>
                <div className="body-sm" style={{ marginTop: 2, fontSize: 11, letterSpacing: '.1em' }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <button
              className="btn brand"
              style={{ ['--btn-brand-color' as string]: brand.color } as React.CSSProperties}
              onClick={onOpen}
            >
              Inside the house <span className="arr">→</span>
            </button>
            {brand.instagram && (
              <a href={brand.instagram} target="_blank" rel="noreferrer" className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: brand.color, fontSize: 10, letterSpacing: '.24em' }}>
                <InstagramGlyph color={brand.color} /> On Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* Variant B — dark full-bleed hero-quote section (used for Swarnika) */
function BrandSectionDark({ brand, onOpen }: { brand: Brand; onOpen: () => void }) {
  const logoCream = LOGO_CREAM[brand.id] || brand.logoBrown
  return (
    <section id={brand.id} style={{
      padding: 'clamp(70px, 8vw, 130px) clamp(22px, 4vw, 60px)',
      background: 'var(--ink)',
      color: 'var(--cream-paper)',
      position: 'relative', overflow: 'hidden',
      scrollMarginTop: 80,
    }}>
<div style={{ position: 'absolute', inset: 0, opacity: .04, backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: '780px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} aria-hidden="true" />
      <div className="fadeup relative grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-20 items-center">
        <div style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--cream-deep)', letterSpacing: '.32em' }}>The Connoisseur&apos;s House</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 22 }}>
            <Image src={logoCream} alt={brand.name} width={360} height={200} style={{ maxWidth: '80%', maxHeight: 200, objectFit: 'contain', filter: 'drop-shadow(0 12px 30px rgba(0,0,0,.4))' }} />
          </div>
          <div className="hairline-gold" style={{ margin: '22px auto 12px', width: 220 }} />
          <div className="eyebrow" style={{ color: 'var(--cream-deep)', fontSize: 10 }}>{brand.market}</div>
        </div>

        <div>
          <div className="eyebrow" style={{ color: 'var(--cream-deep)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, background: 'var(--gold-soft)', transform: 'rotate(45deg)' }} aria-hidden="true" />
            &nbsp;{brand.tagline}
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(56px, 7vw, 96px)', lineHeight: 0.92, marginTop: 14 }}>
            {brand.name.replace(brand.italic, '')}<em style={{ color: 'var(--gold-soft)' }}>{brand.italic}</em>
          </h2>
          <p className="thin" style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', fontStyle: 'italic', lineHeight: 1.4, marginTop: 22, color: 'var(--cream-paper)', maxWidth: 560 }}>
            &ldquo; {brand.quote} &rdquo;
          </p>
          <p className="body" style={{ marginTop: 22, maxWidth: 520, color: 'rgba(250,243,224,.78)' }}>{brand.desc}</p>

          <div style={{ display: 'flex', gap: 32, marginTop: 30, flexWrap: 'wrap' }}>
            {brand.stats.map(([n, l], idx) => (
              <div key={idx} style={{ borderTop: '1px solid rgba(250,243,224,.24)', paddingTop: 12, minWidth: 100 }}>
                <div className="display" style={{ fontSize: 28, color: 'var(--gold-soft)' }}>{n}</div>
                <div className="body-sm" style={{ marginTop: 2, fontSize: 11, letterSpacing: '.1em', color: 'rgba(250,243,224,.6)' }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 30, flexWrap: 'wrap' }}>
            <button className="btn on-dark" onClick={onOpen}>
              Inside the house <span className="arr">→</span>
            </button>
            {brand.instagram && (
              <a href={brand.instagram} target="_blank" rel="noreferrer" className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--cream-deep)', fontSize: 10, letterSpacing: '.24em' }}>
                <InstagramGlyph color="#d4bd87" /> On Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* Variant C — compact copy + product-tile strip (used for FT) */
function BrandSectionStrip({ brand, onOpen }: { brand: Brand; onOpen: () => void }) {
  const [pieces, setPieces] = useState<any[]>([])
  useEffect(() => {
    async function fetch() {
      const queryBrand = brand.name === 'FT' ? 'Sumti' : brand.name
      const { data } = await supabase.from('products').select('*').eq('brand', queryBrand).limit(4)
      if (data) setPieces(data)
    }
    fetch()
  }, [brand])

  return (
    <section id={brand.id} style={{
      padding: 'clamp(60px, 7vw, 100px) clamp(22px, 4vw, 60px)',
      background: 'var(--cream-warm)',
      position: 'relative', overflow: 'hidden',
      scrollMarginTop: 80,
    }}>
      <div className="fadeup relative grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-center">
        <div>
          <div className="eyebrow" style={{ color: brand.color }}>{brand.tagline}</div>
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'flex-end', gap: 10 }}>
            <Image src={brand.logoBrown} alt={brand.name} width={220} height={220} style={{ maxWidth: 220, height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 6px 18px rgba(58,24,32,.12))' }} priority={false} />
          </div>
          <p className="body" style={{ marginTop: 22, maxWidth: 440, fontSize: 14, lineHeight: 1.75 }}>{brand.desc}</p>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 28, flexWrap: 'wrap' }}>
            <button
              className="btn brand"
              style={{ ['--btn-brand-color' as string]: brand.color } as React.CSSProperties}
              onClick={onOpen}
            >
              Inside the house <span className="arr">→</span>
            </button>
            {brand.instagram && (
              <a href={brand.instagram} target="_blank" rel="noreferrer" className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: brand.color, fontSize: 10, letterSpacing: '.24em' }}>
                <InstagramGlyph color={brand.color} /> On Instagram
              </a>
            )}
          </div>
        </div>

        {/* 4-tile product strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 10 }}>
          {(pieces.length ? pieces : [null, null, null, null]).map((p, i) => (
            <div key={i} style={{
              aspectRatio: '1 / 1',
              background: brand.accentCream,
              border: `1px solid ${brand.color}33`,
              position: 'relative',
              overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {p?.image_url ? (
                <Image src={p.image_url} alt={`${p.brand} ${p.category}`} fill sizes="(max-width: 768px) 40vw, 260px" style={{ objectFit: 'contain', padding: 16 }} />
              ) : (
                <div style={{ width: '55%', height: '55%', opacity: .55 }}>
                  <Jewel kind={['necklace', 'earring', 'bangle', 'ring'][i] || 'necklace'} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandSection({ brand, i, onOpen }: { brand: Brand; i: number; onOpen: () => void }) {
  if (brand.id === 'swarnika') return <BrandSectionDark brand={brand} onOpen={onOpen} />
  if (brand.id === 'ft') return <BrandSectionStrip brand={brand} onOpen={onOpen} />
  return <BrandSectionEditorial brand={brand} reverse={i % 2 === 1} onOpen={onOpen} />
}

function BrandLightbox({ brand, onClose }: { brand: Brand | null; onClose: () => void }) {
  const [products, setProducts] = useState<any[]>([])
  const [loaded, setLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    async function fetchLatest() {
      if (!brand) return;
      setLoaded(false)
      const queryBrand = brand.name === 'FT' ? 'Sumti' : brand.name;
      const { data, error } = await supabase.from('products').select('*').eq('brand', queryBrand).limit(6);
      if (typeof window !== 'undefined') {
        console.log(`[BrandLightbox] "${queryBrand}" → ${data?.length ?? 0} rows`, { data, error })
      }
      setProducts(data ?? [])
      setLoaded(true)
    }
    fetchLatest();
  }, [brand])

  useEffect(() => {
    if (!brand) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [brand, onClose])

  if (!brand || !mounted) return null

  const overlay = (
    <div className="lightbox open" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${brand.name} collection`}>
      <button className="close" onClick={onClose} aria-label="Close">×</button>
      <div
        className="panel brand-panel"
        style={{ background: brand.accentCream, border: `1px solid ${brand.color}` }}
        onClick={e => e.stopPropagation()}
      >
        <header className="brand-panel-head">
          <Image src={brand.logoBrown} alt={brand.name} width={220} height={80} style={{ maxHeight: 72, width: 'auto', objectFit: 'contain' }} />
          <div className="brand-panel-eyebrow" style={{ color: brand.color }}>
            {brand.market}
          </div>
          <h2 className="display brand-panel-title" style={{ color: brand.color }}>
            The {brand.name} <em>collection</em>
          </h2>
          <p className="brand-panel-desc">{brand.desc}</p>
        </header>

        <div className="brand-panel-grid">
          {(loaded && products.length > 0 ? products : Array.from({ length: 6 })).map((p: any, i) => (
            <div key={i} className="brand-panel-tile" style={{ border: `1px solid ${brand.color}33` }}>
              {p?.image_url ? (
                <Image src={p.image_url} alt={`${p.brand ?? brand.name} ${p.category ?? ''}`} fill sizes="(max-width: 768px) 40vw, 200px" style={{ objectFit: 'contain', padding: 12 }} />
              ) : (
                <div className="brand-panel-fallback"><Jewel kind={(p?.category) || ['necklace','earring','bangle','ring','maang','bracelet'][i % 6]} /></div>
              )}
            </div>
          ))}
        </div>

        {loaded && products.length === 0 && (
          <p className="brand-panel-note">No {brand.name} products in the catalogue yet. Showing sample line-drawings.</p>
        )}

        <div className="brand-panel-actions">
          <button
            className="btn brand"
            style={{ ['--btn-brand-color' as string]: brand.color } as React.CSSProperties}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )

  return createPortal(overlay, document.body)
}

export default function HousesPage() {
  const [open, setOpen] = useState<Brand | null>(null)

  return (
    <SiteLayout>
      {/* HERO */}
      <section style={{
        padding: 'clamp(40px, 5vw, 70px) clamp(22px, 4vw, 60px) clamp(40px, 5vw, 70px)',
        position: 'relative', overflow: 'hidden',
      }} className="bg-marble">
        <div style={{
          position: 'absolute', right: '-16%', top: '-24%',
          width: '620px', height: '620px',
          backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: .08,
        }} aria-hidden="true" />
        <div className="fadeup relative" style={{ maxWidth: 960 }}>
          <div className="lead-eyebrow">Our Three Houses</div>
          <h1 className="display" style={{ fontSize: 'clamp(44px, 7vw, 100px)', lineHeight: 0.94, marginTop: 16 }}>
            Three <em>brands.</em><br />Three customers.
          </h1>
          <p className="thin" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', fontStyle: 'italic', color: 'var(--ink-soft)', marginTop: 24, maxWidth: 620, lineHeight: 1.4 }}>
            First Touch for gold covering and forming. Swarnika for temple and American diamond. FT for affordable fashion. One trust, three counters.
          </p>
        </div>
      </section>

      {/* THREE BRAND SECTIONS */}
      {BRANDS.map((b, i) => (
        <BrandSection key={b.id} brand={b} i={i} onOpen={() => setOpen(b)} />
      ))}

      {/* CROSS-BRAND CTA */}
      <section style={{
        background: 'var(--ink)', color: 'var(--cream-paper)',
        padding: 'clamp(50px, 6vw, 90px) clamp(22px, 4vw, 60px)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'relative' }}>
          <div className="eyebrow" style={{ color: 'var(--cream-deep)' }}>Sumti Traders · Parent house</div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginTop: 14, lineHeight: 1 }}>
            All three brands, <em>one</em> wholesale partner.
          </h2>
          <p className="thin" style={{ fontSize: 20, fontStyle: 'italic', color: 'rgba(250,243,224,.7)', marginTop: 22, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Retailers across India source First Touch, Swarnika, and FT from a single point. Our Chennai head office.
          </p>
        </div>
      </section>

      <BrandLightbox brand={open} onClose={() => setOpen(null)} />
    </SiteLayout>
  )
}
