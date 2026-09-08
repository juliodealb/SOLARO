/* ═══════════════════════════════════════════════════════════════
   SOLARO — Lógica del sitio
   Renderiza el catálogo desde products.js, maneja idioma, ficha
   técnica, filtros y el cotizador de WhatsApp.
   ═══════════════════════════════════════════════════════════════ */

/* ─── Textos de interfaz (los datos de producto viven en products.js) ─── */
const I18N = {
  es: {
    'skip': 'Saltar al catálogo',
    'nav-cat': 'Catálogo', 'nav-comp': 'Comparativa', 'nav-apps': 'Aplicaciones',
    'nav-dist': 'Distribuidores', 'nav-quote': 'Cotizar',
    'hero-tag': 'Películas de alto desempeño para vidrio arquitectónico y automotriz. Control solar, privacidad y tecnología switchable.',
    'hero-cta1': 'Ver catálogo', 'hero-cta2': 'Pedir cotización',
    'm-uv': 'Bloqueo UV', 'm-lines': 'Tonos cerámicos', 'm-roll': 'Ancho máximo', 'm-dist': 'Países con distribuidor',
    'eb-cat': 'Catálogo',
    'cat-title': 'Cinco líneas. Un criterio para cada vidrio.',
    'cat-lead': 'Cada línea resuelve un problema distinto: calor sin oscurecer, privacidad, fachada con sol directo, o transparencia controlada. Todo se surte por pedido, a la medida del proyecto.',
    'eb-comp': 'Comparativa', 'comp-title': 'Todo el catálogo, lado a lado.',
    'comp-lead': 'Los datos que ya están verificados. Los valores térmicos se publican cuando tengamos el reporte de laboratorio.',
    'eb-apps': 'Aplicaciones', 'apps-title': '¿Cuál va en tu proyecto?',
    'eb-why': 'Por qué SOLARO', 'why-title': 'Cómo trabajamos.',
    'why1-t': 'Pedido a la medida', 'why1-d': 'No manejamos catálogo cerrado. Se cotiza y se surte según los metros y el tono que pide tu proyecto.',
    'why2-t': 'Asesoría en la selección', 'why2-d': 'Te ayudamos a elegir el tono correcto según orientación de fachada, tipo de vidrio y uso del espacio.',
    'why3-t': 'Anchos especiales', 'why3-d': 'El estándar es 1.52 m. Todas las películas se pueden pedir en 1.80 m para ventanales grandes, sin uniones a la vista.',
    'why4-t': 'Trato directo', 'why4-d': 'Hablas con quien surte, no con un call center. Talleres, constructoras y despachos de arquitectura.',
    'eb-dist': 'Red global', 'dist-title': 'Distribuidores.',
    'eb-quote': 'Cotización', 'quote-title': 'Dinos qué necesitas.',
    'quote-lead': 'Llena los campos y se abre WhatsApp con el mensaje ya redactado. No guardamos tus datos en ningún servidor.',
    'f-name': 'Nombre', 'f-product': 'Producto de interés', 'f-type': 'Tipo de proyecto',
    'f-m2': 'Metros cuadrados aproximados', 'f-msg': 'Detalles',
    'f-msg-ph': 'Orientación de la fachada, tipo de vidrio, ciudad…',
    'f-send': 'Enviar por WhatsApp',
    'f-any': 'Aún no lo sé', 'f-t-res': 'Residencial', 'f-t-corp': 'Corporativo / oficina',
    'f-t-int': 'Interiores / privacidad', 'f-t-auto': 'Automotriz', 'f-t-dist': 'Quiero distribuir',
    'c-wa': 'WhatsApp', 'c-tel': 'Teléfono', 'c-mail': 'Email', 'c-city': 'Ubicación', 'c-social': 'Redes',
    'foot-tag': 'Películas de alto desempeño para vidrio. Distribución y soporte técnico.',
    'foot-nav': 'Navegación', 'foot-contact': 'Contacto',
    'foot-legal': 'Las especificaciones pueden variar según lote y condiciones de instalación.',
    'wa-float': 'Cotizar',
    'f-all': 'Todo', 'f-arch': 'Arquitectónica', 'f-auto': 'Automotriz', 'f-deco': 'Decorativa',
    'spec-title': 'Especificaciones', 'benefit-title': 'Beneficios', 'tone-title': 'Tonos disponibles',
    's-tec': 'Tecnología', 's-vlt': 'Luz visible (VLT)', 's-uv': 'Bloqueo UV', 's-ir': 'Rechazo IR',
    's-tser': 'Rechazo solar total (TSER)', 's-shgc': 'SHGC', 's-sc': 'Coef. de sombra',
    's-rollo': 'Rollo', 's-gar': 'Garantía', 's-inst': 'Instalación',
    's-volt': 'Voltaje', 's-cons': 'Consumo', 's-glare': 'Reducción de brillo',
    'pending': 'A confirmar',
    'modal-cta': 'Cotizar esta película', 'modal-close': 'Cerrar',
    'wa-generic': 'Hola, me interesa el catálogo SOLARO.',
    'wa-product': 'Hola, me interesa la película',
    'no-wa': 'El WhatsApp aún no está configurado. Escríbenos por email mientras tanto.',
    'setup': 'Falta configurar el número de WhatsApp en products.js',
    'setup-hide': 'Ocultar',
    'th-product': 'Producto', 'th-tones': 'Tonos',
    'ancho-nota': 'Todas las películas se pueden pedir en ancho de 1.80 m. El estándar es 1.52 m.',
    's-avail': 'Disponibilidad', 'av-stock': 'En existencia', 'av-order': 'Bajo pedido',
    'eb-films': 'Las películas', 'stage-open': 'Ver ficha técnica', 'hero-scroll': 'Desplaza',
    'ir-note': 'El rechazo IR se mide a 1400 nm y es igual en toda la línea cerámica. No equivale al rechazo de calor total (TSER), que varía según el tono.'
  },
  en: {
    'skip': 'Skip to catalog',
    'nav-cat': 'Catalog', 'nav-comp': 'Compare', 'nav-apps': 'Applications',
    'nav-dist': 'Distributors', 'nav-quote': 'Get a quote',
    'hero-tag': 'High-performance films for architectural and automotive glass. Solar control, privacy and switchable technology.',
    'hero-cta1': 'View catalog', 'hero-cta2': 'Request a quote',
    'm-uv': 'UV blocking', 'm-lines': 'Ceramic shades', 'm-roll': 'Max width', 'm-dist': 'Countries with a distributor',
    'eb-cat': 'Catalog',
    'cat-title': 'Five lines. One answer for every pane.',
    'cat-lead': 'Each line solves a different problem: heat without darkening, privacy, façades in direct sun, or controlled transparency. Everything is supplied to order, sized to the project.',
    'eb-comp': 'Compare', 'comp-title': 'The whole catalog, side by side.',
    'comp-lead': 'The data that is already verified. Thermal values will be published once we have the laboratory report.',
    'eb-apps': 'Applications', 'apps-title': 'Which one fits your project?',
    'eb-why': 'Why SOLARO', 'why-title': 'How we work.',
    'why1-t': 'Supplied to order', 'why1-d': 'No fixed catalog. We quote and supply the meters and shade your project actually needs.',
    'why2-t': 'Selection guidance', 'why2-d': 'We help you pick the right shade based on façade orientation, glass type and how the space is used.',
    'why3-t': 'Special widths', 'why3-d': 'Standard is 1.52 m. Every film can be ordered in 1.80 m for large glazing, with no visible seams.',
    'why4-t': 'Direct contact', 'why4-d': 'You talk to the person who supplies it, not a call center. Shops, contractors and architecture firms.',
    'eb-dist': 'Global network', 'dist-title': 'Distributors.',
    'eb-quote': 'Quote', 'quote-title': 'Tell us what you need.',
    'quote-lead': 'Fill in the fields and WhatsApp opens with the message already written. We do not store your data on any server.',
    'f-name': 'Name', 'f-product': 'Product of interest', 'f-type': 'Project type',
    'f-m2': 'Approximate square meters', 'f-msg': 'Details',
    'f-msg-ph': 'Façade orientation, glass type, city…',
    'f-send': 'Send via WhatsApp',
    'f-any': 'Not sure yet', 'f-t-res': 'Residential', 'f-t-corp': 'Corporate / office',
    'f-t-int': 'Interiors / privacy', 'f-t-auto': 'Automotive', 'f-t-dist': 'I want to distribute',
    'c-wa': 'WhatsApp', 'c-tel': 'Phone', 'c-mail': 'Email', 'c-city': 'Location', 'c-social': 'Social',
    'foot-tag': 'High-performance window films. Distribution and technical support.',
    'foot-nav': 'Navigation', 'foot-contact': 'Contact',
    'foot-legal': 'Specifications may vary by batch and installation conditions.',
    'wa-float': 'Quote',
    'f-all': 'All', 'f-arch': 'Architectural', 'f-auto': 'Automotive', 'f-deco': 'Decorative',
    'spec-title': 'Specifications', 'benefit-title': 'Benefits', 'tone-title': 'Available shades',
    's-tec': 'Technology', 's-vlt': 'Visible light (VLT)', 's-uv': 'UV blocking', 's-ir': 'IR rejection',
    's-tser': 'Total solar rejection (TSER)', 's-shgc': 'SHGC', 's-sc': 'Shading coefficient',
    's-rollo': 'Roll', 's-gar': 'Warranty', 's-inst': 'Installation',
    's-volt': 'Voltage', 's-cons': 'Power draw', 's-glare': 'Glare reduction',
    'pending': 'To be confirmed',
    'modal-cta': 'Quote this film', 'modal-close': 'Close',
    'wa-generic': 'Hi, I am interested in the SOLARO catalog.',
    'wa-product': 'Hi, I am interested in the film',
    'no-wa': 'WhatsApp is not configured yet. Please email us in the meantime.',
    'setup': 'WhatsApp number still needs to be set in products.js',
    'setup-hide': 'Hide',
    'th-product': 'Product', 'th-tones': 'Shades',
    'ancho-nota': 'Every film can be ordered in a 1.80 m width. Standard is 1.52 m.',
    's-avail': 'Availability', 'av-stock': 'In stock', 'av-order': 'On order',
    'eb-films': 'The films', 'stage-open': 'View data sheet', 'hero-scroll': 'Scroll',
    'ir-note': 'IR rejection is measured at 1400 nm and is identical across the ceramic line. It is not the same as total heat rejection (TSER), which varies by shade.'
  },
  ja: {
    'skip': 'カタログへスキップ',
    'nav-cat': 'カタログ', 'nav-comp': '比較', 'nav-apps': '用途',
    'nav-dist': '販売店', 'nav-quote': '見積り',
    'hero-tag': '建築用・自動車用ガラスのための高性能フィルム。遮熱、プライバシー、調光技術。',
    'hero-cta1': 'カタログを見る', 'hero-cta2': '見積りを依頼',
    'm-uv': 'UV遮断', 'm-lines': 'セラミック濃度', 'm-roll': '最大幅', 'm-dist': '販売店のある国',
    'eb-cat': 'カタログ',
    'cat-title': '5つのライン。ガラスごとの最適解。',
    'cat-lead': '各ラインが異なる課題を解決します。暗くせずに遮熱、プライバシー、直射日光のファサード、調光。カードを開くと仕様と濃度をご覧いただけます。',
    'eb-comp': '比較', 'comp-title': 'カタログ全体を並べて比較。',
    'comp-lead': '検証済みのデータのみ。熱性能値は試験機関のレポート取得後に公開します。',
    'eb-apps': '用途', 'apps-title': 'どのフィルムが適していますか？',
    'eb-why': 'SOLAROを選ぶ理由', 'why-title': '私たちの仕事の進め方。',
    'why1-t': '受注対応', 'why1-d': '既製カタログではありません。プロジェクトに必要な数量と濃度でお見積り・ご提供します。',
    'why2-t': '濃度選定のサポート', 'why2-d': 'ファサードの方位、ガラスの種類、空間の用途に応じた濃度選定をサポートします。',
    'why3-t': '特注幅', 'why3-d': '標準は1.52 m。すべてのフィルムは大開口向けに1.80 m幅でご注文いただけます。',
    'why4-t': '直接のやり取り', 'why4-d': 'コールセンターではなく、供給する担当者が直接対応します。',
    'eb-dist': 'グローバルネットワーク', 'dist-title': '販売店。',
    'eb-quote': '見積り', 'quote-title': 'ご要望をお聞かせください。',
    'quote-lead': '入力するとWhatsAppがメッセージ入りで開きます。データはサーバーに保存されません。',
    'f-name': 'お名前', 'f-product': 'ご関心のある製品', 'f-type': 'プロジェクト種別',
    'f-m2': 'おおよその平方メートル', 'f-msg': '詳細',
    'f-msg-ph': 'ファサードの方位、ガラスの種類、都市など…',
    'f-send': 'WhatsAppで送信',
    'f-any': 'まだ未定', 'f-t-res': '住宅', 'f-t-corp': 'オフィス',
    'f-t-int': 'インテリア／プライバシー', 'f-t-auto': '自動車', 'f-t-dist': '販売店になりたい',
    'c-wa': 'WhatsApp', 'c-tel': '電話', 'c-mail': 'メール', 'c-city': '所在地', 'c-social': 'SNS',
    'foot-tag': 'ガラス用高性能フィルム。流通と技術サポート。',
    'foot-nav': 'ナビゲーション', 'foot-contact': 'お問い合わせ',
    'foot-legal': '仕様はロットおよび施工条件により異なる場合があります。',
    'wa-float': '見積り',
    'f-all': 'すべて', 'f-arch': '建築用', 'f-auto': '自動車用', 'f-deco': '装飾用',
    'spec-title': '仕様', 'benefit-title': '特長', 'tone-title': '濃度ラインナップ',
    's-tec': '技術', 's-vlt': '可視光線透過率（VLT）', 's-uv': 'UV遮断', 's-ir': '赤外線遮断',
    's-tser': '総日射遮蔽率（TSER）', 's-shgc': 'SHGC', 's-sc': '遮蔽係数',
    's-rollo': 'ロール', 's-gar': '保証', 's-inst': '施工',
    's-volt': '電圧', 's-cons': '消費電力', 's-glare': 'まぶしさ低減',
    'pending': '確認中',
    'modal-cta': 'このフィルムの見積り', 'modal-close': '閉じる',
    'wa-generic': 'SOLAROのカタログに興味があります。',
    'wa-product': '次のフィルムに興味があります:',
    'no-wa': 'WhatsAppは未設定です。当面はメールでご連絡ください。',
    'setup': 'products.js にWhatsApp番号を設定してください',
    'setup-hide': '非表示',
    'th-product': '製品', 'th-tones': '濃度',
    'ancho-nota': 'すべてのフィルムは1.80 m幅でご注文いただけます。標準は1.52 mです。',
    's-avail': '在庫状況', 'av-stock': '在庫あり', 'av-order': '受注生産',
    'eb-films': 'フィルム', 'stage-open': '技術資料を見る', 'hero-scroll': 'スクロール',
    'ir-note': '赤外線遮断率は1400 nmで測定され、セラミックライン全体で同一です。濃度により変わる総遮熱率（TSER）とは異なります。'
  }
};

let LANG = 'es';
let FILTRO = 'todo';

const t   = k => (I18N[LANG] && I18N[LANG][k]) || I18N.es[k] || k;
const tx  = v => (typeof v === 'object' && v !== null) ? (v[LANG] || v.es) : v;
const ok  = v => { const s = tx(v); return s && String(s).trim() !== '' && String(s).toUpperCase() !== 'PENDIENTE'; };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const $   = s => document.querySelector(s);

/* ─── Color aproximado de un tono según su VLT (solo ilustrativo) ─── */
function swatch(vlt, familia) {
  if (vlt === null || vlt === undefined) {
    if (familia === 'decorativa')  return 'linear-gradient(135deg,#dfe6ea,#c3ced5)';
    if (familia === 'inteligente') return 'linear-gradient(135deg,#8fb3c9 0%,#8fb3c9 48%,#e9eef1 52%,#e9eef1 100%)';
    return '#8fa3ae';
  }
  const a = Math.max(0.06, Math.min(0.9, 1 - vlt / 100));
  if (familia === 'reflectiva') return `linear-gradient(135deg, rgba(150,168,180,${a + 0.1}), rgba(96,112,124,${a}))`;
  if (familia === 'carbono')    return `rgba(24,26,28,${a})`;
  return `rgba(56,74,88,${a})`;
}

/* ═══ WHATSAPP ═══════════════════════════════════════════════ */

const waListo = () => ok(CONTACTO.whatsapp) && /^\d{8,15}$/.test(String(CONTACTO.whatsapp).trim());

function waLink(msg) {
  if (!waListo()) return null;
  return `https://wa.me/${String(CONTACTO.whatsapp).trim()}?text=${encodeURIComponent(msg)}`;
}

function abrirWA(msg) {
  const url = waLink(msg);
  if (!url) {
    const note = $('#formNote');
    if (note) { note.textContent = t('no-wa'); note.style.color = 'var(--accent)'; }
    location.hash = '#cotizar';
    return;
  }
  window.open(url, '_blank', 'noopener');
}

/* ═══ RENDER: CATÁLOGO ═══════════════════════════════════════ */

function renderFiltros() {
  const defs = [
    { id: 'todo',           key: 'f-all'   },
    { id: 'arquitectonica', key: 'f-arch'  },
    { id: 'automotriz',     key: 'f-auto'  },
    { id: 'decorativa',     key: 'f-deco'  }
  ];
  $('#filters').innerHTML = defs.map(d =>
    `<button class="filter${FILTRO === d.id ? ' active' : ''}" data-filtro="${d.id}">${esc(t(d.key))}</button>`
  ).join('');
}

function renderCatalogo() {
  $('#catalog').innerHTML = PRODUCTOS.map(p => {
    const visible = FILTRO === 'todo' || p.categorias.includes(FILTRO);
    const tonos = p.tonos.map(tn =>
      `<span class="tono">${esc(tn.nombre)}${tn.vlt != null ? ` · ${tn.vlt}%` : ''}</span>`
    ).join('');
    const esPedido = p.disponibilidad === 'pedido';
    const badge = esPedido
      ? `<span class="card-badge badge-order">${esc(t('av-order'))}</span>`
      : (p.badge ? `<span class="card-badge">${esc(tx(p.badge))}</span>` : '');
    return `
      <button class="card${visible ? '' : ' is-hidden'}" data-id="${p.id}" aria-label="${esc(p.nombre)}">
        <div class="card-media">
          ${badge}
          <img src="${p.imgSm}" alt="${esc(p.nombre)}" loading="lazy" width="900" height="900">
        </div>
        <div class="card-body">
          <h3 class="card-name">${esc(p.nombre)}</h3>
          <p class="card-claim">${esc(tx(p.claim))}</p>
          <div class="tono-row">${tonos}</div>
          <span class="card-cta">${esc(t('modal-cta'))}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M9 1l4 4-4 4M13 5H0" stroke="currentColor" stroke-width="1.4"/></svg>
          </span>
        </div>
      </button>`;
  }).join('');
}

/* ═══ RENDER: FICHA TÉCNICA (MODAL) ══════════════════════════ */

function filaSpec(label, valor) {
  if (!ok(valor)) return `<tr><th>${esc(label)}</th><td class="spec-pending">${esc(t('pending'))}</td></tr>`;
  return `<tr><th>${esc(label)}</th><td>${esc(tx(valor))}</td></tr>`;
}

function abrirFicha(id) {
  const p = PRODUCTOS.find(x => x.id === id);
  if (!p) return;

  $('#modalImg').src = p.img;
  $('#modalImg').alt = p.nombre;

  const s = p.specs || {};
  let filas = '';
  filas += filaSpec(t('s-tec'),   s.tecnologia);
  filas += filaSpec(t('s-vlt'),   s.vlt);
  filas += filaSpec(t('s-uv'),    s.uv);
  if (typeof MOSTRAR_IR !== 'undefined' && MOSTRAR_IR && ok(s.ir)) {
    filas += filaSpec(t('s-ir'), s.ir);
  }
  if (typeof MOSTRAR_SHGC !== 'undefined' && MOSTRAR_SHGC) {
    filas += filaSpec(t('s-tser'), s.tser);
    filas += filaSpec(t('s-shgc'), s.shgc);
    filas += filaSpec(t('s-sc'),   s.sc);
  }
  if (s.voltaje !== undefined) filas += filaSpec(t('s-volt'), s.voltaje);
  if (s.consumo !== undefined) filas += filaSpec(t('s-cons'), s.consumo);
  filas += filaSpec(t('s-rollo'), s.rollo);
  filas += filaSpec(t('s-gar'),   s.garantia);
  filas += filaSpec(t('s-inst'),  s.instalacion);
  filas += `<tr><th>${esc(t('s-avail'))}</th><td>${esc(t(p.disponibilidad === 'stock' ? 'av-stock' : 'av-order'))}</td></tr>`;

  const beneficios = (tx(p.beneficios) || [])
    .map(b => `<li>${esc(b)}</li>`).join('');

  const tonos = p.tonos.map(tn => `
    <div class="tono-scale-row">
      <span class="tono-swatch" style="background:${swatch(tn.vlt, p.familia)}"></span>
      <span class="tono-scale-name">${esc(tn.nombre)}</span>
      ${tn.sub ? `<span class="tono-scale-vlt">${esc(tx(tn.sub))}</span>` : ''}
      ${tn.vlt != null ? `<span class="tono-scale-vlt">VLT ${tn.vlt}%</span>` : ''}
    </div>`).join('');

  const nota = p.nota ? `<div class="modal-note">${esc(tx(p.nota))}</div>` : '';

  $('#modalBody').innerHTML = `
    <h2 class="modal-name" id="modalName">${esc(p.nombre)}</h2>
    <p class="modal-claim">${esc(tx(p.claim))}</p>
    <p class="modal-desc">${esc(tx(p.desc))}</p>
    <div class="modal-cols">
      <div>
        <div class="block-label">${esc(t('spec-title'))}</div>
        <table class="spec-table"><tbody>${filas}</tbody></table>
        ${(typeof MOSTRAR_IR !== 'undefined' && MOSTRAR_IR && ok(s.ir)) ? `<p class="spec-foot">${esc(t('ir-note'))}</p>` : ''}
        <div class="block-label" style="margin-top:2rem">${esc(t('tone-title'))}</div>
        <div class="tono-scale">${tonos}</div>
      </div>
      <div>
        <div class="block-label">${esc(t('benefit-title'))}</div>
        <ul class="benefit-list">${beneficios}</ul>
        ${nota}
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-wa" data-wa="${esc(p.nombre)}">${esc(t('modal-cta'))}</button>
      <button class="btn btn-ghost" data-close>${esc(t('modal-close'))}</button>
    </div>`;

  $('#modal').classList.add('open');
  document.body.classList.add('no-scroll');
  $('#modalPanel').scrollTop = 0;
  $('.modal-close').focus();
}

function cerrarFicha() {
  $('#modal').classList.remove('open');
  document.body.classList.remove('no-scroll');
}

/* ═══ RENDER: COMPARATIVA ════════════════════════════════════ */

function renderComparativa() {
  const filas = [
    { key: 's-tec',   get: p => p.specs.tecnologia },
    { key: 's-vlt',   get: p => p.specs.vlt },
    { key: 's-uv',    get: p => p.specs.uv },
    { key: 's-rollo', get: p => p.specs.rollo },
    { key: 's-gar',   get: p => p.specs.garantia }
  ];
  if (typeof MOSTRAR_IR !== 'undefined' && MOSTRAR_IR) {
    filas.splice(3, 0, { key: 's-ir', get: p => p.specs.ir });
  }
  if (typeof MOSTRAR_SHGC !== 'undefined' && MOSTRAR_SHGC) {
    filas.splice(4, 0,
      { key: 's-tser', get: p => p.specs.tser },
      { key: 's-shgc', get: p => p.specs.shgc });
  }
  filas.push({ key: 's-avail', get: p => t(p.disponibilidad === 'stock' ? 'av-stock' : 'av-order') });

  const head = `<thead><tr><th>${esc(t('th-product'))}</th>${
    PRODUCTOS.map(p => `<th>${esc(p.nombre)}</th>`).join('')}</tr></thead>`;

  const tonosRow = `<tr><th>${esc(t('th-tones'))}</th>${
    PRODUCTOS.map(p => `<td>${p.tonos.map(x => esc(x.nombre.replace(/^(NC\d+|CarbonX |ReflectX |IRX )/, m => m.trim()))).join('<br>')}</td>`).join('')}</tr>`;

  const body = `<tbody>${tonosRow}${filas.map(f =>
    `<tr><th>${esc(t(f.key))}</th>${PRODUCTOS.map(p => {
      const v = f.get(p);
      return ok(v) ? `<td>${esc(tx(v))}</td>` : `<td class="spec-pending">—</td>`;
    }).join('')}</tr>`).join('')}</tbody>`;

  $('#compare').innerHTML = head + body;
  const nota = $('#compareNota');
  if (nota) nota.textContent = t('ancho-nota');
}

/* ═══ RENDER: APLICACIONES / DISTRIBUIDORES / CONTACTO ═══════ */

function renderApps() {
  $('#apps').innerHTML = APLICACIONES.map((a, i) => {
    const recs = a.recomendado.map(id => {
      const p = PRODUCTOS.find(x => x.id === id);
      return p ? `<span class="app-rec-item">${esc(p.nombre)}</span>` : '';
    }).join('');
    return `
      <article class="app-card reveal">
        <div class="app-num">0${i + 1}</div>
        <h3 class="app-title">${esc(tx(a.titulo))}</h3>
        <p class="app-desc">${esc(tx(a.desc))}</p>
        <div class="app-rec">${recs}</div>
      </article>`;
  }).join('');
}

function renderDist() {
  $('#dist').innerHTML = DISTRIBUIDORES.map(d => `
    <div class="dist-item">
      <div class="dist-pais">${esc(tx(d.pais))}</div>
      <div class="dist-nombre">${esc(d.nombre)}</div>
    </div>`).join('');
}

function renderContacto() {
  const wa = waLink(t('wa-generic'));
  const cWa = $('#cWa');
  cWa.textContent = wa ? '+' + CONTACTO.whatsapp : t('pending');
  cWa.href = wa || '#cotizar';

  const cTel = $('#cTel');
  cTel.textContent = ok(CONTACTO.telefono) ? CONTACTO.telefono : t('pending');
  cTel.href = ok(CONTACTO.telefono) ? 'tel:' + String(CONTACTO.telefono).replace(/[^\d+]/g, '') : '#cotizar';

  const cMail = $('#cMail');
  cMail.textContent = CONTACTO.email; cMail.href = 'mailto:' + CONTACTO.email;
  $('#cCity').textContent = CONTACTO.ciudad;
  $('#cIg').href = CONTACTO.instagram;
  $('#cFb').href = CONTACTO.facebook;

  $('#footContact').innerHTML = `
    <a href="mailto:${esc(CONTACTO.email)}">${esc(CONTACTO.email)}</a>
    ${ok(CONTACTO.telefono) ? `<a href="tel:${esc(String(CONTACTO.telefono).replace(/[^\d+]/g, ''))}">${esc(CONTACTO.telefono)}</a>` : ''}
    <a href="${esc(CONTACTO.instagram)}" target="_blank" rel="noopener">Instagram</a>
    <a href="${esc(CONTACTO.facebook)}" target="_blank" rel="noopener">Facebook</a>`;

  const waFloat = $('#waFloat');
  if (wa) { waFloat.href = wa; waFloat.target = '_blank'; waFloat.rel = 'noopener'; }
  else    { waFloat.href = '#cotizar'; waFloat.removeAttribute('target'); }
}

/* ═══ FORMULARIO ═════════════════════════════════════════════ */

function renderSelects() {
  const prev1 = $('#qProducto').value, prev2 = $('#qTipo').value;
  $('#qProducto').innerHTML =
    `<option value="">${esc(t('f-any'))}</option>` +
    PRODUCTOS.map(p => `<option value="${esc(p.nombre)}">${esc(p.nombre)}</option>`).join('');
  $('#qTipo').innerHTML = ['f-t-res', 'f-t-corp', 'f-t-int', 'f-t-auto', 'f-t-dist']
    .map(k => `<option value="${esc(t(k))}">${esc(t(k))}</option>`).join('');
  if (prev1) $('#qProducto').value = prev1;
  if (prev2) $('#qTipo').value = prev2;
}

function enviarForm(e) {
  e.preventDefault();
  const f = e.target;
  const nombre = f.nombre.value.trim();
  const note = $('#formNote');

  if (!nombre) {
    note.textContent = t('f-name') + ' —';
    note.style.color = 'var(--accent)';
    f.nombre.focus();
    return;
  }

  const partes = [
    `${t('wa-generic')}`,
    ``,
    `${t('f-name')}: ${nombre}`,
    f.producto.value ? `${t('f-product')}: ${f.producto.value}` : null,
    `${t('f-type')}: ${f.tipo.value}`,
    f.metros.value.trim() ? `${t('f-m2')}: ${f.metros.value.trim()} m²` : null,
    f.mensaje.value.trim() ? `${t('f-msg')}: ${f.mensaje.value.trim()}` : null
  ].filter(Boolean);

  abrirWA(partes.join('\n'));
}

/* ═══ IDIOMA ═════════════════════════════════════════════════ */

function aplicarIdioma(lang) {
  LANG = I18N[lang] ? lang : 'es';
  document.documentElement.lang = LANG;
  try { localStorage.setItem('solaro-lang', LANG); } catch (e) {}

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (v) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t(el.dataset.i18nPh);
    if (v) el.placeholder = v;
  });
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === LANG));

  renderFiltros();
  renderCatalogo();
  renderComparativa();
  renderApps();
  renderDist();
  renderContacto();
  renderSelects();
  if (Stage.i >= 0) { const n = Stage.i; Stage.i = -1; Stage.pintar(n, true); }
  avisoSetup();
  observarReveal();
}

/* ═══ AVISO DE CONFIGURACIÓN PENDIENTE ═══════════════════════ */

function avisoSetup() {
  const viejo = document.getElementById('setupNotice');
  if (viejo) viejo.remove();
  if (waListo()) return;
  const div = document.createElement('div');
  div.className = 'setup-notice';
  div.id = 'setupNotice';
  div.innerHTML = `<span>⚠️ <strong>${esc(t('setup'))}</strong></span>
    <button type="button">${esc(t('setup-hide'))}</button>`;
  div.querySelector('button').onclick = () => div.remove();
  document.body.appendChild(div);
}

/* ═══ ANIMACIÓN DE ENTRADA ═══════════════════════════════════ */

let io;
function observarReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    return;
  }
  if (io) io.disconnect();
  io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}


/* ═══════════════════════════════════════════════════════════════
   SECUENCIA DE PELÍCULAS
   La sección mide (n+1) pantallas de alto. El panel de adentro se
   queda pegado (sticky) y el scroll sólo cambia cuál película se
   ve en el cuadro: no se apilan fotos, se intercambian en su lugar.
   ═══════════════════════════════════════════════════════════════ */

const Stage = {
  i: -1,
  activo: false,

  soportado() {
    if (!window.matchMedia) return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return CSS.supports('position', 'sticky') || CSS.supports('position', '-webkit-sticky');
  },

  montar() {
    const sec = $('#peliculas');
    if (!sec) return;

    // Capas de imagen — una por película, apiladas en el mismo cuadro
    $('#stageLayers').innerHTML = PRODUCTOS.map((p, n) => `
      <div class="filmstage-layer${n === 0 ? ' active' : ''}" data-n="${n}">
        <img src="${p.img}" alt="${esc(p.nombre)}" ${n === 0 ? '' : 'loading="lazy"'} width="1800" height="1800">
      </div>`).join('');

    // Riel lateral — también sirve para saltar directo a una película
    $('#stageRail').innerHTML = PRODUCTOS.map((p, n) => `
      <button class="rail-item${n === 0 ? ' active' : ''}" data-n="${n}">
        <span class="rail-dot"></span>
        <span>${esc(p.nombre)}</span>
        <span class="rail-num">0${n + 1}</span>
      </button>`).join('');

    $('#stageIndex').querySelector('em').textContent = '0' + PRODUCTOS.length;

    if (!this.soportado()) { sec.classList.add('static-fallback'); this.pintar(0, true); return; }

    this.activo = true;
    sec.style.height = `${(PRODUCTOS.length + 0.6) * 100}vh`;
    this.pintar(0, true);
    this.alScroll();
  },

  /* Cambia lo que se ve en el cuadro */
  pintar(n, inmediato) {
    if (n === this.i) return;
    const p = PRODUCTOS[n];
    if (!p) return;
    this.i = n;

    document.querySelectorAll('.filmstage-layer').forEach(el =>
      el.classList.toggle('active', +el.dataset.n === n));
    document.querySelectorAll('.rail-item').forEach(el =>
      el.classList.toggle('active', +el.dataset.n === n));

    // En móvil el riel es horizontal: arrastra el chip activo a la vista
    const rail = $('#stageRail'), chip = rail && rail.querySelector('.rail-item.active');
    if (chip && rail.scrollWidth > rail.clientWidth + 4) {
      rail.scrollTo({ left: chip.offsetLeft - rail.clientWidth / 2 + chip.offsetWidth / 2, behavior: 'smooth' });
    }

    $('#stageIndex').querySelector('span').textContent = '0' + (n + 1);
    $('#stageBtn').dataset.id = p.id;

    const nombre = $('#stageName'), claim = $('#stageClaim'), tonos = $('#stageTonos');
    const escribir = () => {
      nombre.textContent = p.nombre;
      claim.textContent  = tx(p.claim);
      tonos.innerHTML = p.tonos.map(t2 =>
        `<span class="tono">${esc(t2.nombre)}${t2.vlt != null ? ` · ${t2.vlt}%` : ''}</span>`).join('');
      [nombre, claim, tonos].forEach(el => { el.classList.add('stage-fade'); el.classList.remove('out'); });
    };

    if (inmediato) { escribir(); return; }
    [nombre, claim, tonos].forEach(el => { el.classList.add('stage-fade', 'out'); });
    clearTimeout(this._t);
    this._t = setTimeout(escribir, 190);
  },

  /* Traduce la posición del scroll a un índice de película */
  alScroll() {
    if (!this.activo) return;
    const sec = $('#peliculas');
    const r = sec.getBoundingClientRect();
    const recorrido = sec.offsetHeight - window.innerHeight;
    if (recorrido <= 0) return;

    const avance = Math.min(1, Math.max(0, -r.top / recorrido));
    const n = Math.min(PRODUCTOS.length - 1, Math.floor(avance * PRODUCTOS.length));
    this.pintar(n);

    const hint = $('#stageHint');
    if (hint) hint.classList.toggle('gone', avance > 0.04);
  },

  /* Clic en el riel: lleva el scroll al tramo de esa película */
  irA(n) {
    const sec = $('#peliculas');
    if (!this.activo) { abrirFicha(PRODUCTOS[n].id); return; }
    const recorrido = sec.offsetHeight - window.innerHeight;
    const y = sec.offsetTop + recorrido * ((n + 0.5) / PRODUCTOS.length);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

/* ═══ ARRANQUE ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();

  let guardado = 'es';
  try { guardado = localStorage.getItem('solaro-lang') || 'es'; } catch (e) {}
  aplicarIdioma(guardado);

  // Idioma
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.addEventListener('click', () => aplicarIdioma(b.dataset.lang)));

  // Nav scrolled
  Stage.montar();

  const nav = $('#nav');
  let ticking = false;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => { Stage.alScroll(); ticking = false; });
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => Stage.alScroll(), { passive: true });

  // Menú móvil
  const toggle = $('#navToggle'), links = $('#navLinks');
  toggle.addEventListener('click', () => {
    const abierto = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });
  links.addEventListener('click', e => {
    if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // Filtros + tarjetas (delegación)
  document.addEventListener('click', e => {
    const f = e.target.closest('[data-filtro]');
    if (f) { FILTRO = f.dataset.filtro; renderFiltros(); renderCatalogo(); return; }

    const rail = e.target.closest('.rail-item');
    if (rail) { Stage.irA(+rail.dataset.n); return; }

    const sBtn = e.target.closest('#stageBtn');
    if (sBtn && sBtn.dataset.id) { abrirFicha(sBtn.dataset.id); return; }

    const card = e.target.closest('.card');
    if (card) { abrirFicha(card.dataset.id); return; }

    if (e.target.closest('[data-close]')) { cerrarFicha(); return; }

    const wa = e.target.closest('[data-wa]');
    if (wa) { abrirWA(`${t('wa-product')} ${wa.dataset.wa}. ${t('wa-generic')}`); return; }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && $('#modal').classList.contains('open')) cerrarFicha();
  });

  $('#quoteForm').addEventListener('submit', enviarForm);
});
