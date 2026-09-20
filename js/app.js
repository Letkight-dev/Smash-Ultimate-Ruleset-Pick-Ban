// Main Application Controller
import { state } from "./state.js";
import { sound } from "./audio.js";
import { STAGES, STAGE_MAP } from "./stages.js";
import { REGIONAL_PRESETS } from "./presets.js";

class SmashApp {
  constructor() {
    this.currentTab = "arena";
    this.rpsP1Hand = null;
    this.rpsP2Hand = null;
    this.rpsWinner = null;

    this.initElements();
    this.bindEvents();

    // Subscribe to state changes
    state.subscribe(() => {
      this.render();
    });
  }

  initElements() {
    // Nav tabs
    this.navTabBtns = document.querySelectorAll(".nav-tab-btn");
    this.views = {
      arena: document.getElementById("viewArena"),
      editor: document.getElementById("viewEditor"),
      infographic: document.getElementById("viewInfographic"),
    };

    // Header & Language
    this.langBtns = document.querySelectorAll(".lang-btn");
    this.btnAudioToggle = document.getElementById("btnAudioToggle");
    this.audioIcon = document.getElementById("audioIcon");
    this.audioLabel = document.getElementById("audioLabel");
    this.presetDropdown = document.getElementById("presetDropdown");
    this.presetBadges = document.getElementById("presetBadges");

    // Arena elements
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

    // RPS Modal elements
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

    // Victory Modal
    this.victoryModal = document.getElementById("victoryModal");
    this.victorySubtitle = document.getElementById("victorySubtitle");
    this.setMatchHistory = document.getElementById("setMatchHistory");
    this.btnNewMatchFromVictory = document.getElementById(
      "btnNewMatchFromVictory",
    );
    this.btnCloseVictory = document.getElementById("btnCloseVictory");

    // Editor elements
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

    // Infographic elements
    this.btnPrintSheet = document.getElementById("btnPrintSheet");
    this.infoBanner = document.getElementById("infoBanner");
    this.infoSheetTitle = document.getElementById("infoSheetTitle");
    this.infoSheetSubtitle = document.getElementById("infoSheetSubtitle");
    this.infoSpecsBar = document.getElementById("infoSpecsBar");
    this.infoStartersGrid = document.getElementById("infoStartersGrid");
    this.infoCounterpicksGrid = document.getElementById("infoCounterpicksGrid");
    this.procG2_1Text = document.getElementById("procG2_1Text");
  }

  bindEvents() {
    // Nav Tab Switching
    this.navTabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        sound.playClick();
        const tab = btn.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Language Switching
    this.langBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        sound.playClick();
        const lang = btn.dataset.lang;
        state.setLanguage(lang);
      });
    });

    // Audio Toggle
    this.btnAudioToggle.addEventListener("click", () => {
      const isEnabled = sound.toggle();
      this.updateAudioUi(isEnabled);
    });

    // Preset Dropdown
    this.presetDropdown.addEventListener("change", (e) => {
      sound.playClick();
      const val = e.target.value;
      if (val === "custom") {
        this.switchTab("editor");
      } else {
        state.setPreset(val);
      }
    });

    // Match format
    const setBo3 = () => {
      sound.playClick();
      state.setFormat("bo3");
    };
    const setBo5 = () => {
      sound.playClick();
      state.setFormat("bo5");
    };

    this.btnBo3.addEventListener("click", setBo3);
    this.btnBo5.addEventListener("click", setBo5);

    // Players name inputs
    this.p1NameInput.addEventListener("input", (e) => {
      state.setPlayers(e.target.value, state.match.p2Name);
    });
    this.p2NameInput.addEventListener("input", (e) => {
      state.setPlayers(state.match.p1Name, e.target.value);
    });

    // Swap sides & reset
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

    // RPS Hand buttons
    document.querySelectorAll(".rps-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        sound.playClick();
        const player = btn.dataset.player;
        const hand = btn.dataset.hand;
        this.handleRpsHandPick(player, hand);
      });
    });

    // Coin Flip
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

    // Direct First Striker Pick
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

    // Victory modal close
    this.btnCloseVictory.addEventListener("click", () => {
      this.victoryModal.classList.remove("active");
    });
    this.btnNewMatchFromVictory.addEventListener("click", () => {
      sound.playClick();
      this.victoryModal.classList.remove("active");
      state.resetMatch();
    });

    // Custom Ruleset Editor Save
    this.btnSaveCustom.addEventListener("click", () => {
      sound.playConfirm();
      this.saveEditorRuleset();
    });
    this.btnResetToPreset.addEventListener("click", () => {
      sound.playClick();
      state.setPreset("japan");
    });

    // Export & Import JSON
    this.btnExportJson.addEventListener("click", () => {
      this.exportRulesetJson();
    });
    this.btnImportJson.addEventListener("click", () => {
      this.fileImportInput.click();
    });
    this.fileImportInput.addEventListener("change", (e) => {
      this.importRulesetJson(e);
    });

    // Print Sheet
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
    // Update all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = state.t(key);
      if (text) {
        el.textContent = text;
      }
    });

    // Language button active state
    this.langBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === state.language);
    });

    // Update sound label
    this.updateAudioUi(sound.enabled);
  }

  renderPresetToolbar() {
    // Preset dropdown selection
    const activePreset = state.activeRuleset;
    if (activePreset.id && REGIONAL_PRESETS[activePreset.id]) {
      this.presetDropdown.value = activePreset.id;
    } else {
      this.presetDropdown.value = "custom";
    }

    const match = state.match;

    // Active bans based on Bo3 vs Bo5
    const activeBans =
      match.format === "bo5" && activePreset.bansBo5 !== undefined
        ? activePreset.bansBo5
        : activePreset.bansBo3;

    // Preset badges
    const badgesHtml = `
      <span class="badge badge-red">🛡️ ${activePreset.stocks} ${state.t("stocks")}</span>
      <span class="badge badge-blue">⏱️ ${activePreset.timeMinutes} ${state.t("time")}</span>
      <span class="badge ${activePreset.hazards ? "badge-red" : "badge-green"}">
        ${activePreset.hazards ? state.t("hazardsOn") : state.t("hazardsOff")}
      </span>
      <span class="badge badge-gold">❌ ${activeBans} ${state.t("bansCount")} (${match.format.toUpperCase()})</span>
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

    // Format buttons
    this.btnBo3.classList.toggle("active", match.format === "bo3");
    this.btnBo5.classList.toggle("active", match.format === "bo5");

    // Player inputs & scores
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

    // Turn Card glow
    const activePlayer = this.getActiveTurnPlayer();
    this.p1Card.classList.toggle("active-turn", activePlayer === "p1");
    this.p2Card.classList.toggle("active-turn", activePlayer === "p2");

    // Render Turn Action Banner
    this.renderTurnBanner();

    // Stage Grids
    this.renderStageGrids();

    // Character Order Bar (shown in counterpick phase)
    const isCounterpickPhase = [
      "counterpick_bans",
      "counterpick_pick",
    ].includes(match.phase);
    this.charOrderBar.style.display = isCounterpickPhase ? "flex" : "none";

    // Check Set Complete
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
    const rules = state.activeRuleset;
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

    // Phase: decide_first
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
    }
    // Phase: game1_striking
    else if (match.phase === "game1_striking") {
      if (match.game1Step === 0) {
        title = `🛡️ ${state.t("strikeInstruction1", { player: pAName, banned: 0, needed: 1 })}`;
        subtitle = `Click 1 Starter stage to ban it.`;
      } else if (match.game1Step === 1) {
        const bannedCount = match.currentStrikes.length - 1; // how many pB has banned so far
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
    }
    // Phase: game_in_progress
    else if (match.phase === "game_in_progress") {
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
    }
    // Phase: counterpick_bans
    else if (match.phase === "counterpick_bans") {
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
    }
    // Phase: counterpick_pick
    else if (match.phase === "counterpick_pick") {
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
    }
    // Phase: set_complete
    else if (match.phase === "set_complete") {
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

    // Attach dynamic button handlers
    const btnOpenRps = document.getElementById("btnOpenRps");
    if (btnOpenRps) {
      btnOpenRps.onclick = () => this.openRpsModal();
    }
    const btnQuickP1 = document.getElementById("btnQuickP1");
    if (btnQuickP1) {
      btnQuickP1.onclick = () => {
        sound.playClick();
        state.setFirstStriker("p1");
      };
    }
    const btnQuickP2 = document.getElementById("btnQuickP2");
    if (btnQuickP2) {
      btnQuickP2.onclick = () => {
        sound.playClick();
        state.setFirstStriker("p2");
      };
    }
    const btnUndoStrike = document.getElementById("btnUndoStrike");
    if (btnUndoStrike) {
      btnUndoStrike.onclick = () => {
        sound.playClick();
        state.undo();
      };
    }
    const btnUndoPick = document.getElementById("btnUndoPick");
    if (btnUndoPick) {
      btnUndoPick.onclick = () => {
        sound.playClick();
        state.undo();
      };
    }
    const btnResetCurrentGame = document.getElementById("btnResetCurrentGame");
    if (btnResetCurrentGame) {
      btnResetCurrentGame.onclick = () => {
        sound.playClick();
        state.resetCurrentGame();
      };
    }
    const btnP1Win = document.getElementById("btnP1Win");
    if (btnP1Win) {
      btnP1Win.onclick = () => {
        sound.playConfirm();
        state.recordGameWinner("p1");
      };
    }
    const btnP2Win = document.getElementById("btnP2Win");
    if (btnP2Win) {
      btnP2Win.onclick = () => {
        sound.playConfirm();
        state.recordGameWinner("p2");
      };
    }
    const btnRestartMatch = document.getElementById("btnRestartMatch");
    if (btnRestartMatch) {
      btnRestartMatch.onclick = () => {
        sound.playClick();
        state.resetMatch();
      };
    }
  }

  renderStageGrids() {
    const rules = state.activeRuleset;
    const match = state.match;

    // Badges count
    this.starterCountBadge.textContent = rules.starters.length;
    this.counterpickCountBadge.textContent = rules.counterpicks.length;

    // Render Starters
    this.startersGrid.innerHTML = rules.starters
      .map((stageId) => {
        return this.renderStageCard(stageId, "starter");
      })
      .join("");

    // Render Counterpicks
    this.counterpicksGrid.innerHTML = rules.counterpicks
      .map((stageId) => {
        return this.renderStageCard(stageId, "counterpick");
      })
      .join("");

    // Bind clicks to stage cards
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
    const altName =
      state.language !== "en" ? stage.names.en : stage.platformLayout;

    let isStruck = false;
    let isSelected = match.selectedStageId === stageId;
    let isDsrLocked = false;
    let isLocked = false;
    let isSelectable = false;

    // Game 1 striking state
    if (match.phase === "game1_striking") {
      if (category === "counterpick") {
        isLocked = true; // Counterpicks locked in Game 1
      } else {
        if (match.currentStrikes.includes(stageId)) {
          isStruck = true;
        } else {
          isSelectable = true;
        }
      }
    }
    // Game 1 decide first
    else if (match.phase === "decide_first") {
      isLocked = true;
    }
    // Game in progress
    else if (match.phase === "game_in_progress") {
      if (!isSelected) isLocked = true;
    }
    // Counterpick Bans (Winner banning)
    else if (match.phase === "counterpick_bans") {
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
    // Counterpick Pick (Loser picking)
    else if (match.phase === "counterpick_pick") {
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

    // Game 1 striking
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

    // Counterpick Bans
    if (match.phase === "counterpick_bans") {
      sound.playStrike();
      state.handleCounterpickStageClick(stageId);
      return;
    }

    // Counterpick Pick
    if (match.phase === "counterpick_pick") {
      sound.playConfirm();
      state.handleCounterpickStageClick(stageId);
      return;
    }
  }

  // Rock-Paper-Scissors Modal Logic
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

  // Ruleset Editor
  populateEditorFields() {
    const rules = state.activeRuleset;
    this.editStocks.value = rules.stocks;
    this.editTime.value = rules.timeMinutes;
    this.editHazards.value = rules.hazards ? "true" : "false";
    this.editBo3Bans.value = rules.bansBo3;
    this.editBo5Bans.value =
      rules.bansBo5 !== undefined ? rules.bansBo5 : rules.bansBo3;
    this.editDsrRule.value = rules.dsrRule;

    // Render Stage Pool
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

    // Toggle button handlers
    this.editorStagesList
      .querySelectorAll(".stage-toggle-btn")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          sound.playClick();
          const parent = btn.closest(".stage-toggle-pills");
          const stageId = parent.dataset.stageId;
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

  // Infographic Rendering
  renderInfographic() {
    const rules = state.activeRuleset;
    const lang = state.language;

    // Header title and color theme
    const title = rules.names
      ? rules.names[lang] || rules.names.en
      : "Smash Ultimate Ruleset";
    this.infoSheetTitle.textContent = `${rules.flag || "⚔️"} ${title}`;

    // Header gradient styling based on region
    this.infoBanner.className = "infographic-header";
    if (rules.id === "japan") this.infoBanner.classList.add("region-japan");
    else if (rules.id === "na") this.infoBanner.classList.add("region-riptide");
    else if (rules.id === "eu") this.infoBanner.classList.add("region-france");

    const match = state.match;
    const activeBans =
      match.format === "bo5" && rules.bansBo5 !== undefined
        ? rules.bansBo5
        : rules.bansBo3;

    // Specs Bar
    this.infoSpecsBar.innerHTML = `
      <div class="sheet-spec-item">🛡️ ${rules.stocks} ${state.t("stocks")}</div>
      <div class="sheet-spec-item">⏱️ ${rules.timeMinutes} ${state.t("time")}</div>
      <div class="sheet-spec-item">${rules.hazards ? state.t("hazardsOn") : state.t("hazardsOff")}</div>
      <div class="sheet-spec-item">❌ ${activeBans} Bans (${match.format.toUpperCase()})</div>
      <div class="sheet-spec-item">⚖️ ${this.getDsrBadgeText(rules.dsrRule)}</div>
    `;

    // Starters Grid
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

    // Counterpicks Grid
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

    // Dynamic G2_1 text with ban count
    this.procG2_1Text.textContent = state.t("procG2_1", { bans: activeBans });
  }
}

// Start app once DOM loads
window.addEventListener("DOMContentLoaded", () => {
  window.smashApp = new SmashApp();
});
