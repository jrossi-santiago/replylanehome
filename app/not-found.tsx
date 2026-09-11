import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { notFound } from "@/content/site";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        aria-hidden="true"
      >
        <Image
          src="/halftone/404-lane.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
      </div>
      <div className="page-container relative flex min-h-screen flex-col justify-center py-24">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-1.5 text-ink no-underline"
        >
          <span className="font-mark text-[18px] font-bold" aria-hidden="true">
            ⏎
          </span>
          <span className="font-head text-[18px] font-extrabold lowercase tracking-[-0.035em]">
            replylane
          </span>
        </Link>
        <h1 className="type-display max-w-xl text-ink">{notFound.h1}</h1>
        <p className="mt-4 max-w-md font-body text-[17px] leading-[26px] text-ink/70">
          {notFound.body}
        </p>
        <div className="mt-8">
          <Button href="/">{notFound.cta}</Button>
        </div>
      </div>
    </main>
  );
}
