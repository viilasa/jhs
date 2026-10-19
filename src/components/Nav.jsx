import { useEffect, useState } from 'react'

const links = [
  ['#stall', 'Products'],
  ['#buy', 'Wholesale & gifting'],
  ['#sourcing', 'Sourcing'],
  ['#quote', 'Contact'],
]

export function Logo() {
  return (
    <svg aria-hidden="true"><use href="#logo" /></svg>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)

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

  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <a className="brand" href="#top" aria-label="JHS General Trading home" onClick={close}>
          <Logo />
          <span><b>JHS</b><small>General Trading · UAE</small></span>
        </a>
        <ul>
          {links.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}
        </ul>
        <a className="btn btn-hot btn-sm" href="#quote">Request a quote</a>
        <button
          className="burger"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round' }}>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
          </svg>
        </button>
      </div>

      <div className="sheet" id="mobile-menu" hidden={!open}>
        <ul>
          {links.map(([href, label]) => <li key={href}><a href={href} onClick={close}>{label}</a></li>)}
        </ul>
        <a className="btn btn-hot" href="#quote" onClick={close}>Request a quote</a>
      </div>
    </nav>
  )
}
