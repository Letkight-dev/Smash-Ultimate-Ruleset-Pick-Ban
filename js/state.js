// Match, Tournament, and Ruleset State Engine
import { REGIONAL_PRESETS } from './presets.js';
import { STAGE_MAP, STAGES } from './stages.js';
import { TRANSLATIONS } from './i18n.js';

class StateManager {
  constructor() {
    this.subscribers = [];
    this.historyStack = [];

    // Load or initialize Language
    const savedLang = localStorage.getItem('smash_language');
    this.language = ['en', 'ja', 'fr'].includes(savedLang) ? savedLang : 'en';

    // Active Ruleset
    const savedPresetId = localStorage.getItem('smash_active_preset') || 'japan';
    const savedCustom = localStorage.getItem('smash_custom_ruleset');
    
    if (savedPresetId === 'custom' && savedCustom) {
      try {
        this.activeRuleset = JSON.parse(savedCustom);
      } catch (e) {
        this.activeRuleset = JSON.parse(JSON.stringify(REGIONAL_PRESETS.japan));
      }
    } else {
      let presetKey = savedPresetId;
      if (presetKey === 'na_riptide' || presetKey === 'na_genesis') presetKey = 'na';
      if (presetKey === 'europe_france' || presetKey === 'eighthport') presetKey = 'eu';
      const preset = REGIONAL_PRESETS[presetKey] || REGIONAL_PRESETS.japan;
      this.activeRuleset = JSON.parse(JSON.stringify(preset));
    }

    // Match State
    this.match = {
      format: 'bo3', // 'bo3' | 'bo5'
      p1Name: 'Player 1',
      p2Name: 'Player 2',
      score: { p1: 0, p2: 0 },
      currentGame: 1,
      gameHistory: [], // { game: 1, stageId: 'battlefield', winner: 'p1' }
      
      // Phase: 'decide_first' | 'game1_striking' | 'game_in_progress' | 'winner_select' | 'counterpick_bans' | 'counterpick_pick' | 'set_complete'
      phase: 'decide_first',
      
      firstStriker: null, // 'p1' | 'p2'
      
      // Striking / Banning temporary state for current game
      currentStrikes: [], // array of stageIds struck in current game
      selectedStageId: null, // chosen stage
      
      // Game 1 striking step tracker: 0 = first ban (1), 1 = second ban (2), 2 = final pick
      game1Step: 0,
      
      // Game 2+ state
      lastGameWinner: null, // 'p1' | 'p2'
      lastGameLoser: null,
      winnerBans: [], // stageIds banned by winner
      
      setWinner: null
    };
  }

  subscribe(fn) {
    this.subscribers.push(fn);
    fn(this);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn);
    };
  }

  notify() {
    this.subscribers.forEach(fn => fn(this));
  }

  setLanguage(lang) {
    if (['en', 'ja', 'fr'].includes(lang)) {
      this.language = lang;
      localStorage.setItem('smash_language', lang);
      this.notify();
    }
  }

  t(key, vars = {}) {
    const dict = TRANSLATIONS[this.language] || TRANSLATIONS.en;
    let str = dict[key] || TRANSLATIONS.en[key] || key;
    Object.keys(vars).forEach(v => {
      str = str.replace(new RegExp(`\\{${v}\\}`, 'g'), vars[v]);
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
      this.activeRuleset = JSON.parse(JSON.stringify(REGIONAL_PRESETS[presetId]));
      localStorage.setItem('smash_active_preset', presetId);
      this.resetMatch();
    }
  }

  saveCustomRuleset(customObj) {
    this.activeRuleset = {
      ...customObj,
      id: 'custom'
    };
    localStorage.setItem('smash_active_preset', 'custom');
    localStorage.setItem('smash_custom_ruleset', JSON.stringify(this.activeRuleset));
    this.resetMatch();
  }

  // Record undo point
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

  // Update Player Tags or Format
  setPlayers(p1, p2) {
    this.match.p1Name = p1 || 'Player 1';
    this.match.p2Name = p2 || 'Player 2';
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
      this.match.firstStriker = this.match.firstStriker === 'p1' ? 'p2' : 'p1';
    }
    if (this.match.lastGameWinner) {
      this.match.lastGameWinner = this.match.lastGameWinner === 'p1' ? 'p2' : 'p1';
      this.match.lastGameLoser = this.match.lastGameLoser === 'p1' ? 'p2' : 'p1';
    }
    this.notify();
  }

  // Decider for Game 1 first striker
  setFirstStriker(player) {
    this.pushState();
    this.match.firstStriker = player;
    this.match.phase = 'game1_striking';
    this.match.game1Step = 0;
    this.match.currentStrikes = [];
    this.match.selectedStageId = null;
    this.notify();
  }

  // Game 1 1-2-1 Striking logic
  strikeGame1Stage(stageId) {
    const starters = this.activeRuleset.starters;
    if (!starters.includes(stageId)) return; // Only starters eligible in G1
    if (this.match.currentStrikes.includes(stageId)) return; // Already struck

    this.pushState();

    const pA = this.match.firstStriker;
    const pB = pA === 'p1' ? 'p2' : 'p1';

    // Step 0: P_A bans 1
    if (this.match.game1Step === 0) {
      this.match.currentStrikes.push(stageId);
      this.match.game1Step = 1; // move to P_B bans 2
    }
    // Step 1: P_B bans 2
    else if (this.match.game1Step === 1) {
      this.match.currentStrikes.push(stageId);
      // If P_B has now struck 2 stages (total struck 3 out of 5)
      if (this.match.currentStrikes.length >= 3) {
        this.match.game1Step = 2; // move to P_A picks
      }
    }
    // Step 2: P_A picks from remaining
    else if (this.match.game1Step === 2) {
      this.confirmStageSelection(stageId);
      return;
    }

    // Check if only 1 stage remains unbanned at any point
    const remaining = starters.filter(s => !this.match.currentStrikes.includes(s));
    if (remaining.length === 1 && this.match.game1Step === 2) {
      this.confirmStageSelection(remaining[0]);
      return;
    }

    this.notify();
  }

  confirmStageSelection(stageId) {
    this.match.selectedStageId = stageId;
    this.match.phase = 'game_in_progress';
    this.notify();
  }

  // Record who won the current game
  recordGameWinner(winner) {
    this.pushState();
    const loser = winner === 'p1' ? 'p2' : 'p1';
    this.match.score[winner]++;

    this.match.gameHistory.push({
      game: this.match.currentGame,
      stageId: this.match.selectedStageId,
      winner: winner,
      loser: loser
    });

    const targetWins = this.match.format === 'bo3' ? 2 : 3;
    if (this.match.score[winner] >= targetWins) {
      this.match.phase = 'set_complete';
      this.match.setWinner = winner;
      this.notify();
      return;
    }

    // Prepare Counterpick phase for next game
    this.match.currentGame++;
    this.match.lastGameWinner = winner;
    this.match.lastGameLoser = loser;
    this.match.currentStrikes = [];
    this.match.winnerBans = [];
    this.match.selectedStageId = null;
    this.match.phase = 'counterpick_bans';
    this.notify();
  }

  // Counterpick Ban phase
  getRequiredBansCount() {
    if (this.match.format === 'bo5' && this.activeRuleset.bansBo5 !== undefined) {
      return this.activeRuleset.bansBo5;
    }
    return this.activeRuleset.bansBo3 || 3;
  }

  // Stages locked by DSR for the loser
  getDsrLockedStages() {
    const loser = this.match.lastGameLoser;
    if (!loser || this.activeRuleset.dsrRule === 'no_dsr') {
      return [];
    }

    // Loser cannot pick a stage they already won on
    const gamesWonByLoser = this.match.gameHistory.filter(g => g.winner === loser);

    if (this.activeRuleset.dsrRule === 'mdsr') {
      // Only the most recent stage won on
      if (gamesWonByLoser.length > 0) {
        return [gamesWonByLoser[gamesWonByLoser.length - 1].stageId];
      }
      return [];
    }

    // Full DSR: all stages won by loser in this set
    return gamesWonByLoser.map(g => g.stageId);
  }

  // Handle stage click during Game 2+ Counterpick
  handleCounterpickStageClick(stageId) {
    const allLegalStages = [...this.activeRuleset.starters, ...this.activeRuleset.counterpicks];
    if (!allLegalStages.includes(stageId)) return;

    this.pushState();
    const requiredBans = this.getRequiredBansCount();

    // In Ban phase: Winner is banning
    if (this.match.phase === 'counterpick_bans') {
      const dsrStages = this.getDsrLockedStages();
      if (dsrStages.includes(stageId)) {
        // Already restricted by DSR
        return;
      }

      if (this.match.winnerBans.includes(stageId)) {
        // Toggle unban
        this.match.winnerBans = this.match.winnerBans.filter(id => id !== stageId);
      } else if (this.match.winnerBans.length < requiredBans) {
        this.match.winnerBans.push(stageId);
      }

      // If bans are complete, move to loser pick
      if (this.match.winnerBans.length >= requiredBans) {
        this.match.phase = 'counterpick_pick';
      }
      this.notify();
      return;
    }

    // In Pick phase: Loser is picking
    if (this.match.phase === 'counterpick_pick') {
      if (this.match.winnerBans.includes(stageId)) return; // Banned by winner
      if (this.getDsrLockedStages().includes(stageId)) return; // Locked by DSR

      this.confirmStageSelection(stageId);
    }
  }

  resetCurrentGame() {
    this.pushState();
    if (this.match.currentGame === 1) {
      this.match.phase = 'decide_first';
      this.match.firstStriker = null;
      this.match.currentStrikes = [];
      this.match.game1Step = 0;
      this.match.selectedStageId = null;
    } else {
      this.match.phase = 'counterpick_bans';
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
      phase: 'decide_first',
      firstStriker: null,
      currentStrikes: [],
      selectedStageId: null,
      game1Step: 0,
      lastGameWinner: null,
      lastGameLoser: null,
      winnerBans: [],
      setWinner: null
    };
    this.notify();
  }
}

export const state = new StateManager();
