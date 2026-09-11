import { Nav } from "@/components/Nav";
import { TestimonialPair } from "@/components/TestimonialPair";
import { ArgumentCard } from "@/components/sections/ArgumentCard";
import { Audience } from "@/components/sections/Audience";
import { ChapterAnswer } from "@/components/sections/ChapterAnswer";
import { ChapterFind } from "@/components/sections/ChapterFind";
import { ChapterOps } from "@/components/sections/ChapterOps";
import { FactsRow } from "@/components/sections/FactsRow";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { RulesBand } from "@/components/sections/RulesBand";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <FactsRow />
        <HowItWorks />
        <ChapterFind />
        <ArgumentCard />
        <TestimonialPair />
        <ChapterAnswer />
        <RulesBand />
        <ChapterOps />
        <Audience />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
