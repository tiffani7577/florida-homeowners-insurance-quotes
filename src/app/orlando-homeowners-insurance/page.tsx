import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Orlando Homeowners Insurance | 2026 Rates',
  description: 'Find the best homeowners insurance rates in Orlando and Orange County, FL. Compare carriers, understand your coverage, and save on your home insurance p...',
  keywords: ['Orlando homeowners insurance', 'home insurance Orlando Florida', 'Orange County homeowners insurance', 'cheap home insurance Orlando', 'Orlando home insurance rates 2026'],
  openGraph: {
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  twitter: {
    card: 'summary_large_image',
    title: 'Orlando Homeowners Insurance | 2026 Rates',
    description: 'Find the best homeowners insurance rates in Orlando and Orange County, FL.',
  },],
    title: 'Orlando Homeowners Insurance | 2026 Rates',
    description: 'Find the best homeowners insurance rates in Orlando and Orange County, FL.',
    url: 'https://www.floridahomeownersinsurancequotes.com/orlando-homeowners-insurance',
  },
}

export default function OrlandoHomeownersInsurancePage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#1A3C5E]">Florida Homeowners Insurance Quotes</Link>
          <a href="tel:4356121009" className="bg-[#16A34A] text-white px-5 py-2 rounded font-semibold text-sm hover:bg-[#15803d] transition">
            Call (435) 612-1009
          </a>
        </div>
      </nav>

      <section className="bg-[#1A3C5E] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#4ADE80] font-semibold text-sm uppercase tracking-wide mb-3">Orlando, Florida</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Homeowners Insurance in Orlando, FL: 2026 Guide</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">Orlando homeowners enjoy some of the most competitive insurance rates in Florida — but rates are rising. Here's how to find the best coverage for your Central Florida home.</p>
          <a href="tel:4356121009" className="inline-block bg-[#16A34A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#15803d] transition">
            Get a Free Quote — (435) 612-1009
          </a>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-16">

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A3C5E] mb-4">Home Insurance in Orlando: The Basics</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Orlando and Orange County sit in Central Florida, roughly 60 miles from both coasts. This inland location means Orlando homeowners face lower windstorm risk than coastal counties — and significantly lower insurance premiums. Average home insurance rates in Orlando range from $2,200 to $3,800 per year, compared to $4,000–$8,000+ in Miami-Dade and Broward.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            That said, Orlando is not without risk. The area sees frequent severe thunderstorms, occasional tornado activity, and is still within reach of major hurricanes (Charley in 2004 and Ian in 2022 both caused significant damage in Central Florida). Sinkholes are also a concern in parts of Orange County, though less so than in Hillsborough or Hernando counties.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The good news: Orlando's inland location means more carriers are willing to write policies here, giving homeowners more options and more competitive pricing than their coastal counterparts.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A3C5E] mb-4">Average Home Insurance Rates in Orlando (2026)</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 text-sm">
              <thead>
                <tr className="bg-[#1A3C5E] text-white">
                  <th className="text-left p-4 rounded-tl-xl">Home Value</th>
                  <th className="text-left p-4">Low Estimate</th>
                  <th className="text-left p-4">Average</th>
                  <th className="text-left p-4 rounded-tr-xl">High Estimate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$200,000', '$1,400/yr', '$2,100/yr', '$3,000/yr'],
                  ['$300,000', '$1,900/yr', '$2,800/yr', '$4,000/yr'],
                  ['$400,000', '$2,400/yr', '$3,500/yr', '$5,000/yr'],
                  ['$500,000', '$2,900/yr', '$4,200/yr', '$6,000/yr'],
                ].map(([value, low, avg, high], i) => (
                  <tr key={value} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium text-[#1A3C5E]">{value}</td>
                    <td className="p-4 text-green-700">{low}</td>
                    <td className="p-4 text-gray-700 font-medium">{avg}</td>
                    <td className="p-4 text-red-700">{high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-3">*Estimates for a CBS construction home with a roof under 10 years old. Actual rates vary by carrier, coverage limits, and individual risk factors.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A3C5E] mb-6">What Affects Your Orlando Home Insurance Rate</h2>
          <div className="space-y-4">
            {[
              { title: 'Roof Age', desc: 'The single biggest pricing factor in Florida. Roofs under 10 years old get the best rates. Roofs over 20 years old may be uninsurable with some carriers or result in actual cash value (ACV) coverage rather than replacement cost.' },
              { title: 'Construction Type', desc: 'CBS (concrete block) construction is preferred over wood frame. Most Orlando-area homes built after 1990 are CBS construction, which earns better rates.' },
              { title: 'Sinkhole Coverage', desc: 'Florida requires insurers to offer sinkhole coverage, but it\'s optional and adds to your premium. Parts of Orange County have moderate sinkhole risk. Check your area before deciding whether to add this coverage.' },
              { title: 'Home Security', desc: 'Central station monitored alarm systems earn 2–5% discounts with most carriers. Deadbolts, smoke detectors, and fire extinguishers also contribute to credits.' },
              { title: 'Claims History', desc: 'Prior water damage claims are the most common reason for non-renewal in Central Florida. Carriers view multiple claims within 3–5 years as a red flag.' },
              { title: 'Credit Score', desc: 'Florida allows insurers to use credit-based insurance scores as a rating factor. Improving your credit score can meaningfully reduce your premium over time.' },
            ].map(item => (
              <div key={item.title} className="p-5 bg-white rounded-xl border border-gray-200">
                <h3 className="font-bold text-[#1A3C5E] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A3C5E] mb-4">Orlando Neighborhoods and Insurance Considerations</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Orlando is a large, diverse metro area with significant variation in insurance rates by neighborhood. Here's a quick overview:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { area: 'Dr. Phillips / Windermere', note: 'Upscale areas with newer construction. Generally favorable rates but high home values mean higher absolute premiums.' },
              { area: 'Lake Nona', note: 'Newer development with modern construction. Good wind mitigation features in most homes. Competitive rates.' },
              { area: 'Winter Park', note: 'Mix of older and newer homes. Older homes may have roof age issues. Some flood risk near lakes.' },
              { area: 'East Orlando / UCF area', note: 'Mix of ages and construction types. Generally moderate rates. Some areas have sinkhole exposure.' },
              { area: 'Kissimmee / Osceola County', note: 'Adjacent to Orlando with similar risk profile. Slightly lower rates in some areas due to less urban density.' },
              { area: 'Apopka / Ocoee', note: 'Northwest suburbs with generally favorable rates. Less flood risk than lakefront areas.' },
            ].map(item => (
              <div key={item.area} className="p-4 bg-white rounded-xl border border-gray-200">
                <h3 className="font-bold text-[#1A3C5E] text-sm mb-1">{item.area}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1A3C5E] text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Orlando Home Insurance Quote</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">Our specialists compare rates from multiple carriers writing in the Orlando area. Get a free, no-obligation quote in about 10 minutes.</p>
          <a href="tel:4356121009" className="inline-block bg-[#16A34A] text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-[#15803d] transition">
            Call (435) 612-1009 — Free Quote
          </a>
          <p className="text-gray-400 text-sm mt-4">Mon–Fri 9am–9pm EST · Sat 12pm–5pm</p>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-[#1A3C5E] mb-4">Other Florida County Guides</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { href: '/broward-county-homeowners-insurance', label: 'Broward County Homeowners Insurance' },
              { href: '/miami-dade-homeowners-insurance', label: 'Miami-Dade Homeowners Insurance' },
              { href: '/st-lucie-county-homeowners-insurance', label: 'St. Lucie County Homeowners Insurance' },
              { href: '/florida-homeowners-insurance-rates-2026', label: 'Florida Homeowners Insurance Rates 2026' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#16A34A] transition text-[#1A3C5E] font-medium">
                <span className="text-[#16A34A]">→</span> {link.href.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
