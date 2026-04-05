import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.floridahomeownersinsurancequotes.com'
  const pages = [
    '',
    'broward-county-homeowners-insurance',
    'miami-dade-homeowners-insurance',
    'palm-beach-homeowners-insurance',
    'st-lucie-county-homeowners-insurance',
    'orlando-homeowners-insurance',
    'contractor-general-liability-florida',
    'fr-44-insurance-florida',
    'medicare-advantage-florida-2026',
    'florida-homeowners-insurance-rates-2026',
    'seguro-de-casa-florida',
  ]
  return pages.map(p => ({
    url: `${base}/${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.8,
  }))
}
