import type { Metadata } from 'next'
import './globals.css'
const schema = {"@context":"https://schema.org","@type":"InsuranceAgency","name":"Florida Homeowners Insurance Quotes","description":"Compare Florida homeowners insurance quotes. FR-44, SR-22, contractor liability, and 2026 rates.","url":"https://www.floridahomeownersinsurancequotes.com","telephone":"+14356121009","address":{"@type":"PostalAddress","addressLocality":"Fort Lauderdale","addressRegion":"FL","addressCountry":"US"},"areaServed":"Florida","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"21:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Saturday"],"opens":"12:00","closes":"17:00"}],"contactPoint":{"@type":"ContactPoint","telephone":"+14356121009","contactType":"sales","areaServed":"US","availableLanguage":["en","es"]}}
export const metadata: Metadata = {
  verification: { google: 'pmtNO9iPlMyaxRzG0GL-sVvad21k5feJs5QNtotYNyo' },
  metadataBase: new URL('https://www.floridahomeownersinsurancequotes.com'),
  title: { default: 'Florida Homeowners Insurance Quotes | Compare 2026 Rates', template: '%s | FL Home Insurance' },
  description: 'Get Florida homeowners insurance quotes in minutes. Compare 2026 rates, find FR-44/SR-22 filings, contractor liability, and county-specific coverage.',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#FAFAF7]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
        {children}
      </body>
    </html>
  )
}
