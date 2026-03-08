<!--
  The user communicates in Korean.
  Understand all Korean input and respond in Korean.
  All code, comments, variable names, and technical output must be in English only.
  Never mix Korean into code.
-->

# Exercise B: Project Detail Page

Pick one project and build a detailed showcase page.
Fill in the sections below, then paste into Antigravity.

---

## 1. Project Info

```
Project name:
Client/Organization:
Duration: (e.g., 2024.03 – 2024.06)
My role: (e.g., UI Design, Branding, Prototyping)
Tools used: (e.g., Figma, Photoshop, After Effects)
```

## 2. Project Story

```
One-line summary:
Background: (Why this project exists — 2–3 sentences)
Approach: (How you tackled it — 2–3 sentences)
Result: (Outcome, metrics, reception — 1–2 sentences)
Key takeaway: (What you learned — 1 sentence)
```

## 3. Images (3–5)

Prepare project images: screenshots, mockups, process shots, etc.

```
Image 1: (description — e.g., Main screen)
Image 2: (description — e.g., Mobile version)
Image 3: (description — e.g., Design system/components)
Image 4: (description — e.g., Before/after comparison)
Image 5: (description — e.g., User flow diagram)
```

---

## Prompt for Antigravity

```
Build a single-page project showcase website with the info below.

[Structure]
- Hero: Project name + one-line summary (full viewport, large typography)
- Overview: Client, duration, role, tools (3 or 4-column grid)
- Story: Background → Approach → Result (scroll progression, text + images alternating)
- Gallery: Full-width images with captions (vertical scroll, generous spacing)
- Takeaway: Key learning or quote (centered, large text)
- Footer: Designer name + link to main portfolio + "Next project" link

[Design]
- Background: #0a0a0a (dark)
- Accent color: #FFD600 (yellow)
- Text: #ffffff primary, #999999 secondary
- Body font: Pretendard, 16px, line-height 1.8
- Heading font: Large serif (Playfair Display or similar), bold
- Image style: Full-width with rounded corners (8px), generous vertical spacing (80px+)
- Animation: Fade-in on scroll, images slide up gently
- Smooth scroll enabled

[Tech]
- HTML + CSS + vanilla JS
- No external libraries
- Responsive (mobile-first, single column below 768px)
- Semantic HTML
- Lazy-load images with loading="lazy"

[Content — paste your filled-in info here]
```

---

## Refinement Prompts

| Goal | Prompt |
|------|--------|
| Bigger images | "Make gallery images full-width with no side padding" |
| Change text layout | "Change Overview to a left-aligned vertical list" |
| More spacing | "Increase spacing between sections to 160px" |
| Emphasize hero | "Make the hero title fill half the screen" |
| Cool tone | "Switch to a cool palette: dark navy bg (#0a1628), blue accent (#3B82F6)" |
| Warm tone | "Switch to warm palette: cream bg (#faf8f5), orange accent (#E85D2C)" |
| Hover on images | "Add a slight zoom effect on image hover" |
| Reorder sections | "Move Gallery above Story" |
| Add process section | "Add a 'Process' section between Story and Gallery showing 4 steps with icons" |
| Side-by-side comparison | "Add a before/after image slider in the Story section" |

---

## Tips

- **No images yet?** Say "use placeholder images that match a dark, minimal design"
- **Iterate one thing at a time** — don't request 5 changes in one message
- **Specific > vague** — "make the title bigger" → "make the hero title at least 80px"
- **Link back to your portfolio** — add a nav link or footer link to your main `index.html`
- **Test mobile** — check on your phone, especially image sizes and text readability
