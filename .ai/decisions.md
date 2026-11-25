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
- locale: ES | EN, stored in localStorage
- phrase: the bar name is “Luca Fisogni”. The photo is only in Sobre mí
- video: four projects stay, ClipFlow, Mystic, Thot, Minerva
