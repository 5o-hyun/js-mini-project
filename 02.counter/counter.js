$(document).ready(function () {
  $(function () {
    const count = document.querySelector(".count");
    const decrease = document.querySelector(".decrease");
    const reset = document.querySelector(".reset");
    const increase = document.querySelector(".increase");

    decrease.addEventListener("click", function () {
      let num = count.textContent;
      num = Number(num - 1);
      count.textContent = num;
      colorChange();
    });
    increase.addEventListener("click", function () {
      let num = count.textContent;
      num = Number(num) + 1;
      count.textContent = num;
      colorChange();
    });
    reset.addEventListener("click", function () {
      count.textContent = 0;
      colorChange();
    });

    function colorChange() {
      if (Number(count.textContent) < 0) {
        count.style.color = "red";
      } else if (Number(count.textContent) > 0) {
        count.style.color = "green";
      } else if (Number(count.textContent) == 0) {
        count.style.color = "#000";
      }
    }
  });
});
