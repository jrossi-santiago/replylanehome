# mymind.com vs replylane.app — comparative diagnosis and remedy plan

Reviewed 2026-09-11. Sources: `mymind.com`, `mymind.com/why`, `mymind.com/how`,
`access.mymind.com/pricing`. Compared against this repo at `c87f56f`.

mymind is not a competitor. It sells personal knowledge storage; we sell a reply
list for X. It is here because it is the best-executed example of the thing we are
trying to be: a small, opinionated, privacy-first tool that sells a belief rather
than a feature list, and charges for it without apology. Everything below is about
*how it is sold*, not what it does.

Ten categories, worst gap first.

---

## 1. Site architecture — they have a site, we have a page

**mymind.** Six top-level destinations, each with its own URL and its own job:
`/` (the pitch), `/why` (the manifesto), `/how` (teaching, split six ways by
persona), `/what` (feature reference), `/pricing` (four tiers), `/whats-new`
(changelog, currently leading with a feature called "palace"), plus a reviews page.
Nav reads `What | Why | How | What's New | Log in | Sign up`. Every claim has an
address someone can link to.

**replylane.** One route. `app/page.tsx` renders sixteen sections in a single
scroll; `app/not-found.tsx` is the only other page. Nav is four `#` anchors
(`content/site.ts:20-25`). No `sitemap.ts`, no `robots.ts`, no JSON-LD — the greps
come back empty. `/pricing` does not exist as a URL.

**Diagnosis.** Three costs, all compounding.
- Nothing is linkable. When someone says "their no-auto-reply policy is the whole
  point," they have no URL to paste. `#pricing` is not a page; it is a scroll
  position on a 2,239-word document.
- No SEO surface. One page can rank for one intent. We have at least five distinct
  intents on it (what it is, how it works, what it refuses to do, who it's for,
  what it costs) all competing for one `<title>`.
- No agent surface. Buyers increasingly ask an assistant "what does replylane
  cost." Without a `/pricing` URL, a `Product`/`Offer` JSON-LD block, or a sitemap,
  the honest answer an assistant can give is "I couldn't find pricing."

---

## 2. Order of argument — the belief is buried at position nine

**mymind.** The manifesto is the *second* thing on the homepage, immediately under
the hero, and it is a list of refusals: no "social features," no "vanity metrics,"
no "invasive tracking," no "social pressure," no "collaboration," no "ads." Then
the features. `/why` expands the same refusals into five "because" statements under
three principles: "Beauty is a function," "Make it invisible," "Less features, more
magic." The belief carries the product; the features are evidence for the belief.

**replylane.** Our equivalent asset is `rules` in `content/site.ts:300-330` —
"We never post for you," six nevers and three always. It renders as `RulesBand`,
the **ninth of sixteen** sections, after Story, Lists, Desk, HowItWorks, WhyOnDesk
and TheDraft. A visitor reaches it, if they reach it, roughly 1,400 words in.

**Diagnosis.** We spend the first half of the page explaining a mechanism
(three lists, a button, a filter chain, a draft) and the second half explaining the
belief that makes the mechanism worth trusting. That is backwards for this market.
The reader's live question on arrival is not "how does the scan work" — it is
"is this another auto-reply bot that will embarrass me." `audience.notItems`
(`content/site.ts:~490`) names Typefully and Hypefury and rules out pods and
mass-follow, which means we *know* that is the question. We answer it ninth.

---

## 3. Reading load — 2,239 words to reach a price

**mymind.** Short. One idea per screen, big type, heavy white space, feature names
as two-word cards ("Frictionless notetaking," "Distraction-free reading,"
"Serendipity"). The homepage argument is carried by maybe 400 words and a lot of
pictures.

**replylane.** ~2,239 words of prose in `content/site.ts` across 153 strings.
The heaviest offenders:
- `whyOnDesk` — a five-item reject list, then a two-paragraph "asksBar" explaining
  why follower caps apply to strangers but not to accounts you picked, then a close.
- `theDraft` — an eight-rule list, then a two-column comparison, then a close, then
  a plan note.
- `follow` (`components/sections/Follow.tsx`, 133 lines, our largest) — four
  subsections: the quiet list, five-a-week, finding, topic rooms.

**Diagnosis.** This is very good writing doing the wrong job. Every one of those
paragraphs is an *objection handler* — proof that we thought about the edge case —
and objection handlers belong after the sale is made, not in the middle of it.
Right now the filter-rule explanation (section 7) sits between the product demo
(section 5) and the trust promise (section 9), so the reader pays the full cost of
our rigour before they have any reason to care about it.

---

## 4. Proof — we disclaim ourselves three times

**mymind.** "Trusted by thinkers & doers everywhere," review screenshots on the
homepage, a dedicated reviews page, real interface screenshots, device mockups, and
a "Watch the intro" video.

**replylane.** `content/testimonials.ts` is an empty array by policy, and `CONFIRM.md`
holds back testimonials, logos, counts and waitlist until they are true. Correct.
But the proof we *do* show carries three separate disclaimers:
- `heroTweet.caption`: "A made-up example. Drawn in code, not a screenshot."
- `walkthrough.disclosure`: "The post is written for this page."
- `CONFIRM.md`: "Desk mock posts | Invented, realistic posts for a status-page founder."

**Diagnosis.** The honesty is the brand and must not be traded away. But there is a
difference between *not fabricating proof* and *actively telling the visitor that
nothing they are looking at is real*, which is what three disclaimers in a row
achieve. We are treating "no customers yet" as if it means "no proof available."
It doesn't. Four proof categories need no customers at all: a real screenshot of
`dash.replylane.app`, a screen recording of an actual scan, the filter rules stated
as a countable number, and a named founder standing behind the refusals. We ship
none of them. The site is, today, 100% hand-drawn — there is not one photograph or
screenshot in `public/` beyond four halftone PNGs and the OG image.

---

## 5. Pricing — a table where there should be an argument

**mymind.** Four tiers with names that do positioning work on their own — The
Bookmarker ($4.99/mo), Student of Life ($7.99/mo or $79/yr), Mastermind
($12.99/mo or $129/yr), Newton ($299/yr, openly marked "not yet available but we
are working on it"). Annual saves ~20%. And the price is *justified* in the
merchant's own voice: "We don't run ads. We don't sell your data and we don't track
your every move. Our private platform is 100% supported by our generous members."

**replylane.** Two plans, Free and Pro at $29/mo, a nine-row comparison table, and
three notes (`content/site.ts:pricing`). No annual option. No reason-why-price.
`notes[0]` reads "$29 a month. Cancel on Whop." — the first thing we say about
money after the number is where to go to stop paying, and it names a third-party
processor the visitor has no relationship with yet. Per `CONFIRM.md` the Pro button
goes to the same `/signin` magic link as Free, labelled "Start free, upgrade in
the app."

**Diagnosis.** Three specific problems.
- **No anchor.** $0 → $29 with nothing above it makes $29 the expensive option.
  mymind's $299 Newton tier — which doesn't even exist yet — is what makes $12.99
  feel small. We have a real candidate for this: `CONFIRM.md` holds an agency tier
  as "someday, not today."
- **The value metric is hidden in a table row.** "Accounts you can follow: 10 → 150"
  *is* the upgrade. It is row two of nine, in the same visual weight as "A reason on
  every post: Yes / Yes." The `h2` already says it ("Pay when ten accounts isn't
  enough") and then the table immediately buries it.
- **No reason-why.** mymind earns $12.99 by explaining what it refuses to monetise.
  We refuse *more* than they do — no posting, no selling followers, no background
  scanning, no dossiers — and we never once connect those refusals to the price.
  The nevers in `rules` are the price justification, sitting six sections away.

---

## 6. Media and motion — a text-only site for a product that is a screen

**mymind.** Product mockups on iPhone, interface screenshots, numbered persona
illustrations 01–06, an intro video, per-persona video links on `/how`.

**replylane.** `public/` contains four fonts, four halftone PNGs, an SVG icon, an
Apple touch icon and one OG image. Everything else is drawn in code — `TweetCard`,
`DeskCard`, `PosterFrame`, `Draft`. Exactly two client components exist in the
entire site (`components/Nav.tsx`, `components/Button.tsx`); a grep for
`transition|animate|hover:|useState|useEffect` matches nothing else. No scroll
reveal, no dark mode, no video.

**Diagnosis.** The drawn-in-code aesthetic is a genuine asset and should stay —
it is fast, it is on-brand, and it is why the site feels made rather than
assembled. The problem is that it is the *only* register. The product we sell is a
screen the buyer will look at every morning, and we never show them that screen.
"Press Scan" appears in `howItWorks` step 2 and in the walkthrough, and a visitor
still has no idea what pressing it looks or feels like. One 30–40 second silent
screen recording would carry more conviction than `whyOnDesk` and `theDraft`
combined — and unlike a testimonial, it is available today and it is true.

---

## 7. Conversion architecture — four CTAs across sixteen sections

**mymind.** Download buttons at the top, again in the manifesto ("TRY IT OUT"),
again in the footer ("SIGN UP FOR FREE"), plus repeated app-download rows and a
low-commitment secondary ("Watch the intro," "See how it works") for people not
ready to sign up.

**replylane.** `grep urls.signup` returns five hits: Nav desktop, Nav mobile menu,
Hero, Pricing, FinalCta. Between the hero and the pricing table — sections 2
through 13, the great majority of the page — there is no way to act. Our only
secondary CTA is `hero.secondary` = "See what you get," an anchor to `#desk`.

**Diagnosis.** The page is built as an essay, and essays end with their conclusion.
But conviction on a landing page peaks locally, not at the end: it peaks right
after `RulesBand` ("We never post for you"), and right after `walkthrough` (the
post, start to finish). Both are followed by more reading. We also have no capture
of any kind for the visitor who is convinced but not ready — no email, no
changelog subscribe, nothing. They leave with nothing and we learn nothing, which
is doubly true because `CONFIRM.md` records that no analytics are installed at all.

---

## 8. Surfaces — they meet the user where the work happens

**mymind.** iPhone app, Android app, and a browser extension, with all three offered
as the primary hero CTA. The extension is the load-bearing one: saving happens in
the browser, so the product lives in the browser.

**replylane.** Web only. And our own documented workflow is: read the draft, copy
the draft, open X, paste, send, come back, mark it replied
(`desk.caption`, `howItWorks.steps[2]`, `walkthrough.steps[6]`). That is a
tab-switch round trip on every single reply.

**Diagnosis.** The friction is structural, not cosmetic, and the site makes it
visible without answering it. A browser extension that puts the reason and the
draft next to the post *on X* is the obvious shape of this product's second
surface, and it does not conflict with a single one of our nevers — it is still
read-only, still copy-and-send, still a person hitting send. We don't have to build
it now, but a site that never mentions a second surface reads like a product with
one move.

---

## 9. Audience — five reasons to leave, three to stay

**mymind.** "For visual minds of all kinds," six persona lanes — Designers, Writers,
Marketers, Researchers, Developers, Everyone — each with its own imagery on the
homepage and its own section with its own video on `/how`. Segmentation that
*recruits*.

**replylane.** One `Audience` section, `forItems` with three entries and `notItems`
with five. The disqualification list is longer than the invitation list, and the
last entry is "Anyone who won't pick about a hundred accounts to follow."

**Diagnosis.** The "Not for" list is one of the best things on the site — it is
credible, it is specific, and naming Typefully and Hypefury takes nerve. But 5:3
against is the wrong ratio in the wrong order, and "won't pick a hundred accounts"
reads as a chore disclosed at the end rather than the core commitment disclosed
proudly. Meanwhile the three "For" entries are all the same person viewed three
ways (founder / consultant / creator who sells) with no separate proof, no separate
example, and no separate landing surface. Our `deskCards` example is a status-page
founder throughout; a consultant reading this page never sees themselves.

---

## 10. Trust and legal surface — the privacy claim has no page behind it

**mymind.** Footer carries resources and legal navigation. Privacy is the product
thesis and it is backed by pages.

**replylane.** `footer` is two lines: "© 2026 replylane" and "We never post for
you." `CONFIRM.md` records that Terms and Privacy pages do not exist, and that the
footer deliberately carries no `href="#"` rather than link to nothing. No contact,
no changelog, no status, no founder name anywhere on the site.

**Diagnosis.** Declining to ship a dead link was the right call. But the end state
is a site whose central promise is about what we will and won't do with someone's X
presence, with no privacy policy, no terms, and no human name attached to the
promise. The nevers in `rules` are currently assertions by an anonymous party.
mymind's version of the same claim is backed by a legal footer and a signed "we're
trying something different" statement. Ours is backed by a sentence in a dark band.
This is also the cheapest gap on the list to close.

---

# Remedy plan

Four phases. Phase 1 and 2 are the ones that move the number; 3 and 4 are the
follow-through. Nothing here asks us to invent a fact — every item is either a
rearrangement of copy we already have, a real artifact we can capture today, or a
page that states something already true.

## Phase 1 — Re-sequence and cut (no new facts, no new assets)

Highest value per hour. All of it is `app/page.tsx` order plus moves inside
`content/site.ts`.

**1.1 Move the belief to position two.** Render `RulesBand` immediately after
`Hero`, before `PlainPromise`. New order:

```
Hero → RulesBand → PlainPromise → Story → Lists → Desk → HowItWorks →
Walkthrough → TheDraft → Follow → Frames → Audience → Pricing → WhyOnDesk → Faq → FinalCta
```

Rationale: answer "will this embarrass me" before "how does it work." Note
`WhyOnDesk` moves from 7th to 14th — it becomes proof for buyers, not a toll gate
for browsers.

**1.2 Split `whyOnDesk` and `theDraft` into a summary and a detail.** Keep on the
page: `whyOnDesk.h2`, `lead`, `exampleWhy`, `close` — about 80 words. Move
`cheapRules`, `asksBar`, and `theDraft.rules` (all eight) to a new `/how-it-works`
route (Phase 2). On the homepage, replace each with one line and a link, e.g.
"Five checks run before you see anything, and asks have to clear three more.
→ The full rule list."

**1.3 Rebalance `audience`.** Lead with "For," lift it to four entries by splitting
the founder case (build-in-public founder / agency owner / consultant / creator),
cut `notItems` from five to three by folding "auto-replies, pods or mass-follow"
into the Typefully/Hypefury entry and moving "won't pick a hundred accounts" up
into `follow.lead` where it belongs as a commitment, not a disqualifier.

**1.4 Add two mid-page CTAs.** One directly under `RulesBand` in its new position
two, one directly under `Walkthrough`. Both primary, both `urls.signup`, both
carrying `hero.trust` underneath. Takes `urls.signup` from 5 hits to 7 and closes
the dead zone between hero and pricing.

*Target:* homepage prose from ~2,239 words to ~1,450. *Acceptance:* `npm run
check-copy` passes, `npm run build` clean, no string invented that isn't already in
`content/site.ts` or `CONFIRM.md`.

## Phase 2 — Build the site around the page

**2.1 Four new routes**, each lifting copy that already exists:

| Route | Source copy | Job |
| --- | --- | --- |
| `/pricing` | `pricing` + `faq` billing items | A linkable, quotable price |
| `/how-it-works` | `howItWorks` + `whyOnDesk` full + `theDraft.rules` | The rigour, for people who want it |
| `/never` | `rules` + `audience.notItems` | The manifesto, as a URL |
| `/changelog` | new, one entry per ship | Proof the thing is alive |

Each gets its own `<title>`/`description`, so we stop competing with ourselves for
five intents on one tag. Nav becomes real links: `How it works | What we never do |
Pricing | Changelog`, with `Start free` as the button.

**2.2 SEO and agent surface.** Add `app/sitemap.ts` and `app/robots.ts`. Add
`Product` + `Offer` JSON-LD on `/pricing` with both plans, and `FAQPage` JSON-LD on
`/pricing` fed from `faq`. This is what makes "what does replylane cost" answerable
by an assistant.

**2.3 Legal and human.** Ship `/privacy` and `/terms` as real pages — privacy can
be largely assembled from facts we have already stated and verified: public posts
only, read-only, no X password, no write access, no background scanning, no
dossiers on people. Put a named founder line under `rules.close`. Remove the
matching rows from `CONFIRM.md` as they resolve.

## Phase 3 — Real proof, no fabrication

Strictly in order of honesty-per-effort:

**3.1 Screenshot the real thing.** Capture `dash.replylane.app` — the reply list
with real reason lines. Ship at 1x/2x in `public/`. Then delete
`heroTweet.caption`'s disclaimer *because it no longer applies to the hero* — the
`TweetCard` drawn-in-code treatment stays as the poster register, but the Desk
section gets the real screen.

**3.2 A 30–40 second silent screen recording.** Press Scan → three cards appear →
open one → the reason line → the draft → copy → open on X. Muted autoplay loop,
poster frame, `prefers-reduced-motion` respected per `globals.css`. Secondary hero
CTA becomes "Watch a scan (35s)" and replaces the anchor-to-`#desk`.

**3.3 Count the rules.** `whyOnDesk` already lists 5 cheap rules plus 3 ask
thresholds. State it as a number on the page — "8 checks before a post reaches
you" — sourced from the arrays so it can never drift from the list.

**3.4 Keep `testimonials.ts` empty** until there is a real handle, a real quote, and
written permission. This does not change.

## Phase 4 — Pricing as an argument

**4.1 Add an anchor tier.** Ship the agency tier `CONFIRM.md` defers as a third
column, priced and openly marked not-yet-available, exactly as mymind does with
Newton. This is honest and it repositions $29 as the middle.

**4.2 Add annual.** $29/mo or $278/yr (20% off, same ratio mymind uses). Requires a
Whop product — a real blocker, so log it in `CONFIRM.md` rather than publishing the
number before it exists.

**4.3 Lead with the value metric.** Above the table: "Free follows 10 accounts.
Pro follows 150." Then the table. The `h2` already promises this; the layout should
deliver it before nine rows of parity.

**4.4 Write the reason-why.** Replace `pricing.notes[0]` ("$29 a month. Cancel on
Whop.") with the refusals-as-justification move, in our own voice and using claims
already on the site — no ads, nothing sold, no followers sold, no background
scanning, no files kept on people, paid for by the people who use it. Move the
Whop cancellation line to `faq`, where "How do I cancel?" already lives.

**4.5 Fix the Pro button.** "Start free, upgrade in the app" is accurate but reads
like a deferral at the moment of decision. Either ship a real checkout, or label it
"Start free — upgrade takes one click inside" and say plainly that both plans begin
at the same magic link.

---

## Sequencing

| Phase | Effort | What it fixes |
| --- | --- | --- |
| 1 | ~1 day | Categories 2, 3, 7, 9 — order, load, CTA, audience |
| 2 | ~2–3 days | Categories 1, 10 — architecture, legal, agent-readability |
| 3 | ~2 days + capture | Categories 4, 6 — proof and media |
| 4 | ~1 day + Whop | Category 5 — pricing |

Category 8 (a browser extension) is a product decision, not a site fix. The site
change it implies is one line: say the second surface is coming, or say nothing.
Saying nothing is what we do now, and it is the weaker of the two.

## What we do not copy from mymind

- **Their price points.** $4.99–$12.99 is consumer memory storage. We sell revenue
  work to founders; $29 is not the problem, the absence of an argument for it is.
- **Their vagueness on the homepage price.** They can hide pricing behind a link
  because they have a consumer funnel and reviews. We cannot.
- **Repeating the hero headline down the page.** Reads as a responsive-variant
  artifact, not a decision.
- **Feature-card sprawl.** Nine features in a grid is exactly what `lists.lead`
  ("Three lists. That's the whole product.") was written to avoid. Keep three.
