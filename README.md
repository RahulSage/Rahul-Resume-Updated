# Netflix-Style Resume

A fully client-side, single-file-config resume portfolio with a dark Netflix UI aesthetic, light/dark/auto theme toggle, animated hero, and expandable experience timeline.

**Live demo:** https://rahulsage.github.io/Rahul-Resume-Updated/

---

## Quick start

```bash
git clone https://github.com/RahulSage/Rahul-Resume-Updated.git
cd Rahul-Resume-Updated
# Open index.html in any modern browser — no build step required
```

---

## Personalising

**All content lives in one file: `config.js`**

Open `config.js` and edit the sections below. Every page regenerates automatically from this config.

### Identity & contact

```js
name:      "Your Name",
shortName: "Y",           // single letter shown in nav logo
title:     "Your Title",
roles: [                  // typewriter animation in hero
  "Role One",
  "Role Two",
],
avatar: "./assets/your-photo.jpg",

contact: {
  phone:    "+00 0000000000",
  email:    "you@example.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github:   "https://github.com/your-handle",
  location: "City, Country",
},
```

### Hero stats (animated counters)

```js
stats: [
  { value: 5,   suffix: "+", label: "Years Exp" },
  { value: 10,  suffix: "",  label: "Projects"  },
],
```

### Experience

Each entry in the `experience` array becomes an expandable timeline card.

```js
experience: [
  {
    company:  "Company Name",
    logo:     "./assets/company-logo.png",   // 1:1 image, ~100px
    role:     "Your Role",
    location: "City",
    start:    "Jan 2022",
    end:      "Present",
    current:  true,     // shows "Current" badge
    duration: "",       // shown when current: false, e.g. "1 yr 6 mo"
    bullets: [
      "Bullet one with <strong>bold metric</strong>.",
      "Bullet two.",
    ],
  },
],
```

> **Broken logo?** If the image file is missing or the format unsupported (e.g. `.avif`), the card automatically shows a styled fallback with the company's first letter.

### Skills

```js
skills: [
  {
    label: "Category Name",
    icon:  "⚡",
    type:  "sf",          // controls tag colour: sf | cloud | dev | prog | soft
    items: ["Skill A", "Skill B"],
  },
],
```

### Certifications

```js
certifications: [
  { icon: "🏅", name: "Cert Name", date: "Month Year", isNew: false },
  { icon: "🤖", name: "New Cert",  date: "Jan 2025",   isNew: true  },
],
```

### Education

```js
education: [
  {
    image:       "./assets/university-logo.jpg",
    degree:      "B.Tech — Computer Science",
    institution: "University Name",
    year:        "May 2019",
    description: "Relevant coursework description.",
  },
],
```

### Summary page cards & achievements

```js
summaryCards: [
  { image: "./assets/card-image.jpg", title: "Card Title", body: "Card body HTML." },
],

achievements: [
  { value: "~40%", label: "Description of the achievement" },
],
```

---

## Theme toggle

The toggle button in the nav bar cycles through three modes:

| Mode | Icon | Behaviour |
|------|------|-----------|
| Auto | monitor | Follows OS/browser dark-mode preference |
| Light | sun | Forces light theme |
| Dark | moon | Forces dark theme |

The chosen preference is saved in `localStorage` and restored on next visit. Default is **Auto** (matches browser).

---

## Assets

Place all images in the `assets/` folder:

| File | Used for |
|------|----------|
| `rahul.jpg` / your photo | Avatar in hero |
| `company-name.png` | Experience timeline logo |
| `university.jpg` | Education card image |
| `professional-summary.jpg` | Summary page card |
| `leadership.jpg` | Summary page card |
| `expertise.jpg` | Summary page card |
| `certificates.jpg` | Summary page card |

Recommended sizes: **avatar** 400×400px · **company logos** 100×100px · **summary cards** 800×450px (16:9).

---

## File structure

```
├── index.html          # Home / hero page shell
├── summary.html        # Summary page shell
├── experience.html     # Experience page shell
├── education.html      # Education & certifications page shell
├── config.js           # ← Edit this file to personalise everything
├── css/
│   └── style.css       # All styles (Netflix dark theme + light mode)
├── js/
│   └── script.js       # Rendering engine — reads CONFIG, builds all pages
└── assets/             # Your images go here
```

---

## No build required

This is a pure HTML/CSS/JS site. No npm, no webpack, no framework. Drop it on any static host:

- **GitHub Pages** — push to `main`, enable Pages in repo settings → Source: main / root
- **Netlify / Vercel** — drag-and-drop the folder
- **Cloudflare Pages** — connect repo, build command: none, publish directory: `/`

---

## Credits

Fonts: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) + [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts.  
Icons: inline SVG (no external CDN dependency).
