import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"

const highlights = [
  { value: "Hızlı", label: "Talep ve arızalara net geri dönüş süreci" },
  { value: "Takipli", label: "Sorun çözülene kadar devam eden destek yaklaşımı" },
  { value: "Düzenli", label: "Bakım ve kontrol odaklı sürdürülebilir hizmet" },
]

const supportAreas = [
  {
    title: "Uzaktan Teknik Destek",
    text: "Yazılım, bağlantı, kullanıcı hatası ve temel sistem sorunlarında hızlı uzaktan müdahale sağlıyoruz.",
  },
  {
    title: "Yerinde Destek",
    text: "Uzaktan çözülemeyen donanım, ağ veya ofis içi operasyon sorunlarında sahada destek veriyoruz.",
  },
  {
    title: "Periyodik Bakım",
    text: "Sistemlerin sadece arızada değil, düzenli bakım ve kontrolle daha sağlıklı çalışmasını hedefliyoruz.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Talebi Kayda Alırız",
    text: "Sorunun kapsamını, kullanıcı etkisini ve öncelik seviyesini hızlıca netleştiririz.",
  },
  {
    step: "02",
    title: "Müdahale Planını Belirleriz",
    text: "Uzaktan mı, yerinde mi, anlık mı yoksa planlı mı ilerlemek gerektiğini doğru şekilde ayırırız.",
  },
  {
    step: "03",
    title: "Çözer ve Takip Ederiz",
    text: "Sorunu giderdikten sonra tekrar etmemesi için gerekli kontrol ve yönlendirmeleri tamamlarız.",
  },
]

const deliverables = [
  "Arıza ve talep karşılama süreci",
  "Uzaktan erişimle hızlı müdahale",
  "Yerinde destek organizasyonu",
  "Periyodik bakım ve kontrol planı",
  "Kullanıcı kaynaklı sorunlarda yönlendirme",
  "Tekrar eden sorunlar için iyileştirme önerisi",
]

const supportScenarios = [
  {
    title: "Günlük Operasyon Sorunları",
    text: "Yavaşlama, bağlantı kopması, yazıcı erişimi veya kullanıcı bazlı sorunlarda hızlı müdahale sağlıyoruz.",
  },
  {
    title: "Kritik İş Kesintileri",
    text: "İş akışını durduran daha acil durumlarda öncelik verip sistemi ayağa kaldırmaya odaklanıyoruz.",
  },
  {
    title: "Düzenli Destek İhtiyacı",
    text: "Sürekli teknik ekibi olmayan işletmeler için düzenli dış kaynak destek modeli kuruyoruz.",
  },
]

export default function Support() {
  return (
    <main className="support-page page">
      <section className="section support-page__hero">
        <div className="container support-page__hero-grid">
          <div className="support-page__hero-content">
            <SectionTitle
              eyebrow="Yardım ve Destek"
              title="Sorun çıktığında ulaşılabilen değil, süreci yöneten destek yapısı kuruyoruz"
              subtitle="Teknik destek hizmetini sadece arıza çözümü olarak değil; iş sürekliliğini koruyan operasyonel bir sistem olarak ele alıyoruz."
            />

            <p className="support-page__lead">
              İyi bir destek hizmeti, kullanıcının sorunu bildirmesiyle başlayıp çözümün
              kalıcı hale gelmesiyle tamamlanır. Amacımız anlık müdahale kadar, tekrar
              eden sorunları azaltan ve işletmenin ritmini koruyan bir destek modeli kurmaktır.
            </p>

            <div className="support-page__hero-actions">
              <Button to="/iletisim">Destek Talebi Oluştur</Button>
              <Button to="/donanim" variant="secondary">
                Donanım Tarafını Gör
              </Button>
            </div>
          </div>

          <aside className="support-page__hero-panel" aria-label="Destek hizmet özeti">
            <ul className="support-page__highlight-list">
              {highlights.map((item) => (
                <li key={item.label} className="support-page__highlight-item">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section support-page__areas">
        <div className="container">
          <SectionTitle
            eyebrow="Destek Alanları"
            title="Hangi başlıklarda yardım sağlıyoruz?"
            subtitle="Sorunun türüne göre uzaktan destek, yerinde müdahale ve düzenli bakım modelleriyle ilerliyoruz."
            align="center"
          />

          <div className="support-page__areas-grid">
            {supportAreas.map((item) => (
              <article key={item.title} className="support-page__area-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section support-page__process">
        <div className="container">
          <SectionTitle
            eyebrow="Destek Süreci"
            title="Talep geldiğinde nasıl ilerliyoruz?"
            subtitle="Önceliği doğru belirleyip sorunun türüne göre hızlı ama kontrollü bir müdahale akışı kuruyoruz."
          />

          <div className="support-page__process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="support-page__process-card">
                <span className="support-page__process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section support-page__deliverables">
        <div className="container support-page__deliverables-grid">
          <div>
            <SectionTitle
              eyebrow="Hizmet İçeriği"
              title="Destek tarafında neleri kapsıyoruz?"
              subtitle="İhtiyaca göre şekillense de çoğu işletmede aşağıdaki başlıklar temel destek yapısını oluşturur."
            />
          </div>

          <div className="support-page__deliverables-box">
            <ul className="support-page__deliverables-list">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section support-page__scenarios">
        <div className="container">
          <SectionTitle
            eyebrow="Uygun Senaryolar"
            title="Bu hizmet en çok hangi durumlarda öne çıkar?"
            subtitle="Teknik ekibi sınırlı olan veya operasyonunu aksatmadan destek almak isteyen işletmeler için yapılandırılmıştır."
            align="center"
          />

          <div className="support-page__scenarios-grid">
            {supportScenarios.map((item) => (
              <article key={item.title} className="support-page__scenario-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section support-page__cta">
        <div className="container support-page__cta-box">
          <div>
            <p className="support-page__cta-eyebrow">Sonraki Adım</p>
            <h2>İstersen destek hizmetini çalışma modeline göre daha net anlatalım</h2>
            <p>
              Uzaktan mı çalışıyorsunuz, yerinde destek veriyor musunuz, bakım anlaşması
              var mı gibi detaylar netleştikçe bu sayfayı çok daha güçlü hale getirebiliriz.
            </p>
          </div>

          <div className="support-page__cta-actions">
            <Button to="/iletisim">Destek İçin Ulaş</Button>
            <Button to="/donanim" variant="secondary">
              Donanım Hizmetine Geç
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
