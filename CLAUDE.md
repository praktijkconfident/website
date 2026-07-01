# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run setup   # installeer + start dev-server (eerste keer)
npm run dev     # start dev-server op localhost:3000
npm run build   # productie-build
```

## Stack

Next.js 15 / React 19 / TypeScript / Tailwind CSS v4 (App Router).

**Tailwind v4:** kleuren zijn gedefinieerd als CSS custom properties in `app/globals.css` via `@theme { }`. Gebruik Tailwind utilities zoals `bg-primair`, `text-accent`, `text-wit` etc.

## Structuur

- `app/globals.css` — huisstijlkleuren, lettertype en herbruikbare CSS-patronen
- `components/Header.tsx` — navigatie incl. Kennis Shop link (`KENNIS_SHOP_URL` constante bovenaan)
- `components/Footer.tsx` — footer
- `components/ScrollReveal.tsx` — scroll-animaties (zie hieronder)
- `app/page.tsx` — homepagina
- `app/over-mij/page.tsx`, `app/aanbod/page.tsx`, `app/contact/page.tsx` — overige pagina's
- `public/fonts/` — eigen fontbestanden (.otf/.ttf/.woff2)
- `public/fotos/portret.jpg` — jouw portretfoto (wordt gebruikt als hero-achtergrond en op de over-mij pagina)

## Aanpassen

1. Kleuren en lettertype: `app/globals.css`
2. Kennis Shop URL: `components/Header.tsx` → `KENNIS_SHOP_URL`
3. Naam en tagline: `components/Header.tsx` en `app/layout.tsx`
4. Content per pagina: vervang de placeholder-teksten
5. Google Analytics: zie de uitgecommente sectie in `app/layout.tsx`

## CSS-patronen in globals.css

### Hero met foto
```tsx
<div className="hero-section" style={{ backgroundImage: "url('/jouw-foto.jpg')" }}>
  <div className="hero-overlay">
    <h1 className="text-white ...">Jouw headline</h1>
    <a href="/aanbod" className="hero-btn">Bekijk mijn aanbod →</a>
  </div>
</div>
```
Ontbreekt de foto? De achtergrond valt automatisch terug op `--color-primair`.

### Twee kolommen (foto naast tekst)
```tsx
<div className="two-col">           {/* of: two-col flip voor foto links */}
  <div className="col-text">
    <h2>...</h2>
    <p>...</p>
  </div>
  <div className="col-image">
    <img src="/foto.jpg" alt="..." />
  </div>
</div>
```

### Scroll-animaties
Voeg `className="reveal"` toe aan elk element dat je wilt laten infaden:
```tsx
<h2 className="text-2xl reveal">Mijn titel</h2>
<p className="reveal">Mijn tekst</p>
```

Voor een lijst waarbij elk item na elkaar verschijnt (staggered), geef de lijst een id:
```tsx
<ul id="mijn-lijst">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

Zet `ScrollReveal` onderaan je pagina:
```tsx
import ScrollReveal from '@/components/ScrollReveal';

// onderaan je return():
<ScrollReveal singles={['.reveal']} grids={['#mijn-lijst']} />
```
