import { Instrument_Serif } from "next/font/google";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { VariantAnti } from "@/components/variant/VariantAnti";
import { VariantHero } from "@/components/variant/VariantHero";
import { VariantManifesto } from "@/components/variant/VariantManifesto";
import { VariantNav } from "@/components/variant/VariantNav";

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
        <HowItWorks />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
