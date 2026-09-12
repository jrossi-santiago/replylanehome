import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { VariantAnti } from "@/components/variant/VariantAnti";
import { VariantHero } from "@/components/variant/VariantHero";
import { VariantManifesto } from "@/components/variant/VariantManifesto";
import { VariantNav } from "@/components/variant/VariantNav";
import { variant } from "@/content/variant";

export default function VariantHomePage() {
  return (
    <>
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
      <Footer
        compareHref={variant.originalPath}
        compareLabel={variant.originalLabel}
      />
    </>
  );
}
