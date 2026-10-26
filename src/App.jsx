import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About, { OriginStrip } from './components/About.jsx'
import Catalogue from './components/Catalogue.jsx'
import CategoryPage from './components/CategoryPage.jsx'
import LegalPage, { NotFound } from './components/LegalPage.jsx'
import Ways from './components/Ways.jsx'
import Sourcing from './components/Sourcing.jsx'
import Steps from './components/Steps.jsx'
import Faq from './components/Faq.jsx'
import Quote from './components/Quote.jsx'
import Footer from './components/Footer.jsx'
import MobileBar from './components/MobileBar.jsx'
import { resolve } from './seo.js'

// Each URL is its own pre-rendered page (see scripts/prerender.mjs); `path` picks which one.
export default function App({ path }) {
  const route = resolve(path)
  // "Request price" on a product card preselects it in the quote form
  const [product, setProduct] = useState('Cashews')

  const quote = <Quote product={product} setProduct={setProduct} />
  // Pages without their own quote form send "Get a quote" to the home page's
  const quoteHref = route.page === 'home' || route.page === 'category' ? '#quote' : '/#quote'

  let body
  if (route.page === 'home') {
    body = (
      <>
        <Hero />
        <OriginStrip />
        <main>
          <About />
          <Catalogue />
          <Ways />
          <Sourcing />
          <Steps />
          <Faq />
          {quote}
        </main>
      </>
    )
  } else if (route.page === 'category') {
    body = <CategoryPage group={route.group} onAsk={setProduct}>{quote}</CategoryPage>
  } else if (route.page === 'privacy' || route.page === 'terms') {
    body = <LegalPage doc={route.page} />
  } else {
    body = <NotFound />
  }

  return (
    <>
      <Nav quoteHref={quoteHref} />
      {body}
      <Footer quoteHref={quoteHref} />
      <MobileBar quoteHref={quoteHref} />
    </>
  )
}
