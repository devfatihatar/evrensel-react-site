import SectionTitle from "../components/shared/SectionTitle"

export default function WebDesign() {
  return (
    <main className="web-design-page page">
      <section className="section web-design-page__hero">
        <div className="container">
          <SectionTitle
            eyebrow="Web Tasarım"
            title="Kurumsal web deneyimi"
            subtitle="Markanızı yansıtan, hızlı ve mobil uyumlu siteler üretiriz."
          />
        </div>
      </section>
    </main>
  )
}
