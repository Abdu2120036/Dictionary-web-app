const toggleBtn = document.querySelector(".toggle");
const indicator = document.querySelector(".indicator");
const body = document.querySelector("body");

const searchInput = document.getElementById('searchBar');

const word = document.getElementById('word');
const phonic = document.getElementById('phonic');
const playBtn = document.getElementById("play-btn");

const meaningNoun = document.querySelector('.sect-3-noun .meaning-text');
const antonymsNoun = document.querySelector('.sect-3-noun .antonyms-text');
const synonymsNoun = document.querySelector('.sect-3-noun .synonyms-text');

const meaningVerb = document.querySelector('.sect-4-verb .meaning-text');
const antonymsVerb = document.querySelector('.sect-4-verb .antonyms-text');
const synonymsVerb = document.querySelector('.sect-4-verb .synonyms-text');

const link = document.querySelector(".link");

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/<word>'



toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle('active');
    toggleBtn.classList.toggle('toggle-dark');
    indicator.classList.toggle('indicator-dark');
    playBtn.classList.toggle('dark');
    link.classList.toggle('dark');
    body.classList.toggle('dark-mode-all');
});