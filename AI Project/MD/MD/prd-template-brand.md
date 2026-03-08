<!--
  The user communicates in Korean.
  Understand all Korean input and respond in Korean.
  All code, comments, variable names, and technical output must be in English only.
  Never mix Korean into code.
-->

# Exercise: Brand Document → Website PRD

Learn how to analyze a brand strategy document (PDF) and convert it into a website PRD.
Follow the steps below, then paste the result into Antigravity.

---

## STEP 1: Extract Brand Essentials

Open the brand PDF and find these 6 items:

```
① Brand name:
② Slogan/Tagline:
③ Brand intro (1–2 sentences):
④ Core keywords: (e.g., luxury, natural, traditional, modern)
⑤ Target audience: (e.g., women 20–40, fragrance enthusiasts)
⑥ Products/Services: (e.g., 3 premium fragrance lines)
```

## STEP 2: Extract Design System

Pull visual elements from the PDF:

```
[Colors]
- Primary: (most-used color in PDF — use a color picker to extract hex)
- Secondary: (accent or highlight color)
- Background: (light or dark base?)
- Text: (what color is the body text?)

[Typography]
- Heading: (serif or sans-serif? What style?)
- Body: (clean sans-serif recommended)
- English font: (font used in the PDF, or suggest one)
- Korean font: (Pretendard recommended if none specified)

[Tone & Mood]
- Overall vibe: (e.g., luxurious & calm / vibrant & modern / playful & bold)
- Image style: (e.g., minimal product shots / lifestyle photography / abstract textures)
```

## STEP 3: Define Website Structure

Map the brand content to website sections:

```
[Required Sections]
- Hero: Brand logo + slogan + hero image
- About: Brand story / philosophy (text + image, 2-column layout)
- Products: Product lineup (card grid with image + name + description)
- Contact: Contact info + CTA button

[Optional Sections] (add based on brand needs)
- Values: Core brand values (icon + short description × 3)
- Gallery: Product/brand image gallery
- Testimonials: Customer reviews or press quotes
- Press: Media mentions or awards
- Newsletter: Email signup CTA
```

---

## STEP 4: Build the PRD Prompt

Fill in and paste into Antigravity:

```
Build a brand website using the following brand information.

[Brand Info]
- Name: (from STEP 1)
- Slogan: (from STEP 1)
- Intro: (from STEP 1)
- Keywords: (from STEP 1)
- Target audience: (from STEP 1)

[Design System]
- Primary color: #______
- Secondary color: #______
- Background: #______ (light/dark)
- Text color: #______
- Heading font: ______ (serif/sans-serif)
- Body font: ______ (Korean: Pretendard recommended)
- Tone: (luxury / casual / professional / emotional)

[Structure]
- Hero: Logo + slogan + hero image (full viewport)
- About: Brand story (2-column: image left, text right)
- Products: Product cards × 3 (image + name + description + price)
- Values: Brand values × 3 (icon + title + short text)
- Contact: Address + email + CTA button

[Tech]
- HTML + CSS + minimal JS
- Responsive (mobile-first)
- Scroll-triggered fade-in animations
- Hover effects on product cards
- Semantic HTML
```

---

## Example: Deeponde Fragrance Brand

A real brand document (Deeponde Fragrance Strategy Deck) converted to PRD:

```
Build a premium fragrance brand website.

[Brand Info]
- Name: DEEPONDE
- Slogan: "Deep waves, new beginnings"
- Intro: A premium fragrance brand inspired by Korean traditional aesthetics.
  Drawing motifs from moon jars, hanji paper, and nature, reinterpreted for modern sensibility.
- Keywords: tradition, nature, depth, serenity, premium
- Target: Adults 25–45 who appreciate artisanal craftsmanship and cultural storytelling

[Design System]
- Primary: #1B3A5C (deep navy)
- Secondary: #E8D5B5 (warm beige), #8B7355 (gold brown)
- Background: #FAF7F2 (light cream)
- Text: #1B3A5C (navy for headings), #555555 (gray for body)
- Heading font: Playfair Display (serif, elegant)
- Body font: Pretendard (clean Korean sans-serif)
- Tone: Luxurious, calm, where tradition meets modernity

[Structure]
- Hero: Product image + brand name + slogan (full viewport, fade-in animation)
- Brand Story: Philosophy and inspiration (image + text, 2-column layout)
- Signature Line: 3 fragrances (card layout, hover to reveal description)
  · The Moon Jar — inspired by moon jars, calm floral
  · The Hanji — texture of hanji paper, woody amber
  · The Garden — Korean garden, fresh green
- Values: 3 brand values (icon + brief description)
- Contact: Retailer info + newsletter signup CTA

[Tech]
- HTML + CSS + JS
- Responsive (mobile-first)
- Scroll-triggered section fade-in
- Product card hover effects
- Smooth scroll navigation
```

---

## Refinement Prompts

| Goal | Prompt |
|------|--------|
| Warmer palette | "Shift the overall tone warmer — more beige and cream tones" |
| Change heading font | "Change headings to Cormorant Garamond" |
| Reorder sections | "Move Brand Story directly below Hero" |
| Product slider | "Change product cards to a horizontal scroll slider" |
| Hero slideshow | "Add a 3-image auto-sliding background to the Hero" |
| Scroll animation | "Make elements slide in from the left on scroll" |
| Stronger CTA | "Make the newsletter signup button more prominent — larger, contrasting color" |
| Dark theme variant | "Create an alternate dark theme version of the site" |
| Add video | "Add a background video to the Hero section" |

---

## Tips

- **PDF is in English?** Tell Antigravity: "Translate all content to Korean and apply it"
- **Can't identify colors?** Say: "Use colors similar to the tones in this PDF"
- **No product images?** Say: "Add placeholder images that match a luxury brand aesthetic"
- **Want AI-generated images?** Use an image generation MCP or tool to create brand-appropriate visuals
- **Don't aim for perfection on the first try** — build structure first, then refine: colors → fonts → images → animations
- **You can attach the PDF directly** to Antigravity and say: "Build a website based on this brand PDF"
