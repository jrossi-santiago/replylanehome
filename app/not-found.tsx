import Image from "next/image";
import Link from "next/link";
import { notFound } from "@/content/site";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-40"
        aria-hidden="true"
      >
        <Image
          src="/halftone/404-lane.png"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>
      <div className="page-container relative flex min-h-screen flex-col justify-center py-24">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-paper no-underline"
        >
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-clay text-[15px] font-bold text-snow"
            aria-hidden="true"
          >
            ⏎
          </span>
          <span className="font-head text-[18px] font-extrabold leading-none tracking-[-0.035em]">
            replylane
          </span>
        </Link>
        <h1 className="type-display max-w-xl text-paper">{notFound.h1}</h1>
        <p className="mt-4 max-w-md font-body text-[17px] leading-[26px] text-muted">
          {notFound.body}
        </p>
        <div className="mt-8">
          <a href="/" className="btn-primary gap-2">
            {notFound.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
