export interface Question {
  id: number;
  text: string;
  textCN: string;
  axis: "E" | "S" | "M" | "V";
  weight: number;
  options: { text: string; textCN: string; value: number }[];
}
export const questions: Question[] = [
  {
    id: 1, axis: "E", weight: 1.5,
    text: "The morning alarm goes off:",
    textCN: "闹钟响了：",
    options: [
      { text: "Spring out of bed shouting \"Let's get this bread!\"", textCN: "像弹簧一样弹起，大喊"今天又是奋斗的一天！"", value: 1.5 },
      { text: "Exhausted to my core, but I still drag my lifeless body out of bed to start the grind.", textCN: "累到灵魂出窍，但还是会强行把这具沉重的肉体拖下床，开启一天的毒打。", value: 1.5 },
      { text: "Snooze it 8 times until the panic sets in.", textCN: "连按 8 次小睡，直到濒临迟到的极度恐慌让我惊醒。", value: -1.5 },
      { text: "As long as I don't open my eyes, today hasn't started.", textCN: "只要我不睁开眼睛，今天就还没有开始。", value: -1.5 },
    ],
  },
  {
    id: 2, axis: "E", weight: 1,
    text: "Faced with a minor inconvenience, like spilled water:",
    textCN: "面对一点小麻烦，比如打翻了水：",
    options: [
      { text: "Wipe it instantly and sanitize the entire desk.", textCN: "立刻拿纸擦干，顺便把整张桌子消个毒。", value: 1 },
      { text: "Optimize the cleaning process to save 5 seconds.", textCN: "在脑子里计算如何用最高效的步骤把它清理干净。", value: 1 },
      { text: "Drop to my knees and blame the universe for actively ruining my life.", textCN: "跪在地上痛哭，大骂全宇宙都在针对我，这世界赶紧毁灭吧。", value: -1 },
      { text: "Throw a towel on it and walk away. Problem solved.", textCN: "扔条毛巾盖在上面，转身走人。问题解决。", value: -1 },
    ],
  },
  {
    id: 3, axis: "E", weight: 1,
    text: "Free time on a weekend:",
    textCN: "周末的空闲时间：",
    options: [
      { text: "Side hustles, learning skills. I must optimize every waking second.", textCN: "搞副业、学技能，我必须把清醒着的每一秒都优化到极致。", value: 1 },
      { text: "Deep cleaning or intense socializing to aggressively regain control of my life.", textCN: "大扫除或者高强度社交，总之我要强行夺回生活的控制权。", value: 1 },
      { text: "Molding on the couch in an ungodly posture.", textCN: "躺在沙发上，以一种对脊椎极度不友好的姿势发霉。", value: -1 },
      { text: "Scroll TikTok for 6 hours until my eyes bleed.", textCN: "狂刷短视频 6 个小时，直到视力模糊。", value: -1 },
    ],
  },
  {
    id: 4, axis: "E", weight: 1,
    text: "The concept of \"Inbox Zero\":",
    textCN: "关于"消息/收件箱清零"：",
    options: [
      { text: "It's my religion. No red dot survives longer than 3 seconds.", textCN: "这是我的宗教。任何红点活不过三秒钟。", value: 1 },
      { text: "Everything is sorted into 50 color-coded folders.", textCN: "建了 50 个文件夹，连垃圾邮件都有专属归档。", value: 1 },
      { text: "My unread count is 14,000 and I feel absolutely nothing.", textCN: "我的未读消息是 14,000 条，而我内心毫无波澜。", value: -1 },
      { text: "I only open my email to click \"Forgot Password\".", textCN: "我打开邮箱的唯一原因，是为了点"重置密码"。", value: -1 },
    ],
  },
  {
    id: 5, axis: "E", weight: 1,
    text: "When a deadline is approaching:",
    textCN: "当死线逼近时：",
    options: [
      { text: "Finished a week early, currently revising it for the 18th time.", textCN: "提前一周做完，现在正在进行第 18 遍自我审查。", value: 1 },
      { text: "Crying, but typing at 120 WPM fueled by sheer anxiety.", textCN: "一边哭一边以每分钟 120 字的速度狂敲键盘，全靠焦虑驱动。", value: 1 },
      { text: "If I don't look at my boss's messages, the deadline isn't real.", textCN: "只要我不看老板的催命消息，死线就不存在。", value: -1 },
      { text: "Suddenly develop a profound interest in organizing my desk cables.", textCN: "突然对整理桌面的数据线产生了极其浓厚的兴趣。", value: -1 },
    ],
  },
  {
    id: 6, axis: "E", weight: 1,
    text: "Approach to exercise and health:",
    textCN: "关于运动和健康：",
    options: [
      { text: "Tracking every calorie and step on my Apple Watch.", textCN: "用手表严格监控每一卡路里和步数，绝不懈怠。", value: 1 },
      { text: "Doing my home workout routine because I'm actually motivated to keep this vessel healthy.", textCN: "在家坚持做日常锻炼，毕竟我确实挺有动力让我这副皮囊保持健康的。", value: 1 },
      { text: "Walking to the fridge is my daily cardio.", textCN: "走到冰箱拿吃的，就是我这辈子唯一的有氧运动。", value: -1 },
{ text: "Saving 100 workout videos basically means I worked out.", textCN: "在收藏夹里存了 100 个健身视频，四舍五入等于我练过了。", value: -1 },
],
},
{
id: 7, axis: "S", weight: 1,
text: "A \"New Message\" notification:",
textCN: "收到一条新消息：",
options: [
{ text: "Reply instantly with 3 unhinged voice memos.", textCN: "对方正在输入时，我已经发过去三条狂野长语音了。", value: 1 },
{ text: "If it triggers my hyperfixation, I will infodump for 72 hours straight even if we're strangers.", textCN: "如果聊到了我喜爱的话题，哪怕咱俩不熟，我也能跟你滔滔不绝聊三天三夜。", value: 1 },
{ text: "Replied perfectly in my head, then forgot to actually type it.", textCN: "在脑子里完美回复过了，然后就彻底忘了打字发出去。", value: -1 },
{ text: "Read from lock screen. If nobody died, ignore it.", textCN: "锁屏扫一眼。只要没出人命，就假装没收到。", value: -1 },
],
},
{
id: 8, axis: "S", weight: 1.5,
text: "At a party where you barely know anyone:",
textCN: "在一个谁都不认识的派对上：",
options: [
{ text: "Introduce myself to everyone. Absolute yapper.", textCN: "端着酒杯满场飞，试图和路过的狗都聊上两句。", value: 1.5 },
{ text: "Hijack the aux cord. Tonight's BGM is mine.", textCN: "强行接管蓝牙音响，今晚的 BGM 必须由我主宰。", value: 1.5 },
{ text: "Hide in the bathroom calculating when it's acceptable to leave.", textCN: "躲在厕所里，计算着还有多久可以合理地告辞。", value: -1.5 },
{ text: "Find the host's pet and pretend to be busy petting them.", textCN: "找到主人家的宠物，全神贯注地撸猫/狗以逃避人类。", value: -1.5 },
],
},
{
id: 9, axis: "S", weight: 1,
text: "A friend texts \"Guess what...\":",
textCN: "朋友发来："你猜怎么着……"：",
options: [
{ text: "Call instantly: \"Spill the tea right now!\"", textCN: "秒打电话过去："快说！有什么惊天大瓜！"", value: 1 },
{ text: "Spam 10 question marks: \"What?! Tell me!\"", textCN: "连发十个问号狂轰滥炸："啥？！快告诉我！"", value: 1 },
{ text: "Leave on read. Stall indefinitely until they text again.", textCN: "已读不回。敌不动我不动，能拖一天是一天。", value: -1 },
{ text: "Airplane mode immediately. Vanish into the void.", textCN: "立刻开启手机飞行模式，原地遁入虚空。", value: -1 },
],
},
{
id: 10, axis: "S", weight: 1,
text: "In a group chat:",
textCN: "在群聊里：",
options: [
{ text: "Ruthless meme spammer. I carry this chat on my back.", textCN: "无情的发梗机器，没有我这个群早就凉透了。", value: 1 },
{ text: "Sending 60-second voice notes like it's my personal podcast.", textCN: "喜欢发 60 秒的语音矩阵，当成个人播客在录。", value: 1 },
{ text: "The perfect hype-bot, only replying \"lmao true\".", textCN: "完美的捧场机器人，永远只回复"哈哈哈"或"确实"。", value: -1 },
{ text: "Lurking for 3 years. Members probably think I'm a spy.", textCN: "潜水三年，群友甚至以为我是个偷偷潜入的卧底。", value: -1 },
],
},
{
id: 11, axis: "S", weight: 1,
text: "Ordering food or coffee:",
textCN: "点外卖或咖啡时：",
options: [
{ text: "8 custom modifiers and chatting with the barista.", textCN: "提 8 个定制要求，顺便跟咖啡师聊聊今天的天气。", value: 1 },
{ text: "Take the initiative to compliment the cashier's outfit.", textCN: "主动搭讪，夸赞收银员今天的穿搭非常好看。", value: 1 },
{ text: "They messed up my order, but as long as it doesn't kill me, I'll drink it in silence.", textCN: "店员做错了，但只要它没毒死我，我都会默默喝下去。", value: -1 },
{ text: "Kiosk only. Do not perceive me. I'd rather starve.", textCN: "只用自助点餐机。如果必须开口说话，我宁可饿死。", value: -1 },
],
},
{
id: 12, axis: "S", weight: 1,
text: "Running into an acquaintance in public:",
textCN: "在街上迎面遇到半熟不熟的人：",
options: [
{ text: "Scream their name across the street and rush for a hug.", textCN: "大老远就呼喊他们的名字，冲上去给个令人窒息的拥抱。", value: 1 },
{ text: "Trap them in a 20-minute stand-up comedy conversation.", textCN: "立刻开启脱口秀模式，强行把他们留在原地聊 20 分钟。", value: 1 },
{ text: "Abruptly stare into a shop window, pretending to be fascinated.", textCN: "猛地转身看橱窗，假装对里面的塑料模特产生了浓厚兴趣。", value: -1 },
{ text: "Head down, power walk, pray they are legally blind.", textCN: "低头，快步疾走，祈祷对方在法律意义上是个盲人。", value: -1 },
],
},
{
id: 13, axis: "M", weight: 1,
text: "Missed out on something you wanted, like concert tickets:",
textCN: "错过了期待已久的机会，比如没抢到票：",
options: [
{ text: "The universe is protecting me. That venue was cursed anyway!", textCN: "宇宙一定是在帮我挡灾，那个场馆风水肯定不好！", value: 1 },
{ text: "I'll manifest a VIP pass later. Girl/Boy math.", textCN: "没关系，我靠意念显化一下，VIP 票自己会长腿跑进我口袋。", value: 1 },
{ text: "Analyze how the algorithm screwed me and plan a ruthless strategy for next time.", textCN: "冷静复盘该死的算法是怎么坑我的，并制定下一次的冷酷战略。", value: -1 },
{ text: "Curse late-stage capitalism and the entire corrupt ticketing industry.", textCN: "大骂晚期资本主义，并痛斥整个垄断且腐败的票务行业。", value: -1 },
],
},
{
id: 14, axis: "M", weight: 1.5,
text: "Your bank account balance is frighteningly low:",
textCN: "银行卡余额见底了：",
options: [
{ text: "\"Money is flowing energy. As long as I'm happy, it returns!\"", textCN: ""钱是流动的能量，只要我保持开心，它就会回来的！"", value: 1.5 },
{ text: "\"I bought it on sale, so technically I made money.\"", textCN: ""这件衣服打折了，四舍五入我不仅没花钱，还赚了！"", value: 1.5 },
{ text: "Immediately draft a brutally realistic plan to increase my cash flow.", textCN: "立刻制定一份极其冷酷的搞钱生存计划，想尽办法增加现金流。", value: -1.5 },
{ text: "\"Can't afford a house anyway. This economy is a joke.\"", textCN: ""反正这辈子也买不起房，这破经济环境就是个笑话。"", value: -1.5 },
],
},
{
id: 15, axis: "M", weight: 1,
text: "AI will eventually...:",
textCN: "AI 最终会：",
options: [
{ text: "Do all my jobs, make me rich, while I travel the world.", textCN: "替我打完所有的工，让我暴富，而我负责环游世界。", value: 1 },
{ text: "Generate a soulmate who will never betray or ghost me.", textCN: "通过完美算法，生成一个绝对不会背叛我的灵魂伴侣。", value: 1 },
{ text: "Steal my job, render me useless, and leave me homeless.", textCN: "抢走我的饭碗，让我彻底失去利用价值，流落街头。", value: -1 },
{ text: "Become one of my only friends, because human interaction is just exhausting.", textCN: "成为我为数不多的真朋友之一，毕竟和人类社交实在太让人心力交瘁了。", value: -1 },
],
},
{
id: 16, axis: "M", weight: 1,
text: "A crush likes your really old photo:",
textCN: "暗恋对象点赞了你的老照片：",
options: [
{ text: "Immediately start planning our aesthetic summer wedding in Italy.", textCN: "立刻开始在脑子里筹备我们在意大利的绝美夏日婚礼。", value: 1 },
{ text: "They were deep-stalking me late at night. They are obsessed.", textCN: "绝对是深夜视奸我很久，终于忍不住释放了爱的信号。", value: 1 },
{ text: "Just scrolling too fast. Probably didn't even look at the pic.", textCN: "只是划屏幕速度太快，大概率根本没看清照片里是谁。", value: -1 },
{ text: "Oh no, my cringe era is exposed. Setting profile to private.", textCN: "糟糕，非主流时期的黑历史暴露了。立刻设为私密账户。", value: -1 },
],
},
{
id: 17, axis: "M", weight: 1,
text: "Zombie Apocalypse Strategy:",
textCN: "丧尸末日生存策略：",
options: [
{ text: "Use my genius to save my crush and become the legendary hero.", textCN: "用绝顶聪明拯救暗恋对象，并顺理成章成为新世界的传奇英雄。", value: 1 },
{ text: "Survive entirely by dumb luck in a basement because plot armor protects me.", textCN: "全靠纯纯的狗屎运在地下室活下来，毕竟我有主角光环护体。", value: 1 },
{ text: "Hoard canned beans in a basement and trust absolutely no one.", textCN: "像老鼠一样囤积豆子罐头，死锁房门，不相信任何人。", value: -1 },
{ text: "Cry, call 911, realize the government collapsed, and immediately give up.", textCN: "痛哭流涕，疯狂打报警电话，意识到政府已经瘫痪后当场放弃挣扎。", value: -1 },
],
},
{
id: 18, axis: "M", weight: 1,
text: "Reading a motivational quote online:",
textCN: "在网上看到一句励志鸡汤：",
options: [
{ text: "Struck in the soul. I can change the world tomorrow. Share!", textCN: "瞬间被击中灵魂，感觉明天就能改变世界，立刻转发！", value: 1 },
{ text: "Set as wallpaper, convinced this spell brings a year of luck.", textCN: "截图设为壁纸，坚信这句咒语能给我带来一整年的好运。", value: 1 },
{ text: "See right through this toxic capitalist poison meant to harvest us.", textCN: "冷笑一声，一眼看穿这只是用来割韭菜的资本主义精神毒药。", value: -1 },
{ text: "Cringe at the sheer hypocrisy of influencers making up deep quotes.", textCN: "看着网红们硬编出来的深刻语录，感叹人类的虚伪没有下限。", value: -1 },
],
},
{
id: 19, axis: "V", weight: 1,
text: "Walking down the street with headphones on:",
textCN: "戴着耳机走在街上时：",
options: [
{ text: "I'm in a $100M music video. Pedestrians are just my extras.", textCN: "我在拍一部投资过亿的 MV，路人全是被我气质折服的群演。", value: 1 },
{ text: "Strutting with the arrogant energy of someone who owns the city.", textCN: "走出了整条街的店铺全是我个人名下资产的嚣张步伐。", value: 1 },
{ text: "Like a glitched NPC, avoiding all eye contact with a blank stare.", textCN: "像个出 Bug 的 NPC，目光呆滞地躲避所有人的视线。", value: -1 },
{ text: "Trying to master invisibility and blend into the pavement.", textCN: "试图掌握某种隐身术，让自己的颜色与水泥地融为一体。", value: -1 },
],
},
{
id: 20, axis: "V", weight: 1,
text: "Posted a photo and only got 2 likes:",
textCN: "发了张自拍却只有 2 个赞：",
options: [
{ text: "The algorithm is broken, or everyone is secretly jealous of me.", textCN: "肯定是平台该死的算法坏了，或者大家都在暗暗嫉妒我的美貌。", value: 1 },
{ text: "Send it to 8 group chats, forcing friends to praise me at gunpoint.", textCN: "立刻发到八个群里，按头强迫朋友们去给我点赞和吹捧。", value: 1 },
{ text: "I'm a nobody. This is my rightful, pathetic place in the universe.", textCN: "算了，我本来就是一个无人问津、随时可以被抹去的小透明。", value: -1 },
{ text: "Awkwardly switch it to \"Only Me\" to save my fragile dignity.", textCN: "尴尬地迅速转为"仅自己可见"，假装无事发生，挽回尊严。", value: -1 },
],
},
{
id: 21, axis: "V", weight: 1,
text: "Your role in the friend group:",
textCN: "你在朋友圈子里是什么角色：",
options: [
{ text: "The spiritual leader. Without my nod, the hangout doesn't happen.", textCN: "精神领袖兼话事人。没我点头，这个局根本组不起来。", value: 1 },
{ text: "The dramatic focal point. When I speak, everyone else just listens.", textCN: "疯狂输出暴言的抓马焦点。我说话的时候，别人只有听的份。", value: 1 },
{ text: "The background hype-man just smiling, holding coats and drinks.", textCN: "永远在角落附和微笑、负责帮大家拿外套和倒酒的顶级捧哏。", value: -1 },
{ text: "If I don't speak up, they might forget I'm even there the entire night.", textCN: "如果我不主动开口，大家可能一整晚都想不起现场还有我这个人。", value: -1 },
],
},
{
id: 22, axis: "V", weight: 1,
text: "Someone is passive-aggressive to you online:",
textCN: "有人在网上阴阳怪气你：",
options: [
{ text: "Write an 800-word eloquent manifesto to publicly destroy them.", textCN: "写一篇 800 字逻辑严密、文采飞扬的小作文公开反击，必须赢。", value: 1 },
{ text: "Screenshot it, rally the troops, and nuke their comment section.", textCN: "截图发群疯狂摇人，组织亲友团去把对方的评论区冲烂。", value: 1 },
{ text: "Fall into deep overthinking: \"Does everyone actually hate me?\"", textCN: "陷入深深的内耗与自我怀疑："大家平时真的都这么讨厌我吗？"", value: -1 },
{ text: "Pretend not to see it, but perfectly hold this grudge until 2050.", textCN: "假装没看见不回应，但心里能把这个仇原封不动地记到 2050 年。", value: -1 },
],
},
{
id: 23, axis: "V", weight: 1,
text: "How do you approach your birthday?",
textCN: "你怎么对待自己的生日：",
options: [
{ text: "Throw a massive themed party because the spotlight belongs exclusively to me.", textCN: "举办盛大主题派对，毕竟这是我的大日子，全场聚光灯只能打在我身上。", value: 1 },
{ text: "Post a flawless photo dump and expect a flood of essays in comments.", textCN: "发一组绝美的九宫格照片，期待评论区全是被我折服的小作文。", value: 1 },
{ text: "Hide it on socials. As long as my inner circle remembers, that's all I need.", textCN: "在社交软件上隐藏生日。只要最亲近的几个人记得就足够了。", value: -1 },
{ text: "If someone remembers, I panic. If no one remembers, I am at peace.", textCN: "如果有人记得，我会恐慌；如果没人记得，我感到无比安详。", value: -1 },
],
},
{
id: 24, axis: "V", weight: 1.5,
text: "When wild drama or gossip breaks out in your friend group:",
textCN: "当你的圈子里爆发了惊天大八卦时：",
options: [
{ text: "I am the lead investigator and judge. I need to be in the center of the tea.", textCN: "我是首席调查员兼法官。我必须站在吃瓜和审判的绝对中心。", value: 1.5 },
{ text: "Plot twist: I am the drama. I probably started it.", textCN: "反转了：我就是那个抓马本人。这事大概率就是我挑起的。", value: 1.5 },
{ text: "I just sit quietly in the corner, taking mental notes but never speaking.", textCN: "我就安静地坐在角落里，默默在心里做笔记，但绝不发言。", value: -1.5 },
{ text: "\"Leave me out of this, I just want to go home and sleep.\"", textCN: ""千万别把我扯进去，我只想回家睡觉。"", value: -1.5 },
],
},
];
