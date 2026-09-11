# replylane brand identity (synthesized)

> Original `REPLYLANE_BRAND_IDENTITY.md` was not in the repo. Tokens and rules below are taken from the marketing-site build prompt and the live dash app. Replace this file with the authoritative document when available.

## Colour

| Token | Hex | Use |
| --- | --- | --- |
| paper | `#ece8da` | page |
| ink | `#150f0a` | type, dark bands, primary buttons |
| snow | `#ffffff` | cards only, always with shadow-card |
| clay | `#d76c40` | accent text on ink only |
| clay-deep | `#a84a24` | accent text on paper and snow |
| lilac | `#c8abf9` | status lamps only |

Hard rules: clay never as text on paper; clay-deep never on ink; lilac only as an 8px lamp (ink ring on light surfaces); no gradients, blur, glows, or glass.

## Type

- head: Manrope 500–800
- body / mark: Inter 400–700 (mark needs `⏎`)
- mono: IBM Plex Mono 400/500

Self-host with `next/font/local`. Manrope has no italic.

## Dot icons

Seventeen paths of zero-length segments with round caps. See `content/icons.ts` (Appendix B was regenerated from the brand technique).

## Status lamp

8px lilac. States: working (blink), done (solid), failed (outline). Reduced motion: half opacity instead of blink.
