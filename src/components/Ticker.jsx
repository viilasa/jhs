import { ticker } from '../data.js'

export default function Ticker() {
  // Rendered twice so the -50% loop is seamless
  const row = [...ticker, ...ticker]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  )
}
