import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { defaultLanguage, translateText } from "./translations"

const LanguageContext = createContext({
  lang: defaultLanguage,
  setLang: () => {},
  toggleLang: () => {},
})

const STORAGE_KEY = "evrensel-language"

function walkTextNodes(root, callback) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement
      if (!parent) return NodeFilter.FILTER_REJECT
      if (["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT
      }
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    },
  })

  const nodes = []
  while (walker.nextNode()) nodes.push(walker.currentNode)
  nodes.forEach(callback)
}

function applyLanguage(lang) {
  document.documentElement.lang = lang === "en" ? "en" : "tr"

  walkTextNodes(document.body, (node) => {
    if (!node.__evrenselOriginalText) {
      node.__evrenselOriginalText = node.nodeValue
    }

    if (lang === defaultLanguage) {
      if (node.nodeValue !== node.__evrenselOriginalText) {
        node.nodeValue = node.__evrenselOriginalText
      }
      return
    }

    const original = node.__evrenselOriginalText
    const leading = original.match(/^\s*/)?.[0] ?? ""
    const trailing = original.match(/\s*$/)?.[0] ?? ""
    const translated = `${leading}${translateText(original.trim(), lang)}${trailing}`
    if (node.nodeValue !== translated) {
      node.nodeValue = translated
    }
  })

  document.querySelectorAll("[aria-label], [alt], [title], [placeholder]").forEach((element) => {
    ;["aria-label", "alt", "title", "placeholder"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return

      const storageAttribute = `data-i18n-original-${attribute}`
      if (!element.hasAttribute(storageAttribute)) {
        element.setAttribute(storageAttribute, element.getAttribute(attribute) ?? "")
      }

      const original = element.getAttribute(storageAttribute) ?? ""
      const translated = lang === defaultLanguage ? original : translateText(original, lang)
      if (element.getAttribute(attribute) !== translated) {
        element.setAttribute(attribute, translated)
      }
    })
  })
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return defaultLanguage
    return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : defaultLanguage
  })

  const setLang = (nextLang) => {
    const normalized = nextLang === "en" ? "en" : defaultLanguage
    window.localStorage.setItem(STORAGE_KEY, normalized)
    setLangState(normalized)
  }

  useEffect(() => {
    applyLanguage(lang)

    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(() => applyLanguage(lang))
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    return () => observer.disconnect()
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang(lang === "tr" ? "en" : "tr"),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
