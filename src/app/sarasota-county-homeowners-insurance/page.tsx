import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sarasota County Homeowners Insurance | Compare 2026 Rates',
  description: 'Sarasota County homeowners insurance averages $2,800–$5,400/yr. Sarasota, Venice, and North Port rates. Compare carriers and save on your 2026 premium.',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/sarasota-county-homeowners-insurance' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/sarasota-county-homeowners-insurance',
    title: 'Sarasota County Homeowners Insurance | Compare 2026 Rates',
    description: 'Compare homeowners insurance in Sarasota County, FL. Sarasota, Venice, North Port, Osprey. 2026 rates.',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image', title: 'Sarasota County Homeowners Insurance | Compare 2026 Rates', description: 'Compare homeowners insurance in Sarasota County, FL.' },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-orange-300 text-sm font-semibold mb-4">Sarasota County, Florida</div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Sarasota County Homeowners Insurance —<br />
              <span className="text-orange-400">Compare 2026 Rates</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Sarasota County offers a mix of coastal and inland communities with meaningfully different risk profiles. North Port and inland Sarasota have more carrier options and lower premiums than beachfront areas. Comparing is worth the 2 minutes.
            </p>
            <CallButton variant="hero" label="Compare Sarasota County Rates" />
            <p className="text-blue-300 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">What&apos;s Unique About Sarasota County Insurance</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'North Port Growth Creates New Inventory', body: 'North Port is one of the fastest-growing cities in Florida. Newer homes built to post-2002 Florida Building Code qualify for wind mitigation credits that can reduce premiums by 15–30%. If you bought a newer North Port home, make sure your insurer is applying all available credits.' },
                { title: 'Siesta Key and Lido Key Are High-Premium Zones', body: 'Barrier island properties in Sarasota County face the highest premiums in the county due to Gulf exposure and surge risk. Some standard carriers will not write policies on barrier islands at all. Surplus lines carriers are often the primary option.' },
                { title: 'Venice and Osprey Have Moderate Risk Profiles', body: 'Venice and Osprey offer a middle ground — Gulf proximity with somewhat less direct exposure than the barrier islands. Premiums are elevated relative to inland areas but more carrier options exist than for beachfront properties.' },
                { title: 'Sinkhole Coverage Is Worth Considering', body: 'Sarasota County sits in a region with documented sinkhole activity. Standard policies cover catastrophic ground cover collapse but not lesser sinkhole damage. A sinkhole endorsement adds $200–$400 per year and covers the full range of sinkhole-related losses.' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <h2 className="font-serif text-2xl text-blue-900 mb-4">Average Rates by Sarasota Area (2026)</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead><tr className="bg-blue-50 text-blue-900"><th className="text-left p-3 font-semibold">Area</th><th className="text-left p-3 font-semibold">Avg Annual Premium</th><th className="text-left p-3 font-semibold">Key Factor</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Sarasota (coastal)', '$3,400–$6,200', 'Gulf proximity, older housing'],
                    ['Sarasota (inland)', '$2,400–$4,000', 'More carrier options, lower risk'],
                    ['Venice', '$2,800–$5,000', 'Gulf exposure, retiree market'],
                    ['North Port', '$2,200–$3,600', 'Newer construction, inland areas'],
                    ['Siesta Key', '$5,000–$9,000+', 'Barrier island, maximum exposure'],
                    ['Osprey/Nokomis', '$2,600–$4,400', 'Moderate coastal exposure'],
                  ].map(([city, rate, factor]) => (
                    <tr key={city} className="hover:bg-gray-50"><td className="p-3 font-medium text-gray-800">{city}</td><td className="p-3 text-orange-600 font-semibold">{rate}</td><td className="p-3 text-gray-500 text-xs">{factor}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Compare Your Sarasota County Rate</h3>
              <p className="text-blue-200 mb-6">Licensed agents compare up to 16 Florida carriers. 2-minute call, no obligation.</p>
              <CallButton variant="hero" label="Call Now — Compare Sarasota Rates" />
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
