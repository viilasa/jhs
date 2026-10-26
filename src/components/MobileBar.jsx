import { useEffect, useState } from 'react'
import { waHref } from '../data.js'

// Sticky bottom bar on phones. Hidden while the hero (which has its own buttons)
// or the quote form is on screen, so it never covers the thing it points to.
export default function MobileBar({ quoteHref }) {
  const [off, setOff] = useState(true)

  useEffect(() => {
    const watched = ['top', 'quote'].map((id) => document.getElementById(id)).filter(Boolean)
    const visible = new Set()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)))
      setOff(visible.size > 0)
    }, { threshold: 0.15 })
    watched.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className={off ? 'mbar off' : 'mbar'} aria-hidden={off}>
      <a className="btn btn-wa" href={waHref()} tabIndex={off ? -1 : 0} target="_blank" rel="noopener">
        WhatsApp us
      </a>
      <a className="btn btn-primary" href={quoteHref} tabIndex={off ? -1 : 0}>Get a quote</a>
    </div>
  )
}
