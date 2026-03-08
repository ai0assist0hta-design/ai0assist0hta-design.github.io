<!--
  The user communicates in Korean.
  Understand all Korean input and respond in Korean.
  All code, comments, variable names, and technical output must be in English only.
  Never mix Korean into code.
-->

# The Portfolio Shift: From Document to Web — Defy Gravity

## Project Overview

| Item | Value |
|------|-------|
| **Project** | Portfolio Shift Lecture Presentation |
| **Target** | FastCampus students |
| **Format** | Scroll-snap slide presentation |
| **Slides** | 11 slides |
| **Style** | Dark mode + Yellow accent |
| **Platform** | Desktop-first (1920×1080) |

---

## Design System

### Color Palette (Dark Mode)

| Role | HEX | Usage |
|------|-----|-------|
| **Background** | `#0A0A0A` | Page background, slide base |
| **Text** | `#FFFFFF` | Primary text, headings |
| **Accent** | `#FFD600` | Highlights, CTAs, emphasis |
| **Muted** | `#666666` | Secondary text, captions |

### Typography (Serif + Sans-serif Mix)

| Element | Font | Category | Weight |
|---------|------|----------|--------|
| **Display / Titles** | Playfair Display | Serif | 700, 900 |
| **Body / Labels** | Pretendard | Sans-serif | 400, 600 |

> **Design tip**: Mixing serif and sans-serif within a single title creates visual contrast and hierarchy.

---

## Slide Structure (11 Slides)

### INTRO (4 slides)

| # | Title | Overlay | Notes |
|---|-------|---------|-------|
| 01 | THE PORTFOLIO SHIFT | Dark | Opening hook — large display type |
| 02 | 50MB PDF? | Dark | Problem statement — why PDFs fail |
| 03 | GRAVITY | Dark | Metaphor — what holds you back |
| 04 | ANTIGRAVITY | Dark | Solution reveal — the tool |

### CHAPTER 01: DATA FIRST (3 slides)

| # | Title | Overlay | Notes |
|---|-------|---------|-------|
| 05 | DATA FIRST | Dark | Chapter intro — prepare before you build |
| 06 | OPEN YOUR FOLDER | Dark | Action — audit your existing work |
| 07 | Collection Items (Grid) | Dark | Checklist — what to gather |

### CHAPTER 02: VISUAL REFERENCE (3 slides)

| # | Title | Overlay | Notes |
|---|-------|---------|-------|
| 08 | VISUAL REFERENCE | Dark | Chapter intro — find inspiration |
| 09 | Pinterest / Dribbble / Behance / Awwwards | Dark | Resource showcase |
| 10 | Using References Effectively | Dark | How to analyze and apply references |

### ENDING (1 slide)

| # | Title | Overlay | Notes |
|---|-------|---------|-------|
| 11 | START | **Yellow** (inverted) | Call to action — yellow bg, dark text |

---

## Technical Specs

### File Structure
```
lecture-presentation/
├── index.html       # Main HTML (scroll-snap slides)
├── style.css        # Styles (dark mode, yellow accent)
└── main.js          # Interactions (particles, scroll behavior)
```

### Implementation Notes
- Use CSS `scroll-snap-type: y mandatory` for slide behavior
- Each slide is `100vh` height
- White particle animation on dark background (canvas-based)
- Final slide inverts color scheme (yellow bg, dark text)
- Navigation: scroll or keyboard arrows
- No external dependencies — vanilla HTML/CSS/JS only
