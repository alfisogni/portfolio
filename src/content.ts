export type Locale = "es" | "en"

export const portrait = {
  src: "/yo.png",
  alt: "Luca Alejandro Fisogni",
}

export const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "PHP",
  "PostgreSQL",
  "MySQL",
  "SharePoint",
  "API REST",
  "SCSS",
  "Python",
  "Docker",
  "IA Prompts",
  "HTML/CSS",
]

export const projectMedia = [
  {
    name: "ClipFlow",
    href: "https://clip-flow-studio.vercel.app",
    image: "/projects/clipflow.png",
  },
  {
    name: "Mystic Trading",
    href: "https://mystic-trading.vercel.app",
    image: "/projects/mystic.jpeg",
  },
  {
    name: "Thot",
    href: "https://thot-scout-sys.vercel.app/login",
    image: "/projects/thot.png",
  },
  {
    name: "Minerva",
    href: "https://minerva-nine-xi.vercel.app",
    image: "/projects/minerva.png",
  },
]

export const contact = {
  email: "alfisogni@gmail.com",
  phone: "+54 11 5637 4045",
  phoneHref: "tel:+541156374045",
  location: "Isidro Casanova, Buenos Aires, Argentina",
  linkedin: "https://www.linkedin.com/in/luca-fisogni-50279a350",
  github: "https://github.com/alfisogni",
}

export const cvHref = "/Fisogni_Luca_Alejandro_CV.pdf"

type Copy = {
  nav: {
    work: string
    about: string
    contact: string
    resume: string
    talk: string
    language: string
  }
  hero: {
    lines: readonly string[]
    cta: string
    prompt: string
    thanks: string
    sending: string
    error: string
    cancel: string
    work: string
    emailLabel: string
    send: string
    sent: string
    heroMessage: string
  }
  about: {
    title: string
    bio: [string, string, string]
    experience: { title: string; detail: string }[]
    technologies: string
  }
  work: {
    title: string
    demo: string
    projects: { description: string; tags: string[] }[]
  }
  contactSection: {
    title: string
    intro: string
    nameLabel: string
    emailLabel: string
    messageLabel: string
    namePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    send: string
    sending: string
    sent: string
    success: string
    error: string
  }
  video: {
    pause: string
    play: string
  }
}

export const copy: Record<Locale, Copy> = {
  es: {
    nav: {
      work: "Trabajo",
      about: "Sobre mí",
      contact: "Contacto",
      resume: "CV",
      talk: "Dejá tu email",
      language: "Idioma",
    },
    hero: {
      lines: ["Diseñando y construyendo", "experiencias digitales."],
      cta: "Dejá tu email",
      prompt: "Dejá tu email y te escribo",
      thanks: "Gracias, te escribo pronto",
      sending: "Enviando…",
      error: "No se pudo enviar. Escribime a",
      cancel: "Cancelar",
      work: "Ver proyectos",
      emailLabel: "Email",
      send: "Enviar email",
      sent: "Enviado",
      heroMessage: "Dejó su email en el hero.",
    },
    about: {
      title: "Sobre mí",
      bio: [
        "Soy desarrollador web enfocado en frontend y diseño de interfaces, interesado en construir productos claros y funcionales, bien pensados desde la experiencia de usuario hasta la implementación técnica. Trabajo principalmente con React y TypeScript, desarrollando interfaces, dashboards y aplicaciones web. Tengo experiencia integrando APIs, gestionando datos y estructurando proyectos.",
        "Participo en diseño de interfaz, arquitectura frontend y desarrollo de producto.",
        "Utilizo herramientas de IA como apoyo para acelerar prototipos, explorar ideas y mejorar la productividad, manteniendo siempre el control sobre la arquitectura del sistema. Me caracterizo por la proactividad y la curiosidad técnica.",
      ],
      experience: [
        { title: "Frontend", detail: "React · TypeScript" },
        { title: "UX y producto", detail: "Diseño de interfaces" },
        { title: "Con ayuda de IA", detail: "Prototipado y productividad" },
      ],
      technologies: "Tecnologías",
    },
    work: {
      title: "Proyectos",
      demo: "Ver demo",
      projects: [
        {
          description:
            "Generador de clips para creadores: subí un MP4, la IA genera timestamps, títulos y descripciones; se procesan los clips vía Cloudinary y se entregan con signed URLs.",
          tags: ["React", "TypeScript", "Supabase", "Cloudinary", "Gemini AI"],
        },
        {
          description:
            "Landing para una comunidad de trading, con componentes reutilizables, sistema de temas, secciones dinámicas y formularios validados.",
          tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
        },
        {
          description:
            "Plataforma de gestión de objetivos orientada a equipos construida sobre arquitectura desacoplada, diseñada para planificar, ejecutar y monitorear el progreso de forma estructurada. Permite descomponer metas en subtareas, centralizar la colaboración y visualizar el estado general.",
          tags: ["Node.js", "Express", "PostgreSQL", "React", "TypeScript", "Ant Design", "JWT"],
        },
        {
          description:
            "Sistema de automatización de documentación técnica con IA. Procesa múltiples archivos de proyecto, genera documentos Word estructurados con 12 secciones, gestión de versiones e historial de actividad.",
          tags: ["React", "TypeScript", "Ant Design", "Integración con IA", "Automatización de documentos"],
        },
      ],
    },
    contactSection: {
      title: "Contacto",
      intro: "Si tenés un proyecto en mente, escribime. Respondo por mail o por teléfono.",
      nameLabel: "Nombre",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      messagePlaceholder: "Tu mensaje",
      send: "Enviar mensaje",
      sending: "Enviando…",
      sent: "Mensaje enviado",
      success: "Listo. Te respondo pronto.",
      error: "No se pudo enviar. Escribime a",
    },
    video: {
      pause: "Pausar reel",
      play: "Reproducir reel",
    },
  },
  en: {
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
      resume: "Résumé",
      talk: "Get in touch",
      language: "Language",
    },
    hero: {
      lines: ["Designing and building", "digital experiences."],
      cta: "Get in touch",
      prompt: "Leave Your Email And I'll Reach Out",
      thanks: "Thanks, I'll Be In Touch Soon",
      sending: "Sending…",
      error: "Couldn't send. Email me at",
      cancel: "Cancel",
      work: "View Selected Work",
      emailLabel: "Email",
      send: "Send email",
      sent: "Sent",
      heroMessage: "Left their email on the hero.",
    },
    about: {
      title: "About",
      bio: [
        "I'm a web developer focused on frontend and interface design, interested in building products that are clear and functional, thought through from the user experience to the technical implementation. I work mainly with React and TypeScript, building interfaces, dashboards, and web applications. I have experience integrating APIs, managing data, and structuring projects.",
        "I take part in interface design, frontend architecture, and product development.",
        "I use AI tools to speed up prototypes, explore ideas, and work faster, while keeping control of the system architecture. I tend to be proactive and technically curious.",
      ],
      experience: [
        { title: "Frontend", detail: "React · TypeScript" },
        { title: "UX & Product", detail: "Interface design" },
        { title: "AI-assisted", detail: "Prototyping and productivity" },
      ],
      technologies: "Technologies",
    },
    work: {
      title: "Projects",
      demo: "View demo",
      projects: [
        {
          description:
            "Clip generator for creators: upload an MP4, the AI produces timestamps, titles, and descriptions; clips are processed through Cloudinary and delivered with signed URLs.",
          tags: ["React", "TypeScript", "Supabase", "Cloudinary", "Gemini AI"],
        },
        {
          description:
            "Landing for a trading community, with reusable components, a theme system, dynamic sections, and validated forms.",
          tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
        },
        {
          description:
            "Goal-management platform for teams, built on a decoupled architecture, designed to plan, run, and monitor progress in a structured way. It breaks goals into subtasks, centralizes collaboration, and shows overall status.",
          tags: ["Node.js", "Express", "PostgreSQL", "React", "TypeScript", "Ant Design", "JWT"],
        },
        {
          description:
            "Technical-documentation automation with AI. It processes multiple project files, generates structured Word documents with 12 sections, and keeps version history and an activity log.",
          tags: ["React", "TypeScript", "Ant Design", "AI Integration", "Document automation"],
        },
      ],
    },
    contactSection: {
      title: "Contact",
      intro: "If you have a project in mind, write to me. I reply by email or phone.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      send: "Send message",
      sending: "Sending…",
      sent: "Message sent",
      success: "Done. I'll reply soon.",
      error: "Couldn't send. Email me at",
    },
    video: {
      pause: "Pause reel",
      play: "Play reel",
    },
  },
}
