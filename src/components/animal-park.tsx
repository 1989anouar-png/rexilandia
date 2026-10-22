import { useState } from "react";
import { Check } from "lucide-react";
import { ANIMALS, GROUPS, KID_LABEL, kidOf, type AnimalGroup, type KidVoice } from "@/data/catalog";
import { audio } from "@/lib/audio";
import { useProgress } from "@/lib/progress";

export function AnimalPark() {
  const heard = useProgress((s) => s.heard);
  const hear = useProgress((s) => s.hear);
  const [group, setGroup] = useState<"todos" | AnimalGroup>("todos");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [shout, setShout] = useState<string | null>(null);
  const [kid, setKid] = useState<KidVoice | null>(null);
  const visible = ANIMALS.filter((animal) => group === "todos" || animal.group === group);
  const active = ANIMALS.find((animal) => animal.id === activeId) ?? null;

  function tap(id: string) {
    const animal = ANIMALS.find((item) => item.id === id);
    if (!animal) return;
    const index = ANIMALS.findIndex((item) => item.id === id);
    const voiceKid = kidOf(index);
    setActiveId(id);
    setKid(voiceKid);
    setShout(`${animal.name}: ${animal.say}`);
    hear(id);
    audio().talk(`/sounds/${animal.id}.mp3`, animal.voice, `${animal.say} Soy ${animal.name}.`, voiceKid);
    window.setTimeout(() => setShout((current) => (current === animal.say ? null : current)), 2600);
  }

  return (
    <div className="screen">
      <div className="chips">
        {GROUPS.map((item) => (
          <button
            key={item.id}
            type="button"
            className="chip"
            aria-pressed={group === item.id}
            onClick={() => {
              setGroup(item.id);
              audio().blip();
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      {shout && (
        <p className="shout">
          {kid && <span>{KID_LABEL[kid]}</span>}
          {shout}
        </p>
      )}
      <div className="animal-grid">
        {visible.map((animal) => (
          <button
            key={animal.id}
            type="button"
            className={animal.id === activeId ? "animal-card pop" : "animal-card"}
            onClick={() => tap(animal.id)}
          >
            <img src={animal.image} alt="" />
            <strong>{animal.name}</strong>
            {heard.includes(animal.id) && (
              <span className="heard-badge">
                <Check />
              </span>
            )}
          </button>
        ))}
      </div>
      {active && (
        <div className="fact-dock">
          <strong>{active.name}</strong>
          <em>{active.say}</em>
          <p>{active.fact}</p>
        </div>
      )}
    </div>
  );
}
