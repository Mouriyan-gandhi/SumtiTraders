/* =========================================================
   BRAND PORTFOLIO PAGE — three houses
   ========================================================= */

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
    logoBrown: 'logos/firsttouch-brown.png',
    logoGold: 'logos/firsttouch-gold.png',
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
    tagline: 'The connoisseur\'s house.',
    color: '#8a5028',
    accentCream: '#ecdbb7',
    logoBrown: 'logos/swarnika-brown.png',
    logoCream: 'logos/swarnika-cream.png',
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
    logoBrown: 'logos/ft-brown.png',
    logoCream: 'logos/ft-cream.png',
    desc: 'Budget-friendly fashion jewellery for retailers who move volume. FT keeps the price accessible without dropping the finish — the line that turns walk-ins into regulars.',
    pillars: ['Budget-friendly', 'Fashion-forward', 'High turnover', 'Retail-ready'],
    estd: '2008',
    quote: 'Approachable is a finish too.',
    stats: [['6', 'drops a year'], ['85+', 'retail partners'], ['2008', 'launched']],
  },
];

const BrandsPage = ({ isMobile }) => {
  const [open, setOpen] = React.useState(null);
  const [hover, setHover] = React.useState(null);

  return (
    <div>
      {/* HERO */}
      <section style={{
        padding: isMobile ? '40px 22px 30px' : '70px 60px 50px',
        position: 'relative', overflow: 'hidden',
      }} className="bg-marble">
        <div style={{
          position:'absolute', right: isMobile ? '-30%' : '-10%', top: '-20%',
          width: isMobile ? '400px' : '700px', height: isMobile ? '400px' : '700px',
          backgroundImage:'url(patterns/mandala.svg)', backgroundSize:'contain', backgroundRepeat:'no-repeat', opacity:.4,
        }}/>
        <div style={{ position:'relative', zIndex: 2, maxWidth: 760 }}>
          <div className="eyebrow"><TinyDiamond/> &nbsp;<span>Our Three Houses</span></div>
          <h1 className="display" style={{ fontSize: isMobile ? 44 : 116, lineHeight: 0.92, marginTop: 18 }}>
            Three <em>brands.</em><br/>Three customers.
          </h1>
          <p className="thin" style={{ fontSize: isMobile ? 17 : 22, fontStyle:'italic', color:'var(--ink-soft)', marginTop: 28, maxWidth: 560 }}>
            First Touch for gold covering and forming. Swarnika for temple and American diamond. FT for affordable fashion. One trust, three counters.
          </p>
        </div>
      </section>

      {/* THREE LARGE BRAND SECTIONS */}
      {BRANDS.map((b, i) => (
        <BrandSection key={b.id} brand={b} i={i} isMobile={isMobile} onOpen={()=>setOpen(b)}/>
      ))}

      {/* CROSS-BRAND CTA */}
      <section style={{
        background: 'var(--ink)', color: 'var(--cream-paper)',
        padding: isMobile ? '50px 22px' : '90px 60px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position:'absolute', inset:0, opacity:.06,
          backgroundImage:'url(patterns/mandala.svg)', backgroundSize:'700px', backgroundPosition:'center', backgroundRepeat:'no-repeat',
        }}/>
        <div style={{ position:'relative' }}>
          <div className="eyebrow" style={{ color:'var(--cream-deep)' }}>Sumti Traders · Parent house</div>
          <h2 className="display" style={{ fontSize: isMobile ? 32 : 56, marginTop: 14, lineHeight: 1 }}>
            All three brands, <em>one</em> wholesale partner.
          </h2>
          <p className="thin" style={{ fontSize: isMobile ? 16 : 20, fontStyle:'italic', color:'rgba(250,243,224,.7)', marginTop: 22, maxWidth: 560, marginLeft:'auto', marginRight:'auto' }}>
            Retailers across India source First Touch, Swarnika, and FT from a single point — our Chennai head office.
          </p>
        </div>
      </section>

      {/* Detail lightbox */}
      <BrandLightbox brand={open} onClose={()=>setOpen(null)} isMobile={isMobile}/>
    </div>
  );
};

const BrandSection = ({ brand, i, isMobile, onOpen }) => {
  const reverse = i % 2 === 1;
  return (
    <section style={{
      padding: isMobile ? '60px 22px' : '120px 60px',
      background: i === 1 ? 'var(--cream-warm)' : 'var(--cream-paper)',
      position:'relative', overflow:'hidden',
    }}>
      {/* corner mandala wash */}
      <div style={{
        position:'absolute',
        [reverse ? 'right' : 'left']: '-15%', top: '50%', transform:'translateY(-50%)',
        width: isMobile ? 380 : 720, height: isMobile ? 380 : 720,
        backgroundImage:'url(patterns/mandala.svg)', backgroundSize:'contain', backgroundRepeat:'no-repeat',
        opacity: .25, pointerEvents: 'none',
      }}/>

      <div style={{
        display:'grid',
        gridTemplateColumns: isMobile ? '1fr' : (reverse ? '1fr 1.2fr' : '1.2fr 1fr'),
        gap: isMobile ? 32 : 80, alignItems: 'center',
        position: 'relative',
      }}>
        {/* LOGO PANEL */}
        <div style={{
          order: isMobile ? 0 : (reverse ? 1 : 0),
          position:'relative',
          aspectRatio: '4 / 5',
          background: brand.accentCream,
          border: `1px solid ${brand.color}33`,
          padding: isMobile ? 28 : 56,
          display:'flex', flexDirection:'column', justifyContent:'space-between',
        }}>
          {/* corner ornaments */}
          <div style={{ position:'absolute', top: 16, left: 16, opacity:.5 }}><CornerOrnament size={70}/></div>
          <div style={{ position:'absolute', top: 16, right: 16, transform:'scaleX(-1)', opacity:.5 }}><CornerOrnament size={70}/></div>
          <div style={{ position:'absolute', bottom: 16, left: 16, transform:'scaleY(-1)', opacity:.5 }}><CornerOrnament size={70}/></div>
          <div style={{ position:'absolute', bottom: 16, right: 16, transform:'scale(-1,-1)', opacity:.5 }}><CornerOrnament size={70}/></div>

          {/* num */}
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative', zIndex:2 }}>
            <div className="thin" style={{ fontSize: 16, color: brand.color, letterSpacing:'.3em' }}>N° {brand.num}</div>
            <div className="eyebrow" style={{ color: brand.color, fontSize: 9 }}>{brand.estd === 'Flagship' ? 'SINCE 1970' : `SINCE · ${brand.estd}`}</div>
          </div>

          {/* logo */}
          <div style={{ flex: 1, display:'flex', alignItems:'center', justifyContent:'center', padding: '24px 0' }}>
            <img src={brand.logoBrown} alt={brand.name} style={{ maxWidth:'80%', maxHeight: isMobile ? 200 : 320, filter:'drop-shadow(0 8px 22px rgba(58,24,32,.12))' }}/>
          </div>

          {/* footer label */}
          <div style={{ position:'relative', zIndex:2 }}>
            <Divider/>
            <div style={{ textAlign:'center', marginTop: 8 }}>
              <div className="eyebrow" style={{ color: brand.color, fontSize: 10 }}>{brand.market}</div>
            </div>
          </div>
        </div>

        {/* COPY PANEL */}
        <div style={{ order: isMobile ? 1 : (reverse ? 0 : 1) }}>
          <div className="eyebrow" style={{ display:'flex', alignItems:'center', gap: 10 }}>
            <span className="snum" style={{ color: brand.color }}>House {brand.num}</span>
            <span>·</span>
            <span>{brand.tagline}</span>
          </div>
          <h2 className="display" style={{ fontSize: isMobile ? 60 : 96, lineHeight: 0.92, marginTop: 12, color: brand.color }}>
            {brand.name.replace(brand.italic, '')}<em>{brand.italic}</em>
          </h2>
          <p className="body" style={{ marginTop: 22, maxWidth: 460, fontSize: 14, lineHeight: 1.75 }}>{brand.desc}</p>

          {/* pillars */}
          <div style={{ display:'flex', gap: 8, flexWrap:'wrap', marginTop: 22 }}>
            {brand.pillars.map(p => (
              <span key={p} className="chip" style={{ borderColor: `${brand.color}55`, color: brand.color }}>{p}</span>
            ))}
          </div>

          {/* stats */}
          <div style={{ display:'flex', gap: isMobile ? 22 : 36, marginTop: 32, flexWrap:'wrap' }}>
            {brand.stats.map(([n, l],idx) => (
              <div key={idx} style={{ borderTop:`1px solid ${brand.color}55`, paddingTop: 12, minWidth: 100 }}>
                <div className="display" style={{ fontSize: 28, color: brand.color }}>{n}</div>
                <div className="body-sm" style={{ marginTop: 2, fontSize: 11, letterSpacing:'.1em' }}>{l}</div>
              </div>
            ))}
          </div>

          {/* pull-quote */}
          <div style={{
            marginTop: 30, padding: '18px 24px', borderLeft:`2px solid ${brand.color}`,
            background: 'rgba(255,255,255,.4)',
          }}>
            <p className="thin" style={{ fontStyle:'italic', fontSize: 18, lineHeight: 1.35, color:'var(--ink)' }}>
              &ldquo; {brand.quote} &rdquo;
            </p>
          </div>

          <button className="btn" style={{ marginTop: 28, borderColor: brand.color, color: brand.color }} onClick={onOpen}>
            Inside the house <span className="arr">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

const BrandLightbox = ({ brand, onClose, isMobile }) => {
  if (!brand) return null;
  return (
    <div className={`lightbox open`}>
      <button className="close" onClick={onClose}>×</button>
      <div className="panel" style={{
        background: brand.accentCream, border: `1px solid ${brand.color}`,
        maxHeight: '85vh', overflow:'auto',
      }}>
        <div style={{ textAlign:'center' }}>
          <img src={brand.logoBrown} alt={brand.name} style={{ maxHeight: 120, margin:'0 auto' }}/>
        </div>
        <Divider wide/>
        <h2 className="display" style={{ fontSize: isMobile ? 36 : 48, textAlign:'center', color: brand.color, marginTop: 12 }}>
          The {brand.name} <em>collection</em>
        </h2>
        <p className="body" style={{ textAlign:'center', marginTop: 14, maxWidth: 480, marginLeft:'auto', marginRight:'auto' }}>{brand.desc}</p>

        <div style={{ display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 30 }}>
          {['necklace','earring','bangle','ring','maang','bracelet'].map((k,i)=>(
            <div key={i} style={{ aspectRatio:'1/1', background:'var(--cream-paper)', border:`1px solid ${brand.color}33`, padding: 12 }}>
              <Jewel kind={k}/>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center', marginTop: 30 }}>
          <button className="btn" style={{ borderColor: brand.color, color: brand.color }} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

window.BrandsPage = BrandsPage;
window.BRANDS = BRANDS;
