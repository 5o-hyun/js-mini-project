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

// 자동으로 그림돌아가게
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

// computer와 user의 점수
let computerScore = 0;
let userScore = 0;

btn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // 클릭시 돌아가는 그림 멈췄다가,
    clearInterval(timeImgBox);
    // 1초후 다시실행
    setTimeout(function () {
      timeImgBoxFn();
    }, 1000);

    // user가 클릭한버튼과, computer의 이미지포지션값을 비교하여  => 이긴것과 진것을 구분
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
    // 계산한값을 computer와 user에게 부여
    computerTotalScore.textContent = computerScore;
    userTotalScore.textContent = userScore;
  });
});
