
const guides = [
  { href: '/why-is-florida-home-insurance-so-expensive', label: 'Why Is Insurance So Expensive?' },
  { href: '/citizens-insurance-vs-private-market-florida', label: 'Citizens vs Private Market' },
  { href: '/home-insurance-dropped-by-carrier-florida', label: 'Dropped by Your Carrier?' },
  { href: '/home-insurance-with-roof-over-15-years-florida', label: 'Roof Over 15 Years Old' },
  { href: '/home-insurance-after-hurricane-claim-florida', label: 'After a Hurricane Claim' },
  { href: '/how-to-lower-home-insurance-premium-florida', label: 'Lower Your Premium' },
]

const coverage = [
  { href: '/flood-insurance-broward-county', label: 'Flood Insurance Broward County' },
  { href: '/wind-mitigation-inspection-fort-lauderdale', label: 'Wind Mitigation Inspections' },
  { href: '/what-does-windstorm-deductible-mean-florida', label: 'Windstorm Deductibles Explained' },
  { href: '/do-i-need-flood-insurance-if-not-in-flood-zone-florida', label: 'Flood Insurance Outside Flood Zones' },
  { href: '/condo-insurance-vs-homeowners-florida', label: 'Condo vs Homeowners Insurance' },
  { href: '/cheapest-home-insurance-fort-lauderdale', label: 'Cheapest Home Insurance Fort Lauderdale' },
]

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div>
                <span className="font-serif text-base text-white leading-none block">Sunshine State</span>
                <span className="text-xs font-medium text-teal-300 tracking-widest uppercase leading-none">Insured</span>
              </div>
            </div>
            <p className="text-teal-200 text-sm leading-relaxed">
              Real answers for Florida homeowners navigating the state's home insurance crisis.
            </p>

          </div>

          {/* Guides */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Florida Insurance Guides</h4>
            <ul className="space-y-2">
              {guides.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-teal-200 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Coverage Topics</h4>
            <ul className="space-y-2">
              {coverage.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-teal-200 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Get Help Now</h4>
            <p className="text-teal-200 text-sm mb-4">Connect with a licensed Florida insurance specialist today.</p>
            <a
              href="/get-a-quote"
              className="block text-center bg-coral-500 hover:bg-coral-600 text-white font-bold py-3 px-6 rounded-lg text-sm transition-colors mb-3"
            >
              Get a Free Quote
            </a>
            <a
              href="/best-home-insurance-companies-florida-2026"
              className="block text-center border border-teal-500 text-teal-200 hover:text-white hover:border-white py-2.5 px-6 rounded-lg text-sm transition-colors"
            >
              Compare Companies
            </a>
          </div>
        </div>

        <div className="border-t border-teal-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-teal-400 text-xs">
            © {new Date().getFullYear()} Sunshine State Insured. All rights reserved.
          </p>
          <p className="text-teal-500 text-xs max-w-xl">
            <strong className="text-teal-400">Disclaimer:</strong> This site is for informational purposes only. We are not licensed insurance agents and do not sell insurance. We connect consumers with licensed insurance professionals. Always consult a licensed Florida insurance agent before making coverage decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
