export type KidVoice = "nina" | "nino" | "bebe";

export function kidOf(index: number): KidVoice {
  if (index % 6 === 5) return "bebe";
  return index % 2 === 0 ? "nina" : "nino";
}

export const KID_LABEL: Record<KidVoice, string> = {
  nina: "Niña",
  nino: "Niño",
  bebe: "Bebé",
};

export type AnimalGroup = "dinos" | "selva" | "granja" | "mar" | "bichos" | "magia" | "cosas";

export type VoiceId =
  | "roar"
  | "honk"
  | "bellow"
  | "screech"
  | "trumpet"
  | "hoot"
  | "chirp"
  | "croak"
  | "moo"
  | "quack"
  | "oink"
  | "baa"
  | "cluck"
  | "whistle"
  | "soft"
  | "whale";

export type Animal = {
  id: string;
  name: string;
  group: AnimalGroup;
  voice: VoiceId;
  say: string;
  fact: string;
  image: string;
};

export type ColorPage = {
  id: string;
  name: string;
  line?: string;
  photo?: string;
  idea?: string;
};

export const GROUPS: { id: "todos" | AnimalGroup; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "dinos", label: "Dinos" },
  { id: "selva", label: "Selva" },
  { id: "granja", label: "Granja" },
  { id: "mar", label: "Mar" },
  { id: "bichos", label: "Bichos" },
  { id: "magia", label: "Magia" },
  { id: "cosas", label: "Cosas" },
];

export const ANIMALS: Animal[] = [
  {
    id: "rex",
    name: "Rexito",
    group: "dinos",
    voice: "roar",
    say: "¡ROAAAR!",
    fact: "Sus brazos eran pequeñitos, pero su sonrisa de juego es enorme.",
    image: "/art/animals/rex.jpg",
  },
  {
    id: "triceratops",
    name: "Tripi",
    group: "dinos",
    voice: "honk",
    say: "¡GRAAA!",
    fact: "Tres cuernos y un gran collar de hueso protegían su cara.",
    image: "/art/animals/triceratops.jpg",
  },
  {
    id: "stego",
    name: "Steguito",
    group: "dinos",
    voice: "bellow",
    say: "¡MUUUM!",
    fact: "Las placas de la espalda lo hacían verse más grande.",
    image: "/art/animals/stego.jpg",
  },
  {
    id: "ptero",
    name: "Pterito",
    group: "dinos",
    voice: "screech",
    say: "¡IIIAK!",
    fact: "No era un dinosaurio: era un reptil que volaba sobre el mar.",
    image: "/art/animals/ptero.jpg",
  },
  {
    id: "brachio",
    name: "Brontín",
    group: "dinos",
    voice: "bellow",
    say: "¡MOOOH!",
    fact: "Su cuello largo llegaba a las hojas más altas.",
    image: "/art/animals/brachio.jpg",
  },
  {
    id: "leon",
    name: "Leoncito",
    group: "selva",
    voice: "roar",
    say: "¡GRAUR!",
    fact: "Los leones viven juntos en una familia: la manada.",
    image: "/art/animals/leon.jpg",
  },
  {
    id: "elefante",
    name: "Elefantito",
    group: "selva",
    voice: "trumpet",
    say: "¡PRUUU!",
    fact: "La trompa le sirve de nariz, de mano y de ducha.",
    image: "/art/animals/elefante.jpg",
  },
  {
    id: "mono",
    name: "Monito",
    group: "selva",
    voice: "hoot",
    say: "¡UH UH AH!",
    fact: "Se columpia de rama en rama y le encanta la fruta.",
    image: "/art/animals/mono.jpg",
  },
  {
    id: "loro",
    name: "Lorito",
    group: "selva",
    voice: "chirp",
    say: "¡CROAC-CÚ!",
    fact: "Con el pico curvo puede imitar un montón de sonidos.",
    image: "/art/animals/loro.jpg",
  },
  {
    id: "rana",
    name: "Ranita",
    group: "selva",
    voice: "croak",
    say: "¡CROAC!",
    fact: "Salta muy lejos y canta cuando empieza a llover.",
    image: "/art/animals/rana.jpg",
  },
  {
    id: "vaca",
    name: "Vaquita",
    group: "granja",
    voice: "moo",
    say: "¡MUUU!",
    fact: "Dice muu y de ella sale la leche del desayuno.",
    image: "/art/animals/vaca.jpg",
  },
  {
    id: "pato",
    name: "Patito",
    group: "granja",
    voice: "quack",
    say: "¡CUAC!",
    fact: "Sus patas palmeadas son como remos para nadar.",
    image: "/art/animals/pato.jpg",
  },
  {
    id: "cerdo",
    name: "Policerdito",
    group: "granja",
    voice: "oink",
    say: "¡OINC!",
    fact: "Se revuelca en el barro para no pasar calor.",
    image: "/art/animals/cerdo.jpg",
  },
  {
    id: "oveja",
    name: "Ovejita",
    group: "granja",
    voice: "baa",
    say: "¡BEEE!",
    fact: "Su lana espesa abriga cuando hace frío.",
    image: "/art/animals/oveja.jpg",
  },
  {
    id: "gallina",
    name: "Gallinita",
    group: "granja",
    voice: "cluck",
    say: "¡CLO CLÓ!",
    fact: "Cuida los huevos hasta que sale el pollito.",
    image: "/art/animals/gallina.jpg",
  },
  {
    id: "delfin",
    name: "Delfi",
    group: "mar",
    voice: "whistle",
    say: "¡IIII!",
    fact: "Habla con silbidos y salta fuera del agua.",
    image: "/art/animals/delfin.jpg",
  },
  {
    id: "tortuga",
    name: "Tortuguita",
    group: "mar",
    voice: "soft",
    say: "¡MMMH!",
    fact: "Nada despacito y guarda la cabeza en el caparazón.",
    image: "/art/animals/tortuga.jpg",
  },
  {
    id: "ballena",
    name: "Ballenita",
    group: "mar",
    voice: "whale",
    say: "¡UUUUUH!",
    fact: "Canta canciones muy bajitas por todo el mar.",
    image: "/art/animals/ballena.jpg",
  },
  { id: "anqui", name: "Anqui", group: "dinos", voice: "bellow", say: "¡BOM BOM!", fact: "Tiene una colita con una bolita para jugar.", image: "/art/animals/anqui.jpg" },
  { id: "rapito", name: "Rapito", group: "dinos", voice: "screech", say: "¡PIP PIP!", fact: "Corre más rápido que un trompo.", image: "/art/animals/rapito.jpg" },
  { id: "osito", name: "Osito", group: "selva", voice: "roar", say: "¡GRRR SUAVE!", fact: "Le gustan los abrazos y la miel.", image: "/art/animals/osito.jpg" },
  { id: "tigrito", name: "Tigrito", group: "selva", voice: "roar", say: "¡RAWR!", fact: "Sus rayitas son como un pijama.", image: "/art/animals/tigrito.jpg" },
  { id: "cebrita", name: "Cebrita", group: "selva", voice: "honk", say: "¡JIII!", fact: "Lleva un vestido de rayas.", image: "/art/animals/cebrita.jpg" },
  { id: "jirafita", name: "Jirafita", group: "selva", voice: "soft", say: "¡MMM!", fact: "Su cuello llega a las nubes de hojas.", image: "/art/animals/jirafita.jpg" },
  { id: "hipito", name: "Hipito", group: "selva", voice: "honk", say: "¡HONK!", fact: "Es redondito y chapotea en el río.", image: "/art/animals/hipito.jpg" },
  { id: "pandita", name: "Pandita", group: "selva", voice: "hoot", say: "¡ÑAM ÑAM!", fact: "Come bambú y se abraza mucho.", image: "/art/animals/pandita.jpg" },
  { id: "zorrito", name: "Zorrito", group: "selva", voice: "chirp", say: "¡YIP YIP!", fact: "Su cola es un plumero naranja.", image: "/art/animals/zorrito.jpg" },
  { id: "buhito", name: "Buhito", group: "selva", voice: "hoot", say: "¡UU UU!", fact: "De noche dice uu y de día duerme.", image: "/art/animals/buhito.jpg" },
  { id: "cangurito", name: "Cangurito", group: "selva", voice: "honk", say: "¡BOING!", fact: "Salta y guarda a su bebé en el bolsillo.", image: "/art/animals/cangurito.jpg" },
  { id: "koalita", name: "Koalita", group: "selva", voice: "soft", say: "¡ZZZ!", fact: "Abraza el árbol y sueña despacito.", image: "/art/animals/koalita.jpg" },
  { id: "mapachito", name: "Mapachito", group: "selva", voice: "chirp", say: "¡CHII!", fact: "Lleva un antifaz de pícaro.", image: "/art/animals/mapachito.jpg" },
  { id: "rinito", name: "Rinito", group: "selva", voice: "bellow", say: "¡BUF BUF!", fact: "Tiene un cuernito en la nariz.", image: "/art/animals/rinito.jpg" },
  { id: "coquito", name: "Coquito", group: "selva", voice: "honk", say: "¡CLAC!", fact: "Sonríe con muchos dientecitos.", image: "/art/animals/coquito.jpg" },
  { id: "perezo", name: "Perezo", group: "selva", voice: "soft", say: "¡AAAAH!", fact: "Se mueve muy, muy despacito.", image: "/art/animals/perezo.jpg" },
  { id: "pollito", name: "Pollito", group: "granja", voice: "chirp", say: "¡PÍO PÍO!", fact: "Acaba de salir del huevito.", image: "/art/animals/pollito.jpg" },
  { id: "conejito", name: "Conejito", group: "granja", voice: "soft", say: "¡ÑIC ÑIC!", fact: "Sus orejas oyen todo el prado.", image: "/art/animals/conejito.jpg" },
  { id: "gatito", name: "Gatito", group: "granja", voice: "chirp", say: "¡MIAU!", fact: "Dice miau y le gusta el sol.", image: "/art/animals/gatito.jpg" },
  { id: "perrito", name: "Perrito", group: "granja", voice: "hoot", say: "¡GUAU GUAU!", fact: "Mueve la cola cuando te ve.", image: "/art/animals/perrito.jpg" },
  { id: "caballito", name: "Caballito", group: "granja", voice: "honk", say: "¡JIIII!", fact: "Galopa por el campo de flores.", image: "/art/animals/caballito.jpg" },
  { id: "cabrita", name: "Cabrita", group: "granja", voice: "baa", say: "¡BEE BEE!", fact: "Brinca por las piedritas.", image: "/art/animals/cabrita.jpg" },
  { id: "burrito", name: "Burrito", group: "granja", voice: "honk", say: "¡III-AAH!", fact: "Sus orejas son enormes y suaves.", image: "/art/animals/burrito.jpg" },
  { id: "pececito", name: "Pececito", group: "mar", voice: "whistle", say: "¡BLUB BLUB!", fact: "Nada entre las burbujas.", image: "/art/animals/pececito.jpg" },
  { id: "pulpito", name: "Pulpito", group: "mar", voice: "soft", say: "¡GLUP GLUP!", fact: "Tiene ocho bracitos para abrazar.", image: "/art/animals/pulpito.jpg" },
  { id: "foquita", name: "Foquita", group: "mar", voice: "hoot", say: "¡ARF ARF!", fact: "Aplaude con las aletas.", image: "/art/animals/foquita.jpg" },
  { id: "medusita", name: "Medusita", group: "mar", voice: "whale", say: "¡BLUB!", fact: "Flota como un paraguas rosa.", image: "/art/animals/medusita.jpg" },
  { id: "estrellita", name: "Estrellita", group: "mar", voice: "soft", say: "¡HOLA!", fact: "Es una estrellita que vive en el mar.", image: "/art/animals/estrellita.jpg" },
  { id: "tiburin", name: "Tiburín", group: "mar", voice: "bellow", say: "¡ÑAM!", fact: "Sonríe y nada muy rápido.", image: "/art/animals/tiburin.jpg" },
  { id: "pinzitas", name: "Pinzitas", group: "mar", voice: "honk", say: "¡CLAC CLAC!", fact: "Camina de lado por la arena.", image: "/art/animals/pinzitas.jpg" },
  { id: "abejita", name: "Abejita", group: "bichos", voice: "chirp", say: "¡BZZZ BZZZ!", fact: "Hace miel y zumba en las flores.", image: "/art/animals/abejita.jpg" },
  { id: "mari", name: "Mari", group: "bichos", voice: "soft", say: "¡FLIP FLIP!", fact: "Sus alas parecen un dibujo.", image: "/art/animals/mari.jpg" },
  { id: "pingui", name: "Pingüi", group: "bichos", voice: "honk", say: "¡AAK AAK!", fact: "Lleva esmoquin y se desliza.", image: "/art/animals/pingui.jpg" },
  { id: "flamencito", name: "Flamencito", group: "bichos", voice: "honk", say: "¡ONK ONK!", fact: "Es rosa y se aguanta en una pata.", image: "/art/animals/flamencito.jpg" },
  { id: "palomita", name: "Palomita", group: "bichos", voice: "chirp", say: "¡RUU RUU!", fact: "Vuela suavecito por el cielo.", image: "/art/animals/palomita.jpg" },
  { id: "caracolin", name: "Caracolín", group: "bichos", voice: "soft", say: "¡DESPACITO!", fact: "Lleva su casita a cuestas.", image: "/art/animals/caracolin.jpg" },
  { id: "hormiguita", name: "Hormiguita", group: "bichos", voice: "chirp", say: "¡TIP TIP!", fact: "Trabaja en equipo con sus amigas.", image: "/art/animals/hormiguita.jpg" },
  { id: "draguito", name: "Draguito", group: "magia", voice: "roar", say: "¡FUEGO!", fact: "Un dragón bebé naranja que quiere jugar.", image: "/art/animals/draguito.jpg" },
  { id: "azulon", name: "Azulón", group: "magia", voice: "bellow", say: "¡SPLASH!", fact: "Dragón del agua, chapotea y sonríe.", image: "/art/animals/azulon.jpg" },
  { id: "verdin", name: "Verdín", group: "magia", voice: "soft", say: "¡HOJA!", fact: "Vive entre las hojas más verdes.", image: "/art/animals/verdin.jpg" },
  { id: "rosita", name: "Rosita", group: "magia", voice: "chirp", say: "¡HOLA ROSA!", fact: "Dragón rosa con una cola de corazón.", image: "/art/animals/rosita.jpg" },
  { id: "chispas", name: "Chispas", group: "magia", voice: "screech", say: "¡CHIS CHIS!", fact: "Es pequeñito y suelta chispas de juego.", image: "/art/animals/chispas.jpg" },
  { id: "unicornin", name: "Unicornín", group: "magia", voice: "whistle", say: "¡TIN TIN!", fact: "Su cuerno brilla y su melena es arcoíris.", image: "/art/animals/unicornin.jpg" },
  { id: "fenixito", name: "Fenixito", group: "magia", voice: "chirp", say: "¡FLAM!", fact: "Un pajarito de fuego muy amigo.", image: "/art/animals/fenixito.jpg" },
  { id: "pegasito", name: "Pegasito", group: "magia", voice: "honk", say: "¡JIII!", fact: "Caballito con alitas de nube.", image: "/art/animals/pegasito.jpg" },
  { id: "espinin", name: "Espinín", group: "dinos", voice: "roar", say: "¡VELA VELA!", fact: "Lleva una vela en la espalda, como un barquito.", image: "/art/animals/espinin.jpg" },
  { id: "diplin", name: "Diplín", group: "dinos", voice: "bellow", say: "¡CUELLO!", fact: "Su cuello es tan largo que casi toca las nubes.", image: "/art/animals/diplin.jpg" },
  { id: "parita", name: "Parita", group: "dinos", voice: "trumpet", say: "¡TUUU!", fact: "El tubito de la cabeza suena como una trompeta.", image: "/art/animals/parita.jpg" },
  { id: "paquito", name: "Paquito", group: "dinos", voice: "honk", say: "¡TOC TOC!", fact: "Su cabeza redonda es un casco para jugar.", image: "/art/animals/paquito.jpg" },
  { id: "estirin", name: "Estirín", group: "dinos", voice: "honk", say: "¡PINCHOS!", fact: "El collar de pinchos es de adorno, para jugar.", image: "/art/animals/estirin.jpg" },
  { id: "carnotin", name: "Carnotín", group: "dinos", voice: "roar", say: "¡TORITO!", fact: "Tiene dos cuernitos y brazos pequeñitos.", image: "/art/animals/carnotin.jpg" },
  { id: "iguanin", name: "Iguanín", group: "dinos", voice: "soft", say: "¡HOLA HOJA!", fact: "Come hojas y tiene un pincho en el pulgar.", image: "/art/animals/iguanin.jpg" },
  { id: "gallimin", name: "Gallimín", group: "dinos", voice: "screech", say: "¡CORRE!", fact: "Corre con patas largas, como una avestruz.", image: "/art/animals/gallimin.jpg" },
  { id: "teri", name: "Teri", group: "dinos", voice: "soft", say: "¡GARRA AMIGA!", fact: "Sus garras largas alcanzan las hojas más altas.", image: "/art/animals/teri.jpg" },
  { id: "plesi", name: "Plesi", group: "dinos", voice: "whale", say: "¡NADANDO!", fact: "Nadaba con aletas y un cuello de cisne.", image: "/art/animals/plesi.jpg" },
  { id: "yuti", name: "Yuti", group: "dinos", voice: "chirp", say: "¡PLUMAS!", fact: "Está cubierto de plumitas suaves.", image: "/art/animals/yuti.jpg" },
  { id: "quetzi", name: "Quetzi", group: "dinos", voice: "screech", say: "¡VUELA!", fact: "Un volador enorme con alas de tela.", image: "/art/animals/quetzi.jpg" },
  { id: "amargin", name: "Amarguín", group: "dinos", voice: "bellow", say: "¡ESPINAS!", fact: "Dos filas de espinas le decoran el cuello.", image: "/art/animals/amargin.jpg" },
  { id: "compis", name: "Compis", group: "dinos", voice: "chirp", say: "¡PIP!", fact: "Es diminuto: cabe en tus manos.", image: "/art/animals/compis.jpg" },
  { id: "kentrin", name: "Kentrín", group: "dinos", voice: "honk", say: "¡PIN PIN!", fact: "Lleva platos y pinchos por toda la espalda.", image: "/art/animals/kentrin.jpg" },
  { id: "arqui", name: "Arqui", group: "dinos", voice: "chirp", say: "¡PLUMITA!", fact: "Tiene plumas y es un pajarito muy antiguo.", image: "/art/animals/arqui.jpg" },
  { id: "volcanito", name: "Volcancito", group: "cosas", voice: "roar", say: "¡BUM SUAVE!", fact: "Un volcán de juguete que sonríe.", image: "/art/animals/volcanito.jpg" },
  { id: "palmerita", name: "Palmerita", group: "cosas", voice: "soft", say: "¡HOJAS!", fact: "Da sombra para la siesta de los dinos.", image: "/art/animals/palmerita.jpg" },
  { id: "florcita", name: "Florcita", group: "cosas", voice: "chirp", say: "¡HOLA FLOR!", fact: "Sus pétalos se pintan de mil colores.", image: "/art/animals/florcita.jpg" },
  { id: "solcito", name: "Solcito", group: "cosas", voice: "whistle", say: "¡BRILLO!", fact: "Sale cada mañana para iluminar el juego.", image: "/art/animals/solcito.jpg" },
  { id: "casita", name: "Casita", group: "cosas", voice: "soft", say: "¡BIENVENIDA!", fact: "Una casita redonda para los amigos.", image: "/art/animals/casita.jpg" },
  { id: "huesito", name: "Huesito", group: "cosas", voice: "honk", say: "¡CLAC!", fact: "Un huesito de juguete, amigo de los dinos.", image: "/art/animals/huesito.jpg" },
  { id: "coronita", name: "Coronita", group: "cosas", voice: "whistle", say: "¡REY!", fact: "Una corona de colores para jugar a reyes.", image: "/art/animals/coronita.jpg" },
  { id: "arcoiris", name: "Arcoíris", group: "cosas", voice: "chirp", say: "¡COLORES!", fact: "Sale después de la lluvia con todos los colores.", image: "/art/animals/arcoiris.jpg" },
  { id: "heladito", name: "Heladito", group: "cosas", voice: "soft", say: "¡ÑAM FRÍO!", fact: "Tres bolas: rosa, amarillo y menta.", image: "/art/animals/heladito.jpg" },
  { id: "globito", name: "Globito", group: "cosas", voice: "whistle", say: "¡ARRIBA!", fact: "Un globo rosa que quiere volar.", image: "/art/animals/globito.jpg" },
];

export const COLOR_PAGES: ColorPage[] = [
  { id: "rex", name: "Rexito", line: "/art/color/rex.jpg", idea: "/art/animals/rex.jpg" },
  {
    id: "triceratops",
    name: "Tripi",
    line: "/art/color/triceratops.jpg",
    idea: "/art/animals/triceratops.jpg",
  },
  { id: "stego", name: "Steguito", line: "/art/color/stego.jpg", idea: "/art/animals/stego.jpg" },
  { id: "eggs", name: "Huevos", line: "/art/color/eggs.jpg" },
  { id: "leon", name: "Leoncito", line: "/art/color/leon.jpg", idea: "/art/animals/leon.jpg" },
  {
    id: "elefante",
    name: "Elefantito",
    line: "/art/color/elefante.jpg",
    idea: "/art/animals/elefante.jpg",
  },
  { id: "loro", name: "Lorito", line: "/art/color/loro.jpg", idea: "/art/animals/loro.jpg" },
  { id: "tortuga", name: "Tortuguita", line: "/art/color/tortuga.jpg", idea: "/art/animals/tortuga.jpg" },
  { id: "cerdo", name: "Policerdito", line: "/art/color/cerdo.jpg", idea: "/art/animals/cerdo.jpg" },
  { id: "vaca", name: "Vaquita", line: "/art/color/vaca.jpg", idea: "/art/animals/vaca.jpg" },
  { id: "pato", name: "Patito", line: "/art/color/pato.jpg", idea: "/art/animals/pato.jpg" },
  { id: "gallina", name: "Gallinita", line: "/art/color/gallina.jpg", idea: "/art/animals/gallina.jpg" },
  { id: "oveja", name: "Ovejita", line: "/art/color/oveja.jpg", idea: "/art/animals/oveja.jpg" },
  { id: "gatito", name: "Gatito", line: "/art/color/gatito.jpg", idea: "/art/animals/gatito.jpg" },
  { id: "perrito", name: "Perrito", line: "/art/color/perrito.jpg", idea: "/art/animals/perrito.jpg" },
  { id: "mono", name: "Monito", line: "/art/color/mono.jpg", idea: "/art/animals/mono.jpg" },
  { id: "delfin", name: "Delfi", line: "/art/color/delfin.jpg", idea: "/art/animals/delfin.jpg" },
  { id: "osito", name: "Osito", line: "/art/color/osito.jpg", idea: "/art/animals/osito.jpg" },
  { id: "rana", name: "Ranita", line: "/art/color/rana.jpg", idea: "/art/animals/rana.jpg" },
  { id: "ballena", name: "Ballenita", line: "/art/color/ballena.jpg", idea: "/art/animals/ballena.jpg" },
  { id: "tigrito", name: "Tigrito", line: "/art/color/tigrito.jpg", idea: "/art/animals/tigrito.jpg" },
  { id: "jirafita", name: "Jirafita", line: "/art/color/jirafita.jpg", idea: "/art/animals/jirafita.jpg" },
  { id: "pollito", name: "Pollito", line: "/art/color/pollito.jpg", idea: "/art/animals/pollito.jpg" },
  { id: "conejito", name: "Conejito", line: "/art/color/conejito.jpg", idea: "/art/animals/conejito.jpg" },
  { id: "caballito", name: "Caballito", line: "/art/color/caballito.jpg", idea: "/art/animals/caballito.jpg" },
  { id: "pulpito", name: "Pulpito", line: "/art/color/pulpito.jpg", idea: "/art/animals/pulpito.jpg" },
  { id: "abejita", name: "Abejita", line: "/art/color/abejita.jpg", idea: "/art/animals/abejita.jpg" },
  { id: "ptero", name: "Pterito", line: "/art/color/ptero.jpg", idea: "/art/animals/ptero.jpg" },
  { id: "draguito", name: "Draguito", line: "/art/color/draguito.jpg", idea: "/art/animals/draguito.jpg" },
  { id: "azulon", name: "Azulón", line: "/art/color/azulon.jpg", idea: "/art/animals/azulon.jpg" },
  { id: "verdin", name: "Verdín", line: "/art/color/verdin.jpg", idea: "/art/animals/verdin.jpg" },
  { id: "rosita", name: "Rosita", line: "/art/color/rosita.jpg", idea: "/art/animals/rosita.jpg" },
  { id: "chispas", name: "Chispas", line: "/art/color/chispas.jpg", idea: "/art/animals/chispas.jpg" },
  { id: "unicornin", name: "Unicornín", line: "/art/color/unicornin.jpg", idea: "/art/animals/unicornin.jpg" },
  { id: "fenixito", name: "Fenixito", line: "/art/color/fenixito.jpg", idea: "/art/animals/fenixito.jpg" },
  { id: "pegasito", name: "Pegasito", line: "/art/color/pegasito.jpg", idea: "/art/animals/pegasito.jpg" },
  { id: "paisaje", name: "Paisaje", line: "/art/color/paisaje.jpg", idea: "/art/hero.jpg" },
  { id: "espinin", name: "Espinín", line: "/art/color/espinin.jpg", idea: "/art/animals/espinin.jpg" },
  { id: "diplin", name: "Diplín", line: "/art/color/diplin.jpg", idea: "/art/animals/diplin.jpg" },
  { id: "parita", name: "Parita", line: "/art/color/parita.jpg", idea: "/art/animals/parita.jpg" },
  { id: "paquito", name: "Paquito", line: "/art/color/paquito.jpg", idea: "/art/animals/paquito.jpg" },
  { id: "estirin", name: "Estirín", line: "/art/color/estirin.jpg", idea: "/art/animals/estirin.jpg" },
  { id: "carnotin", name: "Carnotín", line: "/art/color/carnotin.jpg", idea: "/art/animals/carnotin.jpg" },
  { id: "iguanin", name: "Iguanín", line: "/art/color/iguanin.jpg", idea: "/art/animals/iguanin.jpg" },
  { id: "gallimin", name: "Gallimín", line: "/art/color/gallimin.jpg", idea: "/art/animals/gallimin.jpg" },
  { id: "teri", name: "Teri", line: "/art/color/teri.jpg", idea: "/art/animals/teri.jpg" },
  { id: "plesi", name: "Plesi", line: "/art/color/plesi.jpg", idea: "/art/animals/plesi.jpg" },
  { id: "yuti", name: "Yuti", line: "/art/color/yuti.jpg", idea: "/art/animals/yuti.jpg" },
  { id: "quetzi", name: "Quetzi", line: "/art/color/quetzi.jpg", idea: "/art/animals/quetzi.jpg" },
  { id: "amargin", name: "Amarguín", line: "/art/color/amargin.jpg", idea: "/art/animals/amargin.jpg" },
  { id: "compis", name: "Compis", line: "/art/color/compis.jpg", idea: "/art/animals/compis.jpg" },
  { id: "kentrin", name: "Kentrín", line: "/art/color/kentrin.jpg", idea: "/art/animals/kentrin.jpg" },
  { id: "arqui", name: "Arqui", line: "/art/color/arqui.jpg", idea: "/art/animals/arqui.jpg" },
  { id: "anqui", name: "Anqui", line: "/art/color/anqui.jpg", idea: "/art/animals/anqui.jpg" },
  { id: "brachio", name: "Brontín", line: "/art/color/brachio.jpg", idea: "/art/animals/brachio.jpg" },
  { id: "rapito", name: "Rapito", line: "/art/color/rapito.jpg", idea: "/art/animals/rapito.jpg" },
  { id: "volcanito", name: "Volcancito", line: "/art/color/volcanito.jpg", idea: "/art/animals/volcanito.jpg" },
  { id: "palmerita", name: "Palmerita", line: "/art/color/palmerita.jpg", idea: "/art/animals/palmerita.jpg" },
  { id: "florcita", name: "Florcita", line: "/art/color/florcita.jpg", idea: "/art/animals/florcita.jpg" },
  { id: "solcito", name: "Solcito", line: "/art/color/solcito.jpg", idea: "/art/animals/solcito.jpg" },
  { id: "casita", name: "Casita", line: "/art/color/casita.jpg", idea: "/art/animals/casita.jpg" },
  { id: "huesito", name: "Huesito", line: "/art/color/huesito.jpg", idea: "/art/animals/huesito.jpg" },
  { id: "coronita", name: "Coronita", line: "/art/color/coronita.jpg", idea: "/art/animals/coronita.jpg" },
  { id: "arcoiris", name: "Arcoíris", line: "/art/color/arcoiris.jpg", idea: "/art/animals/arcoiris.jpg" },
  { id: "heladito", name: "Heladito", line: "/art/color/heladito.jpg", idea: "/art/animals/heladito.jpg" },
  { id: "globito", name: "Globito", line: "/art/color/globito.jpg", idea: "/art/animals/globito.jpg" },
];

export type ColorBook = "dinos" | "cosas" | "lineas" | "amigos" | "paisaje";

export function pagesFor(book: ColorBook): ColorPage[] {
  if (book === "paisaje") return [{ id: "paisaje-foto", name: "Paisaje", photo: "/art/hero.jpg" }];
  if (book === "amigos") {
    return ANIMALS.map((animal) => ({ id: `foto-${animal.id}`, name: animal.name, photo: animal.image }));
  }
  if (book === "dinos" || book === "cosas") {
    const ids = new Set(ANIMALS.filter((animal) => animal.group === book).map((animal) => animal.id));
    return COLOR_PAGES.filter((page) => ids.has(page.id));
  }
  return COLOR_PAGES;
}

export const CRAYONS = [
  { id: "chicle", hex: "#ff2bd6", name: "Chicle", glow: true },
  { id: "solazo", hex: "#fff200", name: "Solazo", glow: true },
  { id: "limaluz", hex: "#d6ff00", name: "Lima luz", glow: true },
  { id: "rayo", hex: "#00f6ff", name: "Rayo", glow: true },
  { id: "magia", hex: "#e100ff", name: "Magia", glow: true },
  { id: "fuego", hex: "#ff3b00", name: "Fuego", glow: true },
  { id: "naranjafuego", hex: "#ff6a00", name: "Naranja fuego", glow: true },
  { id: "rosafluo", hex: "#ff4d9a", name: "Rosa fluo", glow: true },
  { id: "verdefluo", hex: "#00ff85", name: "Verde fluo", glow: true },
  { id: "azulfluo", hex: "#4d7cff", name: "Azul fluo", glow: true },
  { id: "naranja", hex: "#ff7a00", name: "Naranja" },
  { id: "amarillo", hex: "#ffe600", name: "Amarillo" },
  { id: "rojo", hex: "#ff2a2a", name: "Rojo" },
  { id: "rosa", hex: "#ff4f93", name: "Rosa" },
  { id: "morado", hex: "#b44dff", name: "Morado" },
  { id: "azul", hex: "#1aa7ff", name: "Azul" },
  { id: "cielo", hex: "#7ad7ff", name: "Cielo" },
  { id: "verde", hex: "#00d26a", name: "Verde" },
  { id: "hoja", hex: "#b6ff3c", name: "Hoja" },
  { id: "agua", hex: "#00e0d0", name: "Agua" },
  { id: "crema", hex: "#ffe7a8", name: "Crema" },
  { id: "dorado", hex: "#ffd000", name: "Dorado" },
  { id: "fucsia", hex: "#ff2f86", name: "Fucsia" },
  { id: "menta", hex: "#5dffe0", name: "Menta" },
  { id: "coral", hex: "#ff6a45", name: "Coral" },
  { id: "melocoton", hex: "#ffb085", name: "Melocotón" },
  { id: "lila", hex: "#d0a6ff", name: "Lila" },
  { id: "marino", hex: "#2456c9", name: "Marino" },
  { id: "marron", hex: "#c47a32", name: "Marrón" },
  { id: "chocolate", hex: "#7a4a28", name: "Chocolate" },
  { id: "negro", hex: "#222222", name: "Negro" },
  { id: "blanco", hex: "#ffffff", name: "Blanco" },
] as const;

export type CrayonId = (typeof CRAYONS)[number]["id"];

export const NEON_IDS = ["chicle", "limaluz", "solazo", "rayo", "magia", "fuego", "naranjafuego", "rosafluo", "verdefluo", "azulfluo"] as const;

export const TRACKS = [
  { id: "fiesta", label: "Fiesta" },
  { id: "saltitos", label: "Saltitos" },
] as const;

export type TrackId = (typeof TRACKS)[number]["id"];

export const KEYS = [
  { id: "do", name: "Do", freq: 261.63, tone: "dino" },
  { id: "re", name: "Re", freq: 293.66, tone: "sun" },
  { id: "mi", name: "Mi", freq: 329.63, tone: "leaf" },
  { id: "fa", name: "Fa", freq: 349.23, tone: "water" },
  { id: "sol", name: "Sol", freq: 392, tone: "sky" },
  { id: "la", name: "La", freq: 440, tone: "grape" },
  { id: "si", name: "Si", freq: 493.88, tone: "rose" },
  { id: "do2", name: "Do", freq: 523.25, tone: "cream" },
] as const;

/** Original pentatonic lullaby written for this app. Indices into KEYS. */
export const SONG: number[] = [0, 2, 4, 2, 5, 4, 2, 1, 0, 4, 5, 4, 2, 0, 1, 0, 2, 4, 7, 5, 4, 2, 1, 0];
