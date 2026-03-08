import SectionTitle from "../components/shared/SectionTitle"

export default function ServicesPage() {
  return (
    <main className="services-page page">
      <section className="section services-page__hero">
        <div className="container">
          <SectionTitle
            eyebrow="Hizmetlerimiz"
            title="Uçtan uca teknoloji desteği"
            subtitle="Web, donanım ve operasyonel destek hizmetlerini tek çatı altında sunuyoruz."
          />
        </div>
      </section>
    </main>
  )
}
