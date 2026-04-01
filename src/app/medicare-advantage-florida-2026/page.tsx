import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

export const metadata: Metadata = {
  title: 'Medicare Advantage Changes Florida 2026 | Is Your Plan Discontinued?',
  description: 'Florida Medicare plans are changing in 2026. Many Advantage plans discontinued or reduced benefits. Find new 5-star coverage in your zip code. Call for a free plan review.',
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              2026 Plan Changes — Is Your Coverage Still Active?
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Florida Medicare Advantage 2026 —<br />
              <span className="text-orange-400">Don&apos;t Lose Your Benefits</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Federal reimbursement cuts in 2026 caused several Florida Medicare Advantage plans to reduce benefits or exit the market entirely. If you haven&apos;t reviewed your plan, you may be paying more for less coverage.
            </p>
            <CallButton variant="hero" label="Call for Free Medicare Review" />
            <p className="text-blue-300 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST · Licensed Medicare Agents</p>
          </div>
        </section>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">What Changed in Florida Medicare in 2026</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'Several Plans Reduced or Eliminated Dental/Vision Benefits', body: 'The 2026 federal reimbursement formula changes led many Florida Advantage plans to cut supplemental benefits like dental, vision, and hearing. If these were reasons you chose your plan, it\'s worth reviewing alternatives.' },
                { title: 'Some Plans Exited Florida Counties Entirely', body: 'A handful of carriers stopped offering plans in specific Florida counties. If you received a non-renewal notice, you have a Special Enrollment Period (SEP) to switch plans without waiting for AEP.' },
                { title: 'New 5-Star Plans Entered the Market', body: 'Several carriers with 5-star CMS ratings expanded into Florida in 2026. These plans often have better networks, lower copays, and more stable benefits. Our agents can compare them against your current plan.' },
                { title: 'Part D Drug Costs Changed Significantly', body: 'The Inflation Reduction Act caps out-of-pocket drug costs at $2,000 in 2026. However, formulary changes mean some medications moved to higher tiers. A plan review ensures your specific medications are covered at the lowest cost.' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Free Medicare Plan Review</h3>
              <p className="text-blue-200 mb-6">Licensed Medicare agents compare all available Florida plans in your zip code. No obligation, no cost.</p>
              <CallButton variant="hero" label="Call Now — Free Plan Review" />
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
