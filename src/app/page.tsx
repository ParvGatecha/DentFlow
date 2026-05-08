import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import SocialProof from "@/components/sections/SocialProof";
import Demo from "@/components/sections/Demo";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <Features />
      <Demo />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
