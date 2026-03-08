import SectionTitle from "../shared/SectionTitle"
import Button from "../shared/Button"

const features = [
  {
    title: "Hızlı İletişim",
    text: "Talebinizi bekletmeden ele alır, net aksiyon planı ile geri dönüş yaparız.",
    metric: "< 2 saat ilk dönüş",
  },
  {
    title: "Proaktif Destek",
    text: "Sorun çıkmasını beklemeden sistemi izler, kritik noktaları önceden iyileştiririz.",
    metric: "%99,9 sistem sürekliliği hedefi",
  },
  {
    title: "Ölçülebilir Sonuç",
    text: "Her iş adımını raporlayarak süreçte nerede olduğunuzu şeffaf biçimde gösteririz.",
    metric: "Aylık performans raporu",
  },
]

const processSteps = ["Keşif", "Plan", "Uygulama", "Sürekli Destek"]

const trustStats = [
  { label: "Aktif Kurumsal Müşteri", value: "85+" },
  { label: "Tamamlanan Proje", value: "250+" },
  { label: "Destek Memnuniyeti", value: "%96" },
]

export default function WhyUs() {
  return (
    <section className="why-us section reveal-on-scroll reveal-right">
      <div className="container">
        <SectionTitle
          eyebrow="Neden Biz"
          title="Teslim eden değil, süreci yöneten ekip"
          subtitle="İhtiyacı analiz eder, planlar, uygular ve işinizin kesintisiz devam etmesi için yanınızda kalırız."
        />

        <div className="why-us__features">
          {features.map((item, index) => (
            <article
              className={`why-us__card reveal-on-scroll ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`.trim()}
              key={item.title}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="why-us__metric">{item.metric}</span>
            </article>
          ))}
        </div>

        <div className="why-us__process">
          {processSteps.map((step, index) => (
            <div
              className={`why-us__step reveal-on-scroll ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`.trim()}
              key={step}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="why-us__trust">
          {trustStats.map((stat, index) => (
            <article
              className={`why-us__trust-item reveal-on-scroll ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`.trim()}
              key={stat.label}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <div className="why-us__footer reveal-on-scroll reveal-right">
          <p>Süreç planını birlikte çıkaralım, size en uygun modeli netleştirelim.</p>
          <Button to="/iletisim" variant="secondary">
            Ücretsiz Ön Görüşme
          </Button>
        </div>
      </div>
    </section>
  )
}
