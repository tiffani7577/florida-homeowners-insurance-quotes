import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Collier County Homeowners Insurance | Compare 2026 Rates',
  description: 'Collier County homeowners insurance averages $3,200–$7,000/yr. Naples, Marco Island, and Immokalee rates. High-value homes need specialized coverage.',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/collier-county-homeowners-insurance' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/collier-county-homeowners-insurance',
    title: 'Collier County Homeowners Insurance | Compare 2026 Rates',
    description: 'Compare homeowners insurance in Collier County, FL. Naples, Marco Island, Bonita Springs. 2026 rates for high-value homes.',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image', title: 'Collier County Homeowners Insurance | Compare 2026 Rates', description: 'Compare homeowners insurance in Collier County, FL.' },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-orange-300 text-sm font-semibold mb-4">Collier County, Florida</div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Collier County Homeowners Insurance —<br />
              <span className="text-orange-400">Compare 2026 Rates</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Collier County has some of the highest home values in Florida — and some of the most complex insurance situations. Naples and Marco Island homeowners often need specialized high-value coverage that standard carriers do not offer.
            </p>
            <CallButton variant="hero" label="Compare Collier County Rates" />
            <p className="text-blue-300 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">What&apos;s Unique About Collier County Insurance</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'High Home Values Require Adequate Coverage Limits', body: 'The median home value in Naples exceeds $600,000. Many Collier County homeowners are underinsured because their dwelling coverage limit has not kept pace with construction cost increases since 2020. Building costs in Southwest Florida have risen 35–45% since 2019. Review your coverage limit before your next renewal.' },
                { title: 'Marco Island Is a High-Risk Zone', body: 'Marco Island is a barrier island with Gulf exposure on multiple sides. Standard carriers are limited. Surplus lines carriers are common for Marco Island properties. Premiums are among the highest in the state for coastal Marco Island homes.' },
                { title: 'Flood Insurance Is Critical Throughout Collier', body: 'Much of Collier County — including significant portions of Naples — is in FEMA-designated flood zones. Hurricane Ian\'s storm surge demonstrated how quickly flooding can reach areas that had never flooded before. Flood insurance is a separate policy from homeowners coverage.' },
                { title: 'Luxury Home Coverage Requires Specialized Carriers', body: 'Homes valued above $1,000,000 often require high-value home specialists like Chubb, AIG Private Client, or PURE rather than standard market carriers. These carriers offer agreed value coverage, higher liability limits, and claims service appropriate for high-value properties.' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <h2 className="font-serif text-2xl text-blue-900 mb-4">Average Rates by Collier Area (2026)</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead><tr className="bg-blue-50 text-blue-900"><th className="text-left p-3 font-semibold">Area</th><th className="text-left p-3 font-semibold">Avg Annual Premium</th><th className="text-left p-3 font-semibold">Key Factor</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Naples (coastal)', '$4,500–$8,500', 'Gulf proximity, high values'],
                    ['Naples (inland)', '$3,000–$5,200', 'Less flood risk, gated communities'],
                    ['Marco Island', '$6,000–$12,000+', 'Island exposure, Gulf on multiple sides'],
                    ['Bonita Springs', '$3,200–$6,000', 'Gulf proximity, mixed age housing'],
                    ['Immokalee', '$1,800–$3,000', 'Inland, agricultural area, lower risk'],
                    ['Ave Maria', '$2,200–$3,600', 'Newer construction, inland'],
                  ].map(([city, rate, factor]) => (
                    <tr key={city} className="hover:bg-gray-50"><td className="p-3 font-medium text-gray-800">{city}</td><td className="p-3 text-orange-600 font-semibold">{rate}</td><td className="p-3 text-gray-500 text-xs">{factor}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Compare Your Collier County Rate</h3>
              <p className="text-blue-200 mb-6">Licensed agents compare up to 16 Florida carriers. 2-minute call, no obligation.</p>
              <CallButton variant="hero" label="Call Now — Compare Collier Rates" />
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
