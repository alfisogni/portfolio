import {
  siDocker,
  siHtml5,
  siJavascript,
  siMysql,
  siN8n,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siSass,
  siSupabase,
  siTypescript,
} from "simple-icons"
import { Sparkles, Webhook, type LucideIcon } from "lucide-react"
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform, type MotionValue } from "motion/react"
import { useEffect, useRef } from "react"
import { sharepointPath } from "../icons/sharepoint.ts"

/**
 * Anillo 3D de tecnologías.
 * Geometría: CSS 3D (perspective + preserve-3d). Movimiento: Motion, un solo valor `angle`
 * del que salen la rotación y la profundidad de cada tarjeta, solo con transform y opacity.
 * Se puede arrastrar (con inercia). Pasar el mouse no lo frena: solo se detiene mientras se lo sostiene con el click. Se pausa fuera de pantalla.
 * Con movimiento reducido no hay anillo: se muestra una grilla plana con las mismas tarjetas.
 * Accesibilidad: es una lista real (<ul>) con el nombre de cada tecnología como texto.
 */

type Glyph = { path: string } | { lucide: LucideIcon }

const GLYPHS: Record<string, Glyph> = {
  JavaScript: { path: siJavascript.path },
  TypeScript: { path: siTypescript.path },
  React: { path: siReact.path },
  "Node.js": { path: siNodedotjs.path },
  PHP: { path: siPhp.path },
  PostgreSQL: { path: siPostgresql.path },
  MySQL: { path: siMysql.path },
  SharePoint: { path: sharepointPath },
  "API REST": { lucide: Webhook },
  SCSS: { path: siSass.path },
  Python: { path: siPython.path },
  Docker: { path: siDocker.path },
  Supabase: { path: siSupabase.path },
  n8n: { path: siN8n.path },
  "HTML/CSS": { path: siHtml5.path },
  ai: { lucide: Sparkles },
}

export type TechItem = { key: string; label: string }

const BASE_SPEED = 360 / 52000 // grados por ms: una vuelta cada 52 s
const DRAG_GAIN = 0.32 // grados por píxel arrastrado

function Glyph({ glyph }: { glyph: Glyph }) {
  if ("lucide" in glyph) {
    const Icon = glyph.lucide
    return <Icon className="tech-glyph" strokeWidth={1.5} aria-hidden="true" />
  }
  return (
    <svg className="tech-glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={glyph.path} />
    </svg>
  )
}

function Face({ item }: { item: TechItem }) {
  const glyph = GLYPHS[item.key]
  return (
    <>
      {glyph ? <Glyph glyph={glyph} /> : null}
      <span className="tech-name">{item.label}</span>
    </>
  )
}

function Tile({ item, index, step, angle }: { item: TechItem; index: number; step: number; angle: MotionValue<number> }) {
  // depth: 1 = de frente al que mira, -1 = de espaldas.
  const depth = useTransform(angle, (a) => Math.cos(((a + index * step) * Math.PI) / 180))
  const faceOpacity = useTransform(depth, [-1, 0, 1], [0.3, 0.7, 1])
  const glowOpacity = useTransform(depth, [0.9, 1], [0, 1])

  return (
    <li className="tech-tile" style={{ transform: `rotateY(${index * step}deg) translateZ(var(--tech-r))` }}>
      <motion.div className="tech-face" style={{ opacity: faceOpacity }}>
        <Face item={item} />
      </motion.div>
      <motion.span className="tech-glow" style={{ opacity: glowOpacity }} aria-hidden="true" />
      {/* Dorso: el mismo vidrio con el logo visto desde atrás (espejado), un poco más tenue. */}
      <motion.div className="tech-back" style={{ opacity: faceOpacity }} aria-hidden="true">
        <Face item={item} />
      </motion.div>
    </li>
  )
}

export function TechRing({ items }: { items: TechItem[] }) {
  const reduced = useReducedMotion()
  const angle = useMotionValue(0)
  const stage = useRef<HTMLDivElement>(null)
  const visible = useRef(true)
  const dragging = useRef(false)
  const velocity = useRef(0)
  const last = useRef({ x: 0, t: 0 })
  const step = 360 / items.length

  // No gastar frames cuando el anillo no se ve.
  useEffect(() => {
    const el = stage.current
    if (!el || typeof IntersectionObserver === "undefined") return
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry?.isIntersecting ?? true
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced])

  useAnimationFrame((_, delta) => {
    if (reduced || !visible.current || dragging.current) return
    const d = Math.min(delta, 50)
    velocity.current *= Math.pow(0.94, d / 16.7)
    angle.set(angle.get() + (BASE_SPEED + velocity.current) * d)
  })

  if (reduced) {
    return (
      <ul className="tech-flat">
        {items.map((item) => (
          <li key={item.key} className="tech-tile-flat">
            <Face item={item} />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div
      ref={stage}
      className="tech-stage"
      style={{ "--tech-n": items.length } as React.CSSProperties}
      onPointerDown={(event) => {
        dragging.current = true
        velocity.current = 0
        last.current = { x: event.clientX, t: performance.now() }
        event.currentTarget.setPointerCapture(event.pointerId)
      }}
      onPointerMove={(event) => {
        if (!dragging.current) return
        const now = performance.now()
        const delta = (event.clientX - last.current.x) * DRAG_GAIN
        const dt = Math.max(now - last.current.t, 1)
        angle.set(angle.get() + delta)
        velocity.current = velocity.current * 0.6 + (delta / dt) * 0.4
        last.current = { x: event.clientX, t: now }
      }}
      onPointerUp={() => {
        dragging.current = false
      }}
      onPointerCancel={() => {
        dragging.current = false
      }}
    >
      <div className="tech-tilt">
        <motion.ul className="tech-orbit" style={{ rotateY: angle }}>
          {items.map((item, index) => (
            <Tile key={item.key} item={item} index={index} step={step} angle={angle} />
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
