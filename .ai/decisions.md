# decisions

One line. The id points at graph.md.

- phrase: two languages, name above the lines, gradient on dark frames. Hero.tsx
- video: local smoke loop, autoplay. Pause sits in the bar, next to the language control. The Mux stream is gone for good
- video: sources by width. Wide: bg.webm then bg.mp4. 768px or less: bg-mobile.mp4 (640px, 290 KB). Poster is both the video poster and the container background, so the first frame is never black
- video: reduced motion shows the poster only. No file is fetched until the person taps play. Checked with a headless run, not just the rule
- glass: liquid-glass stays, blur 12px, fill rgba(10,8,18,.55). index.css
- tokens: live in the @theme block of index.css and are listed in tokens.md. No raw hex, px radius or font name in components
- cards: two roles. card-1 has fill, shadow and border, one per view. card-2 has only a thin border. liquid-glass is for the bar and the menu
- about: 12-column grid. Intro 12, text 7 + experience 5, technologies 12. Every card shares the same edges
- veil: a dark veil over the video, 35% average, denser at the top and behind the headline. It replaces the old rule against a fixed veil, because measured contrast without it fails (hero text 3.5:1 on the worst frame)
- contrast: AA 4.5:1 is measured, not guessed. Worst 0.1% of pixels across 20 frames. Hero text 6.9:1, text in cards 9:1 or more. Small labels never go under white/65, body copy white/78, placeholders white/60
- write: the bar and “Dejá tu email” / “Get in touch” open the hero field. Contact keeps the full form
- write: Cancelar / Cancel is 44px and sends nothing. Escape does the same
- write: EmailJS notifies Luca. No PDF until the brand files arrive
- nav: below 768px the bar is one row, 60px: name, ES | EN, pause, menu. The panel holds Trabajo, Sobre mí, Contacto, CV. It closes on a link, on Escape (focus returns to the button) and on a tap outside. It breaks at 768, not 640, so no width keeps the old two-row bar
- touch: every tap target is 44px or more, including the name, “Ver proyectos” and the contact links
- contact form: three errors, each says what happened and what to do (offline, rate limit 429, service down). The message stays in the form on error. Fields have id and a label bound with htmlFor
- contact form: the form is read before the await. React nulls event.currentTarget after it, which used to show an error on a mail that had gone out
- scroll: Lenis 1.3.27 (exact), one instance on .page-scroll, not window. No GSAP, so one clock (autoRaf). 1.3.28 was 2 days old, so it waits. Off under reduced motion, also if the setting flips while open. Anchors go through lenis.scrollTo from one document listener, because the bar sits outside the scroller
- scroll: any future inner scroller needs data-lenis-prevent. None exists today
- reveal: opacity + 16px, 500ms, transform and opacity only. Only what starts below the fold is hidden, and it shows as it nears the view or once the person scrolls past it. Reduced motion hides nothing. The old observer fade on the portrait is gone
- locale: ES | EN, stored in localStorage. “IA Prompts” in ES, “AI Prompts” in EN (about.aiPrompts)
- phrase: the bar name is “Luca Fisogni”. The photo is only in Sobre mí
- video: four projects stay, ClipFlow, Mystic, Thot, Minerva
- work: the featured card is Tántalo, “Gestor de tareas con sincronización”. It stands for real professional work done at a company, so it carries no company name, no client name, no screenshot, no link and no code. The tool name is Luca's own pick. The text comes from the project README (stack read from its package.json files). Luca decided to show it knowing the owner's permission is not asked; the cleaner route stays asking for it
- work: Thot and the other three own projects are compact card-2 in a 2x2 grid under the featured card
- work: Tántalo's Resultado is Luca's own account (over two months in use, whole teams, better organized and tracked, positive feedback, only minor requests). It holds no number, because Luca gave none. Do not add a metric unless Luca supplies it. Problema and Decisión are still README drafts that need his OK. The work.featured fields stay nullable: a null renders a dashed “[Pendiente]” marker, and no deploy while any [data-placeholder] shows
- images: project shots and the portrait are WebP (1280px and 480px), lazy-loaded. The old PNGs weighed 8.8 MB at load, now 0.5 MB. yo.png stays only because the JSON-LD in index.html points at it
- fonts: loaded with link tags in index.html, not CSS @import, to cut the request chain
- lighthouse: scores swing a lot between identical runs (TBT 10 to 2400 ms on the same build, headless with no GPU). Compare weight and median, not one run
- work: Tántalo copy is concise and claims only what the repo shows. Result leads with “más de dos meses en uso por equipos enteros”. The card lists what it includes (board and list, project summary and KPIs, analytics, epics and child tasks, hour tracking and stats, calendar, mobile), each checked against the routes and .ai notes of the frontend. Decision text says in first person that Luca took the architecture decisions and learned Azure (identity, Key Vault, Graph, DevOps)
- work: Noah (daily AI plan per person: up to 3 tasks to start with and a reason, with voice) is part of Tántalo, from its .ai/noah.md. Flow analytics (cycle time p50/p85/p95, Monte Carlo forecast) is in its .ai/analisis.md. n8n is NOT in Tántalo: SaulusAI uses it for AI copy via n8n + Gemini. Do not claim n8n on the Tántalo card
- about: n8n is a technology chip and the AI line says automation, at Luca's word (he used it in a marketing calendar project; the repo shows a n8n + Gemini webhook for AI copy). The UX line says interface design and visual direction: his commits in the agent chat app are the glass login hero with a blurred video background, ES/EN switch, multi-chat shell and design polish. No project or company name goes on the page
- work: Luca already knew DevOps, so the Tántalo text says he learned Azure identity, Key Vault and Graph, not DevOps. The page names no URL, tenant, list name or id
