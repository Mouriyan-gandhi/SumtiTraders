import type { Metadata } from 'next'
import Image from 'next/image'
import SiteLayout from '@/components/SiteLayout'
import { TinyDiamond, Divider, Ornament } from '@/components/Patterns'
import CountUp from '@/components/CountUp'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sumtitraders.in'

export const metadata: Metadata = {
  title: 'Our Heritage · Sumti Traders since 1970 · Chennai Gold Covering Jewellery',
  description:
    'From a single counter in Sowcarpet in 1970 to three houses, three Chennai branches, 10,000+ retail partners and 3,000+ women entrepreneurs. The Sumti Traders story.',
  keywords: [
    'Sumti Traders story',
    'Sumti Traders history',
    'Chennai jewellery wholesalers since 1970',
    'gold covering jewellery makers Chennai',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'Our Heritage · Sumti Traders since 1970',
    description: 'Fifty years of wholesale gold covering jewellery from Chennai.',
    url: `${SITE_URL}/about`,
    type: 'article',
  },
}

const TIMELINE = [
  { y: '1970', t: 'A counter in Sowcarpet', d: 'Sumti Traders opens its first wholesale counter in north Chennai. A handful of designs, one shared workbench, one ledger.' },
  { y: '1976', t: 'The design ledger', d: "The first design book is bound. Entries that today's pieces still trace back to." },
  { y: '1988', t: 'Swarnika is born', d: 'The premium temple and American diamond house. Launched to answer retailers asking for the considered, looked-at-closely piece.' },
  { y: '2000', t: 'The Sowcarpet warehouses', d: 'Two more Sowcarpet units open to hold the full range of all three houses under one bench, minutes from the main branch.' },
  { y: '2008', t: 'FT joins the family', d: 'A budget-friendly fashion line built for retailers who move volume. Accessible price, refined finish.' },
  { y: '2016', t: '10,000 retail partners', d: 'The wholesale network crosses the ten-thousand mark. Boxes leave Sowcarpet for every state in India.' },
  { y: 'Today', t: '10,000+ partners, 3,000+ women', d: 'Three houses, one Chennai head office, more than ten thousand retail partners and over three thousand women entrepreneurs supported online. Still wholesale first, still Sowcarpet.' },
]

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* HERO — photograph-anchored */}
      <section className="about-hero">
        <div className="about-hero-media">
          <Image
            src="/photos/about-shop.jpeg"
            alt="Sumti Traders shop in Sowcarpet, Chennai"
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="about-hero-media-caption">
            <span style={{ fontFamily: 'var(--f-display)', fontStyle: 'italic', fontSize: 18 }}>The shop.</span>
            <span style={{ fontFamily: 'var(--f-caps)', fontSize: 10, letterSpacing: '.3em', textTransform: 'uppercase', marginLeft: 12, color: 'var(--cream-deep)' }}>Perumal Mudali Street · Sowcarpet</span>
          </div>
        </div>

        <div className="about-hero-copy fadeup">
          <div className="eyebrow" style={{ color: 'var(--rust)', letterSpacing: '.32em' }}>Our Story · Since 1970</div>
          <h1 className="display" style={{ fontSize: 'clamp(44px, 6vw, 92px)', lineHeight: 0.94, marginTop: 18, letterSpacing: '-0.01em' }}>
            A heritage<br />of <em>trust.</em>
          </h1>
          <p className="thin" style={{ fontSize: 'clamp(18px, 1.8vw, 24px)', fontStyle: 'italic', lineHeight: 1.35, color: 'var(--ink)', marginTop: 26, maxWidth: 520 }}>
            Sumti Traders began on a single counter in Sowcarpet. One workbench, one ledger, a few hundred designs.
          </p>
          <p className="body" style={{ marginTop: 22, fontSize: 14, lineHeight: 1.8, maxWidth: 540 }}>
            Fifty-five years on, that counter has become a family of three houses supplying more than ten thousand retail partners across India. The principle has not changed. We make gold covering jewellery the way it ought to be made, finished by karigars who can tell the right curve from one that is almost right.
          </p>
          <p className="body" style={{ marginTop: 14, fontSize: 14, lineHeight: 1.8, maxWidth: 540 }}>
            Three houses reach every corner of the country from Perumal Mudali Street.
            <em style={{ color: 'var(--rust)' }}> First Touch</em> for gold covering and forming.
            <em style={{ color: 'var(--rust)' }}> Swarnika</em> for premium temple and American diamond.
            <em style={{ color: 'var(--rust)' }}> FT</em> for affordable fashion.
          </p>
        </div>
      </section>

      {/* THE PROCESS */}
      <section style={{
        padding: 'clamp(60px, 8vw, 110px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-warm)',
        position: 'relative',
      }}>
        <div className="sect-head">
          <div className="left">
            <div className="eyebrow"><span>How it is made</span></div>
            <h2 className="display" style={{ fontSize: 'clamp(38px, 5vw, 64px)' }}>
              How a piece <em>is made.</em>
            </h2>
          </div>
          <div className="right">
            <p className="body">Three stages, in our care from sketch to ship. Gold covering, forming, finishing. Every step under our Chennai roof.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            ['01', 'The Sketch', 'Every collection begins as a pencil drawing in the design book, the same kind we have kept since the 1970s. A piece is committed to ink only when it has survived three rounds of revision.'],
            ['02', 'The Form', 'Master karigars shape each component in-house. Brass base, copper plate, gold covering. Every step within sight of the bench, every finish checked against a five-decade archive.'],
            ['03', 'The Quiet', 'Before a piece leaves Chennai, it rests on the studio table for forty-eight hours. We look at it in the morning, at noon, in evening light. If it still looks right at the end, it ships.'],
          ].map(([n, t, d], i) => (
            <div key={i} className={`fadeup ${i > 0 ? `fadeup-delay-${i}` : ''}`} style={{
              background: 'var(--cream-paper)',
              padding: 36,
              border: '1px solid rgba(138,109,42,.2)',
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 18, right: 18, opacity: .4 }} aria-hidden="true">
                <Ornament size={60} />
              </div>
              <div className="thin" style={{ fontSize: 14, color: 'var(--gold)', letterSpacing: '.3em' }}>STAGE {n}</div>
              <h3 className="display" style={{ fontSize: 32, marginTop: 12, lineHeight: 1 }}>
                {t.split(' ').map((w, wi) => wi === t.split(' ').length - 1 ? <em key={wi}>{w}</em> : <span key={wi}>{w} </span>)}
              </h3>
              <Divider />
              <p className="body" style={{ marginTop: 18, fontSize: 13, lineHeight: 1.75 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{
        padding: 'clamp(60px, 8vw, 110px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-paper)',
        position: 'relative',
      }}>

        <div className="sect-head" style={{ position: 'relative' }}>
          <div className="left">
            <div className="eyebrow"><span>A Timeline</span></div>
            <h2 className="display" style={{ fontSize: 'clamp(38px, 5vw, 64px)' }}>
              From 1970 <em>onwards.</em>
            </h2>
          </div>
        </div>

        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
          {TIMELINE.map((e, i) => (
            <div key={e.y} className="fadeup grid grid-cols-[64px_1fr] md:grid-cols-[120px_36px_1fr] gap-5 md:gap-7 items-baseline" style={{
              padding: '24px 0',
              borderTop: i === 0 ? 'none' : '1px solid rgba(138,109,42,.25)',
            }}>
              <div className="display" style={{ fontSize: 'clamp(30px, 5vw, 40px)', color: 'var(--gold)', fontStyle: 'italic' }}>{e.y}</div>
              <div className="hidden md:flex justify-center items-center h-[36px]" aria-hidden="true">
                <span style={{ display: 'inline-block', width: 9, height: 9, background: 'var(--gold)', transform: 'rotate(45deg)' }} />
              </div>
              <div>
                <h3 className="display" style={{ fontSize: 26, marginBottom: 6 }}>{e.t}</h3>
                <p className="body" style={{ fontSize: 13, lineHeight: 1.7 }}>{e.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WOMEN ENTREPRENEURS BAND */}
      <section style={{
        padding: 'clamp(60px, 8vw, 110px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-warm)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-[70px] items-center">
          <div>
            <div className="eyebrow"><span>The Reseller Programme</span></div>
            <h2 className="display" style={{ fontSize: 'clamp(38px, 6.4vw, 68px)', lineHeight: 1.02, marginTop: 14, letterSpacing: '-0.005em' }}>
              <span className="display" style={{ fontSize: 'clamp(80px, 14vw, 148px)', color: 'var(--gold)', display: 'block', lineHeight: 0.85, marginBottom: 6 }}>
                <CountUp end={3000} /><em style={{ fontStyle: 'italic' }}>+</em>
              </span>
              <span style={{ display: 'block' }}>women, running</span>
              <span style={{ display: 'block' }}><em>their own</em> businesses.</span>
            </h2>
          </div>
          <div>
            <p className="thin" style={{ fontSize: 22, fontStyle: 'italic', lineHeight: 1.4, color: 'var(--ink)' }}>
              More than three thousand women across India run jewellery businesses online with our support.
            </p>
            <p className="body" style={{ marginTop: 18, fontSize: 14, lineHeight: 1.75 }}>
              We supply at wholesale rates, share lookbooks and product photography, advise on pricing, and handle dispatch so they can focus on their customers. From Instagram boutiques in small towns to home-run resale studios in metros, the Sumti reseller circle is our quietest, proudest export.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 20 }}>
              <span className="chip">Wholesale rates</span>
              <span className="chip">Lookbook access</span>
              <span className="chip">Pricing support</span>
              <span className="chip">Dispatch assistance</span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section style={{
        padding: 'clamp(50px, 6vw, 90px) clamp(22px, 4vw, 60px)',
        background: 'var(--ink)', color: 'var(--cream-paper)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(163,134,63,.5), rgba(163,134,63,0))', maxWidth: 220, marginBottom: 18 }} />
          <div className="eyebrow" style={{ color: 'var(--cream-deep)', letterSpacing: '.32em', marginBottom: 32 }}>
            What we hold to
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {[
              ['Made here', 'Every piece, finished in our Chennai workshop. No outsourcing.'],
              ['Honest finish', 'Gold covering, openly so. Premium craft at a fair counter price.'],
              ['Three houses', 'First Touch, Swarnika, FT. Three markets, one trust.'],
              ['Together we grow', '3,000+ women entrepreneurs running businesses with us.'],
            ].map(([t, d], i) => (
              <div key={i} className={`fadeup ${i > 0 ? `fadeup-delay-${i}` : ''}`} style={{ borderTop: '1px solid rgba(250,243,224,.15)', paddingTop: 18 }}>
                <div className="display" style={{ fontSize: 22, color: 'var(--cream-paper)' }}>{t}</div>
                <div className="body-sm" style={{ marginTop: 10, color: 'rgba(250,243,224,.65)', lineHeight: 1.6 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
