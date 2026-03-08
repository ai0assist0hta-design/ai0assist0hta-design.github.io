<!--
  The user communicates in Korean.
  Understand all Korean input and respond in Korean.
  All code, comments, variable names, and technical output must be in English only.
  Never mix Korean into code.
-->

# Custom Domain Setup Guide

Connect your own domain to GitHub Pages.
Replace `username.github.io` with something like `yourname.kr`.

---

## Why a Custom Domain?

```
Default:  jimin-design.github.io    → Long, hard to remember
Custom:   jimin.kr                  → Short, professional
```

**This is entirely optional.** Your `github.io` address works fine.
Set this up when you're ready — no rush.

---

## Step 1: Buy a Domain

### Where to Buy

| Service | URL | .kr pricing | Notes |
|---------|-----|-------------|-------|
| **Gabia** | gabia.com | ~₩11,000/yr | Korean service, Korean support |
| **Hosting.kr** | hosting.kr | ~₩9,900/yr | Cheapest .kr option |
| **Namecheap** | namecheap.com | .com ~$9/yr | International, great for .com |
| **Cloudflare** | cloudflare.com | .com ~$10/yr | At-cost pricing, free SSL/CDN |
| **Porkbun** | porkbun.com | .dev ~$11/yr | Good prices, clean UI |

### Choosing a Domain Name

```
✅ Short — sabum.kr, jimin.dev
✅ Memorable — your real name, brand name, or nickname
✅ Good extensions — .kr (Korea), .com (universal), .dev (developer), .design (designer)

❌ Too long
❌ Excessive hyphens
❌ Hard to spell
```

---

## Step 2: Configure DNS

Log in to your domain registrar and add these DNS records:

### A Records (4 entries)

```
Type: A
Name: @ (or blank)
Value (add all four):
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
TTL: Auto (or 3600)
```

### CNAME Record (1 entry)

```
Type: CNAME
Name: www
Value: username.github.io
TTL: Auto (or 3600)
```

### Gabia Step-by-Step
```
1. Log in to Gabia → My Gabia → Domain Management
2. Click your domain → DNS Management
3. DNS Settings → Add Record
4. Add the 4 A records + 1 CNAME record above
5. Save
```

### Cloudflare Step-by-Step
```
1. Add your domain to Cloudflare (it will ask to change nameservers)
2. Go to DNS → Records → Add Record
3. Add the 4 A records + 1 CNAME record
4. Set proxy to "DNS only" (gray cloud) for GitHub Pages compatibility
5. Save
```

---

## Step 3: Configure GitHub

### Option A: Via Antigravity
```
Connect my custom domain to GitHub Pages.
Domain: yourdomain.kr
```

### Option B: Via GitHub Web
```
1. Go to your repository → Settings
2. Left sidebar → "Pages"
3. Under "Custom domain", type: yourdomain.kr
4. Click Save
5. Check "Enforce HTTPS" (after DNS propagates)
```

### Option C: CNAME File
Add a `CNAME` file to your project root containing just your domain:

```
Tell Antigravity:
"Create a CNAME file in the project root with the content: yourdomain.kr"
```

---

## Step 4: Wait & Verify

DNS changes take **10 minutes to 24 hours** to propagate.

### Verification Checklist
```
1. Open yourdomain.kr in a browser
2. ✅ Site loads = domain works
3. ✅ URL shows https:// = SSL works
4. ✅ www.yourdomain.kr also works = CNAME works
```

### If Something Doesn't Work

| Problem | Check |
|---------|-------|
| Can't access at all | DNS hasn't propagated yet (wait up to 24h) |
| 404 error | Verify domain in GitHub Pages settings matches exactly |
| HTTPS not working | Enable "Enforce HTTPS" in GitHub Pages settings, wait 10 min |
| www doesn't work | Confirm CNAME record: `www → username.github.io` |
| SSL certificate error | Wait 24h — GitHub auto-provisions SSL after DNS propagates |
| Domain works but shows wrong site | Check A records point to GitHub's IPs (not old hosting) |

---

## Cost Summary

| Item | Cost |
|------|------|
| Domain (.kr) | ~₩11,000/year |
| Domain (.com) | ~₩12,000/year (~$10) |
| Domain (.dev) | ~₩15,000/year (~$12) |
| GitHub Pages hosting | **Free** |
| SSL certificate (HTTPS) | **Free** (GitHub auto-provides) |
| **Total** | **~₩11,000–15,000/year** |

---

## Quick Summary

```
1. Buy a domain (Gabia, Namecheap, Cloudflare, etc.)
2. Add DNS records: 4 A records + 1 CNAME
3. Set custom domain in GitHub Pages settings
4. Wait 10 min – 24 hours
5. Visit yourdomain.kr to confirm
```

**You can do this anytime.** Build and deploy with `username.github.io` first.
Add a custom domain later — your site stays the same, only the URL changes.
