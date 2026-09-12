'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import SiteLayout from '@/components/SiteLayout'
import { TinyDiamond, Divider, Ornament, Jewel } from '@/components/Patterns'
import { supabase } from '@/lib/supabase'
import JewelCardSkeleton from '@/components/JewelCardSkeleton'

const CATEGORIES = [
  { id: 'all', label: 'All Pieces' },
  { id: 'necklace', label: 'Necklaces' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'bangle', label: 'Bangles' },
  { id: 'ring', label: 'Rings' },
  { id: 'maang tikka', label: 'Maang Tikka' },
  { id: 'bracelet', label: 'Bracelets' },
  { id: 'pendant', label: 'Pendants' },
]

const HOUSES = [
  { id: 'all', label: 'All Houses' },
  { id: 'First Touch', label: 'First Touch' },
  { id: 'Swarnika', label: 'Swarnika' },
  { id: 'Sumti', label: 'FT' },
]

type Product = {
  id: string;
  brand: string;
  category: string;
  original_filename: string;
  image_url: string;
}

function JewelCard({ product, onClick }: { product: Product; onClick: () => void }) {
  // Fix ugly UUID filenames by using Brand + Category
  const formattedName = `${product.brand} ${product.category}`;
  
  return (
    <div className="jewel-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="label">{product.brand}</div>
      <div className="placeholder" style={{ position: 'relative', overflow: 'hidden' }}>
        {product.image_url ? (
          <Image src={product.image_url} alt={formattedName} fill sizes="(max-width: 768px) 50vw, 320px" style={{ objectFit: 'contain' }} />
        ) : (
          <Jewel kind={product.category} />
        )}
      </div>
      <div className="meta">
        <h4 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textTransform: 'capitalize' }}><em>{formattedName}</em></h4>
        <div className="row">
          <span style={{ textTransform: 'capitalize' }}>{product.category}</span>
          <span>{product.id}</span>
        </div>
      </div>
    </div>
  )
}

export default function CataloguePage() {
  const [cat, setCat] = useState('all')
  const [house, setHouse] = useState('all')
  const [active, setActive] = useState<Product | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
      if (data) setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, [])

  const items = products.filter(p => (cat === 'all' || p.category === cat) && (house === 'all' || p.brand === house))

  return (
    <SiteLayout>
      {/* HERO */}
      <section style={{
        padding: 'clamp(40px, 5vw, 70px) clamp(22px, 4vw, 60px) clamp(32px, 4vw, 48px)',
        background: 'var(--cream-paper)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/patterns/paisley.svg)', backgroundSize: '320px', opacity: .08 }} aria-hidden="true" />
        <div className="fadeup relative" style={{ maxWidth: 960 }}>
          <div className="lead-eyebrow">The Couverture Collection</div>
          <h1 className="display" style={{ fontSize: 'clamp(44px, 6vw, 92px)', lineHeight: 0.92, marginTop: 16, maxWidth: '15ch' }}>
            The <em>Couverture</em> catalogue.
          </h1>
          <p className="thin" style={{ fontSize: 'clamp(17px, 1.6vw, 20px)', fontStyle: 'italic', color: 'var(--ink-soft)', marginTop: 18, maxWidth: 620, lineHeight: 1.4 }}>
            A curated preview from all three houses. Click any piece for the detail card. The complete catalogue ships physically with retailer accounts.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-[52px] md:top-[64px] z-10 catalogue-filter">
        <div className="catalogue-filter-inner">
          <div className="cf-row">
            <div className="cf-label">Type</div>
            <div className="cf-chips">
              {CATEGORIES.map(c => (
                <span key={c.id} className={`filter ${cat === c.id ? 'active' : ''}`} onClick={() => setCat(c.id)} role="button" tabIndex={0}>{c.label}</span>
              ))}
            </div>
          </div>
          <div className="cf-row">
            <div className="cf-label">House</div>
            <div className="cf-chips">
              {HOUSES.map(c => (
                <span key={c.id} className={`filter ${house === c.id ? 'active' : ''}`} onClick={() => setHouse(c.id)} role="button" tabIndex={0}>{c.label}</span>
              ))}
            </div>
            <div className="cf-count">{items.length} piece{items.length !== 1 && 's'}</div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <section style={{
        padding: 'clamp(32px, 4vw, 50px) clamp(22px, 4vw, 60px) clamp(60px, 8vw, 100px)',
        background: 'var(--cream-base)',
        minHeight: 400,
      }}>
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[10px] md:gap-[18px]">
            {Array.from({ length: 12 }).map((_, i) => <JewelCardSkeleton key={i} />)}
          </div>
        ) : items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 60 }}>
            <Ornament size={80} />
            <p className="thin" style={{ fontSize: 22, fontStyle: 'italic', marginTop: 18 }}>No pieces in this slice. Try another filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[10px] md:gap-[18px]">
            {items.map((it) => (
              <JewelCard key={it.id} product={it} onClick={() => setActive(it)} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section style={{
        padding: 'clamp(50px, 6vw, 90px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-warm)',
        textAlign: 'center',
      }}>
        <Divider wide />
        <h2 className="display" style={{ fontSize: 'clamp(30px, 5vw, 48px)', marginTop: 14, lineHeight: 1 }}>
          Request the <em>full catalogue</em>
        </h2>
        <p className="body" style={{ marginTop: 14, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
          The print catalogue carries every active design across the three houses, shipped quarterly to wholesale partners.
        </p>
        <div style={{ marginTop: 22 }}>
          <button className="btn solid">Request access <span className="arr">→</span></button>
        </div>
      </section>

      {/* LIGHTBOX */}
      <div className={`lightbox ${active ? 'open' : ''}`} onClick={() => setActive(null)}>
        <button className="close" onClick={() => setActive(null)} aria-label="Close">×</button>
        {active && (
          <div className="panel" onClick={e => e.stopPropagation()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
              <div style={{ aspectRatio: '1/1', background: 'var(--cream-warm)', padding: 24, border: '1px solid rgba(138,109,42,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {active.image_url ? (
                  <Image src={active.image_url} alt={`${active.brand} ${active.category}`} fill sizes="(max-width: 768px) 90vw, 640px" style={{ objectFit: 'contain', padding: 24 }} />
                ) : (
                  <Jewel kind={active.category} />
                )}
              </div>
              <div>
                <div className="eyebrow">{active.brand} · Couverture</div>
                <h3 className="display" style={{ fontSize: 44, marginTop: 8, lineHeight: 1, wordBreak: 'break-word', textTransform: 'capitalize' }}>
                  <em>{active.brand} {active.category}</em>
                </h3>
                <Divider />
                <p className="body" style={{ marginTop: 14 }}>
                  <span style={{ textTransform: 'capitalize' }}>{active.category}</span>, finished at the Sumti workshop. Available in matched sets.
                </p>
                <div style={{ display: 'flex', gap: 20, marginTop: 20 }}>
                  <div><div className="eyebrow">Ref</div><div className="display" style={{ fontSize: 20, marginTop: 4 }}>{active.id}</div></div>
                  <div><div className="eyebrow">Type</div><div className="display" style={{ fontSize: 20, marginTop: 4, textTransform: 'capitalize' }}>{active.category}</div></div>
                </div>
                <div style={{ marginTop: 24 }}>
                  <button className="btn solid">Enquire wholesale <span className="arr">→</span></button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  )
}
