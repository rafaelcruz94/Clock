"use strict";

//Variables
let timer = null;
let displayTimer = document.getElementById('clock');

//Functions
function twelveHours() {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let H = (h % 12) || 12;
  let AM_PM = (h < 12 || h === 24) ? "AM" : " PM";
  H = (H < 10) ? ("0" + H) : H;
  m = (m < 10) ? ("0" + m) : m;
  s = (s < 10) ? ("0" + s) : s;
  displayTimer.innerHTML = H + ":" + m + ":" + s + AM_PM;
}

function twentyFourHours() {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  h = (h < 10) ? ("0" + h) : h;
  m = (m < 10) ? ("0" + m) : m;
  s = (s < 10) ? ("0" + s) : s;
  displayTimer.innerHTML = h + ":" + m + ":" + s;
}

function displayDay() {
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  let showDay = document.getElementById('day');
  showDay.innerHTML = day;
}

//EventListeners
window.addEventListener("load", () => {
  timer = setInterval(twentyFourHours, 1000);
  setTimeout(displayDay, 1000);
  document.getElementById('24h').focus();
  document.getElementById('24h').classList.add('active');
});

let twentyFour = document.getElementById('24h').addEventListener('click', () => {
  document.getElementById('24h').classList.add('active');
  document.getElementById('12h').classList.remove('active');
  clearInterval(timer);
  timer = setInterval(twentyFourHours, 1000);
});

let twelve = document.getElementById('12h').addEventListener('click', () => {
  document.getElementById('12h').classList.add('active');
  document.getElementById('24h').classList.remove('active');
  clearInterval(timer);
  timer = setInterval(twelveHours, 1000);
});

