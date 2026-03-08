---
description: Git commit and GitHub push automation for static site projects
globs: "*.html,*.css,*.js"
---

<!--
  The user communicates in Korean.
  Understand all Korean input and respond in Korean.
  All code, comments, variable names, and technical output must be in English only.
  Never mix Korean into code.
-->

# Git Auto Commit & Push (Universal Template)

> Automates Git commit and GitHub push workflows.
> Configure repository info below and use as-is.

---

## Repository Config

> Edit these values for your project.

| Item | Value |
|------|-------|
| **Repo name** | `my-project` |
| **GitHub URL** | `https://github.com/username/username.github.io.git` |
| **Branch** | `main` |

---

## Execution Steps

### Step 1: Ensure .gitignore Exists
```bash
cat > .gitignore << 'EOF'
.DS_Store
Thumbs.db
.env
.env.local
*.pem
*.key
node_modules/
.vscode/
.idea/
*.log
EOF
```

### Step 2: Initialize Repo (First Time Only)
```bash
# Only run this once per project
git init
git remote add origin https://github.com/username/username.github.io.git
git branch -M main
```

### Step 3: Commit and Push
```bash
if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "🔧 Update"
  git push origin main 2>&1
else
  echo "No changes to commit"
fi
```

---

## Commit Message Convention

| Emoji | Purpose | Example |
|-------|---------|---------|
| ✨ | New feature | `✨ Add project gallery section` |
| 🎨 | UI/Style change | `🎨 Update color scheme to warm tones` |
| 🐛 | Bug fix | `🐛 Fix mobile nav overlap` |
| 📱 | Responsive | `📱 Add tablet breakpoint layout` |
| 🔧 | Config/misc | `🔧 Update .gitignore` |
| 📝 | Documentation | `📝 Update README` |
| 🚀 | Deploy | `🚀 Deploy v1.0` |
| 🗑️ | Remove | `🗑️ Remove unused CSS` |
| ♿ | Accessibility | `♿ Add alt text to all images` |

> The AI agent will auto-generate appropriate commit messages based on changes.

---

## GitHub Pages Deployment

### Enable GitHub Pages (One-Time Setup)
```
1. Go to your GitHub repository
2. Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: main, folder: / (root)
5. Save
```

Your site will be live at: `https://username.github.io`

### Force Rebuild (If Site Doesn't Update)
```bash
# Create an empty commit to trigger rebuild
git commit --allow-empty -m "🚀 Trigger rebuild"
git push origin main 2>&1
```

---

## Authentication Setup

### Option A: HTTPS with Personal Access Token (Recommended for Beginners)
```
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Select "repo" scope → Copy token
3. When prompted for password during push, paste the token
```

### Option B: SSH Key (Advanced)
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com" -f ~/.ssh/id_ed25519 -N ""

# Copy public key
cat ~/.ssh/id_ed25519.pub
# Add this key to GitHub → Settings → SSH Keys → New SSH Key

# Switch remote to SSH
git remote set-url origin git@github.com:username/username.github.io.git
```

### Option C: GitHub CLI (Simplest)
```bash
# Install GitHub CLI, then:
gh auth login
# Follow the prompts — handles auth automatically
```

---

## Common Workflows

### Check What Changed
```bash
git status
git diff --stat
```

### Undo Last Commit (Keep Changes)
```bash
git reset --soft HEAD~1
```

### Undo All Uncommitted Changes
```bash
git checkout -- .
```

### View Commit History
```bash
git log --oneline -10
```

---

## Multi-Repo Management

For projects with multiple repositories:
```bash
# Repo A
cd project-a && \
if [ -n "$(git status --porcelain)" ]; then \
  git add -A && git commit -m "🔧 Update" && git push origin main 2>&1; \
else echo "Project A: No changes"; fi

# Repo B
cd ../project-b && \
if [ -n "$(git status --porcelain)" ]; then \
  git add -A && git commit -m "🔧 Update" && git push origin main 2>&1; \
else echo "Project B: No changes"; fi
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Push rejected | `git pull --rebase origin main` then push again |
| Authentication failed | Regenerate token or re-add SSH key |
| Large file error | Add large files to `.gitignore`, then `git rm --cached <file>` |
| Merge conflict | Run `git status`, edit conflicting files, then `git add -A && git commit` |
| Site not updating | Wait 2 min, then hard refresh (`Ctrl+Shift+R`) |
| Wrong remote URL | `git remote set-url origin <correct-url>` |

---

## Notes
- The AI agent auto-generates commit messages based on actual changes.
- If the remote is not configured, the agent will run `git remote add origin <URL>` first.
- Add `.ssh_temp/` to `.gitignore` if using local SSH keys.
