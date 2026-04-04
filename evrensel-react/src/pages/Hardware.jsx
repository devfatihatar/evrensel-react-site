import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"
import PageSeo from "../components/seo/PageSeo"
import hardwareData from "../data/hardwareData.json"
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
  casesSection,
  useCases,
  cta,
} = hardwareData

const hardwareSeo = seoData.hardware

export default function Hardware() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Donanım", path: hardwareSeo.path },
  ])

  const serviceSchema = getServiceSchema({
    name: "Donanım ve Altyapı Hizmetleri",
    description: hardwareSeo.description,
    path: hardwareSeo.path,
  })

  return (
    <>
      <PageSeo
        title={hardwareSeo.title}
        description={hardwareSeo.description}
        path={hardwareSeo.path}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <main className="hardware-page page">
        <section className="section hardware-page__hero">
          <div className="container hardware-page__hero-grid">
            <div className="hardware-page__hero-content">
              <SectionTitle eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

              <p className="hardware-page__lead">{hero.lead}</p>

              <div className="hardware-page__hero-actions">
                <Button to="/iletisim">{hero.primaryButton}</Button>
                <Button to="/yardim-destek" variant="secondary">
                  {hero.secondaryButton}
                </Button>
              </div>
            </div>

            <aside className="hardware-page__hero-panel" aria-label={hero.panelAriaLabel}>
              <ul className="hardware-page__highlight-list">
                {highlights.map((item) => (
                  <li key={item.label} className="hardware-page__highlight-item">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section hardware-page__services">
          <div className="container">
            <SectionTitle
              eyebrow={servicesSection.eyebrow}
              title={servicesSection.title}
              subtitle={servicesSection.subtitle}
              align="center"
            />

            <div className="hardware-page__services-grid">
              {services.map((item) => (
                <article key={item.title} className="hardware-page__service-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section hardware-page__process">
          <div className="container">
            <SectionTitle
              eyebrow={processSection.eyebrow}
              title={processSection.title}
              subtitle={processSection.subtitle}
            />

            <div className="hardware-page__process-grid">
              {processSteps.map((item) => (
                <article key={item.step} className="hardware-page__process-card">
                  <span className="hardware-page__process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section hardware-page__deliverables">
          <div className="container hardware-page__deliverables-grid">
            <div>
              <SectionTitle
                eyebrow={deliverablesSection.eyebrow}
                title={deliverablesSection.title}
                subtitle={deliverablesSection.subtitle}
              />
            </div>

            <div className="hardware-page__deliverables-box">
              <ul className="hardware-page__deliverables-list">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section hardware-page__cases">
          <div className="container">
            <SectionTitle
              eyebrow={casesSection.eyebrow}
              title={casesSection.title}
              subtitle={casesSection.subtitle}
              align="center"
            />

            <div className="hardware-page__cases-grid">
              {useCases.map((item) => (
                <article key={item.title} className="hardware-page__case-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section hardware-page__cta">
          <div className="container hardware-page__cta-box">
            <div>
              <p className="hardware-page__cta-eyebrow">{cta.eyebrow}</p>
              <h2>{cta.title}</h2>
              <p>{cta.text}</p>
            </div>

            <div className="hardware-page__cta-actions">
              <Button to="/iletisim">{cta.primaryButton}</Button>
              <Button to="/yardim-destek" variant="secondary">
                {cta.secondaryButton}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
