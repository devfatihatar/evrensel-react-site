import { Navigate, useParams } from "react-router-dom"
import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"
import services from "../data/servicesData.json"

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return <Navigate to="/hizmetlerimiz" replace />
  }

  return (
    <main className="services-page page">
      <section className="section services-page__hero">
        <div className="container services-page__detail-hero">
          <SectionTitle
            eyebrow={service.eyebrow}
            title={service.title}
            subtitle={service.shortDescription}
          />

          <p className="services-page__lead">{service.summary}</p>

          <div className="services-page__hero-actions">
            <Button to="/iletisim">Görüşme Planla</Button>
            <Button to="/hizmetlerimiz" variant="secondary">
              Tüm Hizmetlere Dön
            </Button>
          </div>
        </div>
      </section>

      <section className="section services-page__detail-body">
        <div className="container services-page__detail-grid">
          <article className="services-page__detail-box">
            <h3>Hizmet Kapsamı</h3>
            <ul className="services-page__detail-list">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="services-page__detail-box">
            <h3>Çalışma Akışı</h3>
            <ol className="services-page__detail-steps">
              {service.process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>
        </div>
      </section>
    </main>
  )
}
