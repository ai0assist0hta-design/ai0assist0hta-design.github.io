<!--
  The user communicates in Korean.
  Understand all Korean input and respond in Korean.
  All code, comments, variable names, and technical output must be in English only.
  Never mix Korean into code.
-->

# PRD Writing Guide

A PRD (Product Requirements Document) is a structured way to tell AI exactly what to build.
Think of it as a blueprint: **the clearer the plan, the better the result.**

---

## Why Write a PRD?

```
❌ "Make me a portfolio site"
→ AI guesses everything → you don't like it → start over

✅ Paste a PRD
→ AI follows the plan → fix only what needs fixing → done fast
```

**AI with a plan = faster, more accurate results.**

---

## PRD Structure: The Big 3

Every PRD has three parts:

```
[Structure] — What sections exist and in what order
[Design]    — What it looks and feels like
[Content]   — What actual text and images go in
```

### 1. Structure

Define the page layout and section order.

```
[Structure]
- Hero: First thing visitors see (name, title, tagline)
- About: Introduction or project description
- Work: Portfolio pieces (cards, grid, or gallery)
- Contact: Email, social links, CTA button
```

**Common section combinations:**

| Type | Sections |
|------|----------|
| Portfolio | Hero → About → Work → Skills → Contact |
| Project showcase | Hero → Overview → Story → Gallery → Footer |
| Landing page | Hero → Features → Pricing → CTA → Footer |
| Resume-style | Hero → Experience → Projects → Skills → Contact |

### 2. Design

Set the visual mood using specific values, not vague words.

```
[Design]
- Background: #0a0a0a (dark) or #ffffff (light)
- Accent color: #FFD600 (yellow)
- Body font: Pretendard, 16px
- Heading font: Bold serif, large size
- Style: Minimal, generous whitespace
- Animation: Fade-in on scroll
```

**Mood presets:**

| Mood | Background | Accent | Font style |
|------|-----------|--------|------------|
| Modern dark | #0a0a0a | #FFD600 (yellow) | Sans-serif, bold |
| Clean white | #ffffff | #000000 (black) | Sans-serif, light |
| Warm & cozy | #faf8f5 | #E85D2C (orange) | Serif + sans-serif |
| Cool & techy | #0a1628 | #3B82F6 (blue) | Sans-serif, geometric |
| Creative pop | #1a1a2e | #E94560 (pink) | Mixed, oversized |

### 3. Content

Provide actual text — not placeholders.

```
[Content]
- Name: Jane Doe
- Title: Interaction Designer
- Tagline: Exploring the boundary between web and interaction
- Projects: 3 items (name, description, image per each)
- Email: hello@janedoe.com
```

---

## Writing Order

```
Step 1: Decide the page purpose
Step 2: Define section order (Structure)
Step 3: Set the visual mood (Design)
Step 4: Write the actual text (Content)
Step 5: Combine into one prompt
```

---

## Complete Example

Copy, fill in your info, and paste into Antigravity:

```
Build a portfolio website.

[Structure]
- Hero: Name + title + one-line intro (full screen)
- About: 3 career entries (timeline format)
- Work: 3 projects (card layout, 2 columns)
- Skills: Tool icons + names (grid)
- Contact: Email + social links

[Design]
- Background: #0a0a0a (dark)
- Accent: #FFD600 (yellow)
- Body: Pretendard, 16px, line-height 1.8
- Heading: Bold, large, serif
- Minimal style, generous spacing
- Scroll-triggered fade-in animations
- Responsive (single column below 768px)

[Tech]
- HTML + CSS + minimal JS
- No external libraries
- Responsive (mobile-first)
- Semantic HTML (header, main, section, footer)

[Content]
Name: Hong Gildong
Title: UI/UX Designer
Intro: I design user-centered interfaces
Email: hello@example.com

Project 1: App Redesign — Improved UX for an existing mobile app
Project 2: Brand Identity — Full branding for a startup
Project 3: Dashboard Design — Data visualization for analytics

Skills: Figma, Photoshop, Illustrator, HTML/CSS, Framer
```

---

## Common Mistakes

| Mistake | Why it's a problem | Fix |
|---------|-------------------|-----|
| Too many requests at once | AI gets confused, quality drops | Structure first → Design → Content (one at a time) |
| Vague design language | "Pretty" and "clean" mean nothing to AI | Use hex codes, font names, px values |
| Empty content | AI fills in lorem ipsum | Write real text before starting |
| No reference | Imagining results leads to disappointment | Attach a screenshot or URL |
| Skipping responsive | Site breaks on phones | Always include mobile breakpoints |

---

## Blank Template

Copy and fill in:

```
Build a (type of page).

[Structure]
- Hero: (what appears first)
- (Section 2): (content)
- (Section 3): (content)
- (Section 4): (content)
- Footer: (bottom content)

[Design]
- Background: (hex code)
- Accent: (hex code)
- Body font: (font name)
- Heading font: (font name)
- Style: (mood keywords)
- Animation: (if any)

[Tech]
- HTML + CSS + JS
- Responsive (mobile breakpoint: 768px)
- Semantic HTML

[Content]
(Your actual text here)
```

---

## Iteration Tips

After the first build, refine in small steps:

```
Step 1: Get the structure right
Step 2: Adjust colors and fonts
Step 3: Add real content and images
Step 4: Fine-tune spacing and animations
Step 5: Test on mobile
Step 6: Final polish (SEO meta tags, favicon, performance)
```

**Never try to get everything perfect in one prompt.**
