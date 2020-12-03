function timer() {
  s++;

  if (s > 60) {
    s = 0;
    m++;
  }

  timerLabel.innerHTML = `${m}:${s}`;
}

function buildCards() {
  const container = document.querySelector("#card-deck");
  for (let i = 0; i < 16; i++) {
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    container.appendChild(newCard);
  }
}

function buildPairs() {
  let card;
  let usedCards = [];

  for (let i = 0; i < 16; i++) {
    do {
      card = Math.floor(Math.random() * 16);
    } while (usedCards.includes(allCards[card]));

    usedCards.push(allCards[card]);
  }

  for (let i = 0; i < 8; i++) {
    pairs.push([usedCards[0], usedCards[1]]);
    usedCards.shift(0);
    usedCards.shift(1);
  }

  labelPairs();
}

function labelPairs() {
  for (let index = 0; index < pairs.length; index++) {
    for (let i = 0; i < pairs[index].length; i++) {
      pairs[index][i].innerHTML = index;
    }
  }
}

// Timer:
let m = 0;
let s = 0;

let allFlippedCards = [];
let pairs = [];
let started = false;
const timerLabel = document.querySelector(".timer");
const startButton = document.querySelector(".start-button");

buildCards();
const allCards = document.querySelectorAll(".card");
buildPairs();

startButton.addEventListener("click", function () {
  started = true;
  setInterval(timer, 1000);
});

// flip/unflip cards
for (let i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener("click", function (e) {
    let c = allCards[i];

    if (
      !c.classList.contains("card-flipped") &&
      allFlippedCards.length < 2 &&
      !c.classList.contains("card-matched")
    ) {
      c.classList.add("card-flipped");
      allFlippedCards.push(c);

      // check if pair
      if (allFlippedCards.length == 2) {
        if (allFlippedCards[0].innerHTML == allFlippedCards[1].innerHTML) {
          allFlippedCards.forEach((item) => {
            item.classList.add("card-matched");
            item.classList.remove("card-flipped");
          });

          allFlippedCards = [];
        }
      }
    } else if (c.classList.contains("card-flipped")) {
      c.classList.remove("card-flipped");
      allFlippedCards.pop();
      console.log("test");
    }
  });
}
