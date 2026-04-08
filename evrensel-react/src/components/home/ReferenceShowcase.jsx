import homeReferenceShowcaseData from "../../data/homeReferenceShowcaseData.json"

const { title, description, previews, stats } = homeReferenceShowcaseData

export default function ReferenceShowcase() {
  return (
    <section className="reference-showcase section reveal-on-scroll reveal-right">
      <div className="container reference-showcase__inner">
        <div className="reference-showcase__header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="reference-showcase__previews" aria-label="Ornek referans gorselleri">
          {previews.map((item) => (
            <figure key={item.name} className="reference-showcase__preview-card">
              <div
                className="reference-showcase__preview"
                style={{ "--preview-start": item.startColor, "--preview-end": item.endColor }}
                aria-hidden="true"
              />
              <figcaption className="reference-showcase__preview-name">{item.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="reference-showcase__list" role="list" aria-label="Referans istatistikleri">
          {stats.map((item) => (
            <article className="reference-showcase__item" key={item.label} role="listitem">
              <div className="reference-showcase__item-title">
                <strong>{item.value}</strong>
              </div>
              <div className="reference-showcase__item-body">
                <span>{item.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
