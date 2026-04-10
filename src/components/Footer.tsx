import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-serif text-white font-bold text-lg mb-3">FL Home Insurance Quotes</div>
            <p className="text-blue-300 text-xs leading-relaxed">Helping Florida homeowners find information on rates and coverage. Free information available Mon–Fri 9am–9pm, Sat 12pm–5pm EST.</p>
          </div>
          <div>
            <div className="font-semibold text-white text-sm mb-3">Coverage Types</div>
            <ul className="space-y-1.5 text-xs">
              <li><Link href="/broward-county-homeowners-insurance" className="hover:text-white">Broward County</Link></li>
              <li><Link href="/miami-dade-homeowners-insurance" className="hover:text-white">Miami-Dade County</Link></li>
              <li><Link href="/palm-beach-homeowners-insurance" className="hover:text-white">Palm Beach County</Link></li>
              <li><Link href="/contractor-general-liability-florida" className="hover:text-white">Contractor Liability</Link></li>
              <li><Link href="/fr-44-insurance-florida" className="hover:text-white">FR-44 Insurance</Link></li>
              <li><Link href="/medicare-advantage-florida-2026" className="hover:text-white">Medicare 2026</Link></li>
              <li><Link href="/seguro-de-casa-florida" className="hover:text-white">En Español</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white text-sm mb-3">Contact</div>
            <a href="tel:+14356121009" className="text-orange-400 font-bold text-lg block mb-1">(435) 612-1009</a>
            <p className="text-xs text-blue-300">Mon–Fri 9am–9pm EST<br />Sat 12pm–5pm EST</p>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-6">
          <p className="text-blue-400 text-xs leading-relaxed">
            <strong className="text-blue-300">Disclaimer:</strong> Florida Homeowners Insurance Quotes is a lead generation search engine and marketing provider. We are not a licensed insurance agency, broker, or carrier. We do not sell, solicit, or negotiate insurance, nor do we provide specific insurance or legal advice. All calls and inquiries are routed to third-party licensed insurance professionals or agencies. Payouts and quotes are subject to eligibility and carrier guidelines in the State of Florida. By using this site or calling the numbers provided, you agree to our Terms of Service and Privacy Policy.
          </p>
          <p className="text-blue-500 text-xs mt-3">© {new Date().getFullYear()} Florida Homeowners Insurance Quotes. All rights reserved. &nbsp;|&nbsp; <a href="mailto:info@floridahomeownersinsurancequotes.com" className="hover:text-blue-300 transition-colors">info@floridahomeownersinsurancequotes.com</a></p>
        </div>
      </div>
    </footer>
  )
}
