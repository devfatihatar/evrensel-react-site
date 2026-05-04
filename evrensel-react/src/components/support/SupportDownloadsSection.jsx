import SupportDownloadItem from "./SupportDownloadItem"

export default function SupportDownloadsSection({ section, items }) {
  return (
    <section className="section support-downloads" aria-label={section.listAriaLabel}>
      <div className="container">
        <div className="support-downloads__frame">
          <div className="support-downloads__overlay" aria-hidden="true" />

          <div className="support-downloads__panel">
            <div className="support-downloads__list">
              {items.map((item) => (
                <SupportDownloadItem key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
