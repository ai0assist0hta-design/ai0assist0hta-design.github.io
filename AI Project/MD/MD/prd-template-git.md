<!--
  The user communicates in Korean.
  Understand all Korean input and respond in Korean.
  All code, comments, variable names, and technical output must be in English only.
  Never mix Korean into code.
-->

# Git & GitHub Setup Guide

A zero-to-deploy guide for people who have never used code before.

---

## Concepts

### What is Git?

A tool that saves the **history of every change** you make to your files.

```
Work → Save (commit) → Work more → Save (commit) → ...
```

You can always go back to any previous save point.
Think of it as "version history" in Google Docs — but for your entire project.

### What is GitHub?

A website where you **upload your Git saves** to the internet.

- Upload your project to GitHub = **Push**
- GitHub can turn your project into a live website = **GitHub Pages**

### 4 Terms to Know

| Term | Meaning | Analogy |
|------|---------|---------|
| **Repository** | A project folder tracked by Git | Your project's filing cabinet |
| **Commit** | Save a snapshot of your changes | Pressing "Save" with a note |
| **Push** | Upload commits to GitHub | Syncing to the cloud |
| **Deploy** | Make it live as a website | Publishing to the world |

### The Flow

```
Edit files on your computer
    ↓
Commit (save snapshot)
    ↓
Push (upload to GitHub)
    ↓
Website auto-updates (via GitHub Pages)
```

---

## Step 1: Create a GitHub Account

```
1. Go to github.com
2. Click "Sign Up"
3. Enter email
4. Set password
5. Choose a username ← This becomes your website URL!
   Example: username "jimin-design"
   → Your site: jimin-design.github.io
```

**Username tips:**
- Short and memorable
- Lowercase letters + numbers only
- Use your real name, nickname, or brand name
- You can change it later, but the URL changes too — choose wisely

---

## Step 2: Create a Repository

```
1. Log in to GitHub
2. Click "+" in the top right → "New repository"
3. Repository name: username.github.io
   (e.g., jimin-design.github.io)
4. Select "Public"
5. Check "Add a README file"
6. Click "Create repository"
```

**Important:** When the repo name matches `username.github.io`, GitHub automatically makes it a website.

---

## Step 3: Connect Antigravity to GitHub

### First-Time Setup

Tell Antigravity:
```
Connect this project to GitHub.
Repository: https://github.com/my-username/my-username.github.io
Branch: main
```

The agent will handle Git initialization, remote setup, and first push.

### Updating After Changes

```
Save all changes and push to GitHub.
Commit message: "Updated design"
```

---

## Common Request Prompts

### Commit (Save)
```
Save all changes with commit message: "First version"
```

### Push (Upload)
```
Push the latest commit to GitHub.
```

### Commit + Push (One Shot)
```
Save changes and push to GitHub.
Commit message: "Added profile photo"
```

### Undo Last Change
```
Undo the last change and go back to the previous state.
```

### Check Status
```
Show me what files have changed since the last commit.
```

---

## Writing Good Commit Messages

Keep it short and descriptive — say what changed.

**Good examples:**
```
Add profile section
Change colors — blue to yellow
Fix mobile layout
Add 3 project images
Fix typo in about section
Add scroll animation to cards
```

**Bad examples:**
```
Updated
Fixed stuff
asdf
test
```

---

## Checking Your Live Site

After pushing, wait 1–2 minutes for the site to update.

```
Your website URL: https://my-username.github.io
```

Open this URL in your browser.
If changes don't appear, press **Ctrl+Shift+R** (or **Cmd+Shift+R** on Mac) for a hard refresh.

---

## Troubleshooting

| Problem | What to tell Antigravity |
|---------|-------------------------|
| Push failed | "Fix the push error" |
| Merge conflict | "Resolve the merge conflict" |
| Site not loading | "Check GitHub Pages settings — is it enabled?" |
| Want to go back | "Revert to the commit before the last one" |
| See what changed | "Show me the commit history" |
| Site shows old version | "Force push and trigger a GitHub Pages rebuild" |
| 404 error on site | "Check that index.html exists in the root and Pages is set to main branch" |

---

## Understanding GitHub Pages

### How It Works
```
You push code to GitHub
    ↓
GitHub detects it's a username.github.io repo
    ↓
GitHub serves your files as a website
    ↓
Anyone can visit https://username.github.io
```

### What Gets Published
- Everything in your `main` branch root folder
- `index.html` is the homepage
- All linked CSS, JS, and image files

### What Does NOT Get Published
- Files in `.gitignore`
- Private repositories (must be Public for free GitHub Pages)

---

## Summary

```
1. Create GitHub account (github.com)
2. Create repo named: username.github.io
3. In Antigravity: "Connect to GitHub"
4. Build your site
5. "Push to GitHub" whenever you want to update
6. Visit https://username.github.io
7. Iterate: edit → push → check → repeat
```

**That's it.** You now have a free website hosted on GitHub.
