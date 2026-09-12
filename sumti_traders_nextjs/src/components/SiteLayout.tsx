import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import WhatsAppBubble from '@/components/WhatsAppBubble'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SiteHeader />
      <main className="page-enter">{children}</main>
      <SiteFooter />
      <WhatsAppBubble />
    </div>
  )
}
