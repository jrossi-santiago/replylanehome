import type { IconName } from "./icons";

export const urls = {
  dash: "https://dash.replylane.app",
  signup: "https://dash.replylane.app/signin",
  login: "https://dash.replylane.app/signin",
} as const;

export const meta = {
  title: "replylane — A desk for public intent",
  description:
    "Finds the X conversations that can become customers. You answer them. We never post as you.",
} as const;

export const nav = {
  links: [
    { label: "How it works", href: "#how" },
    { label: "The desk", href: "#desk" },
    { label: "The Circle", href: "#circle" },
    { label: "Pricing", href: "#pricing" },
  ],
  cta: "Start a desk",
  menu: "Menu",
  close: "Close",
} as const;

export const hero = {
  eyebrow: "A reply desk for X",
  h1Before: "replylane finds the X conversations that can become customers. ",
  h1Accent: "You answer them.",
  subline:
    "A desk for public intent. Asks and still-open threads, scored for what you sell.",
  primary: "Start a desk",
  secondary: "See the desk",
  trust: "We never post as you. · Free plan · No X password",
} as const;

/** Hero graphic: a mocked X post, drawn entirely in code. Numbers are illustrative. */
export const heroTweet = {
  name: "replylane",
  handle: "@replylane",
  verified: true,
  time: "9:41 AM",
  date: "Jun 4, 2026",
  lines: [
    "Day 214 of building in public.",
    "Shipped a feature nobody asked for. Deleted it. Shipped the one three people asked for in a reply I almost missed.",
  ],
  mentionBefore: "Every paying customer this month came from a thread we answered, not a thing we published. The desk is ",
  mention: "@replylane",
  mentionAfter: ", and it stays off the account.",
  tags: ["#buildinpublic", "#indiehackers", "#saas"] as const,
  stats: {
    replies: "218",
    reposts: "146",
    likes: "1,204",
    views: "24.8K",
  },
  counts: [
    { value: "146", label: "Reposts" },
    { value: "41", label: "Quotes" },
    { value: "1,204", label: "Likes" },
    { value: "96", label: "Bookmarks" },
  ],
  caption: "A mockup. Drawn in code, not a screenshot.",
} as const;

export const desk = {
  id: "desk",
  h2: "A feed has no bottom. A desk does.",
  title: "Reply Desk",
  tabs: ["Asks", "Room", "Saved"] as const,
  scan: "Scan now",
  count: "3 cards",
  caption: "You copy. You send. We stay off the account.",
} as const;

/** Hero desk sample cards. Draft length must equal computed character count. */
export const deskCards = {
  ask: {
    kind: "ask" as const,
    label: "Asks" as const,
    age: "14m ago",
    replies: "5 replies",
    followers: "2,140 followers",
    why: "Asking for a cheaper status page tool, which is what you sell. Five replies so far.",
    post: "Is there a status page tool that isn't $99/mo? Two-person team. We just need incident updates and email subscribers, nothing else.",
    draft:
      "If it's only incidents and email subscribers, most of what those $99 plans charge for is stuff you won't touch. Worth trying a smaller tool first. I built one for exactly that setup and can share it if useful.",
    open: true,
    actions: ["Copy draft", "Open on X", "Save", "Hide author", "Not an ask"] as const,
  },
  outage: {
    kind: "room" as const,
    label: "Room" as const,
    age: "41m ago",
    replies: "3 replies",
    why: "Circle member writing about incident comms, a topic you sell into. 41m ago, 3 replies.",
    post: "Our first real outage last night. Wrote the postmortem before the fix was even deployed. Not sure that was smart.",
    open: false,
  },
  changelog: {
    kind: "room" as const,
    label: "Room" as const,
    age: "22m ago",
    replies: "8 replies",
    why: "Circle member talking changelogs with founders who ship weekly. 22m ago, 8 replies.",
    post: "Unpopular opinion: your changelog is a sales page and you're writing it like a git log.",
    open: false,
  },
} as const;

export const askDraftLength = deskCards.ask.draft.length;

export const argument = {
  label: "The problem",
  h2: "The feed is a terrible CRM.",
  lead: "You already use X to find work. You just use the For You feed to do it, and the feed fails in two quiet ways.",
  cards: [
    {
      h3: "The ask you saw at 4pm",
      body: "Someone asks for a recommendation at 9:14. It reaches your feed at 4pm, forty replies deep. The person who answered at 9:20 is the one who gets the DM.",
      sting: "You're late because you scroll, not because you don't care.",
    },
    {
      h3: "The people you meant to keep up with",
      body: "There are about a hundred accounts whose audiences overlap your buyers. You mean to stay visible to them. Then a client week flattens you, and nobody notices you're gone, including you.",
      quote: 'Two weeks later a peer says, "Haven\'t seen you around."',
      sting: "Neglect is silent until pipeline is.",
    },
  ],
  close: [
    "The tools that showed up to fix this made it worse. Auto-repliers and engagement pods taught the timeline to ignore strangers, which made the honest reply harder for everyone.",
    "replylane is the opposite bet: fewer cards, better ones, and a human hits send.",
  ],
} as const;

export const twoKinds = {
  h2: "Two kinds of posts. That's the product.",
  lanes: [
    {
      name: "Asks",
      heading: "Asks — someone is asking to buy.",
      body: "Keyword searches across all of X for people asking to hire or buy. This is revenue, when it happens. It doesn't happen often, so early matters more than anything else.",
      analogy: "An ask is a raised hand in a crowded room. By reply sixty, it's down.",
    },
    {
      name: "Room",
      heading: "Room — a reply here would be seen.",
      body: "Recent posts from your Circle, the accounts you chose. This is recognition, and it compounds. Most mornings, this is where the work is.",
      analogy:
        "Room replies work like being a regular. Nobody remembers the one night you came in. They notice when you stop.",
    },
  ],
  footnote:
    "Plenty of mornings the Asks lane is empty. The Room is why that's fine.",
  saved:
    "Saved is a filter across both, not a third pile. Saved cards never expire and are never capped on any plan. A keep-list that expires isn't a keep-list.",
} as const;

export const howItWorks = {
  id: "how",
  h2: "Eight minutes. Then X.",
  sub: "Three steps. The last one is yours.",
  close: "The real work on X, without living there.",
  steps: [
    {
      n: "1",
      icon: "brief" as IconName,
      h3: "Brief",
      kicker: "Two questions. That is the whole setup.",
      parts: [
        {
          label: "What do you do?",
          body: "Paste your website, a PDF or a Markdown brief. It fills in what you sell, who buys it and the keywords to watch. Anything it gets wrong, you fix in Settings.",
        },
        {
          label: "Who do you already read?",
          body: "Paste five to ten X handles you trust. Each one is checked against a real profile. If one doesn't resolve, you see it on screen; nothing is dropped silently. These become the start of your Circle.",
        },
      ],
      foot: "About five minutes.",
    },
    {
      n: "2",
      icon: "scan" as IconName,
      h3: "Scan",
      kicker: "You press the button.",
      body: "Press Scan now. One scan checks your keywords and your Circle, throws out the junk and lays what's left on the desk, each card with one sentence on why it's there.",
      note: "Nothing runs when you're not looking. It's a light switch, not a motion sensor.",
    },
    {
      n: "3",
      icon: "reply" as IconName,
      h3: "Reply",
      kicker: "The part that's yours.",
      body: "Open a card. On Pro, a draft is already written. Change what you want, copy it, open the post on X and send it from your own account. Mark it replied. Close the tab.",
    },
  ],
} as const;

export const whyOnDesk = {
  h2: "Every card says why it's there.",
  lead: "A score without a reason is decoration. So every card carries a why-line: one plain sentence, eighteen words at most, above the post.",
  exampleWhy: deskCards.ask.why,
  filtersTitle: "What gets thrown out before you see anything",
  filtersLead: "Cheap rules run first, and they drop a lot:",
  cheapRules: [
    "Accounts younger than 21 days",
    "Follow-farm shapes",
    "Posts with almost no words in them",
    'Giveaways, airdrops, "DM me for" and crypto signals',
    "Authors you've hidden, and authors flooding the desk",
  ],
  asksBar: [
    "Asks clear a stricter bar on top of that. A post older than 72 hours is out. A post with more than 60 replies is out, because the window is closed. An author with more than 250,000 followers is out: they get 400 replies, and they aren't buying.",
    "Your Circle doesn't get those rules. Follower and reply ceilings exist to judge strangers. Applied to the accounts you chose, they'd throw out exactly the people you chose.",
  ],
  close: "A false positive costs you more than a miss. An empty desk is better than a noisy one.",
} as const;

export const theDraft = {
  h2: "A first draft that follows the rules.",
  lead: "It writes like a colleague who read the thread. You're the one who signs it.",
  rulesTitle: "The rules",
  rules: [
    "One to three sentences. Never a thread, never a list.",
    'Never opens with a compliment. No "Great question." No "So true." No "This."',
    "Never pitches in the first sentence. It answers the question or adds one concrete observation first.",
    "Only an Ask can mention what you sell. A Room post is a conversation you're joining, and a pitch there is how people get muted.",
    "No links, hashtags or emoji.",
    "Never claims you used their product, met them or worked with them. Never invents a number or a client.",
    "Sounds like your writing samples. With none, it writes plain and short instead of inventing a personality.",
    "280 characters, counted on screen, not guessed.",
  ],
  compareTitle: "Same founder, two posts",
  compare: {
    ask: {
      label: "Ask",
      post: "Is there a status page tool that isn't $99/mo?",
      draft: deskCards.ask.draft,
      note: "Mentions the product in sentence three.",
    },
    room: {
      label: "Room",
      post: "Our first real outage last night. Wrote the postmortem before the fix was even deployed.",
      draft:
        "Writing it before the fix shipped is the part people remember, even if the root cause changes later. An update line at the top covers you when it does.",
      note: "Doesn't mention it at all.",
    },
  },
  close: "There is no send button. There never will be.",
  planNote:
    "Drafts are on Pro. On Free you get every card and every why-line, and you write the reply.",
} as const;

export const roomDraftLength = theDraft.compare.room.draft.length;

export const rules = {
  frame: "We never post as you.",
  h2: "What replylane will not do.",
  lead: "These are rules in the code, not settings.",
  neverTitle: "Never",
  never: [
    "Post, like, follow or DM for you. Not on a schedule, not ever.",
    "Scan when you didn't press Scan.",
    "Sell you followers.",
    'Fake urgency. You\'ll never see "12 people viewing this ask."',
    "Build dossiers on people.",
    "Call itself an agent.",
  ],
  alwaysTitle: "Always",
  always: [
    "Show the original post, the author and the link.",
    "Tell you where the data comes from: public X posts, read-only.",
    "Hide an author in one press, and make every action one press from undone.",
  ],
  close: "We never post as you.",
} as const;

export const circle = {
  id: "circle",
  label: "The Circle",
  h2: "Who have you gone quiet on?",
  lead: "Your Circle is about a hundred accounts you picked: peers, buyers and the people your buyers listen to. The Room lane watches them. The longer you keep a Circle, the more it knows about who you've shown up for.",
  neglect: {
    title: "The neglect list",
    heading: 'Your CRM has a "last contacted" column. X doesn\'t. This does.',
    lead: "My Circle isn't a roster. It's an answer. For every account it works out how long since they posted, since you saw one of their posts and since you last replied. Then it sorts them:",
    items: [
      {
        name: "Neglected.",
        body: "They're posting. You haven't shown up in 14 days.",
      },
      {
        name: "Quiet.",
        body: "They stopped posting. This is checked first, so you're never blamed for someone else's silence.",
      },
      {
        name: "Drop list.",
        body: "Quiet for 30 days or more. Offered for removal five at a time. Say keep, and it stays kept.",
      },
    ],
    foot: "New members get a week before any of this applies.",
  },
  weeklyFive: {
    pro: true,
    title: "The weekly five",
    heading: "Five new accounts a week. At least two from outside your bubble.",
    body: "Once a week it suggests five accounts to add, and at least two have to come from outside the conversation your Circle is already having. That's a rule, not a preference. A Circle that only finds people already talking to each other makes you local, then invisible.",
    analogy: "You're posting into your own house while the party is next door.",
    bar: "Every suggestion has to clear a bar printed on screen: posted on your topic in the last 21 days, between 1,000 and 2,000,000 followers, and real engagement, measured by median, never average. An account shows up because it posted, which proves it's real. Nothing an AI merely remembers ever reaches your screen.",
    reject: "Reject one, and you'll never be pitched it again.",
  },
  finding: {
    title: "Finding accounts",
    body: "Paste them one per line. Or let it search your keywords twice: once for the most-liked posts, meaning who the market is built around, and once for the most recent, meaning who's talking right now. You see the numbers that ranked each account, and you approve them one at a time.",
  },
  channels: {
    pro: true,
    title: "Channels",
    heading: "Rooms you walk into for two weeks.",
    body: "A Channel is a hand-built set of accounts and phrases around a topic. Join one, and its posts show up in your Room lane, tagged. The join ends on its own after 14 days. Up to three at once.",
    analogy:
      "A Channel never adds anyone to your Circle. Think of your Circle as your contacts and a Channel as a conference badge that expires. Leave whenever you like, and anything you saved outlives the room.",
    roomsLabel: "Rooms right now",
    rooms: [
      "Build in public",
      "Bootstrapped SaaS",
      "AI engineering",
      "Design engineering",
      "Go to market",
    ],
  },
  close:
    "Deactivating someone never deletes them. Downgrading never deletes anyone. Your Circle is yours.",
} as const;

export const walkthrough = {
  label: "Example",
  h2: "One card, start to finish.",
  disclosure:
    "An example desk for a founder who sells a small status-page tool. The post is written for this page. The rules it passed are real.",
  steps: [
    {
      n: "1",
      title: "Scan.",
      body: "They press Scan now at 9:02. Most of what comes back is thrown out, and three cards make the desk.",
    },
    {
      n: "2",
      title: "The card.",
      post: deskCards.ask.post,
      why: deskCards.ask.why,
    },
    {
      n: "3",
      title: "Why it made it.",
      body: "14 minutes old, under 72 hours. 5 replies, under 60. 2,140 followers, under 250,000. The account is years old. The post is a real question, not a giveaway.",
    },
    {
      n: "4",
      title: "The draft.",
      draft: deskCards.ask.draft,
    },
    {
      n: "5",
      title: "What they changed.",
      body: '"and can share it if useful" became "happy to send it over." Their words, not ours.',
    },
    {
      n: "6",
      title: "Sent.",
      body: "Copied, opened on X, posted from their own account at 9:07. Reply number six, not reply number forty-six.",
    },
  ],
} as const;

export const audience = {
  h2: "Who it's for. And who it isn't.",
  forTitle: "For",
  forItems: [
    {
      title: "Solo founders whose distribution is their own posts and replies.",
      body: "You can name twelve accounts you should be in the replies of, and you know there are a hundred.",
    },
    {
      title: "Agency owners and consultants",
      body: "who get hired because the right operators keep seeing their name.",
    },
    {
      title: "Creators with a product behind the audience,",
      body: "who know replies are the job and refuse to sound like a bot doing it.",
    },
  ],
  notTitle: "Not for",
  notItems: [
    {
      title: "Ad-budget brands and paid-growth teams.",
      body: "Your distribution isn't your own face.",
    },
    {
      title: "SDRs counting leads.",
      body: "This is a daily habit, not a lead counter.",
    },
    {
      title: "People who want to post more.",
      body: "That's Typefully or Hypefury. They decide what you post. We help with who you show up for.",
    },
    {
      title: "Anyone after auto-replies, pods or mass-follow.",
      body: "We never touch your account.",
    },
    {
      title: "Anyone who won't pick about a hundred accounts.",
      body: "The Circle is the product.",
    },
  ],
  close:
    "If you want volume, there are tools for that. This one sends you back to X with a few replies worth sending.",
} as const;

export const pricing = {
  id: "pricing",
  h2: "Start free. Pay when ten accounts isn't enough.",
  lede: "Scan works on the free plan, because an empty desk doesn't sell a desk. The limits are meant to show up after it's worked.",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "",
      tagline: "See whether your corner of X is worth a desk.",
      cta: "Start a desk",
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      tagline: "Keep up with your whole Circle.",
      cta: "Start a desk",
    },
  ],
  rows: [
    { feature: "Scan now", free: "Yes", pro: "Yes" },
    { feature: "Circle accounts", free: "10", pro: "150" },
    { feature: "Keyword searches", free: "2", pro: "12" },
    { feature: "Cards a day", free: "10 per lane", pro: "Unlimited" },
    { feature: "Why-line on every card", free: "Yes", pro: "Yes" },
    { feature: "Saved", free: "Never capped", pro: "Never capped" },
    { feature: "Drafts in your voice", free: "—", pro: "Yes" },
    { feature: "The weekly five", free: "—", pro: "Yes" },
    { feature: "Channels", free: "—", pro: "Yes" },
  ],
  notes: [
    "$29/mo. Cancel on Whop.",
    "A downgrade never deletes anything. Your Circle stays active and scanned; the cap is only on adding.",
    "We never post as you.",
  ],
} as const;

export const faq = {
  h2: "Questions",
  items: [
    {
      q: "Do you post as me?",
      a: "No. Never.",
    },
    {
      q: "Where does the data come from?",
      a: "Public X posts, read-only. No X password required, no write access to your account.",
    },
    {
      q: "Is this a growth tool?",
      a: "No. It's a queue. Success is a useful reply.",
    },
    {
      q: "What if the desk is empty?",
      a: "Good. We don't lower the floor.",
    },
    {
      q: "Does it run in the background?",
      a: "No. You press Scan now. Nothing checks X while you're away, and nothing runs overnight.",
    },
    {
      q: "What's the difference between Free and Pro?",
      a: "Pro writes drafts, holds 150 Circle accounts instead of 10, and adds the weekly five and Channels. Scan works on both.",
    },
    {
      q: "What happens if I downgrade?",
      a: "Nothing gets deleted. Your Circle stays active and scanned. You just can't add past the free limit.",
    },
    {
      q: "Is it only for X?",
      a: "Yes. No LinkedIn, no Reddit.",
    },
    {
      q: "How do I cancel?",
      a: "On Whop, where you paid. There's no billing page inside the app.",
    },
  ],
} as const;

export const finalCta = {
  frame: "We never post as you.",
  h2: "Your desk is two questions away.",
  body: "Tell it what you sell. Paste five accounts you already read. That is the whole setup.",
  primary: "Start a desk",
  trust: "We never post as you. · Free plan · No X password",
} as const;

export const footer = {
  copy: "© 2026 replylane",
  trust: "We never post as you.",
} as const;

export const notFound = {
  h1: "Nothing at this address.",
  body: "The desk is one click away.",
  cta: "Go to the homepage",
} as const;

export const briefDemo = {
  url: "yourstatus.com",
  handles: ["@jlin", "@nolan", "@priya", "@shipweekly", "@incidentops"],
} as const;
