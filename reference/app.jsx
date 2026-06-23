/* =========================================================
   APP SHELL — site header, footer, page router, frames
   ========================================================= */

const PAGES = [
  { id: 'home', label: 'Home', url: '/' },
  { id: 'brands', label: 'Our Houses', url: '/houses' },
  { id: 'catalogue', label: 'Catalogue', url: '/catalogue' },
  { id: 'about', label: 'About', url: '/about' },
  { id: 'contact', label: 'Contact', url: '/contact' },
];

/* ----- Site header (lives INSIDE the frame) ----- */
const SiteHeader = ({ page, go, isMobile }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="site-header">
      <div className="logo" style={{ cursor:'pointer' }} onClick={()=>go('home')}>
        <span className="display" style={{ fontSize: 26, letterSpacing: '.04em', textTransform:'none' }}>Sumti</span>
        <em className="display" style={{ fontStyle:'italic', fontSize: 26, letterSpacing:'.02em', textTransform:'none' }}>Traders</em>
        {!isMobile && <span className="est">·  SINCE 1970</span>}
      </div>
      {!isMobile && (
        <nav>
          {PAGES.map(p => (
            <a key={p.id} className={page===p.id?'active':''} onClick={()=>go(p.id)}>{p.label}</a>
          ))}
        </nav>
      )}
      <div className="right">
        {!isMobile && <span className="lang">EN · TA</span>}
        {!isMobile && <button className="btn" style={{ padding:'10px 14px', fontSize: 10 }} onClick={()=>go('contact')}>Wholesale →</button>}
        {isMobile && (
          <button onClick={()=>setMenuOpen(!menuOpen)} style={{ display:'flex', flexDirection:'column', gap: 4, padding: 4 }}>
            <span style={{ width: 22, height: 1, background:'var(--ink)' }}></span>
            <span style={{ width: 22, height: 1, background:'var(--ink)' }}></span>
            <span style={{ width: 22, height: 1, background:'var(--ink)' }}></span>
          </button>
        )}
      </div>
      {isMobile && menuOpen && (
        <div style={{
          position:'absolute', top:'100%', left: 0, right: 0,
          background:'var(--cream-paper)', borderBottom:'1px solid rgba(138,109,42,.2)',
          padding: '12px 22px 20px',
          display:'flex', flexDirection:'column', gap: 10,
        }}>
          {PAGES.map(p => (
            <a key={p.id} className={page===p.id?'active':''} onClick={()=>{ go(p.id); setMenuOpen(false); }}
              style={{ fontFamily:'var(--f-caps)', fontSize:12, letterSpacing:'.22em', textTransform:'uppercase', color: page===p.id?'var(--ink)':'var(--ink-soft)', padding: '8px 0', borderBottom:'1px solid rgba(138,109,42,.15)' }}>
              {p.label}
            </a>
          ))}
          <button className="btn solid" style={{ marginTop: 8 }} onClick={()=>{ go('contact'); setMenuOpen(false); }}>Wholesale enquiry →</button>
        </div>
      )}
    </div>
  );
};

/* ----- Footer (lives INSIDE the frame) ----- */
const SiteFooter = ({ go, isMobile }) => {
  return (
    <footer className="site-footer">
      <div style={{ position:'absolute', inset:0, opacity:.04, backgroundImage:'url(patterns/mandala.svg)', backgroundSize:'700px', backgroundPosition:'right center', backgroundRepeat:'no-repeat' }}/>
      <div className="grid" style={{ position:'relative' }}>
        <div className="lockup">
          <div className="name">Sumti <em style={{ fontStyle:'italic' }}>Traders</em></div>
          <div className="sub">Wholesale · Chennai · Since 1970</div>
          <p>Gold covering jewellery, made for the Indian retail floor since the 1970s. Three houses: First Touch, Swarnika, FT.</p>
        </div>
        <div>
          <h4>Houses</h4>
          <ul>
            <li><a onClick={()=>go('brands')}>First Touch</a></li>
            <li><a onClick={()=>go('brands')}>Swarnika</a></li>
            <li><a onClick={()=>go('brands')}>FT</a></li>
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li><a onClick={()=>go('contact')}>Sowcarpet</a></li>
            <li><a onClick={()=>go('contact')}>T. Nagar</a></li>
            <li><a onClick={()=>go('contact')}>Anna Nagar</a></li>
          </ul>
        </div>
        <div>
          <h4>Atelier</h4>
          <ul>
            <li><a onClick={()=>go('about')}>The story</a></li>
            <li><a onClick={()=>go('catalogue')}>Catalogue</a></li>
            <li><a onClick={()=>go('contact')}>Wholesale desk</a></li>
            <li><a onClick={()=>go('contact')}>Press</a></li>
          </ul>
        </div>
      </div>
      <div className="legal" style={{ position:'relative' }}>
        <span>© 2026 Sumti Traders · Chennai</span>
        {!isMobile && <span>Empowering 10,000+ retail partners across India</span>}
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
};

/* ----- The whole website (renders inside a frame) ----- */
const Site = ({ isMobile }) => {
  const [page, setPage] = React.useState('home');
  const viewRef = React.useRef(null);

  const go = (p) => {
    setPage(p);
    // scroll the frame viewport to top
    if (viewRef.current) viewRef.current.scrollTop = 0;
  };

  // pass the ref up to the parent frame
  React.useEffect(()=>{
    const parent = document.querySelector(isMobile ? '.mobile-frame .viewport' : '.desktop-frame .viewport');
    viewRef.current = parent;
  }, [isMobile]);

  let body = null;
  if (page === 'home') body = <HomePage go={go} isMobile={isMobile}/>;
  else if (page === 'brands') body = <BrandsPage isMobile={isMobile}/>;
  else if (page === 'catalogue') body = <CataloguePage isMobile={isMobile}/>;
  else if (page === 'about') body = <AboutPage isMobile={isMobile} go={go}/>;
  else if (page === 'contact') body = <ContactPage isMobile={isMobile}/>;

  return (
    <div className={isMobile ? 'is-mobile' : ''} data-screen-label={`page-${page}`}>
      <SiteHeader page={page} go={go} isMobile={isMobile}/>
      {body}
      <SiteFooter go={go} isMobile={isMobile}/>
    </div>
  );
};

/* ----- Top-level: toolbar + side-by-side frames ----- */
const App = () => {
  const [activePage, setActivePage] = React.useState('home');
  // We let each Site instance manage its own page state; a shared "demo route"
  // here is just for the navigation buttons in the OUTER toolbar to switch
  // both frames at once.
  const desktopRef = React.useRef(null);
  const mobileRef = React.useRef(null);

  // We just remount on demand by passing a key — simpler than threading refs.
  const [navTick, setNavTick] = React.useState({ d: 0, m: 0 });
  const [routeForBoth, setRouteForBoth] = React.useState('home');

  // Simpler approach: shared route
  return (
    <div className="app-bg">
      <div className="toolbar">
        <div className="brandstamp">
          <div className="mark">S<em style={{ marginLeft: 1 }}>T</em></div>
          <div className="name">Sumti <em>Traders</em></div>
        </div>
        <div className="nav">
          {PAGES.map(p => (
            <button key={p.id} className={routeForBoth===p.id?'active':''} onClick={()=>setRouteForBoth(p.id)}>{p.label}</button>
          ))}
        </div>
        <div className="viewtoggle" id="vt">
          <button className="active" data-v="both">Both</button>
          <button data-v="desktop">Desktop</button>
          <button data-v="mobile">Mobile</button>
        </div>
      </div>

      <div className="stage" id="stage">
        <div className="desktop-frame" id="dframe">
          <div className="chrome">
            <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            <span className="url">sumtitraders.in</span>
          </div>
          <div className="viewport">
            <SyncedSite route={routeForBoth} isMobile={false}/>
          </div>
        </div>

        <div className="mobile-frame" id="mframe">
          <div className="notch">
            <span className="time">9:41</span>
            <span className="stat">·· · ▮</span>
          </div>
          <div className="viewport">
            <SyncedSite route={routeForBoth} isMobile={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

/* A Site that listens to a prop-driven route */
const SyncedSite = ({ route, isMobile }) => {
  const [page, setPage] = React.useState(route);
  React.useEffect(()=>{ setPage(route); }, [route]);

  // scroll to top on change
  React.useEffect(()=>{
    const sel = isMobile ? '.mobile-frame .viewport' : '.desktop-frame .viewport';
    const el = document.querySelector(sel);
    if (el) el.scrollTop = 0;
  }, [page, isMobile]);

  const go = (p) => setPage(p);

  let body = null;
  if (page === 'home') body = <HomePage go={go} isMobile={isMobile}/>;
  else if (page === 'brands') body = <BrandsPage isMobile={isMobile}/>;
  else if (page === 'catalogue') body = <CataloguePage isMobile={isMobile}/>;
  else if (page === 'about') body = <AboutPage isMobile={isMobile} go={go}/>;
  else if (page === 'contact') body = <ContactPage isMobile={isMobile}/>;

  return (
    <div className={isMobile ? 'is-mobile' : ''} data-screen-label={`${isMobile?'mobile':'desktop'}-${page}`}>
      <SiteHeader page={page} go={go} isMobile={isMobile}/>
      {body}
      <SiteFooter go={go} isMobile={isMobile}/>
    </div>
  );
};

window.App = App;
