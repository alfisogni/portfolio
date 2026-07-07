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
| Estructura | HTML5, CSS3, JavaScript (vanilla) |
| Estilos | Variables CSS, Montserrat, diseño responsive |
| Animaciones | [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll) |
| Iconos | Font Awesome 6 |
| Contacto | [EmailJS](https://www.emailjs.com/) |
| Deploy | Vercel |

## Estructura del repositorio

```
portfolio/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos y variables de diseño
├── js/
│   └── script.js           # Navegación, animaciones y formulario
├── images/                 # Imágenes del portfolio y proyectos
├── emailjs-template.html   # Template HTML para emails de contacto
├── EMAILJS_SETUP.md        # Guía de configuración de EmailJS
├── personalizacion.js      # Ejemplos de personalización (referencia)
├── Nocturnys/              # Proyecto creativo en desarrollo
└── README.md
```

## Desarrollo local

No requiere instalación de dependencias ni build step.

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/alfisogni/portfolio.git
   cd portfolio
   ```

2. Abrí `index.html` en el navegador, o usá un servidor local:
   ```bash
   npx serve .
   ```

El formulario de contacto necesita credenciales de EmailJS configuradas en `js/script.js`. Los pasos están en [EMAILJS_SETUP.md](./EMAILJS_SETUP.md).

## Contacto

- **Email:** alfisogni@gmail.com
- **LinkedIn:** [luca-fisogni](https://www.linkedin.com/in/luca-fisogni-50279a350)
- **GitHub:** [alfisogni](https://github.com/alfisogni)

---

© 2025 Luca Alejandro Fisogni
