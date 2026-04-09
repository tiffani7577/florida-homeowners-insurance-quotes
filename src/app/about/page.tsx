import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Florida Homeowners Insurance Quotes | Licensed Florida Insurance Agent',
  description: 'Florida Homeowners Insurance Quotes is a free quote platform and educational resource run by a licensed Florida insurance agent. FR-44, SR-22, and homeowners coverage. Serving all 67 Florida counties.',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/about' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/about',
    title: 'About Florida Homeowners Insurance Quotes',
    description: 'Licensed Florida insurance agent helping homeowners compare rates, file FR-44s and SR-22s, and find affordable coverage statewide.',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Florida Homeowners Insurance Quotes',
  url: 'https://www.floridahomeownersinsurancequotes.com/about',
  description: 'Florida Homeowners Insurance Quotes is a free quote platform and educational resource operated by a licensed Florida insurance agent serving all 67 Florida counties.',
  publisher: {
    '@type': 'InsuranceAgency',
    name: 'Florida Homeowners Insurance Quotes',
    url: 'https://www.floridahomeownersinsurancequotes.com',
    telephone: '+14356121009',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fort Lauderdale',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: 'Florida',
  },
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="pb-24 md:pb-0">
        {/* Hero */}
        <div className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <nav className="text-teal-300 text-xs mb-4 flex items-center gap-1.5">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>›</span>
              <span className="text-teal-200">About</span>
            </nav>
            <h1 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
              About Florida Homeowners Insurance Quotes
            </h1>
            <p className="mt-4 text-teal-200 text-lg">
              A licensed Florida insurance resource helping homeowners compare rates, understand their coverage, and get fast FR-44 and SR-22 filings.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose max-w-none">

            <h2 className="font-serif text-2xl text-teal-800 mt-0">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Florida Homeowners Insurance Quotes is a free quote comparison platform and educational resource operated by a licensed Florida insurance agent. We serve all 67 Florida counties and specialize in homeowners insurance, FR-44 filings, SR-22 filings, contractor general liability, and flood insurance. Our mission is to give Florida homeowners and drivers clear, honest information — and connect them with the right coverage at the right price.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Florida&apos;s insurance market is one of the most complex in the country. Rates have surged, carriers have exited, and many homeowners are paying far more than they should — or are underinsured without knowing it. We built this site to help you cut through the confusion and make a confident decision.
            </p>

            <h2 className="font-serif text-2xl text-teal-800">What We Specialize In</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
              {[
                { title: 'Homeowners Insurance', desc: 'Compare rates from top Florida carriers. All counties, all home types.' },
                { title: 'FR-44 Insurance Filing', desc: 'Same-day electronic FR-44 filing to DHSMV. Reinstate your license fast.' },
                { title: 'SR-22 Insurance Filing', desc: 'Instant SR-22 certificates for Florida drivers. Non-owner policies available.' },
                { title: 'Contractor Liability', desc: 'General liability and workers comp for Florida contractors. Same-day COIs.' },
                { title: 'Flood Insurance', desc: 'NFIP and private flood insurance options for all Florida flood zones.' },
                { title: 'Windstorm Coverage', desc: 'Windstorm and hurricane coverage for coastal and inland Florida properties.' },
              ].map(item => (
                <div key={item.title} className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                  <p className="font-semibold text-teal-800 text-sm">{item.title}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl text-teal-800">Our Credentials</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 my-6">
              <ul className="space-y-2 text-gray-700 text-sm list-none pl-0">
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-0.5">✓</span> Licensed Florida Insurance Agent</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-0.5">✓</span> Serving all 67 Florida counties</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-0.5">✓</span> FR-44 and SR-22 electronic filing specialists</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-0.5">✓</span> Bilingual service — English and Spanish</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-0.5">✓</span> Available Monday–Friday 9am–9pm, Saturday 12pm–5pm</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 font-bold mt-0.5">✓</span> Fort Lauderdale, FL based — serving statewide</li>
              </ul>
            </div>

            <h2 className="font-serif text-2xl text-teal-800">How Our Quote Process Works</h2>
            <p className="text-gray-700 leading-relaxed">
              When you request a quote through our site, you are connected with a licensed Florida insurance agent who shops multiple carriers on your behalf. We do not sell insurance directly — we match you with the right licensed professional for your specific situation, whether that is a standard homeowners policy, an FR-44 filing you need today, or a contractor liability certificate for a job starting tomorrow. There is no obligation and no fee to you.
            </p>

            <h2 className="font-serif text-2xl text-teal-800">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Need a quote, have a coverage question, or need an FR-44 filed today? Call us at <a href="tel:+14356121009" className="text-teal-700 font-semibold hover:underline">(435) 612-1009</a> or <a href="/get-a-quote" className="text-teal-700 font-semibold hover:underline">submit your information online</a>. We are available Monday through Friday 9am–9pm and Saturday 12pm–5pm. Hablamos español.
            </p>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
