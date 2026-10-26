// Build-time entry: renders a page to HTML for scripts/prerender.mjs
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export { pages, resolve, headHtml, sitemapXml, llmsTxt } from './seo.js'

export const render = (path) => renderToString(<App path={path} />)
