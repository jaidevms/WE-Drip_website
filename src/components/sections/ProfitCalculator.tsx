"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const sliderClassName =
  "[&_[data-slot=slider-track]]:bg-white/10 [&_[data-slot=slider-range]]:bg-brand-yellow [&_[data-slot=slider-thumb]]:size-4 [&_[data-slot=slider-thumb]]:border-brand-yellow [&_[data-slot=slider-thumb]]:bg-white";

export function ProfitCalculator() {
  const [itemsSold, setItemsSold] = useState(50);
  const [salePrice, setSalePrice] = useState(800);
  const [productionCost, setProductionCost] = useState(300);

  const profitPerItem = salePrice - productionCost;
  const monthlyProfit = itemsSold * profitPerItem;
  const yourShare = monthlyProfit * 0.8;
  const ourShare = monthlyProfit * 0.2;
  const annualYour = yourShare * 12;
  const annualOurs = ourShare * 12;

  return (
    <section
      id="calculator"
      className="bg-brand-black px-6 py-16 md:py-[120px]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs uppercase tracking-wide text-brand-yellow">
          What You Keep
        </span>
        <h2 className="mt-2 text-[32px] font-bold uppercase leading-[1.05] tracking-tight-display text-white md:text-[44px]">
          Run the numbers on Full Service.
        </h2>
        <p className="mt-4 text-base text-white/60 md:text-lg">
          Drag the sliders. See what you keep.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Controls */}
        <div className="space-y-10">
          <div>
            <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-wide text-white/70">
              <span>Items sold / month</span>
              <span className="text-2xl font-bold text-brand-yellow">
                {itemsSold}
              </span>
            </div>
            <Slider
              className={`mt-5 ${sliderClassName}`}
              min={10}
              max={500}
              step={10}
              value={[itemsSold]}
              onValueChange={(v) => setItemsSold(v[0])}
            />
            <div className="mt-2 flex justify-between font-mono text-xs text-white/40">
              <span>10</span>
              <span>500</span>
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-wide text-white/70">
              <span>Sale price / item</span>
              <span className="text-2xl font-bold text-brand-yellow">
                ₹{salePrice}
              </span>
            </div>
            <Slider
              className={`mt-5 ${sliderClassName}`}
              min={400}
              max={1500}
              step={50}
              value={[salePrice]}
              onValueChange={(v) => setSalePrice(v[0])}
            />
            <div className="mt-2 flex justify-between font-mono text-xs text-white/40">
              <span>₹400</span>
              <span>₹1,500</span>
            </div>
          </div>

          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-white/70">
              Production cost / item
            </label>
            <div className="mt-5 flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-3">
              <span className="font-mono text-2xl text-brand-yellow">₹</span>
              <Input
                type="number"
                min={0}
                value={productionCost}
                onChange={(e) =>
                  setProductionCost(Number(e.target.value) || 0)
                }
                className="h-auto border-0 bg-transparent p-0 font-mono text-2xl text-brand-yellow shadow-none focus-visible:ring-0 dark:bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="border border-white/10 bg-white/[0.02] p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-wide text-white/60">
            Your monthly profit
          </p>
          <p className="mt-2 text-[44px] font-bold leading-none text-white md:text-[64px]">
            {formatINR(monthlyProfit)}
          </p>

          <div className="my-8 h-px bg-white/10" />

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-white/60">
                WeDrip&apos;s share (20%)
              </p>
              <p className="mt-2 text-2xl font-bold text-brand-yellow md:text-3xl">
                {formatINR(ourShare)}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-white/60">
                Annual profit (your share)
              </p>
              <p className="mt-2 text-2xl font-bold text-white md:text-3xl">
                {formatINR(annualYour)}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-brand-yellow pt-4">
            <p className="font-mono text-xs uppercase tracking-wide text-white/50">
              Year 1 total — you keep {formatINR(annualYour)} · we take{" "}
              {formatINR(annualOurs)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
