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
