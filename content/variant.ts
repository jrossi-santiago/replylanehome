import { urls } from "./site";

/** Homepage copy — DataFast-inspired flow, replylane product facts. */
export const variant = {
  path: "/",
  nav: {
    links: [
      { label: "How it works", href: "#how" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    login: "Log in",
    signup: "Start free",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    brand: "replylane",
    h1: "Reply-first growth",
    sub: "Discover which posts on X are worth answering so you can grow your business, without living in the feed.",
    primary: "Start free",
    primaryArrow: true,
    trust: "Free plan. No card required. We never post for you.",
    shotAlt:
      "The replylane reply list. Posts to reply to, grouped as Asking to buy, People you follow, and Saved.",
  },
  how: {
    id: "how",
    eyebrow: "How it works",
    h2: "Find reply opportunities in 3 steps",
    steps: [
      {
        n: "1",
        h3: "Tell us what you sell",
        body: "Add replylane in under a minute. Paste your site, or a short PDF, plus five accounts you already read.",
        shot: "/variant/how-setup-mock.png",
        shotAlt:
          "Setup screen asking what you sell, with a website field and a few X handles.",
      },
      {
        n: "2",
        h3: "Connect the conversations",
        body: "Press Scan. It checks X once for people asking for what you sell, and for posts from the accounts you follow.",
        shot: "/variant/how-scan-mock.png",
        shotAlt:
          "A reply-list post card with a why-line and soft tags for age and reply count.",
      },
      {
        n: "3",
        h3: "Grow with replies that land",
        body: "replylane shows what is worth answering and, on Pro, drafts a first reply. You copy it and send it yourself.",
        shot: "/variant/how-draft-copy.png",
        shotAlt:
          "Draft panel with a post, a reply draft, and character count.",
      },
    ] as const,
    midCta: {
      primary: "Start free",
      trust: "Free plan. No card required.",
    },
  },
  features: {
    id: "features",
    eyebrow: "Features",
    h2: "A reply list that brings customers, not noise",
    items: [
      {
        title: "Asking to buy",
        body: "Catch people looking for what you sell while the thread is still open — not forty replies deep.",
        shot: "/variant/how-scan-mock.png",
        shotAlt: "Example post of someone asking for a cheaper status page tool.",
        link: "See how it works",
        href: "#how",
      },
      {
        title: "People you follow",
        body: "Stay visible to the accounts whose audiences overlap your buyers, even in a busy week.",
        shot: "/variant/hero-reply-list.jpg",
        shotAlt: "Reply list showing posts from people you follow.",
        link: null,
        href: null,
      },
      {
        title: "Drafts in your voice",
        body: "On Pro, a first draft is waiting. Short, useful, no compliment openers. You still hit send.",
        shot: "/variant/how-draft-copy.png",
        shotAlt: "Draft reply panel with character count and copy button.",
        link: null,
        href: null,
      },
    ] as const,
  },
  story: {
    id: "why",
    lead: "Hey — if you already use X to find work, this page is for you.",
    intro:
      "replylane is a reply desk for public posts. We find conversations that can become customers. You write the reply.",
    problem:
      "We learned that the feed is a goldmine of opportunities. But most tools just push vanity metrics or auto-replies…",
    agitation:
      "Pageviews, follower counts, reply pods… but do any of these actually tell you who is ready to buy from you right now?",
    solutionLead: "So we built replylane for 3 reasons:",
    reasons: [
      "Find posts where people are asking for what you sell — not just talking.",
      "Discover what makes a reply land, and turn more conversations into customers.",
      "Make reply-driven decisions and work on the right threads.",
    ] as const,
  },
  pricing: {
    id: "pricing",
    eyebrow: "Pricing",
    h2: "Plans that match how many accounts you follow",
    lede: "Scan works on free, because an empty page does not sell anything. Limits show up after it already worked.",
    shot: "/variant/pricing-desk-still.png",
    shotAlt: "Quiet desk with a laptop open to a soft cream interface.",
    plans: [
      {
        name: "Free",
        price: "$0",
        period: "",
        tagline: "See if your corner of X is worth the time.",
        cta: "Start free",
        included: [
          "Scan now",
          "10 accounts",
          "2 things we search for",
          "10 posts a day per list",
          "A reason on every post",
        ] as const,
        excluded: ["Drafts in your voice", "Topic rooms"] as const,
      },
      {
        name: "Pro",
        price: "$29",
        period: "/month",
        tagline: "Keep up with everyone you follow.",
        cta: "Start free, upgrade in the app",
        included: [
          "150 accounts",
          "12 things we search for",
          "No daily post limit",
          "Drafts in your voice",
          "Five suggestions a week",
          "Topic rooms",
        ] as const,
        excluded: [] as const,
      },
    ] as const,
    dueToday: "$0.00 due today. No card required.",
    notes: [
      "$29 a month. Cancel on Whop.",
      "Downgrading never deletes anything.",
      "We never post for you.",
    ] as const,
  },
  faq: {
    id: "faq",
    h2: "FAQ",
    items: [
      {
        q: "Do you post as me?",
        a: "No. Never. There is no send button, and there never will be.",
      },
      {
        q: "Where do the posts come from?",
        a: "Public posts on X, read only. No X password, and no write access to your account.",
      },
      {
        q: "Free or Pro?",
        a: "Free is enough to see if your corner of X is worth the time. Pro adds drafts, 150 accounts, weekly suggestions, and topic rooms.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. Start on the free plan. Upgrade in the app when ten accounts is not enough. No card required to begin.",
      },
      {
        q: "Does it run in the background?",
        a: "No. You press Scan. Nothing checks X while you are away.",
      },
      {
        q: "What happens if I get more posts than my plan?",
        a: "Free caps posts per list each day. Pro has no daily post limit. Your saved posts are never capped on either plan.",
      },
      {
        q: "Do I need to code to use replylane?",
        a: "No. Paste a website, pick accounts, press Scan, write the reply.",
      },
      {
        q: "What happens if I downgrade?",
        a: "Nothing gets deleted. Your accounts stay. You just cannot add more past the free limit.",
      },
      {
        q: "Is it only for X?",
        a: "Yes. No LinkedIn, no Reddit.",
      },
      {
        q: "How do I cancel?",
        a: "On Whop, where you paid. There is no billing page inside the app.",
      },
    ] as const,
  },
  cta: {
    h2: "Two questions and you are set up",
    body: "Tell us what you sell. Paste five accounts you already read. That is the whole setup.",
    primary: "Start free",
    trust: "Free plan. No card required. We never post for you.",
  },
  footer: {
    copy: "© 2026 replylane",
    trust: "We never post for you.",
  },
  urls,
} as const;
