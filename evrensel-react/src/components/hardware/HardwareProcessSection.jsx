export default function HardwareProcessSection({ processSection, processSteps }) {
  return (
    <section className="section hardware-page__process reveal-on-scroll reveal-left" aria-label="Donanım süreci">
      <div className="container">
        <div className="hardware-page__process-shell homepage-shared-shell">
          <div className="hardware-page__process-header homepage-shared-header">
            <p className="hardware-page__eyebrow homepage-shared-eyebrow">{processSection.eyebrow}</p>
            <h2>{processSection.title}</h2>
            <p>{processSection.subtitle}</p>
          </div>

          <div className="hardware-page__process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="hardware-page__process-card homepage-shared-card">
                <span className="hardware-page__process-step">{item.step}</span>
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
