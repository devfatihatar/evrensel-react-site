export default function WebDesignMessage({
  message,
  isRotatorTransitionEnabled,
  activeWordIndex,
  rotatingWords,
}) {
  return (
    <section className="web-design-message section reveal-on-scroll reveal-left" aria-label="Web tasarım bilgilendirme mesajı">
      <div className="container">
        <div className="web-design-message__inner homepage-shared-shell">
          <div className="web-design-message__intro homepage-shared-header">
            <p className="web-design-message__eyebrow homepage-shared-eyebrow">{message.eyebrow}</p>
            <h2>{message.title}</h2>
            <p className="web-design-message__description">
              Kurulumdan içerik yönetimine, güncellemelerden teknik bakıma kadar süreci tek noktadan
              yürütüyor; yayın sonrası tarafta da işlerinizi zorlaştıran ek maliyetler çıkarmıyoruz.
            </p>
          </div>

          <div className="web-design-message__text" role="text" aria-label="Web sitenizin içerik girmekten, güncellemelerden veya bakımından para almıyoruz.">
            <span className="web-design-message__static">{message.staticPrefix}</span>
            <span className="web-design-message__rotator" aria-live="polite">
              <span
                className={`web-design-message__track ${isRotatorTransitionEnabled ? "" : "is-without-transition"}`.trim()}
                style={{ "--rotator-index": activeWordIndex }}
              >
                {[...rotatingWords, rotatingWords[0]].map((word, index) => (
                  <span key={`${word}-${index}`} className="web-design-message__word">
                    {word}
                  </span>
                ))}
              </span>
            </span>
            <span className="web-design-message__static">{message.staticSuffix}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
