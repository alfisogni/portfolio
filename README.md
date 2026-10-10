# Portfolio — Luca Alejandro Fisogni

Portfolio personal de **Luca Alejandro Fisogni**, desarrollador web enfocado en frontend y diseño de interfaces. Presenta mi perfil profesional, proyectos destacados y un formulario de contacto funcional.

**Sitio en vivo:** [luca-alejandro-fisogni-portfolio.vercel.app](https://luca-alejandro-fisogni-portfolio.vercel.app)

## Sobre el proyecto

Sitio estático de una sola página con secciones de presentación, sobre mí, proyectos y contacto. Diseño oscuro con acentos violeta, animaciones al scroll y cards interactivas para cada proyecto.

### Secciones

- **Inicio** — Presentación, descripción profesional y descarga de CV
- **Sobre mí** — Perfil, stack tecnológico y enfoque de trabajo
- **Proyectos** — ClipFlow, Mystic Trading, Thot y Minerva con enlaces a demos
- **Contacto** — Datos de contacto y formulario con envío por EmailJS

### Proyectos destacados

| Proyecto | Descripción | Demo |
|----------|-------------|------|
| **ClipFlow** | Generador de clips para creadores con IA, Cloudinary y Supabase | [clip-flow-studio.vercel.app](https://clip-flow-studio.vercel.app) |
| **Mystic Trading** | Landing page para comunidad de trading con animaciones y temas | [mystic-trading.vercel.app](https://mystic-trading.vercel.app) |
| **Thot** | Plataforma de gestión de objetivos para equipos | [thot-scout-sys.vercel.app](https://thot-scout-sys.vercel.app/login) |
| **Minerva** | Automatización de documentación técnica con IA | [minerva-nine-xi.vercel.app](https://minerva-nine-xi.vercel.app) |

## Stack tecnológico

| Área | Tecnologías |
|------|-------------|
| App | React, TypeScript, Vite |
| Estilos | Tailwind CSS |
| Video | hls.js, reel de Mux |
| Contacto | EmailJS |
| Deploy | Vercel, al pushear `main` de este repo |

## Estructura del repositorio

```
portfolio/
├── index.html              # Entrada de Vite
├── src/                    # La landing
├── public/                 # Foto, proyectos, CV
├── .ai/                    # Grafo corto para el agente
├── legacy/                 # Sitio estático anterior
├── Nocturnys/              # Proyecto creativo en desarrollo
├── vercel.json             # Build de Vite, salida dist
└── README.md
```

## Desarrollo local

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 5179
```

Vercel corre `npm run build` y publica `dist`. El push tiene que ser a `main` de este repositorio.

## Contacto

- **Email:** alfisogni@gmail.com
- **LinkedIn:** [luca-fisogni](https://www.linkedin.com/in/luca-fisogni-50279a350)
- **GitHub:** [alfisogni](https://github.com/alfisogni)

---

© 2025 Luca Alejandro Fisogni
