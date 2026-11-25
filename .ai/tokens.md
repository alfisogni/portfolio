# tokens

Source of truth: the `@theme` block in `src/index.css`. Nothing else holds a raw color, size or radius.
Use the utility (`text-muted`, `bg-ink`, `rounded-card-2`, `py-section`), not the value.

## color
| token | value | role |
|---|---|---|
| ink | #050408 | page base, veil, poster fallback |
| surface | rgb(10 8 18 / .55) | fill of card-1 |
| surface-soft | rgb(10 8 18 / .25) | fill of card-2 |
| line | white / .14 | every thin border |
| text | #fff | titles |
| muted | white / .78 | body copy. AA measured |
| faint | white / .65 | small labels. The floor, never lower |
| accent | #a99bf7 | focus ring, hover, details. Never a fill |

The accent comes from the smoke. Its bright pixels sample at hue 240 (muted indigo), so the accent sits a little warmer, near 250.

## type
- display: Instrument Serif. body: Inter
- scale: xs 12, sm 14, body 15 (line 1.65), base 16, lg 18, 2xl 24, heading 36 to 48 (clamp), hero (own clamp in Hero.tsx)
- titles use `font-display text-heading`

## space
- base is Tailwind's 4px step
- section: `py-section` (48) and `md:py-section-lg` (80)
- card padding: `p-card` (24) and `md:p-card-lg` (40)
- gap between cards: 24 (`gap-6`)

## radius
- card-1 28, card-2 20, media 12, chip and pill full

## card roles
- card-1: fill + shadow + thin border. One per view, the first thing read (the About intro)
- card-2: thin border, light fill, no shadow. Support and containers (Work, Contact, About support, Technologies)
- chip: technology label. No blur of its own
- liquid-glass: the bar and the mobile menu only
