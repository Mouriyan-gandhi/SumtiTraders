import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sumti Traders — Gold Covering Jewellery · Chennai · Since 1970',
  description: 'Gold covering jewellery from Chennai. Three houses, one trust — empowering 10,000+ retail partners across India. First Touch, Swarnika, FT.',
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
      </head>
      <body>{children}</body>
    </html>
  )
}
