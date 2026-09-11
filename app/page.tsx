import { Nav } from "@/components/Nav";
import { ArgumentCard } from "@/components/sections/ArgumentCard";
import { Audience } from "@/components/sections/Audience";
import { Circle } from "@/components/sections/Circle";
import { Desk } from "@/components/sections/Desk";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Frames } from "@/components/sections/Frames";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { RulesBand } from "@/components/sections/RulesBand";
import { TheDraft } from "@/components/sections/TheDraft";
import { TwoKinds } from "@/components/sections/TwoKinds";
import { Walkthrough } from "@/components/sections/Walkthrough";
import { WhyOnDesk } from "@/components/sections/WhyOnDesk";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Desk />
        <Frames />
        <ArgumentCard />
        <TwoKinds />
        <HowItWorks />
        <WhyOnDesk />
        <TheDraft />
        <RulesBand />
        <Circle />
        <Walkthrough />
        <Audience />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
