# File Analysis Report

## Overview

These 12 files form a **lecture/workshop curriculum** for a FastCampus course teaching designers (non-coders) how to build portfolio websites using **Google Antigravity IDE**, deploy via **GitHub Pages**, and optionally connect custom domains.

## File Categories

### Category 1: AI IDE Configuration (Agent Rules)
| File | Purpose |
|------|---------|
| `규칙_new.md` | Project rules for AI agent behavior |
| `개발서버_new.md` | Dev server auto-start workflow |
| `git_new.md` | Git commit & push automation workflow |

### Category 2: Lecture Templates (Student-Facing)
| File | Purpose |
|------|---------|
| `prd-template-prd.md` | How to write a PRD |
| `prd-template-a.md` | Exercise A: Resume → Portfolio site |
| `prd-template-b.md` | Exercise B: Project detail page |
| `prd-template-brand.md` | Exercise: Brand doc → Website PRD |
| `prd-template-prompts.md` | Prompt cheat sheet |
| `prd-template-antigravity.md` | Antigravity setup & usage guide |
| `prd-template-git.md` | Git & GitHub beginner guide |
| `prd-template-domain.md` | Custom domain setup guide |
| `portfolio_shift_plan.md` | Lecture presentation spec |

## Problems Found

### 1. Agent Rules (`규칙_new.md`)
- **Missing IDE-specific format**: No frontmatter `description` triggers for Antigravity rules/workflows
- **No tech stack definition**: Doesn't specify HTML/CSS/JS static site context
- **Vague folder structure**: Generic `src/public/dist` doesn't match actual lecture project structure
- **Missing image handling rules**: No guidance on placeholder images, asset optimization
- **No error recovery pattern**: Only says "report errors" but no structured recovery flow
- **Missing accessibility rules**: No a11y guidance for generated websites

### 2. Dev Server (`개발서버_new.md`)
- **No auto-open browser**: Missing `--open` flag or browser launch
- **No live reload by default**: Python http.server has no hot reload
- **Missing error handling**: No port-in-use fallback
- **No CORS headers**: Could cause issues with font loading

### 3. Git Workflow (`git_new.md`)
- **SSH setup is overly complex** for beginners (target: designers)
- **Missing GitHub Pages deployment step**: No `gh-pages` branch handling
- **No .gitignore template**: Students will commit .DS_Store, node_modules
- **Missing initial repo setup flow**: Assumes repo already exists

### 4. Lecture Templates (prd-template-*.md)
- **Antigravity guide is outdated**: Still references old model names, missing Agent Manager concept
- **No mention of Rules/Workflows**: Students don't learn to customize agent behavior
- **Missing MCP integration**: No Figma MCP, which is huge for designers
- **PRD template lacks responsive breakpoints**: Only mentions "mobile-friendly"
- **Brand template missing image generation**: No mention of AI image generation tools
- **Prompt cheat sheet lacks debugging prompts**: Missing common error fixes
- **Domain guide pricing is outdated**: Needs 2025/2026 price verification

### 5. Cross-Cutting Issues
- **All Korean, no English header for AI agents**: AI agents work better with English instructions
- **Inconsistent formatting**: Mix of styles across files
- **No version/date tracking**: No way to know when files were last updated
- **Missing "troubleshooting" sections**: Students will hit common errors
