import Icon from './Icons.jsx'
import { groups, categoryHref } from '../data.js'

export const pad = (n) => String(n).padStart(2, '0')

// One card per category, each linking to that category's own page
export function CategoryCard({ group, num }) {
  return (
    <a className="pseg" href={categoryHref(group.id)}>
      <span className="pseg-num">{pad(num)}</span>
      <span className="pseg-art"><svg aria-hidden="true"><use href={`#i-${group.icon}`} /></svg></span>
      <span className="pseg-title">{group.title}</span>
      <span className="pseg-blurb">{group.blurb}</span>
      <span className="pseg-foot">{group.items.length} products <span className="pseg-go">Explore <Icon name="arrow" /></span></span>
    </a>
  )
}

export default function Catalogue() {
  return (
    <section className="sec sec-soft" id="products">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">Product range</span>
            <h2>{groups.length} categories, one supplier</h2>
            <p>Open a category to see every product we supply in it. Each line is quoted by grade, size and origin, with spec sheets and samples on request.</p>
          </div>
        </div>

        <div className="psegs">
          {groups.map((g, i) => <CategoryCard key={g.id} group={g} num={i + 1} />)}
          <a className="pseg pseg-cta" href="#quote">
            <span className="pseg-title">Need a mix of products?</span>
            <span className="pseg-blurb">Send one enquiry for everything you need. We quote across categories in one reply.</span>
            <span className="pseg-foot"><span className="pseg-go">Request a quote <Icon name="arrow" /></span></span>
          </a>
        </div>
      </div>
    </section>
  )
}
