import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const metadata: Metadata = {
  title: 'Palm Beach Homeowners Insurance | 2026 Rates',
  description: 'Compare Palm Beach County homeowners insurance. West Palm Beach, Boca Raton, Delray Beach, Boynton Beach. Citizens alternatives, wind mitigation credits...',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/palm-beach-homeowners-insurance' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/palm-beach-homeowners-insurance',
    title: 'Palm Beach Homeowners Insurance | 2026 Rates',
    description: 'Compare Palm Beach County homeowners insurance. West Palm Beach, Boca Raton, Delray Beach, Boynton Beach. Citizens alternatives, wind mitigation credits, 2',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palm Beach Homeowners Insurance | 2026 Rates',
    description: 'Compare Palm Beach County homeowners insurance. West Palm Beach, Boca Raton, Delray Beach, Boynton Beach. Citizens alternatives, wind mitigation credits, 2',
  },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-orange-300 text-sm font-semibold mb-4">Palm Beach County, Florida</div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Palm Beach County Homeowners Insurance —<br />
              <span className="text-orange-400">Compare 2026 Rates</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Palm Beach County spans coastal luxury properties to inland communities — and insurance rates vary dramatically by zip code. Our agents know the Palm Beach market and can find you the best rate from 16+ carriers.
            </p>
            <CallButton variant="hero" label="Compare Palm Beach Rates" />
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead><tr className="bg-blue-50 text-blue-900"><th className="text-left p-3 font-semibold">City</th><th className="text-left p-3 font-semibold">Avg Annual Premium</th><th className="text-left p-3 font-semibold">Key Factor</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {[['West Palm Beach','$2,800–$5,200','Mixed coastal/inland, older stock'],['Boca Raton','$2,600–$4,800','Newer construction, good wind mitigation'],['Delray Beach','$2,700–$4,600','Coastal exposure, active market'],['Boynton Beach','$2,400–$4,000','Inland areas significantly cheaper'],['Wellington','$2,200–$3,600','Inland, newer homes, lowest risk'],['Lake Worth','$2,500–$4,200','Mixed age housing stock']].map(([city, rate, factor]) => (
                    <tr key={city} className="hover:bg-gray-50"><td className="p-3 font-medium text-gray-800">{city}</td><td className="p-3 text-orange-600 font-semibold">{rate}</td><td className="p-3 text-gray-500 text-xs">{factor}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Compare Your Palm Beach Rate</h3>
              <p className="text-blue-200 mb-6">16 carriers compared. 2-minute call, no obligation.</p>
              <CallButton variant="hero" label="Call Now — Palm Beach Quotes" />
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
