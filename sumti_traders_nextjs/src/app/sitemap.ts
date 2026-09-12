import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sumtitraders.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${SITE_URL}/`,           lastModified: now, changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${SITE_URL}/houses`,     lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${SITE_URL}/catalogue`,  lastModified: now, changeFrequency: 'weekly',   priority: 0.9 },
    { url: `${SITE_URL}/about`,      lastModified: now, changeFrequency: 'yearly',   priority: 0.7 },
    { url: `${SITE_URL}/contact`,    lastModified: now, changeFrequency: 'yearly',   priority: 0.8 },
  ]
}
