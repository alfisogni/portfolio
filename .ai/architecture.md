# architecture

Top down. No cycles.

- main.tsx -> App.tsx
- App -> LocaleProvider -> WriteProvider
- WriteProvider -> BackgroundVideo
- WriteProvider -> LocaleFade -> Navbar, Hero, About, Work, Contact

Reads:

- Navbar, Hero, About, Work, Contact read content.ts through locale.tsx
- Hero reads email.ts (sendHeroEmail only)
- Navbar and Hero read write.tsx
- BackgroundVideo only plays the reel. It does not read the frame

Nocturnys/ stays beside this app. legacy/ is the previous static site. Neither is imported by src/.
