
/* ==========================================================================
   ELYOS SYSTEM — Fitness RPG (v2)
   - Programme d'entraînement entièrement modifiable (séances, exercices, semaine)
   - Nutrition par objectifs (kcal + macros), aliments libres, suggestions
   - XP, niveaux et statistiques dérivés de l'historique : cocher/décocher reste cohérent
   - Chaque journée garde un instantané de ses objectifs et de sa séance :
     modifier le programme ou les macros ne réécrit pas le passé.
   ========================================================================== */

const STORAGE_KEY = 'systeme-chasseur-v2';
const LEGACY_KEY = 'systeme-chasseur-v1';

/* ---------- Équilibrage ---------- */
const BASE_STAT = 10;
const CLASS_BONUS = 3;
const WORKOUT_PART = 180;   // XP répartie entre les exercices de la séance
const WORKOUT_BONUS = 120;  // séance complète → 300 XP
const NUTRI_PART = 180;     // XP répartie entre les 4 objectifs nutritionnels
const NUTRI_BONUS = 120;    // 4 objectifs atteints → 300 XP (identique à la séance)
const XP_UP = 1.25;         // hausse des récompenses de séance et de nutrition : 375 XP chacune
const XP_UP_FROM = '2026-11-16'; // les jours antérieurs gardent l'ancien barème (300 XP)
const xpUp = k => k >= XP_UP_FROM ? XP_UP : 1;
const FULL_XP = Math.round((WORKOUT_PART + WORKOUT_BONUS) * XP_UP);
const fullXP = () => Math.round(FULL_XP * arenaScale(dk())); /* récompense d'une séance (ou d'une nutrition) complète aujourd'hui */
const STAT_PART = 6;        // points de stat répartis (exercices ou objectifs)
const STAT_BONUS = 2;       // bonus de complétion → 8 de chaque côté
const PENALTY_XP = 150;
/* Primes quotidiennes hors macros : hydratation et sommeil (kinahs seulement) */
const WATER_MIN = 2.5, WATER_MAX = 3, WATER_K = 75;
const SLEEP_MIN = 8, SLEEP_K = 75;
function waterOk(d) { return !!d && (d.water || 0) >= WATER_MIN && (d.water || 0) <= WATER_MAX; }
function sleepOk(d) { return !!d && (d.sleep || 0) >= SLEEP_MIN; }
const POINTS_PER_LEVEL = 3;

/* ---------- Statistiques, classes, rangs ---------- */
const STATS = {
  str: { name: 'Force', icon: 'dumbbell' },
  agi: { name: 'Agilité', icon: 'feather' },
  end: { name: 'Endurance', icon: 'heart-pulse' },
  int: { name: 'Intelligence', icon: 'brain' }
};
/* CLASSES : voir le codex (12 classes) */
/* Rangs, sur la courbe de niveaux d'Aion Classic (niveau maximal 999) */
const RANKS = [
  { r: 'E', min: 1,  color: '#8b8f9c', title: 'Chasseur de rang E' },
  { r: 'D', min: 10, color: '#5fd3e0', title: 'Chasseur de rang D' },
  { r: 'C', min: 20, color: '#00f0ff', title: 'Chasseur de rang C' },
  { r: 'B', min: 30, color: '#9f7bff', title: 'Chasseur de rang B' },
  { r: 'A', min: 40, color: '#c4a8ff', title: 'Chasseur de rang A' },
  { r: 'S', min: 50, color: '#f2f6ff', title: 'Chasseur de rang S' },
  { r: 'Nation', s: 'N', min: 60, color: '#ffd56a', title: 'Chasseur de rang Nation' },
  { r: 'Divin', s: 'Ω', min: 65, color: '#9ffcff', title: 'Monarque · Rang Divin' }
];
/* La puissance (points de statistiques, multiplicateur de toutes les statistiques) suit toujours l'ancienne échelle,
   calculée sur l'XP totale : passer à la courbe d'Aion n'a rien retiré à personne.
   « Palier de puissance » = l'ancien niveau. pts : points par palier ; k : multiplicateur. */
const POWER_RANKS = [{ min: 1 }, { min: 10 }, { min: 20 }, { min: 35 }, { min: 50 }, { min: 70 }, { min: 100, pts: 60, k: 2 }, { min: 150, pts: 180, k: 5 }];
/* XP pour passer au niveau suivant, niveaux 1 → 65 (Aion Classic 1.0 à 4.0) */
const AION_XP = [400, 1033, 2355, 4500, 7600, 11910, 17700, 25270, 34940, 47170, 62470, 81360, 104420, 132280, 165630, 205220, 251870, 306470, 369980, 443440, 527970, 624770, 735120, 685000, 760511,
  845779, 1034611, 1258952, 1524214, 1836691, 2203655, 2633434, 3135524, 3720676, 4401051, 5190361, 6104034, 7159384, 8375811, 9775011, 11381200, 13221384, 15325655, 17727511, 20464214, 23577184, 27112434, 31121051, 35659691,
  40791051, 46584434, 53116384, 60471384, 68742434, 78031691, 88451184, 100123511, 113182511, 127773984,
  153328780, 199327414, 279058379, 418587568, 669740108];
const LEVEL_MAX = 999, LEVEL_MAX_TITLE = 'Au-delà de l’Échelle';
/* au-delà de 65 : dans la continuité (+60 % au 64 → 65), la hausse ralentit vers +6 % par niveau, sans jamais s'arrêter */
const XP_NEED = (() => { const a = [0]; for (let L = 1; L < LEVEL_MAX; L++) { if (L <= AION_XP.length) a.push(AION_XP[L - 1]); else { const g = 1.06 + 0.54 * Math.exp(-(L - 64) / 6); a.push(Math.round(a[L - 1] * g)); } } return a; })();
const XP_CUM = (() => { const c = [0, 0]; for (let L = 1; L < LEVEL_MAX; L++) c.push(c[L] + XP_NEED[L]); return c; })();
const lvlTxt = L => L >= LEVEL_MAX ? LEVEL_MAX_TITLE : String(L);
/* lettre du badge (« N » et « Ω » pour les rangs au nom long) */
const rankBadge = rk => rk.s || rk.r;
/* multiplicateur de toutes les statistiques donné par le rang */
const powerRank = pl => { let r = POWER_RANKS[0]; for (const x of POWER_RANKS) if (pl >= x.min) r = x; return r; };
const rankStatK = pl => powerRank(pl).k || 1;
const SYSTEM_LINES = [
  'Entraînez-vous pour ne pas stagner. Le Système suit chacun de vos mouvements.',
  'La faiblesse est un état temporaire. La stagnation est un choix.',
  'Le Système ne récompense que ce qui est accompli.',
  'Un mouvement bâclé ne compte pas. Le Système le sait.',
  'Les macros ne mentent pas. Atteignez-les.',
  'Chaque répétition propre est enregistrée. Chaque excuse aussi.',
  'Faites un peu mieux que la dernière fois. C’est tout ce qui est exigé.'
];
const DAY_NAMES = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const DAY_SHORT = ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'];
const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0];

/* ==========================================================================
   Modèles de programmes
   ========================================================================== */
function E(id, name, muscle, rest, note = '', o = {}) {
  return { id, name, muscle, warm: 2, setsMin: 3, setsMax: 4, repMin: 10, repMax: 15, rest, note, ...o };
}
const PROGRAM_TEMPLATES = {
  ppl5: {
    label: 'Programme d’origine · PPL 5 jours',
    desc: 'Le programme d’Etienne : lundi Push, mardi Pull, mercredi Legs, jeudi Push, vendredi Pull.',
    build: () => ({
      name: 'Push / Pull / Legs',
      order: ['push', 'pull', 'legs'],
      sessions: {
        push: { name: 'Push', muscles: 'Pectoraux · Épaules · Triceps', stat: 'str', ex: [
          E('p1', 'Développé couché barre', 'Pectoraux', 120),
          E('p2', 'Développé incliné à la barre', 'Haut des pectoraux', 120, 'Banc penché.'),
          E('p3', 'Développé militaire', 'Épaules', 120, 'Barre au-dessus de la tête.'),
          E('p4', 'Élévations latérales', 'Épaules', 90, 'Bras levés sur les côtés. Ajoute le poids par petites étapes.'),
          E('p5', 'Extension des triceps à la poulie haute', 'Triceps', 90),
          E('p6', 'Extension des triceps à la poulie basse', 'Triceps', 90, 'Dos à la poulie.')
        ] },
        pull: { name: 'Pull', muscles: 'Dos · Biceps', stat: 'agi', ex: [
          E('u1', 'Tractions (barre fixe)', 'Dos', 120, 'Trop dur : machine d’assistance ou élastique. Trop facile : ajoute du poids.'),
          E('u2', 'Tirage horizontal à la machine guidée', 'Dos', 120),
          E('u3', 'Tirage vertical à la poulie, mains écartées', 'Dos', 120),
          E('u4', 'Tirage horizontal à la poulie, mains rapprochées', 'Dos', 120),
          E('u5', 'Curl marteau', 'Biceps', 90, 'Haltères, pouces vers le haut.'),
          E('u6', 'Curl biceps à la poulie', 'Biceps', 90)
        ] },
        legs: { name: 'Legs', muscles: 'Jambes · Fessiers', stat: 'end', ex: [
          E('l1', 'Adducteurs (machine)', 'Intérieur des cuisses', 90, 'Tu serres les jambes.'),
          E('l2', 'Abducteurs (machine)', 'Côté des fesses', 90, 'Tu écartes les jambes.'),
          E('l3', 'Presse à jambes', 'Cuisses · Fesses', 120),
          E('l4', 'Fentes bulgares, grand pas', 'Fesses · Cuisses', 120, 'Pied arrière sur un banc. 10 à 15 répétitions par jambe.'),
          E('l5', 'Leg extension', 'Avant des cuisses', 90, 'Variante fessiers : extension de hanche à la poulie basse.'),
          E('l6', 'Leg curl', 'Arrière des cuisses', 90)
        ] }
      },
      week: [null, 'push', 'pull', 'legs', 'push', 'pull', null]
    })
  },
  legs3: {
    label: 'Jambes · 3 séances',
    desc: 'Lundi, mercredi, vendredi. Chaque séance a au moins un exercice fessiers et un exercice cuisses, plus le haut du corps.',
    build: () => ({
      name: 'Jambes · 3 séances',
      order: ['ja', 'jb', 'jc'],
      sessions: {
        ja: { name: 'Jambes A', muscles: 'Fessiers · Cuisses · Haut du corps', stat: 'end', ex: [
          E('ja1', 'Hip thrust', 'Fessiers', 120, 'Dos sur un banc, pousser le bassin vers le haut.'),
          E('ja2', 'Presse à jambes', 'Cuisses', 120),
          E('ja3', 'Leg curl', 'Ischios', 90),
          E('ja4', 'Développé couché aux haltères', 'Pectoraux', 120),
          E('ja5', 'Tirage vertical à la poulie', 'Dos', 120)
        ] },
        jb: { name: 'Jambes B', muscles: 'Fessiers · Cuisses · Haut du corps', stat: 'end', ex: [
          E('jb1', 'Fente bulgare, grand pas', 'Fessiers · Cuisses', 120, 'Par jambe.'),
          E('jb2', 'Leg extension', 'Quadriceps', 90),
          E('jb3', 'Kickback à la poulie basse', 'Fessiers', 60, 'Par jambe.'),
          E('jb4', 'Développé militaire', 'Épaules', 120),
          E('jb5', 'Rowing haltère un bras', 'Dos', 90)
        ] },
        jc: { name: 'Jambes C', muscles: 'Cuisses · Fessiers · Haut du corps', stat: 'end', ex: [
          E('jc1', 'Squat gobelet', 'Cuisses', 120),
          E('jc2', 'Soulevé de terre roumain', 'Ischios · Fessiers', 120),
          E('jc3', 'Abducteurs à la machine', 'Fessiers', 60, '', { repMin: 15, repMax: 20 }),
          E('jc4', 'Pompes', 'Pectoraux', 60),
          E('jc5', 'Curl aux haltères', 'Biceps', 90)
        ] }
      },
      week: [null, 'ja', null, 'jb', null, 'jc', null]
    })
  },
  glutes5: {
    label: 'Focus fessiers · 5 séances',
    desc: 'Trois séances fessiers (lundi, mercredi, vendredi) et deux séances haut du corps (mardi, jeudi).',
    build: () => ({
      name: 'Focus fessiers · 5 séances',
      order: ['f1', 'f2', 'f3', 'h1', 'h2'],
      sessions: {
        f1: { name: 'Fessiers lourds', muscles: 'Grand fessier · Cuisses', stat: 'end', ex: [
          E('f1a', 'Hip thrust', 'Fessiers', 150, 'Charge lourde, pause d’une seconde en haut.', { repMin: 8, repMax: 12 }),
          E('f1b', 'Fente bulgare, grand pas', 'Fessiers', 120, 'Par jambe.'),
          E('f1c', 'Abducteurs à la machine', 'Moyen fessier', 60, '', { repMin: 15, repMax: 20 }),
          E('f1d', 'Kickback à la poulie basse', 'Fessiers', 60, 'Par jambe.')
        ] },
        h1: { name: 'Haut du corps A', muscles: 'Dos · Pectoraux · Épaules', stat: 'str', ex: [
          E('h1a', 'Tirage vertical à la poulie', 'Dos', 120),
          E('h1b', 'Développé couché aux haltères', 'Pectoraux', 120),
          E('h1c', 'Élévations latérales', 'Épaules', 90),
          E('h1d', 'Extension à la poulie haute', 'Triceps', 90)
        ] },
        f2: { name: 'Fessiers et ischios', muscles: 'Fessiers · Arrière des cuisses', stat: 'end', ex: [
          E('f2a', 'Soulevé de terre roumain', 'Ischios · Fessiers', 120, '', { repMin: 8, repMax: 12 }),
          E('f2b', 'Glute bridge', 'Fessiers', 90, '', { repMin: 12, repMax: 20 }),
          E('f2c', 'Leg curl', 'Ischios', 90),
          E('f2d', 'Kickback à la poulie basse', 'Fessiers', 60, 'Par jambe.')
        ] },
        h2: { name: 'Haut du corps B', muscles: 'Dos · Épaules · Bras', stat: 'agi', ex: [
          E('h2a', 'Tirage horizontal à la poulie', 'Dos', 120),
          E('h2b', 'Développé aux haltères assis', 'Épaules', 120),
          E('h2c', 'Face pull', 'Arrière d’épaule', 60),
          E('h2d', 'Curl aux haltères', 'Biceps', 90)
        ] },
        f3: { name: 'Fessiers et quadriceps', muscles: 'Fessiers · Avant des cuisses', stat: 'end', ex: [
          E('f3a', 'Squat gobelet', 'Cuisses · Fessiers', 120),
          E('f3b', 'Step-up sur banc', 'Fessiers', 90, 'Par jambe.'),
          E('f3c', 'Presse à jambes, pieds hauts', 'Fessiers · Cuisses', 120),
          E('f3d', 'Abducteurs à la machine', 'Moyen fessier', 60, '', { repMin: 15, repMax: 20 })
        ] }
      },
      week: [null, 'f1', 'h1', 'f2', 'h2', 'f3', null]
    })
  },
  ul4: {
    label: 'Upper / Lower · 4 jours',
    desc: 'Haut du corps lundi et jeudi, bas du corps mardi et vendredi.',
    build: () => ({
      name: 'Upper / Lower',
      order: ['upper', 'lower'],
      sessions: {
        upper: { name: 'Upper', muscles: 'Pectoraux · Dos · Épaules · Bras', stat: 'str', ex: [
          E('ul-u1', 'Développé couché barre', 'Pectoraux', 150, '', { repMin: 6, repMax: 10 }),
          E('ul-u2', 'Tirage vertical à la poulie', 'Dos', 120, '', { repMin: 8, repMax: 12 }),
          E('ul-u3', 'Développé militaire haltères', 'Épaules', 120, '', { repMin: 8, repMax: 12 }),
          E('ul-u4', 'Rowing haltère un bras', 'Dos', 120, '', { repMin: 8, repMax: 12 }),
          E('ul-u5', 'Élévations latérales', 'Épaules', 90),
          E('ul-u6', 'Curl biceps à la poulie', 'Biceps', 90)
        ] },
        lower: { name: 'Lower', muscles: 'Quadriceps · Ischios · Fessiers', stat: 'end', ex: [
          E('ul-l1', 'Squat barre', 'Cuisses · Fesses', 150, '', { repMin: 6, repMax: 10 }),
          E('ul-l2', 'Soulevé de terre roumain', 'Ischios · Fessiers', 150, '', { repMin: 8, repMax: 12 }),
          E('ul-l3', 'Presse à jambes', 'Cuisses', 120),
          E('ul-l4', 'Leg curl', 'Arrière des cuisses', 90),
          E('ul-l5', 'Mollets debout', 'Mollets', 60, '', { warm: 1 })
        ] }
      },
      week: [null, 'upper', 'lower', null, 'upper', 'lower', null]
    })
  },
  fb3: {
    label: 'Full body · 3 jours',
    desc: 'Tout le corps lundi, mercredi et vendredi.',
    build: () => ({
      name: 'Full body',
      order: ['full'],
      sessions: {
        full: { name: 'Full body', muscles: 'Corps entier', stat: 'str', ex: [
          E('fb-1', 'Squat barre', 'Cuisses · Fesses', 150, '', { repMin: 8, repMax: 12 }),
          E('fb-2', 'Développé couché barre', 'Pectoraux', 150, '', { repMin: 8, repMax: 12 }),
          E('fb-3', 'Tirage horizontal à la poulie', 'Dos', 120),
          E('fb-4', 'Développé militaire haltères', 'Épaules', 120),
          E('fb-5', 'Leg curl', 'Arrière des cuisses', 90),
          E('fb-6', 'Curl biceps haltères', 'Biceps', 90)
        ] }
      },
      week: [null, 'full', null, 'full', null, 'full', null]
    })
  },
  empty: {
    label: 'Programme vide',
    desc: 'Une séance vide à remplir toi-même.',
    build: () => ({ name: 'Mon programme', order: ['s1'], sessions: { s1: { name: 'Séance A', muscles: '', stat: 'str', ex: [] } }, week: [null, 's1', null, null, null, null, null] })
  }
};

/* ==========================================================================
   Base d'aliments (valeurs moyennes pour 100 g, indicatives — modifiables)
   k = kcal, p = protéines, c = glucides, f = lipides ; u = poids d'une unité (g)
   grp sert à varier les suggestions
   ========================================================================== */
const FOOD_DB = [
  { id: 'avoine', name: 'Flocons d’avoine', k: 372, p: 13.5, c: 58.7, f: 7, grp: 'fec' },
  { id: 'cereales', name: 'Céréales (pétales de maïs)', k: 378, p: 7.5, c: 84, f: 0.9, grp: 'fec' },
  { id: 'riz_cuit', name: 'Riz blanc cuit', k: 130, p: 2.7, c: 28, f: 0.3, grp: 'fec' },
  { id: 'riz_cru', name: 'Riz blanc cru', k: 355, p: 7, c: 79, f: 0.6, grp: 'fec' },
  { id: 'pates_cuites', name: 'Pâtes cuites', k: 150, p: 5.5, c: 30, f: 0.9, grp: 'fec' },
  { id: 'pates_crues', name: 'Pâtes crues', k: 355, p: 12.5, c: 71, f: 1.5, grp: 'fec' },
  { id: 'semoule', name: 'Semoule cuite', k: 112, p: 3.8, c: 23, f: 0.2, grp: 'fec' },
  { id: 'quinoa', name: 'Quinoa cuit', k: 120, p: 4.4, c: 21, f: 1.9, grp: 'fec' },
  { id: 'pdt', name: 'Pomme de terre cuite', k: 85, p: 2, c: 18, f: 0.1, grp: 'fec' },
  { id: 'patate_douce', name: 'Patate douce cuite', k: 86, p: 1.6, c: 20, f: 0.1, grp: 'fec' },
  { id: 'lentilles', name: 'Lentilles cuites', k: 120, p: 9, c: 17, f: 0.5, grp: 'fec' },
  { id: 'pain', name: 'Pain (baguette)', k: 260, p: 9, c: 52, f: 1.5, grp: 'fec' },
  { id: 'pain_complet', name: 'Pain complet', k: 245, p: 9, c: 45, f: 3, grp: 'fec' },
  { id: 'fb0', name: 'Fromage blanc 0 %', k: 47, p: 7.5, c: 4, f: 0.2, grp: 'lait' },
  { id: 'fb3', name: 'Fromage blanc 3 %', k: 76, p: 7.2, c: 3.8, f: 3.4, grp: 'lait' },
  { id: 'skyr', name: 'Skyr nature', k: 60, p: 10.5, c: 4, f: 0.2, grp: 'lait', u: 150, un: 'pot' },
  { id: 'yaourt', name: 'Yaourt nature', k: 52, p: 4.3, c: 5.3, f: 1.3, grp: 'lait', u: 125, un: 'pot' },
  { id: 'lait_demi', name: 'Lait demi-écrémé', k: 46, p: 3.3, c: 4.8, f: 1.6, grp: 'lait' },
  { id: 'lait_ecreme', name: 'Lait écrémé', k: 34, p: 3.4, c: 4.9, f: 0.1, grp: 'lait' },
  { id: 'emmental', name: 'Emmental', k: 380, p: 28, c: 0, f: 30, grp: 'gras' },
  { id: 'whey', name: 'Protéine en poudre (whey)', k: 380, p: 75, c: 8, f: 6, grp: 'prot', u: 30, un: 'dose' },
  { id: 'creatine', name: 'Créatine', k: 0, p: 0, c: 0, f: 0, grp: 'supp', u: 5, un: 'dose' },
  { id: 'poulet', name: 'Blanc de poulet cuit', k: 150, p: 30, c: 0, f: 3, grp: 'prot' },
  { id: 'dinde', name: 'Escalope de dinde cuite', k: 135, p: 29, c: 0, f: 2, grp: 'prot' },
  { id: 'nuggets', name: 'Nuggets de poulet', k: 240, p: 15, c: 18, f: 12, grp: 'prot' },
  { id: 'steak5', name: 'Steak haché 5 % (cru)', k: 125, p: 21, c: 0, f: 5, grp: 'prot', u: 100, un: 'steak' },
  { id: 'steak15', name: 'Steak haché 15 % (cru)', k: 210, p: 18, c: 0, f: 15, grp: 'prot', u: 100, un: 'steak' },
  { id: 'thon', name: 'Thon au naturel', k: 110, p: 26, c: 0, f: 1, grp: 'prot' },
  { id: 'saumon', name: 'Saumon', k: 200, p: 20, c: 0, f: 13, grp: 'prot' },
  { id: 'jambon', name: 'Jambon blanc', k: 110, p: 20, c: 1, f: 3, grp: 'prot', u: 40, un: 'tranche' },
  { id: 'oeuf', name: 'Œuf entier', k: 140, p: 12.5, c: 0.7, f: 9.8, grp: 'prot', u: 60, un: 'œuf' },
  { id: 'blanc_oeuf', name: 'Blanc d’œuf', k: 48, p: 10.5, c: 0.7, f: 0.2, grp: 'prot' },
  { id: 'tofu', name: 'Tofu nature', k: 120, p: 12, c: 2, f: 7, grp: 'prot' },
  { id: 'legumes', name: 'Légumes (mélange)', k: 35, p: 2, c: 5, f: 0.3, grp: 'leg' },
  { id: 'brocoli', name: 'Brocoli cuit', k: 35, p: 2.5, c: 4, f: 0.4, grp: 'leg' },
  { id: 'haricots_verts', name: 'Haricots verts cuits', k: 30, p: 2, c: 4.5, f: 0.2, grp: 'leg' },
  { id: 'kiwi', name: 'Kiwi', k: 60, p: 1.1, c: 11, f: 0.6, grp: 'fruit', u: 75, un: 'kiwi' },
  { id: 'banane', name: 'Banane', k: 90, p: 1.1, c: 20, f: 0.3, grp: 'fruit', u: 120, un: 'banane' },
  { id: 'pomme', name: 'Pomme', k: 54, p: 0.3, c: 12, f: 0.2, grp: 'fruit', u: 150, un: 'pomme' },
  { id: 'orange', name: 'Orange', k: 47, p: 0.9, c: 9, f: 0.2, grp: 'fruit', u: 150, un: 'orange' },
  { id: 'cacahuetes', name: 'Cacahuètes grillées', k: 600, p: 25, c: 14, f: 49, grp: 'gras' },
  { id: 'beurre_cacahuete', name: 'Beurre de cacahuète', k: 600, p: 25, c: 15, f: 50, grp: 'gras', u: 15, un: 'c. à soupe' },
  { id: 'amandes', name: 'Amandes', k: 600, p: 21, c: 7, f: 52, grp: 'gras' },
  { id: 'avocat', name: 'Avocat', k: 160, p: 1.8, c: 1.5, f: 15, grp: 'gras', u: 150, un: 'avocat' },
  { id: 'huile_olive', name: 'Huile d’olive', k: 900, p: 0, c: 0, f: 100, grp: 'gras', u: 10, un: 'c. à soupe' },
  { id: 'beurre', name: 'Beurre', k: 740, p: 0.7, c: 0.6, f: 82, grp: 'gras', u: 10, un: 'noisette' },
  { id: 'miel', name: 'Miel', k: 320, p: 0.4, c: 80, f: 0, grp: 'sucre', u: 10, un: 'c. à café' },
  { id: 'chocolat_noir', name: 'Chocolat noir 70 %', k: 580, p: 8, c: 33, f: 42, grp: 'sucre', u: 10, un: 'carré' }
];

/* Repas types par défaut : ton plan actuel, désormais simples raccourcis */
function defaultMeals() {
  return [
    { id: 'meal-pdj', name: 'Petit-déjeuner type', items: [
      { fid: 'avoine', g: 70 }, { fid: 'cereales', g: 70 }, { fid: 'fb0', g: 250 }, { fid: 'lait_demi', g: 150 }, { fid: 'creatine', g: 5 }] },
    { id: 'meal-whey', name: 'Boisson protéinée (50 g de protéines)', items: [{ fid: 'whey', g: 66 }] },
    { id: 'meal-diner', name: 'Dîner type', items: [
      { fid: 'avoine', g: 50 }, { fid: 'cereales', g: 70 }, { fid: 'fb0', g: 250 }, { fid: 'lait_demi', g: 150 },
      { fid: 'nuggets', g: 300 }, { fid: 'legumes', g: 220 }, { fid: 'cacahuetes', g: 45 }, { fid: 'kiwi', g: 150 }] }
  ];
}

/* Objectifs nutritionnels par défaut (modifiables dans Réglages) */
function defaultNutrition() {
  return {
    kcal: 2600, kcalTol: 5,
    phase: 'maint',
    phases: { cut: 2400, maint: 2600, bulk: 2800 },
    p: { g: 150, mode: 'min', tol: 0 },
    c: { g: 300, mode: 'target', tol: 10 },
    f: { g: 61, mode: 'target', tol: 15 }
  };
}
const PHASES = { cut: 'Sèche', maint: 'Maintien', bulk: 'Prise de masse' };
const MACRO_KEYS = ['kcal', 'p', 'c', 'f'];
const MACRO_INFO = {
  kcal: { name: 'Calories', unit: 'kcal', short: 'kcal' },
  p: { name: 'Protéines', unit: 'g', short: 'P' },
  c: { name: 'Glucides', unit: 'g', short: 'G' },
  f: { name: 'Lipides', unit: 'g', short: 'L' }
};
const MODE_LABEL = { min: 'Minimum', target: 'Cible', max: 'Maximum', custom: 'Cible personnalisée' };

/* ==========================================================================
   Dates
   ========================================================================== */
function dk(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function fromKey(k) { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); }
function addDays(k, n) { const d = fromKey(k); d.setDate(d.getDate() + n); return dk(d); }
let PRETTY_FMT = null;
function prettyDate(k) { try { PRETTY_FMT = PRETTY_FMT || new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }); return PRETTY_FMT.format(fromKey(k)); } catch (e) { return fromKey(k).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }); } }
function gid(p = 'x') { return p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

/* ==========================================================================
   État, migration et persistance
   ========================================================================== */
function freshState() {
  return {
    v: 2,
    profile: null,
    program: PROGRAM_TEMPLATES.ppl5.build(),
    nutrition: defaultNutrition(),
    foods: [],                 // aliments personnels (peuvent remplacer un aliment de base via le même id)
    meals: defaultMeals(),     // repas types
    days: {},                  // { 'AAAA-MM-JJ': { sid?, plan?, tg?, ex:{id:{w:[],s:[]}}, w:{id:kg}, food:[entrées] } }
    alloc: { str: 0, agi: 0, end: 0, int: 0 },
    penalties: [],
    evaluated: null,
    seenLevel: 1,
    tab: 'status',
    /* Royaume */
    realmTab: 'story',
    story: freshStory(),
    owned: {},                 // { itemId: 'AAAA-MM-JJ' }
    buys: [],                  // [{ id, price, date }]
    equip: { mount: null },
    followers: {},             // { id: { date } }
    bond: {},                  // liens gagnés par le récit { id: n }
    bonus: [],                 // gains de kinahs hors journées [{ date, k, why }]
    raid: {},                  // (ancien) Faille du jour
    /* Arsenal */
    inv: [],                   // [{ uid, type, r, up }]
    gear: { main: null, off: null, casque: null, plastron: null, jambieres: null, bijou: null, ceinture: null },
    mats: { ferraille: 0, ether: 0, coeur: 0, cendre: 0 },
    chips: {},                 // { 'type:r': nombre }
    runes: {},                 // runes en stock { 'type:r': nombre } ; serties : item.runes
    chipEq: [],                // ['type:r', ...] (12 max)
    cosm: {},                  // cosmétiques obtenus { id: date }
    cosmEq: { tenue: 'ten_e', accessoire: null, aura: null, titre: 'tit_sacs', skin: null, ailes: null },
    codex: {},                 // bestiaire { id: { first, kills, seen } }
    counters: { wins: 0, expeditions: 0, crits: 0 },
    keysSpent: 0,
    pauses: [],                // [{ from, to }]
    reader: { font: 'spectral', size: 17, paper: 'system' }
  };
}
function freshStory() {
  return { tome: 'I', node: 'p1', flags: {}, met: {}, archives: {}, endings: {}, snaps: {}, reached: 0, combats: {}, rewards: {}, picked: {}, read: {}, pending: null, tomes: {}, tomeEnds: {} };
}
function mkEntry(food, g) {
  return { id: gid('e'), fid: food.id, name: food.name, g, per: { k: food.k, p: food.p, c: food.c, f: food.f } };
}
function migrateV1(old) {
  const s = freshState();
  s.profile = old.profile || null;
  s.alloc = { ...s.alloc, ...(old.alloc || {}) };
  s.penalties = old.penalties || [];
  s.evaluated = old.evaluated || null;
  s.seenLevel = old.seenLevel || 1;
  const MAP = { m1: 'meal-pdj', m2: 'meal-whey', m3: 'meal-diner' };
  for (const k in old.days || {}) {
    const od = old.days[k];
    const nd = { ex: {}, w: od.w || {}, food: [] };
    if (Object.prototype.hasOwnProperty.call(od, 'session')) nd.sid = od.session;
    for (const id in od.ex || {}) { const a = od.ex[id] || []; nd.ex[id] = { w: a.slice(0, 2), s: a.slice(2) }; }
    for (const mid in od.meals || {}) {
      const arr = od.meals[mid] || [];
      const tpl = s.meals.find(t => t.id === MAP[mid]);
      if (tpl && tpl.items.every((_, i) => arr[i])) {
        for (const it of tpl.items) { const f = FOOD_DB.find(x => x.id === it.fid); if (f) nd.food.push(mkEntry(f, it.g)); }
      }
    }
    s.days[k] = nd;
  }
  return s;
}
function normalize(parsed) {
  const base = freshState();
  const st = { ...base, ...parsed };
  st.alloc = { ...base.alloc, ...(parsed.alloc || {}) };
  st.nutrition = { ...base.nutrition, ...(parsed.nutrition || {}) };
  st.nutrition.phases = { ...base.nutrition.phases, ...((parsed.nutrition || {}).phases || {}) };
  for (const m of ['p', 'c', 'f']) st.nutrition[m] = { ...base.nutrition[m], ...((parsed.nutrition || {})[m] || {}) };
  if (!st.program || !st.program.sessions) st.program = base.program;
  if (!Array.isArray(st.program.week) || st.program.week.length !== 7) st.program.week = base.program.week;
  if (!Array.isArray(st.program.order)) st.program.order = Object.keys(st.program.sessions);
  st.foods = Array.isArray(st.foods) ? st.foods : [];
  st.meals = Array.isArray(st.meals) ? st.meals : base.meals;
  st.story = { ...base.story, ...(parsed.story || {}) };
  for (const k of ['flags', 'met', 'archives', 'endings', 'snaps', 'combats', 'rewards', 'picked', 'read', 'tomes', 'tomeEnds', 'seen']) st.story[k] = { ...((parsed.story || {})[k] || {}) };
  if (!Object.keys(st.story.seen).length) {
    for (const pk of Object.keys(st.story.picked)) st.story.seen[pk.split(':')[0]] = 'avant';
    if (st.story.node) st.story.seen[st.story.node] = 'avant';
    for (const t of Object.values(st.story.tomes)) if (t && t.node) st.story.seen[t.node] = 'avant';
    for (const c of Object.keys(st.story.combats)) st.story.seen[c] = 'avant';
  }
  st.equip = { ...base.equip, ...(parsed.equip || {}) };
  for (const k of ['owned', 'followers', 'bond', 'raid']) st[k] = { ...(parsed[k] || {}) };
  for (const k of ['buys', 'bonus', 'inv', 'chipEq']) st[k] = Array.isArray(parsed[k]) ? parsed[k] : [];
  st.gear = { ...base.gear, ...(parsed.gear || {}) };
  st.mats = { ...base.mats, ...(parsed.mats || {}) };
  st.cosmEq = { ...base.cosmEq, ...(parsed.cosmEq || {}) };
  st.counters = { ...base.counters, ...(parsed.counters || {}) };
  for (const k of ['chips', 'cosm', 'codex', 'chats']) st[k] = { ...(parsed[k] || {}) };
  st.keysSpent = parsed.keysSpent || 0;
  st.pauses = Array.isArray(parsed.pauses) ? parsed.pauses : [];
  st.reader = { ...base.reader, ...(parsed.reader || {}) };
  /* Anciennes classes → nouvelles ; anciens équipements fixes (armes, armures, talismans) remboursés */
  if (st.profile && LEGACY_CLASS[st.profile.cls]) st.profile.cls = LEGACY_CLASS[st.profile.cls];
  if (st.profile && !CLASSES[st.profile.cls]) st.profile.cls = 'assassin';
  st.buys = st.buys.filter(b => !/^[wat]\d$/.test(b.id));
  for (const id of Object.keys(st.owned)) if (/^[wat]\d$/.test(id)) delete st.owned[id];
  st.equip = { mount: (parsed.equip || {}).mount || null };
  st.v = 2;
  return st;
}
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return normalize(JSON.parse(raw));
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) return migrateV1(JSON.parse(legacy));
  } catch (e) { /* stockage indisponible ou corrompu */ }
  return freshState();
}
let state = loadState();

/* Garde les instantanés du jour à jour (objectifs + séance), puis enregistre */
function syncToday() {
  const today = dk();
  const d = state.days[today];
  if (!d) return;
  d.tg = snapTargets();
  d.plan = snapPlan(livePlan(today));
  try {
    const b = boosts(); d.xm = 1 + b.xp / 100; d.km = 1 + b.kin / 100;
    /* un jour rempli après coup reçoit les bonus du moment, plutôt qu'aucun */
    for (const k in state.days) { const x = state.days[k]; if (x && x.xm == null) x.xm = d.xm; if (x && x.km == null) x.km = d.km; }
  } catch (e) {}
}
function save() {
  _memo = null; _arRef = null;
  syncToday();
  _memo = null;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}
function dayEntry(k) {
  if (!state.days[k]) state.days[k] = {};
  const d = state.days[k];
  d.ex = d.ex || {}; d.w = d.w || {}; d.food = d.food || [];
  return d;
}

/* ==========================================================================
   Aliments
   ========================================================================== */
function foodList() {
  const custom = new Map(state.foods.map(f => [f.id, f]));
  const list = FOOD_DB.map(f => (custom.has(f.id) ? { ...f, ...custom.get(f.id), edited: true } : f));
  for (const f of state.foods) if (!FOOD_DB.some(b => b.id === f.id)) list.push({ ...f, mine: true });
  return list;
}
function getFood(id) { return foodList().find(f => f.id === id); }
function entryMacros(e) {
  if (e.per) { const r = (e.g || 0) / 100; return { kcal: e.per.k * r, p: e.per.p * r, c: e.per.c * r, f: e.per.f * r }; }
  const m = e.m || {};
  return { kcal: +m.k || 0, p: +m.p || 0, c: +m.c || 0, f: +m.f || 0 };
}
function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

/* ==========================================================================
   Moteur de règles
   ========================================================================== */
function snapTargets() { return JSON.parse(JSON.stringify({ kcal: state.nutrition.kcal, kcalTol: state.nutrition.kcalTol, p: state.nutrition.p, c: state.nutrition.c, f: state.nutrition.f })); }
function livePlan(k) {
  const d = state.days[k];
  const dow = fromKey(k).getDay();
  const scheduled = state.program.week[dow];
  let sid = d && Object.prototype.hasOwnProperty.call(d, 'sid') ? d.sid : scheduled;
  const s = sid ? state.program.sessions[sid] : null;
  if (!s) sid = null;
  return { sid, name: s ? s.name : null, stat: s ? s.stat : null, ex: s ? s.ex : [], required: !!(scheduled && state.program.sessions[scheduled]) };
}
function snapPlan(p) {
  return { sid: p.sid, name: p.name, stat: p.stat, required: p.required, ex: p.ex.map(e => ({ id: e.id, name: e.name, setsMin: e.setsMin })) };
}
function planOf(k) {
  const d = state.days[k];
  if (k < dk() && d && d.plan) return d.plan;
  return livePlan(k);
}
function effCount(st) { return st && Array.isArray(st.s) ? st.s.filter(Boolean).length : 0; }

function bounds(tg, key) {
  if (key === 'kcal') { const t = tg.kcal, tol = (tg.kcalTol || 0) / 100; return { t, lo: t * (1 - tol), hi: t * (1 + tol), mode: 'target' }; }
  const o = tg[key], tol = (o.tol || 0) / 100;
  if (o.mode === 'min') return { t: o.g, lo: o.g, hi: Infinity, mode: 'min' };
  if (o.mode === 'max') return { t: o.g, lo: null, hi: o.g * (1 + tol), mode: 'max' };
  if (o.mode === 'custom') return { t: o.g, lo: o.g * (1 - Math.min(100, o.tolMinus || 0) / 100), hi: o.g * (1 + (o.tolPlus || 0) / 100), mode: 'custom' };
  return { t: o.g, lo: o.g * (1 - tol), hi: o.g * (1 + tol), mode: 'target' };
}
function nutriResult(k) {
  const d = state.days[k] || {};
  const tg = (k < dk() && d.tg) ? d.tg : snapTargets();
  const list = d.food || [];
  const eat = { kcal: 0, p: 0, c: 0, f: 0 };
  for (const e of list) { const m = entryMacros(e); for (const x in eat) eat[x] += m[x]; }
  const met = {};
  const bk = bounds(tg, 'kcal');
  met.kcal = list.length > 0 && eat.kcal >= bk.lo && eat.kcal <= bk.hi;
  for (const x of ['p', 'c', 'f']) {
    const b = bounds(tg, x);
    met[x] = list.length > 0 && (b.lo === null ? met.kcal : eat[x] >= b.lo) && eat[x] <= b.hi;
  }
  const metCount = MACRO_KEYS.filter(x => met[x]).length;
  return { tg, eat, met, metCount, done: metCount === 4, logged: list.length > 0 };
}
/* XP indexée sur l'arène : la séance et la nutrition complètes rapportent chacune au moins
   la meilleure journée d'arène atteinte jusque-là (record, il ne redescend pas les jours sans arène) */
let _arRef = null;
function arenaRef(k) {
  if (!_arRef) { const by = {}; for (const b of state.bonus || []) if (b.arena && b.x) by[b.date] = (by[b.date] || 0) + b.x;
    let m = 0; _arRef = Object.keys(by).sort().map(d => [d, m = Math.max(m, by[d])]); }
  let r = 0; for (const [d, v] of _arRef) { if (d > k) break; r = v; } return r;
}
function arenaScale(k) { const full = Math.round((WORKOUT_PART + WORKOUT_BONUS) * xpUp(k)); return Math.max(1, arenaRef(k) / full); }
function dayResult(k) {
  const d = state.days[k] || {};
  const plan = planOf(k);
  const n = plan.ex.length;
  let exDone = 0;
  for (const e of plan.ex) if (effCount(d.ex && d.ex[e.id]) >= (e.setsMin || 1)) exDone++;
  const workoutDone = !!plan.sid && n > 0 && exDone === n;
  const nu = nutriResult(k);
  const gains = { str: 0, agi: 0, end: 0, int: 0 };
  let xp = 0, xpBase = 0; const ak = arenaScale(k);
  if (plan.sid && n > 0) {
    const w = (WORKOUT_PART * exDone / n + (workoutDone ? WORKOUT_BONUS : 0)) * xpUp(k);
    xpBase += Math.round(w); xp += Math.round(w * ak);
    const st = ['str', 'agi', 'end'].includes(plan.stat) ? plan.stat : 'str';
    gains[st] += Math.round(STAT_PART * exDone / n) + (workoutDone ? STAT_BONUS : 0);
  }
  { const nx = (NUTRI_PART * nu.metCount / 4 + (nu.done ? NUTRI_BONUS : 0)) * xpUp(k); xpBase += Math.round(nx); xp += Math.round(nx * ak); }
  const xmul = (state.days[k] && state.days[k].xm) || 1;
  xp = Math.round(xp * xmul); xpBase = Math.round(xpBase * xmul);
  gains.int += Math.round(STAT_PART * nu.metCount / 4) + (nu.done ? STAT_BONUS : 0);
  return { plan, n, exDone, workoutDone, nu, nutritionDone: nu.done, required: plan.required, xp, xpBase, arenaK: ak, gains,
           success: (!plan.required || workoutDone) && nu.done };
}
/* Totaux mémorisés (invalidés à chaque sauvegarde) : XP, statistiques, kinahs, jours réussis */
let _memo = null;
let _bm = null;
function totals() {
  if (_memo) return _memo;
  let xp = 0, kin = 0;
  const gains = { str: 0, agi: 0, end: 0, int: 0 };
  const success = [];
  let sessions = 0, nutrition = 0, keys = 5;
  const F = state.followers || {};
  for (const k in state.days) {
    const r = dayResult(k);
    xp += r.xp;
    for (const s in gains) gains[s] += r.gains[s];
    /* Kinahs du jour : autant que l'XP, +100 si la quête est accomplie, primes eau et sommeil,
       puis tous les bonus en % (Maison, équipement, puces, Odile) s'appliquent sur le total, primes comprises */
    const dd = state.days[k];
    let dk_ = r.xpBase + (r.success ? 100 : 0) /* kinahs : barème de base, l'indexation sur l'arène ne touche que l'XP */ + (waterOk(dd) ? WATER_K : 0) + (sleepOk(dd) ? SLEEP_K : 0);
    if (r.workoutDone) sessions++;
    if (r.nutritionDone) nutrition++;
    keys += (r.success ? 3 : 0) + (r.workoutDone ? 1 : 0) + (r.nutritionDone ? 1 : 0);
    if (F.gaspard && k >= F.gaspard.date && r.success) dk_ += 30;
    dk_ *= (dd && dd.km) || 1;
    if (F.odile && k >= F.odile.date) dk_ *= 1.1;
    kin += Math.round(dk_);
    if (r.success) success.push(k);
  }
  /* les pénalités ne touchent plus l'XP ni les kinahs : seulement le prestige (prestige.js) */
  for (const b of state.bonus || []) { kin += b.k; xp += b.x || 0; } /* x : XP gagnée hors journées (arène) */
  for (const b of state.buys || []) kin -= b.price;
  _memo = { xp: Math.max(0, xp), gains, kinah: kin, success: success.sort(), sessions, nutrition, keysEarned: keys };
  _bm = null;
  return _memo;
}
function kinahs() { return totals().kinah; }
/* XP réelle d'un gain aujourd'hui, bonus en % compris */
function xpK(base) { const d = state.days[dk()]; let m = d && d.xm ? d.xm : 1; if (!(d && d.xm)) { try { m = 1 + boosts().xp / 100; } catch (e) { } } return Math.round(base * m); }
/* Montant réel d'une prime aujourd'hui, bonus en % compris */
function primeK(base) {
  const d = state.days[dk()], F = state.followers || {};
  let m = d && d.km ? d.km : 1;
  if (!(d && d.km)) { try { m = 1 + boosts().kin / 100; } catch (e) { } }
  if (F.odile && dk() >= F.odile.date) m *= 1.1;
  return Math.round(base * m);
}
function xpForNext(level) { return level >= LEVEL_MAX ? 0 : XP_NEED[level]; }
function levelInfo(xp) { let lo = 1, hi = LEVEL_MAX; while (lo < hi) { const m = (lo + hi + 1) >> 1; if (XP_CUM[m] <= xp) lo = m; else hi = m - 1; } return { level: lo, into: xp - XP_CUM[lo], need: xpForNext(lo), max: lo >= LEVEL_MAX }; }
/* palier de puissance : l'ancienne échelle (200 + 50 × palier d'XP par palier), qui donne les points de statistiques */
function powerLvl(xp = totals().xp) { const x = Math.max(0, xp); return 1 + Math.floor((-225 + Math.sqrt(225 * 225 + 100 * x)) / 50 + 1e-9); }
function rankOf(level) { let r = RANKS[0]; for (const x of RANKS) if (level >= x.min) r = x; return r; }
function statValues(t = totals()) {
  const out = {}, cls = state.profile ? CLASSES[state.profile.cls] : null;
  /* les cosmétiques portés augmentent toutes les statistiques d'un pourcentage */
  const ck = (1 + (typeof cosmStatPct === 'function' ? cosmStatPct() : 0) / 100) * rankStatK(powerLvl(t.xp));
  for (const s in STATS) out[s] = Math.round((BASE_STAT + (cls && cls.stat === s ? CLASS_BONUS : 0) + t.gains[s] + (state.alloc[s] || 0)) * ck);
  return out;
}
/* Points de statistiques par niveau : +3 au rang E, +6 au rang D, +9 au rang C, +12 au B, +15 au A, +18 au S */
function pointsPerLevel(pl) { let i = 0; POWER_RANKS.forEach((x, j) => { if (pl >= x.min) i = j; }); return POWER_RANKS[i].pts || POINTS_PER_LEVEL * (i + 1); }
/* somme par tranches de rang (calcul direct : une boucle niveau par niveau bloquait l'appli aux très hauts niveaux) */
function pointsEarned(level) {
  level = Math.floor(level); if (!(level >= 2)) return 0;
  let n = 0;
  for (let j = 0; j < POWER_RANKS.length; j++) {
    const lo = Math.max(2, POWER_RANKS[j].min), hi = Math.min(level, j + 1 < POWER_RANKS.length ? POWER_RANKS[j + 1].min - 1 : Infinity);
    if (hi >= lo) n += (hi - lo + 1) * pointsPerLevel(lo);
  }
  return n;
}
/* Répartition qui donne le plus de dégâts : tous les points disponibles entre Force et Agilité,
   en essayant chaque partage (la Force donne l'Attaque, l'Agilité le critique, plafonné à 50 %, et la force des critiques). */
function bestSplit(n) {
  const a0 = { ...state.alloc }, score = k => { state.alloc = { ...a0, str: (a0.str || 0) + k, agi: (a0.agi || 0) + n - k }; const v = dpsScore(playerCombat()); state.alloc = a0; return v; };
  const step = Math.max(1, Math.floor(n / 300)); let best = 0, bv = -1;
  for (let k = 0; k <= n; k += step) { const v = score(k); if (v > bv) { bv = v; best = k; } }
  for (let k = Math.max(0, best - step); k <= Math.min(n, best + step); k++) { const v = score(k); if (v > bv) { bv = v; best = k; } }
  if (score(n) >= bv) best = n;
  return { str: best, agi: n - best, gain: bv / dpsScore(playerCombat()) };
}
/* l'argument est le palier de puissance (powerLvl), pas le niveau affiché */
function availablePoints(level) { const spent = Object.values(state.alloc).reduce((a, b) => a + b, 0); return Math.max(0, pointsEarned(level) - spent); }
/* Pause : jours exclus des pénalités et de la série */
function isPaused(k) { return (state.pauses || []).some(p => k >= p.from && (!p.to || k <= p.to)); }
function pauseActive() { return isPaused(dk()); }
/* Mode souple (au choix) : les jours sans séance exigée (le week-end, ou tous), les récompenses restent à gagner
   si les macros sont tenues, mais un jour manqué ne coûte rien et ne casse pas la série */
function isSoft(k) { const m = state.soft || 'off'; if (m === 'off') return false; const p = planOf(k); if (p.required && p.sid) return false; const dow = fromKey(k).getDay(); return m === 'rest' || (m === 'weekend' && (dow === 0 || dow === 6)); }
function streak() {
  if (!state.profile) return 0;
  const today = dk();
  let n = dayResult(today).success ? 1 : 0;
  for (let k = addDays(today, -1); k >= state.profile.created; k = addDays(k, -1)) { if (isPaused(k)) continue; const ok = dayResult(k).success; if (!ok && isSoft(k)) continue; if (!ok) break; n++; }
  return n;
}
function evaluateQuests() {
  if (!state.profile) return [];
  const today = dk();
  let start = state.evaluated ? addDays(state.evaluated, 1) : state.profile.created;
  const floor = addDays(today, -7);
  if (start < floor) start = floor;
  if (start < state.profile.created) start = state.profile.created;
  const fails = [];
  for (let k = start; k < today; k = addDays(k, 1)) {
    if (state.penalties.some(p => p.date === k) || isPaused(k) || isSoft(k)) continue;
    const r = dayResult(k);
    const reasons = [];
    if (r.required && !r.workoutDone) reasons.push(`Séance ${r.plan.name || ''} incomplète (${r.exDone}/${r.n} exercices)`);
    if (!r.nu.logged) reasons.push('Aucun repas enregistré');
    else if (!r.nu.done) reasons.push(`Objectifs nutritionnels non atteints (${r.nu.metCount}/4)`);
    if (reasons.length) {
      const guarded = !!(state.followers && state.followers.ysolde);
      const g = 1 - Math.min(60, boosts().garde) / 100;
      const gk = (guarded ? 0.66 : 1) * g, seal = (state.prSeals || 0) > 0;
      const p = { date: k, pp: seal ? 0 : Math.round(PR_PEN_PTS * gk), pxp: seal ? 0 : Math.round(PR_PEN_XP * gk), reasons, guarded: guarded || g < 1, sealed: seal };
      if (seal) state.prSeals--;
      state.penalties.push(p); fails.push(p);
    }
  }
  state.evaluated = addDays(today, -1);
  save();
  return fails;
}

/* ---------- Suggestions d'aliments pour combler les macros restantes ---------- */
function suggestions() {
  const nu = nutriResult(dk());
  const tg = nu.tg, eat = nu.eat;
  const need = {}, hi = {};
  for (const x of MACRO_KEYS) {
    const b = bounds(tg, x);
    hi[x] = b.hi;
    need[x] = b.lo === null ? 0 : Math.max(0, (x === 'kcal' ? b.lo : b.t) - eat[x]);
    if (b.mode === 'min') need[x] = Math.max(0, b.t - eat[x]);
  }
  if (need.kcal <= 0 && need.p <= 0 && need.c <= 0 && need.f <= 0) return { done: true, list: [] };
  const key = { kcal: 'k', p: 'p', c: 'c', f: 'f' };
  const scored = [];
  for (const food of foodList()) {
    if (!food.k || food.grp === 'supp') continue;
    /* Portion réaliste : 2 unités max, ou environ 500 kcal, 50 g pour les aliments gras */
    let gmax = food.u ? food.u * 2 : Math.min(300, 500 * 100 / food.k);
    if (food.grp === 'gras' && !food.u) gmax = Math.min(gmax, 50);
    for (const x of MACRO_KEYS) {
      const v = food[key[x]];
      if (v > 0 && isFinite(hi[x])) gmax = Math.min(gmax, (hi[x] - eat[x]) * 100 / v);
    }
    let gneed = 0;
    for (const x of ['p', 'c', 'f']) { const v = food[key[x]]; if (need[x] > 0 && v > 0) gneed = Math.max(gneed, need[x] * 100 / v); }
    if (!gneed && need.kcal > 0) gneed = need.kcal * 100 / food.k;
    let g = Math.min(gmax, gneed);
    if (food.u) { const n = Math.floor(g / food.u); if (n < 1) continue; g = n * food.u; }
    else { g = g >= 50 ? Math.floor(g / 10) * 10 : Math.floor(g / 5) * 5; }
    if (g < 15) continue;
    let score = 0;
    for (const x of ['p', 'c', 'f']) if (need[x] > 0) score += Math.min(food[key[x]] * g / 100, need[x]) / bounds(tg, x).t;
    if (need.kcal > 0) score += 0.3 * Math.min(food.k * g / 100, need.kcal) / tg.kcal;
    scored.push({ food, g, score });
  }
  scored.sort((a, b) => b.score - a.score);
  const out = [], groups = new Set();
  for (const s of scored) { if (groups.has(s.food.grp)) continue; groups.add(s.food.grp); out.push(s); if (out.length === 3) break; }
  return { done: false, list: out, need };
}

/* ==========================================================================
   Utilitaires d'affichage
   ========================================================================== */
const $ = sel => document.querySelector(sel);
function esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function icon(name, cls = 'w-4 h-4') { return (window.lucideSvg && window.lucideSvg(name, cls)) || `<i data-lucide="${name}" class="${cls}"></i>`; }
function refreshIcons() { try { if (window.lucide) window.lucide.createIcons(); } catch (e) {} }
function fmtSec(s) { const m = Math.floor(s / 60), r = s % 60; return m ? (r ? `${m} min ${String(r).padStart(2, '0')}` : `${m} min`) : `${r} s`; }
function r0(n) { return Math.round(n); }
function lineOfDay() {
  const n = Math.floor(fromKey(dk()).getTime() / 86400000);
  const lines = state.story && state.story.endings && state.story.endings.L ? TRUE_LINES : SYSTEM_LINES;
  return lines[n % lines.length];
}
function fmtK(n) { return Math.round(n).toLocaleString('fr-FR'); }
function macroLine(m) { return `${r0(m.kcal)} kcal · P ${r0(m.p)} · G ${r0(m.c)} · L ${r0(m.f)}`; }

function toast(html, kind = '') {
  const box = $('#toasts');
  const el = document.createElement('div');
  el.className = `toast ${kind}`;
  el.innerHTML = html;
  box.appendChild(el);
  refreshIcons();
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 320); }, 2600);
  while (box.children.length > 4) box.firstChild.remove();
}
function showOverlay(html) { $('#overlay').innerHTML = `<div class="overlay" data-a="overlay-bg">${html}</div>`; refreshIcons(); }
function closeOverlay() { $('#overlay').innerHTML = ''; }

/* Action avec annonce des récompenses (diff avant/après) */
let bumpStats = [];
function act(fn, opts = {}) {
  const today = dk();
  const before = totals(), rB = dayResult(today);
  fn();
  save();
  const after = totals(), rA = dayResult(today);
  const dxp = after.xp - before.xp;
  const dk_ = after.kinah - before.kinah;
  if (dk_ > 0 && !opts.quietKinah) toast(`${icon('gem', 'w-4 h-4')}<span class="kinah">+${fmtK(dk_)} kinahs</span>`);
  if (dxp > 0) toast(`${icon('sparkles', 'w-4 h-4 text-neon')}<span class="glow">+${dxp} XP</span>`);
  if (dxp < 0) toast(`${icon('minus-circle', 'w-4 h-4')}<span class="muted">${dxp} XP</span>`, 'redt');
  bumpStats = [];
  for (const s in STATS) {
    const d = after.gains[s] - before.gains[s];
    if (d > 0) { bumpStats.push(s); toast(`${icon(STATS[s].icon, 'w-4 h-4')}<span>${STATS[s].name} <b class="${s === 'int' ? 'glow-umbra' : 'glow'}">+${d}</b></span>`, s === 'int' ? 'umbra' : ''); }
  }
  if (!rB.workoutDone && rA.workoutDone) toast(`${icon('swords', 'w-4 h-4 text-neon')}<span>Séance terminée. Bonus de complétion accordé.</span>`);
  if (!rB.nutritionDone && rA.nutritionDone) toast(`${icon('brain', 'w-4 h-4')}<span>Les 4 objectifs nutritionnels sont atteints.</span>`, 'umbra');
  if (rB.nutritionDone && !rA.nutritionDone) toast(`${icon('triangle-alert', 'w-4 h-4')}<span>Un objectif nutritionnel n’est plus dans la zone.</span>`, 'redt');
  if (!rB.success && rA.success) toast(`${icon('crown', 'w-4 h-4 text-neon')}<span class="glow">Quête quotidienne accomplie.</span>`);
  if (!opts.noRender) render();
  checkLevel();
}
function checkLevel() {
  const L = levelInfo(totals().xp).level;
  if (L > state.seenLevel) {
    const oldRank = rankOf(state.seenLevel).r, newRank = rankOf(L), gained = L - state.seenLevel;
    state.seenLevel = L; save();
    showLevelUp(L, gained, oldRank !== newRank.r ? newRank : null);
  } else if (L < state.seenLevel) { state.seenLevel = L; save(); }
}

/* ==========================================================================
   État d'interface (non sauvegardé)
   ========================================================================== */
const ui = {
  foodMode: 'search', foodQuery: '', selFood: null, selGrams: '',
  editFoodId: null, newMealOpen: false, armed: null, openSessions: new Set(), draftClass: 'assassin', draftName: '', tplPick: null
};

/* ==========================================================================
   Installation (PWA)
   ========================================================================== */
let deferredPrompt = null;
function isStandalone() {
  try { return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true; } catch (e) { return false; }
}
function platform() {
  const ua = navigator.userAgent || '';
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
  if (/Android/.test(ua)) return 'android';
  if (/Macintosh/.test(ua)) return /Chrome|Edg/.test(ua) ? 'mac-chrome' : 'mac-safari';
  if (/Windows/.test(ua)) return 'windows';
  return 'other';
}
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; if (state.profile) render(); });
window.addEventListener('appinstalled', () => { deferredPrompt = null; toast(`${icon('check', 'w-4 h-4 text-neon')}<span>Application installée.</span>`); render(); });
try {
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
  }
} catch (e) { /* environnement sans service worker (aperçu) */ }

/* ==========================================================================
   Vues
   ========================================================================== */
function render() {
  if (typeof grantRelics === 'function') try { grantRelics(); } catch (e) {}
  const app = $('#app'), nav = $('#nav');
  if (!state.profile) { nav.hidden = true; app.innerHTML = viewAwakening(); refreshIcons(); return; }
  nav.hidden = false;
  nav.innerHTML = viewNav();
  if (state.tab === 'log') state.tab = 'status';
  const views = { status: viewStatus, train: viewTraining, food: viewNutrition, realm: viewRealm, settings: viewSettings };
  app.innerHTML = viewHeader() + (ui.guide ? viewGuide() : (views[state.tab] || viewStatus)());
  refreshIcons();
  for (const s of bumpStats) { const el = document.getElementById(`stat-${s}`); if (el) el.classList.add('statbump'); }
  bumpStats = [];
  updateCountdown();
  if (typeof heroAfterRender === 'function') heroAfterRender();
}

/* défilement : c'est le conteneur #scroll qui défile, plus la page (voir .scroller) */
(function () { const o = window.scrollTo.bind(window); window.scrollTo = function (a, b) { const el = document.getElementById('scroll'); if (!el) return o(a, b); if (a && typeof a === 'object') el.scrollTo(a); else el.scrollTo(a || 0, b || 0); }; })();
function viewHeader() {
  const li = levelInfo(totals().xp), rk = rankOf(li.level);
  const canInstall = deferredPrompt && !isStandalone();
  return `
  <header class="hdr mb-4">
    <div class="hdr-l">
      <button type="button" class="label sys-home" data-a="elx-home" aria-label="Revenir à l’écran d’accueil" title="Revenir à l’écran d’accueil">[ Système ]</button>
      <div class="f-display text-sm capitalize hdr-date">${esc(prettyDate(dk()))}</div>
    </div>
    <div class="hdr-r f-display text-sm">
      <div class="hdr-row">
        ${canInstall ? `<button type="button" class="btn sm" data-a="install">${icon('download', 'w-3.5 h-3.5')}Installer</button>` : ''}
        ${typeof musHeaderBtn === 'function' ? musHeaderBtn() : ''}
        <button type="button" class="ibtn" data-a="guide-open" aria-label="Guide du débutant" title="Guide du débutant">${icon('circle-help', 'w-4 h-4')}</button>
        <span class="glow font-bold f-mono hdr-lv" title="Niveau">${li.level >= LEVEL_MAX ? '∞' : 'Niv. ' + li.level}</span>
        <span class="px-1.5 py-0.5 border font-bold" style="color:${rk.color};border-color:${rk.color}">${rankBadge(rk)}</span>
      </div>
      <div class="hdr-row">
        <button type="button" data-a="go-shop" class="hdr-cur f-mono ${kinahs() < 0 ? 'red' : 'kinah'}" aria-label="Kinahs : ${fmtK(kinahs())}. Ouvrir la boutique" title="${fmtK(kinahs())} kinahs">${icon('gem', 'w-3.5 h-3.5')}${fmtShort(kinahs())}</button>
        <button type="button" data-a="go-prestige" class="hdr-cur f-mono" style="color:${prestigePts() < 0 ? '#ff4d6d' : '#ffd56a'}" aria-label="Points de prestige : ${fmtK(prestigePts())}. Ouvrir la boutique du prestige" title="${fmtK(prestigePts())} points de prestige">${icon('award', 'w-3.5 h-3.5')}${fmtShort(prestigePts())}</button>
      </div>
    </div>
  </header>`;
}
function viewNav() {
  const tabs = [['status', 'user', 'Statut'], ['train', 'swords', 'Donjon'], ['food', 'utensils', 'Nutrition'], ['realm', 'castle', 'Royaume'], ['settings', 'settings', 'Réglages']];
  return `<div class="nav-in">${tabs.map(([id, ic, lb]) => `<button type="button" data-a="tab" data-tab="${id}" class="${state.tab === id ? 'on' : ''}" aria-label="${lb}">${icon(ic, '')}<span class="truncate max-w-full">${lb}</span></button>`).join('')}</div>`;
}

/* ---------- Éveil ---------- */
function viewAwakening() {
  return `
  <section class="mt-6 flex flex-col gap-4">
    <div class="sys pop">
      <div class="sys-title mb-4"><span class="bang">!</span>Notification</div>
      <p class="f-display text-lg leading-snug">Vous avez rempli les conditions secrètes pour devenir un <span class="glow">Joueur</span>.</p>
      <p class="muted mt-2 text-sm">Le Système va suivre votre programme d’entraînement et vos objectifs nutritionnels. Les deux se règlent à tout moment dans Réglages. L’inaction sera sanctionnée.</p>
    </div>
    <div class="sys">
      <label for="aw-name" class="label mb-2 block">Nom du Joueur</label>
      <input id="aw-name" class="input f-display" maxlength="24" placeholder="Votre nom" autocomplete="off" value="${esc(ui.draftName)}">
      <div class="label mt-5 mb-2">Classe de base</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${Object.entries(CLASSES).map(([id, c]) => `
          <button type="button" data-a="pick-class" data-cls="${id}" class="text-left p-3 border transition ${ui.draftClass === id ? 'border-neon' : 'border-[#2a2a35]'}"
            style="${ui.draftClass === id ? 'background:rgba(0,240,255,.06);box-shadow:0 0 16px rgba(0,240,255,.15) inset' : 'background:#141418'}">
            <div class="flex items-center gap-2 f-display font-bold ${ui.draftClass === id ? 'glow' : ''}">${icon(c.icon)}${esc(c.name)}</div>
            <div class="text-xs muted mt-1">${esc(c.desc)}</div>
            <div class="text-[11px] mt-1" style="color:#a9adb8">${esc(loadoutText(id))}</div>
          </button>`).join('')}
      </div>
      <div class="mt-5 flex items-center justify-between gap-3 flex-wrap">
        <div class="text-xs muted f-mono">Niveau 1 · Rang E · 4 statistiques à ${BASE_STAT}</div>
        <button type="button" class="btn solid" data-a="awaken">${icon('check')}Accepter</button>
      </div>
      <p id="aw-err" class="text-sm mt-3 red" hidden>Le Système exige un nom.</p>
    </div>
  </section>`;
}

/* ---------- Statut ---------- */
function viewStatus() {
  const t = totals(), li = levelInfo(t.xp), rk = rankOf(li.level), vals = statValues(t), pts = availablePoints(powerLvl(t.xp)), PR = prestigeInfo();
  const cls = CLASSES[state.profile.cls] || CLASSES.shadow;
  const nextRank = RANKS.find(r => r.min > li.level);
  const statSrc = s => {
    if (s === 'int') return 'Nutrition';
    const names = state.program.order.map(id => state.program.sessions[id]).filter(x => x && x.stat === s).map(x => x.name);
    return names.length ? names.join(', ') : 'aucune séance';
  };
  return `
  <section class="flex flex-col gap-4">
    <div class="sys">
      <div class="flex items-center justify-between gap-2 mb-4">
        <div class="sys-title"><span class="bang">!</span>Statut</div>
        <div class="text-xs muted f-mono">${streak()} j. de série</div>
      </div>
      <div class="flex items-center gap-4">
        <div class="rank" style="color:${rk.color};${auraStyle()}">${rankBadge(rk)}</div>
        <div class="min-w-0 flex-1">
          <div class="f-display text-2xl font-bold truncate">${esc(state.profile.name)}</div>
          <div class="text-sm muted flex items-center gap-1.5">${icon(cls.icon, 'w-3.5 h-3.5')}${esc(cls.name)}</div>
          <div class="text-xs mt-0.5" style="color:${rk.color}">${esc(rk.title)}</div>
          ${avatarLine()}
        </div>
        <div class="text-right">
          <div class="label">Niveau</div>
          <div class="f-display ${li.max ? 'text-base' : 'text-4xl'} font-extrabold glow f-mono leading-none">${esc(lvlTxt(li.level))}</div>          ${typeof combatPower === 'function' ? `<div class="label mt-2">Puissance</div><div class="f-mono text-lg glow leading-none">${combatPower().power.toLocaleString('fr-FR')}</div>` : ''}
        </div>
      </div>
      <div class="mt-4">
        <div class="flex justify-between text-xs mb-1.5"><span class="label">Expérience</span><span class="f-mono muted">${li.max ? 'niveau maximal' : `${fmtK(li.into)} / ${fmtK(li.need)} XP`}</span></div>
        <div class="bar"><i style="width:${li.max ? 100 : Math.min(100, li.into / li.need * 100)}%"></i></div>
        <div class="text-xs muted mt-1.5 f-mono">${fmtK(t.xp)} XP au total${nextRank ? ` · rang ${nextRank.s || nextRank.r} au niveau ${nextRank.min}` : li.max ? '' : ' · niveau maximal : 999'}</div>
      </div>
      <div class="mt-3">
        <div class="flex justify-between text-xs mb-1.5"><span class="label" style="color:#ffd56a">${icon('award', 'w-3.5 h-3.5 inline -mt-0.5')} Prestige · niveau ${PR.level}</span><span class="f-mono muted">${PR.need ? `${fmtK(PR.into)} / ${fmtK(PR.need)}` : 'maximal'}</span></div>
        <div class="bar"><i style="width:${PR.need ? Math.min(100, PR.into / PR.need * 100) : 100}%;background:linear-gradient(90deg,#b8860b,#ffd56a);box-shadow:0 0 10px rgba(255,213,106,.5)"></i></div>
        <div class="text-xs muted mt-1.5"><span class="f-mono" style="color:${PR.pts < 0 ? '#ff4d6d' : '#ffd56a'}">${fmtK(PR.pts)}</span> points de prestige · gagnés seulement au Donjon et en Nutrition, perdus à chaque pénalité</div>
      </div>
    </div>
    ${typeof viewHeroCard === 'function' ? viewHeroCard() : ''}
    ${typeof viewSocialCard === 'function' ? viewSocialCard() : ''}
    ${typeof viewPowerCard === 'function' ? `<div class="sys" style="padding-top:4px">${viewPowerCard()}</div>` : ''}
    ${viewQuest()}
    <div class="sys umbra">
      <div class="flex items-center justify-between gap-2 mb-3">
        <div class="sys-title u">Statistiques</div>
        <div class="flex items-center gap-2">${pts > 0 ? `<div class="text-xs f-display glow">${pts} point${pts > 1 ? 's' : ''} à répartir</div>` : `<div class="text-xs muted">les points arrivent avec l’XP</div>`}${Object.values(state.alloc).some(Boolean) ? (ui.armed === 'respec' ? `<button type="button" class="btn sm danger" data-a="respec">Confirmer</button>` : `<button type="button" class="ibtn" data-a="arm" data-k="respec" title="Réinitialiser les points" aria-label="Réinitialiser les points">${icon('rotate-ccw', 'w-4 h-4')}</button>`) : ''}</div>
      </div>
      ${typeof viewOptimizer === 'function' ? viewOptimizer() : ''}
      ${pts > 0 ? `<div class="flex items-center gap-2 mb-2 flex-wrap"><button type="button" class="btn sm u" data-a="alloc-best">${icon('swords', 'w-3.5 h-3.5')}Répartir pour le plus de dégâts</button><span class="text-[11px] muted">Calcule le meilleur partage Force / Agilité pour vos ${pts} points (arme, puces, cosmétiques et montures compris).</span></div>` : ''}
      ${Object.entries(STATS).map(([id, s]) => `
        <div class="flex items-center gap-3 py-2 border-b border-[#24242c] last:border-0">
          <span class="${id === 'int' ? 'glow-umbra' : 'glow'}">${icon(s.icon, 'w-5 h-5')}</span>
          <div class="flex-1 min-w-0">
            <div class="f-display font-semibold tracking-wide uppercase text-sm">${s.name}</div>
            <div class="text-xs muted truncate">Monte avec : ${esc(statSrc(id))}${state.alloc[id] ? ` · ${state.alloc[id]} pt réparti${state.alloc[id] > 1 ? 's' : ''}` : ''}</div>
          </div>
          <div id="stat-${id}" class="f-mono text-xl font-bold">${vals[id]}</div>
          ${pts > 0 ? `<input type="number" id="alloc-n-${id}" class="alloc-n" data-stat="${id}" min="1" max="${pts}" value="${Math.min(pts, ui.allocN || 1)}" inputmode="numeric" aria-label="Nombre de points en ${s.name}"><button type="button" data-a="alloc" data-stat="${id}" class="pip" style="width:30px;height:30px" aria-label="Attribuer ces points en ${s.name}">${icon('plus', 'w-4 h-4')}</button>` : ''}
        </div>`).join('')}
    </div>
    <div class="sys">
      <div class="label mb-2">Message du Système</div>
      <p class="f-display text-base leading-snug">« ${esc(lineOfDay())} »</p>
    </div>
    ${viewRealmTeaser()}
  </section>
  <div class="mt-4">${viewLog()}</div>`;
}
function viewQuest() {
  if (pauseActive()) { const p = state.pauses.find(x => isPaused(dk()) && dk() >= x.from && (!x.to || dk() <= x.to)); return `<div class="sys umbra"><div class="sys-title u mb-2">${icon('pause', 'w-4 h-4')}Jeu en pause</div><p class="f-display text-sm">Le Système vous accorde du repos${p && p.to ? ` jusqu’au ${esc(fromKey(p.to).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }))}` : ''}. Aucune pénalité, votre série est préservée.</p><p class="text-xs muted mt-1">Ce que vous faites quand même (séances, repas, eau, sommeil) rapporte toujours XP et kinahs.</p><button type="button" class="btn sm mt-3" data-a="tab" data-tab="settings">Gérer la pause</button></div>`; }
  const r = dayResult(dk());
  const reward = (r.plan.sid && r.n ? fullXP() : 0) + fullXP();
  const line = (done, label, value, tab) => `
    <button type="button" data-a="tab" data-tab="${tab}" class="w-full flex items-center gap-3 py-2.5 text-left border-b border-[#24242c] last:border-0">
      <span class="check ${done ? 'on' : ''}">${done ? icon('check', 'w-3.5 h-3.5') : ''}</span>
      <span class="flex-1 min-w-0 ${done ? 'muted line-through' : ''}">${label}</span>
      <span class="f-mono text-sm ${done ? 'glow' : ''}">${value}</span>
    </button>`;
  const ph = PHASES[state.nutrition.phase] || 'Objectifs';
  return `
  <div class="sys">
    <div class="flex items-center justify-between gap-2 mb-1">
      <div class="sys-title"><span class="bang">!</span>Quête quotidienne</div>
      <div class="text-xs f-mono muted">${icon('timer', 'w-3.5 h-3.5 inline -mt-0.5')} <span id="countdown">--:--:--</span></div>
    </div>
    <p class="f-display text-sm muted mt-3 mb-2">Préparatifs pour devenir puissant</p>
    ${r.plan.sid
      ? line(r.workoutDone, `Séance ${esc(r.plan.name)}${r.required ? '' : ' (facultative)'}`, `[${r.exDone}/${r.n}]`, 'train')
      : `<div class="flex items-center gap-3 py-2.5 border-b border-[#24242c]"><span class="check" style="border-style:dashed">${icon('moon', 'w-3 h-3 muted')}</span><span class="flex-1 muted">Repos : les muscles récupèrent</span><span class="f-mono text-sm muted">—</span></div>`}
    ${line(r.nutritionDone, `Macros ${ph.toLowerCase()} : ${state.nutrition.kcal} kcal`, `[${r.nu.metCount}/4]`, 'food')}
    <div class="flex gap-3 text-[11px] mt-2 flex-wrap"><span class="${waterOk(state.days[dk()]) ? 'glow' : 'muted'}">${icon('droplets', 'w-3.5 h-3.5 inline -mt-0.5')} Prime eau +${primeK(WATER_K)}</span><span class="${sleepOk(state.days[dk()]) ? 'glow' : 'muted'}">${icon('moon', 'w-3.5 h-3.5 inline -mt-0.5')} Prime sommeil +${primeK(SLEEP_K)}</span><span class="muted">(bonus, hors quête)</span></div>
    <div class="mt-3 flex items-center justify-between gap-2 text-xs flex-wrap">
      <span class="muted">Récompense : <b class="glow f-mono">${xpK(reward)} XP</b>${xpK(reward) > reward ? ` <span class="text-[11px]">(dont bonus +${xpK(reward) - reward})</span>` : ''}</span>
      ${r.success ? `<span class="glow f-display tracking-widest uppercase">Accomplie</span>`
                  : isSoft(dk()) ? `<span class="f-display tracking-wide" style="color:#9ffcff">${icon('feather', 'w-3.5 h-3.5 inline -mt-0.5')} Jour souple : aucune pénalité</span>` : `<span class="f-display tracking-wide red">${icon('triangle-alert', 'w-3.5 h-3.5 inline -mt-0.5')} Échec : −${PR_PEN_PTS} prestige</span>`}
    </div>
  </div>`;
}

/* ---------- Entraînement ---------- */
function lastWeight(exId, beforeKey) {
  const keys = Object.keys(state.days).filter(k => k < beforeKey).sort().reverse();
  for (const k of keys) { const w = state.days[k].w && state.days[k].w[exId]; if (w !== undefined && w !== '' && w !== null) return { kg: w, date: k }; }
  return null;
}
function viewWeekStrip() {
  const today = dk(), dow = fromKey(today).getDay(), monday = addDays(today, -((dow + 6) % 7));
  let html = '';
  for (let i = 0; i < 7; i++) {
    const k = addDays(monday, i), r = dayResult(k), pen = state.penalties.some(p => p.date === k);
    let style = '';
    if (r.workoutDone) style = 'border-color:rgba(0,240,255,.6);background:rgba(0,240,255,.08)';
    else if (pen) style = 'border-color:rgba(255,59,92,.6);background:rgba(255,59,92,.06)';
    html += `<div class="daycell ${k === today ? 'today' : ''}" style="${style};aspect-ratio:auto;padding:6px 2px;align-items:center;gap:2px">
      <span class="text-[10px] muted f-display">${DAY_SHORT[fromKey(k).getDay()]}</span>
      <span class="text-[11px] f-display font-semibold truncate max-w-full ${r.workoutDone ? 'glow' : ''}">${r.plan.sid ? esc(r.plan.name) : '·'}</span>
    </div>`;
  }
  return `<div class="grid grid-cols-7 gap-1.5">${html}</div>`;
}
function viewTraining() {
  const today = dk(), r = dayResult(today), d = state.days[today] || {};
  const prog = state.program, plan = livePlan(today);
  const chips = prog.order.filter(id => prog.sessions[id]).map(id =>
    `<button type="button" class="chip ${plan.sid === id ? 'on' : ''}" data-a="session" data-s="${id}">${esc(prog.sessions[id].name)}</button>`).join('')
    + (!plan.required ? `<button type="button" class="chip ${!plan.sid ? 'on' : ''}" data-a="session" data-s="">Repos</button>` : '');
  const scheduled = prog.week[fromKey(today).getDay()];

  let body = '';
  if (!plan.sid) {
    body = `
      <div class="sys umbra">
        <div class="sys-title u mb-3">Repos</div>
        <p class="f-display">${DAY_NAMES[fromKey(today).getDay()]} : rien à soulever. Tes muscles récupèrent.</p>
        <p class="text-sm muted mt-2">La quête du jour ne demande que tes objectifs nutritionnels. Une séance lancée ci-dessus rapporte l’XP normale sans être exigée.</p>
        ${isSoft(today) ? `<p class="text-sm mt-2" style="color:#9ffcff">${icon('feather', 'w-3.5 h-3.5 inline -mt-0.5')} Jour souple : mange plus librement. Macros tenues = récompenses gagnées ; sinon, rien de gagné mais aucune pénalité.</p>` : ''}
      </div>`;
  } else {
    const S = prog.sessions[plan.sid];
    const pct = r.n ? r.exDone / r.n * 100 : 0;
    body = `
      <div class="sys">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <div class="label">Donjon du jour${plan.required ? '' : ' · facultatif'}</div>
            <h2 class="f-display text-2xl font-bold glow">${esc(S.name)}</h2>
            <div class="text-sm muted">${esc(S.muscles || '')}${S.muscles ? ' · ' : ''}fait monter ${STATS[S.stat] ? STATS[S.stat].name : 'Force'}</div>
          </div>
          <div class="text-right shrink-0">
            <div class="f-mono text-2xl font-bold">${r.exDone}<span class="muted text-base">/${r.n}</span></div>
            <div class="text-[11px] muted">exercices</div>
          </div>
        </div>
        <div class="bar mt-3"><i style="width:${pct}%"></i></div>
      </div>
      ${S.ex.length ? S.ex.map((e, i) => viewExercise(e, i, d, today)).join('') : `<div class="card text-sm muted">Cette séance n’a aucun exercice. Ajoute-les dans Réglages → Programme.</div>`}
      ${r.workoutDone
        ? `<div class="sys pop"><div class="sys-title mb-2"><span class="bang">!</span>Donjon nettoyé</div><p class="f-display">Séance complète. +${xpK(fullXP())} XP et ${STATS[S.stat] ? STATS[S.stat].name : 'Force'} +${STAT_PART + STAT_BONUS}. Le Système prend acte.</p></div>`
        : (r.n ? `<p class="text-xs muted px-1">Un exercice est validé dès que son nombre minimum de vraies séries est coché. La séance complète rapporte ${xpK(fullXP())} XP, autant que des macros atteintes.${arenaScale(dk()) > 1 ? ` Indexée sur votre record d’arène (${Math.round(arenaRef(dk())).toLocaleString('fr-FR')} XP en une journée) : l’effort réel rapporte toujours au moins autant que le jeu.` : ''}</p>` : '')}`;
  }
  return `
  <section class="flex flex-col gap-4">
    <div class="sys">
      <div class="flex items-center justify-between gap-2 mb-3">
        <div class="sys-title">Semaine</div>
        <div class="text-xs muted truncate">${esc(prog.name)}</div>
      </div>
      ${viewWeekStrip()}
      <div class="label mt-4 mb-2">Séance d’aujourd’hui</div>
      <div class="flex flex-wrap gap-2">${chips || '<span class="text-sm muted">Aucune séance dans le programme.</span>'}</div>
      ${scheduled && prog.sessions[scheduled] && plan.sid !== scheduled ? `<p class="text-xs muted mt-2">Prévu par le programme : ${esc(prog.sessions[scheduled].name)}.</p>` : ''}
    </div>
    ${body}
    ${viewLoadTracker()}
    ${viewRules()}
  </section>`;
}
/* ---------- Suivi des charges par exercice ---------- */
function loadHistory() {
  const names = {}, sess = {}, prog = state.program;
  for (const id of prog.order) { const S = prog.sessions[id]; if (S) for (const e of S.ex) { names[e.id] = e.name; sess[e.id] = S.name; } }
  const H = {};
  for (const k of Object.keys(state.days).sort()) { const d = state.days[k]; if (!d || !d.w) continue;
    if (d.plan && d.plan.ex) for (const e of d.plan.ex) if (!names[e.id] && e.name) names[e.id] = e.name;
    for (const id in d.w) { const kg = parseFloat(String(d.w[id]).replace(',', '.')); if (!(kg > 0)) continue; (H[id] = H[id] || []).push({ k, kg, sets: effCount(d.ex && d.ex[id]) }); } }
  return { H, names, sess };
}
function sparkSVG(v, w = 92, h = 26) {
  if (v.length < 2) return '';
  const mn = Math.min(...v), mx = Math.max(...v), rg = mx - mn || 1, pts = v.map((x, i) => `${(i / (v.length - 1) * (w - 4) + 2).toFixed(1)},${(h - 3 - (x - mn) / rg * (h - 6)).toFixed(1)}`).join(' ');
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true"><polyline points="${pts}" fill="none" stroke="#00f0ff" stroke-width="1.6" stroke-linejoin="round"/><circle cx="${pts.split(' ').pop().split(',')[0]}" cy="${pts.split(' ').pop().split(',')[1]}" r="2.2" fill="#00f0ff"/></svg>`;
}
function viewLoadTracker() {
  const { H, names, sess } = loadHistory(), ids = Object.keys(H).sort((a, b) => (sess[a] || '~').localeCompare(sess[b] || '~') || (names[a] || a).localeCompare(names[b] || b));
  const fd = k => fromKey(k).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }), f1 = x => (Math.round(x * 10) / 10).toLocaleString('fr-FR');
  let lastS = null;
  const rows = ids.map(id => { const L = H[id], first = L[0], last = L[L.length - 1], best = Math.max(...L.map(x => x.kg)), dk_ = last.kg - first.kg, pc = first.kg ? dk_ / first.kg * 100 : 0;
    const head = sess[id] !== lastS ? `<div class="label mt-3 mb-1">${esc(sess[id] || 'Anciens exercices')}</div>` : ''; lastS = sess[id];
    return head + `<details class="card" style="padding:8px 10px"><summary class="flex items-center gap-2" style="list-style:none;cursor:pointer">
      <span class="flex-1 min-w-0"><span class="block text-sm f-display truncate">${esc(names[id] || id)}</span><span class="block text-[11px] muted f-mono">${f1(last.kg)} kg · record ${f1(best)} kg${L.length > 1 ? ` · <span style="color:${dk_ > 0 ? '#4ade80' : dk_ < 0 ? '#ff4d6d' : '#a9adb8'}">${dk_ > 0 ? '+' : ''}${f1(dk_)} kg (${dk_ > 0 ? '+' : ''}${Math.round(pc)} %)</span>` : ''}</span></span>
      ${sparkSVG(L.slice(-12).map(x => x.kg))}</summary>
      <table class="w-full text-[11px] f-mono mt-2"><thead><tr class="muted"><th class="text-left font-normal">Date</th><th class="text-right font-normal">Charge</th><th class="text-right font-normal">Séries</th><th class="text-right font-normal">Écart</th></tr></thead><tbody>
      ${L.slice(-10).reverse().map((x, i, a) => { const prev = a[i + 1], dd = prev ? x.kg - prev.kg : 0; return `<tr><td>${fd(x.k)}</td><td class="text-right">${f1(x.kg)} kg${x.kg === best ? ' ★' : ''}</td><td class="text-right">${x.sets || '—'}</td><td class="text-right" style="color:${dd > 0 ? '#4ade80' : dd < 0 ? '#ff4d6d' : '#7c8190'}">${prev ? (dd > 0 ? '+' : '') + f1(dd) : ''}</td></tr>`; }).join('')}
      </tbody></table>${L.length > 10 ? `<div class="text-[10px] muted mt-1">${L.length} séances enregistrées, les 10 dernières affichées.</div>` : ''}</details>`; }).join('');
  return `<details class="sys" data-det="loads">
    <summary class="flex items-center justify-between gap-2"><span class="sys-title">${icon('trending-up', 'w-4 h-4')}Suivi des charges</span><span class="chev muted">${icon('chevron-down')}</span></summary>
    <div class="mt-3">${ids.length ? `<p class="text-[11px] muted mb-1">Charge notée à chaque séance, par exercice. ★ : record. Touchez un exercice pour son historique.</p>${rows}` : '<p class="text-sm muted">Aucune charge enregistrée pour l’instant : notez le poids utilisé dans la case « Charge (kg) » de chaque exercice.</p>'}</div>
  </details>`;
}
function viewExercise(e, i, d, today) {
  const st = (d.ex && d.ex[e.id]) || { w: [], s: [] };
  const eff = effCount(st), done = eff >= e.setsMin;
  const cur = d.w && d.w[e.id] !== undefined ? d.w[e.id] : '';
  const last = lastWeight(e.id, today);
  const warmPips = Array.from({ length: e.warm }, (_, j) =>
    `<button type="button" class="pip warm ${st.w[j] ? 'on' : ''}" data-a="pip" data-ex="${e.id}" data-kind="w" data-i="${j}" aria-label="Échauffement ${j + 1}" aria-pressed="${!!st.w[j]}">É${j + 1}</button>`).join('');
  const setPips = Array.from({ length: e.setsMax }, (_, j) =>
    `<button type="button" class="pip ${j >= e.setsMin ? 'opt' : ''} ${st.s[j] ? 'on' : ''}" data-a="pip" data-ex="${e.id}" data-kind="s" data-i="${j}" aria-label="Série ${j + 1}${j >= e.setsMin ? ' (facultative)' : ''}" aria-pressed="${!!st.s[j]}">${j + 1}</button>`).join('');
  return `
  <article class="ex ${done ? 'done' : ''}">
    <div class="flex items-start gap-3">
      <div class="f-mono text-xs muted pt-1 w-5 shrink-0">${String(i + 1).padStart(2, '0')}</div>
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between gap-2">
          <h3 class="f-display font-semibold text-base leading-tight ${done ? 'glow' : ''}">${esc(e.name)}</h3>
          ${done ? `<span class="text-[10px] f-display tracking-widest uppercase glow shrink-0 mt-0.5">Validé</span>` : ''}
        </div>
        <div class="text-xs muted mt-0.5">${esc(e.muscle)}${e.muscle ? ' · ' : ''}${e.setsMin === e.setsMax ? e.setsMin : `${e.setsMin}–${e.setsMax}`} × ${e.repMin === e.repMax ? e.repMin : `${e.repMin}–${e.repMax}`} reps · pause ${fmtSec(e.rest)}</div>
        ${e.note ? `<p class="text-xs mt-1.5" style="color:#a9adb8">${esc(e.note)}</p>` : ''}
      </div>
    </div>
    <div class="mt-3 flex items-end gap-3 flex-wrap">
      ${e.warm ? `<div><div class="text-[10px] label mb-1">Éch.</div><div class="flex gap-1.5">${warmPips}</div></div>` : ''}
      <div><div class="text-[10px] label mb-1">Vraies séries</div><div class="flex gap-1.5 flex-wrap">${setPips}</div></div>
      <div class="ml-auto w-[104px]">
        <label for="w-${e.id}" class="text-[10px] label mb-1 block">Charge (kg)</label>
        <input id="w-${e.id}" data-w="${e.id}" type="number" inputmode="decimal" step="0.5" min="0" class="input sm f-mono" value="${esc(cur)}" placeholder="${last ? esc(last.kg) : '—'}">
      </div>
    </div>
    ${last ? `<div class="text-[11px] muted mt-2 f-mono">Dernière fois : ${esc(last.kg)} kg (${esc(fromKey(last.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }))}). Fais un peu mieux.</div>` : ''}
  </article>`;
}
function viewRules() {
  return `
  <details class="sys">
    <summary class="flex items-center justify-between gap-2"><span class="sys-title">Règles du Système</span><span class="chev muted">${icon('chevron-down')}</span></summary>
    <div class="mt-4 text-sm flex flex-col gap-3" style="max-width:65ch">
      <div><b class="f-display">Les 3 ou 4 dernières répétitions doivent être dures,</b> <span class="muted">mais le mouvement reste propre. L’échec complet n’est pas obligatoire.</span></div>
      <div><b class="f-display">Double progression.</b> <span class="muted">D’abord tu ajoutes des répétitions. Quand tu atteins le haut de la fourchette sur toutes tes séries, ajoute 1 à 2 kg et repars vers le bas.</span></div>
      <div class="overflow-x-auto">
        <table class="w-full text-xs f-mono" style="min-width:300px">
          <thead><tr class="muted text-left"><th class="py-1 pr-2 font-normal">Sem.</th><th class="pr-2 font-normal">Poids</th><th class="pr-2 font-normal">Séries 1/2/3</th><th class="font-normal">But</th></tr></thead>
          <tbody>
            <tr class="border-t border-[#24242c]"><td class="py-1">1</td><td>50 kg</td><td>12/11/10</td><td class="f-display">Trouver le bon poids</td></tr>
            <tr class="border-t border-[#24242c]"><td class="py-1">2</td><td>50 kg</td><td>13/12/11</td><td class="f-display">Plus de répétitions</td></tr>
            <tr class="border-t border-[#24242c]"><td class="py-1">3</td><td>50 kg</td><td>15/14/12</td><td class="f-display">Continuer</td></tr>
            <tr class="border-t border-[#24242c]"><td class="py-1">4</td><td class="glow">52 kg</td><td>12/11/10</td><td class="f-display">Ajouter du poids</td></tr>
          </tbody>
        </table>
      </div>
      <div><b class="f-display">Pauses.</b> <span class="muted">Le minuteur se lance quand tu coches une vraie série, avec la pause réglée pour l’exercice. Encore essoufflé ? Prends plus de temps.</span></div>
    </div>
  </details>`;
}

/* ---------- Nutrition ---------- */
function macroBar(key, nu) {
  const b = bounds(nu.tg, key), val = nu.eat[key], info = MACRO_INFO[key], met = nu.met[key];
  const top = Math.max(b.t * 1.3, val * 1.05, isFinite(b.hi) ? b.hi * 1.08 : 0, 1);
  const lo = b.lo === null ? 0 : b.lo;
  const hi = isFinite(b.hi) ? b.hi : top;
  const over = isFinite(b.hi) && val > b.hi;
  let status;
  if (met) status = `<span class="glow">dans la zone</span>`;
  else if (over) status = `<span class="red">${r0(val - b.hi)} ${info.unit} au-dessus du plafond</span>`;
  else if (b.lo !== null && val < b.lo) status = b.mode === 'min'
    ? `reste au moins ${r0(b.lo - val)} ${info.unit}`
    : `reste ${r0(b.lo - val)} à ${r0(b.hi - val)} ${info.unit}`;
  else if (!nu.logged) status = 'rien d’enregistré';
  else status = 'validé quand les calories sont dans la zone';
  const modeTxt = b.mode === 'min' ? 'min.' : b.mode === 'max' ? 'max.' : b.mode === 'custom' ? `−${nu.tg[key].tolMinus || 0} % / +${nu.tg[key].tolPlus || 0} %` : `± ${key === 'kcal' ? nu.tg.kcalTol : nu.tg[key].tol} %`;
  return `
    <div>
      <div class="flex items-baseline justify-between gap-2 mb-1">
        <span class="f-display text-sm font-semibold">${info.name}</span>
        <span class="f-mono text-sm"><b class="${met ? 'glow' : ''}">${r0(val)}</b><span class="muted"> / ${r0(b.t)} ${info.unit} ${modeTxt}</span></span>
      </div>
      <div class="mbar ${met ? 'met' : ''} ${over ? 'over' : ''}">
        <div class="zone" style="left:${lo / top * 100}%;width:${(hi - lo) / top * 100}%"></div>
        <div class="fill" style="width:${Math.min(100, val / top * 100)}%"></div>
        <div class="tick" style="left:calc(${b.t / top * 100}% - 1px)"></div>
      </div>
      <div class="text-[11px] mt-1 muted">${status}</div>
    </div>`;
}
function foodResults() {
  const q = norm(ui.foodQuery.trim());
  const list = foodList().filter(f => !q || norm(f.name).includes(q)).slice(0, q ? 12 : 8);
  if (!list.length) return `<p class="text-sm muted py-2">Aucun aliment trouvé. Crée-le dans « Nouvel aliment » avec les valeurs de l’étiquette.</p>`;
  return list.map(f => `
    <button type="button" class="res ${ui.selFood === f.id ? 'on' : ''}" data-a="sel-food" data-f="${f.id}">
      <span class="flex-1 min-w-0"><span class="block truncate">${esc(f.name)}${f.mine ? ' <span class="text-[10px] glow-umbra">perso</span>' : f.edited ? ' <span class="text-[10px] glow-umbra">modifié</span>' : ''}</span>
      <span class="text-[11px] muted f-mono">100 g : ${f.k} kcal · P ${f.p} · G ${f.c} · L ${f.f}</span></span>
      ${icon('chevron-right', 'w-4 h-4 muted')}
    </button>`).join('');
}
function selPreview(f, g) {
  const r = (+g || 0) / 100;
  return `${r0(f.k * r)} kcal · P ${r0(f.p * r)} · G ${r0(f.c * r)} · L ${r0(f.f * r)}`;
}
function viewFoodAdder() {
  const modes = [['search', 'Base d’aliments'], ['meals', 'Repas types'], ['free', 'Saisie libre'], ['custom', 'Mes aliments']];
  let inner = '';
  if (ui.foodMode === 'search') {
    const f = ui.selFood ? getFood(ui.selFood) : null;
    inner = `
      <div class="relative">
        <input id="food-q" class="input" placeholder="Rechercher : riz, poulet, kiwi…" autocomplete="off" value="${esc(ui.foodQuery)}">
      </div>
      <div id="food-results" class="mt-1">${foodResults()}</div>
      ${f ? `
        <div class="card mt-3" style="border-color:rgba(139,92,246,.5)">
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0"><div class="f-display font-semibold">${esc(f.name)}</div><div class="text-[11px] muted f-mono">pour 100 g : ${f.k} kcal · P ${f.p} · G ${f.c} · L ${f.f}</div></div>
            <button type="button" class="btn sm ghost" data-a="edit-food" data-f="${f.id}">${icon('pencil', 'w-3 h-3')}Valeurs</button>
          </div>
          <div class="flex items-end gap-2 mt-3 flex-wrap">
            <div class="w-28"><label for="sel-g" class="text-[10px] label block mb-1">Quantité (g)</label>
              <input id="sel-g" type="number" inputmode="decimal" min="0" step="1" class="input sm f-mono" value="${esc(ui.selGrams)}" placeholder="100"></div>
            ${f.u ? [1, 2, 3].map(n => `<button type="button" class="chip" data-a="sel-units" data-n="${n}">${n} ${esc(f.un || 'unité')}${n > 1 && !/s$/.test(f.un || '') && !/\./.test(f.un || '') ? 's' : ''}</button>`).join('') : ''}
          </div>
          <div class="flex items-center justify-between gap-2 mt-3 flex-wrap">
            <span id="sel-prev" class="text-xs f-mono glow-umbra">${selPreview(f, ui.selGrams || 100)}</span>
            <button type="button" class="btn u" data-a="add-food">${icon('plus')}Ajouter</button>
          </div>
        </div>` : ''}`;
  } else if (ui.foodMode === 'meals') {
    inner = `
      <div class="flex flex-col">
        ${state.meals.length ? state.meals.map(m => {
          const tot = { kcal: 0, p: 0, c: 0, f: 0 };
          for (const it of m.items) { const f = getFood(it.fid); if (f) { const r = it.g / 100; tot.kcal += f.k * r; tot.p += f.p * r; tot.c += f.c * r; tot.f += f.f * r; } }
          return `<div class="res" style="cursor:default">
            <span class="flex-1 min-w-0"><span class="block f-display font-semibold truncate">${esc(m.name)}</span>
            <span class="text-[11px] muted f-mono block">${macroLine(tot)}</span>
            <span class="text-[11px] muted block truncate">${m.items.map(it => { const f = getFood(it.fid); return f ? `${it.g} g ${f.name.toLowerCase()}` : ''; }).filter(Boolean).join(', ')}</span></span>
            <button type="button" class="ibtn danger" data-a="del-meal" data-m="${m.id}" aria-label="Supprimer ${esc(m.name)}">${icon('trash-2', 'w-4 h-4')}</button>
            <button type="button" class="btn sm u" data-a="add-meal" data-m="${m.id}">${icon('plus', 'w-3 h-3')}Ajouter</button>
          </div>`;
        }).join('') : `<p class="text-sm muted py-2">Aucun repas type.</p>`}
      </div>
      <div class="mt-3 border-t border-[#24242c] pt-3">
        ${ui.newMealOpen ? `
          <label for="meal-name" class="text-[10px] label block mb-1">Nom du repas type (créé à partir du journal du jour)</label>
          <div class="flex gap-2"><input id="meal-name" class="input sm" placeholder="Ex. Déjeuner riz-poulet"><button type="button" class="btn sm u" data-a="save-meal">Créer</button><button type="button" class="btn sm ghost" data-a="cancel-meal">Annuler</button></div>
          <p class="text-[11px] muted mt-1">Seuls les aliments de la base sont repris (pas les saisies libres).</p>`
        : `<button type="button" class="btn sm ghost" data-a="open-meal">${icon('bookmark-plus', 'w-3.5 h-3.5')}Enregistrer le journal du jour comme repas type</button>`}
      </div>`;
  } else if (ui.foodMode === 'free') {
    inner = `
      <p class="text-xs muted mb-2">Pour un plat déjà calculé ou une étiquette lue d’un coup d’œil : saisis les totaux de ta portion.</p>
      <div class="grid gap-2" style="grid-template-columns: 1fr 96px">
        <div class="min-w-0"><label for="fr-name" class="text-[10px] label block mb-1">Nom</label><input id="fr-name" class="input sm" placeholder="Ex. Sandwich poulet"></div>
        <div class="min-w-0"><label for="fr-g" class="text-[10px] label block mb-1 truncate">Portion (g)</label><input id="fr-g" type="number" inputmode="decimal" min="0" class="input sm f-mono" placeholder="—"></div>
      </div>
      <div class="grid grid-cols-4 gap-2 mt-2">
        ${[['fr-k', 'kcal'], ['fr-p', 'Prot. (g)'], ['fr-c', 'Gluc. (g)'], ['fr-f', 'Lip. (g)']].map(([id, l]) => `<div class="min-w-0"><label for="${id}" class="text-[10px] label block mb-1 truncate">${l}</label><input id="${id}" type="number" inputmode="decimal" min="0" class="input sm f-mono"></div>`).join('')}
      </div>
      <label for="fr-save" class="flex items-center gap-2 mt-3 text-sm cursor-pointer">
        <input id="fr-save" type="checkbox" checked class="w-4 h-4" style="accent-color: var(--umbra)">
        <span>Enregistrer dans ma base pour le réutiliser</span>
      </label>
      <p class="text-[11px] muted mt-1">Avec le poids de la portion, l’aliment est enregistré pour 100 g et se dose ensuite au gramme. Sans poids, il est enregistré comme « 1 portion ».</p>
      <div class="flex justify-end mt-3"><button type="button" class="btn u" data-a="add-free">${icon('plus')}Ajouter</button></div>`;
  } else {
    const ef = ui.editFoodId ? getFood(ui.editFoodId) : null;
    inner = `
      <p class="text-xs muted mb-2">${ef ? 'Remplace les valeurs par celles de ton étiquette. Les journées passées ne changent pas.' : 'Valeurs pour 100 g, à recopier depuis l’étiquette. L’aliment rejoint ta base et les suggestions.'}</p>
      <label for="cf-name" class="text-[10px] label block mb-1">Nom</label>
      <input id="cf-name" class="input sm mb-2" value="${esc(ef ? ef.name : '')}" placeholder="Ex. Granola maison">
      <div class="grid grid-cols-4 gap-2">
        ${[['cf-k', 'kcal', 'k'], ['cf-p', 'Prot.', 'p'], ['cf-c', 'Gluc.', 'c'], ['cf-f', 'Lip.', 'f']].map(([id, l, key]) => `<div class="min-w-0"><label for="${id}" class="text-[10px] label block mb-1 truncate">${l} /100 g</label><input id="${id}" type="number" inputmode="decimal" min="0" step="0.1" class="input sm f-mono" value="${ef ? esc(ef[key]) : ''}"></div>`).join('')}
      </div>
      <div class="grid grid-cols-2 gap-2 mt-2">
        <div><label for="cf-u" class="text-[10px] label block mb-1">Poids d’une unité (g, facultatif)</label><input id="cf-u" type="number" inputmode="decimal" min="0" class="input sm f-mono" value="${ef && ef.u ? esc(ef.u) : ''}"></div>
        <div><label for="cf-un" class="text-[10px] label block mb-1">Nom de l’unité</label><input id="cf-un" class="input sm" value="${ef && ef.un ? esc(ef.un) : ''}" placeholder="Ex. barre"></div>
      </div>
      <div class="flex justify-end gap-2 mt-3 flex-wrap">
        ${ef ? `<button type="button" class="btn ghost" data-a="cancel-edit-food">Annuler</button>` : ''}
        ${ef && (ef.edited || ef.mine) ? `<button type="button" class="btn danger" data-a="reset-food" data-f="${ef.id}">${ef.mine ? 'Supprimer' : 'Valeurs d’origine'}</button>` : ''}
        <button type="button" class="btn u" data-a="save-food">${icon('save')}Enregistrer</button>
      </div>
      ${viewMyFoods()}`;
  }
  return `
    <div class="sys umbra">
      <div class="sys-title u mb-3">Ajouter</div>
      <div class="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">${modes.map(([id, l]) => `<button type="button" class="chip u ${ui.foodMode === id ? 'on' : ''}" data-a="food-mode" data-mode="${id}">${l}</button>`).join('')}</div>
      <div class="mt-3">${inner}</div>
    </div>`;
}
function viewWaterSleep() {
  const d = state.days[dk()] || {};
  const w = d.water || 0, sl = d.sleep;
  const wOk = waterOk(d), sOk = sleepOk(d), over = w > WATER_MAX;
  const top = 3.5;
  return `
    <div class="sys">
      <div class="flex items-center justify-between gap-2 mb-1 flex-wrap">
        <div class="sys-title">${icon('droplets', 'w-4 h-4')}Hydratation &amp; sommeil</div>
        <span class="text-[11px] muted">Primes en kinahs, sans effet sur les macros</span>
      </div>
      <div class="mt-3">
        <div class="flex items-baseline justify-between gap-2 mb-1">
          <span class="f-display text-sm font-semibold">Eau</span>
          <span class="f-mono text-sm"><b class="${wOk ? 'glow' : over ? 'red' : ''}">${w.toLocaleString('fr-FR')} L</b><span class="muted"> / ${String(WATER_MIN).replace('.', ',')} à ${WATER_MAX} L</span></span>
        </div>
        <div class="mbar ${wOk ? 'met' : ''} ${over ? 'over' : ''}">
          <div class="zone" style="left:${WATER_MIN / top * 100}%;width:${(WATER_MAX - WATER_MIN) / top * 100}%"></div>
          <div class="fill" style="width:${Math.min(100, w / top * 100)}%"></div>
        </div>
        <div class="flex flex-wrap items-center gap-1.5 mt-2">
          <button type="button" class="chip" data-a="water" data-v="-0.25" aria-label="Retirer 25 cl">−25 cl</button>
          <button type="button" class="chip" data-a="water" data-v="0.25">+ verre 25 cl</button>
          <button type="button" class="chip" data-a="water" data-v="0.5">+ gourde 50 cl</button>
          <button type="button" class="chip" data-a="water" data-v="1">+ 1 L</button>
        </div>
        <div class="text-[11px] mt-1 ${wOk ? 'glow' : 'muted'}">${wOk ? `Prime d’hydratation obtenue : +${primeK(WATER_K)} kinahs (bonus compris).` : over ? `Au-dessus de ${WATER_MAX} L : la prime ne compte que dans la zone ${String(WATER_MIN).replace('.', ',')}–${WATER_MAX} L.` : `Encore ${(Math.round((WATER_MIN - w) * 100) / 100).toLocaleString('fr-FR')} L pour la prime de ${primeK(WATER_K)} kinahs.`}</div>
      </div>
      <div class="mt-4 pt-3 border-t border-[#24242c]">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <label for="sleep-h" class="f-display text-sm font-semibold">Sommeil de la nuit dernière</label>
          <div class="flex items-center gap-2"><input id="sleep-h" type="number" inputmode="decimal" min="0" max="16" step="0.25" class="input sm f-mono" style="width:84px" value="${sl ?? ''}" placeholder="—"><span class="text-xs muted">h</span></div>
        </div>
        <div class="flex flex-wrap gap-1.5 mt-2">${[6, 7, 7.5, 8, 8.5, 9].map(h => `<button type="button" class="chip ${sl === h ? 'on' : ''}" data-a="sleep" data-v="${h}">${String(h).replace('.', ',')} h</button>`).join('')}</div>
        <div class="text-[11px] mt-1 ${sOk ? 'glow' : 'muted'}">${sOk ? `Prime de récupération obtenue : +${primeK(SLEEP_K)} kinahs (bonus compris).` : `${SLEEP_MIN} h ou plus : +${primeK(SLEEP_K)} kinahs.`}</div>
      </div>
    </div>`;
}
function viewNutrition() {
  const today = dk(), nu = nutriResult(today), d = state.days[today] || {}, list = d.food || [];
  const sg = suggestions();
  const ph = PHASES[state.nutrition.phase] || 'Personnalisé';
  return `
  <section class="flex flex-col gap-4">
    <div class="sys umbra">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <div class="label">Phase : ${esc(ph)}</div>
          <h2 class="f-display text-2xl font-bold glow-umbra">Ravitaillement</h2>
          <div class="text-sm muted">4 objectifs atteints = ${xpK(fullXP())} XP, autant qu’une séance complète.</div>
        </div>
        <div class="text-right shrink-0">
          <div class="f-mono text-2xl font-bold">${nu.metCount}<span class="muted text-base">/4</span></div>
          <div class="text-[11px] muted">objectifs</div>
        </div>
      </div>
      <div class="flex flex-col gap-3 mt-4">${MACRO_KEYS.map(k => macroBar(k, nu)).join('')}</div>
      <button type="button" class="text-[11px] muted mt-3 underline underline-offset-2" data-a="tab" data-tab="settings">Changer d’objectifs ou de phase</button>
    </div>

    ${viewWaterSleep()}

    <div class="sys">
      <div class="flex items-center justify-between gap-2 mb-2">
        <div class="sys-title"><span class="bang">!</span>Le Système recommande</div>
      </div>
      ${sg.done ? `<p class="text-sm f-display">${nu.done ? 'Tous les objectifs sont atteints. Ne dépasse pas les zones.' : 'Il ne manque plus rien en dessous des cibles. Vérifie les zones ci-dessus.'}</p>`
        : sg.list.length ? `
          <p class="text-xs muted mb-1">Pour combler ce qui reste sans dépasser tes plafonds, une seule de ces options suffit à avancer :</p>
          ${sg.list.map(s => `
            <div class="res" style="cursor:default">
              <span class="flex-1 min-w-0"><span class="block f-display font-semibold truncate">${s.food.u ? `${s.g / s.food.u} ${esc(s.food.un)}${s.g / s.food.u > 1 && !/\./.test(s.food.un) ? 's' : ''} (${s.g} g)` : `${s.g} g`} · ${esc(s.food.name)}</span>
              <span class="text-[11px] muted f-mono">${selPreview(s.food, s.g)}</span></span>
              <button type="button" class="btn sm" data-a="sugg-add" data-f="${s.food.id}" data-g="${s.g}">${icon('plus', 'w-3 h-3')}Ajouter</button>
            </div>`).join('')}`
        : `<p class="text-sm muted">Aucun aliment de ta base ne rentre dans ce qui reste sans dépasser un plafond. Ajuste à la main.</p>`}
    </div>

    ${viewFoodAdder()}

    <div class="sys">
      <div class="flex items-center justify-between gap-2 mb-2">
        <div class="sys-title">Journal du jour</div>
        <span class="text-xs muted f-mono">${list.length} entrée${list.length > 1 ? 's' : ''}</span>
      </div>
      ${list.length ? list.map(e => {
        const m = entryMacros(e);
        return `<div class="flex items-center gap-2 py-2 border-t border-[#22222a] first:border-0">
          <div class="flex-1 min-w-0">
            <div class="truncate">${esc(e.name)}</div>
            <div class="text-[11px] muted f-mono">${macroLine(m)}</div>
          </div>
          ${e.per ? `<input type="number" inputmode="decimal" min="0" class="input sm f-mono" style="width:76px" id="eg-${e.id}" data-eg="${e.id}" value="${esc(e.g)}" aria-label="Grammes de ${esc(e.name)}"><span class="text-xs muted">g</span>`
                  : `<button type="button" class="ibtn" data-a="entry-to-base" data-e="${e.id}" aria-label="Enregistrer ${esc(e.name)} dans ma base" title="Enregistrer dans ma base">${icon('bookmark-plus', 'w-4 h-4')}</button>`}
          <button type="button" class="ibtn danger" data-a="del-entry" data-e="${e.id}" aria-label="Retirer ${esc(e.name)}">${icon('x', 'w-4 h-4')}</button>
        </div>`;
      }).join('') : `<p class="text-sm muted">Rien d’enregistré aujourd’hui. Ajoute un aliment, un repas type ou une saisie libre.</p>`}
    </div>
    ${viewFoodWeek()}
  </section>`;
}

/* ---------- Semaine alimentaire : ce qu'on a mangé, reprise des aliments, bilan des macros ---------- */
function weekMonday(off = 0) { const t = dk(), dow = fromKey(t).getDay(); return addDays(t, -((dow + 6) % 7) + 7 * off); }
function foodWeek(off = 0) {
  const mon = weekMonday(off), days = [];
  for (let i = 0; i < 7; i++) { const k = addDays(mon, i), d = state.days[k] || {}, list = d.food || [], nu = nutriResult(k), tg = (k < dk() && d.tg) ? d.tg : snapTargets();
    const eat = { kcal: 0, p: 0, c: 0, f: 0 }; for (const e of list) { const m = entryMacros(e); for (const x in eat) eat[x] += m[x]; }
    days.push({ k, list, eat, nu, tg, logged: list.length > 0 }); }
  const full = days.every(d => d.logged), sum = { kcal: 0, p: 0, c: 0, f: 0 }, lo = { kcal: 0, p: 0, c: 0, f: 0 }, hi = { kcal: 0, p: 0, c: 0, f: 0 }, tgt = { kcal: 0, p: 0, c: 0, f: 0 };
  for (const d of days) for (const x of MACRO_KEYS) { sum[x] += d.eat[x]; const b = bounds(d.tg, x); tgt[x] += b.t; lo[x] += b.lo === null ? 0 : b.lo; hi[x] += b.hi; }
  return { mon, days, full, sum, lo, hi, tgt, n: days.filter(d => d.logged).length };
}
function viewFoodWeek() {
  const off = ui.fwOff || 0, W = foodWeek(off), today = dk(), r0_ = x => Math.round(x).toLocaleString('fr-FR');
  const lab = { kcal: 'kcal', p: 'Prot.', c: 'Glu.', f: 'Lip.' }, unit = x => x === 'kcal' ? '' : ' g';
  const rows = W.days.map(D => { const fut = D.k > today, name = fromKey(D.k).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric' });
    const col = !D.logged ? '#5c606c' : D.nu.done ? '#4ade80' : D.nu.metCount >= 2 ? '#f59e0b' : '#ff4d6d';
    return `<details class="card" style="padding:7px 10px;${D.k === today ? 'border-color:rgba(0,240,255,.45)' : ''}"><summary class="flex items-center gap-2" style="list-style:none;cursor:pointer">
      <span class="w-14 shrink-0 f-display text-sm capitalize">${esc(name)}</span>
      <span class="flex-1 min-w-0 text-[11px] f-mono muted truncate">${D.logged ? `${r0_(D.eat.kcal)} kcal · P ${r0_(D.eat.p)} · G ${r0_(D.eat.c)} · L ${r0_(D.eat.f)}` : fut ? 'à venir' : 'rien noté'}</span>
      <span class="f-mono text-xs shrink-0" style="color:${col}">${D.logged ? D.nu.metCount + '/4' : '—'}</span></summary>
      ${D.logged ? `<div class="mt-2 flex flex-col gap-1">${D.list.map(e => { const m = entryMacros(e); return `<div class="flex items-center gap-2 text-xs"><span class="flex-1 min-w-0 truncate">${esc(e.name)}${e.per ? ` · ${esc(e.g)} g` : ''}<span class="block text-[10px] muted f-mono">${macroLine(m)}</span></span>${D.k !== today ? `<button type="button" class="btn sm ghost" data-a="fw-copy" data-k="${D.k}" data-e="${e.id}" aria-label="Reprendre ${esc(e.name)} aujourd’hui">${icon('plus', 'w-3 h-3')}Reprendre</button>` : ''}</div>`; }).join('')}
        ${D.k !== today ? `<button type="button" class="btn sm mt-1" data-a="fw-copy-day" data-k="${D.k}">${icon('copy', 'w-3.5 h-3.5')}Reprendre toute cette journée aujourd’hui</button>` : ''}</div>` : ''}
    </details>`; }).join('');
  /* aliments de la semaine, sans doublons, pour les remettre en un geste */
  const seen = new Map(); for (let i = 1; i <= 7; i++) { const k = addDays(today, -i), d = state.days[k]; for (const e of (d && d.food) || []) { const key = norm(e.name) + '|' + (e.per ? e.g : JSON.stringify(e.m || {})); if (!seen.has(key)) seen.set(key, { k, e, n: 0 }); seen.get(key).n++; } }
  const fav = [...seen.values()].sort((a, b) => b.n - a.n).slice(0, 14);
  const bil = W.full ? MACRO_KEYS.map(x => { const v = W.sum[x], ok = v >= W.lo[x] && v <= W.hi[x], pc = W.tgt[x] ? Math.round(v / W.tgt[x] * 100) : 0;
      return `<div class="border border-[#26262f] p-2"><div class="text-[10px] label">${lab[x]}</div><div class="f-mono text-sm" style="color:${ok ? '#4ade80' : '#ff4d6d'}">${r0_(v)}${unit(x)}</div><div class="text-[10px] muted f-mono">objectif ${r0_(W.tgt[x])}${unit(x)} · ${pc} %</div><div class="text-[10px]" style="color:${ok ? '#4ade80' : '#ff4d6d'}">${ok ? 'dans la zone' : v < W.lo[x] ? 'en dessous' : 'au-dessus'}</div></div>`; }).join('')
    : '';
  return `<div class="sys">
    <div class="flex items-center justify-between gap-2 mb-2"><div class="sys-title">${icon('calendar-days', 'w-4 h-4')}Semaine alimentaire</div>
      <div class="flex items-center gap-1"><button type="button" class="ibtn" data-a="fw-off" data-d="-1" aria-label="Semaine précédente">${icon('chevron-left', 'w-4 h-4')}</button><span class="text-[11px] muted f-mono">${off ? esc(fromKey(W.mon).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })) : 'cette semaine'}</span><button type="button" class="ibtn" data-a="fw-off" data-d="1" ${off >= 0 ? 'disabled' : ''} aria-label="Semaine suivante">${icon('chevron-right', 'w-4 h-4')}</button></div></div>
    <div class="flex flex-col gap-1.5">${rows}</div>
    <div class="label mt-4 mb-1">Bilan de la semaine</div>
    ${W.full ? `<div class="grid grid-cols-4 gap-1.5 text-center">${bil}</div><p class="text-[10px] muted mt-1">Totaux des 7 jours comparés à 7 fois l’objectif du jour (zones de tolérance comprises).</p>`
      : `<p class="text-xs muted">Le bilan des macros s’affiche quand les 7 jours de la semaine sont renseignés (${W.n}/7 pour l’instant) : sur une semaine incomplète, il ne voudrait rien dire.</p>`}
    ${fav.length && !off ? `<div class="label mt-4 mb-1">Aliments des 7 derniers jours</div><div class="flex flex-wrap gap-1.5">${fav.map(F => `<button type="button" class="chip" data-a="fw-copy" data-k="${F.k}" data-e="${F.e.id}" title="Ajouter à aujourd’hui">${icon('plus', 'w-3 h-3')}${esc(F.e.name)}${F.e.per ? ` · ${esc(F.e.g)} g` : ''}${F.n > 1 ? ` <span class="muted">×${F.n}</span>` : ''}</button>`).join('')}</div>` : ''}
  </div>`;
}
/* ---------- Journal ---------- */
function viewLog() {
  const today = dk(), created = state.profile.created, start = addDays(today, -27);
  const offset = (fromKey(start).getDay() + 6) % 7;
  let cells = '';
  for (let i = 0; i < offset; i++) cells += '<div></div>';
  for (let i = 0; i < 28; i++) {
    const k = addDays(start, i), before = k < created, r = dayResult(k), pen = state.penalties.find(p => p.date === k);
    const cls = before ? '' : (pen ? 'fail' : (r.success ? 'ok' : ''));
    cells += `<div class="daycell ${cls} ${k === today ? 'today' : ''}" style="${before ? 'opacity:.3' : ''}" title="${esc(prettyDate(k))}">
      <span class="text-[10px] f-mono muted">${fromKey(k).getDate()}</span>
      <span class="flex gap-1">${r.plan.sid ? `<span class="dot ${r.workoutDone ? 'w' : ''}"></span>` : ''}<span class="dot ${r.nutritionDone ? 'n' : ''}"></span></span>
    </div>`;
  }
  let sessions = 0, perfectFood = 0;
  for (const k in state.days) { const r = dayResult(k); if (r.workoutDone) sessions++; if (r.nutritionDone) perfectFood++; }
  const pens = state.penalties.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  return `
  <section class="flex flex-col gap-4">
    <div class="sys">
      <div class="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <div class="sys-title">28 derniers jours</div>
        <div class="flex items-center gap-3 text-[11px] muted"><span class="flex items-center gap-1"><span class="dot w"></span>Séance</span><span class="flex items-center gap-1"><span class="dot n"></span>Macros</span></div>
      </div>
      <div class="grid grid-cols-7 gap-1.5 text-center mb-1">${['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'].map(x => `<div class="text-[10px] muted f-display">${x}</div>`).join('')}</div>
      <div class="grid grid-cols-7 gap-1.5">${cells}</div>
      <div class="grid grid-cols-3 gap-2 mt-4 text-center">
        <div class="border border-[#26262f] py-2"><div class="f-mono text-lg glow">${sessions}</div><div class="text-[11px] muted">séances complètes</div></div>
        <div class="border border-[#26262f] py-2"><div class="f-mono text-lg glow-umbra">${perfectFood}</div><div class="text-[11px] muted">jours macros 4/4</div></div>
        <div class="border border-[#26262f] py-2"><div class="f-mono text-lg red">${state.penalties.length}</div><div class="text-[11px] muted">pénalités</div></div>
      </div>
    </div>
    <div class="sys ${pens.length ? 'danger' : ''}">
      <div class="sys-title mb-3 ${pens.length ? 'r' : ''}">Registre des pénalités</div>
      ${pens.length ? pens.slice(0, 10).map(p => `
        <div class="py-2 border-t border-[#2a2228] first:border-0">
          <div class="flex justify-between gap-2"><span class="f-display text-sm capitalize">${esc(prettyDate(p.date))}</span><span class="f-mono text-sm red">${p.sealed ? 'sceau brisé' : `−${penPts(p)} prestige · −${penXp(p)} XP de prestige`}</span></div>
          <ul class="text-xs muted mt-0.5">${p.reasons.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
        </div>`).join('') : `<p class="text-sm muted">Aucune. Le Système n’a rien à vous reprocher pour l’instant.</p>`}
    </div>
  </section>`;
}

/* ---------- Réglages ---------- */
function viewSettings() {
  const N = state.nutrition;
  const macroKcal = r0(4 * N.p.g + 4 * N.c.g + 9 * N.f.g);
  const diff = macroKcal - N.kcal;
  return `
  <section class="flex flex-col gap-4">
    ${isStandalone() ? '' : `<button type="button" class="item w-full text-left" data-a="install">${icon('download', 'w-5 h-5')}<span class="flex-1"><span class="f-display">Installer l’application</span><span class="block text-[11px] muted">${deferredPrompt ? 'Prête à installer sur cet appareil.' : 'Si le navigateur ne propose rien, la marche à suivre s’affiche.'}</span></span>${icon('chevron-right', 'w-4 h-4 muted')}</button>`}
    <button type="button" class="item w-full text-left" data-a="guide-open">${icon('graduation-cap', 'w-5 h-5')}<span class="flex-1"><span class="f-display">Guide du débutant</span><span class="block text-[11px] muted">Musculation, nutrition et tous les outils de l’appli, expliqués simplement.</span></span>${icon('chevron-right', 'w-4 h-4 muted')}</button>
    <button type="button" class="item w-full text-left" data-a="mus-open">${icon('music', 'w-5 h-5')}<span class="flex-1"><span class="f-display">Salle de musique</span><span class="block text-[11px] muted">Choisir la musique d’accueil, lecture en boucle, ajouter mes propres musiques.</span></span>${icon('chevron-right', 'w-4 h-4 muted')}</button>
    <label class="item w-full flex items-start gap-3 cursor-pointer">${icon('moon', 'w-5 h-5')}<span class="flex-1"><span class="f-display">Rester active en arrière-plan</span><span class="block text-[11px] muted">Désactivé : quitter l’appli la met en veille, la musique s’arrête et l’écran de connexion revient à chaque retour. Activé : la musique continue et l’appli reprend là où vous étiez.</span></span><input type="checkbox" data-mus-opt="bg" ${typeof MUS !== 'undefined' && MUS.bg ? 'checked' : ''} style="margin-top:4px;accent-color:var(--neon)"></label>
    ${viewNutritionSettings(N, macroKcal, diff)}
    ${viewProgramEditor()}
    ${viewPauseSettings()}
    ${viewSoftSettings()}
    ${viewInstall()}
    ${viewChatSettings()}
    ${viewProfileSettings()}
    ${viewBackup()}
  </section>`;
}
function viewNutritionSettings(N, macroKcal, diff) {
  return `
  <details class="sys umbra" ${ui.openNutri !== false ? 'open' : ''} data-det="nutri">
    <summary class="flex items-center justify-between gap-2"><span class="sys-title u">Objectifs nutritionnels</span><span class="chev muted">${icon('chevron-down')}</span></summary>
    <div class="mt-4 flex flex-col gap-4">
      <div>
        <div class="label mb-2">Phase</div>
        <div class="grid grid-cols-3 gap-2">
          ${Object.entries(PHASES).map(([id, l]) => `
            <div class="flex flex-col gap-1 min-w-0">
              <button type="button" class="chip u ${N.phase === id ? 'on' : ''}" data-a="phase" data-p="${id}" style="white-space:normal">${l}</button>
              <input type="number" inputmode="numeric" min="800" step="50" class="input sm f-mono text-center" id="ph-${id}" data-ph="${id}" value="${N.phases[id]}" aria-label="Calories en ${l}">
            </div>`).join('')}
        </div>
        <p class="text-[11px] muted mt-2">Choisir une phase applique ses calories et recalcule les glucides. Protéines et lipides ne bougent pas.</p>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div><label for="n-kcal" class="text-[10px] label block mb-1">Calories (kcal)</label><input id="n-kcal" data-n="kcal" type="number" inputmode="numeric" min="800" step="10" class="input sm f-mono" value="${N.kcal}"></div>
        <div><label for="n-kcalTol" class="text-[10px] label block mb-1">Tolérance (± %)</label><input id="n-kcalTol" data-n="kcalTol" type="number" inputmode="numeric" min="0" max="250" class="input sm f-mono" value="${N.kcalTol}"></div>
      </div>
      ${['p', 'c', 'f'].map(m => `
        <div class="grid gap-2" style="grid-template-columns: 1.2fr 1fr 1.3fr 0.9fr">
          <div class="self-end f-display text-sm font-semibold pb-2 min-w-0 truncate">${MACRO_INFO[m].name}</div>
          <div class="min-w-0"><label for="n-${m}-g" class="text-[10px] label block mb-1">g</label><input id="n-${m}-g" data-nm="${m}" data-k="g" type="number" inputmode="numeric" min="0" class="input sm f-mono" value="${N[m].g}"></div>
          <div class="min-w-0"><label for="n-${m}-mode" class="text-[10px] label block mb-1">Type</label>
            <select id="n-${m}-mode" data-nm="${m}" data-k="mode" class="input sm">${Object.entries(MODE_LABEL).filter(([v]) => v !== 'custom' || m === 'p').map(([v, l]) => `<option value="${v}" ${N[m].mode === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
          ${N[m].mode === 'custom'
            ? `<div class="min-w-0 grid grid-cols-2 gap-1"><div><label for="n-${m}-tm" class="text-[10px] label block mb-1">− %</label><input id="n-${m}-tm" data-nm="${m}" data-k="tolMinus" type="number" inputmode="numeric" min="0" max="100" class="input sm f-mono" style="padding:6px 4px" value="${N[m].tolMinus || 0}"></div><div><label for="n-${m}-tp" class="text-[10px] label block mb-1">+ %</label><input id="n-${m}-tp" data-nm="${m}" data-k="tolPlus" type="number" inputmode="numeric" min="0" max="250" class="input sm f-mono" style="padding:6px 4px" value="${N[m].tolPlus || 0}"></div></div>`
            : `<div class="min-w-0"><label for="n-${m}-tol" class="text-[10px] label block mb-1">± %</label><input id="n-${m}-tol" data-nm="${m}" data-k="tol" type="number" inputmode="numeric" min="0" max="250" class="input sm f-mono" value="${N[m].tol}" ${N[m].mode === 'min' ? 'disabled' : ''}></div>`}
        </div>`).join('')}
      <div class="card text-sm" style="border-color:${Math.abs(diff) > N.kcal * 0.03 ? 'rgba(255,59,92,.5)' : 'rgba(62,240,164,.4)'}">
        <div class="f-mono text-xs">4 × ${N.p.g} P + 4 × ${N.c.g} G + 9 × ${N.f.g} L = <b>${macroKcal} kcal</b></div>
        <div class="text-xs mt-1 ${Math.abs(diff) > N.kcal * 0.03 ? 'red' : 'glow'}">${Math.abs(diff) <= N.kcal * 0.03 ? 'Cohérent avec ton objectif calorique.' : `${diff < 0 ? 'Il manque' : 'Dépasse de'} ${Math.abs(diff)} kcal par rapport à ${N.kcal} kcal.${N.p.mode === 'min' && diff < 0 ? ' Les protéines étant un minimum, tu peux combler en en mangeant plus.' : ''}`}</div>
        <button type="button" class="btn sm u mt-2" data-a="fit-carbs">${icon('wand-2', 'w-3.5 h-3.5')}Ajuster les glucides aux calories</button>
      </div>
      <p class="text-[11px] muted">Minimum : atteint dès que tu dépasses la valeur. Cible : il faut être dans la fourchette ± %. Maximum : ne pas dépasser, une fois les calories atteintes. Les changements s’appliquent à aujourd’hui et aux jours suivants, jamais aux jours passés.</p>
    </div>
  </details>`;
}
function viewProgramEditor() {
  const P = state.program;
  const opts = (sel) => `<option value="" ${!sel ? 'selected' : ''}>Repos</option>` + P.order.filter(id => P.sessions[id]).map(id => `<option value="${id}" ${sel === id ? 'selected' : ''}>${esc(P.sessions[id].name)}</option>`).join('');
  const tplPick = ui.tplPick ? PROGRAM_TEMPLATES[ui.tplPick] : null;
  return `
  <details class="sys" ${ui.openProgram ? 'open' : ''} data-det="program">
    <summary class="flex items-center justify-between gap-2"><span class="sys-title">Programme</span><span class="chev muted">${icon('chevron-down')}</span></summary>
    <div class="mt-4 flex flex-col gap-4">
      <div>
        <div class="label mb-2">Partir d’un modèle</div>
        <div class="flex flex-wrap gap-2">${Object.entries(PROGRAM_TEMPLATES).map(([id, t]) => `<button type="button" class="chip ${ui.tplPick === id ? 'on' : ''}" data-a="tpl-pick" data-t="${id}">${esc(t.label)}</button>`).join('')}</div>
        ${tplPick ? `<div class="card mt-2 text-sm"><p>${esc(tplPick.desc)}</p><p class="text-xs muted mt-1">Remplace le programme actuel. L’historique et les charges notées restent.</p>
          <div class="flex gap-2 mt-2"><button type="button" class="btn sm" data-a="tpl-apply">Remplacer</button><button type="button" class="btn sm ghost" data-a="tpl-cancel">Annuler</button></div></div>` : ''}
      </div>
      <div><label for="pg-name" class="text-[10px] label block mb-1">Nom du programme</label><input id="pg-name" data-pg="name" class="input sm" value="${esc(P.name)}"></div>
      <div>
        <div class="label mb-2">Semaine</div>
        <div class="grid grid-cols-7 gap-1">
          ${WEEK_ORDER.map(dow => `<div class="min-w-0"><label for="wk-${dow}" class="text-[10px] muted f-display block text-center mb-1">${DAY_SHORT[dow]}</label>
            <select id="wk-${dow}" data-week="${dow}" class="input sm" style="padding:6px 2px;font-size:12px;background-image:none;text-align:center">${opts(P.week[dow])}</select></div>`).join('')}
        </div>
        <p class="text-[11px] muted mt-1">Un jour avec séance l’exige dans la quête. Un jour de repos ne demande que les macros.</p>
      </div>
      <div class="flex flex-col gap-3">
        ${P.order.filter(id => P.sessions[id]).map(sid => viewSessionEditor(sid, P.sessions[sid])).join('')}
      </div>
      <button type="button" class="btn ghost" data-a="add-session">${icon('plus')}Ajouter une séance</button>
    </div>
  </details>`;
}
function viewSessionEditor(sid, S) {
  const open = ui.openSessions.has(sid);
  return `
  <details class="card" ${open ? 'open' : ''} data-sess="${sid}">
    <summary class="flex items-center justify-between gap-2">
      <span class="min-w-0"><span class="f-display font-semibold block truncate">${esc(S.name)}</span><span class="text-[11px] muted">${S.ex.length} exercice${S.ex.length > 1 ? 's' : ''} · ${STATS[S.stat] ? STATS[S.stat].name : 'Force'}</span></span>
      <span class="chev muted">${icon('chevron-down')}</span>
    </summary>
    <div class="mt-3 flex flex-col gap-3">
      <div class="grid grid-cols-2 gap-2">
        <div class="min-w-0"><label for="sn-${sid}" class="text-[10px] label block mb-1">Nom</label><input id="sn-${sid}" data-sf="name" data-sid="${sid}" class="input sm" value="${esc(S.name)}"></div>
        <div class="min-w-0"><label for="ss-${sid}" class="text-[10px] label block mb-1">Statistique</label>
          <select id="ss-${sid}" data-sf="stat" data-sid="${sid}" class="input sm">${['str', 'agi', 'end'].map(s => `<option value="${s}" ${S.stat === s ? 'selected' : ''}>${STATS[s].name}</option>`).join('')}</select></div>
      </div>
      <div><label for="sm-${sid}" class="text-[10px] label block mb-1">Muscles</label><input id="sm-${sid}" data-sf="muscles" data-sid="${sid}" class="input sm" value="${esc(S.muscles || '')}"></div>
      ${S.ex.map((e, i) => `
        <div class="border border-[#2a2a35] p-2.5 flex flex-col gap-2" style="background:#121216">
          <div class="flex items-center gap-1.5">
            <span class="f-mono text-xs muted w-5">${String(i + 1).padStart(2, '0')}</span>
            <input id="en-${e.id}" data-ef="name" data-sid="${sid}" data-eid="${e.id}" class="input sm flex-1" value="${esc(e.name)}" aria-label="Nom de l’exercice">
            <button type="button" class="ibtn" data-a="ex-up" data-sid="${sid}" data-eid="${e.id}" aria-label="Monter" ${i === 0 ? 'disabled' : ''}>${icon('chevron-up', 'w-4 h-4')}</button>
            <button type="button" class="ibtn" data-a="ex-down" data-sid="${sid}" data-eid="${e.id}" aria-label="Descendre" ${i === S.ex.length - 1 ? 'disabled' : ''}>${icon('chevron-down', 'w-4 h-4')}</button>
            <button type="button" class="ibtn danger" data-a="ex-del" data-sid="${sid}" data-eid="${e.id}" aria-label="Supprimer">${icon('trash-2', 'w-4 h-4')}</button>
          </div>
          <div class="grid grid-cols-3 gap-2">
            ${[['warm', 'Échauff.', 0, 4], ['setsMin', 'Séries min', 1, 8], ['setsMax', 'Séries max', 1, 8], ['repMin', 'Reps min', 1, 50], ['repMax', 'Reps max', 1, 50], ['rest', 'Pause (s)', 15, 600]].map(([k, l, mn, mx]) =>
              `<div class="min-w-0"><label for="e${k}-${e.id}" class="text-[10px] label block mb-1 truncate">${l}</label><input id="e${k}-${e.id}" data-ef="${k}" data-sid="${sid}" data-eid="${e.id}" type="number" inputmode="numeric" min="${mn}" max="${mx}" step="${k === 'rest' ? 15 : 1}" class="input sm f-mono" value="${e[k]}"></div>`).join('')}
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="min-w-0"><label for="em-${e.id}" class="text-[10px] label block mb-1">Muscle</label><input id="em-${e.id}" data-ef="muscle" data-sid="${sid}" data-eid="${e.id}" class="input sm" value="${esc(e.muscle)}"></div>
            <div class="min-w-0"><label for="eo-${e.id}" class="text-[10px] label block mb-1">Note</label><input id="eo-${e.id}" data-ef="note" data-sid="${sid}" data-eid="${e.id}" class="input sm" value="${esc(e.note)}"></div>
          </div>
        </div>`).join('')}
      <div class="flex flex-wrap gap-2 justify-between">
        <span class="flex gap-2 flex-wrap"><button type="button" class="btn sm" data-a="lib-open" data-sid="${sid}">${icon('library', 'w-3.5 h-3.5')}Bibliothèque</button><button type="button" class="btn sm ghost" data-a="ex-add" data-sid="${sid}">${icon('plus', 'w-3.5 h-3.5')}Exercice vide</button></span>
        ${ui.armed === 'sess-' + sid
          ? `<span class="flex gap-2 items-center"><span class="text-xs red">Supprimer la séance ?</span><button type="button" class="btn sm danger" data-a="sess-del" data-sid="${sid}">Oui</button><button type="button" class="btn sm ghost" data-a="disarm">Non</button></span>`
          : `<button type="button" class="btn sm danger" data-a="arm" data-k="sess-${sid}">${icon('trash-2', 'w-3.5 h-3.5')}Séance</button>`}
      </div>
      ${ui.libFor === sid ? viewLibraryPicker(sid) : ''}
    </div>
  </details>`;
}
function viewInstall() {
  const pf = platform();
  const standalone = isStandalone();
  const steps = {
    android: 'Chrome : bouton « Installer » ci-dessus, ou menu ⋮ → « Installer l’application ».',
    windows: 'Chrome ou Edge : bouton « Installer » ci-dessus, ou l’icône d’installation à droite de la barre d’adresse.',
    'mac-chrome': 'Chrome ou Edge : bouton « Installer » ci-dessus, ou l’icône d’installation dans la barre d’adresse.',
    'mac-safari': 'Safari : menu Fichier → « Ajouter au Dock ».',
    ios: 'Safari : bouton Partager → « Sur l’écran d’accueil ».',
    other: 'Ouvre le site dans Chrome, Edge ou Safari, puis utilise l’option d’installation du navigateur.'
  };
  return `
  <details class="sys" data-det="install" ${ui.openInstall ? 'open' : ''}>
    <summary class="flex items-center justify-between gap-2"><span class="sys-title">Installer l’application</span><span class="chev muted">${icon('chevron-down')}</span></summary>
    <div class="mt-4 flex flex-col gap-3 text-sm">
      ${standalone ? `<p class="glow f-display">L’application est installée sur cet appareil.</p>` : `
        <button type="button" class="btn solid" data-a="install">${icon('download')}Installer sur cet appareil</button>
        <p><b class="f-display">Sur cet appareil :</b> <span class="muted">${steps[pf]}</span></p>`}
      <ul class="text-xs muted flex flex-col gap-1">
        <li><b class="text-[#cfd3dc]">Android :</b> ${steps.android}</li>
        <li><b class="text-[#cfd3dc]">Windows :</b> ${steps.windows}</li>
        <li><b class="text-[#cfd3dc]">Mac :</b> ${steps['mac-chrome']} ${steps['mac-safari']}</li>
        <li><b class="text-[#cfd3dc]">iPhone / iPad :</b> ${steps.ios}</li>
      </ul>
      <p class="text-xs muted">L’installation fonctionne depuis l’adresse du site (elyos-system.vercel.app). Une fois installée, l’appli s’ouvre dans sa propre fenêtre et marche hors connexion. Les données restent propres à chaque appareil : utilise la sauvegarde pour les transférer.</p>
    </div>
  </details>`;
}
function viewProfileSettings() {
  return `
  <details class="sys" data-det="profile">
    <summary class="flex items-center justify-between gap-2"><span class="sys-title">Profil</span><span class="chev muted">${icon('chevron-down')}</span></summary>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
      <div><label for="pf-name" class="text-[10px] label block mb-1">Nom</label><input id="pf-name" data-pf="name" class="input sm" maxlength="24" value="${esc(state.profile.name)}"></div>
      <div><label for="pf-cls" class="text-[10px] label block mb-1">Classe</label>
        <select id="pf-cls" data-pf="cls" class="input sm">${Object.entries(CLASSES).map(([id, c]) => `<option value="${id}" ${state.profile.cls === id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select></div>
    </div>
  </details>`;
}
function viewBackup() {
  return `
  <details class="sys" data-det="backup">
    <summary class="flex items-center justify-between gap-2"><span class="sys-title">Sauvegarde</span><span class="chev muted">${icon('chevron-down')}</span></summary>
    <div class="mt-4 flex flex-col gap-3 text-sm">
      <p class="muted">Les données restent dans ce navigateur. Exporte-les pour changer d’appareil ou te prémunir d’un nettoyage du navigateur.</p>
      <div class="flex flex-wrap gap-2">
        <button type="button" class="btn sm" data-a="download-backup">${icon('download', 'w-3.5 h-3.5')}Fichier .json</button>
        <label class="btn sm ghost" for="backup-file">${icon('upload', 'w-3.5 h-3.5')}Importer un fichier</label>
        <input id="backup-file" type="file" accept="application/json,.json" class="sr-only">
        <button type="button" class="btn sm ghost" data-a="copy-backup">${icon('copy', 'w-3.5 h-3.5')}Copier le texte</button>
      </div>
      <textarea id="backup-box" class="input f-mono text-xs" rows="3" placeholder="Ou colle ici une sauvegarde copiée, puis Restaurer"></textarea>
      <div><button type="button" class="btn sm ghost" data-a="import-backup">${icon('rotate-ccw', 'w-3.5 h-3.5')}Restaurer depuis le texte</button></div>
      <div class="border-t border-[#24242c] pt-3 flex flex-wrap items-center gap-2">
        ${ui.armed === 'reset'
          ? `<span class="text-sm red">Tout effacer, profil compris ?</span><button type="button" class="btn sm danger" data-a="reset-confirm">${icon('trash-2', 'w-3.5 h-3.5')}Oui, effacer</button><button type="button" class="btn sm ghost" data-a="disarm">Annuler</button>`
          : `<button type="button" class="btn sm danger" data-a="arm" data-k="reset">${icon('rotate-ccw', 'w-3.5 h-3.5')}Réinitialiser le Joueur</button>`}
      </div>
    </div>
  </details>`;
}

/* ---------- Superpositions ---------- */
function showLevelUp(level, gained, newRank) {
  showOverlay(`
    <div class="sys pop w-full max-w-sm" style="padding:28px 20px">
      <div class="sys-title mb-5"><span class="bang">!</span>Notification</div>
      <div class="label">Niveau supérieur</div>
      <div class="lvlnum my-2">${lvlTxt(level)}</div>
      <p class="f-display">Vous êtes monté de ${gained} niveau${gained > 1 ? 'x' : ''}.</p>
      <p class="text-sm muted mt-1">${(() => { const n = availablePoints(powerLvl()); return n > 0 ? `<b class="glow">${n.toLocaleString('fr-FR')}</b> points de statistiques à répartir.` : 'Les points de statistiques arrivent avec l’XP, entre les niveaux.'; })()}</p>${newRank ? `<p class="text-xs mt-1" style="color:${newRank.color}">Rang ${newRank.r} : désormais +${pointsPerLevel(level)} points à chaque niveau${newRank.k ? ` et toutes les statistiques ×${newRank.k}` : ''}.</p>` : ''}
      ${newRank ? `<div class="mt-5 flex items-center gap-3"><div class="rank" style="color:${newRank.color};width:48px;height:48px;font-size:26px">${rankBadge(newRank)}</div><div><div class="label">Éveil</div><div class="f-display font-bold" style="color:${newRank.color}">${esc(newRank.title)}</div></div></div>` : ''}
      <button type="button" class="btn solid w-full mt-6" data-a="close-overlay">Continuer</button>
    </div>`);
}
function showPenalties(fails) {
  const total = fails.reduce((a, p) => a + penPts(p), 0), totalX = fails.reduce((a, p) => a + penXp(p), 0);
  showOverlay(`
    <div class="sys danger pop w-full max-w-sm shake" style="padding:24px 20px">
      <div class="sys-title r mb-4">${icon('skull', 'w-4 h-4')}Zone de pénalité</div>
      <p class="f-display text-lg leading-snug">La quête quotidienne n’a pas été accomplie.</p>
      <div class="mt-3 flex flex-col gap-2 max-h-48 overflow-auto">
        ${fails.map(p => `<div class="text-sm"><div class="f-display capitalize">${esc(prettyDate(p.date))}</div><ul class="text-xs muted">${p.reasons.map(x => `<li>· ${esc(x)}</li>`).join('')}</ul></div>`).join('')}
      </div>
      <p class="text-sm muted mt-4">Le Système vous a transféré dans un désert peuplé de mille-pattes géants. Vous avez survécu, de justesse, en courant pendant quatre heures. Ne recommencez pas.</p>
      <div class="mt-4 f-mono text-2xl font-bold red">−${total} prestige · −${totalX} XP de prestige</div>${fails.some(p => p.sealed) ? `<p class="text-xs muted mt-1">Un sceau d’Ysolde s’est brisé à votre place.</p>` : ''}
      ${fails.some(p => p.guarded) ? `<p class="text-xs muted mt-1">Ysolde s’est interposée : la pénalité a été réduite.</p>` : ''}
      <button type="button" class="btn danger w-full mt-5" data-a="close-overlay">J’ai compris</button>
    </div>`);
}

/* ==========================================================================
   Minuteur de repos et compte à rebours
   ========================================================================== */
const timer = { end: 0, total: 0, label: '' };
function startTimer(seconds, label) { timer.end = Date.now() + seconds * 1000; timer.total = seconds; timer.label = label; drawTimer(); }
function stopTimer() { timer.end = 0; $('#timer').hidden = true; }
function drawTimer() {
  const box = $('#timer');
  if (!timer.end) { box.hidden = true; return; }
  const left = Math.max(0, Math.ceil((timer.end - Date.now()) / 1000));
  if (left <= 0) {
    stopTimer();
    try { if (navigator.vibrate) navigator.vibrate([120, 80, 120]); } catch (e) {}
    toast(`${icon('bell-ring', 'w-4 h-4 text-neon')}<span>Repos terminé. Série suivante.</span>`);
    return;
  }
  box.hidden = false;
  box.innerHTML = `
    <div class="sys" style="padding:10px 12px">
      <div class="flex items-center gap-3">
        <span class="glow">${icon('timer', 'w-5 h-5')}</span>
        <div class="flex-1 min-w-0">
          <div class="text-[11px] muted truncate">Repos · ${esc(timer.label)}</div>
          <div class="bar thin mt-1"><i style="width:${left / timer.total * 100}%;transition:none"></i></div>
        </div>
        <div class="f-mono text-xl font-bold glow">${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}</div>
        <button type="button" class="pip" style="width:30px;height:30px" data-a="timer-skip" aria-label="Arrêter le minuteur">${icon('x', 'w-4 h-4')}</button>
      </div>
    </div>`;
  refreshIcons();
}
function updateCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const now = new Date(), mid = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const s = Math.floor((mid - now) / 1000);
  el.textContent = `${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

/* ==========================================================================
   Actions
   ========================================================================== */
function findSession(sid) { return state.program.sessions[sid]; }
function findEx(sid, eid) { const S = findSession(sid); return S ? S.ex.find(e => e.id === eid) : null; }
function numIn(id) { const el = document.getElementById(id); const v = el ? parseFloat(String(el.value).replace(',', '.')) : NaN; return isFinite(v) ? v : NaN; }
function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
function downloadText(name, text) {
  try {
    const blob = new Blob([text], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    return true;
  } catch (e) { return false; }
}
function restoreFrom(text) {
  const parsed = JSON.parse(text);
  if (!parsed || !parsed.profile || !parsed.days) throw new Error('format');
  state = parsed.v === 2 ? normalize(parsed) : migrateV1(parsed);
  save(); render();
  toast(`${icon('check', 'w-4 h-4 text-neon')}<span>Sauvegarde restaurée.</span>`);
}

const handlers = {
  'tab': el => { state.tab = el.dataset.tab; ui.guide = false; save(); render(); window.scrollTo({ top: 0 }); },
  'install': async () => {
    if (!deferredPrompt) {
      /* le navigateur n'a pas (encore) proposé l'installation : après une désinstallation, Chrome attend parfois avant de la reproposer */
      const pf = platform(), how = pf === 'ios' ? 'Safari : bouton Partager → « Sur l’écran d’accueil ».' : pf === 'mac-safari' ? 'Safari : menu Fichier → « Ajouter au Dock ».' : 'Chrome : menu ⋮ en haut à droite → « Installer l’application » (ou « Ajouter à l’écran d’accueil »). Si l’option manque, ferme l’onglet, rouvre le site et réessaie.';
      toast(`${icon('download', 'w-4 h-4')}<span>${how}</span>`, 'umbra');
      state.tab = 'settings'; ui.openInstall = true; render(); setTimeout(() => { const d = document.querySelector('[data-det=install]'); if (d) d.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60); return;
    }
    deferredPrompt.prompt();
    try { await deferredPrompt.userChoice; } catch (e) {}
    deferredPrompt = null; render();
  },

  /* Éveil */
  'pick-class': el => { const n = document.getElementById('aw-name'); ui.draftName = n ? n.value : ''; ui.draftClass = el.dataset.cls; render(); },
  'awaken': () => {
    const name = (document.getElementById('aw-name').value || '').trim();
    if (!name) { document.getElementById('aw-err').hidden = false; return; }
    const today = dk();
    state.profile = { name, cls: ui.draftClass, created: today };
    state.evaluated = addDays(today, -1);
    state.seenLevel = 1; state.tab = 'status';
    save(); render();
    showOverlay(`
      <div class="sys pop w-full max-w-sm" style="padding:24px 20px">
        <div class="sys-title mb-4"><span class="bang">!</span>Éveil</div>
        <p class="f-display text-lg">Bienvenue, ${esc(name)}.</p>
        <p class="text-sm muted mt-2">Chaque jour, une quête vous sera assignée : la séance prévue et vos objectifs de macros. Les deux rapportent autant d’XP. Programme et objectifs se règlent dans l’onglet Réglages. L’échec sera sanctionné.</p>
        <button type="button" class="btn solid w-full mt-5" data-a="close-overlay">Commencer</button>
      </div>`);
  },

  /* Entraînement */
  'pip': el => {
    const today = dk(), exId = el.dataset.ex, kind = el.dataset.kind, i = Number(el.dataset.i);
    const plan = livePlan(today), ex = plan.ex.find(e => e.id === exId);
    act(() => {
      const d = dayEntry(today);
      const st = d.ex[exId] || { w: [], s: [] };
      st.w = st.w || []; st.s = st.s || [];
      st[kind][i] = !st[kind][i];
      d.ex[exId] = st;
      if (kind === 's' && st.s[i] && ex) startTimer(ex.rest, ex.name);
    });
  },
  'session': el => { const today = dk(); act(() => { dayEntry(today).sid = el.dataset.s || null; }); },

  /* Nutrition */
  'food-mode': el => { ui.foodMode = el.dataset.mode; if (ui.foodMode !== 'custom') ui.editFoodId = null; render(); },
  'sel-food': el => { ui.selFood = el.dataset.f; const f = getFood(ui.selFood); ui.selGrams = f && f.u ? String(f.u) : '100'; render(); const g = document.getElementById('sel-g'); if (g) g.focus(); },
  'sel-units': el => { const f = getFood(ui.selFood); if (!f) return; ui.selGrams = String(f.u * Number(el.dataset.n)); const g = document.getElementById('sel-g'); if (g) g.value = ui.selGrams; const p = document.getElementById('sel-prev'); if (p) p.textContent = selPreview(f, ui.selGrams); },
  'water': el => {
    const v = Number(el.dataset.v);
    act(() => { const d = dayEntry(dk()); d.water = Math.max(0, Math.round(((d.water || 0) + v) * 100) / 100); });
  },
  'sleep': el => { const v = Number(el.dataset.v); act(() => { dayEntry(dk()).sleep = v; }); },
  'add-food': () => {
    const f = getFood(ui.selFood), g = numIn('sel-g');
    if (!f) return;
    const grams = isFinite(g) && g > 0 ? g : 100;
    act(() => { dayEntry(dk()).food.push(mkEntry(f, grams)); });
    ui.selFood = null; ui.selGrams = ''; ui.foodQuery = ''; render();
  },
  'sugg-add': el => { const f = getFood(el.dataset.f); if (f) act(() => { dayEntry(dk()).food.push(mkEntry(f, Number(el.dataset.g))); }); },
  'add-meal': el => {
    const m = state.meals.find(x => x.id === el.dataset.m); if (!m) return;
    act(() => { const d = dayEntry(dk()); for (const it of m.items) { const f = getFood(it.fid); if (f) d.food.push(mkEntry(f, it.g)); } });
  },
  'del-meal': el => {
    if (ui.armed !== 'meal-' + el.dataset.m) { ui.armed = 'meal-' + el.dataset.m; toast(`${icon('triangle-alert', 'w-4 h-4')}<span>Touche à nouveau la corbeille pour supprimer ce repas type.</span>`, 'redt'); return; }
    state.meals = state.meals.filter(x => x.id !== el.dataset.m); ui.armed = null; save(); render();
  },
  'open-meal': () => { ui.newMealOpen = true; render(); const n = document.getElementById('meal-name'); if (n) n.focus(); },
  'cancel-meal': () => { ui.newMealOpen = false; render(); },
  'save-meal': () => {
    const name = (document.getElementById('meal-name').value || '').trim();
    const items = ((state.days[dk()] || {}).food || []).filter(e => e.fid && getFood(e.fid)).map(e => ({ fid: e.fid, g: e.g }));
    if (!name) { toast(`${icon('info', 'w-4 h-4')}<span>Donne un nom au repas type.</span>`, 'redt'); return; }
    if (!items.length) { toast(`${icon('info', 'w-4 h-4')}<span>Le journal du jour ne contient aucun aliment de la base.</span>`, 'redt'); return; }
    state.meals.push({ id: gid('meal'), name, items }); ui.newMealOpen = false; save(); render();
    toast(`${icon('check', 'w-4 h-4 text-neon')}<span>Repas type « ${esc(name)} » créé.</span>`);
  },
  'add-free': () => {
    const name = (document.getElementById('fr-name').value || '').trim() || 'Saisie libre';
    const m = { k: numIn('fr-k') || 0, p: numIn('fr-p') || 0, c: numIn('fr-c') || 0, f: numIn('fr-f') || 0 };
    if (!m.k && !m.p && !m.c && !m.f) { toast(`${icon('info', 'w-4 h-4')}<span>Saisis au moins une valeur.</span>`, 'redt'); return; }
    const saveIt = document.getElementById('fr-save') && document.getElementById('fr-save').checked;
    const grams = numIn('fr-g');
    if (saveIt) {
      const food = foodFromTotals(name, m, grams);
      state.foods.push(food);
      act(() => { dayEntry(dk()).food.push(mkEntry(food, food.u)); });
      toast(`${icon('bookmark-check', 'w-4 h-4')}<span>${esc(name)} ajouté à ta base.</span>`, 'umbra');
    } else {
      act(() => { dayEntry(dk()).food.push({ id: gid('e'), name, m }); });
    }
  },
  'entry-to-base': el => {
    const d = dayEntry(dk()), e = d.food.find(x => x.id === el.dataset.e);
    if (!e || !e.m) return;
    const food = foodFromTotals(e.name, e.m, NaN);
    state.foods.push(food);
    const i = d.food.indexOf(e);
    d.food[i] = mkEntry(food, food.u);
    save(); render();
    toast(`${icon('bookmark-check', 'w-4 h-4')}<span>${esc(e.name)} ajouté à ta base.</span>`, 'umbra');
  },
  'edit-my-food': el => { ui.editFoodId = el.dataset.f; ui.foodMode = 'custom'; render(); const n = document.getElementById('cf-name'); if (n) n.scrollIntoView({ block: 'center' }); },
  'edit-food': el => { ui.editFoodId = el.dataset.f; ui.foodMode = 'custom'; render(); },
  'cancel-edit-food': () => { ui.editFoodId = null; ui.foodMode = 'search'; render(); },
  'save-food': () => {
    const name = (document.getElementById('cf-name').value || '').trim();
    const vals = { k: numIn('cf-k'), p: numIn('cf-p'), c: numIn('cf-c'), f: numIn('cf-f') };
    if (!name || Object.values(vals).some(v => !isFinite(v) || v < 0)) { toast(`${icon('info', 'w-4 h-4')}<span>Nom et 4 valeurs pour 100 g requis.</span>`, 'redt'); return; }
    const u = numIn('cf-u'), un = (document.getElementById('cf-un').value || '').trim();
    const base = ui.editFoodId ? getFood(ui.editFoodId) : null;
    const food = { id: ui.editFoodId || gid('f'), name, ...vals, grp: base ? base.grp : 'perso' };
    if (isFinite(u) && u > 0) { food.u = u; food.un = un || 'unité'; }
    state.foods = state.foods.filter(f => f.id !== food.id).concat(food);
    ui.editFoodId = null; ui.foodMode = 'search'; ui.selFood = food.id; ui.selGrams = food.u ? String(food.u) : '100';
    save(); render();
    toast(`${icon('check', 'w-4 h-4 text-neon')}<span>${esc(name)} enregistré.</span>`);
  },
  'reset-food': el => {
    state.foods = state.foods.filter(f => f.id !== el.dataset.f);
    if (ui.selFood === el.dataset.f && !getFood(el.dataset.f)) ui.selFood = null;
    ui.editFoodId = null; ui.foodMode = 'search'; save(); render();
  },
  'fw-off': el => { ui.fwOff = Math.min(0, (ui.fwOff || 0) + Number(el.dataset.d)); render(); },
  'fw-copy': el => { const d0 = state.days[el.dataset.k], e = d0 && (d0.food || []).find(x => x.id === el.dataset.e); if (!e) return; act(() => { dayEntry(dk()).food.push({ ...JSON.parse(JSON.stringify(e)), id: gid('e') }); }); toast(`${icon('plus', 'w-4 h-4')}<span>${esc(e.name)} ajouté à aujourd’hui</span>`); },
  'fw-copy-day': el => { const d0 = state.days[el.dataset.k], L = (d0 && d0.food) || []; if (!L.length) return; act(() => { const t = dayEntry(dk()); for (const e of L) t.food.push({ ...JSON.parse(JSON.stringify(e)), id: gid('e') }); }); toast(`${icon('copy', 'w-4 h-4')}<span>${L.length} aliment${L.length > 1 ? 's' : ''} repris</span>`); },
  'del-entry': el => { act(() => { const d = dayEntry(dk()); d.food = d.food.filter(e => e.id !== el.dataset.e); }); },

  /* Réglages nutrition */
  'phase': el => {
    const N = state.nutrition, id = el.dataset.p;
    act(() => {
      N.phase = id; N.kcal = N.phases[id];
      N.c.g = Math.max(0, r0((N.kcal - 4 * N.p.g - 9 * N.f.g) / 4));
    });
    toast(`${icon('flame', 'w-4 h-4')}<span>${PHASES[id]} : ${N.kcal} kcal, glucides à ${N.c.g} g.</span>`, 'umbra');
  },
  'fit-carbs': () => { const N = state.nutrition; act(() => { N.c.g = Math.max(0, r0((N.kcal - 4 * N.p.g - 9 * N.f.g) / 4)); }); },

  /* Programme */
  'tpl-pick': el => { ui.tplPick = el.dataset.t; ui.openProgram = true; render(); },
  'tpl-cancel': () => { ui.tplPick = null; render(); },
  'tpl-apply': () => {
    const t = PROGRAM_TEMPLATES[ui.tplPick]; if (!t) return;
    act(() => { state.program = t.build(); const d = state.days[dk()]; if (d) delete d.sid; });
    ui.tplPick = null; ui.openSessions.clear(); render();
    toast(`${icon('check', 'w-4 h-4 text-neon')}<span>Programme « ${esc(t.label)} » appliqué.</span>`);
  },
  'add-session': () => {
    const id = gid('s');
    state.program.sessions[id] = { name: `Séance ${state.program.order.length + 1}`, muscles: '', stat: 'str', ex: [] };
    state.program.order.push(id);
    ui.openSessions.add(id); ui.openProgram = true; save(); render();
  },
  'sess-del': el => {
    const sid = el.dataset.sid;
    act(() => {
      delete state.program.sessions[sid];
      state.program.order = state.program.order.filter(x => x !== sid);
      state.program.week = state.program.week.map(x => (x === sid ? null : x));
    });
    ui.armed = null; render();
  },
  'ex-add': el => {
    const S = findSession(el.dataset.sid); if (!S) return;
    act(() => { S.ex.push(E(gid('e'), 'Nouvel exercice', '', 90)); });
  },
  'ex-del': el => { const S = findSession(el.dataset.sid); if (!S) return; act(() => { S.ex = S.ex.filter(e => e.id !== el.dataset.eid); }); },
  'ex-up': el => { const S = findSession(el.dataset.sid); const i = S.ex.findIndex(e => e.id === el.dataset.eid); if (i > 0) { [S.ex[i - 1], S.ex[i]] = [S.ex[i], S.ex[i - 1]]; save(); render(); } },
  'ex-down': el => { const S = findSession(el.dataset.sid); const i = S.ex.findIndex(e => e.id === el.dataset.eid); if (i >= 0 && i < S.ex.length - 1) { [S.ex[i + 1], S.ex[i]] = [S.ex[i], S.ex[i + 1]]; save(); render(); } },

  /* Statistiques */
  'alloc-best': () => {
    const L = powerLvl(), n = availablePoints(L); if (n <= 0) return;
    const before = dpsScore(playerCombat()), b = bestSplit(n); state.alloc.str = (state.alloc.str || 0) + b.str; state.alloc.agi = (state.alloc.agi || 0) + b.agi;
    bumpStats = ['str', 'agi']; save(); render();
    toast(`${b.str} point${b.str > 1 ? 's' : ''} en Force, ${b.agi} en Agilité · dégâts moyens ×${(dpsScore(playerCombat()) / before).toFixed(2)}`);
  },
  'alloc': el => {
    const L = powerLvl();
    if (availablePoints(L) <= 0) return;
    const s = el.dataset.stat, inp = document.getElementById('alloc-n-' + s);
    /* on écrit le nombre de points voulu, puis + : tout est attribué d'un coup */
    const n = Math.max(1, Math.min(availablePoints(L), Math.floor(+(inp && inp.value) || 1)));
    ui.allocN = n; state.alloc[s] = (state.alloc[s] || 0) + n;
    bumpStats = [s]; save(); render();
  },

  /* Divers */
  'arm': el => { ui.armed = el.dataset.k; render(); },
  'disarm': () => { ui.armed = null; render(); },
  'timer-skip': () => stopTimer(),
  'close-overlay': () => closeOverlay(),
  'overlay-bg': (el, ev) => { if (ev.target === el) closeOverlay(); },
  'download-backup': () => {
    const ok = downloadText(`systeme-chasseur-${dk()}.json`, JSON.stringify(state));
    if (!ok) handlers['copy-backup']();
  },
  'copy-backup': () => {
    const data = JSON.stringify(state), box = document.getElementById('backup-box');
    const fallback = () => { box.value = data; box.focus(); box.select(); toast(`${icon('info', 'w-4 h-4')}<span>Copie automatique refusée : la sauvegarde est sélectionnée, copie-la à la main.</span>`); };
    try { navigator.clipboard.writeText(data).then(() => toast(`${icon('check', 'w-4 h-4 text-neon')}<span>Sauvegarde copiée.</span>`)).catch(fallback); } catch (e) { fallback(); }
  },
  'import-backup': () => {
    try { restoreFrom((document.getElementById('backup-box').value || '').trim()); }
    catch (e) { toast(`${icon('triangle-alert', 'w-4 h-4')}<span>Sauvegarde illisible. Colle le texte complet.</span>`, 'redt'); }
  },
  'reset-confirm': () => { ui.armed = null; state = freshState(); save(); stopTimer(); render(); }
};

document.addEventListener('click', ev => {
  const el = ev.target.closest('[data-a]');
  if (!el || el.disabled) return;
  const h = handlers[el.dataset.a];
  if (h) h(el, ev);
});

/* Suivi des panneaux ouverts dans Réglages (pour ne pas les refermer au re-rendu) */
document.addEventListener('toggle', ev => {
  const t = ev.target;
  if (!(t instanceof HTMLDetailsElement)) return;
  if (t.dataset.sess) { if (t.open) ui.openSessions.add(t.dataset.sess); else ui.openSessions.delete(t.dataset.sess); }
  if (t.dataset.det === 'program') ui.openProgram = t.open;
  if (t.dataset.det === 'nutri') ui.openNutri = t.open;
  if (t.dataset.det === 'install') ui.openInstall = t.open;
}, true);

/* Saisie en direct : recherche d'aliments et aperçu des grammes */
document.addEventListener('keydown', ev => { const t = ev.target; if (t && t.classList && t.classList.contains('alloc-n') && ev.key === 'Enter') { ev.preventDefault(); const b = t.parentNode.querySelector('[data-a="alloc"]'); if (b) b.click(); } });
document.addEventListener('input', ev => {
  const t = ev.target;
  if (t.id === 'food-q') { ui.foodQuery = t.value; const box = document.getElementById('food-results'); if (box) { box.innerHTML = foodResults(); refreshIcons(); } }
  if (t.id === 'sel-g') { ui.selGrams = t.value; const f = getFood(ui.selFood), p = document.getElementById('sel-prev'); if (f && p) p.textContent = selPreview(f, t.value || 0); }
});

/* Champs validés à la sortie (change) : pas de re-rendu pendant la frappe */
document.addEventListener('change', ev => {
  const t = ev.target;
  const today = dk();

  if (t.id === 'sleep-h') {
    const v = parseFloat(String(t.value).replace(',', '.'));
    act(() => { const d = dayEntry(today); if (isFinite(v) && v >= 0) d.sleep = Math.min(16, v); else delete d.sleep; });
    return;
  }
  if (t.dataset.w) {
    const d = dayEntry(today), v = t.value.trim();
    if (v === '') delete d.w[t.dataset.w]; else d.w[t.dataset.w] = Math.max(0, parseFloat(v.replace(',', '.')) || 0);
    save(); return;
  }
  if (t.dataset.eg) {
    const v = parseFloat(String(t.value).replace(',', '.'));
    act(() => { const e = dayEntry(today).food.find(x => x.id === t.dataset.eg); if (e && isFinite(v) && v >= 0) e.g = v; });
    return;
  }
  if (t.id === 'backup-file' && t.files && t.files[0]) {
    const reader = new FileReader();
    reader.onload = () => { try { restoreFrom(String(reader.result)); } catch (e) { toast(`${icon('triangle-alert', 'w-4 h-4')}<span>Fichier de sauvegarde illisible.</span>`, 'redt'); } };
    reader.readAsText(t.files[0]);
    return;
  }
  /* Objectifs nutritionnels */
  if (t.dataset.ph) { const v = numIn(t.id); if (isFinite(v) && v > 0) { state.nutrition.phases[t.dataset.ph] = r0(v); if (state.nutrition.phase === t.dataset.ph) state.nutrition.kcal = r0(v); act(() => {}); } return; }
  if (t.dataset.n) {
    const v = numIn(t.id); if (!isFinite(v)) return;
    act(() => {
      if (t.dataset.n === 'kcal') { state.nutrition.kcal = clamp(r0(v), 800, 8000); state.nutrition.phase = Object.keys(state.nutrition.phases).find(p => state.nutrition.phases[p] === state.nutrition.kcal) || 'custom'; }
      else state.nutrition.kcalTol = clamp(v, 0, 250);
    });
    return;
  }
  if (t.dataset.nm) {
    const m = t.dataset.nm, k = t.dataset.k;
    act(() => {
      if (k === 'mode') state.nutrition[m].mode = t.value;
      else { const v = numIn(t.id); if (isFinite(v)) state.nutrition[m][k] = k === 'tol' || k === 'tolPlus' ? clamp(v, 0, 250) : k === 'tolMinus' ? clamp(v, 0, 100) : clamp(r0(v), 0, 1000); }
      if (k === 'mode' && t.value === 'custom' && state.nutrition[m].tolPlus == null) { state.nutrition[m].tolMinus = 5; state.nutrition[m].tolPlus = 80; }
    });
    return;
  }
  /* Programme */
  if (t.dataset.pg === 'name') { state.program.name = t.value.trim() || 'Mon programme'; save(); return; }
  if (t.dataset.week !== undefined) { act(() => { state.program.week[Number(t.dataset.week)] = t.value || null; }); return; }
  if (t.dataset.sf) {
    const S = findSession(t.dataset.sid); if (!S) return;
    if (t.dataset.sf === 'stat') act(() => { S.stat = t.value; });
    else { S[t.dataset.sf] = t.value.trim() || (t.dataset.sf === 'name' ? 'Séance' : ''); save(); render(); }
    return;
  }
  if (t.dataset.ef) {
    const e = findEx(t.dataset.sid, t.dataset.eid); if (!e) return;
    const k = t.dataset.ef;
    if (['name', 'muscle', 'note'].includes(k)) { e[k] = t.value.trim() || (k === 'name' ? 'Exercice' : ''); save(); return; }
    const v = r0(numIn(t.id)); if (!isFinite(v)) return;
    const lim = { warm: [0, 4], setsMin: [1, 8], setsMax: [1, 8], repMin: [1, 50], repMax: [1, 50], rest: [15, 600] }[k];
    act(() => {
      e[k] = clamp(v, lim[0], lim[1]);
      if (e.setsMin > e.setsMax) { if (k === 'setsMin') e.setsMax = e.setsMin; else e.setsMin = e.setsMax; }
      if (e.repMin > e.repMax) { if (k === 'repMin') e.repMax = e.repMin; else e.repMin = e.repMax; }
    });
    return;
  }
  /* Profil */
  if (t.dataset.pf) {
    if (t.dataset.pf === 'name') state.profile.name = t.value.trim() || state.profile.name;
    else { state.profile.cls = t.value; validateGear(); _bm = null;
      /* changer de classe : tout se ré-optimise aussitôt (armes de la nouvelle classe, points, runes, skins…), pour ne pas perdre de puissance */
      if (typeof optApply === 'function') { try { const g = (ui.optPlan && ui.optPlan.goal) || 'combat'; const P = optApply(g); setTimeout(() => toast(`${icon('wand-2', 'w-4 h-4')}<span>Classe changée : équipement ré-optimisé (${esc(OPT_GOALS[g].name)}) · puissance ${P.powBefore.toLocaleString('fr-FR')} → ${P.powAfter.toLocaleString('fr-FR')}</span>`, 'umbra'), 50); } catch (e) {} } }
    save(); render();
  }
});
document.addEventListener('keydown', ev => {
  if (ev.key === 'Enter' && ev.target.id === 'aw-name') handlers.awaken();
  if (ev.key === 'Enter' && ev.target.id === 'sel-g') handlers['add-food']();
  if (ev.key === 'Enter' && ev.target.id === 'meal-name') handlers['save-meal']();
  if (ev.key === 'Escape') closeOverlay();
});

/* ==========================================================================
   ROYAUME — aliments personnels, kinahs, boutique, Maison de l'Ombre,
   livre-jeu (récit, combats, fins), archives, lettres, Faille du jour
   ========================================================================== */

/* Les armes, armures et talismans fixes sont remplacés par l'arsenal (loot) */
for (let i = SHOP.length - 1; i >= 0; i--) if (['weapon', 'armor', 'talisman'].includes(SHOP[i].cat)) SHOP.splice(i, 1);
delete SHOP_CATS.weapon; delete SHOP_CATS.armor; delete SHOP_CATS.talisman;

/* ---------- Aliments personnels ---------- */
function foodFromTotals(name, m, grams) {
  const g = isFinite(grams) && grams > 0 ? grams : 100;
  const r = 100 / g, round1 = v => Math.round(v * 10) / 10;
  return { id: gid('f'), name, k: round1((m.k || 0) * r), p: round1((m.p || 0) * r), c: round1((m.c || 0) * r), f: round1((m.f || 0) * r),
           grp: 'perso', u: g, un: isFinite(grams) && grams > 0 ? 'portion' : 'portion' };
}
function viewMyFoods() {
  const mine = state.foods.filter(f => !FOOD_DB.some(b => b.id === f.id));
  const edited = state.foods.filter(f => FOOD_DB.some(b => b.id === f.id));
  const row = f => `
    <div class="flex items-center gap-2 py-2 border-t border-[#22222a]">
      <div class="flex-1 min-w-0">
        <div class="truncate">${esc(f.name)}</div>
        <div class="text-[11px] muted f-mono">100 g : ${f.k} kcal · P ${f.p} · G ${f.c} · L ${f.f}${f.u ? ` · 1 ${esc(f.un || 'unité')} = ${f.u} g` : ''}</div>
      </div>
      <button type="button" class="ibtn" data-a="edit-my-food" data-f="${f.id}" aria-label="Modifier ${esc(f.name)}">${icon('pencil', 'w-4 h-4')}</button>
    </div>`;
  return `
    <div class="mt-4 border-t border-[#2c2540] pt-3">
      <div class="label mb-1">Ma base (${mine.length})</div>
      ${mine.length ? mine.map(row).join('') : `<p class="text-sm muted">Aucun aliment personnel. Ceux que tu crées ici ou en saisie libre apparaîtront dans la recherche et les suggestions.</p>`}
      ${edited.length ? `<div class="label mt-3 mb-1">Aliments de base modifiés (${edited.length})</div>${edited.map(row).join('')}` : ''}
    </div>`;
}

/* ---------- Économie ---------- */
function curLevel() { return levelInfo(totals().xp).level; }
function hasF(id) { return !!(state.followers && state.followers[id]); }
function houseCap() {
  let cap = 1;
  for (const it of SHOP) if (it.cat === 'house' && state.owned[it.id]) cap = Math.max(cap, HOUSE_CAP[it.r]);
  return cap;
}
function bestHouse() {
  let best = null;
  for (const it of SHOP) if (it.cat === 'house' && state.owned[it.id] && (!best || it.r > best.r)) best = it;
  return best;
}
function itemPrice(it) {
  let p = RARITIES[it.r].price;
  if (['weapon', 'armor', 'talisman', 'mount'].includes(it.cat) && hasF('theo')) p = Math.round(p * 0.85);
  return p;
}
function instrumentsOwned() { return SHOP.filter(i => i.cat === 'instrument' && state.owned[i.id]).length; }
function bondOf(id) {
  const f = state.followers[id];
  if (!f) return 0;
  const succ = totals().success.filter(k => k >= f.date).length;
  return succ * (hasF('nour') ? 2 : 1) + instrumentsOwned() + (hasF('zach') ? 3 : 0) + (state.bond[id] || 0);
}
function lettersOpen(id) { return hasF(id) ? LETTER_BONDS.filter(t => bondOf(id) >= t).length : 0; }
function unreadLetters() {
  let n = 0;
  for (const id of FOLLOWER_ORDER) for (let i = 0; i < lettersOpen(id); i++) if (!state.story.read[`${id}:${i}`]) n++;
  return n;
}
function trueEnd() { return !!state.story.endings.L; }

/* ---------- Combat (voir combat.js) ---------- */
const STAT_KEYS = ['str', 'agi', 'end', 'int'];
function gearBonus(stat) {
  let b = 0;
  for (const slot in state.gear) {
    const it = invItem(state.gear[slot]);
    if (it && itemStat(it) === stat) b += itemValue(it, slot);
  }
  return Math.round(b);
}

/* ---------- Récit : tomes, conditions et navigation ---------- */
function tomeAvailable(T) { try { return !T.avail || !!T.avail(); } catch (e) { return false; } }
function curTome() { const T = TOMES[state.story.tome || 'I']; return T && tomeAvailable(T) ? T : TOMES.I; }
/* État de lecture d'un tome (le Tome I garde ses champs historiques à la racine de state.story) */
function TS(id) {
  id = id || curTome().id;
  if (id === 'I') return state.story;
  const all = state.story.tomes || (state.story.tomes = {});
  return all[id] || (all[id] = { node: TOMES[id].start, flags: {}, snaps: {}, reached: 0, pending: TOMES[id].start });
}
function chapOf(n) { return TOMES[n.tome].chapters[n.ch]; }
function tomeEndings(tid) { return Object.keys(state.story.tomeEnds || {}).filter(k => k.startsWith(tid + '-')); }
function flagVal(k) {
  if (k === 'endings') return Object.keys(state.story.endings).filter(e => e !== 'L').length;
  if (k.startsWith('arch:')) return !!state.story.archives[k.slice(5)];
  if (k.startsWith('met:')) return !!state.story.met[k.slice(4)];
  if (k.startsWith('end:')) return !!state.story.endings[k.slice(4)];
  if (k.startsWith('seen:')) return !!(state.story.seen || {})[k.slice(5)];
  if (k.startsWith('tend:')) return !!(state.story.tomeEnds || {})[k.slice(5)];
  if (k.startsWith('tfin:')) return Object.keys(state.story.tomeEnds || {}).some(x => x.startsWith(k.slice(5) + '-'));   /* tome fini, quelle que soit la fin */
  if (k.includes('.')) { const [t, kk] = k.split('.'); return TOMES[t] ? TS(t).flags[kk] : undefined; }
  return TS().flags[k];
}
function checkReq(req) {
  if (!req) return true;
  return req.every(([k, op, v]) => {
    const x = flagVal(k);
    if (op === '==') return x === v;
    if (op === '!=') return x !== v;
    if (op === '>=') return (x || 0) >= v;
    return false;
  });
}
function storyTxt(s) { const h = esc(s).replace(/\{nom\}/g, esc((state.profile && state.profile.name) || 'personne')); return typeof pnLink === 'function' ? pnLink(h) : h; }
function renderParas(list) {
  return (list || []).map(p => {
    if (typeof p === 'string') return `<p>${storyTxt(p)}</p>`;
    if (p.sys) return (!p.if || checkReq(p.if)) ? `<div class="sysmsg my-3">${storyTxt(p.sys)}</div>` : '';
    if (p.if && checkReq(p.if)) return `<p>${storyTxt(p.t)}</p>`;
    return '';
  }).join('');
}
function enterNode(id) {
  const n = ALL_NODES[id];
  if (!n) return;
  const S = TS(n.tome), G = state.story;
  S.node = id; S.pending = null;
  logEnter(id);
  const chap = TOMES[n.tome].chapters.find(c => c.start === id);
  if (chap) { S.snaps[chap.n] = JSON.parse(JSON.stringify(S.flags)); S.reached = Math.max(S.reached || 0, chap.n); }
  if (n.set) Object.assign(S.flags, n.set);
  for (const f of n.unlock || []) {
    if (!G.met[f]) { G.met[f] = dk(); toast(`${icon('user-plus', 'w-4 h-4')}<span>${esc(FOLLOWERS[f].name)} peut rejoindre la Maison de l’Ombre.</span>`, 'umbra'); }
  }
  for (const a of n.archive || []) {
    if (!G.archives[a]) { G.archives[a] = dk(); toast(`${icon('scroll', 'w-4 h-4')}<span>Archive obtenue : ${esc(ARCHIVES[a].t)}</span>`, 'umbra'); }
  }
  if (n.bond && !G.rewards['bond:' + id]) {
    for (const k in n.bond) state.bond[k] = (state.bond[k] || 0) + n.bond[k];
    G.rewards['bond:' + id] = 1;
  }
  if (n.ending) {
    if (n.tome === 'I') { if (!G.endings[n.ending]) G.endings[n.ending] = dk(); }
    else { G.tomeEnds = G.tomeEnds || {}; const k = `${n.tome}-${n.ending}`; if (!G.tomeEnds[k]) G.tomeEnds[k] = dk(); }
  }
}
function storyScrollTop() { const el = document.getElementById('story-node'); if (el) el.scrollIntoView({ block: 'start' }); }

/* ---------- Vues du Royaume ---------- */
function viewRealm() {
  const tabs = [['story', 'book-open', 'Récit'], ['conseil', 'messages-square', 'Conseil'], ['exp', 'swords', 'Expéditions'], ['house', 'users', 'Maison'], ['arsenal', 'backpack', 'Arsenal'], ['shop', 'store', 'Boutique'], ['arene', 'trophy', 'Arène'], ['codex', 'library', 'Codex']];
  const unread = unreadLetters();
  if (state.realmTab === 'arch') state.realmTab = 'codex';
  const views = { story: viewStory, conseil: viewConseil, exp: viewExpeditions, house: viewHouse, arsenal: viewArsenal, shop: viewShop, arene: viewArena, codex: viewCodex };
  return `
  <section class="flex flex-col gap-4">
    <div class="subtabs">${tabs.map(([id, ic, l]) => `<button type="button" class="chip ${state.realmTab === id ? 'on' : ''} flex items-center gap-1.5" data-a="realm-tab" data-t="${id}">${icon(ic, 'w-3.5 h-3.5')}${l}${id === 'house' && unread ? `<span class="badge">${unread}</span>` : ''}</button>`).join('')}</div>
    ${(views[state.realmTab] || viewStory)()}
  </section>`;
}

function viewRealmTeaser() {
  const T = curTome(), S = TS(T.id), n = ALL_NODES[S.node];
  const ch = n ? chapOf(n) : T.chapters[0];
  const unread = unreadLetters();
  const keys = keysLeft();
  const newTomes = Object.values(TOMES).filter(x => x.id !== 'I' && tomeAvailable(x) && !(state.story.tomes || {})[x.id]);
  return `
    <div class="sys umbra">
      <div class="flex items-center justify-between gap-2 mb-2"><div class="sys-title u">Tome ${T.num} · ${esc(T.title)}</div><span class="text-xs muted f-mono">${Object.keys(state.story.endings).length}/12 fins</span></div>
      <p class="f-display text-sm">${esc(ch.title)}${S.pending ? ` · <span class="muted">niveau ${chapOf(ALL_NODES[S.pending]).level} requis pour la suite</span>` : ''}</p>
      ${newTomes.length ? `<p class="text-xs glow-umbra mt-1">Nouveau tome disponible : ${newTomes.map(x => esc(x.title)).join(', ')}</p>` : ''}
      <div class="flex flex-wrap gap-2 mt-3">
        <button type="button" class="btn sm u" data-a="realm-go" data-t="story">${icon('book-open', 'w-3.5 h-3.5')}Continuer le récit</button>
        ${unread ? `<button type="button" class="btn sm u" data-a="realm-go" data-t="house">${icon('mail', 'w-3.5 h-3.5')}${unread} lettre${unread > 1 ? 's' : ''}</button>` : ''}
        ${keys > 0 ? `<button type="button" class="btn sm" data-a="realm-go" data-t="exp">${icon('key-round', 'w-3.5 h-3.5')}${keys} clé${keys > 1 ? 's' : ''} de Faille</button>` : ''}
      </div>
    </div>`;
}

function viewTomeBar() {
  const cur = curTome();
  return `<div class="sys">
    <div class="flex items-center justify-between gap-2 mb-2"><div class="sys-title u">Bibliothèque</div><span class="text-[11px] muted">${Object.values(TOMES).filter(tomeAvailable).length} / ${Object.keys(TOMES).length} tomes ouverts</span></div>
    <div class="flex flex-col gap-1.5">
      ${Object.values(TOMES).map(T => {
        const ok = tomeAvailable(T), on = T.id === cur.id;
        const ends = T.id === 'I' ? Object.keys(state.story.endings).length : tomeEndings(T.id).length;
        const total = Object.keys(T.endings).length;
        if (!ok) return `<div class="res" style="cursor:default"><span class="f-display w-8 muted">${T.num}</span><span class="flex-1 min-w-0"><span class="block muted">${esc(T.title)}</span><span class="text-[11px] muted">${esc(T.availTxt || '')}</span></span>${icon('lock', 'w-4 h-4 muted')}</div>`;
        return `<button type="button" class="res ${on ? 'on' : ''}" data-a="tome-pick" data-t="${T.id}"><span class="f-display w-8 ${on ? 'glow-umbra' : ''}">${T.num}</span>
          <span class="flex-1 min-w-0"><span class="block f-display ${on ? 'glow-umbra' : ''}">${esc(T.title)}</span><span class="text-[11px] muted">${esc(T.sub || '')} · ${ends}/${total} fin${total > 1 ? 's' : ''}</span></span>${on ? icon('book-open', 'w-4 h-4 glow-umbra') : icon('chevron-right', 'w-4 h-4 muted')}</button>`;
      }).join('')}
    </div></div>`;
}

function viewStory() {
  if (ui.reread) return viewReread();
  const T = curTome(), S = TS(T.id), G = state.story;
  const n = ALL_NODES[S.node] || ALL_NODES[T.start];
  const chap = chapOf(n);
  const isStart = chap.start === n.id;
  const level = curLevel();
  let body = '';

  if (S.pending) {
    const pc = chapOf(ALL_NODES[S.pending]);
    const ok = level >= pc.level;
    body = `
      <div class="sys ${ok ? '' : 'danger'}">
        <div class="sys-title ${ok ? '' : 'r'} mb-3"><span class="bang">!</span>${ok ? 'Accès accordé' : 'Accès refusé'}</div>
        <p class="f-display text-lg">${esc(pc.title)}</p>
        <p class="text-sm muted mt-1">${ok ? 'Vous êtes prêt.' : `Le Système vous juge trop faible. Niveau ${pc.level} requis (vous êtes niveau ${level}). Chaque séance et chaque jour de macros vous en rapprochent.`}</p>
        <div class="bar mt-3"><i style="width:${Math.min(100, level / pc.level * 100)}%"></i></div>
        <button type="button" class="btn ${ok ? 'solid' : 'ghost'} w-full mt-4" data-a="continue-pending" ${ok ? '' : 'disabled'}>${icon(ok ? 'door-open' : 'lock')}${ok ? 'Entrer' : `Niveau ${pc.level}`}</button>
      </div>`;
  } else {
    const won = n.combat && G.combats[n.id] && G.combats[n.id].won;
    const showChoices = !n.combat || won;
    const cst = G.combats[n.id] || {};
    const blocked = n.combat && !won && cst.lastFail === dk() && !hasF('anselme') ? 'Vous avez déjà perdu ce combat aujourd’hui. Entraînez-vous et revenez demain.' : null;
    body = `
      <div class="flex items-center justify-between gap-2">
        <button type="button" class="btn sm ghost" data-a="reread-open">${icon('book-open-check', 'w-3.5 h-3.5')}Relire depuis le début</button>
        <span class="flex gap-2"><button type="button" class="btn sm ghost" data-a="pn-all" aria-label="Qui est qui">${icon('users', 'w-3.5 h-3.5')}Qui est qui</button><button type="button" class="btn sm ghost" data-a="reader-toggle" aria-label="Réglages de lecture">${icon('type', 'w-3.5 h-3.5')}Aa</button></span>
      </div>
      <button type="button" class="btn sm u imm-open-btn" data-a="imm-open">${icon('sparkles', 'w-3.5 h-3.5')}Lecture immersive</button>
      ${viewReaderTools()}
      <article id="story-node" class="sys umbra ${readerClass()}" style="scroll-margin-top:16px;${readerStyle()}">
        <span class="tome-pct" title="Avancée du tome">${tomeProgress(T, n.id)} %</span>
        ${isStart ? `
          <div class="label">Tome ${T.num} · ${esc(T.title)}</div>
          <h2 class="f-display text-2xl font-bold glow-umbra mt-1">${esc(chap.title)}</h2>
          <blockquote class="verse mt-3 text-[15px]">« ${esc(chap.verse)} »<span class="block not-italic text-xs muted mt-1 f-display tracking-wide">${esc(chap.ref)}</span></blockquote>
          ${T.chapters[0] && T.chapters[0].start === n.id ? tomeMemo(T) : ''}
          <div class="h-px bg-[#2c2540] my-4"></div>`
        : `<div class="label mb-3">${esc(chap.title)}</div>`}
        ${(pnBegin(n), '')}<div class="prose">${renderParas(n.text)}</div>
        ${won && n.combat ? `<div class="prose mt-4"><p><em>${storyTxt(n.combat.win)}</em></p>${renderParas(n.after)}</div>` : ''}${(pnEnd(), '')}
        ${n.ending ? viewEndingSeal(n) : ''}
      </article>
      ${n.combat && !won ? viewCombatPanel({ ...n.combat, blocked }, 'story-fight', n.id) : ''}
      ${showChoices && n.choices ? `<div class="flex flex-col gap-2">${n.choices.map((c, i) => {
        const ok = checkReq(c.req);
        if (!ok && c.hidden) return '';
        if (!ok && c.sealed) return `<div class="choice sealed">${icon('lock', 'w-4 h-4')}<span class="flex-1">${esc(c.sealedLabel || 'Une voie scellée')}${hasF('helene') ? `<span class="block text-[11px] muted mt-0.5" style="font-family:var(--font-body)">${esc(c.hint || TRUE_HINT)}</span>` : `<span class="block text-[11px] muted mt-0.5" style="font-family:var(--font-body)">Une archiviste saurait peut-être ce qu’elle demande.</span>`}</span></div>`;
        const seen = G.picked[`${n.id}:${i}`];
        return `<button type="button" class="choice" data-a="choice" data-i="${i}">${icon('chevron-right', 'w-4 h-4 glow')}<span class="flex-1">${esc(c.t)}</span>${seen ? '<span class="seen" title="Déjà choisi"></span>' : ''}</button>`;
      }).join('')}</div>` : ''}`;
  }

  const anyEnd = T.id === 'I' ? Object.keys(G.endings).length : tomeEndings(T.id).length;
  return `
    ${viewTomeBar()}
    ${body}
    ${anyEnd ? viewChapterSelect() : ''}`;
}

function viewEndingSeal(n) {
  const letter = n.ending, T = TOMES[n.tome], E = T.endings[letter];
  const count = T.id === 'I' ? Object.keys(state.story.endings).length : tomeEndings(T.id).length;
  const total = Object.keys(T.endings).length;
  return `
    <div class="mt-6 pt-5 border-t border-[#2c2540] text-center">
      <div class="label">${T.id === 'I' ? `Fin ${letter}` : `Tome ${T.num} · issue ${letter}`}</div>
      <div class="f-display text-3xl font-extrabold glow-umbra mt-1">${esc(E.title)}</div>
      <blockquote class="verse mt-4 text-left text-[15px]">« ${esc(E.verse)} »<span class="block not-italic text-xs muted mt-1 f-display">${esc(E.ref)}</span></blockquote>
      <p class="text-xs muted mt-4 f-mono">${count} sur ${total} · la sélection de chapitre est ouverte ci-dessous</p>
      ${T.id === 'I' && letter === 'L' ? `<p class="text-sm mt-3 f-display glow">La voix du Système a changé. Les objets éternels de la Maison sont disponibles.</p>` : ''}
    </div>`;
}

function viewChapterSelect() {
  const T = curTome(), S = TS(T.id), n = ALL_NODES[S.node];
  return `
    <details class="sys" ${n && n.ending ? 'open' : ''}>
      <summary class="flex items-center justify-between gap-2"><span class="sys-title">Sélection de chapitre</span><span class="chev muted">${icon('chevron-down')}</span></summary>
      <p class="text-xs muted mt-3">Rejouez depuis le début d’un chapitre atteint, avec les choix que vous aviez faits jusque-là. Archives, membres et fins déjà obtenus sont conservés ; les combats déjà gagnés ne se rejouent pas.</p>
      <div class="flex flex-col gap-2 mt-3">
        ${T.chapters.filter(c => c.n <= (S.reached || 0)).map(c => `
          <button type="button" class="choice" data-a="chapter-restart" data-n="${c.n}">${icon('bookmark', 'w-4 h-4 glow-umbra')}<span class="flex-1">${esc(c.title)}</span><span class="text-[11px] muted f-mono">niv. ${c.level}</span></button>`).join('')}
      </div>
    </details>`;
}

/* ---------- Maison de l'Ombre ---------- */
function portrait(id, size = 44) {
  const F = FOLLOWERS[id], col = RARITIES[F.r].color;
  return `<div class="portrait" style="color:${col};width:${size}px;height:${size}px">${icon(F.icon, 'w-5 h-5')}</div>`;
}
function viewHouse() {
  const cap = houseCap(), members = FOLLOWER_ORDER.filter(hasF), bh = bestHouse();
  const recruitable = FOLLOWER_ORDER.filter(id => state.story.met[id] && !hasF(id));
  const unknown = FOLLOWER_ORDER.filter(id => !state.story.met[id]).length;
  const k = kinahs();
  return `
    <div class="sys">
      <div class="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <div class="sys-title">Maison de l’Ombre</div>
        <span class="f-mono text-sm">${members.length} / ${cap >= 99 ? '∞' : cap} membre${cap > 1 ? 's' : ''}</span>
      </div>
      <p class="text-sm">${bh ? `Demeure : <b class="f-display" style="color:${RARITIES[bh.r].color}">${esc(bh.name)}</b>` : 'Demeure : votre chambre des Brèches (1 place).'} <button type="button" class="underline underline-offset-2 muted text-xs" data-a="shop-jump" data-c="house">Agrandir</button></p>
      <div class="label mt-4 mb-2">Combat</div>
      ${viewCombatSummary()}
      <button type="button" class="btn sm mt-3" data-a="realm-go" data-t="arsenal">${icon('backpack', 'w-3.5 h-3.5')}Équipement, puces et amélioration</button>
    </div>

    ${members.length ? `<div class="label px-1">Membres</div>${members.map(viewMemberCard).join('')}` : ''}

    ${recruitable.length ? `<div class="label px-1">Peuvent vous rejoindre</div>${recruitable.map(id => {
      const F = FOLLOWERS[id], full = members.length >= cap, poor = k < F.price;
      return `<div class="item" style="color:${RARITIES[F.r].color}">
        ${portrait(id)}
        <div class="flex-1 min-w-0" style="color:var(--text)">
          <div class="flex items-center gap-2 flex-wrap"><span class="f-display font-semibold">${esc(F.name)}</span><span class="rar" style="color:${RARITIES[F.r].color}">${esc(F.role)}</span></div>
          <p class="text-xs muted mt-1">${esc(F.desc)}</p>
          <p class="text-xs mt-1"><b class="glow">Rôle :</b> ${esc(F.bonus)}</p>
          <div class="flex items-center justify-between gap-2 mt-2 flex-wrap">
            <span class="f-mono text-sm kinah">${icon('gem', 'w-3.5 h-3.5 inline -mt-0.5')} ${fmtK(F.price)}</span>
            <button type="button" class="btn sm u" data-a="recruit" data-id="${id}" ${full || poor ? 'disabled' : ''}>${full ? 'Demeure pleine' : poor ? 'Kinahs insuffisants' : 'Recruter'}</button>
          </div>
        </div></div>`;
    }).join('')}` : ''}

    ${unknown ? `<div class="card text-sm muted flex items-center gap-3">${icon('user-search', 'w-5 h-5')}<span>${unknown} silhouette${unknown > 1 ? 's' : ''} inconnue${unknown > 1 ? 's' : ''}. Avancez dans le récit pour les rencontrer.</span></div>` : ''}`;
}
function viewMemberCard(id) {
  const F = FOLLOWERS[id], b = bondOf(id), open = lettersOpen(id);
  const next = LETTER_BONDS.find(t => t > b);
  return `<div class="item" style="color:${RARITIES[F.r].color}">
    ${portrait(id)}
    <div class="flex-1 min-w-0" style="color:var(--text)">
      <div class="flex items-center gap-2 flex-wrap"><span class="f-display font-semibold">${esc(F.name)}</span><span class="rar" style="color:${RARITIES[F.r].color}">${esc(F.role)}</span></div>
      <p class="text-xs mt-1"><b class="glow">Rôle :</b> ${esc(F.bonus)}</p>
      <div class="flex items-center justify-between gap-2 mt-2 text-[11px]">
        <span class="muted">Lien <b class="f-mono glow-umbra">${b}</b>${next !== undefined ? ` · prochaine lettre à ${next}` : ' · toutes les lettres reçues'}</span>
      </div>
      <div class="flex gap-2 mt-2 flex-wrap">
        ${F.letters.map((L, i) => {
          const unlocked = i < open, read = state.story.read[`${id}:${i}`];
          return unlocked
            ? `<button type="button" class="btn sm ${read ? 'ghost' : 'u'}" data-a="open-letter" data-id="${id}" data-i="${i}">${icon(read ? 'mail-open' : 'mail', 'w-3.5 h-3.5')}${esc(L.t)}</button>`
            : `<span class="btn sm ghost" style="cursor:default;opacity:.5">${icon('lock', 'w-3.5 h-3.5')}Lien ${LETTER_BONDS[i]}</span>`;
        }).join('')}
      </div>
    </div></div>`;
}

/* ---------- Archives & fins ---------- */
const ENDING_HINTS = {
  A: 'Au bout du chemin, prendre ce que l’Architecte tenait.', B: 'Sur la cathédrale, accepter la main tendue.',
  C: 'Promettre la vengeance à Séraphine, puis la laisser décider.', D: 'Aider le père à forcer la Porte.',
  E: 'Avoir souvent commandé plutôt que servi (3 fois au moins), puis donner un dernier ordre.', F: 'Prendre soi-même la place du sceau.',
  G: 'À l’observatoire, verser la fiole.', H: 'Laisser le père partir seul.', I: 'Refuser dès le premier instant.',
  J: 'Devant le jeune homme sans visage, obéir au Système.', K: 'Quand le stratège demande de choisir, partir.', L: TRUE_HINT
};
/* ---------- Gestionnaires ---------- */
Object.assign(handlers, {
  'go-shop': () => { state.tab = 'realm'; state.realmTab = 'shop'; save(); render(); window.scrollTo({ top: 0 }); },
  'realm-go': el => { state.tab = 'realm'; state.realmTab = el.dataset.t; save(); render(); window.scrollTo({ top: 0 }); },
  'realm-tab': el => { state.realmTab = el.dataset.t; save(); render(); },
  'shop-cat': el => { ui.shopCat = el.dataset.c; render(); },
  'shop-jump': el => { state.realmTab = 'shop'; ui.shopCat = el.dataset.c; save(); render(); window.scrollTo({ top: 0 }); },

  'tome-pick': el => { const T = TOMES[el.dataset.t]; if (!T || !tomeAvailable(T)) return; state.story.tome = T.id; TS(T.id); ui.lastFight = null; save(); render(); window.scrollTo({ top: 0 }); },
  'choice': el => {
    const S = TS(), G = state.story, n = ALL_NODES[S.node], i = Number(el.dataset.i), c = n && n.choices && n.choices[i];
    if (!c || !checkReq(c.req)) return;
    G.picked[`${n.id}:${i}`] = 1;
    ensureLog(curTome()); logChoice(n.id, c.t);
    for (const k in c.add || {}) S.flags[k] = (S.flags[k] || 0) + c.add[k];
    if (c.set) Object.assign(S.flags, c.set);
    let to = c.to;
    for (const b of c.branch || []) if (checkReq(b.req)) { to = b.to; break; }
    const tn = ALL_NODES[to];
    ui.lastFight = null;
    if (tn.ch > n.ch && !tn.ending && curLevel() < chapOf(tn).level) { S.pending = to; }
    else enterNode(to);
    save(); render(); storyScrollTop();
  },
  'continue-pending': () => {
    const S = TS();
    if (!S.pending || curLevel() < chapOf(ALL_NODES[S.pending]).level) return;
    enterNode(S.pending); save(); render(); storyScrollTop();
  },
  'chapter-restart': el => {
    const T = curTome(), S = TS(T.id), ch = T.chapters[Number(el.dataset.n)];
    if (!ch || ch.n > (S.reached || 0)) return;
    S.flags = JSON.parse(JSON.stringify(S.snaps[ch.n] || {}));
    ensureLog(T); logTruncateTo(T, ch.start);
    ui.lastFight = null; ui.reread = false;
    enterNode(ch.start); save(); render(); storyScrollTop();
  },

  'recruit': el => {
    const id = el.dataset.id, F = FOLLOWERS[id];
    if (!F || hasF(id) || !state.story.met[id]) return;
    if (FOLLOWER_ORDER.filter(hasF).length >= houseCap() || kinahs() < F.price) return;
    state.followers[id] = { date: dk() };
    state.buys.push({ id: 'f:' + id, price: F.price, date: dk() });
    save(); render();
    showOverlay(`
      <div class="sys umbra pop w-full max-w-sm" style="padding:24px 20px">
        <div class="sys-title u mb-4"><span class="bang">!</span>Maison de l’Ombre</div>
        <div class="flex items-center gap-3" style="color:${RARITIES[F.r].color}">${portrait(id, 52)}<div style="color:var(--text)"><div class="f-display text-xl font-bold">${esc(F.name)}</div><div class="text-sm muted">${esc(F.role)}</div></div></div>
        <p class="text-sm mt-4">${esc(F.name)} vous a rejoint. ${esc(F.bonus)}</p>
        <p class="text-xs muted mt-2">Une première lettre vous attend. Les suivantes viendront avec le lien : chaque quête quotidienne accomplie le renforce.</p>
        <button type="button" class="btn solid w-full mt-5" data-a="open-letter" data-id="${id}" data-i="0">${icon('mail', 'w-4 h-4')}Lire sa lettre</button>
      </div>`);
  },
  'open-letter': el => {
    const id = el.dataset.id, i = Number(el.dataset.i), F = FOLLOWERS[id];
    if (!F || i >= lettersOpen(id)) return;
    state.story.read[`${id}:${i}`] = 1; save(); render();
    const L = F.letters[i];
    showOverlay(`
      <div class="pop w-full max-w-md">
        <div class="flex items-center justify-between gap-2 mb-2"><span class="label">Lettre ${i + 1} / 3 · ${esc(F.name)}</span>
          <button type="button" class="ibtn" data-a="close-overlay" aria-label="Fermer">${icon('x', 'w-4 h-4')}</button></div>
        <div class="letter"><h3>${esc(L.t)}</h3>${esc(L.body)}</div>
        <button type="button" class="btn ghost w-full mt-3" data-a="close-overlay">Replier la lettre</button>
      </div>`);
  },
  'open-archive': el => {
    const A = ARCHIVES[el.dataset.id];
    if (!A || !state.story.archives[el.dataset.id]) return;
    showOverlay(`
      <div class="sys pop w-full max-w-md" style="padding:20px">
        <div class="flex items-center justify-between gap-2 mb-3"><span class="sys-title">${esc(el.dataset.id)}</span>
          <button type="button" class="ibtn" data-a="close-overlay" aria-label="Fermer">${icon('x', 'w-4 h-4')}</button></div>
        <h3 class="f-display text-lg font-bold">${esc(A.t)}</h3>
        <div class="f-mono text-[13px] mt-3 leading-relaxed" style="white-space:pre-line;color:#cfd3dc;max-height:60vh;overflow:auto">${esc(A.body)}</div>
      </div>`);
  },
  'buy': el => {
    const it = SHOP.find(x => x.id === el.dataset.id);
    if (!it || state.owned[it.id] || it.story || it.eternal || it.merchant) return;
    const price = itemPrice(it);
    if (curLevel() < RARITIES[it.r].lvl || (it.req === 'trueEnd' && !trueEnd()) || kinahs() < price) return;
    state.owned[it.id] = dk();
    state.buys.push({ id: it.id, price, date: dk() });
    if (SHOP_CATS[it.cat].stat) {
      const cur = SHOP.find(x => x.id === state.equip[it.cat]);
      if (!cur || cur.r < it.r) state.equip[it.cat] = it.id;
    }
    save(); render();
    toast(`${icon('package-check', 'w-4 h-4')}<span>Obtenu : <b style="color:${RARITIES[it.r].color}">${esc(it.name)}</b></span>`);
  },
  'equip': el => {
    const it = SHOP.find(x => x.id === el.dataset.id);
    if (!it || !state.owned[it.id]) return;
    state.equip[it.cat] = it.id; save(); render();
  }
});

/* ==========================================================================
   ARSENAL — classes et configurations d'armes, butin, amélioration (+4),
   puces et fusion, expéditions, Monarques, codex, cosmétiques, trophées
   ========================================================================== */

/* ---------- Utilitaires ---------- */
function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
function pickW(weights) {
  const tot = weights.reduce((a, b) => a + b, 0);
  let x = Math.random() * tot;
  for (let i = 0; i < weights.length; i++) { x -= weights[i]; if (x < 0) return i; }
  return weights.length - 1;
}
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

/* ---------- Objets ---------- */
function invItem(uid) { return uid ? state.inv.find(i => i.uid === uid) : null; }
function isWeapon(it) { return !!WEAPON_TYPES[it.type]; }
function typeInfo(it) { return WEAPON_TYPES[it.type] || ARMOR_TYPES[it.type]; }
function itemStat(it) { return typeInfo(it).stat; }
function itemName(it) { return `${typeInfo(it).name} ${GEAR_SETS[it.r].suffix}`; }
function itemValue(it, slot) {
  let v = RARITIES[it.r].bonus * (1 + 0.25 * (it.up || 0));
  if (isWeapon(it) && WEAPON_TYPES[it.type].hands === 2) v *= 1.6;
  if (slot === 'off') v *= it.type === 'bouclier' ? 0.8 : 0.7;
  return v;
}
function equippedSlot(uid) { for (const s in state.gear) if (state.gear[s] === uid) return s; return null; }

/* ---------- Classes ---------- */
function curClass() { return CLASSES[(state.profile && state.profile.cls) || 'assassin'] || CLASSES.assassin; }
function classMains(c = curClass()) { return [...new Set(c.loadouts.map(l => l[0]))]; }
function classOffs(c = curClass()) { return [...new Set(c.loadouts.filter(l => l[1]).map(l => l[1]))]; }
function loadoutText(id) {
  const c = CLASSES[id];
  return c.loadouts.map(l => l.map(t => (WEAPON_TYPES[t] || ARMOR_TYPES[t]).name.toLowerCase()).join(' + ')).join(' / ');
}
function canMain(type) { return classMains().includes(type); }
function canOff(type, mainType) { return curClass().loadouts.some(l => l[1] === type && (!mainType || l[0] === mainType)); }
function lootTypes() {
  const weapons = [...new Set([...classMains(), ...classOffs()])].filter(t => WEAPON_TYPES[t]);
  const armors = ['casque', 'plastron', 'jambieres', 'bottes', 'bijou', 'ceinture', ...(classOffs().includes('bouclier') ? ['bouclier'] : [])];
  return { weapons, armors };
}
function validateGear() {
  const main = invItem(state.gear.main), off = invItem(state.gear.off);
  if (main && !canMain(main.type)) state.gear.main = null;
  const m2 = invItem(state.gear.main);
  if (off && (!m2 || (WEAPON_TYPES[m2.type] && WEAPON_TYPES[m2.type].hands === 2) || !canOff(off.type, m2.type))) state.gear.off = null;
}

/* ---------- Butin ---------- */
function rollRarity(weights) {
  let r = pickW(weights);
  if (r < 6 && Math.random() * 100 < boosts().rar) r++;
  return r;
}
function makeItem(r, forceType) {
  const { weapons, armors } = lootTypes();
  const type = forceType || (Math.random() < 0.6 ? pick(weapons) : pick(armors));
  return { uid: gid('it'), type, r, up: 0, date: dk() };
}
function chipKey(type, r) { return `${type}:${r}`; }
function addChip(type, r) { const k = chipKey(type, r); state.chips[k] = (state.chips[k] || 0) + 1; }
function chipFree(k) { return (state.chips[k] || 0) - state.chipEq.filter(x => x === k).length; }
function grantLoot(o) {
  const b = boosts(), loot = [];
  const k = Math.round(rnd(o.kin[0], o.kin[1]) * (1 + b.kin / 100) * (state.followers && state.followers.odile ? 1.1 : 1));
  state.bonus.push({ date: dk(), k, why: o.why });
  loot.push({ kind: 'kin', n: k });
  for (const m in o.mats || {}) {
    const n = Math.round(rnd(o.mats[m][0], o.mats[m][1]) * (1 + b.mat / 100));
    if (n > 0) { state.mats[m] = (state.mats[m] || 0) + n; loot.push({ kind: 'mat', m, n }); }
  }
  if (Math.random() < (o.gear || 0)) { const it = makeItem(Math.max(o.minR || 0, rollRarity(o.weights))); state.inv.push(it); loot.push({ kind: 'item', it }); }
  if (Math.random() < (o.chip || 0)) {
    const t = pick(Object.keys(CHIP_TYPES)), r = Math.min(o.chipMax ?? 6, Math.max(o.minR || 0, rollRarity(o.weights)));
    addChip(t, r); loot.push({ kind: 'chip', t, r });
  }
  if (o.cosm) {
    const pool = (Array.isArray(o.cosm) ? o.cosm : [o.cosm]).filter(id => !cosmOwned(id));
    if (pool.length && Math.random() < (o.cosmChance ?? 1)) { const id = pick(pool); state.cosm[id] = dk(); loot.push({ kind: 'cosm', id }); }
  }
  return loot;
}
function grantStoryLoot(n) {
  const z = ZONES[Math.min(5, Math.floor(n.ch * 0.75))];
  const loot = grantLoot({ why: n.combat.name, kin: [0, 0], weights: z.weights, mats: { ferraille: [3, 5], ...(n.ch >= 3 ? { ether: [1, 2] } : {}), ...(n.ch >= 6 ? { coeur: [1, 1] } : {}) }, gear: 1, chip: 0.5, chipMax: 3 });
  ui.lastLoot = loot;
  toast(`${icon('package', 'w-4 h-4')}<span>Butin : ${loot.filter(l => l.kind !== 'kin').map(lootLine).join(', ')}</span>`);
}
function codexRecord(id, killed) {
  const e = state.codex[id] || { first: dk(), kills: 0 };
  e.seen = true;
  if (killed) e.kills = (e.kills || 0) + 1;
  state.codex[id] = e;
}
function lootLine(l) {
  if (l.kind === 'kin') return `<span class="kinah">${icon('gem', 'w-3.5 h-3.5 inline -mt-0.5')} ${fmtK(l.n)} kinahs</span>`;
  if (l.kind === 'mat') return `<span style="color:${MATERIALS[l.m].color}">${icon(MATERIALS[l.m].icon, 'w-3.5 h-3.5 inline -mt-0.5')} ${l.n} × ${esc(MATERIALS[l.m].name)}</span>`;
  if (l.kind === 'item') return `<span style="color:${RARITIES[l.it.r].color}">${icon(typeInfo(l.it).icon, 'w-3.5 h-3.5 inline -mt-0.5')} ${esc(itemName(l.it))} <span class="rar">${RARITIES[l.it.r].name}</span></span>`;
  if (l.kind === 'chip') return `<span style="color:${RARITIES[l.r].color}">${icon('cpu', 'w-3.5 h-3.5 inline -mt-0.5')} Puce ${esc(CHIP_TYPES[l.t].name)} <span class="rar">${RARITIES[l.r].name}</span></span>`;
  if (l.kind === 'cosm') { const c = COSMETICS.find(x => x.id === l.id); return `<span style="color:${c.color}">${icon('sparkles', 'w-3.5 h-3.5 inline -mt-0.5')} Cosmétique : ${esc(c.name)}</span>`; }
  return '';
}

/* ---------- Bonus : trophées + puces ---------- */
function cosmOwned(id, skipTrophies) {
  const c = COSMETICS.find(x => x.id === id);
  if (!c) return false;
  if (c.how.type === 'free' || state.cosm[id]) return true;
  if (c.how.type === 'story') return checkReq(c.how.req);
  if (c.how.type === 'trophy' && !skipTrophies) return TROPHIES.some(t => (t.cosmetic || []).includes(id) && boosts().trophies.includes(t.id));
  return false;
}
function cosmPct(c) { return COSMETIC_PCT[c.r]; }
function trophyCtx() {
  const t = totals(), S = state.story;
  let streak = 0, cur = 0, prev = null;
  for (const k of t.success) { cur = prev && addDays(prev, 1) === k ? cur + 1 : 1; streak = Math.max(streak, cur); prev = k; }
  const killed = Object.keys(state.codex).filter(id => state.codex[id].kills > 0);
  let maxChip = -1;
  for (const k in state.chips) if (state.chips[k] > 0) maxChip = Math.max(maxChip, Number(k.split(':')[1]));
  return {
    wins: state.counters.wins || 0, expeditions: state.counters.expeditions || 0, crits: state.counters.crits || 0,
    sessions: t.sessions, nutrition: t.nutrition, streak, level: levelInfo(t.xp).level,
    maxUp: state.inv.reduce((a, i) => Math.max(a, i.up || 0), 0), maxChip,
    bestiary: killed.length, bestiaryBase: killed.filter(id => BESTIARY.some(b => b.id === id)).length,
    monarchs: killed.filter(id => id.startsWith('m_')).length, absolute: killed.includes('absolu'),
    endings: Object.keys(S.endings).length, archives: Object.keys(S.archives).length, archivesTotal: Object.keys(ARCHIVES).length,
    letters: Object.keys(S.read).length, members: Object.keys(state.followers).length,
    rarities: new Set(state.inv.map(i => i.r)).size, cosmetics: COSMETICS.filter(c => cosmOwned(c.id, true)).length,
    ...(typeof arenaCtx === 'function' ? arenaCtx() : {})
  };
}
const CHIP_BOOST = { regen: 'regen', soin: 'soin', savoir: 'xp', fortune: 'kin', prospect: 'rar', recolte: 'mat', critique: 'crit', force: 'force', vitesse: 'vitesse', rempart: 'rempart', arcane: 'arcane', garde: 'garde', echo: 'echo' };
function boosts() {
  totals();
  if (_bm) return _bm;
  const b = { xp: 0, kin: 0, rar: 0, mat: 0, crit: 0, keys: 0, soin: 0, regen: 0, garde: 0, echo: 0, force: 0, vitesse: 0, rempart: 0, arcane: 0, trophies: [] };
  _bm = b; /* évite la récursion pendant le calcul */
  if (!state.profile) return b;
  const ctx = trophyCtx();
  for (const t of TROPHIES) if (t.test(ctx)) { b.trophies.push(t.id); for (const k in t.bonus) b[k] += t.bonus[k]; }
  for (const k of state.chipEq) { const [type, r] = k.split(':'); if ((state.chips[k] || 0) > 0) b[CHIP_BOOST[type]] += CHIP_VALUES[Number(r)]; }
  /* Gains : Intelligence (+0,25 % par point), puce Arcane, monture montée, cosmétiques portés */
  const intPct = Math.round(statValues().int * 0.25);
  const m = SHOP.find(x => x.id === state.equip.mount && state.owned[x.id]);
  const mountPct = m ? COSMETIC_PCT[m.r] : 0;
  let cosPct = 0;
  { const w = wskinBest(); if (w) cosPct += COSMETIC_PCT[w.r]; }
  for (const cat in state.cosmEq) { if (cat.startsWith('ws:')) continue; const id = state.cosmEq[cat]; const c = id && COSMETICS.find(x => x.id === id); if (c && cosmOwned(c.id, true) || (c && c.how.type === 'trophy' && TROPHIES.some(t => (t.cosmetic || []).includes(c.id) && b.trophies.includes(t.id)))) cosPct += COSMETIC_PCT[c.r]; }
  b.parts = { int: intPct, arcane: b.arcane, mount: mountPct, cosm: cosPct, trophyXp: b.xp, trophyKin: b.kin };
  b.xp += intPct + b.arcane + mountPct + cosPct;
  b.kin += intPct + b.arcane + mountPct + cosPct;
  /* autels de gloire de l'arène */
  if (typeof arenaBoosts === 'function') { const ab = arenaBoosts(); b.xp += ab.xp; b.kin += ab.kin; b.rempart += ab.rempart; b.parts.arena = ab.xp; }
  for (const k of ['crit', 'soin', 'echo', 'garde']) b[k] = Math.min(60, b[k]);
  b.rar = Math.min(75, b.rar);
  b.ctx = ctx;
  return b;
}
function keysLeft() { const t = totals(); return t.keysEarned + boosts().keys * t.success.length + (state.prKeys || 0) - (state.keysSpent || 0); }

/* ---------- Apparence (Statut) ---------- */
function cosmOf(cat) { const id = state.cosmEq[cat]; return id && cosmOwned(id) ? COSMETICS.find(c => c.id === id) : null; }
/* bonus de statistiques des cosmétiques portés (toutes catégories, même masqués à l'affichage) */
/* skins par type d'arme portés : seul le meilleur, parmi ceux des armes en main, compte pour les statistiques et les gains */
function wskinOf(type) { const id = state.cosmEq && state.cosmEq['ws:' + type]; return id && cosmOwned(id) ? COSMETICS.find(c => c.id === id) : null; }
function wskinBest() { let b = null; for (const s of ['main', 'off']) { const it = invItem((state.gear || {})[s]); const w = it && wskinOf(it.type); if (w && (!b || w.r > b.r)) b = w; } return b; }
function cosmStatPct() { if (!state.cosmEq) return 0; let p = 0; for (const cat in COSMETIC_CATS) { const c = cosmOf(cat); if (c) p += COSMETIC_STAT[c.r]; } { const w = wskinBest(); if (w) p += COSMETIC_STAT[w.r]; } return p + relicGearPct() + mountStatPct() + (typeof arenaStatPct === 'function' ? arenaStatPct() : 0); }
/* la monture montée augmente aussi toutes les statistiques, selon sa rareté (comme un cosmétique) */
function mountStatPct() { const m = SHOP.find(x => x.id === state.equip.mount && state.owned[x.id]); return m ? COSMETIC_STAT[m.r] : 0; }
/* armes, armures, bijou et ceinture portés de rareté Légendaire et plus : +25 / +50 / +100 / +1 000 % à toutes les statistiques */
function relicGearPct() { let p = 0; for (const s in state.gear || {}) { const it = invItem(state.gear[s]); if (it) p += RARITY_STAT[it.r] || 0; } return p; }
/* effets de combat de l'équipement porté : recharge, vitesse, dégâts en % des PV de la cible */
function itemHpPct(it) { if (!it || !(WEAPON_TYPES[it.type] || ['casque', 'plastron', 'jambieres', 'bouclier'].includes(it.type))) return 0; const k = WEAPON_TYPES[it.type] ? (WEAPON_TYPES[it.type].hands === 2 ? 2 : 1) : 0.5;   /* une arme à deux mains compte double (pas de seconde arme) */ return k * ((HP_PCT_RARITY[it.r] || 0) + (HP_PCT_UP[it.up || 0] || 0)); }
/* effets des runes serties dans l'équipement porté (les mêmes s'additionnent ; ricochet plafonné à 100 %) */
function runePerks() {
  const R = { fracture: 0, echo: 0, egide: 0, ricochet: 0, laceration: 0, celeste: 0 };
  for (const s in state.gear || {}) { const it = invItem(state.gear[s]); if (!it || !it.runes) continue; for (const k of it.runes) { const [t, r] = k.split(':'); if (RUNE_TYPES[t]) R[t] += RUNE_TYPES[t].v[+r]; } }
  R.ricochet = Math.min(100, R.ricochet); R.fracture = Math.min(150, R.fracture); R.egide = Math.min(60, R.egide);
  return R;
}
function gearPerks() {
  const g = s => invItem((state.gear || {})[s]); let hp = 0; for (const s in state.gear || {}) hp += itemHpPct(g(s));
  const bj = g('bijou'), ce = g('ceinture'), cast = CAST_CLASSES.includes(state.profile && state.profile.cls);
  const ex = Math.max(0, ...['main', 'off'].map(s => { const w = g(s); return w && WEAPON_TYPES[w.type] ? EXEC_RARITY[w.r] || 0 : 0; }));
  return { runes: runePerks(), exec: ex / 100, cdr: bj && bj.type === 'bijou' ? JEWEL_CDR[bj.r] / 100 : 0, spd: ce && ce.type === 'ceinture' ? BELT_SPEED[ce.r] / 100 : 0, cast, hpPct: Math.round(hp * 100) / 100 };
}
function bootSpeed(it) { if (!it) return { move: 0, fly: 0 }; const u = 1 + (it.up || 0) * 0.1; return { move: Math.round(BOOT_MOVE[it.r] * u), fly: Math.round(BOOT_FLY[it.r] * u) }; }
/* ligne d'effets d'un objet (fiche) */
function itemPerkLine(it) {
  const L = [];
  if (RARITY_STAT[it.r]) L.push(`+${RARITY_STAT[it.r].toLocaleString('fr-FR')} % toutes les statistiques`);
  if (it.type === 'bijou') L.push(`−${JEWEL_CDR[it.r]} % de recharge des techniques et de la jauge d’ultime`);
  if (it.type === 'bottes') { const b = bootSpeed(it); L.push(`+${b.move} % de vitesse de déplacement · +${b.fly} % de vitesse de vol (monde ouvert)`); }
  if (it.type === 'ceinture') L.push(`+${BELT_SPEED[it.r]} % de vitesse ${CAST_CLASSES.includes(state.profile && state.profile.cls) ? 'd’incantation' : 'd’attaque'}`);
  for (const k of it.runes || []) { const [t, r] = k.split(':'); if (RUNE_TYPES[t]) L.push(`${RUNE_TYPES[t].name} (${RARITIES[+r].name}) : ${RUNE_TYPES[t].txt(RUNE_TYPES[t].v[+r])}`); }
  if (WEAPON_TYPES[it.type] && EXEC_RARITY[it.r]) L.push(`Exécution : tue aussitôt l’ennemi sous ${EXEC_RARITY[it.r]} % de ses PV`);
  const hp = itemHpPct(it); if (hp) L.push(`+${String(hp).replace('.', ',')} % des PV actuels de la cible à chaque attaque`);
  return L.join(' · ');
}
/* Reliques du récit : remises à la fin de chaque tome (une fois) */
function grantRelics() {
  if (!state.profile || !state.story) return; const got = state.relics || (state.relics = {});
  for (const R of RELICS) { if (got[R.id] || !flagVal('tfin:' + R.tome)) continue;
    if (R.cosm) { got[R.id] = dk(); const c = COSMETICS.find(x => x.id === R.id); toast(`Relique du tome ${R.tome} · <b style="color:${RARITIES[7].color}">${esc(c.name)}</b>`); continue; }
    if (R.mount) { got[R.id] = dk(); state.owned[R.id] = dk(); const m = SHOP.find(x => x.id === R.id); toast(`Relique du tome ${R.tome} · monture <b style="color:${RARITIES[7].color}">${esc(m.name)}</b>`); continue; }
    if (R.chip) { got[R.id] = dk(); addChip(R.chip, 7); toast(`Relique du tome ${R.tome} · puce <b style="color:${RARITIES[7].color}">${esc(CHIP_TYPES[R.chip].name)} +${CHIP_VALUES[7]} %</b>`); continue; }
    let type = R.slot;
    if (R.slot === 'main') { const cur = invItem(state.gear.main); type = cur && canMain(cur.type) ? cur.type : classMains()[0]; }
    if (R.slot === 'off') { const offs = classOffs(); type = offs.length ? offs[0] : classMains()[0]; }
    const it = { uid: gid('it'), type, r: 7, up: 0, date: dk(), relic: R.id }; state.inv.push(it); got[R.id] = it.uid;
    toast(`Relique du tome ${R.tome} · <b style="color:${RARITIES[7].color}">${esc(itemName(it))}</b> · dans l’inventaire`);
  }
}
function auraStyle() { const a = heroVis().aura ? cosmOf('aura') : null; return a ? `box-shadow:0 0 26px ${a.color}, 0 0 18px -4px ${a.color} inset` : ''; }
function avatarLine() {
  if (!state.profile) return '';
  const V = heroVis(), t = V.titre ? cosmOf('titre') : null, te = V.tenue ? cosmOf('tenue') : null, ac = cosmOf('accessoire'), w = invItem(state.gear.main);
  return `<div class="text-[11px] mt-1 leading-snug">
    ${t ? titleHTML(t.name, t.r) : ''}
    </div>`;
}

/* ---------- Amélioration / recyclage ---------- */
function upgradeCost(it) {
  const r = it.r, n = (it.up || 0) + 1;
  return { ferraille: (r + 1) * n * 3, ether: r >= 2 ? (r - 1) * n * 2 : 0, coeur: r >= 4 ? (r - 3) * n : 0, cendre: r >= 6 ? n : 0, kin: Math.round(RARITIES[r].price * 0.2 * n) };
}
function canPay(cost) { return Object.keys(MATERIALS).every(m => (state.mats[m] || 0) >= (cost[m] || 0)) && kinahs() >= cost.kin; }
function costLine(cost) {
  return [...Object.keys(MATERIALS).filter(m => cost[m]).map(m => `<span style="color:${(state.mats[m] || 0) >= cost[m] ? MATERIALS[m].color : 'var(--blood)'}">${cost[m]} ${esc(MATERIALS[m].name.split(' ')[0].toLowerCase())}</span>`),
    `<span class="${kinahs() >= cost.kin ? 'kinah' : 'red'}">${fmtK(cost.kin)} k</span>`].join(' · ');
}
function recycleGain(it) { return { ferraille: (it.r + 1) * 2 + (it.up || 0) * 2, ether: it.r >= 2 ? it.r - 1 : 0, coeur: it.r >= 4 ? it.r - 3 : 0 }; }

/* ==========================================================================
   VUES
   ========================================================================== */
function itemCard(it, actions) {
  const R = RARITIES[it.r], ti = typeInfo(it), slot = equippedSlot(it.uid);
  return `<div class="item" style="color:${R.color};${slot ? `border-color:${R.color}88` : ''}">
    ${artGear(it.type, it.r, 56)}
    <div class="flex-1 min-w-0" style="color:var(--text)">
      <div class="flex items-center gap-2 flex-wrap"><span class="f-display font-semibold" style="color:${R.color}">${esc(itemName(it))}${it.up ? ` +${it.up}` : ''}</span><span class="rar" style="color:${R.color}">${R.name}</span>${slot ? `<span class="rar glow" style="color:var(--neon)">Équipé</span>` : ''}</div>
      <div class="text-[11px] muted f-mono mt-0.5">${esc(ti.name)}${WEAPON_TYPES[it.type] ? ` · ${WEAPON_TYPES[it.type].hands === 2 ? 'deux mains' : 'une main'}` : ''} · +${Math.round(itemValue(it, slot || (WEAPON_TYPES[it.type] ? 'main' : it.type)))} ${STATS[ti.stat].name} · amélioration ${it.up || 0}/${UPGRADE_MAX}</div>
      ${itemPerkLine(it) ? `<div class="text-[11px] mt-1" style="color:${R.color}">${esc(itemPerkLine(it))}</div>` : ''}
      ${WEAPON_STATS[it.type] ? `<div class="text-[11px] f-mono mt-1" style="color:#9fb4c8">${esc(weaponLine(it.type))}</div><div class="text-[11px] muted mt-0.5">${esc(WEAPON_STATS[it.type].fx)}</div>` : ''}
      <p class="text-xs mt-1" style="font-family:var(--font-prose);font-style:italic;color:#b9bdc8;font-size:13px">${esc(GEAR_SETS[it.r].lore)}</p>
      ${actions ? `<div class="flex gap-2 mt-2 flex-wrap">${actions}</div>` : ''}
    </div></div>`;
}
function itemActions(it) {
  const slot = equippedSlot(it.uid), acts = [];
  const main = invItem(state.gear.main);
  if (WEAPON_TYPES[it.type]) {
    if (!slot && canMain(it.type)) acts.push(`<button type="button" class="btn sm" data-a="eq" data-uid="${it.uid}" data-slot="main">Main droite</button>`);
    if (!slot && classOffs().includes(it.type) && main && main.uid !== it.uid && canOff(it.type, main.type)) acts.push(`<button type="button" class="btn sm" data-a="eq" data-uid="${it.uid}" data-slot="off">Main gauche</button>`);
    if (!canMain(it.type) && !classOffs().includes(it.type)) acts.push(`<span class="text-[11px] muted">Inutilisable par ${esc(curClass().name)}</span>`);
  } else if (it.type === 'bouclier') {
    if (!slot && main && canOff('bouclier', main.type)) acts.push(`<button type="button" class="btn sm" data-a="eq" data-uid="${it.uid}" data-slot="off">Main gauche</button>`);
    if (!classOffs().includes('bouclier')) acts.push(`<span class="text-[11px] muted">Inutilisable par ${esc(curClass().name)}</span>`);
  } else if (!slot) acts.push(`<button type="button" class="btn sm" data-a="eq" data-uid="${it.uid}" data-slot="${it.type}">Équiper</button>`);
  if (slot) acts.push(`<button type="button" class="btn sm ghost" data-a="uneq" data-slot="${slot}">Retirer</button>`);
  if ((it.up || 0) < UPGRADE_MAX) {
    const c = upgradeCost(it);
    acts.push(`<button type="button" class="btn sm u" data-a="upgrade" data-uid="${it.uid}" ${canPay(c) ? '' : 'disabled'} title="Coût : ${esc(costLine(c).replace(/<[^>]+>/g, ''))}">${icon('arrow-up-circle', 'w-3.5 h-3.5')}+${(it.up || 0) + 1}</button>`);
    acts.push(`<span class="text-[11px] f-mono self-center">${costLine(c)}</span>`);
    { const mc = missingCost(c); if (mc.k && kinahs() >= mc.k + c.kin) acts.push(`<button type="button" class="btn sm ghost" data-a="buy-missing" data-uid="${it.uid}" title="Achète les matériaux qui manquent">${icon('shopping-cart', 'w-3.5 h-3.5')}Acheter ce qui manque · ${fmtK(mc.k)}</button>`); }
  }
  { const free = runeSlots(it) - (it.runes || []).length, owned = Object.keys(state.runes || {}).filter(k => state.runes[k] > 0);
    if (free > 0) acts.push(owned.length ? `<button type="button" class="btn sm u" data-a="rune-pick" data-uid="${it.uid}">${icon('gem', 'w-3.5 h-3.5')}Sertir une rune (${free} emplacement${free > 1 ? 's' : ''})</button>` : `<span class="text-[11px] muted self-center">${free} emplacement${free > 1 ? 's' : ''} de rune libre${free > 1 ? 's' : ''} (Boutique → Runes)</span>`);
    else if (it.r < RUNE_MIN_RARITY) acts.push(`<span class="text-[11px] muted self-center">Runes : Légendaire et plus</span>`);
    if (ui.runeFor === it.uid && free > 0) acts.push(`<div class="w-full flex flex-col gap-1 mt-1">${owned.map(k => { const [t, r] = k.split(':'), T = RUNE_TYPES[t], armed = ui.armed === 'rune-' + it.uid + '-' + k; return `<button type="button" class="res" data-a="${armed ? 'rune-set' : 'arm'}" data-k="${armed ? k : 'rune-' + it.uid + '-' + k}" data-uid="${it.uid}" style="color:${RARITIES[+r].color}">${icon(T.icon, 'w-4 h-4')}<span class="flex-1 min-w-0 text-left"><span class="block f-display text-sm">${esc(T.name)} · ${RARITIES[+r].name} ×${state.runes[k]}</span><span class="text-[11px] muted">${armed ? 'Touchez encore : la rune ne pourra plus être retirée.' : esc(T.txt(T.v[+r]))}</span></span></button>`; }).join('')}</div>`); }
  if (!slot) acts.push(`<button type="button" class="btn sm ghost" data-a="recycle" data-uid="${it.uid}" title="Recycler en matériaux">${icon('recycle', 'w-3.5 h-3.5')}</button>`);
  return acts.join('');
}
function viewArsenal() {
  const c = curClass(), b = boosts();
  const slots = [['main', 'Main droite'], ['off', 'Main gauche'], ['casque', 'Casque'], ['plastron', 'Plastron'], ['jambieres', 'Jambières'], ['bottes', 'Bottes'], ['bijou', 'Bijou'], ['ceinture', 'Ceinture']];
  const filter = ui.invFilter || 'usable';
  const usable = it => (WEAPON_TYPES[it.type] ? canMain(it.type) || classOffs().includes(it.type) : it.type !== 'bouclier' || classOffs().includes('bouclier'));
  const inv = state.inv.filter(it => filter === 'all' || usable(it)).sort((a, x) => x.r - a.r || (x.up || 0) - (a.up || 0));
  const eqChips = state.chipEq;
  return `
    <div class="sys">
      <div class="flex items-center justify-between gap-2 mb-2 flex-wrap"><div class="sys-title">${icon(c.icon, 'w-4 h-4')}${esc(c.name)}</div>
        <button type="button" class="text-xs underline underline-offset-2 muted" data-a="tab" data-tab="settings">Changer de classe</button></div>
      <p class="text-xs muted">Configurations : ${esc(loadoutText(state.profile.cls))}. Le butin ne contient que des armes utilisables par votre classe.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
        ${slots.map(([s, l]) => {
          const it = invItem(state.gear[s]);
          const blocked = s === 'off' && invItem(state.gear.main) && WEAPON_TYPES[invItem(state.gear.main).type].hands === 2;
          return `<button type="button" class="card min-w-0 text-left" data-a="slot-pick" data-s="${s}" style="padding:8px 10px;cursor:pointer;${ui.slotPick === s ? 'outline:2px solid var(--cyan);' : ''}${it ? `border-color:${RARITIES[it.r].color}66` : ''}">
            <div class="text-[10px] label flex justify-between"><span>${l}</span><span class="muted">${ui.slotPick === s ? 'fermer ▲' : 'changer ▼'}</span></div>
            <div class="text-sm truncate f-display" style="color:${it ? RARITIES[it.r].color : 'var(--muted)'}">${it ? `${esc(itemName(it))}${it.up ? ` +${it.up}` : ''}` : blocked ? 'Arme à deux mains' : 'Vide'}</div>
            ${it ? `<div class="text-[10px] muted f-mono">+${Math.round(itemValue(it, s))} ${STATS[itemStat(it)].name}${(it.runes || []).length ? ` · ${it.runes.length} rune${it.runes.length > 1 ? 's' : ''}` : ''}</div>` : ''}</button>${ui.slotPick === s ? `<div id="slot-picker" style="grid-column:1/-1">${viewSlotPicker(s)}</div>` : ''}`;
        }).join('')}
      </div>
      <div class="mt-3">
${viewCombatSummary()}
      </div>
      <div class="mt-3">${typeof viewOptimizer === 'function' ? viewOptimizer() : ''}
      </div>
    </div>

    <div class="sys umbra">
      <div class="flex items-center justify-between gap-2 mb-2 flex-wrap"><div class="sys-title u">${icon('sparkles', 'w-4 h-4')}Compétences · ${esc(c.name)}</div><span class="text-[11px] muted">niveau ${curLevel()}</span></div>
      <div class="flex flex-col gap-1.5">${classSkills().map(sk => { const ok = curLevel() >= sk.lvl;
        return `<div class="res" style="cursor:default;${ok ? '' : 'opacity:.5'}"><span class="f-mono text-[11px] w-12 ${sk.ult ? 'glow-umbra' : 'muted'}">${ok ? (sk.ult ? 'ULTIME' : 'acquise') : `niv. ${sk.lvl}`}</span>
          <span class="flex-1 min-w-0"><span class="block f-display text-sm ${sk.ult ? 'glow-umbra' : ''}">${esc(sk.name)}</span><span class="text-[11px] muted">${esc(skillDesc(sk))}</span></span>${ok ? '' : icon('lock', 'w-4 h-4 muted')}</div>`; }).join('')}</div>
    </div>

    <div class="sys">
      <div class="sys-title mb-3">Matériaux</div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
        ${Object.entries(MATERIALS).map(([id, m]) => `<div class="card text-center min-w-0" style="padding:8px"><div class="flex justify-center">${artMat(id, 38)}</div><div class="f-mono text-lg">${state.mats[id] || 0}</div><div class="text-[10px] muted">${esc(m.name)}</div></div>`).join('')}
      </div>
      <p class="text-[11px] muted mt-2">Récoltés en expédition et dans les combats du récit, ou achetés à la boutique. Chaque objet s’améliore jusqu’à +${UPGRADE_MAX} (+25 % par niveau).</p>
    </div>

    <div class="sys umbra">
      <div class="flex items-center justify-between gap-2 mb-2 flex-wrap"><div class="sys-title u">${icon('cpu', 'w-4 h-4')}Puces</div><span class="f-mono text-sm">${eqChips.length} / ${CHIP_SLOTS}</span></div>
      <div class="grid grid-cols-6 gap-1.5">
        ${Array.from({ length: CHIP_SLOTS }, (_, i) => {
          const k = eqChips[i];
          if (!k) return `<div class="border border-dashed border-[#2c2540] aspect-square grid place-items-center muted">${icon('plus', 'w-3 h-3')}</div>`;
          const [t, r] = k.split(':');
          return `<button type="button" class="border aspect-square grid place-items-center" style="color:${RARITIES[r].color};border-color:${RARITIES[r].color}" data-a="chip-uneq" data-i="${i}" title="${esc(CHIP_TYPES[t].name)} ${RARITIES[r].name} — retirer"><svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true">${artChip(t, r, RARITIES[r].color)}</svg></button>`;
        }).join('')}
      </div>
      <div class="text-[11px] mt-3 flex flex-wrap gap-x-3 gap-y-1">
        ${[['xp', 'XP'], ['kin', 'Kinahs'], ['rar', 'Rareté +1'], ['mat', 'Matériaux'], ['crit', 'Critique'], ['soin', 'Soin'], ['regen', 'Régén.'], ['echo', 'Écho'], ['garde', 'Garde']].map(([k, l]) => `<span class="${b[k] ? '' : 'muted'}">${l} <b class="f-mono ${b[k] ? 'glow-umbra' : ''}">+${b[k]} %</b></span>`).join('')}
      </div>
      <p class="text-[11px] muted mt-1">Totaux puces + trophées. La fusion assemble ${fuseCost(0)} puces Communes en une Raffinée, ${fuseCost(1)} Raffinées en une Rare, et ainsi de suite jusqu’à Éternelle.</p>
      <div class="flex flex-col mt-3">
        ${Object.entries(CHIP_TYPES).map(([t, ct]) => {
          const rows = RARITIES.map((R, r) => ({ r, n: state.chips[chipKey(t, r)] || 0, free: chipFree(chipKey(t, r)) })).filter(x => x.n > 0);
          if (!rows.length) return '';
          return `<div class="py-2 border-t border-[#2c2540]">
            <div class="flex items-center gap-2"><span class="glow-umbra">${icon(ct.icon, 'w-4 h-4')}</span><span class="f-display text-sm font-semibold">${esc(ct.name)}</span><span class="text-[11px] muted truncate">+x % ${esc(ct.desc)}</span></div>
            <div class="flex flex-wrap gap-1.5 mt-1.5">
              ${rows.map(x => `<span class="flex items-center gap-1 border px-1.5 py-1 text-[11px]" style="border-color:${RARITIES[x.r].color}66;color:${RARITIES[x.r].color}">
                <span class="f-display">${RARITIES[x.r].name} +${CHIP_VALUES[x.r]} %</span><span class="f-mono" style="color:var(--text)">×${x.n}</span>
                <button type="button" class="underline" data-a="chip-eq" data-k="${chipKey(t, x.r)}" ${x.free > 0 && eqChips.length < CHIP_SLOTS ? '' : 'disabled style="opacity:.4"'}>équiper</button>
                ${x.r < 6 ? `<button type="button" class="underline" data-a="chip-fuse" data-t="${t}" data-r="${x.r}" ${x.free >= fuseCost(x.r) ? '' : 'disabled style="opacity:.4"'}>fusion ${fuseCost(x.r)}→1</button>` : ''}
              </span>`).join('')}
            </div></div>`;
        }).join('') || `<p class="text-sm muted">Aucune puce. Elles tombent en expédition ou s’achètent à la boutique.</p>`}
      </div>
    </div>

    <div class="sys">
      <div class="flex items-center justify-between gap-2 mb-2 flex-wrap"><div class="sys-title">Inventaire</div>
        <div class="flex gap-1.5"><button type="button" class="chip ${filter === 'usable' ? 'on' : ''}" data-a="inv-filter" data-f="usable">Utilisables</button><button type="button" class="chip ${filter === 'all' ? 'on' : ''}" data-a="inv-filter" data-f="all">Tout (${state.inv.length})</button></div></div>
      ${viewInvControls(inv)}
    </div>
    ${viewInvList(inv)}`;
}

/* ---------- Inventaire : tri, filtres par rareté et par type, porté / non porté, recyclage par rareté ---------- */
const INV_KIND = [['all', 'Tout'], ['weapon', 'Armes'], ['armor', 'Armures'], ['casque', 'Casques'], ['plastron', 'Plastrons'], ['jambieres', 'Jambières'], ['bottes', 'Bottes'], ['bijou', 'Bijoux'], ['ceinture', 'Ceintures']];
function invKindOk(it, k) { return k === 'all' || (k === 'weapon' ? !!WEAPON_TYPES[it.type] || it.type === 'bouclier' : k === 'armor' ? !!ARMOR_TYPES[it.type] && it.type !== 'bouclier' : it.type === k); }
function viewInvControls(inv) {
  const rf = ui.invRar == null ? 'all' : ui.invRar, kf = ui.invKind || 'all', sort = ui.invSort || 'rar';
  const counts = RARITIES.map((R, r) => inv.filter(it => it.r === r).length);
  const free = r => state.inv.filter(it => it.r === r && !equippedSlot(it.uid) && !(it.runes || []).length).length;
  return `<div class="flex flex-col gap-2 mt-1">
    <div class="flex flex-wrap gap-1.5"><button type="button" class="chip ${rf === 'all' ? 'on' : ''}" data-a="inv-rar" data-r="all">Toutes raretés</button>${RARITIES.map((R, r) => counts[r] ? `<button type="button" class="chip ${rf === r ? 'on' : ''}" data-a="inv-rar" data-r="${r}" style="${rf === r ? '' : `color:${R.color};border-color:${R.color}66`}">${esc(R.name)} ${counts[r]}</button>` : '').join('')}</div>
    <div class="flex flex-wrap gap-1.5">${INV_KIND.map(([k, l]) => { const n = inv.filter(it => invKindOk(it, k)).length; return n || k === 'all' ? `<button type="button" class="chip ${kf === k ? 'on' : ''}" data-a="inv-kind" data-k="${k}">${l} ${n}</button>` : ''; }).join('')}</div>
    <div class="flex flex-wrap items-center gap-1.5 text-[11px]"><span class="muted">Trier :</span>${[['rar', 'Rareté'], ['up', 'Amélioration'], ['type', 'Type'], ['new', 'Plus récent']].map(([k, l]) => `<button type="button" class="chip ${sort === k ? 'on' : ''}" data-a="inv-sort" data-k="${k}">${l}</button>`).join('')}</div>
    ${rf !== 'all' && free(rf) ? `<div class="flex flex-wrap items-center gap-2 text-[11px]"><button type="button" class="btn sm ghost" data-a="${ui.armed === 'recall-' + rf ? 'inv-recycle-rar' : 'arm'}" data-k="recall-${rf}" data-r="${rf}" style="border-color:#ff4d6d88;color:#ff8a9a">${icon('recycle', 'w-3.5 h-3.5')}${ui.armed === 'recall-' + rf ? 'Confirmer' : 'Recycler'} les ${free(rf)} objets ${esc(RARITIES[rf].name)} non portés</button><span class="muted">les objets portés et ceux qui ont des runes sont gardés</span></div>` : ''}
  </div>`;
}
function viewInvList(inv) {
  const rf = ui.invRar == null ? 'all' : ui.invRar, kf = ui.invKind || 'all', sort = ui.invSort || 'rar';
  let L = inv.filter(it => (rf === 'all' || it.r === rf) && invKindOk(it, kf));
  const typeName = it => (WEAPON_TYPES[it.type] || ARMOR_TYPES[it.type] || { name: it.type }).name;
  L.sort(sort === 'up' ? (a, x) => (x.up || 0) - (a.up || 0) || x.r - a.r : sort === 'type' ? (a, x) => typeName(a).localeCompare(typeName(x)) || x.r - a.r : sort === 'new' ? (a, x) => state.inv.indexOf(x) - state.inv.indexOf(a) : (a, x) => x.r - a.r || (x.up || 0) - (a.up || 0));
  const worn = L.filter(it => equippedSlot(it.uid)), rest = L.filter(it => !equippedSlot(it.uid));
  if (!state.inv.length) return `<div class="card text-sm muted">Votre inventaire est vide. Partez en expédition, gagnez des combats du récit ou passez à l’armurerie.</div>`;
  const head = (t, n) => `<div class="label mt-3 mb-1 flex items-center gap-2">${t} <span class="f-mono muted">${n}</span></div>`;
  /* sans filtre de rareté, les objets non portés sont groupés par rareté (repliables) */
  const groups = rf !== 'all' ? [[rf, rest]] : RARITIES.map((R, r) => [r, rest.filter(it => it.r === r)]).reverse().filter(([, g]) => g.length);
  return `${worn.length ? head('Porté', worn.length) + worn.map(it => itemCard(it, itemActions(it))).join('') : ''}
    ${head('Dans le sac', rest.length)}${rest.length ? groups.map(([r, g]) => { const open = rf !== 'all' || (ui.invOpen || {})[r] || g.length <= 3; return `<button type="button" class="res mb-1" data-a="inv-open" data-r="${r}" style="border-color:${RARITIES[r].color}55"><span class="f-display text-sm" style="color:${RARITIES[r].color}">${esc(RARITIES[r].name)}</span><span class="f-mono muted">${g.length}</span><span class="flex-1"></span><span class="muted text-xs">${open ? '▲' : '▼'}</span></button>${open ? g.map(it => itemCard(it, itemActions(it))).join('') : ''}`; }).join('') : `<div class="card text-sm muted">Rien d’autre dans le sac pour ce filtre.</div>`}`;
}
/* choix rapide depuis un emplacement (Main droite, Jambières…) */
function viewSlotPicker(s) {
  const main = invItem(state.gear.main), cur = invItem(state.gear[s]);
  const ok = it => { if (equippedSlot(it.uid) && equippedSlot(it.uid) !== s) return false;
    if (s === 'main') return !!WEAPON_TYPES[it.type] && canMain(it.type);
    if (s === 'off') return main && it.uid !== main.uid && (WEAPON_TYPES[it.type] || it.type === 'bouclier') && classOffs().includes(it.type) && canOff(it.type, main.type);
    return it.type === s; };
  const L = state.inv.filter(ok).sort((a, x) => x.r - a.r || (x.up || 0) - (a.up || 0) || (x.runes || []).length - (a.runes || []).length);
  const name = { main: 'Main droite', off: 'Main gauche', casque: 'Casque', plastron: 'Plastron', jambieres: 'Jambières', bottes: 'Bottes', bijou: 'Bijou', ceinture: 'Ceinture' }[s];
  return `<div class="card" style="padding:8px 10px;border-color:var(--cyan)"><div class="flex items-center justify-between mb-1"><span class="label">${esc(name)} : choisir</span>${cur ? `<button type="button" class="btn sm ghost" data-a="uneq" data-slot="${s}">Retirer</button>` : ''}</div>
    ${L.length ? `<div class="flex flex-col gap-1">${L.map(it => { const on = cur && cur.uid === it.uid; return `<button type="button" class="res" data-a="${on ? 'slot-pick' : 'slot-eq'}" data-s="${s}" data-uid="${it.uid}" style="border-color:${RARITIES[it.r].color}66;${on ? 'background:rgba(0,240,255,.08)' : ''}"><span class="flex-1 min-w-0 text-left"><span class="block truncate f-display text-sm" style="color:${RARITIES[it.r].color}">${esc(itemName(it))}${it.up ? ` +${it.up}` : ''}</span><span class="text-[10px] muted">${esc(RARITIES[it.r].name)} · ${esc((WEAPON_TYPES[it.type] || ARMOR_TYPES[it.type] || {}).name || '')}${(it.runes || []).length ? ` · ${it.runes.map(k => RUNE_TYPES[k.split(':')[0]].name.replace('Rune de ', '').replace('Rune d’', '').replace('Rune ', '')).join(', ')}` : ''}</span></span><span class="text-xs ${on ? 'glow' : ''}">${on ? 'porté' : 'équiper'}</span></button>`; }).join('')}</div>` : `<div class="text-xs muted">Aucun objet pour cet emplacement${s === 'off' && !main ? ' (équipez d’abord la main droite)' : ''}.</div>`}</div>`;
}

/* ---------- Expéditions ---------- */
function monarchUnlocked(i) {
  const m = MONARCHS[i];
  return curLevel() >= m.level && (i === 0 || (state.codex[MONARCHS[i - 1].id] && state.codex[MONARCHS[i - 1].id].kills > 0));
}
function absoluteUnlocked() { return curLevel() >= ABSOLUTE.level && MONARCHS.every(m => state.codex[m.id] && state.codex[m.id].kills > 0); }
function pickFoe(z) {
  if (z.rank === 'S' && Math.random() < 0.1) return pick(BESTIARY.filter(b => b.tier === 'calamite'));
  const pool = BESTIARY.filter(b => b.rank === z.rank && b.tier !== 'calamite');
  const w = pool.map(b => (b.tier === 'commun' ? 60 : b.tier === 'elite' ? 28 : 12) / pool.filter(x => x.tier === b.tier).length);
  return pool[pickW(w)];
}
function viewExpeditions() {
  const keys = keysLeft(), L = curLevel(), res = ui.expResult, cur = ui.exp;
  let top = '';
  if (res) {
    top = `<div class="sys ${res.win ? '' : 'danger'} pop">
      <div class="sys-title ${res.win ? '' : 'r'} mb-2">${res.win ? 'Victoire' : 'Défaite'}</div>
      <div class="f-display text-lg">${esc(res.name)}</div>
      <p class="text-xs muted f-mono">${res.roll} tour${res.roll > 1 ? 's' : ''} · puissance ennemie ${cpFromOld(res.power).toLocaleString('fr-FR')}${res.crit ? ' · coups critiques' : ''}${res.healed ? ' · relevé par la puce de soin' : ''}${res.saved ? ' · clé conservée (Écho)' : ''}</p>
      ${res.win ? `<div class="flex flex-col gap-1 mt-3 text-sm">${res.loot.map(lootLine).join('')}</div>` : `<p class="text-sm mt-2">La Faille vous a repoussé. Vos statistiques augmentent avec vos séances, vos points, votre équipement, vos puces et vos compétences.</p>`}
      ${res.chronicle ? `<button type="button" class="btn u sm mt-3" data-a="open-chronicle" data-id="${res.foeId}">${icon('scroll', 'w-3.5 h-3.5')}Lire la chronique</button>` : ''}
      <div class="flex gap-2 mt-3 flex-wrap">
        ${res.zone ? `<button type="button" class="btn sm" data-a="exp-start" data-z="${res.zone}" ${keys >= 1 ? '' : 'disabled'}>${icon('repeat', 'w-3.5 h-3.5')}Repartir (rang ${res.zone})</button>` : ''}
        <button type="button" class="btn sm ghost" data-a="exp-close">Fermer</button>
      </div></div>`;
  } else if (cur) {
    const f = cur.foe, known = state.codex[f.id];
    top = `<div class="sys">
        <div class="label">${cur.kind === 'zone' ? `Expédition de rang ${cur.zone}` : cur.kind === 'monarch' ? 'Faille hors norme' : 'Au-delà de la Porte'} · coût ${cur.cost} clé${cur.cost > 1 ? 's' : ''}</div>
        <div class="f-display text-xl font-bold mt-1">${esc(f.name)}</div>
        <div class="text-xs muted">Rang ${esc(f.rank || 'hors norme')} · ${esc(TIER_NAMES[f.tier] || 'Monarque')} · ${esc(f.place)}</div>
        ${known ? `<p class="text-sm mt-2" style="font-family:var(--font-prose)">${esc(f.story)}</p>` : `<p class="text-xs muted mt-2">Unité inconnue. Sa fiche sera ajoutée au bestiaire après la rencontre.</p>`}
        ${ui.battle && ui.battle.kind === 'exp' ? '' : `<button type="button" class="btn sm ghost mt-3" data-a="exp-close">Battre en retraite (sans perdre de clé)</button>`}
      </div>
      ${viewCombatPanel(f, 'exp-fight', 'exp')}`;
  }
  return `
    <div class="sys">
      <div class="flex items-center justify-between gap-2 flex-wrap"><div class="sys-title">${icon('key-round', 'w-4 h-4')}Clés de Faille</div><span class="f-mono text-xl ${keys > 0 ? 'glow' : 'muted'}">${keys}</span></div>
      <p class="text-xs muted mt-2">Gagnées par la discipline réelle : +3 par quête quotidienne accomplie, +1 par séance complète, +1 par journée de macros 4/4${boosts().keys ? `, +${boosts().keys} par quête grâce aux trophées` : ''}. Les combats rapportent du butin, jamais d’XP : l’XP reste le reflet de vos efforts.</p>
    </div>
    ${top}
    <div class="label px-1">Failles</div>
    ${ZONES.map(z => {
      const lock = L < z.level;
      return `<div class="item" style="color:${RARITIES[Math.min(6, ZONES.indexOf(z))].color}">
        <div class="ic f-display text-lg font-bold">${z.rank}</div>
        <div class="flex-1 min-w-0" style="color:var(--text)">
          <div class="f-display font-semibold">${esc(z.name)}</div>
          <div class="text-[11px] muted">Matériaux : ${Object.keys(z.mats).map(m => MATERIALS[m].name.toLowerCase()).join(', ')} · ${z.kin[0]}–${z.kin[1]} kinahs · rareté max ${RARITIES[z.weights.reduce((a, w, i) => (w ? i : a), 0)].name}</div>
          <div class="mt-2">${lock ? `<span class="text-xs muted">${icon('lock', 'w-3.5 h-3.5 inline -mt-0.5')} Niveau ${z.level}</span>` : `<button type="button" class="btn sm" data-a="exp-start" data-z="${z.id}" ${keys >= 1 && !cur ? '' : 'disabled'}>${icon('swords', 'w-3.5 h-3.5')}Explorer · 1 clé</button>`}</div>
        </div></div>`;
    }).join('')}
    <div class="label px-1">Failles hors norme — les neuf Monarques</div>
    ${MONARCHS.map((m, i) => {
      const ok = monarchUnlocked(i), k = state.codex[m.id];
      return `<div class="item" style="color:#ff4d6d">
        <div class="ic f-display text-sm font-bold">${m.key}</div>
        <div class="flex-1 min-w-0" style="color:var(--text)">
          <div class="f-display font-semibold">${k && k.seen ? esc(m.name) : esc(m.short)}</div>
          <div class="text-[11px] muted">Puissance ${cpFromOld(m.power).toLocaleString('fr-FR')} · ${esc(m.place)}${k && k.kills ? ` · vaincu ${k.kills} fois` : ''}</div>
          <div class="mt-2">${ok ? `<button type="button" class="btn sm danger" data-a="exp-monarch" data-i="${i}" ${keys >= 3 && !cur ? '' : 'disabled'}>${icon('crown', 'w-3.5 h-3.5')}Affronter · 3 clés</button>`
            : `<span class="text-xs muted">${icon('lock', 'w-3.5 h-3.5 inline -mt-0.5')} Niveau ${m.level}${i > 0 ? ` et ${esc(MONARCHS[i - 1].short)} vaincu` : ''}</span>`}</div>
        </div></div>`;
    }).join('')}
    <div class="item" style="color:#fff1b8">
      <div class="ic">${icon('infinity', 'w-5 h-5')}</div>
      <div class="flex-1 min-w-0" style="color:var(--text)">
        <div class="f-display font-semibold">${state.codex.absolu ? esc(ABSOLUTE.name) : 'Être absolu'}</div>
        <div class="text-[11px] muted">Puissance ${cpFromOld(ABSOLUTE.power).toLocaleString('fr-FR')} · ${esc(ABSOLUTE.place)}</div>
        <div class="mt-2">${absoluteUnlocked() ? `<button type="button" class="btn sm danger" data-a="exp-absolute" ${keys >= 5 && !cur ? '' : 'disabled'}>${icon('infinity', 'w-3.5 h-3.5')}Franchir la Porte · 5 clés</button>` : `<span class="text-xs muted">${icon('lock', 'w-3.5 h-3.5 inline -mt-0.5')} Niveau ${ABSOLUTE.level} et les neuf Monarques vaincus</span>`}</div>
      </div></div>`;
}

/* ---------- Boutique ---------- */
const SHOP_TABS = [['prestige', 'Prestige', 'award'], ['armurerie', 'Armurerie', 'swords'], ['puces', 'Puces', 'cpu'], ['runes', 'Runes', 'gem'], ['materiaux', 'Matériaux', 'cog'], ['cosm', 'Cosmétiques', 'sparkles'], ['mount', 'Montures', 'rabbit'], ['instrument', 'Instruments', 'music-2'], ['house', 'Demeures', 'castle']];
const CHIP_PRICES = [150, 450, 1200, 3000, 7500, 18000, 45000];
/* prix à l'unité ; les gros lots sont un peu moins chers */
const MAT_UNIT = { ferraille: 20, ether: 150, coeur: 1500, cendre: 5000 };
const MAT_PACKS = Object.keys(MAT_UNIT).flatMap(m => [1, 10, 100].map(n => ({ id: m + n, m, n, price: Math.round(MAT_UNIT[m] * n * (n >= 100 ? 0.8 : n >= 10 ? 0.9 : 1)) })));
/* ce qui manque pour une amélioration, et son prix */
function missingCost(cost) { let k = 0; const miss = {}; for (const m in MAT_UNIT) { const n = Math.max(0, (cost[m] || 0) - (state.mats[m] || 0)); if (n) { miss[m] = n; k += n * MAT_UNIT[m]; } } return { miss, k }; }
function gearPrice(r) { return Math.round(RARITIES[r].price * (hasF('theo') ? 0.85 : 1)); }
function viewShop() {
  let cat = ui.shopCat || 'armurerie';
  if (!SHOP_TABS.some(t => t[0] === cat)) cat = 'armurerie';
  const k = kinahs(), L = curLevel();
  let body = '';
  if (cat === 'prestige') body = viewPrestigeShop();
  else if (cat === 'runes') {
    const G = typeof arenaState === 'function' ? arenaState().glory : 0;
    body = `<p class="text-[11px] muted px-1">Une rune se sertit dans une arme ou une armure Légendaire, Mythique, Éternelle ou De toute éternité, pour toujours : elle ne peut plus être retirée. Un objet porté à +4 reçoit deux runes. Les effets de même type s’additionnent. La rareté « De toute éternité » s’achète avec la gloire de l’arène (vous en avez ${G.toLocaleString('fr-FR')}).</p>` +
      Object.entries(RUNE_TYPES).map(([t, T]) => `<div class="card"><div class="flex items-center gap-2"><span class="glow-umbra">${icon(T.icon, 'w-4 h-4')}</span><span class="f-display font-semibold">${esc(T.name)}</span></div>
        <div class="flex flex-col gap-1 mt-2">${[0, 1, 2, 3, 4, 5, 6, 7].map(r => { const glory = r === 7, p = glory ? RUNE_GLORY_PRICE : RUNE_PRICES[r], ok = glory ? G >= p : k >= p, own = (state.runes || {})[runeKey(t, r)] || 0;
          return `<div class="flex items-center gap-2 text-[12px]"><span class="w-28 f-display" style="color:${RARITIES[r].color}">${RARITIES[r].name}</span><span class="flex-1 min-w-0 muted">${esc(T.txt(T.v[r]))}${own ? ` · ×${own} en stock` : ''}</span><button type="button" class="btn sm" data-a="buy-rune" data-t="${t}" data-r="${r}" ${ok ? '' : 'disabled'}>${glory ? p.toLocaleString('fr-FR') + ' gloire' : fmtK(p)}</button></div>`; }).join('')}</div></div>`).join('');
  } else if (cat === 'armurerie') {
    const { weapons, armors } = lootTypes(), mine = new Set([...weapons, ...armors]);
    const all = [...Object.keys(WEAPON_TYPES), ...Object.keys(ARMOR_TYPES)].sort((x, y) => (mine.has(y) ? 1 : 0) - (mine.has(x) ? 1 : 0));
    body = all.map((t, i) => {
      const ti = WEAPON_TYPES[t] || ARMOR_TYPES[t];
      const head = i === 0 ? `<div class="sys-title px-1">Pour votre classe</div>` : !mine.has(t) && mine.has(all[i - 1]) ? `<div class="sys-title px-1 mt-2">Autres armes et armures (hors classe)</div>` : '';
      return head + `<div class="card">
        <div class="flex items-center gap-2"><span class="glow">${icon(ti.icon, 'w-4 h-4')}</span><span class="f-display font-semibold">${esc(ti.name)}</span><span class="text-[11px] muted">${WEAPON_TYPES[t] ? (WEAPON_TYPES[t].hands === 2 ? 'deux mains' : 'une main') : 'armure'} · ${STATS[ti.stat].name}</span></div>
        <div class="flex flex-wrap gap-1.5 mt-2">
          ${[0, 1, 2, 3, 4, 5, 6].map(r => { const p = gearPrice(r);
            return `<button type="button" class="gearbuy" style="color:${RARITIES[r].color}" data-a="buy-gear" data-t="${t}" data-r="${r}" ${k < p ? 'disabled' : ''}>${artGear(t, r, 46)}<span>${RARITIES[r].name}</span><span class="f-mono">${fmtK(p)}</span></button>`; }).join('')}
        </div></div>`;
    }).join('') + `<p class="text-[11px] muted px-1">Toutes les armes et armures se vendent, du Commun à l’Éternel. Une arme hors de votre classe se range dans l’inventaire mais ne peut pas être équipée. La rareté « De toute éternité » ne se vend pas : elle se reçoit à la fin des tomes du récit.</p>`;
  } else if (cat === 'puces') {
    body = Object.entries(CHIP_TYPES).map(([t, ct]) => `<div class="card">
      <div class="flex items-center gap-2">${artChipTile(t, 2, 36)}<span class="min-w-0"><span class="f-display font-semibold block">${esc(ct.name)}</span><span class="text-[11px] muted block">+x % ${esc(ct.desc)}</span></span></div>${(state.chips[chipKey(t, 7)] || 0) ? `<div class="text-[11px] mt-1" style="color:${RARITIES[7].color}">De toute éternité +${CHIP_VALUES[7]} % : ×${state.chips[chipKey(t, 7)]} (récit)</div>` : ''}
      <div class="flex flex-wrap gap-1.5 mt-2">${CHIP_PRICES.map((p, r) => `<button type="button" class="btn sm" style="border-color:${RARITIES[r].color};color:${RARITIES[r].color};background:transparent" data-a="buy-chip" data-t="${t}" data-r="${r}" ${k < p ? 'disabled' : ''}>${RARITIES[r].name} +${CHIP_VALUES[r]} % · ${fmtK(p)}</button>`).join('')}</div></div>`).join('') + `<p class="text-[11px] muted px-1">Toutes les puces se vendent, du Commun à l’Éternel. Les puces « De toute éternité » (+${CHIP_VALUES[7]} %) se gagnent dans le récit, une par tome fini.</p>`;
  } else if (cat === 'materiaux') {
    body = Object.keys(MAT_UNIT).map(m => `<div class="card"><div class="flex items-center gap-3">${artMat(m, 44)}
      <span class="flex-1">${esc(MATERIALS[m].name)} <span class="text-[11px] muted">(possédés : ${state.mats[m] || 0})</span></span></div>
      <div class="flex flex-wrap gap-1.5 mt-2">${MAT_PACKS.filter(p => p.m === m).map(p => `<button type="button" class="btn sm" data-a="buy-mat" data-id="${p.id}" ${k < p.price ? 'disabled' : ''}>×${p.n} · ${fmtK(p.price)}</button>`).join('')}</div></div>`).join('') + `<p class="text-[11px] muted px-1">Tous les matériaux d’amélioration s’achètent, Cendre de Monarque comprise (lots de 10 : −10 %, lots de 100 : −20 %). Dans l’Arsenal, le bouton « Acheter ce qui manque » complète d’un coup ce qu’il faut pour l’amélioration suivante.</p>`;
  } else if (cat === 'cosm') {
    const G = typeof arenaState === 'function' ? arenaState().glory : 0;
    body = Object.entries(COSMETIC_CATS).map(([cat, label]) => cat === 'armeskin' ? `<div class="sys-title mt-3 px-1">${label}</div><p class="text-[11px] muted px-1">Un skin par type d’arme et par rareté : l’arme de ce type prend l’apparence de la rareté du skin (taille, ornements, lumière) et son thème. Ils se portent type par type (Codex → Cosmétiques) ; seul le meilleur des skins des armes en main compte pour les statistiques. « De toute éternité » : ${WSKIN_GLORY.toLocaleString('fr-FR')} gloire (vous en avez ${G.toLocaleString('fr-FR')}).</p>` + Object.keys(WEAPON_TYPES).map(t => `<div class="card"><div class="f-display text-sm mb-1">${esc(WEAPON_TYPES[t].name)}</div><div class="flex flex-wrap gap-1.5">${COSMETICS.filter(c => c.cat === 'armeskin' && c.wtype === t).map(c => { const own = cosmOwned(c.id), gl = c.how.type === 'glory'; return `<button type="button" class="gearbuy" style="color:${c.color}" data-a="buy-cosm" data-id="${c.id}" ${own || (gl ? G < WSKIN_GLORY : k < c.price) ? 'disabled' : ''} title="${esc(c.name)}">${artGear(t, c.r, 46)}<span>${RARITIES[c.r].name}</span><span class="f-mono">${own ? 'possédé' : gl ? '100 k gloire' : fmtK(c.price)}</span></button>`; }).join('')}</div></div>`).join('') : `<div class="sys-title mt-3 px-1">${label}</div>` + COSMETICS.filter(c => c.how.type === 'shop' && c.cat === cat).map(c => { const own = cosmOwned(c.id);
      return `<div class="card flex items-center gap-3">${artCosm(c, 52)}
        <span class="flex-1 min-w-0">${c.cat === 'titre' ? `<span class="block">${titleHTML(c.name, c.r)}</span>` : `<span class="block f-display" style="color:${c.color}">${esc(c.name)}</span>`}<span class="text-[11px] muted">${RARITIES[c.r].name} · porté : +${COSMETIC_PCT[c.r]} % XP et kinahs, +${COSMETIC_STAT[c.r]} % statistiques</span></span>
        ${own ? `<span class="rar" style="color:var(--ok)">Possédé</span>` : `<button type="button" class="btn sm" data-a="buy-cosm" data-id="${c.id}" ${k < c.price ? 'disabled' : ''}>${fmtK(c.price)}</button>`}</div>`; }).join('')).join('') + `<p class="text-[11px] muted px-1">Les autres cosmétiques se trouvent en expédition, sur les Monarques, avec les trophées et les fins. Tout se porte dans Codex → Cosmétiques.</p>`;
  } else {
    body = SHOP.filter(it => it.cat === cat).map(it => {
      const R = RARITIES[it.r], own = !!state.owned[it.id], price = itemPrice(it);
      const lvlLock = L < R.lvl, reqLock = it.req === 'trueEnd' && !trueEnd(), equipped = state.equip[cat] === it.id;
      const effect = cat === 'house' ? (HOUSE_CAP[it.r] >= 99 ? 'Places illimitées' : `${HOUSE_CAP[it.r]} membres`) : cat === 'instrument' ? '+1 lien avec chaque membre' : `Montée : +${COSMETIC_PCT[it.r]} % XP et kinahs, +${COSMETIC_STAT[it.r]} % toutes les statistiques`;
      let action;
      if (own && cat === 'mount') action = equipped ? `<span class="rar glow" style="color:var(--neon)">Montée</span>` : `<button type="button" class="btn sm" data-a="equip" data-id="${it.id}">Monter</button>`;
      else if (own) action = `<span class="rar" style="color:var(--ok)">Possédé</span>`;
      else if (it.merchant) action = `<span class="text-xs" style="color:${RARITIES[5].color}">Chez le marchand louche, dans les galeries</span>`;
      else if (it.eternal) action = `<span class="text-xs" style="color:${RARITIES[7].color}">Éternel ${it.eternal} vaincu sans combat automatique</span>`;
      else if (it.story) action = `<span class="text-xs" style="color:${RARITIES[7].color}">${icon('book-open', 'w-3.5 h-3.5 inline -mt-0.5')} Récit : fin du tome ${it.story}</span>`;
      else if (reqLock) action = `<span class="text-xs muted">${icon('lock', 'w-3.5 h-3.5 inline -mt-0.5')} Fin L requise</span>`;
      else if (lvlLock) action = `<span class="text-xs muted">${icon('lock', 'w-3.5 h-3.5 inline -mt-0.5')} Niveau ${R.lvl}</span>`;
      else action = `<button type="button" class="btn sm" data-a="buy" data-id="${it.id}" ${k < price ? 'disabled' : ''}>${icon('gem', 'w-3.5 h-3.5')}${fmtK(price)}</button>`;
      return `<div class="item" style="color:${R.color}">
        ${artShop(it, 64, !own && (lvlLock || reqLock) ? 'lock' : '')}
        <div class="flex-1 min-w-0" style="color:var(--text)">
          <div class="flex items-center gap-2 flex-wrap"><span class="f-display font-semibold" style="color:${R.color}">${esc(it.name)}</span><span class="rar" style="color:${R.color}">${R.name}</span></div>
          <p class="text-xs mt-1" style="font-family:var(--font-prose);font-style:italic;color:#b9bdc8;font-size:13.5px">${esc(it.lore)}</p>
          <div class="flex items-center justify-between gap-2 mt-2 flex-wrap"><span class="text-xs f-mono muted">${effect}</span>${action}</div>
        </div></div>`;
    }).join('');
  }
  return `
    <div class="sys">
      <div class="flex items-center justify-between gap-2 flex-wrap"><div class="sys-title">Boutique du Système</div><span class="f-mono ${k < 0 ? 'red' : 'kinah'}">${icon('gem', 'w-4 h-4 inline -mt-0.5')} ${fmtK(k)} kinahs</span></div>
      <p class="text-xs muted mt-2">Kinahs : séances, macros, quête accomplie, combats et expéditions.${hasF('theo') ? ' Théo vous fait −15 % sur l’armurerie et les montures.' : ''}</p>
      <div class="subtabs mt-3">${SHOP_TABS.map(([id, l, ic]) => `<button type="button" class="chip ${cat === id ? 'on' : ''} flex items-center gap-1.5" data-a="shop-cat" data-c="${id}">${icon(ic, 'w-3.5 h-3.5')}${l}</button>`).join('')}</div>
    </div>
    ${body}`;
}

/* ---------- Codex ---------- */
const RANK_ORDER = ['E', 'D', 'C', 'B', 'A', 'S'];
function viewCodex() {
  const tab = ui.codexTab || 'bestiaire';
  const tabs = [['bible', 'Bible du lore'], ['perso', 'Personnages'], ['bestiaire', 'Bestiaire'], ['monarques', 'Monarques'], ['fins', 'Fins'], ['archives', 'Archives'], ['explore', 'Exploration'], ['cosm', 'Cosmétiques'], ['trophees', 'Trophées']];
  const views = { bible: codexBible, perso: codexPeople, bestiaire: codexBestiary, monarques: codexMonarchs, fins: codexEndings, archives: codexArchives, explore: codexExplore, cosm: codexCosmetics, trophees: codexTrophies };
  return `<div class="subtabs">${tabs.map(([id, l]) => `<button type="button" class="chip u ${tab === id ? 'on' : ''}" data-a="codex-tab" data-t="${id}">${l}</button>`).join('')}</div>${views[tab]()}`;
}
function bestiaryCard(b) {
  const e = state.codex[b.id];
  if (!e) return `<div class="card flex items-center gap-3 muted"><span class="f-display w-6 text-center">${b.rank}</span><span class="flex-1">??? <span class="text-[11px]">· ${esc(TIER_NAMES[b.tier])}</span></span>${icon('lock', 'w-4 h-4')}</div>`;
  const col = b.tier === 'calamite' ? '#ff4d6d' : b.tier === 'gardien' ? '#f59e0b' : b.tier === 'elite' ? '#b07cff' : '#a3a8b4';
  return `<details class="card" style="border-color:${col}55">
    <summary class="flex items-center gap-3"><span class="f-display w-6 text-center font-bold" style="color:${col}">${b.rank}</span>
      <span class="flex-1 min-w-0"><span class="block f-display font-semibold truncate">${esc(b.name)}</span><span class="text-[11px] muted">${esc(TIER_NAMES[b.tier])} · puissance ${cpFromOld(b.power).toLocaleString('fr-FR')}${e.kills ? ` · vaincu ${e.kills}×` : ' · rencontré'}</span></span>
      <span class="chev muted">${icon('chevron-down', 'w-4 h-4')}</span></summary>
    <div class="mt-3 text-sm flex flex-col gap-1.5">
      <div class="text-[11px] f-mono muted">Rang ${b.rank} · ${esc(TIER_NAMES[b.tier])} · faible à ${STATS[b.weak].name} · résiste à ${STATS[b.resist].name}</div>
      <div><b class="f-display">Lieu de rencontre :</b> <span class="muted">${esc(b.place)}</span></div>
      <div><b class="f-display">Origine :</b> <span class="muted">${esc(b.origin)}</span></div>
      <p style="font-family:var(--font-prose);font-size:15px;line-height:1.6">${esc(b.story)}</p>
      <div class="text-[11px] muted">Première rencontre : ${esc(fromKey(e.first).toLocaleDateString('fr-FR'))}</div>
    </div></details>`;
}
function codexBestiary() {
  const killed = BESTIARY.filter(b => state.codex[b.id] && state.codex[b.id].kills).length;
  return `<div class="sys"><div class="flex items-center justify-between gap-2"><div class="sys-title">Données d’unités</div><span class="f-mono text-sm">${killed} / ${BESTIARY.length}</span></div>
    <p class="text-xs muted mt-2">Classification de l’Association : rangs E à S, sous-catégories Commun, Élite et Gardien de Faille, palier spécial des Calamités (S+), puis les neuf Monarques hors norme et l’Être absolu.</p></div>
    ${RANK_ORDER.map(r => `<div class="label px-1">Rang ${r}</div>${BESTIARY.filter(b => b.rank === r && b.tier !== 'calamite').map(bestiaryCard).join('')}`).join('')}
    <div class="label px-1">Palier spécial — Calamités (S+)</div>${BESTIARY.filter(b => b.tier === 'calamite').map(bestiaryCard).join('')}`;
}
function codexMonarchs() {
  return [...MONARCHS, ABSOLUTE].map(m => {
    const e = state.codex[m.id];
    if (!e || !e.kills) return `<div class="card flex items-center gap-3 muted"><span class="f-display w-8 text-center">${m.key}</span><span class="flex-1">${esc(m.short)} <span class="text-[11px]">· puissance ${cpFromOld(m.power).toLocaleString('fr-FR')} · ${e ? 'rencontré' : 'inconnu'}</span></span>${icon('lock', 'w-4 h-4')}</div>`;
    return `<div class="item" style="color:#ff4d6d"><div class="ic f-display text-sm font-bold">${m.key}</div>
      <div class="flex-1 min-w-0" style="color:var(--text)"><div class="f-display font-semibold">${esc(m.name)}</div>
        <div class="text-[11px] muted">Puissance ${cpFromOld(m.power).toLocaleString('fr-FR')} · ${esc(m.place)} · vaincu ${e.kills}×</div>
        <div class="text-xs mt-1"><b class="f-display">Origine :</b> <span class="muted">${esc(m.origin)}</span></div>
        <p class="text-sm mt-1" style="font-family:var(--font-prose)">${esc(m.story)}</p>
        <button type="button" class="btn sm u mt-2" data-a="open-chronicle" data-id="${m.id}">${icon('scroll', 'w-3.5 h-3.5')}Chronique</button></div></div>`;
  }).join('');
}
function codexEndings() {
  const S = state.story, helene = hasF('helene');
  return `<div class="sys umbra">
      <div class="flex items-center justify-between gap-2 mb-3"><div class="sys-title u">Fins</div><span class="f-mono text-sm">${Object.keys(S.endings).length} / 12</span></div>
      <div class="grid grid-cols-4 sm:grid-cols-6 gap-2">
        ${Object.keys(ENDINGS).map(L => { const seen = S.endings[L];
          return `<div class="border ${seen ? 'border-umbra' : 'border-[#2a2a35]'} p-2 text-center min-w-0" style="${seen ? 'background:rgba(139,92,246,.08)' : ''}"><div class="f-display text-xl font-bold ${seen ? 'glow-umbra' : 'muted'}">${L}</div><div class="text-[10px] truncate ${seen ? '' : 'muted'}">${seen ? esc(ENDINGS[L].title) : '???'}</div></div>`; }).join('')}
      </div>
      ${helene ? `<details class="mt-3"><summary class="text-xs glow-umbra cursor-pointer">Notes d’Hélène sur les fins manquantes</summary><ul class="text-xs mt-2 flex flex-col gap-1">${Object.keys(ENDINGS).filter(L => !S.endings[L]).map(L => `<li><b class="f-display">${L}</b> <span class="muted">${esc(ENDING_HINTS[L])}</span></li>`).join('') || '<li class="muted">Vous les avez toutes vues.</li>'}</ul></details>`
        : `<p class="text-[11px] muted mt-3">Recrutez l’archiviste pour obtenir des indices sur les fins manquantes.</p>`}
    </div>`;
}
function codexArchives() {
  const S = state.story, ids = Object.keys(ARCHIVES);
  return `<div class="sys"><div class="flex items-center justify-between gap-2 mb-2"><div class="sys-title">Archives</div><span class="f-mono text-sm">${ids.filter(a => S.archives[a]).length} / ${ids.length}</span></div>
    <p class="text-xs muted mb-2">Certaines archives n’existent que sur une seule voie du récit.</p>
    ${ids.map(a => S.archives[a]
      ? `<button type="button" class="res" data-a="open-archive" data-id="${a}"><span class="f-mono text-[11px] muted w-10">${a}</span><span class="flex-1 min-w-0 truncate">${esc(ARCHIVES[a].t)}</span>${icon('chevron-right', 'w-4 h-4 muted')}</button>`
      : `<div class="res" style="cursor:default"><span class="f-mono text-[11px] muted w-10">${a}</span><span class="flex-1 muted">— données corrompues —</span>${icon('lock', 'w-4 h-4 muted')}</div>`).join('')}</div>`;
}
function wskinCodex() {
  const own = COSMETICS.filter(c => c.cat === 'armeskin' && cosmOwned(c.id)), types = Object.keys(WEAPON_TYPES), mine = new Set([...classMains(), ...classOffs()]);
  return `<details class="sys"><summary class="flex items-center justify-between gap-2 mb-2" style="cursor:pointer;list-style:none"><div class="sys-title">Skins par type d’arme</div><span class="f-mono text-sm">${own.length} / ${COSMETICS.filter(c => c.cat === 'armeskin').length}</span></summary>
    <p class="text-[11px] muted mb-2">Un skin par type d’arme : l’arme de ce type prend l’apparence de la rareté du skin et son thème (il remplace le skin d’arme général pour ce type). Seul le meilleur skin des armes en main compte pour les statistiques. Boutique → Cosmétiques.</p>
    ${types.sort((x, y) => (mine.has(y) ? 1 : 0) - (mine.has(x) ? 1 : 0)).map(t => { const L = COSMETICS.filter(c => c.cat === 'armeskin' && c.wtype === t), on = state.cosmEq['ws:' + t];
      return `<div class="py-1.5 border-b border-[#24242c]"><div class="flex items-center gap-2 mb-1"><span class="f-display text-sm flex-1">${esc(WEAPON_TYPES[t].name)}${mine.has(t) ? ' <span class="text-[10px] glow">votre classe</span>' : ''}</span>${on ? `<button type="button" class="btn sm ghost" data-a="cosm-eq" data-c="ws:${t}" data-id="">Retirer</button>` : ''}</div>
        <div class="flex flex-wrap gap-1">${L.map(c => { const o = cosmOwned(c.id); return o ? `<button type="button" class="gearbuy ${on === c.id ? 'on' : ''}" style="color:${c.color};${on === c.id ? 'outline:2px solid ' + c.color : ''}" data-a="cosm-eq" data-c="ws:${t}" data-id="${c.id}" title="${esc(c.name)}">${artGear(t, c.r, 40)}<span>${RARITIES[c.r].name}</span></button>` : `<span class="gearbuy" style="opacity:.35" title="${esc(c.name)} · ${esc(cosmSource(c))}">${artGear(t, c.r, 40, 'lock')}<span>${RARITIES[c.r].name}</span></span>`; }).join('')}</div></div>`; }).join('')}</details>`;
}
function codexCosmetics() {
  const relics = `<div class="sys mb-2"><div class="sys-title" style="color:${RARITIES[7].color}">Reliques de toute éternité</div><p class="text-[11px] muted mb-2">Remises quand un tome du récit est fini (quelle que soit la fin). Plus puissantes que tout ce qui se vend : chaque pièce, cosmétique ou monture « De toute éternité » portée donne +1 000 % à toutes les statistiques ; chaque puce donne +50 %.</p>${RELICS.map(R => { const got = (state.relics || {})[R.id], c = R.cosm ? COSMETICS.find(x => x.id === R.id) : null, it = !R.cosm && got ? invItem(got) : null;
    const name = R.mount ? 'Monture : ' + SHOP.find(x => x.id === R.id).name : R.chip ? `Puce ${CHIP_TYPES[R.chip].name} +${CHIP_VALUES[7]} %` : c ? c.name : it ? itemName(it) : ({ casque: 'Casque', plastron: 'Plastron', jambieres: 'Jambières', bottes: 'Bottes', main: 'Arme', off: 'Seconde arme ou bouclier', bijou: 'Bijou', ceinture: 'Ceinture' })[R.slot] + ' de toute éternité';
    return `<div class="res" style="cursor:default"><span class="f-mono text-[11px] w-14 muted">Tome ${R.tome}</span><span class="flex-1 text-sm" style="color:${got ? RARITIES[7].color : 'var(--muted)'}">${esc(name)}</span><span class="text-[11px] ${got ? 'glow' : 'muted'}">${got ? 'reçue' : 'à venir'}</span></div>`; }).join('')}</div>`;
  return relics + `<p class="text-[11px] muted px-1 mb-2">Chaque cosmétique porté augmente les gains d’XP et de kinahs et <b>toutes les statistiques</b> selon sa rareté (Force, Agilité, Endurance, Intelligence, donc aussi l’Attaque, les PV, la Défense, le critique et l’esquive). Ce qu’on affiche sur le personnage se règle dans sa fiche : « Affichage ».</p>` + wskinCodex() + Object.entries(COSMETIC_CATS).filter(([cat]) => cat !== 'armeskin').map(([cat, label]) => `
    <details class="sys" ${state.cosmEq[cat] ? '' : ''}><summary class="flex items-center justify-between gap-2 mb-2" style="cursor:pointer;list-style:none"><div class="sys-title">${label}</div><span class="f-mono text-sm">${COSMETICS.filter(c => c.cat === cat && cosmOwned(c.id)).length} / ${COSMETICS.filter(c => c.cat === cat).length} ${cosmOf(cat) ? `· <span style="color:${cosmOf(cat).color}">${esc(cosmOf(cat).name)}</span>` : ''}</span></summary>
      ${COSMETICS.filter(c => c.cat === cat).map(c => { const own = cosmOwned(c.id), on = state.cosmEq[cat] === c.id;
        return `<div class="res" style="cursor:default">${artCosm(c, 48, own ? '' : 'lock')}
          <span class="flex-1 min-w-0">${own && c.cat === 'titre' ? `<span class="block" style="overflow:hidden">${titleHTML(c.name, c.r)}</span>` : `<span class="block truncate f-display" style="color:${own ? c.color : 'var(--muted)'}">${own ? esc(c.name) : '???'}</span>`}<span class="text-[11px] muted">${RARITIES[c.r].name} · +${COSMETIC_PCT[c.r]} % XP et kinahs · +${COSMETIC_STAT[c.r]} % stats · ${esc(cosmSource(c))}</span></span>
          ${own ? (on ? `<button type="button" class="btn sm ghost" data-a="cosm-eq" data-c="${cat}" data-id="">Retirer</button>` : `<button type="button" class="btn sm u" data-a="cosm-eq" data-c="${cat}" data-id="${c.id}">Porter</button>`) : icon('lock', 'w-4 h-4 muted')}</div>`; }).join('')}
    </details>`).join('');
}
function codexTrophies() {
  const b = boosts();
  const fmtBonus = bo => Object.entries(bo).map(([k, v]) => ({ xp: `+${v} % XP`, kin: `+${v} % kinahs`, rar: `+${v} % rareté`, mat: `+${v} % matériaux`, crit: `+${v} % critique`, keys: `+${v} clé par quête` }[k])).join(' · ');
  return `<div class="sys"><div class="flex items-center justify-between gap-2"><div class="sys-title">Trophées</div><span class="f-mono text-sm">${b.trophies.length} / ${TROPHIES.length}</span></div>
      <p class="text-xs mt-2">Bonus cumulés : <span class="glow f-mono">XP +${b.xp - chipSum('savoir')} % · kinahs +${b.kin - chipSum('fortune')} % · rareté +${b.rar - chipSum('prospect')} % · matériaux +${b.mat - chipSum('recolte')} % · critique +${b.crit - chipSum('critique')} %</span> (hors puces)</p></div>
    ${['Collection', 'Accomplissement'].map(cat => `<div class="label px-1">${cat}</div>${TROPHIES.filter(t => t.cat === cat).map(t => { const ok = b.trophies.includes(t.id);
      return `<div class="item" style="color:${ok ? '#ffd479' : 'var(--muted)'}"><div class="ic">${icon(ok ? 'trophy' : 'lock', 'w-5 h-5')}</div>
        <div class="flex-1 min-w-0" style="color:var(--text)"><div class="f-display font-semibold ${ok ? 'kinah' : ''}">${esc(t.name)}</div><div class="text-xs muted">${esc(t.desc)}</div>
        <div class="text-[11px] mt-1 ${ok ? 'glow' : 'muted'}">${fmtBonus(t.bonus)}${t.cosmetic ? ` · cosmétique : ${t.cosmetic.map(id => esc(COSMETICS.find(c => c.id === id).name)).join(', ')}` : ''}</div></div></div>`; }).join('')}`).join('')}`;
}
function chipSum(type) { return state.chipEq.filter(k => k.startsWith(type + ':') && state.chips[k] > 0).reduce((a, k) => a + CHIP_VALUES[Number(k.split(':')[1])], 0); }

function expResolve(B) {
  const cur = ui.exp; if (!cur) return;
  const f = cur.foe, win = B.win;
  let loot = [];
  act(() => {
    codexRecord(f.id, win);
    if (win) {
      state.counters.expeditions = (state.counters.expeditions || 0) + 1;
      if (cur.kind === 'zone') {
        const z = ZONES.find(x => x.id === cur.zone), t = f.tier;
        loot = grantLoot({ why: 'Expédition ' + z.id, kin: z.kin.map(v => Math.round(v * (t === 'calamite' ? 3 : t === 'gardien' ? 1.8 : t === 'elite' ? 1.3 : 1))), weights: z.weights,
          mats: z.mats, gear: t === 'calamite' ? 1 : t === 'gardien' ? 0.8 : t === 'elite' ? 0.45 : 0.25, chip: t === 'calamite' ? 0.6 : t === 'gardien' ? 0.4 : t === 'elite' ? 0.25 : 0.15,
          minR: t === 'calamite' ? 4 : 0, cosm: ZONE_COSMETICS[z.id], cosmChance: t === 'gardien' || t === 'calamite' ? 0.15 : 0.04 });
      } else if (cur.kind === 'monarch') {
        loot = grantLoot({ why: f.short, kin: [500, 800], weights: MONARCH_WEIGHTS, mats: { cendre: [2, 4], coeur: [1, 3], ether: [2, 4] }, gear: 1, chip: 1, minR: 3, cosm: MONARCH_COSMETICS[f.id] });
      } else {
        loot = grantLoot({ why: 'Être absolu', kin: [1500, 2500], weights: ABSOLUTE_WEIGHTS, mats: { cendre: [6, 10], coeur: [3, 5] }, gear: 1, chip: 1, minR: 4, cosm: MONARCH_COSMETICS.absolu });
      }
    }
  }, { quietKinah: true, noRender: true });
  ui.expResult = { win, roll: B.turn, power: f.power, crit: B.crits > 0, healed: B.P.revived, saved: cur.saved, name: f.name, foeId: f.id, loot,
                   zone: cur.kind === 'zone' ? cur.zone : null, chronicle: win && cur.kind !== 'zone' };
  ui.exp = null;
  if (win && cur.kind !== 'zone' && state.codex[f.id].kills === 1) setTimeout(() => handlers['open-chronicle']({ dataset: { id: f.id } }), 50);
}

/* ==========================================================================
   GESTIONNAIRES
   ========================================================================== */
Object.assign(handlers, {
  'inv-filter': el => { ui.invFilter = el.dataset.f; render(); },
  'inv-rar': el => { ui.invRar = el.dataset.r === 'all' ? 'all' : +el.dataset.r; render(); },
  'inv-kind': el => { ui.invKind = el.dataset.k; render(); },
  'inv-sort': el => { ui.invSort = el.dataset.k; render(); },
  'inv-open': el => { ui.invOpen = ui.invOpen || {}; ui.invOpen[el.dataset.r] = !ui.invOpen[el.dataset.r]; render(); },
  'slot-pick': el => { ui.slotPick = ui.slotPick === el.dataset.s ? null : el.dataset.s; render(); if (ui.slotPick) setTimeout(() => { const p = document.getElementById('slot-picker'); if (p) p.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 30); },
  'slot-eq': el => { const it = invItem(el.dataset.uid), s = el.dataset.s; if (!it) return; const prev = equippedSlot(it.uid); if (prev && prev !== s) state.gear[prev] = null; state.gear[s] = it.uid; validateGear(); _bm = null; ui.slotPick = null; save(); render(); toast(`${icon('check', 'w-4 h-4')}<span>${esc(itemName(it))} équipé</span>`); },
  'inv-recycle-rar': el => { const r = +el.dataset.r; ui.armed = null;
    const L = state.inv.filter(it => it.r === r && !equippedSlot(it.uid) && !(it.runes || []).length); if (!L.length) return;
    const g = {}; for (const it of L) { const x = recycleGain(it); for (const m in x) g[m] = (g[m] || 0) + x[m]; }
    const ids = new Set(L.map(it => it.uid)); state.inv = state.inv.filter(it => !ids.has(it.uid)); for (const m in g) state.mats[m] = (state.mats[m] || 0) + g[m];
    save(); render(); toast(`${icon('recycle', 'w-4 h-4')}<span>${L.length} objets ${esc(RARITIES[r].name)} recyclés : ${Object.entries(g).filter(([, n]) => n).map(([m, n]) => `${n} ${MATERIALS[m].name.toLowerCase()}`).join(', ')}</span>`); },
  'codex-tab': el => { ui.codexTab = el.dataset.t; ui.person = null; render(); },
  'eq': el => {
    const it = invItem(el.dataset.uid), slot = el.dataset.slot;
    if (!it) return;
    for (const s in state.gear) if (state.gear[s] === it.uid) state.gear[s] = null;
    if (slot === 'main') {
      if (!canMain(it.type)) return;
      state.gear.main = it.uid;
      if (WEAPON_TYPES[it.type].hands === 2) state.gear.off = null;
    } else if (slot === 'off') {
      const main = invItem(state.gear.main);
      if (!main || !canOff(it.type, main.type)) return;
      state.gear.off = it.uid;
    } else state.gear[slot] = it.uid;
    validateGear(); save(); render();
  },
  'uneq': el => { state.gear[el.dataset.slot] = null; if (el.dataset.slot === 'main') state.gear.off = null; save(); render(); },
  'upgrade': el => {
    const it = invItem(el.dataset.uid);
    if (!it || (it.up || 0) >= UPGRADE_MAX) return;
    const c = upgradeCost(it);
    if (!canPay(c)) return;
    act(() => {
      for (const m in MATERIALS) state.mats[m] -= (c[m] || 0);
      state.buys.push({ id: 'up:' + it.uid, price: c.kin, date: dk() });
      it.up = (it.up || 0) + 1;
    }, { quietKinah: true });
    toast(`${icon('arrow-up-circle', 'w-4 h-4')}<span><b style="color:${RARITIES[it.r].color}">${esc(itemName(it))}</b> passe à +${it.up}</span>`);
  },
  'recycle': el => {
    const it = invItem(el.dataset.uid);
    if (!it || equippedSlot(it.uid)) return;
    if (ui.armed !== 'rec-' + it.uid) { ui.armed = 'rec-' + it.uid; toast(`${icon('recycle', 'w-4 h-4')}<span>Touchez encore pour recycler ${esc(itemName(it))}${(it.runes || []).length ? ' — ses runes seront perdues' : ''}.</span>`, 'redt'); return; }
    ui.armed = null;
    const g = recycleGain(it);
    state.inv = state.inv.filter(x => x.uid !== it.uid);
    for (const m in g) state.mats[m] = (state.mats[m] || 0) + g[m];
    save(); render();
    toast(`${icon('recycle', 'w-4 h-4')}<span>Recyclé : ${Object.entries(g).filter(([, n]) => n).map(([m, n]) => `${n} ${MATERIALS[m].name.toLowerCase()}`).join(', ')}</span>`);
  },
  'rune-pick': el => { ui.runeFor = ui.runeFor === el.dataset.uid ? null : el.dataset.uid; render(); },
  'rune-set': el => {
    const it = invItem(el.dataset.uid), k = el.dataset.k; ui.armed = null;
    if (!it || !state.runes || !(state.runes[k] > 0) || (it.runes || []).length >= runeSlots(it)) return;
    state.runes[k]--; it.runes = (it.runes || []).concat([k]); ui.runeFor = null; _bm = null; save(); render();
    const [t, r] = k.split(':'); toast(`${icon(RUNE_TYPES[t].icon, 'w-4 h-4')}<span><b style="color:${RARITIES[+r].color}">${esc(RUNE_TYPES[t].name)}</b> sertie dans ${esc(itemName(it))}</span>`, 'umbra');
  },
  'buy-rune': el => {
    const t = el.dataset.t, r = Number(el.dataset.r); if (!RUNE_TYPES[t]) return;
    if (r === 7) { const A = typeof arenaState === 'function' ? arenaState() : null; if (!A || A.glory < RUNE_GLORY_PRICE) return; A.glory -= RUNE_GLORY_PRICE; }
    else { const p = RUNE_PRICES[r]; if (p === undefined || kinahs() < p) return; state.buys.push({ id: 'r:' + t + r, price: p, date: dk() }); }
    state.runes = state.runes || {}; state.runes[runeKey(t, r)] = (state.runes[runeKey(t, r)] || 0) + 1; save(); render();
    toast(`${icon(RUNE_TYPES[t].icon, 'w-4 h-4')}<span>${esc(RUNE_TYPES[t].name)} <b style="color:${RARITIES[r].color}">${RARITIES[r].name}</b> achetée (Arsenal → sertir sur un objet Légendaire et plus)</span>`, 'umbra');
  },
  'chip-eq': el => {
    const k = el.dataset.k;
    if (state.chipEq.length >= CHIP_SLOTS || chipFree(k) <= 0) return;
    act(() => { state.chipEq.push(k); });
  },
  'chip-uneq': el => { const i = Number(el.dataset.i); act(() => { state.chipEq.splice(i, 1); }); },
  'chip-fuse': el => {
    const t = el.dataset.t, r = Number(el.dataset.r), k = chipKey(t, r), cost = fuseCost(r);
    if (r >= 6 || chipFree(k) < cost) return;
    act(() => { state.chips[k] -= cost; addChip(t, r + 1); });
    toast(`${icon('cpu', 'w-4 h-4')}<span>Fusion : puce ${esc(CHIP_TYPES[t].name)} <b style="color:${RARITIES[r + 1].color}">${RARITIES[r + 1].name}</b></span>`, 'umbra');
  },
  'cosm-eq': el => { const id = el.dataset.id || null; if (id && !cosmOwned(id)) return; state.cosmEq[el.dataset.c] = id; save(); render(); },

  /* Boutique */
  'buy-gear': el => {
    const t = el.dataset.t, r = Number(el.dataset.r), p = gearPrice(r);
    if (!WEAPON_TYPES[t] && !ARMOR_TYPES[t]) return;
    if (r > 6 || kinahs() < p) return;
    const it = makeItem(r, t);
    state.inv.push(it); state.buys.push({ id: 'g:' + it.uid, price: p, date: dk() });
    save(); render();
    toast(`${icon('package-check', 'w-4 h-4')}<span>Obtenu : <b style="color:${RARITIES[r].color}">${esc(itemName(it))}</b> (Arsenal)</span>`);
  },
  'buy-chip': el => {
    const t = el.dataset.t, r = Number(el.dataset.r), p = CHIP_PRICES[r];
    if (p === undefined || kinahs() < p) return;
    addChip(t, r); state.buys.push({ id: 'c:' + t + r, price: p, date: dk() });
    save(); render();
    toast(`${icon('cpu', 'w-4 h-4')}<span>Puce ${esc(CHIP_TYPES[t].name)} ${RARITIES[r].name} ajoutée.</span>`, 'umbra');
  },
  'buy-missing': el => {
    const it = invItem(el.dataset.uid); if (!it) return; const mc = missingCost(upgradeCost(it));
    if (!mc.k || kinahs() < mc.k) return;
    for (const m in mc.miss) state.mats[m] = (state.mats[m] || 0) + mc.miss[m];
    state.buys.push({ id: 'm:auto', price: mc.k, date: dk() }); save(); render();
    toast(`${icon('package-check', 'w-4 h-4')}<span>Matériaux achetés : ${Object.entries(mc.miss).map(([m, n]) => n + ' ' + esc(MATERIALS[m].name.toLowerCase())).join(', ')}</span>`);
  },
  'buy-mat': el => {
    const p = MAT_PACKS.find(x => x.id === el.dataset.id);
    if (!p || kinahs() < p.price) return;
    state.mats[p.m] = (state.mats[p.m] || 0) + p.n; state.buys.push({ id: 'm:' + p.id, price: p.price, date: dk() });
    save(); render();
  },
  'buy-cosm': el => {
    const c = COSMETICS.find(x => x.id === el.dataset.id);
    if (c && c.how.type === 'glory' && !cosmOwned(c.id)) { const A = typeof arenaState === 'function' ? arenaState() : null; if (!A || A.glory < WSKIN_GLORY) return; A.glory -= WSKIN_GLORY; state.cosm[c.id] = dk(); save(); render(); return; }
    if (!c || !c.price || cosmOwned(c.id) || kinahs() < c.price) return;
    state.cosm[c.id] = dk(); state.buys.push({ id: 'x:' + c.id, price: c.price, date: dk() });
    save(); render();
  },

  /* Expéditions */
  'exp-start': el => {
    const z = ZONES.find(x => x.id === el.dataset.z);
    if (!z || curLevel() < z.level || keysLeft() < 1) return;
    ui.expResult = null; ui.lastFight = null; ui.battle = null;
    ui.exp = { kind: 'zone', zone: z.id, foe: pickFoe(z), cost: 1 };
    render();
  },
  'exp-monarch': el => {
    const i = Number(el.dataset.i), m = MONARCHS[i];
    if (!monarchUnlocked(i) || keysLeft() < 3) return;
    ui.expResult = null; ui.lastFight = null; ui.battle = null;
    ui.exp = { kind: 'monarch', foe: { ...m, rank: 'Hors norme', tier: 'monarque' }, cost: 3 };
    render();
  },
  'exp-absolute': () => {
    if (!absoluteUnlocked() || keysLeft() < 5) return;
    ui.expResult = null; ui.lastFight = null; ui.battle = null;
    ui.exp = { kind: 'absolute', foe: { ...ABSOLUTE, rank: 'Absolu', tier: 'absolu' }, cost: 5 };
    render();
  },
  'exp-close': () => { if (ui.battle && !ui.battle.over && ui.battle.kind === 'exp') return; ui.exp = null; ui.expResult = null; ui.battle = null; render(); },
  'open-chronicle': el => {
    const m = [...MONARCHS, ABSOLUTE].find(x => x.id === el.dataset.id);
    if (!m || !state.codex[m.id] || !state.codex[m.id].kills) return;
    showOverlay(`
      <div class="sys danger pop w-full max-w-md" style="padding:20px">
        <div class="flex items-center justify-between gap-2 mb-3"><span class="sys-title r">${icon('crown', 'w-4 h-4')}Chronique · clé ${esc(m.key)}</span>
          <button type="button" class="ibtn" data-a="close-overlay" aria-label="Fermer">${icon('x', 'w-4 h-4')}</button></div>
        <h3 class="f-display text-lg font-bold">${esc(m.name)}</h3>
        <div class="prose mt-3" style="max-height:60vh;overflow:auto">${m.chronicle.map(p => `<p>${esc(p)}</p>`).join('')}</div>
      </div>`);
  }
});

/* ---------- Pourquoi ma puissance a changé : on garde la dernière configuration et on explique chaque écart ---------- */
const PW_SLOT = { main: 'Main droite', off: 'Main gauche', casque: 'Casque', plastron: 'Plastron', jambieres: 'Jambières', bottes: 'Bottes', bijou: 'Bijou', ceinture: 'Ceinture' };
function powerSig() {
  const g = {}; for (const s in PW_SLOT) { const it = invItem((state.gear || {})[s]); g[s] = it ? itemName(it) + ((it.runes || []).length ? ` (${it.runes.length} rune${it.runes.length > 1 ? 's' : ''})` : '') : '—'; }
  return { cls: state.profile && state.profile.cls, g, a: [state.alloc.str, state.alloc.agi, state.alloc.end, state.alloc.int].join('/'), c: JSON.stringify(state.cosmEq || {}), m: (state.equip || {}).mount || '', ch: (state.chipEq || []).join(','), lvl: levelInfo(totals().xp).level };
}
function powerTrack(cp) {
  const S = powerSig(), last = state.powerLast; state.powerLog = state.powerLog || [];
  if (last && last.p !== cp.power && last.S) { const why = [], o0 = last.o || {}, o = cp.o, pc = v => String(Math.round(v * 1000) / 10).replace('.', ',');
    if (last.S.cls !== S.cls) why.push(`classe : ${(CLASSES[last.S.cls] || {}).name || '?'} → ${(CLASSES[S.cls] || {}).name || '?'}`);
    for (const k in PW_SLOT) if (last.S.g[k] !== S.g[k]) why.push(`${PW_SLOT[k]} : ${last.S.g[k]} → ${S.g[k]}`);
    if (last.S.a !== S.a) why.push(`points F/A/E/I : ${last.S.a} → ${S.a}`);
    if (last.S.c !== S.c) why.push('cosmétiques ou skins d’armes changés (chacun ajoute un % à toutes les statistiques)');
    if (last.S.m !== S.m) why.push('monture changée (elle ajoute un % à toutes les statistiques)');
    if (last.S.ch !== S.ch) why.push('puces changées');
    if (last.S.lvl !== S.lvl) why.push(`niveau ${last.S.lvl} → ${S.lvl}`);
    if (!why.length) why.push('statistiques d’entraînement, trophées ou liens');
    const comp = []; const f = x => Math.min(0.95, (x.hpp || 0) * (1 + (x.crit || 0) * (x.fr || 0) / 100));
    if (o0.aps !== o.aps) comp.push(`attaques/s ${String(o0.aps).replace('.', ',')} → ${String(o.aps).replace('.', ',')}`);
    if (f(o0) !== f(o)) comp.push(`% des PV par attaque ${pc(f(o0))} → ${pc(f(o))} %`);
    if (o0.crit !== o.crit) comp.push(`critique ${pc(o0.crit || 0)} → ${pc(o.crit)} %`);
    if (o0.exec !== o.exec) comp.push(`exécution ${pc(o0.exec || 0)} → ${pc(o.exec)} %`);
    if (o0.tough !== o.tough) comp.push(`ténacité ×${String(o0.tough).replace('.', ',')} → ×${String(o.tough).replace('.', ',')}`);
    if (o0.dodge !== o.dodge) comp.push(`esquive ${pc(o0.dodge || 0)} → ${pc(o.dodge)} %`);
    if (o0.rico !== o.rico) comp.push(o.rico ? 'ricochet gagné' : 'ricochet perdu');
    state.powerLog.unshift({ t: Date.now(), from: last.p, to: cp.power, why: why.slice(0, 6), comp });
    state.powerLog.length = Math.min(state.powerLog.length, 8); }
  if (!last || last.p !== cp.power || JSON.stringify(last.S) !== JSON.stringify(S)) { state.powerLast = { p: cp.power, o: cp.o, S }; try { save(); } catch (e) {} }
}
function viewPowerLog() {
  const L = state.powerLog || []; if (!L.length) return '';
  const fmt = n => n.toLocaleString('fr-FR');
  return `<details class="mt-2 pw-log"><summary class="label" style="cursor:pointer">Pourquoi ma puissance a changé ${icon('chevron-down', 'w-3.5 h-3.5 inline -mt-0.5')}</summary>${L.slice(0, 3).map(x => { const d = x.to - x.from, up = d > 0; return `<div class="text-[11px] mt-1" style="border-left:2px solid ${up ? '#4ade80' : '#ff4d6d'};padding-left:6px"><b class="f-mono" style="color:${up ? '#4ade80' : '#ff8a9a'}">${fmt(x.from)} → ${fmt(x.to)} (${up ? '+' : ''}${Math.round(d / Math.max(1, x.from) * 100)} %)</b> · ${x.why.map(esc).join(' · ')}${x.comp.length ? `<div class="muted">${x.comp.map(esc).join(' · ')}</div>` : ''}</div>`; }).join('')}</details>`;
}
/* carte « Puissance de combat » (Statut et Royaume) */
function viewPowerCard(c) {
  c = c || playerCombat();
  { const cp0 = combatPower(c); powerTrack(cp0); }
  const cp = combatPower(c), o = cp.o, fpct = Math.min(0.95, o.hpp * (1 + o.crit * o.fr / 100)), pc = v => String(Math.round(v * 1000) / 10).replace('.', ',');
  /* DPS : dégâts bruts (Attaque × critique moyen × attaques/s), plus la part en % des PV qui domine aux vagues hautes */
  const dpsRaw = Math.round(o.atk * (1 + o.crit * (o.cdm - 1)) * o.aps), pctSec = 1 - Math.pow(1 - fpct, o.aps), Nk = cpHits(cp.power, o), kps = isFinite(Nk) ? String(Math.round(o.aps / Nk * (o.rico ? 2.5 : 1) * 10) / 10).replace('.', ',') : '';
  const WBL = typeof WB_MANUAL !== 'undefined' ? WB_MANUAL.map((R, i) => ({ ...R, i })) : [], below = WBL.filter(R => R.lvl <= cp.power).length, next = WBL.find(R => R.lvl > cp.power);
  return `<div class="card mt-3" style="border-color:rgba(0,240,255,.45)"><div class="flex items-center justify-between gap-2"><div><div class="label">Puissance de combat</div><div class="f-mono text-3xl glow" style="overflow-wrap:anywhere">${cp.power.toLocaleString('fr-FR')}</div></div><div class="text-right text-[11px] muted">même échelle que les vagues d’arène<br>et les Éternels (puissance 200 à 100 000)</div></div>
    <div class="grid grid-cols-2 gap-2 mt-2 text-[12px] pw-grid">
      <div><div class="label">Dégâts par seconde</div><b class="f-mono glow" style="font-size:15px" title="${dpsRaw.toLocaleString('fr-FR')} dégâts/s">${dpsRaw >= 1e7 ? fmtShort(dpsRaw) : dpsRaw.toLocaleString('fr-FR')}</b> dégâts/s<br>+ ${pc(pctSec)} % des PV de la cible par seconde (${pc(fpct)} % par attaque)${o.exec ? ` · exécution sous ${pc(o.exec)} %` : ''}${o.rico ? ' · ricochet' : ''}${kps ? `<br>à votre puissance : ${kps} ennemi${kps === '1' ? '' : 's'} abattu${kps === '1' ? '' : 's'} par seconde` : ''}</div>
      <div><div class="label">Coups critiques</div>${pc(o.crit)} % de chance · dégâts ×${String(o.cdm).replace('.', ',')}${o.fr ? ` · Fracture +${o.fr} %` : ''}</div>
      <div><div class="label">Vitesse d’attaque</div>${String(o.aps).replace('.', ',')} parts de dégâts par seconde (classe et ceinture : l’arme ne change pas ce chiffre)</div>
      <div><div class="label">Résistance</div>ténacité ×${String(o.tough).replace('.', ',')} · ${c.hp.toLocaleString('fr-FR')} PV · esquive ${pc(o.dodge)} %</div>
    </div>
    <div class="text-[11px] muted mt-2">Vous tenez la vague ${cp.power.toLocaleString('fr-FR')} de l’arène. ${below ? `Plus puissant que ${below} Éternel${below > 1 ? 's' : ''} sur 16.` : 'Plus faible que tous les Éternels.'}${next ? ` Prochain : ${esc(next.n)} (${next.lvl.toLocaleString('fr-FR')}).` : ''} Le combat automatique et l’esquive ne sont pas comptés : ils peuvent faire tomber plus fort que soi.</div>${viewPowerLog()}</div>`;
}
function viewCombatSummary() {
  const c = playerCombat();
  const cell = (ic, label, val, sub) => `<div class="border border-[#26262f] py-2 px-1 min-w-0 text-center"><div class="glow flex justify-center">${icon(ic, 'w-4 h-4')}</div><div class="f-mono text-base mt-0.5">${val}</div><div class="text-[10px] muted truncate">${label}</div>${sub ? `<div class="text-[10px] muted truncate">${sub}</div>` : ''}</div>`;
  const b = boosts();
  return viewPowerCard(c) + `<div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
      ${cell('swords', 'Attaque (Force)', c.atk, `Force ${c.F}`)}
      ${cell('heart-pulse', 'PV (Endurance)', c.hp, `défense ${c.def} · ténacité ×${String(c.tough).replace('.', ',')}`)}
      ${cell('zap', 'Critique (Agilité)', Math.round(c.crit * 100) + ' %', `×${c.critDmg.toFixed(2)} · esquive ${Math.round(c.dodge * 100)} %`)}
      ${cell('brain', 'Gains (Intel.)', '+' + b.xp + ' %', `XP et kinahs`)}
    </div>
    <div class="text-[11px] muted mt-2">Ténacité ×${String(c.tough).replace('.', ',')} : un coup ennemi ne retire qu’une part de vos PV max ; vous encaissez environ <b class="glow">${Math.floor(12 * c.tough)} coups à la vague 1000</b> et ${Math.floor(6 * c.tough)} à la vague 2500 (davantage plus tôt). Elle monte avec la rareté et l’amélioration du casque, du plastron et des jambières, un bouclier, et votre Endurance (comparée à votre niveau).</div>
    <div class="text-[11px] muted mt-2">Bonus de gains : Intelligence +${b.parts ? b.parts.int : 0} %, monture +${b.parts ? b.parts.mount : 0} %, cosmétiques +${b.parts ? b.parts.cosm : 0} %, puces et trophées inclus.${cosmStatPct() ? ` · cosmétiques, monture et reliques : <b class="glow">+${cosmStatPct()} %</b> sur toutes les statistiques` : ''}</div>`;
}

/* ==========================================================================
   CONSEIL — discussion IA avec Pernos, Daminu et la Maison de l'Ombre
   Mode unique : appel direct de l'API Anthropic depuis le navigateur, avec la clé
   que chaque joueur enregistre sur son propre appareil (ses crédits, pas les vôtres).
   ========================================================================== */

const AI_KEY = 'systeme-chasseur-ai';
const AI_MODELS = [
  ['claude-sonnet-5-5', 'Claude Sonnet 5.5 (recommandé)'],
  ['claude-haiku-5-5', 'Claude Haiku 5.5 (plus économique)'],
  ['claude-opus-5-5', 'Claude Opus 5.5 (le plus fin, plus cher)']
];
function aiCfg() {
  try { return { model: 'claude-sonnet-5-5', key: '', ...(JSON.parse(localStorage.getItem(AI_KEY) || '{}')), mode: 'direct' }; }
  catch (e) { return { mode: 'direct', model: 'claude-sonnet-5-5', key: '' }; }
}
function aiSave(cfg) { try { localStorage.setItem(AI_KEY, JSON.stringify(cfg)); } catch (e) {} }

/* ---------- Disponibilité des personnages ---------- */
function chatAvailable(id) {
  if (id === 'pernos' || id === 'daminu') return { ok: true };
  if (hasF(id)) return { ok: true };
  if (state.story.met[id]) return { ok: false, why: 'Recrutez ce membre pour lui parler.' };
  return { ok: false, why: 'Pas encore rencontré dans le récit.' };
}

/* ---------- Contexte envoyé à l'IA ---------- */
const TOME_HINTS = {
  II: { A: 'Vaincre Ruben puis lui tendre du pain.', B: 'Vaincre Ruben puis prendre la clé et garder le Grenier.', C: 'Vaincre Ruben puis l’achever.', D: 'Au chapitre V, accepter l’échange proposé (Odile reste au Grenier).' },
  III: { A: 'Au chapitre IV, se taire et laisser Hélène parler à Ilse ; au chapitre VII, faire signe à Ysolde.', B: 'Au chapitre VII, briser le cœur de glace.', C: 'Faire signe à Ysolde alors qu’Hélène n’a pas parlé à Ilse au chapitre IV.', D: 'Au chapitre V, accepter le repos proposé par Ilse.' },
  IV: { A: 'Au chapitre II, refuser de tenir le pont ; au chapitre VI, refuser de choisir (« Je les porte tous ») ; au chapitre VII, laver les mains d’Oste.', B: 'Au chapitre VII, achever Oste.', C: 'Au chapitre II, accepter de tenir le pont de la rue des Cloches pour l’Association.', D: 'Au chapitre VI, prendre le crayon et choisir trois noms.' },
  V: { A: 'Au chapitre III, ne pas livrer Mira ; au chapitre V, refuser le masque et monter sur scène avec son propre visage ; au chapitre VII, demander son nom à Célestin.', B: 'Au chapitre VII, briser le masque de Célestin.', C: 'Au chapitre III, porter les rapports de Mira à Danet.', D: 'Au chapitre V, mettre le masque que tend Célestin.' },
  VI: { A: 'Au chapitre IV, refuser le bras de fer ; au chapitre VII, faire poser la cale de Théo et rester avec Coll.', B: 'Au chapitre VII, briser la clé dans la poitrine de Coll.', C: 'Au chapitre VII, arracher la clé et faire tourner l’Est soi-même.', D: 'Au chapitre IV, accepter le bras de fer que propose Coll.' },
  VII: { A: 'Au chapitre VI, refuser de donner un nom ; au chapitre VII, faire signe à Hélène.', B: 'Au chapitre VII, briser la clé de Morgane.', C: 'Au chapitre VI, donner un nom du registre.', D: 'Au chapitre VI, donner votre propre nom.' },
  VIII: { A: 'Au chapitre II, refuser la main du comte ; au chapitre V, refuser que Zacharie paie ; au chapitre VII, ne pas le lâcher.', B: 'Au chapitre VII, faire signe à Mira (le pieu).', C: 'Au chapitre II, prendre la main du comte.', D: 'Au chapitre V, laisser Zacharie donner ses années.' },
  IX: { A: 'Au chapitre II, refuser la robe ; au chapitre IV, refuser qu’Anselme porte tout ; au chapitre VII, descendre vers Thule au lieu de prononcer la peine.', B: 'Au chapitre VII, prononcer la peine.', C: 'Au chapitre II, prendre la robe.', D: 'Au chapitre IV, laisser Anselme porter toutes les chaînes.' },
  X: { A: 'Au chapitre II, ne pas prendre la main de l’échelle ; au chapitre VII, tendre la main ouverte à la flamme.', B: 'Au chapitre VII, laisser Séraphine éteindre la flamme.', C: 'Au chapitre II, prendre la main et monter.', D: 'Au chapitre VII, laisser Ysolde rester au fond.' },
  XI: { A: 'Au chapitre IV, ne pas prendre la main du Reflet ; au chapitre VI, laisser Théo frapper ; au chapitre VII, laisser la voix tenir les câbles.', B: 'Au chapitre VI, prendre la force du Reflet.', C: 'Au chapitre IV, prendre sa main et les câbles.', D: 'Au chapitre VII, prendre les câbles vous-même.' }
};
function chatContext(id) {
  const t = totals(), li = levelInfo(t.xp), rk = rankOf(li.level), v = statValues(t), today = dk();
  const r = dayResult(today), d = state.days[today] || {}, N = state.nutrition, G = state.story;
  const L = [];
  L.push(`Date : ${prettyDate(today)}.`);
  L.push(`Joueur : ${state.profile.name}, classe ${curClass().name} (${loadoutText(state.profile.cls)}), niveau ${li.level}, rang ${rk.r}, ${t.xp} XP. Force ${v.str}, Agilité ${v.agi}, Endurance ${v.end}, Intelligence ${v.int}. Kinahs ${kinahs()}. Clés de Faille ${keysLeft()}. Série de quêtes accomplies : ${streak()} jours.`);
  L.push(`Aujourd’hui : séance ${r.plan.sid ? `${r.plan.name}${r.required ? '' : ' (facultative)'}, ${r.exDone}/${r.n} exercices validés` : 'repos'}. Mangé : ${macroLine(r.nu.eat)}. Objectifs : ${N.kcal} kcal ±${N.kcalTol} %, protéines ${N.p.g} g (${MODE_LABEL[N.p.mode]}), glucides ${N.c.g} g (${MODE_LABEL[N.c.mode]}), lipides ${N.f.g} g (${MODE_LABEL[N.f.mode]}). Objectifs atteints : ${r.nu.metCount}/4. Eau : ${(d.water || 0)} L (prime de ${WATER_K} kinahs entre ${WATER_MIN} et ${WATER_MAX} L). Sommeil : ${d.sleep != null ? d.sleep + ' h' : 'non renseigné'} (prime de ${SLEEP_K} kinahs à ${SLEEP_MIN} h ou plus). Quête du jour : ${r.success ? 'accomplie' : 'en cours'}.`);
  const foods = (d.food || []).map(e => e.per ? `${e.name} ${e.g} g` : e.name);
  if (foods.length) L.push(`Repas du jour : ${foods.join(', ')}.`);
  const last7 = [];
  for (let i = 1; i <= 7; i++) { const k = addDays(today, -i); const rr = dayResult(k); const dd = state.days[k] || {}; last7.push(`${k} : ${rr.plan.sid ? rr.plan.name + (rr.workoutDone ? ' faite' : ` ${rr.exDone}/${rr.n}`) : 'repos'}, macros ${rr.nu.metCount}/4, ${Math.round(rr.nu.eat.kcal)} kcal${dd.water ? `, eau ${dd.water} L` : ''}${dd.sleep != null ? `, sommeil ${dd.sleep} h` : ''}`); }
  L.push(`7 derniers jours : ${last7.join(' ; ')}.`);
  const P = state.program;
  L.push(`Programme « ${P.name} » — semaine : ${[1, 2, 3, 4, 5, 6, 0].map(dw => `${DAY_SHORT[dw]} ${P.week[dw] && P.sessions[P.week[dw]] ? P.sessions[P.week[dw]].name : 'repos'}`).join(', ')}.`);
  for (const sid of P.order) {
    const S = P.sessions[sid]; if (!S) continue;
    L.push(`Séance ${S.name} : ${S.ex.map(e => { const lw = lastWeight(e.id, addDays(today, 1)); return `${e.name} ${e.setsMin}-${e.setsMax}×${e.repMin}-${e.repMax}${lw ? ` (dernière charge ${lw.kg} kg)` : ''}`; }).join(' ; ')}.`);
  }
  const T = curTome(), S = TS(T.id), node = ALL_NODES[S.node];
  L.push(`Récit : tome en cours ${T.num} « ${T.title} », ${node ? chapOf(node).title : ''}. Chapitre le plus avancé du Tome I : ${CHAPTERS[G.reached || 0].title}. Fins du Tome I vues : ${Object.keys(G.endings).join(', ') || 'aucune'}. Issues des autres tomes : ${Object.keys(G.tomeEnds || {}).join(', ') || 'aucune'}. Archives : ${Object.keys(G.archives).length}/${Object.keys(ARCHIVES).length}.`);
  L.push(`Maison : ${FOLLOWER_ORDER.filter(hasF).map(f => `${FOLLOWERS[f].name} (lien ${bondOf(f)})`).join(', ') || 'personne encore'}. Rencontrés non recrutés : ${FOLLOWER_ORDER.filter(f => G.met[f] && !hasF(f)).map(f => FOLLOWERS[f].name).join(', ') || 'aucun'}.`);
  const gear = Object.entries(state.gear).map(([s, u]) => { const it = invItem(u); return it ? `${itemName(it)} +${it.up || 0} (${RARITIES[it.r].name})` : null; }).filter(Boolean);
  L.push(`Équipement : ${gear.join(', ') || 'aucun'}. Trophées : ${boosts().trophies.length}/${TROPHIES.length}.`);

  if (FOLLOWERS[id]) {
    const F = FOLLOWERS[id], open = lettersOpen(id);
    L.push(`\nTa fiche : ${F.name}, ${F.role}. ${F.desc} Ton rôle dans la Maison : ${F.bonus}. Ton lien avec le Joueur : ${bondOf(id)}.`);
    const read = F.letters.map((l, i) => ({ l, i })).filter(x => G.read[`${id}:${x.i}`]);
    if (read.length) L.push(`Lettres que tu as écrites et que le Joueur a lues :\n${read.map(x => `— « ${x.l.t} » : ${x.l.body.replace(/\n+/g, ' ')}`).join('\n')}`);
    else L.push('Le Joueur n’a encore lu aucune de tes lettres : reste évasif sur ton passé douloureux.');
    if (open > read.length) L.push(`Il a ${open - read.length} lettre(s) de toi disponible(s) mais pas encore lue(s).`);
    const facts = typeof personFacts === 'function' ? personFacts(LORE_PEOPLE.find(p => p.id === id) || { id }).filter(f => f.ok).map(f => f.t) : [];
    if (facts.length) L.push(`Ce que le Joueur a découvert à ton sujet dans le récit (tu peux en parler, c’est votre histoire commune) : ${facts.join(' ')}`);
    const T4 = TOMES.IV ? Object.keys(state.story.tomeEnds || {}).filter(k => k.startsWith('IV-')) : [];
    if (T4.length) L.push(`Le Joueur a terminé le Tome IV (issue ${T4.join(', ')}).`);
  }

  if (id === 'daminu') { L.push(chatLoreDigest()); L.push(bibleFullText()); if (typeof GUIDE !== 'undefined') L.push('=== GUIDE DU JEU (complet) ===\n' + GUIDE.map(g => `## ${g.t}\n${(g.p || []).join('\n')}`).join('\n')); }
  return L.join('\n');
}
function chatLoreDigest() {
  const G = state.story, L = ['\n=== SAVOIR DE DAMINU ==='];
  L.push(`Règles : l’XP vient seulement des efforts réels (séance complète 375 XP, macros 4/4 375 XP). Kinahs = XP du jour, +100 si quête accomplie, +${WATER_K} eau, +${SLEEP_K} sommeil, plus combats et expéditions ; tous les bonus de kinahs en % (Maison, équipement, puces, Odile) s’appliquent sur tout, primes comprises. Pénalité d’une quête échouée : −150 XP, −100 kinahs (réduite par Ysolde et la puce Garde). Points de statistiques par niveau : 3 au rang E, +3 à chaque rang (6 au D, 9 au C, 12 au B, 15 au A, 18 au S). Les bonus d’XP en % s’appliquent à toute l’XP du jour. Rangs : E niv. 1, D 10, C 20, B 35, A 50, S 70. Clés de Faille : +3 par quête accomplie, +1 séance complète, +1 macros 4/4.`);
  L.push(`Classes : ${Object.values(CLASSES).map(c => `${c.name} (${c.loadouts.map(l => l.join('+')).join(' / ')})`).join(' ; ')}.`);
  L.push(`Raretés : ${RARITIES.map(x => `${x.name} niv. ${x.lvl}`).join(', ')}. Amélioration jusqu’à +4 avec ferraille, éther, cœur de Faille, cendre de Monarque. Puces : ${Object.values(CHIP_TYPES).map(c => c.name).join(', ')} ; 12 emplacements ; fusion 2 Communes → 1 Raffinée, 3 → Rare, … 7 Mythiques → 1 Éternelle.`);
  L.push(`Zones d’expédition : ${ZONES.map(z => `rang ${z.rank} niv. ${z.level} (${z.name})`).join(' ; ')}. Monarques (3 clés, dans l’ordre) : ${MONARCHS.map(m => `${m.short} niv. ${m.level}`).join(', ')}. Être absolu : niv. 70 et les neuf Monarques vaincus.`);
  L.push(`Boutique : armurerie (Commun à Épique), puces (Commun à Rare), matériaux, cosmétiques, montures (${SHOP.filter(i => i.cat === 'mount').map(i => `${i.name} ${RARITIES[i.r].name}`).join(', ')}), instruments (+1 lien chacun), demeures (capacité de la Maison).`);
  L.push(`Membres recrutables : ${FOLLOWER_ORDER.map(f => `${FOLLOWERS[f].name} (${FOLLOWERS[f].role}, ${FOLLOWERS[f].price} kinahs, ${FOLLOWERS[f].bonus}) ${hasF(f) ? '[recruté]' : G.met[f] ? '[rencontré]' : '[inconnu]'}`).join(' ; ')}. Lettres : 3 par membre, aux liens 0, 3 et 8.`);
  L.push(`Trophées : ${TROPHIES.map(t => `${t.name} — ${t.desc} — bonus ${JSON.stringify(t.bonus)}${t.cosmetic ? ` — cosmétiques ${t.cosmetic.map(id => COSMETICS.find(c => c.id === id).name).join(', ')}` : ''} ${boosts().trophies.includes(t.id) ? '[obtenu]' : ''}`).join(' ; ')}.`);
  L.push(`Cosmétiques : ${COSMETICS.map(c => `${c.name} (${RARITIES[c.r].name}, +${COSMETIC_PCT[c.r]} %, ${cosmSource(c)}) ${cosmOwned(c.id) ? '[possédé]' : ''}`).join(' ; ')}.`);
  for (const T of Object.values(TOMES)) {
    const S = TS(T.id), open = tomeAvailable(T);
    L.push(`Tome ${T.num} « ${T.title} » ${open ? '' : `(fermé : ${T.availTxt})`} — chapitres : ${T.chapters.map(c => `${c.title} niv. ${c.level}${c.n <= (S.reached || 0) ? ' [atteint]' : ''}`).join(' ; ')}.`);
    const hints = T.id === 'I' ? ENDING_HINTS : (TOME_HINTS[T.id] || {});
    L.push(`Fins/issues du Tome ${T.num} : ${Object.entries(T.endings).map(([k, e]) => { const seen = T.id === 'I' ? G.endings[k] : (G.tomeEnds || {})[`${T.id}-${k}`]; return `${k} « ${e.title} » ${seen ? '[vue]' : '[non vue]'} — condition : ${hints[k] || '?'}`; }).join(' ; ')}.`);
  }
  const f = G.flags;
  L.push(`Choix actuels du Joueur dans le Tome I : ordres donnés ${f.dom || 0}, gestes de compassion ${f.comp || 0}, promesse à Séraphine ${f.promise || 'pas encore'}, ombres des Murmures ${f.freed === true ? 'libérées' : f.freed === false ? 'gardées' : 'pas encore'}, voix du Cœur écoutée ${f.truth === true ? 'oui' : f.truth === false ? 'non (laboratoire détruit)' : 'pas encore'}, Abel ${f.abel || 'pas encore affronté'}. Voie scellée (fin L) : ${checkReq(TRUE_REQ) ? 'ouverte' : 'fermée pour l’instant'}. Condition complète : ${TRUE_HINT}`);
  return L.join('\n');
}

/* ---------- Corpus du lore pour Daminu : chaque phrase, chaque archive ---------- */
let _corpus = null;
function paraText(x) { return typeof x === 'string' ? x : x && x.sys ? `[Système] ${x.sys}` : x && x.t ? `[variante selon les choix] ${x.t}` : ''; }
function chunkText(parts, max = 1500) {
  const out = []; let cur = '';
  for (const p of parts) {
    if (!p) continue;
    if (cur && cur.length + p.length > max) { out.push(cur); cur = ''; }
    cur += (cur ? '\n' : '') + p;
  }
  if (cur) out.push(cur);
  return out;
}
function loreCorpus() {
  if (_corpus) return _corpus;
  const C = [];
  for (const T of Object.values(TOMES)) for (const n of Object.values(T.nodes)) {
    const ch = T.chapters.find(c => c.n === n.ch) || {};
    const parts = (n.text || []).map(paraText);
    if (n.combat) parts.push(`[Combat : ${n.combat.name}, puissance ${cpFromOld(n.combat.power)}] ${n.combat.win || ''}`);
    for (const a of n.after || []) parts.push(paraText(a));
    if (n.choices) parts.push('Choix proposés : ' + n.choices.map(c => `« ${c.t} »`).join(' / '));
    const head = `Tome ${T.num} « ${T.title} » · ${ch.title || ''}${n.ending ? ` · ISSUE ${n.ending} « ${T.endings[n.ending].title} »` : ''} · passage ${n.id}`;
    const known = () => !!(state.story.seen || {})[n.id] || !!(n.ending && (T.id === 'I' ? state.story.endings[n.ending] : (state.story.tomeEnds || {})[`${T.id}-${n.ending}`]));
    const chunks = chunkText(parts);
    chunks.forEach((txt, i) => C.push({ kind: 'node', id: n.id, head: head + (chunks.length > 1 ? ` (partie ${i + 1}/${chunks.length})` : ''), text: txt, known }));
  }
  for (const [k, a] of Object.entries(ARCHIVES)) C.push({ kind: 'arch', id: k, head: `Archive ${k} « ${a.t} »`, text: a.body, known: () => !!state.story.archives[k] });
  for (const [f, F] of Object.entries(FOLLOWERS)) F.letters.forEach((l, i) => C.push({ kind: 'letter', id: `${f}:${i}`, head: `Lettre ${i + 1} de ${F.name} « ${l.t} » (${F.role} ; ${F.desc})`, text: l.body, known: () => !!state.story.read[`${f}:${i}`] }));
  for (const b of BESTIARY) C.push({ kind: 'beast', id: b.id, head: `Bestiaire : ${b.name} (rang ${b.rank}, ${b.place}, puissance ${cpFromOld(b.power)})`, text: `${b.origin} ${b.story}`, known: () => true });
  for (const m of [...MONARCHS, ABSOLUTE]) C.push({ kind: 'monarch', id: m.id, head: `Monarque : ${m.name} (clé ${m.key}, ${m.place}, niveau ${m.level}, puissance ${m.power})`, text: `${m.origin} ${m.story}\n${(m.chronicle || []).join('\n')}`, known: () => true });
  if (typeof LORE_PEOPLE !== 'undefined') for (const p of LORE_PEOPLE) C.push({ kind: 'person', id: p.id, head: `Personnage : ${p.name}, ${p.role}`, text: (PEOPLE_FACTS[p.id] || []).map(([req, t]) => `${t} ${bibleOk(req) ? '[DÉCOUVERT]' : '[NON DÉCOUVERT]'}`).join(' '), known: () => true });
  if (typeof BIBLE_MD !== 'undefined') BIBLE_MD.split(/\n(?=## )/).forEach((sec, si) => {
    const title = (sec.match(/^#+ (.*)/) || [, 'Bible'])[1];
    chunkText(sec.split(/\n/), 1500).forEach((txt, i) => C.push({ kind: 'biblemd', id: `bmd${si}-${i}`, head: `Bible de travail de l’auteur · ${title} (fiche technique : peut contenir des révélations ; avertir avant de révéler ce que le Joueur n’a pas lu)`, text: txt, known: () => false }));
  });
  if (typeof GUIDE !== 'undefined') for (const g of GUIDE) C.push({ kind: 'guide', id: g.id, head: `Guide du jeu : ${g.t}`, text: (g.p || []).join('\n'), known: () => true });
  if (typeof EXERCISE_LIBRARY !== 'undefined') for (const [mu, list] of Object.entries(EXERCISE_LIBRARY)) C.push({ kind: 'guide', id: 'lib-' + mu, head: `Bibliothèque d’exercices : ${mu}`, text: (list || []).map(x => `${x.name} — ${x.sets} séries × ${x.reps}, repos ${x.rest}${x.note ? ' — ' + x.note : ''}`).join('\n'), known: () => true });
  for (const c of C) c.norm = normTxt(c.head + ' ' + c.text);
  _corpus = C;
  return C;
}
/* Synonymes simples : la question du joueur n’emploie pas toujours les mots du récit */
const LORE_SYN = {
  main: ['moignon', 'manchon'], manger: ['pain', 'nourrir', 'mange', 'soupe', 'agent', 'surveillance', 'mangiez'], nourrir: ['pain', 'mange'], choisi: ['critere', 'porteur', 'lui'],
  choix: ['critere'], fin: ['issue'], devenu: ['barque', 'depart', 'place'], mort: ['disparus', 'tombe', 'barque'], mere: ['maman'], pere: ['papa'],
  lit: ['brancardier'], cle: ['cles'], cles: ['soc', 'feutre'], officier: ['cadet', 'liste'], resonance: ['germe', 'aiguille', 'molette'],
  enveloppe: ['braille', 'mesures'], berceuse: ['notes', 'mesures', 'chanson'], dieu: ['descend', 'grace', 'ciel', 'priere', 'verset'], jesus: ['pleura', 'grace']
};
function expandQuery(q) {
  const t = qTokens(q), extra = [];
  for (const w of t) for (const k in LORE_SYN) if (w.startsWith(k)) extra.push(...LORE_SYN[k]);
  return q + ' ' + extra.join(' ');
}
const STOP = new Set('les des une que qui quoi dans pour pas plus est sont avec sur par mais ont fait comme tout tous elle elles ils lui leur leurs son ses sa mon mes ton tes vous nous cette ces cet aux est-ce quel quelle quels quelles comment pourquoi quand dont etait avait etre avoir peut faire dit dire bien tres aussi alors donc encore deja meme sans entre vers chez apres avant moi toi'.split(' '));
function normTxt(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’']/g, ' '); }
function qTokens(s) { return [...new Set(normTxt(s).split(/[^a-z0-9]+/).filter(w => w.length >= 3 && !STOP.has(w)))]; }
function loreRetrieve(query, budget = 40000) {
  const C = loreCorpus(), toks = qTokens(expandQuery(query));
  if (!toks.length) return '';
  const df = {};
  for (const t of toks) df[t] = C.filter(c => c.norm.includes(t)).length || 1;
  const avg = C.reduce((x, c) => x + c.norm.length, 0) / C.length;
  const scored = C.map(c => {
    let sc = 0;
    const head = normTxt(c.head), lenN = 0.25 + 0.75 * c.norm.length / avg;
    for (const t of toks) {
      const stem = t.length > 5 ? t.slice(0, t.length - 1) : t;
      const re = new RegExp('\\b' + stem.replace(/[^a-z0-9]/g, ''), 'g');
      const m = (c.norm.match(re) || []).length;
      if (!m) continue;
      const tf = (m * 2.2) / (m + 1.2 * lenN);
      sc += tf * Math.log(1 + C.length / df[t]) * (head.includes(stem) ? 2.5 : 1);
    }
    return { c, sc };
  }).filter(x => x.sc > 0).sort((a, b) => b.sc - a.sc);
  const out = []; let used = 0;
  for (const { c } of scored) {
    const block = `## ${c.head} ${c.known() ? '[CONNU]' : '[NON LU]'}\n${c.text}`;
    if (used + block.length > budget) { if (used > budget * 0.8) break; else continue; }
    out.push(block); used += block.length;
  }
  return out.length ? `\n=== PASSAGES EXACTS DU RÉCIT ET DES ARCHIVES LES PLUS PROCHES DE LA QUESTION ===\n${out.join('\n\n')}` : '';
}

/* ---------- Appel à l'API (direct, depuis cet appareil) ---------- */
function chatMessages(conv, text) {
  const out = [];
  for (const m of conv.slice(-20)) {
    if (m.role !== 'user' && m.role !== 'assistant') continue;
    if (!out.length && m.role !== 'user') continue;
    if (out.length && out[out.length - 1].role === m.role) out[out.length - 1].content += '\n' + m.content;
    else out.push({ role: m.role, content: String(m.content).slice(0, 4000) });
  }
  if (out.length && out[out.length - 1].role === 'user') out[out.length - 1].content += '\n' + text;
  else out.push({ role: 'user', content: text });
  return out;
}
async function callDirect(id, text, history, context, cfg, extra = '') {
  if (!cfg.key) throw { code: 'nokey' };
  let res;
  const system = [{ type: 'text', text: buildSystem(id, context), cache_control: { type: 'ephemeral' } }];
  if (extra) system.push({ type: 'text', text: extra });
  try {
    res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': cfg.key, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({ model: cfg.model, max_tokens: id === 'daminu' ? 1400 : 700, system, messages: chatMessages(history, text) })
    });
  } catch (e) { throw { code: 'network' }; }
  const j = await res.json().catch(() => ({}));
  if (!res.ok) throw { code: 'api', status: res.status, msg: (j.error && j.error.message) || `Erreur ${res.status}` };
  return (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n').trim();
}
function chatErrorText(e) {
  if (e.code === 'nokey') return 'Aucune clé n’est enregistrée sur cet appareil. Ouvrez Réglages → Discussion IA et suivez les 4 étapes pour créer et coller votre clé.';
  if (e.code === 'network') return 'Impossible de joindre l’API : vérifiez votre connexion internet, puis réessayez.';
  if (e.status === 401) return 'La clé est refusée. Vérifiez qu’elle a été copiée en entier (elle commence par sk-ant-), ou créez-en une nouvelle.';
  if (e.status === 402 || /credit|balance|billing/i.test(e.msg || '')) return 'Votre compte Anthropic n’a plus de crédit. Ajoutez du crédit dans la console (Billing), puis réessayez.';
  if (e.status === 429) return 'Trop de messages d’un coup. Patientez une minute puis réessayez.';
  return `L’API a répondu : ${e.msg || 'erreur inconnue'}.`;
}
async function chatSend(id, text) {
  text = String(text || '').trim().slice(0, 2000);
  if (!text || ui.chatBusy) return;
  if (!chatAvailable(id).ok) return;
  const cfg = aiCfg();
  state.chats = state.chats || {};
  const conv = state.chats[id] || (state.chats[id] = []);
  const history = conv.slice();
  conv.push({ role: 'user', content: text, t: Date.now() });
  ui.chatBusy = true; ui.chatDraft = '';
  save(); render(); chatScroll();
  const context = chatContext(id);
  let extra = '';
  if (id === 'daminu') {
    const prev = history.filter(m => m.role === 'user').slice(-2).map(m => m.content).join(' ');
    extra = loreRetrieve(text + ' ' + text + ' ' + prev, 42000);
  }
  let reply, err = null;
  try { reply = await callDirect(id, text, history, context, cfg, extra); } catch (e) { err = e; }
  ui.chatBusy = false;
  if (err) conv.push({ role: 'error', content: chatErrorText(err), t: Date.now() });
  else conv.push({ role: 'assistant', content: reply || '…', t: Date.now() });
  if (conv.length > 80) conv.splice(0, conv.length - 80);
  save(); render(); chatScroll();
}
function chatScroll() { setTimeout(() => { const el = document.getElementById('chat-log'); if (el) el.scrollTop = el.scrollHeight; }, 30); }

/* ---------- Vues ---------- */
const CHAT_SUGGEST = {
  pernos: ['Analyse ma journée.', 'Comment progresser au développé couché ?', 'Je suis fatigué, je fais ma séance quand même ?'],
  daminu: ['Quelles fins me restent ouvertes ?', 'Comment débloquer le titre « Collectionneur » ?', 'Que dois-je faire pour la voie scellée ?'],
  default: ['Comment va la Maison ?', 'Que penses-tu de ma semaine ?', 'Un conseil pour aujourd’hui ?']
};
function chatAvatar(id, size = 40) {
  const P = PERSONAS[id];
  return `<div class="portrait" style="color:${P.color};width:${size}px;height:${size}px">${icon(P.icon, 'w-5 h-5')}</div>`;
}
function viewConseil() {
  if (ui.chatWith && PERSONAS[ui.chatWith]) return viewChatRoom(ui.chatWith);
  const card = id => {
    const P = PERSONAS[id], av = chatAvailable(id), n = ((state.chats || {})[id] || []).length;
    return `<button type="button" class="item text-left w-full" style="color:${P.color};${av.ok ? '' : 'opacity:.55'}" data-a="chat-open" data-id="${id}" ${av.ok ? '' : 'disabled'}>
      ${chatAvatar(id)}
      <span class="flex-1 min-w-0" style="color:var(--text)">
        <span class="flex items-center gap-2 flex-wrap"><span class="f-display font-semibold">${esc(P.name)}</span>${P.rank ? `<span class="rar" style="color:${P.color}">n° ${P.rank}</span>` : ''}</span>
        <span class="block text-xs muted">${esc(P.title)}${av.ok ? (n ? ` · ${n} message${n > 1 ? 's' : ''}` : '') : ` · ${esc(av.why)}`}</span>
      </span>
      ${av.ok ? icon('message-circle', 'w-4 h-4 muted') : icon('lock', 'w-4 h-4 muted')}</button>`;
  };
  return `
    <div class="sys umbra">
      <div class="sys-title u mb-2">${icon('messages-square', 'w-4 h-4')}Conseil de la Maison</div>
      <p class="text-xs muted">Discutez avec votre mentor, le gardien du lore et les membres recrutés. Chacun connaît vos vraies données du jour.</p>
    </div>
    ${aiCfg().key ? '' : `<div class="sys" style="border-color:rgba(0,240,255,.45)"><div class="sys-title mb-2">${icon('key-round', 'w-4 h-4')}Activer la discussion</div>${viewAiOnboarding(true)}<button type="button" class="btn sm solid mt-3" data-a="tab" data-tab="settings">${icon('settings', 'w-3.5 h-3.5')}Ouvrir Réglages → Discussion IA</button></div>`}
    <div class="label px-1">Guides</div>
    ${card('pernos')}${card('daminu')}
    <div class="label px-1">Maison de l’Ombre — par rang de puissance</div>
    ${CHAT_ORDER.filter(id => PERSONAS[id].rank).map(card).join('')}`;
}
function viewChatRoom(id) {
  const P = PERSONAS[id], conv = (state.chats || {})[id] || [];
  const sugg = CHAT_SUGGEST[id] || CHAT_SUGGEST.default;
  return `
    <div class="sys" style="padding:12px">
      <div class="flex items-center gap-3">
        <button type="button" class="ibtn" data-a="chat-back" aria-label="Retour à la liste">${icon('arrow-left', 'w-4 h-4')}</button>
        ${chatAvatar(id, 40)}
        <div class="flex-1 min-w-0"><div class="f-display font-semibold truncate" style="color:${P.color}">${esc(P.name)}</div><div class="text-[11px] muted truncate">${esc(P.title)}${P.rank ? ` · rang n° ${P.rank}` : ''}</div></div>
        ${conv.length ? (ui.armed === 'chat-' + id
          ? `<button type="button" class="btn sm danger" data-a="chat-clear" data-id="${id}">Effacer ?</button>`
          : `<button type="button" class="ibtn danger" data-a="arm" data-k="chat-${id}" aria-label="Effacer la conversation">${icon('trash-2', 'w-4 h-4')}</button>`) : ''}
      </div>
    </div>
    <div id="chat-log" class="sys flex flex-col gap-3" style="max-height:58vh;overflow-y:auto;padding:14px">
      ${conv.length ? conv.map(m => m.role === 'user'
        ? `<div class="self-end max-w-[85%] px-3 py-2 text-sm" style="background:rgba(0,240,255,.1);border:1px solid rgba(0,240,255,.35);white-space:pre-wrap">${esc(m.content)}</div>`
        : m.role === 'error'
          ? `<div class="sysmsg text-xs" style="color:var(--blood);border-color:rgba(255,59,92,.5);background:rgba(255,59,92,.06)">${esc(m.content)}</div>`
          : `<div class="self-start max-w-[90%] flex gap-2"><div class="shrink-0">${chatAvatar(id, 28)}</div><div class="px-3 py-2 text-[15px]" style="font-family:var(--font-prose);line-height:1.6;background:#16161b;border:1px solid ${P.color}44;white-space:pre-wrap">${esc(m.content)}</div></div>`).join('')
        : `<p class="text-sm muted">Aucun message. Commencez la conversation.</p>`}
      ${ui.chatBusy ? `<div class="self-start text-xs muted f-mono">${esc(P.name)} réfléchit…</div>` : ''}
    </div>
    ${conv.length ? '' : `<div class="flex flex-wrap gap-1.5">${sugg.map(s => `<button type="button" class="chip" data-a="chat-suggest" data-id="${id}" data-t="${esc(s)}" style="text-transform:none;letter-spacing:0">${esc(s)}</button>`).join('')}</div>`}
    <div class="sys" style="padding:10px">
      <label for="chat-input" class="sr-only">Votre message</label>
      <textarea id="chat-input" class="input" rows="2" maxlength="2000" placeholder="Écrire à ${esc(P.name)}… (Entrée pour envoyer)" ${ui.chatBusy ? 'disabled' : ''}>${esc(ui.chatDraft || '')}</textarea>
      <div class="flex justify-between items-center gap-2 mt-2">
        <span class="text-[11px] muted">${esc(AI_MODELS.find(m => m[0] === aiCfg().model)?.[1] || aiCfg().model)}</span>
        <button type="button" class="btn sm solid" data-a="chat-send" data-id="${id}" ${ui.chatBusy ? 'disabled' : ''}>${icon('send', 'w-3.5 h-3.5')}Envoyer</button>
      </div>
    </div>`;
}
function viewAiOnboarding(compact) {
  return `<div class="flex flex-col gap-2 text-sm">
      <p>${compact ? '' : 'Chaque joueur utilise <b>sa propre clé</b> : vos messages sont payés sur votre compte, personne d’autre ne peut les facturer. '}Ça prend 5 minutes, une seule fois par appareil :</p>
      <ol class="flex flex-col gap-2 pl-1">
        <li><b class="glow">1.</b> Ouvrez <a class="underline" href="https://console.anthropic.com" target="_blank" rel="noopener">console.anthropic.com</a> et créez un compte gratuit (une adresse e-mail suffit).</li>
        <li><b class="glow">2.</b> Ajoutez un peu de crédit : menu <b>Settings → Billing</b>, puis <b>Add credits</b>. Quelques dollars suffisent pour beaucoup de conversations. Le prix exact dépend du modèle : Haiku est le moins cher, Opus le plus cher. Daminu coûte davantage que les autres, car il relit des pages entières du récit à chaque question.</li>
        <li><b class="glow">3.</b> Menu <b>API Keys</b> → <b>Create Key</b>. Donnez-lui un nom (par exemple « Elyos System »), puis cliquez sur <b>Copy</b>. La clé commence par <span class="f-mono">sk-ant-</span>. Elle n’est affichée qu’une seule fois : collez-la tout de suite.</li>
        <li><b class="glow">4.</b> ${compact ? 'Dans <b>Réglages → Discussion IA</b>, collez' : 'Collez'}-la dans le champ « Clé API » ${compact ? '' : 'ci-dessous '}puis appuyez sur <b>Tester la connexion</b>.</li>
      </ol>
      <p class="text-[11px] muted">La clé reste uniquement dans ce navigateur, sur cet appareil. Elle n’est jamais mise dans la sauvegarde ni envoyée ailleurs qu’à Anthropic. Ne la donnez à personne, ne la collez jamais dans un message ou un fichier partagé. Sur un autre appareil, il faudra la coller à nouveau. Si vous pensez qu’elle a fuité, supprimez-la dans la console et créez-en une autre.</p>
    </div>`;
}
function viewChatSettings() {
  const cfg = aiCfg();
  return `
  <details class="sys" data-det="ai" ${cfg.key ? '' : 'open'}>
    <summary class="flex items-center justify-between gap-2"><span class="sys-title">${icon('messages-square', 'w-4 h-4')}Discussion IA</span><span class="chev muted">${icon('chevron-down')}</span></summary>
    <div class="mt-4 flex flex-col gap-3 text-sm">
      <p class="muted">Le Conseil (Royaume → Conseil) vous fait parler avec Pernos, Daminu et votre Maison grâce à l’IA Claude d’Anthropic, directement depuis cet appareil.</p>
      ${cfg.key ? '' : viewAiOnboarding(false)}
      <div><label for="ai-key" class="text-[10px] label block mb-1">Clé API Anthropic</label>
        <input id="ai-key" type="password" autocomplete="off" class="input sm f-mono" placeholder="sk-ant-…" value="${esc(cfg.key)}"></div>
      <div><label for="ai-model" class="text-[10px] label block mb-1">Modèle</label>
        <select id="ai-model" class="input sm">${AI_MODELS.map(([v, l]) => `<option value="${v}" ${cfg.model === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
      <div class="flex gap-2 flex-wrap">
        <button type="button" class="btn sm" data-a="ai-test">${icon('plug-zap', 'w-3.5 h-3.5')}Tester la connexion</button>
        ${cfg.key ? `<button type="button" class="btn sm ghost" data-a="ai-forget">Oublier la clé</button><button type="button" class="btn sm ghost" data-a="ai-help">Comment créer une clé ?</button>` : ''}
      </div>
      ${cfg.key && ui.aiHelp ? viewAiOnboarding(false) : ''}
      <p id="ai-test-out" class="text-xs muted">${esc(ui.aiTest || '')}</p>
    </div>
  </details>`;
}

/* ---------- Gestionnaires ---------- */
Object.assign(handlers, {
  'chat-open': el => { if (!chatAvailable(el.dataset.id).ok) return; ui.chatWith = el.dataset.id; ui.chatDraft = ''; render(); chatScroll(); },
  'chat-back': () => { ui.chatWith = null; render(); },
  'chat-send': el => { const t = document.getElementById('chat-input'); chatSend(el.dataset.id, t ? t.value : ''); },
  'chat-suggest': el => chatSend(el.dataset.id, el.dataset.t),
  'chat-clear': el => { ui.armed = null; if (state.chats) delete state.chats[el.dataset.id]; save(); render(); },
  'ai-forget': () => { const c = aiCfg(); c.key = ''; aiSave(c); render(); },
  'ai-help': () => { ui.aiHelp = !ui.aiHelp; render(); const d = document.querySelector('details[data-det="ai"]'); if (d) d.open = true; },
  'ai-test': async () => {
    const cfg = aiCfg();
    ui.aiTest = 'Test en cours…'; render();
    try {
      const reply = await callDirect('pernos', 'Réponds juste : « Le Système vous entend. »', [], 'Test de connexion.', cfg);
      ui.aiTest = `Connexion réussie. Réponse : ${reply}`;
    } catch (e) { ui.aiTest = chatErrorText(e); }
    render();
    const d = document.querySelector('details[data-det="ai"]'); if (d) d.open = true;
  }
});
document.addEventListener('input', ev => { if (ev.target.id === 'chat-input') ui.chatDraft = ev.target.value; });
document.addEventListener('change', ev => {
  const t = ev.target;
  if (t.id === 'ai-model' || t.id === 'ai-key') {
    const c = aiCfg();
    if (t.id === 'ai-model') c.model = t.value;
    if (t.id === 'ai-key') c.key = t.value.trim();
    aiSave(c);
    toast(`${icon('check', 'w-4 h-4 text-neon')}<span>${t.id === 'ai-key' ? (c.key ? 'Clé enregistrée sur cet appareil. Appuyez sur « Tester la connexion ».' : 'Clé retirée.') : 'Modèle enregistré.'}</span>`);
    if (t.id === 'ai-key') { ui.aiTest = ''; render(); const d = document.querySelector('details[data-det="ai"]'); if (d) d.open = true; }
  }
});
document.addEventListener('keydown', ev => {
  if (ev.target.id === 'chat-input' && ev.key === 'Enter' && !ev.shiftKey) { ev.preventDefault(); if (ui.chatWith) chatSend(ui.chatWith, ev.target.value); }
});

/* ==========================================================================
   COMBAT AU TOUR PAR TOUR — statistiques, compétences de classe, ultimes
   Force      → puissance d'attaque (dégâts bruts, physiques ou magiques)
   Endurance  → points de vie et défense
   Agilité    → chance et dégâts de coup critique, esquive
   Intelligence → gains d'XP et de kinahs (voir boosts())
   ========================================================================== */

/* ---------- Compétences : 6 par classe (4 techniques + 2 ultimes) ----------
   type : atk · heal · shield · buff · dodge
   mult (dégâts × attaque) · hits · cd (tours) · crit (garanti) · pierce (ignore la défense)
   stun (chance d'étourdir) · dot (% de l'attaque par tour pendant 3 tours) · heal/shield (% PV max)
   buff (bonus d'attaque % pendant 3 tours) · steal (% des dégâts rendus en PV)
   ult : 1 = ultime (jauge pleine) · 2 = ultime suprême (achève sous 35 % de PV, sinon ×7 perçant) */
function SK(name, lvl, o) { return { name, lvl, mult: 0, hits: 1, cd: 0, ...o }; }
const SKILL_LEVELS = [1, 3, 8, 14, 20, 40];
const CLASS_SKILLS = {
  gladiateur: [SK('Taille', 1, { type: 'atk', mult: 1 }), SK('Fendoir', 3, { type: 'atk', mult: 1.9, cd: 2, dot: 25 }), SK('Cri de guerre', 8, { type: 'buff', buff: 40, cd: 4 }), SK('Tourbillon', 14, { type: 'atk', mult: 0.9, hits: 3, cd: 3 }), SK('Colère du colosse', 20, { type: 'atk', mult: 5.5, stun: 1, ult: 1 }), SK('Exécution de l’arène', 40, { type: 'atk', ult: 2 })],
  templier: [SK('Coup de pommeau', 1, { type: 'atk', mult: 1 }), SK('Jugement', 3, { type: 'atk', mult: 1.7, stun: 0.4, cd: 2 }), SK('Rempart sacré', 8, { type: 'shield', shield: 35, cd: 4 }), SK('Châtiment', 14, { type: 'atk', mult: 2.5, pierce: 1, cd: 3 }), SK('Bastion de lumière', 20, { type: 'atk', mult: 4, shield: 60, ult: 1 }), SK('Jugement dernier', 40, { type: 'atk', ult: 2 })],
  assassin: [SK('Lacération', 1, { type: 'atk', mult: 1 }), SK('Double entaille', 3, { type: 'atk', mult: 0.95, hits: 2, cd: 2 }), SK('Disparition', 8, { type: 'dodge', dodge: 50, cd: 4 }), SK('Point vital', 14, { type: 'atk', mult: 2.4, crit: 1, cd: 3 }), SK('Danse des mille lames', 20, { type: 'atk', mult: 0.9, hits: 6, ult: 1 }), SK('Marque de mort', 40, { type: 'atk', ult: 2 })],
  rodeur: [SK('Tir rapide', 1, { type: 'atk', mult: 1 }), SK('Flèche perforante', 3, { type: 'atk', mult: 1.8, pierce: 1, cd: 2 }), SK('Piège à mâchoires', 8, { type: 'atk', mult: 0.8, stun: 0.7, cd: 4 }), SK('Pluie de flèches', 14, { type: 'atk', mult: 0.8, hits: 4, cd: 3 }), SK('Tir du faucon', 20, { type: 'atk', mult: 5.5, crit: 1, ult: 1 }), SK('Flèche du jugement', 40, { type: 'atk', ult: 2 })],
  sorcier: [SK('Trait de flamme', 1, { type: 'atk', mult: 1 }), SK('Boule de feu', 3, { type: 'atk', mult: 1.8, dot: 35, cd: 2 }), SK('Bouclier de mana', 8, { type: 'shield', shield: 30, cd: 4 }), SK('Javelot de glace', 14, { type: 'atk', mult: 2.5, stun: 0.3, cd: 3 }), SK('Météore', 20, { type: 'atk', mult: 6, ult: 1 }), SK('Néant', 40, { type: 'atk', ult: 2 })],
  spiritualiste: [SK('Fouet spectral', 1, { type: 'atk', mult: 1 }), SK('Esprit de feu', 3, { type: 'atk', mult: 1.2, dot: 60, cd: 2 }), SK('Pacte d’âme', 8, { type: 'atk', mult: 1.5, steal: 60, cd: 3 }), SK('Armée des ombres', 14, { type: 'atk', mult: 0.9, hits: 4, cd: 3 }), SK('Marche des ombres', 20, { type: 'atk', mult: 5, heal: 20, ult: 1 }), SK('« Lève-toi. »', 40, { type: 'atk', ult: 2 })],
  clerc: [SK('Frappe sacrée', 1, { type: 'atk', mult: 1 }), SK('Châtiment divin', 3, { type: 'atk', mult: 1.8, cd: 2 }), SK('Guérison', 8, { type: 'heal', heal: 35, cd: 3 }), SK('Lumière ardente', 14, { type: 'atk', mult: 2.4, pierce: 1, cd: 3 }), SK('Bénédiction', 20, { type: 'heal', heal: 60, buff: 40, ult: 1 }), SK('Aube éternelle', 40, { type: 'atk', ult: 2 })],
  aede: [SK('Coup de chant', 1, { type: 'atk', mult: 1 }), SK('Mantra d’attaque', 3, { type: 'buff', buff: 35, cd: 3 }), SK('Hymne de soin', 8, { type: 'atk', mult: 1.2, heal: 25, cd: 3 }), SK('Sceau de foudre', 14, { type: 'atk', mult: 2.5, stun: 0.3, cd: 3 }), SK('Chant de la montagne', 20, { type: 'atk', mult: 5, shield: 30, ult: 1 }), SK('Requiem', 40, { type: 'atk', ult: 2 })],
  pistolero: [SK('Tir', 1, { type: 'atk', mult: 1 }), SK('Rafale', 3, { type: 'atk', mult: 0.75, hits: 3, cd: 2 }), SK('Roulade', 8, { type: 'dodge', dodge: 45, cd: 4 }), SK('Tir en pleine tête', 14, { type: 'atk', mult: 2.3, crit: 1, cd: 3 }), SK('Canon d’éther', 20, { type: 'atk', mult: 6, pierce: 1, ult: 1 }), SK('Dernière balle', 40, { type: 'atk', ult: 2 })],
  ethertech: [SK('Coup de lame-clé', 1, { type: 'atk', mult: 1 }), SK('Surcharge', 3, { type: 'atk', mult: 2, cd: 2 }), SK('Armure d’éther', 8, { type: 'shield', shield: 40, cd: 4 }), SK('Piston', 14, { type: 'atk', mult: 2.4, stun: 0.35, cd: 3 }), SK('Mode Titan', 20, { type: 'atk', mult: 4.5, buff: 50, ult: 1 }), SK('Effondrement du cœur', 40, { type: 'atk', ult: 2 })],
  barde: [SK('Note perçante', 1, { type: 'atk', mult: 1 }), SK('Accord dissonant', 3, { type: 'atk', mult: 1.7, stun: 0.3, cd: 2 }), SK('Mélodie de soin', 8, { type: 'heal', heal: 30, cd: 3 }), SK('Crescendo', 14, { type: 'atk', mult: 0.9, hits: 3, cd: 3 }), SK('Symphonie', 20, { type: 'atk', mult: 5, heal: 30, ult: 1 }), SK('La quatrième mesure', 40, { type: 'atk', ult: 2 })],
  peintre: [SK('Éclaboussure', 1, { type: 'atk', mult: 1 }), SK('Peinture explosive', 3, { type: 'atk', mult: 1.8, dot: 30, cd: 2 }), SK('Toile protectrice', 8, { type: 'shield', shield: 30, cd: 4 }), SK('Fresque', 14, { type: 'atk', mult: 0.8, hits: 4, cd: 3 }), SK('Chef-d’œuvre', 20, { type: 'atk', mult: 5.5, stun: 1, ult: 1 }), SK('Effacement', 40, { type: 'atk', ult: 2 })]
};
function classSkills() { return CLASS_SKILLS[state.profile && state.profile.cls] || CLASS_SKILLS.assassin; }
function skillDesc(s) {
  if (s.ult === 2) return 'Ultime suprême : réduit à néant un ennemi sous 35 % de PV, sinon frappe ×7 en ignorant la défense. Jauge pleine.';
  const p = [];
  if (s.type === 'atk') p.push(`${s.hits > 1 ? `${s.hits} coups ×${s.mult}` : `×${s.mult}`} attaque`);
  if (s.crit) p.push('critique garanti');
  if (s.pierce) p.push('ignore la défense');
  if (s.stun) p.push(`${Math.round(s.stun * 100)} % d’étourdir`);
  if (s.dot) p.push(`brûlure ${s.dot} % ×3 tours`);
  if (s.steal) p.push(`vol de vie ${s.steal} %`);
  if (s.heal) p.push(`soigne ${s.heal} % PV`);
  if (s.shield) p.push(`bouclier ${s.shield} % PV`);
  if (s.buff) p.push(`attaque +${s.buff} % (3 tours)`);
  if (s.dodge) p.push(`esquive +${s.dodge} % (2 tours)`);
  if (s.ult === 1) p.push('ultime : jauge pleine');
  else if (s.cd) p.push(`recharge ${s.cd} tours`);
  return p.join(' · ');
}

/* ---------- Statistiques de combat ---------- */
const FOLLOWER_STAT_C = { sera: 'str', kael: 'agi', ysolde: 'end', gaspard: 'int' };
function effStat(s) {
  const v = statValues();
  let x = v[s] + gearBonus(s);
  for (const f in FOLLOWER_STAT_C) if (hasF(f) && FOLLOWER_STAT_C[f] === s) x += 15;
  return x;
}
/* Puissance de classe (même hiérarchie que dans le monde ouvert) : assassin 110 %, gladiateur 109 %, sorcier 108 %, pistolero 99 %,
   rôdeur 98 %, spiritualiste 97 %, barde et peintre 95 %, les autres 90 %. */
const CLASS_TIER = { assassin: 1.10, gladiateur: 1.09, sorcier: 1.08, pistolero: 0.99, rodeur: 0.98, spiritualiste: 0.97, barde: 0.95, peintre: 0.95 };
const classTier = id => CLASS_TIER[id] || 0.90;
/* valeur moyenne d'un coup selon l'Attaque et le critique : sert à la répartition optimale des points */
function dpsScore(c) { return c.atk * (1 + Math.min(STAT_CAPS.crit, c.crit) * (c.critDmg - 1)); }
/* Ténacité : armures (rareté, amélioration) × part de l'Endurance dans les statistiques. 1 = équipement Éternel complet. */
const ARMOR_TOUGH = [0.6, 0.65, 0.7, 0.75, 0.8, 0.9, 1, 1.3];
/* Ténacité : armure × (0,9 + 1,5 × E / (E + 20 × niveau + 200)). Seule l'Endurance compte : investir ailleurs ne la fait jamais baisser (v77). */
function toughness(F, A, E, L, raw) {
  const g = s => typeof invItem === 'function' && state.gear ? invItem(state.gear[s]) : null;
  let a = 0; for (const s of ['casque', 'plastron', 'jambieres']) { const it = g(s); a += it ? ARMOR_TOUGH[it.r] + (it.up || 0) * 0.0375 : 0.5; } a /= 3;
  const sh = g('off'); if (sh && sh.type === 'bouclier') a += 0.05 + sh.r * 0.015;
  if (L == null) L = powerLvl();
  const share = E / (E + 20 * L + 200), v = a * (0.9 + 1.5 * share);
  return raw ? v : Math.round(v * 100) / 100;
}
function playerCombat() {
  const b = boosts();
  const F = effStat('str') * (1 + (b.force || 0) / 100);
  const E = effStat('end') * (1 + (b.rempart || 0) / 100);
  const A = effStat('agi') * (1 + (b.vitesse || 0) / 100);
  const atk = Math.round((10 + F * 1.1) * (hasF('yanis') ? 1.1 : 1));
  const hp = Math.round(120 + E * 10);
  const def = Math.round(E * 1.0);
  /* l'arme tenue en main droite apporte son critique de base, son multiplicateur de critique et la régularité de ses dégâts */
  const wt = typeof invItem === 'function' && state.gear ? (invItem(state.gear.main) || {}).type : null, W = weaponStats(wt);
  const crit = Math.min(STAT_CAPS.crit, 0.05 + W.crit + A * 0.0018 + b.crit / 100);
  const critDmg = W.cdm + A * 0.004;
  const dodge = Math.min(STAT_CAPS.dodge, A * 0.0012);
  const power = classTier(state.profile && state.profile.cls), pk = typeof gearPerks === 'function' ? gearPerks() : { cdr: 0, spd: 0, hpPct: 0, cast: false };
  const tough = toughness(F, A, E);
  return { tough, atk, hp, def, crit, critDmg, dodge, power, cdr: pk.cdr, spd: pk.spd, hpPct: pk.hpPct, exec: pk.exec || 0, runes: pk.runes || {}, cast: pk.cast, variance: W.var, hits: W.hits, weapon: wt, F: Math.round(F), E: Math.round(E), A: Math.round(A) };
}
/* ---------- Puissance de combat ----------
   Une seule échelle pour tout l'univers : la vague d'arène la plus haute que l'on tient.
   Elle se calcule sur ce qui décide d'un combat : les dégâts par seconde (attaques par seconde, coups critiques,
   part des PV de la cible retirée à chaque attaque, exécution) contre la résistance (PV et ténacité, esquive).
   À la vague n : 4 ennemis de 100 × 1,2^(n−1) PV et 4 × 1,15^(n−1) de défense ; chaque coup ennemi retire au plus
   2,78 % × (1 + n/500) des PV max, divisé par la ténacité. On tient la vague si on abat les 4 ennemis avant de tomber. */
function cpHits(n, o) {
  const HP = 100 * Math.pow(1.2, n - 1), def = 4 * Math.pow(1.15, n - 1), g = o.atk * (1 + o.crit * (o.cdm - 1)) * 100 / (100 + def) / HP;
  const f = Math.min(0.95, o.hpp * (1 + o.crit * (o.fr || 0) / 100));
  if (!(g >= 1e-7)) { if (f <= 0 || !(o.exec > 0)) return Infinity; return Math.max(1, Math.ceil(Math.log(o.exec) / Math.log(1 - f))); }   /* vagues hautes : seule la part en % des PV compte */
  let h = 1, k = 0; while (h > o.exec && h > 0 && k < 4000) { h -= h * f + g; k++; }
  return h > o.exec && h > 0 ? Infinity : k;
}
/* version continue (optimiseur) : la puissance comme un nombre réel */
function cpWaveR(o) { const n0 = cpWave(o); let lo = n0, hi = n0 + 1; const ok = n => { const N = cpHits(n, o); if (!isFinite(N)) return false; return 4 * N / (o.rico ? 2.5 : 1) / o.aps <= o.tough / (0.05 * (1 + n / 500) * (1 - Math.min(0.9, o.dodge || 0))); }; for (let i = 0; i < 20; i++) { const m = (lo + hi) / 2; if (ok(m)) lo = m; else hi = m; } return lo; }
function cpWave(o) {
  const ok = n => { const N = cpHits(n, o); if (!isFinite(N)) return false; const ttk = 4 * N / (o.rico ? 2.5 : 1) / o.aps, ttd = o.tough / (0.05 * (1 + n / 500) * (1 - Math.min(0.9, o.dodge || 0))); return ttk <= ttd; };
  if (!ok(1)) return 1; let lo = 1, hi = 2; while (hi < 1e7 && ok(hi)) { lo = hi; hi *= 2; } if (hi >= 1e7) return 1e7;
  while (hi - lo > 1) { const m = Math.floor((lo + hi) / 2); if (ok(m)) lo = m; else hi = m; } return lo;
}
const _cpMemo = {};
function cpMemo(o) { const k = JSON.stringify(o); return _cpMemo[k] || (_cpMemo[k] = cpWave(o)); }
/* profil de combat du Joueur (monde ouvert : une attaque dure la vitesse de l'arme / 6 ; deux armes : deux fois plus d'attaques ; techniques +15 %) */
function combatProfile(c) {
  c = c || playerCombat(); const W = weaponStats(c.weapon), off = typeof invItem === 'function' && state.gear ? invItem(state.gear.off) : null, dual = !!(off && WEAPON_TYPES[off.type]);
  const R = c.runes || {};
  void W; void dual;   /* la part en % des PV se compte à la seconde (2 × puissance de classe), pas à l'attaque : l'arme ne change pas l'ordre des classes */
  return { atk: c.atk, aps: Math.round(2 * (c.power || 0.9) * (1 + (c.spd || 0)) * 1.15 * 100) / 100, crit: Math.round(c.crit * 1000) / 1000, cdm: Math.round(c.critDmg * 100) / 100, hpp: Math.round((c.hpPct || 0) * 100) / 10000, fr: R.fracture || 0, exec: c.exec || 0, tough: c.tough, dodge: Math.round(c.dodge * 1000) / 1000, rico: !!R.ricochet };
}
function combatPower(c) { const o = combatProfile(c); return { power: cpMemo(o), o }; }
/* les autres personnages : leur profil de combat découle de leur force dans le récit */
function cpFromOld(p) { return cpMemo(cpProfileOld(p)); }
function cpProfileOld(p) {
  p = Math.max(1, p || 1); const k = Math.min(1, p / 900), F = foeCombat({ power: p, tier: 'commun' });
  return ({ atk: F.atk, aps: Math.round((1 + p / 150) * 100) / 100, crit: Math.min(0.5, 0.05 + p / 2000), cdm: 1.5 + k, hpp: Math.round(0.5 * Math.pow(k, 1.2) * 1000) / 1000, fr: 0, exec: Math.round(k * 0.2 * 1000) / 1000, tough: Math.round((0.4 + Math.pow(k, 1.5) * 12) * 100) / 100, dodge: Math.min(0.3, p / 3000), rico: false });
}
/* ce que mesure la puissance de combat, en quatre cases (Joueur et personnages) */
function profileMini(o) {
  const pc = v => String(Math.round(v * 1000) / 10).replace('.', ','), f = Math.min(0.95, o.hpp * (1 + o.crit * (o.fr || 0) / 100));
  return `<div class="grid grid-cols-4 gap-1 text-center text-[11px] f-mono">${[['Att./s', String(o.aps).replace('.', ','), 'Attaques par seconde'], ['Crit.', pc(o.crit) + ' %', 'Chance de coup critique'], ['% PV', pc(f) + ' %', 'Part des PV de la cible retirée à chaque attaque'], ['Ténac.', '×' + String(o.tough).replace('.', ','), 'Ténacité : divise chaque coup reçu']].map(([k, v, l]) => `<div class="tile" style="padding:4px" title="${l}"><div class="muted">${k}</div><div>${v}</div></div>`).join('')}</div>${o.exec ? `<div class="text-[10px] muted mt-1 text-center">exécution sous ${pc(o.exec)} % · esquive ${pc(o.dodge || 0)} %</div>` : ''}`;
}
function combatRating(c) { return Math.round(c.atk * 2.2 + c.hp * 0.35 + c.def * 1.5 + c.crit * 300 + (c.critDmg - 1.5) * 150 + c.dodge * 300); }
function foeCombat(foe) {
  const P = foe.power, boss = foe.tier === 'monarque' || foe.tier === 'absolu' ? 1.3 : foe.tier === 'calamite' ? 1.15 : 1;
  return { hp: Math.round(P * 5.5 * (1 + P / 800) * boss), atk: Math.round(P * 0.38 * (1 + P / 1500)), def: Math.round(P * 0.35), crit: 0.08, dodge: 0.04 };
}
const WEAK_TXT = {
  str: { weak: 'vos dégâts +25 %', resist: 'vos dégâts −20 %' },
  agi: { weak: 'vos critiques +15 % de chance', resist: 'vos critiques −10 % de chance' },
  end: { weak: 'ses attaques −20 %', resist: 'ses attaques +20 %' },
  int: { weak: 'jauge d’ultime ×1,5', resist: 'jauge d’ultime ×0,7' }
};

/* ---------- Déroulé d'un combat ---------- */
function rnd01() { return Math.random(); }
function newBattle(foe, kind, id) {
  const pc = playerCombat(), fc = foeCombat(foe);
  return {
    kind, id, foe, turn: 1, over: false, win: null, log: [`Le combat commence contre ${foe.name}.`],
    P: { ...pc, cur: pc.hp, shield: 0, charge: 0, buff: 0, buffT: 0, dodgeB: 0, dodgeT: 0, cds: {}, revived: false },
    E: { ...fc, max: fc.hp, cur: fc.hp, stun: false, dots: [] },
    crits: 0
  };
}
function bLog(B, t) { B.log.unshift(t); if (B.log.length > 40) B.log.pop(); }
function chargeGain(B, n) { const f = B.foe.weak === 'int' ? 1.5 : B.foe.resist === 'int' ? 0.7 : 1; B.P.charge = Math.min(100, B.P.charge + n * f / Math.max(0.05, 1 - (B.P.cdr || 0))); }   /* bijou : jauge d'ultime plus rapide */
function hitEnemy(B, mult, o = {}) {
  const P = B.P, E = B.E, foe = B.foe;
  let critC = P.crit + (foe.weak === 'agi' ? 0.15 : 0) - (foe.resist === 'agi' ? 0.1 : 0);
  if (rnd01() < E.dodge && !o.crit) { bLog(B, `${foe.name} esquive.`); return 0; }
  let d = P.atk * (P.power || 1) * (1 + (P.buffT > 0 ? P.buff / 100 : 0)) * mult * (1 - (P.variance ?? 0.1) + rnd01() * 2 * (P.variance ?? 0.1));
  if (foe.weak === 'str') d *= 1.25; if (foe.resist === 'str') d *= 0.8;
  const isCrit = o.crit || rnd01() < Math.max(0, critC);
  if (isCrit) { d *= P.critDmg; B.crits++; chargeGain(B, 10);
    /* rôdeur : ses coups critiques étourdissent */
    if (state.profile && state.profile.cls === 'rodeur' && !E.stun) { E.stun = true; bLog(B, `Coup critique : ${foe.name} est étourdi.`); }
    /* rune d'Écho : chaque critique peut retirer un tour de recharge */
    const ec = (P.runes || {}).echo || 0; if (ec > 0) for (const i in P.cds) if (P.cds[i] > 0 && rnd01() < Math.min(1, ec)) P.cds[i]--;
  }
  if (!o.pierce) d *= 100 / (100 + E.def);
  d = Math.max(1, Math.round(d));
  E.cur = Math.max(0, E.cur - d);
  /* rune d'Égide : bouclier selon les dégâts infligés */
  const eg = (P.runes || {}).egide || 0; if (eg > 0) P.shield = Math.min(Math.round(P.hp * 0.5), (P.shield || 0) + Math.round(d * eg / 100));
  execCheck(B);
  return { d, isCrit };
}
/* armes Légendaire et plus : l'ennemi tombe dès que ses PV passent sous le seuil de l'arme */
function execCheck(B) { const P = B.P, E = B.E; if (P.exec > 0 && E.cur > 0 && E.cur <= E.max * P.exec) { E.cur = 0; bLog(B, `Exécution : ${B.foe.name} tombe sous ${Math.round(P.exec * 100)} % de ses PV.`); } }
function playerAct(B, idx) {
  const s = classSkills()[idx], P = B.P, E = B.E, L = curLevel();
  if (!s || L < s.lvl || B.over) return false;
  if (s.ult && P.charge < 100) return false;
  if (!s.ult && (P.cds[idx] || 0) > 0) return false;
  if (s.ult) P.charge = 0;
  if (s.cd) P.cds[idx] = Math.round(s.cd * (1 - (P.cdr || 0))) + 1;   /* bijou : recharge réduite (100 % : aucune) */
  if (s.ult === 2) {
    if (E.cur <= E.max * 0.35) { E.cur = 0; bLog(B, `« ${s.name} » ! ${B.foe.name} est réduit à néant.`); }
    else { const r = hitEnemy(B, 7, { pierce: 1, crit: 0 }); bLog(B, `« ${s.name} » : ${r ? r.d : 0} dégâts${r && r.isCrit ? ' critiques' : ''}.`); }
  } else {
    let total = 0, crits = 0;
    if (s.mult) for (let h = 0; h < (s.hits || 1); h++) { const r = hitEnemy(B, s.mult, { crit: s.crit, pierce: s.pierce }); if (r) { total += r.d; if (r.isCrit) crits++; } }
    /* attaque de base : chaque coup supplémentaire de l'arme ajoute 10 % */
    if (idx === 0 && s.mult) for (let h = 1; h < (P.hits || 1); h++) { const r = hitEnemy(B, s.mult * 0.1, {}); if (r) { total += r.d; if (r.isCrit) crits++; } }
    /* équipement : dégâts en % des PV actuels de la cible, une fois par action */
    if (s.mult && total > 0 && P.hpPct > 0 && B.E.cur > 0) { const fr = (P.runes || {}).fracture || 0, hc = fr > 0 && rnd01() < P.crit, x = Math.max(1, Math.round(B.E.cur * Math.min(95, P.hpPct * (hc ? 1 + fr / 100 : 1)) / 100)); B.E.cur = Math.max(0, B.E.cur - x); total += x; execCheck(B); }
    const parts = [];
    if (s.mult) parts.push(`${total} dégâts${crits ? ` (${crits} critique${crits > 1 ? 's' : ''})` : ''}`);
    if (s.steal && total) { const h = Math.round(total * s.steal / 100); P.cur = Math.min(P.hp, P.cur + h); parts.push(`+${h} PV`); }
    if (s.heal) { const h = Math.round(P.hp * s.heal / 100); P.cur = Math.min(P.hp, P.cur + h); parts.push(`soin +${h} PV`); }
    if (s.shield) { const sh = Math.round(P.hp * s.shield / 100); P.shield += sh; parts.push(`bouclier ${sh}`); }
    if (s.buff) { P.buff = s.buff; P.buffT = 3; parts.push(`attaque +${s.buff} %`); }
    if (s.dodge) { P.dodgeB = s.dodge / 100; P.dodgeT = 2; parts.push(`esquive +${s.dodge} %`); }
    if (s.dot && total) { E.dots.push({ v: Math.round(P.atk * s.dot / 100), t: 3 }); parts.push('brûlure'); }
    if (s.stun && E.cur > 0 && rnd01() < s.stun) { E.stun = true; parts.push('étourdi'); }
    bLog(B, `« ${s.name} » : ${parts.join(', ') || 'rien'}.`);
  }
  chargeGain(B, s.ult ? 0 : 20);
  /* puces de régénération : un quart de leur valeur en PV à chaque action */
  { const rg = Math.min(15, ((typeof boosts === 'function' ? boosts().regen : 0) || 0) / 4); if (rg > 0 && P.cur > 0 && P.cur < P.hp) { const h = Math.max(1, Math.round(P.hp * rg / 100)); P.cur = Math.min(P.hp, P.cur + h); bLog(B, `Régénération : +${h} PV.`); } }
  return true;
}
function enemyAct(B) {
  const P = B.P, E = B.E, foe = B.foe;
  for (const dt of E.dots) { if (dt.t > 0 && E.cur > 0) { E.cur = Math.max(0, E.cur - dt.v); dt.t--; execCheck(B); bLog(B, `Brûlure : ${dt.v} dégâts.`); } }
  E.dots = E.dots.filter(d => d.t > 0);
  if (E.cur <= 0) return;
  if (E.stun) { E.stun = false; bLog(B, `${foe.name} est étourdi et ne peut pas agir.`); return; }
  const heavy = B.turn % 4 === 0;
  if (rnd01() < Math.min(0.85, P.dodge + (P.dodgeT > 0 ? P.dodgeB : 0))) { bLog(B, `Vous esquivez ${heavy ? 'l’attaque puissante' : 'l’attaque'} de ${foe.name}.`); return; }
  let d = E.atk * (heavy ? 1.8 : 1) * (0.9 + rnd01() * 0.2);
  if (foe.weak === 'end') d *= 0.8; if (foe.resist === 'end') d *= 1.2;
  const crit = rnd01() < E.crit; if (crit) d *= 1.5;
  d *= 100 / (100 + P.def);
  d = Math.max(1, Math.round(d));
  if (P.shield > 0) { const a = Math.min(P.shield, d); P.shield -= a; d -= a; }
  P.cur = Math.max(0, P.cur - d);
  chargeGain(B, 10);
  bLog(B, `${foe.name} ${heavy ? 'lance une attaque puissante' : 'attaque'} : ${d} dégâts${crit ? ' (critique)' : ''}.`);
  if (P.cur <= 0 && !P.revived && rnd01() * 100 < boosts().soin) { P.revived = true; P.cur = Math.round(P.hp * 0.3); bLog(B, 'Votre puce de soin vous relève à 30 % de vos PV.'); }
}
function endTurn(B) {
  const P = B.P;
  for (const k in P.cds) if (P.cds[k] > 0) P.cds[k]--;
  if (P.buffT > 0) P.buffT--;
  if (P.dodgeT > 0) P.dodgeT--;
  B.turn++;
  if (B.turn % 4 === 0 && B.E.cur > 0) bLog(B, `${B.foe.name} prépare une attaque puissante…`);
}
function checkEnd(B) {
  if (B.E.cur <= 0) { B.over = true; B.win = true; bLog(B, `Victoire contre ${B.foe.name}.`); }
  else if (B.P.cur <= 0) { B.over = true; B.win = false; bLog(B, 'Vous êtes à terre. Défaite.'); }
  return B.over;
}
function battleStep(B, idx) {
  if (B.over) return;
  if (!playerAct(B, idx)) return;
  if (checkEnd(B)) return;
  enemyAct(B);
  if (checkEnd(B)) return;
  endTurn(B);
  if (B.turn > 60) { B.over = true; B.win = false; bLog(B, 'Le combat s’éternise. Vous battez en retraite.'); }
}
function autoPick(B) {
  const sk = classSkills(), L = curLevel(), P = B.P, E = B.E;
  const ok = i => sk[i] && L >= sk[i].lvl && (sk[i].ult ? P.charge >= 100 : !(P.cds[i] > 0));
  if (ok(5) && (E.cur <= E.max * 0.35 || !ok(4))) return 5;
  if (ok(4)) return 4;
  if (P.cur < P.hp * 0.4) for (let i = 0; i < 4; i++) if (ok(i) && (sk[i].heal || sk[i].shield || sk[i].steal || sk[i].dodge)) return i;
  let best = 0, bv = 0;
  for (let i = 0; i < 4; i++) if (ok(i)) { const s = sk[i]; const v = (s.mult || 0) * (s.hits || 1) * (s.crit ? 1.5 : 1) * (s.pierce ? 1.3 : 1) + (s.dot ? s.dot / 40 : 0) + (s.buff && !(P.buffT > 0) ? 1.6 : 0) + (s.stun || 0); if (v > bv) { bv = v; best = i; } }
  return best;
}

/* ---------- Simulation rapide (estimation des chances) ---------- */
function simulateWin(foe, n = 40) {
  let w = 0;
  for (let i = 0; i < n; i++) { const B = newBattle(foe, 'sim', 'sim'); while (!B.over) battleStep(B, autoPick(B)); if (B.win) w++; }
  return w / n;
}

/* ---------- Vues ---------- */
function hpBar(cur, max, cls, extra = '') {
  return `<div class="mbar ${cls}" style="height:10px"><div class="fill" style="width:${Math.max(0, cur / max * 100)}%;${extra}"></div></div>`;
}
function viewCombatPanel(foe, kind, id) {
  const B = ui.battle;
  if (B && B.id === id && B.kind === (kind === 'story-fight' ? 'story' : 'exp')) return viewBattle(B);
  const scout = hasF('mira'), pc = playerCombat(), fc = foeCombat(foe);
  const chance = scout ? simulateWin(foe, 30) : null;
  return `
    <div class="sys danger">
      <div class="flex items-center justify-between gap-2 mb-2 flex-wrap">
        <div class="sys-title r">${icon('swords', 'w-4 h-4')}Combat</div>
        <span class="f-mono text-xs">Puissance ${cpFromOld(foe.power).toLocaleString('fr-FR')}${chance != null ? ` · chances estimées <b class="${chance >= .7 ? 'glow' : chance >= .35 ? '' : 'red'}">${Math.round(chance * 100)} %</b>` : ''}</span>
      </div>
      <div class="f-display text-lg font-bold">${esc(foe.name)}</div>
      <div class="text-[11px] muted f-mono">PV ${fc.hp} · attaque ${fc.atk} · défense ${fc.def}</div>
      ${scout ? `<div class="text-xs mt-1">Faiblesse (${STATS[foe.weak].name}) : <b class="glow">${WEAK_TXT[foe.weak].weak}</b> · Résistance (${STATS[foe.resist].name}) : <b class="red">${WEAK_TXT[foe.resist].resist}</b> <span class="muted">(rapport de Mira)</span></div>`
              : `<div class="text-xs muted mt-1">Faiblesse inconnue. Une espionne dans votre Maison pourrait la révéler, et estimer vos chances.</div>`}
      <div class="text-[11px] muted f-mono mt-2">Vous : PV ${pc.hp} · attaque ${pc.atk} · défense ${pc.def} · critique ${Math.round(pc.crit * 100)} % (×${pc.critDmg.toFixed(2)}) · esquive ${Math.round(pc.dodge * 100)} %</div>
      ${foe.blocked ? `<p class="text-xs muted mt-2">${esc(foe.blocked)}</p>` : `<button type="button" class="btn solid w-full mt-3" data-a="battle-start" data-kind="${kind === 'story-fight' ? 'story' : 'exp'}" data-id="${id}">${icon('swords', 'w-4 h-4')}Engager le combat</button>`}
    </div>`;
}
function viewBattle(B) {
  const sk = classSkills(), L = curLevel(), P = B.P, E = B.E;
  return `
    <div class="sys danger" id="battle">
      <div class="flex items-center justify-between gap-2 mb-2"><div class="sys-title r">${icon('swords', 'w-4 h-4')}Tour ${Math.min(B.turn, 60)}</div>${B.over ? `<span class="f-display ${B.win ? 'glow' : 'red'}">${B.win ? 'VICTOIRE' : 'DÉFAITE'}</span>` : ''}</div>
      <div class="flex justify-between text-xs mb-1"><span class="f-display">${esc(B.foe.name)}</span><span class="f-mono">${E.cur} / ${E.max}${E.stun ? ' · étourdi' : ''}${E.dots.length ? ' · brûlure' : ''}</span></div>
      ${hpBar(E.cur, E.max, 'over')}
      <div class="flex justify-between text-xs mt-3 mb-1"><span class="f-display">Vous</span><span class="f-mono">${P.cur} / ${P.hp}${P.shield ? ` · bouclier ${P.shield}` : ''}${P.buffT > 0 ? ` · attaque +${P.buff} %` : ''}${P.dodgeT > 0 ? ' · esquive ↑' : ''}</span></div>
      ${hpBar(P.cur, P.hp, 'met')}
      <div class="flex justify-between text-[11px] mt-2 mb-1"><span class="glow-umbra">Jauge d’ultime</span><span class="f-mono">${Math.round(P.charge)} %</span></div>
      <div class="bar int thin"><i style="width:${P.charge}%"></i></div>
      ${B.over ? '' : `<div class="grid grid-cols-2 gap-2 mt-3">${sk.map((s, i) => {
        const locked = L < s.lvl, cd = !s.ult && (P.cds[i] || 0) > 0, noCharge = s.ult && P.charge < 100;
        const dis = locked || cd || noCharge;
        return `<button type="button" class="choice" style="padding:9px 10px;${s.ult ? 'border-color:rgba(139,92,246,.6)' : ''}" data-a="battle-skill" data-i="${i}" ${dis ? 'disabled' : ''} title="${esc(skillDesc(s))}">
          <span class="flex-1 min-w-0" style="${dis ? 'opacity:.45' : ''}"><span class="block text-[13px] truncate ${s.ult ? 'glow-umbra' : ''}">${esc(s.name)}</span>
          <span class="text-[10px] muted f-mono">${locked ? `niv. ${s.lvl}` : cd ? `recharge ${P.cds[i]}` : s.ult ? (noCharge ? 'jauge' : 'PRÊT') : (s.cd ? `cd ${s.cd}` : 'libre')}</span></span></button>`;
      }).join('')}</div>
      <div class="flex gap-2 mt-2"><button type="button" class="btn sm flex-1" data-a="battle-auto">${icon('fast-forward', 'w-3.5 h-3.5')}Combat automatique</button><button type="button" class="btn sm ghost" data-a="battle-flee">Fuir</button></div>`}
      <div class="mt-3 text-[12px] f-mono flex flex-col gap-0.5" style="max-height:150px;overflow:auto">${B.log.slice(0, 12).map((l, i) => `<div class="${i === 0 ? '' : 'muted'}">${esc(l)}</div>`).join('')}</div>
      ${B.over ? `<button type="button" class="btn ${B.win ? 'solid' : 'danger'} w-full mt-3" data-a="battle-close">${B.win ? 'Continuer' : 'Se relever'}</button>` : ''}
    </div>`;
}

/* ---------- Résolution ---------- */
function finishBattle(B) {
  if (B.resolved) return;
  B.resolved = true;
  state.counters.crits = (state.counters.crits || 0) + B.crits;
  if (B.win) state.counters.wins = (state.counters.wins || 0) + 1;
  if (B.kind === 'story') {
    const G = state.story, id = B.id, n = ALL_NODES[id];
    act(() => {
      if (B.win) {
        G.combats[id] = { won: dk() };
        if (n.reward && !G.rewards[id]) { G.rewards[id] = 1; state.bonus.push({ date: dk(), k: Math.round(n.reward * (1 + ((typeof boosts === 'function' ? boosts().kin : 0) || 0) / 100) * (state.followers && state.followers.odile ? 1.1 : 1)), why: n.combat.name }); grantStoryLoot(n); }
        const foe = n.combat.foe || STORY_FOES[id];
        if (foe) codexRecord(foe, true);
      } else G.combats[id] = { lastFail: dk() };
    }, { noRender: true });
  } else if (B.kind === 'exp') expResolve(B);
}

Object.assign(handlers, {
  'battle-start': el => {
    const kind = el.dataset.kind, id = el.dataset.id;
    if (kind === 'story') {
      const S = TS(), G = state.story, n = ALL_NODES[id];
      if (!n || !n.combat || S.node !== id) return;
      const cst = G.combats[id] || {};
      if (cst.won || (cst.lastFail === dk() && !hasF('anselme'))) return;
      ui.battle = newBattle(n.combat, 'story', id);
    } else {
      const cur = ui.exp;
      if (!cur || keysLeft() < cur.cost) return;
      const b = boosts();
      cur.saved = Math.random() * 100 < b.echo;
      if (!cur.saved) state.keysSpent = (state.keysSpent || 0) + cur.cost;
      save();
      ui.battle = newBattle(cur.foe, 'exp', 'exp');
    }
    render();
    const el2 = document.getElementById('battle'); if (el2) el2.scrollIntoView({ block: 'center' });
  },
  'battle-skill': el => {
    const B = ui.battle; if (!B || B.over) return;
    battleStep(B, Number(el.dataset.i));
    if (B.over) finishBattle(B);
    render();
  },
  'battle-auto': () => {
    const B = ui.battle; if (!B || B.over) return;
    let guard = 0;
    while (!B.over && guard++ < 80) battleStep(B, autoPick(B));
    finishBattle(B);
    render();
  },
  'battle-flee': () => {
    const B = ui.battle; if (!B || B.over) return;
    B.over = true; B.win = false; bLog(B, 'Vous battez en retraite.');
    if (B.kind === 'exp') finishBattle(B); else B.resolved = true;
    render();
  },
  'battle-close': () => {
    const B = ui.battle; ui.battle = null;
    if (B && B.kind === 'story' && B.win) { render(); storyScrollTop(); return; }
    render();
  }
});

/* ==========================================================================
   OUTILS — pause, réinitialisation des points, bibliothèque d'exercices
   ========================================================================== */

/* ---------- Pause ---------- */
function viewPauseSettings() {
  const today = dk(), act_ = (state.pauses || []).find(p => today >= p.from && (!p.to || today <= p.to));
  const upcoming = (state.pauses || []).filter(p => p.from > today);
  const satDow = 6, dow = fromKey(today).getDay();
  const nextSat = addDays(today, (satDow - dow + 7) % 7), nextSun = addDays(nextSat, 1);
  return `
  <details class="sys" data-det="pause" ${act_ ? 'open' : ''}>
    <summary class="flex items-center justify-between gap-2"><span class="sys-title">${icon('pause', 'w-4 h-4')}Pause</span><span class="chev muted">${icon('chevron-down')}</span></summary>
    <div class="mt-4 flex flex-col gap-3 text-sm">
      <p class="muted">Un jour en pause ne compte pas : pas de pénalité si la quête n’est pas faite, et votre série n’est pas cassée. Week-end, vacances, maladie : le repos fait partie de l’entraînement.</p>
      ${act_ ? `<div class="card" style="border-color:rgba(139,92,246,.5)"><b class="f-display glow-umbra">Pause en cours</b> depuis le ${esc(fromKey(act_.from).toLocaleDateString('fr-FR'))}${act_.to ? `, jusqu’au ${esc(fromKey(act_.to).toLocaleDateString('fr-FR'))} inclus` : ', sans date de fin'}.
        <div class="mt-2"><button type="button" class="btn sm" data-a="pause-stop">${icon('play', 'w-3.5 h-3.5')}Reprendre aujourd’hui</button></div></div>` : `
      <div class="flex flex-wrap gap-2">
        <button type="button" class="btn sm u" data-a="pause-add" data-from="${today}" data-to="${today}">Aujourd’hui seulement</button>
        <button type="button" class="btn sm u" data-a="pause-add" data-from="${nextSat}" data-to="${nextSun}">Ce week-end</button>
        <button type="button" class="btn sm u" data-a="pause-add" data-from="${today}" data-to="${addDays(today, 6)}">7 jours</button>
        <button type="button" class="btn sm u" data-a="pause-add" data-from="${today}" data-to="${addDays(today, 13)}">14 jours</button>
        <button type="button" class="btn sm ghost" data-a="pause-add" data-from="${today}" data-to="">Sans date de fin</button>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div><label for="pz-from" class="text-[10px] label block mb-1">Du</label><input id="pz-from" type="date" class="input sm" value="${today}"></div>
        <div><label for="pz-to" class="text-[10px] label block mb-1">Au (inclus)</label><input id="pz-to" type="date" class="input sm" value="${addDays(today, 6)}"></div>
      </div>
      <div><button type="button" class="btn sm" data-a="pause-custom">${icon('calendar', 'w-3.5 h-3.5')}Programmer cette pause</button></div>`}
      ${upcoming.length ? `<div class="text-xs"><b class="f-display">Pauses prévues :</b> ${upcoming.map((p, i) => `${esc(fromKey(p.from).toLocaleDateString('fr-FR'))} → ${p.to ? esc(fromKey(p.to).toLocaleDateString('fr-FR')) : '…'} <button type="button" class="underline muted" data-a="pause-del" data-from="${p.from}">annuler</button>`).join(' · ')}</div>` : ''}
    </div>
  </details>`;
}

/* ---------- Mode souple ---------- */
function viewSoftSettings() {
  const m = state.soft || 'off', O = [['off', 'Désactivé', 'Chaque jour compte comme d’habitude.'], ['weekend', 'Week-end sans séance', 'Samedi et dimanche, quand aucune séance n’est exigée.'], ['rest', 'Tous les jours sans séance', 'Chaque jour de repos du programme.']];
  return `
  <details class="sys" data-det="soft" ${m !== 'off' ? 'open' : ''}>
    <summary class="flex items-center justify-between gap-2"><span class="sys-title">${icon('feather', 'w-4 h-4')}Mode souple${m !== 'off' ? ' · actif' : ''}</span><span class="chev muted">${icon('chevron-down')}</span></summary>
    <div class="mt-4 flex flex-col gap-3 text-sm">
      <p class="muted">Une alternative à la pause, facultative. Les jours concernés, vous mangez plus librement : si vous notez vos repas et tenez vos macros, vous gagnez les récompenses habituelles (XP, kinahs, prestige, série). Sinon, vous ne gagnez rien, mais vous ne perdez rien non plus : pas de pénalité, et la série n’est pas cassée.</p>
      <div class="flex flex-col gap-2">${O.map(([id, t, d]) => `<button type="button" class="res ${m === id ? 'on' : ''}" data-a="soft-set" data-m="${id}" aria-pressed="${m === id}" style="${m === id ? 'border-color:rgba(0,240,255,.6)' : ''}"><span class="flex-1 min-w-0 text-left"><span class="block f-display text-sm">${t}</span><span class="block text-[11px] muted">${d}</span></span>${m === id ? icon('check', 'w-4 h-4') : ''}</button>`).join('')}</div>
      <p class="text-[11px] muted">Un jour où le programme exige une séance n’est jamais souple.</p>
    </div>
  </details>`;
}

/* ---------- Bibliothèque d'exercices : 7 par groupe musculaire ---------- */
function LX(name, sets, reps, rest, note, stat) { return { name, sets, reps, rest, note }; }
const EXERCISE_LIBRARY = {
  'Dos': [
    LX('Tractions (ou tractions assistées)', [3, 4], [6, 12], 120, 'Le roi du dos. Trop dur : machine d’assistance ou élastique.'),
    LX('Tirage vertical à la poulie', [3, 4], [10, 15], 120, 'Tirer la barre vers le haut de la poitrine, coudes vers le bas.'),
    LX('Rowing haltère un bras', [3, 4], [10, 15], 90, 'Un genou sur le banc, dos plat, tirer le coude vers la hanche.'),
    LX('Tirage horizontal à la poulie', [3, 4], [10, 15], 120, 'Poitrine sortie, tirer vers le nombril.'),
    LX('Rowing machine guidée', [3, 4], [10, 15], 90, 'Très simple pour débuter : la machine guide le mouvement.'),
    LX('Rowing barre buste penché', [3, 4], [8, 12], 120, 'Dos bien droit. Plus technique : commencer léger.'),
    LX('Pull-over à la poulie haute', [3], [12, 15], 90, 'Bras presque tendus, ramener la barre vers les cuisses.')
  ],
  'Pectoraux': [
    LX('Développé couché à la barre', [3, 4], [8, 12], 120, 'Omoplates serrées, barre vers le bas des pectoraux.'),
    LX('Développé couché aux haltères', [3, 4], [10, 15], 120, 'Plus d’amplitude et plus sûr seul.'),
    LX('Développé incliné aux haltères', [3, 4], [10, 15], 120, 'Banc à 30°, cible le haut des pectoraux.'),
    LX('Pompes', [3], [8, 20], 60, 'Partout, sans matériel. Sur les genoux si c’est trop dur.'),
    LX('Écarté à la poulie (vis-à-vis)', [3], [12, 15], 90, 'Bras légèrement fléchis, serrer les mains devant soi.'),
    LX('Développé à la machine convergente', [3, 4], [10, 15], 90, 'Idéal pour débuter : trajectoire guidée.'),
    LX('Dips, buste penché', [3], [6, 12], 120, 'Pencher le buste en avant pour viser les pectoraux.')
  ],
  'Triceps': [
    LX('Extension à la poulie haute (corde)', [3], [10, 15], 90, 'Coudes collés au corps, écarter la corde en bas.'),
    LX('Barre au front (barre EZ)', [3], [10, 12], 90, 'Descendre la barre vers le front, coudes fixes.'),
    LX('Dips entre deux bancs', [3], [10, 15], 60, 'Sans matériel. Jambes pliées pour faciliter.'),
    LX('Extension nuque à un haltère', [3], [10, 15], 90, 'Assis, haltère derrière la tête, coudes vers le plafond.'),
    LX('Kickback à l’haltère', [3], [12, 15], 60, 'Buste penché, tendre le bras vers l’arrière.'),
    LX('Développé couché prise serrée', [3], [8, 12], 120, 'Mains à largeur d’épaules, coudes près du corps.'),
    LX('Extension à la poulie basse dos à la poulie', [3], [10, 15], 90, 'Étire bien la longue portion du triceps.')
  ],
  'Biceps': [
    LX('Curl aux haltères', [3], [10, 15], 90, 'Coudes fixes, tourner la paume vers le haut en montant.'),
    LX('Curl à la barre EZ', [3], [8, 12], 90, 'Ne pas balancer le dos.'),
    LX('Curl marteau', [3], [10, 15], 90, 'Pouces vers le haut. Travaille aussi l’avant-bras.'),
    LX('Curl à la poulie basse', [3], [12, 15], 90, 'Tension continue tout le long du mouvement.'),
    LX('Curl incliné aux haltères', [3], [10, 12], 90, 'Banc incliné, bras qui pendent : étirement maximal.'),
    LX('Curl au pupitre', [3], [10, 12], 90, 'Bras posés sur le pupitre : impossible de tricher.'),
    LX('Curl concentré', [3], [10, 15], 60, 'Assis, coude contre l’intérieur de la cuisse.')
  ],
  'Épaules': [
    LX('Développé militaire (barre ou machine)', [3, 4], [8, 12], 120, 'Pousser au-dessus de la tête, gainage serré.'),
    LX('Développé aux haltères assis', [3, 4], [10, 12], 120, 'Plus confortable pour les épaules.'),
    LX('Élévations latérales aux haltères', [3, 4], [12, 20], 90, 'Monter jusqu’à l’horizontale, petits poids.'),
    LX('Élévations latérales à la poulie', [3], [12, 15], 60, 'Tension constante, un bras à la fois.'),
    LX('Oiseau (arrière d’épaule)', [3], [12, 15], 60, 'Buste penché, écarter les bras comme des ailes.'),
    LX('Face pull à la poulie', [3], [12, 15], 60, 'Tirer la corde vers le visage. Excellent pour la posture.'),
    LX('Élévations frontales', [3], [10, 15], 60, 'Bras tendus devant soi jusqu’à hauteur des yeux.')
  ],
  'Cuisses (quadriceps et ischios)': [
    LX('Presse à jambes', [3, 4], [10, 15], 120, 'Le plus simple et sûr pour charger lourd.'),
    LX('Squat gobelet (haltère)', [3, 4], [10, 15], 120, 'Haltère contre la poitrine : apprend le squat facilement.'),
    LX('Squat barre', [3, 4], [6, 10], 150, 'Plus technique : apprendre d’abord avec le gobelet.'),
    LX('Leg extension', [3], [12, 15], 90, 'Avant des cuisses (quadriceps).'),
    LX('Leg curl allongé ou assis', [3], [10, 15], 90, 'Arrière des cuisses (ischios).'),
    LX('Soulevé de terre roumain', [3], [8, 12], 120, 'Jambes presque tendues, dos plat, pousser les fesses en arrière.'),
    LX('Fente marchée', [3], [10, 12], 90, 'Grands pas, genou arrière vers le sol. Par jambe.')
  ],
  'Fessiers': [
    LX('Hip thrust', [3, 4], [10, 15], 120, 'Le meilleur pour les fessiers. Dos sur un banc, pousser le bassin vers le haut.'),
    LX('Fente bulgare, grand pas', [3], [10, 15], 120, 'Pied arrière sur un banc, buste légèrement penché. Par jambe.'),
    LX('Kickback à la poulie basse', [3], [12, 15], 60, 'Sangle à la cheville, pousser la jambe vers l’arrière. Par jambe.'),
    LX('Abducteurs à la machine', [3], [15, 20], 60, 'Écarter les jambes : moyen fessier.'),
    LX('Glute bridge au sol', [3], [12, 20], 60, 'Sans matériel, idéal pour débuter.'),
    LX('Step-up sur banc', [3], [10, 12], 90, 'Monter sur un banc en poussant sur le talon. Par jambe.'),
    LX('Soulevé de terre roumain (fessiers)', [3], [8, 12], 120, 'Bien pousser les hanches vers l’avant en remontant.')
  ]
};
const LIB_STAT = { 'Dos': 'agi', 'Pectoraux': 'str', 'Triceps': 'str', 'Biceps': 'agi', 'Épaules': 'str', 'Cuisses (quadriceps et ischios)': 'end', 'Fessiers': 'end' };
function libToEx(x, muscle) {
  return E(gid('e'), x.name, muscle, x.rest, x.note, { warm: 2, setsMin: x.sets[0], setsMax: x.sets[x.sets.length - 1], repMin: x.reps[0], repMax: x.reps[1] || x.reps[0] });
}
function viewLibraryPicker(sid) {
  return `<div class="card mt-2" style="border-color:rgba(0,240,255,.4)">
    <div class="flex items-center justify-between gap-2 mb-2"><span class="label">Bibliothèque d’exercices</span><button type="button" class="ibtn" data-a="lib-close" aria-label="Fermer">${icon('x', 'w-4 h-4')}</button></div>
    ${Object.entries(EXERCISE_LIBRARY).map(([muscle, list]) => `<details class="border-t border-[#24242c] py-1.5"><summary class="flex items-center justify-between gap-2 text-sm f-display">${esc(muscle)}<span class="chev muted">${icon('chevron-down', 'w-4 h-4')}</span></summary>
      <div class="flex flex-col gap-1 mt-1.5">${list.map((x, i) => `<div class="flex items-center gap-2"><span class="flex-1 min-w-0"><span class="block text-sm">${esc(x.name)}</span><span class="text-[11px] muted">${x.sets.join('-')} séries × ${x.reps.join('-')} · ${esc(x.note)}</span></span>
        <button type="button" class="btn sm" data-a="lib-add" data-sid="${sid}" data-m="${esc(muscle)}" data-i="${i}">${icon('plus', 'w-3 h-3')}</button></div>`).join('')}</div></details>`).join('')}
  </div>`;
}

Object.assign(handlers, {
  'respec': () => { ui.armed = null; state.alloc = { str: 0, agi: 0, end: 0, int: 0 }; save(); render(); toast(`${icon('rotate-ccw', 'w-4 h-4')}<span>Points de statistiques rendus. Répartissez-les à nouveau.</span>`); },
  'pause-add': el => {
    const from = el.dataset.from, to = el.dataset.to || null;
    state.pauses = (state.pauses || []).concat({ from, to }); save(); render();
    toast(`${icon('pause', 'w-4 h-4')}<span>Pause enregistrée.</span>`, 'umbra');
  },
  'pause-custom': () => {
    const f = (document.getElementById('pz-from') || {}).value, t = (document.getElementById('pz-to') || {}).value;
    if (!f || (t && t < f)) { toast(`${icon('info', 'w-4 h-4')}<span>Dates invalides.</span>`, 'redt'); return; }
    handlers['pause-add']({ dataset: { from: f, to: t || '' } });
  },
  'soft-set': el => { state.soft = el.dataset.m; save(); render(); },
  'pause-stop': () => {
    const today = dk();
    state.pauses = (state.pauses || []).map(p => (today >= p.from && (!p.to || today <= p.to)) ? { from: p.from, to: addDays(today, -1) } : p).filter(p => !p.to || p.to >= p.from);
    save(); render();
  },
  'pause-del': el => { state.pauses = (state.pauses || []).filter(p => p.from !== el.dataset.from); save(); render(); },
  'lib-open': el => { ui.libFor = el.dataset.sid; ui.openSessions.add(el.dataset.sid); ui.openProgram = true; render(); },
  'lib-close': () => { ui.libFor = null; render(); },
  'lib-add': el => {
    const S = findSession(el.dataset.sid), x = EXERCISE_LIBRARY[el.dataset.m] && EXERCISE_LIBRARY[el.dataset.m][Number(el.dataset.i)];
    if (!S || !x) return;
    act(() => { S.ex.push(libToEx(x, el.dataset.m)); });
    toast(`${icon('plus', 'w-4 h-4')}<span>${esc(x.name)} ajouté à ${esc(S.name)}.</span>`);
  }
});

/* ============================================================
   Optimisation automatique : points de statistiques, équipement et puces selon un objectif.
   - dps    : dégâts maximum, tels qu'en combat réel : la recharge (bijou) multiplie la fréquence des techniques et des ultimes
   - combat : le meilleur compromis PV / dégâts (produit dégâts × résistance)
   - poly   : polyvalent (dégâts × résistance × gains d'XP et de kinahs)
   - prog   : montée en puissance la plus rapide (dégâts × gains, sans résistance : combat automatique)
   Le plan « maintenant » n'utilise que ce que le joueur possède et s'équipe tout seul ;
   le plan « idéal » ajoute les objets Éternels de la boutique, proposés à l'achat.
   ============================================================ */
const OPT_GOALS = {
  dps:    { name: 'Dégâts maximum',     icon: 'swords',  desc: 'Le DPS réel en combat : attaques, techniques et ultimes, recharge du bijou et vitesse de la ceinture comprises.' },
  combat: { name: 'Puissance de combat', icon: 'scale',  desc: 'La plus haute puissance de combat : dégâts par seconde et résistance ensemble.' },
  poly:   { name: 'Polyvalent',         icon: 'compass', desc: 'Dégâts, résistance, XP et kinahs à parts égales.' },
  prog:   { name: 'Progression rapide', icon: 'rocket',  desc: 'XP, kinahs et dégâts, sans résistance (pour le combat automatique).' }
};
const OPT_SHOP_R = 6;   /* meilleure rareté vendue en boutique (Éternel) */
/* Achats : rareté visée (0 Commun … 6 Éternel) et monnaie (kinahs seuls, ou kinahs + gloire de l'arène) */
let _optShopR = OPT_SHOP_R, _optCur = 'kin';
function optBuyCfg() { const c = state.optBuy = state.optBuy || {}; if (!(c.r >= 0 && c.r <= OPT_SHOP_R)) c.r = OPT_SHOP_R; if (c.cur !== 'glory') c.cur = 'kin'; return c; }
function optUseCfg() { const c = optBuyCfg(); _optShopR = c.r; _optCur = c.cur; return c; }
function optGlory() { return typeof arenaState === 'function' ? (arenaState().glory || 0) : 0; }
const OPT_STATS = ['str', 'agi', 'end', 'int'];
/* garde-fou de durée : passé ce délai, l'optimisation garde le meilleur résultat trouvé au lieu de bloquer l'appli */
let _optDL = Infinity; const optLate = () => performance.now() > _optDL;

/* Base d'une configuration d'équipement : tout ce qui ne dépend ni des points ni des puces */
function optBase() {
  const chips0 = state.chipEq, alloc0 = state.alloc;
  state.chipEq = []; state.alloc = { str: 0, agi: 0, end: 0, int: 0 }; _bm = null;
  try {
    const b = boosts(), pc = playerCombat(), sv = statValues();
    const L = powerLvl();
    const ck = (1 + cosmStatPct() / 100) * rankStatK(L);
    const e = { str: effStat('str'), agi: effStat('agi'), end: effStat('end') };
    const W = weaponStats(pc.weapon);
    const off = invItem(state.gear.off), dual = !!(off && WEAPON_TYPES[off.type]), R = pc.runes || {};
    return { b: { ...b }, ck, e, int0: sv.int, intPart: b.parts ? b.parts.int : 0, W, yan: hasF('yanis') ? 1.1 : 1, power: pc.power, cdr: pc.cdr, spd: pc.spd, hpPct: pc.hpPct,
      aps: 2 * (pc.power || 0.9) * (1 + (pc.spd || 0)) * 1.15, exec: pc.exec || 0, fr: R.fracture || 0, rico: !!R.ricochet, nRef: Math.max(20, _optNRef || 20), L };
  } finally { state.chipEq = chips0; state.alloc = alloc0; _bm = null; }
}
/* Effet des puces sur les bonus (mêmes règles que boosts()) */
function optBoosts(B, chips) {
  const b = { ...B.b };
  for (const k of chips) { const [t, r] = k.split(':'), v = CHIP_VALUES[Number(r)]; if (t === 'arcane') { b.xp += v; b.kin += v; b.arcane = (b.arcane || 0) + v; } else b[CHIP_BOOST[t]] = (b[CHIP_BOOST[t]] || 0) + v; }
  for (const k of ['crit', 'soin', 'echo', 'garde']) b[k] = Math.min(60, b[k] || 0);
  b.rar = Math.min(75, b.rar || 0);
  return b;
}
/* Mesures d'un build : dégâts, résistance, gains */
function optMetrics(B, x, chips) {
  const b = optBoosts(B, chips);
  const F = (B.e.str + B.ck * (x.str || 0)) * (1 + (b.force || 0) / 100);
  const A = (B.e.agi + B.ck * (x.agi || 0)) * (1 + (b.vitesse || 0) / 100);
  const E = (B.e.end + B.ck * (x.end || 0)) * (1 + (b.rempart || 0) / 100);
  const I = B.int0 + B.ck * (x.int || 0);
  const atk = (10 + F * 1.1) * B.yan;
  const crit = Math.min(STAT_CAPS.crit, 0.05 + B.W.crit + A * 0.0018 + (b.crit || 0) / 100), cdm = B.W.cdm + A * 0.004;
  /* rotation du combat réel (combat.js du monde ouvert) : chaque technique de dégâts vaut 0,622 × recharge / nb de techniques
     secondes d'attaques de base, l'ultime 7 s sur une recharge de 30 s, et la valeur par seconde est divisée par (1 − recharge réduite),
     plafonnée à 90 % comme en combat. Somme pour toutes les classes : 0,622 + 7/30 = 0,855 seconde d'attaques de base par seconde. */
  const rot = 1 + 0.855 / (1 - Math.min(0.9, B.cdr || 0));
  const dps = atk * (1 + crit * (cdm - 1)) * B.power * (1 + 0.5 * B.spd) * rot * (1 + B.hpPct / 50);
  const hp = 120 + E * 10, def = E * 1.0, dodge = Math.min(STAT_CAPS.dodge, A * 0.0012), share = E / (E + 20 * B.L + 200);
  /* la ténacité (part de l'Endurance) compte double : aux vagues hautes, c'est elle qui fixe le nombre de coups encaissés */
  const tank = hp * (1 + def / 100) / (1 - dodge) * Math.pow(0.9 + 1.5 * share, 2) * (1 + (b.regen || 0) / 100) * (1 + (b.soin || 0) / 100);
  const xp = b.xp - B.intPart + I * 0.25, kin = b.kin - B.intPart + I * 0.25;
  const gain = Math.sqrt((1 + xp / 100) * (1 + kin / 100)) * Math.pow((1 + (b.rar || 0) / 100) * (1 + (b.mat || 0) / 100) * (1 + (b.echo || 0) / 100), 0.25);
  /* puissance de combat (même calcul que le Statut) et ennemis abattus par seconde à votre niveau */
  const pro = { atk, aps: B.aps, crit, cdm, hpp: B.hpPct / 100, fr: B.fr, exec: B.exec, tough: toughness(F, A, E, B.L, true), dodge, rico: B.rico };
  const power = cpWaveR(pro), N = cpHits(B.nRef, pro), kps = isFinite(N) ? B.aps / (4 * N) * (B.rico ? 2.5 : 1) : 1e-9 * dps;
  return { dps, tank, gain, power, kps, kpsR: kps * rot, rot, hp: Math.round(hp), xp: Math.round(xp), kin: Math.round(kin), crit };
}
function optScore(goal, m) {
  /* les critères hors objectif comptent très peu : ils départagent seulement les emplacements de puces restés libres */
  /* dégâts = ennemis abattus par seconde à votre niveau ; combat = puissance de combat ; les dégâts bruts départagent (vagues basses) */
  const l = Math.log, e = 0.002, K = l(m.kpsR || m.kps) + e * l(m.dps), P = l(m.power) + e * l(m.dps), T = l(m.tank), G = l(m.gain);
  return goal === 'dps' ? K + 0.1 * P + e * G : goal === 'combat' ? P + e * (K + G) : goal === 'poly' ? P + K + G : K + G + e * P;
}
/* Répartition des n points : ajout pas à pas de la statistique la plus rentable, puis transferts entre statistiques */
function optStats(goal, B, chips, n) {
  const x = { str: 0, agi: 0, end: 0, int: 0 }, S = () => optScore(goal, optMetrics(B, x, chips));
  const step = Math.max(1, Math.ceil(n / 240));
  let left = n;
  while (left > 0) {
    const d = Math.min(step, left); let best = null, bv = -Infinity;
    for (const s of OPT_STATS) { x[s] += d; const v = S(); x[s] -= d; if (v > bv) { bv = v; best = s; } }
    x[best] += d; left -= d;
  }
  for (let st = step; st >= 1; st = st > 1 ? Math.max(1, Math.floor(st / 3)) : 0) {
    let moved = true, guard = 0;
    while (moved && guard++ < 400 && !optLate()) {
      moved = false; const cur = S();
      for (const a of OPT_STATS) for (const c of OPT_STATS) {
        if (a === c || x[a] < st) continue;
        x[a] -= st; x[c] += st; if (S() > cur + 1e-12) { moved = true; break; } x[a] += st; x[c] -= st;
      }
    }
    if (st === 1) break;
  }
  return x;
}
/* Puces : on remplit les emplacements un par un avec la plus rentable (possédées libres, ou boutique Éternelle si shop) */
function optChips(goal, B, x, shop) {
  const owned = {}; for (const k in state.chips) if (state.chips[k] > 0) owned[k] = state.chips[k];
  const chosen = [];
  for (let i = 0; i < CHIP_SLOTS; i++) {
    let best = null, bv = -Infinity;
    const base = optScore(goal, optMetrics(B, x, chosen));
    for (const t in CHIP_TYPES) {
      const cands = [];
      const r = Object.keys(owned).filter(k => k.startsWith(t + ':') && owned[k] > 0).map(k => Number(k.split(':')[1])).sort((a, c) => c - a)[0];
      if (r !== undefined) cands.push({ k: chipKey(t, r), own: true });
      if (shop && (r === undefined || r < _optShopR)) cands.push({ k: chipKey(t, _optShopR), own: false });
      for (const c of cands) { const v = optScore(goal, optMetrics(B, x, [...chosen, c.k])); if (v > bv) { bv = v; best = c; } }
    }
    if (!best || bv <= base + 1e-9) break;
    chosen.push(best.k); if (best.own) owned[best.k]--;
  }
  return chosen;
}
/* Meilleure pièce possédée d'un type (hors uids exclus).
   En mode achat : une pièce neuve de la rareté visée, améliorée à +4, si l'on n'a rien d'aussi rare ; une pièce possédée de cette rareté est comptée à +4 (amélioration à acheter). */
function optPiece(type, exclude, shop) {
  const own = state.inv.filter(it => it.type === type && !exclude.includes(it.uid)).sort((a, c) => c.r - a.r || (c.up || 0) - (a.up || 0) || (c.runes || []).length - (a.runes || []).length)[0];
  if (shop && (!own || own.r < _optShopR)) return { uid: 'opt-v-' + type + '-' + exclude.length, type, r: _optShopR, up: UPGRADE_MAX, virtual: true };
  if (shop && own && (own.up || 0) < UPGRADE_MAX) return { ...own, uid: own.uid + '~up', up: UPGRADE_MAX, virtual: true, upOf: own.uid };
  return own || null;
}
/* Évalue une configuration d'équipement : points et puces optimisés ensemble */
function optEval(goal, gear, shop, n) {
  const gear0 = state.gear, inv0 = state.inv;
  const virt = Object.values(gear).filter(it => it && it.virtual);
  state.inv = [...inv0, ...virt];
  state.gear = {}; for (const s in gear) state.gear[s] = gear[s] ? gear[s].uid : null;
  try {
    const B = optBase();
    let x = optStats(goal, B, [], n), chips = [];
    for (let k = 0; k < 2; k++) { chips = optChips(goal, B, x, shop); x = optStats(goal, B, chips, n); }
    const m = optMetrics(B, x, chips);
    return { gear, x, chips, m, score: optScore(goal, m) };
  } finally { state.gear = gear0; state.inv = inv0; _bm = null; }
}
const OPT_ARMOR = ['casque', 'plastron', 'jambieres', 'bottes', 'bijou', 'ceinture'];
/* Plan complet pour un objectif ; shop = autoriser les achats en boutique */
let _optNRef = 0;
function optPlan(goal, shop) {
  if (!shop) _optNRef = combatPower().power;
  const c = curClass(), L = powerLvl(), n = pointsEarned(L);
  const armor = {}; for (const a of OPT_ARMOR) armor[a] = optPiece(a, [], shop);
  let best = null;
  for (const [mt, ot] of c.loadouts) {
    const main = optPiece(mt, [], shop); if (!main) continue;
    const two = WEAPON_TYPES[mt].hands === 2;
    const off = two || !ot ? null : optPiece(ot, [main.upOf || main.uid], shop);
    const r = optEval(goal, { main, off, ...armor }, shop, n);
    /* l'assassin : dague en main droite et épée en main gauche est la meilleure configuration du monde ouvert (léger avantage à égalité) */
    if (c === CLASSES.assassin && mt === 'dague' && ot === 'epee') r.score += 0.02;
    if (!best || r.score > best.score) best = { ...r, loadout: [mt, ot] };
  }
  if (!best) best = { ...optEval(goal, { main: null, off: null, ...armor }, shop, n), loadout: [] };
  return best;
}
/* ---------- Tout le reste : runes, cosmétiques, skins d'armes, monture ----------
   Runes, sur les armures seulement (l'arme change avec la classe) : Ricochet jusqu'à 100 %, Fracture jusqu'à 150 %, Égide jusqu'à 60 %,
   une Céleste, une Lacération pour les classes de corps à corps. Pas d'Écho. Une rune sertie ne se retire plus. */
const OPT_RUNE_ORDER = ['ricochet', 'fracture', 'egide', 'celeste', 'laceration', 'echo'];
function optRunes(items, shop) {
  items = items.filter(it => it && ARMOR_TYPES[it.type]);   /* seulement les armures : communes à toutes les classes, contrairement à l'arme */
  const pool = { ...(state.runes || {}) }, sum = { fracture: 0, echo: 0, egide: 0, ricochet: 0, laceration: 0, celeste: 0 }, sockets = [], buy = [];
  for (const it of items) for (const k of it.runes || []) { const [t, r] = k.split(':'); if (RUNE_TYPES[t]) sum[t] += RUNE_TYPES[t].v[+r]; }
  const melee = !['rodeur', 'sorcier', 'spiritualiste', 'clerc', 'aede', 'pistolero', 'barde', 'peintre'].includes(state.profile && state.profile.cls);
  const need = t => t === 'ricochet' ? sum.ricochet < 100 : t === 'fracture' ? sum.fracture < 150 : t === 'egide' ? sum.egide < 60 : t === 'celeste' ? sum.celeste < 1 : t === 'laceration' ? melee && sum.laceration < 1 : false;
  /* une rune trop faible gâcherait un emplacement définitif : au moins Mythique (ou une rareté de moins que la pièce) */
  const minR = it => Math.min(5, it.r - 1);
  const bestOwned = (t, it) => Object.keys(pool).filter(k => k.startsWith(t + ':') && pool[k] > 0 && +k.split(':')[1] >= minR(it)).sort((a, b) => +b.split(':')[1] - +a.split(':')[1])[0];
  /* achat : De toute éternité avec la gloire, sinon la rareté visée (payée en kinahs) */
  const rr = _optCur === 'glory' ? 7 : Math.min(OPT_SHOP_R, _optShopR);
  for (const it of items) { let free = runeSlots(it) - (it.runes || []).length;
    while (free-- > 0) { let done = false;
      for (const t of OPT_RUNE_ORDER) { if (!need(t)) continue; const o = bestOwned(t, it);
        if (o) { pool[o]--; sockets.push({ uid: it.uid, k: o }); sum[t] += RUNE_TYPES[t].v[+o.split(':')[1]]; done = true; break; }
        if (shop && rr >= minR(it) && ['ricochet', 'fracture', 'egide', 'celeste'].includes(t)) { buy.push(rr === 7 ? { kind: 'rune', t, r: 7, price: RUNE_GLORY_PRICE, cur: 'glory' } : { kind: 'rune', t, r: rr, price: RUNE_PRICES[rr], cur: 'kin' }); sum[t] += RUNE_TYPES[t].v[rr]; done = true; break; } }
      if (!done) break; } }
  return { sockets, buy };
}
/* cosmétiques : dans chaque catégorie, le plus rare que l'on possède (chacun ajoute un % à toutes les statistiques) ;
   skins d'armes : le plus rare pour chaque arme portée ; monture : la plus rare (statistiques et vitesse).
   En mode achat : rien au-dessus de la rareté visée, sauf le skin d'arme De toute éternité payé en gloire. */
function optCosm(weapTypes, shop) {
  const eq = {}, buy = [], best = L => L.sort((a, b) => b.r - a.r)[0], R = _optShopR;
  for (const cat of Object.keys(COSMETIC_CATS)) { if (cat === 'armeskin') continue;
    const own = best(COSMETICS.filter(c => c.cat === cat && cosmOwned(c.id))); if (own) eq[cat] = own.id;
    if (shop) { const b = COSMETICS.filter(c => c.cat === cat && c.price && c.r <= R && !cosmOwned(c.id)).sort((a, c) => c.r - a.r || a.price - c.price)[0]; if (b && (!own || b.r > own.r)) buy.push({ kind: 'cosm', id: b.id, t: cat, r: b.r, price: b.price, cur: 'kin', name: b.name }); } }
  let wsOwnBest = -1, wsBuy = null;
  for (const t of weapTypes) { const own = best(COSMETICS.filter(c => c.cat === 'armeskin' && c.id.startsWith('ws_' + t + '_') && cosmOwned(c.id))); if (own) { eq['ws:' + t] = own.id; wsOwnBest = Math.max(wsOwnBest, own.r); }
    if (shop && !wsBuy) { const L = COSMETICS.filter(c => c.cat === 'armeskin' && c.id.startsWith('ws_' + t + '_') && !cosmOwned(c.id) && (c.price ? c.r <= R : _optCur === 'glory' && c.how.type === 'glory')).sort((a, c) => c.r - a.r);
      const b = L[0]; if (b) wsBuy = b.how.type === 'glory' ? { kind: 'cosm', id: b.id, t: 'ws:' + t, r: b.r, price: WSKIN_GLORY, cur: 'glory', name: b.name } : { kind: 'cosm', id: b.id, t: 'ws:' + t, r: b.r, price: b.price, cur: 'kin', name: b.name }; } }
  if (wsBuy && wsBuy.r > wsOwnBest) buy.push(wsBuy);   /* seul le skin le plus rare des armes en main compte : un seul suffit */
  const mOwn = SHOP.filter(i => i.cat === 'mount' && state.owned[i.id]).sort((a, b) => b.r - a.r || (b.spdK || 1) - (a.spdK || 1))[0];
  const mount = mOwn ? mOwn.id : null;
  if (shop) { const b = SHOP.filter(i => i.cat === 'mount' && !state.owned[i.id] && !i.story && !i.eternal && i.r <= R).sort((a, c) => c.r - a.r || itemPrice(a) - itemPrice(c))[0]; if (b && (!mOwn || b.r > mOwn.r)) buy.push({ kind: 'mount', id: b.id, r: b.r, price: itemPrice(b), cur: 'kin', name: b.name }); }
  return { eq, mount, buy };
}
/* Achats nécessaires pour passer du plan actuel au plan idéal (à la rareté visée) */
function optMissing(ideal) {
  const out = [];
  for (const s in ideal.gear) { const it = ideal.gear[s]; if (!it || !it.virtual) continue;
    if (it.upOf) { const o = invItem(it.upOf); if (o && (o.up || 0) < UPGRADE_MAX) out.push({ kind: 'up', uid: o.uid, slot: s, t: o.type, r: o.r, from: o.up || 0 }); }
    else out.push({ kind: 'gear', slot: s, t: it.type, r: it.r }); }
  const own = { ...state.chips };
  for (const k of ideal.chips) { if ((own[k] || 0) > 0) { own[k]--; continue; } const [t, r] = k.split(':'); out.push({ kind: 'chip', t, r: Number(r), price: CHIP_PRICES[Number(r)], cur: 'kin' }); }
  /* runes pour les emplacements libres des pièces du plan idéal (comptées à +4 : deux emplacements), cosmétiques, skin d'arme, monture */
  const items = Object.values(ideal.gear).filter(Boolean);
  out.push(...optRunes(items, true).buy);
  out.push(...optCosm([ideal.gear.main, ideal.gear.off].filter(Boolean).map(it => it.type), true).buy);
  /* ordre d'achat : les pièces et leurs améliorations d'abord (les runes s'y sertiront), puis puces, runes, cosmétiques et monture */
  const ORD = { gear: 0, up: 1, chip: 2, rune: 3, cosm: 4, mount: 5 };
  return out.sort((a, b) => ORD[a.kind] - ORD[b.kind]);
}
/* ---------- Prix et achat d'une ligne ---------- */
/* kinahs pour monter une pièce de « from » à +4, matériaux manquants achetés au passage (estimation) */
function optUpK(r, from) {
  const tot = { kin: 0 }; for (let u = from; u < UPGRADE_MAX; u++) { const c = upgradeCost({ r, up: u }); for (const k in c) tot[k] = (tot[k] || 0) + c[k]; }
  return tot.kin + missingCost(tot).k;
}
function optLineCost(m) {
  if (m.kind === 'gear') return { kin: gearPrice(m.r) + optUpK(m.r, 0), glory: 0 };
  if (m.kind === 'up') { const it = invItem(m.uid); return { kin: it ? optUpK(it.r, it.up || 0) : 0, glory: 0 }; }
  return m.cur === 'glory' ? { kin: 0, glory: m.price } : { kin: m.price, glory: 0 };
}
function optSum(list) { return list.reduce((a, m) => { const c = optLineCost(m); a.kin += c.kin; a.glory += c.glory; return a; }, { kin: 0, glory: 0 }); }
/* une rune attend que les pièces qui la porteront soient achetées (une rune sertie ne se retire plus) */
function optBlocked(m, list) { return m.kind === 'rune' && list.some(x => x.kind === 'gear' || x.kind === 'up'); }
function optSpend(id, price) { state.buys.push({ id, price, date: dk() }); _memo = null; }
/* amélioration jusqu'à +4, en achetant les matériaux manquants */
function optUpgrade(it) {
  while ((it.up || 0) < UPGRADE_MAX) {
    const c = upgradeCost(it), mc = missingCost(c); if (kinahs() < c.kin + mc.k) return false;
    for (const m in mc.miss) state.mats[m] = (state.mats[m] || 0) + mc.miss[m];
    if (mc.k) optSpend('m:auto', mc.k);
    for (const m in MATERIALS) state.mats[m] = (state.mats[m] || 0) - (c[m] || 0);
    optSpend('up:' + it.uid, c.kin); it.up = (it.up || 0) + 1;
  }
  return true;
}
function optBuyLine(m) {
  _memo = null; const C = optLineCost(m);
  if (kinahs() < C.kin || optGlory() < C.glory) return false;
  const payGlory = p => { const A = arenaState(); A.glory -= p; };
  if (m.kind === 'gear') { const it = makeItem(m.r, m.t); state.inv.push(it); optSpend('g:' + it.uid, gearPrice(m.r)); optUpgrade(it); }
  else if (m.kind === 'up') { const it = invItem(m.uid); if (!it) return false; optUpgrade(it); }
  else if (m.kind === 'rune') { if (m.cur === 'glory') payGlory(m.price); else optSpend('r:' + m.t + m.r, m.price); state.runes = state.runes || {}; state.runes[runeKey(m.t, m.r)] = (state.runes[runeKey(m.t, m.r)] || 0) + 1; }
  else if (m.kind === 'cosm') { if (cosmOwned(m.id)) return true; if (m.cur === 'glory') payGlory(m.price); else optSpend('x:' + m.id, m.price); state.cosm[m.id] = dk(); }
  else if (m.kind === 'mount') { if (state.owned[m.id]) return true; optSpend(m.id, m.price); state.owned[m.id] = true; }
  else { addChip(m.t, m.r); optSpend('c:' + m.t + m.r, m.price); }
  _bm = null; return true;
}
/* Applique le plan « maintenant » : points, équipement possédé, puces possédées */
/* emplacement compatible avec un objet (sans tenir compte de ce qui est déjà porté) */
function optSlotOk(s, it) {
  if (s === 'main') return !!WEAPON_TYPES[it.type] && canMain(it.type);
  if (s === 'off') { const m = invItem(state.gear.main); return !!m && m.uid !== it.uid && (!!WEAPON_TYPES[it.type] || it.type === 'bouclier') && classOffs().includes(it.type) && canOff(it.type, m.type); }
  return it.type === s;
}
/* score d'un objectif pour ce qui est porté maintenant (points et puces actuels) */
function optCurScore(goal) { const B = optBase(); return optScore(goal, optMetrics(B, state.alloc, state.chipEq || [])); }
/* recherche locale sur la vraie puissance de combat : chaque emplacement essaie les meilleurs objets possédés et garde ce qui fait monter le chiffre */
function optRefineGear(score) {
  const slots = ['main', 'off', ...OPT_ARMOR]; let best = score();
  for (let pass = 0; pass < 2; pass++) for (const s of slots) { if (optLate()) break;
    const cands = state.inv.filter(it => optSlotOk(s, it)).sort((a, c) => c.r - a.r || (c.up || 0) - (a.up || 0) || (c.runes || []).length - (a.runes || []).length).slice(0, 8);
    for (const it of cands) { if (state.gear[s] === it.uid) continue; const keep = { ...state.gear }, prev = equippedSlot(it.uid);
      if (prev) state.gear[prev] = null; state.gear[s] = it.uid; validateGear(); _bm = null;
      const v = score(); if (v > best + 1e-9) best = v; else { state.gear = keep; _bm = null; } }
  }
  return best;
}
/* Applique le plan « maintenant » : points, équipement, puces, cosmétiques, monture, puis runes.
   Garantie : avec l'objectif « Puissance de combat », la puissance ne baisse jamais (sinon on garde la meilleure des configurations essayées). */
function optApply(goal) {
  const ownDL = _optDL === Infinity; if (ownDL) _optDL = performance.now() + 6000;
  try { return optApply0(goal); } finally { if (ownDL) _optDL = Infinity; }
}
function optApply0(goal) {
  const before = playerCombat(), pBefore = combatPower().power, dBefore = optMetrics(optBase(), state.alloc, state.chipEq || []).dps;
  const snap = { alloc: { ...state.alloc }, gear: { ...state.gear }, chipEq: (state.chipEq || []).slice() };
  optUseCfg();
  const now = optPlan(goal, false), ideal = optPlan(goal, true);
  /* cosmétiques, skins d'armes et monture les plus rares : ils ne font que monter les statistiques */
  const applyCosm = () => { const worn = Object.values(state.gear).map(u => invItem(u)).filter(Boolean), C = optCosm(worn.filter(it => WEAPON_TYPES[it.type]).map(it => it.type), false); state.cosmEq = state.cosmEq || {}; let n = 0; for (const k in C.eq) { if (state.cosmEq[k] !== C.eq[k]) n++; state.cosmEq[k] = C.eq[k]; } if (C.mount && state.equip.mount !== C.mount) { state.equip.mount = C.mount; n++; } _bm = null; return n; };
  let cosmN = applyCosm();
  const power = () => combatPower().power;
  /* 1. le plan calculé */
  state.alloc = { str: now.x.str, agi: now.x.agi, end: now.x.end, int: now.x.int };
  state.gear = { main: null, off: null, casque: null, plastron: null, jambieres: null, bottes: null, bijou: null, ceinture: null };
  for (const s in now.gear) if (now.gear[s] && !now.gear[s].virtual) state.gear[s] = now.gear[s].uid;
  validateGear(); state.chipEq = now.chips.slice(); _bm = null;
  /* 2. affinage pièce par pièce sur la vraie puissance, puis points et puces recalculés pour ces pièces */
  /* l'Égide (survie) et la Céleste (combat en vol) ne changent pas le chiffre de puissance : on leur donne un petit poids pour ne pas les jeter */
  const worth = () => { const R = runePerks(); return power() * (1 + 0.10 * Math.min(1, R.egide / 60) + 0.05 * (R.celeste > 0 ? 1 : 0)); };
  /* dégâts, polyvalence, progression : chaque emplacement essaie toutes les pièces possédées (rareté, amélioration, runes, recharge, vitesse)
     sur le score de l'objectif, puis points et puces sont recalculés pour la configuration retenue */
  if (goal !== 'combat') { const sc = () => optCurScore(goal); optRefineGear(sc);
    const g = {}; for (const s in state.gear) g[s] = invItem(state.gear[s]); const n = pointsEarned(powerLvl()), r2 = optEval(goal, g, false, n);
    const keepA = { ...state.alloc }, keepC = state.chipEq.slice(), v1 = sc();
    state.alloc = { str: r2.x.str, agi: r2.x.agi, end: r2.x.end, int: r2.x.int }; state.chipEq = r2.chips.slice(); _bm = null;
    if (sc() < v1) { state.alloc = keepA; state.chipEq = keepC; _bm = null; } else optRefineGear(sc); }
  if (goal === 'combat') { optRefineGear(worth);
    const g = {}; for (const s in state.gear) g[s] = invItem(state.gear[s]); const n = pointsEarned(powerLvl()), r2 = optEval(goal, g, false, n);
    const keepA = { ...state.alloc }, keepC = state.chipEq.slice(), p1 = power();
    state.alloc = { str: r2.x.str, agi: r2.x.agi, end: r2.x.end, int: r2.x.int }; state.chipEq = r2.chips.slice(); _bm = null;
    if (power() < p1) { state.alloc = keepA; state.chipEq = keepC; _bm = null; } }
  /* 3. garde-fou : jamais moins que la configuration de départ (points, pièces, puces) */
  let kept = false;
  if (goal === 'combat' && power() < pBefore) { state.alloc = snap.alloc; state.gear = snap.gear; state.chipEq = snap.chipEq; _bm = null; cosmN = applyCosm() + cosmN; kept = true; }
  /* 4. runes possédées serties dans les emplacements libres des armures portées (elles ne font que monter la puissance) */
  const worn = Object.values(state.gear).map(u => invItem(u)).filter(Boolean), R = optRunes(worn, false);
  let socketed = 0; for (const x of R.sockets) { const it = invItem(x.uid); if (!it || !(state.runes[x.k] > 0) || (it.runes || []).length >= runeSlots(it)) continue; state.runes[x.k]--; it.runes = (it.runes || []).concat([x.k]); socketed++; }
  _bm = null; save();
  const after = playerCombat();
  const mA = optMetrics(optBase(), state.alloc, state.chipEq || []);
  ui.optPlan = { goal, socketed, cosmN, kept, powBefore: pBefore, powAfter: combatPower().power, dpsK: mA.dps / Math.max(1e-9, dBefore), cdr: playerCombat().cdr || 0, missing: optMissing(ideal), now: now.m, ideal: ideal.m, loadout: ideal.loadout, gainDps: dpsScore(after) / Math.max(1, dpsScore(before)), hp: [before.hp, after.hp] };
  return ui.optPlan;
}
function optItemLabel(m) {
  if (m.kind === 'rune') return `<b style="color:${RARITIES[m.r].color}">${esc(RUNE_TYPES[m.t].name)}</b> <span class="muted">${esc(RARITIES[m.r].name)} · sertie automatiquement</span>`;
  if (m.kind === 'cosm') return `<b style="color:${RARITIES[m.r].color}">${esc(m.name)}</b> <span class="muted">${m.t.startsWith('ws:') ? 'skin d’arme' : esc(COSMETIC_CATS[m.t] || '')} · ${esc(RARITIES[m.r].name)}</span>`;
  if (m.kind === 'mount') return `<b style="color:${RARITIES[m.r].color}">${esc(m.name)}</b> <span class="muted">monture · ${esc(RARITIES[m.r].name)}</span>`;
  const tn = t => (WEAPON_TYPES[t] || ARMOR_TYPES[t]).name, side = m.slot === 'off' ? ' (main gauche)' : m.slot === 'main' ? ' (main droite)' : '';
  if (m.kind === 'up') { const it = invItem(m.uid); return `<b style="color:${RARITIES[m.r].color}">Amélioration ${esc(tn(m.t))}${side}</b> <span class="muted">${esc(RARITIES[m.r].name)} +${it ? it.up || 0 : m.from} → +${UPGRADE_MAX} (matériaux compris)</span>`; }
  if (m.kind === 'gear') return `<b style="color:${RARITIES[m.r].color}">${esc(tn(m.t))}${side}</b> <span class="muted">${esc(RARITIES[m.r].name)} · amélioré à +${UPGRADE_MAX}</span>`;
  return `<b style="color:${RARITIES[m.r].color}">Puce ${esc(CHIP_TYPES[m.t].name)}</b> <span class="muted">${esc(RARITIES[m.r].name)}</span>`;
}
/* objets regroupés (ex. 5 puces Rempart Éternelles) ; les améliorations restent séparées (une par pièce) */
function optGroups(list) {
  const G = [];
  list.forEach((m, i) => { const k = m.kind + ':' + m.t + ':' + m.r + ':' + (m.slot || '') + ':' + (m.uid || '') + ':' + (m.cur || ''); let g = G.find(x => x.k === k); if (!g) G.push(g = { k, m, n: 0, idx: [] }); g.n++; g.idx.push(i); });
  return G;
}
const optFmt = n => Math.round(n).toLocaleString('fr-FR');
function optPrice(c) { return [c.kin ? `${optFmt(c.kin)} ₭` : '', c.glory ? `${optFmt(c.glory)} gloire` : ''].filter(Boolean).join(' + ') || '0 ₭'; }
/* liste d'achats : une ligne par groupe, avec son bouton */
function optBuyRows(list, act) {
  const K = kinahs(), G = optGlory(), row = 'display:flex;align-items:center;gap:8px';
  return `<div style="display:flex;flex-direction:column;gap:4px">${optGroups(list).map(g => { const c = optSum(g.idx.map(i => list[i])), bl = optBlocked(g.m, list), ok = !bl && K >= c.kin && G >= c.glory;
    return `<div style="${row}"><span style="flex:1;min-width:0">${g.n > 1 ? `${g.n} × ` : ''}${optItemLabel(g.m)}${bl ? ' <span class="text-[10px] muted">· après les pièces</span>' : ''}</span><span class="f-mono" style="white-space:nowrap">${optPrice(c)}</span><button type="button" class="btn sm" style="padding:4px 8px" data-a="${act}" data-i="${g.idx.join(',')}" ${ok ? '' : 'disabled'} aria-label="Acheter et équiper">${icon('shopping-cart', 'w-3 h-3')}Acheter</button></div>`; }).join('')}</div>`;
}
function optMissText(c) {
  const K = kinahs(), G = optGlory(), miss = [];
  if (c.kin > K) miss.push(`${optFmt(c.kin - K)} ₭`); if (c.glory > G) miss.push(`${optFmt(c.glory - G)} gloire`);
  return miss.length ? `il vous manque ${miss.join(' et ')} (vous avez ${optFmt(K)} ₭${c.glory ? ` et ${optFmt(G)} gloire` : ''})` : '';
}
function viewOptCart() {
  const C = state.optCart; if (!C || !C.items) return '';
  const row = 'display:flex;align-items:center;gap:8px', tot = optSum(C.items), n0 = C.n0 || C.items.length, done = n0 - C.items.length;
  const K = kinahs(), pct = tot.kin ? Math.min(100, Math.round(100 * K / tot.kin)) : 100;
  return `<div class="card" style="padding:9px 10px;margin-top:10px;border-color:rgba(255,209,102,.45)">
    <div style="${row};margin-bottom:4px">${icon('shopping-basket', 'w-4 h-4 kinah')}<span class="f-display text-sm uppercase tracking-wide" style="flex:1">Panier</span><span class="text-[10px] muted">${done} / ${n0} acheté${done > 1 ? 's' : ''}</span></div>
    <div class="text-[10px] muted" style="margin-bottom:6px">${esc(OPT_GOALS[C.goal] ? OPT_GOALS[C.goal].name : '')} · rareté ${esc(RARITIES[C.r].name)} · ${C.cur === 'glory' ? 'kinahs et gloire' : 'kinahs seulement'} · enregistré le ${esc(String(C.date).split('-').reverse().join('/'))}</div>
    ${C.items.length ? `<div style="height:5px;border-radius:3px;background:rgba(255,255,255,.08);overflow:hidden;margin-bottom:8px"><div style="height:100%;width:${pct}%;background:var(--kinah,#ffd166)"></div></div>
      <div class="text-[11px]">${optBuyRows(C.items, 'cart-buy')}</div>
      <div class="text-[10px] muted" style="margin-top:6px">Reste ${optPrice(tot)}${optMissText(tot) ? ' · ' + optMissText(tot) : ''}. Chaque achat est équipé, amélioré et serti tout de suite.</div>`
    : `<div class="text-[11px] glow">Panier terminé : l’objectif est atteint.</div>`}
    <div style="${row};flex-wrap:wrap;margin-top:8px"><button type="button" class="btn sm" data-a="cart-redo">${icon('refresh-cw', 'w-3 h-3')}Recalculer</button><button type="button" class="btn sm" data-a="cart-clear">${icon('trash-2', 'w-3 h-3')}Vider le panier</button></div>
  </div>`;
}
function viewOptimizer() {
  const P = ui.optPlan, cfg = optBuyCfg(), fmt = optFmt;
  const row = 'display:flex;align-items:center;gap:8px', tot = P ? optSum(P.missing) : { kin: 0, glory: 0 };
  const ok = P && kinahs() >= tot.kin && optGlory() >= tot.glory;
  const chip = (on, a, extra, label, style) => `<button type="button" class="btn sm ${on ? 'u' : ''}" style="padding:4px 8px;${style || ''}" data-a="${a}" ${extra}>${label}</button>`;
  return `<div class="card mb-3" style="padding:10px 12px;border-color:rgba(159,123,255,.45)">
    <div style="${row};margin-bottom:4px">${icon('wand-2', 'w-4 h-4 glow-umbra')}<span class="f-display text-sm uppercase tracking-wide">Optimisation automatique</span></div>
    <p class="text-[11px] muted" style="margin-bottom:8px">Choisissez un objectif : <b>tout</b> s’équipe tout seul avec ce que vous possédez (points, arme, armures, puces, runes, cosmétiques, skins, monture). Ce qui manque pour aller plus loin est calculé selon votre budget ci-dessous : vous pouvez tout acheter d’un coup (après confirmation) ou l’enregistrer comme panier.</p>
    <div class="label" style="margin-bottom:4px">Budget d’achat</div>
    <div style="${row};flex-wrap:wrap;margin-bottom:6px">${chip(cfg.cur === 'kin', 'opt-cur', 'data-v="kin"', `${icon('coins', 'w-3 h-3')}Kinahs seulement`)}${chip(cfg.cur === 'glory', 'opt-cur', 'data-v="glory"', `${icon('crown', 'w-3 h-3')}Kinahs + gloire`)}</div>
    <div style="${row};flex-wrap:wrap;gap:4px;margin-bottom:4px">${RARITIES.slice(0, OPT_SHOP_R + 1).map((R, r) => chip(cfg.r === r, 'opt-rar', `data-r="${r}"`, esc(R.name), `color:${R.color};font-size:10px`)).join('')}</div>
    <p class="text-[10px] muted" style="margin-bottom:8px">Rareté visée : armes et armures (améliorées à +4), puces, runes, cosmétiques et monture ne dépassent pas ${esc(RARITIES[cfg.r].name)}.${cfg.cur === 'glory' ? ' La gloire paie les runes et le skin d’arme De toute éternité.' : ''} Vous avez ${fmt(kinahs())} ₭ et ${fmt(optGlory())} gloire.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${Object.entries(OPT_GOALS).map(([id, g]) => `<button type="button" class="btn sm ${P && P.goal === id ? 'u' : ''}" style="display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;text-align:left;height:auto;padding:7px 8px;gap:3px" data-a="opt-goal" data-g="${id}"><span style="${row};gap:4px">${icon(g.icon, 'w-3.5 h-3.5')}${esc(g.name)}</span><span style="font-size:10px;opacity:.7;text-transform:none;letter-spacing:0;white-space:normal;line-height:1.25">${esc(g.desc)}</span></button>`).join('')}</div>
    ${P ? `<div class="text-[11px]" style="margin-top:8px"><b class="glow-umbra">${esc(OPT_GOALS[P.goal].name)}</b> appliqué · puissance de combat ${fmt(P.powBefore)} → <b>${fmt(P.powAfter)}</b>${P.dpsK ? ` · DPS réel en combat ×${P.dpsK.toFixed(2).replace('.', ',')} (recharge réduite ${Math.round(P.cdr * 100)} %)` : ''}${P.kept ? ' (votre configuration était déjà la meilleure : pièces et points gardés)' : ''}${P.socketed ? ` · ${P.socketed} rune${P.socketed > 1 ? 's' : ''} sertie${P.socketed > 1 ? 's' : ''}` : ''}${P.cosmN ? ` · ${P.cosmN} cosmétique${P.cosmN > 1 ? 's' : ''} ou monture changé${P.cosmN > 1 ? 's' : ''}` : ''} · dégâts ×${P.gainDps.toFixed(2)} · PV ${fmt(P.hp[0])} → ${fmt(P.hp[1])} · gains d’XP et de kinahs +${fmt(P.now.xp)} %</div>
      ${P.missing.length ? `<div class="text-[11px]" style="margin-top:8px"><div class="label" style="margin-bottom:4px">Objectif ${esc(RARITIES[P.r != null ? P.r : cfg.r].name)} (${P.loadout.filter(Boolean).map(t => (WEAPON_TYPES[t] || ARMOR_TYPES[t]).name.toLowerCase()).join(' + ')}) : dégâts ×${(P.ideal.dps / Math.max(1, P.now.dps)).toFixed(2)} par rapport à maintenant, PV ${fmt(P.ideal.hp)}</div>
        ${optBuyRows(P.missing, 'opt-buy')}
        ${ui.optConfirm ? `<div class="card" style="padding:8px;margin-top:8px;border-color:rgba(255,209,102,.6)"><div class="text-[11px]" style="margin-bottom:6px">Dépenser <b>${optPrice(tot)}</b> pour acheter ces ${P.missing.length} objets, les améliorer à +${UPGRADE_MAX}, sertir les runes et tout équiper ?</div><div style="${row}"><button type="button" class="btn sm u" data-a="opt-buy-ok">${icon('check', 'w-3 h-3')}Confirmer</button><button type="button" class="btn sm" data-a="opt-buy-no">Annuler</button></div></div>`
        : `<div style="${row};flex-wrap:wrap;margin-top:8px"><button type="button" class="btn sm u" data-a="opt-buy-all" ${ok ? '' : 'disabled'}>${icon('shopping-cart', 'w-3.5 h-3.5')}Tout acheter et équiper · ${optPrice(tot)}</button><button type="button" class="btn sm" data-a="opt-cart">${icon('shopping-basket', 'w-3.5 h-3.5')}${state.optCart ? 'Remplacer le panier' : 'Enregistrer comme panier'}</button>${ok ? '' : `<span class="text-[10px] muted">${optMissText(tot)}</span>`}</div>`}</div>`
      : `<div class="text-[11px] muted" style="margin-top:4px">Objectif ${esc(RARITIES[cfg.r].name)} atteint : rien à acheter à cette rareté.</div>`}` : ''}
    ${viewOptCart()}
  </div>`;
}
/* recalcule seulement la liste d'achats (changement de budget), sans rééquiper */
function optRefreshIdeal() {
  const P = ui.optPlan; if (!P) return; optUseCfg();
  const ideal = optPlan(P.goal, true); P.missing = optMissing(ideal); P.ideal = ideal.m; P.loadout = ideal.loadout; P.r = _optShopR;
}
/* achète une liste de lignes dans l'ordre (pièces, améliorations, puces, runes…) ; renvoie les lignes achetées */
function optBuyList(list) {
  const got = [];
  for (const m of list.slice().sort((a, b) => optBlocked(a, list) - optBlocked(b, list))) if (optBuyLine(m)) got.push(m);
  return got;
}
function optBuyToast(n, c) { toast(`${icon('package-check', 'w-4 h-4')}<span>${n} achat${n > 1 ? 's' : ''} · ${optPrice(c)} · amélioré, serti et équipé automatiquement</span>`); }
Object.assign(handlers, {
  'opt-goal': el => {
    const g = el.dataset.g; if (!OPT_GOALS[g] || ui.optBusy) return;
    ui.optConfirm = false; ui.optBusy = true; toast(`${icon('loader', 'w-4 h-4')}<span>Optimisation en cours…</span>`, 'umbra');
    const snap = { alloc: { ...state.alloc }, gear: { ...state.gear }, chipEq: (state.chipEq || []).slice(), cosmEq: { ...(state.cosmEq || {}) }, mount: state.equip.mount };
    setTimeout(() => { let P;
      try { _optDL = performance.now() + 6000; P = optApply(g); }
      catch (err) { Object.assign(state, { alloc: snap.alloc, gear: snap.gear, chipEq: snap.chipEq, cosmEq: snap.cosmEq }); state.equip.mount = snap.mount; _bm = null; save(); state.optErr = { date: dk(), goal: g, msg: String(err && err.message || err).slice(0, 200) };
        ui.optBusy = false; render(); toast(`${icon('triangle-alert', 'w-4 h-4')}<span>L’optimisation a échoué (${esc(state.optErr.msg)}). Votre équipement n’a pas été modifié.</span>`); return; }
      finally { _optDL = Infinity; ui.optBusy = false; }
      P.r = _optShopR; bumpStats = OPT_STATS; render();
    toast(`${icon('wand-2', 'w-4 h-4')}<span>${esc(OPT_GOALS[g].name)} : Force ${state.alloc.str}, Agilité ${state.alloc.agi}, Endurance ${state.alloc.end}, Intelligence ${state.alloc.int}${P.missing.length ? ` · ${P.missing.length} objet${P.missing.length > 1 ? 's' : ''} à acheter pour l’objectif` : ''}</span>`, 'umbra');
    }, 40);
  },
  'opt-cur': el => { optBuyCfg().cur = el.dataset.v === 'glory' ? 'glory' : 'kin'; ui.optConfirm = false; optRefreshIdeal(); save(); render(); },
  'opt-rar': el => { const r = Number(el.dataset.r); if (!(r >= 0 && r <= OPT_SHOP_R)) return; optBuyCfg().r = r; ui.optConfirm = false; optRefreshIdeal(); save(); render(); },
  'opt-buy': el => {
    const P = ui.optPlan; if (!P) return;
    const list = el.dataset.i.split(',').map(i => P.missing[Number(i)]).filter(Boolean); if (!list.length || list.some(m => optBlocked(m, P.missing))) return;
    const c = optSum(list), got = optBuyList(list); if (!got.length) return;
    save(); optApply(P.goal); ui.optPlan.r = _optShopR; render(); optBuyToast(got.length, c);
  },
  'opt-buy-all': () => { const P = ui.optPlan; if (!P || !P.missing.length) return; ui.optConfirm = true; render(); },
  'opt-buy-no': () => { ui.optConfirm = false; render(); },
  'opt-buy-ok': () => {
    const P = ui.optPlan; ui.optConfirm = false; if (!P) return;
    const c = optSum(P.missing); if (kinahs() < c.kin || optGlory() < c.glory) { render(); return; }
    const got = optBuyList(P.missing); save(); optApply(P.goal); ui.optPlan.r = _optShopR; render(); if (got.length) optBuyToast(got.length, c);
  },
  'opt-cart': () => {
    const P = ui.optPlan; if (!P || !P.missing.length) return;
    state.optCart = { goal: P.goal, r: _optShopR, cur: _optCur, date: dk(), n0: P.missing.length, items: P.missing.map(m => ({ ...m })) };
    save(); render(); toast(`${icon('shopping-basket', 'w-4 h-4')}<span>Panier enregistré : ${P.missing.length} objet${P.missing.length > 1 ? 's' : ''} · ${optPrice(optSum(P.missing))}</span>`);
  },
  'cart-buy': el => {
    const C = state.optCart; if (!C) return;
    const idx = el.dataset.i.split(',').map(Number), list = idx.map(i => C.items[i]).filter(Boolean);
    if (!list.length || list.some(m => optBlocked(m, C.items))) return;
    const c = optSum(list), got = optBuyList(list); if (!got.length) return;
    C.items = C.items.filter(m => !got.includes(m));
    save(); const cfg = optBuyCfg(), keep = { r: cfg.r, cur: cfg.cur }; cfg.r = C.r; cfg.cur = C.cur;
    optApply(C.goal); cfg.r = keep.r; cfg.cur = keep.cur; optRefreshIdeal(); save(); render(); optBuyToast(got.length, c);
    if (!C.items.length) toast(`${icon('trophy', 'w-4 h-4')}<span>Panier terminé : objectif ${esc(RARITIES[C.r].name)} atteint.</span>`, 'umbra');
  },
  'cart-redo': () => {
    const C = state.optCart; if (!C) return;
    const cfg = optBuyCfg(), keep = { r: cfg.r, cur: cfg.cur }; cfg.r = C.r; cfg.cur = C.cur;
    const P = optApply(C.goal); cfg.r = keep.r; cfg.cur = keep.cur;
    C.items = P.missing.map(m => ({ ...m })); C.n0 = Math.max(C.n0 || 0, C.items.length); optRefreshIdeal(); save(); render();
  },
  'cart-clear': () => { state.optCart = null; save(); render(); }
});

/* ============================================================
   ARÈNE DES CHASSEURS — ce que l'arène apporte au-delà de l'XP et des kinahs
   · Ligues et titres (par record de vague, sans fin : Abîme I, II, III…)
   · Panthéon : chaque champion (toutes les 5 vagues) est l'écho d'un Chasseur tombé ; le vaincre lui rend son nom
   · Chroniques de l'Arène : archives débloquées par le record, puis « Échos de l'Abîme » sans fin
   · Gloire : monnaie de l'arène, dépensée dans les Autels (améliorations permanentes, sans plafond)
   · Classement des Chasseurs (simulé) : un million de Chasseurs du Système, qui progressent chaque jour ;
     saison hebdomadaire avec récompenses, rival du jour
   · Défis de l'Arbitre (trois par jour) et trophées d'arène (bonus + titres)
   ============================================================ */

/* ---------- état ---------- */
function arenaState() {
  const A = state.arena || (state.arena = {});
  A.waves = A.waves || 0; A.champs = A.champs || {}; A.flaw = A.flaw || 0; A.glory = A.glory || 0; A.gloryTotal = A.gloryTotal || 0;
  A.alt = A.alt || { pow: 0, fort: 0, rem: 0 }; A.seasons = A.seasons || []; A.rivalWins = A.rivalWins || 0; A.bestRank = A.bestRank || 0;
  A.chal = A.chal || 0;
  return A;
}
function arenaBestWave() { return (state.world && state.world.arenaBest) || 0; }

/* ---------- ligues ---------- */
const ARENA_LEAGUES = [
  { min: 0,   name: 'Sans ligue',   color: '#6b7080' },
  { min: 1,   name: 'Fer',          color: '#a3a8b4' },
  { min: 10,  name: 'Bronze',       color: '#cd7f32', title: 'tit_ar_bronze' },
  { min: 20,  name: 'Argent',       color: '#c9d1dc', title: 'tit_ar_argent' },
  { min: 35,  name: 'Or',           color: '#f5c542', title: 'tit_ar_or' },
  { min: 50,  name: 'Platine',      color: '#7ee0d3', title: 'tit_ar_platine' },
  { min: 75,  name: 'Diamant',      color: '#8ad8ff', title: 'tit_ar_diamant' },
  { min: 100, name: 'Maître',       color: '#b07cff', title: 'tit_ar_maitre' },
  { min: 150, name: 'Grand Maître', color: '#ff4d6d', title: 'tit_ar_gm' },
  { min: 250, name: 'Légende',      color: '#ffb547', title: 'tit_ar_legende' },
  { min: 400, name: 'Mythe',        color: '#fff1b8', title: 'tit_ar_mythe' },
  { min: 600, name: 'Éternité',     color: '#9ffcff', title: 'tit_ar_eternite' }
];
const ROMAN = n => { const V = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]; let s = ''; for (const [v, r] of V) while (n >= v) { s += r; n -= v; } return s; };
/* au-delà de la vague 850 : Abîme I, II, III… un palier toutes les 250 vagues, sans fin */
function arenaLeague(best = arenaBestWave()) {
  if (best >= 850) { const k = Math.floor((best - 600) / 250); return { min: 600 + k * 250, name: 'Abîme ' + ROMAN(k), color: '#c084fc', abyss: k, next: 600 + (k + 1) * 250 }; }
  let i = 0; ARENA_LEAGUES.forEach((L, j) => { if (best >= L.min) i = j; });
  const L = ARENA_LEAGUES[i], N = ARENA_LEAGUES[i + 1];
  return { ...L, next: N ? N.min : 850, nextName: N ? N.name : 'Abîme I' };
}

/* ---------- Panthéon : les champions ---------- */
/* les quarante premiers échos sont écrits à la main ; au-delà, le registre continue (noms composés, détails tirés d'une liste) */
const ARENA_FALLEN = [
  ['Basile Ternaux', 'E', 'Disparu dans la Faille de la gare. Gardait dans sa poche le ticket de métro de son premier rendez-vous.'],
  ['Inès Roque', 'E', 'Infirmière de nuit, éveillée à 52 ans. Passait le dimanche à recoudre les sacs des autres.'],
  ['Théo Valadier', 'D', 'Comptait ses pompes à voix haute, même au combat. Personne n’a jamais su s’arrêter à cent avec lui.'],
  ['Maryse Couderc', 'E', 'Boulangère. Laissait une miche sur le rebord de la fenêtre pour qui passerait.'],
  ['Lucas Ferrand', 'D', 'Avait promis à sa sœur de rentrer pour son mariage. Il avait déjà acheté la cravate.'],
  ['Adèle Montfort', 'C', 'Dessinait chaque monstre vaincu dans un carnet, avec un prénom. Elle trouvait que tout méritait un nom.'],
  ['Joachim Brel', 'E', 'Chauffeur de bus. Klaxonnait deux fois devant l’école, pour les enfants qui lui faisaient signe.'],
  ['Sacha Lenoir', 'D', 'Dix-neuf ans. Voulait le rang S « pour que maman n’ait plus besoin de travailler la nuit ».'],
  ['Huguette Albaret', 'E', 'Quatre-vingts ans, éveillée par erreur, disait-elle. Tricotait des écharpes pour toute l’équipe Delta.'],
  ['Raphaël Dumas', 'C', 'Le premier à crier « derrière toi ». Il l’a crié une dernière fois.'],
  ['Nadia Belkacem', 'B', 'Chef d’escouade. Faisait rentrer les autres avant elle, toujours.'],
  ['Victor Pélissier', 'D', 'Collectionnait les clés trouvées dans les Failles. Aucune n’ouvrait rien. Il les gardait quand même.'],
  ['Clémence Arnaud', 'C', 'Chantait faux et fort dans les couloirs des Failles, pour que les blessés sachent où aller.'],
  ['Omar Diallo', 'B', 'Avait appris à lire à vingt-cinq ans. Lisait les rapports de mission à voix haute aux plus jeunes.'],
  ['Juliette Saint-Aubin', 'C', 'Gardait une photo de son chien dans son gant gauche. Le chien attend toujours devant l’Association.'],
  ['Armand Lefort', 'A', 'Rang A à trente ans. Disait que la force ne servait qu’à tenir une porte ouverte.'],
  ['Pauline Mercier', 'D', 'Faisait le café pour tout le monde à quatre heures du matin. Sans sucre pour elle, deux pour les autres.'],
  ['Gabriel Hoarau', 'C', 'Né à La Réunion. Parlait de la mer chaque fois qu’il avait peur.'],
  ['Simone Garnier', 'B', 'Ancienne institutrice. Corrigeait les fautes sur les affiches de recrutement, au feutre rouge.'],
  ['Kenji Morel', 'B', 'Réparait les armes des autres gratuitement. Les siennes étaient toujours ébréchées.'],
  ['Louise Charpentier', 'A', 'Refusait les primes. Les versait à l’Hospice sous le nom de « une Chasseuse ».'],
  ['Martin Escoffier', 'C', 'Avait gravé le prénom de sa fille sur la garde de son épée, à l’envers, pour le lire en frappant.'],
  ['Rosalie Vidal', 'D', 'Voulait voir la neige de Haute-Brume une fois dans sa vie. Elle l’a vue.'],
  ['Étienne Rouvier', 'B', 'Ne parlait jamais de lui. Après sa disparition, on a trouvé quarante lettres jamais envoyées.'],
  ['Agnès Tellier', 'C', 'Comptait les survivants à chaque sortie. Le dernier compte était faux d’un : elle ne s’était pas comptée.'],
  ['Hector Blanchard', 'A', 'Le plus ancien Chasseur de Vespérane. Il est entré dans l’Arène à soixante-huit ans « pour voir le bout ».'],
  ['Zoé Marchetti', 'D', 'Tenait un registre des chats errants du quartier des Brèches. Ils sont tous nourris aujourd’hui.'],
  ['Florent Gauthier', 'B', 'Gagnait toujours aux cartes et perdait exprès contre les nouveaux.'],
  ['Mathilde Royer', 'A', 'Sa lame était une ancienne grille de jardin, fondue. Elle disait qu’elle gardait les fleurs.'],
  ['Samuel Okafor', 'B', 'Venu de Lagos pour étudier, éveillé la première semaine. A tout de même passé ses examens.'],
  ['Bérénice Lacombe', 'C', 'Prêtait son manteau. Elle a eu froid tout un hiver sans le dire.'],
  ['Antoine Delmas', 'A', 'Rang A en trois mois. Le Système l’appelait « exemplaire ». Sa mère l’appelait Toinou.'],
  ['Léa Fontaine', 'B', 'Avait peur du noir. Est entrée dans toutes les Failles quand même, avec une lampe de poche rose.'],
  ['Yves Kerbrat', 'C', 'Pêcheur du quai. Ramenait toujours un poisson pour la cantine de l’Association.'],
  ['Charlotte Marin', 'A', 'Visait la vague 100. Elle y est arrivée. Elle a écrit sur le mur : « Et après ? »'],
  ['Didier Perret', 'B', 'Le seul à saluer les ombres avant de les combattre. « Elles ont été quelqu’un », disait-il.'],
  ['Margaux Leclerc', 'S', 'Rang S. Première de tous les classements pendant deux ans. Personne ne se souvient de son rire ; sa sœur, si.'],
  ['Benoît Arsac', 'A', 'Faisait la vaisselle de la caserne en chantant des cantiques. Il connaissait tous les couplets.'],
  ['Élise Vauclair', 'S', 'A refusé une fois de franchir le palier suivant. Puis elle est revenue, seule, la nuit.'],
  ['Le Chasseur sans registre', 'S', 'Aucun nom dans les fichiers. Seulement, cousu dans sa doublure : « Si vous me trouvez, dites-lui que je suis désolé. »']
];
const AF_FIRST = ['Adrien', 'Aline', 'Bastien', 'Céleste', 'Damien', 'Elsa', 'Félix', 'Gaëlle', 'Hugo', 'Iris', 'Jules', 'Katia', 'Léon', 'Manon', 'Nolan', 'Olga', 'Paul', 'Quitterie', 'Rémi', 'Salomé', 'Tristan', 'Ursule', 'Valentin', 'Wanda', 'Xavier', 'Yasmine', 'Zacharie', 'Amaury', 'Blanche', 'Corentin', 'Daphné', 'Ezra', 'Flore', 'Gilles', 'Héloïse', 'Ismaël', 'Jeanne', 'Kylian', 'Lise', 'Mathis'];
const AF_LAST = ['Aubert', 'Barthe', 'Carrel', 'Daumas', 'Estève', 'Fabre', 'Guérin', 'Hamel', 'Imbert', 'Jourdan', 'Lacroix', 'Maillard', 'Nicolas', 'Ollivier', 'Picard', 'Quentin', 'Renaud', 'Sabatier', 'Taillefer', 'Vasseur', 'Weber', 'Arnal', 'Bonnet', 'Chevalier', 'Delorme', 'Faure', 'Granier', 'Héraud', 'Joubert', 'Lemaire'];
const AF_DETAIL = [
  'Gardait un caillou de la plage de son enfance dans sa botte.', 'Appelait sa grand-mère chaque soir, à 21 h précises.', 'Avait planté un citronnier sur son balcon. Il donne encore.',
  'Écrivait des poèmes au dos des rapports de mission.', 'Ne mangeait jamais seul : il allait chercher quelqu’un.', 'Avait promis une partie d’échecs à un vieil homme de l’Hospice.',
  'Laissait toujours la dernière part aux autres.', 'Connaissait le nom de chaque gardien de l’Association.', 'Riait si fort qu’on l’entendait depuis la gare.',
  'Avait gardé les lacets de ses chaussures d’enfant.', 'Apprenait la harpe en secret, mal, avec bonheur.', 'Portait les courses de la voisine du cinquième.',
  'Avait peint une étoile sur le casque de chaque nouveau.', 'Récitait les noms des disparus avant chaque sortie.', 'Attendait une lettre qui est arrivée le lendemain.',
  'Voulait ouvrir une librairie « quand tout serait fini ».', 'Sifflait pour rassurer les chevaux de la caserne.', 'Avait offert sa première prime à un inconnu au guichet.',
  'Comptait les étoiles depuis le toit de Sainte-Claire.', 'Gardait la place de son ami à table, longtemps après.'
];
const RANK_ORDER_AR = ['E', 'D', 'C', 'B', 'A', 'S'];
function arenaHash(n) { let h = 2166136261 ^ n; for (let i = 0; i < 4; i++) { h = Math.imul(h ^ (h >>> 13), 16777619); h ^= h << 7; } return h >>> 0; }
/* k : numéro du champion (vague 5k) */
function arenaFallen(k) {
  if (k <= ARENA_FALLEN.length) { const [n, r, d] = ARENA_FALLEN[k - 1]; return { k, name: n, rank: r, detail: d }; }
  const h = arenaHash(k);
  return { k, name: AF_FIRST[h % AF_FIRST.length] + ' ' + AF_LAST[(h >>> 8) % AF_LAST.length], rank: RANK_ORDER_AR[Math.min(5, 1 + Math.floor(Math.log10(k)) + (h >>> 16) % 3)], detail: AF_DETAIL[(h >>> 20) % AF_DETAIL.length] };
}
function arenaChampionName(n) { if (n % 5) return null; const f = arenaFallen(n / 5); return f.name.startsWith('Le ') ? 'Écho du ' + f.name.slice(3) : 'Écho de ' + f.name; }

/* ---------- Chroniques de l'Arène ---------- */
const ARENA_CHRON = [
  { w: 5, id: 'CA01', t: 'Règlement de l’Arène des Chasseurs', body: 'ASSOCIATION DES CHASSEURS — VESPÉRANE\nArticle 1. L’Arène est ouverte à tout Chasseur éveillé, de jour comme de nuit.\nArticle 2. Les vagues sont générées par le Système. L’Association n’en a pas la maîtrise.\nArticle 3. Il est interdit de demander d’où viennent les ombres.\nArticle 4. (rayé à l’encre) Il est interdit de leur répondre.' },
  { w: 10, id: 'CA02', t: 'Le registre des Échos', body: 'Note du greffe, archivée sans suite :\nLes « champions d’ombre » de l’Arène ne sont pas générés au hasard. Leurs gestes correspondent, trait pour trait, à ceux de Chasseurs disparus dans la Faille scellée sous le sable.\nLe premier d’entre eux porte la garde basse de Basile Ternaux, rang E, disparu à la gare.\nRecommandation : ne pas informer les familles.' },
  { w: 20, id: 'CA03', t: 'Voix de l’Arbitre', body: '[TRANSCRIPTION — message système diffusé dans l’Arène à 3 h 12]\n« Chaque vague est un barreau. Chaque barreau vous rapproche. »\nQuestion d’un Chasseur : « De quoi ? »\n[Aucune réponse. Le compteur de vagues a augmenté d’une unité.]' },
  { w: 30, id: 'CA04', t: 'Lettre déposée au guichet', body: 'Madame, monsieur,\nOn m’a dit que mon fils se bat encore, là-bas, sous une autre forme. On m’a dit que les Chasseurs le battent chaque soir, à la vague trente.\nJe ne vous demande pas d’arrêter. Je vous demande, si vous le croisez, de lui dire son prénom. Il s’appelle Sacha. Il oubliait toujours son écharpe.\nSa mère.' },
  { w: 50, id: 'CA05', t: 'Rapport technique — la vague qui ne finit pas', body: 'Objet : recherche de la vague finale.\nMéthode : simulation des paramètres de l’Arène jusqu’à la vague 10 000.\nRésultat : il n’existe pas de vague finale. Chaque vague est définie à partir de la précédente. La difficulté croît sans plafond.\nConclusion du technicien (note manuscrite) : « Ce n’est pas une arène. C’est un escalier. On ne gagne pas un escalier. »' },
  { w: 75, id: 'CA06', t: 'Le carnet de Charlotte Marin', body: 'Vague 61. J’ai mal aux mains. Je recommence demain.\nVague 88. Le classement dit que je suis 212e au monde. Hier j’étais 214e. Je me sens vivante, je crois.\nVague 100. J’y suis. Personne ne m’attendait en haut. Le Système a affiché « Vague 101 ».\nJ’ai écrit sur le mur : « Et après ? »' },
  { w: 100, id: 'CA07', t: 'L’inscription sous le sable', body: 'Relevé fait par l’équipe de fouille au centre de l’Arène, à quatre mètres sous le sable, sur une pierre plus ancienne que la ville :\n« Ils dirent encore: Allons! bâtissons-nous une ville et une tour dont le sommet touche au ciel, et faisons-nous un nom, afin que nous ne soyons pas dispersés sur la face de toute la terre. » (Genèse 11:4)\nQuelqu’un a gratté, plus bas, d’une main moins sûre : « Nous n’avons pas eu de nom. Nous avons eu des numéros. »' },
  { w: 150, id: 'CA08', t: 'Hélène au Panthéon', body: 'Elle est venue un mardi, avec un cahier d’écolier. Elle s’est assise au bord du sable, là où les Échos tombent.\nÀ chaque ombre vaincue, elle écrivait un nom. Quand elle ne le connaissait pas, elle demandait. Les Chasseurs ont commencé à lui répondre.\nLe Système compte les vagues. Hélène, elle, comptait les noms. Ce soir-là, le cahier en avait cent quarante-sept.' },
  { w: 200, id: 'CA09', t: 'Ce que l’Arbitre ne compte pas', body: 'Liste établie par un greffier anonyme :\n— les mains tendues pour relever quelqu’un entre deux vagues ;\n— les noms rendus ;\n— l’eau partagée ;\n— la vague qu’un Chasseur a refusé de jouer pour raccompagner un plus jeune ;\n— le silence d’après.\nAucun de ces éléments ne figure au classement.' },
  { w: 300, id: 'CA10', t: 'Au bord du sable', body: 'Anselme s’est assis à côté de toi, au bord de l’Arène vide.\n« Tu sais pourquoi l’escalier n’a pas de dernière marche ? »\nTu ne réponds pas. Il sourit.\n« Parce qu’on n’atteint pas le ciel en montant. Ils ont essayé, à Babel. C’est le ciel qui est descendu. Toi, monte si tu veux : c’est bon d’être fort. Mais porte ceux que tu croises. C’est pour ça qu’on devient fort. »' },
  { w: 500, id: 'CA11', t: 'Le dernier barreau', body: 'Il n’y en a pas.\nLe classement monte chaque nuit ; les meilleurs du monde avancent pendant que tu dors. La vague suivante sera toujours là.\nAlors tu as cessé de te demander où cela finit. Tu as commencé à te demander qui tu ramènes.\nCe soir, tu as rendu leur nom à cent Chasseurs. Le Système appelle ça un record. Hélène appelle ça un registre.' },
  { w: 750, id: 'CA12', t: 'Lettre de Margaux Leclerc à sa sœur', body: 'Je suis première au monde depuis deux ans. Je n’ai jamais été aussi seule.\nLe Système m’envoie un message chaque matin : « Votre avance diminue. » Je me lève, je retourne au sable.\nSi tu lis ça, c’est que quelqu’un m’a battue et m’a rendu mon nom. Remercie-le. Dis-lui de ne pas oublier le sien.' },
  { w: 1000, id: 'CA13', t: 'Vague mille', body: 'Le sable s’est tu. Pour la première fois, l’Arbitre n’a rien annoncé.\nPuis une seule ligne, sans voix, sur le panneau :\n« Ne crains rien, car je te rachète, Je t’appelle par ton nom: tu es à moi! » (Ésaïe 43:1)\nLe Système n’a pas écrit ça. Personne ne sait qui l’a écrit.\nLa vague mille un s’est levée quand même. Tu y es allé, mais plus de la même manière.' }
];
/* ---------- Chroniques supplémentaires : l'Écriture, le monde, l'histoire de l'Arène (sans rien dévoiler des tomes) ---------- */
const ARENA_CHRON_MORE = [
  { w: 1, id: 'CB01', cat: 'Arène', t: 'Fiche d’inscription', body: `ARÈNE DES CHASSEURS — FICHE N° (illisible)
Nom : ………  Rang : ………  Classe : ………
Personne à prévenir : ………
Case à cocher : « Je reconnais que l’Association n’est pas responsable de ce que je deviendrai. »
Au dos, au crayon, une main d’enfant : « Reviens pour le dîner. »` },
  { w: 2, id: 'CB02', cat: 'Monde', t: 'Ce que sont les rangs', body: `Manuel du nouvel éveillé, page 3.
Le Système classe chaque Chasseur de E à S. Le rang monte avec les niveaux : D au niveau 10, C au 20, B au 35, A au 50, S au 70.
On murmure qu’il existe des rangs au-dessus de S. Le manuel n’en parle pas. Le manuel a été imprimé avant qu’on ose en parler.
Note du formateur, en marge : « Le rang dit ce que tu peux porter. Il ne dit pas ce que tu vaux. »` },
  { w: 3, id: 'CB03', cat: 'Écriture', t: 'L’échelle de Béthel', body: `Gravé sur le linteau de la porte des vestiaires, sans signature :
« Il eut un songe. Et voici, une échelle était appuyée sur la terre, et son sommet touchait au ciel. Et voici, les anges de Dieu montaient et descendaient par cette échelle. » (Genèse 28:12)
Un Chasseur a ajouté au couteau, plus bas : « Ils montaient ET descendaient. »
Personne n’a jamais effacé le « ET ».` },
  { w: 4, id: 'CB04', cat: 'Monde', t: 'Qu’est-ce qu’une Faille ?', body: `Cours du soir de l’Association, notes d’un élève.
Une Faille est une déchirure. Elle s’ouvre sans prévenir, dans une gare, sous un quai, au fond d’une cave. Il en sort des ombres et des bêtes. On classe les Failles comme les Chasseurs, de E à S.
Ce qu’il y a de l’autre côté : « pas votre affaire », a répondu le professeur.
Ce qu’on y trouve : de la ferraille, de l’éther, parfois un cœur qui bat encore. On revend tout. On ne demande pas à qui c’était.` },
  { w: 6, id: 'CB05', cat: 'Arène', t: 'Le sable', body: `Le sable de l’Arène n’est pas du sable de rivière. Il a été apporté par wagons, de nuit, l’année de la construction.
Les ouvriers disaient qu’il restait tiède en plein hiver. Qu’il gardait la forme des pas plus longtemps qu’il n’aurait dû.
Le contremaître a fait la remarque une fois, à voix haute. Il a été muté le lendemain à l’entretien des égouts.` },
  { w: 7, id: 'CB06', cat: 'Écriture', t: 'La course n’est point aux agiles', body: `Affiché par un plaisantin sur le tableau des records :
« J’ai encore vu sous le soleil que la course n’est point aux agiles ni la guerre aux vaillants, ni le pain aux sages, ni la richesse aux intelligents, ni la faveur aux savants; car tout dépend pour eux du temps et des circonstances. » (Ecclésiaste 9:11)
Le règlement interdit l’affichage sauvage. La feuille est restée trois ans. Personne n’a voulu être celui qui l’enlève.` },
  { w: 8, id: 'CB07', cat: 'Monde', t: 'Les douze manières de se battre', body: `Registre des classes reconnues par le Système :
Gladiateur, Templier, Assassin, Rôdeur, Sorcier, Spiritualiste, Clerc, Aède, Pistolero, Éthertech, Barde, Peintre.
Les anciens disent « les Daeva » pour parler de ceux qui portent ces dons. Le mot vient d’une langue que plus personne ne parle à Vespérane.
Dans l’Arène, les ombres des duels portent les douze manières. Elles se battent comme nous. C’est ce qui fait peur.` },
  { w: 9, id: 'CB08', cat: 'Arène', t: 'Premier jour de l’Arène', body: `Coupure de journal, jaunie.
« L’ARÈNE DES CHASSEURS OUVRE SES PORTES. Un lieu sûr pour s’entraîner, loin des Failles sauvages. Entrée libre. Buvette. »
Sur la photo, la foule, les drapeaux, le maire qui coupe un ruban. Au fond, à moitié dans l’ombre, une porte de fer déjà fermée à double tour.
La légende ne parle pas de la porte.` },
  { w: 12, id: 'CB09', cat: 'Écriture', t: 'Ni par la puissance ni par la force', body: `Carte trouvée dans le casier d’un Chasseur de rang D qui avait demandé à quitter l’Arène :
« Ce n’est ni par la puissance ni par la force, mais c’est par mon esprit, dit l’Éternel des armées. » (Zacharie 4:6)
Au dos : « J’ai passé deux ans à monter. Je crois que je cherchais la mauvaise chose. Je vais au port aider à décharger les bateaux. Ça porte quelque chose, au moins. »` },
  { w: 14, id: 'CB10', cat: 'Monde', t: 'Vespérane, quartier par quartier', body: `Guide de la ville, édition de poche.
Les Brèches : maisons serrées, linge aux fenêtres, gamins partout. Sainte-Claire : la vieille église, ses cloches, ses marches. La Miséricorde : l’hôpital, sur la colline. La gare : on y passe vite. Le quai des Pêcheurs : l’odeur du sel et du gasoil. Haute-Brume, au loin, sous la neige.
Et à l’ouest, l’Arène, que le guide appelle « un fleuron de la ville ». L’auteur n’y est jamais entré.` },
  { w: 16, id: 'CB11', cat: 'Arène', t: 'L’horloge du hall', body: `L’horloge du hall de l’Arène retarde de sept minutes. On l’a réparée onze fois.
Au bout de la onzième, l’horloger a rendu son devis et ses outils. Il a dit qu’elle ne retardait pas : qu’elle donnait l’heure d’ailleurs.
Depuis, on a mis une deuxième horloge à côté. Les Chasseurs regardent les deux. Personne ne sait laquelle croire.` },
  { w: 18, id: 'CB12', cat: 'Écriture', t: 'Ceux qui se confient', body: `Écrit à la craie sur le mur du couloir des blessés, d’une écriture appliquée :
« Les adolescents se fatiguent et se lassent, Et les jeunes hommes chancellent; Mais ceux qui se confient en l’Éternel renouvellent leur force. Ils prennent le vol comme les aigles; Ils courent, et ne se lassent point, Ils marchent, et ne se fatiguent point. » (Ésaïe 40:30-31)
Les infirmiers ne l’effacent pas. Ils repassent la craie quand elle pâlit.` },
  { w: 22, id: 'CB13', cat: 'Monde', t: 'Ce que vaut la ferraille', body: `Tarif affiché au comptoir de rachat :
Ferraille de Faille : 20 kinahs l’unité. Éclat d’éther : 150. Cœur de Faille : 1 500. Cendre de Monarque : 5 000 — « sur présentation d’un certificat ».
Personne n’a jamais vu le certificat. Le comptable dit qu’on lui apporte surtout de la ferraille, et des histoires.` },
  { w: 25, id: 'CB14', cat: 'Écriture', t: 'Que le fort ne se glorifie pas', body: `Plaque de cuivre vissée sous le tableau des records par un donateur anonyme :
« Ainsi parle l’Éternel: Que le sage ne se glorifie pas de sa sagesse, Que le fort ne se glorifie pas de sa force, Que le riche ne se glorifie pas de sa richesse. Mais que celui qui veut se glorifier se glorifie D’avoir de l’intelligence et de me connaître, De savoir que je suis l’Éternel, Qui exerce la bonté, le droit et la justice sur la terre; Car c’est à cela que je prends plaisir, dit l’Éternel. » (Jérémie 9:23-24)
On a demandé à la direction de l’enlever. La direction a répondu que la plaque était « historique ».` },
  { w: 27, id: 'CB15', cat: 'Arène', t: 'La buvette', body: `La buvette de l’Arène sert du thé noir, du pain et de la soupe. Le prix n’a pas changé depuis l’ouverture : un kinah.
La tenancière dit qu’elle ne fait pas payer ceux qui reviennent blessés. On lui a fait remarquer que c’était presque tout le monde.
Elle a répondu : « Alors c’est presque gratuit. »` },
  { w: 33, id: 'CB16', cat: 'Monde', t: 'Le Système parle', body: `Témoignages recueillis par un étudiant, pour un mémoire jamais soutenu.
« Il parle comme une institutrice qui a trop de classes. » — « Il ne se trompe jamais sur les chiffres. Jamais sur rien d’autre non plus. Il ne dit juste pas tout. » — « Il m’a félicité le jour où j’ai perdu mon frère. J’avais gagné un niveau. »
Conclusion de l’étudiant, rayée : « Le Système compte. Il ne sait pas pourquoi on compte. »` },
  { w: 40, id: 'CB17', cat: 'Écriture', t: 'Si l’Éternel ne bâtit la maison', body: `Inscription au-dessus de la porte de la chapelle, au sous-sol de l’Arène — une pièce que les plans officiels appellent « réserve » :
« Si l’Éternel ne bâtit la maison, Ceux qui la bâtissent travaillent en vain; Si l’Éternel ne garde la ville, Celui qui la garde veille en vain. En vain vous levez-vous matin, vous couchez-vous tard, Et mangez-vous le pain de douleur; Il en donne autant à ses bien-aimés pendant leur sommeil. » (Psaume 127:1-2)
La chapelle a quatre bancs. Il y a toujours quelqu’un sur l’un d’eux.` },
  { w: 45, id: 'CB18', cat: 'Arène', t: 'Les architectes', body: `Les plans de l’Arène sont signés de trois architectes. Deux noms sont connus. Le troisième a été gratté au canif sur toutes les copies.
Sur l’original, aux archives, la signature est intacte, mais l’encre a pâli au point de n’être plus qu’une trace.
L’archiviste dit qu’on la lira mieux à la lumière rasante, un jour d’hiver. Elle attend l’hiver.` },
  { w: 55, id: 'CB19', cat: 'Monde', t: 'Les cloches de Sainte-Claire', body: `Les cloches de Sainte-Claire sonnent trois fois par jour. Les Chasseurs de l’Arène les entendent quand le vent vient de l’est.
Il y a une règle que personne n’a écrite : quand la cloche du soir sonne, on finit sa vague, et on n’en commence pas d’autre avant la dernière note.
Ceux qui l’ignorent disent que ça ne change rien. Ceux qui la suivent disent la même chose. Ils la suivent quand même.` },
  { w: 60, id: 'CB20', cat: 'Écriture', t: 'Ma grâce te suffit', body: `Lettre d’un Chasseur de rang A, retrouvée dans la poche d’un manteau oublié au vestiaire :
« J’ai demandé trois fois d’être plus fort. On m’a répondu par un verset :
"Ma grâce te suffit, car ma puissance s’accomplit dans la faiblesse. Je me glorifierai donc bien plus volontiers de mes faiblesses, afin que la puissance de Christ repose sur moi." (2 Corinthiens 12:9)
Je n’ai pas aimé la réponse. Je l’ai gardée quand même. »` },
  { w: 65, id: 'CB21', cat: 'Arène', t: 'Les ombres apprennent', body: `Rapport d’un instructeur, classé « sans suite » :
Les ombres des duels reproduisent les gestes des Chasseurs. Pas seulement des Chasseurs morts : des vivants aussi. J’ai reconnu ma propre feinte dans la garde d’un Daeva d’ombre, la semaine après l’avoir enseignée.
Hypothèse : l’Arène apprend de nous. Recommandation : enseigner de meilleures choses.` },
  { w: 70, id: 'CB22', cat: 'Monde', t: 'Le quai des Pêcheurs', body: `Les pêcheurs du quai ne vont jamais dans l’Arène. Ils disent qu’ils ont la mer, et que la mer suffit à apprendre l’humilité.
Le samedi, pourtant, certains montent vendre du poisson séché devant les portes. Ils en donnent aux plus jeunes Chasseurs, sans rien dire.
Un vieux marin explique : « On a tous perdu quelqu’un dans une Faille. Un poisson, c’est pas grand-chose. Mais ça se partage. »` },
  { w: 80, id: 'CB23', cat: 'Écriture', t: 'Recueille mes larmes', body: `Prière écrite au dos d’un ticket d’entrée, glissée dans le tronc de la chapelle :
« Tu comptes les pas de ma vie errante; Recueille mes larmes dans ton outre: Ne sont-elles pas inscrites dans ton livre? » (Psaume 56:9)
Et dessous, plus petit : « Le Système compte mes pas aussi. Mais lui, il ne recueille rien. »` },
  { w: 90, id: 'CB24', cat: 'Arène', t: 'Le carnet des égalités', body: `Un greffier tenait autrefois un carnet à part : celui des égalités. Les vagues où deux Chasseurs, sans se connaître, s’étaient sauvés l’un l’autre.
Le carnet compte 2 113 entrées. Le classement officiel n’en a jamais tenu compte.
La dernière entrée dit seulement : « Le petit de rang E a tenu la porte. Le rang S est passé. Ils sont sortis ensemble. »` },
  { w: 110, id: 'CB25', cat: 'Écriture', t: 'Je cours vers le but', body: `Phrase favorite de Charlotte Marin, recopiée dans son casier :
« Ce n’est pas que j’aie déjà remporté le prix, ou que j’aie déjà atteint la perfection; mais je cours, pour tâcher de le saisir, puisque moi aussi j’ai été saisi par Jésus Christ. » (Philippiens 3:12)
Elle avait souligné deux fois les derniers mots. Personne ne sait si c’était avant ou après la vague 100.` },
  { w: 120, id: 'CB26', cat: 'Monde', t: 'Pourquoi des kinahs ?', body: `Question d’un enfant, au comptoir de l’Association : « Pourquoi on paye en kinahs et pas en francs ? »
Réponse du guichetier : « Parce que le Système compte en kinahs. Et que tout le monde a fini par compter comme lui. »
L’enfant a réfléchi, puis : « Alors qui compte en autre chose ? »
Le guichetier n’a pas su répondre. Il raconte encore l’histoire, des années après.` },
  { w: 130, id: 'CB27', cat: 'Arène', t: 'La vague blanche', body: `Une fois par an, sans date fixe, le Système lance une vague que les anciens appellent « la vague blanche ». Aucune ombre n’apparaît. Le compteur tourne pendant une minute, puis s’arrête.
Les Chasseurs présents restent immobiles, sans savoir pourquoi.
Certains disent qu’on entend, à ce moment-là, quelqu’un qui respire sous le sable.` },
  { w: 140, id: 'CB28', cat: 'Écriture', t: 'Gravée sur mes mains', body: `Tatouage d’une Chasseuse de rang B, recopié par Hélène dans son registre, avec la permission de la porteuse :
« Quand elle l’oublierait, Moi je ne t’oublierai point. Voici, je t’ai gravée sur mes mains; Tes murs sont toujours devant mes yeux. » (Ésaïe 49:15-16)
« Je l’ai fait faire sur ma main gauche, a-t-elle dit, celle qui tient le bouclier. Pour que quelqu’un tienne ma main, même quand je tiens le monde. »` },
  { w: 160, id: 'CB29', cat: 'Monde', t: 'Le dimanche', body: `Le Système ne connaît pas le dimanche. L’Arène reste ouverte. Les Failles s’ouvrent quand elles veulent.
Mais certains Chasseurs posent leur arme ce jour-là, sans que rien ne les y oblige. Leur rang monte moins vite.
L’un d’eux a dit : « Je ne m’arrête pas parce que j’ai fini. Je m’arrête parce que je ne suis pas le seul à porter le monde. »` },
  { w: 175, id: 'CB30', cat: 'Arène', t: 'Le compteur des morts', body: `Il existe un deuxième compteur dans l’Arène, sous les gradins, dans une salle fermée. Il ne compte pas les vagues. Il compte les Chasseurs qui ne sont pas ressortis.
Le chiffre n’est communiqué à personne. Le gardien de la salle n’a pas le droit de le dire.
Il dit seulement, quand on insiste : « Il monte moins vite qu’avant. Depuis qu’on se bat à plusieurs. »` },
  { w: 200, id: 'CB31', cat: 'Écriture', t: 'Vos noms sont écrits', body: `Lu en chaire, un dimanche, à Sainte-Claire, devant des bancs remplis de Chasseurs :
« Cependant, ne vous réjouissez pas de ce que les esprits vous sont soumis; mais réjouissez-vous de ce que vos noms sont écrits dans les cieux. » (Luc 10:20)
À la sortie, un Chasseur de rang S a demandé au prêtre si cela comptait aussi pour ceux dont le nom n’était plus dans aucun registre. Le prêtre a dit oui. Le Chasseur est resté longtemps sur les marches.` },
  { w: 225, id: 'CB32', cat: 'Arène', t: 'Le second architecte', body: `Une lettre du deuxième architecte, retrouvée chez un brocanteur :
« On nous a demandé un lieu pour s’entraîner. Nous avons dessiné un lieu pour monter. Nous n’avons pas mis de toit : le client voulait voir le ciel depuis le sable.
Je comprends maintenant. Il ne voulait pas le voir. Il voulait y arriver. »` },
  { w: 250, id: 'CB33', cat: 'Écriture', t: 'Ce lieu est redoutable', body: `Au centre de l’Arène, sous le sable, on a trouvé une pierre plate, polie par le temps. Dessus, une seule ligne, en lettres anciennes, que l’on a fait traduire :
« Jacob s’éveilla de son sommeil et il dit: Certainement, l’Éternel est en ce lieu, et moi, je ne le savais pas! Il eut peur, et dit: Que ce lieu est redoutable! C’est ici la maison de Dieu, c’est ici la porte des cieux! » (Genèse 28:16-17)
La pierre a été replacée exactement où elle était. Personne n’a voulu bâtir dessus.` },
  { w: 275, id: 'CB34', cat: 'Monde', t: 'Ce que les Monarques ne sont pas', body: `Fragment d’un cours d’Hélène aux jeunes archivistes :
« On vous dira que les Monarques sont des monstres. C’est commode. Un monstre, on le tue, et on dort tranquille.
Je vous demande seulement de garder une question ouverte : qu’est-ce qu’un homme doit aimer, et combien de temps, pour qu’on finisse par l’appeler monstre ?
Ne répondez pas. Notez la question. On en reparlera quand vous aurez lu davantage. »` },
  { w: 300, id: 'CB35', cat: 'Arène', t: 'Les cent premiers', body: `Le jour où l’on a affiché pour la première fois le classement mondial, les cent premiers noms étaient tous inconnus à Vespérane.
Quelqu’un a demandé d’où ils venaient. Réponse de l’Association : « De partout. Le Système compte partout. »
Depuis, chaque matin, des Chasseurs regardent leur rang avant de regarder le ciel. Un vieux balayeur dit que c’est dans le mauvais ordre.` },
  { w: 350, id: 'CB36', cat: 'Écriture', t: 'Le caillou blanc', body: `Petite pierre blanche posée sur l’autel de la chapelle, avec une étiquette :
« A celui qui vaincra je donnerai de la manne cachée, et je lui donnerai un caillou blanc; et sur ce caillou est écrit un nom nouveau, que personne ne connaît, si ce n’est celui qui le reçoit. » (Apocalypse 2:17)
Le Système donne des titres. Celui-là donne un nom. Les Chasseurs passent devant, s’arrêtent, et ne touchent pas la pierre.` },
  { w: 400, id: 'CB37', cat: 'Monde', t: 'Le rang Nation', body: `Note confidentielle de l’Association, à l’usage des seuls instructeurs :
Au-delà du rang S, le Système reconnaît un rang Nation, puis un rang Divin. À ces rangs, la croissance change d’échelle : les points gagnés à chaque niveau se comptent par dizaines, et toutes les forces sont multipliées.
Consigne : ne pas en parler aux jeunes. Non pour leur cacher le sommet, mais pour ne pas leur apprendre à mépriser ce qu’ils sont aujourd’hui.` },
  { w: 450, id: 'CB38', cat: 'Écriture', t: 'Ni par l’épée ni par la lance', body: `Gravé sur la lame d’une épée d’entraînement, la plus ancienne du râtelier :
« Et toute cette multitude saura que ce n’est ni par l’épée ni par la lance que l’Éternel sauve. Car la victoire appartient à l’Éternel. » (1 Samuel 17:47)
Le forgeron qui l’a faite était connu pour une seule phrase : « Je fabrique des épées. Je n’ai jamais dit qu’elles sauvaient. »` },
  { w: 550, id: 'CB39', cat: 'Arène', t: 'L’Arbitre a une voix', body: `Transcription d’une vague tardive, vers 3 h du matin. Un seul Chasseur dans l’Arène.
[SYSTÈME] « Vague 549 terminée. »
[CHASSEUR] « Pourquoi tu continues ? »
[SYSTÈME] « Vague 550. »
[CHASSEUR] « Je ne t’ai pas demandé le numéro. »
[SILENCE — 41 secondes. Durée inhabituelle.]
[SYSTÈME] « Parce que vous montez. »` },
  { w: 650, id: 'CB40', cat: 'Écriture', t: 'Les larmes essuyées', body: `Dernière page du registre d’Hélène consacré aux Échos de l’Arène. Pas un nom : un verset.
« Car l’agneau qui est au milieu du trône les paîtra et les conduira aux sources des eaux de la vie, et Dieu essuiera toute larme de leurs yeux. » (Apocalypse 7:17)
En marge : « Je rends les noms. Je ne sais pas essuyer les larmes. Quelqu’un d’autre s’en chargera. »` },
  { w: 700, id: 'CB41', cat: 'Monde', t: 'Pourquoi on se bat quand même', body: `Réponse d’un Chasseur de rang S à un journaliste qui lui demandait pourquoi il continuait l’Arène, s’il n’y avait pas de dernière vague :
« Parce que chaque Écho que je bats, Hélène lui rend son nom. Je ne monte pas pour arriver. Je monte pour ramener.
Et puis il y a les petits, à la buvette. S’ils me voient tenir, ils tiendront. C’est tout. Ça suffit. »` },
  { w: 800, id: 'CB42', cat: 'Écriture', t: 'Ceux qui sèment avec larmes', body: `Chant que les anciens fredonnent dans les vestiaires, très bas, avant les grandes vagues :
« Ceux qui sèment avec larmes Moissonneront avec chants d’allégresse. Celui qui marche en pleurant, quand il porte la semence, Revient avec allégresse, quand il porte ses gerbes. » (Psaume 126:5-6)
Les jeunes ne connaissent pas l’air. Ils apprennent les paroles d’abord.` },
  { w: 900, id: 'CB43', cat: 'Arène', t: 'Les portes de fer', body: `La porte de fer du fond de l’Arène, celle de la photo du premier jour, a été ouverte une seule fois, devant témoins.
Derrière, il n’y avait qu’un escalier qui descendait. Pas de marches pour monter.
Le rapport s’arrête là. Une main a écrit en bas : « Tout le monde voulait monter. L’escalier, lui, descendait. Je crois qu’il disait quelque chose. »` },
  { w: 950, id: 'CB44', cat: 'Écriture', t: 'Il ne sommeille ni ne dort', body: `Écrit sur le registre de garde de nuit de l’Arène, par un veilleur qui faisait sa dernière ronde avant la retraite :
« Voici, il ne sommeille ni ne dort, Celui qui garde Israël. » (Psaume 121:4)
« Quarante ans que je veille ce sable. Ce soir, je rentre dormir. Je ne suis pas inquiet : je n’ai jamais été le seul à veiller. »` },
  /* chroniques débloquées par autre chose que le record */
  { cond: { k: 'arChamps', n: 25, txt: '25 noms rendus' }, id: 'CC01', cat: 'Arène', t: 'Le cahier d’Hélène', body: `Le cahier d’écolier d’Hélène a la couverture bleue. Chaque page a deux colonnes : « Ce que le Système a compté » et « Ce que nous avons rendu ».
Dans la première colonne : des numéros de vague. Dans la seconde : des prénoms, des métiers, une manie, une phrase.
« Je ne tiens pas le compte des victoires, dit-elle. Je tiens le compte des retours. »` },
  { cond: { k: 'arChamps', n: 100, txt: '100 noms rendus' }, id: 'CC02', cat: 'Écriture', t: 'Il les appelle toutes par leur nom', body: `Hélène, le jour où le cahier a atteint cent noms, a ouvert sa Bible au hasard. Elle a lu à voix haute, pour personne :
« Levez vos yeux en haut, et regardez! Qui a créé ces choses? Qui fait marcher en ordre leur armée? Il les appelle toutes par leur nom; Par son grand pouvoir et par sa force puissante, Il n’en est pas une qui fasse défaut. » (Ésaïe 40:26)
Puis elle a refermé le livre et a dit : « Les étoiles aussi ont un nom. Alors pourquoi pas eux ? »` },
  { cond: { k: 'arFlaw', n: 50, txt: '50 vagues sans une égratignure' }, id: 'CC03', cat: 'Arène', t: 'Sans une égratignure', body: `Les anciens se méfient des Chasseurs qui ne sont jamais touchés. Ils disent que celui qui n’a pas de cicatrice ne sait pas ce que coûte la vague des autres.
Un maître d’armes a pourtant répondu : « Ne pas être touché, ça s’apprend. Ça laisse les mains libres pour relever ceux qui tombent. »
Depuis, on dit des Chasseurs sans égratignure qu’ils ont « les mains libres ».` },
  { cond: { k: 'arRival', n: 5, txt: '5 rivaux dépassés' }, id: 'CC04', cat: 'Monde', t: 'Les rivaux', body: `Les Chasseurs du classement mondial ne viennent jamais à Vespérane. On ne connaît d’eux qu’un nom, un pays, une classe, un chiffre.
Un Chasseur a écrit à l’un d’eux, à l’adresse de l’Association de son pays. La lettre est revenue, intacte, avec un tampon : « Destinataire inconnu à cette adresse. »
Il l’a gardée. Il dit qu’il dépassera le chiffre, et qu’un jour il trouvera l’homme.` },
  { cond: { k: 'arSeasons', n: 3, txt: '3 saisons classées' }, id: 'CC05', cat: 'Arène', t: 'Les saisons', body: `Chaque lundi, le Système efface le tableau de la semaine. Les meilleurs reçoivent de la gloire, les autres un chiffre.
Un Chasseur a demandé pourquoi recommencer chaque semaine. Le greffier a répondu : « Pour que personne ne puisse se reposer sur ce qu’il a fait. »
Le Chasseur a répondu : « C’est triste. » Le greffier : « Ou c’est une grâce. Chaque lundi, on peut recommencer. »` },
  { cond: { k: 'arWaves', n: 2000, txt: '2 000 vagues terminées' }, id: 'CC06', cat: 'Écriture', t: 'Tout ce que ta main trouve à faire', body: `Sur le mur du vestiaire, au-dessus du banc le plus usé :
« Tout ce que ta main trouve à faire avec ta force, fais-le; car il n’y a ni œuvre, ni pensée, ni science, ni sagesse, dans le séjour des morts, où tu vas. » (Ecclésiaste 9:10)
Et juste en dessous, une autre main : « Fais-le. Mais rentre dîner. »` },
  { cond: { k: 'arAltar', n: 25, txt: '25 niveaux d’autels' }, id: 'CC07', cat: 'Arène', t: 'Les autels', body: `Les autels de gloire sont trois blocs de pierre, au fond de la nef souterraine. On y dépose la gloire gagnée ; on en ressort plus fort.
Une vieille femme vient chaque matin y poser une bougie, sans rien demander en échange. Les Chasseurs la trouvent étrange.
Elle dit : « Vous, vous déposez pour recevoir. Moi, je dépose pour remercier. C’est la même pierre. Ce n’est pas le même geste. »` },
  { cond: { k: 'arChal', n: 50, txt: '50 défis de l’Arbitre' }, id: 'CC08', cat: 'Écriture', t: 'À qui se fier', body: `L’Arbitre donne trois ordres par jour. Un Chasseur qui les a tous suivis pendant deux mois a affiché ceci sur la porte de la salle d’entraînement :
« Confie-toi en l’Éternel de tout ton cœur, Et ne t’appuie pas sur ta sagesse; » (Proverbes 3:5)
« J’ai obéi au Système deux mois. Il ne m’a jamais demandé si j’allais bien. C’est à ça qu’on reconnaît à qui se fier. »` }
];

for (const c of ARENA_CHRON) c.cat = c.cat || (['CA07', 'CA10', 'CA13'].includes(c.id) ? 'Écriture' : 'Arène');
ARENA_CHRON.push(...ARENA_CHRON_MORE);
ARENA_CHRON.sort((a, b) => (a.cond ? 1e6 : a.w) - (b.cond ? 1e6 : b.w));
const ECHO_PARTS = [
  ['Sous la vague', 'Au fond du sable', 'Entre deux combats', 'Dans le silence d’après', 'Au pied du classement'],
  ['un Chasseur sans visage', 'une voix d’enfant', 'un vieil Écho', 'une ombre en armure de fer', 'quelqu’un qui te ressemble'],
  ['t’a demandé ton prénom.', 'a posé son arme et t’a remercié.', 'a dit : « Je montais aussi. »', 'a murmuré un nom que tu as noté.', 'a demandé si quelqu’un l’attendait encore.'],
  ['Le Système a affiché la vague suivante.', 'Hélène l’a écrit dans son cahier.', 'Le classement n’en a rien su.', 'Tu as rendu le nom.', 'L’Arbitre s’est tu une seconde de trop.']
];
/* au-delà de la vague 1000 : un Écho de l'Abîme toutes les 250 vagues */
function arenaChronicles(best = arenaBestWave(), ctx = arenaBaseCtx()) {
  const L = ARENA_CHRON.map(c => ({ ...c, open: c.cond ? (ctx[c.cond.k] || 0) >= c.cond.n : best >= c.w }));
  const last = Math.max(1250, 250 * Math.ceil((best + 1) / 250));
  for (let w = 1250; w <= last; w += 250) {
    const k = (w - 1000) / 250, h = arenaHash(w);
    L.push({ w, id: 'EA' + String(k).padStart(2, '0'), cat: 'Abîme', abyss: 1, t: 'Écho de l’Abîme n° ' + k, open: best >= w,
      body: ECHO_PARTS.map((P, i) => P[(h >>> (i * 5)) % P.length]).join(' ').replace(/\. /g, '.\n') + `\n— relevé à la vague ${w}.` });
  }
  return L;
}

/* ---------- Gloire et Autels ---------- */
const ARENA_ALTARS = {
  pow:  { name: 'Autel de puissance', icon: 'flame', per: 2, unit: '% à toutes les statistiques', base: 60, grow: 1.13 },
  fort: { name: 'Autel de fortune',   icon: 'coins', per: 3, unit: '% d’XP et de kinahs',        base: 45, grow: 1.12 },
  rem:  { name: 'Autel du rempart',   icon: 'shield', per: 3, unit: '% d’Endurance (PV et défense)', base: 45, grow: 1.12 }
};
function altarCost(id, lvl) { const A = ARENA_ALTARS[id]; return Math.round(A.base * Math.pow(A.grow, lvl)); }
function arenaStatPct() { return state.arena && state.arena.alt ? (state.arena.alt.pow || 0) * ARENA_ALTARS.pow.per : 0; }
function arenaBoosts() { const a = state.arena && state.arena.alt; return a ? { xp: (a.fort || 0) * 3, kin: (a.fort || 0) * 3, rempart: (a.rem || 0) * 3 } : { xp: 0, kin: 0, rempart: 0 }; }
function arenaGlory(n, first, flawless) {
  const m = n % 10 === 0 ? 5 : n % 5 === 0 ? 3 : 1;
  return Math.max(1, Math.round(Math.pow(n, 1.15) / 3 * m * (first ? 1 : 0.5) * (flawless ? 1.5 : 1)));
}

/* ---------- Classement des Chasseurs (simulé) ---------- */
/* Un million de Chasseurs. Le record du rang r vaut g × 2500 / r^0,6 : au départ le n° 1 est à la vague 2500,
   le 10e à 628, le 100e à 157, le 1 000e à 40, le 10 000e à 10. Tous progressent chaque jour (g = 1 + jours / 60) :
   la tête du classement s'éloigne sans cesse, et plus on monte, plus l'écart entre deux places se creuse. */
const WORLD_N = 1000000, WORLD_T0 = '2026-11-17';
const WORLD_TOP = 2500, WORLD_P = 0.6;
function worldGrowth(key = dk()) { const d = Math.max(0, Math.round((fromKey(key) - fromKey(WORLD_T0)) / 86400000)); return 1 + d / 60; }
function worldRecord(r, g = worldGrowth()) { return Math.max(1, Math.floor(g * WORLD_TOP * Math.pow(r, -WORLD_P))); }
/* nombre de rivaux dont le record dépasse le vôtre, plus un */
function worldRank(best, g = worldGrowth()) { if (best <= 0) return WORLD_N; return Math.max(1, Math.min(WORLD_N, Math.floor(Math.pow(g * WORLD_TOP / (best + 1), 1 / WORLD_P)) + 1)); }
const WN_FIRST = ['Aiko', 'Mateo', 'Sven', 'Amara', 'Lior', 'Yuna', 'Kofi', 'Ingrid', 'Rafael', 'Mei', 'Dmitri', 'Nia', 'Hiro', 'Leïla', 'Bjorn', 'Chiara', 'Tariq', 'Ana', 'Seo-yeon', 'Malik', 'Freya', 'Diego', 'Emeka', 'Sakura', 'Arjun', 'Noor', 'Lukas', 'Zara', 'Kai', 'Elena', 'Jin', 'Olu', 'Mira', 'Ravi', 'Astrid', 'Thiago', 'Hana', 'Idris', 'Signe', 'Wen'];
const WN_LAST = ['Takeda', 'Silva', 'Lindqvist', 'Okoye', 'Ben-Ami', 'Park', 'Mensah', 'Halvorsen', 'Castillo', 'Zhang', 'Volkov', 'Adeyemi', 'Sato', 'Haddad', 'Eriksen', 'Rossi', 'Rahman', 'Pereira', 'Kim', 'Diallo', 'Nordin', 'Vargas', 'Nwosu', 'Mori', 'Sharma', 'Aziz', 'Becker', 'Khan', 'Kealoha', 'Popescu', 'Li', 'Bakare', 'Novak', 'Iyer', 'Holm', 'Moreira', 'Yamada', 'Farouk', 'Dahl', 'Chen'];
const WN_NAT = ['JP', 'BR', 'SE', 'NG', 'IL', 'KR', 'GH', 'NO', 'MX', 'CN', 'RU', 'NG', 'JP', 'MA', 'DK', 'IT', 'BD', 'PT', 'KR', 'SN', 'SE', 'AR', 'NG', 'JP', 'IN', 'EG', 'DE', 'PK', 'US', 'RO', 'CN', 'NG', 'CZ', 'IN', 'DK', 'BR', 'JP', 'DZ', 'NO', 'TW'];
const WN_CLS = ['assassin', 'gladiateur', 'sorcier', 'pistolero', 'rodeur', 'spiritualiste', 'barde', 'peintre', 'templier', 'clerc', 'aede', 'ethertech'];
function worldHunter(r) {
  const h = arenaHash(r * 7 + 3), i = h % WN_FIRST.length;
  return { r, name: WN_FIRST[i] + ' ' + WN_LAST[(h >>> 9) % WN_LAST.length], nat: WN_NAT[(h >>> 9) % WN_NAT.length], cls: WN_CLS[(h >>> 17) % WN_CLS.length] };
}
/* ---------- Saison hebdomadaire (du lundi au dimanche) ---------- */
function seasonId(key = dk()) { const d = fromKey(key), wd = (d.getDay() + 6) % 7; return addDays(key, -wd); }
function seasonFrac(key = dk()) { const wd = (fromKey(key).getDay() + 6) % 7; return (wd + 1) / 7; }
function seasonNum(id) { return 1 + Math.round((fromKey(id) - fromKey(seasonId(WORLD_T0))) / (7 * 86400000)); }
/* le record de saison des rivaux grandit au fil de la semaine */
function seasonRank(best, key = dk()) { const g = worldGrowth(key) * (0.3 + 0.7 * seasonFrac(key)); return worldRank(best, g); }
function seasonReward(rank) { return rank <= 1 ? 6000 : rank <= 10 ? 2500 : rank <= 100 ? 1000 : rank <= 1000 ? 400 : rank <= 10000 ? 150 : 40; }
/* clôture des saisons passées (au premier passage de la semaine suivante) */
function arenaSeasonRoll() {
  const A = arenaState(), cur = seasonId();
  if (A.season && A.season.id !== cur) {
    const end = addDays(A.season.id, 6), rank = A.season.best > 0 ? seasonRank(A.season.best, end) : WORLD_N, g = A.season.best > 0 ? seasonReward(rank) : 0;
    A.seasons.unshift({ id: A.season.id, best: A.season.best, rank, glory: g }); A.seasons = A.seasons.slice(0, 52);
    A.glory += g; A.gloryTotal += g;
    A.season = null;
  }
  if (!A.season) A.season = { id: cur, best: 0 };
  return A.season;
}

/* ---------- Rival du jour ---------- */
function arenaRival() {
  const A = arenaState(), t = dk(), best = arenaBestWave();
  if (!A.rival || A.rival.date !== t) {
    const target = best + Math.max(2, Math.ceil(best * 0.08)), r = worldRank(target - 1);
    A.rival = { date: t, rank: r, wave: target, done: false };
  }
  return { ...A.rival, ...worldHunter(A.rival.rank), r: A.rival.rank };
}

/* ---------- Défis de l'Arbitre (trois par jour) ---------- */
function arenaDayStats() { const A = arenaState(), t = dk(); if (!A.day || A.day.date !== t) A.day = { date: t, waves: 0, flaw: 0, champs: 0, fast: 0, maxN: 0, done: {} }; return A.day; }
function arenaChallenges() {
  const best = Math.max(1, arenaBestWave()), h = arenaHash(Math.round(fromKey(dk()) / 86400000)), D = arenaDayStats();
  const pool = [
    { id: 'waves', txt: n => `Terminer ${n} vagues`, n: 10 + (h % 3) * 10, key: 'waves' },
    { id: 'flaw', txt: n => `Terminer ${n} vague${n > 1 ? 's' : ''} sans une égratignure (sans combat automatique)`, n: 2 + (h >>> 3) % 4, key: 'flaw' },
    { id: 'champs', txt: n => `Vaincre ${n} champion${n > 1 ? 's' : ''} (vagues multiples de 5)`, n: 1 + (h >>> 5) % 3, key: 'champs' },
    { id: 'fast', txt: n => `Terminer ${n} vague${n > 1 ? 's' : ''} en moins de 20 secondes`, n: 3 + (h >>> 7) % 5, key: 'fast' },
    { id: 'deep', txt: n => `Terminer une vague de numéro ${n} ou plus`, n: Math.max(5, Math.floor(best * (0.8 + ((h >>> 9) % 3) * 0.1))), key: 'maxN', max: true }
  ];
  const pick = [], used = new Set();
  for (let i = 0; pick.length < 3; i++) { const c = pool[(h >>> (i * 4)) % pool.length]; if (!used.has(c.id)) { used.add(c.id); pick.push(c); } if (i > 30) break; }
  return pick.map(c => { const v = D[c.key] || 0, ok = c.max ? v >= c.n : v >= c.n; return { ...c, label: c.txt(c.n), v: Math.min(v, c.n), ok, claimed: !!D.done[c.id], glory: Math.round(30 + best * 1.5) }; });
}

/* ---------- Résolution d'une vague (appelée par le monde ouvert) ---------- */
function arenaMeta(n, info, rw) {
  const A = arenaState(), D = arenaDayStats(), S = arenaSeasonRoll(), msgs = [];
  A.waves++; D.waves++; D.maxN = Math.max(D.maxN, n);
  if (info.flawless) { A.flaw++; D.flaw++; }
  if ((info.time || 99) < 20) D.fast++;
  if (n % 5 === 0) {
    D.champs++; const k = n / 5;
    if (!A.champs[k]) { A.champs[k] = dk(); const f = arenaFallen(k); msgs.push(`nom rendu : ${f.name}`); }
  }
  S.best = Math.max(S.best, n);
  const g = arenaGlory(n, rw && rw.first, info.flawless); A.glory += g; A.gloryTotal += g;
  /* rival du jour battu */
  const R = arenaRival(); if (!A.rival.done && n >= R.wave) { A.rival.done = true; A.rivalWins++; const rg = 20 + R.wave * 2; A.glory += rg; A.gloryTotal += rg; msgs.push(`rival ${R.name} dépassé (+${rg} gloire)`); }
  /* défis terminés : la gloire est versée tout de suite */
  for (const c of arenaChallenges()) if (c.ok && !D.done[c.id]) { D.done[c.id] = 1; A.chal++; A.glory += c.glory; A.gloryTotal += c.glory; msgs.push(`défi réussi (+${c.glory} gloire)`); }
  const best = Math.max(arenaBestWave(), n), rk = worldRank(best); if (!A.bestRank || rk < A.bestRank) A.bestRank = rk;
  if (n >= arenaBestWave() && n > 1 && arenaLeague(n).name !== arenaLeague(n - 1).name) msgs.push(`ligue ${arenaLeague(n).name} atteinte`);
  save();
  return { g, msg: msgs.join(' · ') };
}

/* ---------- Trophées et titres d'arène ---------- */
function arenaCtx() { const b = arenaBaseCtx(); b.arChron = arenaChronicles(b.arBest, b).filter(c => c.open && !c.abyss).length; return b; }
function arenaBaseCtx() {
  const A = state.arena || {}, alt = A.alt || {};
  return { arBest: arenaBestWave(), arWaves: A.waves || 0, arChamps: Object.keys(A.champs || {}).length, arFlaw: A.flaw || 0, arRank: A.bestRank || 0,
    arSeasonTop: (A.seasons || []).reduce((m, s) => Math.min(m, s.rank || WORLD_N), WORLD_N), arSeasons: (A.seasons || []).filter(s => s.best > 0).length,
    arRival: A.rivalWins || 0, arAltar: (alt.pow || 0) + (alt.fort || 0) + (alt.rem || 0), arChal: A.chal || 0 };
}
const AR_TITLES = [
  ['tit_ar_bronze', 2, 'Poussière de l’Arène'], ['tit_ar_argent', 2, 'Lame d’argent'], ['tit_ar_or', 3, 'Lion du sable'], ['tit_ar_platine', 3, 'Brise-vagues'],
  ['tit_ar_diamant', 4, 'Cœur de diamant'], ['tit_ar_maitre', 4, 'Maître de l’Arène'], ['tit_ar_gm', 5, 'Grand Maître des Échos'], ['tit_ar_legende', 5, 'Légende du sable'],
  ['tit_ar_mythe', 6, 'Celui que l’Arbitre nomme'], ['tit_ar_eternite', 7, 'Sans dernier barreau'],
  ['tit_ar_noms', 4, 'Porteur de noms'], ['tit_ar_registre', 6, 'Celui qui rend les noms'], ['tit_ar_egratignure', 5, 'Sans une égratignure'], ['tit_ar_infatigable', 5, 'Infatigable'],
  ['tit_ar_cent', 5, 'Des Cent premiers'], ['tit_ar_dix', 6, 'L’un des Dix'], ['tit_ar_premier', 7, 'Premier des Chasseurs'], ['tit_ar_saison', 6, 'Champion de saison'], ['tit_ar_rival', 4, 'Chasseur de rivaux'], ['tit_ar_autel', 5, 'Gardien des autels']
];
for (const [id, r, name] of AR_TITLES) { const c = C_(id, 'titre', r, name, { type: 'trophy' }); c.color = RARITIES[r].color; COSMETICS.push(c); }
const ART = (id, name, desc, test, bonus, cosmetic) => ({ id, cat: 'Arène', name, desc, test, bonus, cosmetic: cosmetic ? [cosmetic] : undefined });
TROPHIES.push(
  ART('ar_w1', 'Premier pas sur le sable', 'Terminer une vague d’arène.', c => c.arBest >= 1, { kin: 1 }),
  ART('ar_w10', 'Ligue de Bronze', 'Atteindre la vague 10.', c => c.arBest >= 10, { xp: 2 }, 'tit_ar_bronze'),
  ART('ar_w20', 'Ligue d’Argent', 'Atteindre la vague 20.', c => c.arBest >= 20, { kin: 3 }, 'tit_ar_argent'),
  ART('ar_w35', 'Ligue d’Or', 'Atteindre la vague 35.', c => c.arBest >= 35, { crit: 2 }, 'tit_ar_or'),
  ART('ar_w50', 'Ligue de Platine', 'Atteindre la vague 50.', c => c.arBest >= 50, { xp: 4, kin: 4 }, 'tit_ar_platine'),
  ART('ar_w75', 'Ligue de Diamant', 'Atteindre la vague 75.', c => c.arBest >= 75, { mat: 10 }, 'tit_ar_diamant'),
  ART('ar_w100', 'Ligue de Maître', 'Atteindre la vague 100.', c => c.arBest >= 100, { xp: 6, kin: 6, crit: 2 }, 'tit_ar_maitre'),
  ART('ar_w150', 'Ligue de Grand Maître', 'Atteindre la vague 150.', c => c.arBest >= 150, { rar: 5, keys: 1 }, 'tit_ar_gm'),
  ART('ar_w250', 'Ligue de Légende', 'Atteindre la vague 250.', c => c.arBest >= 250, { xp: 10, kin: 10 }, 'tit_ar_legende'),
  ART('ar_w400', 'Ligue de Mythe', 'Atteindre la vague 400.', c => c.arBest >= 400, { crit: 4, rar: 5 }, 'tit_ar_mythe'),
  ART('ar_w600', 'Ligue d’Éternité', 'Atteindre la vague 600.', c => c.arBest >= 600, { xp: 15, kin: 15, keys: 1 }, 'tit_ar_eternite'),
  ART('ar_w1000', 'Vague mille', 'Atteindre la vague 1000.', c => c.arBest >= 1000, { xp: 25, kin: 25 }),
  ART('ar_t100', 'Cent vagues', 'Terminer 100 vagues au total.', c => c.arWaves >= 100, { mat: 5 }),
  ART('ar_t1000', 'Mille vagues', 'Terminer 1 000 vagues au total.', c => c.arWaves >= 1000, { kin: 5, mat: 5 }),
  ART('ar_t10000', 'Infatigable', 'Terminer 10 000 vagues au total.', c => c.arWaves >= 10000, { xp: 10, kin: 10 }, 'tit_ar_infatigable'),
  ART('ar_c10', 'Dix noms rendus', 'Vaincre 10 champions différents.', c => c.arChamps >= 10, { xp: 3 }),
  ART('ar_c50', 'Porteur de noms', 'Vaincre 50 champions différents.', c => c.arChamps >= 50, { xp: 5, kin: 5 }, 'tit_ar_noms'),
  ART('ar_c200', 'Le registre d’Hélène', 'Vaincre 200 champions différents.', c => c.arChamps >= 200, { xp: 10, kin: 10, rar: 5 }, 'tit_ar_registre'),
  ART('ar_f10', 'Intouchable', 'Terminer 10 vagues sans une égratignure (sans combat automatique).', c => c.arFlaw >= 10, { crit: 2 }),
  ART('ar_f100', 'Sans une égratignure', 'Terminer 100 vagues sans une égratignure (sans combat automatique).', c => c.arFlaw >= 100, { crit: 4, soin: 5 }, 'tit_ar_egratignure'),
  ART('ar_r10000', 'Dix mille premiers', 'Entrer dans les 10 000 premiers du classement mondial.', c => c.arRank && c.arRank <= 10000, { kin: 3 }),
  ART('ar_r1000', 'Mille premiers', 'Entrer dans les 1 000 premiers du classement mondial.', c => c.arRank && c.arRank <= 1000, { xp: 5 }),
  ART('ar_r100', 'Des Cent premiers', 'Entrer dans les 100 premiers du classement mondial.', c => c.arRank && c.arRank <= 100, { xp: 8, kin: 8 }, 'tit_ar_cent'),
  ART('ar_r10', 'L’un des Dix', 'Entrer dans les 10 premiers du classement mondial.', c => c.arRank && c.arRank <= 10, { xp: 15, kin: 15 }, 'tit_ar_dix'),
  ART('ar_r1', 'Premier des Chasseurs', 'Devenir n° 1 du classement mondial.', c => c.arRank === 1, { xp: 30, kin: 30, crit: 5 }, 'tit_ar_premier'),
  ART('ar_s1', 'Première saison', 'Terminer une saison d’arène classé.', c => c.arSeasons >= 1, { kin: 2 }),
  ART('ar_s100', 'Podium de saison', 'Finir une saison dans les 100 premiers.', c => c.arSeasonTop <= 100, { xp: 6 }),
  ART('ar_s1st', 'Champion de saison', 'Finir une saison à la première place.', c => c.arSeasonTop <= 1, { xp: 12, kin: 12 }, 'tit_ar_saison'),
  ART('ar_rv10', 'Chasseur de rivaux', 'Dépasser 10 rivaux du jour.', c => c.arRival >= 10, { kin: 4 }, 'tit_ar_rival'),
  ART('ar_d30', 'Les ordres de l’Arbitre', 'Réussir 30 défis de l’Arbitre.', c => c.arChal >= 30, { mat: 8 }),
  ART('ar_a50', 'Gardien des autels', 'Monter les autels de gloire de 50 niveaux au total.', c => c.arAltar >= 50, { xp: 5, kin: 5 }, 'tit_ar_autel'),
  ART('ar_ch30', 'Lecteur des Chroniques', 'Débloquer 30 Chroniques de l’Arène.', c => c.arChron >= 30, { xp: 5 }),
  ART('ar_ch', 'Toutes les chroniques', `Débloquer les ${ARENA_CHRON.length} Chroniques de l’Arène (hors Échos de l’Abîme).`, c => c.arChron >= ARENA_CHRON.length, { xp: 10, kin: 10 })
);

/* ---------- Vue « Arène » (Royaume) ---------- */
function viewArena() {
  const A = arenaState(); arenaSeasonRoll();
  const best = arenaBestWave(), L = arenaLeague(best), rk = worldRank(best), g = worldGrowth(), S = A.season, sr = seasonRank(S.best || 0), fmt = n => Math.round(n).toLocaleString('fr-FR');
  const sub = ui.arenaTab || 'ligue', tabs = [['ligue', 'Ligue'], ['classement', 'Classement'], ['autels', 'Autels'], ['pantheon', 'Panthéon'], ['chroniques', 'Chroniques']];
  const head = `<div class="sys umbra">
    <div class="flex items-center justify-between gap-2 flex-wrap"><div class="sys-title u">${icon('trophy', 'w-4 h-4')}Arène des Chasseurs</div><button type="button" class="btn sm" data-a="world-open">${icon('swords', 'w-3.5 h-3.5')}Entrer dans l’arène</button></div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-center">
      <div class="card" style="padding:8px"><div class="f-display text-lg" style="color:${L.color};text-shadow:0 0 10px ${L.color}">${esc(L.name)}</div><div class="text-[10px] muted">ligue · record vague ${best}</div></div>
      <div class="card" style="padding:8px"><div class="f-mono text-lg">${best ? fmt(rk) + 'e' : '—'}</div><div class="text-[10px] muted">rang mondial / ${fmt(WORLD_N)}</div></div>
      <div class="card" style="padding:8px"><div class="f-mono text-lg glow-umbra">${fmt(A.glory)}</div><div class="text-[10px] muted">gloire</div></div>
      <div class="card" style="padding:8px"><div class="f-mono text-lg">${fmt(A.waves)}</div><div class="text-[10px] muted">vagues terminées</div></div>
    </div>
    ${L.next ? `<div class="text-[11px] muted mt-2">Prochaine ligue : ${esc(L.nextName || 'Abîme ' + ROMAN((L.abyss || 0) + 1))} à la vague ${L.next}.</div>` : ''}
  </div>`;
  const tabsH = `<div class="subtabs">${tabs.map(([id, l]) => `<button type="button" class="chip u ${sub === id ? 'on' : ''}" data-a="arena-tab" data-t="${id}">${l}</button>`).join('')}</div>`;
  let body = '';
  if (sub === 'ligue') {
    const R = arenaRival(), C = arenaChallenges();
    body = `<div class="sys"><div class="sys-title mb-2">Défis de l’Arbitre · aujourd’hui</div>
      ${C.map(c => `<div class="res" style="cursor:default">${icon(c.claimed ? 'check-circle-2' : 'target', 'w-4 h-4 ' + (c.claimed ? 'glow' : 'muted'))}<span class="flex-1 min-w-0 text-sm">${esc(c.label)}<span class="block text-[11px] muted">${c.max ? (c.v >= c.n ? 'fait' : 'meilleure vague du jour : ' + (arenaDayStats().maxN || 0)) : `${c.v} / ${c.n}`}</span></span><span class="f-mono text-xs glow-umbra">+${c.glory}</span></div>`).join('')}
      <p class="text-[11px] muted mt-2">La gloire des défis est versée dès qu’ils sont réussis. Trois nouveaux défis chaque jour.</p></div>
      <div class="sys"><div class="sys-title mb-2">Rival du jour</div>
      <div class="res" style="cursor:default">${icon(R.done ? 'check-circle-2' : 'crosshair', 'w-4 h-4 ' + (R.done ? 'glow' : 'muted'))}<span class="flex-1 min-w-0"><span class="block f-display">${esc(R.name)} <span class="text-[11px] muted">${R.nat} · ${esc((CLASSES[R.cls] || {}).name || '')}</span></span><span class="text-[11px] muted">${fmt(R.r)}e mondial · record vague ${R.wave}</span></span><span class="text-[11px] ${R.done ? 'glow' : 'muted'}">${R.done ? 'dépassé' : `+${20 + R.wave * 2} gloire`}</span></div>
      <p class="text-[11px] muted mt-2">Termine la vague ${R.wave} aujourd’hui pour le dépasser. ${A.rivalWins} rival${A.rivalWins > 1 ? 's' : ''} dépassé${A.rivalWins > 1 ? 's' : ''} jusqu’ici.</p></div>
      <div class="sys"><div class="sys-title mb-2">Ligues</div>
      ${ARENA_LEAGUES.slice(1).map(x => `<div class="flex items-center gap-2 py-1 text-sm" style="${best >= x.min ? '' : 'opacity:.45'}"><span class="f-display w-28" style="color:${x.color}">${esc(x.name)}</span><span class="f-mono text-[11px] muted w-20">vague ${x.min}</span><span class="text-[11px] flex-1 min-w-0 truncate">${x.title ? `titre « ${esc(COSMETICS.find(c => c.id === x.title).name)} »` : ''}</span>${best >= x.min ? icon('check', 'w-3.5 h-3.5 glow') : icon('lock', 'w-3.5 h-3.5 muted')}</div>`).join('')}
      <div class="text-[11px] muted mt-1">Puis Abîme I à la vague 850, et un nouvel Abîme toutes les 250 vagues, sans fin.</div></div>`;
  } else if (sub === 'classement') {
    const mode = ui.arenaRank || 'monde', isS = mode === 'saison', gg = isS ? g * (0.3 + 0.7 * seasonFrac()) : g, myBest = isS ? (S.best || 0) : best, my = isS ? sr : rk;
    const rec = r => worldRecord(r, gg), has = myBest > 0;
    /* rang affiché d : avant vous, le rival d ; à votre place, vous ; après vous, le rival d − 1 (décalé d'un rang) */
    const line = d => { const me = has && d === my, rid = has && d > my ? d - 1 : d, H = worldHunter(rid); return `<div class="flex items-center gap-2 py-1 border-b border-[#24242c] text-sm" style="${me ? 'background:rgba(159,123,255,.12)' : ''}"><span class="f-mono w-16 text-right ${d <= 3 ? 'glow' : 'muted'}">${fmt(d)}</span><span class="flex-1 min-w-0 truncate">${me ? `<b class="glow-umbra">${esc(state.profile.name || 'Vous')}</b>` : esc(H.name)} <span class="text-[10px] muted">${me ? 'vous' : H.nat + ' · ' + esc((CLASSES[H.cls] || {}).name || '')}</span></span><span class="f-mono text-xs">vague ${me ? myBest : rec(rid)}</span></div>`; };
    const ds = []; for (let d = 1; d <= 10; d++) ds.push(d);
    const list = ds.map(line);
    if (has && my > 10) { if (my > 14) list.push('<div class="text-center muted text-xs py-1">⋯</div>'); for (let d = Math.max(11, my - 3); d <= my + 2; d++) list.push(line(d)); }
    const past = A.seasons.slice(0, 6);
    body = `<div class="sys"><div class="flex items-center justify-between gap-2 mb-2 flex-wrap"><div class="sys-title">Classement des Chasseurs</div>
      <div class="flex gap-1"><button type="button" class="chip ${!isS ? 'on' : ''}" data-a="arena-rank" data-m="monde">Mondial</button><button type="button" class="chip ${isS ? 'on' : ''}" data-a="arena-rank" data-m="saison">Saison ${seasonNum(S.id)}</button></div></div>
      ${list.join('')}
      <p class="text-[11px] muted mt-2">${isS ? `Saison du ${S.id.split('-').reverse().join('/')} au ${addDays(S.id, 6).split('-').reverse().join('/')} : votre meilleure vague de la semaine compte. Les rivaux avancent jusqu’au dimanche soir. Récompense de fin de saison : n° 1 6 000 gloire, top 10 2 500, top 100 1 000, top 1 000 400, top 10 000 150, sinon 40.` : `${fmt(WORLD_N)} Chasseurs du Système. Le n° 1 est à la vague ${fmt(rec(1))} et tous progressent chaque jour : il y a 30 jours, il en était à ${fmt(worldRecord(1, Math.max(1, g - 30 / 60)))}. Votre meilleur rang : ${A.bestRank ? fmt(A.bestRank) + 'e' : '—'}.`}</p>
      <p class="text-[10px] muted mt-1">Classement simulé : vos adversaires sont des Chasseurs du Système, pas d’autres joueurs.</p></div>
      ${past.length ? `<div class="sys"><div class="sys-title mb-2">Saisons passées</div>${past.map(s => `<div class="flex items-center gap-2 py-1 text-sm"><span class="f-mono text-[11px] muted w-20">saison ${seasonNum(s.id)}</span><span class="flex-1">${s.best ? `vague ${s.best} · ${fmt(s.rank)}e` : 'non classé'}</span><span class="f-mono text-xs glow-umbra">+${fmt(s.glory)}</span></div>`).join('')}</div>` : ''}`;
  } else if (sub === 'autels') {
    body = `<div class="sys"><div class="sys-title mb-2">Autels de gloire</div>
      <p class="text-[11px] muted mb-2">La gloire se gagne à chaque vague (davantage pour les vagues hautes, les champions, les vagues sans une égratignure ; moitié pour une vague déjà jouée aujourd’hui), avec les défis, le rival du jour et la fin de chaque saison. Les autels n’ont pas de dernier niveau.</p>
      ${Object.entries(ARENA_ALTARS).map(([id, X]) => { const lv = A.alt[id] || 0, c = altarCost(id, lv); return `<div class="res" style="cursor:default">${icon(X.icon, 'w-5 h-5 glow-umbra')}<span class="flex-1 min-w-0"><span class="block f-display">${esc(X.name)} · niv. ${lv}</span><span class="text-[11px] muted">+${fmt(lv * X.per)} ${esc(X.unit)} (+${X.per} par niveau)</span></span><button type="button" class="btn sm u" data-a="altar-up" data-id="${id}" ${A.glory < c ? 'disabled' : ''}>${fmt(c)} gloire</button></div>`; }).join('')}
      <p class="text-[11px] muted mt-2">Gloire gagnée depuis le début : ${fmt(A.gloryTotal)}.</p></div>`;
  } else if (sub === 'pantheon') {
    const ks = Object.keys(A.champs).map(Number).sort((a, b) => a - b), shown = ui.arenaPanN || 30, nextK = (ks.length ? Math.max(...ks) : 0) + 1;
    body = `<div class="sys"><div class="flex items-center justify-between gap-2 mb-2"><div class="sys-title">Panthéon des Échos</div><span class="f-mono text-sm">${ks.length} nom${ks.length > 1 ? 's' : ''} rendu${ks.length > 1 ? 's' : ''}</span></div>
      <p class="text-[11px] muted mb-2">Chaque champion de l’arène (toutes les 5 vagues) est l’écho d’un Chasseur tombé dans la Faille sous le sable. Le vaincre lui rend son nom : Hélène l’inscrit ici. Le registre n’a pas de fin.</p>
      ${ks.slice(-shown).reverse().map(k => { const f = arenaFallen(k); return `<div class="py-1.5 border-b border-[#24242c]"><div class="flex items-center gap-2"><span class="f-mono text-[11px] muted w-16">vague ${k * 5}</span><span class="f-display flex-1 min-w-0 truncate">${esc(f.name)}</span><span class="text-[10px] muted">rang ${f.rank}</span></div><div class="text-[11px] muted mt-0.5" style="padding-left:4.5rem">${esc(f.detail)}</div></div>`; }).join('') || '<p class="text-sm muted">Aucun nom pour l’instant. Le premier écho attend à la vague 5.</p>'}
      ${ks.length > shown ? `<button type="button" class="btn sm mt-2" data-a="arena-more">Afficher plus</button>` : ''}
      <div class="text-[11px] muted mt-2">Prochain écho : vague ${nextK * 5} · ${esc(arenaFallen(nextK).rank ? 'rang ' + arenaFallen(nextK).rank : '')} · nom inconnu.</div></div>`;
  } else {
    const CH = arenaChronicles(best), cf = ui.arenaCat || 'Toutes', cats = ['Toutes', 'Arène', 'Écriture', 'Monde', 'Abîme'], shownC = CH.filter(c => cf === 'Toutes' || c.cat === cf);
    body = `<div class="sys"><div class="flex items-center justify-between gap-2 mb-2"><div class="sys-title">Chroniques de l’Arène</div><span class="f-mono text-sm">${CH.filter(c => c.open && !c.abyss).length} / ${ARENA_CHRON.length}${CH.some(c => c.abyss && c.open) ? ' + ' + CH.filter(c => c.abyss && c.open).length : ''}</span></div>
      <p class="text-[11px] muted mb-2">L’histoire de l’Arène, des passages de l’Écriture (Louis Segond 1910) et ce qu’il faut savoir du monde. Elles se débloquent avec ton record, et certaines par d’autres exploits.</p>
      <div class="flex gap-1 flex-wrap mb-2">${cats.map(k => `<button type="button" class="chip ${cf === k ? 'on' : ''}" data-a="arena-cat" data-k="${k}">${k}</button>`).join('')}</div>
      ${shownC.map(c => c.open ? `<button type="button" class="res" data-a="arena-chron" data-id="${c.id}"><span class="f-mono text-[11px] muted w-12">${c.id}</span><span class="flex-1 min-w-0"><span class="block truncate">${esc(c.t)}</span><span class="text-[10px] muted">${esc(c.cat)}</span></span>${icon('chevron-right', 'w-4 h-4 muted')}</button>`
        : `<div class="res" style="cursor:default"><span class="f-mono text-[11px] muted w-12">${c.id}</span><span class="flex-1 muted text-sm">scellée · ${c.cond ? esc(c.cond.txt) : 'record vague ' + c.w} <span class="text-[10px]">(${esc(c.cat)})</span></span>${icon('lock', 'w-4 h-4 muted')}</div>`).join('')}
      <p class="text-[11px] muted mt-2">Au-delà de la vague 1000, un Écho de l’Abîme toutes les 250 vagues, sans fin.</p></div>`;
  }
  const tro = TROPHIES.filter(t => t.cat === 'Arène'), got = boosts().trophies;
  const troH = sub === 'ligue' ? `<div class="sys"><div class="flex items-center justify-between gap-2 mb-2"><div class="sys-title">Trophées d’arène</div><span class="f-mono text-sm">${tro.filter(t => got.includes(t.id)).length} / ${tro.length}</span></div>
    ${tro.map(t => `<div class="flex items-center gap-2 py-1 text-sm" style="${got.includes(t.id) ? '' : 'opacity:.5'}">${icon(got.includes(t.id) ? 'award' : 'lock', 'w-4 h-4 ' + (got.includes(t.id) ? 'glow' : 'muted'))}<span class="flex-1 min-w-0"><span class="block f-display text-[13px]">${esc(t.name)}</span><span class="text-[11px] muted">${esc(t.desc)}${t.cosmetic ? ` · titre « ${esc(COSMETICS.find(c => c.id === t.cosmetic[0]).name)} »` : ''}</span></span></div>`).join('')}</div>` : '';
  return head + tabsH + body + troH;
}
Object.assign(handlers, {
  'arena-tab': el => { ui.arenaTab = el.dataset.t; render(); },
  'arena-rank': el => { ui.arenaRank = el.dataset.m; render(); },
  'arena-cat': el => { ui.arenaCat = el.dataset.k; render(); },
  'arena-more': () => { ui.arenaPanN = (ui.arenaPanN || 30) + 60; render(); },
  'altar-up': el => {
    const A = arenaState(), id = el.dataset.id; if (!ARENA_ALTARS[id]) return;
    const c = altarCost(id, A.alt[id] || 0); if (A.glory < c) return;
    A.glory -= c; A.alt[id] = (A.alt[id] || 0) + 1; _bm = null; save(); render();
    toast(`${icon(ARENA_ALTARS[id].icon, 'w-4 h-4')}<span>${esc(ARENA_ALTARS[id].name)} : niveau ${A.alt[id]}</span>`, 'umbra');
  },
  'arena-chron': el => {
    const c = arenaChronicles().find(x => x.id === el.dataset.id); if (!c || !c.open) return;
    showOverlay(`
      <div class="sys pop w-full max-w-md" style="padding:20px">
        <div class="flex items-center justify-between gap-2 mb-3"><span class="sys-title">${esc(c.id)} · ${esc(c.cat)}${c.cond ? '' : ' · vague ' + c.w}</span>
          <button type="button" class="ibtn" data-a="close-overlay" aria-label="Fermer">${icon('x', 'w-4 h-4')}</button></div>
        <h3 class="f-display text-lg font-bold">${esc(c.t)}</h3>
        <div class="f-mono text-[13px] mt-3 leading-relaxed" style="white-space:pre-line;color:#cfd3dc;max-height:60vh;overflow:auto">${esc(c.body)}</div>
      </div>`);
  }
});

/* ==========================================================================
   EXPLORATION DU MONDE OUVERT
   Archives à ramasser (affiches, lettres, livres, photos, vins rares), 40 clés,
   60 coffres (10 par palier : 1, 5, 10, 20, 30 et 40 clés possédées).
   Les clés ne s'usent pas : un coffre s'ouvre quand on en possède assez.
   w : où se trouve l'objet (le monde ouvert calcule l'endroit exact) —
   city (rues), park, desert, forest, snow, ruins, house (maison), cellar (cave), church, library, gal (galeries)
   ========================================================================== */
const EX_KINDS = { affiche: ['Affiches', 'image'], lettre: ['Lettres', 'mail'], livre: ['Livres', 'book'], photo: ['Photos', 'camera'], vin: ['Vins rares', 'wine'], cle: ['Clés', 'key-round'], coffre: ['Coffres', 'package'] };
const EX_ITEMS = [];
const exAdd = (kind, id, w, t, b, o = {}) => EX_ITEMS.push(Object.assign({ id, kind, w, t, b }, o));

/* ---------- Affiches (sur les murs) ---------- */
[
  ['L’Association recrute', 'CHASSEURS ÉVEILLÉS : VOTRE VILLE A BESOIN DE VOUS. Prime d’engagement, soins gratuits, gloire assurée. (Quelqu’un a rayé « assurée » et écrit « promise ».)'],
  ['Couvre-feu', 'Par arrêté municipal, tout rassemblement est interdit après la cloche du soir près des Failles déclarées. Les contrevenants seront raccompagnés chez eux. Avec politesse, si possible.'],
  ['Perdu : chat roux', 'Répond au nom de Biscotte. Ne répond pas, en fait. Mais il vient si on secoue une boîte de sardines. Rue du Four, demander Rolande.'],
  ['Bal du printemps', 'Place des Brèches, samedi soir. Orchestre, lampions, limonade. Entrée : un sourire. Les Chasseurs sont priés de laisser leurs armes au vestiaire.'],
  ['Cours du soir', 'Lire, écrire, compter. Gratuit. Salle paroissiale de Sainte-Claire, le mardi et le jeudi. « On n’est jamais trop vieux pour apprendre son propre nom par cœur. »'],
  ['Avis de Faille', 'FAILLE DE RANG D SIGNALÉE QUAI DES PÊCHEURS. Ne pas approcher. Ne pas jeter de pain dedans. (Nous savons que c’était vous, Gérard.)'],
  ['Théâtre de la Lanterne', 'Ce soir : « Le Roi qui voulait tout compter ». Comédie en trois actes. Durée : deux heures, ou un peu plus si le roi recompte.'],
  ['Soupe populaire', 'Tous les midis, cour de l’Hospice. Personne ne vous demandera ce que vous avez fait pour la mériter.'],
  ['Arène des Chasseurs', 'RECORD À BATTRE ! Inscrivez votre nom au tableau. Entrée libre. Buvette. Vestiaires chauffés. Ne pas parler aux ombres.'],
  ['Disparu', 'Lucien Baudet, 12 ans, pull vert, une cicatrice au menton. Vu pour la dernière fois près de la gare. Sa mère attend à la boulangerie. Elle laisse la porte ouverte.'],
  ['Marché du jeudi', 'Fruits, légumes, poissons du quai, ferraille de Faille « garantie sans malédiction ». Paiement en kinahs ou en services rendus.'],
  ['Mise en garde', 'Le Système ne vous demandera jamais votre mot de passe. Méfiez-vous des voix qui chuchotent dans les ruelles. Elles, si.'],
  ['Chorale de Sainte-Claire', 'Cherche voix graves. Et voix aiguës. Et voix qui chantent faux mais avec cœur. Surtout celles-là.'],
  ['Parc des Lanternes', 'Grande roue, carrousel, chaises volantes ! Ouvert tous les soirs depuis la réouverture. « Parce qu’il faut bien rire, même entre deux Failles. »'],
  ['Prière de ne pas grimper', 'Sur les toits. Oui, vous. Nous vous voyons. Les tuiles coûtent cher et les Chasseurs aussi.'],
  ['Cherche apprenti', 'Forge de la rue du Four. Bras solides, patience, bonne humeur. Un bras suffit, si c’est le bon.'],
  ['Conférence', 'Hôtel de ville, mercredi : « Les Failles sont-elles une punition ou une question ? » Entrée libre. Débat houleux attendu.'],
  ['Collecte', 'Couvertures, chaussures, livres d’enfants. À déposer à l’Hospice. Les chaussures doivent aller par deux, merci.'],
  ['Visite de l’Observatoire', 'Colline des Vents, le premier dimanche du mois. Regarder les étoiles, c’est se souvenir que tout n’est pas à notre hauteur.'],
  ['Trouvé : un gant', 'Gant de cuir gauche, taille homme, une photo d’un chien glissée dedans. À réclamer à l’Association, guichet 3.'],
  ['Le Système compte', 'Affiche officielle : « Chaque effort est enregistré. » En dessous, à la craie : « Chaque larme aussi ? »'],
  ['Bibliothèque municipale', 'La Grande Bibliothèque est ouverte à tous. Les livres empruntés doivent être rendus. Les idées, vous pouvez les garder.'],
  ['Concours de pâtisserie', 'Organisé par la boulangerie Couderc. Thème : « Le pain que l’on partage ». Le jury goûtera tout. Le jury a très faim.'],
  ['Médecin de quartier', 'Consultations gratuites pour les enfants, les anciens et ceux qui n’osent pas demander. Surtout ceux-là.'],
  ['À vendre', 'Armure de rang C, peu servie. Un seul propriétaire, très prudent. Il a pris sa retraite. Il élève des chèvres.'],
  ['Expédition vers l’Ouest', 'On recherche des volontaires pour cartographier les ruines de l’Ancienne Cité. Prévoir des vivres, des cordes et un cœur solide. La nature y a repris ses droits.'],
  ['Puits de Haute-Brume', 'L’eau du puits est potable. Les vœux qu’on y jette ne sont pas garantis.'],
  ['Danger : désert', 'Au-delà du Pont-de-l’Est, le Désert d’Ocre. Pas d’eau sur quarante kilomètres. Les mirages parlent. Ne leur répondez pas.'],
  ['Monts du Silence', 'Ascension déconseillée sans guide. Le silence là-haut n’est pas vide : il écoute.'],
  ['Fête des lumières', 'Chaque fenêtre une bougie, pour ceux qui ne sont pas rentrés. Et une de plus, pour ceux qui rentreront.']
].forEach(([t, b], i) => exAdd('affiche', 'AF' + String(i + 1).padStart(2, '0'), i >= 25 ? 'ruins' : 'wall', t, b));

/* ---------- Lettres ---------- */
const EX_LETTERS = [
  ['Lettre à mon fils', 'Mon grand, je t’écris de la cuisine. Ton père dit que tu es trop fier pour revenir. Je crois que tu as peur qu’on ne t’attende plus. La soupe est sur le feu depuis trois ans. Elle t’attend. Moi aussi.'],
  ['Brouillon de démission', 'Monsieur le directeur de l’Association, je vous remets mon insigne de rang B. Je ne suis pas lâche. J’ai simplement compris que je combattais pour un chiffre. Je préfère combattre pour quelqu’un.'],
  ['À la personne qui a pris mon vélo', 'Je ne suis pas en colère. Enfin, un peu. Mais si tu en avais besoin pour aller voir quelqu’un que tu aimes, garde-le. Sinon, rapporte-le, il y a un panier pour ma mère.'],
  ['Pour Clara, plus tard', 'Ma puce, quand tu liras ça tu sauras lire. Je voulais te dire que le jour où tu es née, j’ai oublié le monde entier pendant une heure. C’est la plus belle heure de ma vie.'],
  ['Lettre jamais envoyée', 'Je t’ai dit des choses dures. Elles étaient vraies, mais je les ai dites pour te blesser, pas pour t’aider. C’est ça, mon tort. Pardonne-moi si tu peux. Sinon, je comprendrai.'],
  ['Note sur la porte', 'Partie chercher du pain. Si tu rentres avant moi, les clés sont sous le pot de géraniums. Si tu ne rentres pas, je laisserai la lampe allumée quand même.'],
  ['D’un soldat', 'On nous a dit que le mur tiendrait. Le mur a tenu. Nous, un peu moins. Je t’envoie une fleur cueillie près du poste. Elle est fanée. Elle a fait le voyage, c’est déjà beaucoup.'],
  ['Au boulanger', 'Merci pour le pain de dimanche. Vous ne l’avez pas fait payer et vous avez fait semblant d’oublier. Je ne l’oublierai pas, moi.'],
  ['De la vieille Albertine', 'Quatre-vingt-dix ans aujourd’hui. On me demande le secret. Il n’y en a pas. J’ai pardonné tôt et je me suis couchée tard. Et j’ai beaucoup ri des choses qui ne valaient pas la peine qu’on pleure.'],
  ['Au Système', 'Tu m’as donné un niveau, une classe, un rang. Tu ne m’as jamais demandé comment j’allais. Ce n’est pas un reproche. C’est une remarque. Quelqu’un d’autre me l’a demandé, ce matin.'],
  ['Mot d’excuse', 'Madame l’institutrice, Paulin n’a pas fait ses devoirs hier soir. Nous avons regardé les étoiles depuis le toit. Je prends la responsabilité. Il sait maintenant où est la Grande Ourse.'],
  ['Testament d’un pêcheur', 'Je lègue ma barque à celui qui en a besoin. Mes filets à ma voisine. Mon chapeau à personne, il est trop moche. Et ma gratitude à tous ceux qui m’ont tiré de l’eau.'],
  ['Pour la fille du quatrième', 'Je joue du violon le soir parce que j’ai peur du silence. Si ça te dérange, frappe trois coups. Si ça te plaît, frappe deux. Hier, tu as frappé deux. Merci.'],
  ['D’une infirmière', 'Le petit de la chambre 6 m’a demandé si la mort, c’était comme dormir. Je lui ai dit que je ne savais pas. Il m’a dit : « Alors on saura ensemble. » Il va mieux. Moi aussi.'],
  ['Lettre d’amour', 'Je ne sais pas écrire les poèmes. Alors voilà : quand tu entres dans une pièce, la pièce devient plus grande. C’est tout. C’est tout ce que je sais.'],
  ['Au Chasseur qui m’a sauvé', 'Je ne connais pas ton nom. Tu as porté ma fille hors de la Faille et tu es reparti. Je prie pour toi chaque soir, en t’appelant « celui-là ». J’espère que ça compte.'],
  ['Galeries — note de chantier', 'Le tunnel 7 rejoint la cave des Fabre. Le tunnel 9 ne rejoint rien : il s’arrête contre un mur ancien couvert d’inscriptions. On a muré. Personne ne veut savoir ce qu’il y a derrière.'],
  ['Galeries — un enfant', 'Si tu trouves ce papier, c’est que tu as trouvé notre cachette. Tu peux rester, mais il faut dire un secret. Le mien : j’ai peur du noir. C’est pour ça qu’on a mis des bougies.'],
  ['Galeries — contrebandier', 'Livraison du jeudi annulée. Les Chasseurs patrouillent. Laisser les caisses de vin dans la cave du fond. Ne pas boire le 1887, c’est pour le mariage de la petite.'],
  ['Galeries — prière griffonnée', 'Il fait sombre ici, Seigneur, mais je sais que tu y vois. Garde ceux qui sont en haut. Et ceux qui, comme moi, ont dû descendre.'],
  ['Galeries — plan déchiré', 'De la cave rouge, deux échelles. La première mène au puits. La seconde mène chez quelqu’un qui ne ferme jamais sa porte. Va plutôt par là.'],
  ['Sainte-Claire — confession', 'Mon père, j’ai envié mon frère toute ma vie. Il est mort hier. Je n’envie plus rien. Je voudrais seulement lui avoir dit qu’il était bon.'],
  ['Sainte-Claire — registre des cierges', 'Un cierge pour Lucien. Un pour Maman. Un pour le Chasseur sans nom. Un pour moi, parce que personne d’autre n’y pense.'],
  ['Sainte-Claire — mot au sacristain', 'La troisième cloche sonne faux. Ne la réparez pas. Ma femme disait qu’elle chantait comme moi.'],
  ['Parc — lettre au forain', 'Merci d’avoir laissé mon fils faire trois tours de manège gratuits. Il n’a pas souri depuis l’hiver. Il a souri trois fois.'],
  ['Parc — billet perdu', 'Admettre une personne. Grande roue. Valable pour « le plus beau soir de ta vie ». (Écrit à la main au dos.)'],
  ['Forêt — journal de bûcheron', 'J’ai compté les anneaux du vieux chêne. Trois cent douze. Il était là avant la ville, avant les Failles, avant mon arrière-grand-père. Je ne l’ai pas abattu. Je me suis assis contre lui.'],
  ['Forêt — lettre d’un ermite', 'On me demande pourquoi je vis seul. Je ne vis pas seul. Il y a les arbres, les renards, et Celui qui a fait les deux. Les hommes me manquent un peu, c’est vrai. Venez le dimanche.'],
  ['Montagne — dernière page', 'Le sommet est à deux heures. Le vent est trop fort. Je redescends. Ce n’est pas un échec : quelqu’un m’attend en bas, et c’est plus important qu’un sommet.'],
  ['Désert — message dans une bouteille', 'Si tu lis ceci, tu as trouvé de l’eau, ou une bouteille. Dans les deux cas, tu as eu de la chance. Bois lentement. Marche vers l’ouest. Ne suis pas les voix.']
];
EX_LETTERS.forEach(([t, b], i) => exAdd('lettre', 'LE' + String(i + 1).padStart(2, '0'), i < 16 ? 'house' : i < 21 ? 'gal' : i < 24 ? 'church' : i < 26 ? 'park' : i < 28 ? 'forest' : i < 29 ? 'snow' : 'desert', t, b));

/* ---------- Livres ---------- */
const EX_BOOKS = [
  ['Petite histoire de Vespérane', 'Anonyme', 'La ville fut fondée au bord du fleuve par des gens qui fuyaient le froid. Ils avaient peu de choses, mais ils avaient décidé de partager le pain. C’est encore, dit-on, la meilleure définition d’une ville.'],
  ['Traité des Failles', 'Pr. Armand Leclou', 'Une Faille n’est pas un trou : c’est une blessure dans l’ordre des choses. On peut la refermer. On ne peut pas faire comme si elle n’avait jamais existé.'],
  ['Les rangs du Système', 'Manuel de l’Association', 'Le rang mesure la force. Il ne mesure ni le courage, ni la bonté, ni la fidélité. Le manuel recommande de ne pas confondre les quatre.'],
  ['Herbier des collines', 'Sœur Agnès', 'La camomille calme, la sauge purifie, l’ortie fortifie. Et la menthe sauvage, cueillie à l’aube, rappelle qu’il y a encore des choses gratuites dans ce monde.'],
  ['Le Jardinier patient', 'Conte populaire', 'Un roi demanda au jardinier pourquoi il plantait des arbres qu’il ne verrait jamais grandir. « Parce que d’autres ont planté ceux sous lesquels je me repose », répondit-il.'],
  ['Méditations sur le temps', 'Aurélien Vasse', 'Nous comptons les heures comme si elles nous appartenaient. Elles nous sont prêtées. La question n’est pas combien il en reste, mais à qui nous les donnons.'],
  ['Cuisine des jours maigres', 'Maryse Couderc', 'Une soupe de rien devient un festin si l’on est trois autour. Recette : de l’eau, des épluchures, du sel, et la porte ouverte.'],
  ['Atlas du ciel', 'Observatoire des Vents', 'Les étoiles que vous voyez ont parfois disparu depuis longtemps. Leur lumière continue pourtant de voyager. Certaines bontés sont pareilles.'],
  ['La Guerre de l’Est', 'Commandant Sorel', 'Nous avons tenu la ligne. Les historiens parleront de stratégie. Moi, je me souviens surtout des hommes qui partageaient leur dernière cigarette.'],
  ['Le Livre des noms', 'Registre de l’Hospice', 'Ici sont inscrits ceux que personne n’a réclamés. Nous les avons enterrés avec un nom, même inventé. Personne ne devrait partir sans qu’on l’appelle.'],
  ['Pensées d’un horloger', 'Joseph Marelle', 'Une horloge ne sait pas l’heure : elle la répète. L’homme, lui, peut décider de ce qu’il fait de chaque heure. C’est sa grandeur, et c’est son poids.'],
  ['Le Désert d’Ocre', 'Carnet d’exploration', 'Il n’y a rien dans le désert, disent les marchands. C’est faux : il y a le silence, les étoiles, et soi-même. C’est justement ce qui fait peur.'],
  ['Les Monts du Silence', 'Guide d’alpinisme', 'Au-dessus de trois mille mètres, on parle moins. On respire. On découvre que la plupart de nos mots n’étaient pas nécessaires.'],
  ['L’Ancienne Cité', 'Rapport archéologique', 'Une ville entière, désertée en une nuit. Les tours sont restées debout, les jardins les ont envahies. On dirait que la nature a attendu poliment que nous partions.'],
  ['Petit manuel de l’écoute', 'Frère Anselme', 'Écouter, ce n’est pas attendre son tour de parler. C’est laisser l’autre exister un moment au centre de la pièce.'],
  ['Contes pour les nuits d’orage', 'Recueil', 'Il était une fois une enfant qui avait peur du tonnerre. Sa grand-mère lui apprit à compter entre l’éclair et le bruit. Plus on compte, plus l’orage s’éloigne. Elle compte encore, parfois, à quatre-vingts ans.'],
  ['De l’amitié', 'Cicéron (traduction de quartier)', 'L’amitié rend les joies plus éclatantes et les peines plus légères, car elle les partage. (Annotation en marge : « Vrai. Vérifié avec Paulette. »)'],
  ['Les Pensées', 'Blaise Pascal (extraits)', 'Le cœur a ses raisons que la raison ne connaît point. (Le lecteur précédent a souligné « point » trois fois.)'],
  ['Mécanique des machines à vapeur', 'École des Arts', 'Toute machine perd de l’énergie en chaleur. L’ingénieur cherche à réduire la perte. Le poète, lui, demande à qui profite la chaleur.'],
  ['Le Chasseur et l’enfant', 'Roman populaire', '« Pourquoi tu te bats ? » demanda l’enfant. Le Chasseur réfléchit longtemps. « Avant, pour monter. Maintenant, pour que tu puisses grandir. » Fin du chapitre douze.'],
  ['Grammaire française', 'Édition scolaire', 'Le verbe « aimer » se conjugue à tous les temps. L’auteur ajoute : c’est le seul qui ne s’use pas à force de servir.'],
  ['Les Psaumes', 'Louis Segond 1910', 'Le livre est usé aux mêmes pages. Une feuille séchée marque le Psaume 23. Une autre, plus récente, le Psaume 139.'],
  ['Dictionnaire des rues', 'Mairie de Vespérane', 'Rue du Four : du four banal où chacun cuisait son pain. Rue des Cloches : parce qu’on les entend. Rue sans nom : on attend encore qu’elle mérite le sien.'],
  ['Journal d’une archiviste', 'H. V.', 'Aujourd’hui, j’ai classé cent fiches. Chacune était une vie. Je me suis arrêtée sur la quarante-septième, et j’ai pleuré sans savoir pourquoi. Puis j’ai continué. C’est mon métier : ne pas oublier.'],
  ['Le Parc des Lanternes', 'Brochure', 'Fondé l’année des grandes Failles, le parc devait « rendre aux enfants ce que le ciel leur avait pris ». La grande roue fut construite par des Chasseurs, de nuit, sans paiement.'],
  ['Comment parler aux morts', 'Ouvrage anonyme', 'On ne leur parle pas pour qu’ils répondent. On leur parle pour ne pas laisser leur place vide dans nos phrases.'],
  ['Traité de la gratitude', 'Pierre Lambrecht', 'Celui qui dit merci reconnaît qu’il n’est pas l’origine de tout. C’est une humiliation douce, et la plus libératrice qui soit.'],
  ['Bestiaire des ombres', 'Association des Chasseurs', 'Les ombres imitent. Elles n’inventent jamais. C’est la différence la plus sûre entre elles et nous : nous pouvons faire ce qui n’a jamais été fait.'],
  ['Neige', 'Poèmes d’une enfant de Haute-Brume', 'La neige efface les pas. Mais elle garde la forme de l’ange qu’on a fait en s’allongeant dedans. C’est ce que je préfère.'],
  ['Le Silence de Dieu', 'Essai', 'Ceux qui disent que Dieu se tait n’ont peut-être pas cherché au bon endroit : dans une crèche, sur une croix, au fond d’un tombeau ouvert. C’est là qu’il a parlé le plus fort.']
];
EX_BOOKS.forEach(([t, a, b], i) => exAdd('livre', 'LI' + String(i + 1).padStart(2, '0'), i < 20 ? 'library' : i < 26 ? 'house' : i < 28 ? 'ruins' : i === 28 ? 'snow' : 'church', t, b, { a }));

/* ---------- Photos ---------- */
[
  ['Le mariage de la rue du Four', 'Une noce sous la pluie. Tout le monde rit. La mariée a retroussé sa robe pour sauter une flaque.'],
  ['Équipe Delta, avant', 'Cinq Chasseurs devant la gare, l’air fier. Au dos : « Avant la Faille. On ne savait pas. »'],
  ['Premier pas', 'Un bébé tient debout, agrippé à la queue d’un chien très patient.'],
  ['La grande roue, l’année de l’ouverture', 'Des enfants dans chaque cabine. Le forain, en bas, essuie quelque chose au coin de son œil.'],
  ['Pique-nique au bord du fleuve', 'Une nappe à carreaux, des cerises, trois générations. Le grand-père dort.'],
  ['Les sœurs de l’Hospice', 'Six religieuses en rang, sauf une qui a tourné la tête pour regarder un pigeon.'],
  ['Le dernier tramway', 'Le tram de nuit, éclairé, vide sauf un vieil homme qui lit.'],
  ['Portrait sans nom', 'Une jeune femme sourit. Personne ne sait qui elle est. Quelqu’un a écrit derrière : « Elle était gentille avec tout le monde. »'],
  ['Le carrousel', 'Un garçon sur un cheval de bois, les bras levés, comme s’il volait.'],
  ['Ruines au crépuscule', 'Une tour de l’Ancienne Cité, mangée par le lierre, sous un ciel rose.'],
  ['Arbre dans un salon', 'Dans l’Ancienne Cité : un arbre a poussé à travers un piano. Le piano est toujours accordé, dit la légende.'],
  ['Expédition de l’Ouest', 'Six explorateurs posent devant les ruines. Un enfant s’est glissé dans la photo.'],
  ['Dans la forêt', 'Un faon regarde l’objectif. Il n’a pas peur.'],
  ['Cabane du bûcheron', 'De la fumée sort de la cheminée. Une paire de bottes sèche devant la porte.'],
  ['Caravane du désert', 'Des chameaux, des tentes, un homme qui verse le thé de très haut.'],
  ['Mirage', 'Une ville au loin, au-dessus des dunes. Au dos : « Elle n’existait pas. On a marché vers elle quand même. »'],
  ['Galeries — la salle aux bougies', 'Une cave voûtée, des dizaines de bougies, des enfants assis en cercle.'],
  ['Galeries — l’échelle', 'Une échelle monte vers un carré de lumière. Quelqu’un tend la main d’en haut.'],
  ['Famille Fabre', 'Le père, la mère, quatre enfants et une grand-mère, tous dans le même lit pour la photo. Personne n’a eu le temps de se coiffer.'],
  ['Les jumeaux', 'Deux garçons identiques, un avec un œil au beurre noir. Au dos : « Devinez qui a commencé. »']
].forEach(([t, b], i) => exAdd('photo', 'PH' + String(i + 1).padStart(2, '0'), [0, 1, 2, 4, 5, 6, 7, 18, 19].includes(i) ? 'house' : i === 3 || i === 8 ? 'park' : i < 12 ? 'ruins' : i < 14 ? 'forest' : i < 16 ? 'desert' : 'gal', t, b));

/* ---------- Vins rares (caves) ---------- */
[
  ['Clos des Brèches 1887', 'Rouge sombre, notes de cerise et de vieux bois. « Pour le mariage de la petite. »'],
  ['Château Vaumoise 1902', 'Un vin de l’hiver de la disette. Il paraît qu’on le buvait par petites cuillères.'],
  ['Larmes de Haute-Brume', 'Vin de glace, sucré comme une promesse tenue.'],
  ['Cuvée des Pêcheurs', 'Blanc sec, sent la mer et la corde mouillée. Parfait avec du poisson, ou du chagrin.'],
  ['Saint-Clair Grand Cru', 'Vin de messe que le sacristain gardait « pour les grands jours ». Il n’en a jamais trouvé d’assez grand.'],
  ['Rubis de l’Est', 'Vin de soldats, rude et chaleureux. Une étiquette tachée de boue.'],
  ['Clos de l’Observatoire', 'Bouteille étoilée. On dit qu’il faut la boire sous la Grande Ourse.'],
  ['Vin des Noces', 'Mousseux, léger, à ouvrir quand quelqu’un revient de loin.'],
  ['Cuvée du Forain', 'Un rosé un peu sucré, vendu au parc les soirs de fête.'],
  ['Désert d’Ocre, cuvée du Mirage', 'Une rareté : un vin de sable, ambré, épicé. Personne ne sait où sont les vignes.'],
  ['Domaine de la Sylve 1911', 'Rouge forestier : champignon, mousse, sous-bois après la pluie.'],
  ['Neige Éternelle', 'Vin blanc des Monts du Silence. Il ne gèle jamais, dit l’étiquette.'],
  ['Cave Fabre, réserve familiale', 'Pas d’étiquette. Juste un nom à la craie : « Pour quand on sera tous là. »'],
  ['Ancienne Cité, millésime perdu', 'Bouteille retrouvée intacte dans une cave de l’Ancienne Cité. L’étiquette est dans une langue oubliée.'],
  ['Vin du Pardon', 'Rouge doux. La légende dit qu’on l’ouvrait pour se réconcilier.'],
  ['Clos des Cloches', 'Vin de la rue des Cloches. Il paraît qu’il sonne quand on trinque.'],
  ['Cuvée de l’Hospice', 'Coupé d’eau pour les malades. Non coupé pour les infirmières, le soir.'],
  ['Galeries — tonneau 7', 'Vin de contrebande, étonnamment bon. Les contrebandiers avaient du goût.'],
  ['Galeries — bouteille murée', 'Trouvée derrière un mur. Datée d’avant la fondation de la ville.'],
  ['Galeries — vin du mineur', 'Fort, noir, consolant. Pour remonter.']
].forEach(([t, b], i) => exAdd('vin', 'VI' + String(i + 1).padStart(2, '0'), i < 14 ? (i === 9 ? 'desert' : i === 11 ? 'snow' : i === 13 ? 'ruins' : 'cellar') : i < 17 ? 'cellar' : 'gal', t, b));

/* ---------- 40 clés ---------- */
const EX_KEY_W = ['city', 'city', 'city', 'city', 'city', 'city', 'city', 'city', 'park', 'park', 'park', 'house', 'house', 'house', 'house', 'house', 'house', 'church', 'church', 'library', 'library', 'gal', 'gal', 'gal', 'gal', 'gal', 'desert', 'desert', 'desert', 'forest', 'forest', 'forest', 'forest', 'snow', 'snow', 'snow', 'ruins', 'ruins', 'ruins', 'ruins'];
EX_KEY_W.forEach((w, i) => exAdd('cle', 'CL' + String(i + 1).padStart(2, '0'), w, 'Clé n° ' + (i + 1), 'Une vieille clé de fer, numérotée. Les clés ne s’usent pas : plus vous en possédez, plus vous pouvez ouvrir de coffres.'));

/* ---------- 60 coffres : 10 par palier ---------- */
const EX_CHEST_W = {
  1: ['city', 'city', 'city', 'city', 'house', 'house', 'house', 'house', 'park', 'park'],
  5: ['house', 'house', 'house', 'house', 'church', 'church', 'library', 'library', 'gal', 'city'],
  10: ['gal', 'gal', 'gal', 'forest', 'forest', 'forest', 'desert', 'desert', 'house', 'church'],
  20: ['ruins', 'ruins', 'ruins', 'snow', 'snow', 'snow', 'desert', 'desert', 'library', 'church'],
  30: ['ruins', 'ruins', 'ruins', 'snow', 'snow', 'gal', 'gal', 'gal', 'forest', 'house'],
  40: ['snow', 'snow', 'ruins', 'ruins', 'desert', 'desert', 'forest', 'forest', 'gal', 'library']
};
for (const tier of [1, 5, 10, 20, 30, 40]) EX_CHEST_W[tier].forEach((w, i) => exAdd('coffre', 'CO' + tier + '-' + (i + 1), w, `Coffre à ${tier} clé${tier > 1 ? 's' : ''}`, '', { tier }));

/* ---------- état, récompenses ---------- */
function exState() { const W = state.world || (state.world = {}); const X = W.ex || (W.ex = { got: {} }); X.got = X.got || {}; return X; }
function exKeys() { const X = exState(); return Math.min(40, EX_ITEMS.filter(i => i.kind === 'cle' && X.got[i.id]).length + ((state.merchant && state.merchant.keys) || 0)); }
/* récompense d'un coffre selon son palier (clés possédées requises, non consommées) */
function exChestReward(tier) {
  const cls = curClass(), w = [...new Set([...classMains(), ...classOffs()])].filter(t => WEAPON_TYPES[t]), arm = ['casque', 'plastron', 'jambieres', 'bottes', 'bijou', 'ceinture'];
  const pick = L => L[Math.floor(Math.random() * L.length)], out = [];
  const gear = (r, n = 1) => { for (let i = 0; i < n; i++) { const t = Math.random() < 0.5 ? pick(w) : pick(arm), it = makeItem(r, t); state.inv.push(it); out.push(`${itemName(it)}`); } };
  const kin = k => { state.bonus = state.bonus || []; state.bonus.push({ date: dk(), k, x: 0, why: 'Coffre trouvé dans Vespérane' }); out.push(`${k.toLocaleString('fr-FR')} kinahs`); };
  const mats = o => { for (const m in o) state.mats[m] = (state.mats[m] || 0) + o[m]; out.push(Object.entries(o).map(([m, n]) => n + ' ' + MATERIALS[m].name.toLowerCase()).join(', ')); };
  const chip = r => { const t = pick(Object.keys(CHIP_TYPES)); addChip(t, r); out.push(`puce ${CHIP_TYPES[t].name} ${RARITIES[r].name}`); };
  const rune = r => { const t = pick(Object.keys(RUNE_TYPES)); state.runes = state.runes || {}; state.runes[runeKey(t, r)] = (state.runes[runeKey(t, r)] || 0) + 1; out.push(`${RUNE_TYPES[t].name} ${RARITIES[r].name}`); };
  if (tier === 1) { kin(5000); mats({ ferraille: 20, ether: 3 }); }
  else if (tier === 5) { kin(30000); mats({ ether: 15, coeur: 2 }); chip(4); }
  else if (tier === 10) { kin(100000); gear(5); mats({ coeur: 8, cendre: 1 }); }
  else if (tier === 20) { kin(400000); gear(6); rune(4); }
  else if (tier === 30) { kin(1000000); gear(6, 2); rune(6); chip(6); }
  else { gear(7); rune(6); kin(2000000); }
  void cls; return out;
}
/* appelé par le monde ouvert quand on ramasse ou qu'on ouvre quelque chose */
function exCollect(id) {
  const it = EX_ITEMS.find(x => x.id === id), X = exState(); if (!it || X.got[id]) return null;
  if (it.kind === 'coffre' && exKeys() < it.tier) return { locked: true, need: it.tier, have: exKeys() };
  X.got[id] = dk();
  let reward = null; if (it.kind === 'coffre') reward = exChestReward(it.tier);
  save();
  return { ok: true, reward, keys: exKeys() };
}
function exWorldData() {
  return { items: EX_ITEMS.map(i => ({ id: i.id, kind: i.kind, w: i.w, t: i.t, b: i.b, a: i.a, tier: i.tier })), got: Object.assign({}, exState().got) };
}

/* ---------- Codex : Exploration ---------- */
function codexExplore() {
  const X = exState(), cat = ui.exCat || 'affiche', keys = exKeys();
  const tabs = Object.entries(EX_KINDS).map(([k, [l]]) => { const L = EX_ITEMS.filter(i => i.kind === k); return `<button type="button" class="chip ${cat === k ? 'on' : ''}" data-a="ex-cat" data-k="${k}">${l} ${L.filter(i => X.got[i.id]).length}/${L.length}</button>`; }).join('') + `<button type="button" class="chip ${cat === 'eternels' ? 'on' : ''}" data-a="ex-cat" data-k="eternels">Éternels ${wbManualCount()}/16</button>`;
  const L = EX_ITEMS.filter(i => i.kind === cat), WN = { city: 'dans les rues', wall: 'sur un mur de la ville', park: 'au Parc des Lanternes', desert: 'dans le Désert d’Ocre', forest: 'dans la Forêt de Brune-Lande', snow: 'dans les Monts du Silence', ruins: 'dans l’Ancienne Cité', house: 'dans une maison', cellar: 'dans une cave', church: 'dans la cathédrale', library: 'à la Grande Bibliothèque', gal: 'dans les galeries souterraines' };
  return `<div class="sys"><div class="flex items-center justify-between gap-2 mb-2"><div class="sys-title">Exploration de Vespérane</div><span class="f-mono text-sm">${EX_ITEMS.filter(i => X.got[i.id]).length} / ${EX_ITEMS.length}</span></div>
    <p class="text-[11px] muted mb-2">Archives à ramasser dans le monde ouvert (et dans les maisons, la cathédrale, la Grande Bibliothèque, les caves et les galeries), 40 clés et 60 coffres. Les clés ne s’usent pas : un coffre s’ouvre dès qu’on en possède assez (1, 5, 10, 20, 30 ou 40). Les coffres à 40 clés contiennent un objet De toute éternité. Clés : <b class="glow">${keys} / 40</b>.</p>
    <div class="flex gap-1 flex-wrap mb-2">${tabs}</div>
    ${cat === 'eternels' ? codexEternals() : ''}${L.map(i => { const got = X.got[i.id]; return got && i.kind !== 'cle' && i.kind !== 'coffre' ? `<button type="button" class="res" data-a="ex-read" data-id="${i.id}"><span class="f-mono text-[11px] muted w-12">${i.id}</span><span class="flex-1 min-w-0"><span class="block truncate">${esc(i.t)}</span><span class="text-[10px] muted">${esc(WN[i.w] || '')}</span></span>${icon('chevron-right', 'w-4 h-4 muted')}</button>`
      : `<div class="res" style="cursor:default;${got ? '' : 'opacity:.55'}"><span class="f-mono text-[11px] muted w-12">${i.id}</span><span class="flex-1 min-w-0 text-sm">${got ? esc(i.t) + (i.kind === 'coffre' ? ' · ouvert' : ' · trouvée') : (i.kind === 'coffre' ? esc(i.t) + ' · ' : '') + 'à trouver ' + esc(WN[i.w] || '')}</span>${icon(got ? 'check' : 'lock', 'w-4 h-4 ' + (got ? 'glow' : 'muted'))}</div>`; }).join('')}</div>`;
}
Object.assign(handlers, {
  'ex-cat': el => { ui.exCat = el.dataset.k; render(); },
  'ex-read': el => {
    const i = EX_ITEMS.find(x => x.id === el.dataset.id); if (!i || !exState().got[i.id]) return;
    showOverlay(`<div class="sys pop w-full max-w-md" style="padding:20px"><div class="flex items-center justify-between gap-2 mb-3"><span class="sys-title">${esc(EX_KINDS[i.kind][0])} · ${esc(i.id)}</span><button type="button" class="ibtn" data-a="close-overlay" aria-label="Fermer">${icon('x', 'w-4 h-4')}</button></div>
      <h3 class="f-display text-lg font-bold">${esc(i.t)}</h3>${i.a ? `<div class="text-xs muted mt-1">${esc(i.a)}</div>` : ''}<div class="text-[14px] mt-3 leading-relaxed" style="color:#cfd3dc;font-family:var(--font-prose)">${esc(i.b)}</div></div>`);
  }
});

/* ---------- Les Éternels du monde ouvert (15 gardiens + l'Éternel du Sommet) ---------- */
function wbState() { state.world = state.world || {}; const S = state.world.wb || (state.world.wb = {}); S.first = S.first || {}; S.day = S.day || {}; S.manual = S.manual || {}; return S; }
function wbManualHas(i) { return !!(state.world && state.world.wb && state.world.wb.manual && state.world.wb.manual[i]); }
function wbManualCount() { return state.world && state.world.wb && state.world.wb.manual ? Object.keys(state.world.wb.manual).length : 0; }
function wbKillCount() { return state.world && state.world.wb && state.world.wb.first ? Object.keys(state.world.wb.first).length : 0; }
const ROMAN_WB = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', '∞'];
/* ce que chaque Éternel laisse à qui l'a vaincu les yeux ouverts : une archive inédite et une récompense qui n'existe nulle part ailleurs */
const WB_MANUAL = [
  { n: 'Le Veilleur de Brune-Lande', lvl: 200, cosm: ['tit_wb1'], t: 'La lampe du Veilleur', b: 'On l’avait posté à la lisière pour prévenir la ville si quelque chose sortait de la forêt. Personne n’est jamais venu le relever. Il a veillé si longtemps qu’il a oublié ce qu’il attendait, puis pourquoi il avait peur, puis son propre nom. Il ne restait que la lampe, et l’ordre de ne pas l’éteindre. Quand vous l’avez vaincu, il n’a pas résisté à la fin. Il a seulement demandé si quelqu’un, en ville, savait encore qu’il était là. Vous avez répondu oui. Ce n’était qu’à moitié faux.' },
  { n: 'Le Scarabée d’Ocre', lvl: 300, cosm: ['tit_wb2'], t: 'Ce que roule le Scarabée', b: 'Il roulait une boule de sable devant lui, d’est en ouest, chaque jour depuis la première Faille. Les caravaniers disaient qu’il poussait le soleil. Dans la boule, quand elle s’est brisée, il y avait un anneau de mariage, une dent de lait et une clé de maison. Trois choses que des voyageurs avaient laissé tomber dans le désert. Il ne les volait pas. Il les gardait, au cas où quelqu’un reviendrait les chercher.' },
  { n: 'La Statue qui pleure', lvl: 500, cosm: ['tit_wb3'], t: 'Le sel sur la joue', b: 'La statue se dressait sur la place de l’Ancienne Cité, au-dessus d’une fontaine à sec. Elle pleurait de l’eau salée, chaque nuit, depuis que la ville s’était vidée en une seule nuit. Les savants de l’Association ont analysé ses larmes : la même composition que les larmes humaines. Personne n’a su dire de qui. Quand elle est tombée, la fontaine s’est remise à couler, et l’eau était douce.' },
  { n: 'Le Héron de givre', lvl: 750, cosm: ['tit_wb4'], t: 'Une patte dans la glace', b: 'Un héron se tient sur une patte pour garder l’autre au chaud. Celui-ci se tenait sur une patte au milieu du lac depuis si longtemps que la glace l’avait pris jusqu’au genou. Il n’essayait plus de partir. Les enfants du hameau du Col lui jetaient du pain l’hiver. Il ne le mangeait pas, mais il tournait la tête vers eux chaque fois. C’était peut-être tout ce qu’il attendait.' },
  { n: 'Le Cerf aux mille bois', lvl: 1000, cosm: ['tit_wb5'], mount: 'm41', t: 'Mille et un', b: 'Chaque printemps, il lui poussait un bois de plus, un pour chaque mort de la forêt dans l’année. Les bûcherons de Brune-Lande le savaient et comptaient ses ramures pour savoir combien d’entre eux manquaient. À la fin il en portait plus de mille, et ne pouvait plus lever la tête. Vous l’avez délivré de leur poids. Il vous a suivi jusqu’à la lisière, puis il a choisi de vous suivre encore.' },
  { n: 'Le Pharaon sans nom', lvl: 1500, cosm: ['aur_wb6'], t: 'Le cartouche gratté', b: 'Sur tous les murs du temple, le nom du roi avait été gratté au burin. Ses successeurs voulaient qu’on l’oublie. Il a régné mille ans sans nom, assis dans le noir, à attendre que quelqu’un le prononce. Personne ne le connaissait plus. Vous non plus. Avant de tomber en poussière, il a demandé une seule chose : qu’on se souvienne qu’il avait eu un nom, même si on ne savait plus lequel.' },
  { n: 'L’Horloger de l’Ancienne Cité', lvl: 2000, cosm: ['aur_wb7'], t: 'Midi moins une', b: 'Toutes les horloges de l’Ancienne Cité se sont arrêtées à la même minute, la nuit où ses habitants sont partis. L’Horloger a passé les années suivantes à les remonter une à une, sans jamais parvenir à leur faire dépasser midi moins une. Il pensait qu’en passant la minute, les gens reviendraient. Vous avez entendu, en le vainquant, toutes les horloges sonner midi en même temps. Personne n’est revenu. Mais le temps, lui, est reparti.' },
  { n: 'Le Moine du Silence', lvl: 2500, cosm: ['aur_wb8'], t: 'Le vœu', b: 'Il avait fait vœu de silence le jour où il avait dit un mot de trop, à quelqu’un qu’il aimait, et qu’il n’avait jamais pu reprendre. Quarante ans sans parler. Le monastère s’est vidé autour de lui, la neige est entrée par les fenêtres. Vaincu, il a ouvert la bouche pour la première fois. Il n’a pas dit le mot de trop. Il a dit pardon, à quelqu’un qui n’était plus là pour l’entendre, et il a eu l’air soulagé quand même.' },
  { n: 'Le Ver des sables', lvl: 3000, cosm: ['aur_wb9'], t: 'Le chant sous les dunes', b: 'Les dunes du Désert d’Ocre chantent quand le vent passe : c’est un fait connu. Ce qu’on ignorait, c’est que le Ver chantait avec elles, depuis dessous, pour qu’aucune caravane ne se sente seule la nuit. Il avalait parfois un chariot, par maladresse, et s’en excusait pendant des années. Depuis qu’il est tombé, les dunes chantent encore. Un peu moins juste.' },
  { n: 'La Reine des Ronces', lvl: 4000, cosm: ['aur_wb10'], t: 'La haie', b: 'Elle avait planté une haie autour de son château pour que personne n’entre et que personne ne parte. Ses enfants étaient à l’intérieur. Les ronces ont grandi plus vite que les enfants, puis plus haut que les tours, puis plus longtemps qu’eux. Quand vous avez traversé la haie, il n’y avait plus personne à protéger depuis très longtemps. Elle le savait. Elle avait seulement peur de ce qu’elle verrait si elle arrêtait de faire pousser les ronces.' },
  { n: 'Le Titan rouillé', lvl: 5000, cosm: ['ail_wb11'], t: 'Pièce de rechange', b: 'On l’avait construit pour défendre la cité. On l’avait réparé avec les pièces de ceux qu’il n’avait pas su défendre : une poignée de porte, un landau, une cloche d’école. À la fin, il était fait de la ville elle-même. Il se battait toujours pour elle. Il ne savait pas qu’elle était vide, parce qu’il la portait sur lui.' },
  { n: 'Le Loup du Col', lvl: 6000, cosm: ['ail_wb12'], t: 'La meute d’un seul', b: 'Les loups du col de Haute-Brume chassaient en meute de neuf. Un hiver, il n’en est resté qu’un. Il a continué à chasser comme s’ils étaient neuf, à attendre au carrefour, à hurler pour appeler ceux qui ne venaient pas. Les bergers l’entendaient la nuit et ne dormaient plus. Vous l’avez vaincu au carrefour. Il regardait derrière vous, vers le col, jusqu’au bout.' },
  { n: 'Le Mirage', lvl: 7500, cosm: ['ail_wb13'], t: 'Ce que chacun voit', b: 'Chacun voyait dans le Mirage ce qu’il avait perdu : une maison, un visage, une ville verte au milieu des sables. Il ne mentait pas. Il montrait. C’est ceux qui le regardaient qui marchaient vers lui jusqu’à mourir de soif. Quand il s’est dissipé, vous avez vu ce qu’il avait vu, lui, pendant tout ce temps : rien que des voyageurs qui s’approchaient, et aucun qui reste.' },
  { n: 'L’Ermite de la Lande', lvl: 8500, cosm: ['ail_wb14'], t: 'La question', b: 'Il vivait seul au fond de la lande depuis si longtemps qu’il avait fini par trouver la réponse à la question qu’il était venu se poser. Personne ne la lui avait demandée depuis. Il vous l’a dite, à la fin, à voix très basse. Vous l’avez entendue. Vous vous en souvenez. Vous ne savez pas encore si vous la croyez.' },
  { n: 'Le Roi des Ruines', lvl: 10000, cosm: ['ail_wb15'], t: 'Le trône vide', b: 'Il n’avait pas de sujets. Il régnait sur des pierres, des pigeons et du lierre, et tenait audience tous les matins devant une salle vide. Il rendait la justice aux ronces et graciait les arbres. On riait de lui, de loin. Vaincu, il a posé la couronne sur une pierre et il a dit que régner n’était pas si difficile, quand il n’y avait personne à décevoir.' },
  { n: 'L’Éternel du Sommet', lvl: 100000, cosm: ['tit_wb16', 'aur_wb16', 'ail_wb16'], mount: 'm40', t: 'Ce qu’il y a au sommet', b: 'Tout en haut, il n’y avait pas de trésor, pas de porte, pas de ciel plus proche. Il y avait un homme assis dans la neige qui avait été le plus fort du monde, et qui regardait en bas. Il avait monté toute sa vie. Il n’avait jamais appris à redescendre. Il vous a demandé si cela valait la peine. Vous êtes redescendu. C’était votre réponse.' }
];
/* coffres des épreuves de sauts (monde ouvert) : grosse récompense la première fois, plus petite chaque jour ensuite */
function jumpChest(id, name) {
  const J = state.world.jumpc = state.world.jumpc || {}, today = dk(), first = !J[id], out = [], pick = L => L[Math.floor(Math.random() * L.length)];
  if (!first && J[id] === today) return { title: name, msg: 'Le coffre est vide. Il se remplit de nouveau demain.' };
  J[id] = today; (state.world.jumpf = state.world.jumpf || {})[id] = state.world.jumpf[id] || today;
  const kin = k => { state.bonus = state.bonus || []; state.bonus.push({ date: today, k, x: 0, why: 'Coffre d’épreuve : ' + name }); out.push(`${k.toLocaleString('fr-FR')} kinahs`); };
  const glory = g => { const A = arenaState(); A.glory += g; A.gloryTotal += g; out.push(`${g.toLocaleString('fr-FR')} gloire`); };
  const mats = (m, n) => { state.mats[m] = (state.mats[m] || 0) + n; out.push(n + ' ' + MATERIALS[m].name.toLowerCase()); };
  if (first) { kin(400000); glory(5000); mats('coeur', 5); mats('cendre', 3);
    const w = [...new Set([...classMains(), ...classOffs()])].filter(t => WEAPON_TYPES[t]), arm = ['casque', 'plastron', 'jambieres', 'bottes', 'bijou', 'ceinture'];
    const it = makeItem(6, Math.random() < 0.5 && w.length ? pick(w) : pick(arm)); state.inv.push(it); out.push(itemName(it));
    const t = pick(Object.keys(RUNE_TYPES)); state.runes = state.runes || {}; state.runes[runeKey(t, 6)] = (state.runes[runeKey(t, 6)] || 0) + 1; out.push(`${RUNE_TYPES[t].name} ${RARITIES[6].name}`);
    const all = Object.keys(state.world.jumpf).length; if (all >= 4) { kin(1000000); out.push('les quatre épreuves sont vaincues'); } }
  else { kin(40000); glory(500); mats('ether', 6); }
  _memo = null; save();
  return { title: (first ? 'Première ascension · ' : '') + name, msg: out.join(' · ') };
}
function wbKill(i, lvl, name, o = {}) {
  const S = wbState(), today = dk(), first = !S.first[i], out = [];
  const w = [...new Set([...classMains(), ...classOffs()])].filter(t => WEAPON_TYPES[t]), arm = ['casque', 'plastron', 'jambieres', 'bottes', 'bijou', 'ceinture'], pick = L => L[Math.floor(Math.random() * L.length)];
  const kin = k => { state.bonus = state.bonus || []; state.bonus.push({ date: today, k, x: 0, why: 'Éternel vaincu : ' + name }); out.push(`${Math.round(k).toLocaleString('fr-FR')} kinahs`); };
  const gear = (r, n = 1, weapon) => { for (let j = 0; j < n; j++) { const it = makeItem(r, weapon || Math.random() < 0.5 ? pick(w) : pick(arm)); state.inv.push(it); out.push(itemName(it)); } };
  const rune = r => { const t = pick(Object.keys(RUNE_TYPES)); state.runes = state.runes || {}; state.runes[runeKey(t, r)] = (state.runes[runeKey(t, r)] || 0) + 1; out.push(`${RUNE_TYPES[t].name} ${RARITIES[r].name}`); };
  const glory = g => { const A = arenaState(); A.glory += g; A.gloryTotal += g; out.push(`${g.toLocaleString('fr-FR')} gloire`); };
  const base = Math.round(600 * Math.pow(lvl, 1.3));
  if (first) { S.first[i] = today; S.day[i] = today; kin(base); glory(i >= 15 ? 100000 : 1000 * (i + 1));
    if (i >= 15) { gear(7, 1, true); gear(7, 2); rune(7); rune(7); }
    else if (i >= 10) { gear(6, 2); gear(7); rune(6); }
    else if (i >= 5) { gear(6); rune(6); }
    else { gear(5); rune(4); } }
  else if (S.day[i] !== today) { S.day[i] = today; kin(base * 0.1); glory(i >= 15 ? 5000 : 100 * (i + 1)); }
  else out.push('déjà vaincu aujourd’hui : rien de plus');
  /* sans filet : première victoire sans combat automatique */
  if (o.manual && !S.manual[i]) { S.manual[i] = today; const R = WB_MANUAL[i];
    for (const c of R.cosm) { state.cosm[c] = today; const C = COSMETICS.find(x => x.id === c); if (C) out.push(`${({ titre: 'titre', aura: 'aura', ailes: 'ailes' })[C.cat] || 'cosmétique'} « ${C.name} »`); }
    if (R.mount) { state.owned[R.mount] = true; const M = SHOP.find(x => x.id === R.mount); out.push(`monture « ${M.name} »`); }
    rune(Math.min(7, i >= 15 ? 7 : i >= 10 ? 7 : i >= 5 ? 6 : 5)); glory(i >= 15 ? 100000 : 1000 * (i + 1));
    out.push(`archive « ${R.t} »`, `trophée « Sans filet ${ROMAN_WB[i]} »`);
    if (wbManualCount() >= 16 && !state.cosm.tit_wb_all) { state.cosm.tit_wb_all = today; out.push('titre « Les Seize sans filet »'); } }
  save(); return { first, lines: out, done: Object.keys(S.first).length, manual: !!o.manual };
}

function codexEternals() {
  const S = wbState();
  return `<p class="text-[11px] muted mb-2">Seize Éternels gardent le monde ouvert. Vaincus <b>sans combat automatique</b> (« sans filet »), ils laissent une archive inédite, un trophée et une récompense unique : titres (I à V), auras (VI à X), ailes (XI à XV), le Cerf aux mille bois (V) et Le Silence du Sommet (∞) comme montures. Les seize : titre « Les Seize sans filet ».</p>` + WB_MANUAL.map((R, i) => { const m = S.manual[i], k = S.first[i];
    return m ? `<button type="button" class="res" data-a="wb-read" data-i="${i}"><span class="f-mono text-[11px] muted w-12">${ROMAN_WB[i]}</span><span class="flex-1 min-w-0"><span class="text-sm">${esc(R.t)}</span><span class="block text-[11px] muted">${esc(R.n)} · puissance ${R.lvl.toLocaleString('fr-FR')} · sans filet</span></span></button>`
      : `<div class="res" style="cursor:default;opacity:${k ? 0.8 : 0.5}"><span class="f-mono text-[11px] muted w-12">${ROMAN_WB[i]}</span><span class="flex-1 min-w-0 text-sm">${esc(R.n)} · puissance ${R.lvl.toLocaleString('fr-FR')}<span class="block text-[11px] muted">${k ? 'Vaincu, mais avec le combat automatique : l’archive reste scellée' : 'Pas encore vaincu'}</span></span></div>`; }).join('');
}
handlers['wb-read'] = el => { const i = +el.dataset.i, R = WB_MANUAL[i]; if (!wbManualHas(i)) return;
  showOverlay(`<div class="sys pop w-full max-w-md" style="padding:20px"><div class="flex items-center justify-between gap-2 mb-3"><span class="sys-title">Archive des Éternels · ${ROMAN_WB[i]}</span><button type="button" class="ibtn" data-a="close-overlay">✕</button></div><h3 class="f-display text-lg font-bold">${esc(R.t)}</h3><div class="text-xs muted mt-1">${esc(R.n)}</div><div class="text-[14px] mt-3 leading-relaxed" style="color:#cfd3dc;font-family:var(--font-prose)">${esc(R.b)}</div></div>`); };

/* ==========================================================================
   Le marchand louche des galeries souterraines (monde ouvert).
   Il vend ce qu'on ne trouve nulle part ailleurs : des runes De toute éternité contre des kinahs,
   une pièce d'armure De toute éternité par semaine, un instrument, une aura, un titre, une boussole,
   un passe-partout pour les coffres. Quatre objets par jour, tirés au sort selon la date.
   Aussi : le trésor des demeures (une fois par jour et par demeure).
   ========================================================================== */
const MX_RUNES = ['ricochet', 'fracture', 'egide', 'celeste'];
const MX_POOL = ['gear7', 'i7', 'tit_bas', 'aur_contre', 'compass', 'passkey', 'mats', 'ws7'];
function mxState() { const M = state.merchant = state.merchant || {}; M.sold = M.sold || {}; M.keys = M.keys || 0; return M; }
function mxWeek(d) { const t = fromKey(d || dk()); const j = Math.floor((t.getTime() / 86400000 + 3) / 7); return 'w' + j; }
function mxSeed(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
/* le stock du jour : une rune, puis trois objets du tiroir (les objets uniques déjà achetés n'y reviennent pas) */
function mxStock() {
  const d = dk(), M = mxState(); let h = mxSeed('marchand' + d); const R = () => { h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0; h = Math.imul(h ^ (h >>> 13), 3266489909) >>> 0; h ^= h >>> 16; return (h >>> 0) / 4294967296; };
  const out = ['rune:' + MX_RUNES[Math.floor(R() * 4)]];
  const pool = MX_POOL.filter(id => !mxOwned(id));
  while (out.length < 4 && pool.length) out.push(pool.splice(Math.floor(R() * pool.length), 1)[0]);
  return out;
}
function mxOwned(id) {
  if (id === 'i7') return !!state.owned.i7;
  if (id === 'tit_bas' || id === 'aur_contre') return cosmOwned(id);
  if (id === 'compass') return !!mxState().compass;
  if (id === 'passkey') return !!mxState().passkey;
  return false;
}
function mxWeapType() { const w = invItem(state.gear.main); return w && WEAPON_TYPES[w.type] ? w.type : null; }
function mxItem(id) {
  const M = mxState(), K = kinahs(), d = dk(), sold = (M.sold[d] || []).includes(id);
  let it;
  if (id.startsWith('rune:')) { const t = id.slice(5); it = { name: `${RUNE_TYPES[t].name} De toute éternité`, desc: `D’ordinaire payée en gloire. ${RUNE_TYPES[t].txt(RUNE_TYPES[t].v[7])}. Une seule par jour.`, price: 30000000, r: 7 }; }
  else if (id === 'gear7') it = { name: 'Une armure De toute éternité, sans étiquette', desc: 'Une pièce que la boutique ne vend jamais (le type est tiré au sort). Une par semaine.', price: 250000000, r: 7, week: true };
  else if (id === 'i7') it = { name: 'Orgue de Barbarie du marchand', desc: 'Instrument unique : on tourne la manivelle, il joue. À poser dans vos demeures.', price: 2500000, r: 5 };
  else if (id === 'tit_bas') it = { name: 'Titre « Client des bas-fonds »', desc: 'Titre Épique, introuvable ailleurs.', price: 400000, r: 3 };
  else if (id === 'aur_contre') it = { name: 'Aura « Fumée de contrebande »', desc: 'Aura Légendaire : une brume violette qui traîne derrière vous.', price: 3000000, r: 4 };
  else if (id === 'compass') it = { name: 'Boussole du contrebandier', desc: 'Sur la grande carte, montre les archives, clés et coffres qui restent dehors.', price: 1500000, r: 5 };
  else if (id === 'passkey') it = { name: 'Passe-partout', desc: 'Compte pour cinq clés devant les coffres.', price: 5000000, r: 5 };
  else if (id === 'mats') it = { name: 'Sac de contrebande', desc: '40 cendres, 80 cœurs de Faille, 300 éclats d’éther : de quoi monter plusieurs pièces à +4.', price: 1200000, r: 4 };
  else if (id === 'ws7') { const t = mxWeapType(); it = { name: t ? `Skin d’arme De toute éternité : ${WEAPON_TYPES[t].name}` : 'Skin d’arme De toute éternité', desc: t ? 'Pour l’arme que vous tenez. D’ordinaire payé en gloire.' : 'Prenez d’abord une arme en main.', price: 40000000, r: 7, need: !!t && !cosmOwned('ws_' + t + '_7') }; }
  else return null;
  const weekDone = it.week && M.gearWeek === mxWeek();
  const can = !sold && !weekDone && K >= it.price && it.need !== false;
  return { id, name: it.name, desc: it.desc, price: it.price, priceTxt: it.price.toLocaleString('fr-FR') + ' ₭', color: RARITIES[it.r].color, sold: sold || weekDone, can };
}
function mxView() { return { kinahs: kinahs(), items: mxStock().map(mxItem).filter(Boolean) }; }
function mxBuy(id) {
  if (!mxStock().includes(id)) return { ok: false, msg: 'Ça, je ne l’ai plus.' };
  const it = mxItem(id); if (!it || it.sold) return { ok: false, msg: 'Déjà vendu. Revenez demain.' };
  if (!it.can) return { ok: false, msg: kinahs() < it.price ? 'Pas assez de kinahs. Je ne fais pas crédit.' : 'Pas aujourd’hui.' };
  const M = mxState(), d = dk(); let got = it.name;
  if (id.startsWith('rune:')) { const t = id.slice(5); state.runes = state.runes || {}; state.runes[runeKey(t, 7)] = (state.runes[runeKey(t, 7)] || 0) + 1; }
  else if (id === 'gear7') { const it2 = makeItem(7, pick(Object.keys(ARMOR_TYPES))); state.inv.push(it2); M.gearWeek = mxWeek(); got = itemName(it2); }
  else if (id === 'i7') state.owned.i7 = true;
  else if (id === 'tit_bas' || id === 'aur_contre') state.cosm[id] = d;
  else if (id === 'compass') M.compass = 1;
  else if (id === 'passkey') { M.passkey = 1; M.keys = 5; }
  else if (id === 'mats') { for (const [m, n] of [['cendre', 40], ['coeur', 80], ['ether', 300]]) state.mats[m] = (state.mats[m] || 0) + n; }
  else if (id === 'ws7') { const t = mxWeapType(); if (!t) return { ok: false, msg: 'Prenez d’abord une arme en main.' }; state.cosm['ws_' + t + '_7'] = d; }
  state.buys.push({ id: 'mx:' + id, price: it.price, date: d }); _memo = null; _bm = null;
  (M.sold[d] = M.sold[d] || []).push(id); for (const k in M.sold) if (k < addDays(d, -7)) delete M.sold[k];
  save();
  return { ok: true, msg: `Marché conclu : ${got}.` };
}
/* le trésor des demeures : une fois par jour et par demeure, selon la rareté */
function estateTreasure(hid, r) {
  const T = state.estateGift = state.estateGift || {}, d = dk();
  if (T[hid] === d) return { title: 'Salle du trésor', msg: 'Les coffres se remplissent pendant la nuit. Revenez demain.' };
  T[hid] = d; const k = Math.round(6000 * Math.pow(3.2, r));
  state.bonus.push({ date: d, k, why: 'Trésor de la demeure' });
  const mats = r >= 5 ? [['cendre', r - 3], ['coeur', r * 3]] : [['coeur', r], ['ether', r * 6]];
  for (const [m, n] of mats) state.mats[m] = (state.mats[m] || 0) + n;
  _memo = null; save();
  return { title: 'Trésor de la demeure', msg: `+${k.toLocaleString('fr-FR')} kinahs · ${mats.map(([m, n]) => n + ' ' + MATERIALS[m].name.toLowerCase()).join(', ')}` };
}

/* ==========================================================================
   Prestige : la marque des Chasseurs sérieux et disciplinés.
   - Points de prestige et XP de prestige ne se gagnent QUE par le Donjon (séances) et la Nutrition.
     Ni le monde ouvert, ni l'arène, ni la boutique n'en donnent.
   - Les pénalités (quête quotidienne manquée) retirent des points et de l'XP de prestige, plus rien d'autre.
   - Les points se dépensent dans la Boutique du prestige ; l'XP de prestige donne le niveau de prestige.
   Tout est recalculé depuis l'historique des journées : les jours passés comptent.
   ========================================================================== */
const PR_SESSION = 10, PR_SESSION_DONE = 15, PR_NUTRI = 10, PR_NUTRI_DONE = 15, PR_DAY_DONE = 10;   /* points par jour : 60 au plus */
const PR_PEN_PTS = 40, PR_PEN_XP = 400;
const PRESTIGE_MAX = 100;
/* XP de prestige pour passer au niveau suivant : 1 200, puis +12 % par niveau */
const PR_NEED = (() => { const a = [0]; for (let L = 1; L < PRESTIGE_MAX; L++) a.push(Math.round(1200 * Math.pow(1.12, L - 1))); return a; })();
const penPts = p => p.pp != null ? p.pp : Math.round(PR_PEN_PTS * (p.guarded ? 0.66 : 1));
const penXp = p => p.pxp != null ? p.pxp : Math.round(PR_PEN_XP * (p.guarded ? 0.66 : 1));
let _prMemo = null, _prKey = null;
function prestigeInfo() {
  const key = _memo; if (_prMemo && _prKey === key && key) return _prMemo;
  let pts = 0, xp = 0, days = 0;
  for (const k in state.days) {
    const r = dayResult(k); let p = 0, x = 0;
    if (r.plan.sid && r.n > 0) { p += Math.round(PR_SESSION * r.exDone / r.n) + (r.workoutDone ? PR_SESSION_DONE : 0); x += Math.round(WORKOUT_PART * r.exDone / r.n) + (r.workoutDone ? WORKOUT_BONUS : 0); }
    p += Math.round(PR_NUTRI * r.nu.metCount / 4) + (r.nu.done ? PR_NUTRI_DONE : 0); x += Math.round(NUTRI_PART * r.nu.metCount / 4) + (r.nu.done ? NUTRI_BONUS : 0);
    if (r.success) p += PR_DAY_DONE;
    if (p > 0) days++;
    pts += p; xp += x;
  }
  let penP = 0, penX = 0; for (const p of state.penalties) { penP += penPts(p); penX += penXp(p); }
  const spent = (state.prBuys || []).reduce((a, b) => a + b.price, 0);
  const totalXp = Math.max(0, xp - penX);
  let L = 1, rem = totalXp; while (L < PRESTIGE_MAX && rem >= PR_NEED[L]) { rem -= PR_NEED[L]; L++; }
  _prKey = key; _prMemo = { pts: pts - penP - spent, earned: pts, penP, penX, spent, xp: totalXp, level: L, into: rem, need: L < PRESTIGE_MAX ? PR_NEED[L] : 0, days };
  return _prMemo;
}
const prestigePts = () => prestigeInfo().pts;
/* montant compact pour l'en-tête : 12 345 → 12,3 k ; 4 560 000 → 4,56 M ; 1,2 Md */
function fmtShort(n) {
  const a = Math.abs(n), s = n < 0 ? '−' : '';
  const f = (v, u) => s + (v >= 100 ? Math.round(v) : v >= 10 ? Math.round(v * 10) / 10 : Math.round(v * 100) / 100).toLocaleString('fr-FR') + ' ' + u;
  if (a < 10000) return s + Math.round(a).toLocaleString('fr-FR');
  if (a < 1e6) return f(a / 1e3, 'k'); if (a < 1e9) return f(a / 1e6, 'M'); if (a < 1e12) return f(a / 1e9, 'Md'); if (a < 1e15) return f(a / 1e12, 'T'); if (!isFinite(a)) return s + '∞'; return s + (a / Math.pow(10, Math.floor(Math.log10(a)))).toFixed(2).replace('.', ',') + 'e' + Math.floor(Math.log10(a));
}

/* ---------- Boutique du prestige ---------- */
const PR_SHOP = [
  { id: 'pr_seal', name: 'Sceau d’Ysolde', kind: 'seal', price: 250, r: 4, rep: true, desc: 'Se brise à la place de la prochaine pénalité : ni points ni XP de prestige perdus. Se cumule.' },
  { id: 'pr_key1', name: 'Clé de coffre', kind: 'key', n: 1, price: 1000, r: 3, rep: true, desc: 'Une clé pour ouvrir un coffre du monde ouvert.' },
  { id: 'pr_key5', name: 'Trousseau de cinq clés', kind: 'key', n: 5, price: 4500, r: 4, rep: true, desc: 'Cinq clés de coffre, un peu moins cher qu’à l’unité.' },
  { id: 'tit_pr1', name: 'Titre « Le Discipliné »', kind: 'cosm', price: 300, r: 4, desc: 'Le premier titre qu’on ne peut pas acheter avec des kinahs.' },
  { id: 'pr_letter1', name: 'Lettre de Rose, I', kind: 'lore', price: 150, r: 3, desc: 'Une lettre de la grand-mère, jamais envoyée. Inédite.' },
  { id: 'pr_letter2', name: 'Lettre de Rose, II', kind: 'lore', price: 300, r: 4, lvl: 5, desc: 'La deuxième lettre. Inédite.' },
  { id: 'pr_letter3', name: 'Lettre de Rose, III', kind: 'lore', price: 600, r: 5, lvl: 10, desc: 'La dernière lettre. Inédite.' },
  { id: 'aur_pr', name: 'Aura « Flamme de constance »', kind: 'cosm', price: 1500, r: 6, lvl: 5, desc: 'Une flamme blanche et calme, qui ne vacille pas.' },
  { id: 'tit_pr2', name: 'Titre « Celui qui n’a pas lâché »', kind: 'cosm', price: 2000, r: 5, lvl: 10, desc: 'Pour ceux qui reviennent, même les jours sans envie.' },
  { id: 'ail_pr', name: 'Ailes « L’Aube tenue »', kind: 'cosm', price: 3500, r: 6, lvl: 15, desc: 'Des ailes de plumes dorées, gagnées jour après jour.' },
  { id: 'pr_ws', name: 'Forge de la discipline : skin d’arme De toute éternité', kind: 'ws', price: 3000, r: 7, lvl: 12, rep: true, desc: 'Pour l’arme que vous tenez en main. D’ordinaire payé en gloire.' },
  { id: 'pr_gear', name: 'Forge de la discipline : armure De toute éternité au choix', kind: 'gear', price: 6000, r: 7, lvl: 20, rep: true, desc: 'Une pièce que la boutique ne vend jamais, du type que vous choisissez (choisi ci-dessous).' },
  { id: 'pr_weap', name: 'Forge de la discipline : arme De toute éternité au choix', kind: 'weap', price: 7000, r: 7, lvl: 20, rep: true, desc: 'Une arme que la boutique ne vend jamais, du type que vous choisissez (choisi ci-dessous).' },
  { id: 'pr_ten7', name: 'Tenue De toute éternité au choix', kind: 'pick', cat: 'tenue', price: 5000, r: 7, lvl: 15, rep: true, desc: 'Une tenue de la plus haute rareté, sans attendre la fin du récit.' },
  { id: 'pr_ail7', name: 'Ailes De toute éternité au choix', kind: 'pick', cat: 'ailes', price: 7000, r: 7, lvl: 22, rep: true, desc: 'Des ailes de la plus haute rareté, sans vaincre le gardien qui les porte.' },
  { id: 'pr_mnt7', name: 'Monture De toute éternité au choix', kind: 'pick', cat: 'mount', price: 8000, r: 7, lvl: 25, rep: true, desc: 'Une monture de la plus haute rareté.' },
  { id: 'tit_pr3', name: 'Titre « La Parole tenue »', kind: 'cosm', price: 10000, r: 7, lvl: 30, desc: 'Le titre le plus rare de la boutique.' }
];
/* pièces « De toute éternité » encore à obtenir, pour les achats au choix */
function prPickList(cat) {
  if (cat === 'mount') return SHOP.filter(x => x.cat === 'mount' && x.r === 7 && !state.owned[x.id]).map(x => [x.id, x.name]);
  return COSMETICS.filter(c => c.cat === cat && c.r === 7 && !cosmOwned(c.id)).map(c => [c.id, c.name]);
}
const PR_LETTERS = {
  pr_letter1: ['Lettre de Rose, I', 'Mon petit. Ton grand-père disait que la force, c’est de la patience qui a pris des muscles. Il se trompait sur beaucoup de choses, mais pas sur celle-là. Tu vas avoir envie de tout faire en un jour. Fais-en un peu, tous les jours. Le reste vient seul, comme le pain qui lève pendant qu’on dort.'],
  pr_letter2: ['Lettre de Rose, II', 'Il y aura des matins où tu n’auras pas envie. Ce ne sont pas les pires. Les pires, ce sont ceux où tu te diras que ça ne sert à rien. Ces matins-là, fais la moitié. Une moitié, c’est déjà une promesse tenue, et une promesse tenue en appelle une autre. Je t’ai vu tenir une cuillère avant de savoir marcher : tu sais recommencer.'],
  pr_letter3: ['Lettre de Rose, III', 'Je n’enverrai pas ces lettres, tu les trouveras quand il faudra. Je voulais seulement te dire que je ne suis pas fière de toi parce que tu es fort. Je suis fière de toi parce que tu reviens. Tous les jours, tu reviens. C’est la seule chose qu’on ne peut pas te voler. Prends le petit d’abord, et puis reviens. — Rose']
};
function prOwned(it) {
  if (it.kind === 'cosm') return cosmOwned(it.id);
  if (it.kind === 'lore') return !!(state.prLore || {})[it.id];
  return false;
}
function prWeap() { const w = invItem(state.gear.main); return w && WEAPON_TYPES[w.type] ? w.type : null; }
function viewPrestigeShop() {
  const P = prestigeInfo(), fmt = n => Math.round(n).toLocaleString('fr-FR'), seals = state.prSeals || 0;
  return `<div class="sys" style="border-color:rgba(255,213,106,.5)">
    <div class="flex items-center justify-between gap-2 mb-1"><div class="sys-title" style="color:#ffd56a">${icon('award', 'w-4 h-4')} Boutique du prestige</div><div class="f-mono text-sm" style="color:${P.pts < 0 ? '#ff4d6d' : '#ffd56a'}">${icon('award', 'w-3.5 h-3.5 inline -mt-0.5')} ${fmt(P.pts)}</div></div>
    <p class="text-[11px] muted mb-3">Les points de prestige se gagnent seulement au Donjon et en Nutrition, jamais dans le monde ouvert : ce qui se vend ici ne s’obtient nulle part ailleurs.${seals ? ` · ${seals} sceau${seals > 1 ? 'x' : ''} d’Ysolde en réserve` : ''}</p>
    <div class="flex flex-col gap-2">${PR_SHOP.map(it => {
      const picks = it.kind === 'pick' ? prPickList(it.cat) : null, done = picks && !picks.length;
      const own = (!it.rep && prOwned(it)) || done, lock = it.lvl && P.level < it.lvl, need = it.kind === 'ws' && (!prWeap() || cosmOwned('ws_' + prWeap() + '_7')), can = !own && !lock && !need && P.pts >= it.price;
      const extra = picks && picks.length ? `<select class="pr-sel" id="pr-pick-${it.cat}" aria-label="Choix">${picks.map(([id, n]) => `<option value="${id}" ${(ui.prPick || {})[it.cat] === id ? 'selected' : ''}>${esc(n)}</option>`).join('')}</select>`
        : it.kind === 'weap' ? `<select class="pr-sel" id="pr-weap-type" aria-label="Type d’arme">${Object.entries(WEAPON_TYPES).map(([k, a]) => `<option value="${k}" ${ui.prWeapT === k ? 'selected' : ''}>${esc(a.name)}</option>`).join('')}</select>`
        : it.kind === 'key' ? `<span class="block text-[11px] muted">Clés disponibles : ${keysLeft()}</span>`
        : it.kind === 'gear' ? `<select class="pr-sel" id="pr-gear-type" aria-label="Type de pièce">${Object.entries(ARMOR_TYPES).map(([k, a]) => `<option value="${k}" ${ui.prGear === k ? 'selected' : ''}>${esc(a.name)}</option>`).join('')}</select>` : '';
      return `<div class="res" style="cursor:default;align-items:flex-start"><span class="flex-1 min-w-0"><span class="block f-display text-sm" style="color:${RARITIES[it.r].color}">${esc(it.name)}</span><span class="block text-[11px] muted">${esc(it.desc)}${lock ? ` · niveau de prestige ${it.lvl}` : ''}${need && it.kind === 'ws' ? ' · prenez une arme dont vous n’avez pas encore le skin' : ''}</span>${extra}</span>
        ${own ? `<span class="text-xs muted">${done ? 'Toutes possédées' : it.kind === 'lore' ? `<button type="button" class="btn sm ghost" data-a="pr-read" data-id="${it.id}">Relire</button>` : 'Possédé'}</span>` : `<button type="button" class="btn sm" data-a="pr-buy" data-id="${it.id}" ${can ? '' : 'disabled'}>${fmt(it.price)}</button>`}</div>`; }).join('')}</div>
  </div>`;
}
function prReadLetter(id) { const L = PR_LETTERS[id]; if (!L) return; showOverlay(`<div class="sys pop w-full max-w-sm" style="padding:24px 20px;border-color:rgba(255,213,106,.5)"><div class="sys-title mb-3" style="color:#ffd56a">${esc(L[0])}</div><p class="text-sm leading-relaxed" style="font-family:Georgia,serif">${esc(L[1])}</p><button type="button" class="btn solid w-full mt-5" data-a="close-overlay">Plier la lettre</button></div>`); }
Object.assign(handlers, {
  'pr-buy': el => {
    const it = PR_SHOP.find(x => x.id === el.dataset.id); if (!it) return; const P = prestigeInfo();
    if ((!it.rep && prOwned(it)) || (it.lvl && P.level < it.lvl) || P.pts < it.price) return;
    let got = it.name;
    if (it.kind === 'cosm') state.cosm[it.id] = dk();
    else if (it.kind === 'lore') { state.prLore = state.prLore || {}; state.prLore[it.id] = dk(); }
    else if (it.kind === 'seal') state.prSeals = (state.prSeals || 0) + 1;
    else if (it.kind === 'ws') { const t = prWeap(); if (!t || cosmOwned('ws_' + t + '_7')) return; state.cosm['ws_' + t + '_7'] = dk(); }
    else if (it.kind === 'key') { state.prKeys = (state.prKeys || 0) + (it.n || 1); got = `${it.n} clé${it.n > 1 ? 's' : ''} de coffre`; }
    else if (it.kind === 'weap') { const sel = document.getElementById('pr-weap-type'), t = sel && WEAPON_TYPES[sel.value] ? sel.value : (prWeap() || 'epee'); const g = makeItem(7, t); state.inv.push(g); got = itemName(g); }
    else if (it.kind === 'pick') { const L = prPickList(it.cat), sel = document.getElementById('pr-pick-' + it.cat), id = sel && L.some(x => x[0] === sel.value) ? sel.value : (L[0] || [])[0]; if (!id) return;
      if (it.cat === 'mount') state.owned[id] = dk(); else state.cosm[id] = dk(); got = (L.find(x => x[0] === id) || [id, id])[1]; }
    else if (it.kind === 'gear') { const sel = document.getElementById('pr-gear-type'), t = sel && ARMOR_TYPES[sel.value] ? sel.value : 'plastron'; const g = makeItem(7, t); state.inv.push(g); got = itemName(g); }
    (state.prBuys = state.prBuys || []).push({ id: it.id, price: it.price, date: dk() }); _prMemo = null;
    save(); render(); toast(`${icon('award', 'w-4 h-4')}<span>Prestige : ${esc(got)}</span>`);
    if (it.kind === 'lore') prReadLetter(it.id);
  },
  'pr-read': el => prReadLetter(el.dataset.id),
  'go-prestige': () => { state.tab = 'realm'; state.realmTab = 'shop'; ui.shopCat = 'prestige'; save(); render(); window.scrollTo({ top: 0 }); }
});
document.addEventListener('change', e => { const t = e.target; if (!t || !t.id) return; if (t.id === 'pr-gear-type') ui.prGear = t.value; if (t.id === 'pr-weap-type') ui.prWeapT = t.value; if (t.id.startsWith('pr-pick-')) { ui.prPick = ui.prPick || {}; ui.prPick[t.id.slice(8)] = t.value; } });

/* ==========================================================================
   LECTEUR — relecture du chemin parcouru, polices, tailles, papiers, progression
   ========================================================================== */

const READER_FONTS = {
  spectral: { name: 'Actuelle (Spectral)', css: "'Spectral', Georgia, serif" },
  typewriter: { name: 'Machine à écrire', css: "'Special Elite', 'Courier New', monospace" },
  journal: { name: 'Journal intime', css: "'Caveat', 'Segoe Print', cursive", scale: 1.25 },
  oldprint: { name: 'Vieux roman (ancienne imprimerie)', css: "'IM Fell English', 'Garamond', serif" },
  nier: { name: 'Style NieR (approchant)', css: "'M PLUS 1p', 'Helvetica Neue', sans-serif", spacing: '.04em', weight: 300 }
};
const READER_PAPERS = {
  system: { name: 'Système (sombre)', light: false },
  night: { name: 'Nuit d’encre (sombre)', light: false },
  white: { name: 'Blanc (clair)', light: true },
  grain: { name: 'Blanc cassé à grain', light: true },
  papyrus: { name: 'Papyrus', light: true },
  worn: { name: 'Pages usées', light: true }
};
function readerCfg() { return { font: 'spectral', size: 17, paper: 'system', ...(state.reader || {}) }; }
function readerStyle() {
  const r = readerCfg(), f = READER_FONTS[r.font] || READER_FONTS.spectral;
  return `--rf:${f.css};--rs:${Math.round(r.size * (f.scale || 1))}px;--rls:${f.spacing || 'normal'};--rw:${f.weight || 400}`;
}
function readerClass() { const r = readerCfg(), P = READER_PAPERS[r.paper] || READER_PAPERS.system; return `paper-${r.paper}${P.light ? ' paper-light' : ''}`; }

/* ---------- Progression du tome ---------- */
function tomeProgress(T, nodeId) {
  const n = ALL_NODES[nodeId];
  if (!n) return 0;
  if (n.ending) return 100;
  const inCh = Object.values(T.nodes).filter(x => x.ch === n.ch && !x.ending);
  const pos = Math.max(0, inCh.indexOf(n));
  return Math.min(99, Math.round(100 * (n.ch + (pos + 1) / Math.max(1, inCh.length)) / T.chapters.length));
}

/* ---------- Journal de lecture ---------- */
function ensureLog(T) {
  const S = TS(T.id);
  if (Array.isArray(S.log) && S.log.length) return S.log;
  /* Reconstruction pour les sauvegardes antérieures : on suit les choix déjà faits */
  const log = [], G = state.story, seen = new Set();
  let id = T.start;
  for (let step = 0; step < 120 && id && ALL_NODES[id] && !seen.has(id); step++) {
    seen.add(id);
    const n = ALL_NODES[id], e = { n: id };
    log.push(e);
    if (id === S.node) break;
    const idx = (n.choices || []).findIndex((c, i) => G.picked[`${id}:${i}`]);
    if (idx < 0) break;
    e.c = n.choices[idx].t;
    id = n.choices[idx].to;
  }
  if (!log.length || log[log.length - 1].n !== S.node) log.push({ n: S.node });
  S.log = log;
  return log;
}
function logEnter(id) {
  const n = ALL_NODES[id]; if (!n) return;
  const S = TS(n.tome);
  if (!Array.isArray(S.log)) S.log = [];
  if (!S.log.length || S.log[S.log.length - 1].n !== id) S.log.push({ n: id });
  if (S.log.length > 600) S.log.splice(0, S.log.length - 600);
  state.story.seen = state.story.seen || {};
  if (!state.story.seen[id]) state.story.seen[id] = dk();
}
function logChoice(nodeId, text) {
  const n = ALL_NODES[nodeId]; if (!n) return;
  const S = TS(n.tome);
  if (!Array.isArray(S.log)) S.log = [];
  const last = S.log[S.log.length - 1];
  if (last && last.n === nodeId) last.c = text; else S.log.push({ n: nodeId, c: text });
}
function logTruncateTo(T, startId) {
  const S = TS(T.id); if (!Array.isArray(S.log)) return;
  const i = S.log.findIndex(e => e.n === startId);
  if (i >= 0) S.log.splice(i);
}

/* ---------- Vues ---------- */
function viewReaderTools() {
  const r = readerCfg();
  if (!ui.readerOpen) return '';
  return `<div class="sys" style="padding:12px">
    <div class="flex items-center justify-between gap-2 mb-2"><span class="label">Réglages de lecture</span><button type="button" class="ibtn" data-a="reader-toggle" aria-label="Fermer">${icon('x', 'w-4 h-4')}</button></div>
    <div class="label mb-1">Police</div>
    <div class="flex flex-wrap gap-1.5">${Object.entries(READER_FONTS).map(([k, f]) => `<button type="button" class="chip ${r.font === k ? 'on' : ''}" style="text-transform:none;letter-spacing:0;font-family:${f.css}" data-a="reader-set" data-k="font" data-v="${k}">${esc(f.name)}</button>`).join('')}</div>
    <div class="label mt-3 mb-1">Taille du texte · ${r.size} px</div>
    <div class="flex items-center gap-2"><button type="button" class="ibtn" data-a="reader-size" data-v="-1" aria-label="Plus petit">A−</button><input id="reader-size" type="range" min="13" max="26" step="1" value="${r.size}" class="flex-1" aria-label="Taille du texte"><button type="button" class="ibtn" data-a="reader-size" data-v="1" aria-label="Plus grand">A+</button></div>
    <div class="label mt-3 mb-1">Prénoms cliquables (rappel des personnages)</div><div class="flex gap-1.5"><button type="button" class="chip ${!(state.reader && state.reader.noNames) ? 'on' : ''}" data-a="pn-toggle">${!(state.reader && state.reader.noNames) ? 'Activés' : 'Désactivés'}</button></div>
    <div class="label mt-3 mb-1">Papier et mode</div>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">${Object.entries(READER_PAPERS).map(([k, p]) => `<button type="button" class="paper-swatch paper-${k}${p.light ? ' paper-light' : ''} ${r.paper === k ? 'on' : ''}" data-a="reader-set" data-k="paper" data-v="${k}">${esc(p.name)}</button>`).join('')}</div>
  </div>`;
}
function viewReread() {
  const T = curTome(), log = ensureLog(T);
  let lastCh = -1;
  const blocks = log.map((e, idx) => {
    const n = ALL_NODES[e.n]; if (!n) return '';
    const ch = chapOf(n);
    let head = '';
    if (n.ch !== lastCh) { lastCh = n.ch; head = `<h3 class="f-display text-lg font-bold glow-umbra mt-6 mb-2" style="font-family:var(--font-display)">${esc(ch.title)}</h3>${ch.start === n.id ? `<blockquote class="verse mb-3 text-[15px]">« ${esc(ch.verse)} »<span class="block not-italic text-xs muted mt-1">${esc(ch.ref)}</span></blockquote>` : ''}`; }
    const won = n.combat && state.story.combats[n.id] && state.story.combats[n.id].won;
    pnBegin(n); const body = `<div class="prose">${renderParas(n.text)}${won ? `<p><em>${storyTxt(n.combat.win)}</em></p>${renderParas(n.after)}` : ''}</div>`; pnEnd();
    return `${head}${body}
      ${e.c ? `<p class="text-sm mt-2 mb-4 f-display" style="font-family:var(--font-display)"><span class="muted">Votre choix :</span> <span class="glow">${esc(e.c)}</span></p>` : (idx === log.length - 1 ? `<p class="text-xs muted mt-2 mb-4">— Vous en êtes ici. —</p>` : '<div class="h-4"></div>')}
      ${n.ending ? viewEndingSeal(n) : ''}`;
  }).join('');
  return `<div class="flex items-center justify-between gap-2 flex-wrap">
      <button type="button" class="btn sm" data-a="reread-close">${icon('arrow-left', 'w-3.5 h-3.5')}Revenir à ma page</button>
      <button type="button" class="btn sm ghost" data-a="reader-toggle">${icon('type', 'w-3.5 h-3.5')}Aa</button>
    </div>
    ${viewReaderTools()}
    <article class="sys umbra ${readerClass()}" style="${readerStyle()}">
      <div class="label">Relecture · Tome ${T.num} · ${esc(T.title)}</div>
      <p class="text-xs muted mt-1">Lecture seule : vos choix ne peuvent pas être modifiés ici. Pour explorer une autre voie, utilisez la sélection de chapitre.</p>
      ${blocks}
    </article>`;
}

Object.assign(handlers, {
  'reader-toggle': () => { ui.readerOpen = !ui.readerOpen; render(); },
  'reader-set': el => { state.reader = { ...readerCfg(), [el.dataset.k]: el.dataset.v }; save(); render(); },
  'reader-size': el => { const r = readerCfg(); state.reader = { ...r, size: Math.max(13, Math.min(26, r.size + Number(el.dataset.v))) }; save(); render(); },
  'reread-open': () => { ui.reread = true; render(); window.scrollTo({ top: 0 }); },
  'reread-close': () => { ui.reread = false; render(); storyScrollTop(); }
});
document.addEventListener('change', ev => {
  if (ev.target.id === 'reader-size') { state.reader = { ...readerCfg(), size: Number(ev.target.value) }; save(); render(); }
});

/* ==========================================================================
   RAPPEL DES PERSONNAGES — noms cliquables, aide-mémoire du tome, « Qui est qui ».
   Sans spoiler : seuls les personnages déjà visibles (personVisible) et les faits
   déjà débloqués (personFacts) sont montrés.
   ========================================================================== */
const PN_ALIASES = {
  zach: ['Zacharie'], sera: ['Séraphine'], mira: ['Mira'], helene: ['Hélène'], nour: ['Nour'], gaspard: ['Gaspard'],
  odile: ['Odile'], ysolde: ['Ysolde'], kael: ['Kaël'], yanis: ['Yanis'], anselme: ['Anselme'], theo: ['Théo'],
  elias: ['Elias'], lune: ['Lune'], basile: ['Basile'], marthe: ['Marthe'], paul: ['Paul'], rose: ['Rose Albin', 'Rose'],
  lazare: ['Lazare'], agnes: ['Agnès'], anatole: ['Anatole'], ferrat: ['Madame Ferrat', 'madame Ferrat'], josephine: ['Joséphine'],
  lhermitte: ['Lhermitte'], lestrade: ['Aubin Lestrade', 'Lestrade'], lucas: ['Lucas'], simone: ['Simone'],
  pons: ['Pépita', 'Madame Pons', 'madame Pons'], leonie: ['Léonie'], arsene: ['Arsène'], abadie: ['Mathis'], clemence: ['Clémence'],
  ravel: ['Ange Ravel'], jeanne: ['Jeanne Morel', 'Jeanne'], honorine: ['Honorine'], benoit: ['Benoît'], aurore: ['Aurore'],
  clotilde: ['Mère Clotilde'], saturnin: ['Saturnin'], mathilde: ['Mathilde'], ambroise: ['Ambroise'], gedeon: ['Gédéon'],
  ines: ['Inès'], germaine: ['Germaine'], agathe: ['Sœur Agathe', 'sœur Agathe'], rolande: ['Madame Rolande', 'madame Rolande'],
  vidal: ['Madame Vidal', 'madame Vidal'], danet: ['Danet'],
  m_crocs: ['Ruben'], m_glaces: ['Ilse'], m_peste: ['Oste'], m_murmures: ['Célestin'], m_fer: ['Coll'], m_abysses: ['Morgane'],
  m_sang: ['Dravo'], m_chaines: ['Thule'], m_cendres: ['Abel']
};
/* Homonymes : alias à ne pas lier dans certains tomes ou contextes. */
const PN_SKIP = { jeanne: n => n.tome === 'III', paul: (n, txt) => /apôtre|Romains|lettre aux|Pierre/.test(txt) };
/* Rôles affichés tant que le lecteur n’a pas atteint la révélation (pas de spoiler). */
const PN_ROLE_EARLY = {
  yanis: [['seen:f3_2'], 'Stratège de l’Association'],
  zach: [['seen:n4_1'], 'Passeur du quai des Pêcheurs'],
  gaspard: [['seen:k1_2'], 'Alchimiste de la Maison'],
  odile: [['seen:b2_3'], 'Intendante'],
  mira: [['seen:e6_1'], 'Espionne · voleuse des toits'],
  nour: [['arch:AR06'], 'Chantre · musicienne aveugle'],
  kael: [['arch:D07'], 'Éclaireur · ombre au visage'],
  sera: [['arch:AR04'], 'Duelliste de Haute-Brume']
};
function pnRole(p) { const e = PN_ROLE_EARLY[p.id]; return e && !bibleOk(e[0]) ? e[1] : p.role; }
let PN_CTX = null;
let PN_LIST = null;
function pnList() {
  if (PN_LIST) return PN_LIST;
  PN_LIST = [];
  for (const [id, al] of Object.entries(PN_ALIASES)) for (const a of al) PN_LIST.push({ id, a, re: new RegExp('(?<![\\p{L}’\'-])' + a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![\\p{L}-])', 'u') });
  PN_LIST.sort((x, y) => y.a.length - x.a.length);
  return PN_LIST;
}
function pnPerson(id) { return typeof LORE_PEOPLE !== 'undefined' ? LORE_PEOPLE.find(p => p.id === id) : null; }
function pnOn() { return !(state.reader && state.reader.noNames); }
function pnBegin(n) { PN_CTX = pnOn() ? { n, used: new Set() } : null; }
function pnEnd() { PN_CTX = null; }
/* Lie la première mention de chaque personnage visible, une fois par nœud. Le texte reçu est déjà échappé. */
function pnLink(html) {
  if (!PN_CTX) return html;
  const marks = [];
  for (const L of pnList()) {
    if (PN_CTX.used.has(L.id)) continue;
    const skip = PN_SKIP[L.id]; if (skip && skip(PN_CTX.n, html)) continue;
    const p = pnPerson(L.id); if (!p || !personVisible(p)) continue;
    const m = L.re.exec(html); if (!m) continue;
    const a = m.index, b = a + L.a.length;
    if (marks.some(k => a < k.b && b > k.a)) continue;
    marks.push({ a, b, id: L.id }); PN_CTX.used.add(L.id);
  }
  if (!marks.length) return html;
  marks.sort((x, y) => y.a - x.a);
  for (const k of marks) html = html.slice(0, k.a) + `<button type="button" class="pn" data-a="pn" data-id="${k.id}">${html.slice(k.a, k.b)}</button>` + html.slice(k.b);
  return html;
}
function pnName(p) { const M = p.monarch && typeof MONARCHS !== 'undefined' && MONARCHS.find(m => m.id === p.monarch); return M ? M.name : p.name; }
function pnCard(p) {
  const M = p.monarch && typeof MONARCHS !== 'undefined' && MONARCHS.find(m => m.id === p.monarch);
  const facts = personFacts(p).filter(f => f.ok).map(f => f.t);
  return `<div class="f-display text-lg font-bold glow-umbra">${esc(pnName(p))}</div>
    <div class="text-sm muted">${esc(pnRole(p))}</div>
    ${M ? `<p class="text-sm mt-2">${esc(M.origin)}</p>` : ''}
    ${facts.length ? `<div class="label mt-3 mb-1">Ce que vous savez</div>${facts.slice(-5).map(t => `<p class="text-sm mb-1">• ${esc(t)}</p>`).join('')}` : `<p class="text-xs muted mt-2">Vous n’en savez pas encore davantage.</p>`}`;
}
function pnOverlay(inner) {
  pnClose();
  document.body.insertAdjacentHTML('beforeend', `<div id="pn-peek" class="pn-overlay" data-a="pn-close" role="dialog" aria-modal="true"><div class="sys umbra pn-card">${inner}<button type="button" class="btn sm ghost w-full mt-3" data-a="pn-close">${icon('x', 'w-3.5 h-3.5')}Revenir au récit</button></div></div>`);
  if (typeof refreshIcons === 'function') refreshIcons();
}
function pnClose() { const o = document.getElementById('pn-peek'); if (o) o.remove(); }
function pnTomeKey(T) { return Object.keys(TOMES).find(k => TOMES[k] === T) || T.id; }
const PN_TOME_CACHE = {};
function pnTomePeople(T) {
  const k = pnTomeKey(T);
  if (!PN_TOME_CACHE[k]) {
    const txt = Object.values(ALL_NODES).filter(n => n.tome === k).map(n => (n.text || []).concat(n.after || []).map(p => typeof p === 'string' ? p : (p.t || p.sys || '')).join(' ')).join(' ');
    const ids = [];
    for (const L of pnList()) if (!ids.includes(L.id) && L.re.test(txt) && !(PN_SKIP[L.id] && PN_SKIP[L.id]({ tome: k }, ''))) ids.push(L.id);
    PN_TOME_CACHE[k] = ids;
  }
  return PN_TOME_CACHE[k].map(pnPerson).filter(p => p && personVisible(p));
}
function pnRow(p) {
  const facts = personFacts(p).filter(f => f.ok).map(f => f.t);
  return `<button type="button" class="res" data-a="pn" data-id="${p.id}" style="align-items:flex-start"><span class="flex-1 min-w-0 text-left"><span class="block f-display">${esc(pnName(p))}</span><span class="block text-[12px] muted">${esc(pnRole(p))}${facts.length ? ` · ${esc(facts[facts.length - 1])}` : ''}</span></span></button>`;
}
/* Aide-mémoire affiché en tête du tome (premier nœud du premier chapitre). */
function tomeMemo(T) {
  const L = pnTomePeople(T);
  if (!L.length) return '';
  return `<details class="memo mt-3"><summary class="label" style="cursor:pointer">${icon('users', 'w-3.5 h-3.5 inline')} Aide-mémoire : qui est qui dans ce tome</summary>
    <p class="text-[12px] muted mt-2 mb-2">Les personnages que vous avez déjà rencontrés et qui reviennent ici. Touchez un prénom dans le récit pour retrouver qui il est.</p>
    <div class="flex flex-col gap-1">${L.map(pnRow).join('')}</div></details>`;
}
function pnWhoIsWho() {
  const L = LORE_PEOPLE.filter(p => personVisible(p) && p.id !== 'absolu');
  return `<div class="f-display text-lg font-bold glow-umbra">Qui est qui</div>
    <p class="text-[12px] muted mb-2">Tous les personnages que vous avez rencontrés, avec ce que vous savez d’eux. Rien de ce que vous n’avez pas encore lu.</p>
    <div class="flex flex-col gap-1">${L.map(pnRow).join('')}</div>`;
}
Object.assign(handlers, {
  'pn': el => { const p = pnPerson(el.dataset.id); if (p && personVisible(p)) pnOverlay(pnCard(p) + `<button type="button" class="btn sm ghost w-full mt-3" data-a="pn-all">${icon('users', 'w-3.5 h-3.5')}Tous les personnages</button>`); },
  'pn-all': () => pnOverlay(pnWhoIsWho()),
  'pn-close': (el, ev) => { if (el.id === 'pn-peek' && ev && ev.target !== el) return; pnClose(); },
  'pn-toggle': () => { state.reader = state.reader || {}; state.reader.noNames = !state.reader.noNames; save(); render(); }
});
if (typeof document !== 'undefined' && document.addEventListener) document.addEventListener('keydown', ev => { if (ev.key === 'Escape') pnClose(); });
if (typeof document !== 'undefined' && document.head) document.head.insertAdjacentHTML('beforeend', `<style>
.pn{background:none;border:0;padding:0;margin:0;color:inherit;font:inherit;line-height:inherit;cursor:help;border-bottom:1px dotted currentColor;text-decoration:none}
.pn:hover,.pn:focus-visible{color:var(--umbra,#b9a6ff);outline:none}
.pn-overlay{position:fixed;inset:0;z-index:90;background:rgba(5,5,10,.6);display:flex;align-items:flex-end;justify-content:center;padding:16px}
@media (min-width:640px){.pn-overlay{align-items:center}}
.pn-card{width:100%;max-width:520px;max-height:75vh;overflow:auto}
.memo summary::-webkit-details-marker{display:none}
</style>`);

/* ==========================================================================
   ELYOS SYSTEM — Salle de musique et écran d’accueil
   Toutes les pistes sont des œuvres composées et jouées par des humains,
   sous licence libre (Creative Commons) ou dans le domaine public, et
   diffusées depuis Wikimedia Commons (fichiers vérifiés le 6 novembre 2026).
   Aucune n’est générée par IA.
   ========================================================================== */

const MUS_LIC = {
  'by3': ['CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0/deed.fr'],
  'by4': ['CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0/deed.fr'],
  'bysa2': ['CC BY-SA 2.0', 'https://creativecommons.org/licenses/by-sa/2.0/deed.fr'],
  'att': ['Attribution (Musopen)', 'https://musopen.org/'],
  'pd': ['Domaine public', 'https://creativecommons.org/publicdomain/mark/1.0/deed.fr']
};
const MUS_C = 'https://upload.wikimedia.org/wikipedia/commons/';
const KM = 'Kevin MacLeod (incompetech.com)';
/* [titre, auteur / interprètes, licence, chemin du fichier lisible, nom du fichier sur Commons] */
const km = (t, isrc, path) => [t, KM, 'by3', path, `${t} (ISRC ${isrc}).mp3`];
const MUSIC_STYLES = [
  { id: 'epic', name: 'Épique fantasy', icon: 'swords', desc: 'Cuivres, chœurs et percussions de bataille.', tracks: [
    km('Heroic Age', 'USUAN1100848', '4/44/Heroic_Age_%28ISRC_USUAN1100848%29.mp3'),
    km('Crusade', 'USUAN1100884', '5/55/Crusade_%28ISRC_USUAN1100884%29.mp3'),
    km('Five Armies', 'USUAN1100875', '1/1d/Five_Armies_%28ISRC_USUAN1100875%29.mp3'),
    km('Clash Defiant', 'USUAN1600003', '2/20/Clash_Defiant_%28ISRC_USUAN1600003%29.mp3'),
    km('Death and Axes', 'USUAN1700049', '2/2f/Death_and_Axes_%28ISRC_USUAN1700049%29.mp3'),
    km('Mighty and Meek', 'USUAN1100500', '5/59/Mighty_and_Meek_%28ISRC_USUAN1100500%29.mp3'),
    km('Achilles', 'USUAN1100463', 'b/b3/Achilles_%28ISRC_USUAN1100463%29.mp3'),
    km('Final Battle of the Dark Wizards', 'USUAN1500085', '8/8a/Final_Battle_of_the_Dark_Wizards_%28ISRC_USUAN1500085%29.mp3'),
    km('Epic Unease', 'USUAN1100406', '6/66/Epic_Unease_%28ISRC_USUAN1100406%29.mp3'),
    km('Majestic Hills', 'USUAN1100423', 'b/b6/Majestic_Hills_%28ISRC_USUAN1100423%29.mp3'),
    km('Truth of the Legend', 'USUAN1100592', 'f/f0/Truth_of_the_Legend_%28ISRC_USUAN1100592%29.mp3'),
    ['Strength of the Titans', KM, 'by4', 'transcoded/b/bc/Strength_Of_The_Titans_by_Kevin_MacLeod.ogg/Strength_Of_The_Titans_by_Kevin_MacLeod.ogg.mp3', 'Strength Of The Titans by Kevin MacLeod.ogg']
  ] },
  { id: 'orch', name: 'Orchestre symphonique', icon: 'drama', desc: 'Grands orchestres, œuvres du répertoire.', tracks: [
    ['Holst — Les Planètes : Jupiter', 'Skidmore College Orchestra (Musopen)', 'att', 'transcoded/3/3f/Gustav_Holst_-_the_planets%2C_op._32_-_iv._jupiter%2C_the_bringer_of_jollity.ogg/Gustav_Holst_-_the_planets%2C_op._32_-_iv._jupiter%2C_the_bringer_of_jollity.ogg.mp3', 'Gustav Holst - the planets, op. 32 - iv. jupiter, the bringer of jollity.ogg'],
    ['Beethoven — Ouverture d’Egmont', 'Musopen Symphony', 'pd', 'transcoded/8/85/Beethoven_-_Egmont_Overture%2C_Op._84_%28Musopen_Symphony%29.flac/Beethoven_-_Egmont_Overture%2C_Op._84_%28Musopen_Symphony%29.flac.mp3', 'Beethoven - Egmont Overture, Op. 84 (Musopen Symphony).flac'],
    ['Dvořák — Symphonie « du Nouveau Monde », finale', 'Musopen', 'pd', 'transcoded/1/17/Antonin_Dvorak_-_symphony_no._9_in_e_minor_%27from_the_new_world%27%2C_op._95_-_iv._allegro_con_fuoco.ogg/Antonin_Dvorak_-_symphony_no._9_in_e_minor_%27from_the_new_world%27%2C_op._95_-_iv._allegro_con_fuoco.ogg.mp3', "Antonin Dvorak - symphony no. 9 in e minor 'from the new world', op. 95 - iv. allegro con fuoco.ogg"],
    ['Holst — Les Planètes : Mars', 'Skidmore College Orchestra (Musopen)', 'att', 'transcoded/5/54/Gustav_Holst_-_the_planets%2C_op._32_-_i._mars%2C_the_bringer_of_war.ogg/Gustav_Holst_-_the_planets%2C_op._32_-_i._mars%2C_the_bringer_of_war.ogg.mp3', 'Gustav Holst - the planets, op. 32 - i. mars, the bringer of war.ogg'],
    ['Brahms — Symphonie n° 1, finale', 'Musopen Symphony', 'pd', 'transcoded/5/5d/Brahms_-_Symphony_No._1_in_C_minor%2C_Op._68_-_IV._Adagio_-_Piu_andante_-_Allegro_non_troppo%2C_ma_con_brio_-_Piu_allegro_%28Musopen_Symphony%29.flac/Brahms_-_Symphony_No._1_in_C_minor%2C_Op._68_-_IV._Adagio_-_Piu_andante_-_Allegro_non_troppo%2C_ma_con_brio_-_Piu_allegro_%28Musopen_Symphony%29.flac.mp3', 'Brahms - Symphony No. 1 in C minor, Op. 68 - IV. Adagio - Piu andante - Allegro non troppo, ma con brio - Piu allegro (Musopen Symphony).flac'],
    ['Smetana — La Moldau', 'Musopen', 'pd', 'transcoded/0/08/Bedrich_Smetana_-_ma_vlast_-_i._vltava_%27the_moldau%27.ogg/Bedrich_Smetana_-_ma_vlast_-_i._vltava_%27the_moldau%27.ogg.mp3', "Bedrich Smetana - ma vlast - i. vltava 'the moldau'.ogg"],
    ['Grieg — Peer Gynt : Au matin', 'Musopen Symphony', 'pd', 'transcoded/c/c2/Grieg_-_Peer_Gynt_Suite_No._1%2C_Op._46_-_I._Morning_Mood_%28Musopen_Symphony%29.flac/Grieg_-_Peer_Gynt_Suite_No._1%2C_Op._46_-_I._Morning_Mood_%28Musopen_Symphony%29.flac.mp3', 'Grieg - Peer Gynt Suite No. 1, Op. 46 - I. Morning Mood (Musopen Symphony).flac'],
    ['Strauss — Ainsi parlait Zarathoustra (introduction)', KM, 'by3', 'transcoded/f/fc/Richard_Strauss_-_Also_Sprach_Zarathustra.ogg/Richard_Strauss_-_Also_Sprach_Zarathustra.ogg.mp3', 'Richard Strauss - Also Sprach Zarathustra.ogg']
  ] },
  { id: 'strings', name: 'Violon et violoncelle', icon: 'heart', desc: 'Cordes frottées, quatuors et concertos.', tracks: [
    ['Brahms — Double concerto pour violon et violoncelle, Andante', 'Musopen', 'pd', 'transcoded/4/47/Johannes_Brahms_-_concerto_in_a_minor%2C_op._102_%27double_concerto%27_-_ii._andante.ogg/Johannes_Brahms_-_concerto_in_a_minor%2C_op._102_%27double_concerto%27_-_ii._andante.ogg.mp3', "Johannes Brahms - concerto in a minor, op. 102 'double concerto' - ii. andante.ogg"],
    ['Suk — Méditation sur le choral de saint Venceslas', 'Musopen String Quartet', 'pd', 'transcoded/f/f5/Josef_Suk_-_Meditation_Op_35a.ogg/Josef_Suk_-_Meditation_Op_35a.ogg.mp3', 'Josef Suk - Meditation Op 35a.ogg'],
    ['Dvořák — Quatuor « Américain », Lento', 'Musopen String Quartet', 'pd', 'transcoded/c/cc/Dvo%C5%99%C3%A1k_-_String_Quartet_No._12_in_F_major%2C_Op._96_%27American%27_-_II._Lento_%28Musopen_String_Quartet%29.flac/Dvo%C5%99%C3%A1k_-_String_Quartet_No._12_in_F_major%2C_Op._96_%27American%27_-_II._Lento_%28Musopen_String_Quartet%29.flac.mp3', "Dvořák - String Quartet No. 12 in F major, Op. 96 'American' - II. Lento (Musopen String Quartet).flac"],
    ['Saint-Saëns — Concerto pour violoncelle n° 1', 'Musopen', 'pd', 'transcoded/d/d1/Camille_Saint-Saens_-_cello_concerto_no._1_in_a_minor%2C_op._33_-_i._allegro_non_troppo.ogg/Camille_Saint-Saens_-_cello_concerto_no._1_in_a_minor%2C_op._33_-_i._allegro_non_troppo.ogg.mp3', 'Camille Saint-Saens - cello concerto no. 1 in a minor, op. 33 - i. allegro non troppo.ogg'],
    ['Beethoven — Quatuor op. 18 n° 6, Adagio', 'Musopen String Quartet', 'pd', 'transcoded/3/33/Beethoven_-_String_Quartet_No._6_in_B_flat_major%2C_Op._18_No._6_-_II._Adagio%2C_ma_non_troppo_%28Musopen_String_Quartet%29.flac/Beethoven_-_String_Quartet_No._6_in_B_flat_major%2C_Op._18_No._6_-_II._Adagio%2C_ma_non_troppo_%28Musopen_String_Quartet%29.flac.mp3', 'Beethoven - String Quartet No. 6 in B flat major, Op. 18 No. 6 - II. Adagio, ma non troppo (Musopen String Quartet).flac'],
    ['Elgar — Concerto pour violoncelle, finale', 'Skidmore College Orchestra (Musopen)', 'pd', 'transcoded/d/de/Edward_Elgar_-_cello_concerto_in_e_minor%2C_op._85_-_iv._allegro.ogg/Edward_Elgar_-_cello_concerto_in_e_minor%2C_op._85_-_iv._allegro.ogg.mp3', 'Edward Elgar - cello concerto in e minor, op. 85 - iv. allegro.ogg'],
    km('String Impromptu Number 1', 'USUAN1300004', 'c/cf/String_Impromptu_Number_1_%28ISRC_USUAN1300004%29.mp3')
  ] },
  { id: 'harp', name: 'Harpe douce', icon: 'feather', desc: 'Cordes pincées, calme et lumière.', tracks: [
    km('Evening Fall (Harp)', 'USUAN1100236', 'e/e2/Evening_Fall_%28Harp%29_%28ISRC_USUAN1100236%29.mp3'),
    ['Sonatina Harp', 'Antti Luode', 'by3', '7/72/Sonatina_Harp_%28Antti_Luode%29.mp3', 'Sonatina Harp (Antti Luode).mp3'],
    ['Hotel Juárez — Introduction (harpe seule)', 'Luisalvaz', 'by4', 'transcoded/8/81/Hotel_Ju%C3%A1rez_-_Introducci%C3%B3n_%28arpa_sola%29.ogg/Hotel_Ju%C3%A1rez_-_Introducci%C3%B3n_%28arpa_sola%29.ogg.mp3', 'Hotel Juárez - Introducción (arpa sola).ogg'],
    ['Mozart — Concerto pour flûte et harpe, Andantino', 'A. Murray (flûte), A. Yeung (harpe), Sinfonia da Camera', 'bysa2', 'transcoded/d/d4/Mozart_-_Concerto_for_Flute_and_Harp_-_2._Andantino.ogg/Mozart_-_Concerto_for_Flute_and_Harp_-_2._Andantino.ogg.mp3', 'Mozart - Concerto for Flute and Harp - 2. Andantino.ogg'],
    ['Mozart — Concerto pour flûte et harpe, Allegro', 'A. Murray (flûte), A. Yeung (harpe), Sinfonia da Camera', 'bysa2', 'transcoded/7/76/Mozart_-_Concerto_for_Flute_and_Harp_-_1._Allegro.ogg/Mozart_-_Concerto_for_Flute_and_Harp_-_1._Allegro.ogg.mp3', 'Mozart - Concerto for Flute and Harp - 1. Allegro.ogg'],
    ['Mozart — Concerto pour flûte et harpe, Rondeau', 'A. Murray (flûte), A. Yeung (harpe), Sinfonia da Camera', 'bysa2', 'transcoded/b/b6/Mozart_-_Concerto_for_Flute_and_Harp_-_3._Rondeau_Allegro.ogg/Mozart_-_Concerto_for_Flute_and_Harp_-_3._Rondeau_Allegro.ogg.mp3', 'Mozart - Concerto for Flute and Harp - 3. Rondeau Allegro.ogg'],
    km('And Awaken', 'USUAN1100331', 'e/e7/And_Awaken_%28ISRC_USUAN1100331%29.mp3')
  ] },
  { id: 'synth', name: 'Rétro synthwave', icon: 'sunset', desc: 'Synthés analogiques, années 80.', tracks: [
    km('Eighties Action', 'USUAN1100243', '0/04/Eighties_Action_%28ISRC_USUAN1100243%29.mp3'),
    km('Nowhere Land', 'USUAN1600051', '4/43/Nowhere_Land_%28ISRC_USUAN1600051%29.mp3'),
    km('Voltaic', 'USUAN1600056', '3/37/Voltaic_%28ISRC_USUAN1600056%29.mp3'),
    km('Ouroboros', 'USUAN1400007', '6/69/Ouroboros_%28ISRC_USUAN1400007%29.mp3'),
    km('Rhinoceros', 'USUAN1500040', 'c/c3/Rhinoceros_%28ISRC_USUAN1500040%29.mp3'),
    km('Mega Hyper Ultrastorm', 'USUAN1700003', '3/32/Mega_Hyper_Ultrastorm_%28ISRC_USUAN1700003%29.mp3'),
    km('Digital Lemonade', 'USUAN1700010', 'a/a5/Digital_Lemonade_%28ISRC_USUAN1700010%29.mp3'),
    km('What Is Love', 'USUAN1500067', '1/13/What_Is_Love_%28ISRC_USUAN1500067%29.mp3')
  ] },
  { id: 'futur', name: 'Futuriste', icon: 'orbit', desc: 'Nappes spatiales, cités du futur.', tracks: [
    km('Floating Cities', 'USUAN1600018', '3/3f/Floating_Cities_%28ISRC_USUAN1600018%29.mp3'),
    km('Odyssey', 'USUAN1500012', '5/55/Odyssey_%28ISRC_USUAN1500012%29.mp3'),
    km('Cipher', 'USUAN1100844', 'f/f4/Cipher_%28ISRC_USUAN1100844%29.mp3'),
    km('Lightless Dawn', 'USUAN1100655', '5/5b/Lightless_Dawn_%28ISRC_USUAN1100655%29.mp3'),
    km('Martian Cowboy', 'USUAN1100349', 'f/f1/Martian_Cowboy_%28ISRC_USUAN1100349%29.mp3'),
    km('Industrial Cinematic', 'USUAN1600047', '0/00/Industrial_Cinematic_%28ISRC_USUAN1600047%29.mp3'),
    km('Robobozo', 'USUAN1700061', 'e/e4/Robobozo_%28ISRC_USUAN1700061%29.mp3'),
    km('The Complex', 'USUAN1300025', 'c/c8/The_Complex_%28ISRC_USUAN1300025%29.mp3'),
    km('Phantom from Space', 'USUAN1500038', '1/15/Phantom_from_Space_%28ISRC_USUAN1500038%29.mp3'),
    km('Space Fighter Loop', 'USUAN1100672', 'f/f8/Space_Fighter_Loop_%28ISRC_USUAN1100672%29.mp3'),
    km('Spacial Harvest', 'USUAN1100653', 'e/eb/Spacial_Harvest_%28ISRC_USUAN1100653%29.mp3')
  ] },
  { id: 'electro', name: 'Électro', icon: 'zap', desc: 'Basses, trance et rythmes dansants.', tracks: [
    km('EDM Detection Mode', 'USUAN1500026', '9/94/EDM_Detection_Mode_%28ISRC_USUAN1500026%29.mp3'),
    km('Cut Trance', 'USUAN1100273', '2/2c/Cut_Trance_%28ISRC_USUAN1100273%29.mp3'),
    km('The Lift', 'USUAN1500066', '0/0f/The_Lift_%28ISRC_USUAN1500066%29.mp3'),
    km('Shiny Tech', 'USUAN1100078', 'b/b7/Shiny_Tech_%28ISRC_USUAN1100078%29.mp3'),
    km('Trips It', 'USUAN1100498', '0/04/Trips_It_%28ISRC_USUAN1100498%29.mp3'),
    km('Harmful or Fatal', 'USUAN1100210', '7/71/Harmful_or_Fatal_%28ISRC_USUAN1100210%29.mp3'),
    km('Severe Tire Damage', 'USUAN1500018', '4/47/Severe_Tire_Damage_%28ISRC_USUAN1500018%29.mp3'),
    km('In a Heartbeat', 'USUAN1100197', 'a/ab/In_a_Heartbeat_%28ISRC_USUAN1100197%29.mp3')
  ] },
  { id: 'core', name: 'Instrumental core', icon: 'flame', desc: 'Guitares saturées, double pédale, métal.', tracks: [
    km('Metalmania', 'USUAN1700023', '3/34/Metalmania_%28ISRC_USUAN1700023%29.mp3'),
    km('Aggressor', 'USUAN1700051', '4/43/Aggressor_%28ISRC_USUAN1700051%29.mp3'),
    km('Summon the Rawk', 'USUAN1200050', 'c/cd/Summon_the_Rawk_%28ISRC_USUAN1200050%29.mp3'),
    km('Take the Lead', 'USUAN1100695', 'd/d6/Take_the_Lead_%28ISRC_USUAN1100695%29.mp3'),
    km('Motherlode', 'USUAN1500033', 'a/a6/Motherlode_%28ISRC_USUAN1500033%29.mp3'),
    km('Cool Hard Facts', 'USUAN1100280', '4/4a/Cool_Hard_Facts_%28ISRC_USUAN1100280%29.mp3'),
    km('Aitech', 'USUAN1100336', '3/3b/Aitech_%28ISRC_USUAN1100336%29.mp3')
  ] },
  { id: 'calm', name: 'Contemplatif', icon: 'moon-star', desc: 'Piano et nappes, pour lire ou récupérer.', tracks: [
    km('Bathed in the Light', 'USUAN1100308', '7/75/Bathed_in_the_Light_%28ISRC_USUAN1100308%29.mp3'),
    km('Inner Light', 'USUAN1300021', '0/0e/Inner_Light_%28ISRC_USUAN1300021%29.mp3'),
    km('On the Passing of Time', 'USUAN1100520', 'b/b8/On_the_Passing_of_Time_%28ISRC_USUAN1100520%29.mp3'),
    km('Reaching Out', 'USUAN1100099', 'f/fc/Reaching_Out_%28ISRC_USUAN1100099%29.mp3'),
    km('Peaceful Desolation', 'USUAN1200017', '5/5e/Peaceful_Desolation_%28ISRC_USUAN1200017%29.mp3'),
    km('Deliberate Thought', 'USUAN1100261', 'b/b4/Deliberate_Thought_%28ISRC_USUAN1100261%29.mp3')
  ] }
];
/* Musique d’ouverture de l’écran d’accueil */
const MUS_INTRO = ['Strauss — Ainsi parlait Zarathoustra (introduction)', KM, 'by3', 'transcoded/f/fc/Richard_Strauss_-_Also_Sprach_Zarathustra.ogg/Richard_Strauss_-_Also_Sprach_Zarathustra.ogg.mp3', 'Richard Strauss - Also Sprach Zarathustra.ogg'];

/* Mes musiques : fichiers audio du joueur, gardés sur son appareil (IndexedDB), jamais envoyés */
const MUS_MINE = [], MUS_BLOBS = {}, MUS_URLS = {};
const MUS_MINE_STYLE = { id: 'mine', name: 'Mes musiques', icon: 'folder-heart', desc: 'Vos propres fichiers, sur cet appareil.', tracks: MUS_MINE };
function musAllStyles() { return [...MUSIC_STYLES, MUS_MINE_STYLE]; }
function musDb() {
  return new Promise((res, rej) => {
    if (typeof indexedDB === 'undefined') return rej(new Error('idb'));
    const r = indexedDB.open('elyos-music', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('files', { keyPath: 'id' });
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  });
}
async function musMineLoad() {
  try {
    const db = await musDb();
    const all = await new Promise((res, rej) => { const q = db.transaction('files').objectStore('files').getAll(); q.onsuccess = () => res(q.result || []); q.onerror = () => rej(q.error); });
    all.sort((a, b) => (a.added || 0) - (b.added || 0));
    MUS_MINE.length = 0;
    for (const f of all) { MUS_BLOBS[f.id] = f.blob; MUS_MINE.push([f.name, 'Sur cet appareil', 'mine', null, null, f.id]); }
  } catch (e) { /* stockage indisponible */ }
  musRefresh();
}
async function musMineAdd(files) {
  let db; try { db = await musDb(); } catch (e) { musRefresh('Ce navigateur ne permet pas de garder des fichiers.'); return; }
  let n = 0;
  for (const f of files) {
    if (!/^audio\//.test(f.type) && !/\.(mp3|m4a|aac|ogg|oga|opus|wav|flac|webm)$/i.test(f.name)) continue;
    const id = 'm' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    try {
      await new Promise((res, rej) => { const tx = db.transaction('files', 'readwrite'); tx.objectStore('files').put({ id, name: f.name.replace(/\.[^.]+$/, ''), type: f.type, blob: f, added: Date.now() + n }); tx.oncomplete = res; tx.onerror = () => rej(tx.error); });
      n++;
    } catch (e) { musRefresh('Fichier trop lourd ou espace plein sur cet appareil.'); }
  }
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { }
  await musMineLoad();
}
async function musMineDel(id) {
  try { const db = await musDb(); await new Promise(res => { const tx = db.transaction('files', 'readwrite'); tx.objectStore('files').delete(id); tx.oncomplete = res; tx.onerror = res; }); } catch (e) { }
  const wasCur = musRT.cur && musRT.cur[5] === id;
  if (MUS_URLS[id]) { try { URL.revokeObjectURL(MUS_URLS[id]); } catch (e) { } delete MUS_URLS[id]; }
  delete MUS_BLOBS[id];
  if (MUS.introSel === 'mine:' + id) { MUS.introSel = 'default'; musSave(); }
  await musMineLoad();
  if (wasCur) {
    if (MUS_MINE.length) musPlay('mine', 0);
    else { if (musRT.audio) musRT.audio.pause(); musRT.cur = null; MUS.style = 'epic'; MUS.idx = 0; musSave(); musRefresh(); }
  }
}

/* ---------- Réglages (sur cet appareil) ---------- */
const MUS_KEY = 'elyos-music-v1';
const MUS = (() => {
  const d = { v: 5, bg: false, on: true, style: 'calm', idx: 2, vol: 0.7, shuffle: false, repeat: 'one', splash: true, intro: false, introSel: 'style' };
  try { Object.assign(d, JSON.parse(localStorage.getItem(MUS_KEY) || '{}')); } catch (e) { }
  /* musique de l’écran d’accueil : 'default' (Zarathoustra), 'style' (aucune ouverture), 'style:index' ou 'mine:id' */
  if (!d.introSel) d.introSel = d.intro === false ? 'style' : 'default';
  /* v4 : « On the Passing of Time » par défaut, à l’écran titre puis dans toute l’appli, en boucle */
  if ((d.v || 0) < 4) Object.assign(d, { v: 4, style: 'calm', idx: 2, introSel: 'style', intro: false, repeat: 'one' });
  /* v5 : l'écran de connexion revient à chaque ouverture */
  if ((d.v || 0) < 5) Object.assign(d, { v: 5, splash: true });
  return d;
})();
function musSave() { try { localStorage.setItem(MUS_KEY, JSON.stringify(MUS)); } catch (e) { /* stockage indisponible */ } }
const musRT = { msg: '', msgT: 0, pickIntro: false, audio: null, cur: null, intro: false, errors: 0, view: null, fadeT: null, blocked: false };
function musStyle(id, view) { const S = musAllStyles().find(s => s.id === id); return S && (S.tracks.length || view) ? S : MUSIC_STYLES[0]; }
function musSrc(t) {
  if (t[2] === 'mine') { if (!MUS_URLS[t[5]] && MUS_BLOBS[t[5]]) MUS_URLS[t[5]] = URL.createObjectURL(MUS_BLOBS[t[5]]); return MUS_URLS[t[5]] || ''; }
  return MUS_C + t[3];
}
function musRef(styleId, i) { return styleId === 'mine' ? 'mine:' + MUS_MINE[i][5] : `${styleId}:${i}`; }
function musTrackRef(ref) {
  if (!ref || ref === 'default') return MUS_INTRO;
  if (ref === 'style') return null;
  const k = ref.indexOf(':'), sid = ref.slice(0, k), v = ref.slice(k + 1);
  if (sid === 'mine') return MUS_MINE.find(t => t[5] === v) || MUS_INTRO;
  const S = MUSIC_STYLES.find(x => x.id === sid);
  return (S && S.tracks[+v]) || MUS_INTRO;
}
function musAfterIntro() { musRT.intro = false; musPlay(MUS.style, MUS.idx); }
function musPage(t) { return 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(t[4].replace(/ /g, '_')); }
function musAudio() {
  if (musRT.audio || typeof Audio === 'undefined') return musRT.audio;
  const a = new Audio();
  a.preload = 'auto';
  a.addEventListener('ended', () => {
    if (musRT.intro) { musAfterIntro(); return; }
    const S = musStyle(MUS.style);
    if (MUS.repeat === 'off' && !MUS.shuffle && MUS.idx >= S.tracks.length - 1) { musRefresh(); return; }
    musNext(1);
  });
  a.addEventListener('error', () => {
    if (!musRT.cur) return;
    musRT.errors++;
    if (musRT.errors >= 4) { musRT.cur = null; musRefresh('Musique injoignable : vérifiez la connexion internet.'); return; }
    setTimeout(() => { if (musRT.intro) musAfterIntro(); else musNext(1); }, 600);
  });
  a.addEventListener('playing', () => { musRT.errors = 0; musRT.blocked = false; musRefresh(); });
  a.addEventListener('pause', () => musRefresh());
  a.addEventListener('timeupdate', () => {
    musProgress();
    const ms = typeof navigator !== 'undefined' && navigator.mediaSession;
    if (ms && ms.setPositionState && a.duration && isFinite(a.duration) && Date.now() - (musRT.posT || 0) > 5000) {
      musRT.posT = Date.now();
      try { ms.setPositionState({ duration: a.duration, position: Math.min(a.currentTime, a.duration), playbackRate: 1 }); } catch (e) { }
    }
  });
  a.addEventListener('play', () => { try { navigator.mediaSession.playbackState = 'playing'; } catch (e) { } });
  a.addEventListener('pause', () => { try { navigator.mediaSession.playbackState = 'paused'; } catch (e) { } });
  musRT.audio = a;
  if (typeof navigator !== 'undefined' && navigator.mediaSession) {
    try {
      navigator.mediaSession.setActionHandler('play', () => musResume());
      navigator.mediaSession.setActionHandler('pause', () => musPause());
      navigator.mediaSession.setActionHandler('nexttrack', () => musNext(1));
      navigator.mediaSession.setActionHandler('previoustrack', () => musNext(-1));
    } catch (e) { /* navigateur partiel */ }
  }
  return a;
}
function musFade(to, ms, done) {
  const a = musRT.audio; if (!a) return;
  clearInterval(musRT.fadeT);
  const from = a.volume, steps = Math.max(1, Math.round(ms / 50)); let i = 0;
  musRT.fadeT = setInterval(() => {
    i++; a.volume = Math.max(0, Math.min(1, from + (to - from) * i / steps));
    if (i >= steps) { clearInterval(musRT.fadeT); if (done) done(); }
  }, 50);
}
function musStart(t, fadeMs = 1200) {
  const a = musAudio(); if (!a) return;
  musRT.cur = t;
  a.src = musSrc(t);
  a.loop = MUS.repeat === 'one' && !musRT.intro;
  a.volume = 0;
  const p = a.play();
  if (p && p.catch) p.catch(() => { musRT.blocked = true; musArmGesture(); musRefresh(); });
  musFade(MUS.vol, fadeMs);
  musRT.lastPlay = p;
  if (typeof navigator !== 'undefined' && navigator.mediaSession && typeof MediaMetadata !== 'undefined') {
    try { navigator.mediaSession.metadata = new MediaMetadata({ title: t[0], artist: t[1], album: 'Elyos System' }); } catch (e) { }
  }
  musRefresh();
}
function musPlay(styleId, idx) {
  const S = musStyle(styleId);
  MUS.style = S.id; MUS.idx = ((idx % S.tracks.length) + S.tracks.length) % S.tracks.length; MUS.on = true; musSave();
  musRT.intro = false;
  musStart(S.tracks[MUS.idx]);
  return musRT.lastPlay;
}
function musPlayIntro() {
  if (!MUS.on) return;
  const t = musTrackRef(MUS.introSel);
  if (t) { musRT.intro = true; musStart(t, 2500); return musRT.lastPlay; }
  return musPlay(MUS.style, MUS.idx);
}
function musNext(dir) {
  const S = musStyle(MUS.style);
  let i = MUS.idx + dir;
  if (MUS.shuffle && S.tracks.length > 1 && dir > 0) { do { i = Math.floor(Math.random() * S.tracks.length); } while (i === MUS.idx); }
  musPlay(S.id, i);
}
/* Si le navigateur refuse le son sans geste, on le relance au premier toucher, où qu’il soit */
function musArmGesture() {
  if (musRT.armed || typeof document === 'undefined' || !document.addEventListener) return;
  musRT.armed = true;
  const go = () => {
    musRT.armed = false;
    document.removeEventListener('pointerdown', go, true); document.removeEventListener('keydown', go, true);
    const a = musRT.audio;
    if (a && musRT.cur && a.paused && MUS.on) { a.volume = 0; const p = a.play(); if (p && p.then) p.then(() => { musRT.blocked = false; musFade(MUS.vol, 800); musRefresh(); }).catch(() => { }); }
  };
  document.addEventListener('pointerdown', go, true); document.addEventListener('keydown', go, true);
}
/* Reprise après une fermeture de l’appli par le téléphone */
function musSnapshot() {
  const a = musRT.audio;
  return { playing: musPlaying(), intro: musRT.intro, time: a && musRT.cur ? a.currentTime : 0 };
}
function musRestore(s) {
  if (!s || !s.playing || !MUS.on) return;
  const t = s.intro ? musTrackRef(MUS.introSel) : musStyle(MUS.style).tracks[MUS.idx];
  if (!t) return;
  musRT.intro = !!s.intro;
  musStart(t, 900);
  const a = musRT.audio;
  if (a && s.time > 1) a.addEventListener('loadedmetadata', () => { try { if (s.time < (a.duration || 0) - 1) a.currentTime = s.time; } catch (e) { } }, { once: true });
}
function musPlaying() { const a = musRT.audio; return !!(a && musRT.cur && !a.paused); }
function musPause() { const a = musRT.audio; if (a && !a.paused) musFade(0, 400, () => { a.pause(); a.volume = MUS.vol; }); }
function musResume() {
  const a = musAudio(); if (!a) return;
  if (!musRT.cur) { musPlay(MUS.style, MUS.idx); return; }
  a.volume = 0; const p = a.play(); if (p && p.catch) p.catch(() => { musRT.blocked = true; musRefresh(); });
  musFade(MUS.vol, 600);
}
function musToggle() { if (musPlaying()) { musPause(); MUS.on = false; } else { MUS.on = true; musResume(); } musSave(); musRefresh(); }

/* ---------- Affichage ---------- */
function musFmt(s) { s = Math.max(0, Math.floor(s || 0)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; }
function musProgress() {
  const a = musRT.audio; if (!a || typeof document === 'undefined') return;
  const bar = document.getElementById('mus-bar'), tm = document.getElementById('mus-time');
  if (bar && a.duration) bar.style.width = `${Math.min(100, 100 * a.currentTime / a.duration)}%`;
  if (tm) tm.textContent = `${musFmt(a.currentTime)} / ${a.duration ? musFmt(a.duration) : '…'}`;
}
function musHeaderBtn() {
  const on = musPlaying();
  return `<button type="button" class="ibtn mus-hbtn ${on ? 'on' : ''}" data-a="mus-open" aria-label="Salle de musique" title="Salle de musique">${on ? '<span class="mus-eq" aria-hidden="true"><i></i><i></i><i></i></span>' : icon('music', 'w-4 h-4')}</button>`;
}
function musRefresh(msg) {
  if (msg) { musRT.msg = msg; musRT.msgT = Date.now(); }
  if (typeof document === 'undefined' || !document.getElementById) return;
  const h = document.querySelector && document.querySelector('.mus-hbtn');
  if (h && h.outerHTML !== undefined) { h.outerHTML = musHeaderBtn(); if (typeof refreshIcons === 'function') refreshIcons(); }
  if (document.getElementById('mus-sheet')) musRenderSheet(msg);
  const sp = document.getElementById('elx-mus');
  if (sp) sp.innerHTML = splashMusLabel();
}
const MUS_REPEAT = [['all', 'repeat', 'Playlist en boucle'], ['one', 'repeat-1', 'Ce morceau en boucle'], ['off', 'arrow-right', 'Sans boucle']];
function musNowHTML(msg) {
  if (!msg && musRT.msg && Date.now() - musRT.msgT < 6000) msg = musRT.msg;
  const t = musRT.cur, S = musStyle(MUS.style), on = musPlaying();
  const label = t ? (musRT.intro ? 'Musique d’accueil' : S.name) : 'Aucune piste';
  return `
  <div class="mus-now">
    <div class="label">${esc(label)}</div>
    <div class="f-display text-base leading-tight mt-1 truncate">${t ? esc(t[0]) : 'Choisissez un style ci-dessous'}</div>
    <div class="text-xs muted truncate">${t ? esc(t[1]) : 'Kevin MacLeod, Musopen, et d’autres musiciens'}</div>
    <div class="mus-track mt-3"><div id="mus-bar" class="mus-bar"></div></div>
    <div class="mus-head mt-1 text-[11px] muted f-mono"><span id="mus-time">0:00</span><span>${esc(MUS_REPEAT.find(r => r[0] === MUS.repeat)[2])}${MUS.shuffle ? ' · aléatoire' : ''}</span></div>
    ${msg || musRT.blocked ? `<p class="text-xs mt-2" style="color:var(--kinah)">${esc(msg || 'Le navigateur attend un geste : touchez lecture.')}</p>` : ''}
    <div class="mus-ctrl">
      <button type="button" class="ibtn" data-a="mus-prev" aria-label="Piste précédente">${icon('skip-back', 'w-4 h-4')}</button>
      <button type="button" class="mus-play" data-a="mus-toggle" aria-label="${on ? 'Pause' : 'Lecture'}">${icon(on ? 'pause' : 'play', 'w-6 h-6')}</button>
      <button type="button" class="ibtn" data-a="mus-next" aria-label="Piste suivante">${icon('skip-forward', 'w-4 h-4')}</button>
      <label class="mus-volw muted" title="Volume">${icon('volume-2', 'w-4 h-4')}<input id="mus-vol" type="range" min="0" max="1" step="0.05" value="${MUS.vol}" class="mus-vol" aria-label="Volume"></label>
    </div>
    <div class="mus-modes" role="group" aria-label="Mode de lecture">
      ${MUS_REPEAT.map(([id, ic, lb]) => `<button type="button" class="mus-chip ${MUS.repeat === id ? 'on' : ''}" data-a="mus-repeat" data-r="${id}" aria-pressed="${MUS.repeat === id}">${icon(ic, 'w-3.5 h-3.5')}${lb}</button>`).join('')}
      <button type="button" class="mus-chip ${MUS.shuffle ? 'on' : ''}" data-a="mus-shuffle" aria-pressed="${MUS.shuffle}">${icon('shuffle', 'w-3.5 h-3.5')}Aléatoire</button>
    </div>
  </div>`;
}
/* ---------- Musique des demeures (monde ouvert) ----------
   MUS.homeSel : 'synth' (morceau intégré, joué au piano dans la demeure) | 'off' (on garde la musique en cours)
                 | 'style:index' | 'mine:id' (un de vos fichiers, par exemple le morceau que vous possédez) */
function musHomeLabel() { const s = MUS.homeSel || 'synth'; if (s === 'synth') return 'Morceau intégré : Gymnopédie n° 1 (Satie), au piano'; if (s === 'off') return 'Aucune : la musique en cours continue'; const t = musTrackRef(s); return t ? t[0] : 'Morceau introuvable'; }
function musHomeEnter() {
  const sel = MUS.homeSel || 'synth';
  if (sel === 'off') return 'off';
  musRT.homeSnap = musSnapshot();
  if (sel === 'synth') { musPause(); return 'synth'; }
  const t = musTrackRef(sel); if (!t || t === MUS_INTRO && !sel.startsWith('default')) { musRT.homeSnap = undefined; return 'off'; }
  musRT.homeOn = true; musRT.intro = false; musStart(t, 1500); if (musRT.audio) musRT.audio.loop = true; return 'file';
}
function musHomeLeave() {
  if (musRT.homeSnap === undefined) return; const s = musRT.homeSnap; musRT.homeSnap = undefined;
  if (musRT.homeOn) { musRT.homeOn = false; if (s && s.playing) musRestore(s); else musPause(); }
  else if (s && s.playing) musResume();
}
function musHomePicker() {
  const opt = (ref, t, sub) => `<button type="button" class="mus-pickrow ${(MUS.homeSel || 'synth') === ref ? 'on' : ''}" data-a="mus-home-choose" data-ref="${esc(ref)}"><span class="mus-rt"><span class="truncate text-[13px]">${esc(t)}</span>${sub ? `<span class="truncate text-[11px] muted">${esc(sub)}</span>` : ''}</span>${(MUS.homeSel || 'synth') === ref ? icon('check', 'w-4 h-4') : ''}</button>`;
  return `<div class="mus-picker">
    ${opt('synth', 'Gymnopédie n° 1 (Satie)', 'Par défaut · jouée au piano dans la demeure')}
    ${opt('off', 'Aucune', 'La musique en cours continue')}
    ${MUS_MINE.length ? `<div class="label mt-3 mb-1">Mes musiques</div>${MUS_MINE.map((t, i) => opt(musRef('mine', i), t[0], t[1])).join('')}` : `<p class="text-[11px] muted mt-2">Pour entendre un morceau précis (une bande originale que vous possédez, par exemple), ajoutez son fichier dans « Mes musiques » ci-dessous, puis choisissez-le ici.</p>`}
    ${MUSIC_STYLES.map(S => `<div class="label mt-3 mb-1">${esc(S.name)}</div>${S.tracks.map((t, i) => opt(musRef(S.id, i), t[0], t[1])).join('')}`).join('')}
  </div>`;
}
function musIntroPicker() {
  const opt = (ref, t, sub) => `<button type="button" class="mus-pickrow ${MUS.introSel === ref ? 'on' : ''}" data-a="mus-intro-choose" data-ref="${esc(ref)}"><span class="mus-rt"><span class="truncate text-[13px]">${esc(t)}</span>${sub ? `<span class="truncate text-[11px] muted">${esc(sub)}</span>` : ''}</span>${MUS.introSel === ref ? icon('check', 'w-4 h-4') : ''}</button>`;
  return `<div class="mus-picker">
    ${opt('default', 'Ainsi parlait Zarathoustra', 'Par défaut')}
    ${opt('style', 'La piste en cours du style choisi', 'Elle démarre dès l’écran d’accueil et continue dans l’appli')}
    ${musAllStyles().filter(S => S.tracks.length).map(S => `<div class="label mt-3 mb-1">${esc(S.name)}</div>${S.tracks.map((t, i) => opt(musRef(S.id, i), t[0], t[1])).join('')}`).join('')}
  </div>`;
}
function musRenderSheet(msg) {
  const view = musStyle(musRT.view || MUS.style, true);
  const introT = musTrackRef(MUS.introSel);
  const inner = `
    <div class="mus-head">
      <div class="sys-title u">Salle de musique</div>
      <button type="button" class="ibtn" data-a="mus-close" aria-label="Fermer">${icon('x', 'w-4 h-4')}</button>
    </div>
    ${musNowHTML(msg)}

    <div class="mus-box mt-3">
      <div class="label">${icon('sunrise', 'w-3.5 h-3.5')} Musique de l’écran d’accueil</div>
      <div class="mus-head mt-1">
        <div class="min-w-0"><div class="text-sm truncate">${introT ? esc(introT[0]) : esc((musStyle(MUS.style).tracks[MUS.idx] || musStyle(MUS.style).tracks[0])[0])}</div><div class="text-[11px] muted">${introT ? 'Jouée à l’ouverture, puis le style choisi prend le relais.' : 'Première piste du style ' + esc(musStyle(MUS.style).name) + ' : elle démarre dès l’écran d’accueil et continue dans l’appli.'}</div></div>
        <button type="button" class="btn sm" data-a="mus-intro-toggle">${musRT.pickIntro ? 'Fermer' : 'Changer'}</button>
      </div>
      ${musRT.pickIntro ? musIntroPicker() : ''}
    </div>

    <div class="mus-box mt-3">
      <div class="label">${icon('castle', 'w-3.5 h-3.5')} Musique des demeures</div>
      <div class="mus-head mt-1">
        <div class="min-w-0"><div class="text-sm truncate">${esc(musHomeLabel())}</div><div class="text-[11px] muted">Jouée en boucle chaque fois que vous entrez dans une de vos demeures, dans le monde ouvert.</div></div>
        <button type="button" class="btn sm" data-a="mus-home-toggle">${musRT.pickHome ? 'Fermer' : 'Changer'}</button>
      </div>
      ${musRT.pickHome ? musHomePicker() : ''}
    </div>

    <div class="mus-box mt-3">
      <div class="label">${icon('folder-heart', 'w-3.5 h-3.5')} Mes musiques · ${MUS_MINE.length} fichier${MUS_MINE.length > 1 ? 's' : ''}</div>
      <p class="text-[11.5px] muted mt-1">Vos propres fichiers audio (mp3, m4a…). Ils restent sur cet appareil et ne sont envoyés nulle part.</p>
      <div class="flex gap-2 mt-2 flex-wrap">
        <button type="button" class="btn sm" data-a="mus-add">${icon('plus', 'w-3.5 h-3.5')}Ajouter des fichiers</button>
        ${MUS_MINE.length ? `<button type="button" class="btn sm ghost" data-a="mus-view" data-s="mine">${icon('list-music', 'w-3.5 h-3.5')}Voir mes musiques</button>` : ''}
      </div>
      <input type="file" id="mus-file" accept="audio/*,.mp3,.m4a,.aac,.ogg,.opus,.wav,.flac" multiple hidden>
    </div>

    <div class="label mt-4 mb-2">Styles</div>
    <div class="mus-styles">
      ${musAllStyles().map(s => `<button type="button" class="mus-style ${s.id === view.id ? 'on' : ''} ${s.id === MUS.style && musRT.cur && !musRT.intro ? 'live' : ''}" data-a="mus-view" data-s="${s.id}">${icon(s.icon, 'w-4 h-4')}<span><span class="block f-display text-[13px] leading-tight">${esc(s.name)}</span><span class="block text-[10.5px] muted leading-snug">${esc(s.desc)}</span></span></button>`).join('')}
    </div>
    <div class="mus-head mt-4 mb-2" id="mus-listhead"><div class="label">${esc(view.name)} · ${view.tracks.length} piste${view.tracks.length > 1 ? 's' : ''}</div>
      ${view.tracks.length ? `<button type="button" class="btn sm" data-a="mus-pick" data-s="${view.id}" data-i="0">${icon('play', 'w-3.5 h-3.5')}Tout écouter</button>` : ''}</div>
    ${view.id === 'mine' && !view.tracks.length ? `<p class="text-xs muted">Aucun fichier pour l’instant. Touchez « Ajouter des fichiers » plus haut.</p>` : ''}
    ${view.tracks.length ? `<div class="mus-list">
      ${view.tracks.map((t, i) => { const cur = musRT.cur === t, ref = musRef(view.id, i), isIn = introT === t; return `<div class="mus-row ${cur ? 'on' : ''}"><button type="button" class="mus-rp" data-a="mus-pick" data-s="${view.id}" data-i="${i}"><span class="f-mono text-[11px] muted w-5 text-right">${cur && musPlaying() ? '♪' : i + 1}</span><span class="mus-rt"><span class="truncate text-[13.5px]">${esc(t[0])}</span><span class="truncate text-[11px] muted">${esc(t[1])}</span></span></button><button type="button" class="mus-rs ${isIn ? 'on' : ''}" data-a="mus-intro-choose" data-ref="${esc(ref)}" aria-pressed="${isIn}" aria-label="Mettre en musique d’accueil" title="Mettre en musique d’accueil">${icon('sunrise', 'w-4 h-4')}</button>${view.id === 'mine' ? `<button type="button" class="mus-rs" data-a="mus-del" data-id="${esc(t[5])}" aria-label="Retirer ce fichier" title="Retirer ce fichier">${icon('trash-2', 'w-4 h-4')}</button>` : ''}</div>`; }).join('')}
    </div>
    <p class="text-[11px] muted mt-1">Touchez un titre pour l’écouter. Le soleil levant le met en musique d’accueil.</p>` : ''}

    <div class="label mt-4 mb-2">Options</div>
    <div class="flex flex-col gap-2 text-sm">
      <label class="mus-opt"><input type="checkbox" data-mus-opt="splash" ${MUS.splash ? 'checked' : ''}><span>Écran d’accueil à chaque ouverture</span></label>
      <label class="mus-opt"><input type="checkbox" data-mus-opt="on" ${MUS.on ? 'checked' : ''}><span>Musique activée au lancement</span></label>
      <label class="mus-opt"><input type="checkbox" data-mus-opt="bg" ${MUS.bg ? 'checked' : ''}><span>Rester active en arrière-plan (la musique continue quand je quitte l’appli)</span></label>
    </div>
    <details class="mt-4 mus-credits">
      <summary class="label">${icon('info', 'w-3.5 h-3.5')} Crédits et licences</summary>
      <p class="text-xs muted mt-2">Toutes ces musiques sont composées et jouées par des musiciens humains : aucune n’est générée par IA. Elles sont libres de droits (licences Creative Commons, avec attribution) ou dans le domaine public, et sont lues depuis Wikimedia Commons : il faut une connexion internet.</p>
      ${[['Ouverture', [MUS_INTRO]], ...MUSIC_STYLES.map(s => [s.name, s.tracks])].map(([n, ts]) => `<div class="label mt-3">${esc(n)}</div><ul class="text-[11.5px] leading-snug mt-1 flex flex-col gap-1">${ts.map(t => `<li>« ${esc(t[0])} » — ${esc(t[1])} · <a class="glow" href="${MUS_LIC[t[2]][1]}" target="_blank" rel="noopener">${MUS_LIC[t[2]][0]}</a> · <a class="muted underline" href="${musPage(t)}" target="_blank" rel="noopener">source</a></li>`).join('')}</ul>`).join('')}
      <p class="text-[11px] muted mt-3">Musiques de Kevin MacLeod (incompetech.com), sous licence Creative Commons : By Attribution.</p>
    </details>
    <p class="text-[10px] muted mt-3 text-center f-mono">Salle de musique · 2026-11-06 · v3</p>`;
  let el = document.getElementById('mus-sheet');
  const keepScroll = el ? el.querySelector('.mus-card').scrollTop : 0;
  const keepCred = el ? !!(el.querySelector('.mus-credits') || {}).open : false;
  if (!el) { document.body.insertAdjacentHTML('beforeend', `<div id="mus-sheet" class="pn-overlay mus-overlay" role="dialog" aria-modal="true" aria-label="Salle de musique"><div class="sys umbra mus-card"></div></div>`); el = document.getElementById('mus-sheet'); }
  const card = el.querySelector('.mus-card');
  card.innerHTML = inner;
  card.scrollTop = keepScroll;
  if (keepCred) card.querySelector('.mus-credits').open = true;
  if (typeof refreshIcons === 'function') refreshIcons();
  musProgress();
}
function musClose() { const o = document.getElementById('mus-sheet'); if (o) o.remove(); musRT.view = null; }

Object.assign(handlers, {
  'mus-open': () => { musRT.view = MUS.style; musRenderSheet(); },
  'mus-close': () => musClose(),
  'mus-view': el => { musRT.view = el.dataset.s; musRenderSheet(); const h = document.getElementById('mus-listhead'); if (h && h.scrollIntoView) h.scrollIntoView({ block: 'start', behavior: 'smooth' }); },
  'mus-pick': el => { musRT.view = el.dataset.s; musPlay(el.dataset.s, +el.dataset.i); },
  'mus-toggle': () => musToggle(),
  'mus-next': () => musNext(1),
  'mus-prev': () => { const a = musRT.audio; if (a && a.currentTime > 4 && !musRT.intro) { a.currentTime = 0; } else musNext(-1); },
  'mus-shuffle': () => { MUS.shuffle = !MUS.shuffle; musSave(); musRenderSheet(); },
  'mus-repeat': el => { MUS.repeat = el.dataset.r; musSave(); if (musRT.audio) musRT.audio.loop = MUS.repeat === 'one' && !musRT.intro; musRenderSheet(); },
  'mus-intro-toggle': () => { musRT.pickIntro = !musRT.pickIntro; musRenderSheet(); },
  'mus-home-toggle': () => { musRT.pickHome = !musRT.pickHome; musRenderSheet(); },
  'mus-home-choose': el => { MUS.homeSel = el.dataset.ref; musSave(); musRT.pickHome = false; musRefresh('Musique des demeures : ' + musHomeLabel() + '.'); },
  'mus-intro-choose': el => {
    MUS.introSel = el.dataset.ref; MUS.intro = MUS.introSel !== 'style'; MUS.on = true; musSave();
    musRT.pickIntro = false;
    /* on l’entend tout de suite : c’est elle qui jouera à l’ouverture */
    const t = musTrackRef(MUS.introSel);
    if (t) { musRT.intro = true; musStart(t, 800); } else musPlay(MUS.style, MUS.idx);
    musRefresh('Musique d’accueil choisie : ' + (t ? t[0] : 'aucune') + '.');
  },
  'mus-add': () => { const f = document.getElementById('mus-file'); if (f) { musRT.picking = Date.now(); f.click(); } },
  'mus-del': el => { musMineDel(el.dataset.id); }
});
if (typeof document !== 'undefined' && document.addEventListener) {
  document.addEventListener('input', ev => {
    if (ev.target && ev.target.id === 'mus-vol') { MUS.vol = +ev.target.value; if (musRT.audio) { clearInterval(musRT.fadeT); musRT.audio.volume = MUS.vol; } musSave(); }
  });
  document.addEventListener('change', ev => {
    if (ev.target && ev.target.id === 'mus-intro-sel') { MUS.introSel = ev.target.value; MUS.intro = MUS.introSel !== 'style'; musSave(); musRefresh(); return; }
    if (ev.target && ev.target.id === 'mus-file') { const fs = [...(ev.target.files || [])]; if (fs.length) { musRT.view = 'mine'; musMineAdd(fs).then(() => musRefresh(fs.length > 1 ? fs.length + ' fichiers ajoutés à « Mes musiques ».' : 'Fichier ajouté à « Mes musiques ».')); } return; }
    const k = ev.target && ev.target.dataset && ev.target.dataset.musOpt;
    if (!k) return;
    MUS[k] = ev.target.checked; musSave();
    if (k === 'bg' && typeof kinahCheat === 'function') kinahCheat();
    if (k === 'on') { if (MUS.on && !musPlaying()) musResume(); if (!MUS.on && musPlaying()) musPause(); }
  });
  document.addEventListener('click', ev => { if (ev.target && ev.target.id === 'mus-sheet') musClose(); });
  document.addEventListener('keydown', ev => { if (ev.key === 'Escape') musClose(); });
  if (typeof indexedDB !== 'undefined') musMineLoad();
}

/* ==========================================================================
   Écran d’accueil : le ciel profond, la galaxie, et un homme tout petit
   ========================================================================== */
const SPLASH = { on: false, raf: 0, t0: 0, phase: 0, stars: [], gal: [], neb: null, w: 0, h: 0, dpr: 1, still: false };
function splashMusLabel() {
  const on = musPlaying();
  const t = musRT.cur;
  const it = musTrackRef(MUS.introSel);
  return `${icon(on ? 'volume-2' : 'volume-x', 'w-3.5 h-3.5')}<span>${on && t ? esc(t[0]) : MUS.on ? esc(it ? it[0] : musStyle(MUS.style).name) : 'Musique coupée'}</span>`;
}
function splashPlayer() {
  if (!state.profile) return `<p class="elx-who">Aucun Joueur sur cet appareil.</p>
    <button type="button" class="elx-enter" data-a="elx-enter">S’éveiller</button>`;
  const li = levelInfo(totals().xp), rk = rankOf(li.level);
  return `<div class="elx-card">
      <div class="elx-av" style="border-color:${rk.color};color:${rk.color}">${esc(rankBadge(rk))}</div>
      <div class="elx-id"><div class="elx-name truncate">${esc(state.profile.name)}</div><div class="elx-lvl">Niveau ${li.level} · ${esc(rk.title)}</div></div>
    </div>
    <button type="button" class="elx-enter" data-a="elx-enter">Entrer dans le Système</button>`;
}
/* Squelette de l’écran d’accueil. Il est aussi écrit en dur au début de la page (voir assemble.py),
   pour s’afficher dès la première image, avant le chargement du reste. */
const ELX_HTML = `<div id="elx" class="elx" role="dialog" aria-label="Elyos System"><canvas id="elx-c" aria-hidden="true"></canvas><div class="elx-beam" aria-hidden="true"></div><div class="elx-ui"><div class="elx-top"><div class="elx-kicker">[ Système ]</div><h1 class="elx-title" aria-label="Elyos System"><span class="elx-t1"><b style="--i:0">E</b><b style="--i:1">L</b><b style="--i:2">Y</b><b style="--i:3">O</b><b style="--i:4">S</b></span><span class="elx-t2">SYSTEM</span></h1></div><div class="elx-bottom"><blockquote class="elx-verse">Pourquoi suis-je venu, et il n’y a eu personne ? Pourquoi ai-je appelé, et il n’y a eu personne qui réponde ?<cite>Ésaïe 50.2</cite></blockquote><div class="elx-login" id="elx-login"></div><button type="button" class="elx-tap" data-a="elx-tap">Toucher pour s’éveiller</button><div class="elx-skip" aria-hidden="true">Toucher l’écran pour passer</div></div></div></div>`;
function splashShow(opts) {
  opts = opts || {};
  if (typeof document === 'undefined' || !document.body || typeof window === 'undefined' || typeof window.requestAnimationFrame !== 'function') return;
  if (SPLASH.on) return;
  SPLASH.on = true;
  SPLASH.still = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  if (!document.getElementById('elx')) document.body.insertAdjacentHTML('beforeend', ELX_HTML);
  const login = document.getElementById('elx-login');
  if (login) login.innerHTML = `${splashPlayer()}
    <div class="elx-row">
      <button type="button" id="elx-mus" class="elx-mus" data-a="elx-mus" aria-label="Couper ou remettre la musique">${splashMusLabel()}</button>
      <button type="button" class="elx-mus elx-pick" data-a="mus-open" aria-label="Choisir la musique">${icon('list-music', 'w-3.5 h-3.5')}<span>Choisir la musique</span></button>
    </div>`;
  if (typeof refreshIcons === 'function') refreshIcons();
  const c = document.getElementById('elx-c');
  if (!c || !c.getContext) return;
  splashSize(); window.addEventListener('resize', splashSize);
  SPLASH.t0 = performance.now();
  /* Sans musique, aucun geste n’est nécessaire : l’éveil commence tout seul. */
  if (!MUS.on) splashAwaken();
  else if (opts.keepMusic && musPlaying()) splashAwaken(true); /* retour volontaire : la musique continue */
  else {
    /* Si le navigateur autorise le son sans geste (souvent le cas d’une appli installée),
       la cinématique démarre seule avec la musique ; sinon, on attend un toucher. */
    const p = musPlayIntro();
    if (p && p.then) p.then(() => splashAwaken(true)).catch(() => { });
  }
  SPLASH.raf = requestAnimationFrame(splashFrame);
}
function splashAwaken(musicAlready) {
  const el = document.getElementById('elx'); if (!el || SPLASH.phase) return;
  SPLASH.phase = 1; SPLASH.ta = performance.now();
  el.classList.add('awake');
  if (!musicAlready && !musPlaying()) musPlayIntro();
}
function splashSkip() { const el = document.getElementById('elx'); if (el) { el.classList.add('awake', 'done'); SPLASH.ta = performance.now() - 9000; } }
function splashHide() {
  const el = document.getElementById('elx'); if (!el) return;
  el.classList.add('leave');
  setTimeout(() => { cancelAnimationFrame(SPLASH.raf); window.removeEventListener('resize', splashSize); el.remove(); SPLASH.phase = 0; SPLASH.on = false; }, 1100);
}
Object.assign(handlers, {
  'elx-tap': () => splashAwaken(),
  'elx-home': () => { musClose(); window.scrollTo({ top: 0 }); splashShow({ keepMusic: true }); },
  'elx-enter': () => splashHide(),
  'elx-mus': () => { if (musPlaying()) { musPause(); MUS.on = false; } else { MUS.on = true; if (musRT.cur) musResume(); else musPlayIntro(); } musSave(); setTimeout(musRefresh, 450); musRefresh(); }
});
if (typeof document !== 'undefined' && document.addEventListener) document.addEventListener('click', ev => {
  const el = document.getElementById('elx'); if (!el || ev.target.closest('[data-a]') || ev.target.closest('#mus-sheet')) return;
  if (!SPLASH.phase) splashAwaken(); else if (!el.classList.contains('done')) splashSkip();
});

const SPLASH_COL = {};
function splashCol(base, a) { const q = Math.max(0, Math.min(63, Math.round(a * 63))); const L = SPLASH_COL[base] || (SPLASH_COL[base] = Array.from({ length: 64 }, (_, i) => `rgba(${base},${(i / 63).toFixed(3)})`)); return L[q]; }
function splashSize() {
  const c = document.getElementById('elx-c'); if (!c) return;
  const dpr = Math.min(1.5, window.devicePixelRatio || 1), w = window.innerWidth, h = window.innerHeight;
  Object.assign(SPLASH, { w, h, dpr });
  c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
  c.style.width = w + 'px'; c.style.height = h + 'px';
  const small = w * h < 500000;
  /* Étoiles en profondeur : x, y dans [-1, 1], z dans ]0, 1] */
  SPLASH.stars = Array.from({ length: small ? 520 : 900 }, () => ({ x: (Math.random() * 2 - 1) * 1.4, y: (Math.random() * 2 - 1) * 1.4, z: Math.random() * 0.95 + 0.05, tw: Math.random() * 6.28, hue: Math.random() }));
  /* Galaxie spirale à deux bras, vue de biais */
  const G = [], N = small ? 1700 : 2800;
  for (let i = 0; i < N; i++) {
    const arm = i % 2, r0 = Math.pow(Math.random(), 0.6), spread = (Math.random() + Math.random() - 1) * (0.7 - r0 * 0.3);
    const r = Math.max(0.01, r0 + (Math.random() - 0.5) * 0.06), th = arm * Math.PI + r0 * 5.4 + spread * 1.5;
    G.push({ r, th, s: Math.random(), core: Math.random() < 0.16, dust: Math.random() < 0.3 });
  }
  SPLASH.gal = G;
  /* Nébuleuses : dessinées une seule fois */
  const nb = document.createElement('canvas'); nb.width = Math.round(w * dpr / 2); nb.height = Math.round(h * dpr / 2);
  const n = nb.getContext('2d');
  const blob = (x, y, r, col) => { const g = n.createRadialGradient(x, y, 0, x, y, r); g.addColorStop(0, col); g.addColorStop(1, 'rgba(0,0,0,0)'); n.fillStyle = g; n.fillRect(0, 0, nb.width, nb.height); };
  const W = nb.width, H = nb.height;
  blob(W * 0.2, H * 0.22, W * 0.7, 'rgba(139,92,246,.22)');
  blob(W * 0.85, H * 0.35, W * 0.6, 'rgba(0,240,255,.10)');
  blob(W * 0.55, H * 0.12, W * 0.45, 'rgba(255,190,255,.08)');
  blob(W * 0.4, H * 0.55, W * 0.55, 'rgba(60,40,160,.18)');
  SPLASH.neb = nb;
}
function splashFrame(now) {
  const c = document.getElementById('elx-c'); if (!c) return;
  /* 30 images/s suffisent : deux fois moins de travail pour les téléphones */
  if (SPLASH.lastF && now - SPLASH.lastF < 30) { SPLASH.raf = requestAnimationFrame(splashFrame); return; }
  SPLASH.lastF = now;
  const x = c.getContext('2d'), { w, h, dpr } = SPLASH;
  const t = (now - SPLASH.t0) / 1000;
  const ta = SPLASH.phase ? Math.min(1, (now - SPLASH.ta) / 9000) : 0;
  const ease = 1 - Math.pow(1 - ta, 3);
  x.setTransform(dpr, 0, 0, dpr, 0, 0);
  x.globalCompositeOperation = 'source-over';
  const bg = x.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#04040a'); bg.addColorStop(0.6, '#07061a'); bg.addColorStop(1, '#0b0820');
  x.fillStyle = bg; x.fillRect(0, 0, w, h);
  /* Nébuleuses qui respirent */
  if (SPLASH.neb) { x.globalAlpha = 0.55 + 0.45 * ease; x.drawImage(SPLASH.neb, -w * 0.05 + Math.sin(t * 0.05) * w * 0.03, -h * 0.03, w * 1.1, h * 1.06); x.globalAlpha = 1; }
  x.globalCompositeOperation = 'lighter';
  /* Étoiles : on avance lentement dans la profondeur */
  const cx = w / 2, cy = h * 0.4, f = Math.max(w, h) * 0.55, speed = SPLASH.still ? 0 : 0.006 + 0.01 * (1 - ease);
  for (const s of SPLASH.stars) {
    s.z -= speed / 60; if (s.z <= 0.05) { s.z = 1; s.x = (Math.random() * 2 - 1) * 1.4; s.y = (Math.random() * 2 - 1) * 1.4; }
    const px = cx + s.x / s.z * f * 0.35, py = cy + s.y / s.z * f * 0.35;
    if (px < -4 || px > w + 4 || py < -4 || py > h + 4) continue;
    const near = 1 - s.z, size = 0.4 + near * 1.8;
    const a = (0.25 + near * 0.75) * (0.75 + 0.25 * Math.sin(t * 2 + s.tw)) * (0.35 + 0.65 * ease + (SPLASH.phase ? 0 : 0.2));
    x.fillStyle = splashCol(s.hue < 0.12 ? '170,230,255' : s.hue < 0.2 ? '210,190,255' : '255,255,255', a);
    x.fillRect(px, py, size, size);
  }
  /* Galaxie : elle apparaît et tourne, immense, au-dessus de tout */
  const gx = w / 2, gy = h * 0.3, R = Math.min(w, h) * (0.52 + 0.18 * ease), rot = t * 0.025, tilt = 0.42;
  const core = x.createRadialGradient(gx, gy, 0, gx, gy, R * 0.55);
  core.addColorStop(0, `rgba(255,244,225,${0.55 * ease})`); core.addColorStop(0.25, `rgba(200,170,255,${0.18 * ease})`); core.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = core; x.fillRect(gx - R, gy - R, R * 2, R * 2);
  const ca = Math.cos(-0.35), sa = Math.sin(-0.35);
  for (const p of SPLASH.gal) {
    const th = p.th + rot * (1.4 - p.r), rr = p.r * R;
    const ex = Math.cos(th) * rr, ey = Math.sin(th) * rr * tilt;
    const px = gx + ex * ca - ey * sa, py = gy + ex * sa + ey * ca;
    const a = (p.core ? 0.9 : 0.55) * (1 - p.r * 0.7) * ease;
    if (a < 0.02) continue;
    x.fillStyle = p.r < 0.18 ? splashCol('255,236,210', a) : p.s < 0.5 ? splashCol('150,120,255', a * 0.8) : splashCol('110,220,255', a * 0.7);
    const sz = p.core ? 1.4 : 1;
    x.fillRect(px, py, sz, sz);
    if (p.dust) { x.fillStyle = p.s < 0.5 ? splashCol('139,92,246', a * 0.12) : splashCol('0,200,255', a * 0.1); x.fillRect(px - 2.5, py - 2.5, 6, 6); }
  }
  x.globalCompositeOperation = 'source-over';
  /* La courbe d’une planète, tout en bas, et l’homme debout dessus */
  const PR = Math.max(w, h) * 2.2, pcx = w / 2, pcy = h + PR - h * 0.13;
  const atm = x.createRadialGradient(pcx, pcy, PR * 0.985, pcx, pcy, PR * 1.04);
  atm.addColorStop(0, 'rgba(0,240,255,0)'); atm.addColorStop(0.35, `rgba(0,220,255,${0.22 + 0.2 * ease})`); atm.addColorStop(0.55, `rgba(139,92,246,${0.12 + 0.1 * ease})`); atm.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = atm; x.beginPath(); x.arc(pcx, pcy, PR * 1.04, 0, Math.PI * 2); x.fill();
  const ground = x.createLinearGradient(0, pcy - PR, 0, h); ground.addColorStop(0, '#0d0b1c'); ground.addColorStop(1, '#030308');
  x.fillStyle = ground; x.beginPath(); x.arc(pcx, pcy, PR, 0, Math.PI * 2); x.fill();
  /* Le Joueur : 2 % de la hauteur de l’écran */
  const top = pcy - PR, mh = Math.max(14, h * 0.022), mx = w / 2, my = top + 0.5;
  const halo = x.createRadialGradient(mx, my - mh * 0.6, 0, mx, my - mh * 0.6, mh * 3.2);
  halo.addColorStop(0, `rgba(255,248,230,${0.25 * ease})`); halo.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = halo; x.fillRect(mx - mh * 4, my - mh * 4, mh * 8, mh * 5);
  x.fillStyle = '#010104';
  const u = mh / 10;
  x.beginPath(); x.arc(mx + u * 0.3, my - u * 9.1, u * 0.95, 0, Math.PI * 2); x.fill(); /* tête levée vers le ciel */
  x.beginPath();
  x.moveTo(mx - u * 1.3, my - u * 7.8); x.lineTo(mx + u * 1.3, my - u * 7.8);
  x.lineTo(mx + u * 1.6, my - u * 4.2); x.lineTo(mx + u * 1.0, my - u * 4.2); x.lineTo(mx + u * 0.9, my);
  x.lineTo(mx + u * 0.15, my); x.lineTo(mx, my - u * 3.6); x.lineTo(mx - u * 0.15, my); x.lineTo(mx - u * 0.9, my);
  x.lineTo(mx - u * 1.0, my - u * 4.2); x.lineTo(mx - u * 1.6, my - u * 4.2); x.closePath(); x.fill();
  SPLASH.raf = requestAnimationFrame(splashFrame);
}

if (typeof document !== 'undefined' && document.head) document.head.insertAdjacentHTML('beforeend', `<style>
/* ---- Salle de musique ---- */
.mus-overlay{z-index:130}
.mus-box{padding:10px;border:1px solid var(--line);background:#111117}
.mus-modes{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:10px}
.mus-chip{display:inline-flex;align-items:center;gap:5px;padding:5px 9px;font-size:11.5px;border:1px solid var(--line);background:#14141b;color:var(--muted);cursor:pointer}
.mus-chip.on{color:var(--neon);border-color:var(--neon);background:rgba(0,240,255,.07)}
.mus-picker{margin-top:8px;max-height:46vh;overflow:auto;border-top:1px solid var(--line);padding-top:6px}
.mus-pickrow{display:flex;align-items:center;gap:8px;width:100%;text-align:left;padding:7px 6px;background:transparent;border:0;border-bottom:1px solid #1d1d25;color:inherit;cursor:pointer}
.mus-pickrow.on{color:var(--kinah)}
.mus-row{padding:0 !important}
.mus-rp{flex:1;min-width:0;display:flex;gap:10px;align-items:center;text-align:left;padding:8px 10px;background:transparent;border:0;color:inherit;cursor:pointer}
.mus-rt{display:flex;flex-direction:column;min-width:0;flex:1}
.mus-rs{flex:none;width:40px;align-self:stretch;display:grid;place-items:center;background:transparent;border:0;border-left:1px solid #1d1d25;color:var(--muted);cursor:pointer}
.mus-rs.on{color:var(--kinah)}
.mus-mine{padding:10px;border:1px dashed var(--line);margin-bottom:8px}
.mus-optcol{flex-direction:column;gap:4px}
.mus-optcol select{width:100%;max-width:100%}
.mus-head{display:flex;align-items:center;justify-content:space-between;gap:8px}
.mus-ctrl{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:12px;flex-wrap:wrap}
.mus-volw{display:flex;align-items:center;gap:4px}
.mus-style>span{display:flex;flex-direction:column;min-width:0}
.mus-row>span:nth-child(2){display:flex;flex-direction:column;min-width:0;flex:1}
.mus-row .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mus-card{width:100%;max-width:560px;max-height:86vh;overflow:auto;overscroll-behavior:contain}
.mus-now{margin-top:12px;padding:12px;border:1px solid var(--line);background:linear-gradient(135deg,rgba(0,240,255,.06),rgba(139,92,246,.08))}
.mus-track{height:3px;background:#24242e;overflow:hidden}
.mus-bar{height:100%;width:0;background:linear-gradient(90deg,var(--neon),var(--umbra));box-shadow:0 0 8px var(--neon)}
.mus-play{width:52px;height:52px;border-radius:999px;display:grid;place-items:center;color:#05050a;background:var(--neon);box-shadow:0 0 22px rgba(0,240,255,.45)}
.mus-vol{width:84px;accent-color:var(--neon)}
.mus-styles{display:grid;grid-template-columns:1fr 1fr;gap:6px}
@media (min-width:520px){.mus-styles{grid-template-columns:1fr 1fr 1fr}}
.mus-style{color:inherit;cursor:pointer;display:flex;gap:8px;align-items:flex-start;text-align:left;padding:8px;border:1px solid var(--line);background:#121218;min-width:0}
.mus-style.on{border-color:var(--neon);box-shadow:0 0 14px rgba(0,240,255,.14) inset}
.mus-style.live svg{color:var(--neon)}
.mus-list{display:flex;flex-direction:column;border:1px solid var(--line)}
.mus-row{display:flex;gap:10px;align-items:center;text-align:left;padding:8px 10px;width:100%;background:transparent;color:inherit;border:0;border-bottom:1px solid #1d1d25;cursor:pointer}
.mus-row:last-child{border-bottom:0}
.mus-row.on{background:rgba(0,240,255,.07)}
.mus-row.on .truncate:first-child{color:var(--neon)}
.mus-opt{display:flex;gap:8px;align-items:flex-start}
.mus-opt input{margin-top:3px;accent-color:var(--neon)}
.mus-credits summary{cursor:pointer;display:flex;gap:6px;align-items:center}
.mus-credits a{word-break:break-word}
.mus-hbtn.on{color:var(--neon);border-color:var(--neon)}
.mus-eq{display:inline-flex;gap:2px;align-items:flex-end;height:14px}
.mus-eq i{width:3px;background:var(--neon);animation:mus-eq 1s ease-in-out infinite}
.mus-eq i:nth-child(2){animation-delay:-.35s}.mus-eq i:nth-child(3){animation-delay:-.7s}
@keyframes mus-eq{0%,100%{height:3px}50%{height:14px}}
/*ELX-CSS*/
/* ---- Écran d’accueil ---- */
.elx{position:fixed;inset:0;z-index:120;background:#04040a;overflow:hidden;color:#eef2ff;transition:opacity 1s ease, transform 1.1s ease;cursor:pointer;user-select:none;-webkit-user-select:none}
.elx.leave{opacity:0;transform:scale(1.06);pointer-events:none}
.elx canvas{position:absolute;inset:0;display:block}
.elx-beam{position:absolute;left:50%;top:30%;bottom:13%;width:min(36vw,220px);transform:translateX(-50%);background:linear-gradient(180deg,rgba(255,244,225,.0),rgba(255,244,225,.10) 30%,rgba(200,240,255,.16) 85%,rgba(255,255,255,.0));filter:blur(18px);opacity:0;transition:opacity 5s ease 2.2s;pointer-events:none;mix-blend-mode:screen}
.elx.awake .elx-beam{opacity:1;animation:elx-beam 7s ease-in-out 7s infinite}
@keyframes elx-beam{0%,100%{opacity:1}50%{opacity:.65}}
.elx-ui{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:center;padding:calc(env(safe-area-inset-top,0px) + 7vh) 16px calc(env(safe-area-inset-bottom,0px) + 3vh)}
.elx-top{display:flex;flex-direction:column;align-items:center;gap:10px}
.elx-kicker{font-family:var(--font-mono);font-size:11px;letter-spacing:.42em;color:rgba(0,240,255,.75);opacity:0;transition:opacity 2s ease 1s}
.elx-title{margin:0;display:flex;flex-direction:column;align-items:center;line-height:1}
.elx-t1{font-family:var(--font-display);font-weight:800;font-size:clamp(46px,15vw,104px);letter-spacing:.32em;margin-right:-.32em;display:flex}
.elx-t1 b{font-weight:800;opacity:0;filter:blur(14px);transform:translateY(6px) scale(1.15);background:linear-gradient(180deg,#ffffff 20%,#bdf6ff 60%,#8f7bff);-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:0 0 34px rgba(0,240,255,.35);transition:opacity 1.6s ease, filter 2.2s ease, transform 2.2s ease;transition-delay:calc(1.6s + var(--i) * .28s)}
.elx-t2{margin-top:12px;font-family:var(--font-display);font-weight:600;font-size:clamp(12px,3.6vw,18px);letter-spacing:1.05em;margin-right:-1.05em;color:#b9a8ff;opacity:0;transition:opacity 2s ease 3.4s;text-shadow:0 0 14px rgba(139,92,246,.6)}
.elx.awake .elx-kicker,.elx.awake .elx-t2{opacity:1}
.elx.awake .elx-t1 b{opacity:1;filter:blur(0);transform:none}
.elx-bottom{display:flex;flex-direction:column;align-items:center;gap:14px;width:100%;max-width:440px;margin-bottom:max(15vh,96px)}
.elx-verse{margin:0;font-family:'Spectral',Georgia,serif;font-style:italic;font-size:clamp(13.5px,3.7vw,16px);line-height:1.55;color:rgba(232,236,255,.86);opacity:0;transform:translateY(8px);transition:opacity 2.4s ease 4.6s, transform 2.4s ease 4.6s;text-shadow:0 1px 12px rgba(0,0,0,.9)}
.elx-verse cite{display:block;margin-top:6px;font-style:normal;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.24em;color:rgba(0,240,255,.7);text-transform:uppercase}
.elx.awake .elx-verse{opacity:1;transform:none}
.elx-login{display:flex;flex-direction:column;align-items:center;gap:10px;width:100%;opacity:0;transform:translateY(10px);pointer-events:none;transition:opacity 1.6s ease 6.6s, transform 1.6s ease 6.6s}
.elx.awake .elx-login{opacity:1;transform:none;pointer-events:auto}
.elx.done .elx-t1 b,.elx.done .elx-verse,.elx.done .elx-login,.elx.done .elx-kicker,.elx.done .elx-t2,.elx.done .elx-beam{transition-delay:0s !important;transition-duration:.6s !important}
.elx-card{display:flex;align-items:center;gap:12px;padding:10px 14px;border:1px solid rgba(0,240,255,.25);background:rgba(8,8,20,.6);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);min-width:min(300px,100%)}
.elx-av{width:38px;height:38px;flex:none;display:grid;place-items:center;border:1px solid;font-family:var(--font-display);font-weight:800}
.elx-name{font-family:var(--font-display);font-weight:700;font-size:16px}
.elx-lvl{font-size:12px;color:#9aa0b4}
.elx-who{font-size:13px;color:#9aa0b4;margin:0}
.elx-enter{border:0;cursor:pointer;min-width:min(300px,100%);padding:13px 22px;font-family:var(--font-display);font-weight:700;letter-spacing:.18em;text-transform:uppercase;font-size:13px;color:#04040a;background:linear-gradient(90deg,#7ff6ff,#00f0ff 45%,#a48bff);box-shadow:0 0 28px rgba(0,240,255,.35),0 0 60px rgba(139,92,246,.25)}
.elx-enter:active{transform:scale(.98)}
.elx-id{min-width:0;text-align:left}
.elx-mus{background:none;border:0;cursor:pointer;display:inline-flex;gap:6px;align-items:center;font-size:11.5px;color:#9aa0b4;padding:4px 8px;max-width:100%}
.elx-mus span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.elx-tap{background:none;border:0;cursor:pointer;font-family:var(--font-mono);font-size:11.5px;letter-spacing:.38em;text-transform:uppercase;color:rgba(0,240,255,.85);padding:10px;animation:elx-pulse 2.6s ease-in-out infinite}
.elx.awake .elx-tap{display:none}
@keyframes elx-pulse{0%,100%{opacity:.35}50%{opacity:1}}
@media (prefers-reduced-motion:reduce){.elx *{transition-duration:.01s !important;transition-delay:0s !important;animation:none !important}}
.elx-skip{position:absolute;left:0;right:0;bottom:calc(env(safe-area-inset-bottom,0px) + 18px);text-align:center;font-family:var(--font-mono);font-size:10.5px;letter-spacing:.3em;text-transform:uppercase;color:rgba(200,240,255,.55);opacity:0;pointer-events:none}
.elx.awake .elx-skip{animation:elx-skip 7.2s ease forwards}
.elx.done .elx-skip{animation:none;opacity:0}
@keyframes elx-skip{0%{opacity:0}12%{opacity:1}85%{opacity:1}100%{opacity:0}}
.elx-row{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;max-width:100%}
.elx-pick{color:#bdf6ff;border:1px solid rgba(0,240,255,.35)}
/*ELX-CSS-END*/
</style>`);

/* ==========================================================================
   ELYOS SYSTEM — Lecture immersive du livre-jeu
   Repris du mode immersif de « La Sainte Bible · Darby » (même auteur) :
   le texte s’écrit sous les yeux du lecteur, paragraphe après paragraphe.
     Toucher / clic / Espace / Entrée / →  : termine le paragraphe, puis passe au suivant
     ← : paragraphe précédent      A : avance automatique      Échap : quitter
   À la fin d’un passage, les choix s’affichent dans le cadre : on lit tout le
   tome sans quitter le mode immersif. Les combats se jouent dans la vue normale.
   ========================================================================== */
const IMM_THEMES = {
  systeme: { nom: 'Système', font: "'Zen Kaku Gothic New', 'Barlow', sans-serif" },
  nuit: { nom: 'Nuit', font: "'Zen Kaku Gothic New', 'Barlow', sans-serif" },
  sable: { nom: 'Sable', font: "'Zen Kaku Gothic New', 'Barlow', sans-serif" },
  parchemin: { nom: 'Parchemin', font: "'IM Fell DW Pica', 'Spectral', serif" },
  celeste: { nom: 'Céleste', font: "'Cormorant Garamond', 'Spectral', serif" }
};
const IMM_SPEEDS = [{ v: 22, nom: 'Lente' }, { v: 40, nom: 'Normale' }, { v: 80, nom: 'Rapide' }, { v: 0, nom: 'Instantanée' }];
const IMM = { root: null, paras: [], pi: 0, typed: 0, typing: false, raf: 0, lastT: 0, acc: 0, autoT: 0, ac: null, node: null, open: false };

function immOpts() {
  state.reader = state.reader || {};
  const o = state.reader.imm = state.reader.imm || {};
  if (!IMM_THEMES[o.theme]) o.theme = 'systeme';
  if (!IMM_SPEEDS.some(s => s.v === o.speed)) o.speed = 40;
  if (typeof o.sound !== 'boolean') o.sound = false;
  if (typeof o.auto !== 'boolean') o.auto = false;
  return o;
}
function immReduced() { return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
function immPlain(s) { return String(s || '').replace(/\{nom\}/g, (state.profile && state.profile.name) || 'personne'); }

/* Paragraphes du passage en cours, dans l’ordre où la vue normale les montre */
function immParas() {
  const T = curTome(), S = TS(T.id), G = state.story;
  if (S.pending) return [];
  const n = ALL_NODES[S.node] || ALL_NODES[T.start];
  const chap = chapOf(n), out = [];
  if (chap.start === n.id && chap.verse) out.push({ verse: true, t: `« ${chap.verse} »`, ref: chap.ref });
  const add = list => (list || []).forEach(p => {
    if (typeof p === 'string') out.push({ t: immPlain(p) });
    else if (p.sys) { if (!p.if || checkReq(p.if)) out.push({ sys: true, t: immPlain(p.sys) }); }
    else if (p.if && checkReq(p.if)) out.push({ t: immPlain(p.t) });
  });
  add(n.text);
  const won = n.combat && G.combats[n.id] && G.combats[n.id].won;
  if (won) { out.push({ t: immPlain(n.combat.win), em: true }); add(n.after); }
  return out;
}

/* ---------- Ouverture / fermeture ---------- */
function immOpen(keepPos) {
  if (typeof document === 'undefined' || !document.body) return;
  if (!IMM.root) immBuild();
  const S = TS();
  const nodeId = S.pending ? 'pending:' + S.pending : S.node;
  const same = keepPos && IMM.node === nodeId;
  IMM.node = nodeId;
  IMM.paras = immParas();
  if (!same) IMM.pi = 0;
  IMM.open = true;
  IMM.root.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  immTheme();
  immHeader();
  if (!IMM.paras.length) { immEnd(); }
  else immShow(Math.min(IMM.pi, IMM.paras.length - 1), true);
  IMM.root.focus({ preventScroll: true });
}
function immClose() {
  if (!IMM.root) return;
  immStop(); clearTimeout(IMM.autoT);
  IMM.root.classList.add('hidden');
  document.body.style.overflow = '';
  IMM.open = false;
  render();
  const art = document.getElementById('story-node');
  if (art && art.scrollIntoView) art.scrollIntoView({ block: 'start' });
}

/* ---------- Interface ---------- */
function immBuild() {
  const r = document.createElement('div');
  r.id = 'imm'; r.className = 'imm hidden'; r.tabIndex = -1;
  r.setAttribute('role', 'dialog'); r.setAttribute('aria-label', 'Lecture immersive');
  r.innerHTML = `
    <div class="imm-bg" aria-hidden="true"></div>
    <header class="imm-top">
      <div class="imm-bar"><span class="imm-sq"></span><span>LECTURE</span><span class="imm-bar-sep"></span><span data-head class="imm-head"></span></div>
      <div class="imm-tools">
        <button type="button" data-act="auto" class="imm-btn" title="Avance automatique (A)">AUTO</button>
        <button type="button" data-act="speed" class="imm-btn" title="Vitesse d’écriture"></button>
        <button type="button" data-act="sound" class="imm-btn" title="Son du texte"></button>
        <button type="button" data-act="theme" class="imm-btn" title="Ambiance"></button>
        <button type="button" data-act="close" class="imm-btn imm-x" title="Quitter (Échap)" aria-label="Quitter la lecture immersive">✕</button>
      </div>
    </header>
    <main class="imm-stage" data-stage>
      <div class="imm-history" data-history aria-hidden="true"></div>
      <section class="imm-box" data-box>
        <div class="imm-box-head"><span data-ref></span><span class="imm-dots" aria-hidden="true">▪ ▪ ▪</span></div>
        <p class="imm-text"><span data-typed></span><span class="imm-cursor" aria-hidden="true">■</span></p>
        <p class="sr-only" aria-live="polite" data-live></p>
      </section>
      <div class="imm-hint" data-hint>▶ TOUCHER POUR CONTINUER</div>
      <section class="imm-end hidden" data-end></section>
    </main>
    <footer class="imm-foot">
      <div class="imm-progress"><i data-progress></i></div>
      <div class="imm-foot-row"><span data-count></span><span class="imm-keys">ESPACE · ← → · A · ÉCHAP</span></div>
    </footer>`;
  document.body.appendChild(r);
  IMM.root = r;
  r.querySelector('[data-stage]').addEventListener('click', e => { if (e.target.closest('[data-end]')) return; immAdvance(); });
  r.querySelector('.imm-tools').addEventListener('click', e => {
    const b = e.target.closest('[data-act]'); if (!b) return;
    e.stopPropagation();
    const o = immOpts();
    switch (b.dataset.act) {
      case 'auto': o.auto = !o.auto; if (o.auto && !IMM.typing && r.querySelector('[data-end]').classList.contains('hidden')) immAuto(); else clearTimeout(IMM.autoT); break;
      case 'speed': { const i = IMM_SPEEDS.findIndex(s => s.v === o.speed); o.speed = IMM_SPEEDS[(i + 1) % IMM_SPEEDS.length].v; break; }
      case 'sound': o.sound = !o.sound; if (o.sound) immTick(true); break;
      case 'theme': { const k = Object.keys(IMM_THEMES); o.theme = k[(k.indexOf(o.theme) + 1) % k.length]; immTheme(); break; }
      case 'close': immClose(); return;
    }
    save(); immTools();
  });
  r.querySelector('[data-end]').addEventListener('click', e => {
    const b = e.target.closest('[data-imm]'); if (!b || b.disabled) return;
    e.stopPropagation();
    const k = b.dataset.imm;
    if (k === 'choice') { handlers.choice(b); immOpen(); }
    else if (k === 'pending') { handlers['continue-pending'](); immOpen(); }
    else if (k === 'restart') immShow(0);
    else if (k === 'fight' || k === 'quit') immClose();
  });
  document.addEventListener('keydown', e => {
    if (!IMM.open) return;
    const endOpen = !IMM.root.querySelector('[data-end]').classList.contains('hidden');
    if (['Space', 'Enter', 'ArrowRight', 'ArrowDown', 'PageDown'].includes(e.code)) {
      if (endOpen) return; /* le menu se pilote au clavier comme des boutons */
      e.preventDefault(); immAdvance();
    } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.code)) { if (!endOpen || IMM.paras.length) { e.preventDefault(); immBack(); } }
    else if (e.code === 'Escape') { e.preventDefault(); immClose(); }
    else if (e.code === 'KeyA') { const o = immOpts(); o.auto = !o.auto; save(); immTools(); if (o.auto && !IMM.typing && !endOpen) immAuto(); }
  });
}
function immTheme() {
  const o = immOpts(), r = IMM.root;
  r.className = r.className.replace(/\btheme-\S+/g, '').trim() + ' theme-' + o.theme;
  r.style.setProperty('--imm-font', IMM_THEMES[o.theme].font);
  immTools();
}
function immTools() {
  const o = immOpts(), $ = s => IMM.root.querySelector(s);
  $('[data-act="auto"]').classList.toggle('on', o.auto);
  $('[data-act="speed"]').textContent = 'VITESSE : ' + (IMM_SPEEDS.find(s => s.v === o.speed) || IMM_SPEEDS[1]).nom.toUpperCase();
  $('[data-act="sound"]').textContent = o.sound ? 'SON : OUI' : 'SON : NON';
  $('[data-act="theme"]').textContent = IMM_THEMES[o.theme].nom.toUpperCase();
}
function immHeader() {
  const T = curTome(), S = TS(T.id), n = ALL_NODES[S.pending || S.node] || ALL_NODES[T.start], chap = chapOf(n);
  IMM.root.querySelector('[data-head]').textContent = `TOME ${T.num} · ${chap.title}`.toUpperCase();
}

/* ---------- Écriture du texte ---------- */
function immShow(i, first) {
  const r = IMM.root, p = IMM.paras[i];
  clearTimeout(IMM.autoT);
  r.querySelector('[data-end]').classList.add('hidden');
  r.querySelector('[data-box]').classList.remove('hidden');
  r.querySelector('[data-hint]').classList.remove('hidden');
  IMM.pi = i;
  const total = IMM.paras.length;
  r.querySelector('[data-ref]').textContent = p.sys ? '[ SYSTÈME ]' : p.verse ? (p.ref || 'VERSET').toUpperCase() : `PARAGRAPHE ${String(i + 1).padStart(2, '0')}`;
  r.querySelector('[data-count]').textContent = `${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  r.querySelector('[data-progress]').style.width = ((i + 1) / Math.max(1, total)) * 100 + '%';
  r.querySelector('[data-history]').innerHTML = IMM.paras.slice(Math.max(0, i - 2), i)
    .map((q, k, arr) => `<p class="imm-past" style="opacity:${(k + 1) / (arr.length + 1) * 0.55}">${esc(q.t)}</p>`).join('');
  r.querySelector('[data-hint]').classList.add('dim');
  const box = r.querySelector('[data-box]');
  box.classList.toggle('is-sys', !!p.sys); box.classList.toggle('is-verse', !!p.verse); box.classList.toggle('is-em', !!p.em);
  if (!immReduced() && !first) { box.classList.remove('glitch'); void box.offsetWidth; box.classList.add('glitch'); }
  IMM.typed = 0; IMM.acc = 0;
  r.querySelector('[data-typed]').textContent = '';
  r.querySelector('[data-live]').textContent = '';
  if (immOpts().speed === 0 || immReduced()) { immFinish(); return; }
  IMM.typing = true; r.classList.add('is-typing');
  IMM.lastT = performance.now();
  cancelAnimationFrame(IMM.raf); IMM.raf = requestAnimationFrame(immStep);
}
function immStep(t) {
  const text = IMM.paras[IMM.pi].t, o = immOpts();
  const dt = Math.min(100, t - IMM.lastT); IMM.lastT = t;
  IMM.acc += dt * o.speed / 1000;
  let n = 0;
  while (IMM.acc >= 1 && IMM.typed < text.length) {
    IMM.typed++; IMM.acc -= 1; n++;
    if (/[.;:!?…]/.test(text[IMM.typed - 1])) { IMM.acc -= o.speed * 0.12; break; } /* pause brève après la ponctuation forte */
  }
  if (n) {
    IMM.root.querySelector('[data-typed]').textContent = text.slice(0, IMM.typed);
    if (o.sound && /\S/.test(text[IMM.typed - 1]) && IMM.typed % 2) immTick();
  }
  if (IMM.typed >= text.length) { immFinish(); return; }
  IMM.raf = requestAnimationFrame(immStep);
}
function immStop() { cancelAnimationFrame(IMM.raf); IMM.typing = false; if (IMM.root) IMM.root.classList.remove('is-typing'); }
function immFinish() {
  immStop();
  const text = IMM.paras[IMM.pi].t;
  IMM.typed = text.length;
  IMM.root.querySelector('[data-typed]').textContent = text;
  IMM.root.querySelector('[data-live]').textContent = text;
  IMM.root.querySelector('[data-hint]').classList.remove('dim');
  if (immOpts().auto) immAuto();
}
function immAuto() {
  clearTimeout(IMM.autoT);
  const len = ((IMM.paras[IMM.pi] || {}).t || '').length;
  IMM.autoT = setTimeout(() => { if (IMM.open && !IMM.typing) immAdvance(); }, Math.min(7000, 1400 + len * 22));
}
function immAdvance() {
  if (!IMM.paras.length) return;
  if (IMM.typing) { immFinish(); return; }
  if (IMM.pi < IMM.paras.length - 1) immShow(IMM.pi + 1);
  else immEnd();
}
function immBack() {
  if (!IMM.paras.length) return;
  if (!IMM.root.querySelector('[data-end]').classList.contains('hidden')) { immShow(IMM.paras.length - 1); return; }
  if (IMM.pi > 0) immShow(IMM.pi - 1);
}
/* Petit « tic » synthétisé (désactivé par défaut) */
function immTick(test) {
  try {
    IMM.ac = IMM.ac || new (window.AudioContext || window.webkitAudioContext)();
    const a = IMM.ac, o = a.createOscillator(), g = a.createGain();
    o.type = 'square'; o.frequency.value = 1500 + Math.random() * 300;
    g.gain.setValueAtTime(test ? 0.04 : 0.018, a.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + 0.025);
    o.connect(g).connect(a.destination); o.start(); o.stop(a.currentTime + 0.03);
  } catch (e) { /* audio indisponible */ }
}

/* ---------- Fin du passage : choix, combat, porte de niveau, fin ---------- */
function immEnd() {
  clearTimeout(IMM.autoT); immStop();
  const r = IMM.root, T = curTome(), S = TS(T.id), G = state.story;
  const n = ALL_NODES[S.node] || ALL_NODES[T.start];
  r.querySelector('[data-box]').classList.add('hidden');
  r.querySelector('[data-hint]').classList.add('hidden');
  r.querySelector('[data-history]').innerHTML = IMM.paras.slice(-1).map(q => `<p class="imm-past" style="opacity:.4">${esc(q.t)}</p>`).join('');
  let title = 'QUE FAITES-VOUS ?', msg = '', items = [];
  if (S.pending) {
    const pc = chapOf(ALL_NODES[S.pending]), lv = curLevel(), ok = lv >= pc.level;
    title = ok ? 'ACCÈS ACCORDÉ' : 'ACCÈS REFUSÉ';
    msg = ok ? `${pc.title}. Vous êtes prêt.` : `${pc.title}. Le Système vous juge trop faible : niveau ${pc.level} requis, vous êtes niveau ${lv}. Chaque séance et chaque jour de macros vous en rapprochent.`;
    if (ok) items.push(`<li><button type="button" data-primary data-imm="pending">▶ Entrer</button></li>`);
  } else if (n.combat && !(G.combats[n.id] && G.combats[n.id].won)) {
    title = 'COMBAT';
    msg = `${n.combat.name} vous barre la route. Le combat se joue dans la vue normale du récit.`;
    items.push(`<li><button type="button" data-primary data-imm="fight">⚔ Affronter : ${esc(n.combat.name)}</button></li>`);
  } else if (n.ending) {
    const E = T.endings[n.ending] || {};
    title = T.id === 'I' ? `FIN ${n.ending}` : `TOME ${T.num} · ISSUE ${n.ending}`;
    msg = `${E.title || ''}${E.verse ? ` — « ${E.verse} » (${E.ref})` : ''}`;
  } else if (n.choices) {
    n.choices.forEach((c, i) => {
      const ok = checkReq(c.req);
      if (!ok && c.hidden) return;
      if (!ok && c.sealed) { items.push(`<li><button type="button" disabled class="imm-sealed">🔒 ${esc(c.sealedLabel || 'Une voie scellée')}</button></li>`); return; }
      if (!ok) return;
      const seen = G.picked[`${n.id}:${i}`];
      items.push(`<li><button type="button" ${items.length ? '' : 'data-primary'} data-imm="choice" data-i="${i}">▶ ${esc(c.t)}${seen ? ' <span class="imm-seen">· déjà choisi</span>' : ''}</button></li>`);
    });
  }
  const end = r.querySelector('[data-end]');
  end.innerHTML = `
    <div class="imm-bar imm-bar-sm"><span class="imm-sq"></span><span>${esc(title)}</span></div>
    ${msg ? `<p class="imm-end-msg">${esc(msg)}</p>` : ''}
    <ul class="imm-menu">
      ${items.join('')}
      ${IMM.paras.length ? `<li><button type="button" data-imm="restart">↺ Relire ce passage</button></li>` : ''}
      <li><button type="button" data-imm="quit">✕ Quitter le mode immersif</button></li>
    </ul>`;
  end.classList.remove('hidden');
  r.querySelector('[data-count]').textContent = n.ending ? 'FIN' : 'FIN DU PASSAGE';
  r.querySelector('[data-progress]').style.width = '100%';
  const first = end.querySelector('button:not([disabled])'); if (first) first.focus({ preventScroll: true });
}

Object.assign(handlers, { 'imm-open': () => immOpen() });

if (typeof document !== 'undefined' && document.head) document.head.insertAdjacentHTML('beforeend', `<style>
.imm{position:fixed;inset:0;z-index:110;display:flex;flex-direction:column;background:var(--n-bg);color:var(--n-ink);font-family:var(--imm-font,'Zen Kaku Gothic New',sans-serif);padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);outline:none;-webkit-font-smoothing:antialiased}
.imm.hidden{display:none}
.imm *,.imm *::before,.imm *::after{box-sizing:border-box}
.imm.theme-systeme{--n-bg:#08080d;--n-ink:#cfeefc;--n-box:rgba(10,14,24,.86);--n-shadow:rgba(0,240,255,.16);--n-line:rgba(0,240,255,.26);--n-acc:#00f0ff}
.imm.theme-sable{--n-bg:#cdc7b0;--n-ink:#4a473e;--n-box:rgba(220,215,197,.72);--n-shadow:rgba(74,71,62,.22);--n-line:rgba(74,71,62,.28);--n-acc:#4a473e}
.imm.theme-nuit{--n-bg:#0f0f0e;--n-ink:#dad6c7;--n-box:rgba(26,26,24,.86);--n-shadow:rgba(218,214,199,.10);--n-line:rgba(218,214,199,.22);--n-acc:#dad6c7}
.imm.theme-parchemin{--n-bg:#13161b;--n-ink:#d8cdb0;--n-box:rgba(25,29,36,.88);--n-shadow:rgba(168,143,92,.22);--n-line:rgba(168,143,92,.35);--n-acc:#d8cdb0}
.imm-bg{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.imm-bg::before{content:'';position:absolute;inset:0;background-image:linear-gradient(var(--n-line) 1px,transparent 1px),linear-gradient(90deg,var(--n-line) 1px,transparent 1px);background-size:64px 64px;opacity:.22}
.imm-bg::after{content:'';position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.035) 0 1px,transparent 1px 3px),radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,.18) 100%)}
.theme-systeme .imm-bg::before{opacity:.14}
.theme-systeme .imm-bg::after{background:repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 1px,transparent 1px 3px),radial-gradient(ellipse 70% 50% at 50% 0%,rgba(139,92,246,.16),transparent 70%),radial-gradient(ellipse at center,transparent 50%,rgba(0,0,0,.65) 100%)}
.theme-nuit .imm-bg::after{background:repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 1px,transparent 1px 3px),radial-gradient(ellipse at center,transparent 50%,rgba(0,0,0,.6) 100%)}
.theme-parchemin .imm-bg::after{background:repeating-linear-gradient(0deg,rgba(0,0,0,.12) 0 1px,transparent 1px 3px),radial-gradient(ellipse at 50% 40%,rgba(168,143,92,.08),transparent 60%),radial-gradient(ellipse at center,transparent 50%,rgba(0,0,0,.55) 100%)}
.imm-top{position:relative;display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:18px 24px 8px;flex-wrap:wrap}
.imm-bar{display:inline-flex;align-items:center;gap:10px;background:var(--n-ink);color:var(--n-bg);padding:6px 16px 6px 10px;font-size:12px;letter-spacing:.26em;text-transform:uppercase;max-width:100%}
.theme-systeme .imm-bar{background:linear-gradient(90deg,#7ff6ff,#00f0ff 50%,#a48bff);color:#05050a}
.imm-bar-sm{font-size:11px;margin-bottom:14px}
.imm-sq{width:9px;height:9px;background:currentColor;display:inline-block;flex:none}
.imm-bar-sep{width:1px;height:12px;background:currentColor;opacity:.45}
.imm-head{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:.18em}
.imm-tools{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}
.imm-btn{border:1px solid var(--n-ink);background:transparent;color:inherit;padding:5px 10px;font:inherit;font-size:11px;letter-spacing:.14em;cursor:pointer;transition:background .12s,color .12s}
.imm-btn:hover,.imm-btn.on{background:var(--n-ink);color:var(--n-bg)}
.imm-x{padding:5px 9px}
.imm-stage{position:relative;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px 24px;cursor:pointer;user-select:none;-webkit-user-select:none;min-height:0;overflow:hidden}
.imm-history{width:min(880px,100%);margin-bottom:18px}
.imm-past{font-size:clamp(14px,1.5vw,17px);line-height:1.7;margin:0 0 .5em;letter-spacing:.02em}
.imm-box{position:relative;width:min(880px,100%);max-height:62vh;overflow:auto;border:1px solid var(--n-ink);background:var(--n-box);padding:16px 26px 26px;box-shadow:6px 6px 0 var(--n-shadow)}
.imm-box::before,.imm-box::after{content:'';position:absolute;width:7px;height:7px;background:var(--n-ink)}
.imm-box::before{top:-4px;left:-4px}.imm-box::after{bottom:-4px;right:-4px}
.theme-systeme .imm-box{border-color:rgba(0,240,255,.55);box-shadow:0 0 0 1px rgba(0,240,255,.12),0 0 40px rgba(0,240,255,.10),6px 6px 0 var(--n-shadow)}
.theme-systeme .imm-box::before,.theme-systeme .imm-box::after{background:var(--n-acc);box-shadow:0 0 8px var(--n-acc)}
.theme-parchemin .imm-box{border:3px double var(--n-ink)}
.imm-box-head{display:flex;justify-content:space-between;align-items:center;font-size:11px;letter-spacing:.24em;padding-bottom:8px;margin-bottom:16px;border-bottom:1px solid var(--n-line)}
.imm-dots{letter-spacing:.3em;opacity:.7}
.imm-text{font-size:clamp(19px,2.3vw,27px);line-height:1.78;letter-spacing:.025em;min-height:3.6em;margin:0;white-space:pre-line}
.imm-box.is-sys .imm-text{font-family:'JetBrains Mono',monospace;font-size:clamp(15px,1.9vw,21px);letter-spacing:.04em;color:var(--n-acc)}
.imm-box.is-sys .imm-box-head{color:var(--n-acc)}
.imm-box.is-verse .imm-text,.imm-box.is-em .imm-text{font-style:italic}
.theme-parchemin .imm-text{letter-spacing:.01em}
.imm-cursor{display:inline-block;margin-left:3px;font-size:.62em;vertical-align:.12em;animation:imm-blink 1s steps(1) infinite}
.theme-systeme .imm-cursor{color:var(--n-acc);text-shadow:0 0 8px var(--n-acc)}
.is-typing .imm-cursor{animation:none}
.imm-hint{margin-top:20px;font-size:11px;letter-spacing:.32em;animation:imm-pulse 1.8s ease-in-out infinite}
.imm-hint.dim{opacity:.12;animation:none}
.imm-end{width:min(620px,100%);max-height:70vh;overflow:auto;border:1px solid var(--n-ink);background:var(--n-box);padding:20px 22px 14px;box-shadow:6px 6px 0 var(--n-shadow);cursor:default}
.imm-end-msg{font-size:15px;line-height:1.6;margin:0 0 14px}
.imm-menu{list-style:none;margin:0;padding:0}
.imm-menu li+li{border-top:1px solid var(--n-line)}
.imm-menu button{width:100%;text-align:left;background:transparent;color:inherit;border:0;font:inherit;font-size:15px;letter-spacing:.04em;line-height:1.45;padding:12px 12px 12px 26px;position:relative;cursor:pointer}
.imm-menu button::before{content:'';position:absolute;left:9px;top:50%;width:7px;height:7px;margin-top:-3.5px;background:currentColor;opacity:0}
.imm-menu button:hover:not([disabled]),.imm-menu button:focus-visible{background:var(--n-ink);color:var(--n-bg);outline:none}
.imm-menu button:hover::before,.imm-menu button:focus-visible::before{opacity:1}
.imm-menu button[disabled]{opacity:.45;cursor:not-allowed}
.imm-seen{opacity:.6;font-size:12px}
.imm-foot{position:relative;padding:8px 24px 18px}
.imm-progress{height:2px;background:var(--n-line)}
.imm-progress i{display:block;height:100%;background:var(--n-ink);transition:width .3s}
.theme-systeme .imm-progress i{background:linear-gradient(90deg,var(--n-acc),#8b5cf6);box-shadow:0 0 8px var(--n-acc)}
.imm-foot-row{display:flex;justify-content:space-between;font-size:10.5px;letter-spacing:.22em;margin-top:8px;opacity:.85}
.imm-box.glitch{animation:imm-glitch .3s steps(2,end)}
.imm-box.glitch .imm-text{animation:imm-split .3s steps(3,end)}
@keyframes imm-blink{50%{opacity:0}}
@keyframes imm-pulse{50%{opacity:.35}}
@keyframes imm-glitch{0%{transform:translate(0,0);clip-path:inset(0 0 0 0)}20%{transform:translate(-6px,1px);clip-path:inset(12% 0 58% 0)}40%{transform:translate(5px,-1px);clip-path:inset(62% 0 8% 0)}60%{transform:translate(-2px,0);clip-path:inset(30% 0 35% 0)}100%{transform:translate(0,0);clip-path:inset(0 0 0 0)}}
@keyframes imm-split{0%{text-shadow:3px 0 0 var(--n-line),-3px 0 0 var(--n-shadow)}100%{text-shadow:none}}
@media (max-width:640px){.imm-top{padding:12px 14px 6px}.imm-stage{padding:10px 14px}.imm-box{padding:12px 16px 20px;box-shadow:4px 4px 0 var(--n-shadow)}.imm-foot{padding:6px 14px 14px}.imm-keys{display:none}.imm-history{display:none}.imm-btn{font-size:10px;padding:4px 7px;letter-spacing:.1em}}
@media (prefers-reduced-motion:reduce){.imm-box.glitch,.imm-box.glitch .imm-text,.imm-hint,.imm-cursor{animation:none !important}}
.imm .hidden{display:none !important}
.imm.theme-celeste{--n-bg:#f4f7fc;--n-ink:#2c3a55;--n-box:rgba(255,255,255,.55);--n-shadow:rgba(201,162,79,.18);--n-line:rgba(201,162,79,.35);--n-acc:#8a6a26;background:radial-gradient(ellipse 120% 70% at 50% -10%,#fffaf0 0%,#fdf3dc 18%,#eaf1fb 48%,#d9e6f7 75%,#c9dbf2 100%)}
.theme-celeste .imm-bg::before{background-image:none;opacity:1;background:conic-gradient(from 180deg at 50% -8%,transparent 0deg,rgba(255,236,190,.38) 8deg,transparent 16deg,rgba(255,236,190,.28) 26deg,transparent 36deg,rgba(255,236,190,.34) 48deg,transparent 60deg,transparent 300deg,rgba(255,236,190,.34) 312deg,transparent 324deg,rgba(255,236,190,.28) 334deg,transparent 344deg,rgba(255,236,190,.38) 352deg,transparent 360deg);animation:imm-rays 40s linear infinite alternate;transform-origin:50% 0}
.theme-celeste .imm-bg::after{background:radial-gradient(ellipse 40% 12% at 18% 82%,rgba(255,255,255,.95),transparent 70%),radial-gradient(ellipse 35% 10% at 78% 88%,rgba(255,255,255,.9),transparent 70%),radial-gradient(ellipse 50% 14% at 50% 100%,rgba(255,255,255,1),transparent 70%),radial-gradient(1.5px 1.5px at 20% 30%,rgba(214,178,96,.9),transparent),radial-gradient(1.5px 1.5px at 70% 22%,rgba(214,178,96,.8),transparent),radial-gradient(1px 1px at 40% 60%,rgba(214,178,96,.8),transparent),radial-gradient(1px 1px at 85% 55%,rgba(214,178,96,.7),transparent),radial-gradient(1.2px 1.2px at 10% 50%,rgba(214,178,96,.7),transparent);animation:imm-float 12s ease-in-out infinite alternate}
.theme-celeste .imm-bar{background:linear-gradient(100deg,#b8913e,#e8cf8a 45%,#b8913e);color:#fffdf6}
.theme-celeste .imm-box{border:1px solid rgba(201,162,79,.55);border-radius:18px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 0 0 6px rgba(255,255,255,.35),0 20px 60px -20px rgba(120,150,200,.45),0 0 80px rgba(255,236,190,.45)}
.theme-celeste .imm-box::before,.theme-celeste .imm-box::after{width:9px;height:9px;border-radius:50%;background:#d4b062;box-shadow:0 0 10px #f3dc9a}
.theme-celeste .imm-text{font-size:clamp(22px,2.7vw,31px);line-height:1.7;letter-spacing:.01em;font-weight:500}
.theme-celeste .imm-btn{border-color:rgba(44,58,85,.35);border-radius:999px}
.theme-celeste .imm-btn:hover,.theme-celeste .imm-btn.on{background:#2c3a55;color:#fffdf6}
.theme-celeste .imm-end{border-radius:18px;border-color:rgba(201,162,79,.55);box-shadow:0 20px 60px -20px rgba(120,150,200,.45),0 0 60px rgba(255,236,190,.4)}
.theme-celeste .imm-menu button:hover:not([disabled]),.theme-celeste .imm-menu button:focus-visible{background:rgba(44,58,85,.9)}
.theme-celeste .imm-cursor{color:#c9a24f;text-shadow:0 0 8px #f3dc9a}
@keyframes imm-rays{from{transform:rotate(-4deg)}to{transform:rotate(4deg)}}
@keyframes imm-float{from{transform:translateY(0)}to{transform:translateY(-14px)}}
@media (prefers-reduced-motion:reduce){.theme-celeste .imm-bg::before,.theme-celeste .imm-bg::after{animation:none}}
.imm-open-btn{width:100%;justify-content:center}
</style>`);

/* ==========================================================================
   ELYOS SYSTEM — Illustrations des objets
   Chaque objet du jeu a son image, dessinée par le code (SVG) : armes et
   armures (type × rareté), montures, instruments, demeures, tenues,
   accessoires, auras, titres, puces et matériaux.
   Les tenues partagent leur coupe et leurs couleurs avec le personnage 3D.
   ========================================================================== */

/* Métal par rareté : [clair, moyen, sombre] */
const ART_METAL = [
  ['#d3d7df', '#868b96', '#3d4048'], ['#d8eadd', '#86a895', '#39534a'], ['#d9eeff', '#7fa9cf', '#2c4864'],
  ['#ebe2ff', '#a48ae0', '#44337a'], ['#fff3c4', '#e2b443', '#8a5a0c'], ['#7a7085', '#2c2633', '#0d0b10'], ['#ffffff', '#fff1c4', '#d6b45a'], ['#ffffff', '#bff6ff', '#4aa8b8']
];
/* Tenues : coupe + [principale, sombre, liseré] — utilisées aussi par le personnage 3D */
const TENUES = {
  ten_e: { cut: 'uniform', c: ['#3b4452', '#222831', '#19c8d8'] },
  ten_survet: { cut: 'track', c: ['#2f5f8f', '#1b2a3b', '#e9edf2'] },
  ten_tablier: { cut: 'apron', c: ['#7a5a3a', '#4a3421', '#efe8d6'] },
  ten_breches: { cut: 'coat', c: ['#5a4634', '#2c231b', '#9a774c'] },
  ten_brancard: { cut: 'blouse', c: ['#dfe7ea', '#9db3bd', '#c0392b'] },
  ten_galerie: { cut: 'robe', c: ['#5d3f80', '#2e1f42', '#dab66c'] },
  ten_stratege: { cut: 'suit', c: ['#80858e', '#3b3e45', '#d5d8de'] },
  ten_garde: { cut: 'cape', c: ['#3f5d78', '#22303f', '#bccad6'] },
  ten_ysolde: { cut: 'coat', c: ['#8b8e93', '#55585e', '#6e7176'] },
  ten_parade: { cut: 'plate', c: ['#bcc5cf', '#5b6773', '#3d7ad6'] },
  ten_orchestre: { cut: 'tail', c: ['#17171d', '#0a0a0e', '#f3f3f3'] },
  ten_lazaret: { cut: 'blouse', c: ['#f4f6f7', '#c8d1d5', '#6fb0c9'] },
  ten_juge: { cut: 'plate', c: ['#b58e4c', '#5c431c', '#ecd491'] },
  ten_cendre: { cut: 'coat', c: ['#575250', '#2a2725', '#ff7a45'] },
  ten_froide: { cut: 'robe', c: ['#cfe9ff', '#7fb4e0', '#ffffff'] },
  ten_monarque: { cut: 'plate', c: ['#1c1c25', '#0c0c12', '#d8dce5'] },
  ten_givre: { cut: 'robe', c: ['#e0f5ff', '#8fd0f0', '#ffffff'] },
  ten_peste: { cut: 'coat', c: ['#f0f0ec', '#b8b8b0', '#7d8a6a'] },
  ten_lumiere: { cut: 'robe', c: ['#fff8dc', '#f0dc9c', '#ffffff'], glow: true },
  ten_toujours: { cut: 'robe', c: ['#f8feff', '#bfe9f0', '#9ffcff'], glow: true },
  ten_lame_azur: { cut: 'plate', c: ["#2f5fae", "#152a52", "#e8d48a"] },
  ten_ronin: { cut: 'robe', c: ["#2a2a35", "#121218", "#c23b3b"] },
  ten_infiltration: { cut: 'suit', c: ["#22262e", "#0d0f13", "#7a5cff"] },
  ten_chancelier: { cut: 'robe', c: ["#e9e2cf", "#a89a72", "#c9a441"] },
  ten_corsaire: { cut: 'coat', c: ["#3a1f4a", "#1b0f24", "#e2b443"] },
  ten_veneur: { cut: 'cape', c: ["#4d5a32", "#262d18", "#c9a46a"] },
  ten_oracle: { cut: 'robe', c: ["#d7dcef", "#8d93b5", "#6a7bd6"] },
  ten_daeva: { cut: 'plate', c: ["#f2ecd8", "#b6a77a", "#ffd56a"] },
  ten_abyssal: { cut: 'plate', c: ["#1a1238", "#0a0618", "#8b5cf6"] },
  ten_dragon: { cut: 'plate', c: ["#7a1a1a", "#3a0a0a", "#ff7a3c"] },
  ten_chaines: { cut: 'coat', c: ["#3d3d44", "#1b1b20", "#b9bcc6"] },
  ten_murmures: { cut: 'robe', c: ["#2e2a40", "#16131f", "#c8b6ff"] },
  ten_ombre_mon: { cut: 'coat', c: ["#14101e", "#07050c", "#6a3cff"] },
  ten_sang: { cut: 'tail', c: ["#5a0f1a", "#2a050b", "#d32f4a"] },
  ten_seraph: { cut: 'plate', c: ["#fffaf0", "#efe0b0", "#ffffff"], glow: true },
  ten_eternite: { cut: 'robe', c: ["#fff3d6", "#f0d79a", "#ffffff"], glow: true },
  ten_aube: { cut: 'cape', c: ["#ffe9b0", "#f4c36a", "#ffffff"], glow: true },
  ten_etoiles: { cut: 'coat', c: ["#1c2350", "#0b0f2a", "#fff1b8"], glow: true },
  ten_aion: { cut: 'plate', c: ["#f6f1e4", "#d8c48c", "#7fe0ff"], glow: true },
  ten_ascension: { cut: 'suit', c: ["#f0f4ff", "#b8c4e6", "#ffd56a"], glow: true },
  ten_roi: { cut: 'coat', c: ["#0e0b16", "#050308", "#c9a8ff"], glow: true }
};
const ART_ACC = { acc_lunettes: 'lunettes', acc_bandeau: 'bandeau', acc_couteau: 'couteau', acc_echarpe: 'echarpe', acc_medaille: 'medaille', acc_petrin: 'gant', acc_corbeau: 'masque', acc_avion: 'avion', acc_montre: 'montre', acc_gant: 'gant', acc_partition: 'partition', acc_lanterne: 'lanterne', acc_verre: 'boucle', acc_plume: 'plume', acc_monocle: 'monocle', acc_couronne: 'couronne', acc_croc: 'croc', acc_clefantome: 'cle', acc_mesures: 'broche', acc_toujours: 'couronne', acc_kitsune: 'masque', acc_jade: 'broche', acc_lunettes_or: 'lunettes', acc_agrafe: 'broche', acc_phenix: 'plume', acc_gant_runes: 'gant', acc_cle_abysses: 'cle', acc_epines: 'couronne', acc_oeil: 'monocle', acc_croc_dragon: 'croc', acc_lanterne_ames: 'lanterne', acc_echarpe_vent: 'echarpe', acc_medaille_heros: 'medaille', acc_boucle_sang: 'boucle', acc_couronne_aube: 'couronne', acc_aureole: 'broche', acc_plume_aion: 'plume', acc_partition_eternelle: 'partition', acc_montre_temps: 'montre', acc_masque_roi: 'masque', acc_cle_monde: 'cle' };
const ART_AURA = { aur_pr: ['#fff6e0', 'ray'], aur_contre: ['#9a7cd8', 'dust'], aur_wb6: ['#e8c48a', 'dust'], aur_wb7: ['#ffd56a', 'spark'], aur_wb8: ['#e8f6ff', 'snow'], aur_wb9: ['#d9a85a', 'wave'], aur_wb10: ['#7ad06a', 'leaf'], aur_wb16: ['#fff1b8', 'ray'], aur_lampe: ['#ffd27a', 'spark'], aur_soupe: ['#d9e2e6', 'steam'], aur_farine: ['#f3ecd9', 'dust'], aur_braise: ['#ff7a3c', 'flame'], aur_bruine: ['#7fb8d8', 'drop'], aur_bougie: ['#ffc861', 'flame'], aur_givre: ['#bfeaff', 'snow'], aur_ether: ['#38bdf8', 'bolt'], aur_pluie: ['#8fa9bd', 'drop'], aur_ombre: ['#8b5cf6', 'smoke'], aur_corbeaux: ['#3a3340', 'bird'], aur_chene: ['#7fae4e', 'leaf'], aur_sang: ['#d32f4a', 'drop'], aur_boreale: ['#5dffb5', 'wave'], aur_notes: ['#ffd479', 'note'], aur_abysses: ['#1f6f8f', 'wave'], aur_flammes: ['#5b4a6b', 'flame'], aur_tempete: ['#7ad7ff', 'bolt'], aur_aube: ['#ffe9b0', 'ray'], aur_toujours: ['#9ffcff', 'ray'], aur_sakura: ['#ffb7d0', 'leaf'], aur_lucioles: ['#e8ff7a', 'spark'], aur_neige: ['#eaf6ff', 'snow'], aur_eclairs: ['#4fb8ff', 'bolt'], aur_encre: ['#4a4a5a', 'smoke'], aur_runes: ['#c8b6ff', 'note'], aur_sable: ['#e0b870', 'dust'], aur_phenix: ['#ff7a2a', 'flame'], aur_dragon: ['#ff4d2a', 'flame'], aur_galaxie: ['#8a7bff', 'spark'], aur_ombres_mon: ['#5a3a90', 'smoke'], aur_maree: ['#2a9dd8', 'wave'], aur_lune_sang: ['#c2183a', 'drop'], aur_chaines: ['#b9bcc6', 'bolt'], aur_soleil: ['#ffd56a', 'ray'], aur_celeste: ['#fff1b8', 'ray'], aur_etoiles: ['#fff6d8', 'spark'], aur_aurore: ['#7fffd0', 'wave'], aur_seraph: ['#ffffff', 'leaf'], aur_regne: ['#6a3cff', 'smoke'], aur_ether_aion: ['#7fe0ff', 'bolt'] };
/* Skins d'armes : effet + [lame, lueur, effet 1, effet 2] — utilisés aussi par le moteur 3D */
const SKIN_FX = {
  skn_toujours: { fx: 'prism', c: ['#f8feff', '#9ffcff', '#ffffff', '#ffd56a'] },
  skn_braise: { fx: 'flame', c: ["#8a4a3a", "#ff7a3c", "#ff5a1a", "#ffc04a"] },
  skn_givre: { fx: 'frost', c: ["#cfe6f5", "#9fd8ff", "#bfeaff", "#ffffff"] },
  skn_ecume: { fx: 'water', c: ["#6fb0d8", "#4aa8ff", "#8fd0ff", "#ffffff"] },
  skn_lierre: { fx: 'leaf', c: ["#4f8a3a", "#7fd04a", "#6fbf3a", "#d8ff9a"] },
  skn_orage: { fx: 'bolt', c: ["#5a6a8a", "#7fc8ff", "#bfe4ff", "#ffffff"] },
  skn_vent: { fx: 'wind', c: ["#c8e8e0", "#9be8d0", "#e8fff8", "#ffffff"] },
  skn_suie: { fx: 'shadow', c: ["#2a2630", "#6a5a8a", "#14101c", "#8b5cf6"] },
  skn_feu: { fx: 'flame', c: ["#b0301a", "#ff5a1a", "#ff3414", "#ffc04a"] },
  skn_glace: { fx: 'frost', c: ["#bfe6ff", "#7fd0ff", "#9fe0ff", "#ffffff"] },
  skn_lumiere: { fx: 'light', c: ["#fff2c8", "#ffd56a", "#fff0c0", "#ffffff"] },
  skn_eau: { fx: 'water', c: ["#2a7ac8", "#3aa8ff", "#7fd0ff", "#e8f8ff"] },
  skn_lave: { fx: 'flame', c: ["#3a1208", "#ff4a0a", "#ff2a00", "#ffb020"] },
  skn_ombre: { fx: 'shadow', c: ["#14101c", "#7a3cff", "#0a0612", "#b48cff"] },
  skn_sang: { fx: 'blood', c: ["#5a0a14", "#ff2a4a", "#c2183a", "#ff6a7a"] },
  skn_jade: { fx: 'leaf', c: ["#2a8a5a", "#5affa8", "#3ad08a", "#d8ffe8"] },
  skn_tonnerre: { fx: 'bolt', c: ["#2a3a7a", "#6ab8ff", "#d8f0ff", "#ffffff"] },
  skn_maree: { fx: 'water', c: ["#1a5aa8", "#3ac8ff", "#9fe8ff", "#ffffff"] },
  skn_cristal: { fx: 'frost', c: ["#e8f6ff", "#bfe0ff", "#ffffff", "#9fd8ff"] },
  skn_cendre: { fx: 'flame', c: ["#4a4440", "#ff8a4a", "#8a7a70", "#ffb070"] },
  skn_tempete: { fx: 'wind', c: ["#8ab8c8", "#b8f0ff", "#ffffff", "#9be8d0"] },
  skn_cerisier: { fx: 'leaf', c: ["#f7c3d6", "#ff8ab8", "#ffb7d0", "#ffffff"] },
  skn_aurore: { fx: 'light', c: ["#ffe0c0", "#ffb87a", "#ffd8a8", "#ffffff"] },
  skn_phenix: { fx: 'flame', c: ["#ff7a1a", "#ffd04a", "#ff5a1a", "#fff0a0"] },
  skn_abysses: { fx: 'water', c: ["#0a1a3a", "#2a6aff", "#1a3aa8", "#7fb8ff"] },
  skn_monarque: { fx: 'shadow', c: ["#0a0610", "#9a5aff", "#05030a", "#d0b0ff"] },
  skn_dragon: { fx: 'flame', c: ["#6a0a0a", "#ff3a1a", "#ff1a00", "#ffd04a"] },
  skn_ilse: { fx: 'frost', c: ["#dff4ff", "#9fe8ff", "#ffffff", "#c8f0ff"] },
  skn_peste: { fx: 'leaf', c: ["#6a7a3a", "#b8ff4a", "#8aa83a", "#e0ff9a"] },
  skn_fer: { fx: 'flame', c: ["#4a4a50", "#ff6a2a", "#c8c8d0", "#ffa040"] },
  skn_chaines: { fx: 'bolt', c: ["#8a8c96", "#d8dce8", "#ffffff", "#b9bcc6"] },
  skn_galaxie: { fx: 'star', c: ["#1a1440", "#8a7bff", "#ffffff", "#5a4aff"] },
  skn_dravo: { fx: 'blood', c: ["#3a0008", "#ff0a3a", "#a8001a", "#ff5a7a"] },
  skn_seraph: { fx: 'light', c: ["#ffffff", "#fff1b8", "#fff6d8", "#ffffff"] },
  skn_celeste: { fx: 'star', c: ["#f6f8ff", "#bfe0ff", "#ffffff", "#fff1b8"] },
  skn_prisme: { fx: 'prism', c: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"] },
  skn_soleil: { fx: 'flame', c: ["#fff0a0", "#ffd04a", "#ffb020", "#ffffff"] },
  skn_neant: { fx: 'shadow', c: ["#000000", "#ffffff", "#000000", "#c8b6ff"] },
  skn_ether: { fx: 'bolt', c: ["#bff6ff", "#00f0ff", "#ffffff", "#7fe0ff"] },
  skn_aube: { fx: 'light', c: ["#ffe9b0", "#ffd56a", "#fff6d8", "#ffffff"] },
  skn_aion: { fx: 'prism', c: ["#fff8e0", "#ffd56a", "#ffffff", "#7fe0ff"] }
};
/* Ailes : forme + [principale, secondaire] — utilisées aussi par le moteur 3D */
const WING_FX = {
  ail_pr: { kind: 'plume', c: ['#fff4d6', '#ffd56a'] }, ail_wb11: { kind: 'meca', c: ['#b0603a', '#ffb070'] }, ail_wb12: { kind: 'plume', c: ['#f4f8ff', '#bfd6ea'] }, ail_wb13: { kind: 'cristal', c: ['#ffe9b8', '#9ffcff'] }, ail_wb14: { kind: 'papillon', c: ['#6a8a5a', '#e8d8a0'] }, ail_wb15: { kind: 'ombre', c: ['#3a2a4a', '#ffd56a'] }, ail_wb16: { kind: 'lumiere', c: ['#ffffff', '#fff1b8'] },
  ail_toujours: { kind: 'lumiere', c: ['#e8fdff', '#9ffcff'] },
  ail_moineau: { kind: 'plume', c: ["#8a6a4a", "#c8a882"] },
  ail_papier: { kind: 'plume', c: ["#efe8d6", "#c8bfa8"] },
  ail_corbeau: { kind: 'plume', c: ["#2a2a35", "#4a4a5a"] },
  ail_chauve: { kind: 'cuir', c: ["#3a2a30", "#1a1015"] },
  ail_colombe: { kind: 'plume', c: ["#f4f4ff", "#d8dce8"] },
  ail_libellule: { kind: 'cristal', c: ["#bff0e8", "#7fd8c8"] },
  ail_papillon: { kind: 'papillon', c: ["#3a7aff", "#1a2a6a"] },
  ail_faucon: { kind: 'plume', c: ["#9a6a3a", "#e8d0a0"] },
  ail_engrenages: { kind: 'meca', c: ["#8a7a5a", "#e2b443"] },
  ail_monarque: { kind: 'papillon', c: ["#ff8a2a", "#1a1010"] },
  ail_wyverne: { kind: 'cuir', c: ["#3a5a3a", "#1a2a1a"] },
  ail_daeva: { kind: 'plume', c: ["#f4f4ff", "#d9c27a"] },
  ail_asmodien: { kind: 'plume', c: ["#2a1a3a", "#8b5cf6"] },
  ail_glace: { kind: 'cristal', c: ["#cfeeff", "#7fd0ff"] },
  ail_feu: { kind: 'flamme', c: ["#ff5a1a", "#ffc04a"] },
  ail_ombre: { kind: 'ombre', c: ["#14101c", "#8b5cf6"] },
  ail_jade: { kind: 'cuir', c: ["#1a6a4a", "#5affa8"] },
  ail_aigle: { kind: 'plume', c: ["#5a3a1a", "#f0e0c0"] },
  ail_mecha: { kind: 'meca', c: ["#5a6070", "#00f0ff"] },
  ail_fee: { kind: 'papillon', c: ["#ffb7d0", "#ffffff"] },
  ail_tempete: { kind: 'cristal', c: ["#9ab8d8", "#e8f8ff"] },
  ail_crepuscule: { kind: 'plume', c: ["#d86a4a", "#3a1a4a"] },
  ail_phenix: { kind: 'flamme', c: ["#ff7a1a", "#ffe08a"] },
  ail_seraph_noir: { kind: 'plume', c: ["#1a1424", "#c9a8ff"] },
  ail_dragon: { kind: 'cuir', c: ["#7a0a0a", "#ff7a3c"] },
  ail_abysses: { kind: 'ombre', c: ["#0a1a3a", "#2a8aff"] },
  ail_givre: { kind: 'cristal', c: ["#e0f6ff", "#ffffff"] },
  ail_sang: { kind: 'cuir', c: ["#3a0008", "#ff2a4a"] },
  ail_acier: { kind: 'meca', c: ["#8a8c96", "#ffffff"] },
  ail_galaxie: { kind: 'papillon', c: ["#1a1440", "#8a7bff"] },
  ail_archange: { kind: 'plume', c: ["#ffffff", "#ffd56a"] },
  ail_forge: { kind: 'meca', c: ["#3a3a40", "#ff6a2a"] },
  ail_seraphin: { kind: 'lumiere', c: ["#fff1b8", "#ffffff"] },
  ail_eternite: { kind: 'lumiere', c: ["#ffffff", "#fff1b8"] },
  ail_aion: { kind: 'plume', c: ["#fffaf0", "#7fe0ff"] },
  ail_roi: { kind: 'ombre', c: ["#05030a", "#c9a8ff"] },
  ail_soleil: { kind: 'flamme', c: ["#ffd04a", "#ffffff"] },
  ail_etoiles: { kind: 'cristal', c: ["#2a3370", "#fff1b8"] },
  ail_aube: { kind: 'lumiere', c: ["#ffe9b0", "#ffd56a"] },
  ail_prisme: { kind: 'cristal', c: ["#ffffff", "#bfe0ff"] }
};

function artDefs() {
  const lin = (id, a, b, c) => `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset=".5" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></linearGradient>`;
  return `<svg id="art-defs" width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    ${ART_METAL.map((m, i) => lin('am' + i, m[0], m[1], m[2]) + `<linearGradient id="ah${i}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${m[2]}"/><stop offset=".45" stop-color="${m[0]}"/><stop offset="1" stop-color="${m[1]}"/></linearGradient>`).join('')}
    ${lin('awood', '#a9794a', '#7a5230', '#40280f')}${lin('aleath', '#7a5540', '#4f3424', '#27170d')}${lin('agold', '#fff0b0', '#e0b040', '#8a5a0c')}
    <radialGradient id="abg" cx=".5" cy=".42" r=".75"><stop offset="0" stop-color="#232334"/><stop offset=".7" stop-color="#11111a"/><stop offset="1" stop-color="#08080d"/></radialGradient>
    <radialGradient id="aorb" cx=".36" cy=".3" r=".85"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".3" stop-color="#fff" stop-opacity=".12"/><stop offset=".62" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".72"/></radialGradient>
    <filter id="aglow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2.2"/></filter>
  </defs></svg>`;
}
if (typeof document !== 'undefined' && document.body && document.body.insertAdjacentHTML) {
  document.body.insertAdjacentHTML('beforeend', artDefs());
  if (document.head) document.head.insertAdjacentHTML('beforeend', `<style>
  .art{display:inline-block;flex:none;line-height:0;border:1px solid currentColor;border-radius:5px;overflow:hidden;background:#0b0b12;box-shadow:0 0 14px -5px currentColor, 0 0 10px -6px currentColor inset}
  .art svg{display:block}
  .item .art{align-self:flex-start}
  .art.lock{filter:grayscale(.85) brightness(.72)}
  .art-fl{transform-origin:50% 100%;transform-box:fill-box;animation:artfl 1.1s ease-in-out infinite alternate}
  @keyframes artfl{from{transform:scaleY(.88);opacity:.75}to{transform:scaleY(1.16);opacity:1}}
  .art-cel{animation:artcel 2.4s ease-in-out infinite alternate}
  @keyframes artcel{from{opacity:.55}to{opacity:1}}
  @media (prefers-reduced-motion:reduce){.art-fl,.art-cel{animation:none}}
  .gearbuy{display:flex;flex-direction:column;align-items:center;gap:2px;padding:5px 6px;background:transparent;border:1px solid #2a2a35;font-size:10.5px;line-height:1.2;cursor:pointer;min-width:66px}
  .gearbuy:hover:not([disabled]){border-color:currentColor}
  .gearbuy[disabled]{opacity:.55;cursor:not-allowed}
  </style>`);
}

/* ---------- Cadre commun ---------- */
function artWrap(inner, r, size, extra) {
  const c = (RARITIES[r] || RARITIES[0]).color;
  const rays = r >= 4 ? `<g opacity="${r >= 6 ? .5 : .28}" fill="${c}">${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M32 33 L${30.5} -6 L${33.5} -6 Z" transform="rotate(${i * 45 + 22} 32 33)"/>`).join('')}</g>` : '';
  /* Mythique : flammes · Éternel : lumière céleste */
  const fl = r === 5 ? `<g class="art-fl"><path d="M0 64Q-2 48 6 40Q5 49 11 47Q9 36 18 28Q16 42 24 46Q26 40 30 43Q27 54 31 64Z" fill="#ff3b1a" opacity=".62"/><path d="M64 64Q66 48 58 40Q59 49 53 47Q55 36 46 28Q48 42 40 46Q38 40 34 43Q37 54 33 64Z" fill="#ff3b1a" opacity=".62"/><path d="M4 64Q4 54 9 50Q9 56 14 54Q13 47 19 42Q18 52 24 64ZM60 64Q60 54 55 50Q55 56 50 54Q51 47 45 42Q46 52 40 64Z" fill="#ffc04a" opacity=".75"/></g>` : '';
  const cel = r >= 6 ? `<g class="art-cel"><circle cx="32" cy="33" r="27" fill="none" stroke="#fff6d8" stroke-width=".8" opacity=".75"/><circle cx="32" cy="33" r="23" fill="#fff6d8" opacity=".2" filter="url(#aglow)"/></g>` : '';
  const stars = r >= 6 ? `<g class="art-cel" fill="#fff">${[[10, 12, 3.2], [54, 14, 2.6], [53, 52, 3.2], [11, 51, 2.4]].map(([x, y, s]) => `<path d="M${x} ${y - s}L${x + s * .25} ${y - s * .25}L${x + s} ${y}L${x + s * .25} ${y + s * .25}L${x} ${y + s}L${x - s * .25} ${y + s * .25}L${x - s} ${y}L${x - s * .25} ${y - s * .25}Z"/>`).join('')}</g>` : '';
  return `<span class="art ${extra || ''}" style="width:${size}px;height:${size}px;color:${c}"><svg viewBox="0 0 64 64" width="${size}" height="${size}" role="img" aria-hidden="true"><rect width="64" height="64" fill="url(#abg)"/>${rays}${cel}<circle cx="32" cy="33" r="${18 + r * 1.6}" fill="${c}" opacity="${.1 + r * .025}" filter="url(#aglow)"/>${fl}${inner}${stars}<path d="M0 0H13L0 13Z" fill="${c}" opacity=".85"/></svg></span>`;
}
const _gem = (x, y, s, c) => `<path d="M${x} ${y - s}L${x + s} ${y}L${x} ${y + s}L${x - s} ${y}Z" fill="${c}" stroke="#fff" stroke-width=".5" stroke-opacity=".7"/><path d="M${x} ${y - s}L${x + s * .4} ${y}L${x} ${y + s}Z" fill="#fff" opacity=".35"/>`;
const _rot = (deg, s) => `<g transform="rotate(${deg} 32 32)">${s}</g>`;

/* ---------- Armes (dessinées verticales, pointe en haut) ---------- */
const ART_WEAPON = {
  epee: (t, c) => _rot(45, `<path d="M32 2L36 9L35 40H29L28 9Z" fill="url(#ah${t})" stroke="#0008" stroke-width=".5"/><path d="M32 6V38" stroke="#0005" stroke-width=".8"/>${t >= 3 ? `<path d="M32 10V36" stroke="${c}" stroke-width="1.1" opacity=".9" stroke-dasharray="3 2"/>` : ''}<rect x="${22 - (t >= 4 ? 2 : 0)}" y="39.5" width="${20 + (t >= 4 ? 4 : 0)}" height="4" rx="1.6" fill="url(#am${t})" stroke="#0008" stroke-width=".5"/><rect x="30" y="43.5" width="4" height="11" fill="url(#aleath)"/><circle cx="32" cy="57" r="3.2" fill="url(#am${t})" stroke="#0008" stroke-width=".5"/>${t >= 2 ? _gem(32, 41.5, 2, c) : ''}`),
  dague: (t, c) => _rot(45, `<path d="M32 12L36.5 22L34.5 40H29.5L27.5 22Z" fill="url(#ah${t})" stroke="#0008" stroke-width=".5"/><path d="M32 16V38" stroke="#0005" stroke-width=".7"/>${t >= 3 ? `<path d="M32 20V36" stroke="${c}" stroke-width="1" stroke-dasharray="2 2"/>` : ''}<path d="M24 39.5H40L38 43.5H26Z" fill="url(#am${t})" stroke="#0008" stroke-width=".5"/><rect x="30" y="43.5" width="4" height="9" fill="url(#aleath)"/><circle cx="32" cy="54.5" r="2.6" fill="url(#am${t})"/>${t >= 2 ? _gem(32, 41.5, 1.6, c) : ''}`),
  espadon: (t, c) => _rot(45, `<path d="M32 -2L39 7L37.5 41H26.5L25 7Z" fill="url(#ah${t})" stroke="#0008" stroke-width=".5"/><path d="M32 3V39" stroke="#0005" stroke-width="1.6"/>${t >= 3 ? `<path d="M32 8V36" stroke="${c}" stroke-width="1.4" stroke-dasharray="4 2.5"/>` : ''}<path d="M16 40H48L46 46L40 44H24L18 46Z" fill="url(#am${t})" stroke="#0008" stroke-width=".5"/><rect x="29.8" y="44" width="4.4" height="13" fill="url(#aleath)"/><circle cx="32" cy="59.5" r="3.6" fill="url(#am${t})" stroke="#0008" stroke-width=".5"/>${t >= 2 ? _gem(32, 42.5, 2.3, c) : ''}`),
  masse: (t, c) => _rot(40, `<rect x="30.4" y="20" width="3.2" height="36" rx="1" fill="url(#awood)"/><circle cx="32" cy="14" r="9.5" fill="url(#am${t})" stroke="#0008" stroke-width=".6"/>${[0, 60, 120, 180, 240, 300].map(a => `<path d="M32 1.5L34.6 6H29.4Z" fill="url(#ah${t})" transform="rotate(${a} 32 14)"/>`).join('')}<circle cx="29" cy="11" r="3" fill="#fff" opacity=".28"/><rect x="29.4" y="24" width="5.2" height="2.4" fill="url(#am${t})"/><circle cx="32" cy="58" r="2.6" fill="url(#am${t})"/>${t >= 2 ? _gem(32, 14, 2.6, c) : ''}`),
  guisarme: (t, c) => _rot(38, `<rect x="30.8" y="6" width="2.6" height="55" rx="1" fill="url(#awood)"/><path d="M32 -3L34.6 8H29.4Z" fill="url(#ah${t})"/><path d="M33.2 7Q49 8 46 26Q40 20 33.2 22Z" fill="url(#ah${t})" stroke="#0008" stroke-width=".5"/><path d="M30.8 9Q22 10 23 17Q27 14 30.8 15Z" fill="url(#am${t})" stroke="#0008" stroke-width=".5"/>${t >= 3 ? `<path d="M36 10Q44 12 43.5 21" fill="none" stroke="${c}" stroke-width="1"/>` : ''}<rect x="30" y="23" width="4.2" height="2.2" fill="url(#am${t})"/>${t >= 2 ? _gem(38, 15, 2, c) : ''}`),
  baton: (t, c) => _rot(28, `<rect x="30.7" y="16" width="2.8" height="45" rx="1.2" fill="url(#awood)"/><path d="M24 14Q24 3 32 3Q40 3 40 14" fill="none" stroke="url(#am${t})" stroke-width="2.6" stroke-linecap="round"/><circle cx="32" cy="11" r="7" fill="${c}" opacity=".35" filter="url(#aglow)"/><circle cx="32" cy="11" r="4.6" fill="${c}"/><circle cx="32" cy="11" r="4.6" fill="url(#aorb)"/><rect x="29.6" y="16" width="5" height="3" rx="1" fill="url(#am${t})"/>${t >= 4 ? `<circle cx="24" cy="14" r="1.6" fill="${c}"/><circle cx="40" cy="14" r="1.6" fill="${c}"/>` : ''}`),
  lamecle: (t, c) => _rot(45, `<rect x="29.4" y="2" width="5.2" height="38" rx="1" fill="url(#ah${t})" stroke="#0008" stroke-width=".5"/><path d="M34.6 5H41V9H38V12H34.6ZM34.6 15H39.5V19H34.6Z" fill="url(#am${t})" stroke="#0008" stroke-width=".5"/>${t >= 3 ? `<path d="M32 6V37" stroke="${c}" stroke-width="1.1" stroke-dasharray="1.5 2"/>` : ''}<rect x="25" y="39.5" width="14" height="3.4" rx="1" fill="url(#am${t})"/><circle cx="32" cy="51" r="7" fill="none" stroke="url(#am${t})" stroke-width="3.4"/><circle cx="32" cy="51" r="2" fill="${c}"/>`),
  arc: (t, c) => _rot(18, `<path d="M24 5Q52 32 24 59" fill="none" stroke="url(#awood)" stroke-width="3.6" stroke-linecap="round"/><path d="M24 5Q52 32 24 59" fill="none" stroke="url(#am${t})" stroke-width="1.2" stroke-linecap="round" opacity="${t >= 2 ? .9 : 0}"/><path d="M24 5L24 59" stroke="#e8e8e8" stroke-width=".7"/><rect x="35.5" y="27.5" width="4.6" height="9" rx="1.5" fill="url(#aleath)"/><path d="M12 32H46" stroke="#caa56a" stroke-width="1.2"/><path d="M46 32L41 29.4V34.6Z" fill="url(#ah${t})"/><path d="M12 32L15 29.5M12 32L15 34.5" stroke="${c}" stroke-width="1.2"/>${t >= 3 ? _gem(38, 32, 1.7, c) : ''}`),
  orbe: (t, c) => `<ellipse cx="32" cy="53" rx="13" ry="3.5" fill="#000" opacity=".45"/><path d="M21 50Q32 42 43 50L40 55H24Z" fill="url(#am${t})" stroke="#0008" stroke-width=".5"/><circle cx="32" cy="29" r="17" fill="${c}" opacity=".3" filter="url(#aglow)"/><circle cx="32" cy="29" r="14.5" fill="${c}"/><circle cx="32" cy="29" r="14.5" fill="url(#aorb)"/><ellipse cx="26.5" cy="22.5" rx="4.5" ry="3" fill="#fff" opacity=".55"/>${t >= 3 ? `<ellipse cx="32" cy="29" rx="19" ry="5" fill="none" stroke="url(#am${t})" stroke-width="1.3" transform="rotate(-18 32 29)"/>` : ''}${t >= 5 ? `<path d="M10 14l2 4-4 0zM52 10l2.5 4h-5zM54 40l2 3.5h-4z" fill="${c}"/>` : ''}`,
  grimoire: (t, c) => _rot(-8, `<rect x="15" y="11" width="35" height="43" rx="3" fill="url(#aleath)" stroke="#0009" stroke-width=".6"/><rect x="18.5" y="13" width="31.5" height="39" rx="1.5" fill="${ART_METAL[t][2]}"/><rect x="15" y="11" width="5" height="43" fill="#0006"/><path d="M47 14h4v37h-4" fill="#efe6cc"/><rect x="22" y="16" width="24" height="33" rx="1" fill="none" stroke="url(#am${t})" stroke-width="1.1"/><circle cx="34" cy="32.5" r="7.5" fill="none" stroke="url(#am${t})" stroke-width="1.2"/>${_gem(34, 32.5, 4, c)}<path d="M44 29h9v7h-9z" fill="url(#am${t})" stroke="#0008" stroke-width=".4"/>${t >= 4 ? `<path d="M23 17l4 0-4 4zM45 17l-4 0 4 4zM23 48l4 0-4-4zM45 48l-4 0 4-4z" fill="url(#agold)"/>` : ''}`),
  pistolet: (t, c) => `<path d="M8 22H44V30H8Z" fill="url(#am${t})" stroke="#0008" stroke-width=".5"/><rect x="6" y="23.5" width="5" height="5" fill="#000"/><path d="M8 22H44V24.5H8Z" fill="#fff" opacity=".25"/><circle cx="37" cy="31" r="6.2" fill="url(#am${t})" stroke="#0008" stroke-width=".6"/><circle cx="37" cy="31" r="2" fill="#0008"/><path d="M40 30H54Q57 31 56 35L52 52Q51 55 47 54L41 53Q39 52 40 49Z" fill="url(#awood)" stroke="#0008" stroke-width=".5"/><path d="M30 36Q30 44 38 43" fill="none" stroke="url(#am${t})" stroke-width="1.6"/><path d="M34 36V40" stroke="${ART_METAL[t][0]}" stroke-width="1.5"/><path d="M44 20h5l2 4h-7z" fill="url(#am${t})"/>${t >= 2 ? _gem(48, 40, 2.2, c) : ''}${t >= 4 ? `<path d="M12 26H40" stroke="${c}" stroke-width="1"/>` : ''}`,
  repercuteur: (t, c) => `<rect x="10" y="20" width="42" height="15" rx="4" fill="url(#am${t})" stroke="#0008" stroke-width=".6"/><rect x="10" y="20" width="42" height="4" rx="2" fill="#fff" opacity=".22"/><circle cx="10" cy="27.5" r="9" fill="${c}" opacity=".45" filter="url(#aglow)"/><circle cx="10.5" cy="27.5" r="6.5" fill="#06060a" stroke="url(#am${t})" stroke-width="2"/><circle cx="10.5" cy="27.5" r="3.4" fill="${c}"/><rect x="20" y="17" width="5" height="21" rx="1" fill="${ART_METAL[t][2]}"/><rect x="32" y="17" width="5" height="21" rx="1" fill="${ART_METAL[t][2]}"/><path d="M40 35h8l3 16h-8z" fill="url(#aleath)" stroke="#0008" stroke-width=".5"/><rect x="50" y="23" width="9" height="9" rx="2" fill="url(#am${t})"/><path d="M26 27.5H31" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>${t >= 4 ? `<path d="M38 27.5H48" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>` : ''}`,
  harpe: (t, c) => `<rect x="43" y="6" width="4" height="52" rx="2" fill="url(#ah${t >= 4 ? t : 4})"/><path d="M16 15Q32 0 45 8" fill="none" stroke="url(#am${t >= 4 ? t : 4})" stroke-width="4" stroke-linecap="round"/><path d="M16 15Q16 40 40 57H45" fill="none" stroke="url(#awood)" stroke-width="4.4" stroke-linecap="round" stroke-linejoin="round"/>${[0, 1, 2, 3, 4, 5, 6].map(i => { const x = 20 + i * 3.6; return `<path d="M${x} ${13.5 - i * 1.2}V${24 + i * 5}" stroke="${i % 3 === 0 ? c : '#f3ecd6'}" stroke-width=".8"/>`; }).join('')}<circle cx="16" cy="15" r="3" fill="url(#am${t})"/>${t >= 2 ? _gem(45, 8, 2.4, c) : ''}`,
  anneaux: (t, c) => `<circle cx="24" cy="26" r="11" fill="none" stroke="url(#am${t})" stroke-width="3.6"/><circle cx="41" cy="26" r="11" fill="none" stroke="url(#am${t})" stroke-width="3.6"/><circle cx="32.5" cy="41" r="11" fill="none" stroke="url(#am${t})" stroke-width="3.6"/><circle cx="24" cy="26" r="4.5" fill="#ff5a7a"/><circle cx="41" cy="26" r="4.5" fill="#47c8ff"/><circle cx="32.5" cy="41" r="4.5" fill="#ffd24a"/><path d="M10 48q3-6 6 0a3 3 0 0 1-6 0zM50 46q2.5-5 5 0a2.5 2.5 0 0 1-5 0zM30 8q2-4.5 4 0a2 2 0 0 1-4 0z" fill="${c}"/>`
};
/* ---------- Armures ---------- */
const ART_ARMOR = {
  bijou: (t, c) => `<path d="M14 10Q32 34 50 10" fill="none" stroke="url(#am${t})" stroke-width="2.4"/><circle cx="32" cy="40" r="13" fill="url(#am${t})" stroke="#0009" stroke-width=".7"/><path d="M32 31L39 40L32 49L25 40Z" fill="${c}" stroke="#fff8" stroke-width=".6"/><circle cx="29" cy="37" r="1.6" fill="#fff" opacity=".8"/>`,
  ceinture: (t, c) => `<path d="M6 26Q32 34 58 26V38Q32 46 6 38Z" fill="#3a2a20" stroke="#0009" stroke-width=".7"/><path d="M6 29Q32 37 58 29" stroke="url(#am${t})" stroke-width="1.2" fill="none"/><rect x="24" y="27" width="16" height="15" rx="2.5" fill="url(#am${t})" stroke="#0009" stroke-width=".7"/><rect x="28" y="31" width="8" height="7" rx="1.2" fill="${c}"/>`,
  casque: (t, c) => `<path d="M14 36Q14 9 32 9Q50 9 50 36V44Q44 42 41 46V54H36L32 44L28 54H23V46Q20 42 14 44Z" fill="url(#am${t})" stroke="#0009" stroke-width=".7"/><path d="M19 30Q20 14 32 13" fill="none" stroke="#fff" stroke-width="2" opacity=".3" stroke-linecap="round"/><path d="M20 31H44V36H35L32 43L29 36H20Z" fill="#05050a"/><path d="M32 9V30" stroke="${ART_METAL[t][2]}" stroke-width="2.2"/>${t >= 2 ? _gem(32, 21, 2.4, c) : ''}${t >= 3 ? `<path d="M32 9Q36 -2 50 3Q44 6 42 14Q38 9 32 9Z" fill="${c}" stroke="#0007" stroke-width=".5"/>` : ''}${t >= 5 ? `<path d="M14 30L6 20L16 23ZM50 30L58 20L48 23Z" fill="url(#am${t})" stroke="#0008" stroke-width=".5"/>` : ''}`,
  plastron: (t, c) => `<path d="M12 14Q20 16 24 10H40Q44 16 52 14L55 26Q48 28 47 34L46 54Q32 60 18 54L17 34Q16 28 9 26Z" fill="url(#am${t})" stroke="#0009" stroke-width=".7"/><path d="M24 10Q32 20 40 10" fill="none" stroke="#0008" stroke-width="1.6"/><path d="M32 18V56" stroke="${ART_METAL[t][2]}" stroke-width="1.6"/><path d="M19 38Q32 44 45 38M19.5 46Q32 52 44.5 46" fill="none" stroke="${ART_METAL[t][2]}" stroke-width="1.2"/><path d="M16 17Q22 20 25 15" fill="none" stroke="#fff" stroke-width="2" opacity=".35" stroke-linecap="round"/>${t >= 2 ? _gem(32, 27, 3.2, c) : ''}${t >= 4 ? `<path d="M22 24Q27 30 32 30Q37 30 42 24" fill="none" stroke="${c}" stroke-width="1.3"/>` : ''}`,
  jambieres: (t, c) => [16, 36].map(x => `<path d="M${x} 6H${x + 12}L${x + 13} 26Q${x + 14} 32 ${x + 12} 36L${x + 11.5} 48H${x + 17}Q${x + 19} 52 ${x + 18} 57H${x - 1}L${x + 1} 36Q${x - 2} 32 ${x - 1} 26Z" fill="url(#am${t})" stroke="#0009" stroke-width=".7"/><ellipse cx="${x + 6}" cy="30" rx="7" ry="5.4" fill="url(#ah${t})" stroke="#0008" stroke-width=".5"/><path d="M${x + 2.5} 9V24" stroke="#fff" stroke-width="1.6" opacity=".3" stroke-linecap="round"/>${t >= 2 ? _gem(x + 6, 30, 2, c) : ''}${t >= 4 ? `<path d="M${x + 1} 42H${x + 11}" stroke="${c}" stroke-width="1.2"/>` : ''}`).join(''),
  bottes: (t, c) => [12, 33].map(x => `<path d="M${x + 2} 8H${x + 14}L${x + 15} 38Q${x + 16} 44 ${x + 21} 46Q${x + 22} 52 ${x + 19} 55H${x}Q${x - 1} 50 ${x + 1} 44Z" fill="url(#am${t})" stroke="#0009" stroke-width=".7"/><path d="M${x + 1} 50H${x + 21}" stroke="#0007" stroke-width="1.4"/><path d="M${x + 3} 14H${x + 13}" stroke="#fff5" stroke-width="1"/>`).join(''),
  bouclier: (t, c) => `<path d="M11 9Q32 3 53 9V30Q53 50 32 61Q11 50 11 30Z" fill="url(#am${t})" stroke="#0009" stroke-width=".8"/><path d="M15.5 12.5Q32 8 48.5 12.5V30Q48.5 46.5 32 56Q15.5 46.5 15.5 30Z" fill="${ART_METAL[t][2]}" opacity=".55"/><path d="M32 8V57M13 28H51" stroke="url(#ah${t})" stroke-width="3"/><circle cx="32" cy="28" r="6" fill="url(#am${t})" stroke="#0008" stroke-width=".6"/><path d="M17 14Q22 12 27 11.5" stroke="#fff" stroke-width="2" opacity=".35" stroke-linecap="round" fill="none"/>${t >= 2 ? _gem(32, 28, 3, c) : ''}${t >= 4 ? `<path d="M20 18l3 3-3 3-3-3zM44 18l3 3-3 3-3-3z" fill="${c}"/>` : ''}`
};

/* ---------- Montures ---------- */
function artQuad(o) {
  const cx = 30, by = o.by || 34, bw = o.bw || 16, bh = o.bh || 8, ll = o.ll || 15, lw = o.lw || 4;
  const hx = cx + bw + (o.nx || 4), hy = by - (o.ny || 9), hr = o.hr || 5.4;
  const leg = (x, col) => `<rect x="${x}" y="${by + bh - 4}" width="${lw}" height="${ll + 2}" rx="${lw / 2.4}" fill="${col}"/><rect x="${x - .6}" y="${by + bh + ll - 4}" width="${lw + 1.6}" height="2.6" rx="1" fill="${o.hoof || '#15151a'}"/>`;
  let s = `<ellipse cx="${cx}" cy="${by + bh + ll + 0.4}" rx="${bw + 6}" ry="2.6" fill="#000" opacity=".45"/>`;
  if (o.wings) s += `<path d="M${cx - 2} ${by - 4}Q${cx - 12} ${by - 34} ${cx - 30} ${by - 24}Q${cx - 20} ${by - 20} ${cx - 22} ${by - 12}Q${cx - 13} ${by - 14} ${cx - 10} ${by - 2}Z" fill="${o.wd || o.d}" opacity=".85"/>`;
  s += leg(cx - bw + 4.5, o.d) + leg(cx + bw - 9, o.d);
  if (o.tail === 'bush') s += `<path d="M${cx - bw + 2} ${by - 2}Q${cx - bw - 12} ${by - 6} ${cx - bw - 9} ${by + 8}Q${cx - bw - 3} ${by + 6} ${cx - bw + 3} ${by + 3}Z" fill="${o.b}"/>`;
  else if (o.tail === 'hair') s += `<path d="M${cx - bw + 2} ${by - 3}Q${cx - bw - 9} ${by} ${cx - bw - 5} ${by + 17}Q${cx - bw - 1} ${by + 8} ${cx - bw + 3} ${by + 2}Z" fill="${o.mane || o.d}"/>`;
  else if (o.tail === 'long') s += `<path d="M${cx - bw + 3} ${by}Q${cx - bw - 14} ${by - 2} ${cx - bw - 12} ${by + 12}Q${cx - bw - 10} ${by + 19} ${cx - bw - 3} ${by + 19}" fill="none" stroke="${o.b}" stroke-width="3.6" stroke-linecap="round"/><path d="M${cx - bw - 3} ${by + 19}l5 -3 -1 5z" fill="${o.d}"/>`;
  else s += `<path d="M${cx - bw + 2} ${by - 2}q-6 0 -5 7" fill="none" stroke="${o.d}" stroke-width="2.4" stroke-linecap="round"/>`;
  s += `<path d="M${cx + bw - 7} ${by - bh + 1}L${hx - hr * .2} ${hy - hr * .3}L${hx + hr * .3} ${hy + hr * .9}L${cx + bw - 1} ${by + bh - 3}Z" fill="${o.b}"/>`;
  s += `<ellipse cx="${cx}" cy="${by}" rx="${bw}" ry="${bh}" fill="${o.b}"/><ellipse cx="${cx - 2}" cy="${by - bh * .45}" rx="${bw * .7}" ry="${bh * .35}" fill="#fff" opacity=".13"/><ellipse cx="${cx}" cy="${by + bh * .55}" rx="${bw * .8}" ry="${bh * .4}" fill="#000" opacity=".2"/>`;
  s += leg(cx - bw + 1, o.b) + leg(cx + bw - 5.5, o.b);
  if (o.mane) s += `<path d="M${cx + bw - 8} ${by - bh + 2}L${hx - hr * .5} ${hy - hr * .9}L${hx - hr * 1.1} ${hy + hr * .2}Q${cx + bw - 8} ${by - bh + 8} ${cx + bw - 12} ${by - bh + 4}Z" fill="${o.mane}"/>`;
  const sl = o.snout || 6;
  s += `<ellipse cx="${hx}" cy="${hy}" rx="${hr}" ry="${hr * .9}" fill="${o.b}"/>`;
  if (o.beak) s += `<path d="M${hx + hr * .5} ${hy - 2.2}L${hx + hr + sl} ${hy + 1.5}L${hx + hr * .5} ${hy + 3}Z" fill="#e6a93a"/>`;
  else s += `<path d="M${hx + hr * .3} ${hy - hr * .55}L${hx + hr + sl} ${hy + .3}Q${hx + hr + sl + 1} ${hy + 3.6} ${hx + hr + sl - 2} ${hy + 3.8}L${hx + hr * .2} ${hy + hr * .8}Z" fill="${o.sn || o.b}"/><circle cx="${hx + hr + sl - .8}" cy="${hy + 1.2}" r=".9" fill="#0b0b10"/>`;
  s += `<circle cx="${hx + hr * .35}" cy="${hy - hr * .2}" r="1.1" fill="${o.eye || '#0b0b10'}"/>`;
  if (o.ear === 'point') s += `<path d="M${hx - 3.5} ${hy - hr * .6}L${hx - 2.6} ${hy - hr - 5.5}L${hx + 1.2} ${hy - hr * .8}Z" fill="${o.b}"/><path d="M${hx - 2.6} ${hy - hr * .7}L${hx - 2.2} ${hy - hr - 3.4}L${hx} ${hy - hr * .8}Z" fill="${o.d}"/>`;
  else if (o.ear === 'round') s += `<circle cx="${hx - 2.6}" cy="${hy - hr * .85}" r="2.6" fill="${o.b}"/><circle cx="${hx - 2.6}" cy="${hy - hr * .85}" r="1.3" fill="${o.d}"/>`;
  else if (o.ear === 'long') s += `<path d="M${hx - 3.6} ${hy - hr * .5}Q${hx - 6.5} ${hy - hr - 9} ${hx - 2.4} ${hy - hr - 11}Q${hx + .6} ${hy - hr - 5} ${hx + .4} ${hy - hr * .7}Z" fill="${o.b}"/><path d="M${hx - 2.6} ${hy - hr * .8}Q${hx - 4.2} ${hy - hr - 6} ${hx - 2.2} ${hy - hr - 8.5}Q${hx - .9} ${hy - hr - 4} ${hx - .8} ${hy - hr * .8}Z" fill="${o.d}"/>`;
  else if (o.ear === 'horse') s += `<path d="M${hx - 3} ${hy - hr * .6}L${hx - 2.4} ${hy - hr - 4}L${hx + .6} ${hy - hr * .8}Z" fill="${o.b}"/>`;
  if (o.horn) s += `<path d="M${hx + 1} ${hy - hr * .7}L${hx + 7} ${hy - hr - 9}L${hx + 3.4} ${hy - hr * .5}Z" fill="${o.horn}"/>`;
  if (o.horns) s += `<path d="M${hx - 2} ${hy - hr * .7}Q${hx - 10} ${hy - hr - 5} ${hx - 9} ${hy - hr - 11}Q${hx - 5} ${hy - hr - 5} ${hx + .8} ${hy - hr * .8}Z" fill="${o.horns}"/>`;
  return s + (o.extra || '');
}
const ART_MOUNT = {
  m0: c => artQuad({ b: '#6f6e78', d: '#3d3c45', sn: '#8b8a93', ear: 'point', tail: 'bush', eye: '#ffb347', bw: 15.5, bh: 7.4, ll: 13, snout: 7, extra: `<path d="M8 20q2-5 4 0M52 14q2-5 4 0" stroke="#8a8a92" stroke-width="1" fill="none" opacity=".6"/>` }),
  m1: c => artQuad({ b: '#7a5133', d: '#4a2f1c', mane: '#2c1c11', ear: 'horse', tail: 'hair', bw: 17, bh: 9.2, ll: 15, lw: 4.6, nx: 3, ny: 13, hr: 5, snout: 7.5, hoof: '#e9e2d2', extra: `<path d="M22 27h14v5H22z" fill="#3b2a1e"/><path d="M22 27h14" stroke="#c9a060" stroke-width="1"/>` }),
  m2: c => artQuad({ b: '#5d4634', d: '#3a2a1e', sn: '#8a6a50', ear: 'round', tail: 'short', bw: 18.5, bh: 11, ll: 11, lw: 5.6, nx: 1, ny: 6, hr: 6.6, snout: 5, by: 33, extra: `<path d="M14 25Q30 17 46 25L44 31Q30 25 16 31Z" fill="url(#am2)" stroke="#0008" stroke-width=".5"/><circle cx="30" cy="25" r="2.2" fill="${c}"/><path d="M45 22l5-4 1 6z" fill="url(#am2)"/>` }),
  m3: c => `<ellipse cx="32" cy="55" rx="26" ry="2.6" fill="#000" opacity=".5"/><circle cx="14" cy="44" r="10" fill="#0c0c10" stroke="#34343c" stroke-width="2.6"/><circle cx="50" cy="44" r="10" fill="#0c0c10" stroke="#34343c" stroke-width="2.6"/><circle cx="14" cy="44" r="3.4" fill="url(#am0)"/><circle cx="50" cy="44" r="3.4" fill="url(#am0)"/><path d="M14 44L24 30H40L50 44" fill="none" stroke="url(#am0)" stroke-width="2.6"/><path d="M20 30Q22 22 32 22H44L50 28L42 33H22Z" fill="#101016" stroke="#000" stroke-width=".6"/><path d="M24 25H42" stroke="${c}" stroke-width="1.6"/><path d="M12 32Q8 30 14 27H26L22 32Z" fill="#17171d"/><path d="M44 22L50 14M47 14H53" stroke="url(#am0)" stroke-width="2" stroke-linecap="round"/><circle cx="53" cy="27" r="2.4" fill="#fff6c9"/><path d="M55 27L63 24V31Z" fill="#fff6c9" opacity=".35"/><rect x="26" y="33" width="12" height="8" rx="2" fill="url(#am0)"/><path d="M6 36H1M7 40H0" stroke="${c}" stroke-width="1.2" opacity=".8"/>`,
  m4: c => artQuad({ b: '#c9a36a', d: '#8a6a3a', wd: '#e9eef5', wings: true, beak: true, ear: 'point', tail: 'long', eye: '#1a1208', bw: 15, bh: 7.6, ll: 13, ny: 12, hr: 5.6, snout: 5, extra: `<path d="M41 24Q46 20 49 26Q45 30 41 30Z" fill="#f3f3f3"/>` }),
  m5: c => artQuad({ b: '#3a3348', d: '#1d1926', wd: '#54466e', wings: true, horns: '#8a80a0', tail: 'long', eye: c, bw: 16, bh: 8, ll: 12, nx: 5, ny: 14, hr: 5, snout: 8, sn: '#4a425c', extra: `<path d="M57 22q5 1 6 5q-4-1 -7 1z" fill="${c}" opacity=".9" filter="url(#aglow)"/><path d="M22 27l3-4 3 4 3-4 3 4" fill="none" stroke="#3a3344" stroke-width="1.6"/>` }),
  m6: c => `<circle cx="34" cy="26" r="22" fill="#fff3c4" opacity=".22" filter="url(#aglow)"/>` + artQuad({ b: '#9a958f', d: '#6a655f', sn: '#e6e0d6', mane: '#4a453f', ear: 'long', tail: 'hair', bw: 14.5, bh: 7.6, ll: 12.5, lw: 3.6, nx: 3, ny: 8, hr: 5, snout: 6.5, by: 35, extra: `<path d="M24 28h11v8Q29.5 39 24 36Z" fill="#7a2f2a"/><path d="M24 28h11" stroke="#e7c873" stroke-width="1"/>` }),
  m7: c => artQuad({"ear": "point", "tail": "bush", "bw": 15.5, "bh": 7.4, "ll": 13, "snout": 7, "b": "#8a6a4a", "d": "#5a4430", "sn": "#b08a6a"}),
  m8: c => artQuad({"ear": "horse", "tail": "hair", "bw": 17, "bh": 9.2, "ll": 15, "lw": 4.6, "nx": 3, "ny": 13, "hr": 5, "snout": 7.5, "b": "#6a5a4a", "d": "#4a3e32", "mane": "#2a221a"}),
  m9: c => artQuad({"ear": "point", "tail": "short", "bw": 16, "bh": 9, "ll": 10, "lw": 4.6, "nx": 1, "ny": 4, "hr": 5.8, "snout": 6, "by": 35, "b": "#5a4636", "d": "#3a2c22", "horns": "#e9e2d2"}),
  m10: c => artQuad({"ear": "horse", "tail": "hair", "bw": 17, "bh": 9.2, "ll": 15, "lw": 4.6, "nx": 3, "ny": 13, "hr": 5, "snout": 7.5, "b": "#b8b4ae", "d": "#6a6560", "mane": "#e9e2d6"}),
  m11: c => artQuad({"ear": "point", "tail": "bush", "bw": 15.5, "bh": 7.4, "ll": 13, "snout": 7, "b": "#e8ecf2", "d": "#b8c0cc", "sn": "#ffffff", "eye": "#4aa8ff"}),
  m12: c => artQuad({"ear": "horse", "tail": "short", "bw": 15, "bh": 8, "ll": 15, "lw": 3.6, "nx": 3, "ny": 13, "hr": 4.6, "snout": 6, "b": "#8a5a32", "d": "#5a3a1e", "horns": "#d8c8a8"}),
  m13: c => artQuad({"ear": "round", "tail": "long", "bw": 16, "bh": 7.6, "ll": 12, "lw": 4.4, "nx": 3, "ny": 8, "hr": 5.6, "snout": 3.5, "b": "#1a1a22", "d": "#0c0c12", "eye": "#ffd24a"}),
  m14: c => artQuad({"ear": "round", "tail": "short", "bw": 18.5, "bh": 11, "ll": 11, "lw": 5.6, "nx": 1, "ny": 6, "hr": 6.6, "snout": 5, "by": 33, "b": "#eef2f6", "d": "#c8d0d8", "sn": "#2a2a30"}),
  m15: c => artQuad({"ear": "horse", "tail": "hair", "bw": 17, "bh": 9.2, "ll": 15, "lw": 4.6, "nx": 3, "ny": 13, "hr": 5, "snout": 7.5, "b": "#2a2a30", "d": "#15151a", "mane": "#0a0a0e", "hoof": "#d0d0d0"}),
  m16: c => ART_MOUNT.m3('#ff3a3a'),
  m17: c => artQuad({"ear": "round", "tail": "long", "bw": 16, "bh": 7.6, "ll": 12, "lw": 4.4, "nx": 3, "ny": 8, "hr": 5.6, "snout": 3.5, "b": "#e8862a", "d": "#1a1208", "eye": "#ffd24a"}),
  m18: c => artQuad({"tail": "long", "wings": true, "bw": 14, "bh": 7, "ll": 12, "nx": 4, "ny": 12, "hr": 4.6, "snout": 7, "b": "#3a6a3a", "d": "#1a3a1a", "wd": "#5a9a4a", "eye": "#ffd24a"}),
  m19: c => ART_MOUNT.m3('#38bdf8'),
  m20: c => artQuad({"ear": "round", "tail": "long", "bw": 16, "bh": 7.6, "ll": 12, "lw": 4.4, "nx": 3, "ny": 8, "hr": 5.6, "snout": 3.5, "b": "#d8a860", "d": "#8a6a3a", "mane": "#7a4a1a"}),
  m21: c => artQuad({"ear": "horse", "tail": "hair", "bw": 17, "bh": 9.2, "ll": 15, "lw": 4.6, "nx": 3, "ny": 13, "hr": 5, "snout": 7.5, "b": "#f4f4ff", "d": "#c8ccd8", "mane": "#bfe0ff", "horn": "#bfe0ff"}),
  m22: c => artQuad({"ear": "horse", "tail": "hair", "bw": 17, "bh": 9.2, "ll": 15, "lw": 4.6, "nx": 3, "ny": 13, "hr": 5, "snout": 7.5, "b": "#ffffff", "d": "#d8dce8", "mane": "#e8ecf2", "wd": "#ffffff", "wings": true}),
  m23: c => artQuad({"ear": "round", "tail": "long", "bw": 16, "bh": 7.6, "ll": 12, "lw": 4.4, "nx": 3, "ny": 8, "hr": 5.6, "snout": 3.5, "b": "#f0f0f4", "d": "#2a2a30", "eye": "#7fd0ff"}),
  m24: c => artQuad({"ear": "point", "tail": "long", "beak": true, "wings": true, "bw": 15, "bh": 7.6, "ll": 13, "ny": 12, "hr": 5.6, "snout": 5, "b": "#2a2a35", "d": "#15151a", "wd": "#4a4a5a", "eye": "#ffb347"}),
  m25: c => ART_MOUNT.m3('#f59e0b'),
  m26: c => artQuad({"ear": "point", "tail": "bush", "bw": 15.5, "bh": 7.4, "ll": 13, "snout": 7, "b": "#bfe6ff", "d": "#7fb0d8", "sn": "#e8f6ff", "eye": "#9ffcff"}),
  m27: c => `<circle cx="32" cy="28" r="23.5" fill="#b02a1a" opacity=".1" filter="url(#aglow)"/>` + artQuad({"tail": "long", "wings": true, "bw": 16, "bh": 8, "ll": 12, "nx": 5, "ny": 14, "hr": 5, "snout": 8, "b": "#7a1a1a", "d": "#3a0a0a", "wd": "#b02a1a", "horns": "#2a1a1a", "eye": "#ffd24a"}),
  m28: c => `<circle cx="32" cy="28" r="23.5" fill="#e8f6ff" opacity=".1" filter="url(#aglow)"/>` + artQuad({"tail": "long", "wings": true, "bw": 16, "bh": 8, "ll": 12, "nx": 5, "ny": 14, "hr": 5, "snout": 8, "b": "#bfe6ff", "d": "#6a9ac8", "wd": "#e8f6ff", "horns": "#ffffff", "eye": "#4aa8ff"}),
  m29: c => `<circle cx="32" cy="28" r="23.5" fill="#1a1424" opacity=".1" filter="url(#aglow)"/>` + artQuad({"ear": "horse", "tail": "short", "bw": 15, "bh": 8, "ll": 15, "lw": 3.6, "nx": 3, "ny": 13, "hr": 4.6, "snout": 6, "b": "#1a1424", "d": "#0a0810", "horns": "#8b5cf6", "eye": "#8b5cf6"}),
  m30: c => `<circle cx="32" cy="28" r="23.5" fill="#3a1208" opacity=".1" filter="url(#aglow)"/>` + artQuad({"tail": "long", "bw": 18, "bh": 7, "ll": 10, "lw": 4.8, "nx": 3, "ny": 5, "hr": 5, "snout": 8, "by": 36, "b": "#3a1208", "d": "#1a0804", "sn": "#ff5a1a", "eye": "#ff7a1a"}),
  m31: c => ART_MOUNT.m3('#8b5cf6'),
  m32: c => `<circle cx="32" cy="28" r="25.0" fill="#ffe08a" opacity=".2" filter="url(#aglow)"/>` + artQuad({"ear": "point", "tail": "long", "beak": true, "wings": true, "bw": 15, "bh": 7.6, "ll": 13, "ny": 12, "hr": 5.6, "snout": 5, "b": "#ff7a1a", "d": "#ffc04a", "wd": "#ffe08a", "eye": "#ffffff"}),
  m33: c => `<circle cx="32" cy="28" r="25.0" fill="#ffffff" opacity=".2" filter="url(#aglow)"/>` + artQuad({"tail": "long", "wings": true, "bw": 16, "bh": 8, "ll": 12, "nx": 5, "ny": 14, "hr": 5, "snout": 8, "b": "#fff6d8", "d": "#d9c27a", "wd": "#ffffff", "horns": "#ffd56a", "eye": "#7fe0ff"}),
  m34: c => `<circle cx="32" cy="28" r="25.0" fill="#fff1b8" opacity=".2" filter="url(#aglow)"/>` + artQuad({"ear": "horse", "tail": "hair", "bw": 17, "bh": 9.2, "ll": 15, "lw": 4.6, "nx": 3, "ny": 13, "hr": 5, "snout": 7.5, "b": "#fffaf0", "d": "#f0e0b0", "mane": "#ffd56a", "horn": "#ffffff", "wd": "#fff1b8", "wings": true}),
  m35: c => `<circle cx="32" cy="28" r="25.0" fill="#ffffff" opacity=".2" filter="url(#aglow)"/>` + artQuad({"ear": "round", "tail": "long", "bw": 16, "bh": 7.6, "ll": 12, "lw": 4.4, "nx": 3, "ny": 8, "hr": 5.6, "snout": 3.5, "b": "#f0d8a0", "d": "#b08a4a", "mane": "#fff1b8", "wd": "#ffffff", "wings": true}),
  m36: c => ART_MOUNT.m3('#00f0ff'),
  m40: c => `<circle cx="32" cy="28" r="26.5" fill="#fff1b8" opacity=".25" filter="url(#aglow)"/>` + artQuad({"ear": "horse", "tail": "hair", "bw": 17, "bh": 9.2, "ll": 15, "lw": 4.6, "nx": 3, "ny": 13, "hr": 5, "snout": 7.5, "b": "#ffffff", "d": "#e8e0c8", "mane": "#fff1b8", "wd": "#ffffff", "horn": "#fff1b8", "wings": true, "eye": "#fff1b8"}),
  m41: c => `<circle cx="32" cy="28" r="26.5" fill="#d8b878" opacity=".2" filter="url(#aglow)"/>` + artQuad({"ear": "point", "tail": "short", "bw": 16, "bh": 9, "ll": 15, "lw": 4, "nx": 3, "ny": 12, "hr": 4.5, "snout": 6, "b": "#9a6a3a", "d": "#5a3a1e", "horns": "#f4e6c0", "eye": "#b8ff9a"}),
  m37: c => `<circle cx="32" cy="28" r="26.5" fill="#e8fdff" opacity=".2" filter="url(#aglow)"/>` + artQuad({"ear": "horse", "tail": "hair", "bw": 17, "bh": 9.2, "ll": 15, "lw": 4.6, "nx": 3, "ny": 13, "hr": 5, "snout": 7.5, "b": "#f8feff", "d": "#bfe9f0", "mane": "#9ffcff", "wd": "#e8fdff", "horn": "#9ffcff", "wings": true, "eye": "#9ffcff"}),
  m38: c => `<circle cx="32" cy="28" r="26.5" fill="#ffffff" opacity=".2" filter="url(#aglow)"/>` + artQuad({"tail": "long", "wings": true, "bw": 16, "bh": 8, "ll": 12, "nx": 5, "ny": 14, "hr": 5, "snout": 8, "b": "#e8fdff", "d": "#9ffcff", "wd": "#ffffff", "horns": "#ffd56a", "eye": "#9ffcff"}),
  m39: c => `<circle cx="32" cy="28" r="26.5" fill="#e8fdff" opacity=".2" filter="url(#aglow)"/>` + artQuad({"ear": "round", "tail": "long", "bw": 16, "bh": 7.6, "ll": 12, "lw": 4.4, "nx": 3, "ny": 8, "hr": 5.6, "snout": 3.5, "b": "#9ffcff", "d": "#4aa8b8", "mane": "#ffffff", "wd": "#e8fdff", "wings": true, "eye": "#ffffff"})
};
/* ---------- Instruments ---------- */
const ART_INSTR = {
  i0: c => _rot(-35, `<rect x="6" y="29" width="52" height="6" rx="3" fill="url(#awood)" stroke="#0007" stroke-width=".5"/><rect x="6" y="29" width="52" height="2" rx="1" fill="#fff" opacity=".2"/>${[20, 27, 34, 41, 48].map(x => `<circle cx="${x}" cy="32" r="1.3" fill="#1a0f06"/>`).join('')}<rect x="10" y="28.4" width="2.4" height="7.2" fill="#c9a060"/><path d="M6 30v4" stroke="#1a0f06" stroke-width="1.6"/>`),
  i1: c => _rot(35, `<rect x="30" y="2" width="4" height="30" fill="#3a2414"/><rect x="28.5" y="0" width="7" height="7" rx="1.4" fill="#1d130b"/><path d="M32 27Q20 27 21 36Q22 40 20 44Q17 56 32 58Q47 56 44 44Q42 40 43 36Q44 27 32 27Z" fill="url(#awood)" stroke="#0008" stroke-width=".6"/><circle cx="32" cy="41" r="4.6" fill="#120a05"/><rect x="26.5" y="50" width="11" height="2.2" fill="#1d130b"/><path d="M31 2V51M33 2V51" stroke="#e9e2c9" stroke-width=".45"/><path d="M32 2V51" stroke="${c}" stroke-width=".6"/>`),
  i2: c => _rot(35, `<rect x="30.4" y="3" width="3.2" height="24" fill="#1d130b"/><path d="M30 3q2-5 4 0" fill="none" stroke="#3a2414" stroke-width="2.4"/><path d="M32 23Q23 23 24 31Q28 34 24.5 38Q20 52 32 55Q44 52 39.5 38Q36 34 40 31Q41 23 32 23Z" fill="#8a3b1c" stroke="#0008" stroke-width=".6"/><path d="M27 39q-1.6 4 0 8M37 39q1.6 4 0 8" fill="none" stroke="#1d0c05" stroke-width="1"/><rect x="29" y="40" width="6" height="1.6" fill="#e3c08a"/><path d="M31.2 4V52M32.8 4V52" stroke="#eee" stroke-width=".4"/><path d="M32 50l-2 6h4z" fill="#1d130b"/>`) + `<path d="M8 52L54 10" stroke="#d9c7a0" stroke-width="1"/><path d="M8 52l3-1" stroke="#3a2414" stroke-width="3"/>`,
  i3: c => `<path d="M32 60V54" stroke="#c9cdd6" stroke-width="1.4"/><rect x="30.3" y="2" width="3.4" height="24" fill="#1d130b"/><path d="M30 3q2-5 4 0" fill="none" stroke="#3a2414" stroke-width="2.6"/><path d="M32 20Q20 20 21 30Q26 34 22 39Q15 54 32 56Q49 54 42 39Q38 34 43 30Q44 20 32 20Z" fill="#6f2c15" stroke="#0008" stroke-width=".6"/><path d="M25.5 39q-2 5 0 10M38.5 39q2 5 0 10" fill="none" stroke="#1d0c05" stroke-width="1.1"/><rect x="28" y="41" width="8" height="1.8" fill="#e3c08a"/><path d="M31 4V52M33 4V52" stroke="#eee" stroke-width=".45"/><path d="M32 50l-2.4 5h4.8z" fill="#1d130b"/><path d="M24 26q3-4 8-4" stroke="#fff" stroke-width="1.6" opacity=".2" fill="none"/>`,
  i4: c => `<rect x="8" y="12" width="48" height="38" rx="2" fill="#2a1a10" stroke="#000" stroke-width=".6"/><rect x="11" y="15" width="42" height="15" rx="1" fill="#3b2617"/><rect x="26" y="18" width="12" height="9" fill="#efe6cc"/><path d="M28 21h8M28 24h6" stroke="#333" stroke-width=".6"/><rect x="6" y="32" width="52" height="9" rx="1" fill="#1c110a"/><rect x="8" y="33.5" width="48" height="6" fill="#f5f1e6"/>${Array.from({ length: 15 }, (_, i) => `<path d="M${11.2 + i * 3.2} 33.5v6" stroke="#999" stroke-width=".35"/>`).join('')}${[0, 1, 3, 4, 5, 7, 8, 10, 11, 12].map(i => `<rect x="${10.3 + i * 3.2}" y="33.5" width="1.8" height="3.6" fill="#0c0c10"/>`).join('')}<rect x="10" y="50" width="4" height="8" fill="#1c110a"/><rect x="50" y="50" width="4" height="8" fill="#1c110a"/><circle cx="16" cy="22" r="2" fill="#ffd27a" opacity=".8"/>`,
  i5: c => `<rect x="8" y="44" width="48" height="14" rx="1.5" fill="#2a1a10" stroke="#000" stroke-width=".5"/><rect x="14" y="47" width="36" height="3.4" fill="#f5f1e6"/><rect x="14" y="52" width="36" height="3" fill="#d9d2c0"/>${[10, 12, 14, 12, 10, 12, 14, 12, 10].map((h, i) => { const x = 9 + i * 5.2, top = 44 - 14 - h * 1.9 + Math.abs(4 - i) * 5; return `<rect x="${x}" y="${top}" width="4" height="${44 - top}" rx="1.2" fill="url(#ah${i % 2 ? 4 : 0})" stroke="#0008" stroke-width=".4"/><path d="M${x + .8} ${44 - 9}h2.4l-1.2 3z" fill="#0b0b10"/>`; }).join('')}<circle cx="32" cy="10" r="5" fill="${c}" opacity=".45" filter="url(#aglow)"/>`,
  i6: c => `<circle cx="32" cy="30" r="24" fill="#fff3c4" opacity=".25" filter="url(#aglow)"/>` + ART_WEAPON.harpe(6, c),
  i7: c => `<rect x="12" y="22" width="40" height="28" rx="3" fill="#6a1424" stroke="#000" stroke-width=".6"/><rect x="12" y="20" width="40" height="4" fill="#e8c468"/><rect x="16" y="27" width="32" height="14" rx="2" fill="#3b0a14"/>${[19, 25, 31, 37, 43].map(x => `<rect x="${x}" y="29" width="3" height="10" fill="#e8c468"/>`).join('')}<path d="M52 34h6v-6" fill="none" stroke="#c9cdd6" stroke-width="2"/><circle cx="58" cy="27" r="2" fill="#c9cdd6"/><circle cx="20" cy="53" r="5" fill="#3a2414" stroke="#000" stroke-width=".5"/><circle cx="44" cy="53" r="5" fill="#3a2414" stroke="#000" stroke-width=".5"/>`
};
/* ---------- Demeures ---------- */
const _win = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c || '#ffd27a'}"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c || '#ffd27a'}" opacity=".6" filter="url(#aglow)"/>`;
const ART_HOUSE = {
  h0: c => `<path d="M2 58Q4 22 22 14Q36 6 50 18Q62 30 62 58Z" fill="#3b3b45"/><path d="M8 58Q10 28 24 20Q36 14 46 24Q54 34 55 58Z" fill="#26262e"/><path d="M19 58Q20 36 32 33Q45 36 45 58Z" fill="#06060a"/><circle cx="32" cy="54" r="9" fill="#ff8a3c" opacity=".5" filter="url(#aglow)"/><path d="M32 46q4 5 2 9h-4q-2-4 2-9z" fill="#ffb13c"/><path d="M27 57h10" stroke="#3a2414" stroke-width="2"/><path d="M40 20q3 3 2 7M16 30q-2 4-1 8" stroke="#4d4d58" stroke-width="1.4" fill="none"/>`,
  h1: c => `<rect x="0" y="50" width="64" height="14" fill="#1b1b22"/><path d="M6 58V30Q6 8 32 8Q58 8 58 30V58H48V32Q48 18 32 18Q16 18 16 32V58Z" fill="#4a4652" stroke="#000" stroke-width=".6"/><path d="M16 58V32Q16 18 32 18Q48 18 48 32V58Z" fill="#0a0910"/>${[0, 1, 2, 3, 4, 5, 6].map(i => `<path d="M32 13V8" stroke="#2e2b35" stroke-width="1" transform="rotate(${-72 + i * 24} 32 32)"/>`).join('')}<path d="M24 58V40Q24 30 32 30Q40 30 40 40V58Z" fill="#15131d"/>${[20, 44].map(x => `<rect x="${x - 1}" y="50" width="2" height="6" fill="#efe6cc"/><circle cx="${x}" cy="48.5" r="3.5" fill="#ffc861" opacity=".7" filter="url(#aglow)"/><path d="M${x} 46.5q1.4 2 0 3.4q-1.4-1.4 0-3.4z" fill="#ffd98a"/>`).join('')}<path d="M27 44q5-6 10 0" stroke="${c}" stroke-width="1" fill="none" opacity=".8"/>`,
  h2: c => `<rect x="0" y="54" width="64" height="10" fill="#1d2a1c"/><path d="M12 56V26L24 12L30 19V56Z" fill="#6c6a70" stroke="#000" stroke-width=".5"/><path d="M30 56V24L36 20L40 26L46 22L52 30V56Z" fill="#59575e" stroke="#000" stroke-width=".5"/><path d="M17 56V40Q17 33 21 33Q25 33 25 40V56Z" fill="#0c0c12"/>${_win(35, 34, 4, 9, '#ffd27a')}${_win(43, 36, 4, 8, '#9fd3ff')}<path d="M24 12V4M21 7h6" stroke="#cfcfd6" stroke-width="1.6"/><path d="M4 56q2-8 5-2q2-10 5 0M50 56q3-9 5-1q2-6 4 1" fill="none" stroke="#4f8a3c" stroke-width="1.6"/><circle cx="33" cy="52" r="1.4" fill="#ff6b8a"/><circle cx="37" cy="53" r="1.4" fill="#ffd24a"/><circle cx="41" cy="52" r="1.4" fill="#b07cff"/>`,
  h3: c => `<rect x="0" y="54" width="64" height="10" fill="#1a2219"/><rect x="10" y="28" width="44" height="28" fill="#6e5b4e" stroke="#000" stroke-width=".5"/><path d="M6 30L22 12H42L58 30Z" fill="#3a2a2e" stroke="#000" stroke-width=".5"/><path d="M26 30L32 18L38 30Z" fill="#5a4a40" stroke="#000" stroke-width=".4"/><rect x="44" y="10" width="5" height="12" fill="#4a3b34"/>${_win(14, 34, 6, 7)}${_win(24, 34, 6, 7)}${_win(44, 34, 6, 7)}${_win(14, 45, 6, 7, '#2a2733')}${_win(44, 45, 6, 7)}<rect x="28" y="42" width="8" height="14" rx="1" fill="#2a1a10"/><circle cx="34.3" cy="49.5" r=".8" fill="#e7c873"/>${_win(30.5, 22.5, 3, 4, c)}<path d="M26 56h12v2H26z" fill="#8a7a6e"/>`,
  h4: c => `<path d="M0 58L14 40L26 50L40 34L64 56V64H0Z" fill="#2a3440"/><rect x="14" y="30" width="36" height="26" fill="#8a8f98" stroke="#000" stroke-width=".5"/><path d="M14 30h4v-4h4v4h4v-4h4v4h4v-4h4v4h4v-4h4v4h4" fill="#8a8f98" stroke="#000" stroke-width=".5"/><rect x="6" y="20" width="11" height="36" fill="#a2a7b0" stroke="#000" stroke-width=".5"/><rect x="47" y="20" width="11" height="36" fill="#a2a7b0" stroke="#000" stroke-width=".5"/><path d="M4 20L11.5 6L19 20ZM45 20L52.5 6L60 20Z" fill="#3d5a73" stroke="#000" stroke-width=".5"/><path d="M11.5 6V1l5 2-5 2M52.5 6V1l5 2-5 2" fill="${c}" stroke="${c}" stroke-width=".6"/><path d="M27 56V44Q27 38 32 38Q37 38 37 44V56Z" fill="#1a1410"/>${_win(9.5, 28, 4, 6)}${_win(50.5, 28, 4, 6)}${_win(20, 36, 4, 5)}${_win(40, 36, 4, 5)}<path d="M0 22q6-3 10 0M52 14q5-2 9 1" stroke="#e9eef5" stroke-width="1.6" fill="none" opacity=".55"/>`,
  h5: c => `<circle cx="32" cy="58" r="20" fill="#8b5cf6" opacity=".45" filter="url(#aglow)"/><path d="M4 58L10 26L18 32L22 12L32 4L42 12L46 32L54 26L60 58Z" fill="#17141f" stroke="#000" stroke-width=".6"/><path d="M22 12L32 4L42 12L38 18H26Z" fill="#231e30"/><path d="M26 58V42L32 34L38 42V58Z" fill="#05040a"/><path d="M26 58V42L32 34L38 42V58" fill="none" stroke="#8b5cf6" stroke-width="1.2"/>${_win(30.5, 14, 3, 6, '#b07cff')}${_win(14, 38, 3, 6, '#b07cff')}${_win(47, 38, 3, 6, '#b07cff')}${_win(30.5, 24, 3, 5, '#00f0ff')}<path d="M10 26V16M54 26V16M32 4V-2" stroke="#3a3350" stroke-width="1.6"/><path d="M32 58V46" stroke="#00f0ff" stroke-width="1.4" opacity=".9"/>`,
  h6: c => `<circle cx="32" cy="30" r="27" fill="#fff3c4" opacity=".35" filter="url(#aglow)"/><rect x="0" y="54" width="64" height="10" fill="#3a3626"/><rect x="8" y="26" width="48" height="30" fill="#fffaf0" stroke="#d9c38a" stroke-width=".6"/><path d="M4 28L32 6L60 28Z" fill="#f3e2ad" stroke="#d9b860" stroke-width=".6"/><path d="M27 56V45Q27 39 32 39Q37 39 37 45V56Z" fill="#fff" stroke="#e2b443" stroke-width="1"/><path d="M32 39V56" stroke="#e2b443" stroke-width=".7"/>${[12, 19, 40, 47].map(x => [30, 39, 48].map(y => _win(x, y, 4.4, 5, '#ffe9a8')).join('')).join('')}${_win(26, 30, 4.4, 5, '#ffe9a8')}${_win(33.6, 30, 4.4, 5, '#ffe9a8')}${_win(29.8, 15, 4.4, 6, '#fff')}<path d="M27 56H37" stroke="#fff" stroke-width="3"/>`
};

/* ---------- Tenues (buste, coupe homme ou femme) ---------- */
function artTenue(id, female) {
  const T = TENUES[id] || TENUES.ten_e, [a, d, t] = T.c, f = !!female;
  const sh = f ? 17 : 14, wa = f ? 25 : 22.5, hip = f ? 19.5 : 21.5;   /* x de gauche : épaules, taille, hanches */
  const R = x => 64 - x;
  const torso = `M${sh} 17Q24 13 27 12H37Q40 13 ${R(sh)} 17L${R(wa)} 34L${R(hip)} 44H${hip}L${wa} 34Z`;
  const arms = `<path d="M${sh} 17L${sh - 7} 40L${sh - 2.5} 42L${wa - 1} 26Z" fill="${d}"/><path d="M${R(sh)} 17L${R(sh - 7)} 40L${R(sh - 2.5)} 42L${R(wa - 1)} 26Z" fill="${d}"/>`;
  const legs = c2 => `<path d="M${hip} 44H${R(hip)}L${R(hip + 1.5)} 62H33.5L32 50L30.5 62H${hip + 1.5}Z" fill="${c2}"/>`;
  const neck = `<path d="M28.5 12V8h7v4Q32 15 28.5 12Z" fill="#c9a88e"/>`;
  const skirt = (len, col, w) => `<path d="M${hip} 42H${R(hip)}L${R(hip - w)} ${len}H${hip - w}Z" fill="${col}"/><path d="M32 43V${len}" stroke="#0004" stroke-width=".8"/>`;
  let s = '';
  switch (T.cut) {
    case 'uniform': s = legs(d) + arms + `<path d="${torso}" fill="${a}"/><path d="M27 12L32 20L37 12" fill="none" stroke="${t}" stroke-width="1.4"/><path d="M32 20V44" stroke="${t}" stroke-width="1"/><rect x="${hip}" y="40" width="${64 - hip * 2}" height="3" fill="#0b0b10"/><rect x="30" y="39.6" width="4" height="3.8" fill="${t}"/><path d="M${sh + 1} 18l5 1.4" stroke="${t}" stroke-width="1.6"/>`; break;
    case 'track': s = legs(a) + arms.replace(new RegExp(d, 'g'), a) + `<path d="${torso}" fill="${a}"/><path d="M32 13V44" stroke="${t}" stroke-width="1"/><path d="M${sh} 17L${sh - 7} 40M${R(sh)} 17L${R(sh - 7)} 40" stroke="${t}" stroke-width="1.4"/><path d="M27 12Q32 17 37 12" fill="none" stroke="${t}" stroke-width="2"/><path d="M${hip + 1} 46L${hip + 2.5} 62M${R(hip + 1)} 46L${R(hip + 2.5)} 62" stroke="${t}" stroke-width="1.2"/>`; break;
    case 'apron': s = legs(d) + arms + `<path d="${torso}" fill="${a}"/><path d="M26 20H38L${R(hip - 1)} 56H${hip - 1}Z" fill="${t}"/><path d="M26 20L28 12M38 20L36 12" stroke="${t}" stroke-width="1.3"/><rect x="27.5" y="34" width="9" height="7" fill="none" stroke="#0003" stroke-width=".8"/>`; break;
    case 'coat': s = legs(d) + skirt(58, a, f ? 5 : 2.5) + arms.replace(new RegExp(d, 'g'), a) + `<path d="${torso}" fill="${a}"/><path d="M27 12L32 26L37 12L41 14L34 30H30L23 14Z" fill="${d}"/><path d="M32 26V58" stroke="#0006" stroke-width="1"/><rect x="${hip - 1}" y="38" width="${66 - hip * 2}" height="2.6" fill="${d}"/><circle cx="34.5" cy="33" r="1" fill="${t}"/><circle cx="34.5" cy="46" r="1" fill="${t}"/><path d="M${sh - 6.6} 38l4.6 1.8M${R(sh - 6.6)} 38l-4.6 1.8" stroke="${t}" stroke-width="1.4"/>`; break;
    case 'blouse': s = legs(d) + skirt(54, a, 1.5) + arms.replace(new RegExp(d, 'g'), a) + `<path d="${torso}" fill="${a}"/><path d="M27 12L32 19L37 12" fill="none" stroke="${d}" stroke-width="1.6"/><path d="M32 19V54" stroke="${d}" stroke-width=".8"/><rect x="35" y="24" width="5" height="5" fill="none" stroke="${d}" stroke-width=".8"/><path d="M${sh - 4} 26h5" stroke="${t}" stroke-width="2.4"/><path d="M36.3 25.2v2.6M35 26.5h2.6" stroke="${t}" stroke-width="1"/>`; break;
    case 'robe': s = `<path d="M${hip} 42H${R(hip)}L${R(f ? 8 : 12)} 62H${f ? 8 : 12}Z" fill="${a}"/><path d="M${hip + 4} 44L${f ? 16 : 19} 62M${R(hip + 4)} 44L${R(f ? 16 : 19)} 62M32 44V62" stroke="${d}" stroke-width="1"/>` + `<path d="M${sh} 17L${sh - 9} 40L${sh - 1} 44L${wa} 28Z" fill="${a}"/><path d="M${R(sh)} 17L${R(sh - 9)} 40L${R(sh - 1)} 44L${R(wa)} 28Z" fill="${a}"/><path d="M${sh - 9} 40L${sh - 1} 44M${R(sh - 9)} 40L${R(sh - 1)} 44" stroke="${t}" stroke-width="1.6"/>` + `<path d="${torso}" fill="${a}"/><path d="M27 12Q32 22 37 12" fill="none" stroke="${t}" stroke-width="1.6"/><path d="M${wa} 34Q32 38 ${R(wa)} 34L${R(wa - .6)} 37Q32 41 ${wa - .6} 37Z" fill="${t}"/><path d="M32 38V50" stroke="${t}" stroke-width="1.2"/>${T.glow ? `<circle cx="32" cy="34" r="26" fill="#fff6d0" opacity=".3" filter="url(#aglow)"/>` : ''}`; break;
    case 'suit': s = legs(a) + arms.replace(new RegExp(d, 'g'), a) + `<path d="${torso}" fill="${a}"/><path d="M27 12L32 24L37 12Z" fill="${t}"/><path d="M32 15l-1.6 3 1.6 12 1.6-12z" fill="${d}"/><path d="M27 12L32 28L23 19ZM37 12L32 28L41 19Z" fill="${d}"/><circle cx="32" cy="33" r="1" fill="${d}"/><circle cx="32" cy="38" r="1" fill="${d}"/><path d="M36 22h4" stroke="${t}" stroke-width="1.2"/>`; break;
    case 'cape': s = `<path d="M${sh - 2} 16L${sh - 12} 58H${R(sh - 12)}L${R(sh - 2)} 16Z" fill="${d}"/>` + legs('#2a2d33') + arms.replace(new RegExp(d, 'g'), '#4a5058') + `<path d="${torso}" fill="#5a6068"/><path d="M${sh - 2} 16Q32 26 ${R(sh - 2)} 16L${R(sh + 2)} 13H${sh + 2}Z" fill="${a}"/><path d="M${sh - 2} 16L${sh - 11} 56L${sh - 3} 50L${wa - 3} 22ZM${R(sh - 2)} 16L${R(sh - 11)} 56L${R(sh - 3)} 50L${R(wa - 3)} 22Z" fill="${a}"/>${_gem(32, 19, 2.4, t)}<rect x="${hip}" y="40" width="${64 - hip * 2}" height="2.6" fill="#1a1a20"/>`; break;
    case 'plate': s = legs(d) + `<path d="M${hip + .5} 46h${31 - hip}l-1 14h-${28.5 - hip}zM${R(hip + .5)} 46h-${31 - hip}l1 14h${28.5 - hip}z" fill="${a}" opacity=".9"/>` + arms + `<path d="${torso}" fill="${a}"/><path d="M32 14V44" stroke="${d}" stroke-width="1.4"/><path d="M${wa + 1} 30Q32 35 ${R(wa + 1)} 30M${wa} 36Q32 41 ${R(wa)} 36" fill="none" stroke="${d}" stroke-width="1.1"/><ellipse cx="${sh}" cy="18" rx="7" ry="5" fill="${a}" stroke="${d}" stroke-width=".8"/><ellipse cx="${R(sh)}" cy="18" rx="7" ry="5" fill="${a}" stroke="${d}" stroke-width=".8"/><path d="M${sh - 4} 16q4-3 8-1" stroke="#fff" stroke-width="1.2" opacity=".4" fill="none"/>${_gem(32, 23, 2.8, t)}<path d="M${hip - 1} 42H${R(hip - 1)}L${R(hip + 2)} 48H${hip + 2}Z" fill="${t}" opacity=".85"/>`; break;
    case 'tail': s = legs(a) + `<path d="M${hip} 42L${hip - 3} 60L${hip + 5} 56L${hip + 6} 44ZM${R(hip)} 42L${R(hip - 3)} 60L${R(hip + 5)} 56L${R(hip + 6)} 44Z" fill="${d}"/>` + arms.replace(new RegExp(d, 'g'), a) + `<path d="${torso}" fill="${a}"/><path d="M27 12L32 30L37 12Z" fill="${t}"/><path d="M29.5 14.5l2.5 1.6 2.5-1.6v3l-2.5-1.4-2.5 1.4z" fill="${d}"/><path d="M27 12L32 34L${wa} 34ZM37 12L32 34L${R(wa)} 34Z" fill="${d}" opacity=".9"/><circle cx="32" cy="22" r=".8" fill="${d}"/><circle cx="32" cy="26" r=".8" fill="${d}"/><path d="M${R(sh - 6)} 40L${R(sh - 18)} 30" stroke="#efe6cc" stroke-width="1"/>`; break;
  }
  return neck + s;
}
/* ---------- Accessoires ---------- */
const ART_ACCS = {
  lunettes: c => `<path d="M6 26Q32 18 58 26" fill="none" stroke="#5a4634" stroke-width="3"/><circle cx="21" cy="34" r="11" fill="#12202a" stroke="url(#am0)" stroke-width="3"/><circle cx="43" cy="34" r="11" fill="#12202a" stroke="url(#am0)" stroke-width="3"/><path d="M15 30q4-5 9-3M37 30q4-5 9-3" stroke="#fff" stroke-width="1.6" opacity=".5" fill="none"/><circle cx="21" cy="34" r="7" fill="#ff8a3c" opacity=".25"/><circle cx="43" cy="34" r="7" fill="#ff8a3c" opacity=".25"/>`,
  bandeau: c => `<path d="M8 28Q32 16 56 28V38Q32 26 8 38Z" fill="#d9414f" stroke="#0007" stroke-width=".6"/><path d="M8 31Q32 19 56 31" fill="none" stroke="#fff" stroke-width="1.6" opacity=".7"/><path d="M52 32L60 44L55 45L50 37Z" fill="#b5303d"/><path d="M12 42q2 6 4 0q0-3-2-5q-2 2-2 5z" fill="#7fd0ff"/>`,
  couteau: c => _rot(45, `<path d="M30 6Q37 16 35.5 38H29Z" fill="url(#ah0)" stroke="#0008" stroke-width=".5"/><rect x="28" y="38" width="8.5" height="2.6" fill="url(#am0)"/><rect x="29" y="40.6" width="6.4" height="16" rx="2" fill="url(#awood)"/><circle cx="32.2" cy="45" r=".9" fill="#e7c873"/><circle cx="32.2" cy="52" r=".9" fill="#e7c873"/>`),
  echarpe: c => `<path d="M14 18Q32 10 50 18Q54 26 46 30Q32 36 18 30Q10 26 14 18Z" fill="#c8323f" stroke="#0007" stroke-width=".6"/><path d="M18 22Q32 16 46 22" fill="none" stroke="#0004" stroke-width="1.6"/><path d="M36 30L44 56H34L30 31Z" fill="#b02a36"/><path d="M34 56v4M37 56v4M40 56v4M43 56v4" stroke="#c8323f" stroke-width="1.4"/><path d="M34 40h8M35 47h8" stroke="#0003" stroke-width="1.2"/>`,
  medaille: c => `<path d="M22 4L30 26H36L44 4H37L33 16L29 4Z" fill="#3d6fb0"/><circle cx="33" cy="40" r="15" fill="url(#am0)" stroke="#0008" stroke-width=".7"/><circle cx="33" cy="40" r="11" fill="none" stroke="#0005" stroke-width="1"/><path d="M33 31V49M27 37H39" stroke="#3d4048" stroke-width="2.2"/><path d="M24 33q4-6 10-6" stroke="#fff" stroke-width="1.6" opacity=".5" fill="none"/>`,
  gant: c => `<path d="M20 58V36L14 26Q12 21 16 20Q19 20 21 24L24 29V10Q24 6 27 6Q30 6 30 10V8Q30 4 33 4Q36 4 36 8V10Q36 6 39 6.5Q42 7 42 11V14Q42 11 45 11.5Q48 12 48 16V40Q48 48 44 58Z" fill="url(#aleath)" stroke="#0009" stroke-width=".7"/><path d="M30 10V26M36 10V26M42 14V27" stroke="#0006" stroke-width="1"/><rect x="19" y="52" width="26" height="6" fill="#1d130b"/><circle cx="32" cy="55" r="1.3" fill="${c}"/>`,
  masque: c => `<path d="M12 14Q32 6 52 14Q54 30 44 36L32 60L20 36Q10 30 12 14Z" fill="#17151c" stroke="#000" stroke-width=".7"/><path d="M26 34L32 58L38 34Q32 30 26 34Z" fill="#2a2632"/><ellipse cx="23" cy="24" rx="6" ry="4.6" fill="#05050a" stroke="${c}" stroke-width="1"/><ellipse cx="41" cy="24" rx="6" ry="4.6" fill="#05050a" stroke="${c}" stroke-width="1"/><path d="M16 14q8-4 14-3" stroke="#fff" stroke-width="1.4" opacity=".25" fill="none"/>`,
  avion: c => _rot(-20, `<rect x="8" y="29" width="48" height="6" rx="3" fill="#c8323f" stroke="#0007" stroke-width=".5"/><path d="M26 32L20 10H30L36 32ZM26 32L20 54H30L36 32Z" fill="#d9414f" stroke="#0007" stroke-width=".5"/><path d="M10 32L6 22H12L15 30ZM10 32L6 42H12L15 34Z" fill="#b02a36"/><circle cx="56" cy="32" r="2.4" fill="url(#awood)"/><path d="M57 22V42" stroke="url(#awood)" stroke-width="2" stroke-linecap="round"/><circle cx="44" cy="32" r="2" fill="#7fd0ff"/>`),
  montre: c => `<path d="M32 12V6" stroke="#e2b443" stroke-width="3"/><circle cx="32" cy="5" r="3" fill="none" stroke="url(#am4)" stroke-width="1.6"/><circle cx="32" cy="35" r="20" fill="url(#am4)" stroke="#0008" stroke-width=".7"/><circle cx="32" cy="35" r="16" fill="#f4efe0"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => `<path d="M32 21v2.6" stroke="#222" stroke-width="1" transform="rotate(${i * 30} 32 35)"/>`).join('')}<path d="M32 35V24M32 35L40 39" stroke="#111" stroke-width="1.6" stroke-linecap="round"/><circle cx="32" cy="35" r="1.6" fill="${c}"/><path d="M6 14Q14 6 26 12" fill="none" stroke="url(#am4)" stroke-width="1.4" stroke-dasharray="2.4 1.6"/>`,
  partition: c => _rot(-6, `<rect x="12" y="6" width="40" height="52" rx="1.5" fill="#f1e9d2" stroke="#0007" stroke-width=".6"/>${[16, 28, 40].map(y => [0, 1.8, 3.6, 5.4, 7.2].map(k => `<path d="M16 ${y + k}H48" stroke="#555" stroke-width=".4"/>`).join('')).join('')}${[[20, 21], [26, 18.4], [32, 20], [38, 17], [44, 19.6], [20, 33], [27, 31], [34, 34], [41, 30.4]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="1.9" ry="1.4" fill="#111"/><path d="M${x + 1.7} ${y}v-6" stroke="#111" stroke-width=".7"/>`).join('')}<path d="M18 52h20" stroke="${c}" stroke-width="1.2"/>`),
  lanterne: c => `<circle cx="32" cy="36" r="20" fill="#ffc861" opacity=".4" filter="url(#aglow)"/><path d="M24 12Q32 2 40 12" fill="none" stroke="url(#am0)" stroke-width="2.2"/><path d="M22 16H42L44 20H20Z" fill="url(#am0)"/><rect x="21" y="20" width="22" height="30" rx="2" fill="#ffd98a" opacity=".85" stroke="url(#am0)" stroke-width="2"/><path d="M28 20V50M36 20V50" stroke="#5d626c" stroke-width="1.4"/><path d="M32 30q5 7 2 13h-4q-3-6 2-13z" fill="#ff9a3c"/><path d="M18 50H46V55H18Z" fill="url(#am0)"/>`,
  boucle: c => `<path d="M32 6V14" stroke="url(#am4)" stroke-width="1.6"/><circle cx="32" cy="16" r="3" fill="none" stroke="url(#am4)" stroke-width="1.6"/><path d="M32 20Q16 40 32 58Q48 40 32 20Z" fill="#bfeaff" opacity=".8" stroke="#fff" stroke-width=".8"/><path d="M32 20Q24 38 32 58" fill="#fff" opacity=".35"/><path d="M27 34q1-6 4-9" stroke="#fff" stroke-width="1.6" fill="none"/><circle cx="32" cy="42" r="12" fill="${c}" opacity=".25" filter="url(#aglow)"/>`,
  plume: c => _rot(30, `<path d="M32 4Q46 20 38 46L32 52L26 46Q18 20 32 4Z" fill="#e9eef5" stroke="#0006" stroke-width=".5"/><path d="M32 4Q40 22 35 46L32 52Z" fill="#c9a36a"/><path d="M32 8V62" stroke="#7a5a2a" stroke-width="1.2"/>${[14, 20, 26, 32, 38].map(y => `<path d="M32 ${y + 4}L${25 - (y > 30 ? -2 : 0)} ${y}M32 ${y + 4}L${39 + (y > 30 ? -2 : 0)} ${y}" stroke="#0003" stroke-width=".7"/>`).join('')}`),
  monocle: c => `<circle cx="28" cy="28" r="17" fill="#0e1a22" stroke="url(#am4)" stroke-width="3.4"/><circle cx="28" cy="28" r="13" fill="#7ad7ff" opacity=".18"/><path d="M18 22q5-8 13-7" stroke="#fff" stroke-width="2" opacity=".6" fill="none"/><path d="M41 40Q54 44 50 60" fill="none" stroke="url(#am4)" stroke-width="1.4" stroke-dasharray="2.6 1.4"/><circle cx="24" cy="30" r="1" fill="#fff"/><circle cx="33" cy="24" r=".7" fill="#fff"/><circle cx="30" cy="35" r=".7" fill="#fff"/>`,
  couronne: c => `<path d="M10 46L8 18L20 32L32 12L44 32L56 18L54 46Z" fill="#3b3640" stroke="#000" stroke-width=".7"/><path d="M10 46H54V52H10Z" fill="#2a2630" stroke="#000" stroke-width=".6"/><path d="M12 44L11 24L20 35" fill="none" stroke="#6b6474" stroke-width="1"/>${_gem(32, 40, 3.4, c)}<circle cx="8" cy="18" r="2" fill="#6b6474"/><circle cx="32" cy="12" r="2.4" fill="${c}"/><circle cx="56" cy="18" r="2" fill="#6b6474"/><path d="M18 10q1-4 3 0M42 6q1-4 3 0" stroke="#8a8490" stroke-width="1" fill="none" opacity=".7"/>`,
  croc: c => `<path d="M22 8Q40 8 42 16Q44 40 30 60Q28 36 20 18Q19 10 22 8Z" fill="#efe9d8" stroke="#0008" stroke-width=".7"/><path d="M24 12Q34 30 31 52" fill="none" stroke="#b9b29c" stroke-width="1.4"/><path d="M20 8H44V14H20Z" fill="url(#am5)"/><path d="M32 8V2" stroke="#c9cdd6" stroke-width="1.6"/><circle cx="32" cy="11" r="1.6" fill="${c}"/>`,
  cle: c => `<g opacity=".85">` + _rot(40, `<circle cx="32" cy="14" r="9" fill="none" stroke="#bfeaff" stroke-width="3.6"/><rect x="30.3" y="22" width="3.4" height="34" fill="#bfeaff"/><path d="M33.7 44H40V48H33.7ZM33.7 51H38V55H33.7Z" fill="#bfeaff"/>`) + `</g><circle cx="32" cy="32" r="22" fill="${c}" opacity=".22" filter="url(#aglow)"/>`,
  broche: c => `<circle cx="32" cy="32" r="22" fill="#fff3c4" opacity=".3" filter="url(#aglow)"/><circle cx="32" cy="32" r="18" fill="url(#agold)" stroke="#0007" stroke-width=".7"/><circle cx="32" cy="32" r="14" fill="#1a1626"/>${[26, 29, 32, 35, 38].map(y => `<path d="M21 ${y}H43" stroke="#e7c873" stroke-width=".5"/>`).join('')}${[[25, 35], [29.5, 32], [34, 29], [38.5, 32]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="1.7" ry="1.3" fill="#fff"/><path d="M${x + 1.5} ${y}v-5" stroke="#fff" stroke-width=".6"/>`).join('')}`
};
/* ---------- Auras ---------- */
function artAura(id) {
  const [col, kind] = ART_AURA[id] || ['#8b5cf6', 'spark'];
  const pts = [[14, 16], [50, 14], [10, 40], [54, 38], [22, 54], [44, 54], [32, 8]];
  const M = {
    spark: ([x, y]) => `<path d="M${x} ${y - 3}L${x + .9} ${y - .9}L${x + 3} ${y}L${x + .9} ${y + .9}L${x} ${y + 3}L${x - .9} ${y + .9}L${x - 3} ${y}L${x - .9} ${y - .9}Z" fill="${col}"/>`,
    steam: ([x, y]) => `<path d="M${x} ${y + 4}q-3-3 0-5q3-2 0-5" fill="none" stroke="${col}" stroke-width="1.4" stroke-linecap="round" opacity=".8"/>`,
    dust: ([x, y]) => `<circle cx="${x}" cy="${y}" r="1.2" fill="${col}"/><circle cx="${x + 3}" cy="${y + 2}" r=".7" fill="${col}"/><circle cx="${x - 2}" cy="${y + 3}" r=".8" fill="${col}"/>`,
    flame: ([x, y]) => `<path d="M${x} ${y - 4}q4 4 2 7h-4q-2-3 2-7z" fill="${col}"/>`,
    drop: ([x, y]) => `<path d="M${x} ${y - 3.5}q3 3.6 0 5.6q-3-2 0-5.6z" fill="${col}"/>`,
    snow: ([x, y]) => `<path d="M${x - 3} ${y}h6M${x} ${y - 3}v6M${x - 2} ${y - 2}l4 4M${x + 2} ${y - 2}l-4 4" stroke="${col}" stroke-width=".9"/>`,
    bolt: ([x, y]) => `<path d="M${x + 1} ${y - 4}l-3 4h2.4l-1.4 4l4-5h-2.4z" fill="${col}"/>`,
    smoke: ([x, y]) => `<circle cx="${x}" cy="${y}" r="3.4" fill="${col}" opacity=".5" filter="url(#aglow)"/><circle cx="${x}" cy="${y}" r="1.4" fill="${col}"/>`,
    bird: ([x, y]) => `<path d="M${x - 4} ${y}q2-3 4 0q2-3 4 0q-2-1-4 1q-2-2-4-1z" fill="#0b0a10" stroke="#5a5266" stroke-width=".4"/>`,
    leaf: ([x, y]) => `<path d="M${x - 3} ${y + 2}q0-5 6-5q0 5-6 5z" fill="${col}"/><path d="M${x - 3} ${y + 2}l5-4" stroke="#0005" stroke-width=".5"/>`,
    wave: ([x, y]) => `<path d="M${x - 5} ${y}q2.5-3 5 0t5 0" fill="none" stroke="${col}" stroke-width="1.3" stroke-linecap="round"/>`,
    note: ([x, y]) => `<ellipse cx="${x - 1}" cy="${y + 2}" rx="1.8" ry="1.3" fill="${col}"/><path d="M${x + .6} ${y + 2}v-6l3 1" fill="none" stroke="${col}" stroke-width=".9"/>`,
    ray: ([x, y]) => `<path d="M32 32L${x} ${y}" stroke="${col}" stroke-width="1.6" opacity=".7" stroke-linecap="round"/>`
  }[kind];
  return `<circle cx="32" cy="34" r="24" fill="${col}" opacity=".5" filter="url(#aglow)"/><circle cx="32" cy="34" r="19" fill="none" stroke="${col}" stroke-width="1.4" opacity=".8"/><circle cx="32" cy="34" r="14" fill="none" stroke="${col}" stroke-width=".7" opacity=".5" stroke-dasharray="2 3"/><circle cx="32" cy="24" r="5" fill="#d7d9e0" opacity=".9"/><path d="M22 48Q22 31 32 31Q42 31 42 48Z" fill="#d7d9e0" opacity=".9"/>${pts.map(M).join('')}`;
}
function artTitre(r, c) {
  return `<path d="M6 22H58L52 31L58 40H6L12 31Z" fill="${ART_METAL[Math.min(6, r)][2]}" stroke="${c}" stroke-width="1"/><path d="M12 19H52V43H12Z" fill="url(#am${Math.min(6, r)})" stroke="#0008" stroke-width=".6"/><path d="M16 27H48M19 31.5H45M16 36H48" stroke="#0007" stroke-width="1.2" stroke-linecap="round"/>${Array.from({ length: Math.min(5, r + 1) }, (_, i) => { const x = 32 + (i - Math.min(4, r) / 2) * 7; return `<path d="M${x} 8l1.2 2.6 2.8.3-2.1 1.9.6 2.8-2.5-1.5-2.5 1.5.6-2.8-2.1-1.9 2.8-.3z" fill="${c}"/>`; }).join('')}<path d="M24 43V56L28 52L32 56V43M32 43V56L36 52L40 56V43" fill="${c}" opacity=".85"/>`;
}
const ART_MAT = {
  ferraille: c => `<circle cx="24" cy="28" r="12" fill="none" stroke="url(#am0)" stroke-width="6" stroke-dasharray="5 3.2"/><circle cx="24" cy="28" r="8" fill="url(#am0)" stroke="#0008" stroke-width=".6"/><circle cx="24" cy="28" r="3" fill="#0b0b10"/><path d="M38 34L56 40L50 56L34 50Z" fill="url(#ah0)" stroke="#0008" stroke-width=".6"/><circle cx="40" cy="39" r="1.3" fill="#0b0b10"/><circle cx="49" cy="51" r="1.3" fill="#0b0b10"/><rect x="36" y="12" width="18" height="4" rx="2" fill="url(#am0)" transform="rotate(25 45 14)"/>`,
  ether: c => `<circle cx="32" cy="34" r="20" fill="${c}" opacity=".4" filter="url(#aglow)"/><path d="M32 6L44 26L36 58H28L20 26Z" fill="${c}" stroke="#fff" stroke-width=".7" stroke-opacity=".7"/><path d="M32 6L36 26L32 58L28 26Z" fill="#fff" opacity=".45"/><path d="M20 26H44" stroke="#fff" stroke-width=".7" opacity=".6"/><path d="M12 40l4 6-3 6-3-6zM50 16l3 5-2 5-3-5z" fill="${c}"/>`,
  coeur: c => `<circle cx="32" cy="34" r="22" fill="${c}" opacity=".45" filter="url(#aglow)"/><path d="M32 54L12 32Q8 18 20 14Q28 12 32 22Q36 12 44 14Q56 18 52 32Z" fill="${c}" stroke="#fff" stroke-width=".7" stroke-opacity=".6"/><path d="M32 22L26 34L32 54L38 34Z" fill="#fff" opacity=".3"/><path d="M12 32L26 34L20 14M52 32L38 34L44 14" fill="none" stroke="#fff" stroke-width=".6" opacity=".5"/>`,
  cendre: c => `<path d="M8 54Q14 36 28 38Q34 26 44 36Q56 38 58 54Z" fill="#3a3538" stroke="#000" stroke-width=".6"/><path d="M16 52Q20 42 30 44Q36 36 42 44Q50 46 52 52Z" fill="#57504f"/><circle cx="32" cy="44" r="12" fill="${c}" opacity=".5" filter="url(#aglow)"/><circle cx="26" cy="48" r="1.4" fill="${c}"/><circle cx="36" cy="45" r="1.8" fill="#ffb347"/><circle cx="42" cy="50" r="1.2" fill="${c}"/><path d="M30 26q3-6 0-10M38 24q3-5 1-9M24 28q-2-4 0-8" fill="none" stroke="#8a8490" stroke-width="1.2" stroke-linecap="round" opacity=".7"/>`
};
function artChip(type, r, c) {
  const g = { regen: 'M23 33h4l2-6 4 12 3-8 1.5 2H41', soin: 'M32 26v12M26 32h12', savoir: 'M26 38V28l6 6 6-6v10', fortune: 'M36 28q-4-3-8 0t0 4 8 4-8 3', prospect: 'M32 25l2 5 5 2-5 2-2 5-2-5-5-2 5-2z', recolte: 'M25 39L39 25M33 25h6v6', critique: 'M34 24l-7 9h5l-2 7 7-9h-5z', force: 'M24 32h16M24 28v8M40 28v8M27 30v4M37 30v4', vitesse: 'M24 38q10-2 14-14q-12 2-14 14z', rempart: 'M32 24l8 3v6q0 5-8 8q-8-3-8-8v-6z', arcane: 'M32 32m-8 0a8 4 0 1 0 16 0a8 4 0 1 0-16 0M32 32m-1.5 0a1.5 1.5 0 1 0 3 0', garde: 'M32 24l8 3v6q0 5-8 8q-8-3-8-8v-6zM28 32l3 3 5-6', echo: 'M26 30q6-8 12 0M38 34q-6 8-12 0M38 26v4h-4M26 38v-4h4' }[type] || 'M26 32h12';
  return `${[18, 26, 34, 42].map(p => `<path d="M${p + 2} 8v8M${p + 2} 48v8M8 ${p + 2}h8M48 ${p + 2}h8" stroke="${ART_METAL[Math.min(6, r)][1]}" stroke-width="2.4" stroke-linecap="round"/>`).join('')}<rect x="14" y="14" width="36" height="36" rx="4" fill="#0f1a16" stroke="url(#am${Math.min(6, r)})" stroke-width="2"/><rect x="19" y="19" width="26" height="26" rx="2" fill="#0a0f0d" stroke="${c}" stroke-width=".8"/><path d="${g}" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="19" cy="19" r="1.4" fill="${c}"/>`;
}

/* ---------- Points d'entrée ---------- */
function artGear(type, r, size = 52, extra) {
  const c = RARITIES[r].color, f = ART_WEAPON[type] || ART_ARMOR[type];
  return artWrap(f ? f(r, c) : '', r, size, extra);
}
function artShop(it, size = 56, extra) {
  const c = RARITIES[it.r].color, f = ART_MOUNT[it.id] || ART_INSTR[it.id] || ART_HOUSE[it.id];
  return artWrap(f ? f(c) : '', it.r, size, extra);
}
/* Skin d'arme : une lame de l'élément, entourée de son effet */
function artSkin(id, r) {
  const S = SKIN_FX[id]; if (!S) return '';
  const [b, g, e1, e2] = S.c, fx = S.fx, n = 3 + Math.min(5, r);
  const deco = Array.from({ length: n }, (_, i) => { const y = 14 + i * (36 / n), x = 32 + (i % 2 ? 9 : -9), s = 1.4 + (i % 3) * 0.6;
    return fx === 'flame' ? `<path d="M${x} ${y + 6}q-4-5 0-11q1 4 3 5q2-3 1-6q4 5 0 12z" fill="${i % 2 ? e1 : e2}" opacity=".85"/>`
      : fx === 'frost' ? `<path d="M${x} ${y - 3}v6M${x - 3} ${y}h6M${x - 2} ${y - 2}l4 4M${x + 2} ${y - 2}l-4 4" stroke="${e1}" stroke-width=".9"/>`
      : fx === 'shadow' ? `<circle cx="${x}" cy="${y}" r="${s * 1.8}" fill="${e1}" opacity=".55"/><circle cx="${x}" cy="${y}" r="${s * 0.6}" fill="${e2}"/>`
      : fx === 'water' || fx === 'blood' ? `<path d="M${x} ${y - 3}q3 4 0 6q-3-2 0-6z" fill="${e1}"/>`
      : fx === 'bolt' ? `<path d="M${x - 2} ${y - 4}l3 3-2 1 3 4" fill="none" stroke="${e1}" stroke-width="1"/>`
      : fx === 'leaf' ? `<ellipse cx="${x}" cy="${y}" rx="${s * 1.4}" ry="${s * 0.7}" transform="rotate(${i * 40} ${x} ${y})" fill="${e1}"/>`
      : fx === 'wind' ? `<path d="M${x - 5} ${y}q3-3 6 0t5 0" fill="none" stroke="${e1}" stroke-width=".9"/>`
      : `<path d="M${x} ${y - s * 2}l${s * 0.5} ${s * 1.5} ${s * 1.5} ${s * 0.5}-${s * 1.5} ${s * 0.5}-${s * 0.5} ${s * 1.5}-${s * 0.5}-${s * 1.5}-${s * 1.5}-${s * 0.5} ${s * 1.5}-${s * 0.5}z" fill="${fx === 'prism' ? ['#ff6b6b', '#ffd93b', '#6bff8f', '#6bc5ff', '#c56bff'][i % 5] : e1}"/>`; }).join('');
  return `<circle cx="32" cy="32" r="22" fill="${g}" opacity=".32" filter="url(#aglow)"/><path d="M32 6L36 12V44H28V12Z" fill="${b}" stroke="${g}" stroke-width="1.2"/><path d="M32 8V43" stroke="#fff" stroke-width=".8" opacity=".55"/><rect x="22" y="44" width="20" height="3" rx="1" fill="url(#am${Math.min(6, r)})"/><rect x="30" y="47" width="4" height="10" rx="1" fill="#3a2a20"/><circle cx="32" cy="58" r="2" fill="${g}"/>${deco}`;
}
/* Ailes : une paire déployée, plus grande et plus fournie avec la rareté */
function artWing(id, r) {
  const W = WING_FX[id]; if (!W) return '';
  const [a, b] = W.c, k = 0.7 + r * 0.05, n = 5 + Math.min(6, r), soft = W.kind === 'flamme' || W.kind === 'lumiere';
  const half = s => { let p = ''; for (let i = 0; i < n; i++) { const u = i / (n - 1), ang = -70 + u * 95, L = (14 + 12 * Math.sin(Math.PI * (0.15 + 0.7 * u))) * k;
    p += W.kind === 'papillon' ? '' : `<ellipse cx="0" cy="${-L / 2}" rx="${W.kind === 'cuir' || W.kind === 'meca' || W.kind === 'cristal' ? 1.6 : 2.6}" ry="${L / 2}" transform="rotate(${ang})" fill="${i % 2 ? a : b}" opacity="${soft ? 0.7 : 1}" stroke="#0005" stroke-width=".3"/>`; }
    if (W.kind === 'papillon') p = `<ellipse cx="-9" cy="-10" rx="11" ry="8" transform="rotate(-30)" fill="${a}" stroke="${b}" stroke-width="1.5"/><ellipse cx="-6" cy="5" rx="7" ry="5" transform="rotate(20)" fill="${b}"/>`;
    if (W.kind === 'cuir') p = `<path d="M0 0L${-24 * k} ${-18 * k}L${-20 * k} ${-4 * k}L${-26 * k} ${2 * k}L${-14 * k} ${4 * k}L${-16 * k} ${12 * k}Z" fill="${a}" stroke="${b}" stroke-width="1"/>` + p;
    return `<g transform="translate(${32 + s * 3} 30) scale(${s} 1)">${p}</g>`; };
  return `<circle cx="32" cy="32" r="${18 + r * 1.5}" fill="${b}" opacity="${0.18 + r * 0.04}" filter="url(#aglow)"/>${half(-1)}${half(1)}<circle cx="32" cy="22" r="4.5" fill="#d7d9e0"/><path d="M27 46Q27 29 32 29Q37 29 37 46Z" fill="#d7d9e0"/>`;
}
function artCosm(c, size = 52, extra) {
  if (c.cat === 'armeskin') return artGear(c.wtype, c.r, size, extra);
  const col = RARITIES[c.r].color, fem = !!(state.profile && state.profile.look && state.profile.look.gender === 'f');
  const inner = c.cat === 'tenue' ? artTenue(c.id, fem) : c.cat === 'accessoire' ? (ART_ACCS[ART_ACC[c.id]] || ART_ACCS.broche)(col) : c.cat === 'aura' ? artAura(c.id) : c.cat === 'armeskin' ? '' : c.cat === 'skin' ? artSkin(c.id, c.r) : c.cat === 'ailes' ? artWing(c.id, c.r) : artTitre(c.r, col);
  return artWrap(inner, c.r, size, extra);
}
function artMat(m, size = 40) { const M = MATERIALS[m]; return `<span class="art" style="width:${size}px;height:${size}px;color:${M.color}"><svg viewBox="0 0 64 64" width="${size}" height="${size}" aria-hidden="true"><rect width="64" height="64" fill="url(#abg)"/>${ART_MAT[m](M.color)}</svg></span>`; }
function artChipTile(type, r, size = 40) { return artWrap(artChip(type, r, RARITIES[r].color), r, size); }

/* ==========================================================================
   ELYOS SYSTEM — Le personnage du Joueur (3D) et sa création
   Le moteur 3D (elyos3d.js) est chargé à la demande. Une seule toile WebGL est
   créée ; elle est déplacée là où l'écran en a besoin.
   ========================================================================== */
const HERO_DEFAULT = { gender: 'm', height: 1, build: 1, shoulders: 1, legs: 1, headSize: 1, eyes: 1, eyeGap: 1, jaw: 1, nose: 1, brows: 0, mouth: 1, arms: 1, limbs: 1, waist: 1, chest: 1, hips: 1, stance: 'neutre', move: 'neutre', skin: '#e2b594', hair: 'court', hairColor: '#2b2019', eyeColor: '#4a6b8a', beard: 'aucune', lips: '#b9695f', expr: 'neutre', eyeShape: 'amande', eyeOpen: 1, lashes: 1, browW: 1, browShape: 'naturel', cheek: 1, chin: 1, noseBr: 1, lipVol: 1, blush: 1, freckles: 0, makeup: 'auto', hairColor2: '#c9a36a', hairMix: 'aucun', hairShine: 1, showArmor: true };
const HERO_BEARDS = { aucune: 'Aucune', troisjours: 'Trois jours', courte: 'Courte', moustache: 'Moustache', bouc: 'Bouc', collier: 'Collier', pleine: 'Pleine' }, HERO_EXPRS = { neutre: 'Neutre', leger: 'Léger sourire', sourire: 'Sourire', serieux: 'Sérieux', triste: 'Mélancolique', narquois: 'Narquois' };
const HERO_EYESHAPES = { amande: 'Amande', ronde: 'Ronde', tombante: 'Tombante', relevee: 'Relevée', fine: 'Fine' }, HERO_BROWSHAPES = { naturel: 'Naturel', arque: 'Arqué', droit: 'Droit', anguleux: 'Anguleux', fin: 'Fin' }, HERO_MAKEUPS = { auto: 'Par défaut', aucun: 'Aucun', naturel: 'Naturel', charbon: 'Charbon', dore: 'Doré', carmin: 'Carmin' };
const heroChips = (k, obj) => `<div class="cc-chips">${Object.entries(obj).map(([id, n]) => `<button type="button" class="${(HERO.draft[k] ?? HERO_DEFAULT[k]) === id ? 'on' : ''}" data-ccset="${k}" data-v="${id}">${n}</button>`).join('')}</div>`;
const HERO_SKINS = ['#f6dcc6', '#ecc5a4', '#e2b594', '#cf9a72', '#b57d54', '#8f5a3a', '#6b4028', '#46291a'];
const HERO_HAIRS = ['#0f0c0b', '#2b2019', '#4a2f1c', '#6b3a1e', '#8a5a2e', '#b03a2e', '#d9a441', '#e8d9a0', '#9a9a9a', '#f0f0f0', '#3a5fb0', '#7a4fb8'];
const HERO_EYES = ['#3a2a1c', '#6b4a2a', '#4a6b8a', '#3d8f6a', '#7a8a96', '#2f4fa8', '#8a5fc0', '#c9a441'];
const HERO_LIPS = ['#b9695f', '#c9837a', '#a8483f', '#d0567a', '#8a3a36', '#7a5046'];
const HERO_HAIR_M = { 'v2_milong_asym': '★ Mi-long asymétrique', 'v2_undercut': '★ Undercut dégradé', 'v2_long_attache': '★ Long attaché bas', 'rase': 'Rasé', 'tondeuse': 'Tondeuse', 'brosse': 'En brosse', 'court': 'Court', 'courtcote': 'Court, raie sur le côté', 'militaire': 'Coupe militaire', 'undercut': 'Undercut', 'plaque': 'Plaqué en arrière', 'banane': 'Banane', 'pompadour': 'Pompadour', 'crete': 'Crête', 'pics': 'Pics', 'herisse': 'Hérissé', 'frangedroite': 'Frange droite courte', 'rebelle': 'Mèche rebelle', 'cesar': 'Coupe César', 'courtonde': 'Court ondulé', 'mi-long': 'Mi-long', 'milongraie': 'Mi-long, raie au milieu', 'bol': 'Coupe au bol', 'mulet': 'Mulet', 'long': 'Long', 'longraie': 'Long, raie au milieu', 'longonde': 'Long ondulé', 'queue': 'Queue de cheval', 'samourai': 'Queue de samouraï', 'chignon': 'Chignon', 'topknot': 'Chignon de samouraï', 'demichignon': 'Demi-chignon', 'boucles': 'Boucles', 'bouclescourtes': 'Boucles courtes', 'afro': 'Afro', 'nattes': 'Tresses plaquées', 'dreads': 'Dreadlocks', 'tresseh': 'Tresse unique', 'sauvage': 'Long sauvage', 'ninja': 'Mèche sur l’œil', 'degrade': 'Dégradé texturé', 'rideau': 'Frange rideau', 'criniere': 'Crinière' };
const HERO_HAIR_F = { 'v2_ondule_couches': '★ Longue ondulée en couches', 'v2_hime': '★ Frange droite et longs', 'v2_chignon_tresse': '★ Chignon tressé', 'pixie': 'Pixie', 'pixiefrange': 'Pixie à frange', 'garconne': 'Garçonne plaquée', 'carre': 'Carré court', 'carreplongeant': 'Carré plongeant', 'carrefrange': 'Carré à frange', 'carreboucle': 'Carré bouclé', 'milong': 'Mi-long lisse', 'milongonde': 'Mi-long ondulé', 'afrof': 'Afro volumineux', 'bouclesmi': 'Boucles mi-longues', 'queuecourte': 'Queue courte', 'couettescourtes': 'Couettes courtes', 'rasecote': 'Rasé sur le côté', 'tl_lisse': 'Très long lisse', 'tl_raie': 'Très long, raie au milieu', 'tl_hime': 'Très long, frange droite', 'tl_onde': 'Très long ondulé', 'tl_boucle': 'Très long bouclé', 'tl_hanches': 'Cascade jusqu’aux hanches', 'tl_genoux': 'Jusqu’aux genoux', 'tl_queuehaute': 'Queue haute très longue', 'tl_queuebasse': 'Queue basse très longue', 'tl_tresse': 'Tresse très longue', 'tl_deuxtresses': 'Deux tresses très longues', 'tl_couettes': 'Couettes très longues', 'tl_demiqueue': 'Demi-queue très longue', 'tl_princesse': 'Princesse', 'tl_couronne': 'Tresse couronne', 'tl_odango': 'Deux chignons et longueurs', 'tl_epaule': 'Ondulé sur une épaule', 'tl_encadre': 'Très long, mèches qui encadrent', 'tl_cote': 'Très long, frange de côté', 'tl_sirene': 'Sirène', 'tl_epi': 'Tresse épi', 'tl_queuetressee': 'Queue de cheval tressée', 'tl_degrade': 'Très long dégradé', 'tl_sauvage': 'Long sauvage', 'tl_chignonhaut': 'Chignon haut et longues mèches', 'tl_bouclesqueue': 'Queue bouclée très longue' };
const HERO_HAIR_NAMES = Object.assign({}, HERO_HAIR_M, HERO_HAIR_F);
const HERO_STANCES = { neutre: ['Neutre', 'Détendu, pieds un peu écartés, bras relâchés'], ninja: ['Ninja', 'À l’affût, bas et de trois quarts, prêt à bondir'], souverain: ['Souverain', 'Majestueux, poings sur les hanches'], digne: ['Digne', 'Bras croisés, aura maximale'], humble: ['Humble', 'Posé, mains jointes sans raideur, regard un peu baissé'], timide: ['Timide', 'Tient son bras, regard de côté'], hanche: ['Main sur la hanche', 'Bassin incliné, l’autre bras libre'], detendu: ['Détendu', 'Mains derrière la nuque, regard vers le ciel'], guerrier: ['Guerrier', 'Appuis larges, poitrine ouverte'], pensif: ['Pensif', 'Une main au menton'], martial: ['Martial', 'Fente légère, main ouverte en avant'], recueilli: ['Recueilli', 'Mains jointes, yeux baissés'], nonchalant: ['Nonchalant', 'Mains aux poches, tête penchée'], vigilant: ['Vigilant', 'Le regard balaie l’horizon'], elegant: ['Élégant', 'Un pied devant l’autre, tête haute'], impatient: ['Impatient', 'Bras croisés, le pied qui tape'], levitation: ['Lévitation', 'Flotte au-dessus du sol, une main sur la hanche (même avec un autre déplacement)'] };
const HERO_MOVES = { neutre: ['Course', 'Course normale, rapide'], ninja: ['Ninja', 'Buste penché, bras tendus en arrière comme des ailes'], levitation: ['Lévitation', 'Glisse accroupi au ras du sol, genoux pliés, buste penché'] };
/* options d'affichage : 3D automatique (oui par défaut), rotation automatique (non par défaut) */
function heroOpt() { const o = (state && state.heroOpt) || {}; return { auto: o.auto !== false, spin: o.spin === true }; }
function heroWant() { return HERO.on || !!HERO.view || heroOpt().auto; }
const HERO = { on: false, view: null, cv: null, loading: null, failed: false, last: '', draft: null, zoom: 'body', armed: false };

/* Titre porté + nom, au-dessus du personnage (fiche et monde ouvert) */
function plateData() { const V = heroVis(), t = V.titre ? cosmOf('titre') : null; return { name: V.pseudo !== false && state.profile ? state.profile.name || '' : '', title: t ? t.name : '', color: t ? t.color : '', r: t ? t.r : 0 }; }
/* titre stylé selon sa rareté (même dessin que dans le monde ouvert : w3d/src/titles.js) */
function titleHTML(name, r) { r = Math.max(0, Math.min(7, r | 0)); return `<span class="ttl ttl-r${r}"><i class="l"></i><b>« ${esc(name)} »</b><i class="r"></i></span>`; }
function heroPlate() { const P = plateData(); if (!P.title && !P.name) return ''; return `<div class="hero-plate">${P.title ? `<div class="hp-t">${titleHTML(P.title, P.r)}</div>` : ''}${P.name ? `<div class="hp-n">${esc(P.name)}</div>` : ''}</div>`; }
/* Ce qu'on affiche sur le personnage (les bonus restent actifs même masqués) */
const HERO_VIS = { tenue: 'Tenue', casque: 'Casque', plastron: 'Plastron', jambieres: 'Jambières', bouclier: 'Bouclier', armes: 'Armes', skin: 'Skin d’arme', ailes: 'Ailes', aura: 'Aura', titre: 'Titre', pseudo: 'Pseudo' };
function heroVis() {
  const L = (state.profile && state.profile.look) || {}, v = Object.assign({}, L.vis || {}), out = {};
  for (const k in HERO_VIS) out[k] = v[k] !== false;
  if (L.showArmor === false && !L.vis) out.casque = out.plastron = out.jambieres = false;   /* ancien réglage « tenue seule » */
  return out;
}
function heroLook() { return Object.assign({}, HERO_DEFAULT, (state.profile && state.profile.look) || {}); }
function heroDesc(look) {
  const L = look || heroLook();
  const V = heroVis(), tid = V.tenue && state.cosmEq.tenue && cosmOwned(state.cosmEq.tenue) && TENUES[state.cosmEq.tenue] ? state.cosmEq.tenue : 'ten_e';
  const g = s => { const it = invItem(state.gear[s]); if (!it) return null; const w = V.skin && wskinOf(it.type), T = w && WSKIN_THEME[w.r]; return w ? { type: it.type, r: w.r, wskin: { fx: T.fx, c: T.c, r: w.r, ws: 1 } } : { type: it.type, r: it.r }; };
  const A = {}; for (const s of ['casque', 'plastron', 'jambieres']) { const it = g(s); if (it && V[s]) A[s] = it.r; }
  const au = V.aura ? cosmOf('aura') : null, sk = V.skin ? cosmOf('skin') : null, wi = V.ailes ? cosmOf('ailes') : null;
  let main = V.armes ? g('main') : null, off = g('off'); if (off && (off.type === 'bouclier' ? !V.bouclier : !V.armes)) off = null;
  return { look: L, outfit: TENUES[tid], armor: A, main, off, aura: au && ART_AURA[au.id] ? ART_AURA[au.id][0] : null, showArmor: true,
    skin: sk && SKIN_FX[sk.id] ? Object.assign({ r: sk.r }, SKIN_FX[sk.id]) : null, wings: wi && WING_FX[wi.id] ? Object.assign({ r: wi.r }, WING_FX[wi.id]) : null, runPose: state.profile && (state.profile.cls === 'assassin' || state.profile.cls === 'pistolero') ? 'aion' : null };
}
function load3D() {
  if (typeof window === 'undefined' || typeof document === 'undefined' || !document.createElement) return Promise.reject(new Error('no dom'));
  if (window.Elyos3D) return Promise.resolve(window.Elyos3D);
  if (HERO.loading) return HERO.loading;
  HERO.loading = new Promise((res, rej) => {
    const s = document.createElement('script'); s.src = 'elyos3d.js';
    s.onload = () => window.Elyos3D ? res(window.Elyos3D) : rej(new Error('moteur absent'));
    s.onerror = () => { HERO.loading = null; rej(new Error('chargement impossible')); };
    document.head.appendChild(s);
  });
  return HERO.loading;
}
const heroRealHair = () => { const g = state.world && state.world.prefs && state.world.prefs.gfx; return (g == null ? 1 : g) >= 3; };
function heroEnsure() {
  return load3D().then(E => {
    if (E.setHairQuality) E.setHairQuality(heroRealHair());
    if (!HERO.view) {
      HERO.cv = document.createElement('canvas'); HERO.cv.id = 'hero-cv'; HERO.cv.className = 'hero-cv';
      HERO.view = E.avatarView(HERO.cv, heroDesc(), { spin: heroOpt().spin });
      HERO.last = JSON.stringify(heroDesc());
    }
    return HERO.view;
  });
}
/* Appelé après chaque rendu de l'application */
function heroAfterRender() {
  if (typeof document === 'undefined' || !document.getElementById) return;
  const slot = document.getElementById('hero-slot');
  if (!slot || HERO.failed || HERO.draft || !heroWant()) return;
  heroEnsure().then(v => {
    const s = document.getElementById('hero-slot'); if (!s || HERO.draft) return;
    const d = heroDesc(); d.armed = !!HERO.armed; if (window.Elyos3D && Elyos3D.setHairQuality) Elyos3D.setHairQuality(heroRealHair()); const j = JSON.stringify(d) + heroRealHair();
    if (j !== HERO.last) { v.set(d); HERO.last = j; }
    v.setZoom('body');
    if (HERO.cv.parentNode !== s) { s.innerHTML = ''; s.appendChild(HERO.cv); }
  }).catch(() => { HERO.failed = true; const s = document.getElementById('hero-slot'); if (s) s.innerHTML = '<p class="text-xs muted p-4 text-center">Aperçu 3D indisponible sur cet appareil ou hors connexion.</p>'; });
}
function heroGearTiles() {
  const tiles = [];
  for (const s of ['main', 'off', 'casque', 'plastron', 'jambieres', 'bottes', 'bijou', 'ceinture']) { const it = invItem(state.gear[s]); tiles.push(it ? `<button type="button" class="hero-tile" data-a="realm-go" data-t="arsenal" title="${esc(itemName(it))}">${artGear(it.type, it.r, 42)}</button>` : `<button type="button" class="hero-tile empty" data-a="realm-go" data-t="arsenal" title="Emplacement vide">${icon(s === 'main' ? 'sword' : s === 'off' ? 'shield' : ARMOR_TYPES[s].icon, 'w-4 h-4')}</button>`); }
  const te = cosmOf('tenue'); if (te) tiles.push(`<span class="hero-tile" title="${esc(te.name)}">${artCosm(te, 42)}</span>`);
  const ac = cosmOf('accessoire'); if (ac) tiles.push(`<span class="hero-tile" title="${esc(ac.name)}">${artCosm(ac, 42)}</span>`);
  for (const k of ['skin', 'ailes']) { const c = cosmOf(k); if (c) tiles.push(`<span class="hero-tile" title="${esc(c.name)}">${artCosm(c, 42)}</span>`); }
  const m = SHOP.find(x => x.id === state.equip.mount && state.owned[x.id]); if (m) tiles.push(`<span class="hero-tile" title="${esc(m.name)}">${artShop(m, 42)}</span>`);
  return tiles.join('');
}
function viewHeroCard() {
  if (!state.profile) return '';
  const L = heroLook(), isNew = !(state.profile.look);
  return `<div class="sys umbra hero-card">
    <div class="flex items-center justify-between gap-2 flex-wrap">
      <div class="sys-title u">Personnage</div>
      <div class="flex gap-2 flex-wrap justify-end min-w-0" style="max-width:100%">
        ${state.gear && state.gear.main ? `<button type="button" class="btn sm ghost" data-a="hero-draw" aria-pressed="${!!HERO.armed}">${icon('sword', 'w-3.5 h-3.5')}${HERO.armed ? 'Rengainer' : 'Dégainer'}</button>` : ''}
        <button type="button" class="btn sm ghost" data-a="hero-show" aria-pressed="${!!HERO.showPanel}">${icon('eye', 'w-3.5 h-3.5')}Affichage</button>
        <button type="button" class="btn sm u" data-a="hero-create">${icon('user-pen', 'w-3.5 h-3.5')}${isNew ? 'Créer' : 'Modifier'}</button>
      </div>
    </div>
    ${HERO.showPanel ? `<div class="flex flex-wrap gap-1.5 mt-2">${Object.entries(HERO_VIS).map(([k, n]) => { const on = heroVis()[k]; return `<button type="button" class="btn sm ${on ? 'u' : 'ghost'}" data-a="hero-vis" data-k="${k}" aria-pressed="${on}">${on ? '✓' : '✕'} ${n}</button>`; }).join('')}</div><p class="text-[11px] muted mt-1">Masquer un élément ne retire pas ses bonus. Tenue masquée : l’uniforme de Chasseur s’affiche.</p>` : ''}
    ${isNew ? `<p class="text-xs mt-2" style="color:var(--kinah)">Créez votre personnage : homme ou femme, morphologie, visage, cheveux.</p>` : ''}
    <div style="position:relative">${heroPlate()}<div id="hero-slot" class="hero-slot">${heroWant() ? '<div class="hero-load">Chargement du personnage…</div>' : `<button type="button" class="hero-load hero-on" data-a="hero-on">${icon('box', 'w-6 h-6')}<span>Afficher mon personnage en 3D</span><small>Affichage automatique désactivé (case ci-dessous)</small></button>`}</div></div>
    <div class="hero-opts">
      <label><input type="checkbox" data-a="hero-opt" data-k="auto" ${heroOpt().auto ? '' : 'checked'}><span>Ne plus afficher la 3D automatiquement</span></label>
      <label><input type="checkbox" data-a="hero-opt" data-k="spin" ${heroOpt().spin ? 'checked' : ''}><span>Rotation automatique du personnage</span></label>
    </div>
    <div class="hero-tiles">${heroGearTiles()}</div>
    <button type="button" class="btn solid w-full mt-3" data-a="world-open">${icon('globe', 'w-4 h-4')}Entrer dans le monde ouvert</button>
  </div>`;
}

/* ---------- Création du personnage ---------- */
function heroSlider(k, label, min, max, step) {
  const v = HERO.draft[k] ?? HERO_DEFAULT[k];
  return `<label class="cc-row"><span>${label}</span><input type="range" data-cc="${k}" min="${min}" max="${max}" step="${step || 0.01}" value="${v}"></label>`;
}
function heroSwatches(k, list) { return `<div class="cc-sw">${list.map(c => `<button type="button" class="${HERO.draft[k] === c ? 'on' : ''}" data-ccset="${k}" data-v="${c}" style="background:${c}" aria-label="${c}"></button>`).join('')}<label class="cc-pick" title="Autre couleur"><input type="color" data-cc="${k}" value="${HERO.draft[k]}"></label></div>`; }
function heroCreatorPanel() {
  const D = HERO.draft, tab = HERO.tab || 'corps', f = D.gender === 'f';
  const tabs = [['corps', 'Corps'], ['visage', 'Visage'], ['cheveux', 'Cheveux'], ['couleurs', 'Couleurs'], ['allure', 'Allure']];
  let body = '';
  if (tab === 'corps') body = `
    <div class="cc-seg"><button type="button" class="${!f ? 'on' : ''}" data-ccset="gender" data-v="m">Homme</button><button type="button" class="${f ? 'on' : ''}" data-ccset="gender" data-v="f">Femme</button></div>
    ${heroSlider('height', 'Taille (de tout petit à immense)', 0.55, 1.6)}${heroSlider('build', 'Carrure', 0.75, 1.35)}${heroSlider('shoulders', 'Épaules', 0.8, 1.3)}${heroSlider('chest', 'Torse', 0.85, 1.25)}${heroSlider('waist', 'Tour de taille', 0.8, 1.25)}${heroSlider('hips', 'Hanches', 0.85, 1.25)}${heroSlider('limbs', 'Épaisseur des membres', 0.75, 1.35)}${heroSlider('arms', 'Longueur des bras', 0.88, 1.14)}${heroSlider('legs', 'Longueur des jambes', 0.85, 1.2)}${heroSlider('headSize', 'Taille de la tête', 0.85, 1.25)}`;
  else if (tab === 'visage') body = `${heroSlider('eyes', 'Taille des yeux', 0.8, 1.35)}${heroSlider('eyeGap', 'Écart des yeux', 0.86, 1.16)}${heroSlider('brows', 'Inclinaison des sourcils', -1, 1)}${heroSlider('nose', 'Nez', 0.7, 1.45)}${heroSlider('mouth', 'Bouche', 0.8, 1.3)}${heroSlider('jaw', 'Mâchoire', 0.84, 1.2)}
    <div class="label mt-3 mb-1">Expression</div>${heroChips('expr', HERO_EXPRS)}
    <div class="label mt-3 mb-1">Détails · yeux</div>${heroChips('eyeShape', HERO_EYESHAPES)}${heroSlider('eyeOpen', 'Ouverture des paupières', 0.75, 1.2)}${heroSlider('lashes', 'Cils', 0, 1.6)}
    <div class="label mt-3 mb-1">Détails · sourcils</div>${heroChips('browShape', HERO_BROWSHAPES)}${heroSlider('browW', 'Épaisseur des sourcils', 0.5, 1.7)}
    <div class="label mt-3 mb-1">Détails · traits</div>${heroSlider('cheek', 'Pommettes', 0.4, 1.7)}${heroSlider('chin', 'Menton', 0.6, 1.5)}${heroSlider('noseBr', 'Arête du nez', 0.5, 1.6)}${heroSlider('lipVol', 'Volume des lèvres', 0.6, 1.5)}
    <div class="label mt-3 mb-1">Détails · teint et maquillage</div>${heroSlider('blush', 'Teint rosé', 0, 1.6)}${heroSlider('freckles', 'Taches de rousseur', 0, 1)}${heroChips('makeup', HERO_MAKEUPS)}`;
  else if (tab === 'cheveux') body = `
    <div class="label mb-1">Coiffure · ${f ? '40 coiffures de femme, dont 26 très longues' : '40 coiffures d’homme'}</div><div class="cc-chips">${Object.entries(f ? HERO_HAIR_F : HERO_HAIR_M).map(([id, n]) => `<button type="button" class="${D.hair === id ? 'on' : ''}" data-ccset="hair" data-v="${id}">${n}</button>`).join('')}</div>
    <div class="label mt-3 mb-1">Couleur</div>${heroSwatches('hairColor', HERO_HAIRS)}
    <div class="label mt-3 mb-1">Deuxième couleur</div>${heroChips('hairMix', { aucun: 'Unie', meches: 'Mèches', ombre: 'Ombré' })}${(HERO.draft.hairMix || 'aucun') !== 'aucun' ? heroSwatches('hairColor2', HERO_HAIRS) : ''}
    ${heroSlider('hairShine', 'Reflets', 0, 2)}
    ${!f ? `<div class="label mt-3 mb-1">Barbe</div><div class="cc-chips">${Object.entries(HERO_BEARDS).map(([b, n]) => `<button type="button" class="${D.beard === b ? 'on' : ''}" data-ccset="beard" data-v="${b}">${n}</button>`).join('')}</div>` : ''}`;
  else if (tab === 'allure') body = `
    <div class="label mb-1">Position d’attente</div><div class="cc-chips">${Object.entries(HERO_STANCES).map(([id, n]) => `<button type="button" class="${D.stance === id ? 'on' : ''}" data-ccset="stance" data-v="${id}" title="${n[1]}">${n[0]}</button>`).join('')}</div>
    <p class="text-xs muted mt-1">${HERO_STANCES[D.stance] ? HERO_STANCES[D.stance][1] : ''}. Visible quand le personnage est immobile, arme au fourreau.</p>
    <div class="label mt-3 mb-1">Déplacement</div><div class="cc-chips">${Object.entries(HERO_MOVES).map(([id, n]) => `<button type="button" class="${D.move === id ? 'on' : ''}" data-ccset="move" data-v="${id}" title="${n[1]}">${n[0]}</button>`).join('')}</div>
    <p class="text-xs muted mt-1">${HERO_MOVES[D.move] ? HERO_MOVES[D.move][1] : ''}.</p>
    <button type="button" class="btn sm ghost mt-3" data-ccact="walk" aria-pressed="${!!HERO.walk}">${HERO.walk ? 'Arrêter' : 'Voir en mouvement'}</button>`;
  else body = `<div class="label mb-1">Peau</div>${heroSwatches('skin', HERO_SKINS)}<div class="label mt-3 mb-1">Yeux</div>${heroSwatches('eyeColor', HERO_EYES)}<div class="label mt-3 mb-1">Lèvres</div>${heroSwatches('lips', HERO_LIPS)}`;
  return `<div class="cc-tabs">${tabs.map(([id, n]) => `<button type="button" class="${tab === id ? 'on' : ''}" data-cctab="${id}">${n}</button>`).join('')}</div><div class="cc-body">${body}</div>`;
}
function heroCreatorOpen() {
  HERO.draft = heroLook(); HERO.tab = 'corps'; HERO.zoom = 'body';
  document.body.insertAdjacentHTML('beforeend', `<div id="cc" class="cc" role="dialog" aria-modal="true" aria-label="Création du personnage">
    <div class="cc-stage"><div id="cc-slot" class="cc-slot"><div class="hero-load">Chargement du personnage…</div></div>
      <div class="cc-top"><div class="sys-title u">Création du personnage</div><button type="button" class="ibtn" data-ccact="close" aria-label="Fermer">${icon('x', 'w-4 h-4')}</button></div>
      <div class="cc-view"><button type="button" class="on" data-ccact="body">Corps</button><button type="button" data-ccact="face">Visage</button><button type="button" data-ccact="random">${icon('dices', 'w-3.5 h-3.5')}Au hasard</button></div>
    </div>
    <div class="cc-panel"><div id="cc-panel"></div>
      <div class="cc-foot"><button type="button" class="btn ghost" data-ccact="close">Annuler</button><button type="button" class="btn solid" data-ccact="save">${icon('check', 'w-4 h-4')}Enregistrer</button></div>
    </div></div>`);
  const root = document.getElementById('cc');
  document.body.style.overflow = 'hidden';
  const paint = () => { document.getElementById('cc-panel').innerHTML = heroCreatorPanel(); refreshIcons(); };
  const bare = () => { const d = heroDesc(HERO.draft); d.armor = {}; d.main = d.off = null; d.aura = null; return d; };
  const apply = () => { if (HERO.view) HERO.view.set(bare()); };
  paint(); refreshIcons();
  heroEnsure().then(v => { const s = document.getElementById('cc-slot'); if (!s) return; s.innerHTML = ''; s.appendChild(HERO.cv); v.set(bare()); v.setZoom('body'); v.setYaw(-0.35); })
    .catch(() => { const s = document.getElementById('cc-slot'); if (s) s.innerHTML = '<p class="text-sm muted p-6 text-center">Aperçu 3D indisponible. Vos réglages seront quand même enregistrés.</p>'; });
  root.addEventListener('input', e => { const k = e.target.dataset.cc; if (!k) return; HERO.draft[k] = e.target.type === 'range' ? +e.target.value : e.target.value; apply(); });
  root.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.cctab) { HERO.tab = b.dataset.cctab; if (HERO.walk) { HERO.walk = false; if (HERO.view) HERO.view.setWalk(false); } const z = HERO.tab === 'corps' || HERO.tab === 'allure' ? 'body' : HERO.tab === 'visage' ? 'close' : 'face'; HERO.zoom = z; if (HERO.view) { HERO.view.setZoom(z); HERO.view.setYaw(-0.3); } root.querySelectorAll('.cc-view button').forEach(x => x.classList.toggle('on', x.dataset.ccact === z)); paint(); return; }
    if (b.dataset.ccset) { HERO.draft[b.dataset.ccset] = b.dataset.v; if (b.dataset.ccset === 'move' && HERO.view) { HERO.walk = true; HERO.view.setWalk(true); } if (b.dataset.ccset === 'stance' && HERO.view) { HERO.walk = false; HERO.view.setWalk(false); } if (b.dataset.ccset === 'gender') { HERO.draft.beard = 'aucune'; if (b.dataset.v === 'f' && !HERO_HAIR_F[HERO.draft.hair]) HERO.draft.hair = 'tl_lisse'; if (b.dataset.v === 'm' && !HERO_HAIR_M[HERO.draft.hair]) HERO.draft.hair = 'court'; } apply(); paint(); return; }
    const a = b.dataset.ccact; if (!a) return;
    if (a === 'walk') { HERO.walk = !HERO.walk; if (HERO.view) HERO.view.setWalk(HERO.walk); paint(); return; }
    if (a === 'body' || a === 'face') { HERO.zoom = a; if (HERO.view) { HERO.view.setZoom(a); HERO.view.setYaw(-0.3); } root.querySelectorAll('.cc-view button').forEach(x => x.classList.toggle('on', x.dataset.ccact === a)); }
    else if (a === 'random') { const r = (a, b) => +(a + Math.random() * (b - a)).toFixed(2), p = l => l[Math.floor(Math.random() * l.length)]; const D = HERO.draft; Object.assign(D, { height: r(0.82, 1.2), build: r(0.88, 1.18), shoulders: r(0.9, 1.15), legs: r(0.94, 1.08), headSize: r(0.95, 1.08), chest: r(0.94, 1.1), waist: r(0.9, 1.1), hips: r(0.94, 1.08), limbs: r(0.9, 1.15), arms: r(0.97, 1.04), eyes: r(0.9, 1.25), eyeGap: r(0.92, 1.1), brows: r(-0.6, 0.6), nose: r(0.8, 1.3), mouth: r(0.85, 1.2), jaw: r(0.88, 1.14), skin: p(HERO_SKINS), hairColor: p(HERO_HAIRS), eyeColor: p(HERO_EYES), lips: p(HERO_LIPS), hair: p(Object.keys(D.gender === 'f' ? HERO_HAIR_F : HERO_HAIR_M)), beard: D.gender === 'm' ? p(['aucune', 'aucune', 'troisjours', 'courte', 'moustache', 'bouc', 'collier', 'pleine']) : 'aucune', eyeShape: p(Object.keys(HERO_EYESHAPES)), browShape: p(Object.keys(HERO_BROWSHAPES)), eyeOpen: r(0.88, 1.1), cheek: r(0.7, 1.4), chin: r(0.8, 1.3), noseBr: r(0.7, 1.35), lipVol: r(0.8, 1.3), browW: r(0.75, 1.35), blush: r(0.6, 1.3) }); apply(); paint(); }
    else if (a === 'save') { state.profile.look = Object.assign({}, HERO.draft); save(); heroCreatorClose(); }
    else if (a === 'close') heroCreatorClose();
  });
}
function heroCreatorClose() {
  const root = document.getElementById('cc'); HERO.draft = null; HERO.last = ''; if (HERO.walk) { HERO.walk = false; if (HERO.view) HERO.view.setWalk(false); }
  if (HERO.cv && HERO.cv.parentNode) HERO.cv.parentNode.removeChild(HERO.cv);
  if (root) root.remove();
  document.body.style.overflow = '';
  render();
}
Object.assign(handlers, {
  'hero-create': () => heroCreatorOpen(),
  'hero-draw': () => { HERO.armed = !HERO.armed; render(); },
  'hero-armor': () => { const L = heroLook(); L.showArmor = L.showArmor === false; state.profile.look = L; save(); render(); },
  'hero-on': () => { HERO.on = true; render(); },
  'hero-opt': el => { const k = el.dataset.k, o = state.heroOpt = Object.assign({}, state.heroOpt);
    if (k === 'auto') o.auto = !el.checked; else if (k === 'spin') { o.spin = !!el.checked; if (HERO.view && HERO.view.setSpin) HERO.view.setSpin(o.spin); }
    save(); render(); },
  'hero-show': () => { HERO.showPanel = !HERO.showPanel; render(); },
  'hero-vis': el => { const L = heroLook(), v = Object.assign({}, heroVis()); v[el.dataset.k] = !v[el.dataset.k]; L.vis = v; delete L.showArmor; state.profile.look = L; save(); render(); }
});

if (typeof document !== 'undefined' && document.head) document.head.insertAdjacentHTML('beforeend', `<style>
.hero-load.hero-on{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:none;border:0;color:var(--neon);font:600 14px var(--font-display);cursor:pointer}.hero-load.hero-on small{color:var(--muted);font:400 11px var(--font-body)}.hero-opts{display:flex;flex-direction:column;gap:6px;margin-top:8px;font-size:12px;color:var(--muted)}.hero-opts label{display:flex;align-items:center;gap:8px;cursor:pointer}.hero-opts input{accent-color:var(--neon);width:16px;height:16px;flex:none}.hero-slot{position:relative;height:min(52vh,420px);margin-top:10px;border:1px solid var(--line);background:radial-gradient(ellipse at 50% 35%,#1d1d30 0%,#0c0c14 62%,#07070b 100%);overflow:hidden}
.hero-cv{width:100%;height:100%;display:block;cursor:grab;touch-action:pan-y}
.hero-plate{position:relative;z-index:2;text-align:center;pointer-events:none;line-height:1.25;padding:4px 0 8px}
.ttl{display:inline-flex;align-items:center;justify-content:center;gap:.4em;position:relative;isolation:isolate;overflow:hidden;max-width:100%;border-radius:3px;font:700 13px/1.25 'Oxanium','Barlow',sans-serif;letter-spacing:.05em;white-space:normal;text-align:center;padding:2px 8px;vertical-align:middle}
.ttl b{font-weight:700;min-width:0;overflow-wrap:anywhere}
.ttl i{font-style:normal;display:none;flex:none}
.ttl-r0 b{color:#c3c7d0;text-shadow:0 1px 2px #000}
.ttl-r1 b{color:#4ade80;text-shadow:0 0 6px rgba(74,222,128,.6),0 1px 2px #000}
.ttl-r1::after{content:'';position:absolute;left:10%;right:10%;bottom:0;height:1px;background:linear-gradient(90deg,transparent,#4ade80,transparent)}
.ttl-r2 b{color:#5cc8ff;text-shadow:0 0 8px rgba(56,189,248,.85),0 1px 2px #000}
.ttl-r2 i{display:inline-block;width:.42em;height:.42em;background:#38bdf8;transform:rotate(45deg);box-shadow:0 0 6px #38bdf8}
.ttl-r3 b,.ttl-r4 b,.ttl-r5 b,.ttl-r6 b,.ttl-r7 b{-webkit-background-clip:text;background-clip:text;color:transparent}
.ttl-r3 b{background-image:linear-gradient(90deg,#9a5cff,#f3e8ff 50%,#9a5cff);background-size:200% 100%;filter:drop-shadow(0 0 5px rgba(176,124,255,.9));animation:ttlSweep 2.8s ease-in-out infinite alternate}
.ttl-r3 i{display:inline-block;width:1em;height:.6em;background:linear-gradient(90deg,transparent,#c9a2ff);clip-path:polygon(0 15%,100% 0,78% 50%,100% 100%,0 85%,40% 50%);filter:drop-shadow(0 0 3px #b07cff)}
.ttl-r3 i.r{transform:scaleX(-1)}
.ttl-r4 b{background-image:linear-gradient(0deg,#ff3c00,#ffb020 45%,#fff6c8);filter:drop-shadow(0 0 4px #ff7a1a) drop-shadow(0 -2px 7px rgba(255,90,0,.65));animation:ttlFlick 1.7s ease-in-out infinite}
.ttl-r4 i,.ttl-r5 i{display:inline-block;width:.62em;height:1.05em;border-radius:50% 50% 45% 45%/65% 65% 35% 35%;background:radial-gradient(ellipse at 50% 78%,#fff6c0 0,#ffb020 28%,#ff4a00 58%,transparent 70%);transform-origin:50% 100%;animation:ttlFlame .85s ease-in-out infinite alternate}
.ttl-r4 i.r,.ttl-r5 i.r{animation-delay:-.42s}
.ttl-r5 b{background-image:linear-gradient(0deg,#4a0016,#ff2a4a 45%,#ffd0da);filter:drop-shadow(0 0 5px #ff2a4a) drop-shadow(0 -3px 8px rgba(150,0,70,.75));animation:ttlFlick 1.2s ease-in-out infinite}
.ttl-r5 i{background:radial-gradient(ellipse at 50% 78%,#ffe0ea 0,#ff2a4a 30%,#7a0aa8 60%,transparent 72%);width:.7em;height:1.2em}
.ttl-r5::before{content:'';position:absolute;inset:-4px -8px;z-index:-1;background:radial-gradient(ellipse,rgba(255,42,74,.38),transparent 70%);animation:ttlPulse 1.8s ease-in-out infinite}
.ttl-r6 b{background-image:linear-gradient(100deg,#c9a44a 15%,#fff8dc 40%,#ffffff 50%,#fff8dc 60%,#c9a44a 85%);background-size:250% 100%;filter:drop-shadow(0 0 6px rgba(255,241,184,.95));animation:ttlSweep 2.6s ease-in-out infinite alternate}
.ttl-r6 i,.ttl-r7 i{display:inline-block;font-size:.95em;line-height:1}
.ttl-r6 i::before{content:'✧';color:#fff1b8;text-shadow:0 0 8px #ffd56a}
.ttl-r6 i{animation:ttlSpin 7s linear infinite}
.ttl-r6::before{content:'';position:absolute;left:50%;top:50%;width:100%;height:100%;transform:translate(-50%,-50%);z-index:-1;background:radial-gradient(ellipse,rgba(255,236,170,.5),transparent 62%);animation:ttlPulse 3s ease-in-out infinite}
.ttl-r7 b{background-image:linear-gradient(90deg,#9ffcff,#ffffff,#ffd56a,#ffb3f2,#9ffcff);background-size:300% 100%;filter:drop-shadow(0 0 6px #9ffcff) drop-shadow(0 0 14px rgba(159,252,255,.6));animation:ttlSweep 3.4s ease-in-out infinite alternate}
.ttl-r7 i::before{content:'✦';color:#fff;text-shadow:0 0 6px #9ffcff,0 0 12px #9ffcff}
.ttl-r7 i{animation:ttlTw 1.6s ease-in-out infinite}
.ttl-r7 i.r{animation-delay:-.8s}
.ttl-r7::before{content:'';position:absolute;left:50%;top:50%;width:140%;height:600%;transform:translate(-50%,-50%);z-index:-1;background:repeating-conic-gradient(rgba(159,252,255,.32) 0 5deg,transparent 5deg 16deg);-webkit-mask:radial-gradient(closest-side,#000 25%,transparent);mask:radial-gradient(closest-side,#000 25%,transparent);animation:ttlRot 16s linear infinite}
@keyframes ttlSweep{from{background-position:0% 0}to{background-position:100% 0}}
@keyframes ttlFlick{0%,100%{transform:none}35%{transform:translateY(-.6px)}70%{transform:translateY(.3px)}}
@keyframes ttlFlame{from{transform:scale(.82,.78) skewX(-5deg)}to{transform:scale(1.06,1.16) skewX(6deg)}}
@keyframes ttlPulse{50%{opacity:.45}}
@keyframes ttlSpin{to{transform:rotate(360deg)}}
@keyframes ttlTw{50%{opacity:.35;transform:scale(.65)}}
@keyframes ttlRot{to{transform:translate(-50%,-50%) rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.ttl *,.ttl::before{animation:none!important}}

.hero-plate .hp-t{margin-bottom:3px}
.hero-plate .hp-n{font:600 12px 'Barlow',sans-serif;color:#fff;text-shadow:0 1px 3px #000}
.hero-load{position:absolute;inset:0;display:grid;place-items:center;font-size:12px;color:var(--muted);font-family:var(--font-mono);letter-spacing:.1em}
.hero-tiles{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
.hero-tile{display:inline-grid;place-items:center;width:44px;height:44px;padding:0;background:transparent;border:0;cursor:pointer;line-height:0}
.hero-tile.empty{border:1px dashed #2c2540;color:var(--muted)}
.cc{position:fixed;inset:0;z-index:115;background:#07070b;display:flex;flex-direction:column;color:var(--text)}
.cc-stage{position:relative;flex:1 1 46%;min-height:0;background:radial-gradient(ellipse at 50% 35%,#20203a 0%,#0c0c14 62%,#05050a 100%)}
.cc-slot{position:absolute;inset:0}
.cc-top{position:absolute;left:0;right:0;top:0;display:flex;justify-content:space-between;align-items:center;padding:calc(env(safe-area-inset-top,0px) + 10px) 12px 0}
.cc-view{position:absolute;left:0;right:0;bottom:8px;display:flex;justify-content:center;gap:6px}
.cc-view button,.cc-tabs button,.cc-chips button,.cc-seg button{display:inline-flex;align-items:center;gap:5px;padding:6px 11px;font-size:12px;border:1px solid var(--line);background:rgba(12,12,20,.75);color:var(--muted);cursor:pointer}
.cc-view button.on,.cc-tabs button.on,.cc-chips button.on,.cc-seg button.on{color:var(--neon);border-color:var(--neon);background:rgba(0,240,255,.08)}
.cc-panel{flex:1 1 54%;min-height:0;display:flex;flex-direction:column;border-top:1px solid var(--line);background:#0d0d14}
#cc-panel{flex:1;min-height:0;display:flex;flex-direction:column}
.cc-tabs{display:flex;gap:6px;padding:10px 12px 0;flex-wrap:wrap}
.cc-body{flex:1;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:6px}
.cc-row{display:flex;flex-direction:column;gap:2px;font-size:12.5px;color:var(--muted)}
.cc-row input{width:100%;accent-color:var(--neon);height:26px}
.cc-seg{display:flex;gap:6px;margin-bottom:6px}.cc-seg button{flex:1;justify-content:center;padding:9px;font-size:13px}
.cc-chips{display:flex;flex-wrap:wrap;gap:6px}
.cc-sw{display:flex;flex-wrap:wrap;gap:7px;align-items:center}
.cc-sw button{width:32px;height:32px;border-radius:50%;border:2px solid #2a2a35;cursor:pointer}
.cc-sw button.on{border-color:var(--neon);box-shadow:0 0 10px var(--neon)}
.cc-pick input{width:34px;height:34px;padding:0;border:1px dashed var(--line);background:none;cursor:pointer}
.cc-foot{display:flex;gap:8px;padding:10px 12px calc(env(safe-area-inset-bottom,0px) + 10px);border-top:1px solid var(--line)}
.cc-foot .btn{flex:1;justify-content:center}
@media (min-width:860px){.cc{flex-direction:row}.cc-stage{flex:1 1 58%}.cc-panel{flex:0 0 400px;border-top:0;border-left:1px solid var(--line)}}
</style>`);

/* ==========================================================================
   Monde ouvert : Vespérane en 3D
   ========================================================================== */
const WORLD_LINES = {
  rolande: ['La soupe est sur le poêle. Vous mangerez en rentrant, et ne me dites pas que vous n’avez pas faim.', 'J’ai étendu le linge ce matin. Le ciel est couleur de rouille, mais ça sèche quand même.'],
  mira: ['Je vous ai vu arriver depuis la rue des Cloches. Vous boitez moins quand vous croyez qu’on ne regarde pas.', 'Aux Brèches, je sais qui vole, qui ment, qui donne. Ceux qui donnent, je les surveille de plus près.', 'Les marches de Sainte-Claire, c’est mon poste. On m’y a trouvée, autrefois. Il pleuvait, paraît-il.', 'Vous, je n’ai plus besoin de vous surveiller. C’est rare. Ne le répétez pas.'],
  theo: ['Doucement près du feu. J’ai déjà perdu une main, je n’ai pas envie de vous voir perdre la vôtre.', 'Une arme, ça se répare. Ce qu’on a forgé de travers, c’est plus long.', 'La cloche de Sainte-Claire, c’est moi. De tout ce que j’ai fait, c’est ce qui sonne le plus juste.', 'Apportez-moi votre lame quand vous voulez. Pour vous, la forge ne ferme pas.'],
  anselme: ['Asseyez-vous un moment. On ne prie pas mieux debout, on fait seulement semblant d’être pressé.', 'Je ne parle pas beaucoup. Mais j’écoute, et je ne suis pas le seul à écouter.', 'J’ai longtemps cru qu’il fallait payer soi-même. On n’a jamais assez. Quelqu’un a payé.', '« Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos. » C’est écrit pour des gens comme nous.'],
  helene: ['J’écris les noms à la main. Une machine irait plus vite, mais un nom, ça ne se tape pas.', 'Trois cent douze. Je les connais tous. Demandez-moi lequel vous voulez.', 'Il reste de la place dans le registre. J’espère ne pas avoir à m’en servir pour vous.', 'Merci de porter ce que vous portez. Je l’ai noté.'],
  sera: ['Tenez votre garde plus haut. Non. Plus haut. Voilà.', 'Je n’ai jamais taché cette lame. Elle attend un seul nom.', 'Ysolde nous a élevés ici, mon frère et moi. La soupe était toujours chaude.', 'Si un jour je tremble, vous me le direz. Vous, je vous croirai.'],
  nour: ['Je vous reconnais à votre pas. Le gauche traîne un peu, les jours de pluie.', 'Ici, les murs gardent l’écho. Quand je chante, je ne suis jamais tout à fait seule.', 'J’apprenais le piano à une petite fille, autrefois. J’arrivais toujours en retard.', 'Chantez avec moi, une fois. Faux, si vous voulez. Ça compte quand même.'],
  kael: ['Je ne mange pas. N’insistez pas, ça me gêne.', 'Je me souviens d’un nom, et d’une petite main dans la mienne. C’est peu. C’est assez pour rester.', 'Les autres ombres n’ont plus de visage. Je ne sais pas pourquoi j’ai gardé le mien.', 'Quand vous êtes là, je pèse un peu plus lourd. C’est bon signe, je crois.'],
  odile: ['Vous êtes en retard de quatre minutes. Je compte tout. C’est mon métier.', 'On m’appelle la femme de pierre. Les pierres, au moins, on peut bâtir dessus.', 'Un pain, ça se pèse au gramme. Un homme, je n’ai jamais su.', 'J’ai compté ce que vous avez donné. Je n’ai pas trouvé le total. C’est la première fois.'],
  yanis: ['Les chiffres ne mentent pas. Ils ne disent pas tout non plus. Je l’ai appris tard.', 'Je garde une liste pliée dans mon portefeuille. Ne me demandez pas de la déplier.', 'Un bon plan sauve le plus grand nombre. Je n’ai pas encore trouvé comment sauver les autres.', 'Vous ne raisonnez pas comme moi. Continuez. J’en ai besoin.'],
  ysolde: ['Entrez, il fait froid. La soupe est sur le feu. Elle y est depuis dix ans, alors une assiette de plus…', 'J’ai tenu le village trois ans. On croit qu’on tient toute seule, et puis on regarde derrière.', 'Ma mère me lisait la Bible l’hiver, en s’arrêtant aux virgules. Je fais pareil.', 'Je prie pour vous le soir. Je vous le dis pour que vous ne soyez pas surpris d’aller mieux.'],
  gaspard: ['« Ah. Le Joueur. » Il vérifie sur le dos de sa main. « Oui. C’est bien ça. Bonjour. »', 'La mémoire, c’est une passoire. La curiosité, c’est un seau. Je fais avec les deux.', 'J’ai oublié mon nom, mais pas le rire de ma femme. Allez comprendre ce qu’on garde.', 'Vous, je vous ai écrit à l’encre qui ne part pas.'],
  zach: ['Je ne demande jamais pourquoi. Seulement où.', 'J’étais jardinier, avant. Une barque, c’est pareil : on amène les choses de l’autre côté de l’hiver.', 'Le fleuve ne décide rien. Il porte. Celui qui décide est plus haut que lui.', 'Le jour où vous voudrez traverser, je ne vous ferai pas payer. On a déjà payé pour vous.']
};
function worldData(mode) {
  const W = state.world || {};
  const npcs = [{ id: 'rolande', name: 'Madame Rolande', role: 'Blanchisseuse, rue du Four', bond: 0, recruited: false, lines: WORLD_LINES.rolande }];
  for (const id of FOLLOWER_ORDER) {
    const F = FOLLOWERS[id], b = bondOf(id), rec = hasF(id);
    if (!WORLD_LINES[id] || !state.story.met[id] || !(b > 0 || rec)) continue;
    npcs.push({ id, name: F.name, role: F.role, bond: b, recruited: rec, lines: WORLD_LINES[id].slice(0, b >= 8 ? 4 : b >= 3 ? 3 : 2) });
  }
  const lvl = curLevel(), cid = CLASS_SKILLS[state.profile && state.profile.cls] ? state.profile.cls : 'assassin';
  return {
    mode, hero: heroDesc(), plate: plateData(), pos: W.pos || null, prefs: W.prefs || {}, disc: state.world ? (state.world.disc || (state.world.disc = {})) : {}, jumps: state.world ? (state.world.jumps || (state.world.jumps = {})) : {}, mastery: state.world ? (state.world.mastery || (state.world.mastery = {})) : {},
    combat: playerCombat(), regen: boosts().regen || 0, level: lvl, cls: { id: cid, name: (CLASSES[cid] || {}).name || '' }, arenaBest: W.arenaBest || 0,
    skills: classSkills().map(s => Object.assign({}, s, { locked: lvl < s.lvl })),
    mounts: SHOP.filter(i => i.cat === 'mount' && state.owned[i.id]).map(i => ({ id: i.id, name: i.name, r: i.r, speed: MOUNT_SPEED[i.r] * (i.spdK || 1) })), boots: bootSpeed(invItem((state.gear || {}).bottes)), wb: wbState(), power: combatPower().power, mount: state.equip.mount,
    houses: SHOP.filter(i => i.cat === 'house' && state.owned[i.id]).map(i => ({ id: i.id, name: i.name, r: i.r, cap: HOUSE_CAP[i.r] })),
    instruments: SHOP.filter(i => i.cat === 'instrument' && state.owned[i.id]).map(i => i.id), npcs, explore: exWorldData(), compass: !!(state.merchant && state.merchant.compass),
    social: state.social || (state.social = {}), today: dk(), gender: heroLook().gender || 'm'
  };
}
/* Récompense d'une vague d'arène : croît nettement avec la difficulté ; les vagues de champion paient triple,
   celles du drake quintuple. Une vague nouvelle (au-delà du record) paie plein tarif ; une vague déjà faite paie 10 %.
   On ne peut franchir que 5 nouvelles vagues par jour. */
function arenaBase(n) { const m = n % 10 === 0 ? 5 : n % 5 === 0 ? 3 : 1; return { x: Math.round(5 * Math.pow(n, 1.3) * m), k: Math.round(12 * Math.pow(n, 1.3) * m) }; }
function arenaDay() { const W = state.world || (state.world = {}), t = dk(); if (!W.arenaDay || W.arenaDay.date !== t) W.arenaDay = { date: t, w: {} }; return W.arenaDay; }
function arenaNew() { const W = state.world || (state.world = {}), t = dk(); if (!W.arenaNew || W.arenaNew.date !== t) W.arenaNew = { date: t, n: 0 }; return W.arenaNew; }
function arenaPreview(n) { const b = arenaBase(n), first = n > (state.world.arenaBest || 0), f = first ? 1 : 0.1; return { x: xpK(Math.max(1, Math.round(b.x * f))), k: primeK(Math.max(1, Math.round(b.k * f))), first }; }
function arenaReward(n, rec) {
  const t = dk(), r = arenaPreview(n); if (rec) { const b = arenaBase(n); r.x = xpK(Math.max(1, b.x)); r.k = primeK(Math.max(1, b.k)); r.first = true; }
  let e = (state.bonus || (state.bonus = [])).find(q => q.date === t && q.arena);
  if (!e) { e = { date: t, k: 0, x: 0, why: 'Arène des Chasseurs', arena: 1 }; state.bonus.push(e); }
  e.k += r.k; e.x = (e.x || 0) + r.x; arenaDay().w[n] = 1; save();
  return r;
}
/* Code secret : dix appuis d'affilée, en moins de 5 secondes, sur « Rester active en arrière-plan » → 10 000 kinahs, à chaque fois */
const KINAH_TAPS = [];
function kinahCheat() {
  const t = Date.now(); KINAH_TAPS.push(t); while (KINAH_TAPS.length && t - KINAH_TAPS[0] > 5000) KINAH_TAPS.shift();
  if (KINAH_TAPS.length < 10 || !state.profile) return;
  KINAH_TAPS.length = 0;
  (state.bonus || (state.bonus = [])).push({ date: dk(), k: 10000, x: 0, why: 'Trésor caché du Système' }); save();
  toast('<b>+10 000 kinahs</b> · Trésor caché du Système'); if (typeof render === 'function') render();
}
function worldStart(mode) {
  state.world = Object.assign({}, state.world, { mode });
  if (!state.world.giftRegen) { state.world.giftRegen = 1; addChip('regen', 0); if (state.chipEq.length < CHIP_SLOTS) state.chipEq.push(chipKey('regen', 0)); }
  save();
  const pick = document.getElementById('wm'); if (pick) pick.remove();
  document.body.insertAdjacentHTML('beforeend', `<div id="wm" class="wm"><div class="wm-box"><div class="hero-load" style="position:static">Chargement de Vespérane…</div></div></div>`);
  load3D().then(E => {
    const w = document.getElementById('wm'); if (w) w.remove();
    document.body.style.overflow = 'hidden';
    const done = pos => { document.body.style.overflow = ''; if (pos) state.world.pos = pos; save(); };
    E.startWorld(document.body, worldData(mode), {
      onExit: pos => { done(pos); render(); },
      onMode: (m, pos) => { done(pos); worldStart(m); },
      onArena: best => { const old = state.world.arenaBest || 0; if (best > old) arenaNew().n += best - old; state.world.arenaBest = Math.max(old, best); save(); },
      arenaNewLeft: () => 5 - arenaNew().n,
      onWave: (n, info) => { const r = arenaReward(n, info && info.rec); return Object.assign(r, arenaMeta(n, info || {}, r)); },
      champion: n => arenaChampionName(n),
      wavePreview: n => arenaPreview(n),
      onPref: p => { state.world.prefs = p; save(); },
      onCollect: id => exCollect(id),
      merchant: () => mxView(),
      onMerchant: id => { const r = mxBuy(id); return r; },
      onTreasure: (hid, r) => estateTreasure(hid, r),
      onJump: (id, name) => jumpChest(id, name),
      onHome: on => { if (typeof musHomeEnter !== 'function') return 'synth'; return on ? musHomeEnter() : (musHomeLeave(), null); },
      onInstr: on => { if (typeof musPause !== 'function') return; if (on) musPause(); else if (musRT.homeOn) musResume(); },
      onBoss: (i, lvl, name, o) => wbKill(i, lvl, name, o),
      onStyle: o => { state.profile.look = Object.assign(heroLook(), o); HERO.last = ''; save(); },
      onSocial: () => save(),
      onSpend: (price, what) => { _memo = null; if (kinahs() < price) return false; state.buys.push({ id: 'gift:' + what, price, date: dk() }); _memo = null; save(); return true; },
      kinahs: () => kinahs(), today: () => dk(), gender: () => heroLook().gender || 'm',
      onRift: pos => { done(pos); state.tab = 'realm'; state.realmTab = 'exp'; save(); render(); window.scrollTo({ top: 0 }); }
    });
  }).catch(() => { const w = document.getElementById('wm'); if (w) w.innerHTML = `<div class="wm-box"><p class="text-sm">Le monde ouvert n’a pas pu se charger. Vérifiez la connexion, puis réessayez.</p><button type="button" class="btn mt-3" data-a="world-cancel">Fermer</button></div>`; });
}
function worldOpen() {
  const coarse = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const last = (state.world && state.world.mode) || (coarse ? 'mobile' : 'pc');
  const d = worldData(last);
  document.body.insertAdjacentHTML('beforeend', `<div id="wm" class="wm" role="dialog" aria-modal="true" aria-label="Monde ouvert"><div class="wm-box sys umbra">
    <div class="sys-title u">Monde ouvert · Vespérane</div>
    <p class="text-sm mt-2">Promenez-vous dans la ville du récit, sous son ciel couleur de rouille : les Brèches, Sainte-Claire, la Miséricorde, la Faille de la gare, le quai des Pêcheurs, Haute-Brume.</p>
    <p class="text-sm mt-2">Votre arme se dégaine partout. À l’ouest de la ville, l’<b>arène des Chasseurs</b> : des vagues d’ombres à affronter avec les techniques de votre classe (${esc(d.cls.name)})${d.arenaBest ? ` · record : vague ${d.arenaBest}` : ''}. Chaque vague rapporte de l’XP, des kinahs et de la gloire ; chaque champion est l’écho d’un Chasseur tombé dont vous rendez le nom. Ligues, classement mondial, saisons, défis et chroniques : Royaume → Arène. Les vagues rapportent de plus en plus à mesure que la difficulté monte. Vous choisissez la vague de départ et pouvez rejouer la même en boucle.</p>
    <p class="text-xs muted mt-1">Régénération des PV : ${d.regen ? `+${d.regen} % toutes les 10 s (puces équipées)` : 'aucune puce « Régénération » équipée (Royaume → Arsenal → Puces)'}.</p>
    <p class="text-xs muted mt-2">${d.houses.length ? `${d.houses.length} demeure${d.houses.length > 1 ? 's' : ''} à visiter` : 'Aucune demeure pour l’instant (Boutique → Demeures)'} · ${d.mounts.length ? `${d.mounts.length} monture${d.mounts.length > 1 ? 's' : ''}` : 'aucune monture (Boutique → Montures)'} · ${d.npcs.length} personnage${d.npcs.length > 1 ? 's' : ''} à qui parler</p>
    <div class="wm-modes">
      <button type="button" class="wm-mode ${last === 'mobile' ? 'on' : ''}" data-a="world-start" data-m="mobile">${icon('smartphone', 'w-6 h-6')}<b>Mode mobile</b><span>Manette tactile à gauche, attaque et techniques à droite. Se joue à la verticale ou à l’horizontale. Graphismes allégés.</span></button>
      <button type="button" class="wm-mode ${last === 'pc' ? 'on' : ''}" data-a="world-start" data-m="pc">${icon('monitor', 'w-6 h-6')}<b>Mode PC</b><span>Clavier (ZQSD) et souris, clic pour attaquer, 1 à 5 pour les techniques. Ombres, lumières diffuses, végétation dense.</span></button>
    </div>
    <button type="button" class="btn ghost w-full mt-3" data-a="world-cancel">Annuler</button>
  </div></div>`);
  refreshIcons();
}
Object.assign(handlers, {
  'world-open': () => worldOpen(),
  'world-start': el => worldStart(el.dataset.m),
  'world-cancel': () => { const w = document.getElementById('wm'); if (w) w.remove(); }
});
if (typeof document !== 'undefined' && document.head) document.head.insertAdjacentHTML('beforeend', `<style>
.wm{position:fixed;inset:0;z-index:135;background:rgba(4,4,10,.86);display:grid;place-items:center;padding:16px;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
.wm-box{width:100%;max-width:520px}
.wm-modes{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}
.wm-mode{display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;padding:14px 10px;border:1px solid var(--line);background:#12121a;color:var(--text);cursor:pointer}
.wm-mode b{font-family:var(--font-display);letter-spacing:.08em}
.wm-mode span{font-size:11.5px;color:var(--muted);line-height:1.4}
.wm-mode.on{border-color:var(--neon);box-shadow:0 0 18px rgba(0,240,255,.18) inset}
.wm-mode:hover{border-color:var(--neon)}
</style>`);

/* ==========================================================================
   Profil intérieur et liens (construits en parlant aux habitants du monde ouvert)
   ========================================================================== */
const SOC_TYPES = {
  ISTJ: ['Le Gardien du serment', 'Fiable, méthodique, fidèle à sa parole. Vous tenez ce que vous promettez, même quand personne ne regarde.', 'Attention à la rigidité : toutes les règles ne méritent pas d’être tenues.'],
  ISFJ: ['Le Protecteur', 'Attentif, discret, dévoué. Vous remarquez ce dont les autres ont besoin avant qu’ils le disent.', 'Attention à vous oublier : prendre soin de soi n’est pas égoïste.'],
  INFJ: ['Le Veilleur', 'Profond, intuitif, guidé par des valeurs. Vous cherchez le sens derrière les choses et derrière les gens.', 'Attention à porter seul ce que vous ressentez : dites-le.'],
  INTJ: ['Le Stratège', 'Indépendant, lucide, tourné vers un but. Vous voyez loin et construisez pas à pas.', 'Attention à la distance : les autres ne lisent pas vos plans.'],
  ISTP: ['L’Artisan', 'Calme, pratique, habile. Vous comprenez les choses en les démontant et réglez les problèmes sans bruit.', 'Attention à garder vos émotions sous clé trop longtemps.'],
  ISFP: ['Le Poète', 'Sensible, libre, sincère. Vous vivez selon ce que vous ressentez et cherchez la beauté dans le présent.', 'Attention à fuir les conflits nécessaires.'],
  INFP: ['Le Rêveur', 'Idéaliste, bienveillant, fidèle à ses valeurs. Vous croyez à ce qui pourrait être.', 'Attention à l’écart entre le rêve et le pas suivant : faites-le, ce pas.'],
  INTP: ['Le Chercheur', 'Curieux, logique, inventif. Vous voulez comprendre comment tout fonctionne, et pourquoi.', 'Attention à rester dans votre tête : le monde attend aussi vos mains.'],
  ESTP: ['L’Aventurier', 'Énergique, direct, dans l’action. Vous apprenez en essayant et vous adaptez vite.', 'Attention aux décisions prises trop vite.'],
  ESFP: ['Le Joyeux', 'Chaleureux, spontané, vivant. Vous rendez les moments plus légers pour tout le monde.', 'Attention à remettre à demain ce qui pèse.'],
  ENFP: ['L’Éclaireur', 'Enthousiaste, inventif, ouvert. Vous voyez des possibles partout et entraînez les autres.', 'Attention à commencer mille choses : finissez-en quelques-unes.'],
  ENTP: ['L’Inventeur', 'Vif, audacieux, joueur d’idées. Vous aimez questionner, débattre et inventer autrement.', 'Attention à l’argument pour l’argument.'],
  ESTJ: ['Le Bâtisseur', 'Organisé, responsable, concret. Vous faites avancer les choses et tenez les structures debout.', 'Attention à écouter avant de trancher.'],
  ESFJ: ['L’Hôte', 'Généreux, sociable, attentionné. Vous créez du lien et prenez soin du groupe.', 'Attention à dépendre du regard des autres.'],
  ENFJ: ['Le Guide', 'Inspirant, empathique, tourné vers les autres. Vous aidez chacun à grandir.', 'Attention à porter les autres au point de vous épuiser.'],
  ENTJ: ['Le Commandant', 'Décidé, ambitieux, stratège. Vous voyez le but et organisez le chemin pour y arriver.', 'Attention à l’impatience envers ceux qui vont moins vite.']
};
const SOC_AX = [['E', 'I', 'Tourné vers les autres', 'Tourné vers soi'], ['S', 'N', 'Concret', 'Intuitif'], ['T', 'F', 'Raison', 'Cœur'], ['J', 'P', 'Organisé', 'Ouvert']];
function socType(ax) { return SOC_AX.map(([a, b]) => ((ax && ax[a]) || 0) >= 0 ? a : b).join(''); }
function viewSocialCard() {
  const S = state.social; if (!S || !(S.n > 0 || S.spouse || S.partner)) return '';
  const ty = socType(S.ax), T = SOC_TYPES[ty], fd = k => fromKey(k).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
  const bars = SOC_AX.map(([a, b, la, lb]) => { const v = (S.ax && S.ax[a]) || 0, tot = Math.max(6, Math.abs(v) + 6), pct = Math.round(50 + v / tot * 50);
    return `<div class="text-[11px] mt-1.5"><div class="flex justify-between"><span class="${v >= 0 ? 'glow-umbra' : 'muted'}">${la}</span><span class="${v < 0 ? 'glow-umbra' : 'muted'}">${lb}</span></div><div class="bar" style="height:6px"><i style="width:${pct}%;background:linear-gradient(90deg,#b07cff,#ff9cc6)"></i></div></div>`; }).join('');
  const R = S.r || {}, friends = Object.values(R).filter(r => r.a >= 30).length, close = Object.values(R).filter(r => r.a >= 70).length;
  let fam = '';
  if (S.spouse) fam += `<div class="mt-2">Marié${heroLook().gender === 'f' ? 'e' : ''} depuis le ${esc(fd(S.wed))} · humeur du foyer : <b style="color:${S.mood >= 55 ? '#4ade80' : S.mood >= 30 ? '#f59e0b' : '#ff4d6d'}">${S.mood >= 80 ? 'heureuse' : S.mood >= 55 ? 'sereine' : S.mood >= 30 ? 'pensive' : 'triste'}</b> (${Math.round(S.mood)}/100)</div>`;
  else if (S.partner) fam += `<div class="mt-2">Une histoire d’amour a commencé. Avec une bague de fiançailles (joaillerie de la ville), vous pourrez demander sa main.</div>`;
  if ((S.kids || []).length) fam += `<div class="mt-1">Enfants : ${S.kids.map(k => esc(k.name)).join(', ')}</div>`;
  if (S.preg) fam += `<div class="mt-1">Un enfant s’annonce : naissance prévue le ${esc(fd(S.preg.due))}${S.preg.due <= dk() ? ' (entrez dans le monde ouvert pour l’accueillir)' : ''}.</div>`;
  const gifts = Object.entries(S.gifts || {}).filter(([, n]) => n > 0).length;
  return `<details class="sys" data-det="soc" style="border-color:rgba(255,156,198,.45)">
    <summary class="flex items-center justify-between gap-2"><span class="sys-title" style="color:#ff9cc6">${icon('heart-handshake', 'w-4 h-4')}Profil intérieur</span><span class="text-xs f-mono" style="color:#ffc2dd">${esc(T[0])} · ${ty}</span></summary>
    <div class="mt-3 text-sm">
      <p>${esc(T[1])}</p><p class="text-[12px] muted mt-1">${esc(T[2])}</p>
      ${bars}
      <p class="text-[11px] muted mt-2">${S.n || 0} réponse${(S.n || 0) > 1 ? 's' : ''} données aux habitants · ${friends} ami${friends > 1 ? 's' : ''} dont ${close} proche${close > 1 ? 's' : ''}${gifts ? ` · cadeaux en réserve : ${Object.values(S.gifts).reduce((a, b) => a + b, 0)}` : ''}</p>
      ${fam ? `<div class="text-[12px]">${fam}</div>` : ''}
      ${(S.log || []).length ? `<details class="mt-2"><summary class="text-[11px] underline muted" style="list-style:none;cursor:pointer">Vos dernières réponses</summary><ul class="text-[11px] mt-1 flex flex-col gap-1">${S.log.slice(0, 12).map(l => `<li><span class="muted">${esc(l.who.split(' ')[0])} : ${esc(l.q)}</span><br>→ ${esc(l.a)}</li>`).join('')}</ul></details>` : ''}
      <p class="text-[10px] muted mt-2">Seize profils inspirés des typologies de personnalité. C’est un miroir pour réfléchir à vos choix, pas un diagnostic : ces modèles ont une valeur scientifique limitée, et votre profil change avec vos réponses.</p>
    </div>
  </details>`;
}

/* ==========================================================================
   PERSONNAGES — puissance, statistiques, classement de tout le lore,
   profils à compléter (archives, lettres, faits) · BIBLE DU LORE (vue)
   ========================================================================== */

/* w : répartition [Force, Endurance, Agilité, Intelligence] ; req : condition pour voir le profil */
const P_ = (id, name, role, power, w, req, o = {}) => ({ id, name, role, power, w, req, ...o });
const LORE_PEOPLE = [
  /* Maison de l'Ombre */
  P_('zach', 'Zacharie', 'Passeur · ancien jardinier de la Miséricorde', 480, [.15, .3, .15, .4], ['met:zach'], { f: 'zach', arch: ['AR14', 'AR21'] }),
  P_('sera', 'Séraphine Roch', 'Duelliste · sœur d’Abel', 360, [.3, .2, .4, .1], ['met:sera'], { f: 'sera', arch: ['AR15'] }),
  P_('mira', 'Mira', 'Espionne · laissée sur les marches de Sainte-Claire', 310, [.15, .15, .5, .2], ['met:mira'], { f: 'mira', arch: ['AR20', 'E03', 'E07'] }),
  P_('helene', 'Hélène Varenne', 'Archiviste · épouse d’Elias, mère de Lune', 290, [.05, .25, .1, .6], ['met:helene'], { f: 'helene', arch: ['AR03', 'C08', 'D04'] }),
  P_('nour', 'Nour', 'Chantre · professeure de piano de Lune', 270, [.05, .2, .15, .6], ['met:nour'], { f: 'nour', arch: ['AR06', 'D10'] }),
  P_('gaspard', 'Gaspard Lenoir', 'Alchimiste · a bu l’oubli', 255, [.1, .15, .15, .6], ['met:gaspard'], { f: 'gaspard', arch: ['AR13'] }),
  P_('odile', 'Dame Odile Fauré', 'Intendante · mère de Mira', 240, [.15, .45, .05, .35], ['met:odile'], { f: 'odile', arch: ['AR09', 'B01'] }),
  P_('ysolde', 'Ysolde', 'Gardienne de Haute-Brume', 235, [.35, .5, .05, .1], ['met:ysolde'], { f: 'ysolde', arch: ['C05', 'C07'] }),
  P_('kael', 'Kaël Mendes', 'Éclaireur · ombre au visage · brancardier n° 88', 220, [.2, .1, .55, .15], ['met:kael'], { f: 'kael', arch: ['AR07', 'AR17', 'D07', 'E02'], grow: [[['tend:IV-A'], 60, 'Souvenirs du 14 mars retrouvés'], [['tend:V-A'], 40, 'Une fossette']] }),
  P_('yanis', 'Yanis Okoro', 'Stratège · auteur du protocole Miséricorde', 200, [.05, .15, .2, .6], ['met:yanis'], { f: 'yanis', arch: ['AR08', 'AR18', 'C04', 'E10'] }),
  P_('anselme', 'Frère Anselme', 'Aumônier · ancien capitaine', 185, [.3, .4, .1, .2], ['met:anselme'], { f: 'anselme', arch: ['AR05', 'AR16', 'D01'] }),
  P_('theo', 'Théo Brasse', 'Forgeron · a forgé les neuf clés', 170, [.45, .35, .05, .15], ['met:theo'], { f: 'theo', arch: ['AR02'] }),
  /* Famille Varenne */
  P_('elias', 'Elias Varenne', 'L’Architecte · a construit le Système', 760, [.05, .2, .1, .65], ['arch:AR10'], { arch: ['AR10', 'AR11', 'AR19', 'D11'] }),
  P_('lune', 'Lune Varenne', 'Chambre 14 · la voix du Système', 0, [.1, .1, .1, .7], ['arch:AR03'], { arch: ['AR12', 'C03', 'AR21', 'D10', 'E09'], special: 'lune' }),
  /* Monarques et l'Être absolu */
  ...['m_crocs', 'm_glaces', 'm_peste', 'm_murmures', 'm_fer', 'm_abysses', 'm_sang', 'm_chaines', 'm_cendres'].map(mid => {
    const M = MONARCHS.find(x => x.id === mid);
    const tome = { m_crocs: 'II', m_glaces: 'III', m_peste: 'IV', m_murmures: 'V', m_fer: 'VI', m_abysses: 'VII', m_sang: 'VIII', m_chaines: 'IX', m_cendres: 'X' }[mid];
    const arch = { m_crocs: ['B01', 'B05', 'B08'], m_glaces: ['C01', 'C02', 'C09', 'C10'], m_peste: ['D03', 'D05', 'D06', 'D08'], m_murmures: ['E05', 'E06', 'E08', 'E09'], m_fer: ['F02', 'F04', 'F06'], m_abysses: ['G03', 'G05', 'G06', 'G08'], m_sang: ['H02', 'H03', 'H04', 'H07'], m_chaines: ['I03', 'I04', 'I08', 'I09'], m_cendres: ['AR04', 'AR15', 'J02', 'J04', 'J09'] }[mid] || [];
    return P_(mid, M.name, `Porteur de la clé ${M.key}`, M.power, mid === 'm_cendres' ? [.4, .2, .3, .1] : [.3, .3, .2, .2], [`met:${mid}`], { monarch: mid, tome, arch });
  }),
  P_('absolu', ABSOLUTE.name, 'Au-delà de la Porte', ABSOLUTE.power, [.25, .25, .25, .25], ['end:L'], { monarch: 'absolu', arch: ['K05'] }),
  /* Les autres */
  P_('basile', 'Basile Ternaux', 'Chasseur de rang E · première ombre', 40, [.35, .35, .15, .15], ['seen:p2'], { arch: ['AR01', 'AR23'], grow: [[['tend:II-A'], 25, 'Sa barque est revenue au fleuve']] }),
  P_('marthe', 'Marthe Ternaux', 'Veuve de Basile', 8, [.2, .5, .1, .2], ['arch:AR23'], { arch: ['AR23', 'B07'] }),
  P_('paul', 'Paul Ternaux', 'Fils de Basile', 12, [.3, .3, .3, .1], ['arch:AR23'], { arch: ['B06'] }),
  P_('rose', 'Rose Albin', 'N° 154 du registre · votre grand-mère', 3, [.05, .25, .05, .65], ['seen:d4_1'], { arch: ['AR03', 'D04'] }),
  P_('lazare', 'Lazare Pell', 'Docker · premier porteur de la clé I', 150, [.5, .3, .1, .1], ['arch:B03'], { arch: ['B02', 'B03'] }),
  P_('agnes', 'Agnès Delorme', 'Mère d’un enfant de l’aile Est', 6, [.1, .5, .1, .3], ['arch:C01'], { arch: ['C01', 'C08'] }),
  P_('anatole', 'Anatole Bouvier', 'Veuf de Jeanne, Haute-Brume', 5, [.2, .5, .1, .2], ['arch:C06'], { arch: ['C06'] }),
  P_('ferrat', 'Madame Ferrat', 'Gardienne-chef de la maison d’arrêt des Ursulines', 4, [.3, .4, .05, .25], ['seen:h2_1'], {}),
  P_('josephine', 'Joséphine', 'Blanchisseuse rue du Four · ancienne détenue de la cellule 5', 2, [.3, .3, .3, .1], ['seen:h2_1'], {}),
  P_('lhermitte', 'Monsieur Lhermitte', 'Maître d’école de Haute-Brume', 3, [.05, .4, .05, .5], ['seen:h1_3'], {}),
  P_('lestrade', 'Aubin Lestrade', 'Chasseur de rang D · lit 42 des Mélèzes', 40, [.3, .4, .2, .1], ['seen:h8_1'], {}),
  P_('lucas', 'Lucas Ferrand', 'Neuf ans · foyer Saint-Roch · dort avec la lumière', 1, [.1, .3, .1, .5], ['seen:q4_1'], {}),
  P_('simone', 'Simone Morel', 'Mère de Jeanne, Lucien et Adèle', 3, [.2, .5, .1, .2], ['seen:q1_1'], {}),
  P_('pons', 'Madame Pons (« Pépita »)', 'Ancienne ouvreuse en chef de la Lanterne', 2, [.05, .3, .1, .55], ['seen:r4_2'], {}),
  P_('leonie', 'Léonie Dupas', 'Contremaîtresse de la ligne sept · Est neuf', 6, [.2, .5, .05, .25], ['seen:f2_2'], { arch: ['F05', 'F09'] }),
  P_('arsene', 'Arsène', 'Ancien ouvrier de la filature Delmas, métier dix', 5, [.4, .4, .05, .15], ['seen:f1_3'], {}),
  P_('abadie', 'Mathis et Hugo Abadie', 'Jumeaux du foyer Saint-Roch', 2, [.25, .25, .4, .1], ['seen:f2_2'], { arch: ['F08'] }),
  P_('clemence', 'Clémence', 'Patronne de la buvette Au Bac, aux Docks', 4, [.5, .3, .05, .15], ['seen:k2_1'], {}),
  P_('ravel', 'Ange Ravel', 'Scaphandrier du port', 60, [.4, .4, .1, .1], ['seen:k4_2'], { arch: ['G04'] }),
  P_('jeanne', 'Jeanne Morel', 'Douze ans · le ruban bleu', 2, [.3, .3, .3, .1], ['seen:n1_1'], { arch: ['H01'] }),
  P_('honorine', 'Honorine', 'Servante de l’hôtel Dravo, fille de la nourrice du comte', 2, [.05, .4, .05, .5], ['seen:y3_1'], {}),
  P_('benoit', 'Benoît Mercier', 'Premier laquais du comte · danseur depuis l’An 4', 30, [.2, .3, .4, .1], ['seen:y8_1'], {}),
  P_('aurore', 'Aurore Dalbret', 'Souffleuse de la Lanterne · porteuse de la clé IV', 40, [.05, .2, .15, .6], ['arch:J07'], { arch: ['J07'] }),
  P_('clotilde', 'Mère Clotilde', 'Supérieure de l’Hospice blanc · porteuse de la clé VII', 20, [.05, .3, .05, .6], ['arch:J07'], { arch: ['J07'] }),
  P_('saturnin', 'Saturnin', 'Boulanger à Pont-de-l’Est · un des neuf de la barre', 6, [.3, .4, .1, .2], ['seen:s1_2'], { arch: ['K02'] }),
  P_('mathilde', 'Mathilde Brasse', 'Fille de Théo', 3, [.2, .4, .2, .2], ['seen:o1_1'], {}),
  P_('ambroise', 'Ambroise Caillé', 'Greffier à la cour d’appel depuis quarante-sept ans', 4, [.05, .2, .45, .3], ['seen:v2_3'], { arch: ['I02'] }),
  P_('gedeon', 'Gédéon Marchais', 'Cordonnier, une jambe', 4, [.3, .4, .05, .25], ['seen:d1_1'], { arch: ['D01', 'D03'] }),
  P_('ines', 'Inès Mendes', 'Mère de Kaël', 5, [.1, .5, .1, .3], ['seen:e2_1'], { arch: ['E02'] }),
  P_('germaine', 'Germaine Clément', 'Veuve, spectatrice des Murmures', 3, [.1, .5, .1, .3], ['seen:e1_2'], { arch: ['E01'] }),
  P_('agathe', 'Sœur Agathe', 'Portière de Sainte-Claire', 9, [.05, .4, .05, .5], ['seen:e6_1'], { arch: ['E07'] }),
  P_('rolande', 'Madame Rolande', 'Blanchisseuse, rue du Four · votre logeuse', 2, [.4, .4, .05, .15], ['seen:i0_2'], {}),
  P_('vidal', 'Madame Vidal', 'Surveillante du foyer Saint-Roch', 3, [.1, .4, .05, .45], ['seen:i1_4'], { arch: ['D09'] }),
  P_('danet', 'Aurèle Danet', 'Directeur des opérations de l’Association', 60, [.15, .2, .15, .5], ['seen:d2_1'], { arch: ['D02'] })
];

/* ---------- Puissance ---------- */
function personPower(p) {
  let v = p.power;
  if (p.f) v += Math.min(60, bondOf(p.f) * 3);
  for (const [req, add] of p.grow || []) if (bibleOk(req)) v += add;
  if (p.monarch && p.tome && (state.story.tomeEnds || {})[`${p.tome}-A`]) v = Math.round(v * 0.35);
  return Math.round(v);
}
function personStatus(p) {
  if (p.special === 'lune') return bibleOk(['arch:D11']) ? 'Écho · administrateur L' : 'Disparue le 14 mars, An 0';
  if (p.monarch && p.tome && (state.story.tomeEnds || {})[`${p.tome}-A`]) return 'Clé rendue · restitué';
  if (p.monarch && p.tome && Object.keys(state.story.tomeEnds || {}).some(k => k.startsWith(p.tome + '-'))) return 'Monarque vaincu';
  if (p.monarch) return 'Monarque';
  if (p.f) return hasF(p.f) ? 'Membre de la Maison' : 'Rencontré';
  return '';
}
function personStats(p) {
  const P = personPower(p);
  return { str: Math.round(P * p.w[0] * 0.9), end: Math.round(P * p.w[1] * 0.9), agi: Math.round(P * p.w[2] * 0.9), int: Math.round(P * p.w[3] * 0.9) };
}
/* Puissance du Joueur : sa puissance de combat (dégâts par seconde, critiques, vitesse, résistance), sur l'échelle des vagues d'arène, comme les Éternels */
function playerPower() { return combatPower().power; }
/* Puissance de combat d'un personnage du récit */
function personCombat(p) { return cpFromOld(personPower(p)); }
function personVisible(p) {
  if (p.monarch && p.monarch !== 'absolu') {
    if ((state.codex || {})[p.monarch]) return true;
    const T = p.tome && TOMES[p.tome];
    if (T && (state.story.seen || {})[T.start]) return true;
    return p.monarch === 'm_cendres' && !!state.story.archives.AR04;
  }
  return bibleOk(p.req);
}
function rankingList() {
  const L = LORE_PEOPLE.filter(p => p.special !== 'lune').map(p => ({ p, v: personVisible(p), pow: personCombat(p) }));
  L.push({ me: true, v: true, pow: playerPower() });
  if (typeof WB_MANUAL !== 'undefined') WB_MANUAL.forEach((R, i) => L.push({ wb: i, v: true, pow: R.lvl, R }));
  return L.sort((a, b) => b.pow - a.pow);
}

/* ---------- Faits à collectionner, débloqués par le récit ---------- */
const PEOPLE_FACTS = {
  sera: [[['seen:t2_2'], 'Le matin où Abel est parti, il lui a dit de siffler tous les soirs : « Moi, je siffle faux sur la deuxième. »'], [['seen:t5_2'], 'Les cinq notes qu’il lui chantait contre les cauchemars, Lune les lui avait apprises dans le couloir, une heure et demie avant.'], [['seen:ag10_1'], '« Pourquoi est-ce qu’on fait le contraire de ce qu’on veut ? » « S’il est descendu jusqu’au fond, il est passé à côté d’Abel. »']],
  ambroise: [[['seen:v2_3'], 'Il écrit ce que dit Thule. Il sort tous les soirs à sept heures, revient à huit.'], [['seen:v3_2'], 'Sa femme Madeleine fait une soupe aux poireaux pour Thule depuis cinq ans. Il la mange en cachette.'], [['seen:x6_0'], 'Il a donné la soupe à Yanis pendant la suspension : « Ce n’est pas une absolution. C’est des poireaux. »']],
  m_chaines: [[['seen:v3_2'], 'Il a condamné son propre frère, Gabriel, à cinq ans. Gabriel est mort en prison la troisième année.'], [['arch:I04'], 'Il a lu la marge barrée de Yanis à l’envers, le 13 mars. Il ne l’a pas demandée.'], [['seen:v5_3'], 'Il a déclaré la note de 14 h 55 « faux manifeste » en sachant qu’elle était vraie. Le seul jugement injuste de sa vie.'], [['tend:IX-A'], 'Il est écrivain public au bas des quarante marches. Il apprend à écrire des lettres de pardon.']],
  zach: [[['seen:i6_0'], 'Il garde depuis dix ans deux places dans sa barque, pour Lune et son porteur.'], [['seen:i6_1'], 'Il voyait passer la petite de la 14 et son porteur sous les lilas de l’aile Est.'], [['seen:n4_1'], 'Le 15 mars de l’An 0, il a trouvé la barque amarrée, propre, vide. Il ne fait monter personne de force et ne retient personne.'], [['seen:n8_2'], '« Un comte. Il avait peur. Il est monté quand même. »'], [['seen:x4_1'], 'Son étiquette : « A fait passer des personnes de l’autre côté sans autorisation. Neuf occurrences. »']],
  rolande: [[['seen:i0_2'], 'Il y a toujours de la soupe sur son poêle quand vous rentrez d’une Faille.'], [['seen:i1_1'], 'Elle vous a donné les gants de son défunt mari, sans un mot.'], [['seen:q1_2'], 'Pendant la fièvre blanche, elle a lavé gratis les draps du dispensaire d’Anselme.'], [['seen:r8_1'], 'Le rire de Lune sur la bobine lui a rendu celui de sa sœur, morte à huit ans.'], [['arch:I07'], 'Son étiquette : « A dit à un enfant : “Ça ne fera pas mal.” 4 112 occurrences. » Elle recommencerait.'], [['seen:z1_1'], 'Son mari tenait l’atelier de repassage. Il est mort l’An 4. Elle n’a jamais arrêté la soupe.'], [['seen:o1_3'], '« Quelqu’un doit être là quand on rentre. C’est le plus important. »']],
  vidal: [[['seen:i1_4'], 'Elle vous a gardé votre casier, le 13. Dedans, un sac bleu dessiné : « À rendre ».'], [['seen:j2_2'], 'Trois de ses petits sont partis avec les loups. Elle a noté ce qu’ils ont, pas seulement leur nom.'], [['seen:q4_1'], 'Le 2 mai, un médecin en blanc vous a déposé au foyer, dans un fauteuil de clinique. Après deux semaines de silence, votre premier mot a été : « sac ».']],
  kael: [[['seen:e6_2'], 'Sa mère a embrassé la moitié de visage qui manquait. Une fossette y est apparue.'], [['arch:AR17'], 'Il tenait la main de Lune quand la lumière est venue.'], [['seen:g8_1'], 'Lune l’appelait « le monsieur élastique ».'], [['arch:D07'], 'Il n’était pas sur la liste : les brancardiers « ne valaient rien ». Il vous a porté jusqu’à la buanderie à 15 h 02.'], [['seen:h5_1'], 'Au sanatorium, Ilse gardait un lit vide, le 88. C’était son numéro de brancardier.'], [['seen:r6_2'], 'Il est né un mardi, en retard de onze jours. Il a fait la grimace du poisson le premier jour. La fossette est chaude.'], [['seen:v1_1'], 'Il n’a pas eu de chaîne : « Les ombres n’ont pas de dossier. »'], [['seen:x3_1'], '« Je ne me souviens pas de ton visage. Je me souviens de ton poids. »'], [['seen:t3_2'], 'Il a vu le cadet à la liste, à 14 h 55, avec son plateau à la main. Numéro 88 brodé sur la poche.'], [['seen:s8_2'], 'Il a pris la deuxième place de la barque, celle du porteur. « Je me souviens de ton poids. C’était un bon poids. »']],
  anselme: [[['arch:AR16'], 'Il a fait poser la barre à 15 h 04.'], [['seen:d2_3'], 'Sa voix s’est cassée à force de crier, neuf minutes, pour couvrir celle d’Elias.'], [['seen:d8_1'], 'Il lave les mains du Dr Oste le premier vendredi du mois.'], [['seen:q1_1'], 'Il se lave les mains après chaque patient, bien trop longtemps. « Dix ans. Je ne sais plus m’arrêter. »'], [['seen:q2_2'], 'Il avait neuf hommes pour poser la barre. Personne ne les compte : ils ont survécu du mauvais côté de la porte.'], [['seen:n1_2'], 'Le comte Dravo venait se confesser chaque Pâques : « Je n’ai rien à confesser cette année. »'], [['seen:n8_2'], 'Il a entendu la vraie confession du comte, au bord du fleuve.'], [['seen:v5_2'], 'On avait décidé la veille, à 10 h 40. « Je n’ai même pas eu le droit d’être coupable de ça. »'], [['seen:v8_1'], '« Aucun. C’est pour ça que ça s’appelle une grâce. »'], [['seen:t8_2'], 'Il a chanté faux toute la journée sur la marche de la grille, pour qu’on trouve le chemin.'], [['seen:s2_1'], 'Avec Saturnin, Bertrand, Hugo et Rémi, il a enlevé la barre. « Elles sont propres. »'], [['seen:ag1_1'], 'À Gaspard qui « rend son billet » : « On m’a annoncé un Dieu qui est descendu. » Il a écrit trois mots sur sa paume.'], [['seen:ag4_1'], 'Il était « un juste », capitaine décoré. « Mon oreille avait entendu parler de toi ; mais maintenant mon œil t’a vu. » Il a dit à Oste le nom de Jésus.'], [['seen:ag9_1'], 'À Thule : le juge qui descend de son siège pour prendre la sentence. « Juste et justifiant. »'], [['seen:ag11_1'], 'Au bord du trou : « Voici l’Agneau de Dieu, qui ôte le péché du monde. » Ôter veut dire aussi porter.']],
  helene: [[['arch:AR03'], 'Elle tient le registre des 312.'], [['seen:d4_1'], 'Elle a découvert qu’il y avait 313 lits.'], [['tend:IV-A'], 'Elle a ajouté une ligne : n° 313, survivant.'], [['seen:h2_3'], 'Elle a recopié à l’encre les noms de l’ardoise du maître d’école : « Haute-Brume. Montés aux Mélèzes. »'], [['seen:h8_1'], 'Elle a ouvert une page « Équipes perdues ». « Il y a quelqu’un qui les a cherchés ? — Maintenant, oui. »'], [['seen:r8_1'], 'Lune lui parlait de « mon porteur ». Elle croyait que c’était un jeu.'], [['seen:k3_1'], 'Pendant sept ans, elle n’a lu à Gaspard que son nom. « Ne pas lire la suite. » Elle a fini par le reconnaître : c’était de la pitié.'], [['arch:I03'], 'Le conseil a décidé de ne pas informer Elias du site, parce que Lune était dans l’aile Est.'], [['seen:v8_2'], 'Elle a affiché le procès-verbal sur la porte de l’Association. « Ce n’est pas un pardon. »'], [['seen:t8_3'], '« Il ne faut pas qu’il l’apprenne par une lettre qu’il n’ouvrira pas. »'], [['seen:s3_1'], 'Elle a lu le numéro 211 à Elias, devant la Porte. Il s’est retourné.']],
  nour: [[['arch:AR06'], 'Elle a transcrit en braille les douze premières mesures de la berceuse.'], [['arch:D10'], 'Elle a senti, à travers l’enveloppe, les quatre dernières mesures piquées en braille. Elle a refusé de les lire.'], [['seen:h8_2'], 'Lune n’arrivait jamais seule à la leçon de trois heures : une roue de fauteuil grinçait, la gauche. « Elle disait que c’était son porteur. »'], [['seen:v4_2'], 'Son étiquette : « Retard. Vingt minutes. » Rien d’autre.'], [['seen:s1_3'], '« Elle voulait dire plus. Plus triste. Elle a écrit la fin pour le jour où il irait le plus mal. »']],
  theo: [[['arch:AR02'], 'Il a forgé les neuf clés, puis la barre.'], [['seen:i6_1'], 'La veille de la descente, il vous a forgé un harnais : « Avec ça, tu porteras droit. »'], [['seen:d8_3'], 'Il avait forgé un diapason pour Lune. Il donne le la de la sixième note.'], [['seen:f5_3'], 'Il forgeait des fers à cheval sans chevaux depuis dix ans. L’un d’eux est devenu la cale qui a arrêté l’horloge de l’Est.'], [['seen:n6_1'], 'Il avait forgé la cloche de Sainte-Claire pour le mariage de sa fille. Gravé sur le battant : « POUR LES MARIAGES. T. B. »'], [['seen:v2_1'], 'Il n’a pas pu scier sa chaîne : « On ne scie pas de l’écriture. »'], [['arch:J08'], 'Il a perdu sa main gauche en trempant la neuvième clé dans le Cœur, pour Abel. Ilse l’a pansé.'], [['seen:z8_1'], '« Alors ce n’était pas pour rien. »'], [['arch:K01'], 'Il a refondu les neuf clés en un soc de charrue, sur son enclume, au pied de la Porte. Il garde la boîte de feutre vide.'], [['seen:o1_1'], 'Sa fille Mathilde est venue du Sud avec ses deux garçons.']],
  yanis: [[['arch:E03'], 'C’est lui qui payait l’agent M., sur ses propres fonds.'], [['arch:E10'], '« 313 − 1 = 312. J’ai passé neuf ans à croire que cette soustraction était juste. »'], [['arch:AR08'], 'Auteur du protocole Miséricorde.'], [['arch:C04'], 'La note de 14 h 55 porte la référence « Y.O. / M-4 ».'], [['seen:d2_1'], 'Il s’est arrêté au milieu de l’escalier en entendant « révision 2 ».'], [['seen:q2_1'], 'Dans l’escalier de l’Association, il vous a fait manger du pain et du fromage avant la quarantaine : « Non. Maintenant. »'], [['seen:f3_2'], 'Il a commandé la grille M-4 et envoyé la note de 14 h 55. Il a cru neuf ans que « 313 − 1 = 312 » était juste. « On ne retranche pas les gens. On les compte. »'], [['seen:f8_1'], 'Il a passé un jour entier sans rien calculer, pour la première fois depuis l’âge de neuf ans.'], [['arch:I06'], 'En marge de sa feuille de calcul, barré : « Aile Est seule ? 62 lits. 30 h suffisent. »'], [['seen:v5_3'], 'C’est lui qui a écrit le point six. Lune était une « variable de fuite ».'], [['seen:s5_1'], 'C’est lui qui a écrit « Personne n’est un chiffre » au bas du registre, l’An 1, à quatre heures du matin, à l’encre verte.'], [['seen:ag6_1'], '« Je ne sais pas ce que je suis, quand je ne compte pas. » Arsène : « Ce n’est pas vous qui comptez. C’est vous qui êtes compté. »']],
  mira: [[['arch:E03'], 'Elle était l’agent M. Yanis la payait pour s’assurer que vous mangiez, deux mois avant votre éveil.'], [['arch:E07'], 'Elle s’appelait Claire. Elle garde le nom de Mira, et laisse sa mère seule l’appeler Claire.'], [['seen:d4_2'], 'Elle a remarqué que vous boitiez quand il pleut. Elle a posé la main sur votre cicatrice.'], [['seen:r3_1'], 'La nuit de la gare, elle attendait sur le toit de la halle. Elle a barré « Le sujet n’est pas remonté » et écrit : « Il est revenu. Il a l’air d’avoir faim. »'], [['seen:r6_1'], 'Sa mère l’a regardée une heure depuis la fontaine de Sainte-Claire avant de partir. « Je croyais que ça venait de moi. »'], [['seen:n3_3'], 'Elle n’avait jamais dansé. Kaël l’a fait valser sur le toit. « Déja dansé. Mercie. »'], [['seen:v1_3'], 'Son étiquette : 2 314 vols. « Il en a oublié un, celui où je n’ai rien pris. »'], [['seen:z6_1'], 'Elle garde la petite pince que Théo lui a forgée. Elle ne s’en sert jamais.'], [['seen:o1_2'], 'Elle a acheté deux pommes au marché. Le marchand a compté sa monnaie deux fois.'], [['seen:ag5_1'], '« Quand j’enlève tous les masques, il n’y a personne. » Elle a allumé une bougie à Sainte-Claire sans prier.']],
  ysolde: [[['arch:C05'], 'Trois ans de garde, seule. « La relève n’est pas venue. Je reste. »'], [['seen:h6_2'], 'Elle a mis la soupe sur le feu le matin où Abel est parti. Le jour où Séraphine est partie, elle a « mis double ».'], [['seen:h3_1'], 'La troisième année de garde, elle ne dormait plus. « Ce qui est dur, c’est de ne pas savoir jusqu’à quand. »'], [['seen:z1_1'], 'Madame Rolande a mis du thym dans sa soupe : il en manquait depuis onze ans.'], [['seen:t8_1'], '« Je ne t’ai pas embrassé, ce matin-là. Je n’ai pas su. »'], [['seen:ag3_1'], 'Sa mère avait brodé Ézéchiel 36:26 au-dessus de la cuisinière. « Une pierre, ça n’aime personne. »'], [['seen:ag10_1'], 'Elle a porté la gamelle brûlante contre sa poitrine toute la descente. Ses paumes en sont restées cloquées. Elle n’en a rien dit.']],
  ferrat: [[['seen:h2_1'], 'Elle a gardé la montre d’Ilse, arrêtée à 13 h 40. Elle a vu un monsieur aux gants gris venir demander à Ilse ses papiers de l’hôpital.']],
  josephine: [[['seen:h2_1'], 'Elle avait volé le savon d’Ilse en prison. Elle chante la baleine en tordant les draps.'], [['seen:h8_1'], 'Elle a rendu le savon : « Je l’avais pris. Je le rends. »']],
  lhermitte: [[['seen:h2_3'], 'Il écrivait à la craie les noms de ceux qui montaient. Il a effacé l’ardoise quand Hélène les a recopiés à l’encre.']],
  lestrade: [[['seen:h8_1'], 'Porteur de lanterne d’une équipe de cinq. Il a attendu trois jours à l’entrée de la Faille. Personne n’est descendu chercher les quatre autres.']],
  lucas: [[['seen:q4_1'], 'Madame Vidal a laissé sa petite lampe allumée sur son oreiller vide, pour quand il reviendrait.'], [['seen:q8_1'], 'Réveillé dans le noir à l’Hospice, il a crié jusqu’à ce que vous allumiez une bougie.']],
  simone: [[['seen:q1_1'], 'Au dispensaire, elle tenait un pied de chacun de ses petits dans chaque main.']],
  pons: [[['seen:r4_2'], 'Elle a connu Tino à sept ans, en costume de page, qui cherchait son père dans les cintres. Auguste Vey est mort là-haut l’An 2, seul.']],
  leonie: [[['seen:f2_2'], 'Elle ment dans les registres pour qu’on ne pousse pas les ouvriers plus loin.'], [['seen:f5_1'], 'Elle a mesuré, pendant quarante semaines, que le fer recule d’un demi-millimètre par heure de sommeil.']],
  jeanne: [[['seen:n1_1'], 'Elle a eu soixante-dix ans pendant une semaine après avoir dansé au bal du comte.'], [['seen:n8_2'], 'Elle a retrouvé ses douze ans au matin. Elle dit que c’était nul, d’être vieille.']],
  honorine: [[['seen:y3_1'], 'Elle a gardé la bougie qui s’était éteinte quand le petit Isaïe avait six ans.'], [['seen:y8_0'], 'Elle a retiré le drap du fauteuil du vieux comte, quarante ans après.']],
  benoit: [[['seen:y8_1'], 'Il a dansé sept ans au bal du comte. Sa mère, Odette, est modiste rue des Tanneurs. Il est rentré.']],
  m_sang: [[['seen:n2_3'], 'Son père a perdu ses mots un par un. Il s’est juré que ça ne lui arriverait pas.'], [['arch:H07'], 'C’était lui, le monsieur aux gants gris des Ursulines, envoyé par le conseil.'], [['seen:n8_1'], 'Le son que répétait son père, c’était « Isaïe ». Il l’appelait.']],
  agathe: [[['seen:n1_2'], 'Elle a entendu la cloche sonner le glas seule, quarante minutes, le 14 mars. Puis le battant est tombé dans la crypte.'], [['seen:v1_2'], 'Son étiquette : « Colère. A souhaité la mort d’un comte. Plusieurs fois. »'], [['seen:ag5_1'], '« Être connu et aimé quand même, ça s’appelle la grâce. » Chaque hiver depuis dix-neuf ans, elle paie de sa poche une bougie « pour la troisième marche ».']],
  ravel: [[['seen:k4_3'], 'Il est descendu deux ans chercher les noyés du bac. Dernière page de son carnet : « CHERCHER QUOI ? »']],
  clemence: [[['seen:k2_1'], 'Elle a oublié le nom de la Dame du Bac, qu’elle servait depuis vingt ans. « Ramenez-moi le nom de cette femme. »']],
  m_abysses: [[['seen:k5_1'], 'Elle met quatre bols tous les matins sans savoir pourquoi.'], [['seen:k8_1'], '« Il avait les oreilles décollées. Il détestait les épinards. »']],
  gaspard: [[['seen:k3_1'], 'Marié à Morgane Lys, la Dame du Bac. Deux fils, Jules et Baptiste, disparus dans le bac de seize heures, An 3. Il n’avait pas lu le papier de sa femme.'], [['seen:k8_1'], 'Morgane a dit son nom sans le lire dans un carnet. Il a gravé BAPTISTE dans le verre.'], [['arch:J05'], 'La nuit du 13 au 14 mars, il n’a pas touché la molette. Après la chute d’Elias, il l’a tournée à gauche, doucement.'], [['arch:J06'], 'À 6 h 05, on lui a répondu : « Votre présence auprès du Germe est indispensable. » Il est resté avec la machine.'], [['seen:t8_3'], 'Il a dit la Résonance à Hélène : « On ne l’a pas mesurée. On l’a élargie. »'], [['seen:o7_1'], 'Il a déchiré sa lettre et l’a jetée dans le fleuve : « On se l’est dit. Ça suffit. »'], [['seen:ag1_1'], '« Je rends mon billet. » Il croit que Dieu existe ; il ne veut pas de son ciel. Il garde la paume fermée.'], [['seen:ag7_1'], 'Les trois mots de sa paume : « Il sait leurs noms. » Il a pleuré sur le banc de la cour en nommant Jules et Baptiste.']],
  paul: [[['seen:f2_1'], 'À l’Est neuf, sa main gauche est devenue de fer jusqu’au poignet. Quatre cent soixante tôles à l’heure.'], [['seen:f8_1'], 'Il a porté Arsène sur son dos jusqu’en haut de la tour.'], [['seen:x2_1'], 'Il a porté la chaîne de madame Rolande pendant qu’elle étendait le linge.']],
  arsene: [[['seen:f1_3'], 'Il s’endort debout au milieu de la rue. « Ici, je ne suis plus jamais fatigué. »'], [['seen:f8_1'], 'Il travaillait au métier dix, à côté de Lucie Coll. « Elle disait : lui, il se reposera. »'], [['seen:ag6_1'], 'Il glisse chaque jour son pain dans la poche de Hugo Abadie. Hugo croit que c’est son frère.']],
  abadie: [[['seen:f2_2'], 'À l’Est neuf, l’un gaucher, l’autre droitier, ils triaient tous les deux de la main droite.']],
  m_fer: [[['seen:f4_1'], 'Sa mère, Lucie, est morte un dimanche au métier n° 9 de la filature Delmas. Il avait douze ans.'], [['arch:F06'], 'Elle venait le dimanche pour payer son école des Arts et Métiers.'], [['seen:f8_1'], 'Il a dormi vingt-deux heures au pied de son horloge arrêtée.']],
  germaine: [[['seen:r1_2'], 'Quarante ans de billets de cinéma dans une boîte à biscuits. Robert posait la main sur son genou jusqu’au mot fin.'], [['seen:r5_1'], 'Au théâtre, l’ombre sans visage a posé la main sur son genou. « Ça me suffit. »']],
  ines: [[['seen:r6_2'], 'Elle fait des biscuits secs en forme de cœur qui cassent les dents. Elle a passé une nuit sur le toit avec Kaël.']],
  odile: [[['seen:j2_1'], 'Elle a écrit deux noms à la première page de son registre : Élie Kask, Thomas Fauré.'], [['arch:E07'], 'Elle ne savait pas écrire. Elle a laissé à sa fille une médaille qui portait son nom.'], [['arch:B01'], 'Ruben lui a donné son pain pendant l’hiver de Vaumoise.'], [['seen:ag2_1'], '« J’ai été juste. Alors pourquoi je ne peux pas la regarder ? » Anselme : « Ce n’est pas un pain qu’on peut pétrir. »']],
  elias: [[['arch:AR11'], 'Il a fait de la voix de sa fille la voix du Système.'], [['arch:D11'], 'Il a révoqué l’accès de « la voix de référence » : « elle ne doit plus rien décider ».'], [['seen:t4_1'], 'La nuit du 13 au 14 mars, il a poussé le Germe à pleine puissance : « Encore une minute. »'], [['seen:t5_1'], 'Il a lu la bande à 14 h 45 et il a couru, en pantoufles, quatre kilomètres.'], [['seen:s3_2'], '« Je le sais depuis onze ans. Personne ne me l’avait jamais dit. »'], [['arch:K09'], 'Il a ouvert l’enveloppe le jour où il était le plus triste, et il a joué les quatre mesures, mal, sur la guitare de Nour.']],
  lune: [[['arch:E09'], '« Quand je serai grande, c’est moi qui porterai le tien. »'], [['arch:AR12'], '« La fin, on la fera ensemble, ma lune. »'], [['arch:C03'], 'Elle avait fini sa berceuse à 13 h 40.'], [['seen:d6_1'], 'Elle vous appelait « le grand de la 13 qui porte mon sac ».'], [['arch:D11'], 'L’administrateur L, révoqué, a servi deux fois : pour vous choisir, et pour vous parler.'], [['seen:t3_1'], 'À 13 h 40, elle a appris les cinq premières notes à un cadet : « Comme ça, vous pourrez la chanter à quelqu’un qui fait des cauchemars. »'], [['arch:K07'], 'À 2 h 04, à la gare, elle a cherché « quelqu’un qui portait le sac d’un autre sans que personne regarde ». Résultat : un. « C’est le grand de la 13. »'], [['seen:s8_2'], 'Elle est partie dans la barque, à la première place gardée.']],
  rose: [[['seen:d4_1'], 'Elle avait fait ouvrir la fenêtre pour que son petit-fils entende les pigeons.'], [['seen:d6_1'], 'Elle a dit : « Prenez le petit d’abord. »'], [['seen:d6_2'], 'Elle récitait aux petits Fabre le psaume de la vallée et de l’ombre.'], [['seen:q6_1'], 'Café au lait dans une thermos au bouchon cabossé, tablier à carreaux bleus, bonbons à la menthe. « Garde un peu de place pour toi. »']],
  m_peste: [[['arch:D05'], 'Il a écrit la grille M-4 en une nuit, « pour un exercice ».'], [['arch:D06'], 'Il vous a opéré, puis effacé des registres.'], [['arch:D09'], 'Il a payé votre pension au foyer Saint-Roch.']],
  m_murmures: [[['arch:E05'], 'Il a fabriqué la voix du Système à partir de celle de Lune.'], [['seen:e7_1'], 'Son père ne le regardait que lorsqu’il jouait quelqu’un d’autre.'], [['seen:e8_1'], '« Célestin. Mon père m’appelait Tino. »'], [['seen:r8_2'], 'Il a rendu les 1 214 étiquettes des masques. Il les a lues à voix haute, sans imiter personne.']],
  m_glaces: [[['arch:C04'], 'On l’a fait sortir à 14 h 55. Elle était innocente.']],
  m_crocs: [[['arch:B01'], 'Il a donné toute sa réserve à une femme qui partait vers le Sud.'], [['seen:j2_0'], 'Le samedi, il mettait quelque chose sous les os du foyer Saint-Roch.'], [['seen:j5_1'], 'Il a trouvé la clé I sur la tombe de Thomas, sans le savoir.']],
  basile: [[['arch:AR23'], '« Ne vends pas la barque. »']]
};
function personFacts(p) { return (PEOPLE_FACTS[p.id] || []).map(([req, t]) => ({ ok: bibleOk(req), t })); }

/* ---------- Vues ---------- */
function statMini(s) {
  return `<div class="grid grid-cols-4 gap-1 text-center text-[11px] f-mono">${[['F', s.str, 'Force'], ['E', s.end, 'Endurance'], ['A', s.agi, 'Agilité'], ['I', s.int, 'Intelligence']].map(([k, v, l]) => `<div class="tile" style="padding:4px" title="${l}"><div class="muted">${k}</div><div>${v}</div></div>`).join('')}</div>`;
}
function codexPeople() {
  if (ui.person) return viewPerson(ui.person);
  const list = rankingList();
  const myIdx = list.findIndex(x => x.me) + 1;
  return `<div class="sys umbra">
      <div class="sys-title u mb-1">${icon('trophy', 'w-4 h-4')}Classement de puissance</div>
      <p class="text-xs muted">Toutes les personnes du lore et les seize Éternels, sur une seule échelle : la <b>puissance de combat</b>, c’est-à-dire la vague d’arène la plus haute que l’on tient. Elle se calcule sur les dégâts par seconde (attaques par seconde, coups critiques, part des PV retirée à chaque coup, exécution) et la résistance (PV et ténacité, esquive) : ni le niveau, ni les cosmétiques en eux-mêmes, seulement ce qu’ils changent au combat. Les liens et le récit font évoluer celle des autres.</p>
      <p class="text-sm mt-2">Vous êtes <b class="glow">${myIdx}<sup>e</sup></b> sur ${list.length}.</p>
    </div>
    <div class="sys" style="padding:8px">${list.map((x, i) => {
      if (x.me) return `<div class="res" style="cursor:default;border-color:rgba(0,240,255,.5)"><span class="f-mono w-7 text-right">${i + 1}</span><span class="flex-1 min-w-0"><span class="f-display glow">${esc(state.profile.name || 'Vous')}</span><span class="block text-[11px] muted">Le Joueur · ${esc(curClass().name)}</span></span><span class="f-mono">${x.pow.toLocaleString('fr-FR')}</span></div>`;
      if (x.wb != null) { const k = wbState().first[x.wb]; return `<div class="res" style="cursor:default;border-color:rgba(255,42,74,.35)"><span class="f-mono w-7 text-right">${i + 1}</span><span class="flex-1 min-w-0"><span class="block truncate f-display" style="color:#ffb0bc">${ROMAN_WB[x.wb]} · ${esc(x.R.n)}</span><span class="block text-[11px] muted">Éternel du monde ouvert${k ? ' · vaincu' : ''}${wbManualHas(x.wb) ? ' sans filet' : ''}</span></span><span class="f-mono">${x.pow.toLocaleString('fr-FR')}</span></div>`; }
      if (!x.v) return `<div class="res" style="cursor:default"><span class="f-mono w-7 text-right muted">${i + 1}</span><span class="flex-1 muted">???</span><span class="f-mono muted">${x.pow.toLocaleString('fr-FR')}</span>${icon('lock', 'w-4 h-4 muted')}</div>`;
      return `<button type="button" class="res" data-a="person-open" data-id="${x.p.id}"><span class="f-mono w-7 text-right">${i + 1}</span><span class="flex-1 min-w-0"><span class="block truncate f-display">${esc(x.p.name)}</span><span class="block text-[11px] muted truncate">${esc(personStatus(x.p) || x.p.role)}</span></span><span class="f-mono">${x.pow.toLocaleString('fr-FR')}</span>${icon('chevron-right', 'w-4 h-4 muted')}</button>`;
    }).join('')}</div>
    ${(() => { const L = LORE_PEOPLE.find(p => p.special === 'lune'); return personVisible(L) ? `<button type="button" class="item w-full text-left" data-a="person-open" data-id="lune">${icon('music', 'w-5 h-5')}<span class="flex-1"><span class="f-display">Lune Varenne</span><span class="block text-[11px] muted">Hors classement · ${esc(personStatus(L))}</span></span>${icon('chevron-right', 'w-4 h-4 muted')}</button>` : ''; })()}`;
}
function viewPerson(id) {
  const p = LORE_PEOPLE.find(x => x.id === id);
  if (!p || !personVisible(p)) { ui.person = null; return codexPeople(); }
  const G = state.story, F = p.f && FOLLOWERS[p.f], M = p.monarch && (p.monarch === 'absolu' ? ABSOLUTE : MONARCHS.find(m => m.id === p.monarch));
  const facts = personFacts(p), arch = p.arch || [];
  const owned = arch.filter(a => G.archives[a]).length, factsOk = facts.filter(f => f.ok).length;
  const letters = F ? F.letters.map((l, i) => ({ l, i, open: i < lettersOpen(p.f) })) : [];
  const total = arch.length + facts.length + letters.length, got = owned + factsOk + letters.filter(x => x.open).length;
  const isLune = p.special === 'lune';
  return `<button type="button" class="btn sm ghost" data-a="person-close">${icon('arrow-left', 'w-3.5 h-3.5')}Classement</button>
    <div class="sys umbra">
      <div class="flex items-start justify-between gap-3">
        <div><div class="f-display text-xl font-bold">${esc(p.name)}</div><div class="text-sm muted">${esc(p.role)}</div>${personStatus(p) ? `<div class="text-xs glow mt-1">${esc(personStatus(p))}</div>` : ''}</div>
        <div class="text-right"><div class="label">Puissance de combat</div><div class="f-mono text-2xl">${isLune ? '—' : personCombat(p).toLocaleString('fr-FR')}</div></div>
      </div>
      <div class="mt-3">${isLune ? `<p class="text-xs muted">Hors échelle. Le Système ne mesure pas ce qui le fait fonctionner.</p>` : profileMini(cpProfileOld(personPower(p)))}<p class="text-[10px] muted mt-1">Profil de combat : ce que mesure la puissance (comme dans votre Statut).</p></div>
      ${F ? `<p class="text-sm mt-3">${esc(F.desc)}</p><p class="text-xs muted mt-1">Lien : ${bondOf(p.f)} · ${esc(F.bonus)}</p>` : ''}
      ${M ? `<p class="text-sm mt-3">${esc(M.origin)}</p>${personVisible(p) ? `<p class="text-sm mt-2 muted">${esc(M.story)}</p>` : ''}` : ''}
      <div class="text-xs muted mt-3">Collection : ${got} / ${total}</div>
    </div>
    ${facts.length ? `<div class="sys"><div class="sys-title mb-2">Ce que vous savez</div>${facts.map(f => f.ok ? `<p class="text-sm mb-2">• ${esc(f.t)}</p>` : `<p class="text-sm mb-2 muted">• ??? <span class="text-[11px]">(à découvrir dans le récit)</span></p>`).join('')}</div>` : ''}
    ${letters.length ? `<div class="sys"><div class="sys-title mb-2">Lettres</div>${letters.map(x => x.open ? `<button type="button" class="res" data-a="open-letter" data-id="${p.f}" data-i="${x.i}">${icon('mail', 'w-4 h-4')}<span class="flex-1">${esc(x.l.t)}</span>${G.read[`${p.f}:${x.i}`] ? '' : '<span class="rar">nouvelle</span>'}</button>` : `<div class="res" style="cursor:default">${icon('lock', 'w-4 h-4 muted')}<span class="flex-1 muted">Lettre ${x.i + 1} · lien ${LETTER_BONDS[x.i]} requis${hasF(p.f) ? '' : ', et recrutement'}</span></div>`).join('')}</div>` : ''}
    ${arch.length ? `<div class="sys"><div class="sys-title mb-2">Archives liées</div>${arch.map(a => G.archives[a] ? `<button type="button" class="res" data-a="open-archive" data-id="${a}"><span class="f-mono text-[11px] muted w-10">${a}</span><span class="flex-1 min-w-0 truncate">${esc(ARCHIVES[a].t)}</span>${icon('chevron-right', 'w-4 h-4 muted')}</button>` : `<div class="res" style="cursor:default"><span class="f-mono text-[11px] muted w-10">${a}</span><span class="flex-1 muted">— pas encore trouvée —</span>${icon('lock', 'w-4 h-4 muted')}</div>`).join('')}</div>` : ''}
    ${M && M.chronicle && Object.keys(state.story.tomeEnds || {}).some(k => k.startsWith((p.tome || '?') + '-')) ? `<div class="sys"><div class="sys-title mb-2">Chronique</div><div class="prose text-[15px]">${M.chronicle.map(c => `<p>${esc(c)}</p>`).join('')}</div></div>` : ''}`;
}

function codexBible() {
  const st = bibleStats(), tab = ui.bibleTab || 'verites';
  const tabs = [['verites', 'Vérités'], ['chrono', 'Chronologie'], ['liens', 'Liens'], ['graines', 'Graines'], ['plan', 'Plan des tomes'], ['regles', 'Règles']];
  let body = '';
  if (tab === 'verites') body = BIBLE_SECRETS.map((s, i) => bibleOk(s.req)
    ? `<div class="sys"><div class="flex items-center justify-between gap-2"><span class="f-display font-semibold glow-umbra">${esc(s.title)}</span><span class="text-[10px] muted">${esc(s.where)}</span></div><p class="text-sm mt-2">${esc(s.t)}</p>${bibleLinksOf(s.id)}</div>`
    : `<div class="sys" style="opacity:.6"><div class="flex items-center justify-between gap-2"><span class="f-display">${icon('lock', 'w-3.5 h-3.5 inline')} Vérité n° ${i + 1}</span><span class="text-[10px] muted">Révélée : ${esc(s.where.split(',')[0].split('(')[0].trim())}</span></div></div>`).join('');
  if (tab === 'chrono') body = `<div class="sys">${chronoSorted().map(c => bibleOk(c.req)
    ? `<div class="py-2" style="border-bottom:1px solid #26262e"><div class="f-mono text-[11px] glow">${esc(c.date)}</div><div class="text-sm mt-0.5">${esc(c.t)}</div>${bibleLinksOf(c.id)}</div>`
    : `<div class="py-2 muted" style="border-bottom:1px solid #26262e"><div class="f-mono text-[11px]">${esc(c.date.split(',')[0])}</div><div class="text-sm">${icon('lock', 'w-3 h-3 inline')} …</div></div>`).join('')}</div>`;
  if (tab === 'liens') {
    const L = BIBLE_LINKS.filter(x => bibleKnown(x.a) && bibleKnown(x.b));
    body = `<div class="sys"><p class="text-xs muted mb-2">Ce que vos découvertes disent ensemble, au cas où le lien vous aurait échappé.</p>${L.length ? L.map(x => `<div class="py-2" style="border-bottom:1px solid #26262e"><div class="text-xs f-display"><span class="glow">${esc(bibleLabel(bibleEntry(x.a)))}</span> ↔ <span class="glow-umbra">${esc(bibleLabel(bibleEntry(x.b)))}</span></div><p class="text-sm mt-1">${esc(x.why)}</p></div>`).join('') : '<p class="text-sm muted">Aucun lien encore. Continuez le récit.</p>'}
      <p class="text-[11px] muted mt-2">${L.length} / ${BIBLE_LINKS.length} liens révélés.</p></div>`;
  }
  if (tab === 'graines') body = `<div class="sys">${BIBLE_SEEDS.map(g => {
    if (!bibleOk(g.reqPosed)) return `<div class="py-2 muted" style="border-bottom:1px solid #26262e">${icon('lock', 'w-3 h-3 inline')} Graine non trouvée</div>`;
    const h = bibleOk(g.reqHarvest);
    return `<div class="py-2" style="border-bottom:1px solid #26262e"><div class="flex justify-between gap-2"><span class="f-display">${esc(g.t)}</span><span class="rar" style="color:${h ? 'var(--neon)' : 'var(--muted)'}">${h ? 'récoltée' : 'en terre'}</span></div><p class="text-sm mt-1">${esc(g.txt)}</p><p class="text-[11px] muted">Posée : ${esc(g.posed)} · ${h ? 'Récoltée' : 'À récolter'} : ${esc(g.harvest)}</p></div>`;
  }).join('')}</div>`;
  if (tab === 'plan') body = `<div class="sys">${BIBLE_PLAN.map(p => { const T = TOMES[p.t], open = T && tomeAvailable(T);
    return `<div class="py-2" style="border-bottom:1px solid #26262e"><div class="flex justify-between gap-2"><span class="f-display">Tome ${p.t} · ${esc(p.title)}</span><span class="rar">${T ? (open ? 'ouvert' : 'écrit · fermé') : 'à venir'}</span></div><p class="text-sm mt-1 ${open ? '' : 'muted'}">${open ? esc(p.theme) : '…'}</p></div>`; }).join('')}</div>`;
  if (tab === 'regles') body = `<div class="sys">${BIBLE_RULES.map(r => `<p class="text-sm mb-2">• ${esc(r)}</p>`).join('')}</div>`;
  return `<div class="sys umbra"><div class="sys-title u mb-1">${icon('book-key', 'w-4 h-4')}Bible du lore</div>
      <p class="text-xs muted">Toutes les vérités restent scellées tant que vous ne les avez pas découvertes dans le récit.</p>
      <p class="text-xs mt-2 f-mono">Vérités ${st.s}/${st.sT} · Chronologie ${st.c}/${st.cT} · Liens ${st.l}/${st.lT}</p></div>
    <div class="subtabs">${tabs.map(([id, l]) => `<button type="button" class="chip ${tab === id ? 'on' : ''}" data-a="bible-tab" data-t="${id}">${l}</button>`).join('')}</div>${body}`;
}
function bibleLinksOf(id) {
  const L = BIBLE_LINKS.filter(x => (x.a === id || x.b === id) && bibleKnown(x.a) && bibleKnown(x.b));
  if (!L.length) return '';
  return `<div class="mt-2">${L.map(x => { const o = x.a === id ? x.b : x.a; return `<p class="text-xs muted mt-1">${icon('link', 'w-3 h-3 inline')} Lié à <span class="glow-umbra">${esc(bibleLabel(bibleEntry(o)))}</span> : ${esc(x.why)}</p>`; }).join('')}</div>`;
}

Object.assign(handlers, {
  'person-open': el => { ui.person = el.dataset.id; render(); window.scrollTo({ top: 0 }); },
  'person-close': () => { ui.person = null; render(); },
  'bible-tab': el => { ui.bibleTab = el.dataset.t; render(); }
});

/* ==========================================================================
   GUIDE DU DÉBUTANT — musculation, nutrition et outils de l'appli,
   expliqués très simplement
   ========================================================================== */

const GUIDE = [
  { id: 'principe', icon: 'sparkles', t: 'Le jeu en une minute', p: [
    'Cette appli transforme ta vraie vie en jeu vidéo. Tu es un Chasseur. Chaque jour, le Système te donne une quête : faire ta séance de sport (ou te reposer si c’est un jour de repos) et bien manger.',
    'Quand tu fais ta séance en entier, tu gagnes 375 XP. Quand tu atteins tes 4 objectifs de nourriture (calories, protéines, glucides, lipides), tu gagnes 375 XP aussi. Le sport et l’assiette comptent autant : c’est fait exprès.',
    'L’XP te fait monter de niveau. Chaque niveau te donne des points de statistiques : 3 au rang E, puis 3 de plus à chaque nouveau rang (6 au rang D, 9 au C, 12 au B, 15 au A, 18 au S). Tu gagnes aussi des kinahs, la monnaie du jeu, pour acheter des choses dans la boutique.',
    'Si tu rates ta quête, tu perds 150 XP et 100 kinahs. Mais tu peux mettre le jeu en pause quand tu as besoin de repos (voir « Pause »).',
    'Le plus important : l’XP ne vient que de tes vrais efforts. Les combats du jeu donnent des kinahs et des objets, jamais d’XP. Pour devenir fort dans le jeu, il faut devenir fort pour de vrai.'
  ] },
  { id: 'jour1', icon: 'footprints', t: 'Ta première journée, pas à pas', p: [
    '1. Ouvre l’onglet « Statut ». Tu vois ta quête du jour : la séance prévue et tes objectifs de nourriture.',
    '2. Va dans « Donjon ». C’est là qu’est ta séance. Pour chaque exercice, fais tes séries, écris le poids que tu as utilisé, puis coche l’exercice. Quand tout est coché, la séance est validée.',
    '3. Va dans « Nutrition ». À chaque repas, ajoute ce que tu manges. Les barres se remplissent. Le but est de finir la journée dans la zone verte pour les 4 barres.',
    '4. Toujours dans « Nutrition », note l’eau que tu bois et tes heures de sommeil. Entre 2,5 et 3 litres d’eau : +75 kinahs. 8 heures de sommeil ou plus : +75 kinahs. Tes bonus de kinahs en % (Maison, équipement, puces) s’ajoutent aussi à ces primes.',
    '5. Le soir, reviens sur « Statut » : si tout est vert, la quête est accomplie. Bravo, tu viens de faire ta première journée de Chasseur.'
  ] },
  { id: 'muscu', icon: 'dumbbell', t: 'La musculation expliquée simplement', p: [
    'Un exercice, c’est un mouvement : par exemple le développé couché (tu pousses une barre allongé sur un banc) ou le squat (tu t’accroupis et tu te relèves avec un poids).',
    'Une répétition (on dit « rép »), c’est faire le mouvement une fois : descendre puis remonter. Une série, c’est un paquet de répétitions à la suite, sans t’arrêter. Exemple : « 3 × 10 » veut dire 3 séries de 10 répétitions.',
    'Entre deux séries, tu te reposes. En général 1 à 3 minutes. Plus l’exercice est lourd, plus tu te reposes longtemps.',
    'Le bon poids : à la fin de ta série, les 1 ou 2 dernières répétitions doivent être difficiles, mais tu dois pouvoir les faire proprement. Si tu dois tordre ton corps pour finir, c’est trop lourd.',
    'Pour progresser : l’appli te donne une fourchette, par exemple 8 à 12 répétitions. Commence avec un poids qui te permet d’en faire 8. Chaque semaine, essaie d’en faire une de plus. Quand tu arrives à 12 sur toutes tes séries, augmente un peu le poids et recommence à 8. C’est la « double progression » : c’est simple et ça marche.',
    'Échauffe-toi toujours : 5 minutes de marche ou de vélo, puis une ou deux séries très légères du premier exercice.',
    'La technique d’abord, le poids ensuite. Si tu ne connais pas un mouvement, regarde une vidéo et commence très léger, même avec une barre vide.',
    'Le muscle grandit pendant le repos, pas pendant la séance. Dormir et manger assez de protéines, c’est aussi de l’entraînement.',
    'Si tu as une douleur dans une articulation (pas une simple fatigue musculaire), arrête l’exercice. Si elle revient, parles-en à un médecin ou un kiné.'
  ] },
  { id: 'donjon', icon: 'swords', t: 'Utiliser le Donjon (tes séances)', p: [
    'En bas du Donjon, « Suivi des charges » garde la charge notée à chaque séance, exercice par exercice : dernière charge, record (★), progression depuis le début et historique des 10 dernières séances.',
    'Le Donjon montre la séance du jour. Chaque exercice a ses séries, ses répétitions et son temps de repos. Écris le poids utilisé : la prochaine fois, l’appli te le rappellera.',
    'Pour changer ton programme : va dans « Réglages → Programme ». Tu peux choisir un programme d’exemple : le programme d’origine (PPL 5 jours), un programme Jambes (3 séances par semaine) ou un programme Fessiers (5 séances par semaine).',
    'Tu peux aussi tout faire toi-même : créer des séances, choisir quelle séance tombe quel jour de la semaine, régler les séries et les répétitions de chaque exercice.',
    'Pour ajouter un exercice facilement, ouvre une séance et appuie sur « Bibliothèque ». Les exercices y sont rangés par muscle : dos, pectoraux, triceps, biceps, épaules, cuisses, fessiers. Il y en a 7 par muscle, choisis parce qu’ils sont simples et efficaces.',
    'Un jour sans séance prévue est un jour de repos : ta quête ce jour-là, c’est seulement la nourriture.'
  ] },
  { id: 'nutri', icon: 'apple', t: 'La nutrition expliquée simplement', p: [
    'En bas de la Nutrition, « Semaine alimentaire » montre ce que tu as mangé chaque jour de la semaine. Tu peux reprendre un aliment ou toute une journée en un geste. Le bilan des macros de la semaine (kcal, protéines, glucides, lipides comparés à 7 fois l’objectif) s’affiche seulement quand les 7 jours sont renseignés.',
    'Les calories (kcal), c’est l’énergie que tu manges. Pour prendre du muscle, on mange un peu plus que ce qu’on dépense. Pour perdre du gras, un peu moins.',
    'Les protéines construisent et réparent les muscles. On en trouve dans la viande, le poisson, les œufs, le fromage blanc, le yaourt grec, les lentilles, le tofu.',
    'Les glucides donnent de l’énergie pour l’entraînement : riz, pâtes, pain, pommes de terre, flocons d’avoine, fruits.',
    'Les lipides (les graisses) sont utiles aussi, en quantité raisonnable : huile d’olive, beurre de cacahuète, avocat, noix, poissons gras.',
    'Pour bien compter, pèse tes aliments avec une petite balance de cuisine, au moins les premières semaines. Après, tu sauras à l’œil.',
    'Les objectifs se règlent dans « Réglages → Nutrition ». Chaque objectif a un type : « Cible » (il faut être proche du chiffre, avec un écart en % que tu choisis, jusqu’à ±250 %), « Minimum » (au moins ce chiffre), « Maximum » (pas plus que ce chiffre). Pour les protéines seulement, il existe « Cible personnalisée » : tu choisis l’écart en dessous et l’écart au-dessus séparément, par exemple −5 % et +80 %.',
    'Si tu as un rapport difficile avec la nourriture, ou un problème de santé, demande conseil à un médecin ou un diététicien avant de suivre des chiffres.'
  ] },
  { id: 'cuisine', icon: 'utensils', t: 'Utiliser l’onglet Nutrition', p: [
    'Appuie sur « Ajouter » et cherche ton aliment. Indique le poids en grammes : l’appli calcule tout.',
    'Si ton aliment n’existe pas, crée-le : écris son nom et ses valeurs pour 100 g (elles sont sur l’étiquette du paquet). Il sera gardé pour la prochaine fois.',
    'Les barres de couleur montrent où tu en es pour chaque objectif. Vert : c’est bon.',
    'En bas, note ton eau (en litres) et ton sommeil (en heures). Ce sont des primes de kinahs, en plus de la quête.'
  ] },
  { id: 'stats', icon: 'chart-column', t: 'Niveaux, kinahs et statistiques', p: [
    'Chaque niveau te donne des points à placer dans tes statistiques, dans l’onglet « Statut » : 3 par niveau au rang E, 6 au rang D, 9 au C, 12 au B, 15 au A et 18 au S. Tes bonus d’XP en % (Intelligence, puces, monture, trophées…) s’appliquent à toute l’XP gagnée : séance et nutrition.',
    'Force : la puissance de tes coups, physiques ou magiques. Plus de Force, plus de dégâts.',
    'Endurance : tes points de vie (10 par point), ta défense (1 par point) et ta ténacité. Plus d’Endurance, tu tiens plus longtemps.',
    'Agilité : tes coups critiques (plus souvent, et plus forts) et ton esquive.',
    'Intelligence : +0,25 % d’XP et de kinahs gagnés par point. Utile pour progresser plus vite.',
    'Tu t’es trompé ? Le petit bouton en forme de flèche qui tourne, à côté de tes statistiques, te rend tous tes points (appuie deux fois pour confirmer). Autant de fois que tu veux, gratuitement.',
    'Les rangs : E au niveau 1, puis D (10), C (20), B (35), A (50) et S (70).',
    'Les montures et les cosmétiques augmentent aussi tes gains d’XP et de kinahs : +10 % pour un Commun jusqu’à +1000 % pour un Éternel. Tu peux porter une monture et un cosmétique de chaque sorte (aura, titre, tenue, accessoire).'
  ] },
  { id: 'royaume', icon: 'castle', t: 'Le Royaume : histoire, combats, objets', p: [
    'Récit : une histoire dont tu es le héros, découpée en tomes. Chaque chapitre s’ouvre à un certain niveau : plus tu t’entraînes, plus tu avances. Tes choix changent la fin. Le bouton « Relire depuis le début » te fait relire tout ce que tu as lu, sans pouvoir changer tes choix. Le bouton « Aa » change la police, la taille du texte et le papier (clair ou sombre). Le petit nombre en % en haut à droite montre ton avancée dans le tome.',
    'Combats : au tour par tour. Tu choisis tes compétences. Les compétences ultimes se chargent pendant le combat : quand la jauge est pleine, elles font d’énormes dégâts. De nouvelles compétences se débloquent avec ton niveau, différentes pour chaque classe.',
    'Expéditions : dépense une clé de Faille pour combattre des monstres et gagner des objets, des matériaux et des kinahs. Tu gagnes des clés en accomplissant tes quêtes.',
    'Lecture immersive : dans le Récit, le bouton « Lecture immersive » ouvre le texte en plein écran. Il s’écrit sous tes yeux, paragraphe après paragraphe. Touche l’écran (ou Espace) pour finir le paragraphe puis passer au suivant ; ← revient en arrière. À la fin du passage, les choix apparaissent dans le même cadre. En haut : avance automatique, vitesse d’écriture, petit son de frappe et cinq ambiances (Système, Nuit, Sable, Parchemin, Céleste). Les combats se jouent dans la vue normale.',
    'Arsenal : équipe tes armes, armures et puces. Améliore-les jusqu’à +4 avec des matériaux. Fusionne les puces pour en faire de meilleures.',
    'Boutique : achète équipement, cosmétiques, montures, instruments et demeures avec tes kinahs.',
    'Maison : recrute les personnages rencontrés dans le récit. Chacun te donne un bonus et t’écrit des lettres quand votre lien grandit.',
    'Codex : le bestiaire, les Monarques, les fins, les archives, les cosmétiques, les trophées, la Bible du lore (les secrets que tu as découverts et les liens entre eux) et le classement de puissance de tous les personnages, toi compris.',
    'Conseil : discute avec Pernos (ton coach de sport et de nutrition), Daminu (il connaît toute l’histoire et toutes les règles du jeu) et les membres de ta Maison. Il faut une clé personnelle : suis les 4 étapes dans « Réglages → Discussion IA ».'
  ] },
  { id: 'stuff', icon: 'gem', t: 'Optimisation de stuff', p: [
    'La règle d’or : sertis tes runes sur les armures, jamais sur l’arme. Le casque, le plastron, les jambières, les bottes, le bijou et la ceinture sont les mêmes pour toutes les classes ; l’arme, elle, change quand tu changes de classe. Une rune sertie ne se retire plus : sur une arme, elle est perdue le jour où tu prends une autre classe. En +4, les 6 pièces d’armure t’offrent 12 emplacements, assez pour tout ce qui compte.',
    'Pourquoi la puissance peut s’effondrer en changeant de classe : trois choses se multiplient. Perdre la rune de Ricochet (restée sur l’ancienne arme) divise la puissance par environ 2,5 : sans elle, il faut abattre les ennemis un par un. Passer d’une arme De toute éternité (exécution sous 20 %) à une arme Éternelle (exécution sous 10 %) peut doubler le nombre de coups pour abattre un ennemi. Et la classe elle-même change un peu la vitesse (Sorcier → Rôdeur : environ −10 %, c’est l’ordre normal des classes). Exemple réel : 1 / (2,5 × 2 × 1,1) ≈ 0,18, soit −82 %.',
    'Rune 1 — Ricochet (plafond 100 %) : 1 De toute éternité, ou 2 Éternelles. Chaque attaque touche tous les ennemis à 7 m. C’est la plus importante.',
    'Rune 2 — Fracture (plafond 150 %) : 1 De toute éternité + 1 Éternelle, ou 3 Éternelles. La part de PV retirée devient critique ; au plafond de 50 % de critique, c’est énorme. Au-delà de 150 %, inutile.',
    'Rune 3 — Égide (plafond 60 %) : 2 De toute éternité, ou 3 Éternelles. Un bouclier tiré de tes dégâts, jusqu’à la moitié de tes PV. Elle ne change pas le chiffre de puissance, mais c’est ta survie contre les Éternels.',
    'Rune 4 — Céleste : 1 suffit (De toute éternité de préférence). Sans elle, impossible de combattre en vol. Avec elle : les ennemis de corps à corps ne te touchent plus en vol, et +60 % de dégâts dans les airs (De toute éternité). Les suivantes ajoutent encore des dégâts en vol, sans plafond.',
    'Rune 5 — Lacération : 1, seulement pour une classe de corps à corps (Assassin, Gladiateur…) : tes coups partent aussi jusqu’à 20 m. Inutile pour le Rôdeur et le Sorcier, déjà à distance.',
    'En dernier — Écho : une technique gagne sa valeur avec le temps écoulé depuis son dernier lancer ; la relancer plus vite n’ajoute presque plus de dégâts (seulement plus de contrôles et de soins).',
    'Plan type sur 12 emplacements. Avec des runes De toute éternité : 1 Ricochet, 2 Fracture, 2 Égide, 1 Céleste = 6 ; 6 emplacements libres. Avec des Éternelles seulement : 2 Ricochet, 3 Fracture, 3 Égide, 1 Céleste = 9 ; 3 libres. Les emplacements libres : d’autres Céleste si tu combats souvent en vol, sinon garde-les pour de meilleures runes.',
    'L’arme : la plus rare possible. La rareté de l’arme fixe le seuil d’exécution (Légendaire 3 %, Mythique 5 %, Éternel 10 %, De toute éternité 20 %), et chaque pièce De toute éternité ajoute +1 000 % à toutes les statistiques (Éternelle +100 %). Les armes De toute éternité ne se vendent pas : coffres à 40 clés et Éternels du monde ouvert.',
    'Cosmétiques, skin d’arme et monture : chacun ajoute un % à toutes les statistiques selon sa rareté (De toute éternité +1 000 %). Le skin d’arme ne compte que pour le type d’arme en main.',
    'Le plus simple : Arsenal → Optimisation automatique → « Puissance de combat ». Tout s’équipe seul (points, pièces, puces, runes sur les armures dans l’ordre ci-dessus, cosmétiques, skin, monture) et ce qui manque est proposé à l’achat. Si ta puissance bouge, la carte Puissance de combat (Statut) explique pourquoi, sous « Pourquoi ma puissance a changé ».',
    'Budget d’achat : choisis la monnaie (kinahs seulement, ou kinahs + gloire de l’arène) et la rareté visée, de Commun à Éternel. Le jeu calcule alors le meilleur équipement à cette rareté : pièces améliorées à +4 (matériaux compris), puces, runes, cosmétiques et monture. Avec la gloire, les runes et le skin d’arme sont De toute éternité. Débutant : vise Rare ou Épique, puis monte d’un cran quand le panier est fini.',
    'Tout acheter : le jeu affiche le total en kinahs et en gloire et demande ta confirmation, puis achète, améliore, sertit et équipe tout. S’il te manque de l’argent : « Enregistrer comme panier ». Le panier reste dans l’Arsenal ; achète ligne par ligne quand tu as les kinahs, chaque achat s’équipe aussitôt. Les runes attendent que les pièces qui les porteront soient achetées, pour ne jamais être serties sur une pièce que tu vas remplacer. « Recalculer » met le panier à jour si tu as trouvé des objets entre-temps.'
  ] },
  { id: 'pause', icon: 'pause', t: 'Pause, repos et pénalités', p: [
    'Le repos fait partie de l’entraînement. Dans « Réglages → Pause », tu peux mettre le jeu en pause pour aujourd’hui, pour le week-end, pour 7 ou 14 jours, ou pour les dates que tu veux.',
    'Pendant une pause, pas de pénalité et ta série de jours n’est pas cassée. Si tu fais quand même du sport ou si tu notes tes repas, tu gagnes quand même ton XP et tes kinahs.',
    'Le mode souple (« Réglages → Mode souple », facultatif) évite de tout mettre en pause chaque week-end. Les jours sans séance exigée (seulement le week-end, ou tous les jours de repos, au choix), tu manges plus librement : si tu notes tes repas et tiens tes macros, tu gagnes les récompenses habituelles ; sinon tu ne gagnes rien, mais tu ne perds rien et ta série tient.'
  ] },
  { id: 'habitants', icon: 'heart-handshake', t: 'Habitants, profil intérieur et liens', p: [
    'Le monde ouvert compte environ 400 habitants : en ville, dans la campagne, le désert, les montagnes, la forêt et l’Ancienne Cité. Chacun a un métier utile au monde et sa propre histoire. « Faire connaissance » la raconte peu à peu. Les secrets ne se confient qu’aux amis (lien de 40 et plus).',
    'Ils vous posent des questions sur la vie, la mort, le sens, vos ambitions et vos projets (deux par jour et par personne). Chaque réponse fait évoluer votre profil intérieur sur quatre axes : tourné vers les autres ou vers soi, concret ou intuitif, raison ou cœur, organisé ou ouvert. Cela donne 16 profils, à retrouver dans Statut. C’est un miroir pour réfléchir, pas un diagnostic.',
    'On se rapproche de ceux qui partagent nos valeurs. Le lien monte aussi en parlant chaque jour et en offrant des cadeaux. Six marchands de la ville en vendent : fleuriste, joaillier, confiseur, papetier, marchand de jouets, parfumeur. Chaque habitant a ses goûts.',
    'Avec un adulte dont le lien atteint 70, « Déclarer mes sentiments » peut faire naître une histoire d’amour (il faut un lien d’au moins 75 pour un oui). Avec une bague de fiançailles et un lien de 90, vous pouvez demander sa main. Votre époux ou épouse vient alors vivre dans votre demeure.',
    '« Lui prendre la main » : la personne vous suit, en ville comme dans la demeure. Dans la chambre du maître, la nuit ensemble se passe en fondu au noir. Elle rend le foyer plus heureux, et un enfant peut s’annoncer : il naît 9 jours plus tard et vit dans la demeure.',
    'L’humeur du foyer baisse les jours où vous ne passez pas voir votre époux ou épouse. Elle remonte avec les visites, les cadeaux, les réponses sincères et le temps passé ensemble.'
  ] },
  { id: 'xparene', icon: 'scale', t: 'XP de la séance et de l’arène', p: [
    'La séance complète et la nutrition complète rapportent chacune au moins autant d’XP que ta meilleure journée d’arène. Exemple : si ton record est de 4 000 XP en une journée d’arène, la séance rapporte 4 000 XP et la nutrition 4 000 XP, soit 8 000 XP pour les deux. Une séance ou une nutrition partielle rapporte la même proportion.',
    'Ce record ne redescend pas les jours où tu ne vas pas à l’arène. Il ne s’applique qu’à partir du jour où tu l’as atteint. Les kinahs de la séance et de la nutrition gardent leur barème habituel.'
  ] },
  { id: 'save', icon: 'hard-drive', t: 'Sauvegarde et installation', p: [
    'Tout est enregistré dans ton navigateur, sur ton appareil. Pense à exporter une sauvegarde de temps en temps dans « Réglages → Sauvegarde » (bouton « Fichier .json »), surtout avant de changer de téléphone.',
    'Tu peux installer l’appli comme une vraie application : sur Android ou un ordinateur, avec le bouton « Installer » ; sur iPhone, avec Safari → Partager → « Sur l’écran d’accueil ».'
  ] },
  { id: 'perso', icon: 'user-pen', t: 'Ton personnage et le monde ouvert', p: [
    'Ton personnage : dans l’onglet « Statut », le cadre « Personnage » montre ton héros en 3D. Fais-le tourner avec le doigt. Il porte ce que tu as équipé dans l’Arsenal (arme, bouclier, casque, plastron, jambières) par-dessus la tenue choisie dans Codex → Cosmétiques, avec ton aura. Le bouton « Armure visible / Tenue seule » cache ou montre l’armure ; « Dégainer » lui met l’arme en main. Le dessin est de style manga : aplats de couleur, trait de contour, grands yeux, mèches.',
    'Création : « Créer » ou « Modifier » ouvre l’atelier. Tu choisis homme ou femme, puis tu règles la taille (de tout petit à immense), la carrure, les épaules, le torse, le tour de taille, les hanches, l’épaisseur des membres, la longueur des bras et des jambes, la tête, le visage (yeux, sourcils, nez, bouche, mâchoire), la coiffure, la barbe et les couleurs (peau, cheveux, yeux, lèvres). « Au hasard » propose un personnage tout fait. C’est gratuit et modifiable à tout moment. Les tenues ont une coupe différente pour l’homme et pour la femme.',
    'Images : chaque objet a son illustration, dans l’Arsenal, la Boutique et le Codex : armes et armures (le dessin change avec la rareté), montures, instruments, demeures, tenues, accessoires, auras, puces et matériaux.',
    'Monde ouvert : le bouton « Entrer dans le monde ouvert » (onglet Statut) t’emmène à Vespérane, la ville du récit, en 3D. Choisis « Mode mobile » (manette tactile à gauche, caméra au doigt, à droite le gros bouton d’attaque entouré de tes techniques, puis Arme, Monture, Courir, Saut ; le jeu se joue à la verticale ou à l’horizontale : tourne le téléphone, ou Menu → « Plein écran horizontal ») ou « Mode PC » (ZQSD ou flèches, Maj pour courir, Espace pour sauter, E pour agir, M pour la monture, C pour changer de monture, souris pour la caméra, molette pour le zoom ; clic pour attaquer, touches 1 à 5 pour les techniques, R pour dégainer ou rengainer).',
    'Combattre dans le monde : ton arme se dégaine partout, à tout moment. Le bouton d’attaque lance l’attaque de base de ta classe ; les cinq autres boutons sont ses techniques, propres au monde ouvert (elles s’ouvrent aux niveaux 1, 3, 6, 10 et 20). Les trois premières ont un temps de recharge ; les deux dernières sont des ultimes, qui demandent une jauge pleine. La jauge monte toute seule pendant le combat, au même rythme pour toutes les classes (environ 30 secondes). Aucune attaque ne part toute seule : il faut appuyer sur le bouton (ou le garder enfoncé), au corps à corps comme à distance. En revanche tu n’as jamais besoin de viser : le coup ou le tir se verrouille tout seul sur l’ennemi le plus proche, quelle que soit l’orientation de la caméra. Des mannequins d’entraînement t’attendent rue du Four et devant l’arène ; des ombres errantes rôdent hors de la ville (elles ne rapportent rien ; seules les vagues de l’arène paient).',
    'Vespérane agrandie : la carte fait maintenant 3,5 km de côté (environ 15 fois la surface d’avant). Autour de la ville : au nord les Monts du Silence (neige, lac gelé, hameau du Col, monastère), à l’est le Désert d’Ocre (dunes, arches, temple, oasis, caravane), au sud la Forêt de Brune-Lande (cercle de pierres, cabanes), à l’ouest l’Ancienne Cité, une ville abandonnée que la nature a reprise. Dans la ville : une seconde couronne de maisons, le Parc des Lanternes (grande roue, carrousel et chaises volantes : on peut monter dedans) et la Grande Bibliothèque. Menu → déplacements rapides vers chaque lieu.',
    'Visiter : chaque maison se visite (E devant la porte). Rez-de-chaussée avec salon, cuisine et bibliothèque ; escalier vers l’étage (chambres, salle d’eau) ; trappe de la cuisine vers la cave (vins, tonneaux). Certaines caves ouvrent sur les galeries souterraines : on y descend, on suit les couloirs, et une échelle fait remonter dans la cave d’une autre maison, ou dans la rue par une bouche d’égout. La cathédrale Sainte-Claire et la Grande Bibliothèque se visitent aussi. Sur les toits, on marche partout, pas seulement au bord.',
    'Habitants : une centaine de personnes vivent à Vespérane (rues, parc, hameaux) ; des enfants jouent au ballon ou au chat. Approche-toi et appuie sur E : chacun parle de son métier, de sa vie et de ce qu’il pense de l’existence.',
    'Exploration : 130 archives à trouver (30 affiches sur les murs, 30 lettres, 30 livres, 20 photos, 20 vins rares), 40 clés et 60 coffres (10 de chaque : à 1, 5, 10, 20, 30 et 40 clés). Les clés ne s’usent pas : un coffre s’ouvre dès que tu en possèdes assez. Les coffres à 40 clés contiennent un objet De toute éternité, une rune Éternelle et 2 millions de kinahs. Un ✦ après le nom d’une maison signale qu’il y reste quelque chose. Tout ce que tu ramasses se relit dans Codex → Exploration.',
    'Carte : bouton « Carte » (touche K), ou touche la mini-carte. Trois vues : le monde entier, la ville, ou les environs. On y voit les régions, les quartiers, tes demeures, l’arène, les lieux à visiter, les bouches d’égout, les manèges et les quinze Éternels (gris et cochés une fois vaincus).',
    'Demeures : de vraies maisons, sur le plan des grandes demeures françaises. Un vestibule à l’entrée, un long couloir sur toute la largeur, les pièces de part et d’autre, un immense salon côté jardin avec le piano à queue et vos instruments, une bibliothèque, une salle à manger ; à l’étage, les chambres le long du couloir ; en bas, les caves. Les escaliers se montent et se descendent en marchant, sans bouton. Le jardin s’ouvre derrière le grand salon. Plus la demeure est rare, plus tout est grand : Raffiné (maison de maître), Rare (abbaye en ruine et cloître des fleurs de lune), Épique (hôtel particulier et jardin à la française, façon Vaux-le-Vicomte), Légendaire (château, trois niveaux), Mythique (forteresse), Éternel (palais, façon Versailles, au-dessus des nuages).',
    'Le refuge : chaque demeure cache une pièce secrète, derrière la bibliothèque du rez-de-chaussée : contre son mur ouest, un livre rouge dépasse des autres, approchez-vous et « Tirez le livre rouge ». Dans la plus petite demeure, c’est l’armoire contre le mur ouest de la chambre du maître, à l’étage. Le registre posé dans le vestibule le rappelle. On en ressort par « Remonter par le passage secret », près de la cheminée. Un feu, des fauteuils, un ciel d’étoiles au plafond, une fontaine. « Se ressourcer » : votre personnage s’assoit près du feu, une harpe joue, et un guide de respiration en cohérence cardiaque (5 secondes pour inspirer, 5 pour expirer) s’affiche. Bougez pour revenir.',
    'Téléportation : Menu → les boutons marqués ✦ mènent directement à l’intérieur de chacune de vos demeures. Depuis la cave de chaque demeure, une grille descend dans les galeries souterraines, et une échelle des galeries remonte dans chacune de vos demeures.',
    'Instruments : dans la salle de musique de vos demeures, approchez-vous d’un instrument que vous possédez et choisissez un morceau (quatre par instrument, œuvres du domaine public), joué en solo avec le son enregistré de l’instrument (échantillons Musyng Kite, licence CC BY-SA 3.0). La première fois, l’instrument met quelques secondes à se charger. La musique d’accueil des demeures se règle dans la Salle de musique (♪) : morceau intégré, aucune, ou l’un de vos fichiers.',
    'Le marchand louche : quelque part dans les galeries souterraines, derrière un rideau rouge. Quatre objets par jour, introuvables ailleurs : runes De toute éternité contre des kinahs, une armure De toute éternité par semaine, l’orgue de Barbarie, une aura, un titre, une boussole qui montre les trésors sur la carte, un passe-partout.',
    'Arène : une fois le défi lancé, l’arène est verrouillée : ni l’esquive ni le combat automatique ne peuvent vous en faire sortir. Pour partir : Menu → « Abandonner le défi de l’arène », ou une téléportation.',
    'Plan des intérieurs : dans une maison, une demeure, la cathédrale, la bibliothèque ou les galeries, la mini-carte devient le plan de l’étage. La carte (K, ou toucher la mini-carte) montre le plan complet avec le nom des pièces, les sorties, les escaliers, les instruments, la salle du trésor, et un bouton par étage.',
    'Jouer d’un instrument : choisissez un morceau, votre personnage va s’asseoir, prend l’instrument et joue (la caméra se place devant lui). Bougez ou sautez pour vous lever : la musique s’arrête.',
    'Pseudo et titre : Statut → Personnage → Affichage, pour montrer ou cacher votre pseudo et votre titre au-dessus de votre personnage.',
    'Commandes : sur PC, Menu → Touches du clavier pour changer chaque touche. Sur mobile, Menu → Disposition et taille des boutons : glissez un bouton pour le déplacer, réglez sa taille ou celle de tous les boutons.',
    'Allures : trois façons de se déplacer, Marche, Course et Sprint. Sur téléphone, le bouton d’allure passe de l’une à l’autre ; sur PC, Maj (maintenue) fait sprinter et Ctrl bascule entre marche et course. L’allure compte aussi à cheval (marche lente, course, sprint +20 %) et en vol. Montures : plus elles sont rares, plus elles vont vite (× la course : Commun 1,8, Peu commun 2,2, Rare 2,8, Épique 3,6, Légendaire 5, Mythique 7,5, Éternel 12, De toute éternité 20). Bottes (emplacement « Bottes ») : vitesse à pied de +4 % (Commun) à +210 % (De toute éternité), en vol de +10 % à +500 %, +10 % de ces valeurs par amélioration.',
    'Les Éternels : quinze gardiens dispersés dans les régions, de la puissance de la vague 200 (le Veilleur de Brune-Lande) à celle de la vague 10 000 (le Roi des Ruines), et l’Éternel du Sommet, tout en haut des Monts du Silence, puissance 100 000. Ils résistent aux dégâts en % des PV et à l’exécution, ne se laissent pas enchaîner par les contrôles, ne s’esquivent pas en combat automatique, lancent des ondes au sol (sors du cercle), appellent des ombres aux deux tiers et au tiers de leur vie, et entrent en fureur sous 35 %. En combat automatique, ton personnage esquive absolument tout (même l’Éternel du Sommet) et cible l’Éternel en priorité, mais la victoire ne compte pas « sans filet ». Vaincu sans jamais activer le combat automatique pendant l’affrontement, chaque Éternel donne en plus une archive inédite (Codex → Exploration → Éternels), un trophée, une rune et de la gloire supplémentaires, et une récompense unique : un titre (I à V), une aura (VI à X), des ailes (XI à XV), la monture Cerf aux mille bois (V), et pour l’Éternel du Sommet un titre, une aura, des ailes et la monture Le Silence du Sommet. Les seize sans filet : titre « Les Seize sans filet ». Si tu t’enfuis trop loin, ils se soignent. Première victoire : kinahs, gloire, objets Mythiques à De toute éternité et runes ; ensuite 10 % une fois par jour. Ils reviennent 5 minutes après leur chute.',
    'Puissance de combat (Statut, classement du Codex, barre de l’ennemi) : une seule échelle pour tout l’univers, la vague d’arène la plus haute que l’on tient. Elle ne mesure que ce qui décide d’un combat : les dégâts par seconde (attaques par seconde, part des PV de la cible retirée à chaque attaque, exécution), les coups critiques, la vitesse d’attaque et la résistance (PV, ténacité, esquive). La carte du Statut affiche aussi le DPS : les dégâts bruts par seconde (Attaque × critique moyen × attaques par seconde) et la part des PV d’une cible retirée chaque seconde. Aux vagues hautes, les PV ennemis sont si grands que seule cette part compte : la Force n’y change presque plus rien, l’Agilité plafonne vite (critique 50 %, esquive 30 %), et l’Endurance fait la ténacité (armure × (0,9 + 1,5 × Endurance / (Endurance + 20 × niveau + 200))). Pour monter sa puissance : optimiseur → « Puissance de combat ».',
    'Techniques et ultimes à haut niveau : une ultime ajoute à chaque cible touchée la part de PV que retireraient 7 secondes d’attaques de base (lancée à son rythme normal ; davantage si on l’a gardée, moins si on l’enchaîne). Les techniques de dégâts valent ensemble le même poids pour toutes les classes : chacune vaut 0,62 × sa recharge ÷ le nombre de techniques de dégâts de la classe (2,8 s d’attaques de base pour une recharge de 9 s dans une classe à deux techniques de dégâts). Le temps d’incantation s’ajoute : un sort long ne fait jamais perdre de dégâts. La valeur s’accumule depuis le dernier lancer (jusqu’à 2 minutes) : une classe qui ne peut pas tout lancer dès que c’est prêt libère des coups plus lourds. Résultat, vérifié par simulation de 0 à 90 % de réduction de recharge : l’ordre des classes (Assassin, Gladiateur, Sorcier, Pistolero, Rôdeur, Spiritualiste, Barde et Peintre, puis les autres) tient pour l’attaque de base, l’ultime et le total, à tous les niveaux. Le combat automatique ne lance plus Sommeil ni Métamorphose sur une cible seule.',
    'Sorcier : temps d’incantation longs, à la manière d’Aion, et des sorts d’autant plus lourds. Flèche de feu (attaque de base) 2 s, Sommeil 2 s, Chaîne de glace 2 s, Métamorphose 1,5 s, Feu de l’enfer (ultime) 4 s, Néant 3 s. Pendant l’incantation on avance au ralenti ; la vitesse d’incantation (ceinture) les raccourcit. Il reste la 3e classe en dégâts.',
    'Optimisation automatique (Arsenal) : tout s’équipe avec ce que vous possédez — points, arme, armures, bottes, bijou, ceinture, puces, runes (serties sur les armures seulement, dans l’ordre de « Optimisation de stuff » : Ricochet, Fracture, Égide, une Céleste, une Lacération pour le corps à corps ; jamais une rune de moins de Mythique), cosmétiques (le plus rare de chaque catégorie : chacun ajoute un % à toutes les statistiques), skins d’armes et monture. Ce qui manque au plan idéal (pièces, puces, runes, cosmétiques, skin, monture) est proposé à l’achat et s’équipe tout seul. Changer de classe relance l’optimisation. La carte Puissance de combat montre, sous « Pourquoi ma puissance a changé », chaque variation : ce qui a changé (pièce, rune, points, classe, cosmétique, monture, niveau) et l’effet sur les attaques par seconde, la part des PV, le critique, l’exécution, la ténacité et l’esquive.',
    'Son : le monde ouvert a désormais un moteur audio, sans aucun fichier à télécharger (tous les sons sont synthétisés). Coups d’épée et d’acier, tirs, arcs, explosions, sorts, carillons et soins, chaînes, harpes et tambours, pistons, vapeur, lasers, missiles et moteur du Mecha, alertes, fin de vague. Bouton « Son » (touche N) pour couper ou rallumer ; le choix est gardé.',
    'Chaque classe a sa signature visuelle, inspirée d’Aion : tourbillons d’acier, fissures et rage rouge du gladiateur ; sceaux dorés, chaînes, ailes et barrières du templier ; toxines bleues et pourpres et rémanences de l’assassin ; flèches de feu, de givre et de foudre et runes de pièges du rôdeur ; cercles runiques et explosions élémentaires du sorcier ; esprits immenses, fumées et mains fantomatiques du spiritualiste ; vagues harmoniques et bannières de l’aède ; rayons du ciel, pétales et dômes du clerc ; pigments, cadres et calligraphie du peintre ; traînées d’éther et bras chauffés au rouge du pistolero ; vapeur, missiles, lasers et boucliers hexagonaux de l’éthertech ; ondes arc-en-ciel, clés de sol et partitions du barde.',
    'Options de combat (boutons Auto, Verrou et Vol en haut de l’écran ; au clavier G, T et B) : « Verrou » fixe la caméra sur l’ennemi le plus proche (un anneau doré le marque) et tes attaques le visent en priorité ; appuie de nouveau dans la seconde et demie pour passer à l’ennemi suivant. « Auto » fait combattre ton personnage tout seul : il se place, enchaîne ses meilleures techniques et ses ultimes, et esquive chaque coup ; en combat automatique, tu ne prends aucun dégât. Les deux réglages sont gardés d’une visite à l’autre.',
    'Escalader : à pied comme à cheval (tu mets pied à terre tout seul), avance contre n’importe quel mur (maison, église, muret) et ton personnage grimpe le long de la façade, plus vite avec Sprint, puis se hisse sur le toit. Tu peux marcher sur les toits et en sauter. Saut pendant l’escalade : tu te détaches du mur. Les pentes du terrain se montent sans rien faire.',
    'Voler : bouton « Vol » (ou B) depuis n’importe où dehors, autant que tu veux et aussi haut que tu veux (jusqu’à 1 500 m). Maintiens Monter pour prendre de la hauteur, Descendre pour redescendre (au clavier : Espace et C) ; avec Sprint, tu montes et tu files deux fois plus vite. Si tu voles contre un mur, tu montes le long de la façade jusqu’au toit ; au-dessus d’un toit ou d’un clocher, tu planes sans te poser. Plus tu montes, plus la vue porte loin. En vol, on ne combat pas et les ombres ne t’atteignent pas ; redescends jusqu’au sol pour te poser. Les ailes équipées se déploient et battent en vol ; au sol, elles restent repliées dans ton dos.',
    'Esquiver : quand un ennemi arme son coup, un « ! » apparaît au-dessus de sa tête, son corps rougeoie, un cercle rouge grandit au sol et ton bouton Esquive s’allume en rouge. Le « ! » est jaune au début, puis rouge juste avant l’impact : c’est le moment d’esquiver. L’esquive est illimitée et te rend intouchable un court instant.',
    'L’arène des Chasseurs : à l’ouest de la ville (Menu → « Aller à l’arène »). Va au centre et lance le défi : les ombres arrivent par vagues, de plus en plus fortes. Six vagues sur dix sont des duels contre un Daeva d’ombre d’une des douze classes, comme en JcJ : le Templier bloque de face et assomme au bouclier, le Gladiateur tournoie avec sa guisarme, l’Assassin réapparaît dans ton dos, le Rôdeur tire de loin et pose des pièges, le Sorcier fait tomber des météores (sors du cercle rouge), le Spiritualiste invoque des esprits, le Clerc se soigne, l’Aède étourdit à distance, le Pistolero roule sur le côté, l’Éthertech t’attire à lui, le Barde et le Peintre te ralentissent. Leurs tirs partent vers l’endroit où tu étais : bouge ou esquive. Les autres vagues opposent un groupe : 4 ombres au début, une de plus toutes les 3 vagues, jusqu’à 16. Chaque ombre a sa propre allure : ombres vives qui frappent vite, ombres bondissantes qui sautent sur toi de loin, ombres tireuses, ombres armées, ombres massives. Le champion arrive toutes les 5 vagues, le drake toutes les 10. Une vague donnée est toujours composée de la même façon. Tu choisis la vague de départ (de 1 jusqu’à ton record + 1) et tu peux cocher « Rejouer cette vague en boucle ». Chaque vague paie plein tarif une fois par jour, puis 10 % si tu la refais le même jour : vague 1, 5 XP et 12 kinahs ; vague 5 (champion), environ 120 XP et 290 kinahs ; vague 10 (drake), environ 500 XP et 1 200 kinahs ; vague 20, environ 1 230 XP et 2 950 kinahs, plus tes bonus en %. Le panneau t’indique si la vague a déjà été gagnée aujourd’hui.',
    'Royaume → Arène : tout ce que l’arène apporte en plus de l’XP et des kinahs. Ligues selon ton record (Fer, Bronze à la vague 10, Argent 20, Or 35, Platine 50, Diamant 75, Maître 100, Grand Maître 150, Légende 250, Mythe 400, Éternité 600, puis Abîme I à 850 et un nouvel Abîme toutes les 250 vagues, sans fin), chacune avec son titre.',
    'Panthéon : chaque champion (toutes les 5 vagues) porte le nom d’un Chasseur tombé dans la Faille sous le sable. Le vaincre lui rend son nom et sa fiche. Chroniques : 65 archives, classées en trois fils — l’histoire de l’Arène, des passages profonds de l’Écriture (Louis Segond 1910) et ce qu’il faut savoir du monde (rangs, Failles, classes, quartiers de Vespérane, le Système) — sans rien dévoiler des tomes. La plupart s’ouvrent avec ton record (de la vague 1 à 1000), huit par d’autres exploits (noms rendus, vagues sans une égratignure, rivaux, saisons, défis, autels). Au-delà de la vague 1000, un Écho de l’Abîme toutes les 250 vagues.',
    'Gloire : gagnée à chaque vague (plus pour les vagues hautes, ×3 pour un champion, ×5 pour un drake, ×1,5 sans une égratignure, moitié si la vague est déjà jouée aujourd’hui), avec les trois défis de l’Arbitre du jour, le rival du jour et la fin de chaque saison. Elle se dépense dans les Autels : +2 % à toutes les statistiques, +3 % d’XP et de kinahs, ou +3 % d’Endurance par niveau, sans niveau maximal.',
    'Classement des Chasseurs : un million de Chasseurs du Système (simulés, ce ne sont pas d’autres joueurs). Au départ, le n° 1 est à la vague 2500, le 100e à 157, le 10 000e à 10, et tous progressent chaque jour. Saison chaque semaine, du lundi au dimanche : ta meilleure vague de la semaine est classée, et la place finale rapporte de la gloire (6 000 pour la 1re place). 32 trophées d’arène donnent des bonus et des titres.',
    'Régénération : dans l’arène, tes PV ne remontent pas tout seuls (sauf 30 % entre deux vagues). La puce « Régénération » (Arsenal → Puces, Boutique, butin) te rend des PV en continu, pour toutes les classes : +2 % toutes les 10 secondes pour une Commune, jusqu’à +25 % pour une Éternelle, et elles s’additionnent. Une puce Commune t’est offerte à ta première entrée dans le monde. En combat au tour par tour, elle rend un quart de sa valeur à chaque action.',
    'Douze classes, douze façons de jouer. Templier : le tank, garde permanente et bouclier qui bloque, il attire l’ennemi à lui (Capture), le jette à terre et brise son armure. Gladiateur : grands coups de zone, l’ennemi tombe sur un coup critique, enchaînement de trois coups, posture de rage. Rôdeur : arc uniquement (plus de double lame), pièges posés au sol (enracinent, ralentissent, font taire), tir de précision toujours critique, camouflage court. Assassin : lames très rapides qui gravent des runes sur la cible (5 au plus) ; Embuscade le place dans le dos de la cible et étourdit tout le groupe autour, puis le même bouton devient Balayage (tout le monde à terre) ; Frappe runique étourdit le groupe trois fois, puis le même bouton devient Explosion de runes (étourdit d’autant plus longtemps qu’il y a de runes) ; frapper de dos donne +25 % de chance de critique et des critiques plus lourds ; longue dissimulation dont le premier coup frappe triple. Sorcier : incantations lentes et lourdes (tu avances au ralenti pendant le sort), Sommeil, Racines de glace, Métamorphose en arbre, Météore. Spiritualiste : dégâts qui durent, quatre esprits géants à tour de rôle (Feu, Terre qui encaisse, Vent, Eau qui te soigne), Peur, Absorption. Clerc : soins instantanés et continus, grande guérison à incanter sans bouger, paralysie, et une résurrection toutes les 90 secondes. Aède : mantra permanent (attaque +10 %, PV qui remontent), bâton au corps à corps, Jugement inéluctable qui étourdit à distance, chant qui augmente tes critiques et ralentit les gestes ennemis. Pistolero : tir en courant, balles à ricochets, Canon magique, tir entravant, saut de recul. Éthertech : il invoque un Mecha et monte dedans ; le Mecha frappe fort et encaisse à sa place pendant 20 secondes, avec grappin et champ d’entrave. Barde : chaque note s’accumule sur la cible et la blesse en continu (5 au plus), l’Accord final les fait éclater, Berceuse endort, Mélodie de vie soigne et remplit la jauge. Peintre : mi-distance, un coup de sangle sur trois qui te fige un instant, Marque de couleur (la cible subit +35 %), Lien gravitationnel qui attire et immobilise, Toile d’absorption.',
    'Niveaux et rangs : la courbe suit Aion Classic. Rang E du niveau 1 à 10, D de 10 à 20, C de 20 à 30, B de 30 à 40, A de 40 à 50, S de 50 à 60, Nation (badge N) de 60 à 65, puis Divin (badge Ω, « Monarque · Rang Divin ») à partir de 65. Chaque niveau demande de plus en plus d’XP (2,75 milliards au total pour le 65), et au-delà la hausse continue jusqu’au niveau 999, qui remplace le numéro par le titre « Au-delà de l’Échelle ». Ta puissance (points de statistiques, multiplicateur) se calcule sur ton XP totale : changer de courbe ne t’a rien retiré, et les points arrivent avec l’XP, même entre deux niveaux.',
    'Prestige : seuls le Donjon et la Nutrition en donnent (jusqu’à 60 points par jour, et autant d’XP de prestige que d’XP de base). Il s’affiche en haut à côté des kinahs, et son niveau dans le Statut. Les pénalités retirent maintenant 40 points et 400 XP de prestige, et plus rien d’autre. Les points se dépensent dans la Boutique du prestige (Royaume → Boutique → Prestige, ou toucher le compteur en haut) : sceaux d’Ysolde qui absorbent une pénalité, titres, aura, ailes, lettres inédites, skin d’arme et armure De toute éternité au choix.',
    'Puissance des classes (dégâts sur 30 secondes contre une cible ; cet ordre vaut à tous les niveaux, car la part en % des PV se compte à la seconde : 2 × la puissance de classe par seconde, plus la vitesse de la ceinture, quelle que soit l’arme) : Assassin 110 %, Gladiateur 109 %, Sorcier 108 %, Pistolero 99 %, Rôdeur 98 %, Spiritualiste 97 %, Barde et Peintre 95 %, toutes les autres classes 90 %. L’Assassin, le Gladiateur et le Sorcier frappent par gros coups soudains capables d’effacer un groupe : l’Assassin avec Embuscade, Balayage, Explosion de runes et sa sortie de Dissimulation (×4) ; le Gladiateur avec Enchaînement (trois coups tournoyants de zone) et Onde entravante ; le Sorcier avec Racines de glace et Météore, au prix d’incantations lentes. Leurs ultimes sont 35 à 40 % plus forts. Le Spiritualiste empoisonne : une grande partie de ses dégâts arrive sur la durée. Pour l’assassin, la meilleure combinaison est la dague en main droite et l’épée en main gauche ; deux dagues ou épée et dague : 95 % de celle-ci ; deux épées : 93 %. Dans les combats du Système (au tour par tour), les dégâts suivent les mêmes pourcentages. Au corps à corps, chaque coup de base qui touche te rend des PV.',
    'Répartir ses points pour le plus de dégâts : seules la Force et l’Agilité comptent. La Force donne l’Attaque (1,1 par point) ; l’Agilité donne le critique (0,18 % par point, plafonné à 50 % au total) et la force des critiques (+0,4 % par point, sans plafond). L’Endurance donne des PV et de la Défense, l’Intelligence des gains d’XP et de kinahs : rien pour les dégâts. La règle : 1) tout en Force au début ; 2) quand la Force dépasse environ 400, monte l’Agilité jusqu’au plafond de critique (environ 195 d’Agilité avec une dague, 220 avec les autres armes, moins avec des puces Critique) ; 3) ensuite, garde la Force au-dessus de l’Agilité d’un écart fixe et monte les deux au même rythme : 820 avec une dague, 770 avec épée, masse ou pistolet, 700 avec espadon, guisarme, bâton, arc ou anneaux, 620 avec orbe, grimoire, répercuteur, harpe ou lame-clé. Le bouton « Répartir pour le plus de dégâts », dans le Statut, fait ce calcul exactement avec ton arme, tes puces, tes cosmétiques et ta monture.',
    'Optimisation automatique (fiche du personnage et Arsenal) : quatre objectifs. Dégâts maximum ; Combat équilibré (le meilleur produit dégâts × résistance : PV, défense, esquive, régénération) ; Polyvalent (dégâts, résistance et gains d’XP et de kinahs à parts égales) ; Progression rapide (XP, kinahs et dégâts, sans résistance, pensé pour le combat automatique). Un toucher redistribue tous tes points, équipe la meilleure arme, les armures, le bijou, la ceinture et les puces que tu possèdes. Si le plan idéal demande des pièces ou des puces Éternelles que tu n’as pas, elles sont listées avec leur prix : un bouton les achète et les équipe aussitôt.',
    'Les armes ont chacune leur caractère, repris d’Aion : vitesse, nombre de coups par attaque, critique de base, force des coups critiques et régularité des dégâts. Dague : très rapide (1,2), 1 coup, critique +10 %, critiques ×2,3, dégâts très réguliers. Épée : rapide (1,4), 2 coups, +5 %, ×2,1. Masse : 1,5, 2 coups, +1 %, ×2,1. Espadon : lent (2,4), 3 coups, +5 %, ×1,85, peut jeter à terre sur critique. Guisarme : très lente (2,8), 4 coups, +5 %, ×1,85, dégâts très variables, longue allonge, jette souvent à terre. Bâton : 2,0, 3 coups, +5 %, ×1,85, peut jeter à terre. Lame-clé : 2,4, 3 coups, +5 %, ×1,5, peut jeter à terre. Anneaux de peinture : 2,0, 2 coups, +5 %, ×1,85, portée 15 m. Arc : 2,4, 2 coups, +5 %, ×1,85, portée 25 m, repousse sur critique. Orbe : 2,2, 1 coup, ×1,5, portée 15 m, dégâts variables. Grimoire : 2,2, 1 coup, ×1,5, portée 25 m, dégâts réguliers. Pistolet : rapide (1,8), 1 coup, ×2,1, portée 15 m. Répercuteur (canon) : très lent (2,8), 1 coup, ×1,5, portée 25 m. Harpe : 2,4, 1 coup, ×1,5, portée 25 m. Chaque coup en plus du premier ajoute 10 % de l’attaque. Avec deux armes, la main gauche frappe aussi, aussi fort que la droite. Dans le monde ouvert, une attaque dure la vitesse de l’arme divisée par 6 (une dague : 0,2 seconde). Plafonds : critique 50 %, vitesse d’attaque +50 %, esquive 30 %, blocage 50 %. La fiche de chaque arme, dans l’Arsenal, rappelle ses chiffres. Dans les combats du Système (au tour par tour), l’arme compte aussi : critique de base, force des critiques, régularité, coups en plus sur l’attaque de base.',
    'Arme en main, ton personnage se tient bras tendus le long du corps, la lame vers le sol.',
    'Cosmétiques : six catégories de 40 (tenues, accessoires, auras, titres, skins d’armes, ailes), dont 28 ou 29 de rareté Légendaire ou plus dans chacune. Chaque cosmétique porté augmente les gains d’XP et de kinahs (+10 % en Commun, jusqu’à +1 000 % en Éternel) et toutes tes statistiques : +2 % en Commun, +4 % Raffiné, +6 % Rare, +9 % Épique, +25 % Légendaire, +50 % Mythique, +100 % Éternel, +1 000 % De toute éternité. Force, Agilité, Endurance et Intelligence montent, donc aussi l’Attaque, les PV, la Défense, le critique et l’esquive. Les skins d’armes habillent tes armes d’un élément (feu, lave, glace, ombre, lumière, eau, foudre, sang, vent, étoiles, prisme…), plus fourni avec la rareté. Les ailes grandissent avec la rareté : moins d’un mètre par aile en Commun, plus de trois mètres en Éternel, une deuxième paire dès le Légendaire, une troisième en Éternel. On les trouve en boutique, en expédition et sur les Monarques ; elles se portent dans Codex → Cosmétiques.',
    'Rareté « De toute éternité » : au-dessus de l’Éternel, elle ne se vend nulle part ; elle se reçoit dans le récit, à la fin de chaque tome (quelle que soit la fin). Tomes I à III : casque, plastron, jambières. Tome IV : une arme de ta classe et la monture « Destrier d’avant le monde ». Tome V : la seconde arme ou le bouclier. Tome VI : un bijou ; tome VII : une ceinture. Tomes VI à XI : tenue, accessoire, aura, titre, skin d’arme et ailes ; le tome VIII donne aussi le « Dragon de l’origine », le tome XI la « Bête de toute éternité ». Chaque tome donne en plus une puce « De toute éternité » (+50 %). Chaque pièce, cosmétique ou monture de cette rareté portée donne +1 000 % à toutes les statistiques. La liste est dans Codex → Cosmétiques.',
    'Équipement de grande rareté : tout ce que tu portes ou montes de rareté Légendaire et plus (arme, armure, bijou, ceinture, cosmétique, monture) augmente toutes tes statistiques : Légendaire +25 %, Mythique +50 %, Éternel +100 %, De toute éternité +1 000 %, cumulés pièce par pièce.',
    'Bijou et ceinture : deux nouveaux emplacements dans l’Arsenal. Le bijou réduit le temps de recharge des techniques et accélère d’autant la jauge des ultimes : de −5 % en Commun à −70 % en Éternel (jauge 3,3 fois plus rapide), −100 % (plus aucune recharge, ultimes prêts presque aussitôt) en De toute éternité. Si tu changes d’équipement dans le monde ouvert, l’effet s’applique en y revenant. La ceinture augmente la vitesse d’attaque, ou la vitesse d’incantation pour le Sorcier, le Spiritualiste, le Clerc et le Barde : de +5 % à +70 % en Éternel, +100 % (deux fois plus vite) en De toute éternité. Les deux s’achètent à l’Armurerie et se trouvent en expédition ; ceux de rareté De toute éternité se gagnent aux tomes VI et VII.',
    'Dégâts en % des PV : chaque attaque ou technique retire en plus un pourcentage des PV actuels de la cible (une fois par cible). Une arme en donne selon sa rareté (Légendaire 1,5 %, Mythique 3 %, Éternel 6 %, De toute éternité 15 %) et selon son amélioration (+1 : 0,75 %, +2 : 1,5 %, +3 : 3 %, +4 : 6 %) ; une arme à deux mains compte double (elle ne laisse pas de place pour une seconde arme) ; une armure (casque, plastron, jambières, bouclier) en donne la moitié. Les pourcentages s’additionnent, jusqu’à 95 % des PV restants de la cible par attaque ; la fiche de chaque objet les indique.',
    'Exécution : toute arme Légendaire ou mieux tue l’ennemi sur le coup dès que ses PV passent sous un seuil — Légendaire 3 %, Mythique 5 %, Éternel 10 %, De toute éternité 20 %. Avec deux armes, c’est la meilleure des deux qui compte. Vaut dans le monde ouvert, l’arène, les expéditions et le récit (pas sur les mannequins).',
    'Ténacité (Arsenal, sous les statistiques) : dans le monde ouvert et l’arène, un coup ennemi ne peut retirer qu’une part de vos PV max, qui grandit doucement avec la vague. Avec une ténacité de 1 (casque, plastron et jambières Éternels), vous encaissez 12 coups normaux à la vague 1000 et 6 à la vague 2500 ; bien davantage aux vagues basses. La ténacité monte avec la rareté et l’amélioration des armures (+4 : +15 %), un bouclier, et la part de l’Endurance dans vos statistiques (tout en Endurance : environ ×2,5). Les coups lourds et les boss frappent un peu plus fort. L’Endurance donne aussi davantage de PV (10 par point) et de défense (1 par point).',
    'Apparence des armes : plus une arme est rare, plus elle est grande et somptueuse. Rare : un éclat lumineux ; Épique : runes et éclats violets ; Légendaire : plus grande, poussière d’or et halo ; Mythique : flammes et braises ; Éternel : gigantesque, couronnée d’une auréole et d’une étoile, baignée de lumière et de flammes lumineuses dorées ; De toute éternité : plus grande encore, flammes de lumière cyan, double auréole et poussière d’étoiles.',
    'Skins par type d’arme (Boutique → Cosmétiques, puis Codex → Cosmétiques) : un skin pour chacun des 14 types d’arme et chacune des 8 raretés (rouille, corail, sylve, jade, givre, abîme, aurore, origine : chacun a sa couleur, différente de celle de la rareté). Porté, il donne à l’arme de ce type l’apparence de sa rareté et son thème, en plus grand et plus orné que l’arme de base : gaine d’énergie, cristaux le long de l’arme, sceau qui tourne autour, gemmes en orbite et, à partir d’Épique, ailes d’énergie ; il se porte type par type. Seul le meilleur des skins des armes en main compte pour les statistiques. Le « De toute éternité » coûte 100 000 gloire de l’arène.',
    'Runes (Boutique → Runes) : six runes, de Commun à De toute éternité, très chères (25 000 à 6 millions de kinahs ; la De toute éternité coûte 150 000 gloire de l’arène). Elles se sertissent dans une arme ou une armure Légendaire et plus (Arsenal → l’objet → Sertir une rune), pour toujours : une rune sertie ne se retire plus. Un objet +4 reçoit deux runes. Les effets de même type s’additionnent.',
    'Fracture : les dégâts en % des PV deviennent critiques avec ton critique, mais d’un bonus fixe (+5 % en Commun, +60 % en Éternel, +100 % en De toute éternité, 150 % au plus avec plusieurs runes), sans tenir compte de tes dégâts critiques. Écho : chaque critique réduit les recharges. Égide : un bouclier égal à une part des dégâts infligés. Ricochet : chaque attaque rebondit sur tous les ennemis autour de la cible (monde ouvert). Lacération : les classes de corps à corps lancent aussi leurs attaques à distance, comme une lame d’éther (monde ouvert). Céleste : on peut combattre en vol, intouchable par les ennemis de corps à corps, avec des dégâts en plus dans les airs (monde ouvert).',
    'Rôdeur : ses coups critiques étourdissent l’ennemi (environ 1 s dans le monde ouvert, un tour au tour par tour).',
    'Montures : 40, de toutes les raretés (loups, chevaux, ours, cerfs, félins, sangliers, salamandre, griffons, wyverne, dragons, licornes, pégase, phénix, motos). La monture montée augmente les gains d’XP et de kinahs et toutes tes statistiques, comme un cosmétique : +2 % en Commun jusqu’à +25 % en Éternel, +100 % pour les trois montures « De toute éternité » du récit. Plus elle est rare, plus elle va vite.',
    'Boutique : toutes les armes et toutes les armures se vendent dans l’Armurerie, du Commun à l’Éternel, sans condition de niveau ; celles de ta classe sont en tête. Toutes les puces se vendent aussi, du Commun (+2 %) à l’Éternel (+25 %). Tous les matériaux d’amélioration s’achètent, Cendre de Monarque comprise, à l’unité ou par lots de 10 (−10 %) et de 100 (−20 %) ; dans l’Arsenal, « Acheter ce qui manque » complète d’un coup ce qu’il faut pour l’amélioration suivante.',
    'Titres : le titre porté s’affiche au-dessus de ton personnage, avec ton nom, dans sa fiche et dans le monde ouvert (il se masque avec « Affichage »).',
    'Points de statistiques : dans le Statut, écris le nombre de points voulu à côté de la statistique, puis touche + (ou Entrée) : tout est attribué d’un coup.',
    'Affichage du personnage : dans sa fiche, bouton « Affichage ». Chaque élément s’affiche ou se masque : tenue, casque, plastron, jambières, bouclier, armes, skin d’arme, ailes, aura, titre. Un élément masqué garde tous ses bonus.',
    'Vitesse et esquive : ton personnage court vite (Sprint pour aller encore plus vite), saute deux fois de suite, même en pleine course (le second saut est un salto arrière), et esquive autant qu’il veut : bouton « Esquive » sur mobile, clic droit ou V sur PC. Pendant l’esquive, les coups te traversent. Les attaques s’enchaînent vite et te projettent vers la cible.',
    'Positions d’attente et déplacement : dans l’atelier du personnage, onglet « Allure » (ou dans le Menu du monde), choisis ta position d’attente parmi seize (neutre, ninja, souverain, digne avec aura, humble, timide, main sur la hanche, détendu, guerrier, pensif, martial, recueilli, nonchalant, vigilant, élégant, impatient) et ta façon de te déplacer (course, ninja penché en avant, lévitation : le personnage vole un peu au-dessus du sol et de l’eau, sans bouger les jambes, avec une petite flamme rouge sous chaque pied).',
    'Parures de rareté : plus un équipement est rare, plus il est somptueux. Épique : éclats violets. Légendaire : poussière et halo d’or. Mythique : flammes. Éternel : lumière céleste, auréole, étoiles, et des ailes de lumière pour le plastron. C’est visible sur le personnage et sur les images des objets.',
    'À faire dans le monde : te promener (les Brèches, Sainte-Claire, la Miséricorde, la Faille de la gare, le quai des Pêcheurs, la colline des Vents, Haute-Brume, la route de Vaumoise, la Mer de verre) ; entrer dans les demeures que tu as achetées (tes instruments et les membres de ta Maison s’y trouvent) ; parler aux personnages rencontrés dans le récit avec qui tu as un lien (plus le lien est fort, plus ils se confient) ; chevaucher tes montures, de plus en plus rapides avec la rareté. À la Faille de la gare, tu peux partir en expédition.',
    'Le monde ouvert demande un appareil assez récent. S’il est lent, choisis le mode mobile, même sur ordinateur.'
  ] },
  { id: 'musique', icon: 'music', t: 'Musique et écran d’accueil', p: [
    'À l’ouverture, l’écran d’accueil d’Elyos System montre le ciel profond et un homme tout petit sous les étoiles. Touche l’écran pour t’éveiller : la musique démarre et la cinématique commence. Pour aller plus vite, touche l’écran une seconde fois : tu arrives tout de suite sur « Entrer dans le Système ».',
    'La Salle de musique (icône ♪ en haut de l’écran, ou « Réglages → Salle de musique ») te laisse choisir ton style : épique fantasy, orchestre symphonique, violon et violoncelle, harpe douce, rétro synthwave, futuriste, électro, instrumental core (rock et métal) ou contemplatif. Sous le lecteur, choisis « Playlist en boucle », « Ce morceau en boucle » ou « Sans boucle », et active « Aléatoire » si tu veux.',
    'Toutes ces musiques sont composées et jouées par des humains (Kevin MacLeod, orchestres et quatuors Musopen, et d’autres musiciens), libres de droits ou dans le domaine public. Aucune n’est générée par IA. Elles sont lues depuis Wikimedia Commons : il faut une connexion internet. Les crédits complets sont en bas de la Salle de musique.',
    'Tu choisis toi-même la musique de l’écran d’accueil : dans la Salle de musique, cadre « Musique de l’écran d’accueil », touche « Changer » et choisis une piste : elle se lance tout de suite. Le petit soleil levant à côté d’un titre fait la même chose. Sur l’écran d’accueil, le bouton « Choisir la musique », sous « Entrer dans le Système », ouvre directement la Salle de musique. Par défaut, c’est « On the Passing of Time » (Kevin MacLeod) qui joue, en boucle, de l’écran titre jusque dans l’appli.',
    'Le cadre « Mes musiques », en haut de la Salle de musique, a un bouton « Ajouter des fichiers » : il te permet d’ajouter tes propres fichiers audio (un titre que tu as acheté, par exemple). Ils restent sur ton appareil, ne sont envoyés nulle part, et peuvent aussi servir de musique d’accueil. Ils ne sont pas inclus dans la sauvegarde exportée.',
    'Par défaut, quitter l’appli la met en veille : la musique s’arrête, et quand tu reviens, l’écran de connexion s’affiche. Si tu préfères que la musique continue quand tu quittes l’appli et qu’elle reprenne là où tu étais, active « Rester active en arrière-plan » dans les Réglages (ou dans les options de la Salle de musique).',
'Tu peux couper la musique, retirer la musique d’ouverture ou désactiver l’écran d’accueil dans les options de la Salle de musique.'
  ] }
];

function viewGuide() {
  return `<section class="flex flex-col gap-3">
    <div class="flex items-center justify-between gap-2">
      <button type="button" class="btn sm" data-a="guide-close">${icon('arrow-left', 'w-3.5 h-3.5')}Retour</button>
    </div>
    <div class="sys umbra"><div class="sys-title u mb-1">${icon('graduation-cap', 'w-4 h-4')}Guide du débutant</div>
      <p class="text-sm">Tu n’as jamais fait de musculation ? Tu ne sais pas ce qu’est une protéine ? Aucun problème. Lis ces fiches dans l’ordre, une par une. Tout est expliqué simplement.</p></div>
    ${GUIDE.map((g, i) => `<details class="sys" ${i === 0 ? 'open' : ''}>
      <summary class="flex items-center justify-between gap-2"><span class="sys-title">${icon(g.icon, 'w-4 h-4')}${i + 1}. ${esc(g.t)}</span><span class="chev muted">${icon('chevron-down')}</span></summary>
      <div class="mt-3 flex flex-col gap-2 text-[15px] leading-relaxed">${g.p.map(x => `<p>${esc(x)}</p>`).join('')}</div>
    </details>`).join('')}
  </section>`;
}
Object.assign(handlers, {
  'guide-open': () => { ui.guide = true; render(); window.scrollTo({ top: 0 }); },
  'guide-close': () => { ui.guide = false; render(); window.scrollTo({ top: 0 }); }
});


/* ==========================================================================
   Démarrage et changement de jour
   ========================================================================== */
let currentDay = dk();
function dayRollover() {
  if (dk() === currentDay) return;
  currentDay = dk();
  _memo = null;
  const fails = evaluateQuests();
  render();
  if (fails.length) showPenalties(fails);
  checkLevel();
}
/* Reprise : si le téléphone ferme l'appli en arrière-plan, on revient là où l'on était
   (onglet, défilement, minuteur de repos, musique) sans repasser par l'écran d'accueil. */
const RESUME_KEY = 'elyos-resume-v1', RESUME_MS = 30 * 60 * 1000;
function saveResume() {
  try {
    localStorage.setItem(RESUME_KEY, JSON.stringify({
      t: Date.now(), y: (document.getElementById('scroll') || {}).scrollTop || 0,
      timer: timer.end > Date.now() ? { end: timer.end, total: timer.total, label: timer.label } : null,
      mus: typeof musSnapshot === 'function' ? musSnapshot() : null,
      splash: !!document.getElementById('elx')
    }));
  } catch (e) { }
}
function readResume() {
  try { const r = JSON.parse(localStorage.getItem(RESUME_KEY) || 'null'); if (r && Date.now() - r.t < RESUME_MS && !r.splash) return r; } catch (e) { }
  return null;
}
if (typeof document !== 'undefined' && document.addEventListener) {
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') saveResume(); });
  /* Réglage « Rester active en arrière-plan » : désactivé par défaut. Quitter l'appli la met alors en veille
     (musique coupée), et y revenir rouvre l'écran de connexion, comme une vraie fermeture. */
  let _hiddenAt = 0;
  document.addEventListener('visibilitychange', () => {
    if (typeof MUS === 'undefined' || MUS.bg || !state.profile) return;
    const picking = typeof musRT !== 'undefined' && musRT.picking && Date.now() - musRT.picking < 120000;
    if (document.visibilityState === 'hidden') {
      if (picking) return; /* sélecteur de fichiers ouvert : ce n'est pas une sortie */
      _hiddenAt = Date.now();
      if (typeof musPlaying === 'function' && musPlaying() && musRT.audio) musRT.audio.pause();
    } else if (_hiddenAt) {
      const away = Date.now() - _hiddenAt; _hiddenAt = 0;
      if (away > 1500 && MUS.splash !== false && typeof splashShow === 'function' && !document.getElementById('elx')) splashShow();
      else if (MUS.on && typeof musResume === 'function' && musRT.cur) musResume();
    }
    if (typeof musRT !== 'undefined' && document.visibilityState === 'visible') musRT.picking = 0;
  });
  window.addEventListener('pagehide', saveResume);
}
function boot() {
  save(); // enregistre une éventuelle migration v1 → v2
  const RES = readResume();
  render();
  if (RES) {
    if (RES.timer && RES.timer.end > Date.now()) { timer.end = RES.timer.end; timer.total = RES.timer.total; timer.label = RES.timer.label; drawTimer(); }
    setTimeout(() => window.scrollTo(0, RES.y || 0), 60);
  }
  /* L'écran de connexion s'affiche à chaque ouverture (l'onglet et le minuteur restent repris derrière) */
  if (typeof splashShow === 'function' && (typeof MUS === 'undefined' || MUS.splash !== false)) splashShow();
  else {
    const e = document.getElementById('elx'); if (e) e.remove();
    if (RES && typeof musRestore === 'function') musRestore(RES.mus);
  }
  const fails = evaluateQuests();
  if (fails.length) { render(); showPenalties(fails); }
  checkLevel();
}
setInterval(() => { updateCountdown(); if (timer.end) drawTimer(); }, 250);
setInterval(dayRollover, 30000);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') dayRollover(); });
boot();
