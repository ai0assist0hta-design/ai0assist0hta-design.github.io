---
description: Auto-start local dev server for static site projects
globs: "*.html"
---

<!--
  The user communicates in Korean.
  Understand all Korean input and respond in Korean.
  All code, comments, variable names, and technical output must be in English only.
  Never mix Korean into code.
-->

# Dev Server Setup

> Automates local dev server startup for static file serving.
> Uses the project root as the document root.

## Port Assignment

| Environment | Port | Notes |
|-------------|------|-------|
| **AI IDE (Antigravity)** | 9000 | Auto-started by AI agent |
| **Manual (VSCode, terminal)** | 8000 | Started by user |

> Ports can be changed freely. Avoid conflicts with other services.

---

## Execution Steps

### Step 1: Kill Existing Server
```bash
lsof -ti:9000 | xargs kill -9 2>/dev/null; sleep 1
```

### Step 2: Start New Server
```bash
python3 -m http.server 9000 &
```

### Step 3: Verify Server is Running
```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:9000 || echo "Server failed to start"
```

Server URL: http://localhost:9000

---

## Live Reload Option (Recommended)

For auto-refresh on file changes, use `live-server` instead:

```bash
npx -y live-server --port=9000 --no-browser --quiet
```

Benefits:
- Auto-refreshes browser on file save
- Injects reload script automatically
- Better developer experience

---

## Manual Execution

```bash
# Navigate to project root, then:
cd /your/project/root
python3 -m http.server 8000

# Or with live reload:
npx -y live-server --port=8000 --no-browser
```

Server URL: http://localhost:8000

---

## Customization

### Change Port
Replace `9000` or `8000` with your preferred port number in all commands above.

### Serve a Specific Directory Only
```bash
python3 -m http.server 9000 --directory ./dist
```

### Enable CORS Headers (for font/API loading)
```bash
# Use this if fonts or external resources fail to load
npx -y http-server -p 9000 --cors -s
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Port already in use | Run Step 1 first to kill existing process |
| Permission denied | Try a different port (e.g., 3000, 5500) |
| Files not updating | Hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac) |
| Fonts not loading | Use the CORS-enabled server option above |
| Server won't start | Check if Python3 is installed: `python3 --version` |
