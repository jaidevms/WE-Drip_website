import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Marquee } from "@/components/ui/marquee";
import { Magnetic } from "@/components/Magnetic";

const MARQUEE_TEXT = "MERCH FOR CREATORS · INDIA ·";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-brand-off-white"
    >
      <DotPattern
        className="text-brand-yellow opacity-[0.04]"
        width={20}
        height={20}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-24 text-center">
        <div className="mb-6 h-1 w-20 bg-brand-yellow" />

        <h1 className="max-w-[1600px] font-sans text-[44px] font-bold uppercase leading-[0.95] tracking-tight-display text-brand-black min-[840px]:text-[64px] xl:text-[96px]">
          <span className="block">YOU BUILT THE AUDIENCE.</span>
          <span className="block">WE&apos;LL BUILD THE BRAND.</span>
        </h1>

        <p className="mt-8 max-w-[560px] text-base leading-relaxed text-brand-gray-text md:text-lg">
          India&apos;s merch agency for creators. We design it, build the
          store, handle production. You just show up.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <Magnetic>
            <Link
              href="/apply"
              className="flex w-full items-center justify-center gap-2 rounded-[4px] bg-brand-black px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-yellow hover:text-brand-black sm:w-auto"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="#packages"
              className="flex w-full items-center justify-center rounded-[4px] border border-brand-black bg-transparent px-8 py-4 text-base font-bold uppercase tracking-wide text-brand-black transition-colors hover:bg-brand-black hover:text-white sm:w-auto"
            >
              See Packages
            </Link>
          </Magnetic>
        </div>
      </div>

      <Marquee
        className="relative z-10 h-12 items-center bg-brand-black [--duration:30s]"
        repeat={6}
      >
        <span className="mx-4 whitespace-nowrap font-mono text-sm uppercase tracking-wide text-brand-yellow">
          {MARQUEE_TEXT}
        </span>
      </Marquee>
    </section>
  );
}
