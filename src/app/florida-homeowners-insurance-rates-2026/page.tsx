import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const metadata: Metadata = {
  title: 'Florida Homeowners Insurance Rates 2026 | What Actually Changed',
  description: 'Florida homeowners insurance rates dropped 8.7% in 2026 for Citizens policyholders. 16 new carriers entered. Find out if you\'re overpaying and how to get the new lower rates.',
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Florida Homeowners Insurance Rates 2026 —<br />
              <span className="text-orange-400">What Actually Changed</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              After years of skyrocketing premiums, Florida&apos;s insurance market is stabilizing in 2026. Here&apos;s what&apos;s real, what&apos;s hype, and how to make sure you&apos;re getting the new lower rates.
            </p>
            <CallButton variant="hero" label="Check If You're Overpaying" />
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-5 mb-10">
              {[
                { title: 'The 8.7% Citizens Decrease — Real, But Not Universal', body: 'Citizens Insurance approved an average 8.7% rate decrease for 2026. However, this is a statewide average. Your individual rate depends on your county, roof age, construction type, and claims history. Some policyholders saw larger decreases; others saw increases.' },
                { title: '16 New Carriers — More Competition, Lower Prices', body: 'For the first time since 2019, Florida has meaningful new competition. Companies like Slide Insurance, Ovation Home Insurance Exchange, and several Demotech-rated carriers are writing new policies at competitive rates. This is the biggest structural change in the market.' },
                { title: 'Tort Reform Is Working — But Slowly', body: "Florida's 2022 and 2023 tort reforms eliminated one-way attorney fees and assignment of benefits (AOB) abuse. The result: fewer frivolous lawsuits, lower reinsurance costs, and carriers willing to re-enter the market. The full effect takes 2–3 years to show up in premiums." },
                { title: 'Roof Age Rules Are Tightening', body: 'Despite the positive trends, carriers are stricter than ever about roof age. Most will not write new policies on roofs older than 15 years. If your roof is approaching that threshold, act now — getting coverage before a non-renewal is much easier than finding it after.' },
                { title: 'Wind Mitigation Credits Are Underutilized', body: 'Fewer than 40% of eligible Florida homeowners have a current wind mitigation inspection on file. A new inspection (cost: $75–$150) can unlock 10–45% premium credits. If your inspection is more than 5 years old, a new one could pay for itself in the first month.' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Are You Getting 2026 Rates?</h3>
              <p className="text-blue-200 mb-6">Our agents compare 16 carriers to find your lowest 2026 rate. 2-minute call.</p>
              <CallButton variant="hero" label="Call Now — Check Your Rate" />
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
