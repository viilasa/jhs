import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Catalogue from './components/Catalogue.jsx'
import Ways from './components/Ways.jsx'
import Sourcing from './components/Sourcing.jsx'
import Steps from './components/Steps.jsx'
import Quote from './components/Quote.jsx'
import Footer from './components/Footer.jsx'
import MobileBar from './components/MobileBar.jsx'

export default function App() {
  // "Ask for price" on a product card preselects it in the quote form
  const [product, setProduct] = useState('Cashew nuts')

  return (
    <>
      <div className="awning" aria-hidden="true" />
      <Nav />
      <Hero />
      <Ticker />
      <main>
        <Catalogue onAsk={setProduct} />
        <Ways />
        <Sourcing />
        <Steps />
        <Quote product={product} setProduct={setProduct} />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
