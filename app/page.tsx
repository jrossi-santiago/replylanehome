import { VariantCta } from "@/components/variant/VariantCta";
import { VariantFaq } from "@/components/variant/VariantFaq";
import { VariantFeatures } from "@/components/variant/VariantFeatures";
import { VariantFooter } from "@/components/variant/VariantFooter";
import { VariantHero } from "@/components/variant/VariantHero";
import { VariantHow } from "@/components/variant/VariantHow";
import { VariantNav } from "@/components/variant/VariantNav";
import { VariantPricing } from "@/components/variant/VariantPricing";
import { VariantStory } from "@/components/variant/VariantStory";

export default function HomePage() {
  return (
    <div className="min-h-full bg-ink text-paper">
      <VariantNav />
      <main id="main">
        <VariantHero />
        <VariantHow />
        <VariantFeatures />
        <VariantStory />
        <VariantPricing />
        <VariantFaq />
        <VariantCta />
      </main>
      <VariantFooter />
    </div>
  );
}
