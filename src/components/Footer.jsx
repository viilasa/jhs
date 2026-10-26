import { Logo } from './Nav.jsx'
import { groups, contact, categoryHref, telHref, waHref } from '../data.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="brand" href="#top" aria-label="Back to top">
              <Logo />
              <span><b>JHS General Trading</b><small>Nuts · Dry fruits · Spices</small></span>
            </a>
            <p className="foot-about">
              UAE-based supplier of graded nuts, dry fruits and whole spices for importers, wholesalers, retailers and food businesses.
            </p>
          </div>
          <div>
            <h4>Products</h4>
            <ul>{groups.map((g) => <li key={g.id}><a href={categoryHref(g.id)}>{g.title}</a></li>)}<li><a href="#solutions">Gift boxes</a></li></ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#sourcing">Sourcing</a></li>
              <li><a href="#quote">Request a quote</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              {contact.phones.map((n) => <li key={n}><a href={telHref(n)}>{n}</a></li>)}
              <li><a href={waHref()} target="_blank" rel="noopener">WhatsApp: {contact.whatsapp}</a></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li>{contact.office}</li>
              <li>{contact.hours}</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} JHS General Trading. All rights reserved.</span>
          <span>United Arab Emirates · Trade licence no. <span className="ph">{contact.licence}</span></span>
        </div>
      </div>
    </footer>
  )
}
