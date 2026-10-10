import { Pause, Play } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { cvHref, type Locale } from "../content.ts"
import { useLocale } from "../locale.tsx"
import { useVideo } from "../video.tsx"
import { useWrite } from "../write.tsx"

const locales: Locale[] = ["es", "en"]

export function Navbar() {
  const { locale, setLocale, copy } = useLocale()
  const { openWrite } = useWrite()
  const { paused, toggle } = useVideo()
  const reduced = useReducedMotion()
  const links = [
    { href: "#work", label: copy.nav.work },
    { href: "#about", label: copy.nav.about },
    { href: "#contact", label: copy.nav.contact },
  ]

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-30 w-full px-4 py-4 md:px-6 md:py-6"
      initial={reduced ? { opacity: 0 } : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={reduced ? { duration: 0.2, ease: "easeOut" } : { duration: 0.45, ease: "easeOut" }}
    >
      <div className="liquid-glass mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 rounded-full px-4 py-2 md:px-6">
        <div className="flex min-w-0 items-center gap-6 md:gap-8">
          <a href="#top" className="pressable flex items-center gap-2">
            <span className="text-base font-semibold whitespace-nowrap text-white md:text-lg">
              Luca Fisogni
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="pressable transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <div
            role="group"
            aria-label={copy.nav.language}
            className="flex items-center rounded-full bg-black/55"
          >
            {locales.map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={locale === code}
                onClick={() => setLocale(code)}
                className={`pressable h-11 min-w-11 rounded-full px-2 text-xs font-semibold tracking-wide ${
                  locale === code ? "bg-white text-black" : "text-white"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={toggle}
            aria-pressed={paused}
            aria-label={paused ? copy.video.play : copy.video.pause}
            className="pressable inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white"
          >
            {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
          </button>
          <a
            href={cvHref}
            download="Luca_Fisogni_CV.pdf"
            className="pressable inline-flex h-11 items-center px-1 text-sm font-medium whitespace-nowrap text-white transition-colors hover:text-white/80"
          >
            {copy.nav.resume}
          </a>
          <button
            type="button"
            onClick={openWrite}
            className="pressable hidden h-11 items-center rounded-full bg-black/55 px-4 text-sm font-medium whitespace-nowrap text-white md:inline-flex"
          >
            {copy.hero.cta}
          </button>
        </div>
      </div>
      <div className="mx-auto mt-3 flex max-w-5xl justify-center gap-6 text-sm font-medium text-white/80 md:hidden">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="pressable inline-flex h-11 items-center transition-colors duration-300 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
