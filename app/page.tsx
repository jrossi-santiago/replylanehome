import { Nav } from "@/components/Nav";
import { Audience } from "@/components/sections/Audience";
import { Desk } from "@/components/sections/Desk";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Follow } from "@/components/sections/Follow";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Lists } from "@/components/sections/Lists";
import { Pricing } from "@/components/sections/Pricing";
import { PlainPromise } from "@/components/sections/Promise";
import { RulesBand } from "@/components/sections/RulesBand";
import { Story } from "@/components/sections/Story";
import { TheDraft } from "@/components/sections/TheDraft";
import { Walkthrough } from "@/components/sections/Walkthrough";
import { WhyOnDesk } from "@/components/sections/WhyOnDesk";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <PlainPromise />
        <Story />
        <Lists />
        <Desk />
        <HowItWorks />
        <WhyOnDesk />
        <TheDraft />
        <RulesBand />
        <Follow />
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
