import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const metadata: Metadata = {
  title: 'Broward County Homeowners Insurance | 2026',
  description: 'Compare homeowners insurance quotes in Broward County, FL. Fort Lauderdale, Hollywood, Pompano Beach, Coral Springs. 2026 rate decreases, wind mitigatio...',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/broward-county-homeowners-insurance' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/broward-county-homeowners-insurance',
    title: 'Broward County Homeowners Insurance | 2026',
    description: 'Compare homeowners insurance quotes in Broward County, FL. Fort Lauderdale, Hollywood, Pompano Beach, Coral Springs. 2026 rate decreases, wind mitigation c',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Broward County Homeowners Insurance | 2026',
    description: 'Compare homeowners insurance quotes in Broward County, FL. Fort Lauderdale, Hollywood, Pompano Beach, Coral Springs. 2026 rate decreases, wind mitigation c',
  },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-orange-300 text-sm font-semibold mb-4">Broward County, Florida</div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Broward County Homeowners Insurance —<br />
              <span className="text-orange-400">Compare 2026 Rates</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Broward County homeowners saw some of the largest premium spikes in 2023–2024. In 2026, new carriers and tort reforms are finally bringing rates down. If you haven&apos;t compared in 12 months, you&apos;re likely overpaying.
            </p>
            <CallButton variant="hero" label="Compare Broward County Rates" />
            <p className="text-blue-300 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">What&apos;s Unique About Broward County Insurance</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'High-Velocity Hurricane Zone (HVHZ)', body: 'Broward County falls within Florida\'s High-Velocity Hurricane Zone — the same designation as Miami-Dade. This means stricter building codes but also significant wind mitigation discounts if your home has impact windows, a hip roof, or a recent roof replacement.' },
                { title: 'Wind Mitigation Inspections Can Save 10–45%', body: 'A licensed wind mitigation inspector evaluates your roof shape, opening protection, and roof deck attachment. In Broward, homes built after 2002 often qualify for substantial credits. If your inspection is older than 5 years, a new one could unlock savings your current carrier isn\'t applying.' },
                { title: 'Citizens Insurance Take-Out Offers in Broward', body: 'Citizens Insurance has been actively depopulating in Broward County. If you received a take-out offer from a private carrier, you have 30 days to accept or reject. Don\'t let it expire — call us to compare the new carrier\'s rates against the market.' },
                { title: '2026 Rate Decreases Are Real — But Not Universal', body: 'While the statewide average decreased 8.7%, individual rates vary by zip code, roof age, and claims history. Broward zip codes near the coast (33316, 33019) may still see higher rates than inland areas (33065, 33071).' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl text-blue-900 mb-4">Average Rates by Broward City (2026)</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead><tr className="bg-blue-50 text-blue-900"><th className="text-left p-3 font-semibold">City</th><th className="text-left p-3 font-semibold">Avg Annual Premium</th><th className="text-left p-3 font-semibold">Key Factor</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {[['Fort Lauderdale','$3,200–$5,800','Coastal proximity, older housing stock'],['Hollywood','$2,900–$5,200','Mixed coastal/inland, HVHZ'],['Pompano Beach','$3,100–$5,600','Coastal flood risk'],['Coral Springs','$2,400–$3,800','Inland, newer construction, lower risk'],['Miramar','$2,600–$4,200','Newer homes, good wind mitigation'],['Deerfield Beach','$2,800–$4,800','Coastal exposure, older roofs']].map(([city, rate, factor]) => (
                    <tr key={city} className="hover:bg-gray-50"><td className="p-3 font-medium text-gray-800">{city}</td><td className="p-3 text-orange-600 font-semibold">{rate}</td><td className="p-3 text-gray-500 text-xs">{factor}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Compare Your Broward County Rate</h3>
              <p className="text-blue-200 mb-6">Licensed agents compare up to 16 Florida carriers. 2-minute call, no obligation.</p>
              <CallButton variant="hero" label="Call Now — Compare Broward Rates" />
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
