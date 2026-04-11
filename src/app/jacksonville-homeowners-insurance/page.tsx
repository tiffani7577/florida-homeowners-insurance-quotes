import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Jacksonville Homeowners Insurance | Compare 2026 Rates',
  description: "Jacksonville homeowners insurance averages $1,800–$3,600/yr — among Florida's most affordable. Compare carriers and find the best 2026 rate for Duval County.",
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/jacksonville-homeowners-insurance' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/jacksonville-homeowners-insurance',
    title: 'Jacksonville Homeowners Insurance | Compare 2026 Rates',
    description: "Compare homeowners insurance in Jacksonville, FL. Among Florida's most affordable markets. 2026 rates for Duval County.",
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image', title: 'Jacksonville Homeowners Insurance | Compare 2026 Rates', description: 'Compare homeowners insurance in Jacksonville, FL.' },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-orange-300 text-sm font-semibold mb-4">Jacksonville, Florida</div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Jacksonville Homeowners Insurance —<br />
              <span className="text-orange-400">Compare 2026 Rates</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Jacksonville is one of the most affordable cities in Florida for homeowners insurance. Distance from the Gulf, lower average home values, and a competitive carrier market keep premiums well below the state average. Still, comparing carriers can save $300–$700 per year.
            </p>
            <CallButton variant="hero" label="Compare Jacksonville Rates" />
            <p className="text-blue-300 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">What&apos;s Unique About Jacksonville Insurance</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: "Florida's Most Affordable Major City for Insurance", body: "Jacksonville's location in Northeast Florida — away from the Gulf and far from the most active hurricane tracks — makes it one of the most competitively priced markets in the state. More carriers are willing to write in Duval County than in South Florida, which drives prices down." },
                { title: 'St. Johns River Flooding Is a Real Risk', body: "Jacksonville has experienced significant flooding from the St. Johns River during major storms. Flood insurance is separate from homeowners coverage and is worth considering for homes near the river or in low-lying areas. Hurricane Irma caused significant flooding in Jacksonville despite making landfall 300 miles south." },
                { title: 'Older Neighborhoods Have Insurability Challenges', body: "Riverside, Avondale, Springfield, and other historic Jacksonville neighborhoods have older housing stock that can create 4-point inspection issues. Knob-and-tube wiring, cast iron pipes, and older roofs are common in these areas and can limit carrier options." },
                { title: 'Beach Communities Have Higher Premiums', body: "Jacksonville Beach, Neptune Beach, and Atlantic Beach face Atlantic exposure that pushes premiums higher than inland Duval County. These communities are still more affordable than comparable beach communities in South Florida, but the coastal premium is real." },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <h2 className="font-serif text-2xl text-blue-900 mb-4">Average Rates by Jacksonville Area (2026)</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead><tr className="bg-blue-50 text-blue-900"><th className="text-left p-3 font-semibold">Area</th><th className="text-left p-3 font-semibold">Avg Annual Premium</th><th className="text-left p-3 font-semibold">Key Factor</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Jacksonville (inland)', '$1,600–$2,800', 'Competitive market, lower risk'],
                    ['Jacksonville (Southside)', '$1,800–$3,200', 'Newer construction, suburban'],
                    ['Jacksonville Beach', '$2,600–$4,400', 'Atlantic exposure, coastal premium'],
                    ['Riverside/Avondale', '$2,000–$3,600', 'Older housing, flood risk near river'],
                    ['Fleming Island', '$1,700–$2,900', 'Suburban, newer construction'],
                    ['Ponte Vedra Beach', '$3,000–$5,200', 'Atlantic exposure, high values'],
                  ].map(([city, rate, factor]) => (
                    <tr key={city} className="hover:bg-gray-50"><td className="p-3 font-medium text-gray-800">{city}</td><td className="p-3 text-orange-600 font-semibold">{rate}</td><td className="p-3 text-gray-500 text-xs">{factor}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Compare Your Jacksonville Rate</h3>
              <p className="text-blue-200 mb-6">Licensed agents compare up to 16 Florida carriers. 2-minute call, no obligation.</p>
              <CallButton variant="hero" label="Call Now — Compare Jacksonville Rates" />
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
