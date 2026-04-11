import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Lee County Homeowners Insurance | Compare 2026 Rates',
  description: 'Lee County homeowners insurance averages $3,600–$7,200/yr after Hurricane Ian. Fort Myers, Cape Coral, and Bonita Springs rates. Compare carriers now.',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/lee-county-homeowners-insurance' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/lee-county-homeowners-insurance',
    title: 'Lee County Homeowners Insurance | Compare 2026 Rates',
    description: 'Compare homeowners insurance in Lee County, FL. Fort Myers, Cape Coral, Bonita Springs. Post-Ian market update for 2026.',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image', title: 'Lee County Homeowners Insurance | Compare 2026 Rates', description: 'Compare homeowners insurance in Lee County, FL.' },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-orange-300 text-sm font-semibold mb-4">Lee County, Florida</div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Lee County Homeowners Insurance —<br />
              <span className="text-orange-400">Compare 2026 Rates</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Lee County was ground zero for Hurricane Ian in 2022. Premiums spiked dramatically in 2023–2024. In 2026, the market is slowly stabilizing — but Lee County homeowners still pay some of the highest rates in Florida. Comparing carriers is essential.
            </p>
            <CallButton variant="hero" label="Compare Lee County Rates" />
            <p className="text-blue-300 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">What&apos;s Unique About Lee County Insurance</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'Post-Ian Market Reality', body: 'Hurricane Ian caused over $100 billion in insured losses, with Lee County absorbing the largest share. Several carriers exited the Florida market entirely following Ian. Those that remained repriced significantly. The 2026 market is more stable but Lee County premiums remain elevated compared to pre-Ian levels.' },
                { title: 'Cape Coral Canal System Creates Unique Flood Risk', body: 'Cape Coral has over 400 miles of canals — more than any city in the world. Homes on canals have elevated flood risk that standard homeowners policies do not cover. Flood insurance is strongly recommended for any Cape Coral property near the canal system.' },
                { title: 'Roof Age Is Critical in Lee County', body: 'After Ian, carriers scrutinized roof ages aggressively. Most Lee County insurers will not write new policies on homes with roofs older than 15 years. If your roof is approaching that age, addressing it proactively is important for maintaining insurability.' },
                { title: 'Wind Mitigation Credits Remain Valuable', body: 'Despite elevated post-Ian premiums, wind mitigation credits still provide meaningful savings. A current inspection with documentation of hip roof, impact windows, and roof deck attachment can reduce your premium by $400–$900 annually.' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <h2 className="font-serif text-2xl text-blue-900 mb-4">Average Rates by Lee County City (2026)</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead><tr className="bg-blue-50 text-blue-900"><th className="text-left p-3 font-semibold">City</th><th className="text-left p-3 font-semibold">Avg Annual Premium</th><th className="text-left p-3 font-semibold">Key Factor</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Fort Myers (coastal)', '$4,200–$7,800', 'Post-Ian repricing, coastal exposure'],
                    ['Fort Myers (inland)', '$3,000–$5,200', 'Less surge risk, newer construction'],
                    ['Cape Coral', '$3,600–$6,800', 'Canal system, flood risk'],
                    ['Bonita Springs', '$3,800–$7,200', 'Gulf proximity, high-value homes'],
                    ['Estero', '$3,200–$5,600', 'Newer construction, some flood risk'],
                    ['Sanibel/Captiva', '$6,000–$12,000+', 'Island exposure, post-Ian rebuilds'],
                  ].map(([city, rate, factor]) => (
                    <tr key={city} className="hover:bg-gray-50"><td className="p-3 font-medium text-gray-800">{city}</td><td className="p-3 text-orange-600 font-semibold">{rate}</td><td className="p-3 text-gray-500 text-xs">{factor}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Compare Your Lee County Rate</h3>
              <p className="text-blue-200 mb-6">Licensed agents compare up to 16 Florida carriers. 2-minute call, no obligation.</p>
              <CallButton variant="hero" label="Call Now — Compare Lee County Rates" />
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
