import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sumtitraders.in'

export const metadata: Metadata = {
  title: 'Catalogue — Couverture Wholesale Collection · Necklaces, Bangles, Rings',
  description:
    'A curated preview from all three Sumti Traders houses — necklaces, earrings, bangles, maang tikka, rings, bracelets, pendants. Wholesale-only pricing, print catalogue on request.',
  keywords: [
    'jewellery catalogue Chennai',
    'wholesale jewellery catalogue India',
    'gold covering necklace wholesale',
    'bangles wholesale Chennai',
    'maang tikka wholesale',
    'earrings wholesale India',
  ],
  alternates: { canonical: '/catalogue' },
  openGraph: {
    title: 'Catalogue — The Couverture Wholesale Collection',
    description: 'Wholesale-only jewellery catalogue across three Sumti houses. Filter by category or house.',
    url: `${SITE_URL}/catalogue`,
    type: 'website',
  },
}

export default function CatalogueLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Catalogue', url: `${SITE_URL}/catalogue` },
        ]}
      />
      {children}
    </>
  )
}
