import { useEffect, useRef, useState } from "react";
import { ChevronLeft, Music, Palette, PawPrint, Star, Trophy, Volume2, VolumeX } from "lucide-react";
import { AnimalPark } from "@/components/animal-park";
import { ColorStudio } from "@/components/color-studio";
import { PianoScreen } from "@/components/piano-screen";
import { RetosScreen } from "@/components/retos-screen";
import { CRAYONS } from "@/data/catalog";
import { audio } from "@/lib/audio";
import { retosOf, starsOf, useProgress, type Screen } from "@/lib/progress";

const ACTIONS: { id: Screen; label: string; tone: string; icon: typeof Palette }[] = [
  { id: "color", label: "Colorear", tone: "sky", icon: Palette },
  { id: "animals", label: "Animales", tone: "leaf", icon: PawPrint },
  { id: "retos", label: "Retos", tone: "grape", icon: Trophy },
  { id: "piano", label: "Música", tone: "dino", icon: Music },
];

export function RexApp() {
  const screen = useProgress((s) => s.screen);
  const go = useProgress((s) => s.go);
  const muted = useProgress((s) => s.muted);
  const musicOn = useProgress((s) => s.musicOn);
  const setMuted = useProgress((s) => s.setMuted);
  const setMusicOn = useProgress((s) => s.setMusicOn);
  const hydrated = useProgress((s) => s.hydrated);
  const setHydrated = useProgress((s) => s.setHydrated);
  const seenRetos = useProgress((s) => s.seenRetos);
  const seeReto = useProgress((s) => s.seeReto);
  const heard = useProgress((s) => s.heard);
  const coloredPages = useProgress((s) => s.coloredPages);
  const pageColors = useProgress((s) => s.pageColors);
  const notesPlayed = useProgress((s) => s.notesPlayed);
  const instruments = useProgress((s) => s.instruments);
  const simonBest = useProgress((s) => s.simonBest);
  const finds = useProgress((s) => s.finds);
  const pairs = useProgress((s) => s.pairs);
  const started = useRef(false);
  const queue = useRef<string[]>([]);
  const [banner, setBanner] = useState<string | null>(null);

  useEffect(() => {
    void Promise.resolve(useProgress.persist.rehydrate()).then(() => setHydrated(true));
  }, [setHydrated]);

  const snapshot = {
    muted,
    musicOn,
    heard,
    coloredPages,
    pageColors,
    paintings: {},
    notesPlayed,
    instruments,
    simonBest,
    finds,
    pairs,
    seenRetos,
  };
  const stars = starsOf(snapshot);
  const total = retosOf(snapshot).length;

  useEffect(() => {
    if (!hydrated) return;
    const fresh = retosOf(snapshot).filter((reto) => reto.value >= reto.goal && !seenRetos.includes(reto.id));
    if (!fresh.length) return;
    for (const reto of fresh) seeReto(reto.id);
    queue.current.push(...fresh.slice(1).map((reto) => reto.title));
    setBanner(fresh[0]?.title ?? null);
    audio().fanfare();
  }, [hydrated, heard, coloredPages, pageColors, notesPlayed, instruments, simonBest, finds, pairs, seenRetos, seeReto]);

  function closeBanner() {
    const next = queue.current.shift() ?? null;
    setBanner(next);
    if (next) audio().fanfare();
  }

  function wake() {
    const state = useProgress.getState();
    const studio = audio();
    studio.unlock();
    studio.setMuted(state.muted);
    if (!started.current && state.musicOn && !state.muted) {
      started.current = true;
      studio.setMusic(true);
    }
  }

  function open(next: Screen) {
    wake();
    audio().blip();
    go(next);
  }

  const title =
    screen === "color" ? "Colorear" : screen === "animals" ? "Animales" : screen === "retos" ? "Retos" : "Música";

  return (
    <main className={screen === "color" ? "app app-color" : "app"} onPointerDown={wake}>
      {screen === "home" ? (
        <section className="home">
          <img className="home-bg" src="/art/hero.jpg" alt="" />
          <div className="home-top">
            <div>
              <h1 className="logo">
                <span>Rexi</span>
                <span>landia</span>
              </h1>
              <p className="tagline">Colorea, escucha y juega</p>
            </div>
            <div className="home-tools">
              <button
                type="button"
                className="disc disc-md disc-cream"
                aria-label={musicOn ? "Parar música" : "Poner música"}
                onClick={() => {
                  const next = !musicOn;
                  setMusicOn(next);
                  audio().setMuted(muted);
                  audio().setMusic(next && !muted);
                  started.current = next && !muted;
                }}
              >
                <Music />
              </button>
              <button
                type="button"
                className="disc disc-md disc-cream"
                aria-label={muted ? "Activar sonido" : "Silencio"}
                onClick={() => {
                  const next = !muted;
                  setMuted(next);
                  audio().setMuted(next);
                  if (next) audio().setMusic(false);
                  else if (musicOn) {
                    audio().setMusic(true);
                    started.current = true;
                  }
                }}
              >
                {muted ? <VolumeX /> : <Volume2 />}
              </button>
            </div>
          </div>
          <div className="home-spacer" />
          <div className="home-actions">
            {ACTIONS.map((action) => {
              const Icon = action.icon;
              return (
                <button key={action.id} type="button" className="action" onClick={() => open(action.id)}>
                  <span className={`disc disc-lg disc-${action.tone}`}>
                    <Icon />
                  </span>
                  <span className="action-label">{action.label}</span>
                </button>
              );
            })}
          </div>
        </section>
      ) : (
        <>
          <header className="topbar">
            <button type="button" className="disc disc-md disc-cream" aria-label="Volver" onClick={() => open("home")}>
              <ChevronLeft />
            </button>
            <h1>{title}</h1>
            <span className="star-pill">
              <Star /> {stars}/{total}
            </span>
          </header>
          {screen === "color" && <ColorStudio />}
          {screen === "animals" && <AnimalPark />}
          {screen === "retos" && <RetosScreen />}
          {screen === "piano" && <PianoScreen />}
        </>
      )}
      {banner && (
        <div className="celebrate" onClick={closeBanner}>
          <div className="celebrate-card" onClick={(event) => event.stopPropagation()}>
            {CRAYONS.slice(0, 10).map((crayon, index) => (
              <i
                key={crayon.id}
                className="confetti"
                style={{
                  left: `${8 + index * 9}%`,
                  background: crayon.hex,
                  animationDelay: `${index * 0.04}s`,
                }}
              />
            ))}
            <img src="/art/animals/rex.jpg" alt="" />
            <h2>¡Reto listo!</h2>
            <p>{banner}</p>
            <button type="button" className="kid-btn" onClick={closeBanner}>
              ¡Genial!
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
