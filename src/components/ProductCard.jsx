import Icon from './Icons.jsx'
import { photos } from '../photos.js'

// Products without a drawing in index.html get a lettered tile instead
const initials = (name) => name.split(/[\s/&-]+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('')

export function ProductArt({ icon, name, className = 'item-art' }) {
  return icon
    ? <div className={className}><svg aria-hidden="true"><use href={`#i-${icon}`} /></svg></div>
    : <div className={`${className} mono`} aria-hidden="true">{initials(name)}</div>
}

export default function ProductCard({ item, onAsk }) {
  const photo = photos[item.name]
  return (
    <article className={photo ? 'item has-photo' : 'item'}>
      {photo && (
        <div className="item-photo">
          <img src={photo.src} alt={item.name} width="800" height="600" loading="lazy" decoding="async" />
        </div>
      )}
      <div className="item-top">
        {!photo && <ProductArt icon={item.icon} name={item.name} />}
        <div>
          <h4>{item.name}</h4>
          {item.origin && <p className="origin">{item.origin}</p>}
        </div>
      </div>
      <ul className="grades" aria-label="Grades and variants">{item.grades.map((g) => <li key={g}>{g}</li>)}</ul>
      {item.note && <p className="item-note">{item.note}</p>}
      <a className="link-arrow" href="#quote" onClick={() => onAsk(item.name)}>Request price <Icon name="arrow" /></a>
    </article>
  )
}
