import { useRef, useState } from 'react'
import { groups, packing, contact } from '../data.js'

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
    <section className="quote-band" id="quote">
      <div className="wrap sec">
        <div className="sec-head">
          <div>
            <span className="eyebrow" style={{ color: '#7A2414' }}>Request a quote</span>
            <h2 className="display">Tell us what you need</h2>
            <p>Fill this in and copy the message. Send it by WhatsApp or email and we reply with a price.</p>
          </div>
        </div>

        <div className="quote">
          <form className="card" onSubmit={copy} noValidate>
            <div className="fields">
              <div className="field full">
                <span style={{ fontWeight: 700, fontSize: 'var(--s-1)' }}>I'm buying for</span>
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
              <button className="btn btn-hot" type="submit">Copy my enquiry</button>
              <span className="status" role="status">{status}</span>
            </div>
          </form>

          <div className="side">
            <div className="preview">
              <span className="eyebrow" style={{ color: '#7A2414' }}>Your message</span>
              <pre ref={msgRef}>{message}</pre>
            </div>
            <div className="contact">
              <h3>Reach JHS</h3>
              <dl>
                <dt>WhatsApp</dt><dd><span className="ph">{contact.whatsapp}</span></dd>
                <dt>Email</dt><dd><span className="ph">{contact.email}</span></dd>
                <dt>Office</dt><dd><span className="ph">{contact.office}</span></dd>
                <dt>Hours</dt><dd><span className="ph">{contact.hours}</span></dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
