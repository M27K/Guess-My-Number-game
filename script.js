// "use strict";
//
// console.log(document.querySelector(".message").textContent);
//
// document.querySelector(".message").textContent = "Correct Ans Mayur!!!";
//
// document.querySelector(".number").textContent = 5;

//Event Handling
let secrateNumber = Math.trunc(Math.random() * 20) + 1;

let score = Number(document.querySelector(".score").textContent);
let highscore = 0;
// console.log(typeof score)

const displayMassage = function (msg) {
  document.querySelector(".message").textContent = msg;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // document.querySelector(".message").textContent = "Mayur"
  console.log(guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ Not a number";
    displayMassage("⛔ Not a number");
  } else if (guess != secrateNumber) {
    if (score > 0) {
      guess < secrateNumber
        ? displayMassage("📉 Too Low value")
        : displayMassage("📈 Too High");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Loose";
    }
  }

  //   //Guessd number is Low
  //   else if (guess < secrateNumber) {
  //     if (score > 0) {
  //       document.querySelector(".message").textContent = "📉 Too Low value";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You Loose";
  //     }
  //   }
  //
  //   //Guessed Number is High
  //   else if (guess > secrateNumber) {
  //     if (score > 0) {
  //       document.querySelector(".message").textContent = "📈 Too High";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You Loose";
  //     }
  //   }

  //Correct Number
  else if (guess == secrateNumber) {
    // document.querySelector(".message").textContent = "🥳🥳 Correct Anwser";
    displayMassage("🥳🥳 Correct Anwser");

    document.querySelector(".number").textContent = secrateNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (highscore < score) {
      document.querySelector(".highscore").textContent = score;
      highscore = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secrateNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start Guessing...";
  displayMassage("Start Guessing...");

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
