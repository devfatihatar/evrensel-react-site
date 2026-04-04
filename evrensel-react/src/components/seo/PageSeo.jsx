import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_LOCALE,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  toAbsoluteUrl,
} from "../../seo/config"

export default function PageSeo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  jsonLd = [],
}) {
  const location = useLocation()
  const canonicalPath = path || location.pathname
  const canonicalUrl = toAbsoluteUrl(canonicalPath)
  const pageTitle = title || DEFAULT_TITLE
  const pageDescription = description || DEFAULT_DESCRIPTION
  const imageUrl = image ? (image.startsWith("http") ? image : toAbsoluteUrl(image)) : null
  const robots = noindex ? "noindex, nofollow" : "index, follow"

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content={robots} />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="tr-TR" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      <meta property="og:locale" content={DEFAULT_LOCALE} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}

      <meta property="article:publisher" content={SITE_URL} />

      {jsonLd.map((schema, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
