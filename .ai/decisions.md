# decisions

One line. The id points at graph.md.

- phrase: two languages, name above the lines, gradient on dark frames. Hero.tsx
- video: local smoke loop, autoplay. Pause sits in the bar, next to the language control. The Mux stream is gone for good
- video: sources by width. Wide: bg.webm then bg.mp4. 768px or less: bg-mobile.mp4 (640px, 290 KB). Poster is both the video poster and the container background, so the first frame is never black
- video: reduced motion shows the poster only. No file is fetched until the person taps play. Checked with a headless run, not just the rule
- glass: liquid-glass stays, blur 12px, no text glow. index.css
- write: the bar and “Dejá tu email” / “Get in touch” open the hero field. Contact keeps the full form
- write: Cancelar / Cancel is 44px and sends nothing. Escape does the same
- write: EmailJS notifies Luca. No PDF until the brand files arrive
- locale: ES | EN, stored in localStorage
- phrase: the bar name is “Luca Fisogni”. The photo is only in Sobre mí
- video: four projects stay, ClipFlow, Mystic, Thot, Minerva
