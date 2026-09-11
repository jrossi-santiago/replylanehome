import { Lamp } from "@/components/Lamp";
import { heroTweet } from "@/content/site";

/** Avatar drawn in code: flat ink disc with a clay dot lane. No image asset. */
function Avatar() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="shrink-0 rounded-full"
    >
      <circle cx="24" cy="24" r="24" fill="var(--color-ink)" />
      <g fill="var(--color-clay)">
        <circle cx="14" cy="30" r="2.6" />
        <circle cx="21" cy="26" r="2.6" />
        <circle cx="28" cy="22" r="2.6" />
      </g>
      <circle cx="35" cy="18" r="2.6" fill="var(--color-paper)" />
      <path
        d="M11 37h26"
        stroke="var(--color-paper)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Verified() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" aria-label="Verified" role="img">
      <path
        fill="var(--color-clay-deep)"
        d="M12 1.6l2.6 2.1 3.3-.4 1 3.2 2.9 1.7-1.3 3.1 1.3 3.1-2.9 1.7-1 3.2-3.3-.4L12 22.4l-2.6-2.1-3.3.4-1-3.2-2.9-1.7 1.3-3.1-1.3-3.1 2.9-1.7 1-3.2 3.3.4z"
      />
      <path
        d="M7.8 12.2l2.9 2.9 5.5-6"
        fill="none"
        stroke="var(--color-snow)"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const glyphs = {
  reply:
    "M20 12.2a6.8 6.8 0 0 1-6.8 6.8H9.6L5 22l1.2-3.8A6.8 6.8 0 0 1 10.8 5.4h2.4A6.8 6.8 0 0 1 20 12.2Z",
  repost: "M17 3.5l3.2 3.2-3.2 3.2M20.2 6.7H8.6a3.2 3.2 0 0 0-3.2 3.2v3.3M7 20.5l-3.2-3.2L7 14.1M3.8 17.3h11.6a3.2 3.2 0 0 0 3.2-3.2v-3.3",
  like: "M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 0 0-7.1 7.1l1.3 1.3L12 21.1l7.1-7.1 1.3-1.3a5 5 0 0 0 0-7.1Z",
  views: "M4 20V11.5M9.3 20V4.8M14.7 20v-6.2M20 20V8",
  bookmark: "M19 21l-7-4.8L5 21V5.6A2.6 2.6 0 0 1 7.6 3h8.8A2.6 2.6 0 0 1 19 5.6Z",
  share: "M4 13.2V19a2.4 2.4 0 0 0 2.4 2.4h11.2A2.4 2.4 0 0 0 20 19v-5.8M16 6.2 12 2.4 8 6.2M12 2.4v13.4",
} as const;

function Glyph({ d }: { d: string }) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ActionProps = {
  d: string;
  value?: string;
  label: string;
  accent?: boolean;
};

function Action({ d, value, label, accent = false }: ActionProps) {
  return (
    <span
      className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 ${
        accent ? "text-clay-deep" : "text-ink/55"
      }`}
    >
      <Glyph d={d} />
      {value ? <span className="type-data tabular-nums">{value}</span> : null}
      <span className="sr-only">{label}</span>
    </span>
  );
}

/** Hand-drawn style hook: rises diagonally off the card's top-right corner. */
function NoteArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="58"
      height="56"
      viewBox="0 0 58 56"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-clay-deep xl:-scale-x-100 ${className}`}
    >
      <path
        d="M2 3C18 9 34 21 44 44"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M44 44 45.4 33.6M44 44 35.6 38.1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  className?: string;
};

/** Mocked X post used as the hero graphic. Static markup, no screenshot. */
export function TweetCard({ className = "" }: Props) {
  const t = heroTweet;

  return (
    <figure className={`relative mx-auto w-full max-w-[560px] text-left ${className}`}>
      {/* Below xl the note stacks above the card. From xl it leaves the flow and
          juts into the right margin, so the card keeps its original position: the
          arrow is pinned to the card's top-right corner and the note is centred on
          the arrow's tail, so the hook meets it mid-comment at any line count. */}
      <div className="-mb-1 flex items-end justify-end gap-1 pr-4 md:pr-7 xl:absolute xl:-top-11 xl:left-full xl:-ml-3 xl:mb-0 xl:block xl:h-14 xl:w-[332px] xl:pr-0 2xl:w-[392px]">
        <p className="max-w-[300px] pb-2 text-right xl:absolute xl:top-[3px] xl:left-[68px] xl:w-[264px] xl:max-w-none xl:-translate-y-1/2 xl:pb-0 xl:text-left 2xl:w-[324px]">
          <span className="mb-1 flex items-center justify-end gap-1.5 font-mono text-[12px] text-ink/60 xl:justify-start">
            <Lamp state="done" surface="light" />
            {t.note.label}
          </span>
          <span className="type-why block">{t.note.text}</span>
        </p>
        <NoteArrow className="xl:absolute xl:top-0 xl:left-0" />
      </div>

      <article className="rounded-2xl border border-ink/10 bg-snow p-4 shadow-card sm:p-5 md:p-6">
        <header className="flex items-start gap-3">
          <Avatar />
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1.5">
              <span className="truncate font-head text-[16px] font-bold tracking-[-0.01em] text-ink">
                {t.name}
              </span>
              {t.verified ? <Verified /> : null}
            </p>
            <p className="font-body text-[15px] leading-[20px] text-ink/55">{t.handle}</p>
          </div>
          <span className="mt-1 flex gap-1 text-ink/40" aria-hidden="true">
            <span className="h-[3px] w-[3px] rounded-full bg-current" />
            <span className="h-[3px] w-[3px] rounded-full bg-current" />
            <span className="h-[3px] w-[3px] rounded-full bg-current" />
          </span>
        </header>

        <div className="mt-4 space-y-3 font-body text-[17px] leading-[25px] text-ink md:text-[18px] md:leading-[27px]">
          {t.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>
            {t.mentionBefore}
            <span className="text-clay-deep">{t.mention}</span>
            {t.mentionAfter}
          </p>
          <p className="text-clay-deep">
            {t.tags.map((tag) => (
              <span key={tag} className="mr-2 inline-block">
                {tag}
              </span>
            ))}
          </p>
        </div>

        <p className="mt-4 type-data text-ink/55">
          {t.time} · {t.date} ·{" "}
          <span className="font-medium text-ink">{t.stats.views}</span> Views
        </p>

        <div className="mt-4 h-px rule-paper" />

        <p className="flex flex-wrap gap-x-4 gap-y-1 py-3 font-body text-[14px] text-ink/55">
          {t.counts.map((c) => (
            <span key={c.label}>
              <span className="font-medium text-ink tabular-nums">{c.value}</span> {c.label}
            </span>
          ))}
        </p>

        <div className="h-px rule-paper" />

        <div className="mt-1 flex items-center justify-between gap-2">
          <Action d={glyphs.reply} value={t.stats.replies} label="Replies" />
          <Action d={glyphs.repost} value={t.stats.reposts} label="Reposts" />
          <Action d={glyphs.like} value={t.stats.likes} label="Likes" accent />
          <span className="hidden sm:contents">
            <Action d={glyphs.views} value={t.stats.views} label="Impressions" />
          </span>
          <span className="flex shrink-0 items-center gap-3 text-ink/55">
            <Action d={glyphs.bookmark} label="Bookmark" />
            <Action d={glyphs.share} label="Share" />
          </span>
        </div>
      </article>

      <figcaption className="mt-3 text-center type-frame text-ink/50">{t.caption}</figcaption>
    </figure>
  );
}
