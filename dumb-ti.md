# DUMB-TI 需求文档 v2.0

> 整合自旧版需求（v1.1）+ 小周 2026-04-13 新增内容。
> 代码现状：Next.js 脚手架初始状态，无业务逻辑，图片已就位。

---

## 1. 项目概述与目标

这是一个面向全球用户的测试题网站。目前只有一道测试：**DUMB-TI**，一个恶搞 MBTI 的人格测试。

- **核心策略**：通过 Meme 文化驱动的"毒舌"人格测试，利用欧美社交媒体传播逻辑完成裂变，提供社交货币。
- **目标用户**：全球 Gen-Z 用户，重点是欧美用户，预测女性用户偏多。
- **主要平台**：手机端优先，兼顾 PC。
- **主要社交渠道**：X（Twitter）、Instagram、Reddit、Snapchat。

---

## 2. 页面列表

### 2.1 首页（Home）
- 网站 Logo（"dumb-ti" 字样）
- 一句 Slogan
- 一个"开始"按钮

### 2.2 测试页（Quiz）
- 每页展示一道题及其选项（单选）
- 进度条（当前第几题/共24题）
- 「下一题」按钮
- 「返回上一题」按钮

### 2.3 结果页（Result）
- 人格插画（现成插画，非 AI 生成，位于 `/public/assets/personalities/`）
- 人格名称
- 人格金句（Quote）
- 八维倾向程度展示（Hustle/Rot、Glow/Fade、Delu/Raw、Main/Side 各轴得分可视化）
- 详细人格解析文本
- **活动横幅/区块**（详见第 5 节）
- 「更多测试」导航入口

### 2.4 更多测试页（More Tests）
- 框架保留，内容后续填充
- 当前阶段展示占位内容，提示"更多测试即将上线"

### 2.5 支付页（Payment）
- 用于购买 Pro 版 DUMB-TI 测试（$3.9）
- 后期实现，MVP 阶段不做

### 2.6 后台页（Admin Dashboard）
- 统计访问量、转发量
- 后期实现，MVP 阶段不做

---

## 3. 核心功能

### 3.1 测试引擎
- 24 道题，单选，每页一题
- 四轴八维计分（详见第 6 节）
- 定海神针权重题：Q1（E轴）、Q8（S轴）、Q14（M轴）、Q24（V轴），权重 ±1.5，其余题 ±1
- 每轴精确 6 题，无跨轴干扰
- 结果不会出现平局（权重机制保证）

### 3.2 社交分享功能
- 结果页提供「一键转发测试结果」按钮
- 分享内容：插画图片（.jpg）+ 人格名称 + 网站地址
- 插画图片自动叠加网站地址水印（用于引流）
- 适配 X / Instagram 分享格式
- OG Meta 配置，确保社交平台分享预览图显示人格插画

### 3.3 活动功能（限时裂变）
- 活动时间：网站上线第 1 天起，连续 3 天
- 每天前 200 人转发测试结果到社交媒体，可免费领取价值 $3.9 的 Pro 版 DUMB-TI 测试
- MVP 阶段用引导逻辑实现（无需后端自动核验）

### 3.4 支付功能
- Pro 版测试价格：$3.9
- 后期实现

### 3.5 流量统计
- 统计访问量、转发量
- 后期实现（可考虑接入 Google Analytics 或 Cloudflare Analytics）

### 3.6 Google 账号登录
- 支持用 Google 账号登录
- 后期实现

### 3.7 一键翻译
- 支持多语言版本
- 翻译文本由小周提供（非 AI 自动翻译）
- 后期实现

---

## 4. 设计与视觉风格

- **整体风格**：极简、现代、圆角设计，留白多，干净清爽
- **主要用户**：手机端优先设计

### 配色方案
| 角色 | 色值 | 占比 |
|------|------|------|
| 背景色 | `#f9f7ef` | ~70% |
| 辅助色 | `#f4cf7a` `#ea98e6` `#83d4d6` `#bae089` | ~20% |
| 点缀色 | `#03547c` | ~10% |
| 调和色 | 灰色、白色 | 按需 |

---

## 5. 商业化策略

### 标准版（免费）
- 24 道题测试
- 基础人格解析
- 静态结果图（含网站水印）

### Pro 版（$3.9）
- 更多题目（规划中）
- 深度建议（恋爱 / 职场 / 生活方向）

### 裂变活动规则
- 活动期内（上线前3天），转发结果截图/链接 → 免费解锁 Pro 版
- 非活动期 / 活动结束后 → 付 $3.9 获取永久权限

---

## 6. 测试内容：DUMB-TI 人格白皮书

### 6.1 四大轴心与 8 个维度

| 轴 | 正向（+） | 负向（-） |
|----|----------|----------|
| E 轴（生存轴 Effort） | Hustle 拼命 | Rot 摆烂 |
| S 轴（社交轴 Social） | Glow 显眼包 | Fade 隐形人 |
| M 轴（精神轴 Mindset） | Delu 加滤镜 | Raw 生吃现实 |
| V 轴（自我轴 Vibe） | Main 主角 | Side 配角 |

> ⚠️ 网站展示时不出现 + / - 符号，仅内部文档使用。

### 6.2 计分逻辑

1. 24 题，每轴精确 6 题
2. 普通题权重 ±1，核心灵魂题（Q1/Q8/Q14/Q24）权重 ±1.5
3. 某轴得分 > 0 → 判定正向极；< 0 → 判定负向极
4. 权重机制保证总分永不为 0，无平局

### 6.3 16 型人格解析

| 编码 | 名称 | Quote |
|------|------|-------|
| [++++] | STAR | "The universe is a poorly funded indie film, and I'm the only A-lister on set." |
| [+++-] | STAN | "I will take a bullet for my bestie, but I need to mentally prepare to order a pizza." |
| [++-+] | HELP | "I'm having a severe mental breakdown, but make it ✨aesthetic✨." |
| [++--] | BOSS | "I don't have a personality, I have a career. Just kidding, I only have back pain." |
| [+-++] | CORE | "My life is falling apart, but my Instagram grid is healing." |
| [+-+-] | CLWN | "I've rehearsed my Oscar speech 100 times for a movie I haven't been cast in." |
| [+--+] | MESS | "Chaos is my personal brand." |
| [+---] | QUIT | "Physically here, mentally touching grass in 2035." |
| [-+++] | SLAY | "Zero productivity, 100% vibes." |
| [-++-] | DELU | "Delulu is not just the solulu, it's my entire financial plan." |
| [-+-+] | BRAT | "I didn't come to fit in, I came to make it everybody's problem." |
| [-+--] | TRSH | "I set the bar so low it's practically a tripping hazard in hell." |
| [--++] | POET | "I'm not ghosting you, I'm just romanticizing my isolation." |
| [--+-] | CAPY | "The world is literally burning, but I am cozy and well-hydrated." |
| [---+] | VILN | "I could easily destroy my enemies, but my bed is simply too comfortable today." |
| [----] | PLNT | "Please do not perceive me. I am merely background foliage." |

**各人格完整解析：**

**STAR [++++]**
Quote: "The universe is a poorly funded indie film, and I'm the only A-lister on set."
You wake up every day and choose main character energy. You hustle, you glow, and you are proudly delulu enough to turn a grocery run into a cinematic masterpiece. Sure, your dramatic flair might make people roll their eyes, but your raw, unapologetic "I'm the IT girl/boy" vitality is honestly iconic. You magnificent, exhausting star—never let anyone dim your premium lighting. The world would be unbearably boring without you.

**STAN [+++-]**
Quote: "I will take a bullet for my bestie, but I need to mentally prepare to order a pizza."
The ultimate ride-or-die. You channel all your hustle, glow, and romantic filters into hyping up literally everyone but yourself. If your bestie or bias needs defense, you're throwing hands; if you need help, you apologize for existing. You think you're just the supporting cast, but your fierce, unapologetic loyalty is the absolute glue holding your circle together. You absolute gem, when are you going to start stanning yourself?

**HELP [++-+]**
Quote: "I'm having a severe mental breakdown, but make it ✨aesthetic✨."
You are a high-functioning disaster. You see the world for the burning trash fire it is, yet you still put on a full face of makeup to go fix it. You've somehow weaponized your own burnout, turning a mental breakdown into a breathtaking performance. You can literally cry your eyes out and then drop a flawless presentation. Honestly, your ability to slay while hanging by a thread is a terrifying superpower. Please schedule a nap.

**BOSS [++--]**
Quote: "I don't have a personality, I have a career. Just kidding, I only have back pain."
Capitalism's favorite premium soldier. You see right through the corporate matrix, completely stripped of any delusions, yet you still reply "Sounds great, thanks!" at 11 PM with impeccable tone. You traded your social battery and ambitions for a paycheck. But let's not lie: navigating this dystopian survival game with such flawless, deadpan efficiency requires a monstrously high IQ. You ruthless corporate assassin, get your bag and get out.

**CORE [+-++]**
Quote: "My life is falling apart, but my Instagram grid is healing."
You are living in a meticulously curated Pinterest board. You hustle hard, but strictly to fund your pristine, highly delusional private universe. You avoid networking because actual human beings ruin your color palette. You'd rather eat ramen for a month than buy an ugly lamp. And honestly? Your aggressive commitment to the vibe absolutely saves you from the mundane. You stunning, untouchable artist—keep serving looks from your ivory tower.

**CLWN [+-+-]**
Quote: "I've rehearsed my Oscar speech 100 times for a movie I haven't been cast in."
The clumsy, earnest dreamer. You grind in the shadows, avoid the spotlight, yet harbor a massive, delulu inner universe where your grand comeback is just around the corner. Even though you tend to fumble at the worst moments, turning your dramatic arc into a sitcom, your "try again tomorrow" resilience is ridiculously endearing in a cynical world. You lovable underdog, your weird magic is totally valid.

**MESS [+--+]**
Quote: "Chaos is my personal brand."
A walking contradiction of dark academia and villain energy. You hustle hard but are profoundly cynical; you loathe small talk but emit an unignorable, magnetic aura. You've weaponized your inner turmoil, looking like a beautifully broken genius straight out of an indie thriller. People are intimidated by your brooding silence, but they can't look away. You dangerously alluring enigma, never lose your sharp edge.

**QUIT [+---]**
Quote: "Physically here, mentally touching grass in 2035."
The absolute zenith of energy efficiency. You execute your tasks flawlessly and vanish like a ghost, refusing to offer a single ounce of unpaid emotional labor. You see right through the societal BS, stripped of all delusions and main character syndrome, leaving only raw survival instincts. Mastering the art of being unbothered to this chilling degree makes you look like an untraceable, top-tier assassin. Teach us your ways.

**SLAY [-+++]**
Quote: "Zero productivity, 100% vibes."
The effortless icon. You do absolutely zero heavy lifting, yet you dominate the social scene with terrifying charisma. Armed with aggressive delusion and impenetrable confidence, you turn an average hand into a royal flush. You believe you are the center of the universe—and infuriatingly, the universe usually agrees. Your ability to never stress and still have everyone obsessed with your vibe is a maddeningly elite superpower. Keep slaying, royalty.

**DELU [-++-]**
Quote: "Delulu is not just the solulu, it's my entire financial plan."
The grandmaster of mental gymnastics. You might be rotting in bed physically, but in your mind, you are thriving. You skip the hard work and rely strictly on high-speed scrolling, manifesting, and rewriting reality to harvest joy. Your "the universe will fix it" logic is unhinged, but honestly? It is an invincible shield against real-world burnout. You joyful dream-weaver, your inner peace is legendary.

**BRAT [-+-+]**
Quote: "I didn't come to fit in, I came to make it everybody's problem."
The chaotic neutral gremlin we love to hate. You see the world's hypocrisy, refuse to play the game, and respond with pure, unadulterated snark. You are lazy, brutally honest, and armed with an absurd amount of unearned confidence. You are the menace who ruins the peace but makes the group chat 100x funnier. If you weren't around, everything would be unbearably boring. Never stop being a problem.

**TRSH [-+--]**
Quote: "I set the bar so low it's practically a tripping hazard in hell."
The absolute ceiling of self-deprecating humor. You are brutally aware of your own uselessness, and instead of fixing it, you tweet about it for clout. You deconstruct all societal anxiety because when you're already laying flat, no one can knock you down. Your "I'm garbage, what are you gonna do about it?" defense mechanism is the ultimate antidote to modern hustle culture. We are obsessed with your flawless honesty.

**POET [--++]**
Quote: "I'm not ghosting you, I'm just romanticizing my isolation."
The modern-day brooding visionary. You reject the hustle and ghost everyone, but your inner world is rich enough to fill a trilogy. You rebrand your procrastination as "creative incubation" and wear your isolation like a crown of misunderstood genius. Even if you just post cryptic quotes at 3 AM, your refusal to conform to a basic lifestyle is incredibly intriguing. You lovely, lonely artist, please touch grass occasionally.

**CAPY [--+-]**
Quote: "The world is literally burning, but I am cozy and well-hydrated."
The zen master of the apocalypse. You don't hustle, you don't mingle, you don't romanticize, and you definitely don't doomscroll. Society is collapsing, and you're just chilling in your lane. You figured out the ultimate hack: zero expectations equals zero disappointment. Your ability to remain completely unbothered in a manic world is an insanely enviable, god-tier trait. You majestic capybara, stay cozy.

**VILN [---+]**
Quote: "I could easily destroy my enemies, but my bed is simply too comfortable today."
The cynical genius who logged off. You have the razor-sharp intellect to see through everyone's BS, but because humans are exhausting, you just opted out of the game. You carry heavy "dark protagonist" lore, and while you avoid people, when you do speak, it's a lethal, unapologetic roast. Your "I could dominate, but I literally don't care" vibe is unfathomably cool. Thank god you chose napping over world domination.

**PLNT [----]**
Quote: "Please do not perceive me. I am merely background foliage."
The absolute peak of minimalist survival. No hustle, no socializing, no delusions, and zero main character complex. You fully embrace being an extra. You are literally a houseplant—give you a dark corner and some Wi-Fi, and you will peacefully exist into the next century. Successfully lowering your desires and presence to this level makes you the ultimate anti-burnout icon. You cute, unproblematic foliage, nobody can disrupt your peace.

---

### 6.4 题目完整列表（24题）

#### E 轴（生存轴 Effort）— Q1~Q6

**Q1（权重 ±1.5）** The morning alarm goes off:
- A. Spring out of bed shouting "Let's get this bread!" [E: +1.5]
- B. Exhausted to my core, but I still drag my lifeless body out of bed to start the grind. [E: +1.5]
- C. Snooze it 8 times until the panic sets in. [E: -1.5]
- D. As long as I don't open my eyes, today hasn't started. [E: -1.5]

**Q2** Faced with a minor inconvenience, like spilled water:
- A. Wipe it instantly and sanitize the entire desk. [E: +1]
- B. Optimize the cleaning process to save 5 seconds. [E: +1]
- C. Drop to my knees and blame the universe for actively ruining my life. [E: -1]
- D. Throw a towel on it and walk away. Problem solved. [E: -1]

**Q3** Free time on a weekend:
- A. Side hustles, learning skills. I must optimize every waking second. [E: +1]
- B. Deep cleaning or intense socializing to aggressively regain control of my life. [E: +1]
- C. Molding on the couch in an ungodly posture. [E: -1]
- D. Scroll TikTok for 6 hours until my eyes bleed. [E: -1]

**Q4** The concept of "Inbox Zero":
- A. It's my religion. No red dot survives longer than 3 seconds. [E: +1]
- B. Everything is sorted into 50 color-coded folders. [E: +1]
- C. My unread count is 14,000 and I feel absolutely nothing. [E: -1]
- D. I only open my email to click "Forgot Password". [E: -1]

**Q5** When a deadline is approaching:
- A. Finished a week early, currently revising it for the 18th time. [E: +1]
- B. Crying, but typing at 120 WPM fueled by sheer anxiety. [E: +1]
- C. If I don't look at my boss's messages, the deadline isn't real. [E: -1]
- D. Suddenly develop a profound interest in organizing my desk cables. [E: -1]

**Q6** Approach to exercise and health:
- A. Tracking every calorie and step on my Apple Watch. [E: +1]
- B. Doing my home workout routine because I'm actually motivated to keep this vessel healthy. [E: +1]
- C. Walking to the fridge is my daily cardio. [E: -1]
- D. Saving 100 workout videos basically means I worked out. [E: -1]

---

#### S 轴（社交轴 Social）— Q7~Q12

**Q7** A "New Message" notification:
- A. Reply instantly with 3 unhinged voice memos. [S: +1]
- B. If it triggers my hyperfixation, I will infodump for 72 hours straight even if we're strangers. [S: +1]
- C. Replied perfectly in my head, then forgot to actually type it. [S: -1]
- D. Read from lock screen. If nobody died, ignore it. [S: -1]

**Q8（权重 ±1.5）** At a party where you barely know anyone:
- A. Introduce myself to everyone. Absolute yapper. [S: +1.5]
- B. Hijack the aux cord. Tonight's BGM is mine. [S: +1.5]
- C. Hide in the bathroom calculating when it's acceptable to leave. [S: -1.5]
- D. Find the host's pet and pretend to be busy petting them. [S: -1.5]

**Q9** A friend texts "Guess what...":
- A. Call instantly: "Spill the tea right now!" [S: +1]
- B. Spam 10 question marks: "What?! Tell me!" [S: +1]
- C. Leave on read. Stall indefinitely until they text again. [S: -1]
- D. Airplane mode immediately. Vanish into the void. [S: -1]

**Q10** In a group chat:
- A. Ruthless meme spammer. I carry this chat on my back. [S: +1]
- B. Sending 60-second voice notes like it's my personal podcast. [S: +1]
- C. The perfect hype-bot, only replying "lmao true". [S: -1]
- D. Lurking for 3 years. Members probably think I'm a spy. [S: -1]

**Q11** Ordering food or coffee:
- A. 8 custom modifiers and chatting with the barista. [S: +1]
- B. Take the initiative to compliment the cashier's outfit. [S: +1]
- C. They messed up my order, but as long as it doesn't kill me, I'll drink it in silence. [S: -1]
- D. Kiosk only. Do not perceive me. I'd rather starve. [S: -1]

**Q12** Running into an acquaintance in public:
- A. Scream their name across the street and rush for a hug. [S: +1]
- B. Trap them in a 20-minute stand-up comedy conversation. [S: +1]
- C. Abruptly stare into a shop window, pretending to be fascinated. [S: -1]
- D. Head down, power walk, pray they are legally blind. [S: -1]

---

#### M 轴（精神轴 Mindset）— Q13~Q18

**Q13** Missed out on something you wanted, like concert tickets:
- A. The universe is protecting me. That venue was cursed anyway! [M: +1]
- B. I'll manifest a VIP pass later. Girl/Boy math. [M: +1]
- C. Analyze how the algorithm screwed me and plan a ruthless strategy for next time. [M: -1]
- D. Curse late-stage capitalism and the entire corrupt ticketing industry. [M: -1]

**Q14（权重 ±1.5）** Your bank account balance is frighteningly low:
- A. "Money is flowing energy. As long as I'm happy, it returns!" [M: +1.5]
- B. "I bought it on sale, so technically I made money." [M: +1.5]
- C. Immediately draft a brutally realistic plan to increase my cash flow. [M: -1.5]
- D. "Can't afford a house anyway. This economy is a joke." [M: -1.5]

**Q15** AI will eventually...:
- A. Do all my jobs, make me rich, while I travel the world. [M: +1]
- B. Generate a soulmate who will never betray or ghost me. [M: +1]
- C. Steal my job, render me useless, and leave me homeless. [M: -1]
- D. Become one of my only friends, because human interaction is just exhausting. [M: -1]

**Q16** A crush likes your really old photo:
- A. Immediately start planning our aesthetic summer wedding in Italy. [M: +1]
- B. They were deep-stalking me late at night. They are obsessed. [M: +1]
- C. Just scrolling too fast. Probably didn't even look at the pic. [M: -1]
- D. Oh no, my cringe era is exposed. Setting profile to private. [M: -1]

**Q17** Zombie Apocalypse Strategy:
- A. Use my genius to save my crush and become the legendary hero. [M: +1]
- B. Survive entirely by dumb luck in a basement because plot armor protects me. [M: +1]
- C. Hoard canned beans in a basement and trust absolutely no one. [M: -1]
- D. Cry, call 911, realize the government collapsed, and immediately give up. [M: -1]

**Q18** Reading a motivational quote online:
- A. Struck in the soul. I can change the world tomorrow. Share! [M: +1]
- B. Set as wallpaper, convinced this spell brings a year of luck. [M: +1]
- C. See right through this toxic capitalist poison meant to harvest us. [M: -1]
- D. Cringe at the sheer hypocrisy of influencers making up deep quotes. [M: -1]

---

#### V 轴（自我轴 Vibe）— Q19~Q24

**Q19** Walking down the street with headphones on:
- A. I'm in a $100M music video. Pedestrians are just my extras. [V: +1]
- B. Strutting with the arrogant energy of someone who owns the city. [V: +1]
- C. Like a glitched NPC, avoiding all eye contact with a blank stare. [V: -1]
- D. Trying to master invisibility and blend into the pavement. [V: -1]

**Q20** Posted a photo and only got 2 likes:
- A. The algorithm is broken, or everyone is secretly jealous of me. [V: +1]
- B. Send it to 8 group chats, forcing friends to praise me at gunpoint. [V: +1]
- C. I'm a nobody. This is my rightful, pathetic place in the universe. [V: -1]
- D. Awkwardly switch it to "Only Me" to save my fragile dignity. [V: -1]

**Q21** Your role in the friend group:
- A. The spiritual leader. Without my nod, the hangout doesn't happen. [V: +1]
- B. The dramatic focal point. When I speak, everyone else just listens. [V: +1]
- C. The background hype-man just smiling, holding coats and drinks. [V: -1]
- D. If I don't speak up, they might forget I'm even there the entire night. [V: -1]

**Q22** Someone is passive-aggressive to you online:
- A. Write an 800-word eloquent manifesto to publicly destroy them. [V: +1]
- B. Screenshot it, rally the troops, and nuke their comment section. [V: +1]
- C. Fall into deep overthinking: "Does everyone actually hate me?" [V: -1]
- D. Pretend not to see it, but perfectly hold this grudge until 2050. [V: -1]

**Q23** How do you approach your birthday?
- A. Throw a massive themed party because the spotlight belongs exclusively to me. [V: +1]
- B. Post a flawless photo dump and expect a flood of essays in comments. [V: +1]
- C. Hide it on socials. As long as my inner circle remembers, that's all I need. [V: -1]
- D. If someone remembers, I panic. If no one remembers, I am at peace. [V: -1]

**Q24（权重 ±1.5）** When wild drama or gossip breaks out in your friend group:
- A. I am the lead investigator and judge. I need to be in the center of the tea. [V: +1.5]
- B. Plot twist: I am the drama. I probably started it. [V: +1.5]
- C. I just sit quietly in the corner, taking mental notes but never speaking. [V: -1.5]
- D. "Leave me out of this, I just want to go home and sleep." [V: -1.5]

---

## 7. 技术栈与部署

- **框架**：Next.js (App Router) + Tailwind CSS
- **部署**：Cloudflare Pages（全球 CDN，支持多域名映射）
- **图片资源**：现有插画已就位于 `/public/assets/personalities/`，文件命名格式为 `{人格名}.jpg`（如 `STAR.jpg`）
- **数据结构**：题目与人格数据采用 JSON 配置文件，方便热更新

---

## 8. 待确认项

### ✅ 已确认
- [x] **Slogan**：暂留空，首页做占位
- [x] **Logo 样式**：纯文字"dumb-ti"，字体 DM Sans（无衬线商用免费），风格随意
- [x] **UUID 图片**：已清理，目录只保留 16 个正确命名的人格图
- [x] **活动转发核验**：后台自动记录（点击分享记录 IP+时间戳+人格），前 200 条自动解锁 Pro，MVP 阶段信任用户点击

### ❓ 仍待确认
- [ ] 支付方案选型（Stripe / Lemon Squeezy / 其他？）
- [ ] 多语言第一优先语种
- [ ] 后台管理页面权限方式（密码保护？Google 登录？）
