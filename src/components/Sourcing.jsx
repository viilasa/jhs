import { useEffect, useRef } from 'react'

const HUB = [430, 170]

// Schematic only — positions are arranged for legibility, not geography.
const origins = [
  { at: [70, 120], lane: 'M70 120C200 30 330 60 430 170', name: 'USA', sub: 'almonds · walnuts', n: [70, 104, 'middle'], s: [70, 144, 'middle'] },
  { at: [300, 86], lane: 'M300 86C350 100 400 130 430 170', name: 'Türkiye', sub: 'hazelnuts · figs', n: [282, 70, 'middle'], s: [268, 108, 'middle'] },
  { at: [440, 98], lane: 'M440 98C446 120 440 145 430 170', name: 'Iran', sub: 'pistachios · saffron', n: [452, 80], s: [456, 102] },
  { at: [600, 140], lane: 'M600 140C540 130 480 150 430 170', name: 'Vietnam', sub: 'cashews · pepper · anise', n: [600, 124, 'end'], s: [604, 162, 'end'] },
  { at: [540, 220], lane: 'M540 220C500 200 470 185 430 170', name: 'India', sub: 'cashews · cardamom · chilli', n: [556, 226], s: [520, 244] },
  { at: [200, 250], lane: 'M200 250C280 230 380 200 430 170', name: 'West Africa', sub: 'raw cashews', n: [200, 274, 'middle'], s: [200, 288, 'middle'] },
  { at: [400, 300], lane: 'M400 300C420 260 430 220 430 170', name: 'Madagascar', sub: 'cloves', n: [414, 304], s: [414, 318] },
]

const facts = [
  ['Quoted by grade, not by guesswork', 'Cashews by W-count, almonds by kernels per ounce, pepper by grams per litre. You know exactly what is in the carton.'],
  ['Sample before you ship', 'Ask for a sample and spec sheet for any line, then lock the price for your order.'],
  ['One supplier for the whole basket', 'Combine nuts, dry fruits and spices in one consignment instead of chasing five suppliers.'],
]

const line = { stroke: 'var(--edge)', strokeWidth: 1.6 }

function RouteMap() {
  return (
    <svg viewBox="0 0 640 340" role="img" aria-label="Schematic map: produce from the USA, Türkiye, Iran, Vietnam, India, West Africa and Madagascar flows to the UAE, then onward to the GCC, Africa and Asia.">
      {origins.map((o) => <path key={o.name} className="lane" d={o.lane} />)}
      <path className="lane out" d="M430 170C470 150 500 70 560 50" />
      <path className="lane out" d="M430 170C400 210 330 290 280 316" />
      <g style={{ fill: 'var(--card)', stroke: 'var(--ink)', strokeWidth: 2 }}>
        {origins.map((o) => <circle key={o.name} cx={o.at[0]} cy={o.at[1]} r="6" />)}
      </g>
      <g transform={`translate(${HUB[0]} ${HUB[1]})`}>
        <circle r="22" style={{ fill: 'var(--turmeric)', stroke: 'var(--edge)', strokeWidth: 2.5 }} />
        <use href="#logo" x="-17" y="-17" width="34" height="34" />
      </g>
      <text className="map-label" x="420" y="214" textAnchor="end">UAE</text>
      <text className="map-sub" x="420" y="228" textAnchor="end">check · repack · ship</text>
      {origins.map((o) => (
        <g key={o.name}>
          <text className="map-label" x={o.n[0]} y={o.n[1]} textAnchor={o.n[2]}>{o.name}</text>
          <text className="map-sub" x={o.s[0]} y={o.s[1]} textAnchor={o.s[2]}>{o.sub}</text>
        </g>
      ))}
      <text className="map-label" x="566" y="44">GCC &amp; Asia →</text>
      <text className="map-label" x="270" y="334" textAnchor="end">← Africa</text>
      {/* dhow */}
      <g transform="translate(300 150)">
        <path d="M-24 10H24L16 20H-16Z" style={{ fill: 'var(--wood)', ...line }} />
        <path d="M0 10V-22" style={line} />
        <path d="M2-20C18-10 20 2 14 8H2Z" style={{ fill: 'var(--card)', ...line }} />
      </g>
    </svg>
  )
}

export default function Sourcing() {
  const scroller = useRef(null)

  // On narrow screens the map scrolls sideways; start it centred on the UAE hub.
  useEffect(() => {
    const el = scroller.current
    if (el && el.scrollWidth > el.clientWidth) {
      el.scrollLeft = el.scrollWidth * (HUB[0] / 640) - el.clientWidth / 2
    }
  }, [])

  return (
    <section className="sec patterned" id="sourcing">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow" style={{ color: 'var(--chilli)' }}>Sourcing</span>
            <h2 className="display">Grown far away. Traded from the UAE.</h2>
            <p>The UAE sits between the growing regions and the markets that eat them. Produce comes in by sea, gets checked and repacked, and goes back out across the Gulf, Africa and Asia.</p>
          </div>
        </div>
        <div className="route">
          <figure className="board" style={{ margin: 0 }}>
            <p className="swipe-hint" aria-hidden="true">Swipe the map sideways →</p>
            <div className="board-scroll" ref={scroller}><RouteMap /></div>
            <figcaption className="note">Schematic, not to scale. Typical origins for each line; actual origin is stated on every quote.</figcaption>
          </figure>
          <div className="facts">
            {facts.map(([h, p]) => (
              <div className="fact" key={h}><h3>{h}</h3><p>{p}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
