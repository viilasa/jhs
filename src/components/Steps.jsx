import Icon from './Icons.jsx'

const steps = [
  ['Send your requirement', 'Product, grade, quantity and destination.'],
  ['Receive quote & sample', 'Price, packing options, lead time and a spec sheet.'],
  ['Confirm & pack', 'We pack to your carton, bag or retail format.'],
  ['Dispatch with documents', 'Invoice, packing list and certificates travel with the goods.'],
]

export default function Steps() {
  return (
    <section className="sec" aria-labelledby="how-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">How it works</span>
            <h2 id="how-h">From enquiry to delivery</h2>
            <p>A straightforward process with clear specifications at every step.</p>
          </div>
        </div>
        <ol className="steps">
          {steps.map(([h, p]) => <li key={h}><h3>{h}</h3><p>{p}</p></li>)}
        </ol>

        <div className="cta-band" style={{ marginTop: 80 }}>
          <div>
            <h2>Ready to place an order?</h2>
            <p>Share your requirement and our team will respond with pricing and availability.</p>
          </div>
          <div className="ctas">
            <a className="btn btn-primary" href="#quote">Request a quote <Icon name="arrow" /></a>
            <a className="btn btn-ghost-light" href="#products">Browse products</a>
          </div>
        </div>
      </div>
    </section>
  )
}
