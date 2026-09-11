# replylane.app — site copy, v1

**Prepared:** 2026-09-11 · **From:** COPYWRITER_BRIEF.md + `.agents/product-marketing.md`
**All CTAs →** `https://dash.replylane.app/signin`

**Key**
- `[VERBATIM]` means approved copy from brief §9, unchanged.
- `[NEW]` means new copy that needs sign-off.
- `→` lines are annotations. Delete them before copy goes into `content/site.ts`.
- `{CONFIRM}` marks a fact the brief doesn't settle. All of them are listed in Part 5.

---

## Part 1 — What the page has to do

**One action:** Start a desk.

**Who's arriving:** Most visitors will come from X, from the founder's posts and replies. They've seen reply tools before and don't trust them. They're skimming for the catch.

**Three jobs, in order:**
1. **Separate from reply-guy tools in the first screen.** "You answer them" and "We never post as you" do this before anyone scrolls.
2. **Name a pain they already feel.** The feed fails in two specific ways, and the reader has lived both.
3. **Prove care with specifics, because there's no social proof.** There are no customers, numbers or testimonials yet. The proof has to be rules people can inspect and a worked example. The strongest persuasion available is admitting limits.

**Constraints that shape every line:**
- Nothing is scheduled, so the site never implies it runs by itself.
- Drafts are Pro-only, so the page never implies free users get drafts.
- Room, not Window.
- No banned words, no exclamation marks.

---

## Part 2 — The angles

Ranked by how much work each does on the page. Each angle has one home section, and the others echo it briefly.

| # | Angle | The line | Lands hardest on | Home section |
|---|---|---|---|---|
| 1 | **The enemy: the feed** | The feed is a terrible CRM. | Everyone. It names the habit they already have. | §4.4 The argument |
| 2 | **The human sends** | We never post as you. / You copy. You send. | Skeptics and creators afraid of sounding like a bot | Hero, desk, never list, pricing, footer |
| 3 | **Who have you gone quiet on?** | Neglect is silent until pipeline is. | Agency owners. It's the feature nobody else has. | §4.10 The Circle |
| 4 | **Early beats clever** | You're late because you scroll, not because you don't care. | Solo founders. Asks is the week-one proof. | §4.4 and §4.5 |
| 5 | **A desk has a bottom** | Eight minutes. Then X. | Anyone who feels X eats their day | §4.3 and §4.6 |
| 6 | **Honesty as the sell** | An empty desk is better than a noisy one. | Operators allergic to hype | §4.7 and FAQ |
| 7 | **Say no out loud** | The Circle is the product. | The right buyer, who feels chosen | §4.12 For / not for |
| 8 | **Replying, not publishing** | Hypefury decides what you post. replylane decides who you show up for. | People comparing tools | §4.12 and FAQ |

→ Don't lead with price or AI. The brief is explicit that the habit is the message. "AI" appears nowhere as a headline word.

---

## Part 3 — Page flow at a glance

| # | Section | Its one job | Change from brief §12 |
|---|---|---|---|
| 1 | Nav | Get out of the way | Optional: add "The Circle" anchor |
| 2 | Hero | Say what it is, separate from bots | None |
| 3 | The desk | Show the product before explaining it | Adds a heading |
| 4 | The argument | Name the two failures | **Moved above "Two kinds"** |
| 5 | Two kinds of posts | Answer each failure with a lane | Now reads as the answer to §4 |
| 6 | How it works | Brief, Scan, Reply | "Two questions. That is the whole setup" promoted |
| 7 | Why it's on your desk | Why-line and filters (trust, part 1) | Split into two sections |
| 8 | The draft | Draft rules (trust, part 2) | Split out |
| 9 | What it will not do | The never list | None |
| 10 | The Circle | Neglect list, weekly five, Channels | **Expanded** |
| 11 | One card, start to finish | Stands in for proof | **New** (brief §13.8) |
| 12 | For / not for | Say no out loud | None |
| 13 | Pricing | Free and Pro, habit not lead count | Two plans, not one |
| 14 | FAQ | Four settled answers plus five proposed | Additions marked |
| 15 | Final CTA | Setup is small | None |
| 16 | Footer | Trust line again | No legal links yet |

→ **Why move the argument up.** The brief's two failures map one-to-one onto the two lanes: late asks lead to **Asks**, and silent neglect leads to **Room**. With the problem first, "Two kinds of posts" arrives as the answer instead of a feature list. The desk mock stays above both so people see the thing before they read about it.

---

## Part 4 — The copy

### 4.1 Nav

`⏎ replylane` (lockup, left)
**How it works** · **The desk** · **The Circle** · **Pricing**
Button: **Start a desk** `[VERBATIM]`

→ "The Circle" is an optional fourth anchor. Add it only if the Circle section gets expanded as below. It's the strongest differentiator and currently has no front door.

---

### 4.2 Hero

**Eyebrow** `[NEW]`
A reply desk for X

**Headline** `[VERBATIM]`
replylane finds the X conversations that can become customers. **You answer them.**

**Subhead** `[VERBATIM]`
A desk for public intent. Asks and still-open threads, scored for what you sell.

**Buttons**
Primary: **Start a desk** `[VERBATIM]`
Secondary: **See the desk** `[VERBATIM]` → anchors to `#desk`

**Under the buttons** `[VERBATIM + NEW]`
We never post as you. · Free plan · No X password

→ The headline does the transformation in two beats. The first half is the outcome; the second half ("You answer them.") is the anti-bot promise. The trust line under the buttons catches the question every skeptic has at the moment of clicking.

→ "Free plan · No X password" deals with the two anxieties that stop a click: cost and account access. Both are true today.

**Headline alternatives** (keep A as default; B and C are for testing or campaign pages)
- **A:** replylane finds the X conversations that can become customers. You answer them. — Approved, and passes the "now you can" test.
- **B:** The feed is a terrible CRM. This is the desk. — Leads with the enemy. Strongest for cold traffic arriving from a thread complaining about reply guys.
- **C:** Who should you reply to on X today? — Question formula, and it's the literal job to be done. It needs a strong subhead to carry the outcome.

**CTA alternatives**
- **A:** Start a desk — Approved and on-brand. It names the object, not a vague action.
- **B:** Start a free desk — Puts "free" at the point of decision. Worth an A/B test once there's traffic.
- **C:** Open my desk — First-person variant. Slightly warmer, slightly less clear to first-time visitors.

---

### 4.3 The desk `#desk`

**Heading** `[NEW]`
A feed has no bottom. A desk does.

**The mock** (real HTML cards on paper; card text below)

Desk header: `Reply Desk` · tabs `Asks` `Room` `Saved` · button `Scan now` · lilac lamp, solid · `3 cards`

**Card 1 — expanded**
Chip: `Asks` · Score: `{CONFIRM score format}` · `14m ago` · `5 replies` · `2,140 followers`
Why-line: *Asking for a cheaper status page tool, which is what you sell. Five replies so far.*
Post:
> Is there a status page tool that isn't $99/mo? Two-person team. We just need incident updates and email subscribers, nothing else.

Draft · `209 / 280`
> If it's only incidents and email subscribers, most of what those $99 plans charge for is stuff you won't touch. Worth trying a smaller tool first. I built one for exactly that setup and can share it if useful.

Actions: `Copy draft` · `Open on X` · `Save` · `Hide author` · `Not an ask`

**Card 2 — collapsed**
Chip: `Room` · `41m ago` · `3 replies`
Why-line: *Circle member writing about incident comms, a topic you sell into. 41m ago, 3 replies.*
> Our first real outage last night. Wrote the postmortem before the fix was even deployed. Not sure that was smart.

**Card 3 — collapsed**
Chip: `Room` · `22m ago` · `8 replies`
Why-line: *Circle member talking changelogs with founders who ship weekly. 22m ago, 8 replies.*
> Unpopular opinion: your changelog is a sales page and you're writing it like a git log.

**Caption** `[VERBATIM]`
You copy. You send. We stay off the account.

→ The example desk belongs to an invented founder who sells a small status-page tool, which is the primary ICP. All three posts were written for this page. `{CONFIRM}` Brief §10 says "real post text." If that means sourced public posts, swap these for anonymised real ones.
→ Chips say **Room**, not Window (brief §13.1).
→ Showing one Ask and two Room cards is deliberate. It matches reality (Asks are rare) and makes the next two sections feel honest.
→ The heading is the page's central analogy. A feed never ends, so you never finish. A desk has a pile and a last card. It also sets up "Eight minutes. Then X."

---

### 4.4 The argument

**Label** `[NEW]` The problem
**Heading** `[VERBATIM]`
The feed is a terrible CRM.

**Lead** `[NEW]`
You already use X to find work. You just use the For You feed to do it, and the feed fails in two quiet ways.

**Card 1: The ask you saw at 4pm** `[NEW]`
Someone asks for a recommendation at 9:14. It reaches your feed at 4pm, forty replies deep. The person who answered at 9:20 is the one who gets the DM.
You're late because you scroll, not because you don't care.

**Card 2: The people you meant to keep up with** `[NEW]`
There are about a hundred accounts whose audiences overlap your buyers. You mean to stay visible to them. Then a client week flattens you, and nobody notices you're gone, including you.
Two weeks later a peer says, "Haven't seen you around."
Neglect is silent until pipeline is.

**Close** `[NEW]`
The tools that showed up to fix this made it worse. Auto-repliers and engagement pods taught the timeline to ignore strangers, which made the honest reply harder for everyone.
replylane is the opposite bet: fewer cards, better ones, and a human hits send.

→ Two short second-person stories, not testimonials. They're scenarios the reader recognises. Every clock time is illustrative and reads that way.
→ Brief says "Short. One card." This is two cards, because each failure sets up one lane in the next section. If it has to be one card, keep card 2 and cut card 1 down to its last sentence.
→ "Haven't seen you around" is the agency persona's killer line. It works best as dialogue, not a headline.

---

### 4.5 Two kinds of posts

**Heading** `[VERBATIM]`
Two kinds of posts. That's the product.

**Asks — someone is asking to buy.** `[NEW]`
Keyword searches across all of X for people asking to hire or buy. This is revenue, when it happens. It doesn't happen often, so early matters more than anything else.
*An ask is a raised hand in a crowded room. By reply sixty, it's down.*

**Room — a reply here would be seen.** `[NEW]`
Recent posts from your Circle, the accounts you chose. This is recognition, and it compounds. Most mornings, this is where the work is.
*Room replies work like being a regular. Nobody remembers the one night you came in. They notice when you stop.*

**Footnote** `[NEW]`
Plenty of mornings the Asks lane is empty. The Room is why that's fine.
Saved is a filter across both, not a third pile. Saved cards never expire and are never capped on any plan. A keep-list that expires isn't a keep-list.

→ One sentence of fact, one line of meaning, one italic analogy per lane. The analogies are what people will repeat.
→ "Plenty of mornings the Asks lane is empty" is an early admission that buys trust for everything after it (brief §7). It also stops Asks from being judged as a lead counter.

---

### 4.6 How it works `#how`

**Heading** `[VERBATIM]`
Eight minutes. Then X.
**Sub** `[NEW]`
Three steps. The last one is yours.

**1 · Brief**
**Two questions. That is the whole setup.** `[VERBATIM, promoted]`
*What do you do?* Paste your website, a PDF or a Markdown brief. It fills in what you sell, who buys it and the keywords to watch. Anything it gets wrong, you fix in Settings.
*Who do you already read?* Paste five to ten X handles you trust. Each one is checked against a real profile. If one doesn't resolve, you see it on screen; nothing is dropped silently. These become the start of your Circle.
About five minutes.

**2 · Scan**
**You press the button.**
Press Scan now. One scan checks your keywords and your Circle, throws out the junk and lays what's left on the desk, each card with one sentence on why it's there.
Nothing runs when you're not looking. It's a light switch, not a motion sensor.

**3 · Reply**
**The part that's yours.**
Open a card. On Pro, a draft is already written. Change what you want, copy it, open the post on X and send it from your own account. Mark it replied `{CONFIRM action name}`. Close the tab.

**Close** `[NEW]`
The real work on X, without living there.

→ This promotes the best line on the current site out of the stat row (brief §13.6).
→ "Anything it gets wrong, you fix" is deliberate. Website onboarding hasn't run on a real site in production yet, so the copy promises editability, not accuracy.
→ "You press the button" turns on-demand scanning into a feature (§5.5). It never says morning, overnight or automatic.
→ "On Pro, a draft is already written" keeps the free plan honest.

---

### 4.7 Why it's on your desk

**Heading** `[NEW]`
Every card says why it's there.

**Lead** `[NEW]`
A score without a reason is decoration. So every card carries a why-line: one plain sentence, eighteen words at most, above the post.

**Example** (render as a card fragment)
*Asking for a cheaper status page tool, which is what you sell. Five replies so far.*

**Subhead** `[NEW]`
What gets thrown out before you see anything

**Body** `[NEW]`
Cheap rules run first, and they drop a lot:
- Accounts younger than 21 days
- Follow-farm shapes
- Posts with almost no words in them
- Giveaways, airdrops, "DM me for" and crypto signals
- Authors you've hidden, and authors flooding the desk

Asks clear a stricter bar on top of that. A post older than 72 hours is out. A post with more than 60 replies is out, because the window is closed. An author with more than 250,000 followers is out: they get 400 replies, and they aren't buying.

Your Circle doesn't get those rules. Follower and reply ceilings exist to judge strangers. Applied to the accounts you chose, they'd throw out exactly the people you chose.

**Close** `[NEW]`
A false positive costs you more than a miss. An empty desk is better than a noisy one.

→ This is trust section part 1 (brief: "give it room"). Real numbers do the persuading: 18, 21, 72, 60, 250,000. Each one is a rule a skeptic can check.
→ The Circle exemption is counterintuitive and shows the product was thought through. Keep it.

---

### 4.8 The draft

**Heading** `[NEW]`
A first draft that follows the rules.

**Lead** `[NEW]`
It writes like a colleague who read the thread. You're the one who signs it.

**The rules** `[NEW]` (all enforced in code)
- One to three sentences. Never a thread, never a list.
- Never opens with a compliment. No "Great question." No "So true." No "This."
- Never pitches in the first sentence. It answers the question or adds one concrete observation first.
- Only an Ask can mention what you sell. A Room post is a conversation you're joining, and a pitch there is how people get muted.
- No links, hashtags or emoji.
- Never claims you used their product, met them or worked with them. Never invents a number or a client.
- Sounds like your writing samples. With none, it writes plain and short instead of inventing a personality.
- 280 characters, counted on screen, not guessed.

**Side-by-side: same founder, two posts** `[NEW]`

| Ask | Room |
|---|---|
| *Is there a status page tool that isn't $99/mo?* | *Our first real outage last night. Wrote the postmortem before the fix was even deployed.* |
| If it's only incidents and email subscribers, most of what those $99 plans charge for is stuff you won't touch. Worth trying a smaller tool first. I built one for exactly that setup and can share it if useful. | Writing it before the fix shipped is the part people remember, even if the root cause changes later. An update line at the top covers you when it does. |
| Mentions the product in sentence three. | Doesn't mention it at all. |

**Close** `[NEW]`
There is no send button. There never will be.

**Plan note** (small) `[NEW]`
Drafts are on Pro. On Free you get every card and every why-line, and you write the reply.

→ The side-by-side proves the most important rule (no pitch in the Room) without a paragraph about it.
→ "There is no send button. There never will be." is the hinge into the never list. Keep these two sections adjacent.

---

### 4.9 What it will not do

**Heading** `[NEW]`
What replylane will not do.

**Lead** `[NEW]`
These are rules in the code, not settings.

**Never** `[NEW]`
- Post, like, follow or DM for you. Not on a schedule, not ever.
- Scan when you didn't press Scan.
- Sell you followers.
- Fake urgency. You'll never see "12 people viewing this ask."
- Build dossiers on people.
- Call itself an agent.

**Always** `[NEW]`
- Show the original post, the author and the link.
- Tell you where the data comes from: public X posts, read-only.
- Hide an author in one press, and make every action one press from undone.

**Close** `[VERBATIM]`
We never post as you.

→ Plain list, no adjectives, as brief §12.8 asks. "Reply while you sleep" is on the brief's never list, but it's also a banned phrase and would fail `npm run check-copy`. It's covered by the first bullet instead.

---

### 4.10 The Circle `#circle`

**Label** `[NEW]` The Circle
**Heading** `[NEW]`
Who have you gone quiet on?

**Lead** `[NEW]`
Your Circle is about a hundred accounts you picked: peers, buyers and the people your buyers listen to. The Room lane watches them. The longer you keep a Circle, the more it knows about who you've shown up for.

---

**The neglect list**
**Your CRM has a "last contacted" column. X doesn't. This does.** `[NEW]`

My Circle isn't a roster. It's an answer. For every account it works out how long since they posted, since you saw one of their posts and since you last replied. Then it sorts them:

- **Neglected.** They're posting. You haven't shown up in 14 days.
- **Quiet.** They stopped posting. This is checked first, so you're never blamed for someone else's silence.
- **Drop list.** Quiet for 30 days or more. Offered for removal five at a time. Say keep, and it stays kept.

New members get a week before any of this applies.

→ This is the section brief §13.2 calls under-sold. The CRM analogy makes the value obvious in one line to the agency persona, who already lives in a CRM.
→ "Checked first, so you're never blamed" explains a design decision as a kindness. That's rare on a landing page, and it's exactly the brand.

---

**The weekly five** · Pro
**Five new accounts a week. At least two from outside your bubble.** `[NEW]`

Once a week it suggests five accounts to add, and at least two have to come from outside the conversation your Circle is already having. That's a rule, not a preference. A Circle that only finds people already talking to each other makes you local, then invisible.

*You're posting into your own house while the party is next door.*

Every suggestion has to clear a bar printed on screen: posted on your topic in the last 21 days, between 1,000 and 2,000,000 followers, and real engagement, measured by median, never average. An account shows up because it posted, which proves it's real. Nothing an AI merely remembers ever reaches your screen.
Reject one, and you'll never be pitched it again.

---

**Finding accounts** `[NEW]`
Paste them one per line. Or let it search your keywords twice: once for the most-liked posts, meaning who the market is built around, and once for the most recent, meaning who's talking right now. You see the numbers that ranked each account, and you approve them one at a time. `{CONFIRM plan}`

---

**Channels** · Pro
**Rooms you walk into for two weeks.** `[NEW]`

A Channel is a hand-built set of accounts and phrases around a topic. Join one, and its posts show up in your Room lane, tagged. The join ends on its own after 14 days. Up to three at once.

A Channel never adds anyone to your Circle. Think of your Circle as your contacts and a Channel as a conference badge that expires. Leave whenever you like, and anything you saved outlives the room.

Rooms right now: Build in public · Bootstrapped SaaS · AI engineering · Design engineering · Go to market

---

**Close** `[NEW]`
Deactivating someone never deletes them. Downgrading never deletes anyone. Your Circle is yours.

→ Channels copy describes the design (true in code). It deliberately makes no claim about what a Channel will surface, because Channels haven't been scanned against live data (§11).
→ The conference-badge analogy explains Circle versus Channel in seven words.

---

### 4.11 One card, start to finish

**Label** `[NEW]` Example
**Heading** `[NEW]`
One card, start to finish.

**Disclosure line** `[NEW]`
An example desk for a founder who sells a small status-page tool. The post is written for this page. The rules it passed are real.

**Walkthrough** `[NEW]`

**1 · Scan.** They press Scan now at 9:02. Most of what comes back is thrown out, and three cards make the desk.

**2 · The card.**
> Is there a status page tool that isn't $99/mo? Two-person team. We just need incident updates and email subscribers, nothing else.

*Asking for a cheaper status page tool, which is what you sell. Five replies so far.*

**3 · Why it made it.** 14 minutes old, under 72 hours. 5 replies, under 60. 2,140 followers, under 250,000. The account is years old. The post is a real question, not a giveaway.

**4 · The draft.**
> If it's only incidents and email subscribers, most of what those $99 plans charge for is stuff you won't touch. Worth trying a smaller tool first. I built one for exactly that setup and can share it if useful.

**5 · What they changed.** "and can share it if useful" became "happy to send it over." Their words, not ours.

**6 · Sent.** Copied, opened on X, posted from their own account at 9:07. Reply number six, not reply number forty-six.

**What happened next** `{FILL}`
Put a real, anonymised outcome from your own desk here. If you don't have one yet, end the example at step 6. Don't invent a result.

→ This stands in for the proof section that can't exist yet (brief §13.8). Its persuasion is inspectable: every number maps to a published rule from §4.7.
→ The disclosure line is short and dry, and it makes the example more convincing, not less.
→ Step 5 is the story beat that matters. The human edits and sends, so the product is visibly a first swing, not a ghostwriter.

---

### 4.12 For / not for

**Heading** `[NEW]`
Who it's for. And who it isn't.

**For** `[NEW]`
- **Solo founders whose distribution is their own posts and replies.** You can name twelve accounts you should be in the replies of, and you know there are a hundred.
- **Agency owners and consultants** who get hired because the right operators keep seeing their name.
- **Creators with a product behind the audience,** who know replies are the job and refuse to sound like a bot doing it.

**Not for** `[NEW]`
- **Ad-budget brands and paid-growth teams.** Your distribution isn't your own face.
- **SDRs counting leads.** This is a daily habit, not a lead counter.
- **People who want to post more.** That's Typefully or Hypefury. They decide what you post. We help with who you show up for. `{CONFIRM naming competitors}`
- **Anyone after auto-replies, pods or mass-follow.** We never touch your account.
- **Anyone who won't pick about a hundred accounts.** The Circle is the product.

**Close** `[NEW]`
If you want volume, there are tools for that. This one sends you back to X with a few replies worth sending.

→ Brief §4: "say no out loud." The right reader feels chosen by the "not for" list.
→ The "For" items use the personas' own tells ("name twelve accounts") so readers self-identify.

---

### 4.13 Pricing `#pricing`

**Heading** `[NEW]`
Start free. Pay when ten accounts isn't enough.

**Lead** `[NEW]`
Scan works on the free plan, because an empty desk doesn't sell a desk. The limits are meant to show up after it's worked.

| | **Free** | **Pro** |
|---|---|---|
| Price | $0 | **$29/mo** |
| One line | See whether your corner of X is worth a desk. | Keep up with your whole Circle. |
| Scan now | Yes | Yes |
| Circle accounts | 10 | 150 |
| Keyword searches | 2 | 12 |
| Cards a day | 10 per lane | Unlimited |
| Why-line on every card | Yes | Yes |
| Saved | Never capped | Never capped |
| Drafts in your voice | — | Yes |
| The weekly five | — | Yes |
| Channels | — | Yes |
| Button | **Start a desk** | **Start a desk** `{CONFIRM}` |

**Under the table**
$29/mo. Cancel on Whop. `[VERBATIM]`
A downgrade never deletes anything. Your Circle stays active and scanned; the cap is only on adding. `[NEW]`
We never post as you. `[VERBATIM]`

→ Circle size is the first metered row because it's the packaging axis and the number people feel every day (brief §6). The price sits in the table, not the heading (brief §13.5).
→ The heading frames the upgrade around the Circle outgrowing Free, which is the moment someone actually wants to pay.
→ No Agency tier and no digest row (see Part 5).

---

### 4.14 FAQ

**Settled** `[VERBATIM]`

**Do you post as me?**
No. Never.

**Where does the data come from?**
Public X posts, read-only. No X password required, no write access to your account.

**Is this a growth tool?**
No. It's a queue. Success is a useful reply.

**What if the desk is empty?**
Good. We don't lower the floor.

**Proposed** `[NEW]`

**Does it run in the background?**
No. You press Scan now. Nothing checks X while you're away, and nothing runs overnight.

**What's the difference between Free and Pro?**
Pro writes drafts, holds 150 Circle accounts instead of 10, and adds the weekly five and Channels. Scan works on both.

**What happens if I downgrade?**
Nothing gets deleted. Your Circle stays active and scanned. You just can't add past the free limit.

**Is it only for X?**
Yes. No LinkedIn, no Reddit.

**How do I cancel?**
On Whop, where you paid. There's no billing page inside the app.

→ The new FAQs close the anxieties from the Four Forces: automation, account safety, the plan difference and lock-in. Every answer is a §11 "true today" fact.

---

### 4.15 Final CTA

**Heading** `[NEW]`
Your desk is two questions away.

**Body** `[VERBATIM]`
Tell it what you sell. Paste five accounts you already read. That is the whole setup.

**Button** `[VERBATIM]`
Start a desk

**Under the button** `[VERBATIM + NEW]`
We never post as you. · Free plan · No X password

→ This repeats the hero's reassurance row so the last click has the same safety net as the first.

---

### 4.16 Footer

`⏎ replylane` · We never post as you. · © 2026 replylane

→ No Terms or Privacy links until the pages exist. Never `href="#"` (brief §13.7).

---

### 4.17 Meta

**Title** `[VERBATIM]` replylane — A desk for public intent
**Description** `[VERBATIM]` Finds the X conversations that can become customers. You answer them. We never post as you.

---

## Part 5 — Held back, and things to confirm

### Held back until true (do not ship yet)

| Item | Why | Copy ready for when it's true |
|---|---|---|
| Morning digest (Pro) | The recurring send isn't scheduled in production | "Want the desk in your inbox? Turn on the digest: five cards, Room first, each linking straight to X. Off by default. It never sends an empty one." |
| Any outcome in the worked example | No customers yet | `{FILL}` slot in §4.11 |
| Testimonials, logos, counts, waitlist | None exist | — |
| Claims about what Channels surface | Never scanned against live data | — |
| Agency tier | "Someday, not today" | — |

### `{CONFIRM}` before shipping

1. **Score format on cards.** Is it 0–100, a decimal or something else? It's needed for the mock.
2. **"Mark replied."** Is that the action's name on the card? The brief tracks cards marked replied but doesn't list the action in §5.6.
3. **Plan gating** for the neglect list and Find accounts. Are they on Free, or Pro only? The pricing table currently leaves both out.
4. **Pro button.** Can someone choose Pro at sign-up, or only upgrade inside the app? That decides whether the Pro button should say something other than "Start a desk."
5. **Desk mock posts.** Are invented, realistic posts acceptable, or does §10's "real post text" mean sourced and anonymised posts?
6. **Naming Typefully and Hypefury** in "Not for." The brief names them internally; decide whether to do it in public.

---

## Part 6 — Analogy and story bank

For reuse in X posts, launch threads and future pages. ✓ means it's already used on the page.

**Analogies**
- ✓ A feed has no bottom. A desk does.
- ✓ An ask is a raised hand in a crowded room. By reply sixty, it's down.
- ✓ Room replies work like being a regular. Nobody remembers the one night you came in. They notice when you stop.
- ✓ It's a light switch, not a motion sensor. (on-demand scan)
- ✓ Your CRM has a "last contacted" column. X doesn't. (neglect list)
- ✓ Your Circle is your contacts. A Channel is a conference badge that expires.
- ✓ It writes like a colleague who read the thread. You're the one who signs it.
- Scheduling tools manage your outbox. replylane manages who you owe a reply.
- Auto-repliers are the robocalls of X. Everyone learned to hang up.

**Stories**
- ✓ *The 4pm ask.* A recommendation request at 9:14, forty replies deep by the time you see it. The 9:20 reply gets the DM.
- ✓ *"Haven't seen you around."* A client week, two quiet weeks, and a peer who noticed before you did.
- ✓ *One card, start to finish.* Scan at 9:02, sent by hand at 9:07, reply six not forty-six.
- *Launch week.* You ship, you fix, you sleep. Ten days later you realise you haven't replied to anyone in your world since the 3rd. Nobody said anything. Nobody would.
- *The founder's own desk.* `{Only if true}` Once you use replylane to find replies for replylane, a short, dated, real example of that is the best proof the site can have.

---

## Part 7 — Brief §13 gaps: how this draft handles them

| # | Gap | Resolution |
|---|---|---|
| 1 | Window vs Room | Room everywhere, including mock chips. "window" appears only lowercase, meaning the moment. |
| 2 | Circle under-sold | Full section: neglect list, weekly five, finding accounts, Channels. Nav anchor proposed. |
| 3 | Channels and digest stubs | Channels written from §5.8 with no performance claims. Digest held back with ready copy. |
| 4 | One plan shown | Free and Pro side by side, Circle as the axis. |
| 5 | $29 lede does no work | Price moved into the table. The heading sells the Circle upgrade. |
| 6 | Best line buried | "Two questions. That is the whole setup." promoted to How it works step 1. |
| 7 | Dead legal links | Omitted from the footer. |
| 8 | No proof section | "One card, start to finish," honestly labelled, with a `{FILL}` slot for a real outcome. |
