import type { Locale } from "./content.ts"
import { contact } from "./content.ts"

export const site = {
  name: "Luca Alejandro Fisogni",
  url: "https://www.luca-alejandro-fisogni.dev",
  ogImage: "https://www.luca-alejandro-fisogni.dev/og.jpg",
  localeDefault: "es" as const,
  twitter: "",
  email: contact.email,
  sameAs: [contact.linkedin, contact.github],
} as const

export const seoCopy: Record<
  Locale,
  { title: string; description: string; keywords: string }
> = {
  es: {
    title: "Luca Alejandro Fisogni · AI Growth Engineer",
    description:
      "AI Growth Engineer en Buenos Aires. Uso IA y automatización para que los equipos trabajen mejor, de punta a punta. React, TypeScript, Microsoft 365 y Azure.",
    keywords:
      "Luca Alejandro Fisogni, AI Growth Engineer, ingeniero de IA, automatización, desarrollador full stack, React, TypeScript, Microsoft 365, Azure, portfolio, Buenos Aires, Argentina",
  },
  en: {
    title: "Luca Alejandro Fisogni · AI Growth Engineer",
    description:
      "AI Growth Engineer in Buenos Aires. I use AI and automation to help teams work better, end to end. React, TypeScript, Microsoft 365 and Azure.",
    keywords:
      "Luca Alejandro Fisogni, AI Growth Engineer, AI engineer, automation, full stack developer, React, TypeScript, Microsoft 365, Azure, portfolio, Buenos Aires, Argentina",
  },
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

/** Keep document title / description in sync with the active UI locale. */
export function applyLocaleSeo(locale: Locale) {
  const { title, description, keywords } = seoCopy[locale]
  document.title = title
  setMeta("name", "description", description)
  setMeta("name", "keywords", keywords)
  setMeta("property", "og:title", title)
  setMeta("property", "og:description", description)
  setMeta("property", "og:locale", locale === "es" ? "es_AR" : "en_US")
  setMeta("name", "twitter:title", title)
  setMeta("name", "twitter:description", description)
}
