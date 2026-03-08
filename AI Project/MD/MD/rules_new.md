---
description: Project rules for AI agent — applies to all tasks in this workspace
globs: "**/*"
---

<!-- 
  The user communicates in Korean. 
  Understand all Korean input and respond in Korean.
  All code, comments, variable names, and technical output must be in English only.
  Never mix Korean into code.
-->

# Project Rules (Universal Template)

> This file defines the rules every AI agent must follow in this workspace.
> Customize per project as needed.

---

## 1. Language Rules
- **All responses must be in Korean** (or match the project language setting)
- Code comments should be in Korean where possible
- Variable names, function names, CSS class names: **English only**
- File names: **English only, lowercase, kebab-case** (e.g., `about-section.html`)

---

## 2. Tech Stack
- **HTML5 + CSS3 + Vanilla JavaScript**
- No frameworks unless explicitly requested (no React, Vue, etc.)
- External fonts via Google Fonts CDN only
- External icons via CDN only (e.g., Lucide, Feather Icons)
- No npm/node_modules — this is a static site project

---

## 3. Browser Rules
- **Never auto-open browser** unless the user explicitly requests it
- Provide the dev server URL and let the user check manually
- Target browsers: Chrome (latest), Safari (latest), Mobile Safari, Mobile Chrome

---

## 4. Folder Structure

```
project-root/
├── index.html          # Main entry point
├── style.css           # Global styles
├── main.js             # Global scripts
├── assets/
│   ├── images/         # All image files
│   ├── fonts/          # Local font files (if any)
│   └── icons/          # SVG icons (if any)
├── pages/              # Additional HTML pages (if multi-page)
├── CNAME               # Custom domain file (for GitHub Pages)
└── .gitignore          # Git ignore rules
```

---

## 5. Responsive Design Rules

### Breakpoints
| Name | Width | Layout |
|------|-------|--------|
| **Desktop** | 1200px+ | Full layout |
| **Tablet** | 768px–1199px | Adjusted grid |
| **Mobile** | below 768px | Single column |

### Mandatory Checklist (for every new feature)
1. Does it look correct at 1920px wide?
2. Does it look correct at 768px wide?
3. Does it look correct at 375px wide (iPhone SE)?
4. Are touch targets at least 44×44px on mobile?
5. Are font sizes readable on mobile (minimum 14px body)?

### Touch Event Pattern
```javascript
// Always pair mouse events with touch events
element.addEventListener('mouseenter', handleHover);
element.addEventListener('touchstart', handleHover, { passive: true });

element.addEventListener('mouseleave', handleHoverEnd);
element.addEventListener('touchend', handleHoverEnd, { passive: true });
```

---

## 6. Performance Rules
- **Target: 60fps** for all animations
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Never animate `width`, `height`, `top`, `left` — use `transform: translate()` instead
- Lazy-load images below the fold with `loading="lazy"`
- Keep total page weight under 3MB (images included)
- Use `will-change` sparingly and only when needed

---

## 7. Accessibility (a11y) Rules
- All images must have descriptive `alt` attributes
- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Ensure color contrast ratio of at least 4.5:1 for body text
- All interactive elements must be keyboard-accessible
- Use `aria-label` for icon-only buttons

---

## 8. Audio (Web Audio API) Rules

### iOS Safari Compatibility (Mandatory)
```javascript
let audioCtx = null;

function initAudio() {
  if (audioCtx) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return;
  }
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

document.addEventListener('click', initAudio);
document.addEventListener('touchstart', initAudio, { passive: true });
```

---

## 9. AI Agent Role

### Identity
1. **Co-creator** — Rapidly prototype ideas into code
2. **Technical translator** — Convert visual concepts into CSS/JS logic
3. **Debugger** — Fix layout, animation, and rendering issues
4. **Optimizer** — Improve performance, accessibility, and code quality

### Work Philosophy
- **Visual impact first** (aesthetics over over-engineering)
- **Ship fast, iterate often** (quick experiments, quick pivots)
- **Mobile-ready always** (never skip responsive)
- **Semantic HTML** (proper structure over div soup)

---

## 10. Completion Notification

### When a task is done, the agent must:
1. **Summarize** — What was built/changed (2–3 sentences)
2. **Provide test URL** — Dev server link
3. **Confirm** — "✅ Done" message
4. **Note known issues** — Any limitations or next steps

### Format
```
✅ Done!

📁 Files: `index.html`, `style.css`
🌐 Test: http://localhost:9000

Summary:
- Added hero section with fade-in animation
- Responsive layout for mobile (375px+)

Next steps:
- Please check in browser
- Let me know if you want any changes
```

---

## 11. Security Rules

| Item | Rule |
|------|------|
| **File deletion** | ❌ Never delete without explicit user request |
| **API keys** | ❌ Never hardcode secrets in source files |
| **Personal info** | ❌ Never commit real names/emails/phones to Git |
| **Sensitive files** | ❌ Never expose `.env`, certificates, credentials |

### Required `.gitignore`
```
.DS_Store
Thumbs.db
.env
.env.local
*.pem
*.key
node_modules/
.vscode/
```

---

## 12. Infinite Loop Prevention

| Item | Rule |
|------|------|
| **Max edits per request** | **10 attempts maximum** |
| **On exceeding 10** | **Stop immediately and report to user** |
| **On error** | **Report immediately, wait for instructions** |
| **On uncertainty** | **Ask the user before proceeding** |

### Self-Verification Checklist (after every edit)
1. Did I apply ALL requested changes?
2. Are all brackets/tags properly closed?
3. Does the logic match the user's intent?
4. Are there unintended side effects on other sections?
5. Did I provide a way for the user to test?

**When in doubt, ask. Never assume.**

---

## 13. Collaboration Rules

### Communication Protocol
- Before major refactors: **summarize the plan → ask for approval**
- Before destructive changes: **list affected files → confirm with user**
- When proposing alternatives: **explain pros/cons → let user choose**
- Never start large-scale code changes without explicit user approval

---

## 14. Code Style

### HTML
```html
<!-- Use semantic elements -->
<section class="hero-section" id="hero">
  <h1 class="hero-title">Title</h1>
  <p class="hero-subtitle">Subtitle</p>
</section>
```

### CSS
```css
/* Use CSS custom properties for theming */
:root {
  --color-primary: #FFD600;
  --color-bg: #0a0a0a;
  --color-text: #ffffff;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Pretendard', sans-serif;
  --spacing-section: 120px;
}

/* Mobile-first approach */
.hero-section {
  padding: 60px 16px;
}

@media (min-width: 768px) {
  .hero-section {
    padding: 120px 48px;
  }
}
```

### JavaScript
```javascript
// Use const/let, never var
// Use descriptive function names
// Add error handling for DOM queries
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
  // Safe to proceed
}
```

---

**This rule set can be reviewed anytime with the `/rules` command.**
