# replylane — copywriter brief

**Prepared:** 2026-09-11
**For:** the copywriter writing replylane.app (the marketing site)
**Product:** live at `dash.replylane.app`
**Marketing site repo:** this one. Copy lives in `content/site.ts`.

This document is everything a writer needs to write the site without opening
the codebase: what the business does, who it serves, how it actually works,
what is true and what is not yet true, the voice rules, the brand system, and
the words that are banned.

Where this brief and older repo documents disagree, **this brief wins** — it was
assembled from the current code and the current decisions log. The two places
older documents are out of date are flagged inline.

---

## 1. The one-paragraph version

replylane is a **reply desk for X (Twitter)**. Every morning it answers one
question: *who should I reply to today?* It watches public posts — both the
accounts you chose to stay visible to, and keyword searches across all of X for
people asking to hire or buy — puts a short, ordered list of posts on a desk,
explains in one line why each post is there, and writes a draft reply in your
voice. **You copy the draft and post it on X yourself. replylane never posts,
likes, follows, or DMs.** It is not a scheduler, a tweet writer, a growth tool,
or an autoresponder.

### The one-sentence version

> replylane finds the X conversations that can become customers. You answer them.

(That line is already approved and in use. See §9 for verbatim-approved copy.)

### The job to be done

> "Show me the eight posts on X this morning where a real person might pay me
> if I show up as a human."

Eight minutes, then close the tab. The product is deliberately something you
leave, not something you live in.

---

## 2. Why it exists (the argument)

Founders and operators who sell from their own face use the For You feed as a
CRM. That fails in two specific ways:

1. **Public buying intent dies fast.** Someone posts "anyone know a good X?"
   and by the time it surfaces in your feed the thread is forty replies deep.
   Early replies win. People are late because they scroll, not because they
   don't care.
2. **Relationships go quiet silently.** You mean to stay visible to the sixty
   or hundred accounts whose audiences overlap your buyers. Then a client week
   flattens you, and nobody notices you're gone — including you. Neglect is
   invisible until pipeline is.

The tools that showed up to fix this made it worse: auto-repliers, engagement
pods, follow-farms. They taught the timeline to ignore strangers, which made
the honest reply harder for everyone.

replylane is the opposite bet: **fewer cards, better ones, and a human hits
send.**

**Enemy line (approved):** *The feed is a terrible CRM.*

---

## 3. Category and positioning

| | |
| --- | --- |
| Hypefury, Typefully, Buffer | Publishing. **What you post.** |
| **replylane** | Replying. **Who you show up for.** |

Nobody owns "who should I reply to today." That is the slot the product claims.

- **Category:** conversation desk / reply desk for X.
- **Shelf it sits on:** next to the CRM and the calendar. A daily work object.
- **Tools it feels like:** Linear, Attio, Cal.com — quiet tools that replaced a
  sloppy habit.
- **Tools it must NOT feel like:** Hypefury, Tweet Hunter, ReplyGuy, anything
  that measures success in posts-per-day or follower count.
- **Compared to lead-gen tools:** it is a CRM for *public intent*. You open it,
  work a queue, mark things done.

**The moat, honestly stated:** not the model and not the data source. It is the
Circle (a hand-curated ~100 accounts) plus the reply history attached to it.
Three months of "who I've shown up for" is expensive to walk away from. A
competitor can copy an AI draft in a weekend.

**Why it prices as a habit:** "find me leads" gets judged on leads closed, every
month, forever. "Never miss the conversations in your world" is a daily habit.
Habits hold $29/mo; lead counts argue with it every billing cycle.

---

## 4. Who it serves

**In one sentence:** solo founders, agency owners, and indie builders whose
pipeline is being a familiar name in the right X rooms — not an ad budget, and
not another publishing queue.

### Primary ICP — solo / indie founder who sells from their face
One person or a tiny founding team. B2B micro-SaaS, tools, agencies-as-products,
newsletters with a product behind them. Typically 1.8k–8k followers. No ads, no
VA farm. Distribution *is* their personal posts and replies.

**Their jobs:** stay familiar to the 50–150 people whose audiences overlap their
buyers; catch the rare "anyone know a tool for X?" without living in search; look
consistent when shipping weeks get ugly.

**Their tell:** they can name 12 accounts they should be in the replies of, and
know there are 100.

### Secondary ICP — agency owner / consultant selling expertise
A 1–10 person specialist shop (positioning, paid social, technical SEO, design,
recruiting). $25–80k/mo. Feast-and-famine is a reputation problem, not a
fulfilment problem. 3k–15k followers; buyers lurk, peers are loud.

**Their jobs:** show up for the same 60–100 operators every week so inbound
feels earned; tap a launch or news spike without rebuilding a list; see who
they've gone quiet on.

**Their killer line:** *"Haven't seen you around."* — said by a peer two weeks
after a prospect hired the person who **was** in the thread.

### Adjacent ICP — creator / operator with a product behind the personal brand
Writer, educator, builder-with-an-audience. 8k–40k followers. Monetises via
course, community, agency or software. X is top-of-funnel and the room they have
to hold.

**Their fear:** sounding like a bot, or becoming "a reply guy" as a brand — while
knowing full well that replies are the job.

### Explicitly NOT for

| Not them | Why |
| --- | --- |
| Paid-growth teams and ad-budget brands | Distribution isn't their own face |
| SDRs optimising close rate | Priced and designed as a daily habit, not a lead counter |
| People who just want to publish more | That's Hypefury / Typefully |
| Engagement pods, mass-follow, auto-comment | Hard rule: we never act on your account |
| Anyone unwilling to curate ~100 accounts | The Circle *is* the product |

**This is a positioning asset, not an apology.** The site should say no out
loud. Turning away the volume customer is part of the pitch.

---

## 5. How it actually works

### 5.1 Setup — two questions, about five minutes

1. **What do you do?** Paste a website URL, upload a PDF or Markdown brief, or
   both (at least one required). The AI reads it and fills in what you sell,
   who your buyer is, and the keywords to watch. You can edit all of it later
   in Settings.
2. **Who do you already read?** Paste **5–10 X handles or profile links** you
   already trust. Every handle is verified against a real X profile — one that
   doesn't resolve is shown on screen, not silently dropped. These become the
   first members of your Circle and act as exemplars when the product suggests
   more accounts.

Then an optional, skippable third step: it proposes more accounts for your
Circle and you approve them one at a time.

> **Note for the writer:** older repo docs describe a long onboarding form
> (offer / buyer / 5–15 keywords / examples / voice samples). **That was
> replaced on 2026-09-10.** First run is two questions. The long form still
> exists in Settings for fixing what the research got wrong. Don't write the old
> flow.

### 5.2 The two lanes — this is the core of the product

| Lane | What's in it | Question it answers | Why you reply |
| --- | --- | --- | --- |
| **Room** | Recent posts from your Circle (the accounts you chose) | *Would a reply here be seen?* | Recognition. It compounds. |
| **Asks** | Keyword searches across all of X | *Is someone asking to buy?* | Revenue. Immediate, and rare. |

- **Asks** is the proof-of-value spike — it's what convinces a sceptic in week
  one. It is a bad *only* strategy, because most scans come back empty.
- **Room** is why people stay subscribed. Far more posts qualify, and every one
  is in front of an audience that matters.
- **Saved** is a filter across both lanes, not a third lane. A saved card keeps
  its own lane's chip, and saved items **never expire and are never capped on
  any plan.** A keep-list that expires is not a keep-list.

> **Naming note:** older documents call the second kind of post a **"Window"**
> and the tabs "Asks / Windows / Saved." The product today ships **"Room"**,
> and the nav names are **Reply Desk**, **My Circle**, **Channels**. The
> current site copy in `content/site.ts` still uses "Window" — that needs
> reconciling. Recommendation: use **Room** (it's what the app says) and reserve
> "window" as a lowercase common noun for the *moment* — "while the window is
> still open."

### 5.3 The Circle — the thing that makes it yours

The Circle is roughly 100 accounts you've chosen: peers, buyers and amplifiers.
Three ways in, all of them approved by you one card at a time:

- **Paste them.** One per line. Every handle verified against a real profile.
- **Find accounts.** The product searches X on your keywords twice — once for
  the *most-liked* posts (the accounts a market is built around, chipped "Known
  in your niche"), once for the *most recent* (the accounts actually in the
  conversation right now) — then ranks the authors and shows you the numbers
  that decided it.
- **The weekly five.** Once a week it proposes five accounts to add, and **at
  least two must come from outside the conversation your Circle is already
  having.** That anti-echo rule is structural, not a preference: a Circle that
  only ever suggests people already talking to each other makes you local and
  then invisible.

Quality bar for a suggested account, printed on screen: posted on your topic
within the last 21 days, between 1,000 and 2,000,000 followers, and real
engagement (median likes and replies, never averages). **The search result is
the verification** — an account is on the list because it posted, which proves
the handle is real and the account isn't protected. Nothing an AI merely
*recalls* ever reaches your screen.

**Deactivating a member never deletes it.** Rejecting a suggestion is remembered
forever, so you're never pitched the same forty accounts twice.

### 5.4 The neglect list — "who have I gone quiet on?"

`/app/circle` is not a roster, it's an answer. For every member it derives
(never stores) how long since they posted, since you were shown one of their
posts, and since you replied. Then it sorts:

- **Neglected** — they're posting, you haven't shown up in 14 days.
- **Quiet** — *they* stopped posting. Checked **before** neglected, deliberately:
  an account that went silent is not somebody you're neglecting, and blaming the
  user for it is how a neglect list becomes noise.
- **Drop list** — members quiet for 30+ days, offered for removal five at a time,
  and a "keep" decision sticks.
- New members get a 7-day grace period.

This is the feature the agency-owner persona has nowhere else. A feed doesn't
have it; a CRM doesn't know about X.

### 5.5 Scanning

Scanning is **on-demand only.** You press **Scan now**. Nothing polls in the
background, nothing runs overnight, and the site should say so — it's a feature
(cost control and honesty), not a limitation to hide.

One scan covers all three harvest paths — keyword queries, your Circle, and any
live Channels — inside a single request with a hard time budget, and it keeps
whatever it found if it runs out of time rather than throwing the work away.

Cheap rules run before anything expensive, and they drop a lot: accounts under
21 days old, follow-farm shapes, posts with almost no text, a slop list
(giveaway / airdrop / dm me for / crypto signal / onlyfans), authors you've
hidden, and authors flooding the radar. On the Asks side it also drops posts
older than 72 hours, posts with more than 60 replies (the window is closed), and
accounts over 250k followers (they get 400 replies; they're not buying). Room
posts are held to a different, deliberately looser bar — **the Ask rules are not
applied to your Circle**, because follower ceilings and reply ceilings exist to
judge whether a *stranger* is a buyer, and every one of them would throw away
exactly the accounts you chose.

### 5.6 The card

Every card shows the original post, the author, the metrics, its age to the
minute, its lane chip, a score, and a **why-line: one plain-English sentence,
eighteen words at most, above the post.** A number without a reason is
decoration. That rule is a brand value, not a UI detail.

Actions are one press and every one of them is one press from being undone:
Open on X · Copy draft · Save · Hide author · Not an ask (Asks lane only).

### 5.7 The draft

Open a good card and a draft is already written. Below the quality floor there's
a "Write a draft" button instead.

The rules the draft obeys, all enforced in code:

- One to three sentences. Never a thread, never a numbered list.
- **Never opens with a compliment.** No "Great question," no "So true," no "This."
- **Never pitches in sentence one.** Answer the question or add one concrete
  observation first.
- **Only an Ask may mention what you sell at all.** A Room post is a conversation
  you're joining, not a lead — replying with a pitch there is the single thing
  that gets someone muted.
- **No links.** No hashtags, no emoji, no @-mentions of anyone but the author.
  (If a draft ends up with a link, the whole sentence goes, not just the URL —
  deleting the address out of "More at https://…" leaves "More at" dangling.)
- Never claims you used their product, met them, or worked with them. Never
  invents a number, a client, or a case study.
- It sounds like your voice samples. With no samples it writes plain, short,
  unadorned English rather than performing a personality nobody gave it.
- 280 characters, and the count shown on screen is computed, not typed.

Then: **there is no send button, and there never will be.** You copy it, change
whatever you want, and post it from your own hands.

### 5.8 Channels (Pro)

A Channel is a hand-built, **time-boxed** room — a named set of accounts and
phrases around a topic. You join one, its posts join your Room lane tagged with
the channel, and the join expires on its own (14 days by default; three live at
once, max).

**A Channel never adds anyone to your Circle.** There is no code path for it.
That separation is the whole design: the Circle is who you're building a
relationship with; a Channel is a room you walk into for a fortnight because
something is happening in it. Leaving is instant, expiry is automatic, nothing
gets swept — and **anything you saved outlives the room.**

Current catalogue (hand-written, five rooms): Build in public · Bootstrapped
SaaS · AI engineering · Design engineering · Go to market.

### 5.9 The morning digest (Pro)

An optional daily email — **off by default** — with five cards, Room first, each
linking straight to X rather than back into the app. It never sends an empty
one. No bell, no badge, no red dot.

> **Truth flag:** nothing currently schedules the digest job in production. The
> code and the "Send one now" button exist; the recurring send is not wired up.
> See §11 — do not promise a daily email arriving at 8am until it does.

---

## 6. Pricing and packaging

| | Free | Pro — **$29/mo** |
| --- | --- | --- |
| Keyword queries | 2 | 12 |
| Circle members | 10 | 150 |
| Cards surfaced per day | 10 **per lane** | Unlimited |
| Saved | **Never capped** | Never capped |
| Drafts | — | Yes |
| Weekly Circle refresh | — | Yes |
| Channels | — | Yes |
| Scan now | **Yes** | Yes |

Billing runs through **Whop**. Cancel there. There is no billing portal inside
the app — "Manage billing" opens Whop's orders page.

Three packaging facts worth putting on the page:

1. **Scan now works on the free plan.** A desk with nothing on it doesn't sell a
   desk. The limits are meant to be felt *after* the product has worked.
2. **The packaging axis is the Circle**, not query count. Circle size is the
   number someone feels every day.
3. **A downgrade never deletes anything.** Your Circle stays, active and
   scanned; the cap is on adding. Nobody's hand-picked list gets deleted because
   a card expired.

An Agency tier (~$79, extra workspaces) is a *someday*, not a today. Don't put
it on the site.

---

## 7. The hard rules — put these on the page

These are absolute, enforced in code, and they are the trust asset. The trust
line **"We never post as you."** must appear in the hero, on pricing, and in the
footer.

**Always:**
- Show the original post, the author, and the link.
- Put a plain-English why-line on every card.
- Let the user send the reply themselves.
- Default drafts short and specific.
- Make hide-author one click.
- Say where the data comes from.
- Treat a false positive as worse than a miss.

**Never:**
- Post, like, follow, or DM on your behalf. Not on a schedule, not ever.
- Scan when you didn't press scan.
- Sell follower growth.
- Pitch in sentence one of a draft.
- Put a link in a draft.
- Fake urgency ("12 users viewing this ask").
- Build dossiers on people.
- Call itself an AI agent.
- Ship "reply while you sleep."
- Use `reply-lane.com` in public. The domain is **replylane.app**.

A useful framing for the writer: an admission early buys trust for the paragraph
after it. "An empty desk is better than a noisy one" and "some mornings nothing
clears the floor" are *selling* sentences here, not disclaimers.

---

## 8. Voice and tone

**Vibe:** a shop floor, not a launch party. Warm paper, one painted line. Dry,
calm, slightly impatient with slop. Mid-century mark, modern desk.

**How to write it:**
- Short sentences. Specific nouns. No excitement.
- Talk to operators like adults. They can write; the product picks the thread
  and takes a first swing at tone. They finish.
- No "you've got this." No confetti. No exclamation marks.
- Concrete numbers over adjectives: "14m ago" beats "fresh." "Eighteen words at
  most" beats "concise."
- Admit the limits out loud — it's the most persuasive move available here.

**The feeling we want after eight minutes:** *"I did the real work on X without
living there."*

**What we want to be called in a year:** *"It's just part of morning ops. Like
the CRM."* Not: *"It's my growth tool."*

### Banned words and phrases

`10x` · `lock in` · `grow your brand` · `AI-powered engagement` · `must-have for
creators` · `excited` · `revolutionize` · `unlock` · `turbocharge` · `reply
while you sleep` · `supercharge` · `game-changer` · `effortless` · `AI agent`
(as a self-description).

There's a `npm run check-copy` script in this repo that enforces a banned-word
list — run it before shipping copy.

**The test:** if a sentence could live on a growth-tool landing page, delete it.

---

## 9. Approved copy — use verbatim where it fits

- **Headline:** replylane finds the X conversations that can become customers.
  **You answer them.**
- **Subhead:** A desk for public intent. Asks and still-open threads, scored for
  what you sell.
- **Enemy line:** The feed is a terrible CRM.
- **Trust line (hero, pricing, footer):** We never post as you.
- **Primary CTA:** Start a desk
- **Secondary CTA:** See the desk
- **Desk caption:** You copy. You send. We stay off the account.
- **Section head:** Two kinds of posts. That's the product.
- **Section head:** Eight minutes. Then X.
- **Pricing line:** $29/mo. Cancel on Whop.
- **FAQ, four answers already settled:**
  - *Do you post as me?* No. Never.
  - *Where does the data come from?* Public X posts, read-only. No X password
    required, no write access to your account.
  - *Is this a growth tool?* No. It's a queue. Success is a useful reply.
  - *What if the desk is empty?* Good. We don't lower the floor.
- **Meta title:** replylane — A desk for public intent
- **Meta description:** Finds the X conversations that can become customers. You
  answer them. We never post as you.

### Lines the personas gave us (use as body copy or testimonial-shaped proof)

- "You're late because you scroll, not because you don't care."
- "Neglect is silent until pipeline is."
- "You're posting into your own house while the party is next door."
- "Three people in your circle posted something you should be in." (This is the
  8am line that makes someone pay $29 — not "0 leads today.")

---

## 10. Brand system

**Name:** `replylane`, one word, **always lowercase in the wordmark**. Spoken
"Replylane." **Never** hyphenate, never `reply-lane.com`.

**Mark:** the return symbol **⏎** (U+23CE). Never an emoji, never a drawn R,
never geometric bars. Lockup: `⏎ replylane`.

**Type:** Manrope ExtraBold (800) for the wordmark · Manrope 500–700 for
headings, tight tracking · Inter for body · monospace for handles and scores.
The lockup is the brand name in the nav — it is **not** the hero headline set at
72px.

**Colour:**

| Role | Hex | Use |
| --- | --- | --- |
| Paper | `#ece8da` | Page background; type on ink |
| Ink | `#150f0a` | Type on paper/snow; dark surfaces; primary buttons |
| Snow | `#ffffff` | Tweet cards |
| Clay | `#d76c40` | Accent **text** only, never a fill |
| Lilac | `#c8abf9` | Status lamps only — blinking working, solid done, hollow failed |

Page is paper. White cards on top. Primary button is ink fill with paper type.
Never paint a large surface clay or lilac.

**Logo never:** stretched, rotated, skewed, in a circle/badge/chip, drop-shadowed,
gradient, glowing, two-tone, or replaced with an emoji.

**Imagery:** no 3D phones, no smiling founders, no gradient mesh, no sparkles, no
mascot. Icons are same-size stroke dots along a shape. The desk mock is real
HTML cards with real post text — not lorem, not a screenshot.

---

## 11. What is TRUE vs NOT YET TRUE

The single most important section for a copywriter. Writing any of the
right-hand column as fact would be a lie on the site.

**True today, safe to claim:**
- The whole loop works end to end in production: sign in, say what you sell,
  scan X, read the desk, open a card, get a draft in your voice.
- Two lanes, Saved, hide author, undo on every action.
- The Circle: paste, verify, find accounts, weekly five, neglect list, drop list.
- Channels exist with a five-room catalogue.
- Drafts with all the rules in §5.7.
- Whop billing, free and Pro plans, every gate enforced server-side.
- Daily spend caps per workspace on both vendors.
- Magic-link sign-in. No password.

**NOT yet proven — do not write as fact:**
- **No real payment has completed end to end.** The first live checkout is still
  a test.
- **Nothing is scheduled.** Not the scan, not the digest. Don't write "wakes up
  every morning," "runs overnight," "arrives at 8am," or anything implying
  background automation. "Press scan" is the honest and, handled well, better
  story.
- **Every AI path is days old in production**, not months. No usage stats, no
  "thousands of cards graded," no averages.
- **Channels have never been scanned against the live data source.**
- **The website/brief onboarding has never run on a real site in production.**
- **There are no customers yet** and therefore **no testimonials, no logos, no
  user counts, no waitlist number.** `content/testimonials.ts` exists in this
  repo — anything in it is placeholder and must not ship as a real quote.
- Legal pages (Terms, Privacy) do not exist yet; footer links are currently
  omitted rather than pointed at 404s.

**Also do not claim:** a Chrome extension, LinkedIn or Reddit support, team
seats, CRM sync, a mobile app, sentiment graphs, or a "brand score." None exist
and none are planned in the near term.

---

## 12. Site structure (recommended, current site already close)

1. **Nav** — lockup left, anchors (How it works · The desk · Pricing), "Start a
   desk" ink button right.
2. **Hero** — eyebrow, headline + subhead verbatim, two CTAs, trust line under
   the buttons. No giant logo above the headline.
3. **The desk mock** — three real cards, one expanded with a draft. Caption:
   "You copy. You send. We stay off the account."
4. **Two kinds of posts** — Asks and Room, one sentence each.
5. **The argument** — "The feed is a terrible CRM." Short. One card.
6. **How it works** — three steps: Brief, Scan, Reply. The last one is yours.
7. **Why it surfaced** — the why-line and the draft rules. This is the trust
   section; give it room.
8. **What it will not do** — the never list, plainly.
9. **The Circle** — the neglect list and the weekly five. *This section is
   currently thin on the live site and it is the strongest differentiator in the
   product.* Recommend expanding it.
10. **For / not for** — say no out loud.
11. **Pricing** — free and Pro side by side, trust line repeated, "Cancel on Whop."
12. **FAQ** — the four settled answers.
13. **Final CTA** — "Tell it what you sell. Paste five accounts you already read.
    That is the whole setup."
14. **Footer** — wordmark, trust line, © 2026 replylane.

All CTAs point to `https://dash.replylane.app/signin`.

---

## 13. Gaps worth fixing in the copy as it stands

Assembled by comparing `content/site.ts` against the shipped product:

1. **"Window" vs "Room."** The site says Window; the app says Room. Pick one —
   recommend Room — and make it consistent, including the card chips in the
   desk mock.
2. **The Circle is under-sold.** The site mentions it in one sub-feature line.
   The neglect list ("who have I gone quiet on?") and the anti-echo weekly five
   are the two things no competitor has, and neither appears on the page.
3. **Channels and the digest are `{confirm}` stubs** in the current copy
   (see `CONFIRM.md`). §5.8 and §5.9 of this brief resolve both — with the
   scheduling caveat in §11 for the digest.
4. **Pricing shows one plan.** There are two. The free plan is a conversion
   asset precisely because Scan now works on it.
5. **The "$29" lede is doing no work.** The price isn't the message; the habit
   is.
6. **"Two questions. That is the whole setup" is the best line on the page** and
   it's buried in a stat row. Consider promoting it.
7. **Legal links are dead.** Either get Terms and Privacy written or keep them
   omitted, but don't ship `href="#"`.
8. **No proof section exists and shouldn't be faked.** Until there are
   customers, the substitute is a worked example: one anonymised card → the
   draft → what happened. One screenshot beats ten features.

---

## 14. How success gets measured (so copy doesn't promise the wrong thing)

The scoreboard the business actually watches:

- Weekly active desks, and paid desks
- Cards marked **replied** per active user per week
- Percentage of surfaced cards dismissed as junk (should fall over time)
- Qualitative: "this became a call / a customer / a useful thread"

**Deliberately ignored:** followers on the brand account, thread impressions,
waitlist size.

So: the site must never promise a number of leads, revenue, or followers. It
promises **coverage of your world, packaged as a morning habit.**

---

## 15. Fast facts sheet

| | |
| --- | --- |
| Product | replylane — a reply desk for X |
| App | `dash.replylane.app` · Site: `replylane.app` |
| Price | Free, and Pro at $29/mo via Whop |
| Setup | Two questions, ~5 minutes |
| Daily use | ~8 minutes, on demand |
| Lanes | Room (your Circle) · Asks (keyword search) · Saved (a filter across both) |
| Circle size | 10 on free, 150 on Pro; ~100 is normal |
| Draft length | 3 sentences, 280 characters, no links |
| Why-line | 18 words maximum, above the post |
| Sign-in | Magic link, no password |
| Data | Public X posts, read-only |
| Write access to your account | **None. Ever.** |
| Scanning | On demand. You press the button. |
| Channels | Hand-built, time-boxed, 14 days, 3 at once, Pro |
| Digest | 5 cards, Room first, off by default, Pro |
| Nav names | Reply Desk · My Circle · Channels |

---

## 16. Source documents, if the writer wants to go deeper

In the product repo (`replylane`):

| File | What's in it |
| --- | --- |
| `PROMPT_CURRENT.md` | The operating document. Current state, every settled decision, §12 is the honest "not yet proven" list |
| `PERSONAS.md` | Three full persona cards with the days that break them |
| `REPLYLANE_BRAND_GTM.md` | Brand, values, always/never, GTM phases. **Note: pre-dates the Room rename and the current palette** |
| `PRODUCT.md` | The v1 pipeline spec — filtering stages, scoring, draft rules |
| `PRODUCT_V2.md` | Why the Room lane exists and what it fixes |
| `REPLYLANE_LANDING_PROMPT.md` | Logo, colour, type, lockup rules. Wins on all four |
| `docs/removed/*.md` | Features deliberately removed and why — useful for knowing what NOT to describe |

In this repo: `content/site.ts` (all current copy), `CONFIRM.md` (facts the site
was told not to guess).
