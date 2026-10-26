import Icon from './Icons.jsx'
import { legal } from '../legal.js'

function PageHead({ crumb, title, sub }) {
  return (
    <header className="cat-hero page-hero" id="top">
      <div className="wrap">
        <div>
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a><span aria-hidden="true">/</span>
            <span aria-current="page">{crumb}</span>
          </nav>
          <h1>{title}</h1>
          {sub && <p className="lead">{sub}</p>}
        </div>
      </div>
    </header>
  )
}

export default function LegalPage({ doc }) {
  const d = legal[doc]
  return (
    <>
      <PageHead crumb={d.title} title={d.title} sub={`Last updated ${d.updated}`} />
      <main className="sec">
        <article className="wrap legal">
          <p className="legal-intro">{d.intro}</p>
          {d.sections.map(([h, paras], i) => (
            <section key={h}>
              <h2>{i + 1}. {h}</h2>
              {paras.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
            </section>
          ))}
        </article>
      </main>
    </>
  )
}

export function NotFound() {
  return (
    <>
      <PageHead crumb="Not found" title="Page not found" sub="The page you were looking for does not exist or has moved." />
      <main className="sec">
        <div className="wrap ctas">
          <a className="btn btn-primary" href="/">Go to the home page <Icon name="arrow" /></a>
          <a className="btn btn-outline" href="/#products">Browse products</a>
        </div>
      </main>
    </>
  )
}
