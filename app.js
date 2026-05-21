const STORAGE_KEY = "duo-hike-china-state-v1";

const places = [
  {
    id: "beijing",
    name: "北京",
    km: 0,
    x: 646,
    y: 144,
    type: "城市",
    oneLine: "从帝都出发，向西南走进一条横穿中国的文化路线。",
    see: "故宫、天坛、长城、胡同。",
    understand: "北京不是只有宏大建筑，也有胡同里的日常秩序；一座城市同时承载国家叙事和普通生活。",
    reflection: "从这里出发，不需要豪言壮语，只要今天完成第一小关。",
    keywords: ["帝都", "胡同", "长城", "出发"]
  },
  {
    id: "lugouqiao",
    name: "卢沟桥",
    km: 55,
    x: 635,
    y: 160,
    type: "历史",
    oneLine: "一座桥，把石狮、古道和近代记忆都留在了河边。",
    see: "卢沟桥、宛平城、永定河。",
    understand: "卢沟桥原本是北京西南交通要道，也因近代历史事件成为中国集体记忆中的重要地点。",
    reflection: "有些路段不会轻松，但走过去以后，你会更知道自己为什么出发。",
    keywords: ["石狮", "宛平城", "永定河", "近代记忆"]
  },
  {
    id: "baoding",
    name: "保定",
    km: 150,
    x: 617,
    y: 184,
    type: "城市",
    oneLine: "离开北京后，华北平原的城市纹理慢慢铺开。",
    see: "直隶总督署、古莲花池、白洋淀。",
    understand: "保定曾长期承担京畿重地角色，能看到北方府城、书院和水乡之间的混合气质。",
    reflection: "旅程真正开始时，往往不是风景最壮阔，而是你第一次坚持下来。",
    keywords: ["直隶", "府城", "白洋淀", "华北"]
  },
  {
    id: "zhengding",
    name: "正定",
    km: 270,
    x: 593,
    y: 220,
    type: "历史",
    oneLine: "古城里藏着寺塔和北方建筑的时间层。",
    see: "隆兴寺、开元寺塔、正定古城墙。",
    understand: "正定保存了丰富的古建筑遗存，它提醒人们：北方城市不只有大路，也有很细密的历史肌理。",
    reflection: "今天多学一点，就像在旧城里多走一条巷子。",
    keywords: ["古城", "寺塔", "隆兴寺", "建筑"]
  },
  {
    id: "taiyuan",
    name: "太原",
    km: 520,
    x: 548,
    y: 232,
    type: "城市",
    oneLine: "进入山西腹地，黄土、煤铁和古建一起出现。",
    see: "晋祠、双塔寺、汾河。",
    understand: "太原是山西重要城市，背后连着晋文化、边塞交通和北方工业记忆。",
    reflection: "学习也有自己的地层，旧知识不会消失，会成为下一段的路基。",
    keywords: ["晋祠", "汾河", "山西", "古建"]
  },
  {
    id: "pingyao",
    name: "平遥",
    km: 650,
    x: 532,
    y: 266,
    type: "世界遗产",
    oneLine: "一座被城墙包起来的明清金融世界。",
    see: "平遥古城、日升昌票号、古城墙。",
    understand: "晋商把信用、账本和远方连接起来，票号像古代中国的跨城金融网络。",
    reflection: "真正能走远的东西，靠的不是冲动，而是可持续的系统。",
    keywords: ["晋商", "票号", "信用", "古城"]
  },
  {
    id: "hukou",
    name: "壶口",
    km: 820,
    x: 501,
    y: 304,
    type: "自然",
    oneLine: "黄河在这里忽然收窄，水声像一段巨大的鼓点。",
    see: "壶口瀑布、黄河峡谷、黄土高原地貌。",
    understand: "壶口瀑布展示的是黄河力量和黄土高原切割地貌，也是一种很强的北方景观记忆。",
    reflection: "有时候进步也像河水，看似被压窄，反而积出更大的力量。",
    keywords: ["黄河", "瀑布", "黄土高原", "峡谷"]
  },
  {
    id: "xian",
    name: "西安",
    km: 980,
    x: 476,
    y: 342,
    type: "世界遗产",
    oneLine: "一座把秦、汉、唐都压进城墙里的城市。",
    see: "兵马俑、西安城墙、大雁塔、回民街。",
    understand: "这里是中国古代国家形成、帝国扩张、丝绸之路开启的重要舞台。",
    reflection: "语言学习也像修城墙，不是一块砖决定结果，而是每天多垒一点。",
    keywords: ["秦", "汉唐", "丝绸之路", "都城"]
  },
  {
    id: "qinling",
    name: "秦岭",
    km: 1120,
    x: 454,
    y: 370,
    type: "自然",
    oneLine: "中国南北气候和生活方式在这里分界。",
    see: "山脉、古道、关隘、森林。",
    understand: "秦岭不只是一座山，它改变雨水、作物、方言、饮食和人的迁徙路径。",
    reflection: "跨过分界线时，别急着变强，先允许自己适应新的坡度。",
    keywords: ["南北分界", "山脉", "古道", "适应"]
  },
  {
    id: "hanzhong",
    name: "汉中",
    km: 1260,
    x: 435,
    y: 397,
    type: "历史",
    oneLine: "秦岭以南，蜀道和汉水把历史带进山谷。",
    see: "汉中博物馆、拜将坛、汉江。",
    understand: "汉中位于关中和四川之间，是古代入蜀交通和三国叙事里的关键地带。",
    reflection: "到达中转地不是停滞，而是为下一段山路换一种节奏。",
    keywords: ["汉水", "蜀道", "三国", "山谷"]
  },
  {
    id: "jianmen",
    name: "剑门关",
    km: 1440,
    x: 410,
    y: 424,
    type: "历史",
    oneLine: "一夫当关的想象，在这里变成真实山势。",
    see: "剑门关、翠云廊、古蜀道。",
    understand: "剑门关是古蜀道上的险要关口，地形本身就是历史的一部分。",
    reflection: "难关不是用来证明你不行的，它只是提醒你放慢、站稳、继续。",
    keywords: ["蜀道", "关隘", "险峻", "古道"]
  },
  {
    id: "chengdu",
    name: "成都",
    km: 1690,
    x: 372,
    y: 462,
    type: "城市",
    oneLine: "抵达四川盆地，烟火气和水汽一起变得柔软。",
    see: "武侯祠、杜甫草堂、宽窄巷子、熊猫基地。",
    understand: "成都的魅力不只是慢生活，也来自盆地农业、移民城市和川味日常的长期叠加。",
    reflection: "走到这里，可以给自己一个长呼吸，然后继续往高处去。",
    keywords: ["天府之国", "川味", "熊猫", "盆地"]
  },
  {
    id: "dujiangyan",
    name: "都江堰",
    km: 1745,
    x: 354,
    y: 445,
    type: "世界遗产",
    oneLine: "两千多年还在工作的水利工程。",
    see: "鱼嘴、飞沙堰、宝瓶口、青城山。",
    understand: "都江堰不是用蛮力堵水，而是顺着水势分流、排沙、灌溉。好的系统往往不是更用力，而是更会借力。",
    reflection: "学习语言也一样，找到水流方向，比硬扛更重要。",
    keywords: ["水利", "李冰", "天府之国", "青城山"]
  },
  {
    id: "yaan",
    name: "雅安",
    km: 1840,
    x: 345,
    y: 487,
    type: "公路",
    oneLine: "从这里开始，318 的公路感变得真实。",
    see: "318 自驾大本营、茶山、雨城、碧峰峡。",
    understand: "雅安连接成都平原和川西高原，是进入远方前的缓冲地带。",
    reflection: "每段远路都需要一个缓冲区，今天只要稳稳推进。",
    keywords: ["318", "雨城", "茶", "川藏公路"]
  },
  {
    id: "luding",
    name: "泸定桥",
    km: 1970,
    x: 324,
    y: 497,
    type: "历史",
    oneLine: "一座铁索桥，把峡谷、交通和近代叙事连接起来。",
    see: "泸定桥、大渡河、峡谷城镇。",
    understand: "泸定桥跨越大渡河，是川西交通节点，也因近代历史而被反复讲述。",
    reflection: "有些跨越看起来很窄，但真正走过去需要耐心和勇气。",
    keywords: ["大渡河", "铁索桥", "峡谷", "跨越"]
  },
  {
    id: "kangding",
    name: "康定",
    km: 2050,
    x: 308,
    y: 497,
    type: "民族文化",
    oneLine: "一座站在汉藏文化交汇处的山城。",
    see: "康定城、木格措、跑马山、折多山。",
    understand: "康定长期是茶马古道和川藏交通的重要节点，商旅、马帮、歌声和高山在这里交汇。",
    reflection: "进入新语言时，你也站在两个世界之间，慢一点没关系。",
    keywords: ["康巴", "茶马古道", "山城", "交汇"]
  },
  {
    id: "zheduoshan",
    name: "折多山",
    km: 2140,
    x: 294,
    y: 498,
    type: "自然",
    oneLine: "翻过这座山，川藏线的海拔感一下子变清楚。",
    see: "垭口、盘山路、雪线、经幡。",
    understand: "折多山常被视作进入康巴高原的重要门槛，地貌、气候和身体感受都会改变。",
    reflection: "学习里的高反也正常，先稳住呼吸，再继续往前。",
    keywords: ["垭口", "高原", "经幡", "门槛"]
  },
  {
    id: "xinduqiao",
    name: "新都桥",
    km: 2210,
    x: 282,
    y: 495,
    type: "自然",
    oneLine: "光线、草坡和藏式民居，把路边变成风景。",
    see: "贡嘎远眺、藏式村落、秋色河谷。",
    understand: "新都桥常被旅行者称为摄影走廊，真正迷人的不是单个景点，而是一路展开的高原日常。",
    reflection: "你不用每一天都惊艳，稳定出现，本身就会形成风景。",
    keywords: ["摄影走廊", "藏居", "光线", "河谷"]
  },
  {
    id: "litang",
    name: "理塘",
    km: 2320,
    x: 267,
    y: 489,
    type: "民族文化",
    oneLine: "高原上风很大的城，也很适合把心放远。",
    see: "长青春科尔寺、毛垭草原、高原城镇。",
    understand: "理塘位于高海拔草原地带，是康巴文化的重要地点之一，宗教、牧场和远行感都很强。",
    reflection: "走到这里，靠的不是某一天特别努力，而是很多普通日子的累计。",
    keywords: ["世界高城", "康巴", "草原", "远行"]
  },
  {
    id: "maoya",
    name: "毛垭草原",
    km: 2400,
    x: 250,
    y: 481,
    type: "自然",
    oneLine: "道路在草原上摊开，视野突然变得很宽。",
    see: "草原、牧场、河流、远山。",
    understand: "毛垭草原展示的是高原牧区的空间感，人在这里会明显感到尺度变大。",
    reflection: "给学习留一点空旷感，不必每一步都塞满压力。",
    keywords: ["草原", "牧场", "高原", "开阔"]
  },
  {
    id: "batang",
    name: "巴塘",
    km: 2510,
    x: 230,
    y: 471,
    type: "公路",
    oneLine: "金沙江前的长坡，像一段进入西藏前的预告。",
    see: "巴塘县城、金沙江峡谷、藏东门户风景。",
    understand: "巴塘位于川藏交界附近，是从四川进入西藏前的重要节点。",
    reflection: "靠近边界时最容易心急，今天还是按自己的步速来。",
    keywords: ["川藏交界", "峡谷", "门户", "节奏"]
  },
  {
    id: "jinshajiang",
    name: "金沙江",
    km: 2605,
    x: 215,
    y: 461,
    type: "自然",
    oneLine: "过江之后，路线正式把你带入藏东山地。",
    see: "金沙江大桥、峡谷河流、山地公路。",
    understand: "金沙江是长江上游的重要河段，河谷也常常成为道路和地域转换的边界。",
    reflection: "跨过一条江，就像跨过一个旧习惯。小，但有效。",
    keywords: ["长江上游", "河谷", "边界", "转换"]
  },
  {
    id: "mangkang",
    name: "芒康",
    km: 2700,
    x: 203,
    y: 448,
    type: "民族文化",
    oneLine: "进入西藏，真正的横断山路段开始。",
    see: "盐井古盐田、澜沧江峡谷、茶马古道遗迹。",
    understand: "芒康处在川、藏、滇交通交汇地带，盐井和茶马古道让这里带着很强的边地贸易记忆。",
    reflection: "复杂路线并不可怕，你只需要处理脚下这一小段。",
    keywords: ["盐井", "茶马古道", "横断山", "交汇"]
  },
  {
    id: "zuogong",
    name: "左贡",
    km: 2910,
    x: 169,
    y: 421,
    type: "公路",
    oneLine: "在山谷和垭口之间推进，川藏线进入耐力段。",
    see: "东达山、邦达草原、峡谷公路。",
    understand: "这一带海拔、山势和长距离路段叠加，旅行从新鲜感转向耐力。",
    reflection: "真正的长期主义，常常就是在没那么兴奋的时候继续一点点。",
    keywords: ["东达山", "邦达", "垭口", "耐力"]
  },
  {
    id: "nujiang72",
    name: "怒江72拐",
    km: 3040,
    x: 151,
    y: 405,
    type: "公路",
    oneLine: "密集弯道把路折成一串耐心测试。",
    see: "盘山公路、怒江峡谷、观景台。",
    understand: "怒江七十二拐是川藏线上著名的公路景观，弯道本身成为旅行记忆的一部分。",
    reflection: "进步不一定是直线，拐弯也算前进。",
    keywords: ["盘山路", "怒江", "弯道", "耐心"]
  },
  {
    id: "ranwu",
    name: "然乌湖",
    km: 3180,
    x: 132,
    y: 385,
    type: "自然",
    oneLine: "雪山和湖水把路上的疲惫暂时收走。",
    see: "然乌湖、冰川、雪山倒影。",
    understand: "川藏线的魅力不只是抵达，也在这些突然安静下来的地理瞬间。",
    reflection: "可以把今天这小关当作一次停湖边的呼吸。",
    keywords: ["湖泊", "冰川", "雪山", "停顿"]
  },
  {
    id: "bomi",
    name: "波密",
    km: 3280,
    x: 118,
    y: 371,
    type: "自然",
    oneLine: "雪山、森林和河谷，让藏东南忽然变得湿润。",
    see: "帕隆藏布、岗云杉林、冰川景观。",
    understand: "波密所在的藏东南与许多人想象中的干冷高原不同，森林和水汽让这里有独特的地理气质。",
    reflection: "别用旧印象定义新地方，也别用昨天的状态定义今天的你。",
    keywords: ["藏东南", "森林", "河谷", "冰川"]
  },
  {
    id: "lulang",
    name: "鲁朗",
    km: 3370,
    x: 108,
    y: 355,
    type: "自然",
    oneLine: "森林、牧场和雪峰之间，高原也可以很温柔。",
    see: "鲁朗林海、牧场、南迦巴瓦远景。",
    understand: "鲁朗展示了藏东南的森林高原景观，和前面草原、峡谷形成鲜明对比。",
    reflection: "学习也会有这样的路段，忽然顺一点、亮一点。",
    keywords: ["林海", "牧场", "雪峰", "温柔"]
  },
  {
    id: "nyingchi",
    name: "林芝",
    km: 3460,
    x: 96,
    y: 342,
    type: "城市",
    oneLine: "进入拉萨前，先经过一段雪山森林地带。",
    see: "雅鲁藏布江、南迦巴瓦、桃花沟。",
    understand: "林芝常被称作西藏江南，藏东南的气候和景观让人看到西藏的另一面。",
    reflection: "快到终点时，别只盯着终点，也看看一路长出的变化。",
    keywords: ["藏东南", "雅鲁藏布", "南迦巴瓦", "桃花"]
  },
  {
    id: "lhasa",
    name: "拉萨",
    km: 3560,
    x: 77,
    y: 322,
    type: "世界遗产",
    oneLine: "旅程的终点，也是另一种精神地理的起点。",
    see: "布达拉宫、大昭寺、八廓街、罗布林卡。",
    understand: "拉萨的城市空间和藏传佛教、朝圣传统、王朝历史深度交织。布达拉宫、大昭寺、罗布林卡也是世界遗产体系中的重要建筑群。",
    reflection: "抵达不是结束，而是证明你真的可以走完一条长线。",
    keywords: ["布达拉宫", "大昭寺", "朝圣", "终点"]
  }
];

const defaultState = {
  distance: 0,
  duolingoScore: 31,
  todayLessons: 0,
  streakDays: 0,
  lastActiveDate: "",
  history: []
};

const lastItem = (items) => items[items.length - 1];
const totalRouteKm = lastItem(places).km;
const BASELINE_SCORE = 31;
const TARGET_SCORE = 130;
const KM_PER_SCORE = totalRouteKm / (TARGET_SCORE - BASELINE_SCORE);
const todayKey = () => new Date().toLocaleDateString("sv-SE");
const yesterdayKey = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toLocaleDateString("sv-SE");
};

let state = loadState();
let toastTimer = null;
let lastUnlockedPlaceId = null;

const routeBack = document.querySelector("#routeBack");
const routeDone = document.querySelector("#routeDone");
const nodeLayer = document.querySelector("#nodeLayer");
const walker = document.querySelector("#walker");
const walkerHalo = document.querySelector("#walkerHalo");
const totalDistance = document.querySelector("#totalDistance");
const progressPercent = document.querySelector("#progressPercent");
const currentPlace = document.querySelector("#currentPlace");
const nextPlace = document.querySelector("#nextPlace");
const todayLessons = document.querySelector("#todayLessons");
const streakDays = document.querySelector("#streakDays");
const distanceToNext = document.querySelector("#distanceToNext");
const routeNote = document.querySelector("#routeNote");
const progressBar = document.querySelector("#progressBar");
const placesList = document.querySelector("#placesList");
const unlockedCount = document.querySelector("#unlockedCount");
const completeBtn = document.querySelector("#completeBtn");
const scoreSummary = document.querySelector("#scoreSummary");
const scoreRate = document.querySelector("#scoreRate");
const scoreInput = document.querySelector("#scoreInput");
const updateScoreBtn = document.querySelector("#updateScoreBtn");
const undoBtn = document.querySelector("#undoBtn");
const resetBtn = document.querySelector("#resetBtn");
const resetDialog = document.querySelector("#resetDialog");
const confirmReset = document.querySelector("#confirmReset");
const placeDialog = document.querySelector("#placeDialog");
const placeDialogBody = document.querySelector("#placeDialogBody");
const closePlaceDialog = document.querySelector("#closePlaceDialog");
const toast = document.querySelector("#toast");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const merged = { ...defaultState, ...saved, history: Array.isArray(saved && saved.history) ? saved.history : [] };
    merged.duolingoScore = clampScore(Number(merged.duolingoScore || BASELINE_SCORE));
    merged.distance = scoreToDistance(merged.duolingoScore);
    return merged;
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clampDistance(distance) {
  return Math.max(0, Math.min(totalRouteKm, Math.round(distance)));
}

function clampScore(score) {
  if (!Number.isFinite(score)) return BASELINE_SCORE;
  return Math.max(BASELINE_SCORE, Math.min(TARGET_SCORE, Math.round(score)));
}

function scoreToDistance(score) {
  return clampDistance((clampScore(score) - BASELINE_SCORE) * KM_PER_SCORE);
}

function getSegment(distance) {
  for (let index = 0; index < places.length - 1; index += 1) {
    if (distance >= places[index].km && distance <= places[index + 1].km) {
      return { from: places[index], to: places[index + 1], index };
    }
  }
  return { from: places[places.length - 2], to: lastItem(places), index: places.length - 2 };
}

function getPosition(distance) {
  const { from, to } = getSegment(distance);
  const span = Math.max(1, to.km - from.km);
  const ratio = Math.max(0, Math.min(1, (distance - from.km) / span));
  return {
    x: from.x + (to.x - from.x) * ratio,
    y: from.y + (to.y - from.y) * ratio
  };
}

function buildRoutePath(upToDistance = totalRouteKm) {
  const points = places
    .filter((place) => place.km <= upToDistance)
    .map((place) => `${place.x},${place.y}`);

  if (upToDistance > 0 && upToDistance < totalRouteKm) {
    const position = getPosition(upToDistance);
    points.push(`${position.x},${position.y}`);
  }

  if (points.length < 2) {
    const start = places[0];
    return `M ${start.x} ${start.y}`;
  }

  return `M ${points.join(" L ")}`;
}

function syncDateState() {
  const today = todayKey();
  if (state.lastActiveDate && state.lastActiveDate !== today) {
    state.todayLessons = 0;
  }
}

function getUnlockedPlaces(distance = state.distance) {
  return places.filter((place) => place.km <= distance);
}

function getTypeClass(type) {
  const map = {
    城市: "city",
    历史: "history",
    世界遗产: "heritage",
    自然: "nature",
    公路: "road",
    民族文化: "culture"
  };
  return map[type] || "city";
}

function renderNodes() {
  nodeLayer.innerHTML = places
    .map((place, index) => {
      const unlocked = place.km <= state.distance;
      const major = index === 0 || index === places.length - 1 || place.type === "世界遗产" || place.type === "城市";
      const labelOffset = place.name.length > 2 ? 15 : 13;
      return `
        <g class="map-node map-node--${getTypeClass(place.type)} ${unlocked ? "is-unlocked" : ""} ${major ? "is-major" : ""}" transform="translate(${place.x} ${place.y})">
          <circle r="${major ? 8 : 5}"></circle>
          ${major ? `<text x="${labelOffset}" y="5">${place.name}</text>` : ""}
        </g>
      `;
    })
    .join("");
}

function renderPlaces() {
  placesList.innerHTML = places
    .map((place) => {
      const unlocked = place.km <= state.distance;
      const keywords = place.keywords.map((keyword) => `<span>${keyword}</span>`).join("");
      return `
        <button class="place-item ${unlocked ? "is-unlocked" : ""}" type="button" data-place-id="${place.id}" ${unlocked ? "" : "disabled"}>
          <span class="place-type place-type--${getTypeClass(place.type)}">${place.type}</span>
          <strong>${place.name}</strong>
          <p>${unlocked ? place.oneLine : `${place.km} km 解锁`}</p>
          <span class="place-keywords">${unlocked ? keywords : "<span>未解锁</span>"}</span>
        </button>
      `;
    })
    .join("");
}

function renderPlaceDialog(place) {
  const keywords = place.keywords.map((keyword) => `<span>${keyword}</span>`).join("");
  placeDialogBody.innerHTML = `
    <div class="dialog-card-heading">
      <span class="place-type place-type--${getTypeClass(place.type)}">${place.type}</span>
      <h2>${place.name}</h2>
      <p>${place.oneLine}</p>
    </div>
    <dl class="knowledge-list">
      <div>
        <dt>看什么</dt>
        <dd>${place.see}</dd>
      </div>
      <div>
        <dt>懂什么</dt>
        <dd>${place.understand}</dd>
      </div>
      <div>
        <dt>给今天的你</dt>
        <dd>${place.reflection}</dd>
      </div>
    </dl>
    <div class="dialog-keywords">${keywords}</div>
  `;
}

function openPlace(place) {
  renderPlaceDialog(place);
  if (typeof placeDialog.showModal === "function") {
    placeDialog.showModal();
  } else {
    showToast(`${place.name}：${place.oneLine}`);
  }
}

function render() {
  syncDateState();
  state.duolingoScore = clampScore(state.duolingoScore);
  state.distance = scoreToDistance(state.duolingoScore);
  const distance = state.distance;
  const percent = Math.round((distance / totalRouteKm) * 100);
  const segment = getSegment(distance);
  const position = getPosition(distance);
  const unlocked = getUnlockedPlaces();
  const latest = lastItem(unlocked) || places[0];

  routeBack.setAttribute("d", buildRoutePath(totalRouteKm));
  routeDone.setAttribute("d", buildRoutePath(distance));
  walker.setAttribute("cx", position.x);
  walker.setAttribute("cy", position.y);
  walkerHalo.setAttribute("cx", position.x);
  walkerHalo.setAttribute("cy", position.y);

  totalDistance.textContent = `${distance} km`;
  progressPercent.textContent = `${percent}%`;
  currentPlace.textContent = latest.name;
  nextPlace.textContent = distance >= totalRouteKm ? "完成" : segment.to.name;
  todayLessons.textContent = `${state.todayLessons} 分`;
  streakDays.textContent = `${state.streakDays} 天`;
  distanceToNext.textContent = distance >= totalRouteKm ? "0 km" : `${segment.to.km - distance} km`;
  progressBar.style.width = `${percent}%`;
  unlockedCount.textContent = `${unlocked.length} / ${places.length}`;
  routeNote.textContent = latest.oneLine;
  scoreSummary.textContent = `${state.duolingoScore} / ${TARGET_SCORE} 分`;
  scoreRate.textContent = `1 分≈${Math.round(KM_PER_SCORE)} km`;
  scoreInput.value = String(state.duolingoScore);
  undoBtn.disabled = state.history.length === 0;

  renderNodes();
  renderPlaces();
  saveState();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function pushHistory() {
  state.history.push({
    distance: state.distance,
    duolingoScore: state.duolingoScore,
    todayLessons: state.todayLessons,
    streakDays: state.streakDays,
    lastActiveDate: state.lastActiveDate
  });
  state.history = state.history.slice(-80);
}

function markActivity(scoreDelta) {
  const today = todayKey();
  const firstLessonToday = state.lastActiveDate !== today;

  if (firstLessonToday) {
    state.streakDays = state.lastActiveDate === yesterdayKey() ? state.streakDays + 1 : 1;
    state.todayLessons = 0;
    state.lastActiveDate = today;
  }

  if (scoreDelta > 0) {
    state.todayLessons += scoreDelta;
  }
}

function applyScore(nextScore) {
  const beforeDistance = state.distance;
  const beforeUnlocked = getUnlockedPlaces(beforeDistance).length;
  const previousScore = state.duolingoScore;
  const score = clampScore(nextScore);

  if (score === previousScore) {
    showToast("分数没有变化。");
    render();
    return;
  }

  pushHistory();
  state.duolingoScore = score;
  state.distance = scoreToDistance(score);
  markActivity(Math.max(0, score - previousScore));
  render();

  const afterUnlocked = getUnlockedPlaces();
  const distanceDelta = state.distance - beforeDistance;
  if (afterUnlocked.length > beforeUnlocked) {
    const newPlace = lastItem(afterUnlocked);
    lastUnlockedPlaceId = newPlace.id;
    showToast(`解锁 ${newPlace.name}`);
    window.setTimeout(() => openPlace(newPlace), 260);
  } else if (distanceDelta > 0) {
    showToast(`分数 +${score - previousScore}，前进 ${distanceDelta} km`);
  } else {
    showToast(`已校正到 ${score} 分`);
  }
}

function completeLesson() {
  if (state.duolingoScore >= TARGET_SCORE) {
    showToast("已经抵达拉萨。");
    return;
  }
  applyScore(state.duolingoScore + 1);
}

function undo() {
  const previous = state.history.pop();
  if (!previous) return;
  state = { ...state, ...previous, history: state.history };
  render();
  showToast("已撤回上一次分数变动。");
}

function reset() {
  state = { ...defaultState, history: [] };
  lastUnlockedPlaceId = null;
  render();
  showToast("已回到 31 分起点。");
}

completeBtn.addEventListener("click", completeLesson);
updateScoreBtn.addEventListener("click", () => applyScore(Number(scoreInput.value)));
scoreInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    applyScore(Number(scoreInput.value));
  }
});
undoBtn.addEventListener("click", undo);
resetBtn.addEventListener("click", () => {
  if (typeof resetDialog.showModal === "function") {
    resetDialog.showModal();
  } else if (window.confirm("重置旅程？")) {
    reset();
  }
});
confirmReset.addEventListener("click", reset);
closePlaceDialog.addEventListener("click", () => placeDialog.close());

placesList.addEventListener("click", (event) => {
  const card = event.target.closest("[data-place-id]");
  if (!card || card.disabled) return;
  const place = places.find((item) => item.id === card.dataset.placeId);
  if (place) openPlace(place);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}

render();
