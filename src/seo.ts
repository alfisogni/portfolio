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
    title: "Luca Alejandro Fisogni · Desarrollador Frontend",
    description:
      "Portfolio de Luca Alejandro Fisogni, desarrollador web frontend en Buenos Aires. React, TypeScript, diseño de interfaces y productos digitales.",
    keywords:
      "Luca Alejandro Fisogni, desarrollador frontend, React, TypeScript, portfolio, Buenos Aires, Argentina, diseñador UI, web developer",
  },
  en: {
    title: "Luca Alejandro Fisogni · Frontend Developer",
    description:
      "Portfolio of Luca Alejandro Fisogni, frontend web developer in Buenos Aires. React, TypeScript, interface design, and digital products.",
    keywords:
      "Luca Alejandro Fisogni, frontend developer, React, TypeScript, portfolio, Buenos Aires, Argentina, UI designer, web developer",
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
