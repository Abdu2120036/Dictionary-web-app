const toggleBtn = document.querySelector(".toggle");
const indicator = document.querySelector(".indicator");
const body = document.querySelector("body");
const sect3Noun = document.querySelector('.sect-3-noun');
const sect4Verb = document.querySelector('.sect-4-verb');
const end = document.querySelector('.ending');

const dictionaryIcon = document.querySelector('.dictionary-icon');
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

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";



toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle('active');
    toggleBtn.classList.toggle('toggle-dark');
    indicator.classList.toggle('indicator-dark');
    playBtn.classList.toggle('dark');
    link.classList.toggle('dark');
    body.classList.toggle('dark-mode-all');
});

searchInput.addEventListener('keypress', (e) => {
    if(e.key == 'Enter') {
        let inpWord = searchInput.value;
        fetch(`${url}${inpWord}`)
            .then((response) => response.json())
            .then((data) => {
                let info = data[0];
                let meanings = info.meanings;
                let source = info.sourceUrls;

                meanings.forEach((i) => {
                    if (i.partOfSpeech == 'noun') {
                        let def = i.definitions;

                        sect3Noun.classList.remove('hidden');

                        meaningNoun.innerHTML = def[0].definition + `<br> OR <br>` + def[1].definition;
                        antonymsNoun.innerHTML = i.antonyms;
                        synonymsNoun.innerHTML = i.synonyms;
                    }
                    if (i.partOfSpeech == 'verb') {
                        let def = i.definitions;

                        sect4Verb.classList.remove('hidden');

                        meaningVerb.innerHTML = def[0].definition;
                        antonymsVerb.innerHTML = i.antonyms;
                        synonymsVerb.innerHTML = i.synonyms;
                    }

                    end.classList.remove('hidden');
                    link.innerHTML = source;
                })



                console.log(info, meanings);
            })
    }
})

dictionaryIcon.addEventListener('click', () => {
    let inpWord = searchInput.value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            let info = data[0];
            let meanings = info.meanings;

            

            word.innerHTML = info.word;
            phonic.innerHTML = info.phonetics[1].text;
            
            let phoneticsAudio = info.phonetics[1].audio;
            playBtn.addEventListener('click', () => {
                phoneticsAudio.play();
            })
            

        })
})
