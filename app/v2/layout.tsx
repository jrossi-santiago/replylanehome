import { Newsreader } from "next/font/google";
import type { Metadata } from "next";
import { meta } from "@/content/site";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function VariantLayout({ children }: LayoutProps<"/v2">) {
  return (
    <div className={`${newsreader.variable} min-h-full bg-snow`}>{children}</div>
  );
}
