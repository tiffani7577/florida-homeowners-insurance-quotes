import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Osceola County Homeowners Insurance | Compare 2026 Rates',
  description: 'Osceola County homeowners insurance averages $1,900–$3,400/yr. Kissimmee and St. Cloud rates. Short-term rental homes have unique coverage needs.',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/osceola-county-homeowners-insurance' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/osceola-county-homeowners-insurance',
    title: 'Osceola County Homeowners Insurance | Compare 2026 Rates',
    description: 'Compare homeowners insurance in Osceola County, FL. Kissimmee, St. Cloud, Celebration. Short-term rental and vacation home coverage.',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image', title: 'Osceola County Homeowners Insurance | Compare 2026 Rates', description: 'Compare homeowners insurance in Osceola County, FL.' },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-orange-300 text-sm font-semibold mb-4">Osceola County, Florida</div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Osceola County Homeowners Insurance —<br />
              <span className="text-orange-400">Compare 2026 Rates</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Osceola County is one of Florida&apos;s most unique insurance markets — home to a large concentration of short-term vacation rentals near Walt Disney World, as well as growing residential communities in Kissimmee and St. Cloud. Coverage needs vary significantly by property type.
            </p>
            <CallButton variant="hero" label="Compare Osceola County Rates" />
            <p className="text-blue-300 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">What&apos;s Unique About Osceola County Insurance</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'Short-Term Rentals Need Specialized Coverage', body: "Osceola County has one of the highest concentrations of short-term vacation rental properties in the US. Standard homeowners policies do not cover short-term rental activity. If you rent your home on Airbnb, VRBO, or similar platforms, you need a short-term rental policy or a landlord policy with vacation rental endorsement." },
                { title: 'Inland Location Keeps Base Rates Lower', body: "Osceola County is inland with no direct coastal exposure, which keeps base premiums lower than coastal Florida counties. The primary weather risks are wind from passing storms and flooding from heavy rainfall events — both of which are manageable with proper coverage." },
                { title: 'Celebration and Newer Communities Have Advantages', body: "Celebration and other planned communities built in the 1990s and 2000s have newer construction that qualifies for wind mitigation credits. Homes in these communities often have better insurability and more carrier options than older Kissimmee neighborhoods." },
                { title: 'Flooding From Rainfall Is Underappreciated', body: "While Osceola County lacks coastal surge risk, heavy rainfall events can cause significant flooding. The county sits at low elevation with numerous lakes and wetlands. Flood insurance is worth considering even for properties not in designated flood zones." },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <h2 className="font-serif text-2xl text-blue-900 mb-4">Average Rates by Osceola Area (2026)</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead><tr className="bg-blue-50 text-blue-900"><th className="text-left p-3 font-semibold">Area</th><th className="text-left p-3 font-semibold">Avg Annual Premium</th><th className="text-left p-3 font-semibold">Key Factor</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Kissimmee', '$1,900–$3,400', 'Inland, competitive market'],
                    ['St. Cloud', '$1,800–$3,000', 'Newer construction, suburban'],
                    ['Celebration', '$2,000–$3,400', 'Planned community, newer homes'],
                    ['Vacation rental areas', '$2,400–$4,200', 'Requires specialized STR policy'],
                    ['Poinciana', '$1,700–$2,800', 'Inland, affordable area'],
                    ['Harmony', '$1,800–$3,000', 'Newer planned community'],
                  ].map(([city, rate, factor]) => (
                    <tr key={city} className="hover:bg-gray-50"><td className="p-3 font-medium text-gray-800">{city}</td><td className="p-3 text-orange-600 font-semibold">{rate}</td><td className="p-3 text-gray-500 text-xs">{factor}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Compare Your Osceola County Rate</h3>
              <p className="text-blue-200 mb-6">Licensed agents compare up to 16 Florida carriers. 2-minute call, no obligation.</p>
              <CallButton variant="hero" label="Call Now — Compare Osceola Rates" />
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
