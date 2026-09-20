// Web Audio API Synthesizer for Smash Bros. Tournament Audio FX
class SoundFX {
  constructor() {
    this.audioCtx = null;
    this.enabled = localStorage.getItem('smash_sound_enabled') !== 'false';
  }

  init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('smash_sound_enabled', this.enabled ? 'true' : 'false');
    if (this.enabled) {
      this.playClick();
    }
    return this.enabled;
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sine';
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
    
    // Slash sound + low impact
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.13);

    // Noise burst
    const bufferSize = this.audioCtx.sampleRate * 0.06;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.audioCtx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = this.audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.2, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    noise.connect(noiseGain);
    noiseGain.connect(this.audioCtx.destination);
    noise.start(now);
  }

  playConfirm() {
    if (!this.enabled) return;
    this.init();
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    // Ascending arpeggio
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
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
      osc.type = 'square';
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
    const chord1 = [523.25, 659.25, 783.99]; // C major
    const chord2 = [587.33, 739.99, 880.00]; // D major
    const chord3 = [659.25, 830.61, 987.77]; // E major
    const chord4 = [1046.50, 1318.51, 1567.98]; // High C

    const playChord = (notes, time, duration) => {
      notes.forEach(f => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
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

export const sound = new SoundFX();
