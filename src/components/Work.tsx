import { ArrowUpRight } from "lucide-react"
import { projectMedia } from "../content.ts"
import { useLocale } from "../locale.tsx"
import { Reveal } from "../reveal.tsx"

/**
 * Trabajo: un caso de estudio grande (card-1) y el resto en tarjetas compactas (card-2).
 * El destacado se elige por nombre, no por posición, para que reordenar la lista no lo rompa.
 */
export function Work() {
  const { copy } = useLocale()
  const featured = copy.work.featured

  const items = projectMedia.map((project, index) => ({ project, text: copy.work.projects[index] }))
  const lead = items.find((item) => item.project.name === featured.name)
  const rest = items.filter((item) => item !== lead)

  const caseBlocks = [
    { label: featured.problemLabel, body: featured.problem },
    { label: featured.decisionLabel, body: featured.decision },
    { label: featured.resultLabel, body: featured.result },
  ]

  return (
    <section id="work" className="px-4 py-section md:px-6 md:py-section-lg">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-heading font-medium text-text">{copy.work.title}</h2>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3">
          {lead ? (
            <Reveal as="article" className="card-1 overflow-hidden md:col-span-3">
              <div className="grid md:grid-cols-[1.05fr_1fr]">
                <a
                  href={lead.project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${lead.project.name} — ${copy.work.demo}`}
                  className="pressable block overflow-hidden"
                >
                  <img
loading="lazy" decoding="async"                     src={lead.project.image}
                    alt={lead.project.name}
                    className="aspect-video h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03] md:aspect-auto"
                  />
                </a>
                <div className="flex flex-col p-card md:p-card-lg">
                  <p className="text-xs font-medium tracking-[0.16em] text-accent uppercase">{featured.label}</p>
                  <h3 className="mt-3 font-display text-heading font-medium text-text">{lead.project.name}</h3>
                  <p className="mt-4 text-body text-muted">{lead.text.description}</p>

                  <dl className="mt-6 space-y-4 border-t border-line pt-6">
                    {caseBlocks.map((block) => (
                      <div key={block.label}>
                        <dt className="text-xs font-medium tracking-[0.12em] text-faint uppercase">{block.label}</dt>
                        <dd className="mt-1 text-body text-muted">
                          {block.body ?? (
                            // Marcador visible a propósito: falta texto de Luca, no se inventa.
                            <span
                              data-placeholder=""
                              className="inline-block rounded-md border border-dashed border-accent px-2 py-0.5 text-sm text-accent"
                            >
                              [{featured.missing}]
                            </span>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6">
                    <p className="text-xs font-medium tracking-[0.12em] text-faint uppercase">{featured.stackLabel}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {lead.text.tags.map((tag) => (
                        <li key={tag} className="chip px-3 py-1 text-xs text-muted">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={lead.project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="pressable mt-6 inline-flex h-11 items-center gap-1.5 self-start text-sm font-medium text-muted transition-colors duration-300 hover:text-text"
                  >
                    {copy.work.demo}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          ) : null}

          {rest.map(({ project, text }, index) => (
            <Reveal key={project.name} as="article" delay={index * 80} className="card-2 flex flex-col p-4 md:p-5">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} — ${copy.work.demo}`}
                className="pressable block overflow-hidden rounded-media"
              >
                <img
loading="lazy" decoding="async"                   src={project.image}
                  alt={project.name}
                  className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </a>
              <h3 className="mt-5 text-xl font-medium text-text">{project.name}</h3>
              <p className="mt-2 text-body text-muted">{text.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {text.tags.map((tag) => (
                  <li key={tag} className="chip px-3 py-1 text-xs text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="pressable inline-flex h-11 items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-300 hover:text-text"
                >
                  {copy.work.demo}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
