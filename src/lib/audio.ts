import { KEYS, SONG, type KidVoice, type TrackId, type VoiceId } from "@/data/catalog";

type Osc = OscillatorType;

class Studio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private noise: AudioBuffer | null = null;
  private player: HTMLAudioElement | null = null;
  private song: HTMLAudioElement | null = null;
  private songBack = 0;
  private trackId: TrackId = "fiesta";
  private timer = 0;
  private next = 0;
  private index = 0;
  private musicOn = false;
  muted = false;
  private voiceStop: (() => void) | null = null;
  private voiceTimer = 0;
  private songWasPlaying = false;
  private readonly songVol = 0.72;

  unlock() {
    const ctx = this.ensure();
    if (ctx.state === "suspended") void ctx.resume();
  }

  setMuted(muted: boolean) {
    this.muted = muted;
    if (this.master) this.master.gain.value = muted ? 0 : 1;
    if (this.song) this.song.volume = muted ? 0 : this.songVol;
  }

  setMusic(on: boolean) {
    this.musicOn = on;
    this.unlock();
    const song = this.songTrack();
    if (!on) {
      song.pause();
      window.clearTimeout(this.timer);
      this.timer = 0;
      return;
    }
    song.volume = this.muted ? 0 : this.songVol;
    song.currentTime = 0;
    void song.play().catch(() => {
      const ctx = this.ensure();
      void ctx.resume().then(() => {
        if (!this.musicOn || !this.ctx) return;
        if (!this.timer) this.loopMusic();
        this.intro();
      });
    });
  }

  setTrack(id: TrackId) {
    this.trackId = id;
    if (this.song) {
      this.song.pause();
      this.song = null;
    }
    if (this.musicOn) this.setMusic(true);
  }

  private songTrack() {
    if (this.song) return this.song;
    const file = this.trackId === "saltitos" ? "/sounds/saltitos.mp3" : "/sounds/fiesta.mp3";
    const song = new Audio(file);
    song.loop = true;
    song.preload = "auto";
    this.song = song;
    return song;
  }

  private loopMusic() {
    if (!this.ctx || !this.musicOn) return;
    this.next = this.ctx.currentTime + 0.08;
    const loop = () => {
      if (!this.musicOn || !this.ctx) {
        this.timer = 0;
        return;
      }
      const horizon = this.ctx.currentTime + 0.5;
      while (this.next < horizon) {
        const key = KEYS[SONG[this.index] ?? 0];
        if (key) this.piano(key.freq, this.next, 1.05, 0.42);
        this.index = (this.index + 1) % SONG.length;
        this.next += 0.52;
      }
      this.timer = window.setTimeout(loop, 160);
    };
    loop();
  }

  private intro() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [0, 2, 4, 7].forEach((step, i) => {
      const key = KEYS[step];
      if (key) this.piano(key.freq, t + i * 0.16, 0.55, 0.5);
    });
  }

  talk(url: string, voice: VoiceId, say: string, kid: KidVoice) {
    this.unlock();
    this.stopVoice();
    const song = this.song;
    this.songWasPlaying = Boolean(song && this.musicOn && !song.paused);
    if (song && !song.paused) song.pause();
    const ctx = this.ensure();
    const player = new Audio(url);
    player.preload = "auto";
    player.volume = 1;
    this.player = player;
    try {
      const node = ctx.createMediaElementSource(player);
      const gain = ctx.createGain();
      gain.gain.value = 2.8;
      node.connect(gain);
      gain.connect(this.sfxGain ?? ctx.destination);
    } catch {
      /* the element still plays on its own output */
    }
    let heard = false;
    player.addEventListener("playing", () => {
      heard = true;
    });
    player.onended = () => this.resumeSong();
    this.voiceStop = () => {
      player.onended = null;
      player.pause();
    };
    const fallback = () => {
      if (heard) return;
      heard = true;
      player.pause();
      this.speak(say, kid);
      this.animal(voice);
      this.resumeSong();
    };
    void ctx.resume().then(() => player.play()).catch(fallback);
    this.voiceTimer = window.setTimeout(fallback, 1200);
  }

  private stopVoice() {
    window.clearTimeout(this.voiceTimer);
    this.voiceTimer = 0;
    if (this.voiceStop) {
      this.voiceStop();
      this.voiceStop = null;
    }
    window.speechSynthesis?.cancel();
  }

  private resumeSong() {
    if (!this.songWasPlaying || !this.musicOn || this.muted || !this.song) return;
    this.songWasPlaying = false;
    this.song.volume = this.songVol;
    void this.song.play().catch(() => undefined);
  }

  private speak(say: string, kid: KidVoice) {
    const synth = window.speechSynthesis;
    if (!synth) return;
    const utter = new SpeechSynthesisUtterance(say);
    utter.lang = "es-ES";
    utter.rate = kid === "bebe" ? 1.08 : 0.95;
    utter.pitch = kid === "nino" ? 1.25 : kid === "bebe" ? 1.85 : 1.62;
    const voices = synth.getVoices();
    const spanish = voices.filter((item) => item.lang.toLowerCase().startsWith("es"));
    const girl = spanish.find((item) => /female|mujer|elena|luc[ií]a|paulina|m[oó]nica|sof[ií]a|laura/i.test(item.name));
    const boy = spanish.find((item) => /male|jorge|diego|carlos|juan|pablo/i.test(item.name));
    const picked = kid === "nino" ? (boy ?? spanish[0]) : (girl ?? spanish[spanish.length - 1] ?? spanish[0]);
    if (picked) utter.voice = picked;
    synth.speak(utter);
  }

  private duckSong() {
    const song = this.song;
    if (!song || song.paused) return;
    window.clearTimeout(this.songBack);
    song.volume = this.muted ? 0 : 0.12;
    this.songBack = window.setTimeout(() => {
      if (this.song) this.song.volume = this.muted ? 0 : this.songVol;
    }, 2200);
  }

  blip() {
    const ctx = this.ensure();
    this.chirpTone(ctx, 620, 880, 0.09, 0.08);
  }

  bonk() {
    const ctx = this.ensure();
    this.glide(ctx, "triangle", 200, 90, 0.16, 0.12);
  }

  sparkle() {
    const ctx = this.ensure();
    const t = ctx.currentTime;
    this.piano(1174, t, 0.18, 0.05);
    this.piano(1568, t + 0.06, 0.2, 0.04);
  }

  fanfare() {
    const ctx = this.ensure();
    const t = ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
      this.piano(freq, t + i * 0.11, 0.42, 0.1);
    });
  }

  key(freq: number) {
    this.band("piano", freq);
  }

  band(kind: "piano" | "xilo" | "flauta" | "campana" | "ukelele", freq: number) {
    this.unlock();
    this.duckSong();
    const ctx = this.ensure();
    const t = ctx.currentTime;
    if (kind === "piano") this.bell(freq, t, 0.9, 0.3);
    else if (kind === "xilo") this.bell(freq * 2, t, 0.34, 0.34);
    else if (kind === "campana") this.bell(freq * 2, t, 1.6, 0.24);
    else if (kind === "flauta") this.flute(freq, t, 0.7, 0.22);
    else this.pluck(freq, t, 0.24);
  }

  strum(freqs: number[]) {
    this.unlock();
    this.duckSong();
    const ctx = this.ensure();
    freqs.forEach((freq, i) => this.pluck(freq, ctx.currentTime + i * 0.03, 0.22));
  }

  drum(pad: "bombo" | "caja" | "platillo" | "sonaja") {
    this.unlock();
    this.duckSong();
    const ctx = this.ensure();
    const t = ctx.currentTime;
    if (pad === "bombo") this.kick(t);
    else if (pad === "caja") {
      this.burst(t, 0.16, 0.5, 900);
      this.bell(180, t, 0.12, 0.12);
    } else if (pad === "platillo") this.burst(t, 0.32, 0.32, 5200);
    else this.burst(t, 0.09, 0.24, 2800);
  }

  private bell(freq: number, time: number, dur: number, peak: number) {
    const ctx = this.ctx;
    const dest = this.sfxGain;
    if (!ctx || !dest) return;
    [1, 2.01, 3.02, 4.16].forEach((partial, i) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq * partial;
      const gain = ctx.createGain();
      const amp = peak * ([1, 0.38, 0.14, 0.05][i] ?? 0);
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, amp), time + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + dur * (1 - i * 0.12));
      osc.connect(gain);
      gain.connect(dest);
      osc.start(time);
      osc.stop(time + dur + 0.02);
    });
  }

  private flute(freq: number, time: number, dur: number, peak: number) {
    const ctx = this.ctx;
    const dest = this.sfxGain;
    if (!ctx || !dest) return;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, time);
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 5.2;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = freq * 0.015;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    osc.connect(gain);
    gain.connect(dest);
    osc.start(time);
    lfo.start(time);
    osc.stop(time + dur + 0.02);
    lfo.stop(time + dur + 0.02);
  }

  private pluck(freq: number, time: number, peak: number) {
    this.bell(freq, time, 0.4, peak * 0.7);
    const ctx = this.ctx;
    const dest = this.sfxGain;
    if (!ctx || !dest) return;
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = freq;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(peak * 0.4, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.32);
    osc.connect(gain);
    gain.connect(dest);
    osc.start(time);
    osc.stop(time + 0.36);
  }

  private kick(time: number) {
    const ctx = this.ctx;
    const dest = this.sfxGain;
    if (!ctx || !dest) return;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(170, time);
    osc.frequency.exponentialRampToValueAtTime(46, time + 0.12);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.85, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.24);
    osc.connect(gain);
    gain.connect(dest);
    osc.start(time);
    osc.stop(time + 0.26);
  }

  private burst(time: number, dur: number, peak: number, hp: number) {
    const ctx = this.ctx;
    const dest = this.sfxGain;
    if (!ctx || !dest) return;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = hp;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(peak, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(dest);
    src.start(time);
    src.stop(time + dur + 0.02);
  }

  animal(voice: VoiceId) {
    this.unlock();
    this.duck();
    const ctx = this.ensure();
    const t = ctx.currentTime;
    const dest = this.sfxGain ?? ctx.destination;
    const noise = this.noiseBuffer(ctx);
    switch (voice) {
      case "roar":
        this.noiseSweep(ctx, dest, noise, t, 720, 140, 0.62, 0.55);
        this.glide(ctx, "triangle", 150, 70, 0.55, 0.16, t);
        break;
      case "honk":
        this.glide(ctx, "square", 280, 180, 0.18, 0.1, t);
        this.glide(ctx, "square", 240, 160, 0.2, 0.08, t + 0.16);
        break;
      case "bellow":
        this.glide(ctx, "sine", 130, 78, 0.7, 0.2, t);
        this.glide(ctx, "triangle", 196, 110, 0.7, 0.06, t);
        break;
      case "screech":
        this.glide(ctx, "sine", 980, 420, 0.28, 0.1, t);
        this.glide(ctx, "triangle", 1400, 700, 0.22, 0.04, t);
        break;
      case "trumpet":
        this.glide(ctx, "sawtooth", 220, 480, 0.18, 0.06, t);
        this.glide(ctx, "sine", 330, 620, 0.34, 0.1, t + 0.05);
        break;
      case "hoot":
        [340, 420, 300, 460].forEach((freq, i) => {
          this.blipAt(ctx, freq, t + i * 0.13, 0.12, 0.1);
        });
        break;
      case "chirp":
        [880, 1180, 990, 1320].forEach((freq, i) => {
          this.blipAt(ctx, freq, t + i * 0.09, 0.08, 0.07);
        });
        break;
      case "croak":
        this.glide(ctx, "square", 160, 110, 0.22, 0.1, t);
        this.glide(ctx, "square", 150, 100, 0.24, 0.08, t + 0.24);
        break;
      case "moo":
        this.glide(ctx, "sawtooth", 196, 120, 0.7, 0.07, t);
        this.glide(ctx, "sine", 196, 120, 0.75, 0.14, t);
        break;
      case "quack":
        this.noiseSweep(ctx, dest, noise, t, 900, 500, 0.12, 0.35);
        this.noiseSweep(ctx, dest, noise, t + 0.14, 980, 540, 0.12, 0.3);
        break;
      case "oink":
        this.glide(ctx, "square", 260, 180, 0.12, 0.08, t);
        this.glide(ctx, "triangle", 300, 190, 0.14, 0.08, t + 0.13);
        break;
      case "baa":
        this.glide(ctx, "sawtooth", 230, 180, 0.45, 0.06, t);
        this.glide(ctx, "sine", 340, 260, 0.45, 0.05, t);
        break;
      case "cluck":
        [520, 430, 610].forEach((freq, i) => this.blipAt(ctx, freq, t + i * 0.1, 0.07, 0.08));
        break;
      case "whistle":
        this.glide(ctx, "sine", 760, 1680, 0.28, 0.08, t);
        this.glide(ctx, "sine", 1500, 900, 0.32, 0.06, t + 0.22);
        break;
      case "soft":
        this.glide(ctx, "sine", 180, 140, 0.35, 0.1, t);
        this.glide(ctx, "triangle", 270, 200, 0.3, 0.04, t);
        break;
      case "whale":
        this.glide(ctx, "sine", 90, 48, 1.1, 0.16, t);
        this.glide(ctx, "sine", 180, 96, 1.1, 0.04, t);
        break;
      default:
        break;
    }
  }

  private ensure() {
    if (this.ctx) return this.ctx;
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) throw new Error("audio");
    const ctx = new Ctx();
    const master = ctx.createGain();
    master.gain.value = this.muted ? 0 : 1;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 18;
    comp.ratio.value = 5;
    comp.attack.value = 0.004;
    comp.release.value = 0.18;
    master.connect(comp);
    comp.connect(ctx.destination);
    const musicGain = ctx.createGain();
    musicGain.gain.value = 1;
    musicGain.connect(master);
    const sfxGain = ctx.createGain();
    sfxGain.gain.value = 1;
    sfxGain.connect(master);
    this.ctx = ctx;
    this.master = master;
    this.musicGain = musicGain;
    this.sfxGain = sfxGain;
    return ctx;
  }

  private noiseBuffer(ctx: AudioContext) {
    if (this.noise) return this.noise;
    const len = ctx.sampleRate;
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    this.noise = buffer;
    return buffer;
  }

  private duck() {
    const g = this.musicGain;
    const ctx = this.ctx;
    if (!g || !ctx) return;
    const now = ctx.currentTime;
    g.gain.cancelScheduledValues(now);
    g.gain.setValueAtTime(g.gain.value, now);
    g.gain.linearRampToValueAtTime(0.25, now + 0.03);
    g.gain.linearRampToValueAtTime(1, now + 0.7);
  }

  private piano(freq: number, time: number, dur: number, peak: number) {
    const ctx = this.ctx;
    const dest = this.musicGain;
    if (!ctx || !dest) return;
    const partials = [1, 2, 3, 4.02];
    const amps = [1, 0.32, 0.14, 0.06];
    partials.forEach((partial, i) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq * partial;
      const gain = ctx.createGain();
      const amp = peak * (amps[i] ?? 0);
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, amp), time + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
      osc.connect(gain);
      gain.connect(dest);
      osc.start(time);
      osc.stop(time + dur + 0.02);
    });
  }

  private glide(
    ctx: AudioContext,
    type: Osc,
    from: number,
    to: number,
    dur: number,
    peak: number,
    time = ctx.currentTime,
  ) {
    const dest = this.sfxGain;
    if (!dest) return;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(from, time);
    osc.frequency.exponentialRampToValueAtTime(Math.max(40, to), time + dur);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    osc.connect(gain);
    gain.connect(dest);
    osc.start(time);
    osc.stop(time + dur + 0.02);
  }

  private blipAt(ctx: AudioContext, freq: number, time: number, dur: number, peak: number) {
    const dest = this.sfxGain;
    if (!dest) return;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    osc.connect(gain);
    gain.connect(dest);
    osc.start(time);
    osc.stop(time + dur + 0.02);
  }

  private chirpTone(ctx: AudioContext, from: number, to: number, dur: number, peak: number) {
    this.glide(ctx, "sine", from, to, dur, peak);
  }

  private noiseSweep(
    ctx: AudioContext,
    dest: AudioNode,
    buffer: AudioBuffer,
    time: number,
    from: number,
    to: number,
    dur: number,
    peak: number,
  ) {
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = 0.8;
    filter.frequency.setValueAtTime(from, time);
    filter.frequency.exponentialRampToValueAtTime(Math.max(60, to), time + dur);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(dest);
    src.start(time);
    src.stop(time + dur + 0.02);
  }
}

let studio: Studio | null = null;

export function audio() {
  if (!studio) studio = new Studio();
  return studio;
}
