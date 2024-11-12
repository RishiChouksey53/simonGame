let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("uflash");
  setTimeout(function () {
    btn.classList.remove("uflash");
  }, 250);
}

function checkSeq(idx) {
  if (gameSeq[idx] === userSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (!started) {
      alert(`Game has not begun! Press any key to start.`);
    } else {
      alert(`Game Over! Your score was ${level} Press any key to start.`);
    }
    h2.innerText = "Press any key to start.";
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "wheat";
    }, 150);
    reset();
  }
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  console.log(gameSeq);
  gameSeq.push(randColor);
  gameFlash(randBtn);
}

let allBtn = document.querySelectorAll(".btn");
for (let btn of allBtn) {
  btn.addEventListener("click", function () {
    userFlash(this);
    let userColor = this.getAttribute("id");
    userSeq.push(userColor);
    checkSeq(userSeq.length - 1);
  });
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
