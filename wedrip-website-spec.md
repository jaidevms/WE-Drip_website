# WeDrip — Website Layout Spec

**Purpose:** This is the single reference doc for building the WeDrip site. Hand it to Stitch for UI, drop section briefs into Relume for wireframes, and feed the whole thing to Claude Code for the build.

**Goal of the site:** Convert cold visitors (creators with 50K–100K+ followers) into leads — either by clicking through to the `/apply` form, or messaging WhatsApp / Instagram / email directly.

---

## 0. Project Context

### Stack
- **Framework:** Next.js (App Router) + React + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui primitives
- **Animations:** GSAP + ScrollTrigger (scroll behaviors), Magic UI + ReactBits (component-level micro-interactions)
- **Forms:** Custom — Next.js API route → Supabase
- **Hosting:** Vercel (frontend), Supabase (database), Render (if any extra backend services needed later)
- **Domain:** Production on `https://www.wedrip.in`

### Brand Tokens
```
--yellow:       #fed400  /* primary accent */
--black:        #0a0a0a  /* primary dark surface */
--off-white:    #f8f6f0  /* primary light surface */
--white:        #ffffff  /* nav Apply button, contrast */
--gray-text:    #4a4a4a  /* body text on light */
--gray-line:    #e5e3dc  /* dividers, card borders */
```

### Type System
- **Display (headlines):** A bold uppercase display sans. Recommended: **Anton**, **Druk Wide**, **NB International Pro**, or as a free fallback **Geist Bold uppercase with tight tracking** (-0.02em).
- **Body:** **Inter** or **Geist** regular/medium.
- **Mono accents:** **Geist Mono** for price tags, technical labels (e.g. "₹25,000", "28 DAYS").

### Visual Language
- Bold, uppercase, minimal — streetwear-startup hybrid.
- Generous whitespace. Type does the heavy lifting.
- Yellow is used sparingly as accent — *not* as a flood color. Black is the dominant brand surface; off-white is the breathing space.
- Sharp 90° corners on most surfaces; subtle 4px rounding on inputs/buttons only.
- No drop shadows. Use borders and contrast instead.

### Animation Intensity: Medium
- Scroll-driven reveals (fade-up, blur-up, word stagger).
- One pinned section maximum (the "How it works" steps).
- Micro-interactions on buttons, cards, inputs.
- No full-page scroll hijacking. Page must scroll naturally on mobile.

---

## 1. Global Structure

### Pages
1. `/` — single-scrolling landing page (11 sections)
2. `/apply` — form page

### Sticky Nav (persistent on all pages)

**Layout:** Logo (left) · Anchor links (center, desktop only) · Apply Now button (right)

**Anchor links:** Home · How it works · Packages

**Button styling:**
- Regular nav state: nav buttons styled black (black pill on transparent / off-white nav bg).
- **Apply Now:** white background, black text, sharp/slightly-rounded pill. On hover: invert to yellow background, black text. *This is the only place where yellow appears in the nav — everywhere else stays black/white for contrast.*

**Behavior:**
- Transparent on hero, transitions to off-white background with subtle bottom border once user scrolls past hero.
- Mobile: hamburger reveals fullscreen black overlay menu with same links + giant Apply Now CTA.

**Components to use:**
- shadcn `NavigationMenu` as the base.
- ReactBits **Magnet** wrapper around the Apply Now button for subtle cursor-magnet effect.

---

## 2. Section-by-Section Spec

For each section: **Purpose · Structure · Copy · Components · Animation · Relume brief.**

---

### Section 1 — Hero

**Purpose:** Hook the visitor in under 3 seconds. Make them get what we do and want to scroll.

**Structure:**
- Full viewport height.
- Off-white background.
- Massive uppercase headline (max ~5 words per line, 2 lines).
- Subline (one sentence, ~12 words).
- Two CTAs side by side: primary "Apply Now" (black pill, white text), secondary "See Packages" (ghost outline button).
- Bottom-right or bottom-left: small marquee strip — `MERCH FOR CREATORS · INDIA · MERCH FOR CREATORS · INDIA ·` looping horizontally in a thin bar.
- Subtle yellow accent: either a small yellow underline beneath the headline, or a yellow "•" before the subline, or a yellow drip-shape SVG element in one corner.

**Copy (direction (b) — creator-empathy):**

Primary headline option A:
> **YOUR AUDIENCE IS READY.**
> **WHERE'S THE MERCH?**

Primary headline option B:
> **YOU BUILT THE AUDIENCE.**
> **WE'LL BUILD THE BRAND.**

Primary headline option C:
> **FOLLOWERS WANT MERCH.**
> **YOU DON'T HAVE TIME.**

Pick one — A is the punchiest. B is the most strategic. C is the most empathetic.

Subline:
> India's merch agency for creators. We design it, build the store, handle production. You just show up.

CTAs: `Apply Now` · `See Packages`

**Components:**
- ReactBits **SplitText** or **BlurText** for the headline — word-by-word stagger reveal on load.
- Magic UI **DotPattern** in pale yellow as the background texture (very low opacity, ~0.04).
- Magic UI **Marquee** for the bottom strip.
- shadcn `Button` for CTAs, customized.

**Animation (GSAP):**
- On page load: headline words fade-up + blur-out one by one (0.6s total, 0.08s stagger).
- Subline fades up 0.3s after headline finishes.
- CTAs scale-in from 0.95 to 1.
- The yellow accent element draws itself (SVG path animation) as the last beat.
- Subtle parallax on the dot pattern on scroll (translateY at 0.3 speed).

**Relume brief:**
> Full-viewport hero. Off-white background with very subtle yellow dot pattern. Massive uppercase headline (2 lines). Subline below. Two CTAs: primary black pill "Apply Now", secondary ghost outline "See Packages". Horizontal marquee strip at the bottom reading "MERCH FOR CREATORS · INDIA". Mobile: stack everything center-aligned, smaller type.

---

### Section 2 — Problem

**Purpose:** Make the visitor *feel* the pain so the solution lands harder.

**Structure:**
- Black background, off-white/yellow text.
- One giant sentence revealed word-by-word as the user scrolls (this is the "premium" scroll moment).
- Below it, four pain points in a tight horizontal row (desktop) or stacked (mobile), each a small tag-like card.

**Copy:**

Big sentence (word-reveal):
> **MERCH IS A MESS — SUPPLIERS, DESIGNS, A STORE, RETURNS, CUSTOMER CARE. BY THE TIME YOU FIGURE IT OUT, THE MOMENT'S GONE.**

Four pain tags (small text, monospace, with a `—` prefix):
- `— Suppliers ghost you`
- `— Designers cost a fortune`
- `— Shopify is a full-time job`
- `— Customer DMs never stop`

**Components:**
- Magic UI **TextReveal** — built for exactly this scroll-driven word reveal.
- Each pain tag: simple bordered pill, 1px gray-line border, monospace text.

**Animation (GSAP):**
- ScrollTrigger pin: as user scrolls through this section, words light up from gray-30 opacity to full yellow/white one at a time.
- Once the sentence is fully revealed, the pain tags fade-up in sequence (0.1s stagger).

**Relume brief:**
> Black background section. One huge sentence centered (revealed word-by-word on scroll). Four small monospace pain-point tags in a row below. Generous vertical padding.

---

### Section 3 — What We Handle (6 pillars)

**Purpose:** Concretely show the scope of what we do — so the price feels justified.

**Structure:**
- Off-white background.
- Eyebrow label: `WHAT WE HANDLE` (small uppercase mono, yellow).
- H2: `Everything between the idea and the sale.`
- 3×2 grid of pillar cards (mobile: 1 column, 2×3 on tablet).
- Each card: small icon top-left, bold uppercase title, 1-line description, monospace number tag in the corner (01 — 06).

**Pillars (in this order):**

1. **Custom Design** — Moodboards, full design rounds, three free revisions on every package.
2. **Store Build** — Shopify setup or custom-built storefront. Mobile-first. Built to convert.
3. **Production & Manufacturers** — Vetted producer network. Hoodies, tees, mugs. Open to anything else.
4. **Launch & Drop Strategy** — Scarcity drops, countdown launches, audience-mapped releases.
5. **Marketing Support** — Ongoing content prompts and launch coordination through your own channels.
6. **Customer Care** — DMs, refunds, shipping queries — handled on your behalf.

**Components:**
- Magic UI **BentoGrid** or a custom CSS grid.
- ReactBits **TiltedCard** lightly applied (subtle, max ~3° tilt on hover) — only if it doesn't conflict with text legibility. Test before committing.
- Magic UI **BorderBeam** on hover to give each card a "scanning" yellow border effect — *use sparingly, only on hover*.
- Icons: Lucide React (minimal, consistent line style).

**Animation (GSAP):**
- ScrollTrigger stagger: cards fade-up with 0.06s stagger as the grid enters viewport.
- On card hover: title color shifts to yellow, BorderBeam activates, mono number tag scales slightly.

**Relume brief:**
> Light-background section. Small eyebrow label. Bold H2. 3×2 grid of feature cards. Each card has an icon, a numbered tag (01–06), a bold title, and a one-line description. Cards have thin gray borders. Mobile: single column stack.

---

### Section 4 — How It Works (4 steps)

**Purpose:** Show the process is simple. Remove the "I don't know what happens after I pay" anxiety.

**Structure:**
- **This is the one pinned section.** Background switches to black.
- Left side (sticky): big step indicator — "01 / 04" with current step title.
- Right side: scrolls through four step panels.
- Vertical yellow progress line down the left edge tracking scroll progress.

**The 4 steps:**

**01 — Reach out**
> Send us your handle, your audience size, and the vibe you want. WhatsApp, Instagram, email — whatever works.

**02 — We design**
> Moodboards, fabric direction, and design rounds. Three free revisions. Designs land in your inbox within the first two weeks.

**03 — Store goes live**
> We build the storefront, plug in print-on-demand, and connect manufacturers. Ready in 28 days from kickoff.

**04 — Launch**
> Drop strategy, fan announcements, fulfillment running in the background. Your only job: post the launch.

**Components:**
- shadcn primitives + custom layout.
- ReactBits **ScrollReveal** for each step panel.
- Magic UI **NumberTicker** for the big step indicator on the left (animates 01 → 02 → 03 → 04 as user scrolls).

**Animation (GSAP):**
- ScrollTrigger pinning on this section for ~400vh of scroll distance.
- The right column scrolls normally; the left column stays pinned.
- As each step enters viewport, the progress line fills, the step number on the left ticks up, and the step content fades in with a blur-up.
- Mobile: drop the pinning entirely — just a vertical stack of step cards with a small progress bar at the top of each one.

**Relume brief:**
> Black-background section. Two-column layout (desktop). Left column: large step number "01/04" with current step title — stays sticky as you scroll. Right column: four step panels stacked, each with a number, a bold title, and a 1-2 line description. Vertical yellow progress line on the left edge. Mobile: single-column stack.

---

### Section 5 — Packages

**Purpose:** This is the conversion section. Show the three real packages with enough detail to qualify the lead — not so much it overwhelms.

**Structure:**
- Off-white background.
- Eyebrow: `PACKAGES`.
- H2: `Three ways to start.`
- Subline: `Pick the entry point that fits your scale. Upgrade later — we'll knock 10% off.`
- Three pricing cards side by side (mobile: stack, swipeable horizontal scroll on tablet).
- Reference: the 21st.dev pricing-base component you linked is exactly the right minimal style. Adapt colors and content from it.

**Card 1 — Exclusive Drop**
- Tag: `LOW-COMMITMENT START`
- Price: `₹5,000 – ₹8,000`
- Sub-price line: `one-time fee · production billed separately`
- Description: `A 50-piece limited drop with 3–4 custom designs. Sell out fast, prove the demand.`
- Bullet list:
  - 3–4 custom designs
  - 50-piece exclusive run
  - Store setup for the drop
  - Drop & scarcity strategy
- CTA: `Start with a drop` → links to `/apply?package=exclusive-drop`

**Card 2 — Standard** *(badge: most flexible)*
- Tag: `FULL HANDOVER`
- Price: `₹25,000`
- Sub-price line: `one-time fee · run it yourself after launch`
- Description: `Full custom designs, full store, full POD integration. We hand you the keys.`
- Bullet list:
  - Full custom design system
  - Shopify or custom store
  - Print-on-demand integration
  - Manufacturer connects
  - 28-day delivery, then yours
- CTA: `Get Standard` → links to `/apply?package=standard`

**Card 3 — Full Service** *(badge: MOST POPULAR — highlight in yellow border)*
- Tag: `WE RUN IT ALL`
- Price: `₹30,000 + 20% profit`
- Sub-price line: `one-time fee · 20% of profit, monthly, for 12 months`
- Description: `Everything in Standard, plus we run customer care, marketing, and ops for a year.`
- Bullet list:
  - Everything in Standard
  - Customer care, fully handled
  - Ongoing marketing support
  - Active for 12 months
  - Renew or take it in-house after Year 1
- CTA: `Get Full Service` → links to `/apply?package=full-service`

**Components:**
- Base structure: model after the 21st.dev pricing-base component you linked.
- Magic UI **ShineBorder** *only* on the Full Service "Most Popular" card — slow, subtle yellow shine sweeping the border.
- Magic UI **NumberTicker** on prices when card enters viewport.
- shadcn `Card`, `Badge`.

**Animation (GSAP):**
- Cards fade-up with 0.12s stagger as section enters.
- Slight scale-on-hover (1.0 → 1.02) with shadow appearance.
- Price NumberTicker counts up from 0 to final value when card enters viewport (one-time).

**Relume brief:**
> Light-background pricing section. Three cards side-by-side, equal width. Center card highlighted as "Most Popular" with a yellow border. Each card has: small uppercase tag at top, big price, sub-price line, short description, bullet list, primary CTA button at bottom. Minimal, lots of whitespace, sharp corners. Mobile: stack vertically.

---

### Section 6 — Profit Calculator

**Purpose:** Make the 20% profit-share feel tangible and *small*, not scary. The number that's hidden in the price card becomes a number the visitor controls.

**Structure:**
- Black background.
- Eyebrow: `WHAT YOU KEEP`.
- H2: `Run the numbers on Full Service.`
- Two-column desktop layout: left = controls, right = output.
- Mobile: stack — controls on top, output below.

**Left column — controls:**
- Slider 1: `Items sold per month` — range 10 to 500, default 50, step 10.
- Slider 2: `Sale price per item (₹)` — range 400 to 1500, default 800, step 50.
- Editable input: `Production cost per item (₹)` — default 300.
- Each control has a current-value label in monospace, big yellow number.

**Right column — live output:**
- Big number: `Your monthly profit` → live calculation.
- Smaller below: `WeDrip's share (20%)` → live calculation.
- Below that: `Annual profit (your share)` → live calculation.
- Below that, a single line in mono: `Year 1 total — your keep: ₹X · ours: ₹Y`.

Calculation:
```
profit_per_item = sale_price - production_cost
total_monthly_profit = items_sold * profit_per_item
your_share = total_monthly_profit * 0.8
our_share = total_monthly_profit * 0.2
annual_your = your_share * 12
annual_ours = our_share * 12
```

**Components:**
- shadcn `Slider` and `Input` primitives.
- Magic UI **NumberTicker** on every output number — smooth interpolation as sliders move.
- Custom styling to make the slider track black with a yellow fill.

**Animation:**
- No GSAP needed here — Magic UI's NumberTicker handles the live interpolation.
- Section itself fades up on scroll-into-view.

**Relume brief:**
> Black-background interactive section. Two-column layout (desktop): left = two sliders + one number input, each with a yellow current-value display. Right = four output numbers, the biggest being "Your monthly profit". All numbers live-update as sliders move. Mobile: stack with controls on top.

**Build note:** Keep this in a try/catch + Suspense boundary. If for any reason the calculator errors at build time, swap it for a static comparison block (no interactivity, hardcoded example: "Sell 50 hoodies/month at ₹800 → you keep ₹20,000 · we take ₹5,000"). Do not let this section break the build.

---

### Section 7 — Fine Print Strip

**Purpose:** Build trust by being upfront about policies. Pre-empts the questions a serious lead would ask before applying.

**Structure:**
- Off-white background.
- Compact — one row, four items horizontally (desktop), 2×2 grid on tablet, stacked on mobile.
- No headline above. Just the strip itself, with a thin black line above and below.
- Each item: small icon, bold title, one-line detail.

**The 4 items:**
1. **3 free revisions** — Every package. No surprise charges.
2. **28 days, kickoff to live** — Minimum delivery timeline across all packages.
3. **10% off when you upgrade** — Start with Exclusive Drop, move up later, save 10%.
4. **GST on your customers, not on you** — Our fees are GST-exempt to you. GST applies only to your end customers' merch purchases.

**Components:**
- Plain Tailwind grid.
- Magic UI **BlurFade** for the entrance animation.
- Lucide icons.

**Animation (GSAP):**
- Each item blur-fades up with 0.08s stagger as strip enters viewport.

**Relume brief:**
> Light-background horizontal strip. Thin black divider lines above and below. Four items in a row (desktop), each with a small icon, bold title, and one-line description. Compact vertical padding.

---

### Section 8 — Style Direction (6 mockups marquee)

**Purpose:** Show visual range without overpromising. Frame these honestly as creative direction, not finished client work.

**Structure:**
- Off-white background.
- Eyebrow: `STYLE DIRECTION`.
- H2: `This is the kind of work we make.`
- Sub: `Yours will be yours alone — these are concepts to show our range.`
- Horizontal infinite marquee of 6 mockup images, auto-scrolling left.
- Hover anywhere on the marquee → pauses.
- Hover individual image → subtle scale (1.0 → 1.05) + slight tilt.

**Image plan:**
- 6 images, ~400×500px each (portrait-ish), consistent aspect ratio.
- Each in a square-ish frame with a thin black border, 1px gray-line.
- Below each image, in mono: `CONCEPT — HOODIE` / `CONCEPT — MUG` etc.

**Components:**
- Magic UI **Marquee** (has built-in hover-pause).
- ReactBits **TiltedCard** *optionally* on each image — but only if it doesn't fight with the marquee scroll. Test.

**Animation:**
- Marquee runs continuously at slow speed (~40s per loop).
- On hover: pause marquee, individual image scales up slightly.

**Relume brief:**
> Light-background section. Small eyebrow + H2 + subline. Below: horizontal marquee row of 6 portrait product mockup images, auto-scrolling. Each image has a thin border and a small monospace caption below it. Mobile: marquee continues to work, smaller image sizes.

---

### Section 9 — FAQ

**Purpose:** Knock down remaining objections. The questions left after Packages + Fine Print + Calculator.

**Structure:**
- Off-white background.
- Eyebrow: `FAQ`.
- H2: `What you're probably wondering.`
- Single-column accordion, max-width ~720px, centered.
- Each question: bold, uppercase, with a small `+` indicator that rotates to `×` when open.

**The 7 questions:**

1. **How long until my merch is live?**
> 28 days from kickoff — design, store build, and production setup all included. We move faster when content is approved quickly.

2. **Do I need to hold inventory?**
> Standard and Full Service use print-on-demand — zero inventory, zero risk. Exclusive Drop is a 50-piece run, so yes, you'll hold those 50 pieces (which sell out fast by design).

3. **What if my merch doesn't sell?**
> On Standard and Full Service, you have no inventory cost — no sales just means no revenue, no loss. On Exclusive Drop, the 50-piece run is designed to be small and scarcity-driven, exactly so this risk stays low.

4. **I have zero design experience. Can I still get custom merch?**
> That's the whole point of the agency. You share your vibe and we handle moodboards, designs, and rounds. Three free revisions on every package.

5. **Who handles customer support and shipping issues?**
> Full Service: we do, end-to-end. Standard: you do — we hand over the tools and walk you through it. Exclusive Drop: customer care isn't included; it's a single drop, fulfillment is one batch.

6. **Can I upgrade later?**
> Yes. Start with Exclusive Drop, move to Standard or Full Service when you're ready — and we'll knock 10% off the new package.

7. **What about GST?**
> Our agency fees to you are GST-exempt. GST applies to your end customers when they buy the merch — that's handled inside the store setup.

**Components:**
- shadcn `Accordion`.
- Magic UI **BlurFade** for entrance.

**Animation (GSAP):**
- FAQ items fade-up with stagger on scroll-in.
- Accordion expand/collapse uses Radix's built-in animation, no GSAP needed.

**Relume brief:**
> Light-background section, narrow column centered. Eyebrow + H2. Below: 7-item accordion. Each row has a bold uppercase question on the left, a small "+/×" indicator on the right. Click to expand. Generous vertical spacing between items.

---

### Section 10 — Final CTA + Footer

**Purpose:** One last push to apply, with all contact channels visible as fallback.

**Structure:**
- Black background.
- Top half: massive CTA block.
  - H2: `Ready to drip?` (or `Let's build it.` if "drip" gets old)
  - Sub: `Apply now or message us directly. We reply within 24 hours.`
  - Big white "Apply Now" button.
- Bottom half: footer.
  - Left: WeDrip wordmark + tagline (`India's merch agency for creators.`)
  - Middle: three contact methods, each a row with icon + label:
    - WhatsApp → `+91 75500 22162` (click → opens `wa.me/917550022162?text=Hi%20WeDrip,%20I'm%20interested.`)
    - Instagram → `@wedrip.merch` (click → opens IG profile)
    - Email → `we.drip.cma@gmail.com` (click → mailto)
  - Right: small sitemap (Home, How it works, Packages, Apply).
- Bottom strip: `© 2026 WeDrip · India's merch agency for creators.`

**Components:**
- Magic UI **ShinyText** or **AnimatedGradientText** on the "Ready to drip?" headline — yellow gradient that subtly shifts.
- ReactBits **Magnet** wrap on the contact rows so they pull toward the cursor slightly on hover.
- Lucide icons for the contact channels.

**Animation (GSAP):**
- Headline shimmer/gradient runs on a slow loop.
- Footer rows fade-up sequentially when section enters viewport.

**Relume brief:**
> Black-background section split into two stacked halves. Top: massive centered CTA — "Ready to drip?" headline, one-line sub, big white "Apply Now" button. Bottom: footer with three columns — brand + tagline (left), three contact rows with icons (middle), small sitemap (right). Bottom strip with copyright line.

---

## 3. `/apply` Page

### Purpose
Capture serious leads with enough info to qualify them and start a real conversation.

### Layout
- Off-white background, narrow centered column (max-width ~640px).
- Top: small back-arrow link to "← Home".
- H1: `Tell us about you.`
- Sub: `We read every submission. Expect a reply within 24 hours.`
- Form below.
- Bottom: small reassurance line — `Prefer to chat? WhatsApp · Instagram · Email` (with the three contact links inline).

### Form Fields (in this order)

| Field | Type | Required | Notes |
|---|---|---|---|
| Name | text | ✓ | Single field, full name |
| Email | email | ✓ | Validated |
| WhatsApp number | tel | ✓ | Include country-code prefix dropdown defaulting to +91 |
| Instagram or YouTube handle | text | ✓ | Single text field, label says "(any one)" |
| Follower count | select | ✓ | Options: `Under 50K · 50K–100K · 100K–500K · 500K+` |
| Niche | text | ✓ | Short, e.g. "Fitness", "Tamil comedy" |
| Package interest | select | ✓ | Options: `Exclusive Drop · Standard · Full Service · Not sure yet`. Pre-fill from `?package=` URL param if present. |
| Anything else | textarea | optional | 3-line height |
| Link to your content | url | optional | YouTube/Insta/website link |
| Policy acknowledgment | checkbox | ✓ | Label: `I've read the timeline (28 days), revision policy (3 free rounds), and Full Service profit-share terms (20%).` |

### Submit Behavior
- Disable button on submit, show loading spinner.
- POST to `/api/apply` with all field values.
- On success: replace form with a success state:
  > **Got it.**
  > We'll be in touch on WhatsApp within 24 hours. Meanwhile, follow us [@wedrip.merch](https://www.instagram.com/wedrip.merch/).
- On error: inline red banner above the submit button — `Something went wrong. Try again, or message us directly on WhatsApp.`

### Components
- shadcn `Form` (react-hook-form + zod validation), `Input`, `Textarea`, `Select`, `Checkbox`, `Button`.
- Phone input: either a country-code-aware library like `react-phone-number-input`, or a simple dropdown + text input pair to start.

### Animation
- Each field blur-fades in with 0.04s stagger on page load.
- Submit button has a subtle yellow glow on hover (Magic UI BorderBeam or just CSS).

---

## 4. Backend — Custom Form

### Supabase Schema

```sql
create table public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  whatsapp text not null,
  social_handle text not null,
  follower_range text not null,
  niche text not null,
  package_interest text not null,
  message text,
  content_link text,
  policy_ack boolean not null default false,
  ip_address text,
  user_agent text
);

-- Row-level security: allow inserts from anon role, restrict reads to service role only.
alter table public.applications enable row level security;

create policy "anyone can insert applications"
on public.applications for insert
to anon
with check (true);

-- No select policy for anon — only service role can read.
```

### Next.js API Route — `/app/api/apply/route.ts`

Skeleton:
```ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!  // service role, server-only
);

const ApplicationSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  whatsapp: z.string().min(8).max(20),
  social_handle: z.string().min(1).max(100),
  follower_range: z.enum(['under_50k', '50k_100k', '100k_500k', '500k_plus']),
  niche: z.string().min(1).max(100),
  package_interest: z.enum(['exclusive_drop', 'standard', 'full_service', 'not_sure']),
  message: z.string().max(2000).optional(),
  content_link: z.string().url().max(500).optional().or(z.literal('')),
  policy_ack: z.literal(true),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = ApplicationSchema.parse(body);

    const { error } = await supabase.from('applications').insert({
      ...parsed,
      ip_address: req.headers.get('x-forwarded-for') ?? null,
      user_agent: req.headers.get('user-agent') ?? null,
    });

    if (error) throw error;

    // TODO: trigger email/WhatsApp notification via Resend later

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'submission_failed' }, { status: 400 });
  }
}
```

### Environment Variables (Vercel)
```
NEXT_PUBLIC_SUPABASE_URL=<from supabase project settings>
SUPABASE_SERVICE_ROLE_KEY=<server-only, never exposed to client>
```

### Future enhancement (post-launch)
- Add Resend integration to send yourself an email notification on each new application.
- Add a Supabase Edge Function to forward each new submission to your WhatsApp via Twilio or WhatsApp Cloud API.
- Build a tiny `/admin` page (gated by a passcode in env) to view incoming applications.

---

## 5. Component Pull List — Cheatsheet

Here's what to grab from where, before you start building:

### From Magic UI (`magicui.design`)
- **Marquee** — hero strip + style direction gallery
- **TextReveal** — problem section word-by-word scroll reveal
- **NumberTicker** — package prices + calculator outputs
- **BlurFade** — fine print strip + FAQ entries
- **DotPattern** — hero background texture
- **BorderBeam** — "What we handle" card hover
- **ShineBorder** — "Most Popular" package card
- **ShinyText** or **AnimatedGradientText** — final CTA headline
- **BentoGrid** (optional) — "What we handle" layout base

### From ReactBits (`reactbits.dev`)
- **SplitText** or **BlurText** — hero headline reveal
- **ScrollReveal** — "How it works" step panels
- **Magnet** — Apply Now nav button + footer contact links
- **TiltedCard** — optional on "What we handle" cards and style direction mockups (test first)

### From shadcn/ui
- `Button`, `Card`, `Badge`, `Accordion`, `NavigationMenu`, `Slider`, `Input`, `Textarea`, `Select`, `Checkbox`, `Form` (react-hook-form + zod)

### From 21st.dev (community — search and pick)
- Pricing card layout — adapt the one you linked (larsen66/pricing-base)
- Hero variants — browse "hero minimal" if you want alternates
- FAQ accordion variants

### From Stitch (AI-generate)
- Use Stitch to generate the overall layout shells when 21st.dev / Magic UI don't have what you need.
- Especially useful for the Problem section, Fine Print Strip, Footer.

### GSAP plugins
- `gsap` core
- `@gsap/react` (for `useGSAP` hook in React 18+)
- `gsap/ScrollTrigger`
- `gsap/SplitText` (paid — but ReactBits SplitText covers most needs)

---

## 6. Build Order Checklist (for Claude Code)

When you start building, work in this order — earlier stages stabilize the foundation for later ones:

1. **Project setup**
   - Init Next.js + TypeScript + Tailwind
   - Add shadcn, configure brand tokens in `tailwind.config.ts`
   - Configure fonts (display + body + mono)
   - Add GSAP + `@gsap/react`
   - Add Supabase client, env vars

2. **Global pieces**
   - Sticky nav (with scroll-based bg transition)
   - Page layout shell (`/app/layout.tsx`)
   - Brand token CSS variables, global resets

3. **Static sections in order**
   - Hero (no animation yet, just layout + copy)
   - Problem
   - What we handle
   - How it works (static stack first, pin later)
   - Packages
   - Profit calculator (functional, no animation)
   - Fine print
   - Style direction
   - FAQ
   - Final CTA + footer

4. **Add animations** (only after all sections render correctly statically)
   - Hero load animation
   - Problem TextReveal
   - What we handle stagger
   - How it works pinning (this is the riskiest — leave for last)
   - Marquee
   - All BlurFades, NumberTickers

5. **`/apply` page + backend**
   - Build form UI
   - Create Supabase table
   - Build API route + zod validation
   - Wire form submit
   - Test end-to-end

6. **Polish**
   - Mobile review on real device
   - Lighthouse audit
   - Check all links (WhatsApp, Insta, Email open correctly)
   - Add OG image + meta tags
   - Deploy to Vercel

---

## 7. Open Items to Lock Before Building

- [ ] Pick one hero headline option (A / B / C)
- [ ] Confirm display font choice (Anton vs Druk vs Geist-bold-uppercase)
- [ ] Provide 6 mockup images for Style Direction section (or confirm you'll generate them)
- [ ] Decide if "Ready to drip?" or "Let's build it." for final CTA
- [ ] Create Supabase project and grab URL + service role key
- [ ] Confirm Apply Now button hover behavior (yellow bg / black text — already specified)

---

*End of spec.*
