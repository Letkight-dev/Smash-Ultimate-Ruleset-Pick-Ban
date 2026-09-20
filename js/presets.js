// Clean Regional Rulesets for Super Smash Bros. Ultimate: Japan, NA, EU, and Custom
export const REGIONAL_PRESETS = {
  japan: {
    id: 'japan',
    names: {
      en: 'Japan',
      ja: '日本',
      fr: 'Japon'
    },
    flag: '🇯🇵',
    regionCode: 'JP',
    stocks: 3,
    timeMinutes: 7,
    hazards: false,
    bansBo3: 2,
    bansBo5: 2,
    dsrRule: 'dsr', // Full DSR
    strikePattern: [1, 2, 1],
    starters: [
      'final_destination',
      'battlefield',
      'pokemon_stadium_2',
      'smashville',
      'small_battlefield'
    ],
    counterpicks: [
      'town_and_city',
      'hollow_bastion'
    ],
    notes: {
      en: 'Japan ruleset: 5 starters (including FD), 2 counterpicks, 2 bans, Full DSR.',
      ja: '日本公式ルール: スターター5面 (終点含む)、カウンター2面、2拒否、フルDSR。',
      fr: 'Règlement Japon : 5 starters (dont DF), 2 counterpicks, 2 bans, DSR stricte.'
    }
  },

  na: {
    id: 'na',
    names: {
      en: 'NA',
      ja: '北米',
      fr: 'NA'
    },
    flag: '🇺🇸',
    regionCode: 'NA',
    stocks: 3,
    timeMinutes: 7,
    hazards: false,
    bansBo3: 3,
    bansBo5: 3,
    dsrRule: 'no_dsr',
    strikePattern: [1, 2, 1],
    starters: [
      'battlefield',
      'small_battlefield',
      'pokemon_stadium_2',
      'smashville',
      'town_and_city'
    ],
    counterpicks: [
      'final_destination',
      'hollow_bastion',
      'kalos_pokemon_league'
    ],
    notes: {
      en: 'NA ruleset: 5 starters, 3 counterpicks, 3 bans, No DSR.',
      ja: '北米ルール: スターター5面、カウンター3面、3拒否、DSRなし。',
      fr: 'Règlement NA : 5 starters, 3 counterpicks, 3 bans, sans DSR.'
    }
  },

  eu: {
    id: 'eu',
    names: {
      en: 'EU',
      ja: '欧州',
      fr: 'EU'
    },
    flag: '🇪🇺',
    regionCode: 'EU',
    stocks: 3,
    timeMinutes: 7,
    hazards: false,
    bansBo3: 3,
    bansBo5: 3,
    dsrRule: 'dsr', // Full DSR
    strikePattern: [1, 2, 1],
    starters: [
      'battlefield',
      'small_battlefield',
      'final_destination',
      'pokemon_stadium_2',
      'smashville'
    ],
    counterpicks: [
      'town_and_city',
      'hollow_bastion',
      'kalos_pokemon_league',
      'yoshis_story'
    ],
    notes: {
      en: 'EU ruleset: 5 starters, 4 counterpicks, 3 bans, Full DSR.',
      ja: '欧州ルール: スターター5面、カウンター4面、3拒否、フルDSR。',
      fr: 'Règlement EU : 5 starters, 4 counterpicks, 3 bans, DSR stricte.'
    }
  }
};
