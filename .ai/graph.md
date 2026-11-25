# graph

Entry. Follow the id.

- id: video
  file: src/components/BackgroundVideo.tsx
  depends: []
- id: veil
  file: src/index.css (.bg-veil), src/components/BackgroundVideo.tsx
  depends: [video]
- id: tokens
  file: src/index.css (@theme), .ai/tokens.md
  depends: []
- id: scroll
  file: src/smooth.ts, src/reveal.tsx
  depends: []
- id: glass
  file: src/index.css
  depends: [video]
- id: phrase
  file: src/components/Hero.tsx
  depends: [video, locale]
- id: write
  file: src/write.tsx
  depends: [locale]
- id: locale
  file: src/locale.tsx
  depends: []

- video -> glass: the block blurs the frame behind it
- glass -> phrase: type inside a block keeps a soft white glow
- write -> phrase: the bar and the hero open one field
- locale -> phrase: the lines follow ES | EN

- scroll -> reveal: Reveal hides only what is below the fold and reads .page-scroll as its root
- tokens -> glass: card-1 and card-2 read color, radius and space from the theme
- veil -> glass: the veil sits under the blur, so the block stays calm over bright smoke
- glass rejects: sampling the frame, flipping the ink
