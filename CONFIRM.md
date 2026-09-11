# CONFIRM.md

Facts the marketing site must not guess. Resolved items are marked; unresolved items were removed from production copy.

## Resolved from dash.replylane.app

| Fact | Value | Source |
| --- | --- | --- |
| Signup path | `/signin` | Live app redirects start/desk to magic-link sign-in |
| Login path | `/signin` | Same page; "Sign in — replylane" |
| Analytics provider | none found | No analytics scripts on dash sign-in |

## Unresolved (removed from production copy)

| Placeholder | Where it would have appeared |
| --- | --- |
| `{confirm: how quiet accounts are shown}` | Chapter one · Windows point |
| `{confirm: the window age rule}` | Chapter one · Windows point |
| `{confirm: what the floor filters}` | Chapter one · The floor point |
| `{confirm: source for ninety minutes, or cut this sentence}` | Argument card body + ~90 min line (cut) |
| `{confirm: read-only access}` | Chapter two · You send body (cut; kept "no send button") |
| `{confirm: what a channel does, in two sentences}` | Chapter three · Channels body expansion |
| `{confirm}` channel feature points (×3) | Chapter three · Channels points |
| `{confirm: channel UI}` | Chapter three · Channels illustration |
| `{confirm: when the digest sends and what it contains}` | Chapter three · Morning digest body |
| `{confirm}` digest points | Chapter three · Morning digest points |
| `{confirm: price and what is included}` | Pricing lede (kept "$29/mo" only where prompt states it as final) |
| `{confirm: plan count, names and prices}` | Pricing cards (shipped one $29/mo plan from known copy) |
| `{confirm}` scan limits, circle size, keyword count | Pricing rows (12 queries / 150 accounts / 72 hours not used) |
| `{confirm: legal URLs}` | Footer Legal links (Terms/Privacy hrefs omitted until confirmed) |
| `{confirm: target seller types}` | For and not for · first For line (cut qualifier) |
| Brand docs `REPLYLANE_BRAND_IDENTITY.md`, `REPLYLANE_SITE_KIT.md`, `REPLYLANE_LANDING_PROMPT.md` | Not present in this repo or dash; icon Appendix B regenerated from brand technique; hero card copy reconstructed from section 5.2 |

## Brand docs

Place the three source documents in `/docs` when available. This prompt remains precedence over them.
