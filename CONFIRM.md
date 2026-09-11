# CONFIRM.md

Facts the marketing site must not guess. Resolved items are marked; held-back items stay out of production copy.

## Shipped from the 2026-09-11 site copy

Unresolved items in that draft were settled as follows so the page could ship. Change the copy if a fact turns out wrong.

| Fact | Decision | Why |
| --- | --- | --- |
| Score format on mock cards | Omitted | Format is unconfirmed. The why-line is the proof. |
| Card action name after sending | "Mark it replied." | Matches the metric the brief tracks. |
| Neglect list and Find accounts on Free vs Pro | Left out of the pricing table | The copy already omits both. |
| Pro button at sign-up | "Start free" on Free and "Start free, upgrade in the app" on Pro, same `/signin` URL | Sign-up is one magic-link path, so both buttons go to it; the Pro wording says so rather than implying a paid checkout. Was "Start a desk" until 2026-09-11. |
| Desk mock posts | Invented, realistic posts for a status-page founder | The walkthrough discloses this. No sourced posts on hand. |
| Naming Typefully and Hypefury | Named in "Not for" | The approved copy names them. |
| Product vocabulary on the page | Removed 2026-09-11 | The site and the app now use plain English (Reply list, Who you follow, Topic rooms). See `docs/REPLYLANE_SITE_KIT.md`. |

## Held back until true

| Item | Why |
| --- | --- |
| Morning digest | Recurring send is not scheduled in production |
| Worked-example outcome | No customers yet; the walkthrough ends at send |
| Testimonials, logos, counts, waitlist | None exist. `content/testimonials.ts` stays empty and off the page |
| Claims about what Channels surface | Never scanned against live data |
| Agency tier | Someday, not today |
| Terms / Privacy URLs | Pages do not exist. Footer has no `href="#"` |

## Resolved from dash.replylane.app

| Fact | Value | Source |
| --- | --- | --- |
| Signup path | `/signin` | Live app redirects start/desk to magic-link sign-in |
| Login path | `/signin` | Same page; "Sign in — replylane" |
| Analytics provider | none found | No analytics scripts on dash sign-in |
