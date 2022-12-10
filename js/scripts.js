"use strict";
const navEl = document.querySelector(".nav");
const darkscreenEl = document.querySelector(".dark-sceen");
const menuBtnOpenEl = document.querySelector(".menu-btn-open");
const menuBtnCloseEl = document.querySelector(".menu-btn-close");
const menuBtnEl = document.querySelectorAll(".menu-btn");
let mediaScreen1440 = window.matchMedia("(min-width:791px)");

for (let i = 0; i < menuBtnEl.length; i++) {
  menuBtnEl[i].addEventListener("click", function () {
    navEl.classList.toggle("hidden");
    darkscreenEl.classList.toggle("hidden");
    menuBtnCloseEl.classList.toggle("hidden");
    menuBtnOpenEl.classList.toggle("hidden");
  });
}
function screen1440() {
  if (mediaScreen1440.matches) {
    navEl.classList.remove("hidden");
    menuBtnOpenEl.classList.add("hidden");
  } else {
    navEl.classList.add("hidden");
    menuBtnOpenEl.classList.remove("hidden");
  }
}
screen1440(mediaScreen1440);
mediaScreen1440.addListener(screen1440);
