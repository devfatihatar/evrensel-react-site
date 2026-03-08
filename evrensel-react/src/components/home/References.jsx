import SectionTitle from "../shared/SectionTitle"

const references = [
  { name: "Nova Lojistik", sector: "Lojistik", result: "Operasyon paneli + destek", logo: "NL" },
  { name: "Ahenk Otomasyon", sector: "Endüstri", result: "Sistem altyapısı dönüşümü", logo: "AO" },
  { name: "Mavi Klinik", sector: "Sağlık", result: "Web sitesi + bakım süreci", logo: "MK" },
  { name: "Delta Muhasebe", sector: "Finans", result: "Kurumsal web + teknik servis", logo: "DM" },
]

const trust = [
  { value: "40+", label: "Aktif Referans" },
  { value: "8", label: "Farklı Sektör" },
  { value: "%96", label: "Memnuniyet Oranı" },
]

export default function References() {
  return (
    <section className="references section reveal-on-scroll reveal-left">
      <div className="container">
        <SectionTitle
          eyebrow="Referanslar"
          title="Birlikte çalıştığımız markalar"
          subtitle="Farklı sektörlerdeki firmalarla uzun vadeli dijital ve teknik iş ortaklıkları yürütüyoruz."
          align="center"
        />

        <div className="references__grid">
          {references.map((item, index) => (
            <article
              className={`references__item reveal-on-scroll ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`.trim()}
              key={item.name}
            >
              <div className="references__head">
                <div className="references__logo" aria-label={`${item.name} logo alanı`}>
                  {item.logo}
                </div>
                <span className="references__sector">{item.sector}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.result}</p>
            </article>
          ))}
        </div>

        <div className="references__trust">
          {trust.map((item, index) => (
            <article
              className={`references__trust-item reveal-on-scroll ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`.trim()}
              key={item.label}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
