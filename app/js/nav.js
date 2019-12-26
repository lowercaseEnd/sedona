"use strict"
let mainNav = document.querySelector(".main-nav");
let menuButton = document.querySelector(".menu-toggle");
//if user has a js menu will hide
mainNav.classList.remove("main-nav--nojs");
mainNav.classList.add("main-nav--closed");
mainNav.classList.remove("main-nav--opened");
menuButton.addEventListener("click", () => {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }
})