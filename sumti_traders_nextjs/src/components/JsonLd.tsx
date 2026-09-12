const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sumtitraders.in'

const BRANCHES = [
  {
    id: 'sowcarpet',
    name: 'Sumti Traders — Sowcarpet',
    branchName: 'Sowcarpet · The Mother Branch',
    street: '142, Mint Street',
    locality: 'Sowcarpet',
    postal: '600079',
    phone: '+91-44-2538-1970',
    hours: 'Mo-Sa 10:00-20:00',
    founded: '1970',
  },
  {
    id: 't-nagar',
    name: 'Sumti Traders — T. Nagar',
    branchName: 'T. Nagar · The Retail Heart',
    street: '28, Ranganathan Street',
    locality: 'T. Nagar',
    postal: '600017',
    phone: '+91-44-2434-1995',
    hours: 'Mo-Sa 10:00-21:00',
    founded: '1995',
  },
  {
    id: 'anna-nagar',
    name: 'Sumti Traders — Anna Nagar',
    branchName: 'Anna Nagar · The New Atelier',
    street: '5, II Avenue, Anna Nagar West',
    locality: 'Anna Nagar',
    postal: '600040',
    phone: '+91-44-2628-2015',
    hours: 'Mo-Sa 10:00-20:30',
    founded: '2015',
  },
]

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Sumti Traders',
    alternateName: ['First Touch', 'Swarnika', 'FT'],
    url: SITE_URL,
    logo: `${SITE_URL}/logos/firsttouch-brown.png`,
    foundingDate: '1970',
    description:
      'Wholesale gold covering jewellery from Chennai since 1970. Three houses — First Touch, Swarnika, FT — supplying 10,000+ retail partners and 3,000+ women entrepreneurs across India.',
    slogan: 'Three houses, one trust.',
    areaServed: { '@type': 'Country', name: 'India' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '142, Mint Street, Sowcarpet',
      addressLocality: 'Chennai',
      postalCode: '600079',
      addressRegion: 'TN',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'wholesale enquiries',
        telephone: '+91-44-2538-1970',
        email: 'wholesale@sumtitraders.in',
        areaServed: 'IN',
        availableLanguage: ['English', 'Tamil'],
      },
    ],
    // sameAs: ['https://www.instagram.com/…', 'https://www.facebook.com/…'], // TODO — add client social handles
    brand: [
      { '@type': 'Brand', name: 'First Touch', description: 'Gold covering and forming jewellery — bridal and temple-inspired.' },
      { '@type': 'Brand', name: 'Swarnika',   description: 'Premium temple jewellery and American diamond pieces.' },
      { '@type': 'Brand', name: 'FT',         description: 'Affordable fashion jewellery for high-turnover retail.' },
    ],
  }
  return <JsonLdScript data={data} />
}

export function LocalBusinessJsonLd() {
  const businesses = BRANCHES.map(b => ({
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    '@id': `${SITE_URL}/contact#${b.id}`,
    name: b.name,
    alternateName: b.branchName,
    url: `${SITE_URL}/contact`,
    telephone: b.phone,
    priceRange: '$$',
    image: `${SITE_URL}/og-image.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.street,
      addressLocality: b.locality + ', Chennai',
      postalCode: b.postal,
      addressRegion: 'TN',
      addressCountry: 'IN',
    },
    openingHours: b.hours,
    foundingDate: b.founded,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  }))
  return (
    <>
      {businesses.map(b => (
        <JsonLdScript key={b['@id']} data={b} />
      ))}
    </>
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
  return <JsonLdScript data={data} />
}

export function WebsiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Sumti Traders',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  }
  return <JsonLdScript data={data} />
}
