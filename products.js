/* ═══════════════════════════════════════════════════════════════
   SOLARO — CATÁLOGO DE PRODUCTOS
   ───────────────────────────────────────────────────────────────
   ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA CAMBIAR
   PRODUCTOS, TONOS, ESPECIFICACIONES Y PRECIOS.

   Los campos marcados con  "PENDIENTE"  hay que llenarlos con los
   datos reales de la ficha técnica del fabricante. Mientras digan
   "PENDIENTE" el sitio los oculta en lugar de mostrar un dato falso.
   ═══════════════════════════════════════════════════════════════ */

const CONTACTO = {
  // ⚠️ CAMBIAR: número de WhatsApp que recibe las cotizaciones.
  // Formato internacional sin +, sin espacios, sin guiones. Ej: 5213312345678
  whatsapp: 'PENDIENTE',

  // ⚠️ CAMBIAR: teléfono que se muestra y se marca desde celular.
  telefono: 'PENDIENTE',

  email: 'ventas@solarofilms.com',
  instagram: 'https://instagram.com/solarofilms',
  facebook: 'https://facebook.com/solarofilms',
  ciudad: 'Guadalajara, Jalisco, México'
};

/* ───────────────────────────────────────────────────────────────
   ⚠️ INTERRUPTOR DE ESPECIFICACIONES NO VERIFICADAS
   ───────────────────────────────────────────────────────────────
   El rechazo IR (93-95%) es igual en toda la linea cermica porque
   lo produce la misma capa de nanoparticulas: ese dato SI se publica.

   El SHGC / TSER / SC cambia por tono y las fichas actuales lo traen
   mal calculado (SC debe ser SHGC / 0.87, y no lo era).
   Se queda oculto hasta tener reporte de laboratorio.
   ─────────────────────────────────────────────────────────────── */
const MOSTRAR_IR    = true;   // Rechazo IR — dato de línea, defendible
const MOSTRAR_SHGC  = false;  // SHGC / TSER / SC — esperando laboratorio

// Dato común a toda la línea
const ROLLO = '1.52 m × 30 m';

/* ───────────────────────────────────────────────────────────────
   PRODUCTOS
   ───────────────────────────────────────────────────────────────
   tonos:  cada tono es { vlt: 90, nombre: 'IRX 90' }
           el VLT es el % de luz visible que deja pasar
           (90 = casi transparente, 05 = muy oscuro)

   specs:  tser  = rechazo de energía solar total (%)
           ir    = rechazo infrarrojo (%)
           uv    = bloqueo ultravioleta (%)
           glare = reducción de deslumbramiento (%)
           garantia, ancho, largo, adhesivo, capas

   Pon 'PENDIENTE' en cualquier dato que aún no tengas confirmado.
   ─────────────────────────────────────────────────────────────── */

const PRODUCTOS = [
  {
    id: 'irx',
    nombre: 'IRX™ Cerámica',
    familia: 'ceramica',
    disponibilidad: 'stock',
    categorias: ['arquitectonica', 'automotriz'],
    img: 'assets/opt/ceramic.webp',
    imgSm: 'assets/opt/ceramic-sm.webp',
    destacado: true,
    badge: { es: 'EN EXISTENCIA', en: 'IN STOCK', ja: '在庫あり' },
    claim: {
      es: 'Rechaza el calor sin oscurecer el vidrio.',
      en: 'Rejects heat without darkening the glass.',
      ja: 'ガラスを暗くせずに熱を遮断。'
    },
    desc: {
      es: 'Película cerámica multicapa sin metal. Bloquea el infrarrojo conservando la vista y la luz natural. No interfiere con señal celular, GPS ni Wi-Fi. La opción cuando el cliente quiere confort térmico pero no quiere que se note.',
      en: 'Multi-layer, metal-free ceramic film. Blocks infrared while preserving the view and natural light. No interference with cellular, GPS or Wi-Fi. The choice when the client wants thermal comfort without a visible tint.',
      ja: '金属を含まない多層セラミックフィルム。眺望と自然光を保ちながら赤外線を遮断。携帯電話、GPS、Wi-Fiの電波を妨げません。'
    },
    tonos: [
      { vlt: 90, nombre: 'NC90', sub: { es: 'Casi invisible', en: 'Near invisible', ja: 'ほぼ透明' } },
      { vlt: 85, nombre: 'NC85 Ultra Clear', sub: { es: 'Máxima claridad', en: 'Maximum clarity', ja: '最大の透明度' } },
      { vlt: 74, nombre: 'NC70 Clear',       sub: { es: 'Claro / azul ligero', en: 'Clear / light blue', ja: 'クリア／ライトブルー' } },
      { vlt: 50, nombre: 'NC50 Privacy',     sub: { es: 'Tono neutro medio', en: 'Medium neutral tone', ja: 'ミディアムニュートラル' } }
    ],
    specs: {
      tecnologia: { es: 'Nano cerámica', en: 'Nano ceramic', ja: 'ナノセラミック' },
      uv: '99%',
      vlt: '90% / 85% / 73–75% / 50%',
      rollo: ROLLO,
      instalacion: { es: 'Aplicación en húmedo · curado hasta 15 días', en: 'Wet application · up to 15 days cure', ja: 'ウェット施工・最大15日の養生' },
      ir: { es: '93–95% (1400 nm)', en: '93–95% (1400 nm)', ja: '93〜95%（1400 nm）' },
      // ── Pendientes de laboratorio. Ver MOSTRAR_SHGC arriba ──
      shgc: 'PENDIENTE', sc: 'PENDIENTE', tser: 'PENDIENTE',
      garantia: 'PENDIENTE'
    },
    beneficios: {
      es: ['Sin interferencia de señal', 'No cambia el color de la vista', 'Estable al color — no vira a morado', 'Apto para vidrio de baja emisividad'],
      en: ['No signal interference', 'Does not shift view color', 'Color stable — will not turn purple', 'Suitable for low-e glass'],
      ja: ['電波干渉なし', '眺望の色を変えない', '色安定 — 紫変色しない', 'Low-Eガラス対応']
    }
  },

  {
    id: 'carbonx',
    nombre: 'Nano CarbonX™',
    familia: 'carbono',
    disponibilidad: 'pedido',
    categorias: ['arquitectonica', 'automotriz'],
    img: 'assets/opt/carbon.webp',
    imgSm: 'assets/opt/carbon-sm.webp',
    destacado: true,
    badge: null,
    claim: {
      es: 'Negro neutro, privacidad y control de calor.',
      en: 'Neutral black, privacy and heat control.',
      ja: 'ニュートラルブラック、プライバシーと遮熱。'
    },
    desc: {
      es: 'Película de nanopartículas de carbono. Acabado negro mate uniforme que no se decolora ni vira a morado con el tiempo. Cuatro tonos para pasar de privacidad ligera a bloqueo casi total de la vista desde el exterior.',
      en: 'Carbon nanoparticle film. Uniform matte black finish that does not fade or turn purple over time. Four shades, from light privacy to near-total blocking of the view from outside.',
      ja: 'カーボンナノ粒子フィルム。経年で退色せず紫変色しない均一なマットブラック仕上げ。4段階の濃度。'
    },
    tonos: [
      { vlt: 50, nombre: 'CarbonX 50' },
      { vlt: 35, nombre: 'CarbonX 35' },
      { vlt: 20, nombre: 'CarbonX 20' },
      { vlt: 5,  nombre: 'CarbonX 05' }
    ],
    specs: {
      rollo: ROLLO,
      tser: 'PENDIENTE', ir: 'PENDIENTE', uv: 'PENDIENTE', glare: 'PENDIENTE',
      garantia: 'PENDIENTE', adhesivo: 'PENDIENTE', capas: 'PENDIENTE'
    },
    beneficios: {
      es: ['Sin interferencia de señal', 'Negro estable, no se decolora', 'Cuatro niveles de privacidad', 'Acabado mate sin brillo espejo'],
      en: ['No signal interference', 'Stable black, does not fade', 'Four privacy levels', 'Matte finish, no mirror glare'],
      ja: ['電波干渉なし', '色安定、退色しない', '4段階のプライバシー', 'ミラー光沢のないマット仕上げ']
    }
  },

  {
    id: 'reflectx',
    nombre: 'ReflectX™',
    familia: 'reflectiva',
    disponibilidad: 'stock',
    categorias: ['arquitectonica'],
    img: 'assets/opt/silver.webp',
    imgSm: 'assets/opt/silver-sm.webp',
    destacado: true,
    badge: { es: 'EN EXISTENCIA', en: 'IN STOCK', ja: '在庫あり' },
    claim: {
      es: 'Acabado espejo para fachadas con sol directo.',
      en: 'Mirror finish for façades in direct sun.',
      ja: '直射日光のファサード向けミラー仕上げ。'
    },
    desc: {
      es: 'Película reflectiva para fachadas con alta carga solar. Acabado espejo desde el exterior durante el día: reduce el consumo de aire acondicionado y da privacidad diurna. La línea para naves, oficinas y edificios con orientación poniente.',
      en: 'Reflective film for façades with high solar load. Mirror finish from outside during daylight: cuts air-conditioning load and provides daytime privacy. The line for warehouses, offices and west-facing buildings.',
      ja: '日射負荷の高いファサード向け反射フィルム。日中は外側からミラー仕上げ。空調負荷を削減し日中のプライバシーを確保。'
    },
    tonos: [
      { vlt: 35, nombre: 'ReflectX 35' },
      { vlt: 20, nombre: 'ReflectX 20' },
      { vlt: 5,  nombre: 'ReflectX 05' }
    ],
    specs: {
      rollo: ROLLO,
      tser: 'PENDIENTE', ir: 'PENDIENTE', uv: 'PENDIENTE', glare: 'PENDIENTE',
      garantia: 'PENDIENTE', adhesivo: 'PENDIENTE', capas: 'PENDIENTE'
    },
    beneficios: {
      es: ['Privacidad diurna desde el exterior', 'Reduce carga térmica de aire acondicionado', 'Ideal para fachada poniente', 'Rollos de ancho comercial'],
      en: ['Daytime privacy from outside', 'Reduces air-conditioning thermal load', 'Ideal for west-facing façades', 'Commercial-width rolls'],
      ja: ['日中の外部からのプライバシー', '空調の熱負荷を削減', '西面ファサードに最適', '商業用幅ロール']
    },
    nota: {
      es: 'Consulta compatibilidad con vidrio templado y doble acristalamiento antes de instalar.',
      en: 'Check compatibility with tempered and double-glazed units before installation.',
      ja: '施工前に強化ガラス・複層ガラスとの適合性をご確認ください。'
    }
  },

  {
    id: 'frost',
    nombre: 'Frost™',
    familia: 'decorativa',
    disponibilidad: 'pedido',
    categorias: ['arquitectonica', 'decorativa'],
    img: 'assets/opt/frost.webp',
    imgSm: 'assets/opt/frost-sm.webp',
    destacado: false,
    badge: null,
    claim: {
      es: 'Privacidad total sin perder luz natural.',
      en: 'Full privacy without losing natural light.',
      ja: '自然光を損なわない完全なプライバシー。'
    },
    desc: {
      es: 'Película esmerilada translúcida. Convierte vidrio claro en vidrio ácido a una fracción del costo y sin obra. Para salas de junta, baños, consultorios, divisiones de oficina y cancelería interior. Se puede cortar con diseño o logotipo.',
      en: 'Translucent frosted film. Turns clear glass into acid-etched glass at a fraction of the cost and with no construction work. For meeting rooms, bathrooms, clinics, office partitions and interior glazing. Can be cut with a design or logo.',
      ja: '半透明のすりガラスフィルム。工事なしで、低コストで透明ガラスをすりガラスに。会議室、浴室、診療所、オフィス間仕切りに。'
    },
    tonos: [
      { vlt: null, nombre: 'Frost' }
    ],
    specs: {
      rollo: ROLLO,
      tser: 'PENDIENTE', ir: 'PENDIENTE', uv: 'PENDIENTE', glare: 'PENDIENTE',
      garantia: 'PENDIENTE', adhesivo: 'PENDIENTE', capas: 'PENDIENTE'
    },
    beneficios: {
      es: ['Reemplaza el vidrio ácido sin obra', 'Se corta con diseño o logotipo', 'Removible sin dañar el vidrio', 'Deja pasar la luz natural'],
      en: ['Replaces acid-etched glass, no construction', 'Cut with a design or logo', 'Removable without damaging glass', 'Lets natural light through'],
      ja: ['工事不要ですりガラスを代替', 'デザイン・ロゴのカット可能', 'ガラスを傷めず剥離可能', '自然光を通す']
    }
  },

  {
    id: 'pdlc',
    nombre: 'PDLC SmartGlass™',
    familia: 'inteligente',
    disponibilidad: 'pedido',
    categorias: ['arquitectonica', 'decorativa'],
    img: 'assets/opt/pdlc-film.webp',
    imgSm: 'assets/opt/pdlc-film-sm.webp',
    destacado: true,
    badge: { es: 'SWITCHABLE', en: 'SWITCHABLE', ja: '調光' },
    claim: {
      es: 'De transparente a opaco con un interruptor.',
      en: 'From clear to opaque at the flick of a switch.',
      ja: 'スイッチひとつで透明から不透明へ。'
    },
    desc: {
      es: 'Película de cristal líquido (PDLC) que cambia de transparente a opaco al aplicar corriente. Se instala sobre vidrio existente, sin cambiar la cancelería. Control por interruptor, control remoto o domótica. Para salas de junta, consultorios, penthouses y showrooms.',
      en: 'Liquid-crystal (PDLC) film that switches from clear to opaque when powered. Installs over existing glass with no change to the frames. Controlled by switch, remote or home automation. For meeting rooms, clinics, penthouses and showrooms.',
      ja: '通電で透明から不透明に切り替わる液晶（PDLC）フィルム。既存ガラスに施工可能。スイッチ、リモコン、ホームオートメーションで制御。'
    },
    tonos: [
      { vlt: null, nombre: 'ON / OFF' }
    ],
    specs: {
      rollo: ROLLO,
      tser: 'PENDIENTE', ir: 'PENDIENTE', uv: 'PENDIENTE', glare: 'PENDIENTE',
      garantia: 'PENDIENTE', adhesivo: 'PENDIENTE', capas: 'PENDIENTE',
      voltaje: 'PENDIENTE', consumo: 'PENDIENTE'
    },
    beneficios: {
      es: ['Se instala sobre vidrio existente', 'Control por interruptor o domótica', 'Privacidad instantánea', 'También funciona como pantalla de proyección'],
      en: ['Installs over existing glass', 'Switch or home-automation control', 'Instant privacy', 'Doubles as a projection screen'],
      ja: ['既存ガラスに施工可能', 'スイッチ／ホームオートメーション制御', '瞬時のプライバシー', 'プロジェクションスクリーンとしても使用可']
    },
    nota: {
      es: 'Requiere instalación eléctrica. Se cotiza por proyecto.',
      en: 'Requires electrical installation. Quoted per project.',
      ja: '電気工事が必要です。プロジェクト単位でのお見積り。'
    }
  }
];

/* ───────────────────────────────────────────────────────────────
   DISTRIBUIDORES
   ─────────────────────────────────────────────────────────────── */
const DISTRIBUIDORES = [
  { pais: { es: 'México', en: 'Mexico', ja: 'メキシコ' },              nombre: 'VITRA Polarizados' },
  { pais: { es: 'Estados Unidos', en: 'United States', ja: 'アメリカ' }, nombre: 'SOLARO West' },
  { pais: { es: 'Canadá', en: 'Canada', ja: 'カナダ' },                 nombre: 'Northline Films' },
  { pais: { es: 'España', en: 'Spain', ja: 'スペイン' },                nombre: 'Luz Clara Studio' },
  { pais: { es: 'Francia', en: 'France', ja: 'フランス' },              nombre: 'Maison Solaire' },
  { pais: { es: 'Japón', en: 'Japan', ja: '日本' },                     nombre: 'Hikari Film Co.' },
  { pais: { es: 'Australia', en: 'Australia', ja: 'オーストラリア' },    nombre: 'Southern Glass Films' },
  { pais: { es: 'Emiratos Árabes Unidos', en: 'United Arab Emirates', ja: 'アラブ首長国連邦' }, nombre: 'Desert Light Films' },
  { pais: { es: 'Brasil', en: 'Brazil', ja: 'ブラジル' },               nombre: 'Brava Film Group' },
  { pais: { es: 'Chile', en: 'Chile', ja: 'チリ' },                     nombre: 'Andes Solar Films' }
];

/* ───────────────────────────────────────────────────────────────
   APLICACIONES
   ─────────────────────────────────────────────────────────────── */
const APLICACIONES = [
  {
    id: 'residencial',
    titulo: { es: 'Residencial', en: 'Residential', ja: '住宅' },
    desc: {
      es: 'Casas y departamentos con ventanales grandes o fachada poniente. Baja la temperatura interior y protege pisos y muebles del sol.',
      en: 'Homes and apartments with large windows or west-facing façades. Lowers indoor temperature and protects floors and furniture from the sun.',
      ja: '大開口や西面ファサードの住宅・マンション。室温を下げ、床や家具を日射から守ります。'
    },
    recomendado: ['irx', 'carbonx']
  },
  {
    id: 'corporativo',
    titulo: { es: 'Corporativo', en: 'Corporate', ja: 'オフィス' },
    desc: {
      es: 'Oficinas, torres y naves industriales. Reduce la carga de aire acondicionado y el deslumbramiento en pantallas.',
      en: 'Offices, towers and industrial buildings. Cuts air-conditioning load and screen glare.',
      ja: 'オフィス、タワー、工場。空調負荷とモニターのまぶしさを軽減。'
    },
    recomendado: ['reflectx', 'irx']
  },
  {
    id: 'interiores',
    titulo: { es: 'Interiores y privacidad', en: 'Interiors & privacy', ja: 'インテリア・プライバシー' },
    desc: {
      es: 'Salas de junta, consultorios, baños y divisiones de cristal. Privacidad sin perder luz ni hacer obra.',
      en: 'Meeting rooms, clinics, bathrooms and glass partitions. Privacy without losing light or doing construction.',
      ja: '会議室、診療所、浴室、ガラス間仕切り。光を損なわず工事も不要。'
    },
    recomendado: ['frost', 'pdlc']
  },
  {
    id: 'automotriz',
    titulo: { es: 'Automotriz', en: 'Automotive', ja: '自動車' },
    desc: {
      es: 'Vehículos particulares y flotillas. Confort térmico, privacidad y protección UV para los ocupantes.',
      en: 'Private vehicles and fleets. Thermal comfort, privacy and UV protection for occupants.',
      ja: '自家用車・法人車両。快適な室温、プライバシー、UV保護。'
    },
    recomendado: ['irx', 'carbonx']
  }
];
