import type { IconName } from "./icons";

export const urls = {
  dash: "https://dash.replylane.app",
  signup: "https://dash.replylane.app/signin",
  login: "https://dash.replylane.app/signin",
} as const;

export const meta = {
  title: "replylane — reply on X where your customers already are",
  description:
    "replylane finds the X posts worth replying to: people asking for what you sell, and posts from the accounts you follow. You write the reply. We never post for you.",
} as const;

export const nav = {
  links: [
    { label: "How it works", href: "#how" },
    { label: "What you get", href: "#desk" },
    { label: "Who you follow", href: "#follow" },
    { label: "Pricing", href: "#pricing" },
  ],
  cta: "Start free",
  menu: "Menu",
  close: "Close",
} as const;

export const hero = {
  eyebrow: "A reply list for X",
  h1Before: "Reply on X where your customers already are. ",
  h1Accent: "We find the posts. You write the reply.",
  subline:
    "replylane checks X for posts worth answering: people asking for what you sell, and posts from the accounts you follow. You get a short list, once you press the button.",
  primary: "Start free",
  secondary: "See what you get",
  trust: "We never post for you. · Free plan · No X password",
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
  mentionBefore: "Every customer we got this month came from a post we replied to, not a post we wrote. The tool we use is ",
  mention: "@replylane",
  mentionAfter: ", and it never posts for us.",
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
  note: {
    label: "replylane",
    text: "The people reading this post are the kind of people who buy from you. Reply to this one.",
  },
  caption: "A made-up example. Drawn in code, not a screenshot.",
} as const;

/** Split card: the plain promise, right after the hero. */
export const promise = {
  h2Lines: ["You reply.", "We do the", "looking."] as const,
  body:
    "A lot of buying talk happens on X, and it moves fast. Good posts go by before you ever see them. replylane looks for the ones that matter to you and puts them on one page. Nothing goes out without you.",
  caption: "Public posts. Read only.",
} as const;

export const story = {
  label: "The problem",
  h2: "The feed is a bad place to find work.",
  paragraphs: [
    {
      parts: [
        { text: "You already use X to find work. The problem is that " },
        { text: "the feed decides what you see, and when you see it.", mark: true },
      ],
    },
    {
      parts: [
        { text: "Someone asks for help at 9 in the morning. It reaches you at 4 in the afternoon, under forty other replies. " },
        { text: "The person who answered at 9:20 got the job.", mark: true },
      ],
    },
    {
      parts: [
        { text: "Then there are the hundred or so accounts whose followers are your buyers. You mean to stay visible to them. One busy week and you go quiet. " },
        { text: "Nobody tells you. You just stop coming up.", mark: true },
      ],
    },
  ],
  close:
    "The tools built to fix this made it worse. Auto-repliers and like-for-like pods taught everyone to ignore strangers. replylane does the opposite: fewer posts, better ones, and a person writes the reply.",
} as const;

export const lists = {
  h2: "What's on your page each day.",
  lead: "Three lists. That's the whole product.",
  rows: [
    {
      n: "01",
      icon: "ask" as IconName,
      title: "People asking for what you sell",
      body:
        "We search all of X for posts like \"can anyone recommend\" or \"we're looking for\". These are rare. When one shows up, answering early matters more than anything else.",
      appLabel: "Called Asks in the app",
    },
    {
      n: "02",
      icon: "room" as IconName,
      title: "Posts from the accounts you follow",
      body:
        "New posts from the accounts you picked: buyers, people like you, and people your buyers listen to. A reply here gets read. Most days, this is where the work is.",
      appLabel: "Called Room in the app",
    },
    {
      n: "03",
      icon: "saved" as IconName,
      title: "Posts you kept",
      body:
        "Anything you save stays saved. It never runs out and it's never limited, on either plan. A keep list that expires isn't a keep list.",
      appLabel: "Called Saved in the app",
    },
  ],
  foot:
    "Plenty of days the first list is empty. That's normal. The second list is why it's fine.",
} as const;

export const desk = {
  id: "desk",
  h2: "One page. A few posts. Then you're done.",
  lead:
    "No endless scroll. You press the button, you get a handful of posts, and each one says why it's there.",
  title: "Reply Desk",
  tabs: ["Asks", "Room", "Saved"] as const,
  scan: "Scan now",
  count: "3 posts",
  caption: "You copy the reply. You send it from your own account.",
} as const;

/** Hero desk sample cards. Draft length must equal computed character count. */
export const deskCards = {
  ask: {
    kind: "ask" as const,
    label: "Asks" as const,
    age: "14m ago",
    replies: "5 replies",
    followers: "2,140 followers",
    why: "Asking for a cheaper status page tool, which is what you sell. Only five replies so far.",
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
    why: "Someone you follow, writing about outages, which is what you sell into. 41m ago, 3 replies.",
    post: "Our first real outage last night. Wrote the postmortem before the fix was even deployed. Not sure that was smart.",
    open: false,
  },
  changelog: {
    kind: "room" as const,
    label: "Room" as const,
    age: "22m ago",
    replies: "8 replies",
    why: "Someone you follow, talking changelogs with founders who ship weekly. 22m ago, 8 replies.",
    post: "Unpopular opinion: your changelog is a sales page and you're writing it like a git log.",
    open: false,
  },
} as const;

export const askDraftLength = deskCards.ask.draft.length;

export const howItWorks = {
  id: "how",
  h2: "Three steps. The last one is yours.",
  sub: "About five minutes to set up. After that it's a button and a reply.",
  close: "Then close the tab and get back to work.",
  steps: [
    {
      n: "1",
      icon: "brief" as IconName,
      h3: "Tell us what you do",
      kicker: "Two questions, and that's the setup.",
      parts: [
        {
          label: "What do you sell?",
          body: "Paste your website, or upload a short PDF. We read it and fill in what you sell, who buys it, and what to search for. Anything we get wrong, you fix in settings.",
        },
        {
          label: "Who do you already read?",
          body: "Paste five to ten X accounts you trust. We check each one against a real profile. If one doesn't exist, you see it on the screen. Nothing is dropped quietly.",
        },
      ],
      foot: "About five minutes.",
    },
    {
      n: "2",
      icon: "scan" as IconName,
      h3: "Press the button",
      kicker: "You decide when it looks.",
      body: "Press Scan. It checks X once, throws out the junk, and puts what's left on one page. Each post comes with one sentence on why it's there.",
      note: "Nothing runs while you're away. It's a light switch, not a motion sensor.",
    },
    {
      n: "3",
      icon: "reply" as IconName,
      h3: "Write the reply",
      kicker: "This part is yours.",
      body: "Open a post. On the paid plan a first draft is already written. Change what you want, copy it, open the post on X, and send it from your own account.",
      foot: "Then mark it replied.",
    },
  ],
} as const;

export const whyOnDesk = {
  h2: "Every post says why it's there.",
  lead:
    "A score with no reason is just decoration. So every post comes with one plain sentence, 18 words at most, sitting right above it.",
  exampleWhy: deskCards.ask.why,
  filtersTitle: "What we throw out before you see anything",
  filtersLead: "Cheap checks run first, and they drop a lot:",
  cheapRules: [
    "Accounts less than three weeks old",
    "Accounts that look like follow farms",
    "Posts with almost no words in them",
    "Giveaways, crypto, airdrops and \"DM me for\" posts",
    "Anyone you've hidden, and anyone flooding your page",
  ],
  asksBar: [
    "Posts where someone is asking to buy have to clear more than that. Older than three days: out. More than 60 replies: out, because the thread is already over. More than 250,000 followers: out, because they get 400 replies and they aren't buying.",
    "The accounts you picked don't get those rules. Follower and reply limits are there to judge strangers. Used on the people you chose, they would throw out the exact people you chose.",
  ],
  close:
    "A bad post costs you more than a missed one. We'd rather show you an empty page than a noisy one.",
} as const;

export const theDraft = {
  h2: "A first draft you could actually send.",
  lead: "It reads like a person who read the post. You're still the one who sends it.",
  rulesTitle: "The rules it follows",
  rules: [
    "One to three sentences. Never a thread, never a list.",
    "Never opens with a compliment. No \"Great question.\" No \"So true.\"",
    "Answers first. It never pitches in the first sentence.",
    "Only mentions what you sell when someone is asking to buy. In every other post, a pitch is how you get muted.",
    "No links, no hashtags, no emoji.",
    "Never says you used their product, met them, or worked with them. Never makes up a number or a client.",
    "Sounds like your own writing, if you give it samples. With none, it stays plain and short instead of inventing a voice.",
    "280 characters, counted on the screen, not guessed.",
  ],
  compareTitle: "Same founder, two posts",
  compare: {
    ask: {
      label: "Someone asking to buy",
      post: "Is there a status page tool that isn't $99/mo?",
      draft: deskCards.ask.draft,
      note: "Mentions the product in the third sentence.",
    },
    room: {
      label: "Someone you follow",
      post: "Our first real outage last night. Wrote the postmortem before the fix was even deployed.",
      draft:
        "Writing it before the fix shipped is the part people remember, even if the root cause changes later. An update line at the top covers you when it does.",
      note: "Doesn't mention the product at all.",
    },
  },
  close: "There is no send button. There never will be.",
  planNote:
    "Drafts come with the paid plan. On the free plan you still get every post and every reason, and you write the reply yourself.",
} as const;

export const roomDraftLength = theDraft.compare.room.draft.length;

export const rules = {
  frame: "We never post for you.",
  h2Lines: ["We never", "post", "for you."] as const,
  lead: "These are rules in the code, not settings you have to go and find.",
  neverTitle: "We never",
  never: [
    "Post, like, follow or message anyone for you. Not on a schedule, not ever.",
    "Check X when you didn't press the button.",
    "Sell you followers.",
    "Fake urgency. You'll never see \"12 people are looking at this.\"",
    "Keep files on people.",
    "Call ourselves an agent.",
  ],
  alwaysTitle: "We always",
  always: [
    "Show you the real post, who wrote it, and the link.",
    "Tell you where it came from: public X posts, read only.",
    "Let you hide someone in one press, and undo anything in one press.",
  ],
  close: "You need no X password, and we never get write access to your account.",
} as const;

export const follow = {
  id: "follow",
  label: "The accounts you follow",
  h2: "Who have you gone quiet on?",
  lead:
    "You pick about a hundred accounts: buyers, people like you, and people your buyers listen to. We watch what they post. The longer you keep the list, the more it knows about who you've shown up for.",
  neglect: {
    title: "The quiet list",
    heading: "A CRM tells you who you haven't called. X doesn't. This does.",
    lead:
      "For each account we work out three things: when they last posted, when you last saw one of their posts, and when you last replied. Then we sort them.",
    items: [
      {
        name: "You've gone quiet on them.",
        body: "They're posting. You haven't replied in two weeks.",
      },
      {
        name: "They've gone quiet.",
        body: "They stopped posting. We check this first, so you're never blamed for someone else's silence.",
      },
      {
        name: "Maybe drop them.",
        body: "Nothing from them for a month. We offer five at a time. Say keep, and they stay.",
      },
    ],
    foot: "New accounts get a week before any of this counts.",
  },
  weeklyFive: {
    pro: true,
    title: "Five a week",
    heading: "Five new accounts a week. At least two from outside your own circle.",
    body:
      "Once a week we suggest five accounts to add. At least two have to come from outside the group you already follow. That's a rule, not a setting. A list that only finds people who already talk to each other makes you a local, then makes you invisible.",
    analogy: "Otherwise you're posting in your own living room while the party is next door.",
    bar:
      "Every suggestion has to clear a bar we print on the screen: posted about your topic in the last three weeks, between 1,000 and 2,000,000 followers, and real replies and likes. We only suggest accounts we found posting, so we know they're real. Nothing an AI merely remembers reaches your screen.",
    reject: "Say no once, and we never suggest that account again.",
  },
  finding: {
    title: "Adding accounts",
    body:
      "Paste them one per line. Or let us search your topics two ways: the most-liked posts, to find who the market is built around, and the newest posts, to find who's talking today. You see the numbers behind each one, and you approve them one at a time.",
  },
  channels: {
    pro: true,
    title: "Topic rooms",
    heading: "Join a topic for two weeks.",
    body:
      "A topic room is a hand-picked set of accounts and phrases around one subject. Join one and its posts show up on your page, tagged. The join ends by itself after 14 days. Three at a time.",
    analogy:
      "A topic room never adds anyone to your own list. Your list is your contacts. A room is a conference badge that expires. Leave whenever you like, and anything you saved stays.",
    roomsLabel: "Rooms open now",
    rooms: [
      "Build in public",
      "Bootstrapped SaaS",
      "AI engineering",
      "Design engineering",
      "Go to market",
    ],
  },
  close:
    "Turning someone off never deletes them. Downgrading never deletes anyone. The list is yours.",
} as const;

export const walkthrough = {
  label: "Example",
  h2: "One post, start to finish.",
  disclosure:
    "An example for a founder who sells a small status page tool. The post is written for this page. The rules it passed are real.",
  steps: [
    {
      n: "1",
      title: "Press Scan.",
      body: "They press the button at 9:02. Most of what comes back gets thrown out. Three posts make the page.",
    },
    {
      n: "2",
      title: "The post.",
      post: deskCards.ask.post,
      why: deskCards.ask.why,
    },
    {
      n: "3",
      title: "Why it made it.",
      body: "14 minutes old, well under three days. 5 replies, well under 60. 2,140 followers, well under 250,000. The account is years old. It's a real question, not a giveaway.",
    },
    {
      n: "4",
      title: "The draft.",
      draft: deskCards.ask.draft,
    },
    {
      n: "5",
      title: "What they changed.",
      body: "\"and can share it if useful\" became \"happy to send it over.\" Their words, not ours.",
    },
    {
      n: "6",
      title: "Sent.",
      body: "Copied, opened on X, sent from their own account at 9:07. Reply number six, not reply number forty-six.",
    },
  ],
} as const;

export const audience = {
  h2: "Who it's for. And who it isn't.",
  forTitle: "For",
  forItems: [
    {
      title: "Founders who get work from their own posts and replies.",
      body: "You can name twelve accounts you should be replying to, and you know there are a hundred more.",
    },
    {
      title: "Agency owners and consultants",
      body: "who get hired because the right people keep seeing their name.",
    },
    {
      title: "Creators with something to sell,",
      body: "who know replies are the job and won't sound like a bot doing it.",
    },
  ],
  notTitle: "Not for",
  notItems: [
    {
      title: "Brands with an ad budget.",
      body: "Your growth doesn't depend on your own face.",
    },
    {
      title: "Sales reps counting leads.",
      body: "This is a daily habit, not a lead counter.",
    },
    {
      title: "People who want to post more.",
      body: "That's Typefully or Hypefury. They help with what you post. We help with who you show up for.",
    },
    {
      title: "Anyone who wants auto-replies, pods or mass-follow.",
      body: "We never touch your account.",
    },
    {
      title: "Anyone who won't pick about a hundred accounts to follow.",
      body: "That list is the whole product.",
    },
  ],
  close:
    "If you want volume, other tools do that. This one sends you back to X with a few replies worth sending.",
} as const;

export const pricing = {
  id: "pricing",
  h2: "Start free. Pay when ten accounts isn't enough.",
  lede:
    "The button works on the free plan, because an empty page doesn't sell anything. The limits show up after it's already worked.",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "",
      tagline: "See if your corner of X is worth the time.",
      cta: "Start free",
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      tagline: "Keep up with everyone you follow.",
      cta: "Start free",
    },
  ],
  rows: [
    { feature: "Scan now", free: "Yes", pro: "Yes" },
    { feature: "Accounts you can follow", free: "10", pro: "150" },
    { feature: "Things we search for", free: "2", pro: "12" },
    { feature: "Posts a day", free: "10 per list", pro: "No limit" },
    { feature: "A reason on every post", free: "Yes", pro: "Yes" },
    { feature: "Saved posts", free: "No limit", pro: "No limit" },
    { feature: "Drafts in your own voice", free: "—", pro: "Yes" },
    { feature: "Five suggestions a week", free: "—", pro: "Yes" },
    { feature: "Topic rooms", free: "—", pro: "Yes" },
  ],
  notes: [
    "$29 a month. Cancel on Whop.",
    "Downgrading never deletes anything. Your accounts stay, and we keep checking them. The limit is only on adding more.",
    "We never post for you.",
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
      q: "Where do the posts come from?",
      a: "Public posts on X, read only. No X password, and no write access to your account.",
    },
    {
      q: "Is this a growth tool?",
      a: "No. It's a short list of posts to answer. It worked if the reply was useful.",
    },
    {
      q: "What if the page is empty?",
      a: "Good. We'd rather show you nothing than lower the bar.",
    },
    {
      q: "Does it run in the background?",
      a: "No. You press Scan. Nothing checks X while you're away, and nothing runs overnight.",
    },
    {
      q: "What's the difference between free and paid?",
      a: "Paid writes your first drafts, follows 150 accounts instead of 10, suggests five new accounts a week, and opens topic rooms. The button works on both.",
    },
    {
      q: "What happens if I downgrade?",
      a: "Nothing gets deleted. Your accounts stay, and we keep checking them. You just can't add more past the free limit.",
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
  frame: "We never post for you.",
  h2: "Two questions and you're set up.",
  body: "Tell us what you sell. Paste five accounts you already read. That's the whole setup.",
  primary: "Start free",
  trust: "We never post for you. · Free plan · No X password",
} as const;

export const footer = {
  copy: "© 2026 replylane",
  trust: "We never post for you.",
} as const;

export const notFound = {
  h1: "Nothing at this address.",
  body: "Your page is one click away.",
  cta: "Go to the homepage",
} as const;

export const briefDemo = {
  url: "yourstatus.com",
  handles: ["@jlin", "@nolan", "@priya", "@shipweekly", "@incidentops"],
} as const;
