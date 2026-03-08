import { useParams } from "react-router-dom"
import SectionTitle from "../components/shared/SectionTitle"

export default function ServiceDetail() {
  const { slug } = useParams()

  return (
    <main className="services-page page">
      <section className="section services-page__hero">
        <div className="container">
          <SectionTitle
            eyebrow="Hizmet Detayı"
            title={slug ? `${slug} hizmeti` : "Hizmet detayı"}
            subtitle="Bu alan seçilen hizmetin detay içeriğini göstermek için ayrılmıştır."
          />
        </div>
      </section>
    </main>
  )
}
