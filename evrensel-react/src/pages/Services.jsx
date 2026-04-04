import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"
import PageSeo from "../components/seo/PageSeo"
import services from "../data/servicesData.json"
import servicesPageData from "../data/servicesPageData.json"
import seoData from "../data/seoData.json"
import { getBreadcrumbSchema } from "../seo/schema"

const { hero, catalog, benefitsSection, benefits } = servicesPageData
const servicesSeo = seoData.services

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetlerimiz", path: servicesSeo.path },
  ])

  return (
    <>
      <PageSeo
        title={servicesSeo.title}
        description={servicesSeo.description}
        path={servicesSeo.path}
        jsonLd={[breadcrumbSchema]}
      />

      <main className="services-page page">
        <section className="section services-page__hero">
          <div className="container services-page__hero-grid">
            <div className="services-page__hero-content">
              <SectionTitle eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

              <p className="services-page__lead">{hero.lead}</p>

              <div className="services-page__hero-actions">
                <Button to="/iletisim">{hero.primaryButton}</Button>
                <Button href="tel:+905551112233" variant="secondary">
                  {hero.secondaryButton}
                </Button>
              </div>
            </div>

            <aside className="services-page__hero-panel" aria-label={hero.panelAriaLabel}>
              <ul className="services-page__hero-list">
                {services.map((service) => (
                  <li key={service.slug} className="services-page__hero-item">
                    <strong>{service.eyebrow}</strong>
                    <span>{service.shortDescription}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section services-page__catalog">
          <div className="container">
            <SectionTitle
              eyebrow={catalog.eyebrow}
              title={catalog.title}
              subtitle={catalog.subtitle}
              align="center"
            />

            <div className="services-page__grid">
              {services.map((service) => (
                <article key={service.slug} className="services-page__card">
                  <p className="services-page__card-eyebrow">{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>

                  <ul className="services-page__card-list">
                    {service.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <Button to={`/hizmetlerimiz/${service.slug}`} variant="secondary">
                    {catalog.detailButton}
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-page__benefits">
          <div className="container">
            <SectionTitle
              eyebrow={benefitsSection.eyebrow}
              title={benefitsSection.title}
              subtitle={benefitsSection.subtitle}
              align="center"
            />

            <div className="services-page__benefits-grid">
              {benefits.map((item) => (
                <article key={item.title} className="services-page__benefit-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
