/**
 * Copy acceptance checks for the replylane marketing site.
 * Run: npx tsx scripts/check-copy.ts
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { mayaDraftLength, deskCards } from "../content/site";

const BANNED = [
  "10x",
  "unlock",
  "turbocharge",
  "supercharge",
  "engagement",
  "AI agent",
  "AI-powered",
  "while you sleep",
  "grow your brand",
  "must-have",
  "effortless",
  "seamless",
  "excited",
  "thrilled",
  "leads",
  "automate",
  "powerful",
  "smart",
  "advanced",
  "game-changer",
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

// Draft length
if (mayaDraftLength !== deskCards.maya.draft.length) {
  fail("maya draft length mismatch");
} else if (mayaDraftLength !== 185) {
  fail(`maya draft length is ${mayaDraftLength}, expected 185`);
} else {
  ok(`draft count ${mayaDraftLength}`);
}

const files = roots.flatMap((r) => walk(join(process.cwd(), r)));
const corpus = files.map((f) => readFileSync(f, "utf8")).join("\n");

// Banned words (case-insensitive) — exclude this script and CONFIRM
for (const word of BANNED) {
  const re = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  if (re.test(corpus)) {
    // find file
    const hit = files.find((f) => re.test(readFileSync(f, "utf8")));
    fail(`banned term "${word}" in ${hit}`);
  }
}
ok("no banned terms");

// Exclamation marks in user-facing strings (rough): exclude code comments sparingly
const bangFiles = files.filter((f) => {
  const t = readFileSync(f, "utf8");
  // Look for ! inside string literals that aren't !== and !=
  return /['"`][^'"`]*![^'"`]*['"`]/.test(t) && !f.includes("check-copy");
});
if (bangFiles.length) {
  fail(`exclamation in strings: ${bangFiles.join(", ")}`);
} else {
  ok("no ! in strings");
}

// Unresolved confirm placeholders in content
if (/\{confirm/.test(readFileSync(join(process.cwd(), "content/site.ts"), "utf8"))) {
  fail("{confirm} left in content/site.ts");
} else {
  ok("no {confirm} in site.ts");
}

// Send / Post buttons
if (/\bSend\b|\bPost\b/.test(corpus) && /button|Button/.test(corpus)) {
  const sendHits = files.filter((f) => {
    const t = readFileSync(f, "utf8");
    return /\b(Send|Post)\b/.test(t) && !f.includes("check-copy") && !f.includes("CONFIRM");
  });
  // Allow "posts" lowercase narrative, block button labels
  const bad = sendHits.filter((f) => {
    const t = readFileSync(f, "utf8");
    return />\s*Send\s*</.test(t) || />\s*Post\s*</.test(t) || /"Send"|"Post"/.test(t);
  });
  if (bad.length) fail(`Send/Post button label in ${bad.join(", ")}`);
  else ok("no Send/Post buttons");
} else {
  ok("no Send/Post buttons");
}

// Accent phrase uniqueness — clay-deep on accent only in hero ideally
const clayDeepFiles = files.filter((f) => readFileSync(f, "utf8").includes("clay-deep"));
ok(`clay-deep references: ${clayDeepFiles.length} files`);

if (failed) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}
console.log("\nAll copy checks passed");
