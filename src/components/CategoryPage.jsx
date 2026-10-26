import Icon from './Icons.jsx'
import ProductCard from './ProductCard.jsx'
import { CategoryCard, pad } from './Catalogue.jsx'
import { groups } from '../data.js'

// Split items into their sub-headings (in first-seen order); items without one form a single block
function sections(items) {
  const map = new Map()
  items.forEach((i) => {
    const key = i.group || ''
    if (!map.has(key)) map.set(key, [])
    map.get(key).push(i)
  })
  return [...map]
}

export default function CategoryPage({ group, onAsk, children }) {
  const num = groups.indexOf(group) + 1
  const others = groups.map((g, i) => [g, i + 1]).filter(([g]) => g !== group)

  return (
    <>
      <header className="cat-hero" id="top">
        <div className="wrap">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <a href="#/">Home</a><span aria-hidden="true">/</span>
              <a href="#products">Products</a><span aria-hidden="true">/</span>
              <span aria-current="page">{group.title}</span>
            </nav>
            <span className="eyebrow">Category {pad(num)} of {pad(groups.length)}</span>
            <h1>{group.title}</h1>
            <p className="lead">{group.intro}</p>
            <div className="ctas">
              <a className="btn btn-primary" href="#quote">Request a quote <Icon name="arrow" /></a>
              <a className="btn btn-ghost-light" href="#range">See all {group.items.length} products</a>
            </div>
          </div>

          <aside className="cat-facts" aria-label={`${group.title} at a glance`}>
            <div className="cat-facts-head">
              <span className="pseg-art"><svg aria-hidden="true"><use href={`#i-${group.icon}`} /></svg></span>
              <div><b>{group.items.length}</b><span>products in this category</span></div>
            </div>
            <dl>
              {group.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          </aside>
        </div>
      </header>

      <main>
        <section className="sec sec-soft" id="range">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="eyebrow">{group.title}</span>
                <h2>Our {group.title.toLowerCase()} range</h2>
                <p>Tap “Request price” on any product to start a quote with it filled in. Grades, sizes and origins are confirmed per order.</p>
              </div>
            </div>

            {sections(group.items).map(([title, items]) => (
              <div className="group" key={title || 'all'}>
                {title && <div className="group-title"><h3>{title}</h3><span>{items.length} products</span></div>}
                <div className={items.length % 3 === 0 ? 'grid' : 'grid four'}>
                  {items.map((item) => <ProductCard key={item.name} item={item} onAsk={onAsk} />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sec cat-more">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="eyebrow">Keep browsing</span>
                <h2>Other categories</h2>
              </div>
              <a className="btn btn-outline" href="#products">All categories</a>
            </div>
            <div className="psegs">
              {others.map(([g, n]) => <CategoryCard key={g.id} group={g} num={n} />)}
            </div>
          </div>
        </section>
        {children}
      </main>
    </>
  )
}
