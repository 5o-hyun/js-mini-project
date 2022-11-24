let allNumbers = [];
const randomNumbers = [];

// 전체숫자만들기
for (var i = 0; i < 45; i++) {
  allNumbers[i] = i + 1;
}

// 랜덤숫자 구하기
while (allNumbers.length > 0) {
  let num = Math.floor(Math.random() * allNumbers.length);
  let leftNum = allNumbers.splice(num, 1)[0];
  if (!randomNumbers.includes(leftNum)) {
    randomNumbers.push(leftNum);
  }
  if (randomNumbers.length > 6) {
    break;
  }
}

// 랜덤숫자 오름차순
randomNumbers.sort((a, b) => a - b);
console.log(randomNumbers);

// 랜덤숫자를 div요소만들어서 텍스트 부여
const body = document.querySelector("body");
const showBtn = document.querySelector(".btn");

function addTargetNumber() {
  const ballGroup = document.createElement("div");
  ballGroup.setAttribute("class", "container");
  randomNumbers.forEach((randomNum) => {
    const ball = document.createElement("div");
    ball.setAttribute("class", "ball");
    ball.innerHTML = randomNum;
    colorHandler(ball);
    ballGroup.appendChild(ball);
  });
  body.appendChild(ballGroup);
}
showBtn.addEventListener("click", addTargetNumber);

// 로또번호 색깔
const colorHandler = (item) => {
  const ballNumberText = item.textContent;

  if (ballNumberText < 10) {
    item.style.backgroundColor = "#f2b720";
  } else if (9 < ballNumberText && ballNumberText < 20) {
    item.style.backgroundColor = "#4072ac";
  } else if (19 < ballNumberText && ballNumberText < 30) {
    item.style.backgroundColor = "#de4c0e";
  } else if (29 < ballNumberText && ballNumberText < 40) {
    item.style.backgroundColor = "#9195a4";
  } else if (39 < ballNumberText && ballNumberText < 50) {
    item.style.backgroundColor = "#13be4b";
  }
};
