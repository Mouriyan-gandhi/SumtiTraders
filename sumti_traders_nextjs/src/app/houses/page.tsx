'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import SiteLayout from '@/components/SiteLayout'
import { TinyDiamond, Divider, CornerOrnament, Jewel } from '@/components/Patterns'
import { supabase } from '@/lib/supabase'

const BRANDS = [
  {
    id: 'firsttouch',
    name: 'First Touch',
    italic: 'Touch',
    num: 'i',
    market: 'Gold Covering · Forming',
    tagline: 'Made for the moment.',
    color: '#7a3a2a',
    accentCream: '#f0dac7',
    logoBrown: '/logos/firsttouch-brown.png',
    desc: 'The flagship house. First Touch is gold covering and traditional forming jewellery — bridal sets, temple-inspired haarams, statement jhumkas. Built for the occasions a family will frame on the wall.',
    pillars: ['Gold covering sets', 'Forming jewellery', 'Bridal haarams', 'Temple-inspired'],
    estd: 'Flagship',
    quote: 'A bride is not adorned. She is announced.',
    stats: [['200+', 'designs in rotation'], ['38', 'master karigars'], ['1970', 'flagship since']],
  },
  {
    id: 'swarnika',
    name: 'Swarnika',
    italic: 'rnika',
    num: 'ii',
    market: 'Temple · American Diamond',
    tagline: "The connoisseur's house.",
    color: '#8a5028',
    accentCream: '#ecdbb7',
    logoBrown: '/logos/swarnika-brown.png',
    desc: 'Premium-quality temple jewellery and American diamond pieces — the kind that earn a closer look. Swarnika is for the customer who notices the cut of a stone, the weight of a clasp, the patina of a finish.',
    pillars: ['Temple jewellery', 'American diamond', 'Premium finish', 'Wedding-ready'],
    estd: '1988',
    quote: 'The closer it is looked at, the better it answers.',
    stats: [['450+', 'premium designs'], ['AD', 'grade stones'], ['1988', 'launched']],
  },
  {
    id: 'ft',
    name: 'FT',
    italic: 'T',
    num: 'iii',
    market: 'Affordable · Fashion',
    tagline: 'Daily floor, refined finish.',
    color: '#2c2520',
    accentCream: '#e8d9b7',
    logoBrown: '/logos/ft-brown.png',
    desc: 'Budget-friendly fashion jewellery for retailers who move volume. FT keeps the price accessible without dropping the finish — the line that turns walk-ins into regulars.',
    pillars: ['Budget-friendly', 'Fashion-forward', 'High turnover', 'Retail-ready'],
    estd: '2008',
    quote: 'Approachable is a finish too.',
    stats: [['6', 'drops a year'], ['85+', 'retail partners'], ['2008', 'launched']],
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
      <div style={{
        position: 'absolute',
        [reverse ? 'right' : 'left']: '-15%', top: '50%', transform: 'translateY(-50%)',
        width: 720, height: 720,
        backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
        opacity: .25, pointerEvents: 'none',
      }} aria-hidden="true" />

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
            <div className="thin" style={{ fontSize: 16, color: brand.color, letterSpacing: '.3em' }}>N° {brand.num}</div>
            <div className="eyebrow" style={{ color: brand.color, fontSize: 9 }}>{brand.estd === 'Flagship' ? 'SINCE 1970' : `SINCE · ${brand.estd}`}</div>
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
            <span className="snum" style={{ color: brand.color }}>House {brand.num}</span>
            <span>·</span>
            <span>{brand.tagline}</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(56px, 6.5vw, 88px)', lineHeight: 0.92, marginTop: 12, color: brand.color }}>
            {brand.name.replace(brand.italic, '')}<em>{brand.italic}</em>
          </h2>
          <p className="body" style={{ marginTop: 22, maxWidth: 460, fontSize: 14, lineHeight: 1.75 }}>{brand.desc}</p>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 22 }}>
            {brand.pillars.map(p => (
              <span key={p} className="chip" style={{ borderColor: `${brand.color}55`, color: brand.color }}>{p}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 36, marginTop: 32, flexWrap: 'wrap' }}>
            {brand.stats.map(([n, l], idx) => (
              <div key={idx} style={{ borderTop: `1px solid ${brand.color}55`, paddingTop: 12, minWidth: 100 }}>
                <div className="display" style={{ fontSize: 28, color: brand.color }}>{n}</div>
                <div className="body-sm" style={{ marginTop: 2, fontSize: 11, letterSpacing: '.1em' }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 30, padding: '18px 24px', borderLeft: `2px solid ${brand.color}`, background: 'rgba(255,255,255,.4)' }}>
            <p className="thin" style={{ fontStyle: 'italic', fontSize: 18, lineHeight: 1.35, color: 'var(--ink)' }}>
              &ldquo; {brand.quote} &rdquo;
            </p>
          </div>

          <button className="btn" style={{ marginTop: 28, borderColor: brand.color, color: brand.color }} onClick={onOpen}>
            Inside the house <span className="arr">→</span>
          </button>
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
      <div style={{ position: 'absolute', inset: 0, opacity: .08, backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: '780px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} aria-hidden="true" />
      <div className="fadeup relative grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10 md:gap-20 items-center">
        <div style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'var(--cream-deep)', letterSpacing: '.32em' }}>House {brand.num}</div>
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

          <button className="btn" style={{ marginTop: 30, borderColor: 'var(--cream-paper)', color: 'var(--cream-paper)' }} onClick={onOpen}>
            Inside the house <span className="arr">→</span>
          </button>
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
          <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="snum" style={{ color: brand.color }}>House {brand.num}</span>
            <span>·</span>
            <span>{brand.tagline}</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(52px, 6vw, 82px)', lineHeight: 0.94, marginTop: 12, color: brand.color }}>
            {brand.name.replace(brand.italic, '')}<em>{brand.italic}</em>
          </h2>
          <p className="body" style={{ marginTop: 20, maxWidth: 440, fontSize: 14, lineHeight: 1.75 }}>{brand.desc}</p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 18 }}>
            {brand.pillars.map(p => (
              <span key={p} className="chip" style={{ borderColor: `${brand.color}55`, color: brand.color, fontSize: 9 }}>{p}</span>
            ))}
          </div>
          <button className="btn" style={{ marginTop: 26, borderColor: brand.color, color: brand.color }} onClick={onOpen}>
            Inside the house <span className="arr">→</span>
          </button>
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
            House {brand.num} · {brand.market}
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
          <button className="btn" style={{ borderColor: brand.color, color: brand.color }} onClick={onClose}>Close</button>
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
          position: 'absolute', right: '-10%', top: '-20%',
          width: '700px', height: '700px',
          backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: .4,
        }} aria-hidden="true" />
        <div className="fadeup relative grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-14 items-center">
          <div>
            <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><TinyDiamond />&nbsp;<span>Our Three Houses</span></div>
            <h1 className="display" style={{ fontSize: 'clamp(44px, 7vw, 100px)', lineHeight: 0.94, marginTop: 16 }}>
              Three <em>brands.</em><br />Three customers.
            </h1>
            <p className="thin" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', fontStyle: 'italic', color: 'var(--ink-soft)', marginTop: 24, maxWidth: 560, lineHeight: 1.4 }}>
              First Touch for gold covering and forming. Swarnika for temple and American diamond. FT for affordable fashion. One trust, three counters.
            </p>
          </div>

          {/* Right — 3 brand mini-tiles as jump-to nav */}
          <div className="hidden md:flex flex-col gap-3">
            {BRANDS.map((b) => (
              <a key={b.id} href={`#${b.id}`} style={{
                display: 'grid',
                gridTemplateColumns: '46px 1fr auto',
                alignItems: 'center',
                gap: 16,
                padding: '14px 18px',
                background: 'rgba(255,255,255,.4)',
                border: `1px solid ${b.color}22`,
                transition: 'border-color .3s ease, background .3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = `${b.color}55`; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.7)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${b.color}22`; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.4)' }}
              >
                <div style={{ width: 46, height: 46, background: b.accentCream, border: `1px solid ${b.color}33`, position: 'relative' }}>
                  <Image src={b.logoBrown} alt="" fill sizes="46px" style={{ objectFit: 'contain', padding: 6 }} />
                </div>
                <div>
                  <div className="eyebrow" style={{ fontSize: 9, color: b.color }}>N° {b.num}</div>
                  <div className="display" style={{ fontSize: 20, lineHeight: 1, color: b.color, marginTop: 4 }}>{b.name}</div>
                </div>
                <span className="eyebrow" style={{ fontSize: 10, color: b.color }}>Jump →</span>
              </a>
            ))}
          </div>
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
        <div style={{
          position: 'absolute', inset: 0, opacity: .06,
          backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: '700px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        }} aria-hidden="true" />
        <div style={{ position: 'relative' }}>
          <div className="eyebrow" style={{ color: 'var(--cream-deep)' }}>Sumti Traders · Parent house</div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginTop: 14, lineHeight: 1 }}>
            All three brands, <em>one</em> wholesale partner.
          </h2>
          <p className="thin" style={{ fontSize: 20, fontStyle: 'italic', color: 'rgba(250,243,224,.7)', marginTop: 22, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Retailers across India source First Touch, Swarnika, and FT from a single point — our Chennai head office.
          </p>
        </div>
      </section>

      <BrandLightbox brand={open} onClose={() => setOpen(null)} />
    </SiteLayout>
  )
}
