const ARCH = 'M70 470V200C70 96 190 40 280 8 370 40 490 96 490 200V470Z'
const edge = { stroke: 'var(--edge)', strokeWidth: 2.5 }

// One jute sack, drawn around its own origin; `fill` colours the produce on top.
function Sack({ x, y, scale = 1, fill, icon, size = 24, label, sub, rim }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-60 170C-74 120-72 50-56 8H56C72 50 74 120 60 170Z" style={{ fill: 'var(--burlap)', ...edge }} />
      <path d="M-62 60H62M-66 100H66M-64 140H64" style={{ stroke: 'var(--burlap-l)', strokeWidth: 2, opacity: 0.6 }} />
      <ellipse cx="0" cy="8" rx="64" ry="16" style={{ fill: 'var(--burlap-d)', ...edge }} />
      <path d="M-52 8Q0-30 52 8Z" style={{ fill, ...(rim ? { stroke: rim, strokeWidth: 1.5 } : {}) }} />
      <use href={`#i-${icon}`} x="-40" y="-24" width={size} height={size} />
      <use href={`#i-${icon}`} x="-12" y="-34" width={size + 2} height={size + 2} />
      <use href={`#i-${icon}`} x="16" y="-22" width={size} height={size} />
      <text className="stencil stencil-b" x="0" y="82" textAnchor="middle">{label}</text>
      <text className="stencil stencil-s" x="0" y="102" textAnchor="middle">{sub}</text>
    </g>
  )
}

function StallArt() {
  return (
    <svg viewBox="0 0 560 470" role="img" aria-label="Illustration of jute sacks of almonds, pistachios, cardamom, cashews and red chilli in front of a patterned arch">
      <defs>
        <pattern id="girih" width="40" height="40" patternUnits="userSpaceOnUse">
          <g style={{ fill: 'none', stroke: 'var(--hero-fg)', strokeWidth: 1.3, opacity: 0.22 }}>
            <rect x="13" y="13" width="14" height="14" />
            <rect x="13" y="13" width="14" height="14" transform="rotate(45 20 20)" />
            <path d="M0 20h5M35 20h5M20 0v5M20 35v5" />
          </g>
        </pattern>
        <clipPath id="arch"><path d={ARCH} /></clipPath>
      </defs>
      <path d={ARCH} style={{ fill: 'var(--saffron)', opacity: 0.35 }} />
      <rect x="60" y="0" width="440" height="470" clipPath="url(#arch)" style={{ fill: 'url(#girih)' }} />
      <path d={ARCH.slice(0, -1)} style={{ fill: 'none', stroke: 'var(--hero-fg)', strokeWidth: 3 }} />

      {/* hanging lantern */}
      <g transform="translate(280 30)">
        <path d="M0 0V34" style={{ stroke: 'var(--hero-fg)', strokeWidth: 2 }} />
        <path d="M-14 40H14L20 62 0 82-20 62Z" style={{ fill: 'var(--brass)', stroke: 'var(--hero-fg)', strokeWidth: 2 }} />
        <path d="M-8 50H8L12 62 0 74-12 62Z" style={{ fill: '#FFE08A' }} />
      </g>

      {/* floor */}
      <rect x="0" y="420" width="560" height="50" style={{ fill: 'var(--wood)' }} />
      <path d="M0 420H560" style={{ stroke: 'var(--edge)', strokeWidth: 3 }} />

      <Sack x={180} y={128} scale={0.9} fill="var(--c-almond)" icon="almond" label="ALMONDS" sub="NONPAREIL 23/25" />
      <Sack x={380} y={122} scale={0.9} fill="var(--c-shell)" icon="pista" label="PISTACHIO" sub="AKBARI 28/30" />
      <Sack x={110} y={250} fill="var(--c-card)" icon="cardamom" size={20} label="CARDAMOM" sub="GREEN · 8 MM" />
      <Sack x={282} y={262} fill="var(--c-cashew)" rim="var(--c-cashew-d)" icon="cashew" label="CASHEW" sub="WHOLE · W240" />
      <Sack x={454} y={250} fill="var(--c-chilli)" icon="chilli" size={26} label="RED CHILLI" sub="WHOLE · DRIED" />

      {/* loose produce on the floor */}
      <use href="#i-almond" x="22" y="432" width="26" height="26" transform="rotate(-60 35 445)" />
      <use href="#i-pista" x="196" y="436" width="24" height="24" />
      <use href="#i-anise" x="364" y="430" width="30" height="30" />
      <use href="#i-cashew" x="520" y="430" width="28" height="28" />
      <use href="#i-clove" x="398" y="436" width="20" height="20" transform="rotate(40 408 446)" />
    </svg>
  )
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">Nuts · Dry fruits · Whole spices — United Arab Emirates</span>
          <h1 className="display">Nuts &amp; spices, by the <em>sack</em> or the <em>gift box</em>.</h1>
          <p className="lead">
            JHS General Trading supplies almonds, cashews, pistachios, dry fruits and whole spices to importers,
            wholesalers, restaurants and households across the UAE and beyond.
          </p>
          <div className="ctas">
            <a className="btn btn-hot" href="#quote">Request a wholesale quote</a>
            <a className="btn btn-plain" href="#buy">Home &amp; gift packs</a>
          </div>
          <ul className="chips" aria-label="What we offer">
            <li>Bulk cartons &amp; sacks</li><li>Retail pouches</li><li>Festive gift boxes</li><li>Export paperwork</li>
          </ul>
        </div>
        <div className="hero-art"><StallArt /></div>
      </div>
    </header>
  )
}
