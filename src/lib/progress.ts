import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ANIMALS, COLOR_PAGES, NEON_IDS, type AnimalGroup } from "@/data/catalog";

export type Screen = "home" | "color" | "animals" | "retos" | "piano";

type Saved = {
  muted: boolean;
  musicOn: boolean;
  heard: string[];
  coloredPages: string[];
  pageColors: Record<string, string[]>;
  paintings: Record<string, string>;
  notesPlayed: number;
  instruments?: string[];
  simonBest: number;
  finds: number;
  pairs?: number;
  seenRetos: string[];
};

type Store = Saved & {
  screen: Screen;
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
  go: (screen: Screen) => void;
  setMuted: (muted: boolean) => void;
  setMusicOn: (musicOn: boolean) => void;
  hear: (id: string) => void;
  markColored: (id: string, colors: string[]) => void;
  savePainting: (id: string, data: string) => void;
  addNotes: (count: number) => void;
  touchInstrument: (id: string) => void;
  setSimon: (length: number) => void;
  addFind: () => void;
  addPair: () => void;
  seeReto: (id: string) => void;
};

const empty: Saved = {
  muted: false,
  musicOn: true,
  heard: [],
  coloredPages: [],
  pageColors: {},
  paintings: {},
  notesPlayed: 0,
  instruments: [],
  simonBest: 0,
  finds: 0,
  pairs: 0,
  seenRetos: [],
};

export const useProgress = create<Store>()(
  persist(
    (set) => ({
      ...empty,
      screen: "home",
      hydrated: false,
      setHydrated: (hydrated) => set({ hydrated }),
      go: (screen) => set({ screen }),
      setMuted: (muted) => set({ muted }),
      setMusicOn: (musicOn) => set({ musicOn }),
      hear: (id) =>
        set((s) => (s.heard.includes(id) ? s : { heard: [...s.heard, id] })),
      markColored: (id, colors) =>
        set((s) => ({
          coloredPages: s.coloredPages.includes(id) ? s.coloredPages : [...s.coloredPages, id],
          pageColors: { ...s.pageColors, [id]: colors },
        })),
      savePainting: (id, data) =>
        set((s) => ({ paintings: { ...s.paintings, [id]: data } })),
      addNotes: (count) => set((s) => ({ notesPlayed: Math.min(400, s.notesPlayed + count) })),
      touchInstrument: (id) =>
        set((s) => {
          const have = s.instruments ?? [];
          return have.includes(id) ? s : { instruments: [...have, id] };
        }),
      setSimon: (length) => set((s) => ({ simonBest: Math.max(s.simonBest, length) })),
      addFind: () => set((s) => ({ finds: s.finds + 1 })),
      addPair: () => set((s) => ({ pairs: (s.pairs ?? 0) + 1 })),
      seeReto: (id) =>
        set((s) => (s.seenRetos.includes(id) ? s : { seenRetos: [...s.seenRetos, id] })),
    }),
    {
      name: "rexilandia",
      skipHydration: true,
      storage: createJSONStorage(() => ({
        getItem: (name) => localStorage.getItem(name),
        setItem: (name, value) => {
          try {
            localStorage.setItem(name, value);
          } catch {
            try {
              const parsed = JSON.parse(value) as { state?: Saved };
              if (parsed.state) parsed.state.paintings = {};
              localStorage.setItem(name, JSON.stringify(parsed));
            } catch {
              /* quota: keep playing without the save */
            }
          }
        },
        removeItem: (name) => localStorage.removeItem(name),
      })),
      partialize: (s) => ({
        muted: s.muted,
        musicOn: s.musicOn,
        heard: s.heard,
        coloredPages: s.coloredPages,
        pageColors: s.pageColors,
        paintings: s.paintings,
        notesPlayed: s.notesPlayed,
        instruments: s.instruments,
        simonBest: s.simonBest,
        finds: s.finds,
        pairs: s.pairs,
        seenRetos: s.seenRetos,
      }),
    },
  ),
);

export type Reto = {
  id: string;
  title: string;
  detail: string;
  goal: number;
  value: number;
};

export function retosOf(s: Saved): Reto[] {
  const heardGroups = new Set<AnimalGroup>();
  for (const id of s.heard) {
    const animal = ANIMALS.find((item) => item.id === id);
    if (animal) heardGroups.add(animal.group);
  }
  const granja = ANIMALS.filter((animal) => animal.group === "granja");
  const mar = ANIMALS.filter((animal) => animal.group === "mar");
  const bichos = ANIMALS.filter((animal) => animal.group === "bichos");
  const dinosHeard = ANIMALS.filter((animal) => animal.group === "dinos" && s.heard.includes(animal.id)).length;
  const heardCount = (list: { id: string }[]) => list.filter((animal) => s.heard.includes(animal.id)).length;
  const maxColors = Math.max(0, ...Object.values(s.pageColors).map((colors) => colors.length));
  const worlds = (["dinos", "selva", "granja", "mar", "bichos"] as const).filter((group) =>
    heardGroups.has(group),
  ).length;
  const neon = new Set<string>(NEON_IDS);
  const usedNeon = Object.values(s.pageColors).some((colors) => colors.some((id) => neon.has(id)));
  const dragons = ["draguito", "azulon", "verdin", "rosita", "chispas"];
  const dragonsHeard = dragons.filter((id) => s.heard.includes(id)).length;
  const magicTrio = ["draguito", "unicornin", "fenixito"].filter((id) => s.heard.includes(id)).length;
  const instruments = s.instruments ?? [];
  const lineIds = COLOR_PAGES.map((page) => page.id);
  const linesDone = s.coloredPages.filter((id) => lineIds.includes(id)).length;
  return [
    {
      id: "trazo",
      title: "Primer trazo",
      detail: "Pinta cualquier dibujo.",
      goal: 1,
      value: Math.min(1, s.coloredPages.length),
    },
    {
      id: "cinco",
      title: "Cinco láminas",
      detail: "Colorea 5 dibujos distintos.",
      goal: 5,
      value: Math.min(5, s.coloredPages.length),
    },
    {
      id: "paisaje",
      title: "El paisaje",
      detail: "Pinta la selva o el paisaje de líneas.",
      goal: 1,
      value: s.coloredPages.some((id) => id === "paisaje" || id === "paisaje-foto") ? 1 : 0,
    },
    {
      id: "amigos",
      title: "Pinta amiguitos",
      detail: "Colorea 4 fotos de animales.",
      goal: 4,
      value: Math.min(4, s.coloredPages.filter((id) => id.startsWith("foto-")).length),
    },
    {
      id: "colores",
      title: "Caja de colores",
      detail: "Usa 6 colores en un mismo dibujo.",
      goal: 6,
      value: Math.min(6, maxColors),
    },
    {
      id: "arcoiris",
      title: "Arcoíris",
      detail: "Usa 10 colores en un mismo dibujo.",
      goal: 10,
      value: Math.min(10, maxColors),
    },
    {
      id: "escucha",
      title: "Oído fino",
      detail: "Escucha 8 animalitos.",
      goal: 8,
      value: Math.min(8, s.heard.length),
    },
    {
      id: "explorador",
      title: "Explorador",
      detail: "Escucha 20 animalitos.",
      goal: 20,
      value: Math.min(20, s.heard.length),
    },
    {
      id: "mundos",
      title: "Cinco mundos",
      detail: "Escucha un dino, uno de la selva, uno de la granja, uno del mar y un bicho.",
      goal: 5,
      value: worlds,
    },
    {
      id: "dinos",
      title: "Dinos",
      detail: "Escucha 10 dinosaurios.",
      goal: 10,
      value: Math.min(10, dinosHeard),
    },
    {
      id: "granja",
      title: "La granja",
      detail: "Escucha 6 animales de la granja.",
      goal: 6,
      value: Math.min(6, heardCount(granja)),
    },
    {
      id: "mar",
      title: "El mar",
      detail: "Escucha 4 animales del mar.",
      goal: 4,
      value: Math.min(4, heardCount(mar)),
    },
    {
      id: "bichos",
      title: "Bichitos",
      detail: "Escucha 4 bichos o pajaritos.",
      goal: 4,
      value: Math.min(4, heardCount(bichos)),
    },
    {
      id: "cerdito",
      title: "Policerdito",
      detail: "Toca a Policerdito y oye su oinc.",
      goal: 1,
      value: s.heard.includes("cerdo") ? 1 : 0,
    },
    {
      id: "piano",
      title: "Manitas al piano",
      detail: "Toca 12 notas.",
      goal: 12,
      value: Math.min(12, s.notesPlayed),
    },
    {
      id: "pianista",
      title: "Pianista",
      detail: "Toca 30 notas.",
      goal: 30,
      value: Math.min(30, s.notesPlayed),
    },
    {
      id: "simon",
      title: "Repite la canción",
      detail: "Supera el reto del piano.",
      goal: 4,
      value: Math.min(4, s.simonBest),
    },
    {
      id: "busca",
      title: "¿Dónde está?",
      detail: "Adivina 6 animalitos.",
      goal: 6,
      value: Math.min(6, s.finds),
    },
    {
      id: "doce",
      title: "Doce láminas",
      detail: "Colorea 12 dibujos distintos.",
      goal: 12,
      value: Math.min(12, s.coloredPages.length),
    },
    {
      id: "neon",
      title: "Color que brilla",
      detail: "Usa un color fluorescente.",
      goal: 1,
      value: usedNeon ? 1 : 0,
    },
    {
      id: "dragones",
      title: "Tres dragones",
      detail: "Escucha a Draguito, Azulón, Verdín, Rosita o Chispas.",
      goal: 3,
      value: Math.min(3, dragonsHeard),
    },
    {
      id: "magia",
      title: "Mundo mágico",
      detail: "Escucha un dragón, a Unicornín y a Fenixito.",
      goal: 3,
      value: magicTrio,
    },
    {
      id: "pinta-dragon",
      title: "Pinta un dragón",
      detail: "Colorea un dragón, el unicornio o el fénix.",
      goal: 1,
      value: s.coloredPages.some((id) =>
        ["draguito", "azulon", "verdin", "rosita", "chispas", "unicornin", "fenixito", "pegasito"].includes(id),
      )
        ? 1
        : 0,
    },
    {
      id: "banda",
      title: "La banda",
      detail: "Toca 4 instrumentos distintos.",
      goal: 4,
      value: Math.min(4, instruments.length),
    },
    {
      id: "xilo",
      title: "Xilófono",
      detail: "Toca el xilófono.",
      goal: 1,
      value: instruments.includes("xilo") ? 1 : 0,
    },
    {
      id: "flauta",
      title: "Flauta",
      detail: "Toca la flauta.",
      goal: 1,
      value: instruments.includes("flauta") ? 1 : 0,
    },
    {
      id: "tambor",
      title: "Tambor",
      detail: "Toca el tambor.",
      goal: 1,
      value: instruments.includes("tambor") ? 1 : 0,
    },
    {
      id: "libro",
      title: "Libro de líneas",
      detail: "Colorea 12 láminas de líneas.",
      goal: 12,
      value: Math.min(12, linesDone),
    },
    {
      id: "dibuja-dinos",
      title: "Paleontólogo",
      detail: "Colorea 6 dinosaurios.",
      goal: 6,
      value: Math.min(
        6,
        s.coloredPages.filter((id) => ANIMALS.some((animal) => animal.group === "dinos" && (id === animal.id || id === `foto-${animal.id}`))).length,
      ),
    },
    {
      id: "cosas",
      title: "Cosas de juguete",
      detail: "Colorea 4 objetos: el volcán, el sol, la flor…",
      goal: 4,
      value: Math.min(
        4,
        s.coloredPages.filter((id) => ANIMALS.some((animal) => animal.group === "cosas" && (id === animal.id || id === `foto-${animal.id}`))).length,
      ),
    },
    {
      id: "parejas",
      title: "Parejas",
      detail: "Encuentra 4 parejas iguales.",
      goal: 4,
      value: Math.min(4, s.pairs ?? 0),
    },
  ];
}

export function starsOf(s: Saved) {
  return retosOf(s).filter((reto) => reto.value >= reto.goal).length;
}
