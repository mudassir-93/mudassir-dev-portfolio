# Mudassir Mazhar — Portfolio Website

A futuristic, dark-themed personal portfolio built with **Vue 3 + Vite**.

## Tech Stack

- **Vue 3** (Composition API)
- **Vue Router 4** (multi-page SPA)
- **Vite 5** (lightning-fast dev server + build)
- **CSS Variables** (design system)
- **Google Fonts** (Outfit + Space Mono)
- Zero heavy dependencies — pure Vue + CSS animations

---

## Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── css/
│   │       └── global.css        # Design system, animations, utilities
│   ├── components/
│   │   ├── NavBar.vue             # Sticky navbar with mobile hamburger menu
│   │   └── FooterBar.vue          # Footer with links + socials
│   ├── router/
│   │   └── index.js               # Vue Router config (6 routes)
│   ├── views/
│   │   ├── Home.vue               # Hero, stats, highlights
│   │   ├── About.vue              # Bio, profile card, values
│   │   ├── Skills.vue             # Skill categories + proficiency bars
│   │   ├── Projects.vue           # Filterable project cards
│   │   ├── Experience.vue         # Timeline, education, achievements
│   │   └── Contact.vue            # Contact form + info
│   ├── App.vue                    # Root: cursor, navbar, router-view, footer
│   └── main.js                    # App entry point
├── index.html                     # SEO meta + font imports
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** v18+ (download: https://nodejs.org)
- **npm** v9+ (comes with Node)

### 1. Install dependencies

```bash
cd portfolio
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open your browser at: **http://localhost:5173**

### 3. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy.

### 4. Preview production build locally

```bash
npm run preview
```

---

## Deployment

### Option A — Netlify (Recommended, free)

1. Go to https://netlify.com and sign up
2. Drag and drop the `dist/` folder onto the Netlify dashboard, OR
3. Connect your GitHub repo and set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### Option B — Vercel (Free)

1. Go to https://vercel.com and sign up
2. Import your GitHub repo
3. Vercel auto-detects Vite — just click **Deploy**

### Option C — GitHub Pages

1. Install the deploy plugin:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json` scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Update `vite.config.js` base:
   ```js
   base: '/your-repo-name/'
   ```
4. Run:
   ```bash
   npm run build && npm run deploy
   ```

### Option D — Hostinger / cPanel shared hosting

1. Run `npm run build`
2. Upload the contents of `dist/` to your `public_html/` folder
3. Add a `.htaccess` file in `public_html/` with:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
   *(This ensures Vue Router works correctly on page refresh)*

---

## Customization

To update your personal information, edit these files:

| What to change | File |
|---|---|
| Hero text, stats | `src/views/Home.vue` |
| Bio, info items | `src/views/About.vue` |
| Skills & proficiency | `src/views/Skills.vue` |
| Project cards | `src/views/Projects.vue` |
| Experience & education | `src/views/Experience.vue` |
| Contact details | `src/views/Contact.vue` |
| Accent color | `src/assets/css/global.css` → `--accent` |

---

## Features

- ✅ Custom animated cursor (desktop)
- ✅ Scroll-triggered reveal animations
- ✅ Typing animation (hero section)
- ✅ Floating badge animations
- ✅ Animated grid background + orbs
- ✅ Marquee tech stack strip
- ✅ Animated skill proficiency bars
- ✅ Filterable project grid
- ✅ Interactive contact form (mailto)
- ✅ Fully responsive (mobile + desktop)
- ✅ SEO meta tags on every page
- ✅ Smooth page transitions
- ✅ Mobile hamburger menu

---

Built with ❤️ for Mudassir Mazhar
