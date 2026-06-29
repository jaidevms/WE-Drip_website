"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { ScrollTrigger } from "@/lib/gsap";
import { Magnetic } from "@/components/Magnetic";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#packages", label: "Packages" },
];

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={cn(
        "flex items-center text-xl font-bold uppercase tracking-tight-display",
        light ? "text-white" : "text-brand-black"
      )}
    >
      WeDrip
      <span aria-hidden="true" className="ml-0.5 text-2xl leading-none text-brand-yellow">
        &bull;
      </span>
    </span>
  );
}

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    const triggers = NAV_LINKS.map(({ href }) => {
      const section = document.querySelector(href);
      if (!section) return null;
      return ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => self.isActive && setActiveHref(href),
      });
    });
    return () => triggers.forEach((t) => t?.kill());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300 md:h-[72px]",
        scrolled
          ? "border-b border-brand-gray-line bg-brand-off-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="#home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium uppercase tracking-wide text-brand-black/70 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-brand-yellow after:transition-all after:duration-300 hover:text-brand-black hover:after:w-full",
                activeHref === link.href
                  ? "text-brand-black after:w-full"
                  : "after:w-0"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Magnetic>
            <Link
              href="/apply"
              className="hidden items-center gap-2 rounded-[4px] border border-brand-black bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-black transition-colors hover:bg-brand-yellow md:inline-flex"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Magnetic>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="p-2 text-brand-black md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-brand-black md:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <Wordmark light />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-start justify-center gap-8 px-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-4xl font-bold uppercase tracking-tight-display text-white/90 transition-colors hover:text-brand-yellow"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-10">
            <Link
              href="/apply"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-[4px] bg-brand-yellow py-5 text-center text-base font-bold uppercase tracking-wide text-brand-black"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
