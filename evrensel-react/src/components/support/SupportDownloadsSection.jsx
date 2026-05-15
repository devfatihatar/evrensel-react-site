import { useMemo, useState } from "react"
import SupportDownloadItem from "./SupportDownloadItem"

const normalizeSearchText = (value) =>
  value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/ı/g, "i")

export default function SupportDownloadsSection({ section, items }) {
  const [query, setQuery] = useState("")

  const filteredItems = useMemo(() => {
    const normalizedQuery = normalizeSearchText(query.trim())

    if (!normalizedQuery) {
      return items
    }

    return items.filter((item) =>
      normalizeSearchText(`${item.name} ${item.description}`).includes(normalizedQuery),
    )
  }, [items, query])

  return (
    <section className="section support-downloads" aria-label={section.listAriaLabel}>
      <div className="container">
        <div className="support-downloads__frame">
          <div className="support-downloads__overlay" aria-hidden="true" />

          <div className="support-downloads__panel">
            <div className="support-downloads__body">
              <label className="support-downloads__search">
                <span className="support-downloads__search-icon" aria-hidden="true" />
                <span className="sr-only">Uygulama ara</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Uygulama ara"
                  autoComplete="off"
                />
              </label>

              {filteredItems.length > 0 ? (
                <div className="support-downloads__list">
                  {filteredItems.map((item) => (
                    <SupportDownloadItem key={item.name} item={item} />
                  ))}
                </div>
              ) : (
                <p className="support-downloads__empty-result">Aramanıza uygun uygulama bulunamadı.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
