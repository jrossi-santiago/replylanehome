import { urls } from "./site";

/** Copy for the homepage. Manifesto body is draft layout copy. */
export const variant = {
  path: "/",
  nav: {
    links: [
      { label: "What", href: "#what", dot: "#e25d4a" },
      { label: "Why", href: "#why", dot: "#e2c14a" },
      { label: "How", href: "#how", dot: "#e07ab5" },
      { label: "Pricing", href: "#pricing", dot: "#3dbb6a" },
    ],
    login: "Log in",
    signup: "Sign up",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    id: "what",
    h1: ["Know exactly where to talk.", "And exactly what to say."] as const,
    subLines: [
      "Every sale starts with a conversation.",
      "We find new audiences already active on X.",
    ] as const,
    primary: "Start Now for Free",
    trust: "We never post for you. · Free plan · No X password",
    shotAlt:
      "The replylane reply list. Posts to reply to, grouped as Asking to buy, People you follow, and Saved.",
  },
  manifesto: {
    id: "why",
    label: "Our manifesto",
    note: "Placeholder",
    drop: "In",
    first:
      "a time when every reply tool wants to speak in your name, when the feed decides who you see, when a useful answer is buried under forty others, we have little space to do the work.",
    paragraphs: [
      "Our conversations have been taken captive –",
      "by auto-replies, by engagement pods, by dashboards that count likes as if they were customers. The people who would buy from you are already talking. You just never see them in time.",
      "This paragraph is placeholder copy so the layout can be judged without waiting on the words. Replace it with the real manifesto.",
      "A private list of posts worth answering. A person writes the reply. Nothing goes out without you.",
    ] as const,
  },
  anti: {
    lead: "The honest reply should never have been this hard to find.",
    promise: "We promise:",
    items: [
      "posting for you",
      "auto-replies",
      "vanity metrics",
      "fake urgency",
      "background scanning",
      "ads",
    ] as const,
    no: "NO",
    primary: "Start free",
    trust: "We never post for you. · Free plan · No X password",
  },
  how: {
    id: "how",
    eyebrow: "How it works",
    h2: "Two questions. One button. Then you write.",
    lead: "About five minutes to set up. After that it's a short list and a reply from your own account.",
    steps: [
      {
        eyebrow: "Step 01",
        h3: "Tell us what you do.",
        body: "Paste your site, or a short PDF. Add five to ten accounts you already read. We fill in the rest — you fix anything we get wrong.",
        shot: "/variant/how-setup-mock.png",
        shotAlt:
          "Setup screen asking what you sell, with a website field and a few X handles.",
        tags: ["website or PDF", "accounts you trust"] as const,
      },
      {
        eyebrow: "Step 02",
        h3: "Press Scan.",
        body: "It checks X once, throws out the junk, and leaves a handful of posts. Each one comes with one plain sentence on why it's there.",
        shot: "/variant/how-scan-mock.png",
        shotAlt:
          "A reply-list post card with a why-line and soft tags for age and reply count.",
        tags: ["why it's here", "public posts only"] as const,
      },
      {
        eyebrow: "Step 03",
        h3: "Write the reply.",
        body: "On Pro, a first draft is waiting. Change what you want, copy it, open the post on X, and send it yourself.",
        shot: "/variant/how-draft-copy.png",
        shotAlt:
          "Draft panel with a post, a reply draft, and character count.",
        tags: ["your voice", "you hit send"] as const,
      },
    ] as const,
  },
  band: {
    eyebrow: "No wasted time or energy",
    h2: "Folders of bookmarks are dead. This is a short list of posts worth answering.",
    body: "Search the feed by what people are asking for — and by who you already follow. Associative cues, plain reasons, then you write.",
    cta: "Start free",
  },
  pricing: {
    id: "pricing",
    eyebrow: "Pricing",
    h2: "Start free. Pay when ten accounts isn't enough.",
    lede: "The button works on free, because an empty page doesn't sell anything. Limits show up after it's already worked.",
    shot: "/variant/pricing-desk-still.png",
    shotAlt: "Quiet desk with a laptop open to a soft cream interface.",
    plans: [
      {
        name: "Free",
        price: "$0",
        period: "",
        tagline: "See if your corner of X is worth the time.",
        cta: "Start free",
        points: [
          "Scan now",
          "10 accounts",
          "2 things we search for",
          "10 posts a day per list",
          "A reason on every post",
        ] as const,
      },
      {
        name: "Pro",
        price: "$29",
        period: "/mo",
        tagline: "Keep up with everyone you follow.",
        cta: "Start free, upgrade in the app",
        points: [
          "150 accounts",
          "12 things we search for",
          "No daily post limit",
          "Drafts in your voice",
          "Five suggestions a week · Topic rooms",
        ] as const,
      },
    ] as const,
    notes: [
      "$29 a month. Cancel on Whop.",
      "Downgrading never deletes anything.",
      "We never post for you.",
    ] as const,
  },
  faq: {
    eyebrow: "Questions",
    h2: "Straight answers.",
    items: [
      {
        q: "Do you post as me?",
        a: "No. Never.",
      },
      {
        q: "Where do the posts come from?",
        a: "Public posts on X, read only. No X password, and no write access to your account.",
      },
      {
        q: "Does it run in the background?",
        a: "No. You press Scan. Nothing checks X while you're away.",
      },
      {
        q: "What's the difference between free and paid?",
        a: "Paid writes first drafts, follows 150 accounts instead of 10, suggests five new accounts a week, and opens topic rooms. The button works on both.",
      },
      {
        q: "What happens if I downgrade?",
        a: "Nothing gets deleted. Your accounts stay. You just can't add more past the free limit.",
      },
      {
        q: "Is it only for X?",
        a: "Yes. No LinkedIn, no Reddit.",
      },
    ] as const,
  },
  cta: {
    eyebrow: "Ready when you are",
    h2: "Two questions and you're set up.",
    body: "Tell us what you sell. Paste five accounts you already read. That's the whole setup.",
    primary: "Start free",
    trust: "We never post for you. · Free plan · No X password",
  },
  footer: {
    copy: "© 2026 replylane",
    trust: "We never post for you.",
  },
  urls,
} as const;
