import { Mail, MapPin, Phone } from "lucide-react"
import { useState, type FormEvent } from "react"
import { contact } from "../content.ts"
import { sendContactForm } from "../email.ts"
import { useLocale } from "../locale.tsx"

const heading = { fontFamily: "'Instrument Serif', serif" }

type Status = "idle" | "sending" | "sent" | "error"

export function Contact() {
  const { copy } = useLocale()
  const text = copy.contactSection
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === "sending") return
    setStatus("sending")
    try {
      await sendContactForm(event.currentTarget)
      event.currentTarget.reset()
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="scroll-mt-28 px-4 py-8 pb-16 md:px-6">
      <div className="liquid-glass mx-auto max-w-5xl rounded-[32px] px-6 py-14 md:px-12 md:py-16">
        <h2
          className="text-4xl leading-none font-medium tracking-[-0.02em] text-white md:text-5xl"
          style={heading}
        >
          {text.title}
        </h2>
        <div className="mt-10 grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="max-w-md text-[15px] leading-relaxed text-white/75">{text.intro}</p>
            <ul className="mt-8 space-y-5 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="pressable flex items-center gap-3 text-white/85 hover:text-white">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="pressable flex items-center gap-3 text-white/85 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/85">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {contact.location}
              </li>
            </ul>
            <div className="mt-8 flex gap-6 text-sm font-medium">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="pressable text-white/80 hover:text-white">
                LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="pressable text-white/80 hover:text-white">
                GitHub
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
            <label className="flex flex-col gap-2 text-sm text-white/80">
              {text.nameLabel}
              <input
                name="from_name"
                type="text"
                required
                autoComplete="name"
                placeholder={text.namePlaceholder}
                disabled={status === "sending"}
                className="h-11 rounded-2xl border border-white/20 bg-black/35 px-4 text-base text-white placeholder:text-white/40"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-white/80">
              {text.emailLabel}
              <input
                name="from_email"
                type="email"
                required
                autoComplete="email"
                placeholder={text.emailPlaceholder}
                disabled={status === "sending"}
                className="h-11 rounded-2xl border border-white/20 bg-black/35 px-4 text-base text-white placeholder:text-white/40"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-white/80">
              {text.messageLabel}
              <textarea
                name="message"
                required
                rows={5}
                placeholder={text.messagePlaceholder}
                disabled={status === "sending"}
                className="rounded-2xl border border-white/20 bg-black/35 px-4 py-3 text-base text-white placeholder:text-white/40"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="pressable h-11 rounded-full bg-white px-6 text-sm font-medium text-black disabled:cursor-wait disabled:opacity-60"
            >
              {status === "sent" ? text.sent : status === "sending" ? text.sending : text.send}
            </button>
            <p className="sr-only" aria-live="polite">
              {status === "sent" ? text.success : status === "sending" ? text.sending : ""}
            </p>
            {status === "sent" ? <p className="text-sm text-white/80">{text.success}</p> : null}
            {status === "error" ? (
              <p className="text-sm text-white/80" role="alert">
                {text.error}{" "}
                <a className="underline" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
            ) : null}
          </form>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-5xl px-2 text-xs text-white/55">
        © {new Date().getFullYear()} Luca Alejandro Fisogni
      </p>
    </section>
  )
}
