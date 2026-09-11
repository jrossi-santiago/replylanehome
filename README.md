# replylane marketing site

Static marketing site for [replylane.app](https://replylane.app). The product lives at [dash.replylane.app](https://dash.replylane.app).

## Stack

- Next.js App Router (static)
- Tailwind CSS v4
- TypeScript strict

## Scripts

```bash
npm run fonts      # subset self-hosted fonts (needs fonttools)
npm run halftone   # generate halftone PNGs + OG + apple icon
npm run check-copy # banned-word and draft-count checks
npm run dev
npm run build
```

## Content

All copy lives in `content/site.ts`. Unresolved product facts are listed in `CONFIRM.md`.
