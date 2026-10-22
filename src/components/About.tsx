import { motion, useReducedMotion } from "motion/react"
import { portrait, technologies } from "../content.ts"
import { useLocale } from "../locale.tsx"

const heading = { fontFamily: "'Instrument Serif', serif" }

export function About() {
  const { copy } = useLocale()
  const reduced = useReducedMotion()

  return (
    <section id="about" className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 md:gap-28">
        <article className="liquid-glass w-full rounded-[28px] px-6 py-8 md:mr-auto md:w-[86%] md:px-10 md:py-10">
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
              <h2
                className="text-4xl leading-none font-medium tracking-[-0.02em] text-white md:text-5xl"
                style={heading}
              >
                {copy.about.title}
              </h2>
              <p data-nosnippet="" className="mt-5 text-[15px] leading-relaxed text-white/75">
                {copy.about.bio[0]}
              </p>
            </div>
          </div>
        </article>

        <article className="liquid-glass w-full rounded-[28px] px-6 py-8 md:ml-auto md:w-[86%] md:px-10 md:py-10">
          <div className="grid items-start gap-10 md:grid-cols-[1.15fr_0.85fr]">
            <div data-nosnippet="" className="space-y-5 text-[15px] leading-relaxed text-white/75">
              <p>{copy.about.bio[1]}</p>
              <p>{copy.about.bio[2]}</p>
            </div>
            <dl className="space-y-6 border-t border-white/10 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
              {copy.about.experience.map((item) => (
                <div key={item.title}>
                  <dt className="text-2xl text-white" style={heading}>
                    {item.title}
                  </dt>
                  <dd className="mt-1 text-sm text-white/65">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>

        <article className="liquid-glass w-full rounded-[28px] px-6 py-8 md:mr-auto md:w-[72%] md:px-10 md:py-10">
          <h3 className="text-sm font-medium tracking-[0.16em] text-white/50 uppercase">
            {copy.about.technologies}
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {technologies.map((name) => (
              <li key={name} className="glass-pill px-3 py-1.5 text-sm text-white/85">
                {name}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
