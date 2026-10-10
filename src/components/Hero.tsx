import { ArrowRight, Check } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useEffect, useState, type FormEvent } from "react"
import { contact } from "../content.ts"
import { sendHeroEmail } from "../email.ts"
import { useLocale } from "../locale.tsx"
import { useWrite } from "../write.tsx"

type Status = "idle" | "sending" | "sent" | "error"

export function Hero() {
  const { copy } = useLocale()
  const { open, openWrite, closeWrite } = useWrite()
  const reduced = useReducedMotion()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [placeholder, setPlaceholder] = useState("")

  const enter = reduced ? { opacity: 0 } : { opacity: 0, y: 16 }
  const shown = { opacity: 1, y: 0 }
  const enterTransition = reduced
    ? { duration: 0.2, ease: "easeOut" as const }
    : { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }

  const dismiss = () => {
    if (status === "sending") return
    closeWrite()
    setStatus("idle")
    setEmail("")
    setPlaceholder("")
  }

  useEffect(() => {
    if (!open) return

    const full =
      status === "sent" ? copy.hero.thanks : status === "sending" ? copy.hero.sending : copy.hero.prompt
    let index = 0
    setPlaceholder("")
    const timer = window.setInterval(() => {
      index += 1
      setPlaceholder(full.slice(0, index))
      if (index >= full.length) window.clearInterval(timer)
    }, 60)

    return () => window.clearInterval(timer)
  }, [open, status, copy.hero.thanks, copy.hero.sending, copy.hero.prompt])

  useEffect(() => {
    if (status !== "sent") return
    const timer = window.setTimeout(() => {
      closeWrite()
      setStatus("idle")
      setEmail("")
      setPlaceholder("")
    }, 4000)
    return () => window.clearTimeout(timer)
  }, [status, closeWrite])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || status === "sending") return
      dismiss()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, status])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const address = email.trim()
    if (!address || status === "sending") return
    setStatus("sending")
    try {
      await sendHeroEmail(address, copy.hero.heroMessage)
      setEmail("")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="top" className="relative flex flex-1 flex-col items-center justify-center px-6">
      <div className="relative z-10 mx-auto flex w-full flex-col items-center justify-center gap-12 text-center">
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full flex-col items-center">
          <motion.p
            className="mb-4 text-2xl leading-none text-white md:text-[32px]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={enter}
            animate={shown}
            transition={{ ...enterTransition, delay: reduced ? 0 : 0.1 }}
          >
            Luca Alejandro Fisogni
          </motion.p>
          <motion.h1
            className="mb-6 w-full bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text font-medium tracking-[-0.02em] text-transparent"
            style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 5vw, 6.25rem)", lineHeight: 1.05 }}
            initial={enter}
            animate={shown}
            transition={enterTransition}
          >
            {copy.hero.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>
          </div>
          <motion.div
            className="mt-2 flex min-h-[50px] w-full flex-col items-center justify-center"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={shown}
            transition={{ ...enterTransition, delay: reduced ? 0 : 0.2 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="email"
                  className="flex flex-wrap items-center justify-center gap-3"
                  initial={{ scale: 0.97, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.97, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full max-w-[320px] items-center gap-2 rounded-full border border-white/20 bg-white/[0.02] py-1.5 pr-1.5 pl-5 backdrop-blur-sm transition-colors duration-300 focus-within:border-white/40"
                >
                  <input
                    type="email"
                    required
                    autoFocus
                    autoComplete="email"
                    spellCheck={false}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={placeholder}
                    aria-label={copy.hero.emailLabel}
                    disabled={status === "sending"}
                    className="w-full bg-transparent text-base text-white placeholder:text-white/45"
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="pressable flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center text-white disabled:cursor-wait disabled:opacity-60"
                    aria-label={
                      status === "sent" ? copy.hero.sent : status === "sending" ? copy.hero.sending : copy.hero.send
                    }
                  >
                    {status === "sent" ? <Check size={16} /> : <ArrowRight size={16} />}
                  </button>
                </form>
                <button
                  type="button"
                  onClick={dismiss}
                  disabled={status === "sending"}
                  className="pressable h-11 cursor-pointer rounded-full border border-white/20 px-5 text-sm font-medium text-white disabled:cursor-wait disabled:opacity-60"
                >
                  {copy.hero.cancel}
                </button>
                </motion.div>
              ) : (
                <motion.button
                  key="cta"
                  type="button"
                  className="pressable h-11 cursor-pointer rounded-full border border-white/10 px-10 text-base font-medium text-white/90 backdrop-blur-sm transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.02]"
                  onClick={openWrite}
                  whileTap={{ scale: 0.97 }}
                  initial={{ scale: 0.97, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.97, opacity: 0 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                >
                  {copy.hero.cta}
                </motion.button>
              )}
            </AnimatePresence>
            <p className="sr-only" aria-live="polite">
              {status === "sent" ? copy.hero.thanks : status === "sending" ? copy.hero.sending : ""}
            </p>
            {status === "error" ? (
              <p className="mt-3 max-w-sm text-sm text-white/80" role="alert">
                {copy.hero.error}{" "}
                <a className="underline" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
            ) : null}
          </motion.div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduced ? 0 : 0.35, duration: reduced ? 0.2 : 0.4 }}
          >
            <a
              href="#work"
              className="pressable text-[13px] font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-white/40"
            >
              {copy.hero.work}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
