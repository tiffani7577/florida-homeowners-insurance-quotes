import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

const faq = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How fast can I get a Florida FR-44 filed?","acceptedAnswer":{"@type":"Answer","text":"Our agents provide instant electronic filing to the DHSMV. Most FR-44s are submitted within 15 minutes of your call. Call (435) 612-1009 now to start your reinstatement."}},{"@type":"Question","name":"What is the difference between FR-44 and SR-22 in Florida?","acceptedAnswer":{"@type":"Answer","text":"FR-44 is Florida-specific and required after DUI/DWI convictions. It requires higher liability limits (100/300/50) than SR-22. SR-22 is for other violations and requires standard limits."}},{"@type":"Question","name":"Do I need FR-44 if I don't own a car?","acceptedAnswer":{"@type":"Answer","text":"Yes. Florida requires a Non-Owner FR-44 policy to reinstate your license even if you don't own a vehicle. These are significantly cheaper than standard policies. Call (435) 612-1009 for a non-owner quote."}}]}

export const metadata: Metadata = {
  title: 'Florida FR-44 Insurance | Instant Filing 2026',
  description: "Need a Florida FR-44 fast? Instant electronic filing to DHSMV. Low down payments, 2026 rates, non-owner policies available. Call an agent now.",
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faq)}} />
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              License Suspended? File in 15 Minutes
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Florida FR-44 Insurance —<br />
              <span className="text-orange-400">Instant Filing, Get Back on the Road</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Florida&apos;s FR-44 requirement after a DUI is strict — but our agents file electronically to the DHSMV in minutes. 2026 rates are down 8% from last year. Non-owner policies available.
            </p>
            <CallButton variant="hero" label="Call Now — File FR-44 in 15 Min" />
            <p className="text-blue-300 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
              <h2 className="font-semibold text-amber-900 mb-3">FR-44 vs SR-22 in Florida — Key Differences</h2>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-amber-800 mb-2">FR-44 (DUI/DWI)</div>
                  <ul className="space-y-1 text-gray-700">
                    {['Required after DUI or DWI conviction','Higher limits: 100/300/50','Florida-specific requirement','Required for 3 years from reinstatement','Non-owner option available'].map(i => (
                      <li key={i} className="flex gap-2"><span className="text-amber-500 mt-0.5">•</span>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-blue-800 mb-2">SR-22 (Other Violations)</div>
                  <ul className="space-y-1 text-gray-700">
                    {['Required for other serious violations','Standard limits: 10/20/10','Used in most states','Required for 3 years','Non-owner option available'].map(i => (
                      <li key={i} className="flex gap-2"><span className="text-blue-500 mt-0.5">•</span>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-2xl text-blue-900 mb-4">2026 FR-44 Cost Estimates</h2>
            <div className="space-y-3 mb-10">
              {[
                ['Standard FR-44 Policy', '$800–$2,500/yr', 'Depends on driving record, age, vehicle, and county'],
                ['Non-Owner FR-44', '$400–$900/yr', "For drivers without a vehicle — cheapest way to reinstate your license"],
                ['SR-22 (non-DUI)', '$300–$800/yr', 'Lower limits required, generally cheaper than FR-44'],
              ].map(([type, cost, note]) => (
                <div key={type} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex-1">
                    <div className="font-semibold text-blue-900 text-sm">{type}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{note}</div>
                  </div>
                  <div className="text-orange-500 font-bold text-sm whitespace-nowrap">{cost}</div>
                </div>
              ))}
            </div>

            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">File Your FR-44 Today</h3>
              <p className="text-blue-200 mb-6">Electronic filing to DHSMV in 15 minutes. Low down payments. Non-owner policies available.</p>
              <CallButton variant="hero" label="Call Now — Instant FR-44 Filing" />
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
