export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://www.evrenselbilisim.com").replace(/\/$/, "")
export const SITE_NAME = "Evrensel Bilişim"
export const DEFAULT_LOCALE = "tr_TR"
export const DEFAULT_TITLE = "Evrensel Bilişim | Web, Donanım ve Teknik Destek"
export const DEFAULT_DESCRIPTION =
  "Evrensel Bilişim; web tasarımı, donanım altyapısı ve teknik destek hizmetlerini tek çatı altında sunan kurumsal teknoloji çözüm ortağıdır."
export const DEFAULT_OG_IMAGE = "/og-image.svg"
export const BUSINESS_PHONE_DISPLAY = "+90 506 241 77 35"
export const BUSINESS_PHONE_LINK = "+905062417735"
export const BUSINESS_EMAIL = "info@evrenselbilisim.com"
export const BUSINESS_ADDRESS_LOCALITY = "Muratpaşa"
export const BUSINESS_ADDRESS_REGION = "Antalya"
export const BUSINESS_ADDRESS_COUNTRY = "TR"

export function toAbsoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
