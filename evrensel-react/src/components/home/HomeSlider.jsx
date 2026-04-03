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

    const preloadAfterFirstPaint = window.setTimeout(() => {
      slides.slice(1).forEach((slide) => {
        const img = new Image()
        img.src = slide.image
      })
    }, 1200)

    return () => {
      window.clearInterval(timer)
      window.clearTimeout(preloadAfterFirstPaint)
    }
  }, [])

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  const activeSlide = slides[activeIndex]

  return (
    <section className="home-slider section reveal-on-scroll reveal-left">
      <div className="container">
        <div className="home-slider__frame">
          <article className="home-slider__slide is-active">
            <img
              className="home-slider__image"
              src={activeSlide.image}
              alt={activeSlide.title}
              fetchPriority={activeIndex === 0 ? "high" : "auto"}
              loading={activeIndex === 0 ? "eager" : "lazy"}
              decoding={activeIndex === 0 ? "sync" : "async"}
            />

            <div className="home-slider__overlay">
              <h2>{activeSlide.title}</h2>
              <p>{activeSlide.text}</p>
            </div>
          </article>

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
