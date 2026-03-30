export const dynamic = 'force-static'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you'],
      },
    ],
    sitemap: 'https://www.sunshinestateinsured.com/sitemap.xml',
  }
}
