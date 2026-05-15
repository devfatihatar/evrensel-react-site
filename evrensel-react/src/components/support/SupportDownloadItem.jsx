import Button from "../shared/Button"
import { resolveImage } from "../../utils/imageResolver"

export default function SupportDownloadItem({ item }) {
  const logoSrc = resolveImage(item.logoPath)

  return (
    <article className="support-downloads__item">
      <div
        className="support-downloads__logo"
        style={{ "--download-accent": item.accent }}
        aria-hidden="true"
      >
        {logoSrc ? (
          <img src={logoSrc} alt="" className="support-downloads__logo-image" loading="lazy" decoding="async" />
        ) : (
          <span>{item.logoText}</span>
        )}
      </div>

      <div className="support-downloads__content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>

      <div className="support-downloads__actions">
        <Button href={item.downloadUrl} className="support-downloads__button">
          İndir
        </Button>
      </div>
    </article>
  )
}
