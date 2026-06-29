import { RefreshCcw, Calendar, TrendingUp, Receipt } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const ITEMS = [
  {
    icon: RefreshCcw,
    title: "3 free revisions",
    detail: "Every package. No surprise charges.",
  },
  {
    icon: Calendar,
    title: "28 days, kickoff to live",
    detail: "Minimum delivery timeline across all packages.",
  },
  {
    icon: TrendingUp,
    title: "10% off when you upgrade",
    detail: "Start with Exclusive Drop, move up later, save 10%.",
  },
  {
    icon: Receipt,
    title: "GST on your customers, not on you",
    detail:
      "Our fees are GST-exempt to you. GST applies only to your end customers' merch purchases.",
  },
];

export function FinePrint() {
  return (
    <section className="border-y border-brand-black bg-brand-off-white px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
            <BlurFade key={item.title} delay={index * 0.08} inView>
              <div className="flex items-start gap-4">
                <Icon
                  className="mt-1 h-6 w-6 flex-shrink-0 text-brand-black"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-tight-display text-brand-black">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-gray-text">
                    {item.detail}
                  </p>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
