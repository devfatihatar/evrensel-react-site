import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"

const timeline = [
  {
    year: "2012",
    title: "Başlangıç",
    text: "Yerel işletmelere teknik servis, bilgisayar bakımı ve temel ağ kurulumlarıyla hizmet vermeye başladık.",
  },
  {
    year: "2017",
    title: "Hizmet Alanı Genişledi",
    text: "Donanım desteğini web çözümleri, kurumsal e-posta, yedekleme ve bakım süreçleriyle birleştirdik.",
  },
  {
    year: "2021",
    title: "Süreç Odaklı Yapı",
    text: "Tek seferlik işler yerine ölçülebilir teslimat, düzenli raporlama ve sürdürülebilir destek modeline geçtik.",
  },
  {
    year: "Bugün",
    title: "Uçtan Uca Partnerlik",
    text: "Web, altyapı ve teknik destek taraflarını tek çatı altında toplayarak işletmelere daha net ve hızlı çözümler sunuyoruz.",
  },
]

const principles = [
  {
    title: "Net İletişim",
    text: "Teknik konuları karmaşıklaştırmadan anlatır, ne yapılacağını ve neden yapılacağını açıkça paylaşırız.",
  },
  {
    title: "Sahiplenme",
    text: "İşi teslim edip geri çekilen değil, sistemin sorumluluğunu süreç boyunca taşıyan ekip gibi çalışırız.",
  },
  {
    title: "Sürdürülebilirlik",
    text: "Kısa vadeli çözümler yerine bakımı yapılabilir, geliştirilebilir ve devredilebilir altyapılar kurarız.",
  },
]

const capabilities = [
  "Kurumsal web tasarım ve geliştirme",
  "Hosting, domain ve teknik yayın süreçleri",
  "Bilgisayar, çevre birimi ve ofis altyapısı kurulumu",
  "Ağ, modem, yazıcı ve temel sistem yapılandırmaları",
  "Uzaktan ve yerinde teknik destek operasyonu",
  "Bakım, güncelleme, yedekleme ve iyileştirme planı",
]

const facts = [
  { value: "32+", label: "Yıllık sektör deneyimi" },
  { value: "500+", label: "Tamamlanan iş ve proje" },
  { value: "Tek ekip", label: "Web + donanım + destek yönetimi" },
]

const workModel = [
  {
    step: "01",
    title: "İhtiyacı Dinleriz",
    text: "Firmanızın mevcut durumunu, darboğazlarını ve önceliklerini anlamadan çözüm önermeyiz.",
  },
  {
    step: "02",
    title: "Planı Netleştiririz",
    text: "Kapsamı, teslim kalemlerini, sorumlulukları ve gerekiyorsa etapları baştan belirleriz.",
  },
  {
    step: "03",
    title: "Uygular ve Takip Ederiz",
    text: "Kurulum, yayın, test ve destek adımlarını tek bir akış içinde yönetiriz.",
  },
]

export default function About() {
  return (
    <main className="about-page page">
      <section className="section about-page__hero">
        <div className="container about-page__hero-grid">
          <div className="about-page__hero-content">
            <SectionTitle
              eyebrow="Hakkımızda"
              title="İşletmeler için güven veren bir teknoloji çalışma modeli kuruyoruz"
              subtitle="Evrensel Bilişim; web çözümleri, donanım altyapısı ve teknik destek süreçlerini tek noktadan yöneten kurumsal çözüm ortağıdır."
            />

            <p className="about-page__lead">
              Bizim için iyi hizmet sadece teknik işi tamamlamak değildir. Süreci
              anlaşılır kılmak, doğru öncelikleri belirlemek ve işletmenin günlük
              akışını aksatmadan ilerlemek en az teknik kalite kadar önemlidir.
            </p>

            <div className="about-page__hero-actions">
              <Button to="/iletisim">Bizimle İletişime Geçin</Button>
              <Button to="/hizmetlerimiz" variant="secondary">
                Hizmetlerimizi İnceleyin
              </Button>
            </div>
          </div>

          <aside className="about-page__hero-panel" aria-label="Şirket özeti">
            <p className="about-page__panel-label">Kurumsal Bakış</p>
            <ul className="about-page__facts">
              {facts.map((fact) => (
                <li key={fact.label} className="about-page__fact">
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section about-page__story">
        <div className="container about-page__story-grid">
          <div>
            <SectionTitle
              eyebrow="Tarihçe"
              title="Yerel teknik destekten kurumsal çözüm ortaklığına"
              subtitle="Büyümemizi tek bir hizmete değil, işletmelerin gerçek ihtiyaçlarına kulak vermeye borçluyuz."
            />
          </div>

          <div className="about-page__story-text">
            <p>
              İlk yıllarda odak noktamız arıza çözen ve sistemi ayağa kaldıran bir
              teknik destek yapısıydı. Zaman içinde gördük ki işletmelerin ihtiyacı
              sadece müdahale değil; planlama, standardizasyon ve sürdürülebilirlik.
            </p>
            <p>
              Bu nedenle hizmet yapımızı web projeleri, altyapı kurulumları ve
              düzenli bakım süreçleriyle genişlettik. Bugün müşterilerimizle
              çalışırken parçalı tedarik modeli yerine, sorumluluğu net olan tek
              bir ekip gibi hareket ediyoruz.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="about-page__timeline">
            {timeline.map((item) => (
              <article key={`${item.year}-${item.title}`} className="about-page__timeline-item">
                <span className="about-page__timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-page__principles">
        <div className="container">
          <SectionTitle
            eyebrow="Yaklaşımımız"
            title="Nasıl çalıştığımız, ne yaptığımız kadar önemlidir"
            subtitle="İş akışımızı şekillendiren temel yaklaşım; netlik, disiplin ve sürdürülebilir teslimattır."
            align="center"
          />

          <div className="about-page__principles-grid">
            {principles.map((item) => (
              <article key={item.title} className="about-page__principle-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-page__capabilities">
        <div className="container about-page__capabilities-grid">
          <div>
            <SectionTitle
              eyebrow="Yetkinlik Alanları"
              title="Teknik tarafı birbirinden kopuk değil, birlikte ele alıyoruz"
              subtitle="İşletmeler için en verimli yapı; web, sistem ve destek süreçlerinin tek bir plan içinde yönetilmesidir."
            />
          </div>

          <div className="about-page__capability-box">
            <ul className="about-page__capability-list">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section about-page__model">
        <div className="container">
          <SectionTitle
            eyebrow="Çalışma Modeli"
            title="Projeleri nasıl ele alıyoruz?"
            subtitle="İlk görüşmeden teslimata kadar sade, takip edilebilir ve kontrollü bir akış kuruyoruz."
          />

          <div className="about-page__model-grid">
            {workModel.map((item) => (
              <article key={item.step} className="about-page__model-card">
                <span className="about-page__model-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-page__cta">
        <div className="container about-page__cta-box">
          <div>
            <p className="about-page__cta-eyebrow">Birlikte Çalışalım</p>
            <h2>İhtiyacınızı konuşalım, size uygun yapıyı birlikte netleştirelim</h2>
            <p>
              Bu metinler başlangıç taslağı olarak hazırlandı. İstersen bir sonraki
              adımda dili daha resmi, daha sıcak ya da daha teknik bir tona çekebilirim.
            </p>
          </div>

          <div className="about-page__cta-actions">
            <Button to="/iletisim">Toplantı Planla</Button>
            <Button to="/hizmetlerimiz" variant="secondary">
              Hizmetlere Git
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
