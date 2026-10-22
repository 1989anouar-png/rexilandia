import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Check, c as PawPrint, d as PaintBucket, f as Music, g as ChevronLeft, h as Download, i as Trophy, l as Palette, m as Eraser, n as Volume2, o as Trash2, p as Lightbulb, r as Undo2, s as Star, t as VolumeX, u as Paintbrush } from "../_libs/lucide-react.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C2zO7gzJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GROUPS = [
	{
		id: "todos",
		label: "Todos"
	},
	{
		id: "dinos",
		label: "Dinos"
	},
	{
		id: "selva",
		label: "Selva"
	},
	{
		id: "granja",
		label: "Granja"
	},
	{
		id: "mar",
		label: "Mar"
	}
];
var ANIMALS = [
	{
		id: "rex",
		name: "Rex",
		group: "dinos",
		voice: "roar",
		say: "¡ROAAAR!",
		fact: "Sus brazos eran pequeñitos, pero su sonrisa de juego es enorme.",
		image: "/art/animals/rex.jpg"
	},
	{
		id: "triceratops",
		name: "Tripi",
		group: "dinos",
		voice: "honk",
		say: "¡GRAAA!",
		fact: "Tres cuernos y un gran collar de hueso protegían su cara.",
		image: "/art/animals/triceratops.jpg"
	},
	{
		id: "stego",
		name: "Stego",
		group: "dinos",
		voice: "bellow",
		say: "¡MUUUM!",
		fact: "Las placas de la espalda lo hacían verse más grande.",
		image: "/art/animals/stego.jpg"
	},
	{
		id: "ptero",
		name: "Pteri",
		group: "dinos",
		voice: "screech",
		say: "¡IIIAK!",
		fact: "No era un dinosaurio: era un reptil que volaba sobre el mar.",
		image: "/art/animals/ptero.jpg"
	},
	{
		id: "brachio",
		name: "Bronti",
		group: "dinos",
		voice: "bellow",
		say: "¡MOOOH!",
		fact: "Su cuello largo llegaba a las hojas más altas.",
		image: "/art/animals/brachio.jpg"
	},
	{
		id: "leon",
		name: "León",
		group: "selva",
		voice: "roar",
		say: "¡GRAUR!",
		fact: "Los leones viven juntos en una familia: la manada.",
		image: "/art/animals/leon.jpg"
	},
	{
		id: "elefante",
		name: "Elefante",
		group: "selva",
		voice: "trumpet",
		say: "¡PRUUU!",
		fact: "La trompa le sirve de nariz, de mano y de ducha.",
		image: "/art/animals/elefante.jpg"
	},
	{
		id: "mono",
		name: "Mono",
		group: "selva",
		voice: "hoot",
		say: "¡UH UH AH!",
		fact: "Se columpia de rama en rama y le encanta la fruta.",
		image: "/art/animals/mono.jpg"
	},
	{
		id: "loro",
		name: "Loro",
		group: "selva",
		voice: "chirp",
		say: "¡CROAC-CÚ!",
		fact: "Con el pico curvo puede imitar un montón de sonidos.",
		image: "/art/animals/loro.jpg"
	},
	{
		id: "rana",
		name: "Rana",
		group: "selva",
		voice: "croak",
		say: "¡CROAC!",
		fact: "Salta muy lejos y canta cuando empieza a llover.",
		image: "/art/animals/rana.jpg"
	},
	{
		id: "vaca",
		name: "Vaca",
		group: "granja",
		voice: "moo",
		say: "¡MUUU!",
		fact: "Dice muu y de ella sale la leche del desayuno.",
		image: "/art/animals/vaca.jpg"
	},
	{
		id: "pato",
		name: "Pato",
		group: "granja",
		voice: "quack",
		say: "¡CUAC!",
		fact: "Sus patas palmeadas son como remos para nadar.",
		image: "/art/animals/pato.jpg"
	},
	{
		id: "cerdo",
		name: "Cerdo",
		group: "granja",
		voice: "oink",
		say: "¡OINC!",
		fact: "Se revuelca en el barro para no pasar calor.",
		image: "/art/animals/cerdo.jpg"
	},
	{
		id: "oveja",
		name: "Oveja",
		group: "granja",
		voice: "baa",
		say: "¡BEEE!",
		fact: "Su lana espesa abriga cuando hace frío.",
		image: "/art/animals/oveja.jpg"
	},
	{
		id: "gallina",
		name: "Gallina",
		group: "granja",
		voice: "cluck",
		say: "¡CLO CLÓ!",
		fact: "Cuida los huevos hasta que sale el pollito.",
		image: "/art/animals/gallina.jpg"
	},
	{
		id: "delfin",
		name: "Delfín",
		group: "mar",
		voice: "whistle",
		say: "¡IIII!",
		fact: "Habla con silbidos y salta fuera del agua.",
		image: "/art/animals/delfin.jpg"
	},
	{
		id: "tortuga",
		name: "Tortuga",
		group: "mar",
		voice: "soft",
		say: "¡MMMH!",
		fact: "Nada despacito y guarda la cabeza en el caparazón.",
		image: "/art/animals/tortuga.jpg"
	},
	{
		id: "ballena",
		name: "Ballena",
		group: "mar",
		voice: "whale",
		say: "¡UUUUUH!",
		fact: "Canta canciones tan graves que viajan por todo el mar.",
		image: "/art/animals/ballena.jpg"
	}
];
var COLOR_PAGES = [
	{
		id: "rex",
		name: "Rex",
		line: "/art/color/rex.jpg",
		idea: "/art/animals/rex.jpg"
	},
	{
		id: "triceratops",
		name: "Tripi",
		line: "/art/color/triceratops.jpg",
		idea: "/art/animals/triceratops.jpg"
	},
	{
		id: "stego",
		name: "Stego",
		line: "/art/color/stego.jpg",
		idea: "/art/animals/stego.jpg"
	},
	{
		id: "eggs",
		name: "Huevos",
		line: "/art/color/eggs.jpg"
	},
	{
		id: "leon",
		name: "León",
		line: "/art/color/leon.jpg",
		idea: "/art/animals/leon.jpg"
	},
	{
		id: "elefante",
		name: "Elefante",
		line: "/art/color/elefante.jpg",
		idea: "/art/animals/elefante.jpg"
	},
	{
		id: "loro",
		name: "Loro",
		line: "/art/color/loro.jpg",
		idea: "/art/animals/loro.jpg"
	},
	{
		id: "tortuga",
		name: "Tortuga",
		line: "/art/color/tortuga.jpg",
		idea: "/art/animals/tortuga.jpg"
	}
];
var CRAYONS = [
	{
		id: "naranja",
		hex: "#f28a2e",
		name: "Naranja"
	},
	{
		id: "amarillo",
		hex: "#ffd23f",
		name: "Amarillo"
	},
	{
		id: "crema",
		hex: "#ffe3a3",
		name: "Crema"
	},
	{
		id: "rojo",
		hex: "#ef4b3a",
		name: "Rojo"
	},
	{
		id: "rosa",
		hex: "#ff6b9a",
		name: "Rosa"
	},
	{
		id: "morado",
		hex: "#9b5de5",
		name: "Morado"
	},
	{
		id: "azul",
		hex: "#3aa0f0",
		name: "Azul"
	},
	{
		id: "cielo",
		hex: "#8fd4ff",
		name: "Cielo"
	},
	{
		id: "verde",
		hex: "#3cba5a",
		name: "Verde"
	},
	{
		id: "hoja",
		hex: "#b6e86a",
		name: "Hoja"
	},
	{
		id: "agua",
		hex: "#2ec4c0",
		name: "Agua"
	},
	{
		id: "marron",
		hex: "#b9764a",
		name: "Marrón"
	},
	{
		id: "negro",
		hex: "#2b2b2b",
		name: "Negro"
	},
	{
		id: "blanco",
		hex: "#ffffff",
		name: "Blanco"
	}
];
var KEYS = [
	{
		id: "do",
		name: "Do",
		freq: 261.63,
		tone: "dino"
	},
	{
		id: "re",
		name: "Re",
		freq: 293.66,
		tone: "sun"
	},
	{
		id: "mi",
		name: "Mi",
		freq: 329.63,
		tone: "leaf"
	},
	{
		id: "fa",
		name: "Fa",
		freq: 349.23,
		tone: "water"
	},
	{
		id: "sol",
		name: "Sol",
		freq: 392,
		tone: "sky"
	},
	{
		id: "la",
		name: "La",
		freq: 440,
		tone: "grape"
	},
	{
		id: "si",
		name: "Si",
		freq: 493.88,
		tone: "rose"
	},
	{
		id: "do2",
		name: "Do",
		freq: 523.25,
		tone: "cream"
	}
];
/** Original pentatonic lullaby written for this app. Indices into KEYS. */
var SONG = [
	0,
	2,
	4,
	2,
	5,
	4,
	2,
	1,
	0,
	4,
	5,
	4,
	2,
	0,
	1,
	0,
	2,
	4,
	7,
	5,
	4,
	2,
	1,
	0
];
var Studio = class {
	ctx = null;
	master = null;
	musicGain = null;
	sfxGain = null;
	noise = null;
	timer = 0;
	next = 0;
	index = 0;
	musicOn = false;
	muted = false;
	unlock() {
		const ctx = this.ensure();
		if (ctx.state === "suspended") ctx.resume();
	}
	setMuted(muted) {
		this.muted = muted;
		if (this.master) this.master.gain.value = muted ? 0 : 1;
	}
	setMusic(on) {
		this.musicOn = on;
		if (!on) {
			window.clearTimeout(this.timer);
			this.timer = 0;
			return;
		}
		this.unlock();
		if (!this.ctx || this.timer) return;
		this.next = this.ctx.currentTime + .12;
		const loop = () => {
			if (!this.musicOn || !this.ctx) {
				this.timer = 0;
				return;
			}
			const horizon = this.ctx.currentTime + .45;
			while (this.next < horizon) {
				const key = KEYS[SONG[this.index] ?? 0];
				if (key) this.piano(key.freq, this.next, .92, .07);
				this.index = (this.index + 1) % SONG.length;
				this.next += .56;
			}
			this.timer = window.setTimeout(loop, 180);
		};
		loop();
	}
	blip() {
		const ctx = this.ensure();
		this.chirpTone(ctx, 620, 880, .09, .08);
	}
	bonk() {
		const ctx = this.ensure();
		this.glide(ctx, "triangle", 200, 90, .16, .12);
	}
	sparkle() {
		const t = this.ensure().currentTime;
		this.piano(1174, t, .18, .05);
		this.piano(1568, t + .06, .2, .04);
	}
	fanfare() {
		const t = this.ensure().currentTime;
		[
			523.25,
			659.25,
			783.99,
			1046.5
		].forEach((freq, i) => {
			this.piano(freq, t + i * .11, .42, .1);
		});
	}
	key(freq) {
		this.unlock();
		this.duck();
		const ctx = this.ensure();
		this.piano(freq, ctx.currentTime, .85, .16);
	}
	animal(voice) {
		this.unlock();
		this.duck();
		const ctx = this.ensure();
		const t = ctx.currentTime;
		const dest = this.sfxGain ?? ctx.destination;
		const noise = this.noiseBuffer(ctx);
		switch (voice) {
			case "roar":
				this.noiseSweep(ctx, dest, noise, t, 720, 140, .62, .55);
				this.glide(ctx, "triangle", 150, 70, .55, .16, t);
				break;
			case "honk":
				this.glide(ctx, "square", 280, 180, .18, .1, t);
				this.glide(ctx, "square", 240, 160, .2, .08, t + .16);
				break;
			case "bellow":
				this.glide(ctx, "sine", 130, 78, .7, .2, t);
				this.glide(ctx, "triangle", 196, 110, .7, .06, t);
				break;
			case "screech":
				this.glide(ctx, "sine", 980, 420, .28, .1, t);
				this.glide(ctx, "triangle", 1400, 700, .22, .04, t);
				break;
			case "trumpet":
				this.glide(ctx, "sawtooth", 220, 480, .18, .06, t);
				this.glide(ctx, "sine", 330, 620, .34, .1, t + .05);
				break;
			case "hoot":
				[
					340,
					420,
					300,
					460
				].forEach((freq, i) => {
					this.blipAt(ctx, freq, t + i * .13, .12, .1);
				});
				break;
			case "chirp":
				[
					880,
					1180,
					990,
					1320
				].forEach((freq, i) => {
					this.blipAt(ctx, freq, t + i * .09, .08, .07);
				});
				break;
			case "croak":
				this.glide(ctx, "square", 160, 110, .22, .1, t);
				this.glide(ctx, "square", 150, 100, .24, .08, t + .24);
				break;
			case "moo":
				this.glide(ctx, "sawtooth", 196, 120, .7, .07, t);
				this.glide(ctx, "sine", 196, 120, .75, .14, t);
				break;
			case "quack":
				this.noiseSweep(ctx, dest, noise, t, 900, 500, .12, .35);
				this.noiseSweep(ctx, dest, noise, t + .14, 980, 540, .12, .3);
				break;
			case "oink":
				this.glide(ctx, "square", 260, 180, .12, .08, t);
				this.glide(ctx, "triangle", 300, 190, .14, .08, t + .13);
				break;
			case "baa":
				this.glide(ctx, "sawtooth", 230, 180, .45, .06, t);
				this.glide(ctx, "sine", 340, 260, .45, .05, t);
				break;
			case "cluck":
				[
					520,
					430,
					610
				].forEach((freq, i) => this.blipAt(ctx, freq, t + i * .1, .07, .08));
				break;
			case "whistle":
				this.glide(ctx, "sine", 760, 1680, .28, .08, t);
				this.glide(ctx, "sine", 1500, 900, .32, .06, t + .22);
				break;
			case "soft":
				this.glide(ctx, "sine", 180, 140, .35, .1, t);
				this.glide(ctx, "triangle", 270, 200, .3, .04, t);
				break;
			case "whale":
				this.glide(ctx, "sine", 90, 48, 1.1, .16, t);
				this.glide(ctx, "sine", 180, 96, 1.1, .04, t);
		}
	}
	ensure() {
		if (this.ctx) return this.ctx;
		const Ctx = window.AudioContext || window.webkitAudioContext;
		if (!Ctx) throw new Error("audio");
		const ctx = new Ctx();
		const master = ctx.createGain();
		master.gain.value = this.muted ? 0 : 1;
		const comp = ctx.createDynamicsCompressor();
		comp.threshold.value = -16;
		comp.knee.value = 18;
		comp.ratio.value = 5;
		comp.attack.value = .004;
		comp.release.value = .18;
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
	noiseBuffer(ctx) {
		if (this.noise) return this.noise;
		const len = ctx.sampleRate;
		const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
		const data = buffer.getChannelData(0);
		for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
		this.noise = buffer;
		return buffer;
	}
	duck() {
		const g = this.musicGain;
		const ctx = this.ctx;
		if (!g || !ctx) return;
		const now = ctx.currentTime;
		g.gain.cancelScheduledValues(now);
		g.gain.setValueAtTime(g.gain.value, now);
		g.gain.linearRampToValueAtTime(.25, now + .03);
		g.gain.linearRampToValueAtTime(1, now + .7);
	}
	piano(freq, time, dur, peak) {
		const ctx = this.ctx;
		const dest = this.musicGain;
		if (!ctx || !dest) return;
		const partials = [
			1,
			2,
			3,
			4.02
		];
		const amps = [
			1,
			.32,
			.14,
			.06
		];
		partials.forEach((partial, i) => {
			const osc = ctx.createOscillator();
			osc.type = "sine";
			osc.frequency.value = freq * partial;
			const gain = ctx.createGain();
			const amp = peak * (amps[i] ?? 0);
			gain.gain.setValueAtTime(1e-4, time);
			gain.gain.exponentialRampToValueAtTime(Math.max(2e-4, amp), time + .018);
			gain.gain.exponentialRampToValueAtTime(1e-4, time + dur);
			osc.connect(gain);
			gain.connect(dest);
			osc.start(time);
			osc.stop(time + dur + .02);
		});
	}
	glide(ctx, type, from, to, dur, peak, time = ctx.currentTime) {
		const dest = this.sfxGain;
		if (!dest) return;
		const osc = ctx.createOscillator();
		osc.type = type;
		osc.frequency.setValueAtTime(from, time);
		osc.frequency.exponentialRampToValueAtTime(Math.max(40, to), time + dur);
		const gain = ctx.createGain();
		gain.gain.setValueAtTime(1e-4, time);
		gain.gain.exponentialRampToValueAtTime(peak, time + .03);
		gain.gain.exponentialRampToValueAtTime(1e-4, time + dur);
		osc.connect(gain);
		gain.connect(dest);
		osc.start(time);
		osc.stop(time + dur + .02);
	}
	blipAt(ctx, freq, time, dur, peak) {
		const dest = this.sfxGain;
		if (!dest) return;
		const osc = ctx.createOscillator();
		osc.type = "sine";
		osc.frequency.value = freq;
		const gain = ctx.createGain();
		gain.gain.setValueAtTime(1e-4, time);
		gain.gain.exponentialRampToValueAtTime(peak, time + .015);
		gain.gain.exponentialRampToValueAtTime(1e-4, time + dur);
		osc.connect(gain);
		gain.connect(dest);
		osc.start(time);
		osc.stop(time + dur + .02);
	}
	chirpTone(ctx, from, to, dur, peak) {
		this.glide(ctx, "sine", from, to, dur, peak);
	}
	noiseSweep(ctx, dest, buffer, time, from, to, dur, peak) {
		const src = ctx.createBufferSource();
		src.buffer = buffer;
		const filter = ctx.createBiquadFilter();
		filter.type = "bandpass";
		filter.Q.value = .8;
		filter.frequency.setValueAtTime(from, time);
		filter.frequency.exponentialRampToValueAtTime(Math.max(60, to), time + dur);
		const gain = ctx.createGain();
		gain.gain.setValueAtTime(1e-4, time);
		gain.gain.exponentialRampToValueAtTime(peak, time + .03);
		gain.gain.exponentialRampToValueAtTime(1e-4, time + dur);
		src.connect(filter);
		filter.connect(gain);
		gain.connect(dest);
		src.start(time);
		src.stop(time + dur + .02);
	}
};
var studio = null;
function audio() {
	if (!studio) studio = new Studio();
	return studio;
}
var empty = {
	muted: false,
	musicOn: true,
	heard: [],
	coloredPages: [],
	pageColors: {},
	paintings: {},
	notesPlayed: 0,
	simonBest: 0,
	finds: 0,
	seenRetos: []
};
var useProgress = create()(persist((set) => ({
	...empty,
	screen: "home",
	hydrated: false,
	setHydrated: (hydrated) => set({ hydrated }),
	go: (screen) => set({ screen }),
	setMuted: (muted) => set({ muted }),
	setMusicOn: (musicOn) => set({ musicOn }),
	hear: (id) => set((s) => s.heard.includes(id) ? s : { heard: [...s.heard, id] }),
	markColored: (id, colors) => set((s) => ({
		coloredPages: s.coloredPages.includes(id) ? s.coloredPages : [...s.coloredPages, id],
		pageColors: {
			...s.pageColors,
			[id]: colors
		}
	})),
	savePainting: (id, data) => set((s) => ({ paintings: {
		...s.paintings,
		[id]: data
	} })),
	addNotes: (count) => set((s) => ({ notesPlayed: Math.min(400, s.notesPlayed + count) })),
	setSimon: (length) => set((s) => ({ simonBest: Math.max(s.simonBest, length) })),
	addFind: () => set((s) => ({ finds: s.finds + 1 })),
	seeReto: (id) => set((s) => s.seenRetos.includes(id) ? s : { seenRetos: [...s.seenRetos, id] })
}), {
	name: "rexilandia",
	skipHydration: true,
	storage: createJSONStorage(() => ({
		getItem: (name) => localStorage.getItem(name),
		setItem: (name, value) => {
			try {
				localStorage.setItem(name, value);
			} catch {
				try {
					const parsed = JSON.parse(value);
					if (parsed.state) parsed.state.paintings = {};
					localStorage.setItem(name, JSON.stringify(parsed));
				} catch {}
			}
		},
		removeItem: (name) => localStorage.removeItem(name)
	})),
	partialize: (s) => ({
		muted: s.muted,
		musicOn: s.musicOn,
		heard: s.heard,
		coloredPages: s.coloredPages,
		pageColors: s.pageColors,
		paintings: s.paintings,
		notesPlayed: s.notesPlayed,
		simonBest: s.simonBest,
		finds: s.finds,
		seenRetos: s.seenRetos
	})
}));
function retosOf(s) {
	const heardGroups = /* @__PURE__ */ new Set();
	for (const id of s.heard) {
		const animal = ANIMALS.find((item) => item.id === id);
		if (animal) heardGroups.add(animal.group);
	}
	const dinos = ANIMALS.filter((animal) => animal.group === "dinos");
	const dinosHeard = dinos.filter((animal) => s.heard.includes(animal.id)).length;
	const maxColors = Math.max(0, ...Object.values(s.pageColors).map((colors) => colors.length));
	const worlds = [
		"dinos",
		"selva",
		"granja",
		"mar"
	].filter((group) => heardGroups.has(group)).length;
	return [
		{
			id: "trazo",
			title: "Primer trazo",
			detail: "Pinta cualquier dibujo.",
			goal: 1,
			value: Math.min(1, s.coloredPages.length)
		},
		{
			id: "tres",
			title: "Tres láminas",
			detail: "Colorea 3 dibujos distintos.",
			goal: 3,
			value: Math.min(3, s.coloredPages.length)
		},
		{
			id: "colores",
			title: "Caja de colores",
			detail: "Usa 4 colores en un mismo dibujo.",
			goal: 4,
			value: Math.min(4, maxColors)
		},
		{
			id: "escucha",
			title: "Oído fino",
			detail: "Toca 6 animales y escucha su voz.",
			goal: 6,
			value: Math.min(6, s.heard.length)
		},
		{
			id: "mundos",
			title: "Cuatro mundos",
			detail: "Escucha un dino, uno de la selva, uno de la granja y uno del mar.",
			goal: 4,
			value: worlds
		},
		{
			id: "dinos",
			title: "La manada",
			detail: "Escucha a todos los dinosaurios.",
			goal: dinos.length,
			value: dinosHeard
		},
		{
			id: "piano",
			title: "Manitas al piano",
			detail: "Toca 8 notas.",
			goal: 8,
			value: Math.min(8, s.notesPlayed)
		},
		{
			id: "simon",
			title: "Repite la canción",
			detail: "Supera el reto del piano.",
			goal: 4,
			value: Math.min(4, s.simonBest)
		},
		{
			id: "busca",
			title: "¿Dónde está?",
			detail: "Adivina 3 animales.",
			goal: 3,
			value: Math.min(3, s.finds)
		},
		{
			id: "libro",
			title: "Libro completo",
			detail: `Colorea las ${COLOR_PAGES.length} láminas.`,
			goal: COLOR_PAGES.length,
			value: Math.min(COLOR_PAGES.length, s.coloredPages.length)
		}
	];
}
function starsOf(s) {
	return retosOf(s).filter((reto) => reto.value >= reto.goal).length;
}
function AnimalPark() {
	const heard = useProgress((s) => s.heard);
	const hear = useProgress((s) => s.hear);
	const [group, setGroup] = (0, import_react.useState)("todos");
	const [activeId, setActiveId] = (0, import_react.useState)(null);
	const [shout, setShout] = (0, import_react.useState)(null);
	const visible = ANIMALS.filter((animal) => group === "todos" || animal.group === group);
	const active = ANIMALS.find((animal) => animal.id === activeId) ?? null;
	function tap(id) {
		const animal = ANIMALS.find((item) => item.id === id);
		if (!animal) return;
		setActiveId(id);
		setShout(animal.say);
		hear(id);
		audio().animal(animal.voice);
		window.setTimeout(() => setShout((current) => current === animal.say ? null : current), 900);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "chips",
				children: GROUPS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "chip",
					"aria-pressed": group === item.id,
					onClick: () => {
						setGroup(item.id);
						audio().blip();
					},
					children: item.label
				}, item.id))
			}),
			shout && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "shout",
				children: shout
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animal-grid",
				children: visible.map((animal) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: animal.id === activeId ? "animal-card pop" : "animal-card",
					onClick: () => tap(animal.id),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: animal.image,
							alt: ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: animal.name }),
						heard.includes(animal.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "heard-badge",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})
						})
					]
				}, animal.id))
			}),
			active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fact-dock",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: active.name }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: active.say }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: active.fact })
				]
			})
		]
	});
}
function preparePage(img) {
	const lines = document.createElement("canvas");
	lines.width = 600;
	lines.height = 800;
	const ctx = lines.getContext("2d", { willReadFrequently: true });
	if (!ctx) throw new Error("canvas");
	const scale = Math.min(600 / img.naturalWidth, 800 / img.naturalHeight);
	const dw = Math.round(img.naturalWidth * scale);
	const dh = Math.round(img.naturalHeight * scale);
	const ox = Math.round((600 - dw) / 2);
	const oy = Math.round((800 - dh) / 2);
	ctx.drawImage(img, ox, oy, dw, dh);
	const image = ctx.getImageData(0, 0, 600, 800);
	const d = image.data;
	const wall = /* @__PURE__ */ new Uint8Array(48e4);
	for (let i = 0; i < wall.length; i++) {
		const p = i * 4;
		const r = d[p] ?? 0;
		const g = d[p + 1] ?? 0;
		const b = d[p + 2] ?? 0;
		const max = Math.max(r, g, b);
		const sat = max === 0 ? 0 : (max - Math.min(r, g, b)) / max;
		if (!(max > 206 && sat < .25) && (max < 150 || max < 196 && sat < .28)) {
			wall[i] = 1;
			d[p] = 36;
			d[p + 1] = 49;
			d[p + 2] = 40;
			d[p + 3] = 255;
		} else {
			d[p] = 0;
			d[p + 1] = 0;
			d[p + 2] = 0;
			d[p + 3] = 0;
		}
	}
	ctx.putImageData(image, 0, 0);
	return {
		lines,
		wall: dilate(wall, 600, 800)
	};
}
function dilate(wall, w, h) {
	const next = wall.slice();
	for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
		const i = y * w + x;
		if (wall[i]) continue;
		if (wall[i - 1] || wall[i + 1] || wall[i - w] || wall[i + w]) next[i] = 1;
	}
	return next;
}
function floodFill(paint, wall, sx, sy, rgba) {
	const w = paint.width;
	const h = paint.height;
	const d = paint.data;
	if (sx < 0 || sy < 0 || sx >= w || sy >= h) return;
	const start = sy * w + sx;
	if (wall[start]) return;
	const p0 = start * 4;
	const tr = d[p0] ?? 0;
	const tg = d[p0 + 1] ?? 0;
	const tb = d[p0 + 2] ?? 0;
	const ta = d[p0 + 3] ?? 0;
	if (tr === rgba[0] && tg === rgba[1] && tb === rgba[2] && ta === rgba[3]) return;
	const same = (i) => {
		if (wall[i]) return false;
		const p = i * 4;
		return d[p] === tr && d[p + 1] === tg && d[p + 2] === tb && d[p + 3] === ta;
	};
	const stack = [sx, sy];
	while (stack.length) {
		const y = stack.pop();
		let x = stack.pop();
		let i = y * w + x;
		while (x > 0 && same(i - 1)) {
			x--;
			i--;
		}
		let spanUp = false;
		let spanDown = false;
		for (; x < w && same(i); x++, i++) {
			const p = i * 4;
			d[p] = rgba[0];
			d[p + 1] = rgba[1];
			d[p + 2] = rgba[2];
			d[p + 3] = rgba[3];
			if (y > 0) {
				const up = i - w;
				if (!spanUp && same(up)) {
					stack.push(x, y - 1);
					spanUp = true;
				} else if (spanUp && !same(up)) spanUp = false;
			}
			if (y < h - 1) {
				const down = i + w;
				if (!spanDown && same(down)) {
					stack.push(x, y + 1);
					spanDown = true;
				} else if (spanDown && !same(down)) spanDown = false;
			}
		}
	}
}
function hasInk(paint) {
	const ctx = paint.getContext("2d");
	if (!ctx) return false;
	const { data } = ctx.getImageData(0, 0, paint.width, paint.height);
	for (let i = 3; i < data.length; i += 40) if ((data[i] ?? 0) > 24) return true;
	return false;
}
function loadImage(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = () => reject(new Error(src));
		img.src = src;
	});
}
function hexToRgba(hex) {
	const n = hex.replace("#", "");
	return [
		Number.parseInt(n.slice(0, 2), 16),
		Number.parseInt(n.slice(2, 4), 16),
		Number.parseInt(n.slice(4, 6), 16),
		255
	];
}
function ColorStudio() {
	const markColored = useProgress((s) => s.markColored);
	const savePainting = useProgress((s) => s.savePainting);
	const [pageId, setPageId] = (0, import_react.useState)(COLOR_PAGES[0]?.id ?? "rex");
	const [tool, setTool] = (0, import_react.useState)("brush");
	const [crayonId, setCrayonId] = (0, import_react.useState)("naranja");
	const [size, setSize] = (0, import_react.useState)(30);
	const [undoCount, setUndoCount] = (0, import_react.useState)(0);
	const [status, setStatus] = (0, import_react.useState)("loading");
	const [confirmClear, setConfirmClear] = (0, import_react.useState)(false);
	const [ideaOpen, setIdeaOpen] = (0, import_react.useState)(false);
	const viewRef = (0, import_react.useRef)(null);
	const paintRef = (0, import_react.useRef)(null);
	const linesRef = (0, import_react.useRef)(null);
	const wallRef = (0, import_react.useRef)(null);
	const undoRef = (0, import_react.useRef)([]);
	const drawing = (0, import_react.useRef)(false);
	const last = (0, import_react.useRef)(null);
	const usedRef = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	const pageIdRef = (0, import_react.useRef)(pageId);
	const statusRef = (0, import_react.useRef)(status);
	pageIdRef.current = pageId;
	statusRef.current = status;
	const page = COLOR_PAGES.find((item) => item.id === pageId) ?? COLOR_PAGES[0];
	const crayon = CRAYONS.find((item) => item.id === crayonId) ?? CRAYONS[0];
	function render() {
		const view = viewRef.current;
		const paint = paintRef.current;
		const lines = linesRef.current;
		if (!view || !paint || !lines) return;
		const ctx = view.getContext("2d");
		if (!ctx) return;
		ctx.fillStyle = "#fffdf6";
		ctx.fillRect(0, 0, 600, 800);
		ctx.drawImage(paint, 0, 0);
		ctx.drawImage(lines, 0, 0);
	}
	function commit() {
		const paint = paintRef.current;
		if (!paint || statusRef.current !== "ready") return;
		const id = pageIdRef.current;
		try {
			savePainting(id, paint.toDataURL("image/png"));
		} catch {}
		if (hasInk(paint)) markColored(id, [...usedRef.current]);
	}
	(0, import_react.useEffect)(() => {
		let cancel = false;
		const id = pageId;
		const line = COLOR_PAGES.find((item) => item.id === id)?.line;
		if (!line) return;
		setStatus("loading");
		(async () => {
			try {
				const img = await loadImage(line);
				if (cancel) return;
				const prepared = preparePage(img);
				const paint = document.createElement("canvas");
				paint.width = 600;
				paint.height = 800;
				const saved = useProgress.getState().paintings[id];
				if (saved) try {
					const previous = await loadImage(saved);
					if (cancel) return;
					paint.getContext("2d")?.drawImage(previous, 0, 0, 600, 800);
				} catch {}
				if (cancel) return;
				linesRef.current = prepared.lines;
				wallRef.current = prepared.wall;
				paintRef.current = paint;
				usedRef.current = new Set(useProgress.getState().pageColors[id] ?? []);
				undoRef.current = [];
				setUndoCount(0);
				setStatus("ready");
				render();
			} catch {
				if (!cancel) setStatus("error");
			}
		})();
		return () => {
			cancel = true;
		};
	}, [pageId]);
	(0, import_react.useEffect)(() => {
		return () => commit();
	}, []);
	function pushUndo() {
		const paint = paintRef.current;
		const ctx = paint?.getContext("2d");
		if (!paint || !ctx) return;
		undoRef.current.push(ctx.getImageData(0, 0, paint.width, paint.height));
		if (undoRef.current.length > 8) undoRef.current.shift();
		setUndoCount(undoRef.current.length);
	}
	function point(event) {
		const rect = event.currentTarget.getBoundingClientRect();
		return {
			x: (event.clientX - rect.left) / rect.width * 600,
			y: (event.clientY - rect.top) / rect.height * 800
		};
	}
	function dab(ctx, x, y) {
		ctx.beginPath();
		ctx.arc(x, y, size / 2, 0, Math.PI * 2);
		ctx.fill();
	}
	function stroke(ctx, from, to) {
		const dist = Math.hypot(to.x - from.x, to.y - from.y);
		const steps = Math.max(1, Math.ceil(dist / Math.max(1, size * .25)));
		for (let i = 0; i <= steps; i++) {
			const t = i / steps;
			dab(ctx, from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t);
		}
	}
	function onDown(event) {
		if (status !== "ready") return;
		const paint = paintRef.current;
		const ctx = paint?.getContext("2d");
		const wall = wallRef.current;
		if (!paint || !ctx || !wall) return;
		event.preventDefault();
		event.currentTarget.setPointerCapture(event.pointerId);
		const at = point(event);
		if (tool === "fill") {
			pushUndo();
			const data = ctx.getImageData(0, 0, paint.width, paint.height);
			floodFill(data, wall, Math.round(at.x), Math.round(at.y), hexToRgba(crayon.hex));
			ctx.putImageData(data, 0, 0);
			usedRef.current.add(crayon.id);
			audio().sparkle();
			render();
			commit();
			return;
		}
		pushUndo();
		drawing.current = true;
		last.current = at;
		ctx.save();
		if (tool === "erase") ctx.globalCompositeOperation = "destination-out";
		else {
			ctx.globalCompositeOperation = "source-over";
			ctx.fillStyle = crayon.hex;
			usedRef.current.add(crayon.id);
		}
		dab(ctx, at.x, at.y);
		ctx.restore();
		render();
	}
	function onMove(event) {
		if (!drawing.current || tool === "fill") return;
		const ctx = paintRef.current?.getContext("2d");
		const prev = last.current;
		if (!ctx || !prev) return;
		const at = point(event);
		ctx.save();
		if (tool === "erase") ctx.globalCompositeOperation = "destination-out";
		else {
			ctx.fillStyle = crayon.hex;
			usedRef.current.add(crayon.id);
		}
		stroke(ctx, prev, at);
		ctx.restore();
		last.current = at;
		render();
	}
	function onUp() {
		if (!drawing.current) return;
		drawing.current = false;
		last.current = null;
		commit();
	}
	function undo() {
		const ctx = paintRef.current?.getContext("2d");
		const snap = undoRef.current.pop();
		if (!ctx || !snap) return;
		ctx.putImageData(snap, 0, 0);
		setUndoCount(undoRef.current.length);
		audio().bonk();
		render();
		commit();
	}
	function clearPage() {
		const paint = paintRef.current;
		const ctx = paint?.getContext("2d");
		if (!ctx || !paint) return;
		pushUndo();
		ctx.clearRect(0, 0, paint.width, paint.height);
		usedRef.current.clear();
		setConfirmClear(false);
		audio().bonk();
		render();
		commit();
	}
	function download() {
		const view = viewRef.current;
		if (!view) return;
		render();
		const link = document.createElement("a");
		link.href = view.toDataURL("image/jpeg", .92);
		link.download = `rexilandia-${page?.id ?? "dibujo"}.jpg`;
		link.click();
		audio().fanfare();
	}
	function choosePage(id) {
		if (id === pageId) return;
		commit();
		setIdeaOpen(false);
		setConfirmClear(false);
		setPageId(id);
		audio().blip();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "screen studio",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "filmstrip",
				children: COLOR_PAGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "thumb",
					"aria-label": item.name,
					"aria-current": item.id === pageId,
					onClick: () => choosePage(item.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.line,
						alt: ""
					})
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "paper-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: viewRef,
					className: "sheet",
					width: 600,
					height: 800,
					onPointerDown: onDown,
					onPointerMove: onMove,
					onPointerUp: onUp,
					onPointerCancel: onUp
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "studio-tools",
				children: [
					status === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "status-line",
						children: "Preparando la lámina…"
					}),
					status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "status-line",
						children: "No se pudo abrir este dibujo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tool-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "tool",
								"aria-pressed": tool === "brush",
								onClick: () => setTool("brush"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paintbrush, {}), " Pincel"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "tool",
								"aria-pressed": tool === "fill",
								onClick: () => setTool("fill"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaintBucket, {}), " Bote"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "tool",
								"aria-pressed": tool === "erase",
								onClick: () => setTool("erase"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eraser, {}), " Goma"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "tool",
								onClick: undo,
								disabled: undoCount === 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, {}), " Deshacer"]
							}),
							page?.idea && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "tool",
								onClick: () => setIdeaOpen(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {}), " Idea"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "tool",
								onClick: download,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), " Guardar"]
							}),
							confirmClear ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "kid-btn",
								onClick: clearPage,
								children: "Sí, borrar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "kid-btn alt",
								onClick: () => setConfirmClear(false),
								children: "No"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "tool",
								onClick: () => setConfirmClear(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), " Borrar"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-row",
						children: [
							16,
							30,
							48
						].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "size-dot",
							"aria-label": `Grosor ${value}`,
							"aria-pressed": size === value,
							onClick: () => setSize(value),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
								width: value / 3.2,
								height: value / 3.2
							} })
						}, value))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "crayon-row",
						children: CRAYONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "crayon",
							style: { background: item.hex },
							"aria-label": item.name,
							"aria-pressed": crayonId === item.id,
							onClick: () => {
								setCrayonId(item.id);
								if (tool === "erase") setTool("brush");
								audio().blip();
							}
						}, item.id))
					})
				]
			}),
			ideaOpen && page?.idea && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "idea-pop",
				onClick: () => setIdeaOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "idea-card",
					onClick: (event) => event.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: page.idea,
							alt: ""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Así puede quedar ",
							page.name,
							". Ahora lo pintas tú."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "kid-btn",
							onClick: () => setIdeaOpen(false),
							children: "A pintar"
						})
					]
				})
			})
		]
	});
}
function PianoScreen() {
	const musicOn = useProgress((s) => s.musicOn);
	const muted = useProgress((s) => s.muted);
	const setMusicOn = useProgress((s) => s.setMusicOn);
	const addNotes = useProgress((s) => s.addNotes);
	const setSimon = useProgress((s) => s.setSimon);
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [lit, setLit] = (0, import_react.useState)(null);
	const [length, setLength] = (0, import_react.useState)(2);
	const seqRef = (0, import_react.useRef)([]);
	const posRef = (0, import_react.useRef)(0);
	const timers = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		return () => timers.current.forEach((id) => window.clearTimeout(id));
	}, []);
	function playIndex(index) {
		const key = KEYS[index];
		if (!key) return;
		setLit(index);
		audio().key(key.freq);
		const off = window.setTimeout(() => setLit((current) => current === index ? null : current), 280);
		timers.current.push(off);
	}
	function playSequence(seq) {
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
	function begin(nextLength) {
		timers.current.forEach((id) => window.clearTimeout(id));
		timers.current = [];
		const seq = Array.from({ length: nextLength }, () => Math.floor(Math.random() * KEYS.length));
		seqRef.current = seq;
		setLength(nextLength);
		playSequence(seq);
	}
	function press(index) {
		if (!KEYS[index]) return;
		if (phase !== "input") {
			playIndex(index);
			addNotes(1);
			return;
		}
		playIndex(index);
		addNotes(1);
		if (index !== seqRef.current[posRef.current]) {
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
	const message = phase === "demo" ? "Escucha…" : phase === "input" ? `Tu turno · ${length} notas` : phase === "ok" ? "¡Canción completa!" : phase === "nope" ? "Casi. Prueba otra vez." : "Toca las teclas o pulsa Repite.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "screen piano-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "stack",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "piano-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Piano" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: message }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "La canción de fondo es un piano suave, hecho para esta app." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tool-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "kid-btn",
							onClick: () => {
								const next = !musicOn;
								setMusicOn(next);
								audio().setMuted(muted);
								audio().setMusic(next && !muted);
							},
							children: musicOn ? "Parar canción" : "Canción de piano"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "kid-btn alt",
							onClick: () => begin(phase === "ok" ? 4 : 2),
							children: phase === "idle" ? "Repite" : "Otra vez"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "piano",
						children: KEYS.map((key, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: lit === index ? `key key-${key.tone} lit` : `key key-${key.tone}`,
							onPointerDown: () => press(index),
							children: key.name
						}, key.id))
					})
				]
			})
		})
	});
}
function makeRound() {
	const correct = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
	const others = ANIMALS.filter((animal) => animal.id !== correct?.id).sort(() => Math.random() - .5).slice(0, 3).map((animal) => animal.id);
	const options = correct ? [...others, correct.id].sort(() => Math.random() - .5) : others;
	return {
		correctId: correct?.id ?? "",
		options
	};
}
function RetosScreen() {
	const progress = useProgress();
	const retos = (0, import_react.useMemo)(() => retosOf({
		muted: progress.muted,
		musicOn: progress.musicOn,
		heard: progress.heard,
		coloredPages: progress.coloredPages,
		pageColors: progress.pageColors,
		paintings: progress.paintings,
		notesPlayed: progress.notesPlayed,
		simonBest: progress.simonBest,
		finds: progress.finds,
		seenRetos: progress.seenRetos
	}), [progress]);
	const [round, setRound] = (0, import_react.useState)(() => makeRound());
	const [mark, setMark] = (0, import_react.useState)(null);
	const correct = ANIMALS.find((animal) => animal.id === round.correctId);
	function guess(id) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stack",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "find-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"¿Dónde está ",
						correct?.name,
						"?"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Toca al animal correcto. Si aciertas, suena una fanfarria." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "find-options",
						children: round.options.map((id) => {
							const animal = ANIMALS.find((item) => item.id === id);
							if (!animal) return null;
							const className = mark === "good" && id === round.correctId ? "good" : mark === id ? "bad" : "";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className,
								onClick: () => guess(id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: animal.image,
									alt: animal.name
								})
							}, id);
						})
					})
				]
			}), retos.map((reto) => {
				const done = reto.value >= reto.goal;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: done ? "reto done" : "reto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							reto.title,
							" ",
							done ? "· listo" : ""
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: reto.detail }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bar",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: `${Math.round(reto.value / reto.goal * 100)}%` } })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							reto.value,
							" de ",
							reto.goal
						] })
					]
				}, reto.id);
			})]
		})
	});
}
var ACTIONS = [
	{
		id: "color",
		label: "Colorear",
		tone: "sky",
		icon: Palette
	},
	{
		id: "animals",
		label: "Animales",
		tone: "leaf",
		icon: PawPrint
	},
	{
		id: "retos",
		label: "Retos",
		tone: "grape",
		icon: Trophy
	},
	{
		id: "piano",
		label: "Piano",
		tone: "dino",
		icon: Music
	}
];
function RexApp() {
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
	const simonBest = useProgress((s) => s.simonBest);
	const finds = useProgress((s) => s.finds);
	const started = (0, import_react.useRef)(false);
	const queue = (0, import_react.useRef)([]);
	const [banner, setBanner] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		Promise.resolve(useProgress.persist.rehydrate()).then(() => setHydrated(true));
	}, [setHydrated]);
	const snapshot = {
		muted,
		musicOn,
		heard,
		coloredPages,
		pageColors,
		paintings: {},
		notesPlayed,
		simonBest,
		finds,
		seenRetos
	};
	const stars = starsOf(snapshot);
	const total = retosOf(snapshot).length;
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		const fresh = retosOf(snapshot).filter((reto) => reto.value >= reto.goal && !seenRetos.includes(reto.id));
		if (!fresh.length) return;
		for (const reto of fresh) seeReto(reto.id);
		queue.current.push(...fresh.slice(1).map((reto) => reto.title));
		setBanner(fresh[0]?.title ?? null);
		audio().fanfare();
	}, [
		hydrated,
		heard,
		coloredPages,
		pageColors,
		notesPlayed,
		simonBest,
		finds,
		seenRetos,
		seeReto
	]);
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
	function open(next) {
		wake();
		audio().blip();
		go(next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "app",
		onPointerDown: wake,
		children: [screen === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "home",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "home-bg",
					src: "/art/hero.jpg",
					alt: ""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "home-top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "logo",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rexi" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "landia" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tagline",
						children: "Colorea, escucha y juega"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "home-tools",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "disc disc-md disc-cream",
							"aria-label": musicOn ? "Parar música" : "Poner música",
							onClick: () => {
								const next = !musicOn;
								setMusicOn(next);
								audio().setMuted(muted);
								audio().setMusic(next && !muted);
								started.current = next && !muted;
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "disc disc-md disc-cream",
							"aria-label": muted ? "Activar sonido" : "Silencio",
							onClick: () => {
								const next = !muted;
								setMuted(next);
								audio().setMuted(next);
								if (next) audio().setMusic(false);
								else if (musicOn) {
									audio().setMusic(true);
									started.current = true;
								}
							},
							children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "home-spacer" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "home-actions",
					children: ACTIONS.map((action) => {
						const Icon = action.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "action",
							onClick: () => open(action.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `disc disc-lg disc-${action.tone}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "action-label",
								children: action.label
							})]
						}, action.id);
					})
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "topbar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "disc disc-md disc-cream",
						"aria-label": "Volver",
						onClick: () => open("home"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: screen === "color" ? "Colorear" : screen === "animals" ? "Animales" : screen === "retos" ? "Retos" : "Piano" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "star-pill",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {}),
							" ",
							stars,
							"/",
							total
						]
					})
				]
			}),
			screen === "color" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorStudio, {}),
			screen === "animals" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimalPark, {}),
			screen === "retos" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RetosScreen, {}),
			screen === "piano" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PianoScreen, {})
		] }), banner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "celebrate",
			onClick: closeBanner,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "celebrate-card",
				onClick: (event) => event.stopPropagation(),
				children: [
					CRAYONS.slice(0, 10).map((crayon, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
						className: "confetti",
						style: {
							left: `${8 + index * 9}%`,
							background: crayon.hex,
							animationDelay: `${index * .04}s`
						}
					}, crayon.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/art/animals/rex.jpg",
						alt: ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "¡Reto listo!" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: banner }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "kid-btn",
						onClick: closeBanner,
						children: "¡Genial!"
					})
				]
			})
		})]
	});
}
var SplitComponent = RexApp;
//#endregion
export { SplitComponent as component };
