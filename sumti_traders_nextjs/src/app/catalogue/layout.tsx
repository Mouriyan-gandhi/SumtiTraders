import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Catalogue — Couverture Collection',
  description: 'A curated preview from all three Sumti Traders houses. Browse necklaces, earrings, bangles, maang tikka, rings, and more.',
}
export default function CatalogueLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
