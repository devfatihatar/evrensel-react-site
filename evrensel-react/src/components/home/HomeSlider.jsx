import { useEffect, useState } from "react"
import slider1 from "../../assets/images/slider1.webp"
import slider2 from "../../assets/images/slider2.png"
import slider3 from "../../assets/images/slider3.jpg"

const slides = [
  {
    title: "Web site tasarımı ve geliştirme",
    text: "Güncel teknoloji ve kullanıcı odaklı tasarımla markanıza özel bir web deneyimi sunalım.",
    image: slider1,
  },
  {
    title: "Sosyal medya yönetimi",
    text: "Sosyal medya varlığınızı güçlendirecek stratejiler ve içeriklerle hedef kitlenizle etkili iletişim kurmanıza yardımcı olalım.",
    image: slider2,
  },
  {
    title: "Donanım ve altyapı çözümleri",
    text: "Donanım ve altyapı ihtiyaçlarınızı karşılayacak güvenilir çözümlerle iş süreçlerinizi kesintisiz hale getirelim.",
    image: slider3,
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
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="home-slider__overlay">
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
