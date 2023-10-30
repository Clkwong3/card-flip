const resetBtn = document.querySelector(".reset");

const halloweenEmojis = [
  "🎃", "🎃", "👻", "👻", "🦇", "🦇", "🕷️", "🕷️", "🕸️", "🕸️", "🍬", "🍬",
  "🕯️", "🕯️", "🧙‍♀️", "🧙‍♀️", "🧛‍♂️", "🧛‍♂️", "🧟‍♂️", "🧟‍♂️", "🦴", "🦴",
  "🎭", "🎭", "🍁", "🍁", "🌙", "🌙",
];

let turnedCards = []; // To store the turned cards
let canClick = true; // To prevent clicking on more than two cards at once

// Shuffle the emojis array
const shuffle = halloweenEmojis.sort(() => Math.random() - 0.5);

// Card Creation
for (let i = 0; i < halloweenEmojis.length; i++) {
  const cards = document.createElement("div");
  cards.classList = "emoji-cards";
  cards.innerHTML = shuffle[i];

  cards.onclick = function () {
    // Check if we can click (not already turned two cards)
    if (canClick) {
      // Check if the card is not already matched or turned
      if (!this.classList.contains("card-match") && !this.classList.contains("card-turn")) {
        this.classList.add("card-turn");
        turnedCards.push(this);

        // Check if we have turned two cards
        if (turnedCards.length === 2) {
          canClick = false; // Disable further clicks until we process the cards

          // Check if the two turned cards match
          if (turnedCards[0].innerHTML === turnedCards[1].innerHTML) {
            // If they match, add the "card-match" class to both cards
            turnedCards[0].classList.add("card-match");
            turnedCards[1].classList.add("card-match");
            turnedCards = []; // Reset the turned cards array

            // Check if all cards are matched to determine a win
            if (document.querySelectorAll(".card-match").length === halloweenEmojis.length) {
              alert("You win!");
            }
          } else {
            // If they don't match, flip them back down after a delay
            setTimeout(function () {
              turnedCards[0].classList.remove("card-turn");
              turnedCards[1].classList.remove("card-turn");
              turnedCards = []; // Reset the turned cards array
              canClick = true; // Enable clicking again
            }, 500);
          }
        }
      }
    }
  };

  document.querySelector(".card-game").appendChild(cards);
}

// Add an event listener for the "Reset Game" button
resetBtn.addEventListener("click", () => {
  window.location.reload(); // Reload the page when the button is clicked
});
