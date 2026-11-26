import { Mail, MapPin } from "lucide-react"
import { useId, useState, type FormEvent } from "react"
import { contact } from "../content.ts"
import { sendContactForm } from "../email.ts"
import { useLocale } from "../locale.tsx"
import { Reveal } from "../reveal.tsx"

type Status = "idle" | "sending" | "sent" | "error"
type ErrorKind = "offline" | "limit" | "server"

function errorKind(error: unknown): ErrorKind {
  if (!navigator.onLine) return "offline"
  const status = (error as { status?: number })?.status
  return status === 429 ? "limit" : "server"
}

export function Contact() {
  const { copy } = useLocale()
  const text = copy.contactSection
  const [status, setStatus] = useState<Status>("idle")
  const [kind, setKind] = useState<ErrorKind>("server")
  const uid = useId()
  const ids = { name: `${uid}-name`, email: `${uid}-email`, message: `${uid}-message`, error: `${uid}-error` }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === "sending") return
    // React anula currentTarget después del primer await: hay que guardar el form antes.
    const form = event.currentTarget
    setStatus("sending")
    try {
      await sendContactForm(form)
      form.reset()
      setStatus("sent")
    } catch (error) {
      setKind(errorKind(error))
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="px-4 py-section pb-16 md:px-6 md:py-section-lg md:pb-20">
      <Reveal className="card-2 mx-auto max-w-5xl px-6 py-14 md:px-12 md:py-16">
        <h2 className="font-display text-heading font-medium text-text">{text.title}</h2>
        <div className="mt-10 grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="max-w-md text-body text-muted">{text.intro}</p>
            <ul className="mt-8 space-y-1 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="pressable flex min-h-11 items-center gap-3 text-white/85 hover:text-text">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li className="flex min-h-11 items-center gap-3 text-white/85">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {contact.location}
              </li>
            </ul>
            <div className="mt-6 flex gap-4 text-sm font-medium">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="pressable inline-flex h-11 min-w-11 items-center text-muted hover:text-text">
                LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="pressable inline-flex h-11 min-w-11 items-center text-muted hover:text-text">
                GitHub
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-sm text-muted">
              <label htmlFor={ids.name}>{text.nameLabel}</label>
              <input
                id={ids.name}
                name="from_name"
                type="text"
                required
                autoComplete="name"
                placeholder={text.namePlaceholder}
                disabled={status === "sending"}
                className="h-11 rounded-2xl border border-white/20 bg-black/35 px-4 text-base text-text placeholder:text-white/60"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <label htmlFor={ids.email}>{text.emailLabel}</label>
              <input
                id={ids.email}
                name="from_email"
                type="email"
                required
                autoComplete="email"
                placeholder={text.emailPlaceholder}
                disabled={status === "sending"}
                className="h-11 rounded-2xl border border-white/20 bg-black/35 px-4 text-base text-text placeholder:text-white/60"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <label htmlFor={ids.message}>{text.messageLabel}</label>
              <textarea
                id={ids.message}
                name="message"
                required
                rows={5}
                placeholder={text.messagePlaceholder}
                disabled={status === "sending"}
                className="rounded-2xl border border-white/20 bg-black/35 px-4 py-3 text-base text-text placeholder:text-white/60"
              />
            </div>
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
            {status === "sent" ? <p className="text-sm text-muted">{text.success}</p> : null}
            {status === "error" ? (
              <p id={ids.error} className="text-sm text-muted" role="alert">
                {kind === "offline" ? text.errorOffline : kind === "limit" ? text.errorLimit : text.error}{" "}
                {kind === "offline" ? null : (
                  <a className="underline" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                )}
              </p>
            ) : null}
          </form>
        </div>
      </Reveal>
      <p className="mx-auto mt-10 max-w-5xl px-2 text-xs text-faint">
        © {new Date().getFullYear()} Luca Alejandro Fisogni
      </p>
    </section>
  )
}
