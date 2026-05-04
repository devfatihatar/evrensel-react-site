import { Link } from "react-router-dom"
import Button from "../shared/Button"
import BreadcrumbTrail from "../shared/BreadcrumbTrail"

export default function ServicesCatalog({
  activeCategory,
  benefits,
  benefitsSection,
  catalog,
  hero,
  labels,
  services,
  serviceShowcaseImages,
}) {
  const relatedServices = activeCategory
    ? services.filter((service) => activeCategory.relatedServices.includes(service.slug))
    : []

  return (
    <>
      {activeCategory ? (
        <section className="section services-page__category reveal-on-scroll">
          <div className="container services-page__catalog-inner">
            <div className="services-page__category-shell homepage-shared-shell">
              <BreadcrumbTrail
                items={[
                  { label: labels.homeBreadcrumb, to: "/" },
                  { label: labels.servicesBreadcrumb, to: "/hizmetlerimiz" },
                  { label: activeCategory.label },
                ]}
              />

              <div className="services-page__category-grid">
                <div className="services-page__category-header homepage-shared-header">
                  <p className="services-page__eyebrow homepage-shared-eyebrow">
                    {activeCategory.eyebrow}
                  </p>
                  <h1>{activeCategory.title}</h1>
                  <p>{activeCategory.description}</p>
                </div>

                <div className="services-page__category-panel">
                  <ul className="services-page__category-list">
                    {activeCategory.items.map((item, index) => (
                      <li key={item} className="homepage-shared-card">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="services-page__related">
                <div className="services-page__related-header">
                  <h2>{labels.relatedTitle}</h2>
                  <p>{labels.relatedText}</p>
                </div>

                <div className="services-page__related-grid">
                  {relatedServices.map((service) => (
                    <article key={service.slug} className="services-page__related-card homepage-shared-card">
                      <p className="services-page__breadcrumb-inline">
                        <span>{labels.servicesBreadcrumb}</span>
                        <span>/</span>
                        <span>{service.eyebrow}</span>
                      </p>
                      <h3>{service.title}</h3>
                      <p>{service.shortDescription}</p>
                      <Button to={`/hizmetlerimiz/${service.slug}`} variant="secondary">
                        Detayları Gör
                      </Button>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="section services-page__hero reveal-on-scroll">
            <div className="container services-page__catalog-inner">
              <div className="services-page__hero-shell homepage-shared-shell">
                <BreadcrumbTrail
                  items={[
                    { label: labels.homeBreadcrumb, to: "/" },
                    { label: labels.servicesBreadcrumb },
                  ]}
                />

                <div className="services-page__intro homepage-shared-header">
                  <p className="services-page__eyebrow homepage-shared-eyebrow">{hero.eyebrow}</p>
                  <h1>{hero.title}</h1>
                  <p>{hero.subtitle}</p>
                  <p>{hero.lead}</p>
                </div>

                <div className="services-page__hero-actions">
                  <Button to="/iletisim">{hero.primaryButton}</Button>
                  <Button to="/iletisim" variant="secondary">
                    {hero.secondaryButton}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="section services-page__catalog reveal-on-scroll">
            <div className="container services-page__catalog-inner">
              <div className="services-page__catalog-shell homepage-shared-shell">
                <div className="services-page__catalog-header homepage-shared-header">
                  <p className="services-page__eyebrow homepage-shared-eyebrow">{catalog.eyebrow}</p>
                  <h2>{catalog.title}</h2>
                  <p>{catalog.subtitle}</p>
                </div>

                <div className="services-page__showcase-list">
                  {services.map((service, index) => (
                    <article
                      key={service.slug}
                      className={`services-page__showcase services-page__showcase--${index % 2 === 0 ? "right" : "left"}`.trim()}
                    >
                      <div className="services-page__showcase-media">
                        <img
                          src={serviceShowcaseImages[index % serviceShowcaseImages.length]}
                          alt={`${service.title} görseli`}
                          className="services-page__showcase-image"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <div className="services-page__showcase-panel">
                        <p className="services-page__breadcrumb-inline">
                          <span>{labels.servicesBreadcrumb}</span>
                          <span>/</span>
                          <span>{service.eyebrow}</span>
                        </p>
                        <h3>{service.title}</h3>
                        <p>{service.shortDescription}</p>

                        <Button to={`/hizmetlerimiz/${service.slug}`} variant="secondary">
                          {catalog.detailButton}
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section services-page__benefits reveal-on-scroll">
            <div className="container services-page__catalog-inner">
              <div className="services-page__benefits-shell homepage-shared-shell">
                <div className="services-page__benefits-header homepage-shared-header">
                  <p className="services-page__eyebrow homepage-shared-eyebrow">
                    {benefitsSection.eyebrow}
                  </p>
                  <h2>{benefitsSection.title}</h2>
                  <p>{benefitsSection.subtitle}</p>
                </div>

                <div className="services-page__benefits-grid">
                  {benefits.map((item, index) => (
                    <article key={item.title} className="services-page__benefit-card homepage-shared-card">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}
