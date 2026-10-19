import { useState } from 'react'
import { groups } from '../data.js'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'nuts', label: 'Nuts' },
  { id: 'dry', label: 'Dry fruits' },
  { id: 'spice', label: 'Whole spices' },
]

function Item({ item, onAsk }) {
  return (
    <article className="item">
      <div className={`item-art t-${item.tint}`}>
        <svg aria-hidden="true"><use href={`#i-${item.icon}`} /></svg>
      </div>
      <div className="item-body">
        <h4>{item.name}</h4>
        <ul className="grades">{item.grades.map((g) => <li key={g}>{g}</li>)}</ul>
        <p className="origin">{item.origin}</p>
        <a className="ask" href="#quote" onClick={() => onAsk(item.name)}>Ask for price →</a>
      </div>
    </article>
  )
}

export default function Catalogue({ onAsk }) {
  const [filter, setFilter] = useState('all')

  return (
    <section className="sec" id="stall">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow" style={{ color: 'var(--chilli)' }}>The counter</span>
            <h2 className="display">What's on the stall today</h2>
            <p>Every line is quoted by grade, size and origin. Ask for a spec sheet or a sample before you commit to a container.</p>
          </div>
          <div className="tabs" role="group" aria-label="Filter products">
            {filters.map((f) => (
              <button key={f.id} className="tab" type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {groups.map((g) => (
          <div className="group" key={g.id} hidden={filter !== 'all' && filter !== g.id}>
            <div className="group-title"><h3>{g.title}</h3><span className="eyebrow">{g.items.length} lines</span></div>
            <div className={g.cols === 4 ? 'grid four' : 'grid'}>
              {g.items.map((item) => <Item key={item.name} item={item} onAsk={onAsk} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
