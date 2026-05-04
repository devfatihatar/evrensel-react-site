import SectionTitle from "../shared/SectionTitle"

export default function AboutCapabilities({ capabilitiesSection, capabilities }) {
  return (
    <section className="section about-page__capabilities">
      <div className="container about-page__capabilities-grid">
        <div className="homepage-shared-header">
          <SectionTitle
            eyebrow={capabilitiesSection.eyebrow}
            title={capabilitiesSection.title}
            subtitle={capabilitiesSection.subtitle}
          />
        </div>

        <div className="about-page__capability-box homepage-shared-card">
          <ul className="about-page__capability-list">
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
