// Get the "Reset Game" button element from the HTML
const resetButton = document.querySelector(".reset");

// Define an array of Halloween-themed emojis
const halloweenEmojis = [
  "🎃", "🎃", "👻", "👻", "🦇", "🦇", "🕷️", "🕷️", "🕸️", "🕸️", "🍬", "🍬",
  "🕯️", "🕯️", "🧙‍♀️", "🧙‍♀️", "🧛‍♂️", "🧛‍♂️", "🧟‍♂️", "🧟‍♂️", "🦴", "🦴",
  "🎭", "🎭", "🍁", "🍁", "🌙", "🌙"
];

// Shuffle the emojis array using a function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(halloweenEmojis);

// Create and display cards with emojis
for (let i = 0; i < halloweenEmojis.length; i++) {
  const card = document.createElement("div");
  card.classList.add("emoji-card");
  card.innerHTML = halloweenEmojis[i];

  // Add a click event listener to the card
  card.addEventListener("click", () => {
    // Check if there are already two turned cards
    if (document.querySelectorAll(".card-turn").length === 2) {
      // If there are two turned cards, do nothing
      return;
    }

    // Add the "card-turn" class to the clicked card
    card.classList.add("card-turn");

    setTimeout(function () {
      // Check if there are two turned cards
      if (document.querySelectorAll(".card-turn").length === 2) {
        // Check if the two turned cards match
        if (document.querySelectorAll(".card-turn")[0].innerHTML === document.querySelectorAll(".card-turn")[1].innerHTML) {
          // Mark them as matched
          document.querySelectorAll(".card-turn")[0].classList.add("card-match");
          document.querySelectorAll(".card-turn")[1].classList.add("card-match");

          // Remove the "card-turn" class from matched cards
          document.querySelectorAll(".card-turn")[1].classList.remove("card-turn");
          document.querySelectorAll(".card-turn")[0].classList.remove("card-turn");

          // Check if all cards are matched, then display a win alert
          if (document.querySelectorAll(".card-match").length === halloweenEmojis.length) {
            alert("You win!");
          }
        } else {
          // If the cards don't match, turn them back
          document.querySelectorAll(".card-turn")[1].classList.remove("card-turn");
          document.querySelectorAll(".card-turn")[0].classList.remove("card-turn");
        }
      }
    }, 800);
  });

  // Append the card to the game container
  document.querySelector(".card-game").appendChild(card);
}

// Add an event listener for the "Reset Game" button
resetButton.addEventListener("click", () => {
  // Reload the page when the button is clicked to reset the game
  window.location.reload();
});
