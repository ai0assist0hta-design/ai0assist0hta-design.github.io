# Project Context — Shared Configuration

> This file is shared across all three agents.
> When switching projects, update this file only.

---

## Communication
The user communicates in Korean. Understand all Korean input and respond in Korean.

---

## Current Project
- **Name**: sabum.kr
- **Type**: Personal portfolio — Creative Director with 26 years of experience
- **Domain**: sabum.kr (GitHub Pages), some experiments on Netlify

## Tech Stack
- Vanilla HTML / CSS / JS
- Three.js (3D)
- GSAP + ScrollTrigger
- Canvas 2D
- No frameworks (React/Vue not used)
- Single-file experiments: `lab_*.html` pattern

## Design Direction
- Dark background by default (`#050505`–`#0a0a0a`)
- Typographic, editorial, fashion-magazine aesthetic
- Primary language: Korean / Secondary: English
- US design industry standards applied

## Target Audience
- US/global hiring managers and recruiters
- Design community
- Course students and learners

## Performance Targets (priority order)
1. 60fps animations — direct UX impact
2. LCP < 2.5s
3. Bundle < 200KB gzip (exception when using Three.js or GSAP)

## Key Features
- Career timer
- Scramble text animation
- Scroll reveal
- Language toggle (Ko/En via `data-lang` attribute)
- Dark mode
- 70+ lab experiments (typography, clocks, particles, 3D)
- FontMaker, TypeBlast sub-projects
