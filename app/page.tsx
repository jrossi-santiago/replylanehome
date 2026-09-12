import { Instrument_Serif } from "next/font/google";
import { VariantAnti } from "@/components/variant/VariantAnti";
import { VariantBand } from "@/components/variant/VariantBand";
import { VariantCta } from "@/components/variant/VariantCta";
import { VariantFaq } from "@/components/variant/VariantFaq";
import { VariantFooter } from "@/components/variant/VariantFooter";
import { VariantHero } from "@/components/variant/VariantHero";
import { VariantHow } from "@/components/variant/VariantHow";
import { VariantManifesto } from "@/components/variant/VariantManifesto";
import { VariantNav } from "@/components/variant/VariantNav";
import { VariantPricing } from "@/components/variant/VariantPricing";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export default function HomePage() {
  return (
    <div className={`${instrument.className} min-h-full bg-snow`}>
      <VariantNav />
      <main id="main">
        <VariantHero />
        <VariantManifesto />
        <VariantAnti />
        <VariantHow />
        <VariantBand />
        <VariantPricing />
        <VariantFaq />
        <VariantCta />
      </main>
      <VariantFooter />
    </div>
  );
}
