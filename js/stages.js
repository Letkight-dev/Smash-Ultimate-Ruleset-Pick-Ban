// Super Smash Bros. Ultimate Competitive Stages Data & SVG Layout Generators
export const STAGES = [
  {
    id: 'battlefield',
    names: {
      en: 'Battlefield',
      ja: '戦場',
      fr: 'Champ de bataille'
    },
    shortNames: {
      en: 'BF',
      ja: '戦場',
      fr: 'CDB'
    },
    platformLayout: 'tri-plat',
    description: {
      en: 'Traditional tri-platform layout with flat base',
      ja: '平坦なメインステージと3つのすり抜け足場',
      fr: 'Disposition classique à trois plates-formes et base plane'
    },
    blastzones: { ceiling: 192, side: 240, bottom: -140 },
    themeColor: '#eab308',
    svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-bf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1e1b4b" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="110" fill="url(#bg-bf)" rx="6"/>
      <!-- Main base platform -->
      <polygon points="35,78 165,78 155,95 45,95" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="32" y1="78" x2="168" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Left platform -->
      <line x1="45" y1="58" x2="85" y2="58" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      <!-- Right platform -->
      <line x1="115" y1="58" x2="155" y2="58" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      <!-- Top center platform -->
      <line x1="80" y1="36" x2="120" y2="36" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'small_battlefield',
    names: {
      en: 'Small Battlefield',
      ja: '小戦場',
      fr: 'Petit champ de bataille'
    },
    shortNames: {
      en: 'SBF',
      ja: '小戦場',
      fr: 'PCDB'
    },
    platformLayout: 'dual-plat',
    description: {
      en: 'Two lower platforms, no top platform',
      ja: '2つの低めの足場、上部足場なし',
      fr: 'Deux plates-formes inférieures, sans plate-forme supérieure'
    },
    blastzones: { ceiling: 192, side: 240, bottom: -140 },
    themeColor: '#38bdf8',
    svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-sbf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0369a1" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="110" fill="url(#bg-sbf)" rx="6"/>
      <!-- Main base platform -->
      <polygon points="35,78 165,78 155,95 45,95" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="32" y1="78" x2="168" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Left platform -->
      <line x1="50" y1="56" x2="88" y2="56" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
      <!-- Right platform -->
      <line x1="112" y1="56" x2="150" y2="56" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'final_destination',
    names: {
      en: 'Final Destination',
      ja: '終点',
      fr: 'Destination Finale'
    },
    shortNames: {
      en: 'FD',
      ja: '終点',
      fr: 'DF'
    },
    platformLayout: 'flat',
    description: {
      en: 'Completely flat stage with zero elevated platforms',
      ja: 'すり抜け足場の一切ない完全な平坦ステージ',
      fr: 'Terrain totalement plat, sans aucune plate-forme surélevée'
    },
    blastzones: { ceiling: 180, side: 240, bottom: -140 },
    themeColor: '#ec4899',
    svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-fd" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4c0519" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="110" fill="url(#bg-fd)" rx="6"/>
      <circle cx="100" cy="45" r="18" fill="#f43f5e" fill-opacity="0.25"/>
      <circle cx="100" cy="45" r="9" fill="#fda4af" fill-opacity="0.5"/>
      <!-- Main base platform -->
      <polygon points="30,76 170,76 160,94 40,94" fill="#f43f5e" fill-opacity="0.25" stroke="#f43f5e" stroke-width="1.5"/>
      <line x1="28" y1="76" x2="172" y2="76" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'pokemon_stadium_2',
    names: {
      en: 'Pokémon Stadium 2',
      ja: 'ポケモンスタジアム2',
      fr: 'Stade Pokémon 2'
    },
    shortNames: {
      en: 'PS2',
      ja: 'ポケスタ2',
      fr: 'SP2'
    },
    platformLayout: 'wide-dual-plat',
    description: {
      en: 'Wide main stage with two distant horizontal platforms',
      ja: '幅広のメインステージと左右に離れた2つの低足場',
      fr: 'Large scène principale avec deux plates-formes basses espacées'
    },
    blastzones: { ceiling: 193, side: 250, bottom: -140 },
    themeColor: '#3b82f6',
    svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-ps2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="110" fill="url(#bg-ps2)" rx="6"/>
      <rect x="75" y="24" width="50" height="24" rx="3" fill="#1e293b" stroke="#3b82f6" stroke-width="1"/>
      <circle cx="100" cy="36" r="6" fill="#60a5fa" fill-opacity="0.4"/>
      <!-- Main base platform (wide) -->
      <polygon points="25,78 175,78 165,95 35,95" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.5"/>
      <line x1="22" y1="78" x2="178" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Left platform -->
      <line x1="42" y1="58" x2="80" y2="58" stroke="#93c5fd" stroke-width="2" stroke-linecap="round"/>
      <!-- Right platform -->
      <line x1="120" y1="58" x2="158" y2="58" stroke="#93c5fd" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'smashville',
    names: {
      en: 'Smashville',
      ja: 'すま村',
      fr: 'Smashville'
    },
    shortNames: {
      en: 'SV',
      ja: 'すま村',
      fr: 'SV'
    },
    platformLayout: 'center-plat',
    description: {
      en: 'Compact stage with one central floating platform',
      ja: 'コンパクトなステージと中央の1つの足場',
      fr: 'Scène compacte avec une seule plate-forme flottante au centre'
    },
    blastzones: { ceiling: 190, side: 230, bottom: -140 },
    themeColor: '#22c55e',
    svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-sv" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#14532d" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="110" fill="url(#bg-sv)" rx="6"/>
      <circle cx="150" cy="32" r="5" fill="#f87171"/>
      <line x1="150" y1="37" x2="148" y2="46" stroke="#cbd5e1" stroke-width="0.8"/>
      <!-- Main base platform -->
      <polygon points="45,78 155,78 145,95 55,95" fill="#22c55e" fill-opacity="0.2" stroke="#22c55e" stroke-width="1.5"/>
      <line x1="42" y1="78" x2="158" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Center single platform -->
      <line x1="75" y1="56" x2="125" y2="56" stroke="#86efac" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'town_and_city',
    names: {
      en: 'Town & City',
      ja: '村と街',
      fr: 'Ville & centre-ville'
    },
    shortNames: {
      en: 'T&C',
      ja: '村街',
      fr: 'V&C'
    },
    platformLayout: 'variable-tri-plat',
    description: {
      en: 'Low ceiling with alternating platforms',
      ja: '低めの撃墜天井と交互に出現する足場',
      fr: 'Plafond bas avec plates-formes alternantes'
    },
    blastzones: { ceiling: 185, side: 245, bottom: -140 },
    themeColor: '#a855f7',
    svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-tc" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#581c87" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="110" fill="url(#bg-tc)" rx="6"/>
      <rect x="50" y="32" width="12" height="20" fill="#334155" fill-opacity="0.5"/>
      <rect x="66" y="26" width="14" height="26" fill="#334155" fill-opacity="0.5"/>
      <rect x="125" y="28" width="15" height="24" fill="#334155" fill-opacity="0.5"/>
      <!-- Main base platform -->
      <polygon points="35,78 165,78 152,95 48,95" fill="#a855f7" fill-opacity="0.2" stroke="#a855f7" stroke-width="1.5"/>
      <line x1="32" y1="78" x2="168" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="42" y1="58" x2="76" y2="58" stroke="#d8b4fe" stroke-width="2" stroke-linecap="round"/>
      <line x1="124" y1="58" x2="158" y2="58" stroke="#d8b4fe" stroke-width="2" stroke-linecap="round"/>
      <line x1="84" y1="44" x2="116" y2="44" stroke="#d8b4fe" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'hollow_bastion',
    names: {
      en: 'Hollow Bastion',
      ja: 'ホロウバスティオン',
      fr: 'Forteresse Oubliée'
    },
    shortNames: {
      en: 'HB',
      ja: 'ホロウ',
      fr: 'FO'
    },
    platformLayout: 'center-plat',
    description: {
      en: 'Single static center platform above a solid base',
      ja: '中央に1つの固定足場を持つステージ',
      fr: 'Une plate-forme centrale fixe au-dessus d’une base solide'
    },
    blastzones: { ceiling: 192, side: 240, bottom: -140 },
    themeColor: '#06b6d4',
    svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-hb" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#164e63" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="110" fill="url(#bg-hb)" rx="6"/>
      <polygon points="100,20 108,50 92,50" fill="#083344" fill-opacity="0.7"/>
      <polygon points="80,30 85,50 75,50" fill="#083344" fill-opacity="0.5"/>
      <polygon points="120,30 125,50 115,50" fill="#083344" fill-opacity="0.5"/>
      <!-- Main base platform -->
      <polygon points="40,78 160,78 150,95 50,95" fill="#06b6d4" fill-opacity="0.2" stroke="#06b6d4" stroke-width="1.5"/>
      <line x1="38" y1="78" x2="162" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="76" y1="56" x2="124" y2="56" stroke="#67e8f9" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'kalos_pokemon_league',
    names: {
      en: 'Kalos Pokémon League',
      ja: 'カロス ポケモン リーグ',
      fr: 'Ligue Pokémon de Kalos'
    },
    shortNames: {
      en: 'Kalos',
      ja: 'カロス',
      fr: 'Kalos'
    },
    platformLayout: 'side-plat',
    description: {
      en: 'Two side platforms overhanging outside the main stage',
      ja: '左右の場外にはみ出す2つの足場',
      fr: 'Deux plates-formes latérales surplombant le vide'
    },
    blastzones: { ceiling: 192, side: 255, bottom: -140 },
    themeColor: '#f97316',
    svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-kalos" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7c2d12" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="110" fill="url(#bg-kalos)" rx="6"/>
      <rect x="70" y="35" width="10" height="30" fill="#431407" fill-opacity="0.6"/>
      <rect x="120" y="35" width="10" height="30" fill="#431407" fill-opacity="0.6"/>
      <!-- Main base platform -->
      <polygon points="45,78 155,78 145,95 55,95" fill="#f97316" fill-opacity="0.2" stroke="#f97316" stroke-width="1.5"/>
      <line x1="42" y1="78" x2="158" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="18" y1="58" x2="52" y2="58" stroke="#fdba74" stroke-width="2" stroke-linecap="round"/>
      <line x1="148" y1="58" x2="182" y2="58" stroke="#fdba74" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'yoshis_story',
    names: {
      en: "Yoshi's Story",
      ja: 'ヨッシーストーリー',
      fr: "Yoshi's Story"
    },
    shortNames: {
      en: 'YS',
      ja: 'ヨッシー',
      fr: 'YS'
    },
    platformLayout: 'tri-plat-sloped',
    description: {
      en: 'Tri-platform with steep sloped ledges and low ceiling',
      ja: 'すり鉢状の傾斜した崖と3つの足場',
      fr: 'Trois plates-formes avec rebords inclinés et plafond bas'
    },
    blastzones: { ceiling: 176, side: 232, bottom: -136 },
    themeColor: '#84cc16',
    svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-ys" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#365314" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="110" fill="url(#bg-ys)" rx="6"/>
      <polygon points="35,74 60,82 140,82 165,74 150,96 50,96" fill="#84cc16" fill-opacity="0.2" stroke="#84cc16" stroke-width="1.5"/>
      <polyline points="32,74 60,82 140,82 168,74" fill="none" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="48" y1="58" x2="80" y2="58" stroke="#bef264" stroke-width="2" stroke-linecap="round"/>
      <line x1="120" y1="58" x2="152" y2="58" stroke="#bef264" stroke-width="2" stroke-linecap="round"/>
      <line x1="84" y1="36" x2="116" y2="36" stroke="#bef264" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'lylat_cruise',
    names: {
      en: 'Lylat Cruise',
      ja: 'ライラットクルーズ',
      fr: 'Traversée de Lylat'
    },
    shortNames: {
      en: 'LC',
      ja: 'ライラット',
      fr: 'TL'
    },
    platformLayout: 'tri-plat-slanted',
    description: {
      en: 'Slanted spaceship with 3 platforms',
      ja: '傾斜した宇宙船と3つの足場',
      fr: 'Vaisseau incliné avec 3 plates-formes'
    },
    blastzones: { ceiling: 180, side: 230, bottom: -140 },
    themeColor: '#6366f1',
    svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-lylat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#312e81" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="110" fill="url(#bg-lylat)" rx="6"/>
      <polygon points="32,76 168,76 148,94 52,94" fill="#6366f1" fill-opacity="0.25" stroke="#6366f1" stroke-width="1.5"/>
      <line x1="30" y1="76" x2="170" y2="76" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="44" y1="58" x2="80" y2="58" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round"/>
      <line x1="120" y1="58" x2="156" y2="58" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round"/>
      <line x1="82" y1="42" x2="118" y2="42" stroke="#a5b4fc" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'northern_cave',
    names: {
      en: 'Northern Cave',
      ja: '大空洞',
      fr: 'Caverne boréale'
    },
    shortNames: {
      en: 'NC',
      ja: '大空洞',
      fr: 'CB'
    },
    platformLayout: 'dual-plat-kalos',
    description: {
      en: 'Two asymmetrical platforms on a solid base',
      ja: '左右非対称な2つの足場を持つステージ',
      fr: 'Deux plates-formes asymétriques sur une base solide'
    },
    blastzones: { ceiling: 188, side: 245, bottom: -140 },
    themeColor: '#14b8a6',
    svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-nc" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#134e4a" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="200" height="110" fill="url(#bg-nc)" rx="6"/>
      <polygon points="36,78 164,78 152,95 48,95" fill="#14b8a6" fill-opacity="0.2" stroke="#14b8a6" stroke-width="1.5"/>
      <line x1="33" y1="78" x2="167" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="42" y1="56" x2="82" y2="56" stroke="#5eead4" stroke-width="2" stroke-linecap="round"/>
      <line x1="126" y1="52" x2="162" y2="52" stroke="#5eead4" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  }
];

STAGES.forEach(stage => {
  stage.image = `assets/stages/${stage.id}.png`;
});

export const STAGE_MAP = STAGES.reduce((acc, stage) => {
  acc[stage.id] = stage;
  return acc;
}, {});
