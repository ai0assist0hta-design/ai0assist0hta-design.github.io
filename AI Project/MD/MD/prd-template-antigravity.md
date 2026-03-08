<!--
  The user communicates in Korean.
  Understand all Korean input and respond in Korean.
  All code, comments, variable names, and technical output must be in English only.
  Never mix Korean into code.
-->

# Antigravity Setup & Usage Guide

A beginner-friendly guide to Google Antigravity for designers with zero coding experience.

---

## What is Antigravity?

Google's **agent-first development platform** (released November 2025).
You describe what you want in plain language → AI agents write the code → you see the result in real-time.

```
"Build a portfolio site" → AI plans → writes code → shows preview → you refine
```

No coding required. You manage the AI like a project manager manages a team.

---

## Key Concepts

| Concept | What it means |
|---------|---------------|
| **Agent Manager** | Dashboard to spawn and monitor multiple AI agents working in parallel |
| **Editor View** | Traditional code editor (like VS Code) for hands-on editing |
| **Artifacts** | Deliverables the agent creates: plans, task lists, screenshots, recordings |
| **Rules** | Persistent instructions the agent always follows (like a style guide) |
| **Workflows** | Saved prompt templates you trigger with `/` commands |
| **MCP Servers** | Plugins that connect the agent to external tools (Figma, GitHub, etc.) |

---

## Step 1: Install

### Mac
```
Option 1: Visit antigravity.google → Download → Mac
Option 2: Terminal → brew install --cask antigravity
```

### Windows
```
Visit antigravity.google → Download → Windows → Run installer
```

### Linux
```
Visit antigravity.google → Download → Linux (.deb or .AppImage)
```

---

## Step 2: Initial Setup

On first launch, configure these settings:

| Setting | Recommended | Why |
|---------|------------|-----|
| Theme | Your preference | Purely cosmetic, changeable later |
| Development style | **Agent-driven** | AI takes the lead on planning and execution |
| Auto-run commands | **Auto-run (allow all)** | Prevents constant "allow?" popups |
| Terminal permissions | **Auto-run** | Lets AI run Git, servers, etc. automatically |
| Browser preview | **Auto-open** | See results immediately |

### Model Selection

| Model | Best for | Cost |
|-------|----------|------|
| **Gemini 3 Pro** | General use, fast iteration | Free (generous quota) |
| **Claude Opus 4.6** | Highest code quality, complex layouts | Requires API key |
| **Claude Sonnet 4.5** | Good balance of speed and quality | Requires API key |

**Start with Gemini 3 Pro** — it's free and sufficient for portfolio sites.
**Upgrade to Claude Opus 4.6** when you want the highest quality output, especially for complex designs and precise CSS.

---

## Step 3: Create a Project

### New Project
```
1. File → New Project (or Cmd+Shift+N / Ctrl+Shift+N)
2. Choose a folder location (e.g., Desktop/my-portfolio)
3. Type your first prompt in the chat
```

### First Prompt (Starter)
```
Build a portfolio website.

[Structure]
- Hero: Name + title
- About: Short bio
- Work: 3 projects
- Contact: Email

[Design]
- Background: #0a0a0a (dark)
- Accent: #FFD600 (yellow)
- Font: Pretendard
- Minimal, modern style
- Scroll animations
```

When the agent shows its plan, respond with **"Go ahead"** or **"Looks good, start building"**.

---

## Step 4: Review & Refine

### How It Works
The agent builds your site and opens a browser preview automatically.
Review the result, then request changes via chat.

### Effective Refinement

```
❌ "Change it"
✅ "Change the Hero background to dark navy (#0a1628)"

❌ "It looks weird"
✅ "The project cards have too little spacing. Increase gap to 48px"

❌ "Make it work on mobile"
✅ "Below 768px: single column layout, reduce heading to 36px, 16px side padding"
```

### Common Refinement Prompts

| Category | Prompt |
|----------|--------|
| **Color** | "Change accent to blue (#3B82F6)" |
| **Font** | "Use serif font for headings (Playfair Display)" |
| **Spacing** | "Increase section spacing to 120px" |
| **Layout** | "Make projects a 2-column grid" |
| **Animation** | "Add fade-in on scroll for each section" |
| **Images** | "Add a hero background image" |
| **Mobile** | "Fix mobile layout — single column below 768px" |
| **Dark mode** | "Add a dark/light mode toggle" |
| **Nav** | "Add a sticky navigation bar at the top" |

---

## Step 5: Set Up Rules & Workflows

### Rules (Agent Always Follows)

Go to **Settings (⋯) → Customizations → Rules** and add:

```
- Always respond in Korean
- All code, comments, and variable names in English
- Use semantic HTML (header, nav, main, section, footer)
- Use CSS custom properties for colors and fonts
- Mobile-first responsive design
- Include alt attributes on all images
```

Rules are saved per-workspace or globally.

### Workflows (Saved Prompts)

Create reusable prompts triggered with `/`:

**Example: `/deploy` workflow**
```
Commit all changes and push to GitHub.
Use an appropriate emoji commit message.
Confirm the GitHub Pages URL after push.
```

**Example: `/polish` workflow**
```
Final polish: clean up unused code, optimize images,
add meta tags, add favicon, check mobile layout,
ensure all links open in new tabs.
```

---

## Step 6: Deploy to GitHub Pages

### Connect to GitHub
```
Connect this project to GitHub.
Repository name: my-username.github.io
```

The agent handles: Git init → create repo → push → enable GitHub Pages.

### Update After Changes
```
Save changes and push to GitHub.
Commit message: "Update design"
```

### Your Live URL
```
https://my-username.github.io
```

---

## Power Tips

### 1. Small Steps, Not Giant Leaps
```
❌ "Build a full portfolio with hero, about, projects, skills,
    contact, animations, dark mode, and mobile support"

✅ Step 1: "Build the basic structure (Hero, About, Work, Contact)"
   Step 2: "Style the Hero section — dark background, large title"
   Step 3: "Add project cards with hover effects"
   Step 4: "Make it responsive for mobile"
```

### 2. Use Artifacts
When the agent creates a plan artifact, **review it before approving**.
Leave comments directly on the artifact to guide the agent.

### 3. Use Undo Freely
```
"Undo the last change"
"Revert to the previous version"
```
Don't be afraid to experiment — you can always go back.

### 4. Use Screenshots as References
Paste a screenshot of a site you like:
```
"Make the layout similar to this screenshot" (+ paste image)
```

### 5. Organize Files
```
"Organize the file structure: separate HTML, CSS, JS.
Put images in an assets/images folder."
```

### 6. Final Optimization
```
"Optimize for production: compress images, minify CSS,
add meta tags, check accessibility, test at 375px width"
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Agent stops responding | Start a new chat session and re-describe the task |
| Result doesn't match | "Undo and try again" + add more specific instructions |
| Preview won't open | "Open the dev server and show me the preview URL" |
| Error messages | "There's an error. Read the console and fix it" |
| Quota limit reached | Wait for quota to refresh, or switch to a different model |
| Slow response | Switch to a faster model (Gemini 3 Pro) |
| Agent ignoring rules | Check Rules in Settings — make sure they're saved |
| Files got messy | "Clean up: remove unused files and organize the folder structure" |

---

## Workshop Flow Summary

```
1. Install Antigravity from antigravity.google
2. Sign in with Google account
3. Create a new project
4. Paste your PRD template (see prd-template-a.md)
5. Review the agent's plan → approve
6. Check the result in preview
7. Refine via chat (color → font → layout → animation)
8. Set up Rules for consistent agent behavior
9. Connect to GitHub + deploy
10. Share your live URL
```
