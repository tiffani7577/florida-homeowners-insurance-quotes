import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Volusia County Homeowners Insurance | Compare 2026 Rates',
  description: 'Volusia County homeowners insurance averages $2,200–$4,800/yr. Daytona Beach, Deltona, and Ormond Beach rates. Compare carriers and find the best 2026 rate.',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/volusia-county-homeowners-insurance' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/volusia-county-homeowners-insurance',
    title: 'Volusia County Homeowners Insurance | Compare 2026 Rates',
    description: 'Compare homeowners insurance in Volusia County, FL. Daytona Beach, Deltona, Ormond Beach, DeLand. 2026 rates.',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image', title: 'Volusia County Homeowners Insurance | Compare 2026 Rates', description: 'Compare homeowners insurance in Volusia County, FL.' },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-orange-300 text-sm font-semibold mb-4">Volusia County, Florida</div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Volusia County Homeowners Insurance —<br />
              <span className="text-orange-400">Compare 2026 Rates</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Volusia County offers more affordable homeowners insurance than South Florida — but rates vary significantly between beachside Daytona and inland Deltona. Comparing carriers can save $400–$900 per year.
            </p>
            <CallButton variant="hero" label="Compare Volusia County Rates" />
            <p className="text-blue-300 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">What&apos;s Unique About Volusia County Insurance</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'Atlantic Coast Exposure Is Real but Manageable', body: 'Volusia County faces the Atlantic rather than the Gulf, which generally means lower storm surge risk than Gulf Coast counties. However, Atlantic hurricanes and tropical storms still create meaningful wind and water damage risk, particularly for beachside properties.' },
                { title: 'Inland Deltona and DeLand Have Strong Carrier Options', body: 'Deltona and DeLand are among the more affordable areas in Florida for homeowners insurance. Distance from the coast, newer construction in many neighborhoods, and lower flood risk combine to create a competitive carrier environment with more options than coastal areas.' },
                { title: 'Daytona Beach Has Older Housing Stock', body: 'Much of Daytona Beach proper was built before 1980. Older homes face 4-point inspection requirements and potential issues with roof age, electrical panels, and plumbing that affect insurability. If your home is over 30 years old, a 4-point inspection before shopping for insurance is worthwhile.' },
                { title: 'Sinkhole Activity in Western Volusia', body: 'Western Volusia County has documented sinkhole activity. Standard policies cover only catastrophic ground cover collapse. A sinkhole endorsement provides broader coverage for a moderate additional premium.' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <h2 className="font-serif text-2xl text-blue-900 mb-4">Average Rates by Volusia Area (2026)</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead><tr className="bg-blue-50 text-blue-900"><th className="text-left p-3 font-semibold">Area</th><th className="text-left p-3 font-semibold">Avg Annual Premium</th><th className="text-left p-3 font-semibold">Key Factor</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Daytona Beach (beachside)', '$3,200–$5,600', 'Atlantic exposure, older housing'],
                    ['Daytona Beach (inland)', '$2,200–$3,800', 'Less coastal risk'],
                    ['Deltona', '$1,900–$3,200', 'Inland, newer construction, competitive'],
                    ['Ormond Beach', '$2,600–$4,400', 'Atlantic proximity, mixed age'],
                    ['DeLand', '$1,800–$3,000', 'Inland, lower risk, affordable'],
                    ['New Smyrna Beach', '$2,800–$5,000', 'Coastal, Atlantic exposure'],
                  ].map(([city, rate, factor]) => (
                    <tr key={city} className="hover:bg-gray-50"><td className="p-3 font-medium text-gray-800">{city}</td><td className="p-3 text-orange-600 font-semibold">{rate}</td><td className="p-3 text-gray-500 text-xs">{factor}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Compare Your Volusia County Rate</h3>
              <p className="text-blue-200 mb-6">Licensed agents compare up to 16 Florida carriers. 2-minute call, no obligation.</p>
              <CallButton variant="hero" label="Call Now — Compare Volusia Rates" />
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
