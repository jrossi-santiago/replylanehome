import { Instrument_Serif } from "next/font/google";
import type { Metadata } from "next";
import { meta } from "@/content/site";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function VariantLayout({ children }: LayoutProps<"/v2">) {
  return (
    <div
      className={`${instrument.variable} ${instrument.className} min-h-full bg-snow`}
    >
      {children}
    </div>
  );
}
