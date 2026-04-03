import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"
import services from "../data/servicesData.json"

const benefits = [
  {
    title: "Tek Noktadan Yönetim",
    text: "Web, donanım ve destek taraflarını ayrı ayrı takip etmek yerine tek ekip üzerinden ilerleyebilirsiniz.",
  },
  {
    title: "Daha Net İletişim",
    text: "İhtiyaç, kapsam ve teslim başlıklarını baştan netleştirerek süreci daha görünür hale getiriyoruz.",
  },
  {
    title: "Sürdürülebilir Yapı",
    text: "Kurulan sistemlerin sadece bugün değil, sonraki bakım ve geliştirme süreçlerinde de yönetilebilir olmasına odaklanıyoruz.",
  },
]

export default function ServicesPage() {
  return (
    <main className="services-page page">
      <section className="section services-page__hero">
        <div className="container services-page__hero-grid">
          <div className="services-page__hero-content">
            <SectionTitle
              eyebrow="Hizmetlerimiz"
              title="İşletmeniz için uçtan uca teknoloji hizmetleri"
              subtitle="Web tasarımı, donanım altyapısı ve teknik destek taraflarını birbirinden kopuk değil; aynı iş akışının parçaları olarak ele alıyoruz."
            />

            <p className="services-page__lead">
              Her işletmenin ihtiyacı farklıdır. Kimi zaman görünürlüğü artıran bir web
              sitesi gerekir, kimi zaman ofis altyapısının düzenlenmesi ya da günlük iş
              akışını koruyacak hızlı teknik destek. Biz bu başlıkları tek bir çatı altında sunuyoruz.
            </p>

            <div className="services-page__hero-actions">
              <Button to="/iletisim">İhtiyacınızı Konuşalım</Button>
              <Button href="tel:+905551112233" variant="secondary">
                Bizi Arayın
              </Button>
            </div>
          </div>

          <aside className="services-page__hero-panel" aria-label="Hizmet özeti">
            <ul className="services-page__hero-list">
              {services.map((service) => (
                <li key={service.slug} className="services-page__hero-item">
                  <strong>{service.eyebrow}</strong>
                  <span>{service.shortDescription}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section services-page__catalog">
        <div className="container">
          <SectionTitle
            eyebrow="Hizmet Kataloğu"
            title="Ana hizmet alanlarımız"
            subtitle="Aşağıdaki başlıklar, en sık çalıştığımız ana hizmet kategorilerini özetler."
            align="center"
          />

          <div className="services-page__grid">
            {services.map((service) => (
              <article key={service.slug} className="services-page__card">
                <p className="services-page__card-eyebrow">{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>

                <ul className="services-page__card-list">
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Button to={`/hizmetlerimiz/${service.slug}`} variant="secondary">
                  Detayları Gör
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-page__benefits">
        <div className="container">
          <SectionTitle
            eyebrow="Neden Tek Çatı?"
            title="Parçalı hizmet yerine bütünlüklü yaklaşım"
            subtitle="Farklı teknik ihtiyaçlar aynı işletme düzeninin parçasıdır; bu yüzden bunları birlikte düşünmek daha sağlıklı sonuç verir."
            align="center"
          />

          <div className="services-page__benefits-grid">
            {benefits.map((item) => (
              <article key={item.title} className="services-page__benefit-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
