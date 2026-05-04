export default function HardwareCasesSection({ casesSection, useCases }) {
  return (
    <section className="section hardware-page__cases reveal-on-scroll reveal-left" aria-label="Donanım kullanım senaryoları">
      <div className="container">
        <div className="hardware-page__cases-shell homepage-shared-shell">
          <div className="hardware-page__cases-header homepage-shared-header">
            <p className="hardware-page__eyebrow homepage-shared-eyebrow">{casesSection.eyebrow}</p>
            <h2>{casesSection.title}</h2>
            <p>{casesSection.subtitle}</p>
          </div>

          <div className="hardware-page__cases-grid">
            {useCases.map((item) => (
              <article key={item.title} className="hardware-page__case-card homepage-shared-card">
                <span className="hardware-page__case-tag">{item.title}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
