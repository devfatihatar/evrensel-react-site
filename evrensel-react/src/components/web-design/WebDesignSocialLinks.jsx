export default function WebDesignSocialLinks({
  socialIcons,
  activeSocialIndex,
  hoveredSocialIndex,
  followText,
  handleSocialClick,
  handleSocialEnter,
  handleSocialLeave,
}) {
  return (
    <div className="web-design-page__social-floats" aria-label="Sosyal medya baglantilari">
      {socialIcons.map((item, index) => (
        <div key={item.key} className="web-design-page__social-item">
          <a
            className={`web-design-page__social-icon web-design-page__social-icon--${item.key} ${activeSocialIndex === index || hoveredSocialIndex === index ? "is-active" : ""}`.trim()}
            href={item.href}
            onClick={(event) => handleSocialClick(event, item.href)}
            onMouseEnter={() => handleSocialEnter(index)}
            onMouseLeave={handleSocialLeave}
            aria-label={`${item.text} sayfasina git`}
          >
            <span className="web-design-page__social-logo">
              <img
                src={item.logoSrc}
                alt=""
                className="web-design-page__social-logo-image"
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="web-design-page__social-content">
              <span className="web-design-page__social-text">{followText}</span>
              <span className="web-design-page__social-handle">{item.handle}</span>
            </span>
          </a>
        </div>
      ))}
    </div>
  )
}
