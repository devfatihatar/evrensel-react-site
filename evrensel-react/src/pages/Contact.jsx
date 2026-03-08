import SectionTitle from "../components/shared/SectionTitle"

export default function Contact() {
  return (
    <main className="contact-page page">
      <section className="section contact-page__hero">
        <div className="container">
          <SectionTitle
            eyebrow="İletişim"
            title="Bize ulaşın"
            subtitle="Projenizi kısa bir özetle paylaşın, size uygun yol haritasını oluşturalım."
          />
        </div>
      </section>
    </main>
  )
}
