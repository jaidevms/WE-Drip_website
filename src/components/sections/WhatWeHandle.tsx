import {
  Paintbrush,
  ShoppingBag,
  Package,
  Rocket,
  Megaphone,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

type Pillar = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const PILLARS: Pillar[] = [
  {
    number: "01",
    icon: Paintbrush,
    title: "Custom Design",
    description:
      "Moodboards, full design rounds, three free revisions on every package.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Store Build",
    description:
      "Shopify setup or custom-built storefront. Mobile-first. Built to convert.",
  },
  {
    number: "03",
    icon: Package,
    title: "Production & Manufacturers",
    description:
      "Vetted producer network. Hoodies, tees, mugs. Open to anything else.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Drop Strategy",
    description: "Scarcity drops, countdown launches, audience-mapped releases.",
  },
  {
    number: "05",
    icon: Megaphone,
    title: "Marketing Support",
    description:
      "Ongoing content prompts and launch coordination through your own channels.",
  },
  {
    number: "06",
    icon: MessageCircle,
    title: "Customer Care",
    description: "DMs, refunds, shipping queries — handled on your behalf.",
  },
];

export function WhatWeHandle() {
  return (
    <section
      id="what-we-handle"
      className="bg-brand-off-white py-16 md:py-[120px]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="h-2 w-2 bg-brand-yellow" />
          <span className="font-mono text-xs uppercase tracking-wide text-brand-yellow">
            What We Handle
          </span>
        </div>

        <h2 className="mt-2 max-w-[720px] font-sans text-[32px] font-bold uppercase leading-[1.05] tracking-tight-display text-brand-black md:text-[52px]">
          Everything between the idea and the sale.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-[60px] md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group flex min-h-[240px] flex-col border border-brand-gray-line p-8 transition-colors hover:border-brand-black"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-brand-black" strokeWidth={1.5} />
                  <span className="font-mono text-xs text-brand-gray-text">
                    /{pillar.number}
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-bold uppercase tracking-tight-display text-brand-black transition-colors group-hover:text-brand-yellow">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray-text">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
