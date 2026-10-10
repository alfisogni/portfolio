import { ArrowUpRight } from "lucide-react"
import { projectMedia } from "../content.ts"
import { useLocale } from "../locale.tsx"

export function Work() {
  const { copy } = useLocale()

  return (
    <section id="work" className="px-4 py-8 md:px-6">
      <div className="liquid-glass mx-auto max-w-5xl rounded-[32px] px-6 py-14 md:px-12 md:py-16">
        <h2
          className="text-4xl leading-none font-medium tracking-[-0.02em] text-white md:text-5xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {copy.work.title}
        </h2>
        <div className="mt-16 flex flex-col gap-20">
          {projectMedia.map((project, index) => {
            const text = copy.work.projects[index]
            return (
              <article key={project.name} className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                <a href={project.href} target="_blank" rel="noreferrer" className="pressable block overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </a>
                <div>
                  <h3 className="text-2xl font-medium text-white">{project.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/75">{text.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {text.tags.map((tag) => (
                      <li key={tag} className="glass-pill px-3 py-1 text-xs text-white/75">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="pressable mt-6 inline-flex h-11 items-center gap-1.5 text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {copy.work.demo}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
