// Runs after `vite build`: writes a fully rendered HTML file for every page
// (so search engines and link previews see real content and per-page <head> tags),
// plus 404.html, sitemap.xml and llms.txt.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const ssrDir = path.resolve('dist-ssr')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, pages, resolve, headHtml, sitemapXml, llmsTxt } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const page = (url) =>
  template
    .replace('<!--app-head-->', headHtml(resolve(url)))
    .replace('<div id="root"></div>', `<div id="root" data-path="${url}">${render(url)}</div>`)

for (const url of pages) {
  const file = path.join(dist, url, 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, page(url))
  console.log('prerendered', url)
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404'))
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemapXml())
fs.writeFileSync(path.join(dist, 'llms.txt'), llmsTxt())
fs.rmSync(ssrDir, { recursive: true, force: true })
console.log('wrote 404.html, sitemap.xml, llms.txt')
