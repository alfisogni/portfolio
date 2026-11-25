import { motion, useReducedMotion } from "motion/react"
import { portrait, technologies } from "../content.ts"
import { useLocale } from "../locale.tsx"

export function About() {
  const { copy } = useLocale()
  const reduced = useReducedMotion()

  return (
    <section id="about" className="px-4 py-section md:px-6 md:py-section-lg">
      {/* Grilla de 12 columnas: todas las tarjetas comparten los mismos bordes. 12 / 7+5 / 12. */}
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-12">
        {/* Principal: relleno y sombra. Es lo primero que se lee. */}
        <article className="card-1 p-card md:col-span-12 md:p-card-lg">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center">
            <motion.img
              src={portrait.src}
              alt={portrait.alt}
              className="profile-img shrink-0"
              initial={reduced ? { opacity: 0 } : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: reduced ? 0.2 : 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="w-full">
              <h2 className="font-display text-heading font-medium text-text">{copy.about.title}</h2>
              <p data-nosnippet="" className="mt-5 text-body text-muted">
                {copy.about.bio[0]}
              </p>
            </div>
          </div>
        </article>

        {/* Soporte: solo borde. 7 columnas de texto + 5 de experiencia. */}
        <article className="card-2 p-card md:col-span-7 md:p-card-lg">
          <div data-nosnippet="" className="space-y-5 text-body text-muted">
            <p>{copy.about.bio[1]}</p>
            <p>{copy.about.bio[2]}</p>
          </div>
        </article>

        <article className="card-2 p-card md:col-span-5 md:p-card-lg">
          <dl className="space-y-6">
            {copy.about.experience.map((item) => (
              <div key={item.title}>
                <dt className="font-display text-2xl text-text">{item.title}</dt>
                <dd className="mt-1 text-sm text-muted">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </article>

        {/* Tecnologías a ancho completo: etiqueta a la izquierda, chips a la derecha. */}
        <article className="card-2 p-card md:col-span-12 md:p-card-lg">
          <div className="grid gap-5 md:grid-cols-[12rem_1fr] md:gap-10">
            <h3 className="text-sm font-medium tracking-[0.16em] text-faint uppercase">
              {copy.about.technologies}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {technologies.map((name) => (
                <li key={name} className="chip px-3 py-1.5 text-sm text-text/85">
                  {name === "{ai}" ? copy.about.aiPrompts : name}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
