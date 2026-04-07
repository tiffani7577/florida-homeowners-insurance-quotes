import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'

export const metadata: Metadata = {
  title: 'Get a Free Florida Home Insurance Quote',
  description: 'Get free Florida homeowners insurance information. Call to speak with an insurance professional. No obligation.',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/get-a-quote' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/get-a-quote',
    title: 'Get a Free Florida Home Insurance Quote',
    description: 'Get free Florida homeowners insurance information. Call to speak with an insurance professional. No obligation.',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Free Florida Home Insurance Quote',
    description: 'Get free Florida homeowners insurance information. Call to speak with an insurance professional. No obligation.',
  },
}

export default function GetAQuotePage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0 min-h-screen bg-gray-50">
        <section className="bg-blue-900 text-white py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Get Your Free Florida Quote</h1>
            <p className="text-blue-100 text-lg">Free Florida homeowners insurance information. Call to speak with an insurance professional. No obligation.</p>
          </div>
        </section>
        <section className="py-12 px-4">
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                Agents Available Now
              </div>
              <h2 className="font-serif text-2xl text-blue-900 mb-2">Fastest: Call for an Instant Quote</h2>
              <p className="text-gray-500 text-sm mb-6">2-minute phone quote — get rates from multiple carriers immediately</p>
              <CallButton variant="hero" label="Call (435) 612-1009 Now" />
              <p className="text-gray-400 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
