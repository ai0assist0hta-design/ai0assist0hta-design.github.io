<!--
  The user communicates in Korean.
  Understand all Korean input and respond in Korean.
  All code, comments, variable names, and technical output must be in English only.
  Never mix Korean into code.
-->

# Exercise A: Resume → Portfolio Website

Fill in the sections below, then paste everything into Antigravity.

---

## 1. Personal Info

```
Name:
Title: (e.g., UI/UX Designer, Graphic Designer, Brand Designer)
One-liner: (e.g., I design user-centered interfaces)
Email:
Links: (portfolio, Behance, Instagram, LinkedIn, etc.)
Profile photo: (yes/no — if yes, prepare the file)
```

## 2. Career / Education (3 entries, newest first)

```
1. Company/School | Role/Major | Period
2.
3.
```

## 3. Key Projects (3)

```
Project 1
- Name:
- Description: (1–2 sentences)
- My role:
- Image: (screenshot, mockup, or "use placeholder")

Project 2
- Name:
- Description:
- My role:
- Image:

Project 3
- Name:
- Description:
- My role:
- Image:
```

## 4. Skills

```
Design tools: (e.g., Figma, Photoshop, Illustrator, Sketch)
Tech skills: (e.g., HTML/CSS, Framer, Webflow, Protopie)
Languages: (e.g., Korean, English)
Other: (e.g., User Research, Design Systems, Motion Design)
```

---

## Prompt for Antigravity

Fill in the above, then paste this entire block:

```
Build a single-page portfolio website using the resume info below.

[Structure]
- Hero: Name + title + one-line intro (full viewport height, center-aligned)
- About: Career/education timeline (alternating left-right or vertical)
- Work: 3 project cards (2-column grid on desktop, 1-column on mobile)
- Skills: Tool/skill tags or icon grid
- Contact: Email + social links + CTA button ("Let's work together")
- Footer: Copyright + small credit

[Design]
- Background: #0a0a0a (near black)
- Accent color: #FFD600 (yellow)
- Text color: #ffffff (white), secondary: #999999
- Body font: Pretendard (Korean), Inter (English fallback)
- Heading font: Large, bold (700+), optionally serif
- Card style: Rounded corners (12px), subtle shadow, hover lift effect
- Spacing: Generous (section gap: 120px, card gap: 32px)
- Animation: Fade-in on scroll for each section (staggered)
- Smooth scroll between sections

[Tech]
- HTML + CSS + vanilla JS only
- No external frameworks
- Responsive: 2-column → 1-column at 768px
- Semantic HTML (header, nav, main, section, footer)
- CSS custom properties for colors/fonts (easy to retheme)

[Content — paste your filled-in info here]
```

---

## Post-Build Refinement Prompts

Use these to iterate after the first version:

| Goal | Prompt |
|------|--------|
| Change accent color | "Change the accent color to blue (#3B82F6)" |
| Change heading font | "Change headings to a serif font (Playfair Display)" |
| Add a section | "Add an awards section below Work" |
| Change layout | "Make project cards a 2-column grid" |
| Switch to light theme | "Switch to a light background (#ffffff) with dark text" |
| Fix mobile | "Make it look good on mobile, single column below 768px" |
| Add hover effects | "Add a subtle lift effect when hovering project cards" |
| Add navigation | "Add a sticky top nav with links to each section" |
| Add dark/light toggle | "Add a dark/light mode toggle button in the nav" |
| Final polish | "Add favicon, meta tags for SEO, and og:image" |

---

## Tips

- **Don't worry about images first** — say "use placeholder images" and replace later
- **One change at a time** — "change color AND font AND layout" confuses the AI
- **Be specific** — "make the title bigger" → "make the hero title 72px or larger"
- **Screenshot references help** — paste a screenshot and say "make it look like this"
- **Test on your phone** — open the dev server URL on your mobile browser
