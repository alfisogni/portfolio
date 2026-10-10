# graph

Entry. Follow the id.

- id: video
  file: src/components/BackgroundVideo.tsx
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

- glass rejects: sampling the frame, flipping the ink, a fixed black veil
