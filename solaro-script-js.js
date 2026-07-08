/**
 * SOLARO — Premium Film Technology
 * Application Script
 * 
 * Libraries (loaded via CDN in index.html):
 * - GSAP 3 + ScrollTrigger
 * - Lenis smooth scroll
 */

// ═══════════════════════════════════════════════════
// I18N DICTIONARY
// ═══════════════════════════════════════════════════
const I18N = {
  ja: {
    'nav-home':'ホーム','nav-arch':'アーキテクチュラル','nav-auto':'Automotive','nav-pdlc':'PDLC','nav-safety':'セーフティ','nav-contact':'お問い合わせ',
    'hero-tag':'プレミアムフィルム。日本から。','hero-scroll':'スクロール',
    'glass-0':'クリア','glass-1':'IRX™ セラミック','glass-2':'CarbonX™ カーボン','glass-3':'リフレクティブ','glass-4':'フローズン','glass-5':'PDLC スイッチフィルム',
    'glass-state-0':'CLEAR','glass-state-1':'CERAMIC','glass-state-2':'CARBON','glass-state-3':'REFLECTIVE','glass-state-4':'FROST','glass-state-5':'PDLC',
    'heat-bar':'太陽熱遮蔽率 最大93%','uv-label':'UV 遮蔽率','met-uv':'UV 遮蔽','met-ir':'IR 遮蔽','met-glare':'まぶしさ低減',
    'cat-arch':'アーキテクチュラル・フィルム','cat-arch-desc':'既存のガラスを、高性能なフィルムで強化。日本の技術。',
    'cat-auto':'Automotive','cat-auto-desc':'プレミアム車両用の窓フィルム。熱と紫外線から守る。',
    'cat-safety':'セーフティ＆セキュリティ','cat-safety-desc':'破片保持。防衝擊。既存ガラスの安全性を向上。',
    'cat-deco':'デコラティブ・フィルム','cat-deco-desc':'デザインとプライバシー。光を通す。',
    'cat-smart':'PDLC スイッチフィルム','cat-smart-desc':'PDLC技術。透明度を電気制御。既存ガラスに貼付。',
    'cta-head':'フィルムで、別次元へ。','cta-btn':'お問い合わせ',
    'wa-msg':'SOLAROフィルムについてご相談があります。',
    'arch-hero-tag':'建築とインテリアのためのプレミアムフィルム。','arch-cta':'あなたの空間。別次元へ。',
    'auto-hero-tag':'プレミアムautomotiveフィルム。日本から。','auto-cta':'あなたの車。別次元へ。',
    'pdlc-hero-tag':'既存ガラス用のスイッチPDLCフィルム。','pdlc-cta':'オンデマンドプライバシー。',
    'safety-hero-tag':'ガラス用のセーフティ＆セキュリティフィルム。','safety-cta':'持続する保護。',
    'contact-hero-tag':'プロジェクトについてお話を。',
    'footer-social':'ソーシャル','footer-distributors':'グローバル卸売パートナー','footer-contact':'お問い合わせ','footer-email':'Email','footer-phone':'Phone',
    'dist-mx':'Mexico — VITRA Polarizados','dist-us':'United States — SOLARO West','dist-ca':'Canada — Northline Films',
    'dist-es':'Spain — Luz Clara Studio','dist-fr':'France — Maison Solaire','dist-jp':'Japan — Hikari Film Co.',
    'dist-au':'Australia — Southern Glass Films','dist-ae':'United Arab Emirates — Desert Light Films',
    'dist-br':'Brazil — Brava Film Group','dist-cl':'Chile — Andes Solar Films'
  },
  es: {
    'nav-home':'Inicio','nav-arch':'Arquitectónica','nav-auto':'Automotriz','nav-pdlc':'PDLC','nav-safety':'Seguridad','nav-contact':'Contacto',
    'hero-tag':'Tecnología de película premium. Desde Japón.','hero-scroll':'Desplaza',
    'glass-0':'CLEAR','glass-1':'IRX™ Cerámica','glass-2':'CarbonX™ Carbono','glass-3':'Reflectivo','glass-4':'Frost','glass-5':'PDLC Switch Film',
    'glass-state-0':'CLARO','glass-state-1':'CERÁMICA','glass-state-2':'CARBONO','glass-state-3':'REFLECTIVO','glass-state-4':'FROST','glass-state-5':'PDLC',
    'heat-bar':'Rechazo de calor solar hasta 93%','uv-label':'BLOQUEO UV','met-uv':'BLOQUEO UV','met-ir':'RECHAZO IR','met-glare':'REDUCCIÓN BRILLO',
    'cat-arch':'Películas Arquitectónicas','cat-arch-desc':'Refuerza el vidrio existente con película térmica premium. Ingeniería japonesa.',
    'cat-auto':'Películas Automotrices','cat-auto-desc':'Película para vehículos premium. Protección térmica y UV.',
    'cat-safety':'Seguridad y Protección','cat-safety-desc':'Retención de fragmentos. Resistencia al impacto. Seguridad para vidrio existente.',
    'cat-deco':'Películas Decorativas','cat-deco-desc':'Diseño y privacidad. Luz natural.',
    'cat-smart':'Película PDLC Switchable','cat-smart-desc':'Tecnología PDLC. Transparencia controlada por electricidad. Se instala sobre vidrio existente.',
    'cta-head':'Tu vidrio. Otra categoría.','cta-btn':'Cotizar por WhatsApp',
    'wa-msg':'Hola, me interesa la película premium SOLARO.',
    'arch-hero-tag':'Películas premium para arquitectura e interiores.','arch-cta':'Tu espacio. Otra categoría.',
    'auto-hero-tag':'Película automotriz premium. Desde Japón.','auto-cta':'Tu vehículo. Otra categoría.',
    'pdlc-hero-tag':'Película PDLC switchable para vidrio existente.','pdlc-cta':'Privacidad bajo demanda.',
    'safety-hero-tag':'Películas de seguridad para vidrio.','safety-cta':'Protección que perdura.',
    'contact-hero-tag':'Hablemos de tu proyecto.',
    'footer-social':'Redes Sociales','footer-distributors':'Distribuidores Globales','footer-contact':'Contacto','footer-email':'Email','footer-phone':'Teléfono',
    'dist-mx':'Mexico — VITRA Polarizados','dist-us':'United States — SOLARO West','dist-ca':'Canada — Northline Films',
    'dist-es':'Spain — Luz Clara Studio','dist-fr':'France — Maison Solaire','dist-jp':'Japan — Hikari Film Co.',
    'dist-au':'Australia — Southern Glass Films','dist-ae':'United Arab Emirates — Desert Light Films',
    'dist-br':'Brazil — Brava Film Group','dist-cl':'Chile — Andes Solar Films'
  },
  en: {
    'nav-home':'Home','nav-arch':'Architectural','nav-auto':'Automotive','nav-pdlc':'PDLC','nav-safety':'Safety','nav-contact':'Contact',
    'hero-tag':'Premium film technology. From Japan.','hero-scroll':'Scroll',
    'glass-0':'Clear','glass-1':'IRX™ Ceramic','glass-2':'CarbonX™ Carbon','glass-3':'Reflective','glass-4':'Frost','glass-5':'PDLC Switch Film',
    'glass-state-0':'CLEAR','glass-state-1':'CERAMIC','glass-state-2':'CARBON','glass-state-3':'REFLECTIVE','glass-state-4':'FROST','glass-state-5':'PDLC',
    'heat-bar':'Solar heat rejection up to 93%','uv-label':'UV BLOCKING','met-uv':'UV BLOCKING','met-ir':'IR REJECTION','met-glare':'GLARE REDUCTION',
    'cat-arch':'Architectural Films','cat-arch-desc':'Enhance existing glass with premium thermal film. Japanese engineering.',
    'cat-auto':'Automotive Films','cat-auto-desc':'Window film for premium vehicles. Thermal and UV protection.',
    'cat-safety':'Safety & Security Films','cat-safety-desc':'Shatter retention. Impact resistance. Safety for existing glass.',
    'cat-deco':'Decorative Films','cat-deco-desc':'Design and privacy. Natural light.',
    'cat-smart':'PDLC Smart Film','cat-smart-desc':'PDLC technology. Electrically controlled transparency. Installs on existing glass.',
    'cta-head':'Your glass. Another category.','cta-btn':'Get a quote on WhatsApp',
    'wa-msg':'Hi, I\'m interested in SOLARO premium film.',
    'arch-hero-tag':'Premium films for architecture and interiors.','arch-cta':'Your space. Another category.',
    'auto-hero-tag':'Premium automotive window film. From Japan.','auto-cta':'Your vehicle. Another category.',
    'pdlc-hero-tag':'Switchable PDLC film for existing glass.','pdlc-cta':'Privacy on demand.',
    'safety-hero-tag':'Safety and security films for glass.','safety-cta':'Protection that lasts.',
    'contact-hero-tag':'Let\'s talk about your project.',
    'footer-social':'Social','footer-distributors':'Global Distributors','footer-contact':'Contact','footer-email':'Email','footer-phone':'Phone',
    'dist-mx':'Mexico — VITRA Polarizados','dist-us':'United States — SOLARO West','dist-ca':'Canada — Northline Films',
    'dist-es':'Spain — Luz Clara Studio','dist-fr':'France — Maison Solaire','dist-jp':'Japan — Hikari Film Co.',
    'dist-au':'Australia — Southern Glass Films','dist-ae':'United Arab Emirates — Desert Light Films',
    'dist-br':'Brazil — Brava Film Group','dist-cl':'Chile — Andes Solar Films'
  }
};

// ═══════════════════════════════════════════════════
// LANGUAGE SYSTEM
// ═══════════════════════════════════════════════════
let curLang = 'en';
let userChoseLang = false;

function setLang(lang) {
  if (lang === curLang) return;
  curLang = lang;
  document.documentElement.lang = lang;
  document.body.setAttribute('data-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang]?.[key]) {
      const currentText = el.textContent;
      const newText = I18N[lang][key];
      if (currentText === newText) return;
      gsap.to(el, {
        opacity: 0, duration: 0.15, ease: 'power2.out',
        onComplete: () => {
          el.textContent = newText;
          gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
        }
      });
    }
  });

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  updateWA();
  if (userChoseLang) {
    try { localStorage.setItem('solaro-lang', lang); } catch(e) {}
  }
}

function updateWA() {
  const m = encodeURIComponent(I18N[curLang]?.['wa-msg'] || I18N.en['wa-msg']);
  document.getElementById('waFloat').href = `https://wa.me/523312345678?text=${m}`;
}

function openWA() {
  const m = encodeURIComponent(I18N[curLang]?.['wa-msg'] || I18N.en['wa-msg']);
  window.open(`https://wa.me/523312345678?text=${m}`, '_blank');
}

// ═══════════════════════════════════════════════════
// PAGE NAVIGATION
// ═══════════════════════════════════════════════════
function switchPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    }
  }
  document.querySelectorAll('.nav-page-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });
  window.history.replaceState(null, '', '#' + pageId);
}

// ═══════════════════════════════════════════════════
// COUNTRY → LANGUAGE MAPPING
// ═══════════════════════════════════════════════════
const COUNTRY_MAP = {
  MX:'es', ES:'es', AR:'es', BO:'es', BR:'es', CL:'es', CO:'es', CR:'es',
  CU:'es', DO:'es', EC:'es', SV:'es', GT:'es', HN:'es', PY:'es', PE:'es',
  PR:'es', UY:'es', VE:'es', PA:'es', NI:'es', BZ:'es', GQ:'es',
  JP:'ja',
  US:'en', CA:'en', GB:'en', AU:'en', NZ:'en', IE:'en', ZA:'en', IN:'en',
  PH:'en', SG:'en', MY:'en'
};

// ═══════════════════════════════════════════════════
// LANGUAGE DETECTION
// ═══════════════════════════════════════════════════
(async function detectLanguage() {
  // 1. Saved preference
  try {
    const saved = localStorage.getItem('solaro-lang');
    if (saved && ['ja','es','en'].includes(saved)) { setLang(saved); return; }
  } catch(e) {}

  // 2. IP geolocation (1.5s timeout)
  try {
    const ctrl = new AbortController();
    setTimeout(() => ctrl.abort(), 1500);
    const resp = await fetch('https://ipapi.co/json/', { signal: ctrl.signal });
    const data = await resp.json();
    if (data.country_code) {
      const lang = COUNTRY_MAP[data.country_code] || 'en';
      setLang(lang);
      return;
    }
  } catch(e) {}

  // 3. Browser locale
  const navLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (navLang.startsWith('ja')) { setLang('ja'); return; }
  if (navLang.startsWith('es')) { setLang('es'); return; }

  // 4. Fallback
  setLang('en');
})();

// ═══════════════════════════════════════════════════
// ANIMATION HELPER
// ═══════════════════════════════════════════════════
function animateNum(el, from, to, dur) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { el.textContent = to; return; }
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(from + (to - from) * ease);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ═══════════════════════════════════════════════════
// MAIN INITIALIZATION
// ═══════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

  // Initialize with English defaults
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N.en[key]) el.textContent = I18N.en[key];
  });

  // Handle URL hash on load
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById('page-' + hash)) {
    switchPage(hash);
  }

  // Bind all language buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => {
      userChoseLang = true;
      setLang(b.dataset.lang);
    });
  });

  // Page navigation
  document.querySelectorAll('.nav-page-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetPage = link.dataset.page;
      switchPage(targetPage);
    });
  });

  // ─── LENIS SMOOTH SCROLL ───
  const lenis = new Lenis({
    duration: 1.4,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });
  window.lenis = lenis;

  function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);

  // ─── GSAP ───
  gsap.registerPlugin(ScrollTrigger);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ─── HERO ANIMATION ───
  const heroTl = gsap.timeline({ delay: 0.2 });
  heroTl.fromTo('#heroContent', { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1.6, ease: 'power2.out' })
    .fromTo('#heroLine', { height: 0 }, { height: 60, duration: 1, ease: 'power2.out' }, '-=0.8')
    .fromTo('.hero-scroll-hint', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.4');

  // Hero parallax (desktop)
  if (!reduced && window.innerWidth > 768) {
    const glow = document.getElementById('heroGlow');
    document.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to(glow, { x, y, duration: 1.2, ease: 'power2.out' });
    });
  }

  // ─── SCROLL PROGRESS DOTS ───
  const sections = ['hero','glass-seq','heat','uv','privacy','products','metrics','cta'];
  const progressEl = document.getElementById('scrollProgress');
  sections.forEach(id => {
    const dot = document.createElement('div');
    dot.className = 'scroll-dot';
    dot.dataset.section = id;
    progressEl.appendChild(dot);
  });

  // ─── NAV SHOW/HIDE ───
  const nav = document.getElementById('navPill');
  let lastY = 0, navUp = true;
  lenis.on('scroll', ({ scrollY }) => {
    if (scrollY > 100) {
      if (!nav.classList.contains('show')) { nav.classList.add('show'); nav.classList.remove('hide'); }
      if (scrollY > lastY && navUp) { nav.classList.add('hide'); navUp = false; }
      else if (scrollY < lastY && !navUp) { nav.classList.remove('hide'); navUp = true; }
    } else {
      nav.classList.remove('show'); nav.classList.add('hide');
    }
    lastY = scrollY;

    // Update scroll dots
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const dot = progressEl.querySelector(`[data-section="${id}"]`);
        if (dot) dot.classList.toggle('active', rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5);
      }
    });
  });

  // ─── CURSOR SPOT ───
  const spot = document.getElementById('cursorSpot');
  if (window.innerWidth > 768 && !reduced) {
    document.addEventListener('mousemove', e => {
      gsap.to(spot, { left: e.clientX, top: e.clientY, duration: 0.6, ease: 'power2.out' });
    });
  } else { spot.style.display = 'none'; }

  // ═══════════════════════════════════════════════════
  // GLASS TRANSFORMATION SEQUENCE
  // ═══════════════════════════════════════════════════
  const states = [
    { name: 'glass-state-0', tint: 0, refl: 'rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 50%', frost: 0, pdlc: 0, specular: 0.05 },
    { name: 'glass-state-1', tint: 0.08, refl: 'rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 50%', frost: 0, pdlc: 0, specular: 0.08 },
    { name: 'glass-state-2', tint: 0.35, refl: 'rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 50%', frost: 0, pdlc: 0, specular: 0.06 },
    { name: 'glass-state-3', tint: 0.25, refl: 'rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.04) 100%', frost: 0, pdlc: 0, specular: 0.15 },
    { name: 'glass-state-4', tint: 0.1, refl: 'rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 50%', frost: 8, pdlc: 0, specular: 0.04 },
    { name: 'glass-state-5', tint: 0.05, refl: 'rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 50%', frost: 2, pdlc: 1, specular: 0.1 }
  ];

  const stops = [0, 0.18, 0.36, 0.54, 0.72, 0.9];
  const labelKeys = ['glass-0','glass-1','glass-2','glass-3','glass-4','glass-5'];
  const stateKeys = ['glass-state-0','glass-state-1','glass-state-2','glass-state-3','glass-state-4','glass-state-5'];

  const gTint = document.getElementById('glassTint');
  const gRefl = document.getElementById('glassReflection');
  const gFrost = document.getElementById('glassFrost');
  const gPdlc = document.getElementById('glassPdlc');
  const gSpec = document.getElementById('glassSpecular');
  const gLabel = document.getElementById('glassLabel');
  const gStateName = document.getElementById('glassStateName');

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

  if (!reduced) {
    ScrollTrigger.create({
      trigger: '.glass-sequence',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.glass-sequence-inner',
      pinSpacing: true,
      scrub: 0.8,
      onUpdate: function(self) {
        const p = Math.max(0, Math.min(1, self.progress));
        let idx = 0;
        for (let i = stops.length - 1; i >= 0; i--) { if (p >= stops[i]) { idx = i; break; } }
        const next = Math.min(idx + 1, states.length - 1);
        const seg = stops[next] - stops[idx] || 1;
        const t = (p - stops[idx]) / seg;
        const lerp = (a, b) => a + (b - a) * t;

        const s = states[idx], s2 = states[next];
        gTint.style.background = `rgba(42,43,45,${lerp(s.tint, s2.tint)})`;
        gFrost.style.backdropFilter = `blur(${lerp(s.frost, s2.frost)}px)`;
        gFrost.style.webkitBackdropFilter = `blur(${lerp(s.frost, s2.frost)}px)`;
        gPdlc.style.opacity = lerp(s.pdlc, s2.pdlc);
        gPdlc.classList.toggle('active', lerp(s.pdlc, s2.pdlc) > 0.3);
        gSpec.style.opacity = lerp(s.specular, s2.specular);

        const key = labelKeys[idx];
        gLabel.textContent = I18N[curLang]?.[key] || I18N.en[key];

        const stateKey = stateKeys[idx];
        gStateName.textContent = I18N[curLang]?.[stateKey] || I18N.en[stateKey];
        gStateName.style.opacity = Math.sin(t * Math.PI) * 0.5;

        // Mouse-reactive reflection
        const glass = document.getElementById('mainGlass');
        if (glass) {
          const rect = glass.getBoundingClientRect();
          const cx = (mouseX / window.innerWidth - 0.5) * rect.width * 0.3;
          const cy = (mouseY / window.innerHeight - 0.5) * rect.height * 0.3;
          gRefl.style.background = `radial-gradient(ellipse at ${50 + cx/rect.width*100}% ${50 + cy/rect.height*100}%, rgba(255,255,255,${0.04 + lerp(s.specular, s2.specular)}) 0%, transparent 60%), linear-gradient(135deg, ${s.refl})`;
        }
      }
    });
  } else {
    ScrollTrigger.create({
      trigger: '.glass-sequence', start: 'top top', end: 'bottom bottom',
      pin: '.glass-sequence-inner', pinSpacing: true
    });
  }

  // ─── HEAT SECTION ───
  if (!reduced) {
    const heatTl = gsap.timeline({
      scrollTrigger: { trigger: '.heat-section', start: 'top 60%', end: 'bottom 40%', scrub: 1 }
    });
    heatTl.to('.heat-ray', { opacity: 0.5, duration: 0.3, stagger: 0.05 })
           .to('#heatBarFill', { width: '93%', duration: 0.5 }, 0.4);

    ScrollTrigger.create({
      trigger: '.heat-section', start: 'top 60%', end: 'bottom 40%', scrub: 1,
      onUpdate: function(self) {
        const temp = Math.round(38 - (38 - 24) * self.progress);
        document.getElementById('heatTemp').textContent = temp + '°C';
      }
    });
  } else {
    document.querySelectorAll('.heat-ray').forEach(r => r.style.opacity = 0);
    document.getElementById('heatBarFill').style.width = '93%';
    document.getElementById('heatTemp').textContent = '24°C';
  }

  // ─── UV SECTION ───
  if (!reduced) {
    ScrollTrigger.create({
      trigger: '.uv-section', start: 'top 50%', end: 'bottom 50%', scrub: 1,
      onUpdate: function(self) {
        document.getElementById('uvBlockLine').style.opacity = Math.min(1, self.progress * 3);
        const val = Math.round(99 * Math.min(1, self.progress * 1.5));
        document.getElementById('uvNumber').textContent = val;
      }
    });
  } else {
    document.getElementById('uvBlockLine').style.opacity = 1;
    document.getElementById('uvNumber').textContent = '99';
  }

  // ─── PRIVACY SECTION ───
  if (!reduced) {
    ScrollTrigger.create({
      trigger: '.privacy-section', start: 'top 40%', end: 'bottom 40%', scrub: 1,
      onUpdate: function(self) {
        const darkness = Math.min(0.85, self.progress * 2);
        document.getElementById('privacyDarkness').style.background = `rgba(18,19,20,${darkness})`;
        if (self.progress > 0.6) {
          document.getElementById('privacyGlass').classList.add('flipped');
        } else {
          document.getElementById('privacyGlass').classList.remove('flipped');
        }
      }
    });
  }

  // ─── METRICS COUNT UP ───
  if (!reduced) {
    document.querySelectorAll('.metric-val').forEach(el => {
      const target = parseInt(el.dataset.target);
      ScrollTrigger.create({
        trigger: el, start: 'top 80%', once: true,
        onEnter: () => animateNum(el, 0, target, 2000)
      });
    });
    document.querySelectorAll('.metric-bar-fill').forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: 'top 85%', once: true,
        onEnter: () => { el.style.width = el.dataset.fill + '%'; }
      });
    });
  } else {
    document.querySelectorAll('.metric-val').forEach(el => el.textContent = el.dataset.target);
    document.querySelectorAll('.metric-bar-fill').forEach(el => el.style.width = el.dataset.fill + '%');
  }

  // ─── PRODUCT CATEGORIES REVEAL ───
  document.querySelectorAll('.product-cat').forEach(sec => {
    const name = sec.querySelector('.product-cat-name');
    const desc = sec.querySelector('.product-cat-desc');
    const glass = sec.querySelector('.product-cat-glass');

    if (!reduced) {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sec, start: 'top 65%', end: 'top 30%', scrub: 1 }
      });
      if (name) tl.fromTo(name, { opacity: 0, x: -60 }, { opacity: 1, x: 0 });
      if (desc) tl.fromTo(desc, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.3');
      if (glass) tl.fromTo(glass, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, '-=0.4');
    } else {
      if (name) { name.style.opacity = 1; name.style.transform = 'none'; }
      if (desc) { desc.style.opacity = 1; desc.style.transform = 'none'; }
      if (glass) { glass.style.opacity = 1; glass.style.transform = 'none'; }
    }
  });

  // ─── CTA REVEAL ───
  if (!reduced) {
    gsap.fromTo('.cta-giant', { opacity: 0, y: 80, scale: 0.95 }, {
      opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power2.out',
      scrollTrigger: { trigger: '.cta-section', start: 'top 60%' }
    });
    gsap.fromTo('.cta-btn', { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.3,
      scrollTrigger: { trigger: '.cta-section', start: 'top 60%' }
    });
  }

  // ─── ENVIRONMENT PARALLAX ───
  if (!reduced && window.innerWidth > 768) {
    document.querySelectorAll('.env-interior').forEach(el => {
      gsap.to(el, {
        y: -40,
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1 }
      });
    });
  }

  // Initialize WhatsApp link
  updateWA();
});