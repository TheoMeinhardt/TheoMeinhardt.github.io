const allCards = document.querySelectorAll(".card");
let allFlippedCards = 0;

// flip/unflip cards
for (let index = 0; index < allCards.length; index++) {
  allCards[index].addEventListener("click", function (e) {
    let c = allCards[index];

    if (!c.classList.contains("card-flipped") && allFlippedCards < 2) {
      c.classList.add("card-flipped");
      allFlippedCards++;
    } else if (c.classList.contains("card-flipped")) {
      c.classList.remove("card-flipped");
      allFlippedCards--;
    }
  });
}
