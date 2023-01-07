let showModal = document.querySelector(".menu-button-burger");
let showModalForm = document.querySelectorAll(".feedback-block");
let body = document.querySelector("body");
let dFix = document.querySelector(".d-fix");
let modalMenu = document.querySelector(".modal-menu");
let modalForm = document.querySelector(".modal-form");
let sendBtn = document.querySelectorAll(".close-form-after-send");
let closeBtn = document.querySelector(".hide-btn");
let container = document.querySelector(".game-list");
const games = [
  "img/games/scenariusz-echo-vr.jpg",
  "img/games/scenariusz-dead-n-buried.jpg",
  "img/games/scenariusz-boxvr.jpg",
  "img/games/scenariusz-arizona-sunshine.jpg",
  "img/games/scenariusz_robo_recall.jpg",
  "img/games/scenariusz_elven-assasin.jpg",
  "img/games/scenariusz_beat_saber.jpg",
  "img/games/gra-vader-immortal-1.jpg",
  "img/games/gra-the-climb.jpg",
  "img/games/gra-rec-room.jpg",
  "img/games/gra-luckys-tale.jpg",
  "img/games/gra-lone-echo.jpg"
];

for (let el of games) {
  console.log(typeof el);
  let item = document.createElement("img");
  item.className = 'game-item'
  item.src = el;
  container.append(item);
}

const modalAct = () => {
  modalForm.classList.toggle("hide");
  modalForm.classList.toggle("form-show");
  body.classList.toggle("d-fix");
};

const modalMenuAct = () => {
  showModal.classList.toggle("rotate-burger");
  modalMenu.classList.toggle("hide");
  modalMenu.classList.toggle("show-window");
  body.classList.toggle("d-fix");
};

showModal.addEventListener("click", () => {
  modalMenuAct();
});

for (let elem of modalMenu.childNodes) {
  console.log(elem);
  elem.addEventListener("click", () => {
    modalMenuAct();
  });
}

for (let elem of showModalForm) {
  elem.addEventListener("click", () => {
    modalAct();
  });
}

for (let el of sendBtn) {
  el.addEventListener("click", () => {
    modalAct();
  });
}

closeBtn.addEventListener("click", () => {
  console.log("hello");
  modalAct();
});
