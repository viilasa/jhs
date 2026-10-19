import { Logo } from './Nav.jsx'
import { contact } from '../data.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Back to top">
          <Logo />
          <span><b>JHS General Trading</b><small>Nuts · Dry fruits · Spices</small></span>
        </a>
        <p>
          United Arab Emirates · Trade licence no. <span className="ph">{contact.licence}</span> · © {new Date().getFullYear()} JHS General Trading
        </p>
      </div>
    </footer>
  )
}
