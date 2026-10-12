# 🐉 Lucky Harvey — Craftsmanship Series Silver Dragon (LH/S/DN-32)

> **Ultra-Luxury Single-Page Product Launch Showcase**  

---

## 📸 Visual Previews

### 1. Hero Showcase — 360° Horological Continuous Loop
![Hero Showcase](assets/screenshots/hero_showcase.png)

### 2. Lore & Craftsmanship — Calibre Cinematics Loop
![Lore & Craftsmanship Showcase](assets/screenshots/craftsmanship_lore.png)

### 3. Technical Specifications — Precision Bento Grid
![Technical Specifications Bento Grid](assets/screenshots/technical_specs_bento.png)

---

## ✨ Key Features

- **Continuous 360° Horological Orbit (Hero)**:
  - 240-frame pre-rendered image sequence (`assets/herosection/`) rendered on an optimized HTML5 `<canvas>`.
  - Seamless auto-looping animation engine ticking at a cinematic 25 FPS (~40ms per frame) via `requestAnimationFrame`.
  - Progressive batch preloading (20 frames/batch) with instantaneous first-frame render and zero canvas flicker.
  - Zero clutter: completely unconventional luxury statement layout with no intrusive buttons or aggressive CTAs.

- **Calibre Cinematics Loop (Lore & Craftsmanship)**:
  - 300-frame macro mechanical sequence (`assets/secondsection/`) showcasing internal calibre escapement and micro-engraved details in a continuous loop.
  - Asymmetrical editorial layout pairing mythological cultural symbolism with authentic horological details.

- **Celestial Stardust Background Engine**:
  - Pure JavaScript 2D canvas drawing subtle orbital arcs, glowing golden nebulae, and twinkling stardust particles.

- **Ambient Spotlight Cursor Follower**:
  - Smooth inertial cursor-following ambient illumination spotlight adding physical tactile depth.

- **Architectural Bento Grid Specifications**:
  - Interactive micro-tilt 3D perspective hover cards featuring exact dimensions, mass, calibre metrics, and crystal materials.

---

## 🛠️ Technology Stack

| Layer | Technology | Description |
|---|---|---|
| **Structure** | Semantic HTML5 | Accessible, SEO-optimized markup with clear hierarchy and schema |
| **Styling** | Modern Vanilla CSS3 | Custom design system, CSS custom properties (tokens), Glassmorphism (`backdrop-filter`), Responsive CSS Grid & Flexbox |
| **Typography** | Google Fonts | `Cinzel Decorative` (Haute Display), `Cormorant Garamond` (Editorial Serif), `Plus Jakarta Sans` (Precision Sans) |
| **Animation Engine** | Vanilla JavaScript (ES6+) | `requestAnimationFrame` render loop, Canvas 2D image scaling, batch asset preloader |
---

## 📁 Project Structure

```plaintext
Animated Website/
├── assets/
│   ├── herosection/                # 240 PNG frames for 360° watch showcase (001 - 240)
│   ├── secondsection/              # 300 PNG frames for Calibre kinematics loop (001 - 300)
│   ├── images/                     # Studio photographs & macro assets
│   │   ├── case_strap_profile.jpg
│   │   ├── dragon_gold_bead.jpg
│   │   ├── lucky_harvey_dragon_real.jpg
│   │   └── silver_dragon_hero.jpg
│   └── screenshots/                # Showcase preview captures for documentation
│       ├── hero_showcase.png
│       ├── craftsmanship_lore.png
│       └── technical_specs_bento.png
├── scripts/
│   └── main.js                     # Canvas loop engines, audio synth, cursor FX, modal
├── styles/
│   └── main.css                    # Luxury dark design tokens, bento grid, glassmorphism
├── .gitignore                      # Git ignore rules for clean repository
├── index.html                      # Single-page application entry point
└── README.md                       # Project documentation & deployment manual
```

---

## 🚀 Getting Started Locally

Because this project loads sequential image frames over HTTP for canvas rendering, run it using a local HTTP server to avoid browser `file://` CORS restrictions.

### Option 1: Python Built-in Server (Recommended)
```bash
# In the project directory:
python -m http.server 8080
```
Then visit **`http://localhost:8080`** in your browser.

### Option 2: Node.js (npx serve or live-server)
```bash
# Using npx serve:
npx serve .

# Or using Live Server:
npx live-server
```

### Option 3: VS Code Live Server
1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---
