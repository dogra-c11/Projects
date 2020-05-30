const wordel = document.getElementById("word");
const wrongletterel = document.getElementById("wrong-letters");
const hintel = document.getElementById("hints");
const playagainbtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalmessage = document.getElementById("final-message");
const finalmessagerevealword = document.getElementById(
  "final-message-reveal-word"
);

const figureparts = document.querySelectorAll(".figure-part");
const words = [
  "alien",
  "predator",
  "speed",
  "inception",
  "interstellar",
  "dunkirk",
  "jaws",
  "whiplash",
  "goodfellas",
  "joker",
  "prisoners",
  "halloween",
  "pixels",
  "nightcrawler",
];
const hints = [
  "Another Universe",
  "Get to the choppa!",
  "keanu reeves",
  "dream inside dream",
  "time",
  "war",
  "shark",
  "drummer",
  "mob",
  "how about another joke!",
  "A hidden truth",
  "Slasher",
  "retro games",
  "truth about media",
];

let selectedword = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctletters = [];
const wrongletters = [];

function displayword() {
  hintel.innerText = hints[words.indexOf(selectedword)];

  wordel.innerHTML = `
    ${selectedword
      .split("")
      .map((letter) => {
        return `<span class="letter">
        ${correctletters.includes(letter) ? letter : ""}</span>`;
      })
      .join("")}`;

  const innerword = wordel.innerText.replace(/[ \n]/g, "");
  if (innerword === selectedword) {
    finalmessage.innerText = "You saved the man! 😀";
    popup.style.display = "flex";
    playable = false;
  }
}

function updatewronglettersel() {
  wrongletterel.innerHTML = `
    ${wrongletters.length > 0 ? `<p>Wrong letters</p>` : ""}
    ${wrongletters.map((letter) => `<span>${letter}</span>`)}`;

  figureparts.forEach((part, index) => {
    const errors = wrongletters.length;
    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });
  if (wrongletters.length === figureparts.length) {
    finalmessage.innerText = "You could not save the man! 😈";
    popup.style.display = "flex";
    playable = false;
  }
}

function shownotification() {
  notification.classList.add("show");
  console.log("hey");
  setTimeout(function () {
    notification.classList.remove("show");
  }, 2000);
}

window.addEventListener("keydown", (e) => {
  if (playable) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key.toLowerCase();
      if (selectedword.includes(letter)) {
        if (!correctletters.includes(letter)) {
          correctletters.push(letter);
          displayword();
        } else {
          shownotification();
        }
      } else {
        if (!wrongletters.includes(letter)) {
          wrongletters.push(letter);
          updatewronglettersel();
        } else {
          shownotification();
        }
      }
    }
  }
});

playagainbtn.addEventListener("click", function () {
  playable = true;
  correctletters.splice(0);
  wrongletters.splice(0);

  selectedword = words[Math.floor(Math.random() * words.length)];
  displayword();
  updatewronglettersel();
  popup.style.display = "none";
});

displayword();
