const imgBox = document.querySelector(".imgBox");

let imgPositionX = {
  rock: "-220px",
  paper: "-490px",
  scissors: "36px",
};
let imgPositionY = {
  rock: "10px",
  paper: "10px",
  scissors: "30px",
};
let position = imgPositionX.paper;
let positionY = imgPositionY.paper;

let timeImgBox;
function timeImgBoxFn() {
  timeImgBox = setInterval(function () {
    if (position === imgPositionX.paper) {
      position = imgPositionX.scissors;
      positionY = imgPositionY.scissors;
    } else if (position === imgPositionX.rock) {
      position = imgPositionX.paper;
      positionY = imgPositionY.paper;
    } else {
      position = imgPositionX.rock;
      positionY = imgPositionY.rock;
    }
    imgBox.style.backgroundPositionX = position;
    imgBox.style.backgroundPositionY = positionY;
  }, 100);
}
timeImgBoxFn();

const btn = document.querySelectorAll(".btn");
const computerTotalScore = document.querySelector(".computerScore");
const userTotalScore = document.querySelector(".userScore");

let computerScore = 0;
let userScore = 0;

btn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    clearInterval(timeImgBox);
    setTimeout(function () {
      timeImgBoxFn();
    }, 1000);

    userFix = e.target.textContent;
    computerFix = imgBox.style.backgroundPosition;

    if (userFix === "rock") {
      if (computerFix === "-220px 10px") {
        console.log("주먹으로 비겼습니다.");
        computerScore;
        userScore;
      } else if (computerFix === "-490px 10px") {
        console.log("주먹으로 졌습니다.");
        computerScore += 1;
        userScore -= 1;
      } else if (computerFix === "36px 30px") {
        console.log("주먹으로 이겼습니다.");
        computerScore -= 1;
        userScore += 1;
      }
    } else if (userFix === "paper") {
      if (computerFix === "-220px 10px") {
        console.log("보로 이겼습니다.");
        computerScore -= 1;
        userScore += 1;
      } else if (computerFix === "-490px 10px") {
        console.log("보로 비겼습니다.");
        computerScore;
        userScore;
      } else if (computerFix === "36px 30px") {
        console.log("보로 졌습니다.");
        computerScore += 1;
        userScore -= 1;
      }
    } else if (userFix === "scissors") {
      if (computerFix === "-220px 10px") {
        console.log("가위로 졌습니다.");
        computerScore += 1;
        userScore -= 1;
      } else if (computerFix === "-490px 10px") {
        console.log("가위로 이겼습니다.");
        computerScore -= 1;
        userScore += 1;
      } else if (computerFix === "36px 30px") {
        console.log("가위로 비겼습니다.");
        computerScore;
        userScore;
      }
    }
    computerTotalScore.textContent = computerScore;
    userTotalScore.textContent = userScore;
  });
});
