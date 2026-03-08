import { useEffect, useState } from "react"

const slides = [
  {
    title: "Yeni Fikirler, Güçlü Başlangıç",
    text: "Buraya kampanya veya manşet metnini hızlıca yerleştirebilirsin.",
    color: "#f28a1b",
  },
  {
    title: "Dijitalde Hızlı Büyüme",
    text: "Bu alana ürün/hizmet vurgusu gibi kısa bir açıklama girebilirsin.",
    color: "#f3c73b",
  },
  {
    title: "Markanı Öne Çıkar",
    text: "Son slaytta güçlü bir çağrı metni veya teklif mesajı kullanabilirsin.",
    color: "#cf2d2d",
  },
]

export default function HomeSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="home-slider section reveal-on-scroll reveal-left">
      <div className="container">
        <div className="home-slider__frame">
          {slides.map((slide, index) => (
            <article
              key={slide.title}
              className={`home-slider__slide ${index === activeIndex ? "is-active" : ""}`.trim()}
              style={{ backgroundColor: slide.color }}
            >
              <div className="home-slider__overlay">
                <p className="home-slider__eyebrow">Örnek Slider Metni</p>
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
              </div>
            </article>
          ))}

          <button className="home-slider__arrow home-slider__arrow--prev" onClick={goPrev} type="button">
            ←
          </button>
          <button className="home-slider__arrow home-slider__arrow--next" onClick={goNext} type="button">
            →
          </button>

          <div className="home-slider__dots">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={`home-slider__dot ${index === activeIndex ? "is-active" : ""}`.trim()}
                onClick={() => setActiveIndex(index)}
                type="button"
                aria-label={`${index + 1}. slayta git`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
