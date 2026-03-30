import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Sunshine State Insured | Florida Home Insurance Help & Quotes',
  description: 'Florida homeowners: get real answers about the insurance crisis, Citizens Insurance alternatives, windstorm coverage, and flood insurance. Serving Broward County and all of Florida.',
  alternates: { canonical: 'https://www.sunshinestateinsured.com' },
}

const guides = [
  {
    href: '/why-is-florida-home-insurance-so-expensive',
    title: 'Why Is My Home Insurance So Expensive in Florida?',
    desc: 'Florida premiums average $8,292/year — nearly 3x the national average. Here\'s exactly why and what you can do about it.',
    tag: 'Most Read',
    tagColor: 'bg-coral-500',
  },
  {
    href: '/citizens-insurance-vs-private-market-florida',
    title: 'Citizens Insurance vs. Private Market Florida',
    desc: 'Citizens is the insurer of last resort — not always the best option. Learn when to stay and when to switch.',
    tag: 'Popular',
    tagColor: 'bg-teal-600',
  },
  {
    href: '/home-insurance-dropped-by-carrier-florida',
    title: 'Home Insurance Dropped by Carrier in Florida: What to Do',
    desc: 'Over 580,000 Florida homeowners were dropped in 2024. Here\'s your step-by-step action plan.',
    tag: 'Urgent',
    tagColor: 'bg-amber-500',
  },
  {
    href: '/home-insurance-with-roof-over-15-years-florida',
    title: 'Home Insurance With a Roof Over 15 Years Old in Florida',
    desc: 'Many carriers won\'t insure roofs older than 15 years. Here\'s how to find coverage and what it will cost.',
    tag: null,
    tagColor: '',
  },
  {
    href: '/wind-mitigation-inspection-fort-lauderdale',
    title: 'Wind Mitigation Inspection Fort Lauderdale',
    desc: 'A $150 wind mitigation inspection can save you $500–$2,000/year on your Broward County home insurance premium.',
    tag: 'Save Money',
    tagColor: 'bg-green-600',
  },
  {
    href: '/flood-insurance-broward-county',
    title: 'Flood Insurance in Broward County',
    desc: 'NFIP vs. private flood insurance in Broward County — costs, coverage limits, and what your homeowners policy doesn\'t cover.',
    tag: null,
    tagColor: '',
  },
  {
    href: '/cheapest-home-insurance-fort-lauderdale',
    title: 'Cheapest Home Insurance in Fort Lauderdale',
    desc: 'The lowest-cost carriers in Fort Lauderdale right now — and the coverage trade-offs you need to know about.',
    tag: null,
    tagColor: '',
  },
  {
    href: '/home-insurance-for-older-homes-florida',
    title: 'Home Insurance for Older Homes in Florida',
    desc: 'Homes built before 1994 face unique challenges in Florida\'s insurance market. Here\'s how to get covered.',
    tag: null,
    tagColor: '',
  },
  {
    href: '/what-does-windstorm-deductible-mean-florida',
    title: 'What Does Windstorm Deductible Mean in Florida?',
    desc: 'Florida\'s windstorm deductible works differently than your standard deductible — and it can cost you tens of thousands.',
    tag: null,
    tagColor: '',
  },
  {
    href: '/do-i-need-flood-insurance-if-not-in-flood-zone-florida',
    title: 'Do I Need Flood Insurance If Not in a Flood Zone in Florida?',
    desc: '25% of all Florida flood claims come from properties outside designated flood zones. The answer may surprise you.',
    tag: null,
    tagColor: '',
  },
  {
    href: '/home-insurance-after-hurricane-claim-florida',
    title: 'Home Insurance After a Hurricane Claim in Florida',
    desc: 'Filed a hurricane claim? Here\'s how it affects your coverage, your rates, and your options going forward.',
    tag: null,
    tagColor: '',
  },
  {
    href: '/condo-insurance-vs-homeowners-florida',
    title: 'Condo Insurance vs. Homeowners Insurance in Florida',
    desc: 'HO-6 vs. HO-3 — understanding what your condo association\'s master policy covers (and what it doesn\'t).',
    tag: null,
    tagColor: '',
  },
  {
    href: '/how-to-lower-home-insurance-premium-florida',
    title: 'How to Lower Your Home Insurance Premium in Florida',
    desc: '12 proven strategies Florida homeowners use to reduce their premiums — some can save you over $1,000/year.',
    tag: 'Save Money',
    tagColor: 'bg-green-600',
  },
  {
    href: '/best-home-insurance-companies-florida-2026',
    title: 'Best Home Insurance Companies in Florida 2026',
    desc: 'We ranked Florida\'s top carriers by price, claims satisfaction, and financial strength. Updated for 2026.',
    tag: '2026',
    tagColor: 'bg-blue-600',
  },
  {
    href: '/new-homeowner-insurance-florida-first-time-buyer',
    title: 'New Homeowner Insurance in Florida: First-Time Buyer Guide',
    desc: 'Everything first-time Florida homebuyers need to know about home insurance before closing day.',
    tag: 'Guide',
    tagColor: 'bg-purple-600',
  },
]

const stats = [
  { number: '$8,292', label: 'Average Florida home insurance premium in 2025', source: 'Insurify 2026 Report' },
  { number: '580K+', label: 'Florida homeowners dropped by carriers in 2024', source: 'FL Dept. of Insurance' },
  { number: '3x', label: 'More expensive than the national average premium', source: 'NAIC Data' },
  { number: '15+', label: 'Carriers have exited Florida since 2020', source: 'FL Insurance Dept.' },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sunshine State Insured',
  description: 'Florida home insurance guidance and lead referral service serving Broward County and all of Florida',
  url: 'https://www.sunshinestateinsured.com',
  areaServed: [
    { '@type': 'State', name: 'Florida' },
    { '@type': 'County', name: 'Broward County' },
    { '@type': 'City', name: 'Fort Lauderdale' },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />

      <main className="pb-24 md:pb-0">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              {/* Left: copy */}
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-teal-700/60 text-teal-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-teal-600">
                  <span className="w-1.5 h-1.5 bg-coral-400 rounded-full"></span>
                  Florida's Home Insurance Crisis — Real Answers Here
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                  Florida Home Insurance Is a Mess.
                  <span className="text-teal-300 italic"> We Help You Navigate It.</span>
                </h1>
                <p className="mt-5 text-teal-100 text-lg sm:text-xl max-w-xl leading-relaxed">
                  Dropped by your carrier? Premium doubled? Roof too old? We cover every Florida home insurance situation with real, local answers — not generic national advice.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/get-a-quote"
                    className="inline-flex items-center justify-center bg-coral-500 hover:bg-coral-600 text-white font-bold py-3.5 px-7 rounded-xl text-base transition-colors shadow-lg"
                  >
                    Get a Free Quote →
                  </a>
                  <a
                    href="/best-home-insurance-companies-florida-2026"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-3.5 px-7 rounded-xl text-base transition-colors"
                  >
                    Compare Companies
                  </a>
                </div>
                {/* Trust signals */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {['Florida Homeowners Only', 'No Spam. Ever.', 'Free Consultation'].map(t => (
                    <div key={t} className="flex items-center gap-1.5 text-teal-200 text-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div className="lg:col-span-2">
                <QuoteForm variant="hero" title="Get Your Free Florida Quote" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-teal-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.number} className="text-center">
                  <div className="font-serif text-3xl sm:text-4xl text-teal-300">{stat.number}</div>
                  <div className="text-teal-200 text-xs mt-1 leading-snug">{stat.label}</div>
                  <div className="text-teal-500 text-xs mt-0.5 italic">{stat.source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guide grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-1">Florida Insurance Guides</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">
                Find Your Situation
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-teal-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  {guide.tag && (
                    <span className={`${guide.tagColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>
                      {guide.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-base text-gray-900 group-hover:text-teal-800 transition-colors leading-snug mb-2">
                  {guide.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{guide.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-teal-600 text-sm font-medium">
                  Read guide
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA banner */}
        <section className="bg-gradient-to-r from-teal-800 to-teal-700 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-3">
              Ready to Find Better Coverage?
            </h2>
            <p className="text-teal-200 text-lg mb-7">
              Speak with a licensed Florida specialist today. No pressure, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-a-quote"
                className="bg-coral-500 hover:bg-coral-600 text-white font-bold py-3.5 px-8 rounded-xl text-base transition-colors shadow-lg"
              >
                Get a Free Quote →
              </a>
              <a
                href="/best-home-insurance-companies-florida-2026"
                className="border-2 border-white/40 text-white hover:bg-white/10 font-semibold py-3.5 px-8 rounded-xl text-base transition-colors"
              >
                Compare Companies
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
