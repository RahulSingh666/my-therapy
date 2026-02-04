<<<<<<< HEAD
# Dr. Maya Reynolds — Therapy Website
**Grow My Therapy · Internship Assignment**

A fully responsive therapy homepage built with **Next.js 15 + Tailwind CSS 4**, redesigned from the Lilac Template for Dr. Maya Reynolds.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

---

## 📁 Project Structure

```
therapy-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Fonts (Playfair Display + DM Sans), metadata, SEO
│   │   ├── page.tsx            ← Main page — assembles all sections
│   │   └── globals.css         ← Tailwind + CSS variables (theme colors)
│   └── components/
│       ├── Navbar.tsx          ← Sticky nav with mobile hamburger menu
│       ├── Hero.tsx            ← Hero section with CTA buttons
│       ├── About.tsx           ← Therapist bio + credentials
│       ├── Services.tsx        ← 3 service cards (Anxiety, Trauma, Depression)
│       ├── OurOffice.tsx       ← NEW custom section (Part 3)
│       ├── FAQ.tsx             ← Accordion FAQ
│       ├── Contact.tsx         ← Contact + booking CTA
│       └── Footer.tsx          ← Footer with links & info
├── next.config.mjs             ← Next.js config (image domains)
├── postcss.config.mjs          ← PostCSS + Tailwind config
└── package.json
```

---

## 🎨 Theme & Design Decisions

| Element         | Choice                        | Reason                                      |
|-----------------|-------------------------------|---------------------------------------------|
| **Primary**     | Sage Green `#4a7c59`          | Calming, trustworthy — perfect for therapy  |
| **Secondary**   | Warm Sand `#d4c5a9`           | Adds warmth, avoids clinical coldness       |
| **Accent**      | Amber `#c07d3e`               | Draws attention to CTAs, adds energy        |
| **Heading Font**| Playfair Display (serif)      | Elegant, professional, human feel           |
| **Body Font**   | DM Sans                       | Clean, modern, highly readable              |

---

## 📦 Deployment (Vercel)

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Deploy
vercel deploy
```

Or push to GitHub and connect the repo at **vercel.com** — it auto-detects Next.js.
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Deploy
vercel deploy 
