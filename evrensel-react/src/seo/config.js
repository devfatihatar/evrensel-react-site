export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://www.evrenselbilisim.com").replace(/\/$/, "")
export const SITE_NAME = "Evrensel Bilişim"
export const DEFAULT_LOCALE = "tr_TR"
export const DEFAULT_TITLE = "Evrensel Bilişim | Web, Donanım ve Teknik Destek"
export const DEFAULT_DESCRIPTION =
  "Evrensel Bilişim; web tasarımı, donanım altyapısı ve teknik destek hizmetlerini tek çatı altında sunan kurumsal teknoloji çözüm ortağıdır."
export const DEFAULT_OG_IMAGE = "/og-image.svg"
export const BUSINESS_PHONE_DISPLAY = "+90 506 241 77 35"
export const BUSINESS_PHONE_LINK = "+905062417735"
export const BUSINESS_EMAIL = "mail@evrenselbilisim.net"
export const BUSINESS_STREET_ADDRESS = "Çaybaşı Mah. 1357 Sok. Palm Sitesi No:16 D:2"
export const BUSINESS_ADDRESS_LOCALITY = "Muratpaşa"
export const BUSINESS_ADDRESS_REGION = "Antalya"
export const BUSINESS_ADDRESS_COUNTRY = "TR"
export const BUSINESS_LATITUDE = 36.886812
export const BUSINESS_LONGITUDE = 30.721432
export const SAME_AS_URLS = [
  "https://www.instagram.com/evrenselbilisim/",
  "https://www.facebook.com/evrenselbilisim/?locale=tr_TR",
  "https://share.google/Y3hWtA32F0gaLCsdC",
]

export function toAbsoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
