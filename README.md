# MC Joint Website — Deployment Guide

## Site Structure

```
mcjoint/
├── index.html              ← Homepage
├── about.html              ← About Us
├── services.html           ← Services
├── works.html              ← Our Works (filterable portfolio)
├── blog.html               ← Blog / Insights
├── contact.html            ← Contact (Netlify Forms ready)
├── thanks.html             ← Form submission confirmation
├── netlify.toml            ← Netlify configuration
├── css/
│   └── style.css           ← Global styles
├── js/
│   └── main.js             ← Shared JavaScript
├── images/                 ← ADD YOUR IMAGES HERE (see below)
└── clients/
    ├── index.html          ← Clients overview
    ├── businesses.html     ← Business clients
    ├── talent.html         ← Talent roster
    ├── associates.html     ← Associates
    └── talent/
        └── vivek-sagar.html  ← Individual talent page (template)
```

---

## 🖼️ Images to Add

Place images in the `images/` folder with these filenames:

### Homepage / General
- `about-hero.jpg` — Team photo or office
- `story.jpg` — About page visual

### Team
- `team-sonu.jpg` — Sonu Mohkh headshot
- `team-njay.jpg` — NJay headshot
- `team-sai.jpg` — Sai Charan headshot

### Client Logos / Hero Images
- `client-avanti.jpg`
- `client-arha.jpg`
- `client-firstshow.jpg`
- `client-permitroom.jpg`
- `client-sasi.jpg`
- `client-musalman.jpg`
- `client-pramanya.jpg`
- `client-brandhill.jpg`
- `clients-businesses.jpg` — Hero for businesses page
- `clients-talent.jpg` — Hero for talent page
- `clients-associates.jpg` — Hero for associates page

### Talent Photos
- `talent-viveksagar.jpg`
- `talent-smaran.jpg`
- `talent-jagadeesh.jpg`
- `talent-raj.jpg`
- `talent-ravi.jpg`
- `talent-pawon.jpg`
- `talent-ajith.jpg`
- `talent-thanmai.jpg`
- `talent-narsanna.jpg`
- `talent-faraz.jpg`
- `talent-kiyaan.jpg`
- `talent-inktoxic.jpg`
- `talent-lazy.jpg`

### Works / Portfolio
- `work-avanti.jpg`
- `work-avanti-full.jpg` (featured card)
- `work-viveksagar.jpg`
- `work-smaran.jpg`
- `work-musalman.jpg`
- `work-narsanna.jpg`
- `work-arha.jpg`
- `work-b12.jpg`
- `work-permitroom.jpg`
- `work-ravi.jpg`

### Blog Images
- `blog-avanti.jpg`
- `blog-story.jpg`
- `blog-folk.jpg`
- `blog-rap.jpg`
- `blog-digital.jpg`
- `blog-2024.jpg`

### Service Images
- `service-production.jpg`
- `service-music.jpg`
- `service-talent.jpg`
- `service-digital.jpg`

> **Note:** All images have graceful fallbacks — if an image is missing, the section still renders cleanly with dark gradient placeholders.

---

## 🚀 Deploying to Netlify

### Option A: Drag & Drop (Easiest)
1. Go to https://app.netlify.com
2. Sign up / log in (free account works)
3. Drag the entire `mcjoint` folder onto the deploy area
4. Your site goes live instantly at a random `*.netlify.app` URL

### Option B: GitHub + Netlify (Recommended for updates)
1. Create a GitHub repo and push this folder to it
2. In Netlify, click "Import from Git" and connect your repo
3. Set build directory to `/` (no build command needed — it's static HTML)
4. Netlify auto-deploys every time you push to GitHub

### Connecting Your Hostinger Domain (www.mcjoint.in)
You do NOT need a paid Netlify plan for a custom domain.

**In Netlify:**
1. Go to Site Settings → Domain Management → Add Custom Domain
2. Enter `mcjoint.in` and `www.mcjoint.in`
3. Netlify will give you nameservers (e.g., `dns1.p01.nsone.net`)

**In Hostinger:**
1. Log into Hostinger → Domains → mcjoint.in → DNS/Nameservers
2. Change nameservers to the ones Netlify gave you
3. Wait 1–48 hours for DNS propagation

**That's it.** Netlify provides free SSL (HTTPS) automatically.

---

## 📋 Adding More Talent Profile Pages

Copy `clients/talent/vivek-sagar.html` and update:
- Page title, talent name, role, bio, discography
- Image paths
- Sidebar quick info

Then link to the new page from `clients/talent.html`.

---

## 📬 Contact Form

The contact form uses **Netlify Forms** (free, built-in).
- Form submissions appear in your Netlify dashboard under "Forms"
- You can set up email notifications in Netlify → Forms → Notifications

---

## 🎨 Brand Colors

```css
--red: #E10600
--black: #040409
--white: #ffffff
--grey: #8C8C8C
--dark-grey: #3E3E3E
```
