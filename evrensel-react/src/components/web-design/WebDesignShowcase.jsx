export default function WebDesignShowcase({
  servicesSection,
  services,
  webArchitectureImage,
}) {
  return (
    <section className="web-design-showcase section reveal-on-scroll reveal-right" aria-label="Web tasarım liste alanı">
      <div className="container web-design-showcase__inner">
        <div className="web-design-showcase__shell homepage-shared-shell">
          <div className="web-design-showcase__grid">
            <div className="web-design-showcase__media homepage-shared-media">
              <img
                src={webArchitectureImage}
                alt="Web mimarisi gorseli"
                className="web-design-showcase__image"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="web-design-showcase__content homepage-shared-header">
              <p className="web-design-showcase__eyebrow homepage-shared-eyebrow">{servicesSection.eyebrow}</p>
              <h2>{servicesSection.title}</h2>
              <p>{servicesSection.subtitle}</p>
            </div>
          </div>

          <ul className="web-design-showcase__list" aria-label="Web tasarım liste alanı">
            {services.map((item) => (
              <li key={item.title} className="homepage-shared-card">
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
