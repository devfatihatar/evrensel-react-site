export default function HardwareDeliverablesSection({ deliverablesSection, deliverables }) {
  return (
    <section className="section hardware-page__deliverables reveal-on-scroll reveal-right" aria-label="Donanım teslim başlıkları">
      <div className="container">
        <div className="hardware-page__deliverables-shell homepage-shared-shell">
          <div className="hardware-page__deliverables-grid">
            <div className="hardware-page__deliverables-header homepage-shared-header">
              <p className="hardware-page__eyebrow homepage-shared-eyebrow">{deliverablesSection.eyebrow}</p>
              <h2>{deliverablesSection.title}</h2>
              <p>{deliverablesSection.subtitle}</p>
            </div>

            <div className="hardware-page__deliverables-box">
              <ul className="hardware-page__deliverables-list">
                {deliverables.map((item, index) => (
                  <li key={item} className="homepage-shared-card">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
