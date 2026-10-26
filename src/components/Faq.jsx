import { faqs } from '../data.js'

export default function Faq() {
  return (
    <section className="sec" id="faq">
      <div className="wrap faq">
        <div className="sec-head">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2>Buying nuts &amp; spices wholesale in the UAE</h2>
            <p>Quick answers for traders, wholesalers and food businesses.</p>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
