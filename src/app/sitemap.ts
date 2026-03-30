export const dynamic = 'force-static'
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.sunshinestateinsured.com'

const pages = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { url: '/why-is-florida-home-insurance-so-expensive', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/citizens-insurance-vs-private-market-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/home-insurance-with-roof-over-15-years-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/wind-mitigation-inspection-fort-lauderdale', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/flood-insurance-broward-county', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/home-insurance-dropped-by-carrier-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/cheapest-home-insurance-fort-lauderdale', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/home-insurance-for-older-homes-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/what-does-windstorm-deductible-mean-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/do-i-need-flood-insurance-if-not-in-flood-zone-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/home-insurance-after-hurricane-claim-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/condo-insurance-vs-homeowners-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/how-to-lower-home-insurance-premium-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/best-home-insurance-companies-florida-2026', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/new-homeowner-insurance-florida-first-time-buyer', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/get-a-quote', priority: 0.8, changeFrequency: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }))
}
