import type { IconName } from "./icons";

export const urls = {
  dash: "https://dash.replylane.app",
  signup: "https://dash.replylane.app/signin",
  login: "https://dash.replylane.app/signin",
} as const;

export const meta = {
  title: "replylane: a reply desk for X",
  description:
    "replylane finds the X conversations that can become customers. You answer them.",
} as const;

export const nav = {
  links: [
    { label: "How it works", href: "#how" },
    { label: "The desk", href: "#find" },
    { label: "Pricing", href: "#pricing" },
  ],
  login: "Log in",
  cta: "Start a desk",
  menu: "Menu",
  close: "Close",
} as const;

export const hero = {
  eyebrow: "A reply desk for X",
  h1Before: "replylane finds the X conversations that can become customers. ",
  h1Accent: "You answer them.",
  subline:
    "Tell it what you sell. It searches public posts for people asking. Every card says why it surfaced.",
  primary: "Start a desk",
  secondary: "See the desk",
  trust: "We never post as you.",
  deskTitle: "Reply desk",
  deskStatus: "Scanned 8:12 · 6 open",
  closing: "You copy. You send. We stay off the account.",
} as const;

/** Hero desk sample cards. Draft length must equal computed character count. */
export const deskCards = {
  maya: {
    kind: "ask" as const,
    label: "Ask",
    handle: "maya",
    initial: "M",
    age: "14m ago",
    why: "Asked for a studio recommendation. Small account. No replies yet.",
    post: "Anyone know a good product studio for a Series A launch? Prefer teams that have shipped in public.",
    draft:
      "Ask for three recent launches in your category and the channel mix they used. That filters pitch decks from operators. I can share the short checklist we run before we hire any studios.",
    open: true,
  },
  dcarrington: {
    kind: "ask" as const,
    label: "Ask",
    handle: "dcarrington",
    initial: "D",
    age: "22m ago",
    why: "Hiring a contractor in your keywords. Thread still open.",
    post: "Looking for a freelance designer who can own a landing page end to end this month.",
    open: false,
  },
  priyaships: {
    kind: "window" as const,
    label: "Window",
    handle: "priyaships",
    initial: "P",
    age: "31m ago",
    why: "From your circle. Reply still lands in this thread.",
    post: "We opened our waitlist this morning. Curious what almost stopped people from joining.",
    open: false,
  },
} as const;

export const mayaDraftLength = deskCards.maya.draft.length;

export const facts = [
  { number: "2", label: "questions. That is the whole setup." },
  { number: "280", label: "characters in a draft, three sentences at most." },
  { number: "0", label: "posts sent as you." },
] as const;

export const howItWorks = {
  id: "how",
  h2: "Three steps. The last one is yours.",
  steps: [
    {
      n: "01",
      icon: "brief" as IconName,
      h3: "Brief",
      body: "Give it your website or a PDF. Paste five accounts you already read. It learns what you sell.",
    },
    {
      n: "02",
      icon: "scan" as IconName,
      h3: "Scan",
      body: "Press scan. It searches public posts and scores each one against your brief. Nothing runs in the background.",
    },
    {
      n: "03",
      icon: "reply" as IconName,
      h3: "Reply",
      body: "Open a card. Read the draft. Copy it, change it, and send it yourself on X.",
    },
  ],
} as const;

export type Point = { icon: IconName; title: string; line: string };

export type SubFeature = {
  h3: string;
  body: string;
  points: Point[];
  pro?: boolean;
  illustration: string;
};

export const chapterFind = {
  id: "find",
  icon: "ask" as IconName,
  h2: "Two kinds of post make the desk.",
  lede: "Asks are people who want to hire or buy. Windows are threads from your circle still worth a reply. Everything else stays off.",
  subs: [
    {
      h3: "Asks, in your keywords.",
      body: "Someone wants a recommendation, a hire, or a tool. The card tells you how long ago they asked, to the minute.",
      points: [
        {
          icon: "ask" as IconName,
          title: "Scored against what you sell.",
          line: "The brief decides what counts.",
        },
        {
          icon: "window" as IconName,
          title: "Minutes, not recently.",
          line: "14m ago means 14 minutes.",
        },
        {
          icon: "check" as IconName,
          title: "The reason is printed.",
          line: "Every card has a why-line.",
        },
      ],
      illustration: "dcarrington",
    },
    {
      h3: "Windows, from your circle.",
      body: "Your circle is accounts you chose by hand. Their threads reach the desk while a reply still lands.",
      points: [
        {
          icon: "circle" as IconName,
          title: "Chosen by hand.",
          line: "Paste the accounts you already read.",
        },
      ],
      illustration: "priyaships",
    },
    {
      h3: "An empty desk beats a noisy one.",
      body: "A post has to clear the floor to become a card. Some mornings nothing does.",
      points: [
        {
          icon: "hide_author" as IconName,
          title: "Hide author.",
          line: "One click, and they never come back.",
        },
        {
          icon: "desk" as IconName,
          title: "Do not lower the floor.",
          line: "Fewer cards, better ones.",
        },
      ],
      illustration: "empty",
    },
  ] satisfies SubFeature[],
};

export const argument = {
  h2: "The feed is a terrible CRM.",
  body: "Scrolling finds them late. A desk finds them while the thread is open.",
} as const;

export const chapterAnswer = {
  icon: "reply" as IconName,
  h2: "Every card says why it surfaced.",
  lede: "One line, before you read the post. A score without a reason is decoration.",
  subs: [
    {
      h3: "The reason comes first.",
      body: "Asked outright, small account, no replies yet. That line sits above the post, so you decide in a second.",
      points: [
        {
          icon: "check" as IconName,
          title: "Eighteen words at most.",
          line: "Short enough to skim a desk.",
        },
        {
          icon: "ask" as IconName,
          title: "Written for your brief.",
          line: "The reason is about what you sell.",
        },
        {
          icon: "desk" as IconName,
          title: "No bare scores.",
          line: "A number always comes with its why.",
        },
      ],
      illustration: "maya-collapsed",
    },
    {
      h3: "Drafts that skip the slop.",
      body: "No compliment opener. No pitch in the first sentence. Links are stripped. Three sentences at most.",
      points: [
        {
          icon: "reply" as IconName,
          title: "Useful sentence first.",
          line: "The draft opens with something they can use.",
        },
        {
          icon: "copy_draft" as IconName,
          title: "Regenerate or rewrite.",
          line: "It's a draft. Change anything.",
        },
        {
          icon: "check" as IconName,
          title: "Honest count.",
          line: "The character count is computed, not typed.",
        },
      ],
      illustration: "maya-draft",
    },
    {
      h3: "You copy. You send.",
      body: "There is no send button. The reply goes out from your hands.",
      points: [
        {
          icon: "copy_draft" as IconName,
          title: "Copy draft.",
          line: "The only thing it hands you.",
        },
        {
          icon: "reply" as IconName,
          title: "Reply on X.",
          line: "Opens the post on X.",
        },
        {
          icon: "never_posts" as IconName,
          title: "We never post as you.",
          line: "Not on a schedule, not ever.",
        },
      ],
      illustration: "actions",
    },
  ] satisfies SubFeature[],
};

export const rules = {
  frame: "We never post as you.",
  h2: "What it will not do.",
  items: [
    "Post as you.",
    "Scan when you did not press scan.",
    "Open a reply with a compliment.",
    "Put a link in a draft.",
  ],
  foot: "An admission early buys trust for the paragraph after it.",
} as const;

export const chapterOps = {
  icon: "morning_digest" as IconName,
  h2: "Morning ops, not a feed.",
  lede: "Open the desk. Work the cards. Close the tab.",
  subs: [
    {
      h3: "Saved is never capped.",
      body: "Keep a post you want to come back to. It stays until you remove it.",
      points: [
        {
          icon: "saved" as IconName,
          title: "One click to keep.",
          line: "Save sits on every card.",
        },
        {
          icon: "desk" as IconName,
          title: "Separate from the desk.",
          line: "Saving never hides a card.",
        },
        {
          icon: "check" as IconName,
          title: "No limit.",
          line: "On every plan.",
        },
      ],
      illustration: "saved-empty",
    },
    {
      h3: "Channels, for a set time.",
      body: "A channel is a time-boxed room you join.",
      pro: true,
      points: [] as Point[],
      illustration: "channel",
    },
    {
      h3: "The desk, in your inbox.",
      body: "No bell, no badge, no red dot.",
      pro: true,
      points: [] as Point[],
      illustration: "digest",
    },
  ] satisfies SubFeature[],
};

export const audience = {
  h2: "Who it is for.",
  forTitle: "For",
  forLines: [
    "You sell a service or a product.",
    "You can already write.",
    "You would rather answer ten good posts than scroll a hundred.",
  ],
  notTitle: "Not for",
  notLines: [
    "Growing a follower count.",
    "Anyone who wants it to post for them.",
    "Replying to everything.",
  ],
} as const;

export const pricing = {
  id: "pricing",
  h2: "One price. Cancel on Whop.",
  lede: "$29/mo.",
  plans: [
    {
      name: "replylane",
      price: "$29",
      period: "/mo",
      rows: ["Saved is never capped.", "Channels", "Morning digest"],
      cta: "Start a desk",
      trust: "We never post as you.",
    },
  ],
  foot: "$29/mo. Cancel on Whop.",
} as const;

export const finalCta = {
  frame: "You copy. You send.",
  h2: "Tell it what you sell.",
  body: "Paste five accounts you already read. That is the whole setup.",
  primary: "Start a desk",
  secondary: "See the desk",
  trust: "We never post as you.",
} as const;

export const footer = {
  productTitle: "Product",
  product: [
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Log in", href: urls.login },
  ],
  legalTitle: "Legal",
  legal: [
    { label: "Terms", href: null },
    { label: "Privacy", href: null },
  ],
  copy: "© 2026 replylane",
  trust: "We never post as you.",
} as const;

export const notFound = {
  h1: "Nothing at this address.",
  body: "The desk is one click away.",
  cta: "Go to the homepage",
} as const;

export const emptyDesk = {
  status: "Scanned 8:12 · 0 open",
  message: "An empty desk is better than a noisy one.",
} as const;

export const savedEmpty =
  "Nothing saved yet. Save a post you want to come back to." as const;

export const digestPreview = {
  from: "replylane",
  subject: "Your desk this morning",
  lines: [
    deskCards.maya.why,
    deskCards.dcarrington.why,
    deskCards.priyaships.why,
  ],
} as const;

export const briefDemo = {
  url: "yourstudio.com",
  handles: [
    "@priyaships",
    "@dcarrington",
    "@maya",
    "@studioops",
    "@launchnotes",
  ],
} as const;
