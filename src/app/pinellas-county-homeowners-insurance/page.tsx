import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Pinellas County Homeowners Insurance | Compare 2026 Rates',
  description: 'Pinellas County homeowners insurance averages $3,400–$6,200/yr. St. Pete, Clearwater, and Largo face high coastal exposure. Compare carriers and find the best rate.',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/pinellas-county-homeowners-insurance' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/pinellas-county-homeowners-insurance',
    title: 'Pinellas County Homeowners Insurance | Compare 2026 Rates',
    description: 'Compare homeowners insurance quotes in Pinellas County, FL. St. Pete, Clearwater, Largo, Dunedin. 2026 rates and wind mitigation tips.',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image', title: 'Pinellas County Homeowners Insurance | Compare 2026 Rates', description: 'Compare homeowners insurance quotes in Pinellas County, FL.' },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-orange-300 text-sm font-semibold mb-4">Pinellas County, Florida</div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Pinellas County Homeowners Insurance —<br />
              <span className="text-orange-400">Compare 2026 Rates</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Pinellas County is a peninsula surrounded on three sides by water — making it one of Florida&apos;s highest-risk counties for storm surge and wind damage. If you haven&apos;t compared rates in the past 12 months, you may be significantly overpaying.
            </p>
            <CallButton variant="hero" label="Compare Pinellas County Rates" />
            <p className="text-blue-300 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">What&apos;s Unique About Pinellas County Insurance</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'Peninsula Geography Creates Maximum Exposure', body: 'Pinellas County is almost entirely surrounded by water — Tampa Bay to the east and the Gulf of Mexico to the west. This geography means virtually every home in the county has meaningful storm surge and wind exposure, which is reflected in premium pricing.' },
                { title: 'Wind Mitigation Discounts Are Significant Here', body: 'Because wind risk is so high, the discounts for wind mitigation features are also large. A hip roof, impact windows, and a roof replacement within the past 15 years can reduce your annual premium by 20–40%. A current wind mitigation inspection is worth getting before your next renewal.' },
                { title: 'Older Housing Stock in St. Pete and Clearwater', body: 'Much of St. Petersburg and Clearwater was built in the 1950s through 1970s. Homes in this age range face 4-point inspection requirements, potential issues with older electrical panels, and roof age concerns that affect insurability.' },
                { title: 'Flood Insurance Is Not Optional in Most of Pinellas', body: 'A significant portion of Pinellas County falls in FEMA-designated flood zones. Even homes outside designated flood zones face meaningful surge risk given the county\'s geography. Flood insurance is a separate policy from your homeowners coverage.' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <h2 className="font-serif text-2xl text-blue-900 mb-4">Average Rates by Pinellas City (2026)</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead><tr className="bg-blue-50 text-blue-900"><th className="text-left p-3 font-semibold">City</th><th className="text-left p-3 font-semibold">Avg Annual Premium</th><th className="text-left p-3 font-semibold">Key Factor</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['St. Petersburg', '$3,200–$5,800', 'Gulf and bay exposure, older housing'],
                    ['Clearwater', '$3,400–$6,200', 'Coastal proximity, beach areas'],
                    ['Largo', '$2,800–$4,600', 'Inland areas, lower flood risk'],
                    ['Dunedin', '$3,000–$5,400', 'Gulf proximity, older homes'],
                    ['Tarpon Springs', '$2,900–$5,000', 'Gulf exposure, sponge docks area'],
                    ['Pinellas Park', '$2,600–$4,200', 'Inland, newer construction available'],
                  ].map(([city, rate, factor]) => (
                    <tr key={city} className="hover:bg-gray-50"><td className="p-3 font-medium text-gray-800">{city}</td><td className="p-3 text-orange-600 font-semibold">{rate}</td><td className="p-3 text-gray-500 text-xs">{factor}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Compare Your Pinellas County Rate</h3>
              <p className="text-blue-200 mb-6">Licensed agents compare up to 16 Florida carriers. 2-minute call, no obligation.</p>
              <CallButton variant="hero" label="Call Now — Compare Pinellas Rates" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CallButton variant="sticky" />
      <ExitIntent />
    </>
  )
}
