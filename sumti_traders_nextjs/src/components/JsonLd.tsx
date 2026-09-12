const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sumtitraders.in'

const HEAD_OFFICE = {
  street: '37/1, Perumal Mudali Street',
  locality: 'Sowcarpet, George Town',
  city: 'Chennai',
  postal: '600079',
  region: 'TN',
  country: 'IN',
  phone: '+91-93447-61821',
  email: 'sumtitraders@gmail.com',
  hours: 'Mo-Sa 10:00-20:00',
  founded: '1970',
  lat: 13.0903519,
  lng: 80.2794522,
  mapsUrl: 'https://www.google.com/maps/dir//SUMTI+TRADERS+(FT+CODE),+37%2F1,+Perumal+Mudali+St,+Sowcarpet,+George+Town,+Chennai,+Tamil+Nadu+600079/@12.8319488,80.0391168,13z',
}

const INSTAGRAM_URL = 'https://www.instagram.com/ft_swarnika_code_manufacturer'

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
    foundingDate: HEAD_OFFICE.founded,
    description:
      'Wholesale gold covering jewellery from Chennai since 1970. Three houses: First Touch, Swarnika, FT. Supplying 10,000+ retail partners and 3,000+ women entrepreneurs across India.',
    slogan: 'Three houses, one trust.',
    areaServed: { '@type': 'Country', name: 'India' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: HEAD_OFFICE.street,
      addressLocality: HEAD_OFFICE.locality + ', ' + HEAD_OFFICE.city,
      postalCode: HEAD_OFFICE.postal,
      addressRegion: HEAD_OFFICE.region,
      addressCountry: HEAD_OFFICE.country,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'wholesale enquiries',
        telephone: HEAD_OFFICE.phone,
        email: HEAD_OFFICE.email,
        areaServed: 'IN',
        availableLanguage: ['English', 'Tamil'],
      },
    ],
    sameAs: [INSTAGRAM_URL],
    brand: [
      { '@type': 'Brand', name: 'First Touch', description: 'Gold covering and forming jewellery. Bridal and temple-inspired.' },
      { '@type': 'Brand', name: 'Swarnika',   description: 'Premium temple jewellery and American diamond pieces.' },
      { '@type': 'Brand', name: 'FT',         description: 'Affordable fashion jewellery for high-turnover retail.' },
    ],
  }
  return <JsonLdScript data={data} />
}

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    '@id': `${SITE_URL}/contact#sowcarpet-main`,
    name: 'Sumti Traders · Sowcarpet Head Office',
    alternateName: ['Sumti Traders (FT Code)', 'Sumti Traders Chennai'],
    url: `${SITE_URL}/contact`,
    telephone: HEAD_OFFICE.phone,
    email: HEAD_OFFICE.email,
    priceRange: '$$',
    image: `${SITE_URL}/og-image.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: HEAD_OFFICE.street,
      addressLocality: HEAD_OFFICE.locality + ', ' + HEAD_OFFICE.city,
      postalCode: HEAD_OFFICE.postal,
      addressRegion: HEAD_OFFICE.region,
      addressCountry: HEAD_OFFICE.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: HEAD_OFFICE.lat,
      longitude: HEAD_OFFICE.lng,
    },
    hasMap: HEAD_OFFICE.mapsUrl,
    openingHours: HEAD_OFFICE.hours,
    foundingDate: HEAD_OFFICE.founded,
    sameAs: [INSTAGRAM_URL],
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  }
  return <JsonLdScript data={data} />
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
