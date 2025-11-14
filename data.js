window.wordVariants = {
an:["and"],
collar:["caller"],
ice:["eyes"],
year:["ear"],
hitting:["heating"],
beet:["beat","bit"],
deck:["dack"],
while:["wile"],
stain:["sting","stane","stein"],
fume:["film"],
boar:["ball"],
sold:["so"],
told:["tow","toad"],
cold:["coat","coad"],
fold:["foal","float"],
roar:["raw"],
pain:["pane","pein"],
coarse:["cause","calls"],
hoard:["hald","calls"],
wrung:["run"],
hill:["heel"],
bees:["b"],
flew:["flue"],
rude:["rood"],
barber:["baba"],
all:["or"],
been:["bean"],
tailor:["taylor"],
mayor:["maya"],
our:["hour"],
hare:["hair"],
come:["kum"],
dark:["dack"],
gray:["grey","grave"],
cloud:["clowd"],
rug:["rag"],
rag:["reg"],
hung:["hun"],
slip:["sleep"],
knight:["night","nite"],
weed:["we","wee"],
lights:["lites"],
high:["hi"],
deer:["dear"],
niece:["knees"],
gang:["gan"],
sung:["sun"],
sang:["san","sand"],
rang:["ran"],
saw:["sor","soar"],
soar:["saw"],
tool:["two","too"],
too:["two"],
two:["too"],
mow:["moa"],
lawn:["long"],
see:["c","sea"],
goal:["go","gold","gown"],
yawn:["yorn","yaun"],
fall:["four","for"],
dew:["due"],
skews:["skills"],
shone:["shoan","shown"],
pew:["pill"],
stain:["stein","stane"],
plain:["plane","plaint"],
drain:["drain","drink","drane","drein"],
pail:["pale","peil","pay"],
fork:["fork","fock","fawk","falk","fauk"],
fern:["firn","furn"],
larch:["large"],
cord:["called","caud","cald","cawd"],
pen:["pan"],
herd:["heard"],
cheep:["cheap"],
fang:["fan"], 
vine:["vine","wine","fine"], 
stew:["steal","still","steel"], 
steal:["steal","still","steel"], 
robe:["robe","row"], 
dive:["die"],
 vest:["vast"],
 ride:["rye","rise"],
dime:["dime","die"],
 fig:["fig","feg","fix"],
 stag:["starg","steg"],
  sit:["seat"],
  fit:["feet"],
 mad:["med","mat"],
  robe:["row","road"],
  need:["knead","nid","kneed"],
  rung:["run"],
  hang:["han","hand"],
  knot:["not"],
  bus:["buss","buzz"],
  wren:["when","ren"],
  cone:["coan","cown"],
  i:["i","eye"],
  dive:["die"],
  do:["doo"],
  ride:["wide"],
  batch:["bach","badge"],
  mane:["main"],
  mend:["men","man","meand","meant"],
  vase:["face","vais"],
  plane:["plane","plain","play","pain","paint"],
  it:["eat"],
  are:["a","uh","eh","ah","ay","ei","are","ar"],
  A:["a","uh","eh","ah","ay","ei","are","ar"],
  a:["are","a","uh","eh","ah","ay","ei","ar"],
  can:["can","kan"],
  fill:["fill","feel"],
  ship:["sheep"],
  fig:["feg"],
  it:["it","eat"],
  vest:["fest","rest"],
  did:["did","deed"],
  log:["log","lok","lawg","lock"],
  jog:["job","jog","jock","jawg"],
  hog:["haw","hog","hawg","hoguh","ho"],
  sob:["sob","sorb","sobuh"],
  hid:["heed","hid","hit","hed"],
  kid:["kid","kidd","kit","keed"],
  sip:["sip","zip","seep"],
  hit:["hit","heat","heed"],
  bit:["bit","beat","beet","bi"],
  win:["win","wen","ween","wind"],
  sob:["sorb"],
  vet:["fat","ret","rat"],
  bad:["bed"],
 bed:["bad"],
  latch:["large"],
  bag:["beg"],
 lend:["land"],
 sash:["sarsh","sesh"],
 mug:["muck","mag"],
 dog:["dock","dot","dock"],
 bake:["bay","baik"],
 dime:["dyme","die"],
 stag:["starg","steg"],
 by:["buy","bye","bie"],
 this:["diss","these"],
 They:["day","dey"],
 his:["hiss"],
 does:["duss"]


};

// phonics 拼唔到、要特別顯示（淺紅→深紅）兼可點擊發音
window.SPECIAL_WORDS = ["i","do","to","the","come","you","have","could","your","some","many","there","what","any","said","here","would","does","into","who","their","two","give","over","where","other","most","our","move","doesn't","don't","onto","put","one","floor","coming","today","should","key","door","going"];

// 課本資料（1–8）
window.LESSONS = {};
window.LESSONS[1] = {
  title: "Lesson 7-1",
  pages: [
    { text:"I can fill it.", image:"images/book1_1.png", cn:"我可以把它裝滿。" },
    { text:"Tom can let a cat in.", image:"images/book3_1.png", cn:"Tom可以容計貓入來。" },
    { text:"I can sip it.", image:"images/book1_4.png", cn:"我可以啜一口。" },
    { text:"I can hit it.", image:"images/book1_5.png", cn:"我可以打它。" },
    { text:"I bit it.", image:"images/book1_6.png", cn:"我咬了它。" }
  ]
};

LESSONS[2] = {
  title: "Lesson 7-2",
  pages: [
    { text:"The rat is hot.", image:"images/book2_5.png", cn:"那隻老鼠很熱。" },
    { text:"I did it.", image:"images/book1_3.png", cn:"我做到了。" },
    { text:"The cat can sit.", image:"images/book2_1.png", cn:"那隻貓會坐下。" },
    { text:"A cat is on the log.", image:"images/book2_2.png", cn:"一隻貓在木頭上。" },
    { text:"The man can jog.", image:"images/book2_3.png", cn:"那個男人可以慢跑。" }
]
};

LESSONS[3] = {
  title: "Lesson 7-3",
  pages: [
    { text:"It is just a prank.", image:"images/book3_2.png", cn:"那只是個惡作劇。" },
    { text:"Kit is a grump.", image:"images/book6_5.png", cn:"Kit是個脾氣暴躁的人。" },
    { text:"There is a smell.", image:"images/book3_4.png", cn:"那是一股氣味。" },
    { text:"I can win.", image:"images/book1_2.png", cn:"我可以贏。" },
    { text:"The hat is red.", image:"images/book3_7.png", cn:"那頂帽子是紅色的。" }
]
};

LESSONS[4] = {
  title: "Lesson 8-1",
  pages: [
  { text:"The witch has a black hat.", image:"images/book4_1.png", cn:"女巫有一頂黑帽子。" },
  { text:"The man can chop it.", image:"images/book4_2.png", cn:"那個男人可以砍它。" },
  { text:"It is a latch.", image:"images/book4_3.png", cn:"這是一個門閂。" },
  { text:"Can you help him with the test?", image:"images/book4_4.png", cn:"你能幫他做這個測試嗎？" },
  { text:"Hush! He must not yell.", image:"images/book5_1.png", cn:"噓！他不可大喊。" }
]
};

LESSONS[5] = {
  title: "Lesson 8-2",
  pages: [
  { text:"Sam can punch it.", image:"images/book4_5.png", cn:"Sam可以打這個。" },
  { text:"It will not flush.", image:"images/book5_2.png", cn:"它沖不下去。" },
  { text:"Kim will catch it.", image:"images/book6_3.png", cn:"Kim會接住它。" },
  { text:"It is a check up.", image:"images/book5_4.png", cn:"這是一次檢查。" },
  { text:"It is not a match.", image:"images/book5_5.png", cn:"這隻不是一對。" }
]
};

LESSONS[6] = {
  title: "Lesson 8-3",
  pages: [
  { text:"Plum is the champ!", image:"images/book6_4.png", cn:"Plum是冠軍！" },
   { text:"Sam can sit with the man.", image:"images/book8_1.png", cn:"Sam可以和男人坐。" },
  { text:"Ross can lend some cash.", image:"images/book5_3.png", cn:"Ross可以借一些錢。" },
  { text:"Jeff will crush it.", image:"images/book6_1.png", cn:"Jeff會把它壓碎。" }
]
};

LESSONS[7] = {
  title: "Lesson 9-1",
  pages: [
  { text:"She can try it on.", image:"images/book7_1.png", cn:"她可以試穿，但將會不合身！" },
  { text:"He will smash it!", image:"images/book7_3.png", cn:"他會把它打碎！" },
  { text:"The jet can go up!", image:"images/book8_3.png", cn:"那架噴射機可以升空！" },
  { text:"My mug is hot.", image:"images/book7_6.png", cn:"我的杯子很燙。" },
  { text:"Smith is my chum.", image:"images/book6_2.png", cn:"Smith是我的好朋友。" }
]
};

LESSONS[8] = {
  title: "Lesson 9-2",
  pages: [
   { text:"It is my kit.", image:"images/book7_5.png", cn:"這是我的工具包。" },
  { text:"She has a brush.", image:"images/book7_2.png", cn:"她有一把刷子。" },
  { text:"She has a red belt.", image:"images/book7_4.png", cn:"她有一條紅色腰帶。" },
  { text:"He must get a job.", image:"images/book8_2.png", cn:"他必須找到工作。" },
  { text:"He can go on the ramp.", image:"images/book8_4.png", cn:"他可以走上斜坡。" },
  { text:"He did flunk.", image:"images/book8_5.png", cn:"他考試不及格。" },
  { text:"He has a lot of junk in the box.", image:"images/book8_6.png", cn:"他盒子裡有很多雜物。" }
]
};

LESSONS[9] = {
  title: "Lesson 10-1",
  pages: [
  { text:"It can stand.",                 image:"images/book9_1.png",  cn:"牠可站著。" },
  { text:"He is stuck.",                   image:"images/book9_2.png",  cn:"他被卡住了。" },
  { text:"A skunk is on the bench !",        image:"images/book9_4.png",  cn:"有隻臭鼬在長椅上！" },
  { text:"The can stunk. Yuck!",           image:"images/book10_1.png", cn:"這個罐子好臭。真噁心！" },
  { text:"The man is by the stump.",       image:"images/book10_2.png", cn:"那個男人在樁旁邊。" },
  { text:"What did she spend at the shop ?", image:"images/book10_4.png", cn:"她在商店花了多少錢？" }
]
};

LESSONS[10] = {
  title: "Lesson 11-1",
  pages: [
  { text:"Bob has a big spot.",                   image:"images/book11_2.png", cn:"Bob有個大斑點。" },
  { text:"A trick !",                      image:"images/book11_3.png", cn:"一個把戲！" },
  { text:"The man can fix the lamp.",      image:"images/book13_5.png", cn:"那個男人會修理燈。" },
  { text:"I can kick it.",                 image:"images/book11_7.png", cn:"我可以踢它。" },
  { text:"The wig",                        image:"images/book12_2.png", cn:"假髮。" }
]
};

LESSONS[11] = {
  title: "Lesson 11-2",
  pages: [
  { text:"A big pig.",                  image:"images/book13_2.png", cn:"一隻大的豬。" },
  { text:"It can lick.",             image:"images/book11_5.png", cn:"它會舔無花果。" },
  { text:"A sick cat.",                    image:"images/book11_1.png", cn:"一隻生病的貓。" },
  { text:"I can pick it.",                 image:"images/book12_1.png", cn:"我可以把它摘下。" },
  { text:"I still have six eggs.",         image:"images/book13_4.png", cn:"我還有六個雞蛋。" },
  { text:"The fly is a big pest !",       image:"images/book13_6.png", cn:"這隻蒼蠅真討厭！" }
]
};

LESSONS[12] = {
  title: "Lesson 12-1",
  pages: [
  { text:"The plane will land.",           image:"images/book14_1.png", cn:"飛機就要降落了。" },
  { text:"The man is late !",              image:"images/book14_2.png", cn:"那個男人遲到了！" },
  { text:"He will fix the pipe.",          image:"images/book14_3.png", cn:"他會修理水管。" },
  { text:"I like to swim with the fish.",  image:"images/book14_4.png", cn:"我喜歡和魚一起游泳。" },
  { text:"Drake can make a stack of bricks.", image:"images/book16_3.png", cn:"Drake可以把磚頭堆成一摞。" },
  { text:"He made a big mess.",            image:"images/book14_6.png", cn:"他弄得一團糟。" }
]
};

LESSONS[13] = {
  title: "Lesson 12-2",
  pages: [
  { text:"Kate can make a cake.",           image:"images/book15_1.png", cn:"Kate會烤蛋糕。" },
  { text:"James wipes the dish.", image:"images/book15_2.png", cn:"James擦碟子。" },
  { text:"Scott had a red cape.",             image:"images/book15_3.png", cn:"Scott有一件紅色斗篷。" },
  { text:"It is a fun game.",              image:"images/book14_5.png", cn:"這是一個有趣的遊戲。" },
  { text:"He will mend the gate.",         image:"images/book16_2.png", cn:"他會修補大門。" },
  { text:"He will go in the lake.",        image:"images/book15_4.png", cn:"他要走進湖裡。" },
  { text:"The ship will save the man.",    image:"images/book15_6.png", cn:"這艘船會救那個男人。" }
]
};

LESSONS[14] = {
  title: "Lesson 12-3",
  pages: [
  { text:"The bunk is not made.",          image:"images/book16_1.png", cn:"這張雙層床還沒鋪好。" },
  { text:"My plane is up in the sky.",    image:"images/book16_4.png", cn:"我的飛機在天上。" },
  { text:"Go in the cave !",        image:"images/book17_6.png", cn:"不要進洞穴！" },
  { text:"Max is up in a plane.",           image:"images/book17_3.png", cn:"Max在飛機上。" },
  { text:"We go on a hike.",             image:"images/book16_5.png", cn:"我們去健行。" },
  { text:"We rest in the shade.",           image:"images/book16_6.png", cn:"我們坐在陰涼處。" }
]
};

LESSONS[15] = {
  title: "Lesson 12-4",
  pages: [
  { text:"The grape is ripe.",            image:"images/book17_1.png", cn:"這顆葡萄熟了。" },
  { text:"He will make a big pile of cakes.", image:"images/book18_1.png", cn:"他會做一大批蛋糕。" },
  { text:"He can drive the big dump truck.", image:"images/book18_6.png", cn:"他會開大型自卸卡車。" },
  { text:"The big cat has a mane.",        image:"images/book18_2.png", cn:"大貓有鬃毛。" },
  { text:"He can make a milk|shake with grapes.", image:"images/book17_2.png", cn:"他可以用葡萄做奶昔。" },
  { text:"The bike will crash.",           image:"images/book17_4.png", cn:"他的腳踏車會摔倒。" },
  { text:"Seth hit the vase !",             image:"images/book17_5.png", cn:"Seth把花瓶打到了！" }
]
};


LESSONS[16] = {
  title: "Lesson 13-1",
  pages: [
  { text:" Jude can nap at home.",            image:"images/book19_1.png", cn:"Jude可以在家小睡。" },
  { text:"Kyle is on a hose.",               image:"images/book20_4.png", cn:"Kyle在水管上。" },
  { text:"Jude drove the truck.",             image:"images/book20_5.png", cn:"Jude開過貨車。" },
  { text:"Duke is cute.",               image:"images/book19_3.png", cn:"Duke很可愛。" }
]
};


LESSONS[17] = {
  title: "Lesson 13-2",
  pages: [
  { text:"The lake froze.",                image:"images/book20_3.png", cn:"湖結冰了。" },
  { text:"The pot is on the stove.",       image:"images/book19_4.png", cn:"鍋子在爐子上。" },
  { text:"I will use it to stitch.",     image:"images/book19_2.png", cn:"我要用這個來縫東西。" },
  { text:" It is stuck in the stone.",      image:"images/book20_1.png", cn:"它卡在石頭裡。" }
]
};


LESSONS[18] = {
  title: "Lesson 14-1",
  pages: [
  { text:"I spot him swing|ing.",                         image:"images/book26_2.png", cn:"我看到他盪來盪去。" },
   { text:"It is a knot.",                  image:"images/book21_2.png", cn:"這是一個結。" },
  { text:"That pile of trash must stink.", image:"images/book22_1.png", cn:"那堆垃圾一定很臭。" },
  { text:"The man can hang glide up in the sky.", image:"images/book21_3.png", cn:"那個男人可以在天空中玩懸掛式滑翔。" },
  { text:"Luke has rung the bell.",          image:"images/book21_4.png", cn:"Luke已經把鐘敲響了。" },
  { text:"At the knob.",                   image:"images/book21_5.png", cn:"在門把上。" },
  { text:"That king has a red cape.",      image:"images/book21_6.png", cn:"這位國王穿著紅色長袍。" }
]
};



LESSONS[19] = {
  title: "Lesson 14-2",
  pages: [
  { text:"Trish will have a drink.",         image:"images/book22_2.png", cn:"Trish會喝一杯飲料。" },
  { text:"Kit is trim|ming the plant.",     image:"images/book22_4.png", cn:"Kit正在修剪植物。" },
  { text:"Kim will skate at the rink.",    image:"images/book22_3.png", cn:"Kim會在溜冰場溜冰。" },
  { text:"He is sit|ting at the desk.",    image:"images/book22_5.png", cn:"他正坐在這張書桌前。" },
  { text:"The dress is pink.",                   image:"images/book29_1.png", cn:"她的洋裝是粉紅色。" },
  { text:"The man can sing a song.",              image:"images/book21_7.png", cn:"那個男人會唱歌。" }
]
};

LESSONS[20] = {
  title: "Lesson 15-1",
  pages: [
  { text:"It is a wren.",                                 image:"images/book23_1.png", cn:"那是一隻鷦鷯。" },
  { text:"A ship wreck !",                                image:"images/book23_2.png", cn:"一場船難！" },
  { text:"She grabs a whisk to mix the eggs.",            image:"images/book23_5.png", cn:"她拿起打蛋器攪拌雞蛋。" },
  { text:"She wrote a quote on the wrench.",              image:"images/book23_6.png", cn:"她在扳手上寫了一句引語。" }
]
};

LESSONS[21] = {
  title: "Lesson 16-1",
  pages: [
  { text:"Ash can not spot the thief.", image:"images/book24_1.png", cn:"Ash沒有看見那個小偷。" },
 { text:"The man will try to pluck the beet.",   image:"images/book28_4.png", cn:"那個男人會試著拔出紅菜頭。" },
  { text:"The man can beat the drum.",      image:"images/book24_2.png", cn:"那個男人會打鼓。" },
  { text:"That is a lot of glue !",           image:"images/book25_5.png", cn:"這可是真多膠水！" },
  { text:"That man is a chief.",            image:"images/book24_3.png", cn:"這個男人是一位首領。" },
  { text:"I think that Spike wants to steal the snack.",  image:"images/book24_5.png", cn:"我想Spike想偷走點心。" },
  { text:"That man is not weak.",           image:"images/book24_6.png", cn:"這個男人不虛弱。" }
]
};

LESSONS[22] = {
  title: "Lesson 16-2",
  pages: [
  { text:"Dave will make it neat.",             image:"images/book25_1.png", cn:"Dave會把它整理得很整齊。" },
  { text:"The wheel is stuck.",                  image:"images/book28_1.png",  cn:"車輪卡住了。" },
  { text:"The pipe has a leak.",            image:"images/book24_4.png", cn:"這根管子漏水了。" },
  { text:"The cake is a treat !",        image:"images/book25_2.png", cn:"這個蛋糕是一份大大的享受！" },
  { text:"A queen is snee|zing.",                 image:"images/book27_6.png",  cn:"一位王后在打噴嚏。" },
  { text:"That man will dream.",              image:"images/book25_3.png", cn:"這個男人會做夢。" },
  { text:"Frank will take a peach.",        image:"images/book25_4.png", cn:"Frank會摘一顆桃子。" }
]
};

LESSONS[23] = {
  title: "Lesson 16-3",
  pages: [
  { text:"Teal can smell smoke in the black pot.", image:"images/book27_1.png",  cn:"Teal聞到黑鍋裡的煙。" },
  { text:"The wheel is bent.",           image:"images/book25_6.png", cn:"他的腳踏車輪子彎了。" },
  { text:"I slide at a sweet speed.",                 image:"images/book27_2.png",  cn:"我以一個甜美的速度滑行。" },
  { text:"Nick can go into the deep.",           image:"images/book27_3.png",  cn:"Nick能潛入深處。" },
  { text:"Steve will peel it.",                     image:"images/book27_4.png",  cn:"Steve會把它剝皮。" },
  { text:"The man has a slee|ping sheep.",        image:"images/book27_5.png",  cn:"那個男人有一隻睡著的羊。" },
  { text:"I wave to Chief.",                          image:"images/book26_5.png", cn:"我向Chief揮手。" }
]
};

LESSONS[24] = {
title: "Lesson 16-4",
  pages: [
  { text:"I slide on a steep hill.",              image:"images/book28_2.png",  cn:"我在陡峭的山坡上滑雪橇。" },
  { text:"The bird can cheep.",                 image:"images/book28_3.png",  cn:"小雞會吱吱叫。" },
  { text:"Dash made a deep trench.",             image:"images/book28_5.png", cn:"Dash能挖一條深溝。" },
  { text:"The fish can eat sea|weed.",                  image:"images/book26_3.png", cn:"那條大魚會嚼食海草。" },
  { text:"He will sweep up the dust.",                         image:"images/book26_4.png", cn:"他會把灰塵打掃乾淨。" },
  { text:"A cat is on the beach by a stea|ming hot spring .", image:"images/book26_6.png", cn:"一隻貓在溫泉旁的海灘上。" }
]
};

LESSONS[25] = {
  title: "Lesson 17-1",
  pages: [
  { text:"I can let the bird hatch.",                         image:"images/book26_1.png", cn:"我看得到小鳥孵化。" },
  { text:"The ink tube burst.",        image:"images/book31_7.png", cn:"墨膽爆了。" },
  { text:"The red shirt will dry.",              image:"images/book34_3.png", cn:"那件紅色襯衫會乾的。" },
  { text:"There is a smart girl on the stamp.",        image:"images/book29_3.png", cn:"郵票上有一位女孩。" },
  { text:"He can run to the park.",              image:"images/book29_2.png", cn:"他能跑到公園。" },
  { text:"He is in the storm.",                      image:"images/book33_5.png", cn:"他在風暴之中。" }
]
};

LESSONS[26] = {
  title: "Lesson 17-2",
  pages: [
  { text:"The bird in is on a perch.",              image:"images/book29_6.png", cn:"那隻鳥停在棲木上。" },
  { text:"Smith has curls.",                  image:"images/book29_4.png", cn:"Smith有一頭大卷髮。" },
  { text:"A birch is bur|ning.",                  image:"images/book34_1.png", cn:"一棵落葉松在燃燒。" },
  { text:"The girl is hurt.  I spot her cry.",        image:"images/book32_1.png",  cn:"女孩受傷了。我看見她在哭。" },
  { text:"The shark has a scar like a star.",               image:"images/book30_6.png", cn:"那條鯊魚有一道疤痕。" },
  { text:"He will turn it on.",                      image:"images/book33_7.png", cn:"他會把它打開。" }
]
};



LESSONS[27] = {
  title: "Lesson 17-3",
  pages: [
  { text:"The car is stuck in the dirt.", image:"images/book31_1.png", cn:"車子陷在泥裡。" },
  { text:"The bird has a flute.",        image:"images/book31_2.png", cn:"那隻鳥有一支長笛。" },
   { text:"He will start to get on the hump.",     image:"images/book30_4.png", cn:"他要騎在駝峰上兜風。" },
  { text:"I have the man surf the wave.", image:"images/book31_3.png", cn:"我看到那個男人在衝浪。" },
  { text:"He has a big in|sect in a jar.",   image:"images/book31_4.png", cn:"他在罐子裡養著一隻昆蟲。" },
  { text:"He has fun in the yard.",      image:"images/book31_5.png", cn:"他在院子裡玩得很開心。" },
  { text:"Can you rate my art?",          image:"images/book31_6.png", cn:"你可以為我的作品評分嗎？" }
]
};



LESSONS[28] = {
  title: "Lesson 17-4",
  pages: [
  { text:"He has a sling on the arm.",               image:"images/book32_2.png",  cn:"他的手臂上有吊帶。" },
  { text:"The horse has a horn.",                    image:"images/book32_3.png",  cn:"那匹馬有一根角。" },
  { text:"The snake has a sharp fang.",          image:"images/book29_5.png", cn:"那條蛇有尖利的毒牙。" },
  { text:"The girl can read the map on a street.",    image:"images/book32_4.png",  cn:"那個女孩能看見街上的地圖。" },
  { text:"Tom can stir the pot.",              image:"images/book32_5.png",  cn:"Tom可以攪動鍋裡的東西。" }
]
};

LESSONS[29] = {
  title: "Lesson 17-5",
  pages: [
  { text:"He had a slurp of the milk|shake.",    image:"images/book33_1.png",  cn:"他大口啜了一口奶昔。" },
  { text:"The ink went on the shirt.",               image:"images/book33_2.png",  cn:"墨水弄到他的襯衫上了。" },
  { text:"He is stuck in the rope.",                 image:"images/book33_3.png",  cn:"他被繩線纏住了。" },
  { text:"The kids reach a fort made of stone.",     image:"images/book33_4.png", cn:"孩子們來到一座石頭堡壘。" },
  { text:"The frog is hurt.",                        image:"images/book33_6.png", cn:"那隻青蛙受傷了。" }
]
};

LESSONS[30] = {
  title: "Lesson 18-1",
  pages: [
  { text:"The man will wait for the note I sent.", image:"images/book35_1.png", cn:"那個男人會等我寄出的便條。" },
  { text:"He will eat it plain.",         image:"images/book35_6.png", cn:"他要吃不加任何配料的。" },
  { text:"Jeff has a mop and a pail.",         image:"images/book35_3.png", cn:"Jeff拿著拖把和水桶。" },
  { text:"She can wait for it.",              image:"images/book35_4.png", cn:"她可以等公車。" },
  { text:"He will put some oil in the pan.",    image:"images/book36_6.png", cn:"他會在鍋裡倒一些油。" }
]
};

LESSONS[31] = {
  title: "Lesson 18-2",
  pages: [
  { text:"The snail has a big shell.",  image:"images/book36_2.png", cn:"那隻蝸牛有個大殼。" },
  { text:"They have to stand and wait.",image:"images/book36_4.png", cn:"他們必須站著等候。" },
  { text:"It is not fun to camp in the rain.", image:"images/book36_5.png", cn:"在雨中露營一點也不好玩。" }
]
};


LESSONS[32] = {
  title: "Lesson 19-1",
  pages: [
  { text:"He drops a screw.",      image:"images/book37_2.png", cn:"他把一顆螺絲掉在教堂長椅上。" },
  { text:"The shrew steps on the grass.",     image:"images/book37_4.png", cn:"那隻鼩鼱踩在草地上。" },
  { text:"She knew him as he grew flush.",     image:"images/book37_5.png", cn:"他致富時她就認識他了。" },
  { text:"The clock skews on the shelf.",     image:"images/book37_7.png", cn:"架子上的時鐘歪斜著。" },
  { text:"They have a kite.", image:"images/book38_6.png", cn:"他們有一個風箏。" }
]
};

LESSONS[33] = {
  title: "Lesson 20-1",
  pages: [
  { text:"He can clean that toy.", image:"images/book38_1.png", cn:"他可以把那些玩具清潔乾淨。" },
  { text:"Tell Chase to stay !", image:"images/book39_5.png", cn:"叫那隻狗待著不要動！" },
  { text:"He will play with the train.|", image:"images/book38_2.png", cn:"他會玩他的火車玩具。|"},
  { text:"I made That pot with clay.", image:"images/book38_3.png", cn:"我用黏土做了這個陶罐。" },
  { text:"The boy is swee|ping.", image:"images/book38_4.png", cn:"這個男孩正在掃地。" },
  { text:"They nap by the tree.", image:"images/book38_5.png", cn:"他們在樹下小睡。" }
]
};

LESSONS[34] = {
  title: "Lesson 20-2",
  pages: [
  { text:"They heave on the rope.", image:"images/book39_1.png", cn:"他們拉扯著繩子。" },
  { text:"He will play in the field.", image:"images/book39_2.png", cn:"他會在草地上玩。" },
  { text:"I let the kid play with the car.", image:"images/book39_4.png", cn:"我看到小小孩在玩他的玩具車。" },
  { text:"She felt deep joy on her birth|day.", image:"images/book39_6.png", cn:"她在生日那天感到非常喜悅。" },
  { text:"He plays in the sand at the beach.", image:"images/book39_7.png", cn:"他在海灘的沙地上玩耍。" },
  { text:"June sprays per|fume.", image:"images/book39_8.png", cn:"June噴香水。" }
]
};

 LESSONS[35] = {
  title: "Lesson 21-1",
  pages: [
  { text:"That man has a tall hat.", image:"images/book40_1.png", cn:"那個男人戴著一頂高帽子。" },
  { text:"She wants to call for help.", image:"images/book40_2.png", cn:"她想呼救。" },
  { text:"It is made of straw.", image:"images/book41_1.png", cn:"這個人是用稻草做的（稻草人）。" },
  { text:"He calls the crew for lunch.", image:"images/book41_3.png", cn:"他叫工作人員來吃午飯。" },
  { text:"You can watch Jade hit|ting the ball.", image:"images/book41_4.png", cn:"你可以看到她在擊球。" },
  { text:"He will make a brick wall.", image:"images/book40_3.png", cn:"他會砌一堵磚牆。" },
  { text:"What did the man draw?", image:"images/book40_5.png", cn:"那個男人畫了什麼？" }
]
};


LESSONS[36] = {
  title: "Lesson 22-1",
  pages: [
  { text:"He is in a boat with the coach.", image:"images/book42_1.png", cn:"他和他的教練在一艘帆船上。" },
  { text:"I grind fresh co|ffee beans.", image:"images/book42_3.png", cn:"我研磨新鮮的咖啡豆。" },
  { text:"He can wind up the car.", image:"images/book43_5.png", cn:"他可以把發條車上緊發條。" },
  { text:"She can hitch the boat to the car.", image:"images/book44_1.png", cn:"她可以把船牽引到車上。" },
  { text:"He is with a float .", image:"images/book43_1.png", cn:"他帶著一個浮具。" },
  { text:"The man sold some fish to me.", image:"images/book44_2.png", cn:"這個男人賣了些魚給我。" },
  { text:"The car is on the road.", image:"images/book42_5.png", cn:"那輛車在路上。" }
]
};

LESSONS[37] = {
  title: "Lesson 22-2",
  pages: [
  { text:"He can clean Oak with soap.", image:"images/book43_2.png", cn:"我爸爸可以用肥皂幫狗洗乾淨。" },
  { text:"She is sweet and kind.", image:"images/book45_2.png", cn:"她既貼心又善良。" },
  { text:"That man is blind.", image:"images/book45_3.png", cn:"這個男人失明了。" },
  { text:"It can grind meat.", image:"images/book45_4.png", cn:"這個可以絞肉。" },
  { text:"I have her to hold the horn.", image:"images/book44_6.png", cn:"我可以看到她拿著喇叭。" },
  { text:"He has a fur coat.", image:"images/book42_6.png", cn:"他有一件很大的皮草外套。" } 
]
};


LESSONS[38] = {
  title: "Lesson 22-3",
  pages: [
 { text:"The short man is the coach.", image:"images/book43_3.png", cn:"那位矮的男人是教練。" },
  { text:"The girl has a toad.", image:"images/book42_4.png", cn:"那個女孩有一隻蟾蜍。" },
  { text:"The boat sank.", image:"images/book45_5.png", cn:"那艘船沉了。" },
  { text:"That car has a load.", image:"images/book43_6.png", cn:"這輛車載著很重的貨物。" },
 { text:"What will he find in the box?", image:"images/book45_6.png", cn:"他會在那個箱子裡找到什麼？" }
]
};

LESSONS[39] = {
  title: "Lesson 23-1",
  pages: [
  { text:"The sn*ow is deep.", image:"images/book46_1.png", cn:"積雪很深。" },
  { text:"He can thr*ow it with a hand.", image:"images/book46_2.png", cn:"他可以用手把它丟出去。" },
  { text:"How did he do that trick ?", image:"images/book46_4.png", cn:"他怎樣做到那個把戲的？" },
  { text:" Brooke will be late soon !", image:"images/book48_2.png", cn:"Brooke很快就要遲到了！" },
  { text:"I let him thr*ow a red ball.", image:"images/book46_7.png", cn:"我看到他丟出紅色的球。" },
  { text:"He can fix it with a tool.", image:"images/book46_9.png", cn:"他可以用工具修理浴缸。" }
]
};

LESSONS[40] = {
  title: "Lesson 23-2",
  pages: [
  { text:"How well the plant grew !", image:"images/book46_6.png", cn:"看看這株植物長得多好！" },
  { text:"A fish is on the hook.", image:"images/book48_4.png", cn:"一條大魚上鉤了。" },
  { text:"He can thr*ow a coin into the hat.", image:"images/book47_5.png", cn:"他可以把硬幣丟進帽子裡。" },
  { text:"Look! Your nose froze.", image:"images/book47_6.png", cn:"看！他的鼻子在寒冷中凍僵了。" },
  { text:"The cook cut the meat.", image:"images/book47_7.png", cn:"我看到廚師在切肉。" }
]
};

LESSONS[41] = {
  title: "Lesson 23-3",
  pages: [
  { text:"The kid can eat with a spoon.", image:"images/book47_10.png", cn:"小小孩會用湯匙吃東西。" },
  { text:"He is up on the roof.", image:"images/book46_5.png", cn:"他在屋頂上。" },
  { text:" Troy made a boom.", image:"images/book48_1.png", cn:"Troy發出一聲巨響。" },
  { text:"The foot is hurt.", image:"images/book48_3.png", cn:"那隻狗的腳受傷了。" },
  { text:"Joy shook the red sheet.", image:"images/book48_5.png", cn:"Joy把紅色地毯抖了抖。" }
]
};


LESSONS[42] = {
  title: "Lesson 23-4",
  pages: [
  { text:"Rose can cook the food.", image:"images/book48_6.png", cn:"Rose會煮飯。" },
  { text:"Look what my cat did with the claw !", image:"images/book48_7.png", cn:"看我的貓用爪子做了什麼！" },
  { text:"He will cut the wood", image:"images/book48_8.png", cn:"他會用鋸子鋸木頭。" },
  { text:"Brent will look for a clue.", image:"images/book48_9.png", cn:"Brent會尋找線索。" },
  { text:"The cook will smell the dish.", image:"images/book48_10.png", cn:"廚師會聞一下燉菜的味道。" }
]
};

LESSONS[43] = {
  title: "Lesson 24-1",
  pages: [
  { text:" Can you hear the bell ?", image:"images/book49_1.png", cn:"你聽到鐘的鏗鏘聲嗎？" },
  { text:"I will search for the lost pearl.", image:"images/book49_2.png", cn:"我要尋找那顆遺失的珍珠。" },
  { text:"I hear her sing.", image:"images/book49_3.png", cn:"我聽到她唱歌。" },
  { text:"He can bl*ow the horn for the new year.", image:"images/book49_4.png", cn:"他可以在新年吹號角。" },
  { text:"My dear Neil spot a deer in the woods.", image:"images/book49_5.png", cn:"我親愛的Neil在樹林裡看到一隻鹿。" },
  { text:"Cheer rang in the room with joy.", image:"images/book49_6.png", cn:"歡呼聲在房間裡回蕩。" }
]
};

LESSONS[44] = {
  title: "Lesson 25-1",
  pages: [
  { text:"The cook sings a fun|ny song.", image:"images/book50_1.png", cn:"廚師唱了一首有趣的曲子。" },
  { text:"The wit|ty man is flying the plane.", image:"images/book51_4.png", cn:"那個機智的男人駕駛了飛機。" },
  { text:"The girl has a big can|dy cane.", image:"images/book50_2.png", cn:"女孩有一根很大的拐杖糖。" },
  { text:"Can he pin the tail on the don|key?", image:"images/book50_3.png", cn:"他能把尾巴別到驢子身上嗎？" },
  { text:"Floyd is clea|ning the chim|ney.", image:"images/book50_5.png", cn:"Floyd正在清理煙囪。" }
]
};


LESSONS[45] = {
  title: "Lesson 25-2",
  pages: [
  { text:"The fun|ny man has a blue hat.", image:"images/book51_1.png", cn:"那個滑稽的男人戴著藍帽子。" },
  { text:"It is a stor|my sky.", image:"images/book59_2.png", cn:"那是一片深灰色的暴風雲。" },
  { text:"The ape has sung a fun|ny song.", image:"images/book51_2.png", cn:"那隻猩猩唱了一首有趣的歌。" },
  { text:"He is fee|ling very diz|zy.", image:"images/book50_6.png", cn:"他覺得很頭暈。" }
]
};


LESSONS[46] = {
  title: "Lesson 26-1",
  pages: [
  { text:"Bruce is play|ing hoc|key.", image:"images/book52_1.png", cn:"Bruce正在打冰球。" },
  { text:"He put a spice in it.", image:"images/book52_2.png", cn:"他放了一些香料進去。" },
  { text:"The team is nice.", image:"images/book53_1.png", cn:"這一群人是很好的夥伴。" },
  { text:"Lance has a nice voice.", image:"images/book53_3.png", cn:"Lance有好聽的聲音。" },
  { text:"Her voice is strong.", image:"images/book56_2.png", cn:"她的聲音很大。" },
  { text:"That is a big piece of cake!", image:"images/book52_3.png", cn:"那是一大塊蛋糕！" },
  { text:"The mice dance hap|pi|ly .", image:"images/book52_4.png", cn:"老鼠們在跳舞。" }
]
};


LESSONS[47] = {
  title: "Lesson 27-1",
  pages: [
  { text:"He has a bird in a cage.", image:"images/book54_2.png", cn:"他籠子裡有一隻鳥。" },
  { text:"Pearl is the judge.", image:"images/book54_4.png", cn:"Pearl是法官。" },
  { text:"He has a smudge on the green shirt.", image:"images/book54_5.png", cn:"他綠色的襯衫上有一個污漬。" },
  { text:"They drive on the bridge.", image:"images/book55_1.png", cn:"他們開車在橋上。" },
  { text:"I like to eat the fudge.", image:"images/book55_2.png", cn:"我喜歡吃乳脂糖。" },
  { text:"He is du|sting the fridge.", image:"images/book55_4.png", cn:"他正在擦拭冰箱。" }
]
};

LESSONS[48] = {
  title: "Lesson 28-1",
  pages: [
  { text:"It is not nice to shout on the phone.", image:"images/book56_1.png", cn:"在電話裡大喊是不禮貌的。" },
  { text:"He might burn the feet on the coal.", image:"images/book57_5.png", cn:"他可能會被煤炭燙到腳。" },
  { text:"I bought a new house!", image:"images/book59_1.png", cn:"快來看看他的新房子！" },
  { text:"The man will wait for the flight.", image:"images/book56_4.png", cn:"那個男人會等航班。" },
  { text:"The knight is fal|ling into the moat.", image:"images/book57_7.png", cn:"那位騎士掉進了護城河。" },
  { text:"He is up late at night.", image:"images/book56_7.png", cn:"他晚上睡得很晚。" }
]
};

LESSONS[49] = {
  title: "Lesson 28-2",
  pages: [
    { text:"Look at the huge pig !", image:"images/book47_9.png", cn:"看那隻巨大的豬！" },
{ text:"That man is out in the rain.", image:"images/book57_3.png", cn:"這個男人在雨中。" },
  { text:"The leaf will not get out.", image:"images/book56_8.png", cn:"那棵雜草拔不出來。" },
  { text:"I wish they would stop shou|ting.", image:"images/book57_4.png", cn:"我希望他們不要再大喊。" },
  { text:"The light on her cake will gl*ow.", image:"images/book57_6.png", cn:"她蛋糕上的燈會發光。" },
  { text:"The man might wreck the car.", image:"images/book57_8.png", cn:"那個瘋子可能會弄壞車子。" }
]
};

LESSONS[50] = {
  title: "Lesson 28-3",
  pages: [
  { text:"Grace has a light to walk in|side.", image:"images/book56_6.png", cn:"Grace在洞裡用兩盞燈照明。" },
  { text:"He is clea|ning under the couch.", image:"images/book59_7.png", cn:"他正在清潔沙發底下。" },
  { text:"The men fight.", image:"images/book57_2.png", cn:"他們在打架。" },
  { text:"He can not turn on the light.", image:"images/book58_1.png", cn:"他不能開燈。" },
  { text:"He can bl*ow them out.", image:"images/book58_8.png", cn:"他可以把它們吹熄。" }
]
};

LESSONS[51] = {
  title: "Lesson 28-4",
  pages: [
  { text:"It can spray out of the sink.", image:"images/book59_3.png", cn:"它會從水槽噴出來。" },
  { text:"The fish can leap out of the sea.", image:"images/book58_4.png", cn:"那條魚可以跳出海面。" },
  { text:"Steam comes out of the cup.", image:"images/book59_4.png", cn:"杯子冒出蒸氣。" },
  { text:"She can take out the trash.", image:"images/book58_9.png", cn:"她可以倒垃圾。" },
  { text:"The soil fell out of the pot.", image:"images/book59_5.png", cn:"泥土從花盆裡掉出來了。" },
  { text:"The girl shakes out the cloth.", image:"images/book59_6.png", cn:"那個女孩在拍打地毯。" }
]
};
LESSONS[52] = {
  title: "Lesson 28-5",
  pages: [
  { text:"You might slip if you rush.", image:"images/book58_2.png", cn:"如果你心急可能會滑倒。" },
  { text:"Look out for the boot!", image:"images/book58_3.png", cn:"小心那隻靴子！" },
  { text:"I hang the cloth out to dry.", image:"images/book58_5.png", cn:"我把抹布掛出去晾乾。" },
  { text:"The cook is proud of what he made.", image:"images/book58_7.png", cn:"那位廚師為自己的作品感到驕傲。" }
]
};
LESSONS[53] = {
 title: "Lesson 29-1",
  pages: [
  { text:"The kid can sleep in the high chair.", image:"images/book60_1.png", cn:"那個小孩可以在餐椅上睡覺。" },
  { text:"I patch my green chair.", image:"images/book60_2.png", cn:"我需要修補我的綠色椅子。" },
  { text:"A bird and a nest are on her hair.", image:"images/book60_3.png", cn:"她的頭髮上有一隻鳥和一個巢。" },
  { text:"I share my food with my pet.", image:"images/book60_5.png", cn:"我和我的寵物分享食物。" },
  { text:"It is fair to sh*ow care for kids.", image:"images/book60_6.png", cn:"關心孩子是公平的。" }
]
};

LESSONS[54] = {
  title: "Lesson 30-1",
  pages: [
  { text:" Worms move in its world.", image:"images/book61_1.png", cn:"蠕蟲在它們的世界裡移動。" },
  { text:"The hurt is worse now.", image:"images/book61_4.png", cn:"現在疼得更厲害了。" }
]
};

LESSONS[55] = {
  title: "Lesson 31-1",
  pages: [
  { text:"The tire is flat.", image:"images/book62_1.png", cn:"輪胎沒氣了。" },
  { text:"The ci|ty is in the shire.", image:"images/book62_3.png", cn:"這個城市位於郡內。" },
  { text:"A swarm near the flow|ers.", image:"images/book62_4.png", cn:"一群蜜蜂飛到花叢附近。" },
  { text:"The fire burns bright|ly in the fire|place.", image:"images/book62_5.png", cn:"火在壁爐裡熊熊燃燒。" }
]
};

LESSONS[56] = {
  title: "Lesson 32-1",
  pages: [
  { text:"He is starting a new chap|ter.", image:"images/book63_1.png", cn:"他正在開始新的一章。" },
  { text:"The sai|lor is go|ing to mop the deck.", image:"images/book66_5.png", cn:"那位水手要擦甲板。" },
  { text:"The bur|glar is snea|king by.", image:"images/book66_7.png", cn:"那個竊賊正在偷偷走過。" },
  { text:"The man with the cake is a mes|sy ea|ter.", image:"images/book63_3.png", cn:"那個拿著蛋糕的男人吃得很髒。" },
  { text:"He will slice the tur|key for din|ner.", image:"images/book63_4.png", cn:"他會切火雞當晚餐。" },
  { text:"A one do|llar bill.", image:"images/book63_5.png", cn:"這是一張一美元鈔票。" },
  { text:"You like to eat ched|dar!", image:"images/book63_6.png", cn:"你喜歡吃奶油乾酪！" }
]
};

LESSONS[57] = {
  title: "Lesson 32-2",
  pages: [
  { text:"I hate the lone|ly win|ter.", image:"images/book65_3.png", cn:"那個男人不喜歡寒冷的冬天。" },
  { text:"He will sh*ow you the flow|ers.", image:"images/book63_2.png", cn:"他樂意帶你看花。" },
  { text:"He is sai|ling a toy boat in the ri|ver.", image:"images/book66_2.png", cn:"他在河裡玩他的玩具船。" },
  { text:"A trai|ner would help him get in shape.", image:"images/book64_1.png", cn:"教練會幫助他鍛鍊身體。" },
  { text:"The tall man is the sl*ow|er one.", image:"images/book64_2.png", cn:"那個高個子男人比較慢。" },
  { text:"He will make the floor clea|ner.", image:"images/book64_4.png", cn:"他會把地板弄得更乾淨。" },
  { text:"He seems ve|ry cle|ver.", image:"images/book64_5.png", cn:"他看起來很聰明。" }
]
};



LESSONS[58] = {
  title: "Lesson 32-3",
  pages: [
  { text:"Drake is un|der the sand.", image:"images/book65_1.png", cn:"Drake埋在沙裡。" },
  { text:"Trace had fish for sup|per.", image:"images/book66_1.png", cn:"Trace不想吃魚當晚餐。" },
  { text:"My sis|ter likes to jump rope.", image:"images/book65_2.png", cn:"我妹妹喜歡跳繩。" },
  { text:"Ric|ky has a ve|ry hot tem|per.", image:"images/book65_4.png", cn:"Ricky脾氣很壞。" },
  { text:"Spike put out that fire!", image:"images/book65_5.png", cn:"Spike把火滅掉！" },
  { text:"It is a ve|ry hot sum|mer.", image:"images/book65_6.png", cn:"這是一個非常炎熱的夏天。" }
]
};


LESSONS[59] = {
  title: "Lesson 33-1",
  pages: [
  { text:"She drove with cau|tion in the rain.", image:"images/book67_1.png", cn:"她在雨中小心駕駛。" },
  { text:"The ar|my made an in|cur|sion into the ci|ty.", image:"images/book67_2.png", cn:"軍隊進入了城市。" },
  { text:"Her im|mer|sion in the task helps her learn quic|kly.", image:"images/book67_3.png", cn:"她全身心投入任務，有助於快速學習。" },
  { text:"She serves a large por|tion of rice.", image:"images/book67_4.png", cn:"她盛了一大份飯。" },
  { text:"The doc|tor made a small in|ci|sion.", image:"images/book67_5.png", cn:"醫生做了一個小切口。" },
  { text:"The mee|ting ses|sion is ve|ry long.", image:"images/book67_6.png", cn:"會議持續了一段時間。" }
]
};


LESSONS[60] = {
  title: "Lesson 34-1",
  pages: [
  { text:"He is re|sting on a pi|llow.", image:"images/book68_1.png", cn:"他正枕著枕頭休息。" },
  { text:"The man is clea|ning the win|dow.", image:"images/book68_2.png", cn:"那個男人正在擦窗戶。" },
  { text:"The wi|llow tree sways gen|tly in the breeze.", image:"images/book68_3.png", cn:"柳樹在微風中輕輕搖曳。" },
  { text:"They fly past the win|dow.", image:"images/book68_4.png", cn:"一隻麻雀飛過窗前。" },
  { text:"The tree cast a long sha|dow.", image:"images/book68_5.png", cn:"那棵樹投下一道長影。" },
  { text:"The fire|fight|ers bat|tle the in|fer|no.", image:"images/book68_6.png", cn:"消防員正在對抗熊熊大火。" }
]
};



LESSONS[61] = {
  title: "Lesson 35-1",
  pages: [
  { text:"The tur|tle and snail are go|ing ve|ry sl*ow|ly in a jun|gle.", image:"images/book69_1.png", cn:"烏龜和蝸牛在叢林裡慢慢前行。" },
  { text:"The car is coming out of the tun|nel to a tem|ple.", image:"images/book69_2.png", cn:"汽車從隧道開出到一座寺廟。" },
  { text:"He can make such a big bub|ble!", image:"images/book70_4.png", cn:"他可以吹出那麼大的泡泡！" },
  { text:"He is sh*ow|ing you the mo|del he made.", image:"images/book69_3.png", cn:"他正在展示他做的模型。" },
  { text:"He will scoop up the gra|vel.", image:"images/book69_4.png", cn:"他會把碎石鏟起來。" },
  { text:"He is chec|king that the wall is le|vel.", image:"images/book69_5.png", cn:"他正在檢查牆是否平直。" },
  { text:"She is sit|ting on a blue tow|el.", image:"images/book69_6.png", cn:"她正坐在一條藍毛巾上。" }
]
};


LESSONS[62] = {
  title: "Lesson 35-2",
  pages: [
  { text:"I want to tra|vel on a plane.", image:"images/book70_2.png", cn:"他不想坐飛機旅行。" },
  { text:"It is bar|king in the ken|nel.", image:"images/book70_3.png", cn:"那隻狗在狗舍裡吠叫。" },
  { text:"The lit|tle man has a big mouth.", image:"images/book58_6.png", cn:"那個小個子有張大嘴巴。" },
  { text:"The boy will give you a big red ap|ple.", image:"images/book70_5.png", cn:"那個男孩會給你一個大紅蘋果。" },
  { text:"The man can pad|dle the boat.", image:"images/book70_6.png", cn:"那個男人會划船。" },
  { text:"He has a buc|kle on a hat.", image:"images/book70_7.png", cn:"他的帽子上有個扣子。" },
  { text:"She has a big can|dle on a cup|cake.", image:"images/book70_8.png", cn:"她的杯子蛋糕上有根大蠟燭。" }
]
};

LESSONS[63] = {
  title: "Lesson 36-1",
  pages: [
  { text:"What is it in the mix|ture?", image:"images/book71_1.png", cn:"這個混合物裡有什麼？" },
  { text:"I think it is a cute lit|tle crea|ture.", image:"images/book99_14.png", cn:"我覺得這是一隻可愛的小生物。" },
  { text:"He made a pic|ture of a sail|boat.", image:"images/book99_15.png", cn:"他畫了一艘帆船的圖畫。" },
  { text:"The man is gi|ving a lec|ture.", image:"images/book99_16.png", cn:"那個男人正在演講。" },
  { text:"The air is thick with mois|ture after the rain.", image:"images/book99_17.png", cn:"雨後空氣中充滿濕氣。" },
  { text:"There has a sculp|ture.", image:"images/book71_6.png", cn:"那裡有一座雕塑。" }
]
};


LESSONS[64] = {
  title: "Lesson 37-1",
  pages: [
  { text:"The boy waited at the stop.", image:"images/book72_1.png", cn:"那個男孩在巴士站等候。" },
  { text:"The man dressed up in green.", image:"images/book72_2.png", cn:"這個男人穿著綠色西裝。" },
 { text:"The sheet ripped.", image:"images/book74_5.png", cn:"床單撕破了。" },
  { text:"She stirred the pot.", image:"images/book74_7.png", cn:"她在攪拌鍋子。" },
  { text:"She cracked the screen.", image:"images/book72_3.png", cn:"她把螢幕弄裂了。" },
  { text:"A drink spilled on the desk.", image:"images/book72_4.png", cn:"飲料灑在他的桌子上。" }
]
};

LESSONS[65] = {
  title: "Lesson 37-2",
  pages: [
   { text:"The door is locked.", image:"images/book72_5.png", cn:"門被鎖上了。" },
  { text:"The witch mixed a ma|gic brew.", image:"images/book72_6.png", cn:"女巫在調製她的魔藥。" },
  { text:"He ripped the page.", image:"images/book74_6.png", cn:"他把頁面撕碎了。" },
 { text:"My mom baked it for me.", image:"images/book73_1.png", cn:"我媽媽為我烤了它。" },
  { text:"He chased after the coach.", image:"images/book73_3.png", cn:"他追著巴士跑。" },
  { text:"He stopped the bike.", image:"images/book73_4.png", cn:"他停下了他的自行車。" },
  { text:"The man walked in the store.", image:"images/book73_6.png", cn:"那個男人在商店裡購物。" }
]
};


LESSONS[66] = {
  title: "Lesson 38-1",
  pages: [
  { text:"He is dressed up as a cac|tus.", image:"images/book75_1.png", cn:"他打扮成仙人掌。" },
  { text:"I am care|ful on the steep!", image:"images/book75_3.png", cn:"在山坡上要小心！" },
  { text:"My name is Ro|bin Hood.", image:"images/book75_4.png", cn:"那個男人名叫羅賓漢。" },
  { text:"The den|tist has a ve|ry big tooth|brush.", image:"images/book77_7.png", cn:"牙醫有一把很大的牙刷。" },
  { text:"The rab|bit has a tall hat.", image:"images/book77_8.png", cn:"那隻兔子戴著高帽子。" },
  { text:"She likes to play ten|nis.", image:"images/book77_9.png", cn:"她喜歡打網球。" },
  { text:"That mu|shroom is huge.", image:"images/book75_8.png", cn:"那朵蘑菇大得要用雙手抱住。" }
]
};

LESSONS[67] = {
  title: "Lesson 39-1",
  pages: [
    { text:"I de|sire hap|pi|ness.", image:"images/book99_18.png", cn:"我渴望幸福。" },
    { text:"The fire de|stroyed the house.", image:"images/book99_19.png", cn:"大火燒毀了那棟房子。" },
    { text:"I sit be|tween them in class.", image:"images/book99_20.png", cn:"我在課堂上坐在他們兩個中間。" },
    { text:"He is going to re|turn the piles of books.", image:"images/book77_5.png", cn:"他要把一堆書還回去。" },
    { text:"I have to pre|pare my home|work.", image:"images/book99_21.png", cn:"我必須準備我的功課。" },
    { text:"Wash your hands be|fore you eat.", image:"images/book99_22.png", cn:"吃飯前要洗手。" }
  ]
};

LESSONS[68] = {
  title: "Lesson 39-2",
  pages: [
    { text:"The boy will have to re|write it.", image:"images/book77_6.png", cn:"那個男孩得重新寫一次。" },
    { text:"The girl will re|new her books.", image:"images/book77_3.png", cn:"那個女孩會續借她的書。" },
    { text:"She can re|fill her red cup.", image:"images/book77_1.png", cn:"她可以把紅杯子再裝滿。" },
    { text:"We must pre|vent ac|ci|dents.", image:"images/book99_23.png", cn:"我們必須防止意外發生。" },
    { text:"I stayed home be|cause I was tired.", image:"images/book99_24.png", cn:"我因為太累所以待在家裡。" }
  ]
};

LESSONS[69] = {
  title: "Lesson 40-1",
  pages: [
    { text:"Can the rabbit do magic?", image:"images/book75_5.png", cn:"那隻兔子會變魔術嗎？" },
    { text:"Please use a napkin.", image:"images/book99_25.png", cn:"請用餐巾紙。" },
    { text:"I have eight helmets.", image:"images/book75_7.png", cn:"我有八頂安全帽。" },
    { text:"He is coming to my house for a visit.", image:"images/book75_2.png", cn:"他要來我家拜訪。" },
    { text:"That man has a lot of talent.", image:"images/book78_1.png", cn:"這個男人很有才華。" },
    { text:"It is a funny green dragon.", image:"images/book78_6.png", cn:"這是一條滑稽的綠龍。" }
  ]
};

LESSONS[70] = {
  title: "Lesson 40-2",
  pages: [
    { text:"She built a model car.", image:"images/book99_1.png", cn:"她組裝了一輛模型車。" },
    { text:"We found some toys in the attic.", image:"images/book99_2.png", cn:"我們在閣樓找到了一些玩具。" },
    { text:"The shop made a profit.", image:"images/book99_3.png", cn:"那家商店賺了錢。" },
    { text:"I ate Turkish food.", image:"images/book99_4.png", cn:"我吃了土耳其菜。" }
  ]
};

LESSONS[71] = {
  title: "Lesson 41-1",
  pages: [
    { text:"The boy is feeling playful.", image:"images/book78_3.png", cn:"那個男孩心情很好，想玩。" },
    { text:"The magnet sticks to the fridge.", image:"images/book99_5.png", cn:"磁鐵吸在冰箱上。" },
    { text:"That is a cheerful man!", image:"images/book78_4.png", cn:"那是一個開朗的男人！" },
    { text:"The hammer is a so useful.", image:"images/book78_5.png", cn:"鐵鎚是一個很有用的工具。" },
    { text:"Her toy is made of plastic.", image:"images/book78_8.png", cn:"她的玩具是塑膠做的。" },
    { text:"I like your funny costume.", image:"images/book78_9.png", cn:"我喜歡你那套滑稽的服裝。" },
    { text:"He will try not to misspell it.", image:"images/book78_11.png", cn:"他會盡量不把它拼錯。" }
  ]
};

LESSONS[72] = {
  title: "Lesson 41-2",
  pages: [
    { text:"The customer bought a torch.", image:"images/book99_6.png", cn:"那位顧客買了一支手電筒。" },
    { text:"We visited a big pyramid.", image:"images/book99_7.png", cn:"我們參觀了一座大的金字塔。" },
    { text:"The cups in the cabinet.", image:"images/book99_8.png", cn:"櫃子裡的杯子。" },
    { text:"“Big” is a synonym of “large.”", image:"images/book99_9.png", cn:"“Big” 是 “large” 的同義詞。" },
    { text:"The daffodil is a yellow flower.", image:"images/book99_10.png", cn:"水仙花是一種黃色的花。" },
    { text:"The marker made a permanent mark.", image:"images/book99_11.png", cn:"記號筆留下了永久的痕跡。" },
    { text:"This is a simple sentence.", image:"images/book99_12.png", cn:"這是一個簡單句。" },
    { text:"She found multiple stars.", image:"images/book99_13.png", cn:"她發現了好幾顆星星。" }
  ]
};

LESSONS[73] = {
  title: "Lesson 42-1",
  pages: [
    { text:"The water in the pool is shallow.", image:"images/book99_27.png", cn:"泳池裡的水很淺。" },
    { text:"I am on the Ferris wheel at the fair.", image:"images/book99_28.png", cn:"我正在嘉年華的摩天輪上。" },
    { text:"I like vanilla cream.", image:"images/book99_29.png", cn:"我喜歡香草奶油。" },
    { text:"The chancellor spoke on TV.", image:"images/book99_3.png", cn:"校長在電視上發表演說。" },
    { text:"The tractor made a furrow in the field.", image:"images/book99_31.png", cn:"拖拉機在田裡犁出了一條溝。" },
    { text:"The horse began to gallop fast.", image:"images/book99_32.png", cn:"那匹馬開始快速奔跑。" }
  ]
};

LESSONS[74] = {
  title: "Lesson 43-1",
  pages: [
    { text:"I put parsley on my pasta.", image:"images/book99_33.png", cn:"我在意大利麵上加了香芹。" },
    { text:"The dress was made of soft muslin.", image:"images/book99_34.png", cn:"這件洋裝是用柔軟的薄棉布做成的。" },
    { text:"The fabric feels very smooth.", image:"images/book99_35.png", cn:"這塊布料摸起來很光滑。" },
    { text:"The leader should not mistreat the man.", image:"images/book78_7.png", cn:"領導不應該虐待那個男人。" },
    { text:"The king drinks from a golden goblet.", image:"images/book99_36.png", cn:"國王用金杯喝酒。" },
    { text:"He learned about tantra in a class.", image:"images/book99_37.png", cn:"他在課堂上學到關於密宗的知識。" }
  ]
};

LESSONS[75] = {
  title: "Lesson 44-1",
  pages: [
    { text:"The cook has a messy -apron.", image:"images/book79_2.png", cn:"那位廚師的圍裙很髒亂。" },
    { text:"The -only one he can find is a mismatch.", image:"images/book79_3.png", cn:"他找到的唯一一個是不相配的。" },
    { text:"I want a sp-ider in the house.", image:"images/book80_6.png", cn:"我想家裡有一隻蜘蛛。" },
    { text:"The st-udent is at the stop.", image:"images/book80_4.png", cn:"那個學生在巴士站。" },
    { text:"They will go on a n-ature hike.", image:"images/book79_4.png", cn:"他們將去郊外遠足。" },
    { text:"I think she is going a little cr-azy!", image:"images/book79_6.png", cn:"我覺得她有點瘋了！" },
    { text:"The disc jockey plays the m-usic.", image:"images/book79_7.png", cn:"DJ 正在播放音樂。" }
  ]
};

LESSONS[76] = {
  title: "Lesson 44-2",
  pages: [
    { text:"She is looking for a key to get it -open.", image:"images/book80_1.png", cn:"她需要一把鑰匙才能把它打開。" },
    { text:"I take it out -over the fire.", image:"images/book80_2.png", cn:"我在火上把它拿出去弄乾。" },
    { text:"The mouse is sick with a f-ever.", image:"images/book81_4.png", cn:"那隻老鼠發燒生病了。" },
    { text:"He is playing the m-usic loudly.", image:"images/book79_1.png", cn:"他把音樂放得很大聲。" },
    { text:"I like the little r-odent.", image:"images/book80_7.png", cn:"我喜歡那隻小老鼠。" }
  ]
};

LESSONS[77] = {
  title: "Lesson 44-3",
  pages: [
    { text:"It is called a three leaf cl-over.", image:"images/book81_1.png", cn:"這被稱為三葉草。" },
    { text:"He is going -over the speed limit.", image:"images/book81_2.png", cn:"他超速駕駛了。" },
    { text:"The dentist is holding a m-olar.", image:"images/book81_3.png", cn:"牙醫拿著一顆臼齒。" },
    { text:"The boat has a very big m-otor.", image:"images/book81_6.png", cn:"那艘船有很大的引擎。" }
  ]
};