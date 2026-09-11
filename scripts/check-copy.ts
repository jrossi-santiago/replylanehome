/**
 * Copy acceptance checks for the replylane marketing site.
 * Run: npx tsx scripts/check-copy.ts
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { askDraftLength, deskCards, roomDraftLength, theDraft } from "../content/site";

const BANNED = [
  "10x",
  "unlock",
  "turbocharge",
  "supercharge",
  "AI-powered",
  "AI agent",
  "while you sleep",
  "grow your brand",
  "must-have",
  "effortless",
  "excited",
  "revolutionize",
  "game-changer",
  "reply-lane",
  "lock in",
];

const roots = ["app", "components", "content"];

function walk(dir: string, acc: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (/\.(tsx?|jsx?|mdx?)$/.test(name)) acc.push(p);
  }
  return acc;
}

let failed = 0;

function fail(msg: string) {
  console.error("FAIL:", msg);
  failed += 1;
}

function ok(msg: string) {
  console.log("ok:", msg);
}

function wordCount(s: string) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

if (askDraftLength !== deskCards.ask.draft.length) {
  fail("ask draft length mismatch");
} else if (askDraftLength > 280) {
  fail(`ask draft length is ${askDraftLength}, over 280`);
} else {
  ok(`ask draft count ${askDraftLength}`);
}

if (roomDraftLength !== theDraft.compare.room.draft.length) {
  fail("room draft length mismatch");
} else if (roomDraftLength > 280) {
  fail(`room draft length is ${roomDraftLength}, over 280`);
} else {
  ok(`room draft count ${roomDraftLength}`);
}

for (const [name, why] of Object.entries({
  ask: deskCards.ask.why,
  outage: deskCards.outage.why,
  changelog: deskCards.changelog.why,
})) {
  const n = wordCount(why);
  if (n > 18) fail(`${name} why-line is ${n} words, max 18`);
  else ok(`${name} why-line ${n} words`);
}

const files = roots.flatMap((r) => walk(join(process.cwd(), r)));
const corpus = files.map((f) => readFileSync(f, "utf8")).join("\n");
const site = readFileSync(join(process.cwd(), "content/site.ts"), "utf8");
const page = readFileSync(join(process.cwd(), "app/page.tsx"), "utf8");

for (const word of BANNED) {
  const re = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  if (re.test(corpus)) {
    const hit = files.find((f) => re.test(readFileSync(f, "utf8")));
    fail(`banned term "${word}" in ${hit}`);
  }
}
ok("no banned terms");

const bangFiles = files.filter((f) => {
  const t = readFileSync(f, "utf8");
  return /['"`][^'"`]*![^'"`]*['"`]/.test(t) && !f.includes("check-copy");
});
if (bangFiles.length) {
  fail(`exclamation in strings: ${bangFiles.join(", ")}`);
} else {
  ok("no ! in strings");
}

if (/\{confirm/i.test(site) || /\{FILL\}/.test(site)) {
  fail("{confirm} or {FILL} left in content/site.ts");
} else {
  ok("no placeholders in site.ts");
}

if (/label:\s*"Window"/.test(site) || />\s*Window\s*</.test(corpus)) {
  fail("Window used as a lane name");
} else {
  ok("Room, not Window");
}

if (/TestimonialPair/.test(page)) {
  fail("testimonials shipped on the homepage");
} else {
  ok("testimonials not on the homepage");
}

if (/digestPreview|Morning digest|Your desk this morning/.test(site)) {
  fail("morning digest copy shipped");
} else {
  ok("digest held back");
}

if (/\bSend\b|\bPost\b/.test(corpus) && /button|Button/.test(corpus)) {
  const sendHits = files.filter((f) => {
    const t = readFileSync(f, "utf8");
    return /\b(Send|Post)\b/.test(t) && !f.includes("check-copy") && !f.includes("CONFIRM");
  });
  const bad = sendHits.filter((f) => {
    const t = readFileSync(f, "utf8");
    return />\s*Send\s*</.test(t) || />\s*Post\s*</.test(t) || /"Send"|"Post"/.test(t);
  });
  if (bad.length) fail(`Send/Post button label in ${bad.join(", ")}`);
  else ok("no Send/Post buttons");
} else {
  ok("no Send/Post buttons");
}

const clayDeepFiles = files.filter((f) => readFileSync(f, "utf8").includes("clay-deep"));
ok(`clay-deep references: ${clayDeepFiles.length} files`);

if (failed) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}
console.log("\nAll copy checks passed");
