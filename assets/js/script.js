const resetBtn = document.querySelector(".reset");

const halloweenEmojis = [
  "🎃",
  "🎃",
  "👻",
  "👻",
  "🦇",
  "🦇",
  "🕷️",
  "🕷️",
  "🕸️",
  "🕸️",
  "🍬",
  "🍬",
  "🕯️",
  "🕯️",
  "🧙‍♀️",
  "🧙‍♀️",
  "🧛‍♂️",
  "🧛‍♂️",
  "🧟‍♂️",
  "🧟‍♂️",
  "🦴",
  "🦴",
  "🎭",
  "🎭",
  "🍁",
  "🍁",
  "🌙",
  "🌙",
];

// Shuffle the emojis array
// More explicit sorting logic based on a random condition to get either 2 or -1
// Prettier does not like this one
// const shuffle = halloweenEmojis.sort(() => (Math.random() > 0.5)? 2 : -1);

// More concise sorting logic by subtracting 0.5 to get random postive and negative values
const shuffle = halloweenEmojis.sort(() => Math.random() - 0.5);

// Card Creation
for (let i = 0; i < halloweenEmojis.length; i++) {
  const cards = document.createElement("div");
  cards.classList = "emoji-cards";
  cards.innerHTML = shuffle[i];

  cards.onclick = function () {
    this.classList.add("card-turn");
    setTimeout(function () {
      if (document.querySelectorAll(".card-turn").length > 1) {
        if (
          document.querySelectorAll(".card-turn")[0].innerHTML ==
          document.querySelectorAll(".card-turn")[1].innerHTML
        ) {
          document
            .querySelectorAll(".card-turn")[0]
            .classList.add("card-match");
          document
            .querySelectorAll(".card-turn")[1]
            .classList.add("card-match");

          document
            .querySelectorAll(".card-turn")[1]
            .classList.remove("card-turn");
          document
            .querySelectorAll(".card-turn")[0]
            .classList.remove("card-turn");

          if (
            document.querySelectorAll(".card-match").length ==
            halloweenEmojis.length
          ) {
            alert("win");
          }
        } else {
          document
            .querySelectorAll(".card-turn")[1]
            .classList.remove("card-turn");
          document
            .querySelectorAll(".card-turn")[0]
            .classList.remove("card-turn");
        }
      }
    }, 500);
  };

  document.querySelector(".card-game").appendChild(cards);
}

// Add an event listener for the "Reset Game" button
resetBtn.addEventListener("click", () => {
  window.location.reload(); // Reload the page when the button is clicked
});
