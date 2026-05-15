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
import { getWebPageSchema } from "../../seo/schema"
import { useLanguage } from "../../i18n/LanguageContext"
import { translateText } from "../../i18n/translations"

export default function PageSeo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = SITE_NAME,
  type = "website",
  noindex = false,
  jsonLd = [],
}) {
  const location = useLocation()
  const { lang } = useLanguage()
  const canonicalPath = path || location.pathname
  const canonicalUrl = toAbsoluteUrl(canonicalPath)
  const pageTitle = translateText(title || DEFAULT_TITLE, lang)
  const pageDescription = translateText(description || DEFAULT_DESCRIPTION, lang)
  const imageUrl = image ? (image.startsWith("http") ? image : toAbsoluteUrl(image)) : null
  const robots = noindex ? "noindex, nofollow" : "index, follow"
  const locale = lang === "en" ? "en_US" : DEFAULT_LOCALE
  const language = lang === "en" ? "en-US" : "tr-TR"
  const schemas = [
    getWebPageSchema({ title: pageTitle, description: pageDescription, url: canonicalUrl }),
    ...jsonLd,
  ]

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content={robots} />
      <meta name="author" content={SITE_NAME} />
      <meta name="language" content={language} />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=no" />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="tr-TR" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-US" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      {imageUrl ? <meta property="og:image:secure_url" content={imageUrl} /> : null}
      {imageUrl ? <meta property="og:image:width" content="1200" /> : null}
      {imageUrl ? <meta property="og:image:height" content="630" /> : null}
      {imageUrl ? <meta property="og:image:alt" content={imageAlt} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}
      {imageUrl ? <meta name="twitter:image:alt" content={imageAlt} /> : null}

      <meta property="article:publisher" content={SITE_URL} />

      {schemas.map((schema, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
