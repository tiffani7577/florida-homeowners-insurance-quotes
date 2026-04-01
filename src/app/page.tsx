import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Florida Homeowners Insurance Quotes | Compare 2026 Rates',
  description: 'Compare Florida homeowners insurance quotes from top carriers. 2026 rate decreases, Citizens alternatives, county-specific coverage, and instant FR-44/SR-22 filings.',
}

const pages = [
  { href: '/broward-county-homeowners-insurance', title: 'Broward County', desc: 'Fort Lauderdale, Hollywood, Pompano Beach — compare local rates' },
  { href: '/miami-dade-homeowners-insurance', title: 'Miami-Dade County', desc: 'Miami, Hialeah, Coral Gables — HVHZ coverage specialists' },
  { href: '/palm-beach-homeowners-insurance', title: 'Palm Beach County', desc: 'West Palm Beach, Boca Raton, Delray Beach — compare carriers' },
  { href: '/contractor-general-liability-florida', title: 'Contractor General Liability', desc: 'Same-day COI for Florida roofers, HVAC, electricians, handymen' },
  { href: '/fr-44-insurance-florida', title: 'FR-44 Insurance Florida', desc: 'Instant FR-44 filing — get your license reinstated today' },
  { href: '/medicare-advantage-florida-2026', title: 'Medicare Advantage 2026', desc: 'Florida plan changes, terminations, and how to find new coverage' },
  { href: '/florida-homeowners-insurance-rates-2026', title: '2026 Rate Guide', desc: 'Florida rates dropped 8.7% — what it means for your policy' },
  { href: '/seguro-de-casa-florida', title: 'Seguro de Casa Florida', desc: 'Cotizaciones de seguro para propietarios en Florida — en español' },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              2026 Florida Rates Down 8.7% — Are You Overpaying?
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Florida Homeowners Insurance Quotes —<br />
              <span className="text-orange-400">Compare Real Rates in 2 Minutes</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl">
              16 new carriers entered Florida in 2026. If you haven&apos;t compared rates since 2024, you&apos;re likely overpaying. Our licensed agents compare multiple carriers and find your best rate — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CallButton variant="hero" label="Call Now — Free Quote in 2 Min" />
              <Link href="/florida-homeowners-insurance-rates-2026" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-xl transition-colors text-sm">
                See 2026 Rate Guide →
              </Link>
            </div>
            <p className="text-blue-300 text-xs mt-4">Mon–Fri 9am–9pm · Sat 12pm–5pm EST · Licensed Florida Agents</p>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="bg-white border-b border-gray-100 py-4 px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
            {['Licensed Florida Agents', '16 Carriers Compared', 'No Obligation Quote', 'FR-44 & SR-22 Specialists', 'Spanish-Speaking Agents Available'].map(t => (
              <div key={t} className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* WHAT'S CHANGED IN 2026 */}
        <section className="py-14 px-4 bg-[#FAFAF7]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-blue-900 font-bold mb-2">What Changed in Florida Insurance in 2026</h2>
            <p className="text-gray-500 mb-8 text-sm">Most homeowners don&apos;t know about these changes — and they&apos;re leaving money on the table.</p>
            <div className="space-y-4">
              {[
                { title: '8.7% Average Rate Decrease for Citizens Policyholders', body: 'Florida\'s 2022–2023 tort reforms are finally showing up in premiums. Citizens Insurance policyholders saw an average 8.7% decrease in 2026. If you\'re still paying 2024 rates, call to compare.' },
                { title: '16 New Private Carriers Entered the Market', body: 'For the first time in years, Florida homeowners have real options. New carriers like Slide Insurance, Demotech-rated companies, and specialty coastal insurers are writing policies at competitive rates.' },
                { title: 'Wind Mitigation Form Overhauled', body: 'Florida updated the OIR-B1-1802 Wind Mitigation form in 2026. If your inspection is from before 2024, a new inspection could unlock 10–45% premium credits that your current insurer isn\'t applying.' },
                { title: 'Citizens Depopulation Accelerating', body: 'Citizens is actively moving policyholders to private carriers. If you received a "take-out" offer, you have 30 days to accept or reject. Don\'t let it expire without comparing rates first.' },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAGE GRID */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-blue-900 font-bold mb-2">Find Your Coverage Type</h2>
            <p className="text-gray-500 mb-8 text-sm">County-specific rates, contractor liability, high-risk filings, and more.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {pages.map(p => (
                <Link key={p.href} href={p.href} className="group bg-[#FAFAF7] hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl p-5 transition-all">
                  <div className="font-semibold text-blue-900 group-hover:text-blue-700 mb-1 text-sm">{p.title} →</div>
                  <div className="text-gray-500 text-xs">{p.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-14 px-4 bg-blue-900 text-white text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-3">Ready to Compare Your Rate?</h2>
            <p className="text-blue-200 mb-6">Licensed Florida agents compare up to 16 carriers. 2-minute call, no obligation.</p>
            <CallButton variant="hero" label="Call (435) 612-1009 Now" />
            <p className="text-blue-400 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </section>
      </main>
      <Footer />
      <CallButton variant="sticky" />
      <ExitIntent />
    </>
  )
}
