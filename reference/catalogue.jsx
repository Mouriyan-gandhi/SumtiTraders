/* =========================================================
   CATALOGUE PAGE — Collection preview
   ========================================================= */

const CATEGORIES = [
  { id: 'all', label: 'All Pieces' },
  { id: 'necklace', label: 'Necklaces' },
  { id: 'earring', label: 'Earrings' },
  { id: 'bangle', label: 'Bangles' },
  { id: 'ring', label: 'Rings' },
  { id: 'maang', label: 'Maang Tikka' },
  { id: 'bracelet', label: 'Bracelets' },
  { id: 'anklet', label: 'Anklets' },
  { id: 'nose', label: 'Nose Pins' },
];

const HOUSES = [
  { id: 'all', label: 'All Houses' },
  { id: 'First Touch', label: 'First Touch' },
  { id: 'Swarnika', label: 'Swarnika' },
  { id: 'FT', label: 'FT' },
];

const CATALOG = [
  ['Aabha','Necklace','ST·0142','necklace','First Touch','Couverture'],
  ['Rohini','Jhumka','ST·0287','earring','Swarnika','Daily Edit'],
  ['Meenakshi','Bangle Set','ST·0119','bangle','First Touch','Bridal'],
  ['Tara','Ring','ST·0033','ring','FT','Editorial'],
  ['Surya','Maang Tikka','ST·0204','maang','First Touch','Bridal'],
  ['Anika','Bracelet','ST·0066','bracelet','Swarnika','Daily Edit'],
  ['Lavanya','Anklet','ST·0211','anklet','Swarnika','Daily Edit'],
  ['Kamala','Nose Pin','ST·0058','nose','FT','Editorial'],
  ['Damini','Choker','ST·0301','necklace','First Touch','Bridal'],
  ['Ila','Drop Earring','ST·0144','earring','FT','Editorial'],
  ['Padma','Kada','ST·0277','bangle','First Touch','Temple'],
  ['Sita','Solitaire','ST·0019','ring','Swarnika','Daily Edit'],
  ['Mohini','Haaram','ST·0408','necklace','First Touch','Couverture'],
  ['Indu','Bali','ST·0093','earring','Swarnika','Daily Edit'],
  ['Vasanti','Stack Set','ST·0188','bangle','FT','Editorial'],
  ['Reva','Tikka Set','ST·0312','maang','First Touch','Bridal'],
];

const CataloguePage = ({ isMobile }) => {
  const [cat, setCat] = React.useState('all');
  const [house, setHouse] = React.useState('all');
  const [active, setActive] = React.useState(null);

  const items = CATALOG.filter(([n,t,c,k,br]) => (cat==='all'||k===cat) && (house==='all'||br===house));

  return (
    <div>
      {/* HERO */}
      <section style={{
        padding: isMobile ? '40px 22px 30px' : '70px 60px 40px',
        background:'var(--cream-paper)',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'url(patterns/paisley.svg)', backgroundSize:'320px', opacity:.18 }}/>
        <div style={{ position:'relative', zIndex:2 }}>
          <div className="eyebrow"><TinyDiamond/> &nbsp;<span>Collections · Season AW '25</span></div>
          <h1 className="display" style={{ fontSize: isMobile ? 48 : 124, lineHeight: 0.9, marginTop: 18 }}>
            The <em>Couverture</em><br/>catalogue.
          </h1>
          <p className="thin" style={{ fontSize: isMobile ? 17 : 22, fontStyle:'italic', color:'var(--ink-soft)', marginTop: 22, maxWidth: 560 }}>
            A curated preview from all three houses. Click any piece for the detail card. The complete catalogue ships physically with retailer accounts.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section style={{
        padding: isMobile ? '18px 22px' : '28px 60px',
        background: 'var(--cream-warm)',
        borderTop:'1px solid rgba(138,109,42,.2)',
        borderBottom:'1px solid rgba(138,109,42,.2)',
        position:'sticky', top: 0, zIndex: 5,
      }}>
        <div style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16, alignItems: isMobile ? 'flex-start' : 'center' }}>
          <div className="eyebrow" style={{ marginRight: 8, whiteSpace:'nowrap' }}>Filter</div>
          <div className="filters">
            {CATEGORIES.map(c=>(
              <span key={c.id} className={`filter ${cat===c.id?'active':''}`} onClick={()=>setCat(c.id)}>{c.label}</span>
            ))}
          </div>
        </div>
        <div style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16, alignItems: isMobile ? 'flex-start' : 'center', marginTop: 10 }}>
          <div className="eyebrow" style={{ marginRight: 8, whiteSpace:'nowrap' }}>House</div>
          <div className="filters">
            {HOUSES.map(c=>(
              <span key={c.id} className={`filter ${house===c.id?'active':''}`} onClick={()=>setHouse(c.id)}>{c.label}</span>
            ))}
          </div>
          <div style={{ marginLeft:'auto', fontFamily:'var(--f-caps)', fontSize: 10, letterSpacing:'.22em', color:'var(--ink-muted)', textTransform:'uppercase' }}>
            {items.length} piece{items.length !== 1 && 's'}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section style={{
        padding: isMobile ? '32px 22px 60px' : '50px 60px 100px',
        background:'var(--cream-base)',
        minHeight: 400,
      }}>
        <div style={{
          display:'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? 10 : 18,
        }}>
          {items.map((it, i)=>(
            <JewelCard key={i} name={it[0]} type={it[1]} code={it[2]} kind={it[3]} brand={it[4]} onClick={()=>setActive(it)}/>
          ))}
        </div>

        {items.length === 0 && (
          <div style={{ textAlign:'center', padding: 60 }}>
            <Ornament size={80}/>
            <p className="thin" style={{ fontSize: 22, fontStyle:'italic', marginTop: 18 }}>No pieces in this slice. Try another filter.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section style={{
        padding: isMobile ? '50px 22px' : '90px 60px',
        background:'var(--cream-warm)',
        textAlign:'center',
      }}>
        <Divider wide/>
        <h2 className="display" style={{ fontSize: isMobile ? 30 : 48, marginTop: 14, lineHeight: 1 }}>
          Request the <em>full catalogue</em>
        </h2>
        <p className="body" style={{ marginTop: 14, maxWidth: 480, marginLeft:'auto', marginRight:'auto' }}>
          The print catalogue carries every active design across the three houses, shipped quarterly to wholesale partners.
        </p>
        <div style={{ marginTop: 22 }}>
          <button className="btn solid">Request access <span className="arr">→</span></button>
        </div>
      </section>

      {/* LIGHTBOX */}
      <div className={`lightbox ${active ? 'open' : ''}`} onClick={()=>setActive(null)}>
        <button className="close" onClick={()=>setActive(null)}>×</button>
        {active && (
          <div className="panel" onClick={e=>e.stopPropagation()}>
            <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 28, alignItems:'center' }}>
              <div style={{ aspectRatio:'1/1', background:'var(--cream-warm)', padding: 24, border:'1px solid rgba(138,109,42,.25)' }}>
                <Jewel kind={active[3]} />
              </div>
              <div>
                <div className="eyebrow">{active[4]} · {active[5]}</div>
                <h3 className="display" style={{ fontSize: 44, marginTop: 8, lineHeight: 1 }}>
                  <em>{active[0]}</em>
                </h3>
                <Divider/>
                <p className="body" style={{ marginTop: 14 }}>
                  {active[1]} — finished at the Sumti workshop, Chennai. Gold covering on a brass base, hand-checked, available in matched sets.
                </p>
                <div style={{ display:'flex', gap: 20, marginTop: 20 }}>
                  <div><div className="eyebrow">Ref</div><div className="display" style={{ fontSize: 20, marginTop: 4 }}>{active[2]}</div></div>
                  <div><div className="eyebrow">Type</div><div className="display" style={{ fontSize: 20, marginTop: 4 }}>{active[1]}</div></div>
                </div>
                <div style={{ marginTop: 24 }}>
                  <button className="btn solid">Enquire wholesale <span className="arr">→</span></button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

window.CataloguePage = CataloguePage;
