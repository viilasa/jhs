const steps = [
  ['Send your list', 'Product, grade, quantity and where it needs to go.'],
  ['Get a quote & sample', 'Price, packing options, lead time and a spec sheet.'],
  ['Confirm & pack', 'We pack to your carton, sack or retail format.'],
  ['Dispatch with papers', 'Invoice, packing list and certificates travel with the goods.'],
]

export default function Steps() {
  return (
    <section className="sec" aria-labelledby="how-h" style={{ borderTop: '2px solid var(--line)' }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow" style={{ color: 'var(--chilli)' }}>Ordering</span>
            <h2 className="display" id="how-h">How an order moves</h2>
          </div>
        </div>
        <ol className="steps">
          {steps.map(([h, p]) => <li key={h}><h3>{h}</h3><p>{p}</p></li>)}
        </ol>
      </div>
    </section>
  )
}
