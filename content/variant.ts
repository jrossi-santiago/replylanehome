import { urls } from "./site";

/** Copy for the /v2 homepage variant. Manifesto body is draft layout copy. */
export const variant = {
  path: "/v2",
  originalPath: "/",
  originalLabel: "Original homepage",
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
    primary: "Start free",
    trust: "We never post for you. · Free plan · No X password",
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
  urls,
} as const;
