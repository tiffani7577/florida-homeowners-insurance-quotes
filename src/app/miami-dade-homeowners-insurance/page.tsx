import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const metadata: Metadata = {
  title: 'Miami-Dade Homeowners Insurance Quotes | HVHZ Coverage 2026',
  description: 'Compare Miami-Dade homeowners insurance. HVHZ-compliant coverage, Citizens alternatives, wind mitigation credits. Miami, Hialeah, Coral Gables, Homestead. Call for 2026 rates.',
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-orange-300 text-sm font-semibold mb-4">Miami-Dade County, Florida</div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Miami-Dade Homeowners Insurance —<br />
              <span className="text-orange-400">HVHZ Coverage Specialists</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Miami-Dade is in Florida&apos;s High-Velocity Hurricane Zone — the strictest building code area in the US. Finding the right carrier requires knowing which companies actually write policies here. Our agents specialize in HVHZ coverage.
            </p>
            <CallButton variant="hero" label="Compare Miami-Dade Rates" />
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">Miami-Dade Insurance: What You Need to Know</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'HVHZ Means Fewer Carriers — But Better Discounts', body: 'Not all Florida carriers write policies in the HVHZ. Those that do offer significant discounts for impact-resistant windows, doors, and roofing. A properly documented wind mitigation inspection is essential in Miami-Dade.' },
                { title: 'Roof Age Is the #1 Rate Factor', body: 'Miami-Dade carriers are strict about roof age. Most will not write new policies on roofs older than 15 years. If your roof is 10–15 years old, you may have a 12-month window before you face non-renewal. Call now to compare options.' },
                { title: 'Flood Insurance Is Separate — And Often Required', body: 'Standard homeowners policies do not cover flood damage. In Miami-Dade, many properties are in FEMA flood zones requiring separate NFIP or private flood coverage. Our agents can quote both.' },
                { title: 'Spanish-Speaking Agents Available', body: 'Miami-Dade is a bilingual market. Our agents include Spanish-speaking specialists who can explain coverage options clearly. Visit our Spanish-language page or call — we\'ll connect you with a Spanish-speaking agent.' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Compare Miami-Dade Rates Now</h3>
              <p className="text-blue-200 mb-6">HVHZ specialists. Spanish-speaking agents available. No obligation.</p>
              <CallButton variant="hero" label="Call Now — Miami-Dade Quotes" />
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
