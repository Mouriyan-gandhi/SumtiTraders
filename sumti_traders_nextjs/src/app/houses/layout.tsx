import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Houses — First Touch · Swarnika · FT',
  description: 'Three brands. Three customers. First Touch for gold covering and forming. Swarnika for temple and American diamond. FT for affordable fashion.',
}

export default function HousesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
