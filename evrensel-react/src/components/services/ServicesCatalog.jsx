import Button from "../shared/Button"
import BreadcrumbTrail from "../shared/BreadcrumbTrail"

export default function ServicesCatalog({
  activeCategory,
  catalog,
  labels,
  serviceCategories,
  services,
  serviceShowcaseImages,
}) {
  return (
    <>
      {activeCategory ? (
        <section className="section services-page__category reveal-on-scroll">
          <div className="container services-page__catalog-inner">
            <div className="services-page__category-shell homepage-shared-shell">
              <BreadcrumbTrail
                items={[
                  { label: labels.homeBreadcrumb, to: "/" },
                  { label: labels.servicesBreadcrumb, to: "/hizmetlerimiz" },
                  { label: activeCategory.label },
                ]}
              />

              <div className="services-page__category-grid">
                <div className="services-page__category-header homepage-shared-header">
                  {activeCategory.eyebrow ? (
                    <p className="services-page__eyebrow homepage-shared-eyebrow">
                      {activeCategory.eyebrow}
                    </p>
                  ) : null}
                  <h1>{activeCategory.title}</h1>
                  <p>{activeCategory.description}</p>
                  {activeCategory.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {activeCategory.freeNote ? (
                  <aside className="services-page__free-note">
                    <span>{activeCategory.freeNote.title}</span>
                    <ul
                      className="services-page__free-note-slider"
                      style={{ "--slide-count": activeCategory.freeNote.items.length }}
                    >
                      {activeCategory.freeNote.items.map((item, index) => (
                        <li key={item} style={{ "--slide-index": index }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <strong>{activeCategory.freeNote.suffix}</strong>
                  </aside>
                ) : (
                  <div className="services-page__category-panel">
                    <ul className="services-page__category-list">
                      {activeCategory.items.map((item, index) => (
                        <li key={item} className="homepage-shared-card">
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {activeCategory.groups?.length ? (
                <div className="services-page__group-grid">
                  {activeCategory.groups.map((group) => (
                    <article key={group.title} className="services-page__group-card homepage-shared-card">
                      <h2>{group.title}</h2>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : (
        <section className="section services-page__catalog reveal-on-scroll">
          <div className="container services-page__catalog-inner">
            <div className="services-page__catalog-shell homepage-shared-shell">
              <div className="services-page__showcase-list">
                {serviceCategories.map((service, index) => (
                  <article
                    key={service.slug}
                    className={`services-page__showcase services-page__showcase--${index % 2 === 0 ? "right" : "left"}`}
                  >
                    <div className="services-page__showcase-media">
                      <img
                        src={serviceShowcaseImages[index % serviceShowcaseImages.length]}
                        alt={`${service.label} görseli`}
                        className="services-page__showcase-image"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="services-page__showcase-panel">
                      <p className="services-page__breadcrumb-inline">
                        <span>{labels.servicesBreadcrumb}</span>
                        <span>/</span>
                        <span>{service.label}</span>
                      </p>
                      <h3>{service.label}</h3>
                      <p>{service.description}</p>

                      <Button to={service.to}>
                        Keşfedin
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
