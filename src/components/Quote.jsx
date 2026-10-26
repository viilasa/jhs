import { useRef, useState } from 'react'
import Icon from './Icons.jsx'
import { groups, packing, contact, telHref, waHref, mailHref } from '../data.js'

const fields = [
  { id: 'grade', label: 'Grade / size', ph: 'e.g. W240' },
  { id: 'qty', label: 'Quantity', ph: 'e.g. 2 MT or 50 boxes' },
  { id: 'dest', label: 'Deliver to', ph: 'City, country' },
  { id: 'name', label: 'Your name & company', ph: 'Name, company' },
]
const phOf = Object.fromEntries(fields.map((f) => [f.id, f.ph.replace(/^e\.g\.\s*/, '')]))

function buildMessage(f, product) {
  const v = (k) => f[k].trim() || `[${phOf[k]}]`
  const lines = [
    'Hello JHS General Trading,',
    '',
    `I'd like a quote (${f.buyer.toLowerCase()}):`,
    `• Product: ${product}`,
    `• Grade / size: ${v('grade')}`,
    `• Quantity: ${v('qty')}`,
    `• Packing: ${f.pack}`,
    `• Deliver to: ${v('dest')}`,
  ]
  if (f.notes.trim()) lines.push(`• Notes: ${f.notes.trim()}`)
  lines.push('', 'Thanks,', v('name'))
  return lines.join('\n')
}

export default function Quote({ product, setProduct }) {
  const [f, setF] = useState({ buyer: 'Wholesale / trade', grade: '', qty: '', pack: packing[0], dest: '', name: '', notes: '' })
  const [status, setStatus] = useState('')
  const msgRef = useRef(null)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const message = buildMessage(f, product)

  const copy = (e) => {
    e.preventDefault()
    const selectIt = () => {
      const r = document.createRange()
      r.selectNodeContents(msgRef.current)
      const s = window.getSelection()
      s.removeAllRanges()
      s.addRange(r)
      setStatus('Message selected. Press Ctrl+C / ⌘C to copy.')
    }
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(message).then(() => setStatus('Copied. Paste it into WhatsApp or email.'), selectIt)
    } else selectIt()
  }

  const field = ({ id, label, ph }) => (
    <div className="field" key={id}>
      <label htmlFor={`f-${id}`}>{label}</label>
      <input id={`f-${id}`} placeholder={ph} value={f[id]} onChange={set(id)} />
    </div>
  )

  return (
    <section className="sec sec-soft" id="quote">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">Request a quote</span>
            <h2>Tell us what you need</h2>
            <p>Fill in what you need and send it to us on WhatsApp or by email in one tap. We reply with pricing and availability.</p>
          </div>
        </div>

        <div className="quote">
          <form className="card" onSubmit={copy} noValidate>
            <div className="fields">
              <div className="field full">
                <span className="field-label">I'm buying for</span>
                <div className="seg">
                  {['Wholesale / trade', 'Home or gifting'].map((b, i) => (
                    <span key={b}>
                      <input type="radio" name="buyer" id={`b-${i}`} value={b} checked={f.buyer === b} onChange={set('buyer')} />
                      <label htmlFor={`b-${i}`}>{b}</label>
                    </span>
                  ))}
                </div>
              </div>

              <div className="field">
                <label htmlFor="f-product">Product</label>
                <select id="f-product" value={product} onChange={(e) => setProduct(e.target.value)}>
                  {groups.map((g) => (
                    <optgroup key={g.id} label={g.title}>
                      {g.items.map((i) => <option key={i.name}>{i.name}</option>)}
                    </optgroup>
                  ))}
                  <optgroup label="Other"><option>Mixed gift box</option><option>Something else</option></optgroup>
                </select>
              </div>
              {field(fields[0])}
              {field(fields[1])}
              <div className="field">
                <label htmlFor="f-pack">Packing</label>
                <select id="f-pack" value={f.pack} onChange={set('pack')}>
                  {packing.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>
              {field(fields[2])}
              {field(fields[3])}
              <div className="field full">
                <label htmlFor="f-notes">Anything else</label>
                <textarea id="f-notes" placeholder="Target price, delivery date, private label…" value={f.notes} onChange={set('notes')} />
              </div>
            </div>
            <div className="form-foot">
              <a className="btn btn-wa" href={waHref(message)} target="_blank" rel="noopener">Send on WhatsApp</a>
              <a className="btn btn-primary" href={mailHref(`Quote request: ${product}`, message)}>Send by email</a>
              <button className="btn btn-outline" type="submit">Copy text</button>
              <span className="status" role="status">{status}</span>
            </div>
          </form>

          <div className="side">
            <div className="preview">
              <h3>Your message</h3>
              <pre ref={msgRef}>{message}</pre>
            </div>
            <div className="contact">
              <h3>Contact our sales team</h3>
              <p>Prefer to talk directly? Reach us on any of these channels.</p>
              <dl>
                {[
                  ['phone', 'Phone', contact.phones.map((n, i) => <span key={n}>{i > 0 && ' · '}<a href={telHref(n)}>{n}</a></span>)],
                  ['phone', 'WhatsApp', <a href={waHref()} target="_blank" rel="noopener">{contact.whatsapp}</a>],
                  ['mail', 'Email', <a href={`mailto:${contact.email}`}>{contact.email}</a>],
                  ['pin', 'Office', contact.office],
                  ['clock', 'Hours', contact.hours],
                ].map(([icon, k, v]) => (
                  <div key={k}>
                    <i><Icon name={icon} /></i>
                    <span><dt>{k}</dt><dd>{v}</dd></span>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
