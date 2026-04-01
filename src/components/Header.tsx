'use client'
import Link from 'next/link'
import { useState } from 'react'
import CallButton from './CallButton'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-serif text-blue-900 font-bold text-lg leading-tight">
          Florida Homeowners<br className="hidden sm:block" /><span className="text-orange-500"> Insurance Quotes</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/broward-county-homeowners-insurance" className="hover:text-blue-800">Broward County</Link>
          <Link href="/miami-dade-homeowners-insurance" className="hover:text-blue-800">Miami-Dade</Link>
          <Link href="/contractor-general-liability-florida" className="hover:text-blue-800">Contractors</Link>
          <Link href="/fr-44-insurance-florida" className="hover:text-blue-800">FR-44</Link>
        </nav>
        <div className="flex items-center gap-3">
          <CallButton variant="header" label="(435) 612-1009" />
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-500">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-3 text-sm font-medium text-gray-700">
          <Link href="/broward-county-homeowners-insurance" className="block py-1" onClick={() => setOpen(false)}>Broward County</Link>
          <Link href="/miami-dade-homeowners-insurance" className="block py-1" onClick={() => setOpen(false)}>Miami-Dade</Link>
          <Link href="/contractor-general-liability-florida" className="block py-1" onClick={() => setOpen(false)}>Contractors</Link>
          <Link href="/fr-44-insurance-florida" className="block py-1" onClick={() => setOpen(false)}>FR-44</Link>
          <Link href="/medicare-advantage-florida-2026" className="block py-1" onClick={() => setOpen(false)}>Medicare 2026</Link>
          <Link href="/seguro-de-casa-florida" className="block py-1" onClick={() => setOpen(false)}>En Español</Link>
        </div>
      )}
    </header>
  )
}
