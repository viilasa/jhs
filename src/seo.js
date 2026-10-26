// Pages, URLs and search metadata. Used by the app (to pick the page) and by
// scripts/prerender.mjs (to write each page's <head>, the sitemap and llms.txt).
import { groups, contact, faqs, categoryHref } from './data.js'

const SITE = contact.site
const OG_IMAGE = `${SITE}/og-image.jpg`
const BUSINESS_ID = `${SITE}/#business`
const LAST_UPDATED = '2026-10-26'

// '/products/nuts' → { page: 'category', group }; unknown paths → 'notfound'
export function resolve(path) {
  const p = path.replace(/index\.html$/, '').replace(/\/+$/, '') || '/'
  if (p === '/') return { page: 'home', path: '/' }
  const m = p.match(/^\/products\/([\w-]+)$/)
  const group = m && groups.find((g) => g.id === m[1])
  if (group) return { page: 'category', group, path: categoryHref(group.id) }
  if (p === '/privacy') return { page: 'privacy', path: '/privacy/' }
  if (p === '/terms') return { page: 'terms', path: '/terms/' }
  return { page: 'notfound', path: '/404' }
}

// Every page that gets its own HTML file, in sitemap order
export const pages = ['/', ...groups.map((g) => categoryHref(g.id)), '/privacy/', '/terms/']

const crumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + path })),
})

const business = {
  '@type': 'WholesaleStore',
  '@id': BUSINESS_ID,
  name: contact.name,
  legalName: contact.legalName,
  url: `${SITE}/`,
  logo: `${SITE}/logo.png`,
  image: OG_IMAGE,
  description: 'Wholesale distributor of nuts, dried fruits, dates, spices, seeds and pulses, based in Ras Al Khaimah, United Arab Emirates.',
  email: contact.email,
  telephone: contact.phones[0],
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'sales', telephone: contact.phones[0], email: contact.email, areaServed: 'AE' },
    { '@type': 'ContactPoint', contactType: 'sales', telephone: contact.whatsapp, contactOption: 'WhatsApp', areaServed: 'AE' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Hamra Industrial Zone',
    addressLocality: 'Ras Al Khaimah',
    addressRegion: 'Ras Al Khaimah',
    addressCountry: 'AE',
  },
  areaServed: [{ '@type': 'Country', name: 'United Arab Emirates' }, { '@type': 'Place', name: 'GCC' }],
  identifier: { '@type': 'PropertyValue', name: 'Trade licence', value: contact.licence },
  knowsAbout: ['Nuts', 'Dried fruits', 'Dates', 'Spices', 'Herbs', 'Seeds', 'Pulses', 'Grains', 'Wholesale food distribution'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Product categories',
    itemListElement: groups.map((g) => ({ '@type': 'OfferCatalog', name: g.title, url: SITE + categoryHref(g.id) })),
  },
}

// Title, description and structured data for one page
export function meta(route) {
  const brand = contact.name
  if (route.page === 'home') {
    return {
      title: `Nuts & Spices Wholesale Distributor in UAE | ${brand}`,
      description: 'Wholesale nuts, dried fruits, dates, spices and pulses distributor in the UAE, based in Ras Al Khaimah. Bulk and retail packs. Get a quote on WhatsApp.',
      jsonld: [
        business,
        { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: brand, publisher: { '@id': BUSINESS_ID }, inLanguage: 'en-AE' },
        { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ],
    }
  }
  if (route.page === 'category') {
    const g = route.group
    return {
      title: `${g.seoTitle} | ${brand}`,
      description: g.seoDescription,
      jsonld: [
        crumbs([['Home', '/'], [g.title, categoryHref(g.id)]]),
        {
          '@type': 'CollectionPage',
          name: g.h1,
          url: SITE + categoryHref(g.id),
          description: g.seoDescription,
          provider: { '@id': BUSINESS_ID },
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: g.items.length,
            itemListElement: g.items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name })),
          },
        },
      ],
    }
  }
  if (route.page === 'privacy' || route.page === 'terms') {
    const name = route.page === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'
    return {
      title: `${name} | ${brand}`,
      description: `${name} for the ${contact.legalName} website, jhstrade.net.`,
      jsonld: [crumbs([['Home', '/'], [name, route.path]])],
    }
  }
  return { title: `Page not found | ${brand}`, description: 'This page does not exist.', jsonld: [], noindex: true }
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// The <head> tags for one page, as an HTML string
export function headHtml(route) {
  const m = meta(route)
  const url = SITE + route.path
  const tags = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    m.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    !m.noindex && '<meta name="robots" content="index, follow, max-image-preview:large" />',
    '<meta name="geo.region" content="AE-RK" />',
    '<meta name="geo.placename" content="Ras Al Khaimah, United Arab Emirates" />',
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${esc(contact.name)}" />`,
    '<meta property="og:locale" content="en_AE" />',
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    '<meta property="og:image:type" content="image/jpeg" />',
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${esc(contact.legalName)} — nuts, dried fruits, dates and spices distributor in the UAE" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    m.jsonld.length &&
      `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': m.jsonld }).replace(/</g, '\\u003c')}</script>`,
  ]
  return tags.filter(Boolean).join('\n    ')
}

export function sitemapXml() {
  const urls = pages.map((p) => `  <url><loc>${SITE}${p}</loc><lastmod>${LAST_UPDATED}</lastmod></url>`)
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

// Plain-text summary for AI assistants and answer engines (https://llmstxt.org)
export function llmsTxt() {
  return [
    `# ${contact.legalName}`,
    '',
    '> Wholesale distributor of nuts, dried fruits, dates, spices, seeds and pulses, based in Al Hamra Industrial Zone, Ras Al Khaimah, United Arab Emirates. Supplies traders, wholesalers, retailers and food businesses in the UAE and the GCC.',
    '',
    `- Phone: ${contact.phones.join(', ')}`,
    `- WhatsApp: ${contact.whatsapp}`,
    `- Email: ${contact.email}`,
    `- Address: ${contact.office}`,
    `- Hours: ${contact.hours}`,
    `- Trade licence: ${contact.licence}`,
    '',
    '## Product categories',
    '',
    ...groups.map((g) => `- [${g.title}](${SITE}${categoryHref(g.id)}): ${g.items.map((i) => i.name).join(', ')}`),
    '',
    '## Frequently asked questions',
    '',
    ...faqs.flatMap(([q, a]) => [`### ${q}`, '', a, '']),
    '## Pages',
    '',
    `- [Home](${SITE}/)`,
    `- [Privacy Policy](${SITE}/privacy/)`,
    `- [Terms & Conditions](${SITE}/terms/)`,
    '',
  ].join('\n')
}
