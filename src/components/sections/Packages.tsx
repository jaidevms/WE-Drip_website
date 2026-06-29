import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/Magnetic";

type Package = {
  tag: string;
  priceMain: string;
  priceSuffix?: string;
  subPrice: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

const PACKAGES: Package[] = [
  {
    tag: "LOW-COMMITMENT START",
    priceMain: "₹5,000 – ₹8,000",
    subPrice: "one-time fee · production billed separately",
    description:
      "A 50-piece limited drop with 3–4 custom designs. Sell out fast, prove the demand.",
    bullets: [
      "3–4 custom designs",
      "50-piece exclusive run",
      "Store setup for the drop",
      "Drop & scarcity strategy",
    ],
    ctaLabel: "Start with a drop",
    ctaHref: "/apply?package=exclusive-drop",
  },
  {
    tag: "FULL HANDOVER",
    priceMain: "₹25,000",
    subPrice: "one-time fee · run it yourself after launch",
    description:
      "Full custom designs, full store, full POD integration. We hand you the keys.",
    bullets: [
      "Full custom design system",
      "Shopify or custom store",
      "Print-on-demand integration",
      "Manufacturer connects",
      "28-day delivery, then yours",
    ],
    ctaLabel: "Get Standard",
    ctaHref: "/apply?package=standard",
  },
  {
    tag: "WE RUN IT ALL",
    priceMain: "₹30,000",
    priceSuffix: "+ 20% profit",
    subPrice: "one-time fee · 20% of profit, monthly, for 12 months",
    description:
      "Everything in Standard, plus we run customer care, marketing, and ops for a year.",
    bullets: [
      "Everything in Standard",
      "Customer care, fully handled",
      "Ongoing marketing support",
      "Active for 12 months",
      "Renew or take it in-house after Year 1",
    ],
    ctaLabel: "Get Full Service",
    ctaHref: "/apply?package=full-service",
    highlighted: true,
  },
];

export function Packages() {
  return (
    <section id="packages" className="bg-brand-off-white px-6 py-16 md:py-[120px]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-wide text-brand-yellow">
            Packages
          </span>
          <h2 className="mt-2 text-[32px] font-bold uppercase leading-[1.05] tracking-tight-display text-brand-black md:text-[52px]">
            Three ways to start.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-base text-brand-gray-text md:text-lg">
            Pick the entry point that fits your scale. Upgrade later —
            we&apos;ll knock 10% off.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.tag}
              className={cn(
                "relative flex h-full flex-col p-8 transition-transform duration-300 hover:scale-[1.02]",
                pkg.highlighted
                  ? "border-2 border-brand-yellow"
                  : "border border-brand-gray-line"
              )}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-[4px] bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-black">
                  Most Popular
                </span>
              )}

              <span className="font-mono text-xs uppercase tracking-wide text-brand-gray-text">
                {pkg.tag}
              </span>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-[40px] font-bold leading-none text-brand-black">
                  {pkg.priceMain}
                </span>
                {pkg.priceSuffix && (
                  <span className="font-mono text-lg text-brand-gray-text">
                    {pkg.priceSuffix}
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-brand-gray-text">
                {pkg.subPrice}
              </p>

              <p className="mt-6 text-sm leading-relaxed text-brand-black">
                {pkg.description}
              </p>

              <div className="my-6 h-px bg-brand-gray-line" />

              <ul className="space-y-3">
                {pkg.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-brand-black"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <Magnetic>
                <Link
                  href={pkg.ctaHref}
                  className={cn(
                    "mt-8 flex items-center justify-center gap-2 rounded-[4px] px-6 py-4 text-sm font-bold uppercase tracking-wide transition-colors",
                    pkg.highlighted
                      ? "bg-brand-yellow text-brand-black hover:bg-brand-black hover:text-white"
                      : "bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black"
                  )}
                >
                  {pkg.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Magnetic>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
