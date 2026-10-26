import Icon from './Icons.jsx'

function Spec({ rows }) {
  return (
    <ul className="spec">
      {rows.map(([k, v, ph]) => (
        <li key={k}><span>{k}</span><span className={ph ? 'ph' : undefined}>{v}</span></li>
      ))}
    </ul>
  )
}

export default function Ways() {
  return (
    <section className="sec" id="solutions">
      <div className="wrap">
        <div className="sec-head center">
          <div>
            <span className="eyebrow">Solutions</span>
            <h2>Supply for every scale</h2>
            <p>From full containers for distributors to curated gift boxes for corporate clients — the same stock, packed to your requirement.</p>
          </div>
        </div>
        <div className="ways">
          <div className="way trade">
            <span className="eyebrow">For the trade</span>
            <h3>Wholesale &amp; export</h3>
            <p>For importers, distributors, supermarkets, roasters and restaurant kitchens buying by the carton, the bag or the container.</p>
            <Spec rows={[
              ['Nut packing', '22.68 kg (50 lb) cartons · vacuum tins'],
              ['Spice packing', '25 / 50 kg PP or jute bags'],
              ['Minimum order', '[MOQ to confirm]', true],
              ['Before you order', 'Spec sheet · sample'],
              ['Shipping documents', 'Certificate of origin · phyto'],
            ]} />
            <a className="btn btn-primary" href="#quote">Get a trade price <Icon name="arrow" /></a>
          </div>
          <div className="way gift">
            <span className="eyebrow">For retail &amp; gifting</span>
            <h3>Retail packs &amp; hampers</h3>
            <p>Pantry pouches for retail shelves and premium boxes for Ramadan, Eid, Diwali and corporate gifting.</p>
            <Spec rows={[
              ['Pantry pouches', '250 g · 500 g · 1 kg'],
              ['Gift boxes', 'Mixed nuts · dates · saffron'],
              ['Corporate gifting', 'Branded sleeves on request'],
              ['Delivery', '[UAE areas to confirm]', true],
            ]} />
            <a className="btn btn-dark" href="#quote">Order gift boxes <Icon name="arrow" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
