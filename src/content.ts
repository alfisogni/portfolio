export type Locale = "es" | "en"

export const portrait = {
  src: "/yo.webp",
  alt: "Luca Alejandro Fisogni, AI Growth Engineer — foto de perfil",
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
  "Supabase",
  "{ai}", // se reemplaza por copy.about.aiAgents (ES "Agentes de IA", EN "AI Agents")
  "n8n",
  "HTML/CSS",
]

export const projectMedia = [
  {
    name: "ClipFlow",
    href: "https://clip-flow-studio.vercel.app",
    image: "/projects/clipflow.webp",
  },
  {
    name: "Mystic Trading",
    href: "https://mystic-trading.vercel.app",
    image: "/projects/mystic.jpeg",
  },
  {
    name: "Thot",
    href: "https://thot-scout-sys.vercel.app/login",
    image: "/projects/thot.webp",
  },
  {
    name: "Minerva",
    href: "https://minerva-nine-xi.vercel.app",
    image: "/projects/minerva.webp",
  },
]

export const contact = {
  email: "alfisogni@gmail.com",
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
    menu: string
    closeMenu: string
    menuLabel: string
  }
  hero: {
    lines: readonly string[]
    cta: string
    prompt: string
    thanks: string
    sending: string
    error: string
    cancel: string
    errorCooldown: string
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
    aiAgents: string
    techHint: string
  }
  work: {
    title: string
    demo: string
    projects: { description: string; tags: string[] }[]
    /**
     * Caso de estudio del proyecto destacado. Cada campo es texto de Luca o null.
     * null muestra un marcador visible en la página; nunca se rellena con texto inventado.
     */
    featured: {
      name: string
      label: string
      tagline: string
      description: string
      problemLabel: string
      decisionLabel: string
      resultLabel: string
      includesLabel: string
      includes: string[]
      stackLabel: string
      missing: string
      problem: string | null
      decision: string | null
      result: string | null
      tags: string[]
    }
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
    errorOffline: string
    errorLimit: string
    errorCooldown: string
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
      menu: "Abrir menú",
      closeMenu: "Cerrar menú",
      menuLabel: "Navegación principal",
    },
    hero: {
      lines: ["Diseñando y construyendo", "experiencias digitales."],
      cta: "Dejá tu email",
      prompt: "Dejá tu email y te escribo",
      thanks: "Gracias, te escribo pronto",
      sending: "Enviando…",
      error: "No se pudo enviar. Escribime a",
      cancel: "Cancelar",
      errorCooldown: "Ya enviaste un mensaje hace un momento. Esperá un minuto antes de mandar otro.",
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
        { title: "UX y producto", detail: "Diseño de interfaces y dirección visual" },
        { title: "Con ayuda de IA", detail: "Prototipado, automatización y productividad" },
      ],
      technologies: "Tecnologías",
      aiAgents: "Agentes de IA",
      techHint: "Arrastrá para girar",
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
    featured: {
      name: "Sisifo",
      label: "Caso destacado",
      tagline: "Gestor de tareas con sincronización",
      description:
        "Centraliza en un solo tablero las tareas de Marketing y Desarrollo que antes vivían dispersas en distintas plataformas, y las sincroniza con Azure DevOps y Microsoft Planner en los proyectos que lo necesitan. Incluye a Noah, un asistente de IA que cada mañana arma el plan del día de cada persona: qué tareas conviene empezar y por qué.",
      problemLabel: "Problema",
      decisionLabel: "Decisión de arquitectura",
      resultLabel: "Resultado",
      includesLabel: "Qué incluye",
      includes: ["Tablero y lista por estado", "Resumen y KPIs por proyecto", "Análisis de flujo y pronóstico", "Noah, asistente de IA", "Épicas y tareas hijas", "Registro y estadísticas de horas", "Calendario", "Versión móvil"],
      stackLabel: "Stack",
      missing: "Pendiente: texto de Luca",
      problem:
        "Las tareas estaban repartidas en varias plataformas, sin una vista única. El equipo trabajaba con la incertidumbre de no saber con claridad qué había que hacer, quién lo tenía y qué estaba por vencer.",
      decision:
        "Un solo tablero, sincronizado donde hace falta. SharePoint es la única fuente de verdad, sin base de datos propia: el frontend habla directo con Microsoft Graph y un backend mínimo atiende solo los webhooks de Azure DevOps y los trabajos de sincronización. Tomé estas decisiones de arquitectura y aprendí Azure en el camino: identidad, Key Vault y Graph.",
      result:
        "Más de dos meses en uso por equipos enteros. Trabajo más organizado y trackeado, con mejoras de productividad y de orden, y se terminó la incertidumbre de tener las tareas repartidas en varias plataformas. Las devoluciones son positivas y lo que piden son ajustes menores, como textos o campos nuevos.",
      tags: ["React", "TypeScript", "Ant Design", "MSAL", "Microsoft Graph", "SharePoint", "Azure DevOps", "Microsoft Planner", "Node.js", "Express"],
    },
    },
    contactSection: {
      title: "Contacto",
      intro: "Si tenés un proyecto en mente, escribime. Respondo por mail.",
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
      error: "El servicio de envío no respondió. Tu mensaje sigue en el formulario: probá de nuevo en un rato o escribime a",
      errorOffline: "No hay conexión a internet. Tu mensaje sigue en el formulario: reconectate y volvé a enviarlo.",
      errorLimit: "Se alcanzó el límite de envíos por ahora. Esperá unos minutos y volvé a intentar, o escribime a",
      errorCooldown: "Ya enviaste un mensaje hace un momento. Esperá un minuto antes de mandar otro.",
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
      menu: "Open menu",
      closeMenu: "Close menu",
      menuLabel: "Main navigation",
    },
    hero: {
      lines: ["Designing and building", "digital experiences."],
      cta: "Get in touch",
      prompt: "Leave Your Email And I'll Reach Out",
      thanks: "Thanks, I'll Be In Touch Soon",
      sending: "Sending…",
      error: "Couldn't send. Email me at",
      cancel: "Cancel",
      errorCooldown: "You just sent a message. Please wait a minute before sending another.",
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
        { title: "UX & Product", detail: "Interface design and visual direction" },
        { title: "AI-assisted", detail: "Prototyping, automation and productivity" },
      ],
      technologies: "Technologies",
      aiAgents: "AI Agents",
      techHint: "Drag to rotate",
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
    featured: {
      name: "Sisifo",
      label: "Featured case",
      tagline: "Task manager with sync",
      description:
        "Brings the Marketing and Development tasks that used to live scattered across different platforms into a single board, and syncs them with Azure DevOps and Microsoft Planner in the projects that need it. It includes Noah, an AI assistant that every morning builds each person's plan for the day: which tasks to start with and why.",
      problemLabel: "Problem",
      decisionLabel: "Architecture decision",
      resultLabel: "Result",
      includesLabel: "What it includes",
      includes: ["Board and list by status", "Project summary and KPIs", "Flow analytics and forecast", "Noah, AI assistant", "Epics and child tasks", "Time tracking and hour stats", "Calendar", "Mobile version"],
      stackLabel: "Stack",
      missing: "Pending: text from Luca",
      problem:
        "Tasks were spread across several platforms with no single view. The team worked with the uncertainty of not knowing clearly what had to be done, who owned it and what was about to be due.",
      decision:
        "One board, synced where it is needed. SharePoint is the single source of truth, with no database of its own: the frontend talks straight to Microsoft Graph, and a minimal backend handles only Azure DevOps webhooks and the sync jobs. I made these architecture decisions and learned Azure along the way: identity, Key Vault and Graph.",
      result:
        "More than two months in use by whole teams. Work is better organized and tracked, with gains in productivity and order, and an end to the uncertainty of having tasks spread across several platforms. Feedback is positive, and what they ask for are minor tweaks, such as text or new fields.",
      tags: ["React", "TypeScript", "Ant Design", "MSAL", "Microsoft Graph", "SharePoint", "Azure DevOps", "Microsoft Planner", "Node.js", "Express"],
    },
    },
    contactSection: {
      title: "Contact",
      intro: "If you have a project in mind, write to me. I reply by email.",
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
      error: "The sending service didn't respond. Your message is still in the form: try again in a bit or email me at",
      errorOffline: "You're offline. Your message is still in the form: reconnect and send it again.",
      errorLimit: "The sending limit was reached for now. Wait a few minutes and try again, or email me at",
      errorCooldown: "You just sent a message. Please wait a minute before sending another.",
    },
    video: {
      pause: "Pause reel",
      play: "Play reel",
    },
  },
}
