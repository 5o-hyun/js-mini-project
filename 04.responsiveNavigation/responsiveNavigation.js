$(document).ready(function () {
  $(function () {
    const navigationBar = document.querySelector(".nav-bar");
    const list = document.querySelector(".list");

    function responsiveHandler() {
      list.classList.toggle("mo");

      if (list.classList.contains("mo")) {
        navigationBar.firstElementChild.style.transform = "rotate(90deg)";
      } else {
        navigationBar.firstElementChild.style.transform = "rotate(0deg)";
      }
    }

    navigationBar.addEventListener("click", responsiveHandler);
  });
});
