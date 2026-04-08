import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | Florida Homeowners Insurance',
  description: 'Your quote request has been received. A licensed Florida homeowners insurance specialist will contact you shortly.',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/thank-you' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/thank-you',
    title: 'Thank You | Florida Homeowners Insurance',
    description: 'Your quote request has been received. A licensed Florida homeowners insurance specialist will contact you shortly.',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You | Florida Homeowners Insurance',
    description: 'Your quote request has been received. A licensed Florida homeowners insurance specialist will contact you shortly.',
  },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <a href="/" className="text-teal-700 font-bold text-xl tracking-tight">
          Florida Homeowners Insurance Quotes
        </a>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-lg w-full text-center">
          {/* Check icon */}
          <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            You're All Set
          </h1>
          <p className="text-lg text-slate-600 mb-2">
            A licensed Florida insurance specialist will reach out to you shortly — typically within one business day.
          </p>
          <p className="text-slate-500 mb-10">
            In the meantime, explore our guides below to better understand your Florida home insurance options.
          </p>

          {/* Helpful links */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-left mb-8">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Helpful Guides</h2>
            <ul className="space-y-3">
              {[
                { href: '/why-is-florida-home-insurance-so-expensive', label: 'Why is Florida home insurance so expensive?' },
                { href: '/how-to-lower-home-insurance-premium-florida', label: 'How to lower your home insurance premium' },
                { href: '/wind-mitigation-inspection-fort-lauderdale', label: 'What is a wind mitigation inspection?' },
                { href: '/what-does-windstorm-deductible-mean-florida', label: 'What does windstorm deductible mean?' },
                { href: '/best-home-insurance-companies-florida-2026', label: 'Best home insurance companies in Florida 2026' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-teal-700 hover:text-teal-900 text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </a>
        </div>
      </main>
    </div>
  )
}
