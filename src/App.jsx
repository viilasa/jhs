import { Fragment, useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About, { OriginStrip } from './components/About.jsx'
import Catalogue from './components/Catalogue.jsx'
import CategoryPage from './components/CategoryPage.jsx'
import Ways from './components/Ways.jsx'
import Sourcing from './components/Sourcing.jsx'
import Steps from './components/Steps.jsx'
import Quote from './components/Quote.jsx'
import Footer from './components/Footer.jsx'
import MobileBar from './components/MobileBar.jsx'
import { groups } from './data.js'

// Hash routing, so every page works on any static host:
//   #/products/<id>  → that category's page
//   #/ or empty      → home page
//   #<section-id>    → scroll to that section, staying on the current page if it has one,
//                      otherwise opening the home page at it (e.g. "About" from a category page)
function parse(hash) {
  const m = hash.match(/^#\/products\/([\w-]+)/)
  if (m && groups.some((g) => g.id === m[1])) return { page: m[1], anchor: '' }
  return { page: 'home', anchor: hash.startsWith('#/') ? '' : hash.slice(1) }
}

export default function App() {
  const [route, setRoute] = useState(() => parse(window.location.hash))
  // "Request price" on a product card preselects it in the quote form
  const [product, setProduct] = useState('Cashews')

  useEffect(() => {
    const onHash = () => {
      const next = parse(window.location.hash)
      if (next.page === 'home' && next.anchor && document.getElementById(next.anchor)) return
      setRoute(next)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // After switching page: land at the requested section, or at the top
  useEffect(() => {
    const el = route.anchor && document.getElementById(route.anchor)
    if (el) el.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [route])

  const group = groups.find((g) => g.id === route.page)

  useEffect(() => {
    document.title = group ? `${group.title} — JHS General Trading` : 'JHS General Trading — Nuts, Dry Fruits & Whole Spices, UAE'
  }, [group])

  const quote = <Quote product={product} setProduct={setProduct} />

  return (
    <>
      <Nav />
      {/* keyed by page so per-page observers (e.g. the mobile bar) reattach to the new sections */}
      <Fragment key={route.page}>
        {group ? (
          <CategoryPage group={group} onAsk={setProduct}>{quote}</CategoryPage>
        ) : (
          <>
            <Hero />
            <OriginStrip />
            <main>
              <About />
              <Catalogue />
              <Ways />
              <Sourcing />
              <Steps />
              {quote}
            </main>
          </>
        )}
        <Footer />
        <MobileBar />
      </Fragment>
    </>
  )
}
