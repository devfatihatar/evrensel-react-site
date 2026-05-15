import i18nData from "../data/i18nData.json"
import { extraTranslations } from "./extraTranslations"

export const availableLanguages = i18nData.languages
export const defaultLanguage = i18nData.defaultLanguage
export const translations = Object.entries(i18nData.translations).reduce((items, [lang, dictionary]) => {
  items[lang] = {
    ...dictionary,
    ...(extraTranslations[lang] ?? {}),
  }
  return items
}, {})

const maskedDictionaryCache = new Map()

function maskTurkishCharacters(value) {
  return value.replace(/[çğıöşüÇĞİÖŞÜ]/g, "?")
}

function getMaskedDictionary(lang) {
  if (maskedDictionaryCache.has(lang)) return maskedDictionaryCache.get(lang)

  const dictionary = translations[lang] ?? {}
  const maskedDictionary = Object.entries(dictionary).reduce((items, [key, translated]) => {
    items[maskTurkishCharacters(key)] = translated
    return items
  }, {})

  maskedDictionaryCache.set(lang, maskedDictionary)
  return maskedDictionary
}

export function translateText(value, lang) {
  if (lang === defaultLanguage || typeof value !== "string") return value

  const dictionary = translations[lang]
  if (!dictionary) return value
  const maskedDictionary = getMaskedDictionary(lang)

  const text = value.trim()
  const exact = dictionary[text]
  if (exact) return exact
  const maskedExact = maskedDictionary[maskTurkishCharacters(text)]
  if (maskedExact) return maskedExact

  if (text.includes(" / ")) {
    return text
      .split(" / ")
      .map((part) => dictionary[part] ?? maskedDictionary[maskTurkishCharacters(part)] ?? part)
      .join(" / ")
  }

  const normalized = text.replace(/\s+/g, " ")
  return dictionary[normalized] ?? maskedDictionary[maskTurkishCharacters(normalized)] ?? value
}
