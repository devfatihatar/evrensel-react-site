import SectionTitle from "../components/shared/SectionTitle"

export default function About() {
  return (
    <main className="about-page page">
      <section className="section about-page__hero">
        <div className="container">
          <SectionTitle
            eyebrow="Hakkımızda"
            title="Evrensel Bilişim"
            subtitle="İşletmelerin teknoloji altyapısını güçlendirmek için çalışıyoruz."
          />
        </div>
      </section>
    </main>
  )
}
