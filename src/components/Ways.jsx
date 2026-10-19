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
    <section className="ways" id="buy" aria-label="Ways to buy">
      <div className="way trade">
        <div className="way-in">
          <span className="eyebrow">For the trade</span>
          <h2 className="display">Wholesale &amp; export</h2>
          <p>For importers, distributors, supermarkets, roasters and restaurant kitchens buying by the carton, the sack or the container.</p>
          <Spec rows={[
            ['Nut packing', '22.68 kg (50 lb) cartons · vacuum tins'],
            ['Spice packing', '25 / 50 kg PP or jute bags'],
            ['Minimum order', '[MOQ to confirm]', true],
            ['Before you order', 'Spec sheet · sample'],
            ['Shipping documents', 'Certificate of origin · phyto'],
          ]} />
          <a className="btn" href="#quote">Get a trade price</a>
        </div>
      </div>
      <div className="way gift">
        <div className="way-in">
          <span className="eyebrow">For home &amp; gifting</span>
          <h2 className="display">Packs &amp; hampers</h2>
          <p>The same stock, packed small: pantry pouches for the kitchen and boxes for Ramadan, Eid, Diwali and the office.</p>
          <Spec rows={[
            ['Pantry pouches', '250 g · 500 g · 1 kg'],
            ['Gift boxes', 'Mixed nuts · dates · saffron'],
            ['Corporate gifting', 'Branded sleeves on request'],
            ['Delivery', '[UAE areas to confirm]', true],
          ]} />
          <a className="btn" href="#quote">Order a gift box</a>
        </div>
      </div>
    </section>
  )
}
