'use client'
import { useState } from 'react'

const navLinks = [
  { href: '/why-is-florida-home-insurance-so-expensive', label: 'Why So Expensive?' },
  { href: '/citizens-insurance-vs-private-market-florida', label: 'Citizens vs Private' },
  { href: '/how-to-lower-home-insurance-premium-florida', label: 'Lower Your Premium' },
  { href: '/best-home-insurance-companies-florida-2026', label: 'Best Companies' },
  { href: '/get-a-quote', label: 'Get a Quote', isCta: true },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div>
                <span className="font-serif text-lg text-teal-800 leading-none block">Sunshine State</span>
                <span className="text-xs font-medium text-coral-500 tracking-widest uppercase leading-none">Insured</span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.isCta ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="ml-4 bg-coral-500 hover:bg-coral-600 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-teal-700 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-teal-50"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* Mobile: quote link + hamburger */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="/get-a-quote"
                className="flex items-center gap-1.5 text-coral-500 font-semibold text-sm"
              >
                Get a Quote
              </a>
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-gray-600" aria-label="Toggle menu">
                {menuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2.5 text-sm font-medium border-b border-gray-50 last:border-0 ${link.isCta ? 'text-coral-500 font-semibold' : 'text-gray-700'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Sticky mobile bottom CTA bar — both buttons go to quote form */}
      <div className="mobile-cta-bar">
        <a
          href="/get-a-quote"
          className="flex-1 flex items-center justify-center gap-2 bg-white text-teal-800 font-bold py-2.5 rounded-lg text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
            <rect x="9" y="3" width="6" height="4" rx="1"/>
            <line x1="9" y1="12" x2="15" y2="12"/>
            <line x1="9" y1="16" x2="13" y2="16"/>
          </svg>
          Free Quote
        </a>
        <a
          href="/get-a-quote"
          className="flex-1 flex items-center justify-center gap-2 bg-coral-500 text-white font-bold py-2.5 rounded-lg text-sm"
        >
          Get Help Now
        </a>
      </div>
    </>
  )
}
