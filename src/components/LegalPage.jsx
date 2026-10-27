import Icon from './Icons.jsx'
import { legal } from '../legal.js'
import { photos } from '../photos.js'
import { groups } from '../data.js'

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

// Attribution for every product photo, grouped like the catalogue (required by the CC BY / BY-SA licences)
export function PhotoCredits() {
  return (
    <>
      <PageHead crumb="Photo Credits" title="Photo Credits" sub="Product photos on this website come from Wikimedia Commons and are used under the licences below." />
      <main className="sec">
        <article className="wrap legal">
          <p className="legal-intro">Photos are illustrative of each product type and may differ from the exact grade, size or origin supplied. Images were cropped and resized for this website.</p>
          {groups.map((g) => (
            <section key={g.id}>
              <h2>{g.title}</h2>
              <ul className="credits">
                {g.items.filter((i) => photos[i.name]).map((i) => {
                  const p = photos[i.name]
                  return (
                    <li key={i.name}>
                      <b>{i.name}</b>: photo by {p.author}, <a href={p.source} target="_blank" rel="noopener">Wikimedia Commons</a>, {p.license}
                    </li>
                  )
                })}
              </ul>
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
