import Button from "../shared/Button"

export default function SupportDownloadItem({ item }) {
  return (
    <article className="support-downloads__item">
      <div
        className="support-downloads__logo"
        style={{ "--download-accent": item.accent }}
        aria-hidden="true"
      >
        <span>{item.logoText}</span>
      </div>

      <div className="support-downloads__content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>

      <div className="support-downloads__actions">
        <Button href={item.downloadUrl} className="support-downloads__button">
          Indir
        </Button>
      </div>
    </article>
  )
}
