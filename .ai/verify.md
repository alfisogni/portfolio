# verify

http://127.0.0.1:5179/ at 390 and at 1024.

- Overflow is 0. The name clears the bar
- The bar and the hero open one field. Contact has no form
- Cancel closes with no thanks and no send
- Thanks appears only after a 200
- .profile-img animation-name is not float
- The bar has no code icon
- .liquid-glass backdrop-filter blur is 12px at 390 and at 1024
- Text inside a block keeps the white glow
- Video, 1440 wide: currentSrc is bg.webm, about 516 KB. At 375: bg-mobile.mp4, about 290 KB, preload metadata
- Video, reduced motion (emulate prefers-reduced-motion: reduce): paused is true, readyState is 0, only the poster is fetched, the button reads play
- Pause toggles paused and the button label both ways
- Contrast: no text under 4.5:1. Re-measure after any change to veil, glass fill or text opacity (frames at 1 fps, worst 0.1% of pixels)
- .liquid-glass fill is rgba(10,8,18,.55) and blur is 12px at 390 and at 1024
- At 375: the nav is under 64px, no link or button under 44x44, overflow 0
- Menu: opens with focus on the first link, Escape closes and focuses the button, a link closes it, widening to 768 closes it
- grep finds no glass-pill, no text-[15px], no rounded-[..] and no inline font name in src
- About at 1024: three rows share the same left and right edges. At 375 they stack with no overflow
- Contact form with a stubbed fetch: 200 shows sending then sent and resets. 429, 500 and offline each show their own message and keep the text. Never test with the real EmailJS call, it mails Luca
- EN lists “AI Prompts”, ES lists “IA Prompts”
- Scroll: clicking a bar link eases to the section (scrollTop moves over ~1s, not in one jump), the hash updates, target top is 0
- After a jump to #contact no [data-reveal] stays pending
- Reduced motion (emulated): .page-scroll has no lenis class, pending count is 0
- Do not run a regex over index.css that spans blocks. It once ate the reduced-transparency block. Run npm run build after any CSS edit
- Work: one wide featured card and four compact cards (2x2) at 1024; all stack at 375 with no overflow
- Page text must not contain the name of any employer, client or internal project. Keep that list outside this public repo and check against it by hand
- Every link and button is 44x44 or more at 375 and at 1440
- Before any deploy: document.querySelectorAll('[data-placeholder]').length must be 0
- Technologies: at 1440 and 375 the ring renders with 15 tiles and 15 mirrored backs, overflow 0. With reduced motion there is no .tech-stage, 15 flat tiles. Build must not bundle unused simple-icons
- No phone number anywhere in the page text, no tel: links, and JSON-LD stays valid. The downloadable CV must be checked by hand
- Every file the site references under public/ returns 200 in production (curl each one), especially videos, because .gitignore ignores *.mp4
