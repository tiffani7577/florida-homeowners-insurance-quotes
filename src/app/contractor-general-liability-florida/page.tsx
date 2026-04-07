import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import ExitIntent from '@/components/ExitIntent'

const faq = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How fast can I get a Certificate of Insurance (COI) for a Florida contractor?","acceptedAnswer":{"@type":"Answer","text":"Our licensed agents can issue same-day General Liability certificates for most Florida contractors. Call (435) 612-1009 now — most COIs are ready within 1–2 hours."}},{"@type":"Question","name":"How much does contractor general liability insurance cost in Florida?","acceptedAnswer":{"@type":"Answer","text":"Florida contractor GL typically runs $400–$1,200/year for handymen and landscapers, $800–$2,500 for HVAC and electricians, and $1,500–$4,000+ for roofers."}},{"@type":"Question","name":"Do I need workers comp if I'm a solo contractor in Florida?","acceptedAnswer":{"@type":"Answer","text":"Florida has specific exemptions for sole proprietors and certain LLC members in construction. However, if you hire even one subcontractor, workers comp may be required."}}]}

export const metadata: Metadata = {
  title: 'Contractor General Liability Florida | Same-Day COI',
  description: 'Florida contractors: get same-day General Liability insurance and Certificate of Insurance (COI). Roofers, HVAC, electricians, handymen. Call for instan...',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/contractor-general-liability-florida' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/contractor-general-liability-florida',
    title: 'Contractor General Liability Florida | Same-Day COI',
    description: 'Florida contractors: get same-day General Liability insurance and Certificate of Insurance (COI). Roofers, HVAC, electricians, handymen. Call for instant c',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contractor General Liability Florida | Same-Day COI',
    description: 'Florida contractors: get same-day General Liability insurance and Certificate of Insurance (COI). Roofers, HVAC, electricians, handymen. Call for instant c',
  },
}

const trades = [
  ['Roofers', '$1,500–$4,000/yr', 'High-risk trade; impact-resistant roofing discounts available'],
  ['HVAC Technicians', '$800–$2,000/yr', 'Refrigerant handling adds risk; proper classification matters'],
  ['Electricians', '$900–$2,200/yr', 'Residential vs. commercial rates differ significantly'],
  ['Landscapers', '$400–$900/yr', 'One of the most affordable trades to insure in Florida'],
  ['Handymen', '$500–$1,200/yr', 'Scope of work matters — some tasks require a contractor license'],
  ['Plumbers', '$1,000–$2,500/yr', 'Water damage liability is the key risk factor'],
]

const faqs = [
  { q: 'What does General Liability cover?', a: 'GL protects you if a third party (homeowner, property owner, bystander) is injured or their property is damaged because of your work. It covers legal defense costs and settlements. Without it, one lawsuit can wipe out your business.' },
  { q: 'Why do I need a COI specifically?', a: 'A Certificate of Insurance is a document that proves you have coverage. General contractors, property managers, and homeowners require it before you step on site. It lists your carrier, policy limits, and effective dates.' },
  { q: 'What limits do I need in Florida?', a: 'Most Florida general contractors require $1M per occurrence / $2M aggregate. Some commercial jobs require higher limits. Our agents can match your coverage to the specific requirements of your job.' },
  { q: "What about Workers' Comp?", a: "Florida has specific exemptions for sole proprietors and LLC members in construction trades. However, if you hire subcontractors, you may be required to carry workers' comp or verify theirs. This is a common audit trap — call us to clarify." },
]

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faq)}} />
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              Same-Day COI Available
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Florida Contractor General Liability —<br />
              <span className="text-orange-400">Get Your COI Before the Job Starts</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Don&apos;t lose the job because you don&apos;t have a Certificate of Insurance. Our agents issue same-day GL coverage for Florida roofers, HVAC techs, electricians, landscapers, and handymen.
            </p>
            <CallButton variant="hero" label="Call Now — Get Your COI Today" />
            <p className="text-blue-300 text-xs mt-3">Mon–Fri 9am–9pm · Sat 12pm–5pm EST</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-blue-900 mb-6">What Florida Contractors Need to Know</h2>
            <div className="space-y-4 mb-10">
              {faqs.map(item => (
                <div key={item.q} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-blue-900 mb-2 text-sm">{item.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl text-blue-900 mb-4">Typical Costs by Trade</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {trades.map(([trade, cost, note]) => (
                <div key={trade} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="font-semibold text-blue-900 text-sm">{trade}</div>
                  <div className="text-orange-500 font-bold text-sm mt-0.5">{cost}</div>
                  <div className="text-gray-500 text-xs mt-1">{note}</div>
                </div>
              ))}
            </div>

            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white">
              <h3 className="font-serif text-2xl mb-3">Need a COI Today?</h3>
              <p className="text-blue-200 mb-6">Don&apos;t lose the job. Call now and our agents will get your certificate issued same-day.</p>
              <CallButton variant="hero" label="Call Now — Same-Day COI" />
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
