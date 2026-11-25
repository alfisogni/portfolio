import { portrait, technologies } from "../content.ts"
import { useLocale } from "../locale.tsx"
import { Reveal } from "../reveal.tsx"
import { TechRing } from "./TechRing.tsx"

export function About() {
  const { copy } = useLocale()

  return (
    <section id="about" className="px-4 py-section md:px-6 md:py-section-lg">
      {/* Grilla de 12 columnas: todas las tarjetas comparten los mismos bordes. 12 / 7+5 / 12. */}
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-12">
        {/* Principal: relleno y sombra. Es lo primero que se lee. */}
        <Reveal as="article" delay={0} className="card-1 p-card md:col-span-12 md:p-card-lg">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center">
            <img loading="lazy" decoding="async" src={portrait.src} alt={portrait.alt} className="profile-img shrink-0" />
            <div className="w-full">
              <h2 className="font-display text-heading font-medium text-text">{copy.about.title}</h2>
              <p data-nosnippet="" className="mt-5 text-body text-muted">
                {copy.about.bio[0]}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Soporte: solo borde. 7 columnas de texto + 5 de experiencia. */}
        <Reveal as="article" delay={0} className="card-2 p-card md:col-span-7 md:p-card-lg">
          <div data-nosnippet="" className="space-y-5 text-body text-muted">
            <p>{copy.about.bio[1]}</p>
            <p>{copy.about.bio[2]}</p>
          </div>
        </Reveal>

        <Reveal as="article" delay={80} className="card-2 p-card md:col-span-5 md:p-card-lg">
          <dl className="space-y-6">
            {copy.about.experience.map((item) => (
              <div key={item.title}>
                <dt className="font-display text-2xl text-text">{item.title}</dt>
                <dd className="mt-1 text-sm text-muted">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Tecnologías a ancho completo: etiqueta a la izquierda, chips a la derecha. */}
        {/* Sin tarjeta: el anillo vive directamente sobre el fondo. */}
        <Reveal as="div" delay={0} className="md:col-span-12">
          <div className="flex items-baseline justify-between gap-4 px-2">
            <h3 className="text-sm font-medium tracking-[0.16em] text-faint uppercase">
              {copy.about.technologies}
            </h3>
            <p className="text-xs text-faint">{copy.about.techHint}</p>
          </div>
          <div className="mt-2">
            <TechRing
              items={technologies.map((name) => ({
                key: name === "{ai}" ? "ai" : name,
                label: name === "{ai}" ? copy.about.aiPrompts : name,
              }))}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
