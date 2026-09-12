import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sumtitraders.in'

export const metadata: Metadata = {
  title: 'Our Houses — First Touch · Swarnika · FT · Chennai Wholesale',
  description:
    'Three brands. Three customers. First Touch for gold covering bridal and forming. Swarnika for premium temple jewellery and American diamond. FT for affordable fashion — all from our Chennai wholesale atelier.',
  keywords: [
    'First Touch jewellery',
    'Swarnika jewellery',
    'FT jewellery',
    'gold covering bridal jewellery',
    'temple jewellery wholesale',
    'American diamond wholesale',
    'fashion jewellery wholesale Chennai',
  ],
  alternates: { canonical: '/houses' },
  openGraph: {
    title: 'Our Houses — First Touch · Swarnika · FT',
    description: 'Three brands, one wholesale partner. Gold covering, temple, American diamond and fashion jewellery from Chennai.',
    url: `${SITE_URL}/houses`,
    type: 'website',
  },
}

export default function HousesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Our Houses', url: `${SITE_URL}/houses` },
        ]}
      />
      {children}
    </>
  )
}
