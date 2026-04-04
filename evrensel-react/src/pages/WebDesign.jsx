import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"
import PageSeo from "../components/seo/PageSeo"
import webDesignData from "../data/webDesignData.json"
import seoData from "../data/seoData.json"
import { getBreadcrumbSchema, getServiceSchema } from "../seo/schema"

const {
  hero,
  highlights,
  servicesSection,
  services,
  processSection,
  processSteps,
  deliverablesSection,
  deliverables,
  referencesSection,
  references,
  cta,
} = webDesignData

const webDesignSeo = seoData.webDesign

export default function WebDesign() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Web Tasarım", path: webDesignSeo.path },
  ])

  const serviceSchema = getServiceSchema({
    name: "Web Tasarım ve Geliştirme Hizmetleri",
    description: webDesignSeo.description,
    path: webDesignSeo.path,
  })

  return (
    <>
      <PageSeo
        title={webDesignSeo.title}
        description={webDesignSeo.description}
        path={webDesignSeo.path}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <main className="web-design-page page">
        <section className="section web-design-page__hero">
          <div className="container web-design-page__hero-grid">
            <div className="web-design-page__hero-content">
              <SectionTitle eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

              <p className="web-design-page__lead">{hero.lead}</p>

              <div className="web-design-page__hero-actions">
                <Button to="/iletisim">{hero.primaryButton}</Button>
                <Button to="/hizmetlerimiz" variant="secondary">
                  {hero.secondaryButton}
                </Button>
              </div>
            </div>

            <aside className="web-design-page__hero-panel" aria-label={hero.panelAriaLabel}>
              <ul className="web-design-page__highlight-list">
                {highlights.map((item) => (
                  <li key={item.label} className="web-design-page__highlight-item">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section web-design-page__services">
          <div className="container">
            <SectionTitle
              eyebrow={servicesSection.eyebrow}
              title={servicesSection.title}
              subtitle={servicesSection.subtitle}
              align="center"
            />

            <div className="web-design-page__services-grid">
              {services.map((item) => (
                <article key={item.title} className="web-design-page__service-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section web-design-page__process">
          <div className="container">
            <SectionTitle
              eyebrow={processSection.eyebrow}
              title={processSection.title}
              subtitle={processSection.subtitle}
            />

            <div className="web-design-page__process-grid">
              {processSteps.map((item) => (
                <article key={item.step} className="web-design-page__process-card">
                  <span className="web-design-page__process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section web-design-page__deliverables">
          <div className="container web-design-page__deliverables-grid">
            <div>
              <SectionTitle
                eyebrow={deliverablesSection.eyebrow}
                title={deliverablesSection.title}
                subtitle={deliverablesSection.subtitle}
              />
            </div>

            <div className="web-design-page__deliverables-box">
              <ul className="web-design-page__deliverables-list">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section web-design-page__references">
          <div className="container">
            <SectionTitle
              eyebrow={referencesSection.eyebrow}
              title={referencesSection.title}
              subtitle={referencesSection.subtitle}
              align="center"
            />

            <div className="web-design-page__references-grid">
              {references.map((item) => (
                <article key={item.name} className="web-design-page__reference-card">
                  <div className="web-design-page__reference-head">
                    <h3>{item.name}</h3>
                    <span>{item.sector}</span>
                  </div>
                  <p className="web-design-page__reference-summary">{item.summary}</p>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section web-design-page__cta">
          <div className="container web-design-page__cta-box">
            <div>
              <p className="web-design-page__cta-eyebrow">{cta.eyebrow}</p>
              <h2>{cta.title}</h2>
              <p>{cta.text}</p>
            </div>

            <div className="web-design-page__cta-actions">
              <Button to="/iletisim">{cta.primaryButton}</Button>
              <Button href="tel:+905551112233" variant="secondary">
                {cta.secondaryButton}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
