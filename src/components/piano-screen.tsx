import { useEffect, useRef, useState } from "react";
import { KEYS, TRACKS, type TrackId } from "@/data/catalog";
import { audio } from "@/lib/audio";
import { useProgress } from "@/lib/progress";

type Phase = "idle" | "demo" | "input" | "ok" | "nope";
type Melodic = "piano" | "xilo" | "flauta" | "campana" | "ukelele";
type Instrument = Melodic | "tambor";

const INSTRUMENTS: { id: Instrument; label: string }[] = [
  { id: "piano", label: "Piano" },
  { id: "xilo", label: "Xilófono" },
  { id: "flauta", label: "Flauta" },
  { id: "campana", label: "Campanas" },
  { id: "ukelele", label: "Ukelele" },
  { id: "tambor", label: "Tambor" },
];

const CHORDS = [
  { id: "do", name: "Do", tone: "dino", freqs: [261.63, 329.63, 392] },
  { id: "fa", name: "Fa", tone: "water", freqs: [349.23, 440, 523.25] },
  { id: "sol", name: "Sol", tone: "sky", freqs: [392, 493.88, 587.33] },
  { id: "la", name: "La", tone: "grape", freqs: [440, 523.25, 659.25] },
];

const PADS = [
  { id: "bombo", name: "Bombo", tone: "dino" },
  { id: "caja", name: "Caja", tone: "sun" },
  { id: "platillo", name: "Platillo", tone: "sky" },
  { id: "sonaja", name: "Sonaja", tone: "leaf" },
] as const;

export function PianoScreen() {
  const musicOn = useProgress((s) => s.musicOn);
  const muted = useProgress((s) => s.muted);
  const setMusicOn = useProgress((s) => s.setMusicOn);
  const addNotes = useProgress((s) => s.addNotes);
  const touchInstrument = useProgress((s) => s.touchInstrument);
  const setSimon = useProgress((s) => s.setSimon);
  const [phase, setPhase] = useState<Phase>("idle");
  const [lit, setLit] = useState<number | null>(null);
  const [length, setLength] = useState(2);
  const [instrument, setInstrument] = useState<Instrument>("xilo");
  const [track, setTrack] = useState<TrackId>("fiesta");
  const seqRef = useRef<number[]>([]);
  const posRef = useRef(0);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => timers.current.forEach((id) => window.clearTimeout(id));
  }, []);

  function playIndex(index: number) {
    const key = KEYS[index];
    if (!key || instrument === "tambor" || instrument === "ukelele") return;
    setLit(index);
    audio().band(instrument, key.freq);
    touchInstrument(instrument);
    const off = window.setTimeout(() => setLit((current) => (current === index ? null : current)), 280);
    timers.current.push(off);
  }

  function playSequence(seq: number[]) {
    setPhase("demo");
    seq.forEach((index, step) => {
      const id = window.setTimeout(() => playIndex(index), 420 * (step + 1));
      timers.current.push(id);
    });
    const done = window.setTimeout(() => {
      posRef.current = 0;
      setPhase("input");
      setLit(null);
    }, 420 * (seq.length + 1));
    timers.current.push(done);
  }

  function begin(nextLength: number) {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
    const seq = Array.from({ length: nextLength }, () => Math.floor(Math.random() * KEYS.length));
    seqRef.current = seq;
    setLength(nextLength);
    playSequence(seq);
  }

  function press(index: number) {
    const key = KEYS[index];
    if (!key || instrument === "tambor" || instrument === "ukelele") return;
    if (phase !== "input") {
      playIndex(index);
      addNotes(1);
      return;
    }
    playIndex(index);
    addNotes(1);
    const expected = seqRef.current[posRef.current];
    if (index !== expected) {
      audio().bonk();
      setPhase("nope");
      return;
    }
    posRef.current += 1;
    if (posRef.current >= seqRef.current.length) {
      setSimon(seqRef.current.length);
      if (seqRef.current.length >= 4) {
        audio().fanfare();
        setPhase("ok");
        return;
      }
      window.setTimeout(() => begin(seqRef.current.length + 1), 500);
    }
  }

  function chooseTrack(id: TrackId) {
    setTrack(id);
    audio().setMuted(muted);
    audio().setTrack(id);
    audio().setMusic(!muted);
    setMusicOn(!muted);
  }

  const melodic = instrument !== "tambor" && instrument !== "ukelele";
  const message = !melodic
    ? "Toca el instrumento. La canción de fondo es de niños."
    : phase === "demo"
      ? "Escucha…"
      : phase === "input"
        ? `Tu turno · ${length} notas`
        : phase === "ok"
          ? "¡Canción completa!"
          : phase === "nope"
            ? "Casi. Prueba otra vez."
            : "Elige instrumento y toca.";

  return (
    <div className="screen piano-screen">
      <div className="stack">
        <section className="piano-card">
          <h2>La banda</h2>
          <p>{message}</p>
          <div className="tool-row">
            {TRACKS.map((item) => (
              <button
                key={item.id}
                type="button"
                className="kid-btn"
                aria-pressed={track === item.id}
                onClick={() => chooseTrack(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              className="kid-btn alt"
              onClick={() => {
                const next = !musicOn;
                setMusicOn(next);
                audio().setMuted(muted);
                audio().setMusic(next && !muted);
              }}
            >
              {musicOn ? "Parar" : "Canción"}
            </button>
            {melodic && (
              <button type="button" className="kid-btn alt" onClick={() => begin(phase === "ok" ? 4 : 2)}>
                {phase === "idle" ? "Repite" : "Otra vez"}
              </button>
            )}
          </div>
          <div className="tool-row">
            {INSTRUMENTS.map((item) => (
              <button
                key={item.id}
                type="button"
                className="chip chip-ink"
                aria-pressed={instrument === item.id}
                onClick={() => {
                  setInstrument(item.id);
                  setPhase("idle");
                  audio().blip();
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          {instrument === "tambor" ? (
            <div className="pads">
              {PADS.map((pad) => (
                <button
                  key={pad.id}
                  type="button"
                  className={`pad pad-${pad.tone}`}
                  onPointerDown={() => {
                    audio().drum(pad.id);
                    touchInstrument("tambor");
                    addNotes(1);
                  }}
                >
                  {pad.name}
                </button>
              ))}
            </div>
          ) : instrument === "ukelele" ? (
            <div className="pads">
              {CHORDS.map((chord) => (
                <button
                  key={chord.id}
                  type="button"
                  className={`pad pad-${chord.tone}`}
                  onPointerDown={() => {
                    audio().strum(chord.freqs);
                    touchInstrument("ukelele");
                    addNotes(1);
                  }}
                >
                  {chord.name}
                </button>
              ))}
            </div>
          ) : (
            <div className="piano">
              {KEYS.map((key, index) => (
                <button
                  key={key.id}
                  type="button"
                  className={lit === index ? `key key-${key.tone} lit` : `key key-${key.tone}`}
                  onPointerDown={() => press(index)}
                >
                  {key.name}
                </button>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
