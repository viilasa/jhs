import Icon from './Icons.jsx'
import { groups } from '../data.js'

const lineCount = groups.reduce((n, g) => n + g.items.length, 0)

// Sample lines for the spec board — typical trade specs, not live prices.
const board = [
  { icon: 'cashew', name: 'Cashew nuts', grade: '', origin: 'India, Vietnam', pack: '20 kg carton' },
  { icon: 'almond', name: 'Almonds', grade: 'Nonpareil 23/25', origin: 'USA', pack: '22.68 kg carton' },
  { icon: 'pista', name: 'Pistachios', grade: 'Akbari', origin: 'USA, Iran', pack: ['5 / 10 kg carton', '50 kg bag'] },
  { icon: 'cardamom', name: 'Green cardamom', grade: '8 mm', origin: 'India, Guatemala', pack: '25 kg bag' },
  { icon: 'saffron', name: 'Saffron', grade: 'Super Negin', origin: 'Iran', pack: 'On request' },
]

const stats = [
  [lineCount, 'Product lines'],
  ['7+', 'Origin countries'],
  [groups.length, 'Categories'],
  ['B2B', '& retail supply'],
]

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">Wholesale nuts &amp; spices distributor · UAE</span>
          <h1>Premium nuts, dry fruits &amp; spices, <span>supplied from the UAE.</span></h1>
          <p className="lead">
            JHS General Trading sources graded almonds, cashews, pistachios, dry fruits and whole spices from leading
            origins and supplies importers, wholesalers, retailers and food businesses across the Gulf and beyond.
          </p>
          <div className="ctas">
            <a className="btn btn-primary" href="#quote">Request a wholesale quote <Icon name="arrow" /></a>
            <a className="btn btn-ghost-light" href="#products">View product range</a>
          </div>
          <dl className="stats">
            {stats.map(([n, l]) => <div key={l}><dt><b>{n}</b></dt><dd><span>{l}</span></dd></div>)}
          </dl>
        </div>

        <div className="hero-art">
          <div className="board">
            <div className="board-head">
              <div><h3>Product specifications</h3><small>Indicative grades &amp; packing</small></div>
              <span className="live">Quoting now</span>
            </div>
            <table>
              <thead><tr><th>Product</th><th>Origin</th><th>Packing</th></tr></thead>
              <tbody>
                {board.map((r) => (
                  <tr key={r.name}>
                    <td><div className="prod"><svg aria-hidden="true"><use href={`#i-${r.icon}`} /></svg><span>{r.name}{r.grade && <small>{r.grade}</small>}</span></div></td>
                    <td>{r.origin}</td>
                    <td>{[].concat(r.pack).map((p) => <span className="pack" key={p}>{p}</span>)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="board-foot">
              <span>Spec sheets &amp; samples on request</span>
              <a className="link-arrow" href="#products">Full range <Icon name="arrow" /></a>
            </div>
          </div>
          <div className="float-card">
            <i><Icon name="doc" /></i>
            <span><b>Export-ready</b>Certificate of origin · Phyto</span>
          </div>
        </div>
      </div>
    </header>
  )
}
