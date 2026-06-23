'use client'

import React, { useState, useEffect } from 'react'
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

function BrandSection({ brand, i, onOpen }: { brand: Brand; i: number; onOpen: () => void }) {
  const reverse = i % 2 === 1
  return (
    <section style={{
      padding: 'clamp(60px, 8vw, 120px) clamp(22px, 4vw, 60px)',
      background: i === 1 ? 'var(--cream-warm)' : 'var(--cream-paper)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        [reverse ? 'right' : 'left']: '-15%', top: '50%', transform: 'translateY(-50%)',
        width: 720, height: 720,
        backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
        opacity: .25, pointerEvents: 'none',
      }} aria-hidden="true" />

      <div className={`grid gap-10 md:gap-20 items-center relative ${reverse ? 'grid-cols-1 md:grid-cols-[1fr_1.2fr]' : 'grid-cols-1 md:grid-cols-[1.2fr_1fr]'}`}>
        {/* LOGO PANEL */}
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

        {/* COPY PANEL */}
        <div style={{ order: reverse ? 0 : 1 }}>
          <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="snum" style={{ color: brand.color }}>House {brand.num}</span>
            <span>·</span>
            <span>{brand.tagline}</span>
          </div>
          <h2 className="display" style={{ fontSize: 'clamp(60px, 7vw, 96px)', lineHeight: 0.92, marginTop: 12, color: brand.color }}>
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

function BrandLightbox({ brand, onClose }: { brand: Brand | null; onClose: () => void }) {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    if (!brand) return;
    async function fetchLatest() {
      // FT is stored as "Sumti" in folders, we map FT -> Sumti for query
      const queryBrand = brand.name === 'FT' ? 'Sumti' : brand.name;
      const { data } = await supabase.from('products').select('*').eq('brand', queryBrand).limit(6);
      if (data) setProducts(data);
    }
    fetchLatest();
  }, [brand])

  if (!brand) return null
  return (
    <div className={`lightbox open`} onClick={onClose}>
      <button className="close" onClick={onClose} aria-label="Close">×</button>
      <div className="panel" style={{ background: brand.accentCream, border: `1px solid ${brand.color}` }} onClick={e => e.stopPropagation()}>
        <div style={{ textAlign: 'center' }}>
          <Image src={brand.logoBrown} alt={brand.name} width={240} height={120} style={{ maxHeight: 120, margin: '0 auto', objectFit: 'contain' }} />
        </div>
        <Divider wide />
        <h2 className="display" style={{ fontSize: 48, textAlign: 'center', color: brand.color, marginTop: 12 }}>
          The {brand.name} <em>collection</em>
        </h2>
        <p className="body" style={{ textAlign: 'center', marginTop: 14, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>{brand.desc}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
          {products.length > 0 ? products.map((p, i) => (
            <div key={i} style={{ aspectRatio: '1/1', background: 'var(--cream-paper)', border: `1px solid ${brand.color}33`, padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {p.image_url ? (
                <img src={p.image_url} alt={`${p.brand} ${p.category}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} loading="lazy" />
              ) : (
                <Jewel kind={p.category} />
              )}
            </div>
          )) : (['necklace', 'earrings', 'bangle', 'ring', 'maang tikka', 'bracelet'] as const).map((k, i) => (
            <div key={i} style={{ aspectRatio: '1/1', background: 'var(--cream-paper)', border: `1px solid ${brand.color}33`, padding: 12 }}>
              <Jewel kind={k} />
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <button className="btn" style={{ borderColor: brand.color, color: brand.color }} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default function HousesPage() {
  const [open, setOpen] = useState<Brand | null>(null)

  return (
    <SiteLayout>
      {/* HERO */}
      <section style={{
        padding: 'clamp(40px, 5vw, 70px) clamp(22px, 4vw, 60px) clamp(30px, 4vw, 50px)',
        position: 'relative', overflow: 'hidden',
      }} className="bg-marble">
        <div style={{
          position: 'absolute', right: '-10%', top: '-20%',
          width: '700px', height: '700px',
          backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: .4,
        }} aria-hidden="true" />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 760 }}>
          <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><TinyDiamond />&nbsp;<span>Our Three Houses</span></div>
          <h1 className="display" style={{ fontSize: 'clamp(44px, 8vw, 116px)', lineHeight: 0.92, marginTop: 18 }}>
            Three <em>brands.</em><br />Three customers.
          </h1>
          <p className="thin" style={{ fontSize: 22, fontStyle: 'italic', color: 'var(--ink-soft)', marginTop: 28, maxWidth: 560 }}>
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
