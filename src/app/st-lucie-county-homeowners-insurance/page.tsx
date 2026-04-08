import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'St. Lucie County Home Insurance 2026',
  description: 'Find the best homeowners insurance rates in St. Lucie County, FL. Compare carriers, average costs, and coverage options.',
  alternates: { canonical: 'https://www.floridahomeownersinsurancequotes.com/st-lucie-county-homeowners-insurance' },
  openGraph: {
    url: 'https://www.floridahomeownersinsurancequotes.com/st-lucie-county-homeowners-insurance',
    title: 'St. Lucie County Home Insurance 2026',
    description: 'Find the best homeowners insurance rates in St. Lucie County, FL. Compare carriers, average costs, and coverage options.',
    images: [{ url: 'https://www.floridahomeownersinsurancequotes.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'St. Lucie County Home Insurance 2026',
    description: 'Find the best homeowners insurance rates in St. Lucie County, FL. Compare carriers, average costs, and coverage options.',
  },
}

export default function StLucieCountyPage() {
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
          <p className="text-[#4ADE80] font-semibold text-sm uppercase tracking-wide mb-3">St. Lucie County, Florida</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Homeowners Insurance in St. Lucie County, FL</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">St. Lucie County homeowners face unique insurance challenges — from hurricane exposure to the Treasure Coast's rapid growth. Here's how to find the best coverage at the best price.</p>
          <a href="tel:4356121009" className="inline-block bg-[#16A34A] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#15803d] transition">
            Get a Free Quote — (435) 612-1009
          </a>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-16">

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A3C5E] mb-4">Home Insurance in St. Lucie County: What You Need to Know</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            St. Lucie County — home to Port St. Lucie and Fort Pierce — sits on Florida's Treasure Coast, directly in the path of Atlantic hurricanes. The county has seen significant population growth over the past decade, and with that growth has come increased demand for home insurance in a market that's been tightening statewide.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Average home insurance premiums in St. Lucie County range from $2,800 to $4,500 per year for a typical single-family home, depending on location, construction, roof age, and coverage limits. Homes closer to the coast or in flood zones will pay more; inland homes in Port St. Lucie's western communities tend to have lower rates.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The county is not in Citizens Property Insurance's highest-risk coastal zone, which means more private market options are available here than in Miami-Dade or Broward — but rates have still risen significantly since 2020.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A3C5E] mb-4">Key Factors Affecting Your Rate in St. Lucie County</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Roof Age and Type', desc: 'Roof age is the primary pricing factor for most Florida carriers. Homes with roofs under 10 years old qualify for the best rates. Hip roofs earn wind mitigation discounts; flat or gable roofs pay more.' },
              { title: 'Distance to Coast', desc: 'Homes within 1–5 miles of the Atlantic coast pay higher windstorm premiums. Inland Port St. Lucie communities (Tradition, St. Lucie West) have meaningfully lower rates than beachfront properties.' },
              { title: 'Construction Type', desc: 'CBS (concrete block and stucco) construction is preferred by Florida insurers and earns better rates than wood frame. Most newer homes in Port St. Lucie are CBS construction.' },
              { title: 'Flood Zone', desc: 'Properties in FEMA flood zones require separate flood insurance (NFIP or private). The St. Lucie River and Indian River Lagoon create flood risk in some areas. Check your flood zone at msc.fema.gov.' },
              { title: 'Wind Mitigation Features', desc: 'Hurricane straps, impact windows, and FBC-compliant roofing earn mandatory discounts. A $75–$150 wind mitigation inspection can unlock significant savings.' },
              { title: 'Claims History', desc: 'Prior water damage or hurricane claims can affect your insurability and rates. Some carriers will not write homes with recent claims; others will but at higher premiums.' },
            ].map(item => (
              <div key={item.title} className="p-5 bg-white rounded-xl border border-gray-200">
                <h3 className="font-bold text-[#1A3C5E] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1A3C5E] mb-4">Best Insurance Carriers for St. Lucie County Homeowners</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Florida home insurance market has changed significantly since 2020. Several carriers have exited the state, while others have entered or expanded. Here are carriers that actively write policies in St. Lucie County as of 2026:
          </p>
          <div className="space-y-4">
            {[
              { carrier: 'Citizens Property Insurance', note: 'State-backed insurer of last resort. Available to all St. Lucie County homeowners who cannot find comparable private market coverage. Rates are regulated and often competitive for older homes or homes with prior claims.' },
              { carrier: 'Slide Insurance', note: 'One of the largest private market carriers in Florida. Competitive rates for newer homes and homes with good wind mitigation. Has absorbed many former Citizens policies.' },
              { carrier: 'Heritage Insurance', note: 'Florida-based carrier with strong presence on the Treasure Coast. Known for competitive rates on CBS construction homes.' },
              { carrier: 'Universal Property & Casualty', note: 'One of Florida\'s largest private insurers. Writes a broad range of properties including older homes and those with prior claims.' },
              { carrier: 'Security First Financial', note: 'Florida-based carrier with competitive rates for inland St. Lucie County properties. Strong wind mitigation discount program.' },
            ].map(item => (
              <div key={item.carrier} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200">
                <div className="w-2 h-auto bg-[#16A34A] rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-[#1A3C5E] mb-1">{item.carrier}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1A3C5E] text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your St. Lucie County Quote Today</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">Our specialists compare rates from multiple carriers writing in St. Lucie County to find you the best coverage at the best price. Call now — it takes about 10 minutes.</p>
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
              { href: '/palm-beach-homeowners-insurance', label: 'Palm Beach County Homeowners Insurance' },
              { href: '/florida-homeowners-insurance-rates-2026', label: 'Florida Homeowners Insurance Rates 2026' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 hover:border-[#16A34A] transition text-[#1A3C5E] font-medium">
                <span className="text-[#16A34A]">→</span> {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
