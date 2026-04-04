import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"
import PageSeo from "../components/seo/PageSeo"
import supportData from "../data/supportData.json"
import seoData from "../data/seoData.json"
import { getBreadcrumbSchema, getServiceSchema } from "../seo/schema"
import CountUpText from "../components/shared/CountUpText"

const {
  hero,
  highlights,
  areasSection,
  supportAreas,
  processSection,
  processSteps,
  deliverablesSection,
  deliverables,
  scenariosSection,
  supportScenarios,
  cta,
} = supportData

const supportSeo = seoData.support

export default function Support() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Yardým ve Destek", path: supportSeo.path },
  ])

  const serviceSchema = getServiceSchema({
    name: "Yardým ve Destek Hizmetleri",
    description: supportSeo.description,
    path: supportSeo.path,
  })

  return (
    <>
      <PageSeo
        title={supportSeo.title}
        description={supportSeo.description}
        path={supportSeo.path}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <main className="support-page page">
        <section className="section support-page__hero">
          <div className="container support-page__hero-grid">
            <div className="support-page__hero-content">
              <SectionTitle eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

              <p className="support-page__lead">{hero.lead}</p>

              <div className="support-page__hero-actions">
                <Button to="/iletisim">{hero.primaryButton}</Button>
                <Button to="/donanim" variant="secondary">
                  {hero.secondaryButton}
                </Button>
              </div>
            </div>

            <aside className="support-page__hero-panel" aria-label={hero.panelAriaLabel}>
              <ul className="support-page__highlight-list">
                {highlights.map((item) => (
                  <li key={item.label} className="support-page__highlight-item">
                    <strong><CountUpText value={item.value} /></strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section support-page__areas">
          <div className="container">
            <SectionTitle
              eyebrow={areasSection.eyebrow}
              title={areasSection.title}
              subtitle={areasSection.subtitle}
              align="center"
            />

            <div className="support-page__areas-grid">
              {supportAreas.map((item) => (
                <article key={item.title} className="support-page__area-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section support-page__process">
          <div className="container">
            <SectionTitle
              eyebrow={processSection.eyebrow}
              title={processSection.title}
              subtitle={processSection.subtitle}
            />

            <div className="support-page__process-grid">
              {processSteps.map((item) => (
                <article key={item.step} className="support-page__process-card">
                  <span className="support-page__process-step"><CountUpText value={item.step} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section support-page__deliverables">
          <div className="container support-page__deliverables-grid">
            <div>
              <SectionTitle
                eyebrow={deliverablesSection.eyebrow}
                title={deliverablesSection.title}
                subtitle={deliverablesSection.subtitle}
              />
            </div>

            <div className="support-page__deliverables-box">
              <ul className="support-page__deliverables-list">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section support-page__scenarios">
          <div className="container">
            <SectionTitle
              eyebrow={scenariosSection.eyebrow}
              title={scenariosSection.title}
              subtitle={scenariosSection.subtitle}
              align="center"
            />

            <div className="support-page__scenarios-grid">
              {supportScenarios.map((item) => (
                <article key={item.title} className="support-page__scenario-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section support-page__cta">
          <div className="container support-page__cta-box">
            <div>
              <p className="support-page__cta-eyebrow">{cta.eyebrow}</p>
              <h2>{cta.title}</h2>
              <p>{cta.text}</p>
            </div>

            <div className="support-page__cta-actions">
              <Button to="/iletisim">{cta.primaryButton}</Button>
              <Button to="/donanim" variant="secondary">
                {cta.secondaryButton}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

