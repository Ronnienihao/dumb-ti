export interface Question {
  id: number;
  text: string;
  axis: "E" | "S" | "M" | "V";
  weight: number;
  options: { text: string; value: number }[];
}

export const questions: Question[] = [
  {
    id: 1, axis: "E", weight: 1.5,
    text: "The morning alarm goes off:",
    options: [
      { text: "Spring out of bed shouting \"Let's get this bread!\"", value: 1.5 },
      { text: "Exhausted to my core, but I still drag my lifeless body out of bed to start the grind.", value: 1.5 },
      { text: "Snooze it 8 times until the panic sets in.", value: -1.5 },
      { text: "As long as I don't open my eyes, today hasn't started.", value: -1.5 },
    ],
  },
  {
    id: 2, axis: "E", weight: 1,
    text: "Faced with a minor inconvenience, like spilled water:",
    options: [
      { text: "Wipe it instantly and sanitize the entire desk.", value: 1 },
      { text: "Optimize the cleaning process to save 5 seconds.", value: 1 },
      { text: "Drop to my knees and blame the universe for actively ruining my life.", value: -1 },
      { text: "Throw a towel on it and walk away. Problem solved.", value: -1 },
    ],
  },
  {
    id: 3, axis: "E", weight: 1,
    text: "Free time on a weekend:",
    options: [
      { text: "Side hustles, learning skills. I must optimize every waking second.", value: 1 },
      { text: "Deep cleaning or intense socializing to aggressively regain control of my life.", value: 1 },
      { text: "Molding on the couch in an ungodly posture.", value: -1 },
      { text: "Scroll TikTok for 6 hours until my eyes bleed.", value: -1 },
    ],
  },
  {
    id: 4, axis: "E", weight: 1,
    text: "The concept of \"Inbox Zero\":",
    options: [
      { text: "It's my religion. No red dot survives longer than 3 seconds.", value: 1 },
      { text: "Everything is sorted into 50 color-coded folders.", value: 1 },
      { text: "My unread count is 14,000 and I feel absolutely nothing.", value: -1 },
      { text: "I only open my email to click \"Forgot Password\".", value: -1 },
    ],
  },
  {
    id: 5, axis: "E", weight: 1,
    text: "When a deadline is approaching:",
    options: [
      { text: "Finished a week early, currently revising it for the 18th time.", value: 1 },
      { text: "Crying, but typing at 120 WPM fueled by sheer anxiety.", value: 1 },
      { text: "If I don't look at my boss's messages, the deadline isn't real.", value: -1 },
      { text: "Suddenly develop a profound interest in organizing my desk cables.", value: -1 },
    ],
  },
  {
    id: 6, axis: "E", weight: 1,
    text: "Approach to exercise and health:",
    options: [
      { text: "Tracking every calorie and step on my Apple Watch.", value: 1 },
      { text: "Doing my home workout routine because I'm actually motivated to keep this vessel healthy.", value: 1 },
      { text: "Walking to the fridge is my daily cardio.", value: -1 },
      { text: "Saving 100 workout videos basically means I worked out.", value: -1 },
    ],
  },
  {
    id: 7, axis: "S", weight: 1,
    text: "A \"New Message\" notification:",
    options: [
      { text: "Reply instantly with 3 unhinged voice memos.", value: 1 },
      { text: "If it triggers my hyperfixation, I will infodump for 72 hours straight even if we're strangers.", value: 1 },
      { text: "Replied perfectly in my head, then forgot to actually type it.", value: -1 },
      { text: "Read from lock screen. If nobody died, ignore it.", value: -1 },
    ],
  },
  {
    id: 8, axis: "S", weight: 1.5,
    text: "At a party where you barely know anyone:",
    options: [
      { text: "Introduce myself to everyone. Absolute yapper.", value: 1.5 },
      { text: "Hijack the aux cord. Tonight's BGM is mine.", value: 1.5 },
      { text: "Hide in the bathroom calculating when it's acceptable to leave.", value: -1.5 },
      { text: "Find the host's pet and pretend to be busy petting them.", value: -1.5 },
    ],
  },{
id: 9, axis: "S", weight: 1,
text: "A friend texts \"Guess what...\":",
options: [
{ text: "Call instantly: \"Spill the tea right now!\"", value: 1 },
{ text: "Spam 10 question marks: \"What?! Tell me!\"", value: 1 },
{ text: "Leave on read. Stall indefinitely until they text again.", value: -1 },
{ text: "Airplane mode immediately. Vanish into the void.", value: -1 },
],
},
{
id: 10, axis: "S", weight: 1,
text: "In a group chat:",
options: [
{ text: "Ruthless meme spammer. I carry this chat on my back.", value: 1 },
{ text: "Sending 60-second voice notes like it's my personal podcast.", value: 1 },
{ text: "The perfect hype-bot, only replying \"lmao true\".", value: -1 },
{ text: "Lurking for 3 years. Members probably think I'm a spy.", value: -1 },
],
},
{
id: 11, axis: "S", weight: 1,
text: "Ordering food or coffee:",
options: [
{ text: "8 custom modifiers and chatting with the barista.", value: 1 },
{ text: "Take the initiative to compliment the cashier's outfit.", value: 1 },
{ text: "They messed up my order, but as long as it doesn't kill me, I'll drink it in silence.", value: -1 },
{ text: "Kiosk only. Do not perceive me. I'd rather starve.", value: -1 },
],
},
{
id: 12, axis: "S", weight: 1,
text: "Running into an acquaintance in public:",
options: [
{ text: "Scream their name across the street and rush for a hug.", value: 1 },
{ text: "Trap them in a 20-minute stand-up comedy conversation.", value: 1 },
{ text: "Abruptly stare into a shop window, pretending to be fascinated.", value: -1 },
{ text: "Head down, power walk, pray they are legally blind.", value: -1 },
],
},
{
id: 13, axis: "M", weight: 1,
text: "Missed out on something you wanted, like concert tickets:",
options: [
{ text: "The universe is protecting me. That venue was cursed anyway!", value: 1 },
{ text: "I'll manifest a VIP pass later. Girl/Boy math.", value: 1 },
{ text: "Analyze how the algorithm screwed me and plan a ruthless strategy for next time.", value: -1 },
{ text: "Curse late-stage capitalism and the entire corrupt ticketing industry.", value: -1 },
],
},
{
id: 14, axis: "M", weight: 1.5,
text: "Your bank account balance is frighteningly low:",
options: [
{ text: "\"Money is flowing energy. As long as I'm happy, it returns!\"", value: 1.5 },
{ text: "\"I bought it on sale, so technically I made money.\"", value: 1.5 },
{ text: "Immediately draft a brutally realistic plan to increase my cash flow.", value: -1.5 },
{ text: "\"Can't afford a house anyway. This economy is a joke.\"", value: -1.5 },
],
},
{
id: 15, axis: "M", weight: 1,
text: "AI will eventually...:",
options: [
{ text: "Do all my jobs, make me rich, while I travel the world.", value: 1 },
{ text: "Generate a soulmate who will never betray or ghost me.", value: 1 },
{ text: "Steal my job, render me useless, and leave me homeless.", value: -1 },
{ text: "Become one of my only friends, because human interaction is just exhausting.", value: -1 },
],
},
{
id: 16, axis: "M", weight: 1,
text: "A crush likes your really old photo:",
options: [
{ text: "Immediately start planning our aesthetic summer wedding in Italy.", value: 1 },
{ text: "They were deep-stalking me late at night. They are obsessed.", value: 1 },
{ text: "Just scrolling too fast. Probably didn't even look at the pic.", value: -1 },
{ text: "Oh no, my cringe era is exposed. Setting profile to private.", value: -1 },
],
},
{
id: 17, axis: "M", weight: 1,
text: "Zombie Apocalypse Strategy:",
options: [
{ text: "Use my genius to save my crush and become the legendary hero.", value: 1 },
{ text: "Survive entirely by dumb luck in a basement because plot armor protects me.", value: 1 },
{ text: "Hoard canned beans in a basement and trust absolutely no one.", value: -1 },
{ text: "Cry, call 911, realize the government collapsed, and immediately give up.", value: -1 },
],
},
{
id: 18, axis: "M", weight: 1,
text: "Reading a motivational quote online:",
options: [
{ text: "Struck in the soul. I can change the world tomorrow. Share!", value: 1 },
{ text: "Set as wallpaper, convinced this spell brings a year of luck.", value: 1 },
{ text: "See right through this toxic capitalist poison meant to harvest us.", value: -1 },
{ text: "Cringe at the sheer hypocrisy of influencers making up deep quotes.", value: -1 },
],
},
{
id: 19, axis: "V", weight: 1,
text: "Walking down the street with headphones on:",
options: [
{ text: "I'm in a $100M music video. Pedestrians are just my extras.", value: 1 },
{ text: "Strutting with the arrogant energy of someone who owns the city.", value: 1 },
{ text: "Like a glitched NPC, avoiding all eye contact with a blank stare.", value: -1 },
{ text: "Trying to master invisibility and blend into the pavement.", value: -1 },
],
},
{
id: 20, axis: "V", weight: 1,
text: "Posted a photo and only got 2 likes:",
options: [
{ text: "The algorithm is broken, or everyone is secretly jealous of me.", value: 1 },
{ text: "Send it to 8 group chats, forcing friends to praise me at gunpoint.", value: 1 },
{ text: "I'm a nobody. This is my rightful, pathetic place in the universe.", value: -1 },
{ text: "Awkwardly switch it to \"Only Me\" to save my fragile dignity.", value: -1 },
],
},
{
id: 21, axis: "V", weight: 1,
text: "Your role in the friend group:",
options: [
{ text: "The spiritual leader. Without my nod, the hangout doesn't happen.", value: 1 },
{ text: "The dramatic focal point. When I speak, everyone else just listens.", value: 1 },
{ text: "The background hype-man just smiling, holding coats and drinks.", value: -1 },
{ text: "If I don't speak up, they might forget I'm even there the entire night.", value: -1 },
],
},
{
id: 22, axis: "V", weight: 1,
text: "Someone is passive-aggressive to you online:",
options: [
{ text: "Write an 800-word eloquent manifesto to publicly destroy them.", value: 1 },
{ text: "Screenshot it, rally the troops, and nuke their comment section.", value: 1 },
{ text: "Fall into deep overthinking: \"Does everyone actually hate me?\"", value: -1 },
{ text: "Pretend not to see it, but perfectly hold this grudge until 2050.", value: -1 },
],
},
{
id: 23, axis: "V", weight: 1,
text: "How do you approach your birthday?",
options: [
{ text: "Throw a massive themed party because the spotlight belongs exclusively to me.", value: 1 },
{ text: "Post a flawless photo dump and expect a flood of essays in comments.", value: 1 },
{ text: "Hide it on socials. As long as my inner circle remembers, that's all I need.", value: -1 },
{ text: "If someone remembers, I panic. If no one remembers, I am at peace.", value: -1 },
],
},
{
id: 24, axis: "V", weight: 1.5,
text: "When wild drama or gossip breaks out in your friend group:",
options: [
{ text: "I am the lead investigator and judge. I need to be in the center of the tea.", value: 1.5 },
{ text: "Plot twist: I am the drama. I probably started it.", value: 1.5 },
{ text: "I just sit quietly in the corner, taking mental notes but never speaking.", value: -1.5 },
{ text: "\"Leave me out of this, I just want to go home and sleep.\"", value: -1.5 },
],
},
];
