'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SiteLayout from '@/components/SiteLayout'
import { TinyDiamond, Ornament, Seal, Jewel, ServiceEmblem } from '@/components/Patterns'
import { supabase } from '@/lib/supabase'
import CountUp from '@/components/CountUp'
import JewelCardSkeleton from '@/components/JewelCardSkeleton'

/* ====== Brand tile ====== */
const BrandTile = ({
  href, logo, name, tag, desc, accent
}: {
  href: string; logo: string; name: string; tag: string; desc: string; accent: string;
}) => {
  return (
    <Link href={href} className="brand-card" style={{
      background: 'var(--cream-paper)', display: 'flex', flexDirection: 'column',
      textDecoration: 'none',
      borderTop: `2px solid ${accent}`,
    }}>
      <div className="bgwash" style={{ background: `radial-gradient(circle at 80% 80%, ${accent}12 0%, transparent 60%), var(--cream-paper)` }} aria-hidden="true" />
      <div className="inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
        <div style={{ height: 76, display: 'flex', alignItems: 'center' }}>
          <Image
            src={logo}
            alt={name}
            width={220}
            height={80}
            style={{ height: 76, width: 'auto', maxWidth: 200, objectFit: 'contain' }}
          />
        </div>
        <div className="tag" style={{ color: accent }}>{tag}</div>
      </div>
      <p className="desc" style={{ marginTop: 8 }}>{desc}</p>
      <div className="cta" style={{ color: accent, marginTop: 22 }}>
        Discover the house <span style={{ fontFamily: 'var(--f-display)', fontSize: 22 }}>→</span>
      </div>
    </Link>
  )
}

type Product = {
  id: string;
  brand: string;
  category: string;
  original_filename: string;
  image_url: string;
}

/* ====== Jewellery card ====== */
const JewelCard = ({ product, onClick }: { product: Product; onClick?: () => void; }) => {
  const formattedName = `${product.brand} ${product.category}`;
  return (
    <div className="jewel-card" onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      <div className="label">{product.brand}</div>
      <div className="placeholder" style={{ position: 'relative', overflow: 'hidden' }}>
        {product.image_url ? (
          <Image src={product.image_url} alt={formattedName} fill sizes="(max-width: 768px) 50vw, 280px" style={{ objectFit: 'contain' }} />
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

/* ====== Service card ====== */
const ServiceCard = ({
  n, title, titleEm, body, tag, kind, accent
}: {
  n: string; title: string; titleEm: string; body: string; tag: string; kind: string; accent?: boolean;
}) => {
  return (
    <div style={{
      background: accent ? 'var(--ink)' : 'var(--cream-paper)',
      color: accent ? 'var(--cream-paper)' : 'var(--ink)',
      border: `1px solid ${accent ? 'rgba(250,243,224,.15)' : 'rgba(138,109,42,.25)'}`,
      padding: 28,
      display: 'flex',
      gap: 22,
      alignItems: 'flex-start',
      minHeight: 220,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        flex: '0 0 84px', width: 84, height: 84,
        background: 'var(--cream-warm)',
        border: '1px solid rgba(138,109,42,.3)',
        padding: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
          <ServiceEmblem kind={kind} />
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="thin" style={{ fontSize: 13, color: accent ? 'var(--cream-deep)' : 'var(--gold)', letterSpacing: '.3em' }}>N° {n}</div>
        <h3 className="display" style={{ fontSize: 28, lineHeight: 1.05, marginTop: 8 }}>
          {title} <em style={{ fontStyle: 'italic' }}>{titleEm}</em>
        </h3>
        <p style={{
          marginTop: 12, fontSize: 13, lineHeight: 1.65,
          color: accent ? 'rgba(250,243,224,.78)' : 'var(--ink-soft)',
          fontFamily: 'var(--f-body)',
        }}>{body}</p>
        <div style={{ marginTop: 14 }}>
          <span className="chip" style={{
            borderColor: accent ? 'rgba(250,243,224,.3)' : 'rgba(26,22,18,.2)',
            color: accent ? 'var(--cream-deep)' : 'var(--ink-soft)',
          }}>{tag}</span>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loadingProducts, setLoadingProducts] = useState(true)

  useEffect(() => {
    async function fetchLatest() {
      const { data } = await supabase.from('products').select('*').order('created_at', { ascending: false }).limit(8)
      if (data) setProducts(data)
      setLoadingProducts(false)
    }
    fetchLatest()
  }, [])

  return (
    <SiteLayout>
      {/* HERO */}
      <section style={{
        position: 'relative',
        padding: 'clamp(32px, 5vw, 70px) clamp(22px, 4vw, 60px) clamp(48px, 6vw, 90px)',
        minHeight: '760px',
        overflow: 'hidden',
      }} className="bg-marble">
        {/* spinning mandala — only decorative element in hero */}
        <div style={{
          position: 'absolute', right: '-22%', top: '-25%',
          width: '760px', height: '760px',
          backgroundImage: 'url(/patterns/mandala.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
          opacity: .10, pointerEvents: 'none',
          animation: 'spin 240s linear infinite',
        }} aria-hidden="true" />

        <div className="fadeup" style={{ position: 'relative', zIndex: 2, maxWidth: 1180 }}>
          <div className="lead-eyebrow" style={{ marginBottom: 28 }}>Sowcarpet, Chennai · Since 1970</div>

          {/* type lockup */}
          <h1 className="display" style={{
            fontSize: 'clamp(54px, 10vw, 148px)',
            letterSpacing: '-0.02em',
            lineHeight: '0.88',
            maxWidth: '15ch',
          }}>
            <span style={{ display: 'block' }}>Sumti</span>
            <span style={{ display: 'block', paddingLeft: 'clamp(0px, 6vw, 90px)' }}>
              <em style={{ fontStyle: 'italic' }}>Traders</em>
            </span>
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: 30, alignItems: 'end', marginTop: 42 }}>
            <div style={{ maxWidth: 440 }}>
              <p className="thin" style={{ fontSize: 'clamp(19px, 1.6vw, 24px)', lineHeight: 1.4, color: 'var(--ink)', fontStyle: 'italic' }}>
                Wholesale gold covering jewellery from a Sowcarpet workbench. Three houses, ten thousand retailers, one <em style={{ color: 'var(--rust)' }}>standard of finish.</em>
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link href="/contact#wholesale" className="btn solid">Open an account <span className="arr">→</span></Link>
              <Link href="/catalogue" className="btn">View catalogue</Link>
            </div>
          </div>

          <div style={{ marginTop: 42, display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="chip">GST-registered wholesaler</span>
            <span className="chip">Ships pan-India</span>
            <span className="chip">3,000+ women resellers</span>
          </div>
        </div>

        {/* bottom hairline + meta row */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
          <div className="hairline-gold" />
          <div style={{
            display: 'flex', justifyContent: 'space-between', padding: '16px 60px',
            fontFamily: 'var(--f-caps)', fontSize: 10, letterSpacing: '.24em',
            textTransform: 'uppercase', color: 'var(--ink-muted)',
          }}>
            <span>Scroll to begin</span>
            <span>The Couverture Collection</span>
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* LEGACY BAND */}
      <section style={{
        padding: 'clamp(60px, 8vw, 110px) clamp(22px, 4vw, 60px)',
        position: 'relative', overflow: 'hidden',
        background: 'var(--cream-warm)',
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto' }}>
          <div className="lead-eyebrow fadeup" style={{ marginBottom: 22 }}>The House · Since 1970</div>

          <div className="fadeup fadeup-delay-1 legacy-intro">
            <h2 className="display legacy-headline">
              A heritage in <em>gold covering jewellery.</em>
            </h2>
            <p className="body legacy-lede">
              Sumti Traders has supplied India&apos;s finest retailers with gold covering jewellery since the 1970s. Three houses. <em style={{ fontStyle: 'italic', color: 'var(--ink)' }}>First Touch, Swarnika, FT.</em> Three markets, one standard of finish.
            </p>
          </div>

          <div className="legacy-stats fadeup fadeup-delay-2">
            {[
              { n: 1970, suffix: '', l: 'Year we began', fmt: (v: number) => v.toString() },
              { n: 10000, suffix: '+', l: 'Wholesale partners empowered' },
              { n: 3000, suffix: '+', l: 'Women entrepreneurs supported' },
              { n: 3, suffix: '', l: 'Sowcarpet units (branch + 2 warehouses)' },
            ].map((s, i) => (
              <div key={i} className="legacy-stat">
                <div className="display legacy-stat-num">
                  <CountUp end={s.n} suffix={s.suffix} formatter={s.fmt} />
                </div>
                <div className="legacy-stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE BRANDS */}
      <section style={{
        padding: 'clamp(60px, 8vw, 110px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-paper)',
        position: 'relative',
      }}>
        <div className="sect-head fadeup">
          <div className="left">
            <div className="eyebrow"><span>Our Three Houses</span></div>
            <h2 className="display" style={{ fontSize: 'clamp(38px, 5vw, 64px)' }}>
              One legacy, <em>three</em><br />distinct voices.
            </h2>
          </div>
          <div className="right">
            <p className="body">Each house carries its own register. Gold covering bridal, temple and American diamond, budget-friendly fashion. All finished to one shared standard.</p>
          </div>
        </div>

        <div className="brand-tri-grid mt-6">
          <div className="fadeup brand-side"><BrandTile href="/houses#firsttouch" logo="/logos/firsttouch-brown.png" name="First Touch" tag="Gold Covering · Forming · Flagship" desc="The flagship house. Gold covering and traditional forming jewellery. Bridal sets, statement haarams, temple-inspired pieces." accent="#7a3a2a" /></div>
          <div className="fadeup fadeup-delay-1 brand-hero"><BrandTile href="/houses#swarnika" logo="/logos/swarnika-brown.png" name="Swarnika" tag="Temple · American Diamond · The Connoisseur's House" desc="Premium-quality temple jewellery and American diamond pieces. Careful, considered, made to be noticed up close. The centrepiece of the Sumti family." accent="#8a5028" /></div>
          <div className="fadeup fadeup-delay-2 brand-side"><BrandTile href="/houses#ft" logo="/logos/ft-brown.png" name="FT" tag="Affordable · Fashion" desc="Budget-friendly fashion jewellery for retailers who move volume. Accessible price, refined finish." accent="#2c2520" /></div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Link href="/houses" className="btn">Explore the brands <span className="arr">→</span></Link>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{
        padding: 'clamp(60px, 8vw, 110px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-warm)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'relative' }}>
          <div className="sect-head">
            <div className="left">
              <div className="eyebrow"><span>Who We Serve</span></div>
              <h2 className="display" style={{ fontSize: 'clamp(38px, 5vw, 64px)', maxWidth: 640 }}>
                A house <em>for everyone</em><br />in the trade.
              </h2>
            </div>
            <div className="right">
              <p className="body">From a single counter to a mall pop-up to a woman running her shop from her phone, we supply, we set up, we support.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            <div className="fadeup"><ServiceCard n="01" title="Retailers" titleEm="& Wholesalers" body="Jewellery shops, multi-brand stores, distributors. Direct from Sowcarpet with the full range of all three houses. Catalogue, samples, credit terms, repeat orders." tag="Bulk supply" kind="retailers" /></div>
            <div className="fadeup fadeup-delay-1"><ServiceCard n="02" title="Shopping Centres" titleEm="& Pop-ups" body="On request, we set up dedicated counters at malls, exhibitions, festive bazaars and shopping centres. We bring the display, the inventory and the staff training. You bring the floor space." tag="On-request setup" kind="centres" /></div>
            <div className="fadeup fadeup-delay-2"><ServiceCard n="03" title="3,000+ Women" titleEm="Entrepreneurs" body="Our reseller programme empowers more than three thousand women running their own jewellery businesses online. We supply at wholesale rates, share lookbooks, and help them grow." tag="Reseller programme" kind="women" accent /></div>
            <div className="fadeup fadeup-delay-3"><ServiceCard n="04" title="Walk-in Clients" titleEm="& Bridal Parties" body="Our Sowcarpet head office welcomes walk-in bulk buyers and bridal trousseau bookings. By appointment for the bridal floor, open counter for retail trade." tag="In-branch" kind="walkin" /></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
            <Link href="/contact" className="btn solid">Open a wholesale account <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      {/* MARQUEE — sits as transition between Who We Serve and Recent Pieces */}
      {/* HOW WHOLESALE WORKS — the practical band. Three steps. */}
      <section style={{
        padding: 'clamp(60px, 8vw, 110px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-paper)',
        borderTop: '1px solid rgba(138,109,42,.18)',
        borderBottom: '1px solid rgba(138,109,42,.18)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="fadeup" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 44 }}>
            <div>
              <div style={{ height: 1, background: 'linear-gradient(90deg, var(--rust), rgba(122,58,42,0))', maxWidth: 220, marginBottom: 16 }} />
              <div className="eyebrow" style={{ color: 'var(--rust)', letterSpacing: '.32em' }}>Wholesale, made simple</div>
              <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, marginTop: 14, maxWidth: '18ch' }}>
                From your first enquiry to your <em>first shipment.</em>
              </h2>
            </div>
            <div style={{ maxWidth: 360 }}>
              <p className="body" style={{ color: 'var(--ink-soft)', fontSize: 14, lineHeight: 1.75 }}>Three concrete steps. A wholesale account with GST, an order on WhatsApp or in the branch, and pan-India dispatch. That is the whole flow.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { n: '01', t: 'Open an account', d: 'Send us your shop details, GST number, and a photo of your storefront. Approved within forty-eight hours. No franchise fee, no annual minimum.' },
              { n: '02', t: 'Order your way', d: 'Walk in to Sowcarpet, message on WhatsApp with a piece reference, or send a purchase order by email. Whatever fits your day.' },
              { n: '03', t: 'Ship pan-India', d: 'Packed at our Sowcarpet warehouse, dispatched by trusted courier. Most metros in two days, tier-2 and tier-3 in three to five.' },
            ].map((s, i) => (
              <div key={i} className={`fadeup ${i > 0 ? `fadeup-delay-${i}` : ''}`} style={{
                padding: '30px 28px',
                background: 'var(--cream-base)',
                borderTop: '2px solid var(--rust)',
                position: 'relative',
              }}>
                <div style={{ fontFamily: 'var(--f-display)', fontStyle: 'italic', fontSize: 52, color: 'var(--rust)', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.n}</div>
                <h3 className="display" style={{ fontSize: 24, lineHeight: 1.1, marginTop: 14 }}>{s.t}</h3>
                <p className="body-sm" style={{ marginTop: 12, color: 'var(--ink-soft)', fontSize: 13, lineHeight: 1.65 }}>{s.d}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/contact#wholesale" className="btn solid">Open a wholesale account <span className="arr">→</span></Link>
            <a href="https://wa.me/919344761821" target="_blank" rel="noopener noreferrer" className="btn ghost">WhatsApp our desk <span className="arr">→</span></a>
          </div>
        </div>
      </section>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Necklaces <TinyDiamond /> Earrings <TinyDiamond /> Bangles <TinyDiamond /> Maang Tikka <TinyDiamond /> Rings <TinyDiamond /> Nose Pins <TinyDiamond /> Anklets <TinyDiamond /> Bracelets <TinyDiamond /> Bridal Sets <TinyDiamond /></span>
          <span>Necklaces <TinyDiamond /> Earrings <TinyDiamond /> Bangles <TinyDiamond /> Maang Tikka <TinyDiamond /> Rings <TinyDiamond /> Nose Pins <TinyDiamond /> Anklets <TinyDiamond /> Bracelets <TinyDiamond /> Bridal Sets <TinyDiamond /></span>
        </div>
      </section>

      {/* COLLECTIONS GRID */}
      <section style={{
        padding: 'clamp(60px, 8vw, 110px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-base)',
        position: 'relative',
      }}>
        <div style={{ position: 'relative' }}>
          <div className="sect-head fadeup">
            <div className="left">
              <div className="eyebrow"><span>Recent Pieces</span></div>
              <h2 className="display" style={{ fontSize: 'clamp(38px, 5vw, 64px)' }}>
                The <em>Couverture</em><br />collection.
              </h2>
            </div>
            <div className="right">
              <p className="body">A glimpse from this season&apos;s atelier. Click any piece to enlarge, or browse the full catalogue.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 18 }}>
            {loadingProducts
              ? Array.from({ length: 8 }).map((_, i) => <JewelCardSkeleton key={i} />)
              : products.map((p, i) => (
                  <div key={p.id} className={`fadeup ${i < 4 ? `fadeup-delay-${(i % 4) + 1}` : ''}`}>
                    <JewelCard product={p} />
                  </div>
                ))
            }
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
            <Link href="/catalogue" className="btn solid">View full catalogue <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      {/* RETAILER VOICE */}
      <section style={{
        padding: 'clamp(56px, 7vw, 100px) clamp(22px, 4vw, 60px)',
        background: 'var(--ink)', color: 'var(--cream-paper)',
        textAlign: 'center', position: 'relative',
      }}>
        <div style={{ position: 'relative', maxWidth: 780, margin: '0 auto' }}>
          <div className="eyebrow" style={{ color: 'var(--cream-deep)', letterSpacing: '.34em', marginBottom: 22 }}>What our retailers say</div>
          <p className="display" style={{ fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.28, fontStyle: 'italic', color: 'var(--cream-paper)' }}>
            &ldquo;We&apos;ve bought from Sumti every year since my father opened our shop in 1994. The <em>finish has never changed.</em> That&apos;s the sentence.&rdquo;
          </p>
          <div style={{ marginTop: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <span style={{ width: 32, height: 1, background: 'var(--cream-deep)' }} />
            <span style={{ fontFamily: 'var(--f-caps)', fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: 'var(--cream-deep)' }}>Retailer · Coimbatore · 30 years with Sumti</span>
            <span style={{ width: 32, height: 1, background: 'var(--cream-deep)' }} />
          </div>
        </div>
      </section>

    </SiteLayout>
  )
}
