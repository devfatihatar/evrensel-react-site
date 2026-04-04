import { Link, Navigate, useParams } from "react-router-dom"
import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"
import PageSeo from "../components/seo/PageSeo"
import services from "../data/servicesData.json"
import serviceDetailData from "../data/serviceDetailData.json"
import seoData from "../data/seoData.json"
import { getBreadcrumbSchema, getServiceSchema } from "../seo/schema"

const { primaryButton, secondaryButton, includesTitle, processTitle } = serviceDetailData
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
      <PageSeo title={title} description={description} path={path} type="article" jsonLd={[breadcrumbSchema, serviceSchema]} />

      <main className="services-page page">
        <section className="section services-page__hero">
          <div className="container services-page__detail-hero">
            <nav aria-label="Breadcrumb">
              <p style={{ marginBottom: "0.75rem", fontSize: "0.95rem" }}>
                <Link to="/">Ana Sayfa</Link> {" / "}
                <Link to="/hizmetlerimiz">Hizmetlerimiz</Link> {" / "}
                <span>{service.title}</span>
              </p>
            </nav>

            <SectionTitle
              eyebrow={service.eyebrow}
              title={service.title}
              subtitle={service.shortDescription}
            />

            <p className="services-page__lead">{service.summary}</p>

            <div className="services-page__hero-actions">
              <Button to="/iletisim">{primaryButton}</Button>
              <Button to="/hizmetlerimiz" variant="secondary">
                {secondaryButton}
              </Button>
            </div>
          </div>
        </section>

        <section className="section services-page__detail-body">
          <div className="container services-page__detail-grid">
            <article className="services-page__detail-box">
              <h3>{includesTitle}</h3>
              <ul className="services-page__detail-list">
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="services-page__detail-box">
              <h3>{processTitle}</h3>
              <ol className="services-page__detail-steps">
                {service.process.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}
