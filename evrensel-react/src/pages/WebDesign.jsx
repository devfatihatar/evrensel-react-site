import Button from "../components/shared/Button"
import SectionTitle from "../components/shared/SectionTitle"

const highlights = [
  { value: "Kurumsal", label: "Marka kimliğine uygun tasarım dili" },
  { value: "Hızlı", label: "Mobil uyumlu ve performans odaklı yapı" },
  { value: "Yönetilebilir", label: "Geliştirilebilir ve sürdürülebilir teslimat" },
]

const services = [
  {
    title: "Kurumsal Web Tasarımı",
    text: "Firmanızın güven veren yönlerini öne çıkaran, sade ama güçlü bir arayüz dili tasarlıyoruz.",
  },
  {
    title: "Yazılım ve Geliştirme",
    text: "Tasarımı sadece görsel olarak bırakmıyor; hızlı, düzenli ve ölçeklenebilir bir ön yüz yapısına dönüştürüyoruz.",
  },
  {
    title: "İçerik ve Yapı Kurgusu",
    text: "Ziyaretçinin aradığını kolay bulacağı sayfa akışı, içerik hiyerarşisi ve dönüşüm noktaları oluşturuyoruz.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "İhtiyaç ve Konumlama Analizi",
    text: "Firmanızın sektörü, hedef kitlesi ve mevcut dijital görünümü üzerinden doğru çerçeveyi kuruyoruz.",
  },
  {
    step: "02",
    title: "Sayfa Mimarisi ve Tasarım",
    text: "İçerik akışı, sayfa yapısı, görsel dil ve kullanıcı deneyimi kararlarını netleştiriyoruz.",
  },
  {
    step: "03",
    title: "Geliştirme ve Yayın",
    text: "Tasarımı kodluyor, responsive kontrolleri yapıyor ve yayına hazır hale getiriyoruz.",
  },
]

const deliverables = [
  "Ana sayfa ve iç sayfa tasarım sistemi",
  "Mobil uyumlu responsive yapı",
  "İletişim ve teklif toplama alanları",
  "Temel SEO ve teknik performans düzeni",
  "Yayın öncesi test ve son kontrol süreci",
  "Gerekirse bakım ve güncelleme desteği",
]

const references = [
  {
    name: "Artemis Sigorta",
    sector: "Finans ve Danışmanlık",
    summary: "Kurumsal güven algısını güçlendiren, teklif toplama odaklı modern bir web yapısı hazırlandı.",
    detail: "Ana sayfa mesajları sadeleştirildi, hizmet sayfaları yeniden kurgulandı ve iletişim dönüşümü önceliklendirildi.",
  },
  {
    name: "Marmara Klinik",
    sector: "Sağlık",
    summary: "Hasta ve ziyaretçi tarafında güven veren, hızlı yüklenen ve mobilde rahat kullanılan bir site tasarlandı.",
    detail: "Bölüm tanıtımları, doktor kartları ve iletişim akışı daha okunabilir bir bilgi mimarisiyle yeniden düzenlendi.",
  },
  {
    name: "Kuzey Makina",
    sector: "Sanayi",
    summary: "Ürün ve hizmetlerini daha profesyonel anlatan, teklif sürecini destekleyen kurumsal bir vitrin oluşturuldu.",
    detail: "Teknik kabiliyeti öne çıkaran sayfa yapısı, referans blokları ve sektör odaklı içerik kurgusu geliştirildi.",
  },
]

export default function WebDesign() {
  return (
    <main className="web-design-page page">
      <section className="section web-design-page__hero">
        <div className="container web-design-page__hero-grid">
          <div className="web-design-page__hero-content">
            <SectionTitle
              eyebrow="Web Tasarımı"
              title="Kurumsal görünümü güçlü, kullanımı net web deneyimleri tasarlıyoruz"
              subtitle="Web sitesini sadece bir vitrin olarak değil; markayı doğru anlatan, güven oluşturan ve iletişimi kolaylaştıran bir iş aracı olarak ele alıyoruz."
            />

            <p className="web-design-page__lead">
              İyi bir kurumsal site; sadece güzel görünmekle kalmaz. Hızlı çalışır,
              mobilde rahat kullanılır, içeriği anlaşılırdır ve firmanızın profesyonel
              duruşunu net biçimde yansıtır. Biz bu dengeyi tasarım ve teknik tarafı
              birlikte düşünerek kuruyoruz.
            </p>

            <div className="web-design-page__hero-actions">
              <Button to="/iletisim">Projenizi Konuşalım</Button>
              <Button to="/hizmetlerimiz" variant="secondary">
                Tüm Hizmetler
              </Button>
            </div>
          </div>

          <aside className="web-design-page__hero-panel" aria-label="Web tasarım özeti">
            <ul className="web-design-page__highlight-list">
              {highlights.map((item) => (
                <li key={item.label} className="web-design-page__highlight-item">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section web-design-page__services">
        <div className="container">
          <SectionTitle
            eyebrow="Neler Yapıyoruz"
            title="Web tasarım sürecini sadece görsel değil, işlevsel olarak ele alıyoruz"
            subtitle="Her projede estetik görünüm ile kullanım kolaylığını aynı standardın parçası olarak kurguluyoruz."
            align="center"
          />

          <div className="web-design-page__services-grid">
            {services.map((item) => (
              <article key={item.title} className="web-design-page__service-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section web-design-page__process">
        <div className="container">
          <SectionTitle
            eyebrow="Süreç"
            title="Projeyi nasıl ilerletiyoruz?"
            subtitle="Kararları baştan netleştirip tasarım, geliştirme ve yayın sürecini kontrollü biçimde yönetiyoruz."
          />

          <div className="web-design-page__process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="web-design-page__process-card">
                <span className="web-design-page__process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section web-design-page__deliverables">
        <div className="container web-design-page__deliverables-grid">
          <div>
            <SectionTitle
              eyebrow="Teslim Kapsamı"
              title="Projede hangi başlıkları ele alıyoruz?"
              subtitle="İhtiyaca göre değişebilmekle birlikte çoğu projede aşağıdaki kapsam başlıklarını birlikte yürütüyoruz."
            />
          </div>

          <div className="web-design-page__deliverables-box">
            <ul className="web-design-page__deliverables-list">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section web-design-page__references">
        <div className="container">
          <SectionTitle
            eyebrow="Referanslarımız"
            title="Bu alanda firmaları ve yaptığımız işleri tanıtacağız"
            subtitle="Aşağıdaki kartlar örnek yapı olarak hazırlandı. Sonraki adımda gerçek firma isimleri, sektörleri ve proje çıktılarıyla bunları birlikte güncelleyebiliriz."
            align="center"
          />

          <div className="web-design-page__references-grid">
            {references.map((item) => (
              <article key={item.name} className="web-design-page__reference-card">
                <div className="web-design-page__reference-head">
                  <h3>{item.name}</h3>
                  <span>{item.sector}</span>
                </div>
                <p className="web-design-page__reference-summary">{item.summary}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section web-design-page__cta">
        <div className="container web-design-page__cta-box">
          <div>
            <p className="web-design-page__cta-eyebrow">Sonraki Adım</p>
            <h2>İstersen bu sayfadaki referansları gerçek müşteri hikayelerine çevirelim</h2>
            <p>
              Firma adı, sektör, hangi işi yaptığınız ve varsa öne çıkarmak istediğin
              sonuç bilgisini verirsen kartları doğrudan gerçek içerikle güncelleyebilirim.
            </p>
          </div>

          <div className="web-design-page__cta-actions">
            <Button to="/iletisim">İletişime Geç</Button>
            <Button href="tel:+905551112233" variant="secondary">
              Bizi Ara
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
