$(document).ready(function () {
  $(function () {
    const background = document.querySelector(".container");
    const changeText = document.querySelector(".contents span");
    const btn = document.querySelector(".button");

    const colors = [
      { id: 1, name: "red", color: "#ea052d" },
      { id: 2, name: "orange", color: "#ea7805" },
      { id: 3, name: "yellow", color: "#eac805" },
      { id: 4, name: "green", color: "#a1ea05" },
      { id: 5, name: "skyblue", color: "#05c1ea" },
      { id: 6, name: "blue", color: "#0545ea" },
      { id: 7, name: "violet", color: "#7c05ea" },
      { id: 8, name: "pink", color: "#ffc0cb" },
      { id: 9, name: "salmon", color: "#fa8072" },
    ];

    const clickHandler = () => {
      const randomNumber = Math.floor(Math.random() * colors.length);
      background.style.backgroundColor = colors[randomNumber].color;
      changeText.textContent = colors[randomNumber].name;
      changeText.style.color = colors[randomNumber].color;
    };

    btn.addEventListener("click", clickHandler);
  });
});
