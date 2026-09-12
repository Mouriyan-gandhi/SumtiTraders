import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'
import { Ornament, TinyDiamond } from '@/components/Patterns'

export const metadata = {
  title: 'Not found · Sumti Traders',
  description: 'The page you were looking for has drifted off. Return to the atelier.',
}

export default function NotFound() {
  return (
    <SiteLayout>
      <section style={{
        padding: 'clamp(80px, 12vw, 160px) clamp(22px, 4vw, 60px)',
        background: 'var(--cream-paper)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .18, backgroundImage: 'url(/patterns/paisley.svg)', backgroundSize: '320px' }} aria-hidden="true" />
        <div style={{ position: 'relative', maxWidth: 560 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Ornament size={90} />
          </div>
          <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20 }}>
            <TinyDiamond />&nbsp;<span>404 · Off the ledger</span>
          </div>
          <h1 className="display" style={{ fontSize: 'clamp(56px, 8vw, 108px)', lineHeight: 0.9, marginTop: 18 }}>
            This piece is <em>not on the shelf.</em>
          </h1>
          <p className="thin" style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontStyle: 'italic', color: 'var(--ink-soft)', marginTop: 22, lineHeight: 1.4 }}>
            The page you were looking for has drifted off. Head back to the atelier, or write to our wholesale desk.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 30, flexWrap: 'wrap' }}>
            <Link href="/" className="btn solid">Return home <span className="arr">→</span></Link>
            <Link href="/catalogue" className="btn">Browse catalogue</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
