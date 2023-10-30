// Get the "Reset Game" button element from the HTML
const resetButton = document.querySelector(".reset");

// Get the game board container
const gameBoard = document.querySelector(".card-game");

// Define an array of Halloween-themed emojis
const halloweenEmojis = [
  // An array of Halloween emojis, each repeated twice for matching pairs
  "🎃", "🎃", "👻", "👻", "🦇", "🦇", "🕷️", "🕷️", "🕸️", "🕸️", "🍬", "🍬",
  "🕯️", "🕯️", "🧙‍♀️", "🧙‍♀️", "🧛‍♂️", "🧛‍♂️", "🧟‍♂️", "🧟‍♂️", "🦴", "🦴",
  "🎭", "🎭", "🍁", "🍁", "🌙", "🌙"
];

// Shuffle the emojis array using a function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements randomly
  }
}
shuffleArray(halloweenEmojis);

// Timer variables
let timer = 0;
let timerInterval;

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function () {
    timer++;
    // Display the timer value in the "timer" element
    const timerElement = document.getElementById("timer");
    timerElement.textContent = `Time: ${timer} seconds`;
  }, 1000); // Update the timer every second (1000 milliseconds)
}

// Create and display cards with emojis
for (let i = 0; i < halloweenEmojis.length; i++) {
  const card = document.createElement("div");
  card.classList.add("emoji-card"); // Add the class to style it
  card.innerHTML = halloweenEmojis[i]; // Display an emoji

  // Add a click event listener to the card
  card.addEventListener("click", () => {
    // Check if there are already two turned cards
    if (document.querySelectorAll(".card-turn").length === 2) {
      // If there are two turned cards, do nothing
      return;
    }

    // Add the "card-turn" class to the clicked card to flip it
    card.classList.add("card-turn");

    setTimeout(function () {
      // Check if there are two turned cards
      if (document.querySelectorAll(".card-turn").length === 2) {
        // Check if the two turned cards match
        if (document.querySelectorAll(".card-turn")[0].innerHTML === document.querySelectorAll(".card-turn")[1].innerHTML) {
          // Mark them as matched by adding "card-match" class
          document.querySelectorAll(".card-turn")[0].classList.add("card-match");
          document.querySelectorAll(".card-turn")[1].classList.add("card-match");

          // Remove the "card-turn" class from matched cards
          document.querySelectorAll(".card-turn")[1].classList.remove("card-turn");
          document.querySelectorAll(".card-turn")[0].classList.remove("card-turn");

          // Check if all cards are matched, then display a win alert
          if (document.querySelectorAll(".card-match").length === halloweenEmojis.length) {
            alert("You win!");
            clearInterval(timerInterval); // Stop the timer
          }
        } else {
          // If the cards don't match, turn them back by removing "card-turn"
          document.querySelectorAll(".card-turn")[1].classList.remove("card-turn");
          document.querySelectorAll(".card-turn")[0].classList.remove("card-turn");
        }
      }
    }, 800); // Delay to allow for card flipping animation
  });

  // Append the card to the game container
  gameBoard.appendChild(card);
}

// Start the timer when the game begins
startTimer();

// Add an event listener for the "Reset Game" button
resetButton.addEventListener("click", () => {
  // Reload the page when the button is clicked to reset the game
  window.location.reload();
});
