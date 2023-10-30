// Get the reset button element
const resetButton = document.querySelector(".reset");

// Define the array of Halloween emojis
const halloweenEmojis = [
  "🎃", "🎃", "👻", "👻", "🦇", "🦇", "🕷️", "🕷️", "🕸️", "🕸️",
  "🍬", "🍬", "🕯️", "🕯️", "🧙‍♀️", "🧙‍♀️", "🧛‍♂️", "🧛‍♂️", "🧟‍♂️", "🧟‍♂️",
  "🦴", "🦴", "🎭", "🎭", "🍁", "🍁", "🌙", "🌙"
];

// Shuffle the emojis array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(halloweenEmojis);

// Create the cards
const cardGame = document.querySelector(".card-game");

for (let i = 0; i < halloweenEmojis.length; i++) {
  const card = document.createElement("div");
  card.classList.add("emoji-card");
  card.textContent = halloweenEmojis[i];

  card.addEventListener("click", () => {
    card.classList.add("card-turn");
    const turnedCards = document.querySelectorAll(".card-turn");

    if (turnedCards.length === 2) {
      const [firstCard, secondCard] = turnedCards;

      if (firstCard.textContent === secondCard.textContent) {
        firstCard.classList.add("card-match");
        secondCard.classList.add("card-match");
      }

      setTimeout(() => {
        turnedCards.forEach(card => card.classList.remove("card-turn"));
        const matchedCards = document.querySelectorAll(".card-match");

        if (matchedCards.length === halloweenEmojis.length) {
          alert("You win!");
        }
      }, 500);
    }
  });

  cardGame.appendChild(card);
}

// Add an event listener to reset the game when the "Reset" button is clicked
resetButton.addEventListener("click", () => {
  location.reload();
});
