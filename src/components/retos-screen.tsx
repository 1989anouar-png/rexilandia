import { useMemo, useState } from "react";
import { ANIMALS } from "@/data/catalog";
import { audio } from "@/lib/audio";
import { retosOf, useProgress } from "@/lib/progress";

type Round = {
  correctId: string;
  options: string[];
};

type Card = { key: string; id: string; name: string; image: string };

function deal(): Card[] {
  const pick = [...ANIMALS].sort(() => Math.random() - 0.5).slice(0, 4);
  return [...pick, ...pick]
    .sort(() => Math.random() - 0.5)
    .map((animal, index) => ({
      key: `${animal.id}-${index}`,
      id: animal.id,
      name: animal.name,
      image: animal.image,
    }));
}

function makeRound(): Round {
  const correct = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  const others = ANIMALS.filter((animal) => animal.id !== correct?.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((animal) => animal.id);
  const options = correct ? [...others, correct.id].sort(() => Math.random() - 0.5) : others;
  return { correctId: correct?.id ?? "", options };
}

export function RetosScreen() {
  const progress = useProgress();
  const retos = useMemo(
    () =>
      retosOf({
        muted: progress.muted,
        musicOn: progress.musicOn,
        heard: progress.heard,
        coloredPages: progress.coloredPages,
        pageColors: progress.pageColors,
        paintings: progress.paintings,
        notesPlayed: progress.notesPlayed,
        instruments: progress.instruments,
        simonBest: progress.simonBest,
        finds: progress.finds,
        pairs: progress.pairs,
        seenRetos: progress.seenRetos,
      }),
    [progress],
  );
  const [round, setRound] = useState<Round>(() => makeRound());
  const [mark, setMark] = useState<string | null>(null);
  const [cards, setCards] = useState<Card[]>(() => deal());
  const [up, setUp] = useState<string[]>([]);
  const [known, setKnown] = useState<string[]>([]);
  const correct = ANIMALS.find((animal) => animal.id === round.correctId);

  function guess(id: string) {
    if (id === round.correctId) {
      setMark("good");
      audio().fanfare();
      progress.addFind();
      window.setTimeout(() => {
        setRound(makeRound());
        setMark(null);
      }, 650);
      return;
    }
    setMark(id);
    audio().bonk();
  }

  function flip(card: Card) {
    if (known.includes(card.id) || up.includes(card.key) || up.length === 2) return;
    const next = [...up, card.key];
    setUp(next);
    audio().blip();
    if (next.length < 2) return;
    const [first, second] = next.map((key) => cards.find((item) => item.key === key));
    if (first && second && first.id === second.id) {
      setKnown((current) => [...current, first.id]);
      setUp([]);
      progress.addPair();
      audio().sparkle();
      if (known.length + 1 >= 4) {
        window.setTimeout(() => {
          setCards(deal());
          setKnown([]);
          setUp([]);
        }, 700);
      }
      return;
    }
    window.setTimeout(() => setUp([]), 700);
  }

  return (
    <div className="screen">
      <div className="stack">
        <section className="find-card">
          <h2>Parejas</h2>
          <p>Da la vuelta a dos cartas iguales.</p>
          <div className="memory-grid">
            {cards.map((card) => {
              const open = up.includes(card.key) || known.includes(card.id);
              return (
                <button key={card.key} type="button" onClick={() => flip(card)} aria-label={open ? card.name : "Carta"}>
                  {open ? <img src={card.image} alt={card.name} /> : <span>?</span>}
                </button>
              );
            })}
          </div>
        </section>
        <section className="find-card">
          <h2>¿Dónde está {correct?.name}?</h2>
          <p>Toca al animal correcto. Si aciertas, suena una fanfarria.</p>
          <div className="find-options">
            {round.options.map((id) => {
              const animal = ANIMALS.find((item) => item.id === id);
              if (!animal) return null;
              const className =
                mark === "good" && id === round.correctId ? "good" : mark === id ? "bad" : "";
              return (
                <button key={id} type="button" className={className} onClick={() => guess(id)}>
                  <img src={animal.image} alt={animal.name} />
                </button>
              );
            })}
          </div>
        </section>
        {retos.map((reto) => {
          const done = reto.value >= reto.goal;
          return (
            <article key={reto.id} className={done ? "reto done" : "reto"}>
              <h2>
                {reto.title} {done ? "· listo" : ""}
              </h2>
              <p>{reto.detail}</p>
              <div className="bar" aria-hidden="true">
                <span style={{ width: `${Math.round((reto.value / reto.goal) * 100)}%` }} />
              </div>
              <p>
                {reto.value} de {reto.goal}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
