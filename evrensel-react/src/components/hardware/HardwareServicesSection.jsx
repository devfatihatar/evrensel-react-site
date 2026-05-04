export default function HardwareServicesSection({ section, services }) {
  return (
    <section className="section hardware-page__services reveal-on-scroll reveal-right" aria-label="Donanım hizmet kapsamı">
      <div className="container">
        <div className="hardware-page__services-shell homepage-shared-shell">
          <div className="hardware-page__services-header homepage-shared-header">
            <p className="hardware-page__eyebrow homepage-shared-eyebrow">{section.eyebrow}</p>
            <h2>{section.title}</h2>
            <p>{section.subtitle}</p>
          </div>

          <div className="hardware-page__services-grid">
            {services.map((item, index) => (
              <article key={item.title} className="hardware-page__service-card homepage-shared-card">
                <span className="hardware-page__card-index">{String(index + 1).padStart(2, "0")}</span>
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
