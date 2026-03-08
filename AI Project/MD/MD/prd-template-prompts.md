<!--
  The user communicates in Korean.
  Understand all Korean input and respond in Korean.
  All code, comments, variable names, and technical output must be in English only.
  Never mix Korean into code.
-->

# Prompt Cheat Sheet

Copy-paste ready prompts for Antigravity.
Organized by category for quick reference.

---

## Golden Rule

```
❌ Vague → "Change it", "It's weird", "Make it pretty"
✅ Specific → What to change + Where + How much
```

---

## Layout

| Goal | Prompt |
|------|--------|
| 2-column grid | "Change the project section to a 2-column grid with 32px gap" |
| 3-column grid | "Arrange the skills section in a 3-column grid" |
| Single column | "Show projects in a single column, each full-width" |
| Left-right split | "Put text on the left, image on the right (50/50 split)" |
| Center aligned | "Center-align the Hero section content" |
| Full viewport | "Make the Hero section 100vh (full screen height)" |
| Card style | "Style projects as cards with 12px border-radius and subtle box-shadow" |
| Masonry grid | "Arrange the gallery in a masonry/Pinterest-style grid" |
| Sticky sidebar | "Add a sticky sidebar nav on the left side (desktop only)" |

---

## Colors

| Goal | Prompt |
|------|--------|
| Background | "Change the background color to #0a0a0a" |
| Accent color | "Change the accent color to blue (#3B82F6)" |
| Text color | "Change body text to light gray (#999999)" |
| Gradient bg | "Add a gradient background from #0a0a0a to #1a1a2e on the Hero" |
| Light theme | "Switch to a light theme: white background (#ffffff), dark text (#111111)" |
| Dark theme | "Switch to a dark theme: #0a0a0a background, white text" |
| Muted palette | "Tone down all colors — use muted, desaturated versions" |
| Glass effect | "Add a frosted glass effect to the navigation bar" |

---

## Typography

| Goal | Prompt |
|------|--------|
| Korean body font | "Set the body font to Pretendard" |
| Serif headings | "Change headings to Noto Serif KR" |
| English serif | "Use Playfair Display for English headings" |
| Larger title | "Make the Hero title at least 72px (48px on mobile)" |
| Bolder weight | "Set heading font-weight to 700 (Bold)" |
| Line height | "Increase body line-height to 1.8" |
| Letter spacing | "Tighten heading letter-spacing to -0.02em" |
| Display font | "Use a large display font (Clash Display or Space Grotesk) for the Hero" |

---

## Spacing

| Goal | Prompt |
|------|--------|
| Section gap | "Increase space between sections to 120px" |
| Card gap | "Increase card grid gap from 24px to 48px" |
| Inner padding | "Increase card inner padding to 32px" |
| Side margins | "Widen the content side margins (max-width: 1200px, centered)" |
| Reduce gap | "Reduce the gap between Hero and About to 60px" |
| Breathing room | "Add more whitespace throughout — increase all section padding by 50%" |

---

## Animation & Interaction

| Goal | Prompt |
|------|--------|
| Fade in | "Add a fade-in animation when each section scrolls into view" |
| Slide up | "Make cards slide up from below when they enter the viewport" |
| Hover lift | "Add a subtle lift (translateY -4px) on card hover with shadow" |
| Hover zoom | "Zoom images slightly (scale 1.05) on hover with overflow hidden" |
| Smooth scroll | "Enable smooth scrolling for the entire page" |
| Typing effect | "Add a typing animation to the Hero intro text" |
| Parallax | "Add a subtle parallax scroll effect to the Hero background image" |
| Stagger | "Stagger the fade-in animation for grid items (0.1s delay between each)" |
| Page transition | "Add a fade transition when clicking between sections" |
| Scroll progress | "Add a thin scroll progress bar at the top of the page" |

---

## Images

| Goal | Prompt |
|------|--------|
| Hero background | "Add a full-screen background image to the Hero section" |
| Larger images | "Make project images full-width" |
| Rounded corners | "Add border-radius: 12px to all images" |
| Image shadow | "Add a subtle drop shadow to images" |
| Placeholder | "Use placeholder images (16:9 ratio) for all project slots" |
| Fixed ratio | "Lock all images to a 16:9 aspect ratio with object-fit: cover" |
| Lazy loading | "Add loading='lazy' to all images below the fold" |
| Image overlay | "Add a dark gradient overlay on Hero background image for text readability" |

---

## Responsive / Mobile

| Goal | Prompt |
|------|--------|
| Basic responsive | "Make the site responsive for mobile (375px and up)" |
| Grid collapse | "Change 2-column grid to 1-column below 768px" |
| Smaller fonts | "Reduce heading sizes by 30% on mobile" |
| Hamburger menu | "Replace the nav with a hamburger menu on mobile" |
| Mobile padding | "Set horizontal padding to 16px on mobile" |
| Full-width images | "Make all images full-width on mobile (no side padding)" |
| Hide on mobile | "Hide the skills icon grid on mobile, show as a simple list instead" |
| Touch-friendly | "Make all buttons at least 44px tall for touch targets" |

---

## Add / Remove / Reorder Sections

| Goal | Prompt |
|------|--------|
| Add section | "Add an Awards section below Work" |
| Remove section | "Remove the Skills section entirely" |
| Reorder | "Move About below Work" |
| Add nav | "Add a fixed navigation bar at the top with section links" |
| Add footer | "Add a footer with copyright text and social media icon links" |
| Dark mode toggle | "Add a dark/light mode toggle button in the top-right corner" |
| Back to top | "Add a 'back to top' button that appears on scroll" |
| Section divider | "Add a thin horizontal line between each section" |

---

## Debugging & Fixes

| Problem | Prompt |
|---------|--------|
| Layout broken | "The layout is broken. Check for unclosed tags and fix the CSS" |
| Elements overlapping | "Elements are overlapping. Adjust spacing and z-index" |
| Text invisible | "Text is invisible — it's the same color as the background. Fix the contrast" |
| Slow loading | "Optimize images and remove unused CSS/JS for faster loading" |
| Animation janky | "The scroll animation is choppy. Use transform and opacity only for smoothness" |
| Mobile broken | "The site is broken on mobile. Fix the responsive layout for 375px screens" |
| Font not loading | "The Google Font isn't loading. Check the import URL and add fallback fonts" |
| Undo last change | "Undo the last change" |
| Full rollback | "Revert to the previous version" |

---

## Final Polish Checklist

Run these prompts after your site is done:

```
1. "Clean up the code — remove unused CSS/JS, format consistently"
2. "Optimize all images for web (compress, lazy-load below fold)"
3. "Make all external links open in a new tab (target='_blank' rel='noopener')"
4. "Add a favicon"
5. "Add meta tags for SEO: title, description, og:title, og:description, og:image"
6. "Test the entire site on mobile (375px) and fix any issues"
7. "Check color contrast for accessibility (minimum 4.5:1 ratio)"
8. "Add alt text to all images"
```

---

## Pro Tips

- **Screenshot → Paste**: The fastest way to explain what you want is to screenshot a reference site and paste it
- **One change per message**: Multi-change requests = confusion. Go step by step.
- **Use hex codes**: "#3B82F6" beats "blue" every time
- **Use px values**: "Make it 72px" beats "make it bigger"
- **Name the section**: "In the Hero section, change..." is clearer than "at the top, change..."
