import type { Metadata } from 'next'
import './globals.css'
import RevealOnScroll from '@/components/RevealOnScroll'
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/JsonLd'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sumtitraders.in'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sumti Traders — Gold Covering Jewellery Wholesalers · Chennai · Since 1970',
    template: '%s · Sumti Traders',
  },
  description:
    'Wholesale gold covering jewellery from Chennai since 1970. Three houses — First Touch, Swarnika, FT — supplying 10,000+ retail partners and 3,000+ women entrepreneurs across India.',
  keywords: [
    'gold covering jewellery',
    'gold covering jewellery wholesalers',
    'jewellery wholesalers Chennai',
    'imitation jewellery wholesale India',
    'temple jewellery wholesale',
    'American diamond jewellery wholesale',
    'bridal jewellery wholesale Chennai',
    'First Touch jewellery',
    'Swarnika jewellery',
    'FT jewellery',
    'Sowcarpet jewellery wholesalers',
    'T Nagar jewellery',
    'Anna Nagar jewellery',
    'reseller programme jewellery',
  ],
  authors: [{ name: 'Sumti Traders' }],
  creator: 'Sumti Traders',
  publisher: 'Sumti Traders',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Sumti Traders',
    title: 'Sumti Traders — Gold Covering Jewellery Wholesalers · Chennai · Since 1970',
    description:
      'Three houses, one trust. Wholesale gold covering, temple, American diamond and fashion jewellery from Chennai — supplying 10,000+ retailers across India.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Sumti Traders — Since 1970' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumti Traders — Gold Covering Jewellery Wholesalers · Chennai',
    description:
      'Wholesale gold covering jewellery from Chennai since 1970. First Touch, Swarnika, FT.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: { icon: '/favicon.ico' },
  category: 'jewellery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Italiana&family=Pinyon+Script&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <OrganizationJsonLd />
        <WebsiteJsonLd />
      </head>
      <body>
        <RevealOnScroll />
        {children}
      </body>
    </html>
  )
}
