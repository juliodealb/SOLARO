# SOLARO — Premium Film Technology

## Project Structure

```
solaro/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # Application logic
├── assets/             # Static assets (add images, icons here)
│   └── .gitkeep
├── images/             # Images directory
│   └── .gitkeep
├── favicon.ico         # Add your favicon
└── README.md           # This file
```

## Quick Start

### Local Development
```bash
# Any static server works
npx serve .
# or
python3 -m http.server 8080
# or
npx http-server .
```

Open `http://localhost:8080`

### Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/solaro.git
git push -u origin main

# In GitHub Settings → Pages → Source: main branch
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
# Follow prompts, set root directory to project folder
```

### Deploy to Netlify
```bash
# Drag and drop the entire folder to app.netlify.com/drop
# or
npm i -g netlify-cli
netlify deploy --prod --dir=.
```

## Customization

### Change WhatsApp Number
Edit `script.js` → `updateWA()` and `openWA()`:
```javascript
// Replace 523312345678 with your number
document.getElementById('waFloat').href = `https://wa.me/YOUR_NUMBER?text=${m}`;
```

### Change Languages
Edit `I18N` dictionary in `script.js`. All visible text is controlled from there.

### Add Distributors
In `index.html` footer, add more `footer-dist-item` divs:
```html
<div class="footer-dist-item" data-i18n="dist-your-code">Your Country — Distributor Name</div>
```
Then add the translation key to all three languages in `script.js`.

### Add Images
Place images in `/images/` and reference them in CSS:
```css
background-image: url('/images/your-image.webp');
```

## Libraries (CDN)
- **GSAP 3.12.5** — Animation engine + ScrollTrigger
- **Lenis 1.1.18** — Smooth scrolling
- **Google Fonts** — Bebas Neue, DM Sans, Noto Sans JP, Space Mono

## Browser Support
Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
Requires `backdrop-filter` support for glass effects.

## Performance
- Zero external images (all CSS-generated visuals)
- Fonts loaded with `font-display: swap`
- Animations use `transform` and `opacity` only
- `will-change` used sparingly
- `prefers-reduced-motion` respected