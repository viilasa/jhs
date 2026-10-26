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

function RouteMap() {
  return (
    <svg viewBox="0 0 640 340" role="img" aria-label="Schematic map: produce from the USA, Türkiye, Iran, Vietnam, India, West Africa and Madagascar flows to the UAE, then onward to the GCC, Africa and Asia.">
      {origins.map((o) => <path key={o.name} className="lane" d={o.lane} />)}
      <path className="lane out" d="M430 170C470 150 500 70 560 50" />
      <path className="lane out" d="M430 170C400 210 330 290 280 316" />
      {origins.map((o) => <circle key={o.name} className="map-node" cx={o.at[0]} cy={o.at[1]} r="5" />)}
      <g transform={`translate(${HUB[0]} ${HUB[1]})`}>
        <circle r="26" style={{ fill: 'rgba(200,150,46,.15)' }} />
        <use href="#logo" x="-17" y="-17" width="34" height="34" />
      </g>
      <text className="map-label" x="420" y="218" textAnchor="end">UAE hub</text>
      <text className="map-sub" x="420" y="232" textAnchor="end">inspect · repack · ship</text>
      {origins.map((o) => (
        <g key={o.name}>
          <text className="map-label" x={o.n[0]} y={o.n[1]} textAnchor={o.n[2]}>{o.name}</text>
          <text className="map-sub" x={o.s[0]} y={o.s[1]} textAnchor={o.s[2]}>{o.sub}</text>
        </g>
      ))}
      <text className="map-label" x="566" y="44">GCC &amp; Asia →</text>
      <text className="map-label" x="270" y="334" textAnchor="end">← Africa</text>
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
    <section className="sec sec-soft" id="sourcing">
      <div className="wrap sourcing">
        <div>
          <span className="eyebrow">Global sourcing</span>
          <h2>Grown worldwide. Traded from the UAE.</h2>
          <p className="intro">
            The UAE sits between the growing regions and the markets they serve. Produce arrives by sea, is inspected and
            repacked, then shipped onward across the Gulf, Africa and Asia.
          </p>
          <ul className="origin-list">
            {origins.map((o) => <li key={o.name}><b>{o.name}</b><span>{o.sub}</span></li>)}
          </ul>
        </div>
        <figure className="map-card" style={{ margin: 0 }}>
          <p className="swipe-hint" aria-hidden="true">Swipe the map sideways →</p>
          <div className="map-scroll" ref={scroller}><RouteMap /></div>
          <figcaption>Schematic, not to scale. Typical origins for each line; actual origin is stated on every quote.</figcaption>
        </figure>
      </div>
    </section>
  )
}
