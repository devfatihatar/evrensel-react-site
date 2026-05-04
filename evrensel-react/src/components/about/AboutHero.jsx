import Button from "../shared/Button"
import SectionTitle from "../shared/SectionTitle"
import CountUpText from "../shared/CountUpText"

export default function AboutHero({ hero, facts }) {
  return (
    <section className="section about-page__hero">
      <div className="container about-page__hero-grid">
        <div className="about-page__hero-content homepage-shared-header">
          <SectionTitle eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} headingLevel={1} />

          <p className="about-page__lead">{hero.lead}</p>

          <div className="about-page__hero-actions">
            <Button to="/iletisim">{hero.primaryButton}</Button>
            <Button to="/hizmetlerimiz" variant="secondary">
              {hero.secondaryButton}
            </Button>
          </div>
        </div>

        <aside className="about-page__hero-panel homepage-shared-card" aria-label={hero.panelAriaLabel}>
          <p className="about-page__panel-label homepage-shared-eyebrow">{hero.panelLabel}</p>
          <ul className="about-page__facts">
            {facts.map((fact) => (
              <li key={fact.label} className="about-page__fact">
                <strong>
                  <CountUpText value={fact.value} />
                </strong>
                <span>{fact.label}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
