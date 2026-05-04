import { Navigate, useParams } from "react-router-dom"
import Button from "../components/shared/Button"
import BreadcrumbTrail from "../components/shared/BreadcrumbTrail"
import PageSeo from "../components/seo/PageSeo"
import services from "../data/servicesData.json"
import serviceDetailData from "../data/serviceDetailData.json"
import seoData from "../data/seoData.json"
import { getBreadcrumbSchema, getServiceSchema } from "../seo/schema"

const {
  primaryButton,
  secondaryButton,
  includesTitle,
  processTitle,
  includesEyebrow,
  processEyebrow,
  homeBreadcrumb,
} = serviceDetailData
const serviceDetailSeo = seoData.serviceDetail

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return <Navigate to="/hizmetlerimiz" replace />
  }

  const path = `/hizmetlerimiz/${service.slug}`
  const title = `${service.title} ${serviceDetailSeo.titleSuffix}`
  const description = `${serviceDetailSeo.descriptionPrefix} ${service.shortDescription}`

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: serviceDetailSeo.breadcrumbServices, path: "/hizmetlerimiz" },
    { name: service.title, path },
  ])

  const serviceSchema = getServiceSchema({
    name: service.title,
    description: service.shortDescription,
    path,
  })

  return (
    <>
      <PageSeo
        title={title}
        description={description}
        path={path}
        type="article"
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <main className="services-page page">
        <section className="section services-page__detail-hero-section reveal-on-scroll">
          <div className="container services-page__catalog-inner">
            <div className="services-page__detail-hero homepage-shared-shell">
              <BreadcrumbTrail
                items={[
                  { label: homeBreadcrumb, to: "/" },
                  { label: serviceDetailSeo.breadcrumbServices, to: "/hizmetlerimiz" },
                  { label: service.title },
                ]}
              />

              <div className="services-page__detail-hero-grid">
                <div className="services-page__detail-header homepage-shared-header">
                  <p className="services-page__eyebrow homepage-shared-eyebrow">{service.eyebrow}</p>
                  <h1>{service.title}</h1>
                  <p>{service.shortDescription}</p>
                  <p>{service.summary}</p>
                </div>

                <aside className="services-page__detail-highlights" aria-label="Hizmet öne çıkanları">
                  {service.highlights.map((item, index) => (
                    <div key={item} className="services-page__detail-highlight homepage-shared-card">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </aside>
              </div>

              <div className="services-page__hero-actions">
                <Button to="/iletisim">{primaryButton}</Button>
                <Button to="/hizmetlerimiz" variant="secondary">
                  {secondaryButton}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-page__detail-body reveal-on-scroll">
          <div className="container services-page__catalog-inner">
            <div className="services-page__detail-grid">
              <article className="services-page__detail-box homepage-shared-shell">
                <div className="services-page__detail-box-header homepage-shared-header">
                  <p className="services-page__eyebrow homepage-shared-eyebrow">{includesEyebrow}</p>
                  <h2>{includesTitle}</h2>
                </div>

                <ul className="services-page__detail-list">
                  {service.includes.map((item, index) => (
                    <li key={item} className="homepage-shared-card">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="services-page__detail-box homepage-shared-shell">
                <div className="services-page__detail-box-header homepage-shared-header">
                  <p className="services-page__eyebrow homepage-shared-eyebrow">{processEyebrow}</p>
                  <h2>{processTitle}</h2>
                </div>

                <ol className="services-page__detail-steps">
                  {service.process.map((item, index) => (
                    <li key={item} className="homepage-shared-card">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
