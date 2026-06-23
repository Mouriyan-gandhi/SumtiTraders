/* =========================================================
   HOME PAGE
   ========================================================= */

const HomePage = ({ go, isMobile }) => {
  return (
    <div>
      {/* HERO */}
      <section style={{
        position: 'relative',
        padding: isMobile ? '32px 22px 48px' : '70px 60px 90px',
        minHeight: isMobile ? 'auto' : '760px',
        overflow: 'hidden',
      }} className="bg-marble">
        {/* big mandala behind */}
        <div style={{
          position: 'absolute', right: isMobile ? '-50%' : '-18%', top: isMobile ? '-10%' : '-22%',
          width: isMobile ? '500px' : '900px', height: isMobile ? '500px' : '900px',
          backgroundImage: 'url(patterns/mandala.svg)', backgroundSize: 'contain', backgroundRepeat:'no-repeat',
          opacity: .55, pointerEvents: 'none',
          animation: 'spin 240s linear infinite',
        }} />

        {/* paisley scatter top-left */}
        <div style={{
          position: 'absolute', left: isMobile ? '-30%' : '-8%', bottom: isMobile ? '-15%' : '-25%',
          width: isMobile ? '300px' : '460px', height: isMobile ? '300px' : '460px',
          backgroundImage: 'url(patterns/paisley.svg)', backgroundSize: '280px',
          opacity: .35, pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          {/* small chip row */}
          <div style={{ display:'flex', gap: 12, alignItems:'center', marginBottom: isMobile ? 22 : 36 }}>
            <span className="chip">Since 1970</span>
            <span className="chip">Chennai · 3 Branches</span>
            {!isMobile && <span className="chip">Wholesale Atelier</span>}
          </div>

          {/* type lockup */}
          <h1 className="display" style={{
            fontSize: isMobile ? '54px' : '156px',
            letterSpacing: '-0.02em',
            lineHeight: '0.88',
          }}>
            <span style={{ display:'block' }}>Sumti</span>
            <span style={{ display:'block', paddingLeft: isMobile ? 0 : '120px' }}>
              <em style={{ fontStyle:'italic' }}>Traders</em>
              {!isMobile && <span className="script" style={{
                fontSize: '64px', color: 'var(--gold)', marginLeft: 28, verticalAlign: '0.55em', display:'inline-block', transform:'rotate(-6deg)'
              }}>since&nbsp;1970</span>}
            </span>
          </h1>

          {isMobile && (
            <div className="script" style={{ fontSize: 36, color: 'var(--gold)', marginTop: 8 }}>since 1970</div>
          )}

          <div style={{ display:'flex', alignItems:'center', gap: 18, marginTop: isMobile ? 22 : 50, flexWrap:'wrap' }}>
            <div style={{ flex: isMobile ? '1 1 100%' : 'none', maxWidth: 360 }}>
              <p className="thin" style={{ fontSize: isMobile ? 18 : 22, lineHeight: 1.35, color: 'var(--ink-soft)', fontStyle:'italic' }}>
                Gold covering jewellery from Chennai. Three houses, one trust — empowering 10,000+ retail partners across India.
              </p>
            </div>
            <div style={{ display:'flex', gap: 10, marginLeft: isMobile ? 0 : 'auto', marginTop: isMobile ? 18 : 0 }}>
              <button className="btn solid" onClick={()=>go('catalogue')}>View Collection <span className="arr">→</span></button>
              <button className="btn" onClick={()=>go('about')}>Our Legacy</button>
            </div>
          </div>
        </div>

        {/* bottom hairline + meta row */}
        <div style={{ position:'absolute', left:0, right:0, bottom: 0 }}>
          <div className="hairline-gold"></div>
          <div style={{
            display:'flex', justifyContent:'space-between', padding: isMobile ? '14px 22px' : '16px 60px',
            fontFamily:'var(--f-caps)', fontSize:10, letterSpacing:'.24em', textTransform:'uppercase', color:'var(--ink-muted)',
          }}>
            <span>Scroll · Begin the journey</span>
            {!isMobile && <span>N° 01 — Couverture</span>}
            <span>↓</span>
          </div>
        </div>
      </section>

      {/* MARQUEE OF CATEGORIES */}
      <section className="marquee">
        <div className="marquee-track">
          <span style={{ fontSize: isMobile ? 26 : 38 }}>Necklaces <TinyDiamond /> Earrings <TinyDiamond /> Bangles <TinyDiamond /> Maang Tikka <TinyDiamond /> Rings <TinyDiamond /> Nose Pins <TinyDiamond /> Anklets <TinyDiamond /> Bracelets <TinyDiamond /> Bridal Sets <TinyDiamond /></span>
          <span style={{ fontSize: isMobile ? 26 : 38 }}>Necklaces <TinyDiamond /> Earrings <TinyDiamond /> Bangles <TinyDiamond /> Maang Tikka <TinyDiamond /> Rings <TinyDiamond /> Nose Pins <TinyDiamond /> Anklets <TinyDiamond /> Bracelets <TinyDiamond /> Bridal Sets <TinyDiamond /></span>
        </div>
      </section>

      {/* LEGACY BAND */}
      <section style={{
        padding: isMobile ? '60px 22px' : '110px 60px',
        position: 'relative', overflow:'hidden',
        background: 'var(--cream-warm)',
      }}>
        <div style={{
          position:'absolute', right: isMobile ? '-40%' : '-12%', top: '50%', transform:'translateY(-50%)',
          opacity: .35,
        }}>
          <Seal size={isMobile ? 240 : 420}/>
        </div>

        <div style={{ position:'relative', zIndex: 2, maxWidth: 720 }}>
          <div className="eyebrow" style={{ display:'flex', alignItems:'center', gap: 10, marginBottom: 18 }}>
            <TinyDiamond /> <span>The House</span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'minmax(auto, 420px) 1fr',
            gap: isMobile ? 20 : 60,
            alignItems: 'center',
          }}>
            <div>
              <div className="thin" style={{ fontSize: isMobile ? 24 : 36, color: 'var(--gold)', fontStyle:'italic', letterSpacing:'.02em', lineHeight: 1 }}>Since</div>
              <div className="display" style={{ fontSize: isMobile ? 96 : 180, lineHeight: '0.88', color: 'var(--ink)', marginTop: 4, letterSpacing: '-0.02em' }}>1970</div>
            </div>
            <div>
              <p className="display" style={{ fontSize: isMobile ? 28 : 44, lineHeight: 1.1, marginBottom: 14 }}>
                A heritage in <em>gold covering jewellery.</em>
              </p>
              <p className="body" style={{ maxWidth: 460, color:'var(--ink-soft)' }}>
                Sumti Traders has supplied India's finest retailers with gold covering jewellery since the 1970s. Three houses — <em style={{fontStyle:'italic', color:'var(--ink)'}}>First Touch, Swarnika, FT</em> — answer to three markets, all to one standard of finish.
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? 18 : 28,
            marginTop: isMobile ? 36 : 64,
          }}>
            {[
              ['1970', 'Year we began'],
              ['10,000+', 'Wholesale partners we empower'],
              ['3,000+', 'Women entrepreneurs supported'],
              ['3', 'Branches in Chennai'],
            ].map(([n, l],i)=>(
              <div key={i} style={{ borderTop: '1px solid rgba(26,22,18,.25)', paddingTop: 14 }}>
                <div className="display" style={{ fontSize: isMobile ? 30 : 40, lineHeight: 1 }}>{n}</div>
                <div className="body-sm" style={{ marginTop: 6, fontSize: isMobile ? 11 : 12, lineHeight: 1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE BRANDS */}
      <section style={{
        padding: isMobile ? '60px 22px' : '110px 60px',
        background: 'var(--cream-paper)',
        position:'relative',
      }}>
        <div className="sect-head">
          <div className="left">
            <div className="eyebrow"><span className="snum">N° 02</span> · <span>Our Three Houses</span></div>
            <h2 className="display" style={{ fontSize: isMobile ? 38 : 64 }}>
              One legacy, <em>three</em><br/>distinct voices.
            </h2>
          </div>
          <div className="right">
            <p className="body">Each house carries its own register — gold covering bridal, temple and American diamond, budget-friendly fashion — finished to one shared standard.</p>
          </div>
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? 18 : 22,
        }}>
          <BrandTile num="i" name="First Touch" tag="Gold Covering · Forming" desc="The flagship house. Gold covering and traditional forming jewellery — bridal sets, statement haarams, temple-inspired pieces. Made for the occasions of a lifetime." accent="#7a3a2a" go={go} />
          <BrandTile num="ii" name="Swarnika" tag="Temple · American Diamond" desc="Premium-quality temple jewellery and American diamond pieces. The connoisseur's house — careful, considered, made to be noticed up close." accent="#8a5028" go={go} />
          <BrandTile num="iii" name="FT" tag="Affordable · Fashion" desc="Budget-friendly fashion jewellery for retailers who move volume. Accessible price, refined finish — the daily floor's best friend." accent="#2c2520" go={go} />
        </div>

        <div style={{ display:'flex', justifyContent: 'center', marginTop: isMobile ? 30 : 50 }}>
          <button className="btn" onClick={()=>go('brands')}>Explore the brands <span className="arr">→</span></button>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{
        padding: isMobile ? '60px 22px' : '110px 60px',
        background: 'var(--cream-warm)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position:'absolute', left: isMobile ? '-50%' : '-15%', top: '50%', transform:'translateY(-50%)',
          width: isMobile ? 360 : 620, height: isMobile ? 360 : 620,
          backgroundImage:'url(patterns/mandala.svg)', backgroundSize:'contain', backgroundRepeat:'no-repeat',
          opacity:.22, pointerEvents:'none',
        }}/>
        <div style={{ position:'relative' }}>
          <div className="sect-head" style={{ alignItems: isMobile ? 'flex-start' : 'flex-end' }}>
            <div className="left">
              <div className="eyebrow"><span className="snum">N° 03</span> · <span>Who We Serve</span></div>
              <h2 className="display" style={{ fontSize: isMobile ? 38 : 64, maxWidth: 640 }}>
                A house <em>for everyone</em><br/>in the trade.
              </h2>
            </div>
            <div className="right">
              <p className="body">From a single counter to a mall pop-up to a woman running her shop from her phone — we supply, we set up, we support.</p>
            </div>
          </div>

          <div style={{
            display:'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? 16 : 22,
          }}>
            <ServiceCard
              n="01"
              title="Retailers"
              titleEm="& Wholesalers"
              body="Jewellery shops, multi-brand stores, distributors. Direct from our Chennai branches with the full range of all three houses — catalogue, samples, credit terms, repeat orders."
              tag="Bulk supply"
              kind="necklace"
            />
            <ServiceCard
              n="02"
              title="Shopping Centres"
              titleEm="& Pop-ups"
              body="On request, we set up dedicated counters at malls, exhibitions, festive bazaars and shopping centres. We bring the display, the inventory and the staff training — you bring the floor space."
              tag="On-request setup"
              kind="bangle"
            />
            <ServiceCard
              n="03"
              title="3,000+ Women"
              titleEm="Entrepreneurs"
              body="Our reseller programme empowers more than three thousand women running their own jewellery businesses online. We supply at wholesale rates, share lookbooks, and help them grow."
              tag="Reseller programme"
              kind="earring"
              accent
            />
            <ServiceCard
              n="04"
              title="Walk-in Clients"
              titleEm="& Bridal Parties"
              body="All three Chennai branches welcome walk-in bulk buyers and bridal trousseau bookings — by appointment for the bridal floor, open counter for retail-trade."
              tag="In-branch"
              kind="maang"
            />
          </div>

          <div style={{ display:'flex', justifyContent:'center', marginTop: isMobile ? 30 : 50 }}>
            <button className="btn solid" onClick={()=>go('contact')}>Open a wholesale account <span className="arr">→</span></button>
          </div>
        </div>
      </section>

      {/* COLLECTIONS GRID */}
      <section style={{
        padding: isMobile ? '60px 22px' : '110px 60px',
        background: 'var(--cream-base)',
        position: 'relative',
      }}>
        <div style={{
          position:'absolute', inset: 0,
          backgroundImage: 'url(patterns/paisley.svg)', backgroundSize:'320px', opacity:.18, pointerEvents:'none',
        }}/>
        <div style={{ position:'relative' }}>
          <div className="sect-head">
            <div className="left">
              <div className="eyebrow"><span className="snum">N° 04</span> · <span>Recent Pieces</span></div>
              <h2 className="display" style={{ fontSize: isMobile ? 38 : 64 }}>
                The <em>Couverture</em><br/>collection.
              </h2>
            </div>
            <div className="right">
              <p className="body">A glimpse from this season's atelier. Click any piece to enlarge, or browse the full catalogue.</p>
            </div>
          </div>

          <div style={{
            display:'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? 10 : 16,
          }}>
            {[
              ['Aabha', 'Necklace', 'ST · 0142', 'necklace', 'First Touch'],
              ['Rohini', 'Jhumka', 'ST · 0287', 'earring', 'Swarnika'],
              ['Meenakshi', 'Bangle Set', 'ST · 0119', 'bangle', 'First Touch'],
              ['Tara', 'Ring', 'ST · 0033', 'ring', 'FT'],
              ['Surya', 'Maang Tikka', 'ST · 0204', 'maang', 'First Touch'],
              ['Anika', 'Bracelet', 'ST · 0066', 'bracelet', 'Swarnika'],
              ['Lavanya', 'Anklet', 'ST · 0211', 'anklet', 'Swarnika'],
              ['Kamala', 'Nose Pin', 'ST · 0058', 'nose', 'FT'],
            ].map(([nm, type, code, kind, brand],i)=>(
              <JewelCard key={i} name={nm} type={type} code={code} kind={kind} brand={brand}/>
            ))}
          </div>

          <div style={{ display:'flex', justifyContent: 'center', marginTop: isMobile ? 30 : 50 }}>
            <button className="btn solid" onClick={()=>go('catalogue')}>View full catalogue <span className="arr">→</span></button>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{
        padding: isMobile ? '50px 22px' : '90px 60px',
        background: 'var(--ink)', color: 'var(--cream-paper)',
        textAlign: 'center', position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:'url(patterns/mandala.svg)', backgroundSize: '600px', backgroundPosition:'center', backgroundRepeat:'no-repeat',
          opacity: .08,
        }} />
        <div style={{ position:'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ color: 'var(--gold)', fontFamily:'var(--f-display)', fontSize: 64, fontStyle:'italic', lineHeight: '0.4' }}>“</div>
          <p className="display" style={{ fontSize: isMobile ? 26 : 42, lineHeight: 1.25, marginTop: 18, fontStyle: 'italic' }}>
            A bride does not know the difference between gold and craft. She only knows whether it feels <em>like hers.</em>
          </p>
          <div style={{ marginTop: 32, display:'flex', alignItems:'center', justifyContent:'center', gap: 14 }}>
            <span style={{ width: 32, height: 1, background: 'var(--cream-deep)'}}></span>
            <span style={{ fontFamily:'var(--f-caps)', fontSize: 11, letterSpacing: '.26em', textTransform:'uppercase', color: 'var(--cream-deep)' }}>The Atelier Notebook · Sumti Traders</span>
            <span style={{ width: 32, height: 1, background: 'var(--cream-deep)'}}></span>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{
        padding: isMobile ? '50px 22px' : '90px 60px',
        background: 'var(--cream-warm)',
        position: 'relative', overflow:'hidden',
      }}>
        <div style={{
          display: isMobile ? 'block' : 'flex',
          alignItems:'center', justifyContent: 'space-between', gap: 40,
          maxWidth: 1080, margin: '0 auto',
        }}>
          <div>
            <div className="eyebrow"><TinyDiamond /> &nbsp;Wholesale Enquiries</div>
            <h3 className="display" style={{ fontSize: isMobile ? 32 : 52, marginTop: 12, lineHeight: 1 }}>
              Open a <em>wholesale</em><br/>account with us.
            </h3>
          </div>
          <div style={{ marginTop: isMobile ? 22 : 0, display:'flex', flexDirection:'column', gap: 14 }}>
            <p className="body" style={{ maxWidth: 320 }}>Bulk orders, retailer enquiries, and atelier visits — write to us at the Chennai head office.</p>
            <div style={{ display:'flex', gap: 10 }}>
              <button className="btn solid" onClick={()=>go('contact')}>Contact us <span className="arr">→</span></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ====== Brand tile ====== */
const BrandTile = ({ num, name, tag, desc, accent, go }) => {
  return (
    <div className="brand-card" onClick={()=>go('brands')} style={{ background: 'var(--cream-paper)' }}>
      <div className="bgwash" style={{
        background:
          `radial-gradient(circle at 80% 80%, ${accent}11 0%, transparent 60%), var(--cream-paper)`,
      }}/>
      <div className="heroseal">
        <Ornament size={240}/>
      </div>
      <div className="inner">
        <div className="num">N° {num}</div>
        <h3>{name.split(' ').map((w,i)=>i===0 ? <span key={i}>{w} </span> : <em key={i}>{w}</em>)}</h3>
        <div className="tag">{tag}</div>
      </div>
      <p className="desc">{desc}</p>
      <div className="cta">Discover the house <span style={{ fontFamily:'var(--f-display)', fontSize: 22 }}>→</span></div>
    </div>
  );
};

/* ====== Jewellery card with hover reveal ====== */
const JewelCard = ({ name, type, code, kind, brand, onClick }) => {
  return (
    <div className="jewel-card" onClick={onClick}>
      <div className="label">{brand}</div>
      <div className="placeholder">
        <Jewel kind={kind} />
      </div>
      <div className="meta">
        <h4>{name.split(' ').map((w,i)=>i===0?<em key={i}>{w} </em>:<span key={i}>{w} </span>)}</h4>
        <div className="row">
          <span>{type}</span>
          <span>{code}</span>
        </div>
      </div>
    </div>
  );
};

/* ====== Service card ====== */
const ServiceCard = ({ n, title, titleEm, body, tag, kind, accent }) => {
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
        padding: 12,
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>
        <Jewel kind={kind}/>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="thin" style={{ fontSize: 13, color: accent ? 'var(--cream-deep)' : 'var(--gold)', letterSpacing:'.3em' }}>N° {n}</div>
        <h3 className="display" style={{ fontSize: 28, lineHeight: 1.05, marginTop: 8 }}>
          {title} <em style={{ fontStyle:'italic' }}>{titleEm}</em>
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
  );
};

window.HomePage = HomePage;
window.JewelCard = JewelCard;
window.ServiceCard = ServiceCard;
