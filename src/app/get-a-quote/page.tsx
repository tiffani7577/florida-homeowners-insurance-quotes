import type { Metadata } from 'next'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Get a Free Florida Home Insurance Quote — Sunshine State Insured',
  description: 'Get a free, no-obligation Florida home insurance quote. We compare rates from top Florida carriers and find the best coverage for your home.',
  alternates: { canonical: 'https://www.sunshinestateinsured.com/get-a-quote' },
}

export default function GetAQuotePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <a href="/" className="text-teal-700 font-bold text-xl tracking-tight">
          Sunshine State Insured
        </a>
      </header>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Free, No-Obligation Quote
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Get Your Florida Home Insurance Quote
            </h1>
            <p className="text-lg text-slate-600">
              We compare rates from Florida's top carriers and connect you with a licensed specialist who knows the local market.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <QuoteForm />
          </div>

          {/* Trust signals */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: '🔒', label: 'Your info is secure' },
              { icon: '⚡', label: 'Response within 24 hours' },
              { icon: '🏠', label: 'Florida specialists only' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xs font-medium text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
