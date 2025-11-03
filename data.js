window.wordVariants = {
  robe:["row","road"],
  need:["nee","nid"],
  rung:["run"],
  hang:["han","hand"],
  knot:["not"],
  bus:["buss"],
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
  plane:["plain","play"],
  it:["eat"],
  A:["a","uh","eh","ah","ay","ei","are","ar"],
  a:["a","uh","eh","ah","ay","ei","are","ar"],
  can:["can","kan"],
  fill:["fill","feel"],
  it:["it","eat"],
  vest:["fest","rest"],
  did:["did","deed"],
  log:["log","lok","lawg","lock"],
  jog:["jog","jock","jawg"],
  hog:["hog","hawg","hoguh","ho"],
  sob:["sob","sawb","sobuh"],
  hid:["hid","heed","hit","hed"],
  kid:["kid","kidd","kit","keed"],
  sip:["sip","zip","seep"],
  hit:["hit","heat","heed"],
  bit:["bit","beat","beet","bi"],
  win:["win","wen","ween"],
  sob:["sorb"],
  vet:["ret","rat"],
  bad:["bed"],
  latch:["large"],
  bag:["beg"],
 lend:["land"],
 sash:["sarsh","sesh"],
 mug:["muck","mag"],
 dog:["dot","dock"],
 bake:["bay","baik"],
 dime:["dyme","die"],
 stag:["starg","steg"],
 by:["buy","bye"],
 this:["disc","these"],
 They:["day","dey"],
 his:["hiss"]

};

// phonics 拼唔到、要特別顯示（淺紅→深紅）兼可點擊發音
window.SPECIAL_WORDS = ["i","do","to","the","come","you","have","could","your","some","many","there","what","any","said","here","would","does","into","who","their","two","give","over","where","other","most","our","only","move","doesn't","don't"];

// 課本資料（1–8）
window.LESSONS = {};
LESSONS[1] = [
  { text:"I can fill it.", image:"images/book1_1.png", cn:"我可以把它裝滿。" },
  { text:"I can win.", image:"images/book1_2.png", cn:"我可以贏。" },
  { text:"I did it.", image:"images/book1_3.png", cn:"我做到了。" },
  { text:"I can sip it.", image:"images/book1_4.png", cn:"我可以啜一口。" },
  { text:"I can hit.", image:"images/book1_5.png", cn:"我可以打它。" },
 { text:"I bit it.", image:"images/book1_6.png", cn:"我咬了它。" }
];
LESSONS[2] = [
  { text:"The cat can sit.", image:"images/book2_1.png", cn:"那隻貓會坐下。" },
  { text:"A cat is on the log.", image:"images/book2_2.png", cn:"一隻貓在木頭上。" },
  { text:"The man can jog.", image:"images/book2_3.png", cn:"那個男人可以慢跑。" },
  { text:"The hog is up.", image:"images/book2_4.png", cn:"那隻豬起來了。" },
  { text:"The rat hid.", image:"images/book2_5.png", cn:"那隻老鼠躲起來了。" },
  { text:"The kid sob.", image:"images/book2_6.png", cn:"那個小孩在哭。" }
];
LESSONS[3] = [
  { text:"The man is a vet.", image:"images/book3_1.png", cn:"那個男人是獸醫。" },
  { text:"It is just a prank.", image:"images/book3_2.png", cn:"那只是個惡作劇。" },
  { text:"Ted is in bed.", image:"images/book3_3.png", cn:"泰德在床上。" },
  { text:"It is a bad smell.", image:"images/book3_4.png", cn:"那是一股難聞的氣味。" },
  { text:"The man can sell a hot dog.", image:"images/book3_5.png", cn:"那個男人可以賣熱狗。" },
  { text:"The man can hit the rug.", image:"images/book3_6.png", cn:"那個男人可以拍打地毯。" },
  { text:"The hat is red.", image:"images/book3_7.png", cn:"那頂帽子是紅色的。" }
];
LESSONS[4] = [
  { text:"The witch has a black hat.", image:"images/book4_1.png", cn:"女巫有一頂黑帽子。" },
  { text:"The man can chop it.", image:"images/book4_2.png", cn:"那個男人可以砍它。" },
  { text:"This is a latch.", image:"images/book4_3.png", cn:"這是一個門閂。" },
  { text:"Can you help him with this test?", image:"images/book4_4.png", cn:"你能幫他做這個測試嗎？" },
  { text:"This man can punch the bag.", image:"images/book4_5.png", cn:"這個男人可以打沙包。" }
];
LESSONS[5] = [
 { text:"Hush! Do not yell.", image:"images/book5_1.png", cn:"噓！不要大喊。" },
  { text:"It will not flush.", image:"images/book5_2.png", cn:"它沖不下去。" },
  { text:"This man can lend some cash.", image:"images/book5_3.png", cn:"這個男人可以借一些錢。" },
  { text:"It is a check up.", image:"images/book5_4.png", cn:"這是一次檢查。" },
  { text:"The sock does not have a match.", image:"images/book5_5.png", cn:"這隻襪子沒有配對的。" }
];
LESSONS[6] = [
  { text:"This man is mad! He will crush it.", image:"images/book6_1.png", cn:"這個男人很生氣！他要把它壓碎。" },
  { text:"He is my chum.", image:"images/book6_2.png", cn:"他是我的好朋友。" },
  { text:"She will catch it.", image:"images/book6_3.png", cn:"她會接住它。" },
  { text:"She is the champ!", image:"images/book6_4.png", cn:"她是冠軍！" },
  { text:"She is a grump.", image:"images/book6_5.png", cn:"她是個脾氣暴躁的人。" }
];
LESSONS[7] = [
  { text:"She can try it on. It does not fit!", image:"images/book7_1.png", cn:"她可以試穿，但不合身！" },
  { text:"She has a brush.", image:"images/book7_2.png", cn:"她有一把刷子。" },
  { text:"He will smash it!", image:"images/book7_3.png", cn:"他會把它打碎！" },
  { text:"She has a red sash.", image:"images/book7_4.png", cn:"她有一條紅色腰帶。" },
  { text:"It is my kit.", image:"images/book7_5.png", cn:"這是我的工具包。" },
  { text:"My mug is hot.", image:"images/book7_6.png", cn:"我的杯子很燙。" }
];
LESSONS[8] = [
  { text:"The dog can sit by the man.", image:"images/book8_1.png", cn:"那隻狗可以坐在男人旁邊。" },
  { text:"He must do his job.", image:"images/book8_2.png", cn:"他必須做好他的工作。" },
  { text:"The jet can go up!", image:"images/book8_3.png", cn:"那架噴射機可以升空！" },
  { text:"He can go on the ramp.", image:"images/book8_4.png", cn:"他可以走上斜坡。" },
  { text:"He did flunk.", image:"images/book8_5.png", cn:"他考試不及格。" },
  { text:"He has a lot of junk in the box.", image:"images/book8_6.png", cn:"他盒子裡有很多雜物。" }
];
LESSONS[9] = [
  { text:"A stag stands.",                 image:"images/book9_1.png",  cn:"一隻雄鹿站著。" },
  { text:"He is stuck.",                   image:"images/book9_2.png",  cn:"他被卡住了。" },
  { text:"It is a stub.",                  image:"images/book9_3.png",  cn:"這是一根短樁。" },
  { text:"A skunk is in the bed !",        image:"images/book9_4.png",  cn:"有隻臭鼬在床上！" }
];
LESSONS[10] = [
  { text:"The can stunk. Yuck!",           image:"images/book10_1.png", cn:"這個罐子好臭。真噁心！" },
  { text:"The man is by the stump.",       image:"images/book10_2.png", cn:"那個男人在樁旁邊。" },
  { text:"I skid.",                       image:"images/book10_3.png", cn:"我打滑。" },
  { text:"What did she spend at the shop ?", image:"images/book10_4.png", cn:"她在商店花了多少錢？" },
  { text:"It is a stub.",                  image:"images/book10_5.png", cn:"這是一根短樁。" }
];

LESSONS[11] = [
  { text:"A sick cat.",                    image:"images/book11_1.png", cn:"一隻生病的貓。" },
  { text:"My big spot.",                   image:"images/book11_2.png", cn:"我有個大斑點。" },
  { text:"A trick !",                      image:"images/book11_3.png", cn:"一個把戲！" },
  { text:"big fin.",                       image:"images/book11_4.png", cn:"大魚鰭。" },
  { text:"It can lick a fig.",             image:"images/book11_5.png", cn:"它會舔無花果。" },
  { text:"Bob is a big man.",              image:"images/book11_6.png", cn:"鮑勃是一個高大的男人。" },
  { text:"I can kick it.",                 image:"images/book11_7.png", cn:"我可以踢它。" }
];

LESSONS[12] = [
  { text:"I can pick it.",                 image:"images/book12_1.png", cn:"我可以把它摘下。" },
  { text:"the wig",                        image:"images/book12_2.png", cn:"假髮。" },
  { text:"The cat can jig.",               image:"images/book12_3.png", cn:"這隻貓會跳舞。" },
  { text:"He has a cramp in his leg.",     image:"images/book12_4.png", cn:"他的腿抽筋了。" },
  { text:"My twig.",                        image:"images/book12_5.png", cn:"我的細樹枝。" },
  { text:"It can dig.",                    image:"images/book12_6.png", cn:"它會挖洞。" }
];

LESSONS[13] = [
  { text:"a big chin",                     image:"images/book13_1.png", cn:"大下巴。" },
  { text:"a fat big pig",                  image:"images/book13_2.png", cn:"一隻又肥又大的豬。" },
  { text:"the big ship",                   image:"images/book13_3.png", cn:"這艘大船。" },
  { text:"I still have six eggs.",         image:"images/book13_4.png", cn:"我還有六個雞蛋。" },
  { text:"The man can fix the lamp.",      image:"images/book13_5.png", cn:"那個男人會修理燈。" },
  { text:"This fly is a big pest !",       image:"images/book13_6.png", cn:"這隻蒼蠅真討厭！" }
];

LESSONS[14] = [
  { text:"The plane will land.",           image:"images/book14_1.png", cn:"飛機就要降落了。" },
  { text:"The man is late !",              image:"images/book14_2.png", cn:"那個男人遲到了！" },
  { text:"He will fix the pipe.",          image:"images/book14_3.png", cn:"他會修理水管。" },
  { text:"I like to swim with the fish.",  image:"images/book14_4.png", cn:"我喜歡和魚一起游泳。" },
  { text:"It is a fun game.",              image:"images/book14_5.png", cn:"這是一個有趣的遊戲。" },
  { text:"He made a big mess.",            image:"images/book14_6.png", cn:"他弄得一團糟。" }
];

LESSONS[15] = [
  { text:"She can make a cake.",           image:"images/book15_1.png", cn:"她會烤蛋糕。" },
  { text:"He wipes the dish.", image:"images/book15_2.png", cn:"他擦碟子。" },
  { text:"He had a red cape.",             image:"images/book15_3.png", cn:"他有一件紅色斗篷。" },
  { text:"He will go in the lake.",        image:"images/book15_4.png", cn:"他要走進湖裡。" },
  { text:"The dime can go in the pig.",    image:"images/book15_5.png", cn:"這枚一角硬幣可以放進存錢豬裡。" },
  { text:"The ship will save the man.",    image:"images/book15_6.png", cn:"這艘船會救那個男人。" }
];

LESSONS[16] = [
  { text:"The bunk is not made.",          image:"images/book16_1.png", cn:"這張雙層床還沒鋪好。" },
  { text:"He will mend the gate.",         image:"images/book16_2.png", cn:"他會修補大門。" },
  { text:"He can make a stack of bricks.", image:"images/book16_3.png", cn:"他可以把磚頭堆成一摞。" },
  { text:"My plane is up in the sky.",    image:"images/book16_4.png", cn:"我的飛機在天上。" },
  { text:"We go on a hike.",             image:"images/book16_5.png", cn:"我們去健行。" },
  { text:"We sit in the shade.",           image:"images/book16_6.png", cn:"我們坐在陰涼處。" }
];

LESSONS[17] = [
  { text:"The grape is ripe.",            image:"images/book17_1.png", cn:"這顆葡萄熟了。" },
  { text:"He can make a milkshake with grapes.", image:"images/book17_2.png", cn:"他可以用葡萄做奶昔。" },
  { text:"He is up in a plane.",           image:"images/book17_3.png", cn:"他在飛機上。" },
  { text:"The bike will crash.",           image:"images/book17_4.png", cn:"他的腳踏車會摔倒。" },
  { text:"He hits the vase !",             image:"images/book17_5.png", cn:"他把花瓶打到了！" },
  { text:"Go in the cave !",        image:"images/book17_6.png", cn:"不要進洞穴！" }
];

LESSONS[18] = [
  { text:"He will make a big pile of cakes.", image:"images/book18_1.png", cn:"他會做一大批蛋糕。" },
  { text:"The big cat has a mane.",        image:"images/book18_2.png", cn:"大貓有鬃毛。" },
  { text:"He can ride in the car.",        image:"images/book18_3.png", cn:"他可以坐車。" },
  { text:"He has a life vest.",            image:"images/book18_4.png", cn:"他有救生衣。" },
  { text:"The pig will dive.",             image:"images/book18_5.png", cn:"這隻豬會潛水。" },
  { text:"He can drive the big dump truck.", image:"images/book18_6.png", cn:"他會開大型自卸卡車。" },
];

LESSONS[19] = [
  { text:"He can nap at home.",            image:"images/book19_1.png", cn:"他可以在家小睡。" },
  { text:"I will use it to stitch.",     image:"images/book19_2.png", cn:"我要用這個來縫東西。" },
  { text:"The dog is cute.",               image:"images/book19_3.png", cn:"這隻狗很可愛。" },
  { text:"The pot is on the stove.",       image:"images/book19_4.png", cn:"鍋子在爐子上。" },
  { text:"The big man is rude.",           image:"images/book19_5.png", cn:"這個大個子很無禮。" }
];


LESSONS[20] = [
  { text:"It is stuck in the stone.",      image:"images/book20_1.png", cn:"它卡在石頭裡。" },
 { text:"He has a big cone. Yum !",       image:"images/book20_2.png", cn:"他有一個大甜筒。真好吃！" },
  { text:"The lake froze.",                image:"images/book20_3.png", cn:"湖結冰了。" },
  { text:"He is on a hose.",               image:"images/book20_4.png", cn:"他在水管上。" },
  { text:"She drove the truck.",             image:"images/book20_5.png", cn:"她開過貨車。" }
];

LESSONS[21] = [
  { text:"It will make a big bang !",    image:"images/book21_1.png", cn:"這會發出一聲巨響！" },
  { text:"It is a knot.",                  image:"images/book21_2.png", cn:"這是一個結。" },
  { text:"The man can hang glide up in the sky.", image:"images/book21_3.png", cn:"那個男人可以在天空中玩懸掛式滑翔。" },
  { text:"He has rung the bell.",          image:"images/book21_4.png", cn:"他已經把鐘敲響了。" },
  { text:"At the knob.",                   image:"images/book21_5.png", cn:"在門把上。" },
  { text:"This king has a red robe.",      image:"images/book21_6.png", cn:"這位國王穿著紅色長袍。" },
  { text:"The man can sing a song.",              image:"images/book21_7.png", cn:"那個男人會唱歌。" }
];
LESSONS[22] = [
  { text:"That pile of trash must stink.", image:"images/book22_1.png", cn:"那堆垃圾一定很臭。" },
  { text:"She will have a drink.",         image:"images/book22_2.png", cn:"她會喝一杯飲料。" },
  { text:"She will skate at the rink.",    image:"images/book22_3.png", cn:"她會在溜冰場溜冰。" },
  { text:"She is trimming the plant.",     image:"images/book22_4.png", cn:"她正在修剪植物。" },
  { text:"He is sitting at this desk.",    image:"images/book22_5.png", cn:"他正坐在這張書桌前。" }
];

LESSONS[23] = [
  { text:"It is a wren.",                                 image:"images/book23_1.png", cn:"那是一隻鷦鷯。" },
  { text:"a ship wreck !",                                image:"images/book23_2.png", cn:"一場船難！" },
  { text:"I drink a glass of milk to quench my need.",    image:"images/book23_3.png", cn:"我喝了一杯牛奶來解渴。" },
  { text:"He wins the game with guile.",                  image:"images/book23_4.png", cn:"他靠機智贏了比賽。" },
  { text:"She grabs a whisk to mix the eggs.",            image:"images/book23_5.png", cn:"她拿起打蛋器攪拌雞蛋。" },
  { text:"She wrote a quote on the wrench.",              image:"images/book23_6.png", cn:"她在扳手上寫了一句引語。" }
];

LESSONS[24] = [
  { text:"The cop does not see the thief.", image:"images/book24_1.png", cn:"警察沒有看見那個小偷。" },
  { text:"The man can beat the drum.",      image:"images/book24_2.png", cn:"那個男人會打鼓。" },
  { text:"This man is a chief.",            image:"images/book24_3.png", cn:"這個男人是一位首領。" },
  { text:"The pipe has a leak.",            image:"images/book24_4.png", cn:"這根管子漏水了。" },
  { text:"I see the dog steal the snack.",  image:"images/book24_5.png", cn:"我看到那條狗偷走點心。" },
  { text:"This man is not weak.",           image:"images/book24_6.png", cn:"這個男人不虛弱。" }
];

LESSONS[25] = [
  { text:"He will make it neat.",             image:"images/book25_1.png", cn:"他會把它整理得很整齊。" },
  { text:"This cake is a big treat !",        image:"images/book25_2.png", cn:"這個蛋糕是一份大大的享受！" },
  { text:"This man will dream.",              image:"images/book25_3.png", cn:"這個男人會做夢。" },
  { text:"The man will pick a peach.",        image:"images/book25_4.png", cn:"那個男人會摘一顆桃子。" },
  { text:"That is a lot of glue !",           image:"images/book25_5.png", cn:"這可是真多膠水！" },
  { text:"His bike wheel is bent.",           image:"images/book25_6.png", cn:"他的腳踏車輪子彎了。" }
];

LESSONS[26] = [
  { text:"I can see the chick hatch.",                         image:"images/book26_1.png", cn:"我看得到小雞孵化。" },
  { text:"I see him swing on a vine.",                         image:"images/book26_2.png", cn:"我看到他在藤上盪來盪去。" },
  { text:"The big fish can munch on a weed.",                  image:"images/book26_3.png", cn:"那條大魚會嚼食水草／雜草。" },
  { text:"He will sweep up the dust.",                         image:"images/book26_4.png", cn:"他會把灰塵打掃乾淨。" },
  { text:"I see the man wave to me.",                          image:"images/book26_5.png", cn:"我看到那個男人向我揮手。" },
  { text:"A cat sits on the beach by a steaming hot spring .", image:"images/book26_6.png", cn:"一隻貓坐在溫泉旁的海灘上。" }
];

LESSONS[27] = [
  { text:"She can see smoke in the black pot.", image:"images/book27_1.png",  cn:"她看見黑鍋裡冒出煙。" },
  { text:"I see the man slide.",                 image:"images/book27_2.png",  cn:"我看到那個男人在滑行。" },
  { text:"He can dive into the deep.",           image:"images/book27_3.png",  cn:"他能潛入深處。" },
  { text:"He will peel it.",                     image:"images/book27_4.png",  cn:"他會把它剝皮。" },
  { text:"The man has a sleeping sheep.",        image:"images/book27_5.png",  cn:"那個男人有一隻睡著的羊。" },
  { text:"A queen is sneezing.",                 image:"images/book27_6.png",  cn:"一位王后在打噴嚏。" },
];
LESSONS[28] = [
  { text:"The wheel is stuck.",                  image:"images/book27_7.png",  cn:"車輪卡住了。" },
  { text:"I sled on a steep hill.",              image:"images/book27_8.png",  cn:"我在陡峭的山坡上滑雪橇。" },
  { text:"The chick can cheep.",                 image:"images/book27_9.png",  cn:"小雞會吱吱叫。" },
  { text:"The man will try to yank the weed.",   image:"images/book27_10.png", cn:"那個男人會試著猛拉雜草。" },
  { text:"He can dig a deep ditch.",             image:"images/book27_11.png", cn:"他能挖一條深溝。" },
];
LESSONS[29] = [
  { text:"Her dress is pink.",                   image:"images/book27_12.png", cn:"她的洋裝是粉紅色。" },
  { text:"He can run to the park.",              image:"images/book27_13.png", cn:"他能跑到公園。" },
  { text:"There is a girl on the stamp.",        image:"images/book27_14.png", cn:"郵票上有一位女孩。" },
  { text:"Pam has a big perm.",                  image:"images/book27_15.png", cn:"潘姆有一頭大卷髮。" },
  { text:"The snake has a sharp fang.",          image:"images/book27_16.png", cn:"那條蛇有尖利的毒牙。" },
  { text:"The bird is on a perch.",              image:"images/book27_17.png", cn:"那隻鳥停在棲木上。" }
];


LESSONS[30] = [
  { text:"This man is a clerk.",                   image:"images/book30_1.png", cn:"這個男人是店員／職員。" },
  { text:"My dog can perk me up.",                 image:"images/book30_2.png", cn:"我的狗能令我打起精神。" },
  { text:"This is a big red barn.",                image:"images/book30_3.png", cn:"這是一座巨大的紅色穀倉。" },
  { text:"He will go for a ride on the hump.",     image:"images/book30_4.png", cn:"他要騎在駝峰上兜風。" },
  { text:"It is not in a herd.",                   image:"images/book30_5.png", cn:"它不在群體裡。" },
  { text:"The shark has big teeth.",               image:"images/book30_6.png", cn:"那條鯊魚有很大的牙齒。" },
  { text:"I can see her fume !",                   image:"images/book30_7.png", cn:"我看得出她在冒火生氣！" }
];

LESSONS[31] = [
  { text:"The car is stuck in the mud.", image:"images/book31_1.png", cn:"車子陷在泥裡。" },
  { text:"The bird has a flute.",        image:"images/book31_2.png", cn:"那隻鳥有一支長笛。" },
  { text:"I see the man surf the wave.", image:"images/book31_3.png", cn:"我看到那個男人在衝浪。" },
  { text:"He has a big bug in a jar.",   image:"images/book31_4.png", cn:"他在罐子裡養著一隻大昆蟲。" },
  { text:"He has fun in the yard.",      image:"images/book31_5.png", cn:"他在院子裡玩得很開心。" },
  { text:"Can you see my art?",          image:"images/book31_6.png", cn:"你能看見我的作品嗎？" },
  { text:"Look ! The pen burst.",        image:"images/book31_7.png", cn:"看！這枝筆爆墨了。" }
];

LESSONS[32] = [
  { text:"The girl is hurt.  I see her cry.",        image:"images/book32_1.png",  cn:"女孩受傷了。我看見她在哭。" },
  { text:"He has a sling on his arm.",               image:"images/book32_2.png",  cn:"他的手臂上有吊帶。" },
  { text:"The horse has a horn.",                    image:"images/book32_3.png",  cn:"那匹馬有一根角。" },
  { text:"The girl can see the map on a street.",    image:"images/book32_4.png",  cn:"那個女孩能看見街上的地圖。" },
  { text:"The guard can stir the pot.",              image:"images/book32_5.png",  cn:"警衛可以攪動鍋裡的東西。" },
  { text:"Thor is dropping the seeds onto the dirt.",image:"images/book32_6.png",  cn:"索爾把種子撒在泥土上。" },
];

LESSONS[33] = [
  { text:"He gave a big slurp of his milkshake.",    image:"images/book32_7.png",  cn:"他大口啜了一口奶昔。" },
  { text:"The ink went on his shirt.",               image:"images/book32_8.png",  cn:"墨水弄到他的襯衫上了。" },
  { text:"He is stuck in the cord.",                 image:"images/book32_9.png",  cn:"他被繩線纏住了。" },
  { text:"The kids reach a fort made of stone.",     image:"images/book32_10.png", cn:"孩子們來到一座石頭堡壘。" },
  { text:"He is in the storm.",                      image:"images/book32_11.png", cn:"他在風暴之中。" },
  { text:"The frog is hurt.",                        image:"images/book32_12.png", cn:"那隻青蛙受傷了。" },
  { text:"He will turn it on.",                      image:"images/book32_13.png", cn:"他會把它打開。" }
];

LESSONS[34] = [
  { text:"A larch is burning.",                  image:"images/book34_1.png", cn:"一棵落葉松在燃燒。" },
  { text:"The dog gave a sharp snarl.",          image:"images/book34_2.png", cn:"那隻狗發出尖銳的低吼聲。" },
  { text:"The red shirt will dry.",              image:"images/book34_3.png", cn:"那件紅色襯衫會乾的。" },
  { text:"The short man has a fern.",            image:"images/book34_4.png", cn:"那個矮個男人有一株蕨類植物。" },
  { text:"The man has a big fork.",              image:"images/book34_5.png", cn:"那個男人有一把大叉子。" },
  { text:"The car sped by in a blur.",           image:"images/book34_6.png", cn:"那輛車一晃而過，如同一抹殘影。" }
];

LESSONS[35] = [
  { text:"The man will wait for the note I sent.", image:"images/book35_1.png", cn:"那個男人會等我寄出的便條。" },
  { text:"He will put the mail in my box.",        image:"images/book35_2.png", cn:"他會把郵件放進我的信箱。" },
  { text:"This man has a mop and a pail.",         image:"images/book35_3.png", cn:"這個男人拿著拖把和水桶。" },
  { text:"She can wait for the bus.",              image:"images/book35_4.png", cn:"她可以等公車。" },
  { text:"Can he fix the drain?",                  image:"images/book35_5.png", cn:"他能修好排水管嗎？" },
  { text:"He will eat his hot dog plain.",         image:"images/book35_6.png", cn:"他要吃不加任何配料的熱狗。" }
];

LESSONS[36] = [
  { text:"I hope it does't not stain.", image:"images/book36_1.png", cn:"我希望它不要留下污漬。" },
  { text:"The snail has a big shell.",  image:"images/book36_2.png", cn:"那隻蝸牛有個大殼。" },
  { text:"The shark has a pain.",       image:"images/book36_3.png", cn:"那條鯊魚在疼痛。" },
  { text:"They have to stand and wait.",image:"images/book36_4.png", cn:"他們必須站著等候。" },
  { text:"It is not fun to camp in the rain.", image:"images/book36_5.png", cn:"在雨中露營一點也不好玩。" },
  { text:"He will put some oil in the pan.",    image:"images/book36_6.png", cn:"他會在鍋裡倒一些油。" }
];

LESSONS[37] = [
  { text:"Do you like what he drew?",         image:"images/book37_1.png", cn:"你喜歡他畫的東西嗎？" },
  { text:"He drops a screw in the pew.",      image:"images/book37_2.png", cn:"他把一顆螺絲掉在教堂長椅上。" },
  { text:"The grass shone with morning dew.", image:"images/book37_3.png", cn:"草地在晨露中閃耀。" },
  { text:"The shrew steps on the grass.",     image:"images/book37_4.png", cn:"那隻鼩鼱踩在草地上。" },
  { text:"She knew him as he grew rich.",     image:"images/book37_5.png", cn:"他致富時她就認識他了。" },
  { text:"He flew to Rome for a trip.",       image:"images/book37_6.png", cn:"他飛到羅馬旅行。" },
  { text:"The clock skews on the shelf.",     image:"images/book37_7.png", cn:"架子上的時鐘歪斜著。" }
];
// ===== Lessons 38–50 =====
LESSONS[38] = [
  { text:"He can clean his toy.", image:"images/book38_1.png", cn:"他可以把他的玩具清潔乾淨。" },
  { text:"He will play with his train.|", image:"images/book38_2.png", cn:"他會玩他的火車玩具。|"},
  { text:"I made this pot with clay.", image:"images/book38_3.png", cn:"我用黏土做了這個陶罐。" },
  { text:"The boy is sweeping.", image:"images/book38_4.png", cn:"這個男孩正在掃地。" },
  { text:"They nap by the tree.", image:"images/book38_5.png", cn:"他們在樹下小睡。" },
  { text:"They have a kite.", image:"images/book38_6.png", cn:"他們有一個風箏。" }
];

LESSONS[39] = [
  { text:"They tug on the rope.", image:"images/book39_1.png", cn:"他們拉扯著繩子。" },
  { text:"He will play in the field.", image:"images/book39_2.png", cn:"他會在草地上玩。" },
  { text:"The dog can bark at the gray cat.", image:"images/book39_3.png", cn:"那隻狗會對著灰色的貓叫。" },
  { text:"I see the tot play with his car.", image:"images/book39_4.png", cn:"我看到小小孩在玩他的玩具車。" },
  { text:"Tell the dog to stay !", image:"images/book39_5.png", cn:"叫那隻狗待著不要動！" },
  { text:"She felt deep joy on her birthday.", image:"images/book39_6.png", cn:"她在生日那天感到非常喜悅。" },
  { text:"He plays in the sand at the beach.", image:"images/book39_7.png", cn:"他在海灘的沙地上玩耍。" },
  { text:"She sprays perfume.", image:"images/book39_8.png", cn:"她噴香水。" }
];

LESSONS[40] = [
  { text:"That man has a tall hat.", image:"images/book40_1.png", cn:"那個男人戴著一頂高帽子。" },
  { text:"She can call for help.", image:"images/book40_2.png", cn:"她可以呼救。" },
  { text:"He will make a brick wall.", image:"images/book40_3.png", cn:"他會砌一堵磚牆。" },
  { text:"I see the man trip and fall.", image:"images/book40_4.png", cn:"我看到那個男人被絆倒了。" },
  { text:"What did the man draw?", image:"images/book40_5.png", cn:"那個男人畫了什麼？" }
];

LESSONS[41] = [
  { text:"This man is made of straw.", image:"images/book41_1.png", cn:"這個人是用稻草做的（稻草人）。" },
  { text:"She has a big yawn.", image:"images/book41_2.png", cn:"她打了一個大哈欠。" },
  { text:"He calls the crew for lunch.", image:"images/book41_3.png", cn:"他叫工作人員來吃午飯。" },
  { text:"You can see her hitting the ball.", image:"images/book41_4.png", cn:"你可以看到她在擊球。" }
];

LESSONS[42] = [
  { text:"He is in a sail boat with his coach.", image:"images/book42_1.png", cn:"他和他的教練在一艘帆船上。" },
  { text:"She made a big loaf.", image:"images/book42_2.png", cn:"她烤了一個大麵包。" },
  { text:"I grind fresh coffee beans.", image:"images/book42_3.png", cn:"我研磨新鮮的咖啡豆。" },
  { text:"The girl has a toad.", image:"images/book42_4.png", cn:"那個女孩有一隻蟾蜍。" },
  { text:"The car is on the road.", image:"images/book42_5.png", cn:"那輛車在路上。" },
  { text:"He has a big fur coat.", image:"images/book42_6.png", cn:"他有一件很大的皮草外套。" }
];

LESSONS[43] = [
  { text:"My dad can clean the dog with soap.", image:"images/book43_1.png", cn:"我爸爸可以用肥皂幫狗洗乾淨。" },
  { text:"He is with a float.", image:"images/book43_2.png", cn:"他帶著一個浮具。" },
  { text:"The little man is the coach.", image:"images/book43_3.png", cn:"那位矮個子是教練。" },
  { text:"He made a goal !", image:"images/book43_4.png", cn:"他進球了！" },
  { text:"He can wind up the car.", image:"images/book43_5.png", cn:"他可以把發條車上緊發條。" },
  { text:"This car has a big load.", image:"images/book43_6.png", cn:"這輛車載著很重的貨物。" }
];

LESSONS[44] = [
  { text:"She can hitch the boat to the car.", image:"images/book44_1.png", cn:"她可以把船牽引到車上。" },
  { text:"This man sold some fish to me.", image:"images/book44_2.png", cn:"這個男人賣了些魚給我。" },
  { text:"The man is sick with a cold.", image:"images/book44_3.png", cn:"那個男人感冒生病了。" },
  { text:"Will you help her fold the pile ?", image:"images/book44_4.png", cn:"你會幫她把那堆東西摺好嗎？" },
  { text:"The old man will go for a hike.", image:"images/book44_5.png", cn:"那位老人要去健行。" },
  { text:"I can see her hold the horn.", image:"images/book44_6.png", cn:"我可以看到她拿著喇叭。" }
];

LESSONS[45] = [
  { text:"See the chest of gold !", image:"images/book45_1.png", cn:"看！一箱黃金！" },
  { text:"She is sweet and kind.", image:"images/book45_2.png", cn:"她既貼心又善良。" },
  { text:"This man is blind.", image:"images/book45_3.png", cn:"這個男人失明了。" },
  { text:"This can grind meat.", image:"images/book45_4.png", cn:"這個可以絞肉。" },
  { text:"The boat sank.", image:"images/book45_5.png", cn:"那艘船沉了。" },
  { text:"What will he find in the big box?", image:"images/book45_6.png", cn:"他會在那個大箱子裡找到什麼？" }
];

LESSONS[46] = [
  { text:"The snow is deep.", image:"images/book46_1.png", cn:"積雪很深。" },
  { text:"He can throw it with his hand.", image:"images/book46_2.png", cn:"他可以用手把它丟出去。" },
  { text:"The clown is on a small trike.", image:"images/book46_3.png", cn:"小丑騎在一輛小三輪車上。" },
  { text:"How did he do that trick ?", image:"images/book46_4.png", cn:"他怎樣做到那個把戲的？" },
  { text:"He is up on the roof.", image:"images/book46_5.png", cn:"他在屋頂上。" },
  { text:"See how well the plant grew !", image:"images/book46_6.png", cn:"看看這株植物長得多好！" },
  { text:"I see him throw red ball.", image:"images/book46_7.png", cn:"我看到他丟出紅色的球。" },
  { text:"She has a pink gown.", image:"images/book46_8.png", cn:"她有一件粉紅色禮服。" },
  { text:"He can fix the tub with a tool.", image:"images/book46_9.png", cn:"他可以用工具修理浴缸。" }
];

LESSONS[47] = [
  { text:"I see the man fall down.", image:"images/book47_1.png", cn:"我看到那個男人跌倒了。" },
  { text:"This king has a little crown.", image:"images/book47_2.png", cn:"這位國王戴著一頂小皇冠。" },
  { text:"He is spraying the brown car.", image:"images/book47_3.png", cn:"他正在噴塗那輛棕色的車。" },
  { text:"It is time to mow the lawn.", image:"images/book47_4.png", cn:"該割草坪了。" },
  { text:"He can throw a coin into the hat.", image:"images/book47_5.png", cn:"他可以把硬幣丟進帽子裡。" },
  { text:"Look ! His nose froze in the cold.", image:"images/book47_6.png", cn:"看！他的鼻子在寒冷中凍僵了。" },
  { text:"I see the cook cut the meat.", image:"images/book47_7.png", cn:"我看到廚師在切肉。" },
  { text:"He sleds down the steep hill.", image:"images/book47_8.png", cn:"他乘雪橇滑下陡坡。" },
  { text:"Look at the huge pig !", image:"images/book47_9.png", cn:"看那隻巨大的豬！" },
  { text:"The tot can eat with a spoon.", image:"images/book47_10.png", cn:"小小孩會用湯匙吃東西。" }
];

LESSONS[48] = [
  { text:"He made a big boom.", image:"images/book48_1.png", cn:"他發出一聲巨響。" },
  { text:"She will be late soon !", image:"images/book48_2.png", cn:"她很快就要遲到了！" },
  { text:"The dog's foot is hurt.", image:"images/book48_3.png", cn:"那隻狗的腳受傷了。" },
  { text:"A big fish is on the hook.", image:"images/book48_4.png", cn:"一條大魚上鉤了。" },
  { text:"She shook the red rug.", image:"images/book48_5.png", cn:"她把紅色地毯抖了抖。" },
  { text:"The maid can cook the food.", image:"images/book48_6.png", cn:"女傭會煮飯。" },
  { text:"Look what my cat did with its claw !", image:"images/book48_7.png", cn:"看我的貓用爪子做了什麼！" },
  { text:"He will cut the wood with a saw.", image:"images/book48_8.png", cn:"他會用鋸子鋸木頭。" },
  { text:"This man will look for a clue.", image:"images/book48_9.png", cn:"這個男人會尋找線索。" },
  { text:"The cook will smell the stew.", image:"images/book48_10.png", cn:"廚師會聞一下燉菜的味道。" }
];

LESSONS[49] = [
  { text:"Can you hear the clang of the bell ?", image:"images/book49_1.png", cn:"你聽到鐘的鏗鏘聲嗎？" },
  { text:"I will search for the lost pearl.", image:"images/book49_2.png", cn:"我要尋找那顆遺失的珍珠。" },
  { text:"I hear her sing.", image:"images/book49_3.png", cn:"我聽到她唱歌。" },
  { text:"He can blow his horn for the new year.", image:"images/book49_4.png", cn:"他可以在新年吹號角。" },
  { text:"My dear dad saw a deer in the woods.", image:"images/book49_5.png", cn:"我親愛的爸爸在樹林裡看到一隻鹿。" },
  { text:"Cheer rang in the room with joy.", image:"images/book49_6.png", cn:"歡呼聲在房間裡回蕩。" }
];

LESSONS[50] = [
  { text:"The cook sang a funny tune.", image:"images/book50_1.png", cn:"廚師唱了一首有趣的曲子。" },
  { text:"The girl has a big candy cane.", image:"images/book50_2.png", cn:"女孩有一根很大的拐杖糖。" },
  { text:"Can he pin the tail on the donkey?", image:"images/book50_3.png", cn:"他能把尾巴別到驢子身上嗎？" },
  { text:"He's turning forty on his birthday.", image:"images/book50_4.png", cn:"他生日那天就四十歲了。" },
  { text:"This man is cleaning the chimney.", image:"images/book50_5.png", cn:"這個男人正在清理煙囪。" },
  { text:"He is feeling very dizzy.", image:"images/book50_6.png", cn:"他覺得很頭暈。" }
];



