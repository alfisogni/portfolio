import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import { copy, type Locale } from "./content.ts"
import { applyLocaleSeo } from "./seo.ts"

const STORAGE_KEY = "locale"

type LocaleValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  copy: (typeof copy)["es"]
}

const LocaleContext = createContext<LocaleValue | null>(null)

function readLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "es" || saved === "en") return saved
  } catch {
    /* private mode */
  }
  return "es"
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale)

  const setLocale = (next: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* private mode */
    }
    setLocaleState(next)
  }

  useEffect(() => {
    document.documentElement.lang = locale
    applyLocaleSeo(locale)
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale, copy: copy[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error("useLocale must be used within LocaleProvider")
  return value
}

export function LocaleFade({ children }: { children: ReactNode }) {
  const { locale } = useLocale()
  const [opacity, setOpacity] = useState(1)
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return
    setOpacity(0)
    const timer = window.setTimeout(() => setOpacity(1), 40)
    return () => window.clearTimeout(timer)
  }, [locale])

  return (
    <div style={{ opacity, transition: "opacity 200ms ease-out" }}>{children}</div>
  )
}
