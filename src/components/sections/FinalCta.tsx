import Link from "next/link";
import { ArrowRight, MessageCircle, AtSign, Mail } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const WHATSAPP_URL =
  "https://wa.me/917550022162";

const SITEMAP_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#packages", label: "Packages" },
  { href: "/apply", label: "Apply" },
];

export function FinalCta() {
  return (
    <section className="bg-brand-black">
      <div className="px-6 pb-24 pt-32 text-center md:pb-32 md:pt-40">
        <h2 className="text-[48px] font-bold uppercase leading-[0.95] tracking-tight-display min-[460px]:text-[64px] md:text-[100px] lg:text-[120px]">
          <AnimatedShinyText className="mx-0 max-w-none text-brand-yellow via-white/90">
            Ready to drip?
          </AnimatedShinyText>
        </h2>
        <p className="mx-auto mt-6 max-w-[480px] text-base text-white/70 md:text-lg">
          Apply now or message us directly. We reply within 24 hours.
        </p>
        <Magnetic>
          <Link
            href="/apply"
            className="mt-10 inline-flex items-center gap-3 rounded-[4px] bg-white px-12 py-6 text-lg font-bold uppercase tracking-wide text-brand-black transition-colors hover:bg-brand-yellow"
          >
            Apply Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Magnetic>
      </div>

      <div className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          <BlurFade delay={0} inView>
            <div>
              <span className="flex items-center text-2xl font-bold uppercase tracking-tight-display text-white">
                WeDrip
                <span
                  aria-hidden="true"
                  className="ml-1 text-2xl leading-none text-brand-yellow relative -top-[3px]"
                >
                  &bull;
                </span>
              </span>
              <p className="mt-4 text-sm text-white/60">
                India&apos;s merch agency for creators.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} inView>
            <div>
              <span className="font-mono text-xs uppercase tracking-wide text-brand-yellow">
                Contact
              </span>
              <div className="mt-4 space-y-4">
                <Magnetic>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white transition-colors hover:text-brand-yellow"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>
                      WhatsApp
                      <span className="ml-2 font-mono text-sm text-white/70">
                        +91 7550022162
                      </span>
                    </span>
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://www.instagram.com/wedrip.merch/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white transition-colors hover:text-brand-yellow"
                  >
                    <AtSign className="h-4 w-4" />
                    <span>
                      Instagram
                      <span className="ml-2 font-mono text-sm text-white/70">
                        @wedrip
                      </span>
                    </span>
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="mailto:we.drip.cma@gmail.com"
                    className="flex items-center gap-3 text-white transition-colors hover:text-brand-yellow"
                  >
                    <Mail className="h-4 w-4" />
                    <span>
                      Email
                      <span className="ml-2 font-mono text-sm text-white/70">
                        we.drip.cma@gmail.com
                      </span>
                    </span>
                  </a>
                </Magnetic>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div>
              <span className="font-mono text-xs uppercase tracking-wide text-brand-yellow">
                Sitemap
              </span>
              <div className="mt-4 flex flex-col gap-3">
                {SITEMAP_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 font-mono text-xs uppercase tracking-wide text-white/40 sm:flex-row">
          <span>© 2026 WeDrip · India&apos;s merch agency for creators.</span>
          <span>Made in India</span>
        </div>
      </div>
    </section>
  );
}
