import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Hillsborough County Homeowners Insurance | Compare 2026 Rates',
  description: 'Hillsborough County homeowners insurance averages $2,400–$4,800/yr. Tampa, Brandon, and Plant City rates vary widely. Compare carriers and find the best rate.',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/hillsborough-county-homeowners-insurance' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/hillsborough-county-homeowners-insurance',
    title: 'Hillsborough County Homeowners Insurance | Compare 2026 Rates',
    description: 'Compare homeowners insurance quotes in Hillsborough County, FL. Tampa, Brandon, Plant City, Riverview. 2026 rates.',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image', title: 'Hillsborough County Homeowners Insurance | Compare 2026 Rates', description: 'Compare homeowners insurance in Hillsborough County, FL.' },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-orange-300 text-sm font-semibold mb-4">Hillsborough County, Florida</div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Hillsborough County Homeowners Insurance —<br />
              <span className="text-orange-400">Compare 2026 Rates</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Hillsborough County&apos;s insurance market has improved significantly in 2026. New carriers have entered the Tampa Bay area and rates are more competitive than they have been in three years. If you haven&apos;t compared recently, now is the time.
            </p>
            <CallButton variant="hero" label="Compare Hillsborough County Rates" />
            <p className="text-blue-300 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">What&apos;s Unique About Hillsborough County Insurance</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'Tampa Bay Storm Surge Risk Is Underappreciated', body: 'Tampa Bay\'s geography creates a funnel effect that can amplify storm surge significantly during a direct hurricane hit. Many Tampa homeowners are unaware of their actual surge risk. FEMA flood maps are worth reviewing even if you have never flooded.' },
                { title: 'Inland Areas Have More Carrier Options', body: 'Brandon, Riverview, Plant City, and other inland Hillsborough communities have meaningfully more carrier competition than coastal Tampa. If you live inland and have been paying coastal-level premiums, you may have better options.' },
                { title: 'New Construction Boom Means More Insurable Homes', body: 'Hillsborough County has seen significant new construction in the past decade. Newer homes built to post-2002 Florida Building Code standards qualify for wind mitigation credits that can reduce premiums by 15–35%.' },
                { title: 'Citizens Depopulation Active in Tampa', body: 'Citizens Property Insurance has been actively transferring Tampa-area policyholders to private carriers. If you received a take-out offer, compare it against the market before accepting or rejecting.' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <h2 className="font-serif text-2xl text-blue-900 mb-4">Average Rates by Hillsborough City (2026)</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead><tr className="bg-blue-50 text-blue-900"><th className="text-left p-3 font-semibold">City</th><th className="text-left p-3 font-semibold">Avg Annual Premium</th><th className="text-left p-3 font-semibold">Key Factor</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Tampa (coastal)', '$3,200–$5,600', 'Bay exposure, older housing stock'],
                    ['Tampa (inland)', '$2,400–$4,000', 'Less flood risk, more carrier options'],
                    ['Brandon', '$2,200–$3,600', 'Inland, newer construction'],
                    ['Riverview', '$2,100–$3,400', 'Newer homes, good wind mitigation'],
                    ['Plant City', '$1,900–$3,200', 'Inland, lower risk profile'],
                    ['Valrico', '$2,000–$3,400', 'Suburban, newer construction'],
                  ].map(([city, rate, factor]) => (
                    <tr key={city} className="hover:bg-gray-50"><td className="p-3 font-medium text-gray-800">{city}</td><td className="p-3 text-orange-600 font-semibold">{rate}</td><td className="p-3 text-gray-500 text-xs">{factor}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Compare Your Hillsborough County Rate</h3>
              <p className="text-blue-200 mb-6">Licensed agents compare up to 16 Florida carriers. 2-minute call, no obligation.</p>
              <CallButton variant="hero" label="Call Now — Compare Hillsborough Rates" />
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
