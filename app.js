const STORAGE_KEY = "duo-hike-china-state-v1";

const places = [
  { name: "北京", km: 0, x: 646, y: 144, note: "从城北出发，路线正式展开。" },
  { name: "保定", km: 150, x: 617, y: 184, note: "离开京畿，平原路段开始变长。" },
  { name: "石家庄", km: 300, x: 589, y: 230, note: "太行山在西侧浮现。" },
  { name: "太原", km: 520, x: 548, y: 232, note: "进入山西腹地，沿古道继续南下。" },
  { name: "临汾", km: 750, x: 519, y: 291, note: "汾河谷地一路向前。" },
  { name: "西安", km: 980, x: 476, y: 342, note: "抵达关中，第一段大路完成。" },
  { name: "汉中", km: 1260, x: 445, y: 390, note: "翻越秦岭，山路密起来了。" },
  { name: "广元", km: 1440, x: 415, y: 424, note: "进入蜀道，路势开始转折。" },
  { name: "成都", km: 1690, x: 372, y: 462, note: "抵达四川盆地，可以给自己一个长呼吸。" },
  { name: "雅安", km: 1840, x: 345, y: 487, note: "从这里开始，川西的风吹进路线。" },
  { name: "康定", km: 2050, x: 308, y: 497, note: "高原门户到了，海拔感逐渐出现。" },
  { name: "理塘", km: 2320, x: 267, y: 489, note: "来到世界高城，路线进入辽阔地带。" },
  { name: "巴塘", km: 2510, x: 230, y: 471, note: "金沙江前的长坡，节奏要稳。" },
  { name: "芒康", km: 2700, x: 203, y: 448, note: "进入西藏，真正的横断山路段开始。" },
  { name: "左贡", km: 2910, x: 169, y: 421, note: "在山谷和垭口之间推进。" },
  { name: "八宿", km: 3130, x: 139, y: 392, note: "雪山越来越近，路也越来越安静。" },
  { name: "林芝", km: 3370, x: 108, y: 355, note: "森林和雪峰之间，终点已经可感。" },
  { name: "拉萨", km: 3560, x: 77, y: 322, note: "抵达拉萨，这趟语言徒步完成。" }
];

const defaultState = {
  distance: 0,
  speed: 5,
  todayLessons: 0,
  streakDays: 0,
  lastActiveDate: "",
  history: []
};

const lastItem = (items) => items[items.length - 1];
const totalRouteKm = lastItem(places).km;
const todayKey = () => new Date().toLocaleDateString("sv-SE");
const yesterdayKey = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toLocaleDateString("sv-SE");
};

let state = loadState();
let toastTimer = null;

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
const undoBtn = document.querySelector("#undoBtn");
const resetBtn = document.querySelector("#resetBtn");
const resetDialog = document.querySelector("#resetDialog");
const confirmReset = document.querySelector("#confirmReset");
const toast = document.querySelector("#toast");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...saved, history: Array.isArray(saved?.history) ? saved.history : [] };
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

function getUnlockedPlaces() {
  return places.filter((place) => place.km <= state.distance);
}

function renderNodes() {
  nodeLayer.innerHTML = places
    .map((place) => {
      const unlocked = place.km <= state.distance;
      const labelOffset = place.name.length > 2 ? 18 : 14;
      return `
        <g class="map-node ${unlocked ? "is-unlocked" : ""}" transform="translate(${place.x} ${place.y})">
          <circle r="8"></circle>
          <text x="${labelOffset}" y="6">${place.name}</text>
        </g>
      `;
    })
    .join("");
}

function renderPlaces() {
  placesList.innerHTML = places
    .map((place) => {
      const unlocked = place.km <= state.distance;
      return `
        <article class="place-item ${unlocked ? "is-unlocked" : ""}">
          <strong>${place.name}</strong>
          <p>${unlocked ? place.note : `${place.km} km 解锁`}</p>
        </article>
      `;
    })
    .join("");
}

function renderSpeed() {
  document.querySelectorAll("[data-speed]").forEach((button) => {
    const selected = Number(button.dataset.speed) === Number(state.speed);
    button.setAttribute("aria-checked", String(selected));
  });
}

function render() {
  syncDateState();
  const distance = clampDistance(state.distance);
  const percent = Math.round((distance / totalRouteKm) * 100);
  const segment = getSegment(distance);
  const position = getPosition(distance);
  const unlocked = getUnlockedPlaces();

  routeBack.setAttribute("d", buildRoutePath(totalRouteKm));
  routeDone.setAttribute("d", buildRoutePath(distance));
  walker.setAttribute("cx", position.x);
  walker.setAttribute("cy", position.y);
  walkerHalo.setAttribute("cx", position.x);
  walkerHalo.setAttribute("cy", position.y);

  totalDistance.textContent = `${distance} km`;
  progressPercent.textContent = `${percent}%`;
  currentPlace.textContent = segment.from.name;
  nextPlace.textContent = distance >= totalRouteKm ? "完成" : segment.to.name;
  todayLessons.textContent = `${state.todayLessons} 小关`;
  streakDays.textContent = `${state.streakDays} 天`;
  distanceToNext.textContent = distance >= totalRouteKm ? "0 km" : `${segment.to.km - distance} km`;
  progressBar.style.width = `${percent}%`;
  unlockedCount.textContent = `${unlocked.length} / ${places.length}`;
  routeNote.textContent = (lastItem(unlocked) && lastItem(unlocked).note) || places[0].note;
  undoBtn.disabled = state.history.length === 0;

  renderNodes();
  renderPlaces();
  renderSpeed();
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

function completeLesson() {
  if (state.distance >= totalRouteKm) {
    showToast("已经抵达拉萨。");
    return;
  }

  const today = todayKey();
  const beforeDistance = state.distance;
  const beforeUnlocked = getUnlockedPlaces().length;
  const firstLessonToday = state.lastActiveDate !== today;

  if (firstLessonToday) {
    state.streakDays = state.lastActiveDate === yesterdayKey() ? state.streakDays + 1 : 1;
    state.todayLessons = 0;
    state.lastActiveDate = today;
  }

  state.history.push({
    distance: state.distance,
    todayLessons: state.todayLessons,
    streakDays: state.streakDays,
    lastActiveDate: state.lastActiveDate
  });
  state.history = state.history.slice(-80);
  state.todayLessons += 1;
  state.distance = clampDistance(state.distance + Number(state.speed));

  render();

  const afterUnlocked = getUnlockedPlaces();
  if (afterUnlocked.length > beforeUnlocked) {
    showToast(`抵达 ${lastItem(afterUnlocked).name}`);
  } else {
    showToast(`前进 ${state.distance - beforeDistance} km`);
  }
}

function undo() {
  const previous = state.history.pop();
  if (!previous) return;
  state = { ...state, ...previous, history: state.history };
  render();
  showToast("已撤回上一小关。");
}

function reset() {
  state = { ...defaultState, speed: state.speed, history: [] };
  render();
  showToast("旅程已回到北京。");
}

completeBtn.addEventListener("click", completeLesson);
undoBtn.addEventListener("click", undo);
resetBtn.addEventListener("click", () => {
  if (typeof resetDialog.showModal === "function") {
    resetDialog.showModal();
  } else if (window.confirm("重置旅程？")) {
    reset();
  }
});
confirmReset.addEventListener("click", reset);

document.querySelectorAll("[data-speed]").forEach((button) => {
  button.addEventListener("click", () => {
    state.speed = Number(button.dataset.speed);
    render();
    showToast(`每小关前进 ${state.speed} km`);
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}

render();
