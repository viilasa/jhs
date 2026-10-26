import { useEffect, useState } from 'react'
import Icon from './Icons.jsx'
import { contact, telHref } from '../data.js'

// Absolute so they also work from category and legal pages
const sections = [
  ['/#about', 'About'],
  ['/#products', 'Products'],
  ['/#solutions', 'Solutions'],
  ['/#sourcing', 'Sourcing'],
]

export function Logo() {
  return <img className="brand-logo" src="/logo-mark.png" width="200" height="200" alt="" />
}

export default function Nav({ quoteHref }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 860 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)
  const links = [...sections, [quoteHref, 'Contact']]

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <ul>
            <li><Icon name="pin" /><span>{contact.office}</span></li>
            <li><Icon name="clock" /><span>{contact.hours}</span></li>
          </ul>
          <ul>
            <li><Icon name="mail" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><Icon name="phone" /><a href={telHref(contact.phones[0])}>{contact.phones[0]}</a></li>
          </ul>
        </div>
      </div>

      <nav className={scrolled ? 'nav scrolled' : 'nav'} aria-label="Main">
        <div className="wrap">
          <a className="brand" href="/" aria-label="JHS General Trading home" onClick={close}>
            <Logo />
            <span><b>JHS General Trading</b><small>Nuts · Dry fruits · Spices</small></span>
          </a>
          <ul className="nav-links">
            {links.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}
          </ul>
          <a className="btn btn-primary btn-sm nav-cta" href={quoteHref}>Request a quote</a>
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>

        <div className="sheet" id="mobile-menu" hidden={!open}>
          <ul>
            {links.map(([href, label]) => <li key={href}><a href={href} onClick={close}>{label}</a></li>)}
          </ul>
          <a className="btn btn-primary" href={quoteHref} onClick={close}>Request a quote</a>
        </div>
      </nav>
    </>
  )
}
