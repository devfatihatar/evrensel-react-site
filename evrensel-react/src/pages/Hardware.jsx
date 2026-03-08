import SectionTitle from "../components/shared/SectionTitle"

export default function Hardware() {
  return (
    <main className="hardware-page page">
      <section className="section hardware-page__hero">
        <div className="container">
          <SectionTitle
            eyebrow="Donanım"
            title="Güvenilir sistem altyapısı"
            subtitle="Kurulum, yenileme ve teknik süreçlerinizde yanınızdayız."
          />
        </div>
      </section>
    </main>
  )
}
