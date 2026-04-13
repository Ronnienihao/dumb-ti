export interface Personality {
  name: string;
  quote: string;
  description: string;
  image: string;
  axes: { E: number; S: number; M: number; V: number };
}
export const personalities: Record<string, Personality> = {
  STAR: {
    name: "STAR",
    quote: "The universe is a poorly funded indie film, and I'm the only A-lister on set.",
    description: "You wake up every day and choose main character energy. You hustle, you glow, and you are proudly delulu enough to turn a grocery run into a cinematic masterpiece. Sure, your dramatic flair might make people roll their eyes, but your raw, unapologetic \"I'm the IT girl/boy\" vitality is honestly iconic. You magnificent, exhausting star—never let anyone dim your premium lighting.",
    image: "/assets/personalities/STAR.jpg",
    axes: { E: 0.8, S: 0.9, M: 0.8, V: 0.9 },
  },
  STAN: {
    name: "STAN",
    quote: "I will take a bullet for my bestie, but I need to mentally prepare to order a pizza.",
    description: "The ultimate ride-or-die. You channel all your hustle, glow, and romantic filters into hyping up literally everyone but yourself. If your bestie or bias needs defense, you're throwing hands; if you need help, you apologize for existing. You absolute gem, when are you going to start stanning yourself?",
    image: "/assets/personalities/STAN.jpg",
    axes: { E: 0.8, S: 0.7, M: 0.7, V: -0.7 },
  },
  HELP: {
    name: "HELP",
    quote: "I'm having a severe mental breakdown, but make it aesthetic.",
    description: "You are a high-functioning disaster. You see the world for the burning trash fire it is, yet you still put on a full face of makeup to go fix it. You've somehow weaponized your own burnout, turning a mental breakdown into a breathtaking performance. Honestly, your ability to slay while hanging by a thread is a terrifying superpower. Please schedule a nap.",
    image: "/assets/personalities/HELP.jpg",
    axes: { E: 0.9, S: 0.8, M: -0.6, V: 0.7 },
  },
  BOSS: {
    name: "BOSS",
    quote: "I don't have a personality, I have a career. Just kidding, I only have back pain.",
    description: "Capitalism's favorite premium soldier. You see right through the corporate matrix, completely stripped of any delusions, yet you still reply \"Sounds great, thanks!\" at 11 PM with impeccable tone. You ruthless corporate assassin, get your bag and get out.",
    image: "/assets/personalities/BOSS.jpg",
    axes: { E: 0.9, S: 0.6, M: -0.8, V: -0.7 },
  },
  CORE: {
    name: "CORE",
    quote: "My life is falling apart, but my Instagram grid is healing.",
    description: "You are living in a meticulously curated Pinterest board. You hustle hard, but strictly to fund your pristine, highly delusional private universe. You avoid networking because actual human beings ruin your color palette. You stunning, untouchable artist—keep serving looks from your ivory tower.",
    image: "/assets/personalities/CORE.jpg",
    axes: { E: 0.7, S: -0.6, M: 0.8, V: 0.8 },
  },
  CLWN: {
    name: "CLWN",
    quote: "I've rehearsed my Oscar speech 100 times for a movie I haven't been cast in.",
    description: "The clumsy, earnest dreamer. You grind in the shadows, avoid the spotlight, yet harbor a massive, delulu inner universe where your grand comeback is just around the corner. Your \"try again tomorrow\" resilience is ridiculously endearing in a cynical world. You lovable underdog, your weird magic is totally valid.",
    image: "/assets/personalities/CLWN.jpg",
    axes: { E: 0.7, S: -0.7, M: 0.8, V: -0.6 },
  },
  MESS: {
    name: "MESS",
    quote: "Chaos is my personal brand.",
description: "A walking contradiction of dark academia and villain energy. You hustle hard but are profoundly cynical; you loathe small talk but emit an unignorable, magnetic aura. People are intimidated by your brooding silence, but they can't look away. You dangerously alluring enigma, never lose your sharp edge.",
image: "/assets/personalities/MESS.jpg",
axes: { E: 0.8, S: -0.8, M: -0.7, V: 0.7 },
},
QUIT: {
name: "QUIT",
quote: "Physically here, mentally touching grass in 2035.",
description: "The absolute zenith of energy efficiency. You execute your tasks flawlessly and vanish like a ghost, refusing to offer a single ounce of unpaid emotional labor. Mastering the art of being unbothered to this chilling degree makes you look like an untraceable, top-tier assassin. Teach us your ways.",
image: "/assets/personalities/QUIT.jpg",
axes: { E: 0.6, S: -0.8, M: -0.8, V: -0.8 },
},
SLAY: {
name: "SLAY",
quote: "Zero productivity, 100% vibes.",
description: "The effortless icon. You do absolutely zero heavy lifting, yet you dominate the social scene with terrifying charisma. Armed with aggressive delusion and impenetrable confidence, you turn an average hand into a royal flush. Your ability to never stress and still have everyone obsessed with your vibe is a maddeningly elite superpower.",
image: "/assets/personalities/SLAY.jpg",
axes: { E: -0.8, S: 0.9, M: 0.8, V: 0.9 },
},
DELU: {
name: "DELU",
quote: "Delulu is not just the solulu, it's my entire financial plan.",
description: "The grandmaster of mental gymnastics. You might be rotting in bed physically, but in your mind, you are thriving. You skip the hard work and rely strictly on high-speed scrolling, manifesting, and rewriting reality to harvest joy. Your \"the universe will fix it\" logic is unhinged, but honestly? It is an invincible shield against real-world burnout.",
image: "/assets/personalities/DELU.jpg",
axes: { E: -0.7, S: 0.8, M: 0.9, V: -0.6 },
},
BRAT: {
name: "BRAT",
quote: "I didn't come to fit in, I came to make it everybody's problem.",
description: "The chaotic neutral gremlin we love to hate. You see the world's hypocrisy, refuse to play the game, and respond with pure, unadulterated snark. You are the menace who ruins the peace but makes the group chat 100x funnier. Never stop being a problem.",
image: "/assets/personalities/BRAT.jpg",
axes: { E: -0.7, S: 0.8, M: -0.8, V: 0.8 },
},
TRSH: {
name: "TRSH",
quote: "I set the bar so low it's practically a tripping hazard in hell.",
description: "The absolute ceiling of self-deprecating humor. You are brutally aware of your own uselessness, and instead of fixing it, you tweet about it for clout. Your \"I'm garbage, what are you gonna do about it?\" defense mechanism is the ultimate antidote to modern hustle culture. We are obsessed with your flawless honesty.",
image: "/assets/personalities/TRSH.jpg",
axes: { E: -0.8, S: 0.7, M: -0.8, V: -0.7 },
},
POET: {
name: "POET",
quote: "I'm not ghosting you, I'm just romanticizing my isolation.",
description: "The modern-day brooding visionary. You reject the hustle and ghost everyone, but your inner world is rich enough to fill a trilogy. You rebrand your procrastination as \"creative incubation\" and wear your isolation like a crown of misunderstood genius. You lovely, lonely artist, please touch grass occasionally.",
image: "/assets/personalities/POET.jpg",
axes: { E: -0.7, S: -0.8, M: 0.8, V: 0.7 },
},
CAPY: {
name: "CAPY",
quote: "The world is literally burning, but I am cozy and well-hydrated.",
description: "The zen master of the apocalypse. You don't hustle, you don't mingle, you don't romanticize, and you definitely don't doomscroll. Society is collapsing, and you're just chilling in your lane. Your ability to remain completely unbothered in a manic world is an insanely enviable, god-tier trait. You majestic capybara, stay cozy.",
image: "/assets/personalities/CAPY.jpg",
axes: { E: -0.8, S: -0.7, M: 0.7, V: -0.8 },
},
VILN: {
name: "VILN",
quote: "I could easily destroy my enemies, but my bed is simply too comfortable today.",
description: "The cynical genius who logged off. You have the razor-sharp intellect to see through everyone's BS, but because humans are exhausting, you just opted out of the game. Your \"I could dominate, but I literally don't care\" vibe is unfathomably cool. Thank god you chose napping over world domination.",
image: "/assets/personalities/VILN.jpg",
axes: { E: -0.8, S: -0.9, M: -0.8, V: 0.8 },
},
PLNT: {
name: "PLNT",
quote: "Please do not perceive me. I am merely background foliage.",
description: "The absolute peak of minimalist survival. No hustle, no socializing, no delusions, and zero main character complex. You fully embrace being an extra. Give you a dark corner and some Wi-Fi, and you will peacefully exist into the next century. Successfully lowering your desires and presence to this level makes you the ultimate anti-burnout icon.",
image: "/assets/personalities/PLNT.jpg",
axes: { E: -0.9, S: -0.9, M: -0.9, V: -0.9 },
},
};
