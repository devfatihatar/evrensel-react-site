import SectionTitle from "../shared/SectionTitle"
import Button from "../shared/Button"

const stats = [
  { label: "Yıl Tecrübe", value: "12+" },
  { label: "Tamamlanan Proje", value: "250+" },
  { label: "Destek Erişimi", value: "7/24" },
]

const serviceCards = [
  {
    tag: "Web",
    title: "Web Tasarım ve Geliştirme",
    text: "Markanıza özel, hızlı ve yönetilebilir web deneyimleri oluşturuyoruz.",
    points: ["Kurumsal arayüz tasarımı", "Mobil uyumlu altyapı", "SEO odaklı teknik kurulum"],
  },
  {
    tag: "Sistem",
    title: "Donanım ve Altyapı",
    text: "Ofis ve operasyon süreçlerinizi kesintisiz çalışacak şekilde yapılandırıyoruz.",
    points: ["Cihaz ve ağ planlaması", "Kurulum ve devreye alma", "Performans ve güvenlik kontrolü"],
  },
  {
    tag: "Servis",
    title: "Teknik Destek Süreçleri",
    text: "Hızlı müdahale ve sürdürülebilir bakım modeli ile işinizi koruyoruz.",
    points: ["Uzaktan ve yerinde destek", "Önleyici bakım yaklaşımı", "Arıza ve talep takibi"],
  },
]

export default function Services() {
  return (
    <section className="services section reveal-on-scroll reveal-left">
      <div className="container services__container">
        <SectionTitle
          eyebrow="Hizmetler"
          title="İşinizi hızlandıran teknoloji çözümleri"
          subtitle="Tasarım, altyapı ve destek süreçlerini tek merkezden yönetebilmeniz için uçtan uca çalışıyoruz."
          align="center"
        />

        <div className="services__stats">
          {stats.map((stat) => (
            <article className="services__stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <div className="services__grid">
          {serviceCards.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__tag">{service.tag}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul className="service-card__list">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href="/hizmetlerimiz" className="service-card__link">
                Detayları İncele
              </a>
            </article>
          ))}
        </div>

        <div className="services__footer">
          <Button to="/hizmetlerimiz" variant="primary">
            Tüm Hizmetleri Gör
          </Button>
        </div>
      </div>
    </section>
  )
}
