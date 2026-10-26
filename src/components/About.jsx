import Icon from './Icons.jsx'

const origins = ['USA', 'Türkiye', 'Iran', 'Vietnam', 'India', 'West Africa', 'Madagascar', 'Sri Lanka']

const pillars = [
  ['check', 'Graded, not guessed', 'Cashews by W-count, almonds by kernels per ounce, pepper by grams per litre. You know exactly what is in the carton.'],
  ['flask', 'Sample before you ship', 'Request a sample and spec sheet for any line, then lock the price for your order.'],
  ['layers', 'One supplier, full basket', 'Combine nuts, dry fruits and spices in one consignment instead of managing five suppliers.'],
  ['doc', 'Export documentation', 'Invoice, packing list, certificate of origin and phytosanitary papers travel with the goods.'],
]

export function OriginStrip() {
  return (
    <div className="strip" aria-label="Sourcing origins">
      <div className="wrap">
        <p>Sourced from</p>
        <ul>{origins.map((o) => <li key={o}>{o}</li>)}</ul>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap about">
        <div className="about-copy">
          <span className="eyebrow">About JHS</span>
          <h2>A dependable link between growers and your shelves.</h2>
          <p>
            JHS General Trading is a UAE-based supplier of nuts, dry fruits and whole spices. We work with established
            growers and processors across the world's key producing regions and bring their crops to buyers through the UAE.
          </p>
          <p>
            Every line is quoted by grade, size and origin, so trade buyers can compare like for like and plan with confidence.
          </p>
          <a className="btn btn-dark" href="#quote">Talk to our team <Icon name="arrow" /></a>
        </div>
        <div className="pillars">
          {pillars.map(([icon, h, p]) => (
            <div className="pillar" key={h}>
              <i><Icon name={icon} /></i>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
