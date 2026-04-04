import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"
import PageSeo from "../components/seo/PageSeo"
import aboutData from "../data/aboutData.json"
import seoData from "../data/seoData.json"
import { getBreadcrumbSchema } from "../seo/schema"
import CountUpText from "../components/shared/CountUpText"

const {
  hero,
  story,
  timeline,
  principlesSection,
  principles,
  capabilitiesSection,
  capabilities,
  facts,
  modelSection,
  workModel,
  cta,
} = aboutData

const aboutSeo = seoData.about

export default function About() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Hakkýmýzda", path: aboutSeo.path },
  ])

  return (
    <>
      <PageSeo
        title={aboutSeo.title}
        description={aboutSeo.description}
        path={aboutSeo.path}
        jsonLd={[breadcrumbSchema]}
      />

      <main className="about-page page">
        <section className="section about-page__hero">
          <div className="container about-page__hero-grid">
            <div className="about-page__hero-content">
              <SectionTitle eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

              <p className="about-page__lead">{hero.lead}</p>

              <div className="about-page__hero-actions">
                <Button to="/iletisim">{hero.primaryButton}</Button>
                <Button to="/hizmetlerimiz" variant="secondary">
                  {hero.secondaryButton}
                </Button>
              </div>
            </div>

            <aside className="about-page__hero-panel" aria-label={hero.panelAriaLabel}>
              <p className="about-page__panel-label">{hero.panelLabel}</p>
              <ul className="about-page__facts">
                {facts.map((fact) => (
                  <li key={fact.label} className="about-page__fact">
                    <strong><CountUpText value={fact.value} /></strong>
                    <span>{fact.label}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section about-page__story">
          <div className="container about-page__story-grid">
            <div>
              <SectionTitle eyebrow={story.eyebrow} title={story.title} subtitle={story.subtitle} />
            </div>

            <div className="about-page__story-text">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="container">
            <div className="about-page__timeline">
              {timeline.map((item) => (
                <article key={`${item.year}-${item.title}`} className="about-page__timeline-item">
                  <span className="about-page__timeline-year"><CountUpText value={item.year} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-page__principles">
          <div className="container">
            <SectionTitle
              eyebrow={principlesSection.eyebrow}
              title={principlesSection.title}
              subtitle={principlesSection.subtitle}
              align="center"
            />

            <div className="about-page__principles-grid">
              {principles.map((item) => (
                <article key={item.title} className="about-page__principle-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-page__capabilities">
          <div className="container about-page__capabilities-grid">
            <div>
              <SectionTitle
                eyebrow={capabilitiesSection.eyebrow}
                title={capabilitiesSection.title}
                subtitle={capabilitiesSection.subtitle}
              />
            </div>

            <div className="about-page__capability-box">
              <ul className="about-page__capability-list">
                {capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section about-page__model">
          <div className="container">
            <SectionTitle eyebrow={modelSection.eyebrow} title={modelSection.title} subtitle={modelSection.subtitle} />

            <div className="about-page__model-grid">
              {workModel.map((item) => (
                <article key={item.step} className="about-page__model-card">
                  <span className="about-page__model-step"><CountUpText value={item.step} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-page__cta">
          <div className="container about-page__cta-box">
            <div>
              <p className="about-page__cta-eyebrow">{cta.eyebrow}</p>
              <h2>{cta.title}</h2>
              <p>{cta.text}</p>
            </div>

            <div className="about-page__cta-actions">
              <Button to="/iletisim">{cta.primaryButton}</Button>
              <Button to="/hizmetlerimiz" variant="secondary">
                {cta.secondaryButton}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

