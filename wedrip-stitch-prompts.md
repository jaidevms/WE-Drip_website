# WeDrip — Stitch Prompt Set

**How to use this file:**

1. **Always paste the "Design System Header" first**, then the section prompt below it, as one combined message to Stitch. This keeps the visual language consistent across all generations.
2. Generate sections **one at a time**. Don't batch.
3. After each generation, scroll the notes below the prompt — they flag what's likely to need tweaking.
4. Brand name in copy stays **WeDrip** throughout (logo is temporary, ignore it for now).

---

## 🎨 Design System Header — Paste at the start of EVERY Stitch prompt

```
DESIGN SYSTEM:

Brand: WeDrip — India's merch agency for creators.

Visual style: Bold, minimal, streetwear-meets-startup. Generous whitespace. Type does the heavy lifting. No drop shadows — use borders and contrast. Sharp 90° corners on surfaces, subtle 4px rounding only on buttons and inputs.

Colors:
- Yellow #fed400 (primary accent — used sparingly, never as flood color)
- Black #0a0a0a (primary dark surface)
- Off-white #f8f6f0 (primary light surface)
- White #ffffff (Apply Now button, contrast)
- Gray text #4a4a4a (body on light backgrounds)
- Gray line #e5e3dc (dividers, card borders)

Typography:
- Display headlines: Geist Bold, UPPERCASE, tight letter-spacing (-0.02em)
- Body: Geist Regular or Medium
- Numbers, prices, tags, technical labels: Geist Mono

Components allowed: shadcn/ui primitives only. No custom shadows, no gradients except where explicitly noted.

Mobile-first responsive. All sections must work on a 380px wide viewport.
```

---

## 🧭 Section 0 — Sticky Nav

```
Design a sticky navigation bar for the WeDrip landing page.

LAYOUT:
- Full-width horizontal bar, 72px tall on desktop, 64px on mobile.
- Three zones: left (logo), center (anchor links, desktop only), right (CTA button).

LEFT (logo zone):
- Text wordmark "WeDrip" in Geist Bold, uppercase, 20px, tight letter-spacing.
- Color: black on default state.
- Small yellow dot character "•" after the word, in the brand yellow #fed400, slightly bigger than the text.

CENTER (anchor links, desktop only — hidden on mobile):
- Three links: "Home" · "How it works" · "Packages"
- Geist Medium, 14px, uppercase, letter-spacing 0.05em.
- Color: black #0a0a0a, opacity 70%.
- On hover: opacity 100%, with a tiny yellow underline drawing in from left to right (4px tall, 16px wide).
- Spacing: 40px between links.

RIGHT (CTA):
- "Apply Now" button.
- Default state: WHITE background, BLACK text, 1px black border, 4px corner radius, 14px Geist Bold uppercase, padding 12px 24px.
- Hover state: YELLOW #fed400 background, black text, no border change.
- Small black arrow "→" after the text.

NAV BACKGROUND BEHAVIOR:
- On hero (top of page): transparent background, no border.
- After scrolling 80px: off-white #f8f6f0 background with a 1px gray-line #e5e3dc bottom border. Add a subtle backdrop-blur.

MOBILE:
- Logo on left, hamburger icon on right (3 horizontal black lines).
- When hamburger is tapped: full-screen black overlay slides in from the right, containing the three anchor links in massive Geist Bold uppercase (32px) stacked vertically, and a giant yellow "Apply Now" button at the bottom.

Show me both the scrolled and unscrolled states, and the mobile menu open state.
```

**Notes for after Stitch generates:**
- Likely to add too much padding — pull back if it looks bloated.
- Apply Now button may render with gradient or shadow — strip those if so.
- Mobile menu often gets over-designed; keep it brutally simple.

---

## ① Section 1 — Hero

```
Design the hero section for the WeDrip landing page.

LAYOUT:
- Full viewport height (100vh).
- Off-white #f8f6f0 background.
- Subtle yellow dot pattern texture across the entire background, opacity 0.04 (barely visible — just adds depth, doesn't compete).
- Content centered horizontally, vertically positioned at about 45% from top.

HEADLINE (the biggest element on screen):
> YOU BUILT THE AUDIENCE.
> WE'LL BUILD THE BRAND.

- Two lines, line-break exactly as shown.
- Geist Bold, UPPERCASE, tight letter-spacing (-0.02em).
- Color: black #0a0a0a.
- Desktop size: 96px. Tablet: 64px. Mobile: 44px.
- Line height: 0.95 (very tight).
- Small yellow horizontal bar element (4px tall, 80px wide) sitting 24px above the headline as an accent.

SUBLINE (directly below headline, 32px gap):
> India's merch agency for creators. We design it, build the store, handle production. You just show up.

- Geist Regular, 18px on desktop, 16px on mobile.
- Color: gray-text #4a4a4a.
- Max-width: 560px, centered.
- Line height: 1.5.

CTAs (40px below subline, horizontally inline, 16px gap between them):
- Primary: "Apply Now" — black #0a0a0a background, white text, sharp 4px corners, 16px Geist Bold uppercase, padding 16px 32px. Small white arrow "→" after the text. Hover: yellow #fed400 background, black text.
- Secondary: "See Packages" — transparent background, 1px black border, black text. Same dimensions. Hover: black background, white text.

BOTTOM MARQUEE STRIP (anchored to bottom of viewport):
- Horizontal strip, 48px tall.
- Black #0a0a0a background.
- Yellow #fed400 text: "MERCH FOR CREATORS · INDIA · MERCH FOR CREATORS · INDIA · MERCH FOR CREATORS · INDIA"
- Geist Mono, 14px, uppercase.
- Continuously scrolling left at slow speed.

MOBILE:
- Headline center-aligned, smaller (44px).
- CTAs stack vertically with full width.
- Marquee strip stays at bottom.

Show desktop and mobile versions.
```

**Notes for after Stitch generates:**
- Stitch loves adding hero images/illustrations. If it does, remove them — this hero is type-driven only.
- Dot pattern intensity will probably come out too strong; reduce opacity further if so.
- Headline size matters — if it doesn't feel huge on desktop, push it bigger.

---

## ② Section 2 — Problem

```
Design the "Problem" section for the WeDrip landing page.

LAYOUT:
- Full-width section, minimum 80vh tall, generous vertical padding (160px top and bottom on desktop, 80px on mobile).
- Black #0a0a0a background.

MAIN CONTENT (centered):

ONE GIANT SENTENCE — this is the only headline, no eyebrow above it:
> MERCH IS A MESS — SUPPLIERS, DESIGNS, A STORE, RETURNS, CUSTOMER CARE. BY THE TIME YOU FIGURE IT OUT, THE MOMENT'S GONE.

- Geist Bold, UPPERCASE.
- Desktop: 64px. Tablet: 44px. Mobile: 32px.
- Line height: 1.1.
- Color treatment: the words alternate between full white and dimmed gray (opacity 30%) to suggest a scroll-driven reveal in motion. Show roughly the first half of the words in full white, the second half in gray-30. The word "MESS" should be highlighted in yellow #fed400.
- Max-width: 1100px, centered.
- Text alignment: centered.

PAIN TAGS ROW (below the sentence, 80px gap):
- 4 small pill-shaped tags in a horizontal row, centered, 12px gap between them.
- Each tag: 1px gray border (gray-line #e5e3dc with 30% opacity), transparent background, 4px corner radius, padding 8px 16px.
- Geist Mono, 13px, uppercase, color: gray (opacity 60%).
- The four tags read:
  - "— SUPPLIERS GHOST YOU"
  - "— DESIGNERS COST A FORTUNE"
  - "— SHOPIFY IS A FULL-TIME JOB"
  - "— CUSTOMER DMs NEVER STOP"

MOBILE:
- Sentence font size drops to 32px.
- Pain tags wrap to a 2x2 grid instead of a single row.

Show desktop and mobile.
```

**Notes for after Stitch generates:**
- May add unnecessary illustrations or icons in the background — remove them.
- The word-by-word color treatment is the *static* representation of a scroll-driven animation we'll build in code later. Stitch just needs to show the rest state.

---

## ③ Section 3 — What We Handle (6 pillars)

```
Design the "What We Handle" section for the WeDrip landing page.

LAYOUT:
- Off-white #f8f6f0 background.
- Vertical padding 120px top and bottom (desktop).
- Max-width 1200px content area, centered with 24px horizontal padding.

HEADER (left-aligned):
- Eyebrow label: "WHAT WE HANDLE" — Geist Mono, 13px, uppercase, color yellow #fed400, with a small yellow square "■" before it.
- H2 below (8px gap): "Everything between the idea and the sale." — Geist Bold, UPPERCASE, 52px on desktop, 32px on mobile, color black, line-height 1.05, max-width 720px.

PILLAR GRID (60px gap below H2):
- 3 columns by 2 rows grid on desktop.
- 2 columns by 3 rows on tablet.
- 1 column stack on mobile.
- 24px gap between cards.

EACH PILLAR CARD:
- Off-white background.
- 1px gray-line #e5e3dc border, 4px corner radius.
- Padding: 32px.
- Minimum height 240px.

Card internal layout:
- Top row: small Lucide-style icon (24px, black stroke, 1.5px stroke width) on the LEFT, monospace number tag on the RIGHT in format "01" / "02" etc. (Geist Mono 13px, gray, with a slash before it like "/01").
- 40px vertical gap.
- Title: Geist Bold, UPPERCASE, 22px, black.
- 12px gap.
- Description: Geist Regular, 15px, line-height 1.5, color gray-text #4a4a4a.

Hover state for each card: title color shifts to yellow #fed400, border color shifts to black.

THE 6 PILLARS (in this order, with these icons):
1. /01 — Icon: paintbrush — "CUSTOM DESIGN" — Moodboards, full design rounds, three free revisions on every package.
2. /02 — Icon: shopping bag — "STORE BUILD" — Shopify setup or custom-built storefront. Mobile-first. Built to convert.
3. /03 — Icon: factory or box — "PRODUCTION & MANUFACTURERS" — Vetted producer network. Hoodies, tees, mugs. Open to anything else.
4. /04 — Icon: rocket — "LAUNCH & DROP STRATEGY" — Scarcity drops, countdown launches, audience-mapped releases.
5. /05 — Icon: megaphone — "MARKETING SUPPORT" — Ongoing content prompts and launch coordination through your own channels.
6. /06 — Icon: headphones or chat bubble — "CUSTOMER CARE" — DMs, refunds, shipping queries — handled on your behalf.

Show desktop and mobile.
```

**Notes for after Stitch generates:**
- Icons may come out colored or overly stylized — they should be plain black line icons.
- Borders may render too soft or shadowy — make sure they're crisp 1px solid lines.

---

## ④ Section 4 — How It Works (4 steps)

```
Design the "How It Works" section for the WeDrip landing page.

LAYOUT:
- Black #0a0a0a background.
- Vertical padding 160px top and bottom (desktop).
- Two-column layout on desktop: left column 35% width (sticky), right column 65% width (scrolling content).
- Mobile: single column, no sticky behavior.

LEFT COLUMN (sticky, centered vertically):
- Small eyebrow at the top: "HOW IT WORKS" — Geist Mono, 13px, uppercase, yellow #fed400.
- 24px gap.
- HUGE step indicator: "01/04" — Geist Bold, 120px desktop, color: "01" in yellow #fed400, "/04" in white opacity 30%.
- 24px gap.
- Step title: "REACH OUT" — Geist Bold, UPPERCASE, 32px, white.

(For this static design, show step 1 active. In motion, this whole left column updates as user scrolls through steps.)

LEFT EDGE PROGRESS LINE:
- A thin 2px vertical line on the very left edge of the right column.
- Background of line: white opacity 10%.
- Fill of line: yellow #fed400 — show the fill at 25% (representing being on step 1 of 4).

RIGHT COLUMN (the four step panels, stacked vertically with 200px gap between them):

Each step panel:
- Maximum width 540px.
- Internal structure: small step label at top, then title, then description.

STEP 1 PANEL (currently active, full opacity):
- Small label: "01 — REACH OUT" — Geist Mono, 13px, uppercase, yellow.
- 24px gap.
- Title: "TELL US ABOUT YOUR AUDIENCE." — Geist Bold, UPPERCASE, 36px, white, line-height 1.1.
- 16px gap.
- Description: "Send us your handle, your audience size, and the vibe you want. WhatsApp, Instagram, email — whatever works." — Geist Regular, 17px, line-height 1.55, color white opacity 70%.

STEP 2 PANEL (dimmed, opacity 30%):
- "02 — WE DESIGN" / "MOODBOARDS, DESIGNS, ROUNDS." / "Three free revisions. Designs land in your inbox within the first two weeks."

STEP 3 PANEL (dimmed, opacity 30%):
- "03 — STORE GOES LIVE" / "WE BUILD AND CONNECT EVERYTHING." / "Storefront, print-on-demand, manufacturers — all set up and live in 28 days from kickoff."

STEP 4 PANEL (dimmed, opacity 30%):
- "04 — LAUNCH" / "DROP STRATEGY EXECUTED." / "Fan announcements, fulfillment running in the background. Your only job: post the launch."

MOBILE:
- No two-column layout. All steps stacked vertically.
- Each step has its own small "01/04" indicator above the title.
- No sticky column, no progress line on the side.
- Each step gets a thin yellow horizontal bar above it to mark separation.

Show desktop and mobile.
```

**Notes for after Stitch generates:**
- Stitch may try to add icons or images to each step — keep it type-only.
- Mobile version often gets compressed; make sure each step has breathing room.

---

## ⑤ Section 5 — Packages

```
Design the "Packages" pricing section for the WeDrip landing page.

REFERENCE: Use a minimal pricing layout similar to the larsen66/pricing-base component on 21st.dev — clean cards, generous whitespace, one bold accent color, sharp corners.

LAYOUT:
- Off-white #f8f6f0 background.
- Vertical padding 120px top and bottom.
- Centered content, max-width 1200px.

HEADER (centered):
- Eyebrow: "PACKAGES" — Geist Mono, 13px, uppercase, yellow.
- H2: "Three ways to start." — Geist Bold, UPPERCASE, 52px desktop / 32px mobile, black.
- Subline: "Pick the entry point that fits your scale. Upgrade later — we'll knock 10% off." — Geist Regular, 17px, gray-text #4a4a4a, max-width 520px, centered.

PRICING CARDS (80px below header):
- 3 cards in a row on desktop, equal width, 24px gap.
- Cards stack vertically on mobile.

CARD 1 — EXCLUSIVE DROP (left):
- 1px gray-line #e5e3dc border, off-white background, sharp 4px corners, padding 32px.
- Top: small tag "LOW-COMMITMENT START" — Geist Mono, 12px, uppercase, gray.
- 32px gap.
- Price: "₹5,000 – ₹8,000" — Geist Bold, 40px, black.
- Sub-price line: "one-time fee · production billed separately" — Geist Regular, 13px, gray-text, line-height 1.4.
- 24px gap.
- Short description (2 lines): "A 50-piece limited drop with 3–4 custom designs. Sell out fast, prove the demand." — Geist Regular, 15px, line-height 1.5.
- 32px gap, horizontal divider line (1px gray-line, full width).
- 24px gap, bullet list (4 items, no bullet characters, instead small black checkmarks before each, 12px gap between items):
  - 3–4 custom designs
  - 50-piece exclusive run
  - Store setup for the drop
  - Drop & scarcity strategy
- Bottom of card, full-width button: "START WITH A DROP" — black background, white text, 14px Geist Bold uppercase, padding 16px, 4px corners, right-arrow "→" after text.

CARD 2 — STANDARD (middle):
- Same styling as Card 1.
- Tag: "FULL HANDOVER"
- Price: "₹25,000"
- Sub-price: "one-time fee · run it yourself after launch"
- Description: "Full custom designs, full store, full POD integration. We hand you the keys."
- Bullets:
  - Full custom design system
  - Shopify or custom store
  - Print-on-demand integration
  - Manufacturer connects
  - 28-day delivery, then yours
- Button: "GET STANDARD →"

CARD 3 — FULL SERVICE (right) — THIS IS THE HIGHLIGHTED CARD:
- 2px YELLOW #fed400 border (instead of gray).
- A small yellow badge floating above the top of the card, slightly overlapping: "MOST POPULAR" — yellow background, black text, Geist Bold, 11px, uppercase, padding 6px 12px, 4px corners.
- Tag: "WE RUN IT ALL"
- Price: "₹30,000" with a smaller "+ 20% profit" right next to it (smaller Geist Mono, 18px).
- Sub-price: "one-time fee · 20% of profit, monthly, for 12 months"
- Description: "Everything in Standard, plus we run customer care, marketing, and ops for a year."
- Bullets:
  - Everything in Standard
  - Customer care, fully handled
  - Ongoing marketing support
  - Active for 12 months
  - Renew or take it in-house after Year 1
- Button: YELLOW background, black text — "GET FULL SERVICE →"

MOBILE:
- Cards stack vertically.
- Highlighted card stays highlighted but no longer visually elevated above the others.

Show desktop and mobile.
```

**Notes for after Stitch generates:**
- Stitch may try to add price-strikethroughs or "save X%" badges — remove them, we don't have those.
- The "Most Popular" badge may come out as a corner ribbon — should be a floating pill at top center instead.

---

## ⑥ Section 6 — Profit Calculator

```
Design the "Profit Calculator" interactive section for the WeDrip landing page.

LAYOUT:
- Black #0a0a0a background.
- Vertical padding 120px top and bottom.
- Two columns on desktop (50/50), stacked on mobile.
- Max-width 1100px, centered.

HEADER (above the two columns, centered):
- Eyebrow: "WHAT YOU KEEP" — Geist Mono, 13px, uppercase, yellow.
- H2: "Run the numbers on Full Service." — Geist Bold, UPPERCASE, 44px desktop / 28px mobile, white, line-height 1.1.
- Subline: "Drag the sliders. See what you keep." — Geist Regular, 15px, white opacity 60%.

LEFT COLUMN — CONTROLS (60px below header):

Three control groups stacked, 32px gap between them.

CONTROL 1 — Items sold per month:
- Label row: "ITEMS SOLD / MONTH" on left (Geist Mono, 12px, uppercase, white opacity 70%), current value "50" on right (Geist Bold, 24px, yellow).
- Slider: black track with yellow fill, white thumb circle (16px diameter). Range labels under it in mono 11px: "10" left, "500" right.

CONTROL 2 — Sale price per item:
- Label: "SALE PRICE / ITEM" / current value "₹800" in yellow.
- Slider, range labels "₹400" to "₹1,500".

CONTROL 3 — Production cost (editable number input, not slider):
- Label: "PRODUCTION COST / ITEM"
- Below it, a small input field: dark gray #1a1a1a background, 1px white opacity 20% border, yellow text "₹300", Geist Mono 24px, padding 12px, 80px wide.

RIGHT COLUMN — OUTPUTS:

Four output rows stacked.

OUTPUT 1 — biggest, primary number:
- Label: "YOUR MONTHLY PROFIT" — Geist Mono, 12px, uppercase, white opacity 60%.
- 8px gap.
- Number: "₹20,000" — Geist Bold, 64px, white.

OUTPUT 2:
- Label: "WeDRIP'S SHARE (20%)" — same mono label style.
- Number: "₹5,000" — Geist Bold, 36px, yellow.

OUTPUT 3:
- Label: "ANNUAL PROFIT (YOUR SHARE)" — same mono label style.
- Number: "₹2,40,000" — Geist Bold, 36px, white.

OUTPUT 4 — a single horizontal mono line at the bottom:
- "YEAR 1 TOTAL — YOU KEEP ₹2,40,000 · WE TAKE ₹60,000" — Geist Mono, 12px, uppercase, white opacity 50%, with a 1px yellow top border (full width of column).

MOBILE:
- Single column. Controls on top, outputs below.
- Outputs become smaller (primary number 44px instead of 64px).

Show desktop and mobile.
```

**Notes for after Stitch generates:**
- Sliders may render as fancy multi-handle gradient things — they should be flat, single-handle, black/yellow only.
- The big primary number must visually dominate everything else in the right column.

---

## ⑦ Section 7 — Fine Print Strip

```
Design the "Fine Print Strip" section for the WeDrip landing page.

LAYOUT:
- Off-white #f8f6f0 background.
- Compact section, vertical padding only 64px top and bottom (much tighter than other sections).
- A 1px black horizontal divider line directly above this section and another directly below it (full width of viewport).

NO HEADER. The strip itself is the entire content.

FOUR ITEMS in a horizontal row on desktop (equal width, 32px gap), 2x2 grid on tablet, single-column stack on mobile.

EACH ITEM has:
- Small icon on the left (24px, Lucide-style, black stroke 1.5px).
- Content to the right of the icon (16px gap):
  - Title: Geist Bold, UPPERCASE, 14px, black.
  - 4px gap.
  - One-line detail: Geist Regular, 13px, line-height 1.4, color gray-text #4a4a4a.

THE 4 ITEMS:

1. Icon: refresh-circle or recycle.
   Title: "3 FREE REVISIONS"
   Detail: "Every package. No surprise charges."

2. Icon: calendar or clock.
   Title: "28 DAYS, KICKOFF TO LIVE"
   Detail: "Minimum delivery timeline across all packages."

3. Icon: trending-up or upgrade-arrow.
   Title: "10% OFF WHEN YOU UPGRADE"
   Detail: "Start with Exclusive Drop, move up later, save 10%."

4. Icon: receipt or info-circle.
   Title: "GST ON YOUR CUSTOMERS, NOT YOU"
   Detail: "Our fees are GST-exempt. GST applies only to merch buyers."

Show desktop, tablet (2x2), and mobile (stacked).
```

**Notes for after Stitch generates:**
- Stitch may add background colors or card containers to each item — remove them, this strip is one open horizontal row with no card boundaries.

---

## ⑧ Section 8 — Style Direction (6 mockups marquee)

```
Design the "Style Direction" section for the WeDrip landing page.

LAYOUT:
- Off-white #f8f6f0 background.
- Vertical padding 120px top and bottom.
- Header content has max-width 1100px, but the marquee row extends full-width of viewport (overflowing the centered content area).

HEADER (centered):
- Eyebrow: "STYLE DIRECTION" — Geist Mono, 13px, uppercase, yellow.
- H2: "This is the kind of work we make." — Geist Bold, UPPERCASE, 52px desktop / 32px mobile, black.
- Subline: "Yours will be yours alone — these are concepts to show our range." — Geist Regular, 17px, gray-text #4a4a4a, max-width 600px.

MARQUEE ROW (80px below header, full viewport width):
- Horizontal row of 6 product mockup images, scrolling slowly to the left infinitely.
- Each image is portrait orientation, roughly 400×500px on desktop, 280×360px on mobile.
- 24px gap between images.

Each image card:
- 1px gray-line #e5e3dc border around the image, sharp 4px corners.
- The image itself fills the card.
- Below each image (8px gap): small mono caption.

PLACEHOLDER IMAGES (use these labels visibly inside the placeholder boxes for now):
1. Placeholder labeled "CONCEPT 01 — HOODIE"
2. Placeholder labeled "CONCEPT 02 — MUG"
3. Placeholder labeled "CONCEPT 03 — TEE"
4. Placeholder labeled "CONCEPT 04 — HOODIE"
5. Placeholder labeled "CONCEPT 05 — MUG"
6. Placeholder labeled "CONCEPT 06 — TEE"

Each placeholder shows: a centered gray icon (shirt or mug silhouette, depending on the type), with the label text below it. Use light gray backgrounds for the placeholders, not pure white.

Below each image (the caption):
- "CONCEPT — HOODIE" or "CONCEPT — MUG" or "CONCEPT — TEE" depending on which item.
- Geist Mono, 12px, uppercase, gray-text.

Faded gradient edges on the left and right side of the marquee (fading to background color) so images appear to enter and exit the viewport softly.

MOBILE:
- Same marquee, just smaller image dimensions.

Show desktop and mobile.
```

**Notes for after Stitch generates:**
- Stitch will likely generate actual product images instead of placeholders — that's fine for visual reference, but in code we'll swap them out with real mockups (or labeled placeholders if mockups aren't ready).
- The fade-out gradient edges are important; if Stitch skips them, add them in code.

---

## ⑨ Section 9 — FAQ

```
Design the FAQ section for the WeDrip landing page.

LAYOUT:
- Off-white #f8f6f0 background.
- Vertical padding 120px top and bottom.
- Narrow centered column, max-width 720px.

HEADER (left-aligned within the column):
- Eyebrow: "FAQ" — Geist Mono, 13px, uppercase, yellow.
- H2: "What you're probably wondering." — Geist Bold, UPPERCASE, 44px desktop / 28px mobile, black, line-height 1.1.

ACCORDION (60px below header):
- 7 items stacked vertically.
- Each item separated by a 1px gray-line #e5e3dc divider that spans the full column width.
- No card borders, no rounded corners — just dividers.

EACH ACCORDION ITEM (collapsed state):
- Padding 24px 0.
- Question text on the left: Geist Bold, UPPERCASE, 18px, black, max-width 85% of the column.
- "+" indicator on the far right: 24px, black, thin stroke (1.5px). On expanded state, rotates to become "×".
- Whole row is clickable.

EXPANDED STATE (show item #1 expanded for this design):
- The "+" rotates to "×".
- Below the question (16px gap): the answer text in Geist Regular, 16px, line-height 1.6, color gray-text #4a4a4a.
- 24px bottom padding before the divider.

THE 7 QUESTIONS:

1. (Show as EXPANDED in this design.)
   Q: "HOW LONG UNTIL MY MERCH IS LIVE?"
   A: "28 days from kickoff — design, store build, and production setup all included. We move faster when content is approved quickly."

2. Q: "DO I NEED TO HOLD INVENTORY?"

3. Q: "WHAT IF MY MERCH DOESN'T SELL?"

4. Q: "I HAVE ZERO DESIGN EXPERIENCE. CAN I STILL GET CUSTOM MERCH?"

5. Q: "WHO HANDLES CUSTOMER SUPPORT AND SHIPPING ISSUES?"

6. Q: "CAN I UPGRADE LATER?"

7. Q: "WHAT ABOUT GST?"

MOBILE:
- Same layout, smaller font sizes (question 16px, answer 15px).

Show desktop and mobile.
```

**Notes for after Stitch generates:**
- The "+/×" indicator may render as a chevron arrow — replace with a true plus/cross if so.
- Make sure dividers are thin and crisp, not heavy.

---

## ⑩ Section 10 — Final CTA + Footer

```
Design the final CTA + footer section for the WeDrip landing page.

LAYOUT:
- Black #0a0a0a background throughout.
- Two stacked zones: CTA block on top, footer below.

TOP — FINAL CTA BLOCK:
- Vertical padding 160px top, 120px bottom.
- Centered content.

- HUGE headline: "READY TO DRIP?" — Geist Bold, UPPERCASE, 120px desktop / 64px mobile, color: yellow #fed400. Line-height 0.95.

- Subline below (24px gap): "Apply now or message us directly. We reply within 24 hours." — Geist Regular, 18px, white opacity 70%, centered, max-width 480px.

- Massive Apply Now button (40px below subline):
  - White background, black text.
  - Geist Bold, UPPERCASE, 18px.
  - Padding 24px 48px.
  - Sharp 4px corners.
  - Black arrow "→" after text.
  - Hover: yellow background.

BOTTOM — FOOTER:
- 1px white opacity 10% horizontal divider above the footer.
- Vertical padding 80px top, 48px bottom.
- Three columns on desktop (equal width), stacked on mobile.
- Max-width 1200px, centered.

LEFT COLUMN — Brand:
- "WeDrip" wordmark — Geist Bold, UPPERCASE, 24px, white. Small yellow "•" after.
- 16px gap.
- Tagline: "India's merch agency for creators." — Geist Regular, 14px, white opacity 60%.

MIDDLE COLUMN — Contact methods:
- Eyebrow: "CONTACT" — Geist Mono, 11px, uppercase, yellow.
- 16px gap.
- Three rows, each with a Lucide icon (16px, white) on the left and text on the right (Geist Regular, 14px, white, with the actual contact info in Geist Mono on a second line below in white opacity 70%).
  - WhatsApp icon — "WhatsApp" / "+91 75500 22162"
  - Instagram icon — "Instagram" / "@wedrip.merch"
  - Email icon — "Email" / "we.drip.cma@gmail.com"
- 12px gap between rows.

RIGHT COLUMN — Sitemap:
- Eyebrow: "SITEMAP" — Geist Mono, 11px, uppercase, yellow.
- 16px gap.
- Four links stacked vertically, 12px gap: "Home", "How it works", "Packages", "Apply".
- Geist Regular, 14px, white opacity 70%. Hover: white opacity 100%.

BOTTOM STRIP — below the three columns, 32px gap, with a 1px white opacity 10% divider above it:
- Two-part row: left side "© 2026 WeDrip · India's merch agency for creators." in Geist Mono, 11px, uppercase, white opacity 40%.
- Right side: "MADE IN INDIA" with a small Indian flag emoji or simple icon, same styling.

MOBILE:
- All three columns stack vertically with 48px gap between them.
- "READY TO DRIP?" headline scales down to 64px.
- Apply Now button stays large.

Show desktop and mobile.
```

**Notes for after Stitch generates:**
- "READY TO DRIP?" might come out smaller than intended; push it as huge as the viewport allows.
- Footer rows often get over-padded; tighten if so.

---

## ⑪ Section 11 — /apply Page (Form State)

```
Design the /apply page for the WeDrip site. This is a separate page reached when users click "Apply Now" anywhere on the landing page.

LAYOUT:
- Off-white #f8f6f0 background, full page.
- Narrow centered column, max-width 640px.
- Vertical padding 120px top, 80px bottom.

(The sticky nav from the landing page sits above this — already designed separately.)

TOP — Back link:
- "← Back to home" — Geist Mono, 13px, uppercase, gray-text #4a4a4a. Hover: black.

HEADER (40px below back link):
- H1: "TELL US ABOUT YOU." — Geist Bold, UPPERCASE, 56px desktop / 36px mobile, black, line-height 1.05.
- Subline (16px gap): "We read every submission. Expect a reply within 24 hours." — Geist Regular, 17px, gray-text, line-height 1.5.

FORM (64px below header):

Every field has:
- Label above: Geist Mono, 11px, uppercase, black, with a small red "*" for required fields.
- Input below: off-white background with 1px gray-line #e5e3dc border, sharp 4px corners, padding 16px, Geist Regular 16px text. Focus state: 2px black border (thicker), no other styling change.
- 24px gap between fields.

THE FIELDS IN ORDER:

1. NAME * — text input, placeholder "Your full name"

2. EMAIL * — email input, placeholder "you@example.com"

3. WHATSAPP NUMBER * — two-part input: a small dropdown on the left showing "+91" (default, with arrow indicator), then a phone number input filling the rest of the width with placeholder "Your number"

4. INSTAGRAM OR YOUTUBE HANDLE * — text input with "(any one)" in the label gray, placeholder "@yourhandle or channel name"

5. FOLLOWER COUNT * — dropdown/select with placeholder "Select range":
   Options: "Under 50K" · "50K – 100K" · "100K – 500K" · "500K+"

6. NICHE * — text input, placeholder "Fitness, Tamil comedy, gaming, etc."

7. PACKAGE INTEREST * — dropdown/select with placeholder "Pick one":
   Options: "Exclusive Drop" · "Standard" · "Full Service" · "Not sure yet"

8. ANYTHING ELSE — textarea, 3 rows, placeholder "Tell us anything that helps us tailor our reply..."

9. LINK TO YOUR CONTENT — text input with "(optional)" in the label gray, placeholder "youtube.com/yourchannel or instagram.com/yourhandle"

POLICY ACKNOWLEDGMENT (32px below the last field):
- Checkbox on the left (16px, square, 1px black border, fills black when checked with white check inside).
- Label text to the right (Geist Regular, 14px, gray-text, line-height 1.5):
  "I've read the timeline (28 days), revision policy (3 free rounds), and Full Service profit-share terms (20%)."

SUBMIT BUTTON (32px below acknowledgment):
- Full-width black button.
- "SUBMIT APPLICATION →" — Geist Bold, UPPERCASE, 16px, white, padding 20px.
- 4px corners.
- Disabled state: gray-line background, gray-text text.
- Hover (when enabled): yellow background, black text.

FOOTER STRIP (48px below submit, centered):
- Small text: "Prefer to chat?" — Geist Regular, 14px, gray-text.
- 8px gap.
- Three inline links, separated by "·": "WhatsApp" · "Instagram" · "Email" — Geist Bold, UPPERCASE, 13px, black, underlined on hover.

MOBILE:
- Form column gets 24px horizontal padding.
- H1 scales down to 36px.
- All inputs full-width.

Show desktop and mobile.
```

**Notes for after Stitch generates:**
- The phone input with country code dropdown is often the trickiest piece — Stitch may oversimplify; the +91 should clearly be a tappable dropdown.
- Keep all form fields visually identical in height; consistency matters more than fanciness here.

---

## ⑫ Section 12 — /apply Success State

```
Design the success state of the /apply page (shown after a successful form submission).

LAYOUT:
- Off-white #f8f6f0 background, full page.
- Centered content (both horizontally and vertically), max-width 560px.

CONTENT (centered, top to bottom):

- Small yellow check icon at the top (40px circle, yellow #fed400 background, white check mark inside).

- 32px gap.

- H1: "GOT IT." — Geist Bold, UPPERCASE, 96px desktop / 60px mobile, black, line-height 0.95.

- 24px gap.

- Body: "We'll be in touch on WhatsApp within 24 hours." — Geist Regular, 18px, line-height 1.55, gray-text.

- 8px gap.

- Continuation: "Meanwhile, follow along at" then a link "@wedrip.merch" (Geist Bold, black, underlined). All inline as one sentence.

- 48px gap.

- Two CTAs side by side (centered, 16px gap between them):
  - "Back to home" — ghost button, transparent bg, 1px black border, black text, padding 14px 28px.
  - "Message us on WhatsApp" — solid black button, white text, padding 14px 28px, with WhatsApp icon.

MOBILE:
- CTAs stack vertically, both full-width.
- "GOT IT." scales to 60px.

Show desktop and mobile.
```

**Notes for after Stitch generates:**
- Stitch may add confetti or animated celebrations — strip them. The success state should feel premium and understated, not party-like.

---

## 📋 Workflow Reminder

1. Start with the **Nav** prompt. Get it right first — it appears on every page.
2. Generate sections in order (Hero → Problem → ... → Final CTA + Footer).
3. Generate the **/apply form** state, then the **/apply success** state.
4. As you collect screens, drop them into a single design file or Figma board so you can see the whole flow.
5. Once visuals look right, **bring this spec file + the Stitch screenshots into Claude Code** and start the React build.

---

## Things Stitch Will Probably Get Wrong (And You'll Need to Fix)

- **Over-decoration:** It loves to add unnecessary gradients, shadows, illustrations, or background ornaments. Strip them.
- **Soft, rounded everything:** Push back toward sharp 4px corners on cards/buttons and 0px on section dividers.
- **Yellow overuse:** Stitch may flood yellow across multiple elements. Yellow is an *accent*. Reign it in.
- **Generic icons:** Often defaults to bright multi-color icons. Force them to be simple Lucide-style black line icons.
- **Hero illustrations:** It will try to add a product mockup next to the hero headline. Don't let it — the hero is type-only.
- **Inconsistent type weights:** Make sure every UPPERCASE heading is the same weight (Geist Bold), not mixing.

---

*End of Stitch prompt set.*
