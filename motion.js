const toggleBtn = document.querySelector(".toggle");
const indicator = document.querySelector(".indicator");
const body = document.querySelector("body");
const playBtn = document.querySelector("#play-btn");
const link = document.querySelector(".link");




toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle('active');
    toggleBtn.classList.toggle('toggle-dark');
    indicator.classList.toggle('indicator-dark');
    playBtn.classList.toggle('dark');
    link.classList.toggle('dark');
    body.classList.toggle('dark-mode-all');
});