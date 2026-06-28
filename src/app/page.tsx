import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhatWeHandle } from "@/components/sections/WhatWeHandle";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Packages } from "@/components/sections/Packages";
import { ProfitCalculator } from "@/components/sections/ProfitCalculator";
import { FinePrint } from "@/components/sections/FinePrint";
import { StyleDirection } from "@/components/sections/StyleDirection";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhatWeHandle />
      <HowItWorks />
      <Packages />
      <ProfitCalculator />
      <FinePrint />
      <StyleDirection />
      <FAQ />
      <FinalCta />
    </main>
  );
}
