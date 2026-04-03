import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"

const highlights = [
  { value: "Planlı", label: "İhtiyaca göre şekillenen altyapı kurulumu" },
  { value: "Güvenilir", label: "Kesintiyi azaltan donanım ve ağ düzeni" },
  { value: "Sürdürülebilir", label: "Bakımı ve takibi kolay sistem yapısı" },
]

const services = [
  {
    title: "Bilgisayar ve Çevre Birimi Kurulumu",
    text: "Ofis içinde ihtiyaç duyulan masaüstü, dizüstü, yazıcı ve çevre birimlerini düzenli bir yapı içinde kuruyoruz.",
  },
  {
    title: "Ağ ve Ofis Altyapısı",
    text: "İnternet, modem, switch, kablolama ve temel ağ ihtiyaçlarını iş akışınızı aksatmayacak şekilde planlıyoruz.",
  },
  {
    title: "Yenileme ve İyileştirme",
    text: "Yavaşlayan, dağınık hale gelen ya da eskiyen sistemleri yeniden düzenleyip daha verimli hale getiriyoruz.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Mevcut Yapıyı İnceleriz",
    text: "Cihaz sayısı, kullanım şekli, darboğazlar ve riskli noktalar üzerinden mevcut altyapıyı analiz ederiz.",
  },
  {
    step: "02",
    title: "İhtiyaca Uygun Plan Kurarız",
    text: "Gereksiz maliyet oluşturmadan doğru cihaz, doğru bağlantı ve doğru kurulum senaryosunu belirleriz.",
  },
  {
    step: "03",
    title: "Kurulum ve Devreye Alma",
    text: "Kurulum, test, kullanıcıya teslim ve temel kullanım düzenini tek bir akış içinde tamamlarız.",
  },
]

const deliverables = [
  "Bilgisayar ve donanım envanteri planı",
  "Ofis içi ağ ve bağlantı düzeni",
  "Yazıcı, tarayıcı ve çevre birimi kurulumu",
  "Temel güvenlik ve erişim yapılandırmaları",
  "Kurulum sonrası test ve son kontrol",
  "Gerekirse bakım ve yenileme öneri planı",
]

const useCases = [
  {
    title: "Yeni Ofis Kurulumu",
    text: "Sıfırdan açılan ofislerde cihaz, internet, ağ ve çevre birimi yapısını tek merkezden kuruyoruz.",
  },
  {
    title: "Büyüyen Ekip Yapısı",
    text: "Artan kullanıcı ve cihaz sayısına göre altyapıyı yeniden düzenleyip yönetilebilir hale getiriyoruz.",
  },
  {
    title: "Eskiyen Sistemlerin Toparlanması",
    text: "Parçalı ilerlemiş, takibi zorlaşmış veya sık arıza veren yapılarda sadeleştirme ve yenileme yapıyoruz.",
  },
]

export default function Hardware() {
  return (
    <main className="hardware-page page">
      <section className="section hardware-page__hero">
        <div className="container hardware-page__hero-grid">
          <div className="hardware-page__hero-content">
            <SectionTitle
              eyebrow="Donanım Hizmetleri"
              title="Ofisiniz için düzenli, güvenilir ve yönetilebilir sistem altyapıları kuruyoruz"
              subtitle="Donanım hizmetlerini sadece cihaz temini olarak değil; iş sürekliliğini destekleyen planlı bir altyapı çalışması olarak ele alıyoruz."
            />

            <p className="hardware-page__lead">
              İşletmelerde verim kaybının önemli bir kısmı dağınık kurulumlardan,
              eskiyen cihazlardan ve belirsiz ağ yapılarından kaynaklanır. Donanım
              tarafında hedefimiz sadece kurmak değil; sorunsuz çalışan, gerektiğinde
              büyüyebilen ve takibi kolay bir yapı kurmaktır.
            </p>

            <div className="hardware-page__hero-actions">
              <Button to="/iletisim">İhtiyacınızı Konuşalım</Button>
              <Button to="/yardim-destek" variant="secondary">
                Destek Tarafını Gör
              </Button>
            </div>
          </div>

          <aside className="hardware-page__hero-panel" aria-label="Donanım hizmet özeti">
            <ul className="hardware-page__highlight-list">
              {highlights.map((item) => (
                <li key={item.label} className="hardware-page__highlight-item">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section hardware-page__services">
        <div className="container">
          <SectionTitle
            eyebrow="Hizmet Kapsamı"
            title="Donanım tarafında hangi başlıklarda çalışıyoruz?"
            subtitle="Kurulumdan yenilemeye, ağ düzeninden çevre birimlerine kadar ihtiyaç duyulan ana başlıkları uçtan uca yönetiyoruz."
            align="center"
          />

          <div className="hardware-page__services-grid">
            {services.map((item) => (
              <article key={item.title} className="hardware-page__service-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section hardware-page__process">
        <div className="container">
          <SectionTitle
            eyebrow="Süreç"
            title="Kurulum işlerini nasıl ele alıyoruz?"
            subtitle="Önce mevcut durumu netleştiriyor, ardından ihtiyaçla uyumlu altyapıyı planlayıp devreye alıyoruz."
          />

          <div className="hardware-page__process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="hardware-page__process-card">
                <span className="hardware-page__process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section hardware-page__deliverables">
        <div className="container hardware-page__deliverables-grid">
          <div>
            <SectionTitle
              eyebrow="Teslim Başlıkları"
              title="Projede genelde neleri kapsıyoruz?"
              subtitle="İşin büyüklüğüne göre değişmekle birlikte çoğu donanım çalışmasında aşağıdaki alanları birlikte ele alıyoruz."
            />
          </div>

          <div className="hardware-page__deliverables-box">
            <ul className="hardware-page__deliverables-list">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section hardware-page__cases">
        <div className="container">
          <SectionTitle
            eyebrow="Uygun Senaryolar"
            title="Bu hizmet en çok hangi durumlarda değer üretir?"
            subtitle="Aşağıdaki senaryolar, donanım ve altyapı tarafında en sık karşılaşılan ihtiyaç alanlarını gösterir."
            align="center"
          />

          <div className="hardware-page__cases-grid">
            {useCases.map((item) => (
              <article key={item.title} className="hardware-page__case-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section hardware-page__cta">
        <div className="container hardware-page__cta-box">
          <div>
            <p className="hardware-page__cta-eyebrow">Sonraki Adım</p>
            <h2>İstersen bu alanı gerçek hizmet senaryolarınla daha da güçlendirelim</h2>
            <p>
              Hangi cihazlarla çalıştığınız, ne tür kurulumlar yaptığınız ve hedef
              müşteri tipiniz belli oldukça bu sayfayı daha güçlü ve daha spesifik hale getirebiliriz.
            </p>
          </div>

          <div className="hardware-page__cta-actions">
            <Button to="/iletisim">Teklif Al</Button>
            <Button to="/yardim-destek" variant="secondary">
              Destek Hizmetine Geç
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
