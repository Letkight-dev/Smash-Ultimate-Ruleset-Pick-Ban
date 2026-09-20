// Super Smash Bros. Ultimate Tournament Ruleset & Pick/Ban App - Standalone Bundle
(function () {
  "use strict";

  // --- STAGES DATABASE ---
  const STAGES = [
    {
      id: "battlefield",
      names: {
        en: "Battlefield",
        ja: "戦場",
        fr: "Champ de bataille",
      },
      shortNames: {
        en: "BF",
        ja: "戦場",
        fr: "CDB",
      },
      platformLayout: "tri-plat",
      description: {
        en: "Traditional tri-platform layout with flat base",
        ja: "平坦なメインステージと3つのすり抜け足場",
        fr: "Disposition classique à trois plates-formes et base plane",
      },
      blastzones: { ceiling: 192, side: 240, bottom: -140 },
      themeColor: "#eab308",
      svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg-bf" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#1e1b4b" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
          </linearGradient>
        </defs>
        <rect width="200" height="110" fill="url(#bg-bf)" rx="6"/>
        <polygon points="35,78 165,78 155,95 45,95" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1.5"/>
        <line x1="32" y1="78" x2="168" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="45" y1="58" x2="85" y2="58" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
        <line x1="115" y1="58" x2="155" y2="58" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
        <line x1="80" y1="36" x2="120" y2="36" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
    },
    {
      id: "small_battlefield",
      names: {
        en: "Small Battlefield",
        ja: "小戦場",
        fr: "Petit champ de bataille",
      },
      shortNames: {
        en: "SBF",
        ja: "小戦場",
        fr: "PCDB",
      },
      platformLayout: "dual-plat",
      description: {
        en: "Two lower platforms, no top platform",
        ja: "2つの低めの足場、上部足場なし",
        fr: "Deux plates-formes inférieures, sans plate-forme supérieure",
      },
      blastzones: { ceiling: 192, side: 240, bottom: -140 },
      themeColor: "#38bdf8",
      svg: `<svg viewBox="0 0 200 110" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg-sbf" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0369a1" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
          </linearGradient>
        </defs>
        <rect width="200" height="110" fill="url(#bg-sbf)" rx="6"/>
        <polygon points="35,78 165,78 155,95 45,95" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1.5"/>
        <line x1="32" y1="78" x2="168" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="50" y1="56" x2="88" y2="56" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
        <line x1="112" y1="56" x2="150" y2="56" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
    },
    {
      id: "final_destination",
      names: {
        en: "Final Destination",
        ja: "終点",
        fr: "Destination Finale",
      },
      shortNames: {
        en: "FD",
        ja: "終点",
        fr: "DF",
      },
      platformLayout: "flat",
      description: {
        en: "Completely flat stage with zero elevated platforms",
        ja: "すり抜け足場の一切ない完全な平坦ステージ",
        fr: "Terrain totalement plat, sans aucune plate-forme surélevée",
      },
      blastzones: { ceiling: 180, side: 240, bottom: -140 },
      themeColor: "#ec4899",
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
        <polygon points="30,76 170,76 160,94 40,94" fill="#f43f5e" fill-opacity="0.25" stroke="#f43f5e" stroke-width="1.5"/>
        <line x1="28" y1="76" x2="172" y2="76" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
    },
    {
      id: "pokemon_stadium_2",
      names: {
        en: "Pokémon Stadium 2",
        ja: "ポケモンスタジアム2",
        fr: "Stade Pokémon 2",
      },
      shortNames: {
        en: "PS2",
        ja: "ポケスタ2",
        fr: "SP2",
      },
      platformLayout: "wide-dual-plat",
      description: {
        en: "Wide main stage with two distant horizontal platforms",
        ja: "幅広のメインステージと左右に離れた2つの低足場",
        fr: "Large scène principale avec deux plates-formes basses espacées",
      },
      blastzones: { ceiling: 193, side: 250, bottom: -140 },
      themeColor: "#3b82f6",
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
        <polygon points="25,78 175,78 165,95 35,95" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.5"/>
        <line x1="22" y1="78" x2="178" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="42" y1="58" x2="80" y2="58" stroke="#93c5fd" stroke-width="2" stroke-linecap="round"/>
        <line x1="120" y1="58" x2="158" y2="58" stroke="#93c5fd" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
    },
    {
      id: "smashville",
      names: {
        en: "Smashville",
        ja: "すま村",
        fr: "Smashville",
      },
      shortNames: {
        en: "SV",
        ja: "すま村",
        fr: "SV",
      },
      platformLayout: "center-plat",
      description: {
        en: "Compact stage with one central floating platform",
        ja: "コンパクトなステージと中央の1つの足場",
        fr: "Scène compacte avec une seule plate-forme flottante au centre",
      },
      blastzones: { ceiling: 190, side: 230, bottom: -140 },
      themeColor: "#22c55e",
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
        <polygon points="45,78 155,78 145,95 55,95" fill="#22c55e" fill-opacity="0.2" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="42" y1="78" x2="158" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="75" y1="56" x2="125" y2="56" stroke="#86efac" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
    },
    {
      id: "town_and_city",
      names: {
        en: "Town & City",
        ja: "村と街",
        fr: "Ville & centre-ville",
      },
      shortNames: {
        en: "T&C",
        ja: "村街",
        fr: "V&C",
      },
      platformLayout: "variable-tri-plat",
      description: {
        en: "Low ceiling with alternating platforms",
        ja: "低めの撃墜天井と交互に出現する足場",
        fr: "Plafond bas avec plates-formes alternantes",
      },
      blastzones: { ceiling: 185, side: 245, bottom: -140 },
      themeColor: "#a855f7",
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
        <polygon points="35,78 165,78 152,95 48,95" fill="#a855f7" fill-opacity="0.2" stroke="#a855f7" stroke-width="1.5"/>
        <line x1="32" y1="78" x2="168" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="42" y1="58" x2="76" y2="58" stroke="#d8b4fe" stroke-width="2" stroke-linecap="round"/>
        <line x1="124" y1="58" x2="158" y2="58" stroke="#d8b4fe" stroke-width="2" stroke-linecap="round"/>
        <line x1="84" y1="44" x2="116" y2="44" stroke="#d8b4fe" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
    },
    {
      id: "hollow_bastion",
      names: {
        en: "Hollow Bastion",
        ja: "ホロウバスティオン",
        fr: "Forteresse Oubliée",
      },
      shortNames: {
        en: "HB",
        ja: "ホロウ",
        fr: "FO",
      },
      platformLayout: "center-plat",
      description: {
        en: "Single static center platform above a solid base",
        ja: "中央に1つの固定足場を持つステージ",
        fr: "Une plate-forme centrale fixe au-dessus d’une base solide",
      },
      blastzones: { ceiling: 192, side: 240, bottom: -140 },
      themeColor: "#06b6d4",
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
        <polygon points="40,78 160,78 150,95 50,95" fill="#06b6d4" fill-opacity="0.2" stroke="#06b6d4" stroke-width="1.5"/>
        <line x1="38" y1="78" x2="162" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="76" y1="56" x2="124" y2="56" stroke="#67e8f9" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
    },
    {
      id: "kalos_pokemon_league",
      names: {
        en: "Kalos Pokémon League",
        ja: "カロス ポケモン リーグ",
        fr: "Ligue Pokémon de Kalos",
      },
      shortNames: {
        en: "Kalos",
        ja: "カロス",
        fr: "Kalos",
      },
      platformLayout: "side-plat",
      description: {
        en: "Two side platforms overhanging outside the main stage",
        ja: "左右の場外にはみ出す2つの足場",
        fr: "Deux plates-formes latérales surplombant le vide",
      },
      blastzones: { ceiling: 192, side: 255, bottom: -140 },
      themeColor: "#f97316",
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
        <polygon points="45,78 155,78 145,95 55,95" fill="#f97316" fill-opacity="0.2" stroke="#f97316" stroke-width="1.5"/>
        <line x1="42" y1="78" x2="158" y2="78" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="18" y1="58" x2="52" y2="58" stroke="#fdba74" stroke-width="2" stroke-linecap="round"/>
        <line x1="148" y1="58" x2="182" y2="58" stroke="#fdba74" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
    },
    {
      id: "yoshis_story",
      names: {
        en: "Yoshi's Story",
        ja: "ヨッシーストーリー",
        fr: "Yoshi's Story",
      },
      shortNames: {
        en: "YS",
        ja: "ヨッシー",
        fr: "YS",
      },
      platformLayout: "tri-plat-sloped",
      description: {
        en: "Tri-platform with steep sloped ledges and low ceiling",
        ja: "すり鉢状の傾斜した崖と3つの足場",
        fr: "Trois plates-formes avec rebords inclinés et plafond bas",
      },
      blastzones: { ceiling: 176, side: 232, bottom: -136 },
      themeColor: "#84cc16",
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
      </svg>`,
    },
    {
      id: "lylat_cruise",
      names: {
        en: "Lylat Cruise",
        ja: "ライラットクルーズ",
        fr: "Traversée de Lylat",
      },
      shortNames: {
        en: "LC",
        ja: "ライラット",
        fr: "TL",
      },
      platformLayout: "tri-plat-slanted",
      description: {
        en: "Slanted spaceship with 3 platforms",
        ja: "傾斜した宇宙船と3つの足場",
        fr: "Vaisseau incliné avec 3 plates-formes",
      },
      blastzones: { ceiling: 180, side: 230, bottom: -140 },
      themeColor: "#6366f1",
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
      </svg>`,
    },
    {
      id: "northern_cave",
      names: {
        en: "Northern Cave",
        ja: "大空洞",
        fr: "Caverne boréale",
      },
      shortNames: {
        en: "NC",
        ja: "大空洞",
        fr: "CB",
      },
      platformLayout: "dual-plat-kalos",
      description: {
        en: "Two asymmetrical platforms on a solid base",
        ja: "左右非対称な2つの足場を持つステージ",
        fr: "Deux plates-formes asymétriques sur une base solide",
      },
      blastzones: { ceiling: 188, side: 245, bottom: -140 },
      themeColor: "#14b8a6",
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
      </svg>`,
    },
  ];

  STAGES.forEach((stage) => {
    stage.image = `assets/stages/${stage.id}.png`;
  });

  const STAGE_MAP = STAGES.reduce((acc, stage) => {
    acc[stage.id] = stage;
    return acc;
  }, {});

  // --- REGIONAL PRESETS ---
  const REGIONAL_PRESETS = {
    japan: {
      id: "japan",
      names: {
        en: "Japan",
        ja: "日本",
        fr: "Japon",
      },
      flag: "🇯🇵",
      regionCode: "JP",
      stocks: 3,
      timeMinutes: 7,
      hazards: false,
      bansBo3: 2,
      bansBo5: 2,
      dsrRule: "dsr",
      strikePattern: [1, 2, 1],
      starters: [
        "final_destination",
        "battlefield",
        "pokemon_stadium_2",
        "smashville",
        "small_battlefield",
      ],
      counterpicks: ["town_and_city", "hollow_bastion"],
      notes: {
        en: "Japan ruleset: 5 starters (including FD), 2 counterpicks, 2 bans, Full DSR.",
        ja: "日本公式ルール: スターター5面 (終点含む)、カウンター2面、2拒否、フルDSR。",
        fr: "Règlement Japon : 5 starters (dont DF), 2 counterpicks, 2 bans, DSR stricte.",
      },
    },
    na: {
      id: "na",
      names: {
        en: "NA",
        ja: "北米",
        fr: "NA",
      },
      flag: "🇺🇸",
      regionCode: "NA",
      stocks: 3,
      timeMinutes: 7,
      hazards: false,
      bansBo3: 3,
      bansBo5: 3,
      dsrRule: "no_dsr",
      strikePattern: [1, 2, 1],
      starters: [
        "battlefield",
        "small_battlefield",
        "pokemon_stadium_2",
        "smashville",
        "town_and_city",
      ],
      counterpicks: [
        "final_destination",
        "hollow_bastion",
        "kalos_pokemon_league",
      ],
      notes: {
        en: "NA ruleset: 5 starters, 3 counterpicks, 3 bans, No DSR.",
        ja: "北米ルール: スターター5面、カウンター3面、3拒否、DSRなし。",
        fr: "Règlement NA : 5 starters, 3 counterpicks, 3 bans, sans DSR.",
      },
    },
    eu: {
      id: "eu",
      names: {
        en: "EU",
        ja: "欧州",
        fr: "EU",
      },
      flag: "🇪🇺",
      regionCode: "EU",
      stocks: 3,
      timeMinutes: 7,
      hazards: false,
      bansBo3: 3,
      bansBo5: 3,
      dsrRule: "dsr",
      strikePattern: [1, 2, 1],
      starters: [
        "battlefield",
        "small_battlefield",
        "final_destination",
        "pokemon_stadium_2",
        "smashville",
      ],
      counterpicks: [
        "town_and_city",
        "hollow_bastion",
        "kalos_pokemon_league",
        "yoshis_story",
      ],
      notes: {
        en: "EU ruleset: 5 starters, 4 counterpicks, 3 bans, Full DSR.",
        ja: "欧州ルール: スターター5面、カウンター4面、3拒否、フルDSR。",
        fr: "Règlement EU : 5 starters, 4 counterpicks, 3 bans, DSR stricte.",
      },
    },
  };

  // --- TRANSLATIONS DICTIONARY ---
  const TRANSLATIONS = {
    en: {
      appTitle: "Smash Ultimate Ruleset & Pick/Ban",
      appSubtitle:
        "Regional Ruleset Selector & Tournament Stage Striking Engine",
      navPickBan: "Pick & Ban Arena",
      navRuleset: "Ruleset & Stages",
      navInfographic: "Tournament Sheet",
      soundOn: "Audio FX: On",
      selectRegion: "Ruleset:",
      customRuleset: "Custom",
      regionJapan: "Japan",
      regionNA: "NA",
      regionEU: "EU",
      bo3Short: "Bo3",
      bo5Short: "Bo5",
      presetLoaded: "Ruleset loaded:",
      resetToDefault: "Reset to Preset",
      saveCustom: "Save as Custom",
      exportRuleset: "Export JSON",
      importRuleset: "Import JSON",
      stocks: "Stocks",
      time: "Minutes",
      hazardsOff: "Hazards OFF",
      hazardsOn: "Hazards ON",
      bansCount: "Bans",
      bo3Bans: "Bo3 Bans",
      bo5Bans: "Bo5 Bans",
      dsrType: "DSR Rule",
      noDsr: "No DSR",
      noDsrDesc:
        "Players can counterpick any legal stage, even if won on earlier.",
      mdsr: "Modified DSR (mDSR)",
      mdsrDesc: "A player cannot pick the stage they won on most recently.",
      fullDsr: "Full DSR",
      fullDsrDesc:
        "A player cannot pick any stage they have already won on in the set.",
      strikeOrder: "Strike Order",
      starters: "Starters",
      counterpicks: "Counterpicks",
      inactiveStages: "Inactive",
      matchFormat: "Match Format",
      bestOf3: "Best of 3 (First to 2)",
      bestOf5: "Best of 5 (First to 3)",
      player1: "Player 1",
      player2: "Player 2",
      game: "Game {game}",
      setScore: "Set Score",
      vs: "VS",
      editPlayers: "Edit Tags",
      swapSides: "Swap Sides",
      rpsTitle: "Determine First Ban",
      rpsSubtitle:
        "Play Rock-Paper-Scissors or flip a coin to decide who strikes first!",
      rock: "Rock ✊",
      paper: "Paper ✋",
      scissors: "Scissors ✌️",
      playRps: "Rock-Paper-Scissors Minigame",
      coinFlip: "Flip Coin",
      coinHeads: "Heads (P1 First)",
      coinTails: "Tails (P2 First)",
      p1StrikesFirst: "P1 Strikes First",
      p2StrikesFirst: "P2 Strikes First",
      rpsTie: "It's a Tie! Throw again!",
      rpsP1Won: "Player 1 won RPS!",
      rpsP2Won: "Player 2 won RPS!",
      waitingP1: "P1: Choose hand",
      waitingP2: "P2: Choose hand",
      startStriking: "Begin Striking Phase",
      game1Striking: "Game 1: Starter Striking (1-2-1)",
      strikeInstruction1: "{player}: Strike 1 stage ({banned}/{needed})",
      strikeInstruction2: "{player}: Strike 2 stages ({banned}/{needed})",
      pickInstruction: "{player}: Select the stage to play on!",
      undoStrike: "Undo Last Strike",
      resetGame: "Reset Current Game",
      resetMatch: "Reset Match",
      stageConfirmed: "Stage Selected for Game {game}",
      currentlyPlaying: "Playing on {stage}",
      whoWonGame: "Who won Game {game}?",
      p1WinsGame: "{player} Won",
      p2WinsGame: "{player} Won",
      counterpickPhase: "Game {game}: Counterpick Phase",
      winnerBanInstruction:
        "Winner ({player}): Ban {count} stages ({banned}/{count})",
      loserPickInstruction: "Loser ({player}): Select a counterpick stage!",
      dsrLocked: "Locked by DSR (Previously won on)",
      bannedByWinner: "Banned by {player}",
      characterSelectionHeader: "Official Tournament Character Order",
      charStep1: "1. Winner announces character first",
      charStep2: "2. Loser selects character after knowing winner’s pick",
      charStep3: "3. Both players load into selected stage",
      setWinner: "SET VICTORY!",
      setWinnerDesc: "{player} wins the set {score}!",
      newMatch: "Start New Match",
      viewMatchLog: "Match History",
      editorTitle: "Custom Ruleset Configuration",
      editorDesc: "Customize stages, stocks, timer, ban counts, and DSR rules.",
      stagePool: "Competitive Stage Pool",
      starterLabel: "Starter",
      counterpickLabel: "Counterpick",
      inactiveLabel: "Off",
      platformLayouts: "Platform Layout",
      ceiling: "Ceiling",
      sides: "Sides",
      cheatSheetTitle: "Official Tournament Ruleset Sheet",
      cheatSheetSubtitle:
        "Quick reference guide for players, stream overlays, and tournament setups",
      printSheet: "Print / Save Sheet",
      starterStagesNotice: "Game 1 is struck exclusively from Starter stages.",
      counterpickStagesNotice:
        "Counterpick stages unlock in Game 2 and onwards.",
      matchProcedureHeader: "Stage Selection Procedure",
      procG1_1:
        "1. Players select characters (double-blind pick may be requested).",
      procG1_2:
        "2. Rock-Paper-Scissors or coin toss determines who bans first.",
      procG1_3:
        "3. 1-2-1 Starter bans: P1 bans 1, P2 bans 2, P1 picks from remaining 2 stages.",
      procG2_1:
        "1. Previous game winner bans {bans} stages from Starters + Counterpicks.",
      procG2_2:
        "2. Previous game loser picks the next stage (cannot pick stages restricted by DSR).",
      procG2_3: "3. Winner declares character first, followed by loser.",
    },

    ja: {
      appTitle: "スマブラSP ルールセット & ステージ選択",
      appSubtitle: "地域別競技ルールセット切り替え & 大会用ピック/BANエンジン",
      navPickBan: "対戦アリーナ (BAN/Pick)",
      navRuleset: "ルール設定 & ステージ",
      navInfographic: "大会用ルールシート",
      soundOn: "効果音: オン",
      selectRegion: "ルールセット:",
      customRuleset: "カスタム",
      regionJapan: "日本",
      regionNA: "北米",
      regionEU: "欧州",
      bo3Short: "BO3",
      bo5Short: "BO5",
      presetLoaded: "ルールセット読み込み:",
      resetToDefault: "プリセットに戻す",
      saveCustom: "カスタムとして保存",
      exportRuleset: "JSON出力",
      importRuleset: "JSON読込",
      stocks: "ストック",
      time: "分",
      hazardsOff: "ギミック OFF",
      hazardsOn: "ギミック ON",
      bansCount: "拒否数",
      bo3Bans: "BO3 拒否数",
      bo5Bans: "BO5 拒否数",
      dsrType: "DSR (勝者ステージ選択制限)",
      noDsr: "DSRなし (再選択可)",
      noDsrDesc: "過去に勝利したステージを含め、どの適法ステージでも選択可能。",
      mdsr: "Modified DSR (直前勝ち禁止)",
      mdsrDesc:
        "直前の試合で自分が勝利したステージを選択することはできません。",
      fullDsr: "フルDSR (勝ちステージ禁止)",
      fullDsrDesc:
        "同セット内で自分がすでに勝利したステージは再選択できません。",
      strikeOrder: "拒否順序",
      starters: "スターターステージ",
      counterpicks: "カウンターステージ",
      inactiveStages: "使用不可 / BAN",
      matchFormat: "試合形式",
      bestOf3: "BO3 (2本先取)",
      bestOf5: "BO5 (3本先取)",
      player1: "プレイヤー1",
      player2: "プレイヤー2",
      game: "第{game}試合",
      setScore: "セットスコア",
      vs: "VS",
      editPlayers: "名前変更",
      swapSides: "座順交代",
      rpsTitle: "先攻・後攻の決定",
      rpsSubtitle: "じゃんけんまたはコイントスで第1試合の拒否順を決定します！",
      rock: "グー ✊",
      paper: "パー ✋",
      scissors: "チョキ ✌️",
      playRps: "じゃんけんミニゲーム",
      coinFlip: "コイントス",
      coinHeads: "表 (P1先攻)",
      coinTails: "裏 (P2先攻)",
      p1StrikesFirst: "P1が先に拒否",
      p2StrikesFirst: "P2が先に拒否",
      rpsTie: "あいこでしょ！ もう一度出してください！",
      rpsP1Won: "プレイヤー1の勝ち！",
      rpsP2Won: "プレイヤー2の勝ち！",
      waitingP1: "P1: 手を選んでください",
      waitingP2: "P2: 手を選んでください",
      startStriking: "ステージ拒否開始",
      game1Striking: "第1試合: スターター拒否 (1-2-1形式)",
      strikeInstruction1:
        "{player}: スターターから1ステージ拒否してください ({banned}/{needed})",
      strikeInstruction2:
        "{player}: スターターから2ステージ拒否してください ({banned}/{needed})",
      pickInstruction: "{player}: 第1試合を行うステージを決定してください！",
      undoStrike: "直前の拒否を取消",
      resetGame: "試合リセット",
      resetMatch: "セット全体をリセット",
      stageConfirmed: "第{game}試合のステージ決定",
      currentlyPlaying: "【{stage}】で対戦中",
      whoWonGame: "第{game}試合の勝者は？",
      p1WinsGame: "{player} の勝利",
      p2WinsGame: "{player} の勝利",
      counterpickPhase: "第{game}試合: カウンターピック手順",
      winnerBanInstruction:
        "勝者 ({player}): {count}ステージを拒否してください ({banned}/{count})",
      loserPickInstruction:
        "敗者 ({player}): カウンターステージを選択してください！",
      dsrLocked: "DSR制限 (過去に勝利したステージ)",
      bannedByWinner: "{player} により拒否",
      characterSelectionHeader: "キャラクター選択の公式手順",
      charStep1: "1. 前試合の勝者が先にキャラクターを決定・宣言",
      charStep2: "2. 前試合の敗者が後からキャラクターを決定",
      charStep3: "3. 決定されたステージへ進み試合開始",
      setWinner: "セット勝利！",
      setWinnerDesc: "{player} が {score} でセットを獲得しました！",
      newMatch: "新しい対戦を始める",
      viewMatchLog: "試合ログ",
      editorTitle: "ルールセット詳細設定",
      editorDesc:
        "ステージ区分、ストック数、タイム、拒否数、DSRルールを自由にカスタマイズ可能。",
      stagePool: "競技用ステージプール",
      starterLabel: "スターター",
      counterpickLabel: "カウンター",
      inactiveLabel: "除外",
      platformLayouts: "足場構成",
      ceiling: "上撃墜ライン",
      sides: "横撃墜ライン",
      cheatSheetTitle: "大会公式ステージルールシート",
      cheatSheetSubtitle:
        "対戦台用・配信オーバーレイ用・プレイヤー確認用シート",
      printSheet: "印刷 / 画像保存",
      starterStagesNotice:
        "第1試合はスターターステージのみから拒否・選択します。",
      counterpickStagesNotice:
        "第2試合以降はカウンターステージが解放されます。",
      matchProcedureHeader: "ステージ決定の手順",
      procG1_1: "1. キャラクター選択（希望時はブラインドピック）",
      procG1_2: "2. じゃんけんで勝ったプレイヤーが先攻拒否権を獲得",
      procG1_3:
        "3. スターター5面から勝者1拒否 → 敗者2拒否 → 残り2面から勝者が1面決定 (1-2-1)",
      procG2_1: "1. 前試合の勝者がスターター＋カウンターから{bans}ステージ拒否",
      procG2_2: "2. 前試合の敗者が残りのステージから1ステージ決定 (DSR適用)",
      procG2_3: "3. 前試合の勝者がキャラ決定 → 敗者がキャラ決定",
    },

    fr: {
      appTitle: "Règlement & Bans de Stages Smash Ultimate",
      appSubtitle: "Sélecteur de Règles Régionales & Moteur de Bans Tournoi",
      navPickBan: "Arène Pick & Ban",
      navRuleset: "Règles & Stages",
      navInfographic: "Fiche de Tournoi",
      soundOn: "Audio FX : Activé",
      soundOff: "Audio FX : Désactivé",
      selectRegion: "Preset Régional :",
      customRuleset: "Règles Personnalisées",
      presetLoaded: "Règlement chargé :",
      resetToDefault: "Rétablir le Preset",
      saveCustom: "Enregistrer Personnalisé",
      exportRuleset: "Exporter JSON",
      importRuleset: "Importer JSON",
      stocks: "Vies (Stocks)",
      time: "Minutes",
      hazardsOff: "Aléas OFF",
      hazardsOn: "Aléas ON",
      bansCount: "Bans",
      bo3Bans: "Bans en Bo3",
      bo5Bans: "Bans en Bo5",
      dsrType: "Règle DSR",
      noDsr: "Sans DSR",
      noDsrDesc: "Les joueurs peuvent rejouer sur n’importe quel stage légal.",
      mdsr: "DSR Modifiée (mDSR)",
      mdsrDesc:
        "Interdiction de rechoisir le stage sur lequel vous venez de gagner.",
      fullDsr: "DSR Stricte (Full DSR)",
      fullDsrDesc:
        "Interdiction de rechoisir tout stage déjà remporté durant le set.",
      strikeOrder: "Ordre des bans",
      starters: "Stages Starters",
      counterpicks: "Stages Counterpicks",
      inactiveStages: "Désactivés",
      matchFormat: "Format du Match",
      bestOf3: "Bo3 (Premier à 2)",
      bestOf5: "Bo5 (Premier à 3)",
      player1: "Joueur 1",
      player2: "Joueur 2",
      game: "Manche {game}",
      setScore: "Score du Set",
      vs: "VS",
      editPlayers: "Changer Pseudos",
      swapSides: "Inverser Côtés",
      rpsTitle: "Détermination du Premier Ban",
      rpsSubtitle:
        "Pierre-Feuille-Ciseaux ou pile ou face pour décider qui commence les bans !",
      rock: "Pierre ✊",
      paper: "Feuille ✋",
      scissors: "Ciseaux ✌️",
      playRps: "Mini-jeu PFC",
      coinFlip: "Pile ou Face",
      coinHeads: "Pile (J1 commence)",
      coinTails: "Face (J2 commence)",
      p1StrikesFirst: "J1 Bannit en Premier",
      p2StrikesFirst: "J2 Bannit en Premier",
      rpsTie: "Égalité ! Rejouez !",
      rpsP1Won: "Joueur 1 remporte le PFC !",
      rpsP2Won: "Joueur 2 remporte le PFC !",
      waitingP1: "J1 : Choisissez votre coup",
      waitingP2: "J2 : Choisissez votre coup",
      startStriking: "Commencer les Bans",
      game1Striking: "Manche 1 : Bans des Starters (1-2-1)",
      strikeInstruction1:
        "{player} : Bannissez 1 stage starter ({banned}/{needed})",
      strikeInstruction2:
        "{player} : Bannissez 2 stages starters ({banned}/{needed})",
      pickInstruction: "{player} : Choisissez le stage pour débuter le set !",
      undoStrike: "Annuler le Dernier Ban",
      resetGame: "Réinitialiser la Manche",
      resetMatch: "Réinitialiser le Match",
      stageConfirmed: "Stage Sélectionné pour la Manche {game}",
      currentlyPlaying: "En combat sur {stage}",
      whoWonGame: "Qui a gagné la Manche {game} ?",
      p1WinsGame: "{player} a Gagné",
      p2WinsGame: "{player} a Gagné",
      counterpickPhase: "Manche {game} : Phase de Counterpick",
      winnerBanInstruction:
        "Gagnant ({player}) : Bannissez {count} stages ({banned}/{count})",
      loserPickInstruction: "Perdant ({player}) : Choisissez un stage !",
      dsrLocked: "Bloqué par la règle DSR (Déjà gagné dessus)",
      bannedByWinner: "Banni par {player}",
      characterSelectionHeader: "Ordre Officiel de Choix des Personnages",
      charStep1: "1. Le gagnant annonce son personnage en premier",
      charStep2:
        "2. Le perdant choisit ensuite son personnage en connaissance de cause",
      charStep3: "3. Les deux joueurs lancent le match sur le stage choisi",
      setWinner: "VICTOIRE DU SET !",
      setWinnerDesc: "{player} remporte le set {score} !",
      newMatch: "Nouveau Match",
      viewMatchLog: "Historique du Match",
      editorTitle: "Configuration Personnalisée des Règles",
      editorDesc:
        "Ajustez le statut des stages, les stocks, le timer, les bans et la DSR.",
      stagePool: "Pool de Stages Compétitifs",
      starterLabel: "Starter",
      counterpickLabel: "Counterpick",
      inactiveLabel: "Off",
      platformLayouts: "Disposition des Plates-formes",
      ceiling: "Plafond",
      sides: "Côtés",
      cheatSheetTitle: "Règlement Compétitif Officiel",
      cheatSheetSubtitle:
        "Fiche mémo pour les setups de tournoi, streams et arbitres",
      printSheet: "Imprimer / Sauvegarder",
      starterStagesNotice:
        "La manche 1 se joue uniquement sur les stages Starters.",
      counterpickStagesNotice:
        "Les stages Counterpicks deviennent disponibles à partir de la manche 2.",
      matchProcedureHeader: "Étapes du Déroulement d’un Set",
      procG1_1: "1. Choix des personnages (Double-blind possible sur demande).",
      procG1_2:
        "2. Pierre-Feuille-Ciseaux (PFC) pour déterminer le premier bannisseur.",
      procG1_3:
        "3. Bans 1-2-1 : Gagnant du PFC ban 1, perdant ban 2, gagnant choisit parmi les 2 restants.",
      procG2_1:
        "1. Le gagnant de la manche précédente bannit {bans} stages parmi Starters + Counterpicks.",
      procG2_2:
        "2. Le perdant choisit le prochain stage parmi ceux restants (respect de la DSR).",
      procG2_3:
        "3. Le gagnant annonce son personnage, puis le perdant choisit son personnage.",
    },
  };

  // --- AUDIO SYNTHESIZER ---
  class SoundFX {
    constructor() {
      this.audioCtx = null;
      this.enabled = localStorage.getItem("smash_sound_enabled") !== "false";
    }

    init() {
      if (!this.audioCtx) {
        const AudioContextClass =
          window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.audioCtx = new AudioContextClass();
        }
      }
      if (this.audioCtx && this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem(
        "smash_sound_enabled",
        this.enabled ? "true" : "false",
      );
      if (this.enabled) this.playClick();
      return this.enabled;
    }

    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    }

    playStrike() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    }

    playConfirm() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0.25, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.2);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.22);
      });
    }

    playRpsRoll() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      for (let i = 0; i < 4; i++) {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(320 + i * 80, now + i * 0.08);
        gain.gain.setValueAtTime(0.15, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.05);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.06);
      }
    }

    playVictory() {
      if (!this.enabled) return;
      this.init();
      if (!this.audioCtx) return;
      const now = this.audioCtx.currentTime;
      const chord1 = [523.25, 659.25, 783.99];
      const chord2 = [587.33, 739.99, 880.0];
      const chord3 = [659.25, 830.61, 987.77];
      const chord4 = [1046.5, 1318.51, 1567.98];

      const playChord = (notes, time, duration) => {
        notes.forEach((f) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(f, time);
          gain.gain.setValueAtTime(0.2, time);
          gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(time);
          osc.stop(time + duration + 0.05);
        });
      };

      playChord(chord1, now, 0.18);
      playChord(chord2, now + 0.2, 0.18);
      playChord(chord3, now + 0.4, 0.25);
      playChord(chord4, now + 0.7, 0.6);
    }
  }

  const sound = new SoundFX();

  // --- STATE MANAGER ---
  class StateManager {
    constructor() {
      this.subscribers = [];
      this.historyStack = [];

      const savedLang = localStorage.getItem("smash_language");
      this.language = ["en", "ja", "fr"].includes(savedLang) ? savedLang : "en";

      const savedPresetId =
        localStorage.getItem("smash_active_preset") || "japan";
      const savedCustom = localStorage.getItem("smash_custom_ruleset");

      if (savedPresetId === "custom" && savedCustom) {
        try {
          this.activeRuleset = JSON.parse(savedCustom);
        } catch (e) {
          this.activeRuleset = JSON.parse(
            JSON.stringify(REGIONAL_PRESETS.japan),
          );
        }
      } else {
        const preset =
          REGIONAL_PRESETS[savedPresetId] || REGIONAL_PRESETS.japan;
        this.activeRuleset = JSON.parse(JSON.stringify(preset));
      }

      this.match = {
        format: "bo3",
        p1Name: "Player 1",
        p2Name: "Player 2",
        score: { p1: 0, p2: 0 },
        currentGame: 1,
        gameHistory: [],
        phase: "decide_first",
        firstStriker: null,
        currentStrikes: [],
        selectedStageId: null,
        game1Step: 0,
        lastGameWinner: null,
        lastGameLoser: null,
        winnerBans: [],
        setWinner: null,
      };
    }

    subscribe(fn) {
      this.subscribers.push(fn);
      fn(this);
      return () => {
        this.subscribers = this.subscribers.filter((sub) => sub !== fn);
      };
    }

    notify() {
      this.subscribers.forEach((fn) => fn(this));
    }

    setLanguage(lang) {
      if (["en", "ja", "fr"].includes(lang)) {
        this.language = lang;
        localStorage.setItem("smash_language", lang);
        this.notify();
      }
    }

    t(key, vars = {}) {
      const dict = TRANSLATIONS[this.language] || TRANSLATIONS.en;
      let str = dict[key] || TRANSLATIONS.en[key] || key;
      Object.keys(vars).forEach((v) => {
        str = str.replace(new RegExp(`\\{${v}\\}`, "g"), vars[v]);
      });
      return str;
    }

    getStageName(stageId) {
      const stage = STAGE_MAP[stageId];
      if (!stage) return stageId;
      return stage.names[this.language] || stage.names.en;
    }

    setPreset(presetId) {
      if (REGIONAL_PRESETS[presetId]) {
        this.activeRuleset = JSON.parse(
          JSON.stringify(REGIONAL_PRESETS[presetId]),
        );
        localStorage.setItem("smash_active_preset", presetId);
        this.resetMatch();
      }
    }

    saveCustomRuleset(customObj) {
      this.activeRuleset = {
        ...customObj,
        id: "custom",
      };
      localStorage.setItem("smash_active_preset", "custom");
      localStorage.setItem(
        "smash_custom_ruleset",
        JSON.stringify(this.activeRuleset),
      );
      this.resetMatch();
    }

    pushState() {
      this.historyStack.push(JSON.stringify(this.match));
      if (this.historyStack.length > 20) this.historyStack.shift();
    }

    undo() {
      if (this.historyStack.length > 0) {
        const prev = this.historyStack.pop();
        this.match = JSON.parse(prev);
        this.notify();
        return true;
      }
      return false;
    }

    canUndo() {
      return this.historyStack.length > 0;
    }

    setPlayers(p1, p2) {
      this.match.p1Name = p1 || "Player 1";
      this.match.p2Name = p2 || "Player 2";
      this.notify();
    }

    setFormat(format) {
      this.match.format = format;
      this.notify();
    }

    swapSides() {
      const tempName = this.match.p1Name;
      this.match.p1Name = this.match.p2Name;
      this.match.p2Name = tempName;

      const tempScore = this.match.score.p1;
      this.match.score.p1 = this.match.score.p2;
      this.match.score.p2 = tempScore;

      if (this.match.firstStriker) {
        this.match.firstStriker =
          this.match.firstStriker === "p1" ? "p2" : "p1";
      }
      if (this.match.lastGameWinner) {
        this.match.lastGameWinner =
          this.match.lastGameWinner === "p1" ? "p2" : "p1";
        this.match.lastGameLoser =
          this.match.lastGameLoser === "p1" ? "p2" : "p1";
      }
      this.notify();
    }

    setFirstStriker(player) {
      this.pushState();
      this.match.firstStriker = player;
      this.match.phase = "game1_striking";
      this.match.game1Step = 0;
      this.match.currentStrikes = [];
      this.match.selectedStageId = null;
      this.notify();
    }

    strikeGame1Stage(stageId) {
      const starters = this.activeRuleset.starters;
      if (!starters.includes(stageId)) return;
      if (this.match.currentStrikes.includes(stageId)) return;

      this.pushState();

      if (this.match.game1Step === 0) {
        this.match.currentStrikes.push(stageId);
        this.match.game1Step = 1;
      } else if (this.match.game1Step === 1) {
        this.match.currentStrikes.push(stageId);
        if (this.match.currentStrikes.length >= 3) {
          this.match.game1Step = 2;
        }
      } else if (this.match.game1Step === 2) {
        this.confirmStageSelection(stageId);
        return;
      }

      const remaining = starters.filter(
        (s) => !this.match.currentStrikes.includes(s),
      );
      if (remaining.length === 1 && this.match.game1Step === 2) {
        this.confirmStageSelection(remaining[0]);
        return;
      }

      this.notify();
    }

    confirmStageSelection(stageId) {
      this.match.selectedStageId = stageId;
      this.match.phase = "game_in_progress";
      this.notify();
    }

    recordGameWinner(winner) {
      this.pushState();
      const loser = winner === "p1" ? "p2" : "p1";
      this.match.score[winner]++;

      this.match.gameHistory.push({
        game: this.match.currentGame,
        stageId: this.match.selectedStageId,
        winner: winner,
        loser: loser,
      });

      const targetWins = this.match.format === "bo3" ? 2 : 3;
      if (this.match.score[winner] >= targetWins) {
        this.match.phase = "set_complete";
        this.match.setWinner = winner;
        this.notify();
        return;
      }

      this.match.currentGame++;
      this.match.lastGameWinner = winner;
      this.match.lastGameLoser = loser;
      this.match.currentStrikes = [];
      this.match.winnerBans = [];
      this.match.selectedStageId = null;
      this.match.phase = "counterpick_bans";
      this.notify();
    }

    getRequiredBansCount() {
      if (
        this.match.format === "bo5" &&
        this.activeRuleset.bansBo5 !== undefined
      ) {
        return this.activeRuleset.bansBo5;
      }
      return this.activeRuleset.bansBo3 || 3;
    }

    getDsrLockedStages() {
      const loser = this.match.lastGameLoser;
      if (!loser || this.activeRuleset.dsrRule === "no_dsr") {
        return [];
      }

      const gamesWonByLoser = this.match.gameHistory.filter(
        (g) => g.winner === loser,
      );

      if (this.activeRuleset.dsrRule === "mdsr") {
        if (gamesWonByLoser.length > 0) {
          return [gamesWonByLoser[gamesWonByLoser.length - 1].stageId];
        }
        return [];
      }

      return gamesWonByLoser.map((g) => g.stageId);
    }

    handleCounterpickStageClick(stageId) {
      const allLegalStages = [
        ...this.activeRuleset.starters,
        ...this.activeRuleset.counterpicks,
      ];
      if (!allLegalStages.includes(stageId)) return;

      this.pushState();
      const requiredBans = this.getRequiredBansCount();

      if (this.match.phase === "counterpick_bans") {
        const dsrStages = this.getDsrLockedStages();
        if (dsrStages.includes(stageId)) return;

        if (this.match.winnerBans.includes(stageId)) {
          this.match.winnerBans = this.match.winnerBans.filter(
            (id) => id !== stageId,
          );
        } else if (this.match.winnerBans.length < requiredBans) {
          this.match.winnerBans.push(stageId);
        }

        if (this.match.winnerBans.length >= requiredBans) {
          this.match.phase = "counterpick_pick";
        }
        this.notify();
        return;
      }

      if (this.match.phase === "counterpick_pick") {
        if (this.match.winnerBans.includes(stageId)) return;
        if (this.getDsrLockedStages().includes(stageId)) return;

        this.confirmStageSelection(stageId);
      }
    }

    resetCurrentGame() {
      this.pushState();
      if (this.match.currentGame === 1) {
        this.match.phase = "decide_first";
        this.match.firstStriker = null;
        this.match.currentStrikes = [];
        this.match.game1Step = 0;
        this.match.selectedStageId = null;
      } else {
        this.match.phase = "counterpick_bans";
        this.match.winnerBans = [];
        this.match.currentStrikes = [];
        this.match.selectedStageId = null;
      }
      this.notify();
    }

    resetMatch() {
      this.historyStack = [];
      this.match = {
        format: this.match.format,
        p1Name: this.match.p1Name,
        p2Name: this.match.p2Name,
        score: { p1: 0, p2: 0 },
        currentGame: 1,
        gameHistory: [],
        phase: "decide_first",
        firstStriker: null,
        currentStrikes: [],
        selectedStageId: null,
        game1Step: 0,
        lastGameWinner: null,
        lastGameLoser: null,
        winnerBans: [],
        setWinner: null,
      };
      this.notify();
    }
  }

  const state = new StateManager();

  // --- APP CONTROLLER ---
  class SmashApp {
    constructor() {
      this.currentTab = "arena";
      this.rpsP1Hand = null;
      this.rpsP2Hand = null;
      this.rpsWinner = null;

      this.initElements();
      this.bindEvents();

      state.subscribe(() => {
        this.render();
      });
    }

    initElements() {
      this.navTabBtns = document.querySelectorAll(".nav-tab-btn");
      this.views = {
        arena: document.getElementById("viewArena"),
        editor: document.getElementById("viewEditor"),
        infographic: document.getElementById("viewInfographic"),
      };

      this.langBtns = document.querySelectorAll(".lang-btn");
      this.btnAudioToggle = document.getElementById("btnAudioToggle");
      this.audioIcon = document.getElementById("audioIcon");
      this.audioLabel = document.getElementById("audioLabel");
      this.presetDropdown = document.getElementById("presetDropdown");
      this.presetBadges = document.getElementById("presetBadges");

      this.btnBo3 = document.getElementById("btnBo3");
      this.btnBo5 = document.getElementById("btnBo5");
      this.btnSwapSides = document.getElementById("btnSwapSides");
      this.btnResetMatch = document.getElementById("btnResetMatch");
      this.p1Card = document.getElementById("p1Card");
      this.p2Card = document.getElementById("p2Card");
      this.p1NameInput = document.getElementById("p1NameInput");
      this.p2NameInput = document.getElementById("p2NameInput");
      this.p1ScoreVal = document.getElementById("p1ScoreVal");
      this.p2ScoreVal = document.getElementById("p2ScoreVal");
      this.p1ScoreTag = document.getElementById("p1ScoreTag");
      this.p2ScoreTag = document.getElementById("p2ScoreTag");
      this.gameCounterTag = document.getElementById("gameCounterTag");
      this.turnBanner = document.getElementById("turnBanner");
      this.turnBannerTitle = document.getElementById("turnBannerTitle");
      this.turnBannerSubtitle = document.getElementById("turnBannerSubtitle");
      this.turnBannerActions = document.getElementById("turnBannerActions");
      this.charOrderBar = document.getElementById("charOrderBar");
      this.startersGrid = document.getElementById("startersGrid");
      this.counterpicksGrid = document.getElementById("counterpicksGrid");
      this.starterCountBadge = document.getElementById("starterCountBadge");
      this.counterpickCountBadge = document.getElementById(
        "counterpickCountBadge",
      );

      this.rpsModal = document.getElementById("rpsModal");
      this.rpsP1Label = document.getElementById("rpsP1Label");
      this.rpsP2Label = document.getElementById("rpsP2Label");
      this.rpsP1HandEl = document.getElementById("rpsP1Hand");
      this.rpsP2HandEl = document.getElementById("rpsP2Hand");
      this.rpsStatusMessage = document.getElementById("rpsStatusMessage");
      this.btnCoinFlip = document.getElementById("btnCoinFlip");
      this.btnDirectP1 = document.getElementById("btnDirectP1");
      this.btnDirectP2 = document.getElementById("btnDirectP2");
      this.btnConfirmStriker = document.getElementById("btnConfirmStriker");

      this.victoryModal = document.getElementById("victoryModal");
      this.victorySubtitle = document.getElementById("victorySubtitle");
      this.setMatchHistory = document.getElementById("setMatchHistory");
      this.btnNewMatchFromVictory = document.getElementById(
        "btnNewMatchFromVictory",
      );
      this.btnCloseVictory = document.getElementById("btnCloseVictory");

      this.editStocks = document.getElementById("editStocks");
      this.editTime = document.getElementById("editTime");
      this.editHazards = document.getElementById("editHazards");
      this.editBo3Bans = document.getElementById("editBo3Bans");
      this.editBo5Bans = document.getElementById("editBo5Bans");
      this.editDsrRule = document.getElementById("editDsrRule");
      this.btnSaveCustom = document.getElementById("btnSaveCustom");
      this.btnResetToPreset = document.getElementById("btnResetToPreset");
      this.btnExportJson = document.getElementById("btnExportJson");
      this.btnImportJson = document.getElementById("btnImportJson");
      this.fileImportInput = document.getElementById("fileImportInput");
      this.editorStagesList = document.getElementById("editorStagesList");

      this.btnPrintSheet = document.getElementById("btnPrintSheet");
      this.infoBanner = document.getElementById("infoBanner");
      this.infoSheetTitle = document.getElementById("infoSheetTitle");
      this.infoSheetSubtitle = document.getElementById("infoSheetSubtitle");
      this.infoSpecsBar = document.getElementById("infoSpecsBar");
      this.infoStartersGrid = document.getElementById("infoStartersGrid");
      this.infoCounterpicksGrid = document.getElementById(
        "infoCounterpicksGrid",
      );
      this.procG2_1Text = document.getElementById("procG2_1Text");
    }

    bindEvents() {
      this.navTabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          sound.playClick();
          const tab = btn.dataset.tab;
          this.switchTab(tab);
        });
      });

      this.langBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          sound.playClick();
          const lang = btn.dataset.lang;
          state.setLanguage(lang);
        });
      });

      this.btnAudioToggle.addEventListener("click", () => {
        const isEnabled = sound.toggle();
        this.updateAudioUi(isEnabled);
      });

      this.presetDropdown.addEventListener("change", (e) => {
        sound.playClick();
        const val = e.target.value;
        if (val === "custom") {
          this.switchTab("editor");
        } else {
          state.setPreset(val);
        }
      });

      this.btnBo3.addEventListener("click", () => {
        sound.playClick();
        state.setFormat("bo3");
      });
      this.btnBo5.addEventListener("click", () => {
        sound.playClick();
        state.setFormat("bo5");
      });

      this.p1NameInput.addEventListener("input", (e) => {
        state.setPlayers(e.target.value, state.match.p2Name);
      });
      this.p2NameInput.addEventListener("input", (e) => {
        state.setPlayers(state.match.p1Name, e.target.value);
      });

      this.btnSwapSides.addEventListener("click", () => {
        sound.playClick();
        state.swapSides();
      });
      this.btnResetMatch.addEventListener("click", () => {
        if (confirm("Reset entire match score and history?")) {
          sound.playClick();
          state.resetMatch();
        }
      });

      document.querySelectorAll(".rps-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          sound.playClick();
          const player = btn.dataset.player;
          const hand = btn.dataset.hand;
          this.handleRpsHandPick(player, hand);
        });
      });

      this.btnCoinFlip.addEventListener("click", () => {
        sound.playRpsRoll();
        const randomBit = window.crypto?.getRandomValues
          ? window.crypto.getRandomValues(new Uint8Array(1))[0] & 1
          : Math.floor(Math.random() * 2);
        const heads = randomBit === 0;
        const winner = heads ? "p1" : "p2";
        const winnerName =
          winner === "p1" ? state.match.p1Name : state.match.p2Name;
        this.rpsWinner = winner;
        this.rpsStatusMessage.textContent = `${heads ? state.t("coinHeads") : state.t("coinTails")}: ${winnerName} strikes first!`;
        this.btnConfirmStriker.style.display = "inline-flex";
      });

      this.btnDirectP1.addEventListener("click", () => {
        sound.playClick();
        this.rpsWinner = "p1";
        this.startStrikingWithWinner("p1");
      });
      this.btnDirectP2.addEventListener("click", () => {
        sound.playClick();
        this.rpsWinner = "p2";
        this.startStrikingWithWinner("p2");
      });

      this.btnConfirmStriker.addEventListener("click", () => {
        if (this.rpsWinner) {
          sound.playClick();
          this.startStrikingWithWinner(this.rpsWinner);
        }
      });

      this.btnCloseVictory.addEventListener("click", () => {
        this.victoryModal.classList.remove("active");
      });
      this.btnNewMatchFromVictory.addEventListener("click", () => {
        sound.playClick();
        this.victoryModal.classList.remove("active");
        state.resetMatch();
      });

      this.btnSaveCustom.addEventListener("click", () => {
        sound.playConfirm();
        this.saveEditorRuleset();
      });
      this.btnResetToPreset.addEventListener("click", () => {
        sound.playClick();
        state.setPreset("japan");
      });

      this.btnExportJson.addEventListener("click", () => {
        this.exportRulesetJson();
      });
      this.btnImportJson.addEventListener("click", () => {
        this.fileImportInput.click();
      });
      this.fileImportInput.addEventListener("change", (e) => {
        this.importRulesetJson(e);
      });

      this.btnPrintSheet.addEventListener("click", () => {
        window.print();
      });
    }

    switchTab(tab) {
      this.currentTab = tab;
      this.navTabBtns.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.tab === tab);
      });
      Object.keys(this.views).forEach((key) => {
        this.views[key].classList.toggle("active", key === tab);
      });
      if (tab === "editor") {
        this.populateEditorFields();
      }
    }

    updateAudioUi(enabled) {
      this.audioIcon.textContent = enabled ? "🔊" : "🔇";
      this.audioLabel.textContent = enabled
        ? state.t("soundOn")
        : state.t("soundOff");
    }

    render() {
      this.renderTranslations();
      this.renderPresetToolbar();
      this.renderArena();
      this.renderInfographic();
      if (this.currentTab === "editor") {
        this.populateEditorFields();
      }
    }

    renderTranslations() {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const text = state.t(key);
        if (text) {
          el.textContent = text;
        }
      });

      this.langBtns.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === state.language);
      });

      this.updateAudioUi(sound.enabled);
    }

    renderPresetToolbar() {
      const activePreset = state.activeRuleset;
      if (activePreset.id && REGIONAL_PRESETS[activePreset.id]) {
        this.presetDropdown.value = activePreset.id;
      } else {
        this.presetDropdown.value = "custom";
      }

      const badgesHtml = `
        <span class="badge badge-red">🛡️ ${activePreset.stocks} ${state.t("stocks")}</span>
        <span class="badge badge-blue">⏱️ ${activePreset.timeMinutes} ${state.t("time")}</span>
        <span class="badge ${activePreset.hazards ? "badge-red" : "badge-green"}">
          ${activePreset.hazards ? state.t("hazardsOn") : state.t("hazardsOff")}
        </span>
        <span class="badge badge-gold">❌ ${activePreset.bansBo3} ${state.t("bo3Bans")} / ${activePreset.bansBo5 !== undefined ? activePreset.bansBo5 : activePreset.bansBo3} ${state.t("bo5Bans")}</span>
        <span class="badge badge-blue">⚖️ ${this.getDsrBadgeText(activePreset.dsrRule)}</span>
      `;
      this.presetBadges.innerHTML = badgesHtml;
    }

    getDsrBadgeText(dsrRule) {
      if (dsrRule === "no_dsr") return state.t("noDsr");
      if (dsrRule === "mdsr") return state.t("mdsr");
      return state.t("fullDsr");
    }

    renderArena() {
      const match = state.match;

      this.btnBo3.classList.toggle("active", match.format === "bo3");
      this.btnBo5.classList.toggle("active", match.format === "bo5");

      if (document.activeElement !== this.p1NameInput) {
        this.p1NameInput.value = match.p1Name;
      }
      if (document.activeElement !== this.p2NameInput) {
        this.p2NameInput.value = match.p2Name;
      }

      this.p1ScoreVal.textContent = match.score.p1;
      this.p2ScoreVal.textContent = match.score.p2;
      this.p1ScoreTag.textContent = `${match.score.p1} ${state.t("stocks")}`;
      this.p2ScoreTag.textContent = `${match.score.p2} ${state.t("stocks")}`;
      this.gameCounterTag.textContent = `${state.t("game", { game: match.currentGame })}`;

      const activePlayer = this.getActiveTurnPlayer();
      this.p1Card.classList.toggle("active-turn", activePlayer === "p1");
      this.p2Card.classList.toggle("active-turn", activePlayer === "p2");

      this.renderTurnBanner();
      this.renderStageGrids();

      const isCounterpickPhase = [
        "counterpick_bans",
        "counterpick_pick",
      ].includes(match.phase);
      this.charOrderBar.style.display = isCounterpickPhase ? "flex" : "none";

      if (
        match.phase === "set_complete" &&
        !this.victoryModal.classList.contains("active")
      ) {
        this.showVictoryModal();
      }
    }

    getActiveTurnPlayer() {
      const match = state.match;
      if (match.phase === "game1_striking") {
        const pA = match.firstStriker;
        const pB = pA === "p1" ? "p2" : "p1";
        if (match.game1Step === 0) return pA;
        if (match.game1Step === 1) return pB;
        if (match.game1Step === 2) return pA;
      }
      if (match.phase === "counterpick_bans") {
        return match.lastGameWinner;
      }
      if (match.phase === "counterpick_pick") {
        return match.lastGameLoser;
      }
      return null;
    }

    renderTurnBanner() {
      const match = state.match;
      const activePlayer = this.getActiveTurnPlayer();
      const p1Name = match.p1Name;
      const p2Name = match.p2Name;
      const pAName = match.firstStriker === "p1" ? p1Name : p2Name;
      const pBName = match.firstStriker === "p1" ? p2Name : p1Name;

      this.turnBanner.className = "turn-action-banner";
      if (activePlayer === "p1") this.turnBanner.classList.add("turn-p1");
      if (activePlayer === "p2") this.turnBanner.classList.add("turn-p2");

      let title = "";
      let subtitle = "";
      let actionsHtml = "";

      if (match.phase === "decide_first") {
        title = `⚔️ ${state.t("game1Striking")}: ${state.t("rpsTitle")}`;
        subtitle = state.t("rpsSubtitle");
        actionsHtml = `
          <button class="btn-sm btn-primary" id="btnOpenRps">
            <span>✊✋✌️</span> ${state.t("playRps")}
          </button>
          <button class="btn-sm" id="btnQuickP1">
            <span style="color:#ef4444;">●</span> ${p1Name} Strikes 1st
          </button>
          <button class="btn-sm" id="btnQuickP2">
            <span style="color:#3b82f6;">●</span> ${p2Name} Strikes 1st
          </button>
        `;
      } else if (match.phase === "game1_striking") {
        if (match.game1Step === 0) {
          title = `🛡️ ${state.t("strikeInstruction1", { player: pAName, banned: 0, needed: 1 })}`;
          subtitle = `Click 1 Starter stage to ban it.`;
        } else if (match.game1Step === 1) {
          const bannedCount = match.currentStrikes.length - 1;
          title = `🛡️ ${state.t("strikeInstruction2", { player: pBName, banned: bannedCount, needed: 2 })}`;
          subtitle = `Click 2 Starter stages to ban them. (${bannedCount}/2 banned)`;
        } else if (match.game1Step === 2) {
          title = `✨ ${state.t("pickInstruction", { player: pAName })}`;
          subtitle = `Click the stage to play Game 1 on!`;
        }

        actionsHtml = `
          <button class="btn-sm" id="btnUndoStrike" ${state.canUndo() ? "" : "disabled"}>
            <span>↩️</span> ${state.t("undoStrike")}
          </button>
          <button class="btn-sm" id="btnResetCurrentGame">
            <span>🔄</span> ${state.t("resetGame")}
          </button>
        `;
      } else if (match.phase === "game_in_progress") {
        const stageName = state.getStageName(match.selectedStageId);
        this.turnBanner.classList.add("stage-chosen");
        title = `🎮 ${state.t("currentlyPlaying", { stage: stageName })}`;
        subtitle = `${state.t("whoWonGame", { game: match.currentGame })}`;
        actionsHtml = `
          <button class="btn-sm btn-primary" id="btnP1Win">
            🏆 ${state.t("p1WinsGame", { player: p1Name })}
          </button>
          <button class="btn-sm" id="btnP2Win" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
            🏆 ${state.t("p2WinsGame", { player: p2Name })}
          </button>
          <button class="btn-sm" id="btnUndoPick">
            <span>↩️</span> Undo
          </button>
        `;
      } else if (match.phase === "counterpick_bans") {
        const winnerName = match.lastGameWinner === "p1" ? p1Name : p2Name;
        const reqBans = state.getRequiredBansCount();
        const currentBans = match.winnerBans.length;
        title = `🚫 ${state.t("winnerBanInstruction", { player: winnerName, count: reqBans, banned: currentBans })}`;
        subtitle = `Click stages from Starters or Counterpicks to ban them. (${currentBans}/${reqBans})`;
        actionsHtml = `
          <button class="btn-sm" id="btnUndoStrike" ${state.canUndo() ? "" : "disabled"}>
            <span>↩️</span> ${state.t("undoStrike")}
          </button>
          <button class="btn-sm" id="btnResetCurrentGame">
            <span>🔄</span> ${state.t("resetGame")}
          </button>
        `;
      } else if (match.phase === "counterpick_pick") {
        const loserName = match.lastGameLoser === "p1" ? p1Name : p2Name;
        title = `✨ ${state.t("loserPickInstruction", { player: loserName })}`;
        subtitle = `Select any unbanned stage to play Game ${match.currentGame}!`;
        actionsHtml = `
          <button class="btn-sm" id="btnUndoStrike">
            <span>↩️</span> ${state.t("undoStrike")}
          </button>
          <button class="btn-sm" id="btnResetCurrentGame">
            <span>🔄</span> ${state.t("resetGame")}
          </button>
        `;
      } else if (match.phase === "set_complete") {
        const setWinnerName = match.setWinner === "p1" ? p1Name : p2Name;
        const scoreStr = `${match.score.p1} - ${match.score.p2}`;
        this.turnBanner.classList.add("stage-chosen");
        title = `🏆 ${state.t("setWinner")}`;
        subtitle = state.t("setWinnerDesc", {
          player: setWinnerName,
          score: scoreStr,
        });
        actionsHtml = `
          <button class="btn-sm btn-primary" id="btnRestartMatch">
            ${state.t("newMatch")}
          </button>
        `;
      }

      this.turnBannerTitle.innerHTML = title;
      this.turnBannerSubtitle.innerHTML = subtitle;
      this.turnBannerActions.innerHTML = actionsHtml;

      const btnOpenRps = document.getElementById("btnOpenRps");
      if (btnOpenRps) btnOpenRps.onclick = () => this.openRpsModal();

      const btnQuickP1 = document.getElementById("btnQuickP1");
      if (btnQuickP1)
        btnQuickP1.onclick = () => {
          sound.playClick();
          state.setFirstStriker("p1");
        };

      const btnQuickP2 = document.getElementById("btnQuickP2");
      if (btnQuickP2)
        btnQuickP2.onclick = () => {
          sound.playClick();
          state.setFirstStriker("p2");
        };

      const btnUndoStrike = document.getElementById("btnUndoStrike");
      if (btnUndoStrike)
        btnUndoStrike.onclick = () => {
          sound.playClick();
          state.undo();
        };

      const btnUndoPick = document.getElementById("btnUndoPick");
      if (btnUndoPick)
        btnUndoPick.onclick = () => {
          sound.playClick();
          state.undo();
        };

      const btnResetCurrentGame = document.getElementById(
        "btnResetCurrentGame",
      );
      if (btnResetCurrentGame)
        btnResetCurrentGame.onclick = () => {
          sound.playClick();
          state.resetCurrentGame();
        };

      const btnP1Win = document.getElementById("btnP1Win");
      if (btnP1Win)
        btnP1Win.onclick = () => {
          sound.playConfirm();
          state.recordGameWinner("p1");
        };

      const btnP2Win = document.getElementById("btnP2Win");
      if (btnP2Win)
        btnP2Win.onclick = () => {
          sound.playConfirm();
          state.recordGameWinner("p2");
        };

      const btnRestartMatch = document.getElementById("btnRestartMatch");
      if (btnRestartMatch)
        btnRestartMatch.onclick = () => {
          sound.playClick();
          state.resetMatch();
        };
    }

    renderStageGrids() {
      const rules = state.activeRuleset;

      this.starterCountBadge.textContent = rules.starters.length;
      this.counterpickCountBadge.textContent = rules.counterpicks.length;

      this.startersGrid.innerHTML = rules.starters
        .map((stageId) => {
          return this.renderStageCard(stageId, "starter");
        })
        .join("");

      this.counterpicksGrid.innerHTML = rules.counterpicks
        .map((stageId) => {
          return this.renderStageCard(stageId, "counterpick");
        })
        .join("");

      document.querySelectorAll(".stage-card").forEach((card) => {
        card.addEventListener("click", () => {
          const stageId = card.dataset.stageId;
          this.handleStageCardClick(stageId);
        });
      });
    }

    renderStageCard(stageId, category) {
      const stage = STAGE_MAP[stageId];
      if (!stage) return "";

      const match = state.match;
      const stageName = state.getStageName(stageId);

      let isStruck = false;
      let isSelected = match.selectedStageId === stageId;
      let isDsrLocked = false;
      let isLocked = false;
      let isSelectable = false;

      if (match.phase === "game1_striking") {
        if (category === "counterpick") {
          isLocked = true;
        } else {
          if (match.currentStrikes.includes(stageId)) {
            isStruck = true;
          } else {
            isSelectable = true;
          }
        }
      } else if (match.phase === "decide_first") {
        isLocked = true;
      } else if (match.phase === "game_in_progress") {
        if (!isSelected) isLocked = true;
      } else if (match.phase === "counterpick_bans") {
        const dsrStages = state.getDsrLockedStages();
        if (dsrStages.includes(stageId)) {
          isDsrLocked = true;
          isLocked = true;
        } else if (match.winnerBans.includes(stageId)) {
          isStruck = true;
        } else {
          isSelectable = true;
        }
      } else if (match.phase === "counterpick_pick") {
        const dsrStages = state.getDsrLockedStages();
        if (dsrStages.includes(stageId)) {
          isDsrLocked = true;
          isLocked = true;
        } else if (match.winnerBans.includes(stageId)) {
          isStruck = true;
        } else {
          isSelectable = true;
        }
      }

      const cardClasses = [
        "stage-card",
        isStruck ? "stage-struck" : "",
        isSelected ? "stage-selected" : "",
        isDsrLocked ? "stage-dsr-locked" : "",
        isLocked ? "stage-locked" : "",
        isSelectable ? "stage-selectable" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <div class="${cardClasses}" data-stage-id="${stage.id}">
          <div class="stage-img-wrap">
            <div class="stage-badge-overlay">
              <span class="badge ${category === "starter" ? "badge-blue" : "badge-gold"}">
                ${category === "starter" ? state.t("starterLabel") : state.t("counterpickLabel")}
              </span>
              ${isDsrLocked ? `<span class="badge badge-red">DSR</span>` : ""}
              ${isStruck ? `<span class="badge badge-red">BANNED</span>` : ""}
            </div>
            <img src="assets/stages/${stage.id}.png" alt="${stageName}" class="stage-img" loading="lazy" />
          </div>
          <div class="stage-card-body">
            <div class="stage-name-row">
              <span class="stage-name">${stageName}</span>
              <span class="stage-short-tag">${stage.shortNames[state.language] || stage.shortNames.en}</span>
            </div>
            <p class="stage-desc">${stage.description[state.language] || stage.description.en}</p>
            <div class="stage-meta">
              <span>📐 ${stage.platformLayout}</span>
              <span>Ceiling: ${stage.blastzones.ceiling}</span>
            </div>
          </div>
        </div>
      `;
    }

    handleStageCardClick(stageId) {
      const match = state.match;

      if (match.phase === "game1_striking") {
        if (match.currentStrikes.includes(stageId)) return;
        if (match.game1Step === 2) {
          sound.playConfirm();
        } else {
          sound.playStrike();
        }
        state.strikeGame1Stage(stageId);
        return;
      }

      if (match.phase === "counterpick_bans") {
        sound.playStrike();
        state.handleCounterpickStageClick(stageId);
        return;
      }

      if (match.phase === "counterpick_pick") {
        sound.playConfirm();
        state.handleCounterpickStageClick(stageId);
        return;
      }
    }

    openRpsModal() {
      this.rpsP1Hand = null;
      this.rpsP2Hand = null;
      this.rpsWinner = null;
      this.rpsP1Label.textContent = state.match.p1Name;
      this.rpsP2Label.textContent = state.match.p2Name;
      this.rpsP1HandEl.textContent = "❓";
      this.rpsP2HandEl.textContent = "❓";
      this.rpsStatusMessage.textContent =
        "Select a hand for Player 1 and Player 2";
      this.btnConfirmStriker.style.display = "none";

      document
        .querySelectorAll(".rps-btn")
        .forEach((b) => b.classList.remove("active-hand"));
      this.rpsModal.classList.add("active");
    }

    handleRpsHandPick(player, hand) {
      const emojiMap = { rock: "✊", paper: "✋", scissors: "✌️" };

      if (player === "p1") {
        this.rpsP1Hand = hand;
        this.rpsP1HandEl.textContent = emojiMap[hand];
        document.querySelectorAll('.rps-btn[data-player="p1"]').forEach((b) => {
          b.classList.toggle("active-hand", b.dataset.hand === hand);
        });
      } else {
        this.rpsP2Hand = hand;
        this.rpsP2HandEl.textContent = emojiMap[hand];
        document.querySelectorAll('.rps-btn[data-player="p2"]').forEach((b) => {
          b.classList.toggle("active-hand", b.dataset.hand === hand);
        });
      }

      if (this.rpsP1Hand && this.rpsP2Hand) {
        this.evaluateRps();
      }
    }

    evaluateRps() {
      sound.playRpsRoll();
      const h1 = this.rpsP1Hand;
      const h2 = this.rpsP2Hand;
      const p1Name = state.match.p1Name;
      const p2Name = state.match.p2Name;

      if (h1 === h2) {
        this.rpsWinner = null;
        this.rpsStatusMessage.textContent = state.t("rpsTie");
        this.btnConfirmStriker.style.display = "none";
        return;
      }

      const p1Wins =
        (h1 === "rock" && h2 === "scissors") ||
        (h1 === "scissors" && h2 === "paper") ||
        (h1 === "paper" && h2 === "rock");

      if (p1Wins) {
        this.rpsWinner = "p1";
        this.rpsStatusMessage.textContent = `🎉 ${state.t("rpsP1Won")} (${p1Name})`;
      } else {
        this.rpsWinner = "p2";
        this.rpsStatusMessage.textContent = `🎉 ${state.t("rpsP2Won")} (${p2Name})`;
      }

      this.btnConfirmStriker.style.display = "inline-flex";
    }

    startStrikingWithWinner(winner) {
      this.rpsModal.classList.remove("active");
      state.setFirstStriker(winner);
    }

    showVictoryModal() {
      sound.playVictory();
      const match = state.match;
      const winnerName = match.setWinner === "p1" ? match.p1Name : match.p2Name;
      const scoreStr = `${match.score.p1} - ${match.score.p2}`;
      this.victorySubtitle.textContent = state.t("setWinnerDesc", {
        player: winnerName,
        score: scoreStr,
      });

      this.setMatchHistory.innerHTML = match.gameHistory
        .map((g) => {
          const stage = STAGE_MAP[g.stageId];
          const stageName = stage
            ? stage.names[state.language] || stage.names.en
            : g.stageId;
          const wName = g.winner === "p1" ? match.p1Name : match.p2Name;
          return `
          <div class="history-item">
            <span>Game ${g.game}: <strong>${stageName}</strong></span>
            <span style="color: ${g.winner === "p1" ? "#ef4444" : "#3b82f6"}; font-weight: 800;">Winner: ${wName}</span>
          </div>
        `;
        })
        .join("");

      this.victoryModal.classList.add("active");
    }

    populateEditorFields() {
      const rules = state.activeRuleset;
      this.editStocks.value = rules.stocks;
      this.editTime.value = rules.timeMinutes;
      this.editHazards.value = rules.hazards ? "true" : "false";
      this.editBo3Bans.value = rules.bansBo3;
      this.editBo5Bans.value =
        rules.bansBo5 !== undefined ? rules.bansBo5 : rules.bansBo3;
      this.editDsrRule.value = rules.dsrRule;

      this.editorStagesList.innerHTML = STAGES.map((stage) => {
        const isStarter = rules.starters.includes(stage.id);
        const isCounterpick = rules.counterpicks.includes(stage.id);
        const isInactive = !isStarter && !isCounterpick;
        const stageName = stage.names[state.language] || stage.names.en;

        return `
          <div class="custom-stage-row">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 58px; height: 36px; border-radius: 4px; overflow: hidden; border: 1px solid var(--border-color); flex-shrink: 0;">
                <img src="assets/stages/${stage.id}.png" alt="${stageName}" style="width: 100%; height: 100%; object-fit: cover;" />
              </div>
              <div>
                <div style="font-weight: 800; font-size: 0.95rem;">${stageName}</div>
                <div style="font-size: 0.75rem; color: var(--text-dim);">${stage.platformLayout}</div>
              </div>
            </div>
            <div class="stage-toggle-pills" data-stage-id="${stage.id}">
              <button class="stage-toggle-btn ${isStarter ? "active-starter" : ""}" data-type="starter">
                ${state.t("starterLabel")}
              </button>
              <button class="stage-toggle-btn ${isCounterpick ? "active-counterpick" : ""}" data-type="counterpick">
                ${state.t("counterpickLabel")}
              </button>
              <button class="stage-toggle-btn ${isInactive ? "active-inactive" : ""}" data-type="inactive">
                ${state.t("inactiveLabel")}
              </button>
            </div>
          </div>
        `;
      }).join("");

      this.editorStagesList
        .querySelectorAll(".stage-toggle-btn")
        .forEach((btn) => {
          btn.addEventListener("click", () => {
            sound.playClick();
            const parent = btn.closest(".stage-toggle-pills");
            const newType = btn.dataset.type;

            parent.querySelectorAll(".stage-toggle-btn").forEach((b) => {
              b.className = "stage-toggle-btn";
            });

            if (newType === "starter") btn.classList.add("active-starter");
            if (newType === "counterpick")
              btn.classList.add("active-counterpick");
            if (newType === "inactive") btn.classList.add("active-inactive");
          });
        });
    }

    saveEditorRuleset() {
      const starters = [];
      const counterpicks = [];

      this.editorStagesList
        .querySelectorAll(".stage-toggle-pills")
        .forEach((pills) => {
          const stageId = pills.dataset.stageId;
          if (pills.querySelector(".active-starter")) starters.push(stageId);
          if (pills.querySelector(".active-counterpick"))
            counterpicks.push(stageId);
        });

      if (starters.length === 0) {
        alert("Please select at least 1 starter stage.");
        return;
      }

      const customRuleset = {
        names: {
          en: "Custom Ruleset",
          ja: "カスタムルール",
          fr: "Règles Personnalisées",
        },
        flag: "🛠️",
        regionCode: "CUSTOM",
        stocks: parseInt(this.editStocks.value) || 3,
        timeMinutes: parseInt(this.editTime.value) || 7,
        hazards: this.editHazards.value === "true",
        bansBo3: parseInt(this.editBo3Bans.value) || 3,
        bansBo5: parseInt(this.editBo5Bans.value) || 3,
        dsrRule: this.editDsrRule.value,
        strikePattern: [1, 2, 1],
        starters,
        counterpicks,
      };

      state.saveCustomRuleset(customRuleset);
      alert("Custom ruleset saved and activated!");
      this.switchTab("arena");
    }

    exportRulesetJson() {
      const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(state.activeRuleset, null, 2));
      const dlAnchorElem = document.createElement("a");
      dlAnchorElem.setAttribute("href", dataStr);
      dlAnchorElem.setAttribute(
        "download",
        `smash_ruleset_${state.activeRuleset.id || "custom"}.json`,
      );
      dlAnchorElem.click();
    }

    importRulesetJson(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (imported.starters && Array.isArray(imported.starters)) {
            state.saveCustomRuleset(imported);
            alert("Ruleset imported successfully!");
            this.switchTab("arena");
          } else {
            alert("Invalid ruleset JSON file.");
          }
        } catch (err) {
          alert("Error parsing JSON: " + err.message);
        }
      };
      reader.readAsText(file);
    }

    renderInfographic() {
      const rules = state.activeRuleset;
      const lang = state.language;

      const title = rules.names
        ? rules.names[lang] || rules.names.en
        : "Smash Ultimate Ruleset";
      this.infoSheetTitle.textContent = `${rules.flag || "⚔️"} ${title}`;

      this.infoBanner.className = "infographic-header";
      if (rules.id === "japan") this.infoBanner.classList.add("region-japan");
      else if (rules.id === "na_riptide")
        this.infoBanner.classList.add("region-riptide");
      else if (rules.id === "europe_france")
        this.infoBanner.classList.add("region-france");

      this.infoSpecsBar.innerHTML = `
        <div class="sheet-spec-item">🛡️ ${rules.stocks} ${state.t("stocks")}</div>
        <div class="sheet-spec-item">⏱️ ${rules.timeMinutes} ${state.t("time")}</div>
        <div class="sheet-spec-item">${rules.hazards ? state.t("hazardsOn") : state.t("hazardsOff")}</div>
        <div class="sheet-spec-item">❌ ${rules.bansBo3} Bans (Bo3) / ${rules.bansBo5 !== undefined ? rules.bansBo5 : rules.bansBo3} (Bo5)</div>
        <div class="sheet-spec-item">⚖️ ${this.getDsrBadgeText(rules.dsrRule)}</div>
      `;

      this.infoStartersGrid.innerHTML = rules.starters
        .map((stageId) => {
          const stage = STAGE_MAP[stageId];
          if (!stage) return "";
          return `
          <div class="sheet-stage-card">
            <div class="sheet-stage-img-wrap">
              <img src="assets/stages/${stage.id}.png" alt="${stage.names[lang] || stage.names.en}" class="sheet-stage-img" loading="lazy" />
            </div>
            <div class="sheet-stage-name">${stage.names[lang] || stage.names.en}</div>
          </div>
        `;
        })
        .join("");

      this.infoCounterpicksGrid.innerHTML = rules.counterpicks
        .map((stageId) => {
          const stage = STAGE_MAP[stageId];
          if (!stage) return "";
          return `
          <div class="sheet-stage-card">
            <div class="sheet-stage-img-wrap">
              <img src="assets/stages/${stage.id}.png" alt="${stage.names[lang] || stage.names.en}" class="sheet-stage-img" loading="lazy" />
            </div>
            <div class="sheet-stage-name">${stage.names[lang] || stage.names.en}</div>
          </div>
        `;
        })
        .join("");

      this.procG2_1Text.textContent = state.t("procG2_1", {
        bans: rules.bansBo3,
      });
    }
  }

  // Auto-initialize
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", () => {
      window.smashApp = new SmashApp();
    });
  } else {
    window.smashApp = new SmashApp();
  }
})();
