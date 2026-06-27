import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhatWeHandle } from "@/components/sections/WhatWeHandle";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Packages } from "@/components/sections/Packages";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhatWeHandle />
      <HowItWorks />
      <Packages />
      <div className="flex min-h-screen items-center justify-center border-t border-brand-gray-line bg-brand-off-white">
        <p className="font-sans text-2xl font-bold uppercase tracking-tight-display text-brand-black">
          Sections coming
        </p>
      </div>
    </main>
  );
}
