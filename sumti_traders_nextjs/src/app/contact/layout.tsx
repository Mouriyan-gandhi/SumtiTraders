import type { Metadata } from 'next'
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sumtitraders.in'

export const metadata: Metadata = {
  title: 'Contact — Three Chennai Branches · Wholesale Enquiries',
  description:
    'Visit our Sowcarpet, T. Nagar, or Anna Nagar branches, or open a wholesale account from anywhere in India. Bulk enquiries answered within 48 hours.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Sumti Traders — Three Chennai Branches',
    description: 'Sowcarpet · T. Nagar · Anna Nagar. Wholesale desk answers within 48 hours.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Contact', url: `${SITE_URL}/contact` },
        ]}
      />
      {children}
    </>
  )
}
