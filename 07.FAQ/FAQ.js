const wrapper = document.querySelector(".wrapper");

const object = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    question: "consectetur adipiscing elit, sed do eiusmod?",
    answer:
      "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    question: "eiusmod tempor incididunt ut labor?",
    answer:
      "eiusmod tempor incididunt ut laboreiusmod tempor incididunt ut laboreiusmod tempor incididunt ut labor",
  },
];
const option = () => {
  object.map((item) => {
    let list = "";
    list += '<div class="contents">';
    list += '<div class="top">';
    list += '<p class="question">' + item.question + "</p>";
    list += '<button class="btn">';
    list += '<img src="./images/plus-square.svg" alt="" />';
    list += "</button>";
    list += "</div>";
    list += '<div class="bottom">' + item.answer + "</div>";
    list += "</div>";
    wrapper.innerHTML += list;
  });
};
option();

const btnG = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".contents");

btnG.forEach((item, index) =>
  item.addEventListener("click", function () {
    contents[index].classList.toggle("show");

    if (contents[index].classList.contains("show")) {
      item.firstElementChild.setAttribute("src", "./images/minus-square.svg");
    } else {
      item.firstElementChild.setAttribute("src", "./images/plus-square.svg");
    }
  })
);
