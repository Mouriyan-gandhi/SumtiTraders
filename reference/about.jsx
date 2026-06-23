/* =========================================================
   ABOUT PAGE — Our heritage since 1970
   ========================================================= */

const TIMELINE = [
  { y: '1970', t: 'A counter in Sowcarpet', d: 'Sumti Traders opens its first wholesale counter in north Chennai. A handful of designs, one shared workbench, one ledger.' },
  { y: '1976', t: 'The design ledger', d: 'The first design book is bound — entries that today\'s pieces still trace back to.' },
  { y: '1988', t: 'Swarnika is born', d: 'The premium temple and American diamond house — launched to answer retailers asking for the considered, looked-at-closely piece.' },
  { y: '1995', t: 'Second branch · T. Nagar', d: 'A second Chennai address opens to serve the city\'s busiest retail belt.' },
  { y: '2008', t: 'FT joins the family', d: 'A budget-friendly fashion line built for retailers who move volume — accessible price, refined finish.' },
  { y: '2015', t: 'Third branch · Anna Nagar', d: 'The full three-branch network is complete; partnerships expand across India.' },
  { y: 'Today', t: '10,000+ partners, 3,000+ women', d: 'Three houses, three branches, more than ten thousand retail partners and over three thousand women entrepreneurs supported online — still wholesale-first, still Chennai.' },
];

const AboutPage = ({ isMobile, go }) => {
  return (
    <div>
      {/* HERO */}
      <section style={{
        padding: isMobile ? '50px 22px 30px' : '90px 60px 60px',
        position: 'relative', overflow:'hidden',
        background: 'var(--cream-paper)',
      }}>
        <div style={{
          position:'absolute', inset:0, opacity:.18,
          backgroundImage:'url(patterns/paisley.svg)', backgroundSize:'320px',
        }}/>
        <div style={{ position:'relative', zIndex:2 }}>
          <div className="eyebrow"><TinyDiamond/> &nbsp;<span>Our Story · Since 1970</span></div>
          <h1 className="display" style={{ fontSize: isMobile ? 54 : 132, lineHeight: 0.88, marginTop: 18 }}>
            A heritage<br/>
            of <em>trust.</em>
          </h1>
        </div>
      </section>

      {/* INTRO + SEAL */}
      <section style={{
        padding: isMobile ? '40px 22px 60px' : '60px 60px 100px',
        background: 'var(--cream-paper)',
        display:'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
        gap: isMobile ? 32 : 80, alignItems:'center',
      }}>
        <div>
          <p className="thin" style={{ fontSize: isMobile ? 20 : 28, fontStyle:'italic', lineHeight: 1.35, color:'var(--ink)' }}>
            Sumti Traders began on a single counter in Sowcarpet, Chennai — one workbench, one ledger, a few hundred designs.
          </p>
          <p className="body" style={{ marginTop: 24, fontSize: 14, lineHeight: 1.8 }}>
            More than five decades on, what began as a single counter has grown into a three-house operation empowering over ten thousand retail partners across India. The principle has not changed. We make gold covering jewellery the way it ought to be made: finished by people who can tell the right curve from a curve that is almost right.
          </p>
          <p className="body" style={{ marginTop: 16, fontSize: 14, lineHeight: 1.8 }}>
            Our three houses — <em style={{ fontStyle:'italic', color:'var(--ink)' }}>First Touch</em> for gold covering and forming, <em style={{ fontStyle:'italic', color:'var(--ink)' }}>Swarnika</em> for premium temple and American diamond, <em style={{ fontStyle:'italic', color:'var(--ink)' }}>FT</em> for affordable fashion — reach retailers in every corner of the country from three Chennai branches.
          </p>
        </div>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', position:'relative' }}>
          <div style={{ position:'absolute', inset:0, backgroundImage:'url(patterns/mandala.svg)', backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center', opacity:.25 }}/>
          <div style={{ position:'relative' }}>
            <Seal size={isMobile ? 260 : 360}/>
          </div>
        </div>
      </section>

      {/* THE PROCESS — three columns */}
      <section style={{
        padding: isMobile ? '60px 22px' : '110px 60px',
        background: 'var(--cream-warm)',
        position:'relative',
      }}>
        <div className="sect-head">
          <div className="left">
            <div className="eyebrow"><span className="snum">N° 02</span> · <span>How it is made</span></div>
            <h2 className="display" style={{ fontSize: isMobile ? 38 : 64 }}>
              How a piece <em>is made.</em>
            </h2>
          </div>
          <div className="right">
            <p className="body">Three stages, in our care from sketch to ship. Gold covering, forming, finishing — every step under our Chennai roof.</p>
          </div>
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? 22 : 28,
        }}>
          {[
            ['01','The Sketch','Every collection begins as a pencil drawing in the design book — the same kind we have kept since the 1970s. A piece is committed to ink only when it has survived three rounds of revision.'],
            ['02','The Form','Master karigars shape each component in-house. Brass base, copper plate, gold covering — every step within sight of the bench, every finish checked against a five-decade archive.'],
            ['03','The Quiet','Before a piece leaves Chennai, it rests on the studio table for forty-eight hours. We look at it in the morning, at noon, in evening light. If it still looks right at the end, it ships.'],
          ].map(([n, t, d], i)=>(
            <div key={i} style={{
              background: 'var(--cream-paper)',
              padding: isMobile ? 28 : 36,
              border: '1px solid rgba(138,109,42,.2)',
              position:'relative',
            }}>
              <div style={{ position:'absolute', top: 18, right: 18, opacity:.4 }}>
                <Ornament size={60}/>
              </div>
              <div className="thin" style={{ fontSize: 14, color:'var(--gold)', letterSpacing:'.3em' }}>STAGE {n}</div>
              <h3 className="display" style={{ fontSize: 32, marginTop: 12, lineHeight: 1 }}>
                {t.split(' ').map((w,wi)=>wi===t.split(' ').length-1 ? <em key={wi}>{w}</em> : <span key={wi}>{w} </span>)}
              </h3>
              <Divider/>
              <p className="body" style={{ marginTop: 18, fontSize: 13, lineHeight: 1.75 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{
        padding: isMobile ? '60px 22px' : '110px 60px',
        background: 'var(--cream-paper)',
        position:'relative',
      }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'url(patterns/mandala.svg)', backgroundSize:'700px', backgroundPosition:'right -200px center', backgroundRepeat:'no-repeat', opacity:.15, pointerEvents:'none' }}/>

        <div className="sect-head" style={{ position:'relative' }}>
          <div className="left">
            <div className="eyebrow"><span className="snum">N° 03</span> · <span>A Timeline</span></div>
            <h2 className="display" style={{ fontSize: isMobile ? 38 : 64 }}>
              From 1970 <em>onwards.</em>
            </h2>
          </div>
        </div>

        <div style={{ position:'relative', maxWidth: 820, margin:'0 auto' }}>
          {TIMELINE.map((e, i) => (
            <div key={e.y} style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '64px 1fr' : '120px 36px 1fr',
              gap: isMobile ? 16 : 28,
              padding: isMobile ? '16px 0' : '24px 0',
              borderTop: i === 0 ? 'none' : '1px solid rgba(138,109,42,.25)',
              alignItems: 'baseline',
            }}>
              <div className="display" style={{ fontSize: isMobile ? 26 : 36, color: 'var(--gold)', fontStyle:'italic' }}>{e.y}</div>
              {!isMobile && (
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height: 36 }}>
                  <TinyDiamond size={9}/>
                </div>
              )}
              <div>
                <h3 className="display" style={{ fontSize: isMobile ? 20 : 26, marginBottom: 6 }}>{e.t}</h3>
                <p className="body" style={{ fontSize: 13, lineHeight: 1.7 }}>{e.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WOMEN ENTREPRENEURS BAND */}
      <section style={{
        padding: isMobile ? '60px 22px' : '110px 60px',
        background: 'var(--cream-warm)',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', right: isMobile ? '-50%' : '-10%', top:'-15%',
          width: isMobile ? 360 : 580, height: isMobile ? 360 : 580,
          backgroundImage:'url(patterns/paisley.svg)', backgroundSize:'320px', opacity:.3, pointerEvents:'none',
        }}/>
        <div style={{ position:'relative', display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: isMobile ? 28 : 70, alignItems:'center' }}>
          <div>
            <div className="eyebrow"><span className="snum">N° 04</span> · <span>The Reseller Programme</span></div>
            <h2 className="display" style={{ fontSize: isMobile ? 44 : 84, lineHeight: 0.95, marginTop: 14 }}>
              <span className="display" style={{ fontSize: isMobile ? 84 : 160, color: 'var(--gold)', display:'block', lineHeight: 0.85 }}>3,000<span style={{fontFamily:'var(--f-thin)', fontStyle:'italic'}}>+</span></span>
              women, <em>their own</em><br/>businesses.
            </h2>
          </div>
          <div>
            <p className="thin" style={{ fontSize: isMobile ? 18 : 22, fontStyle:'italic', lineHeight: 1.4, color:'var(--ink)' }}>
              More than three thousand women across India run jewellery businesses online with our support.
            </p>
            <p className="body" style={{ marginTop: 18, fontSize: 14, lineHeight: 1.75 }}>
              We supply at wholesale rates, share lookbooks and product photography, advise on pricing, and handle dispatch so they can focus on their customers. From Instagram boutiques in small towns to home-run resale studios in metros — the Sumti reseller circle is our quietest, proudest export.
            </p>
            <div style={{ display:'flex', gap: 8, flexWrap:'wrap', marginTop: 20 }}>
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
        padding: isMobile ? '50px 22px' : '90px 60px',
        background: 'var(--ink)', color: 'var(--cream-paper)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position:'absolute', inset:0, opacity:.08,
          backgroundImage:'url(patterns/paisley.svg)', backgroundSize:'280px' }}/>
        <div style={{ position: 'relative' }}>
          <div className="eyebrow" style={{ color:'var(--cream-deep)' }}><TinyDiamond color="#a3863f"/>&nbsp;&nbsp;What we hold to</div>
          <div style={{
            display:'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? 28 : 40,
            marginTop: 36,
          }}>
            {[
              ['Made here','Every piece, finished in our Chennai workshop. No outsourcing.'],
              ['Honest finish','Gold covering, openly so. Premium craft at a fair counter price.'],
              ['Three houses','First Touch, Swarnika, FT — three markets, one trust.'],
              ['Together we grow','3,000+ women entrepreneurs running businesses with us.'],
            ].map(([t,d],i)=>(
              <div key={i}>
                <div className="display" style={{ fontSize: 22, color:'var(--cream-paper)' }}>{t}</div>
                <div className="body-sm" style={{ marginTop: 8, color:'rgba(250,243,224,.65)' }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

window.AboutPage = AboutPage;
