window.onload = function () {
  const navToggleBtn = document.querySelector(".navToggleBtn");
  const nav = document.querySelector(".navigation");
  const closeBtn = document.querySelector(".closeBtn");

  function svgRotateHandeler() {
    if (nav.classList.contains("hidden") == true) {
      navToggleBtn.firstElementChild.style.transform = "rotate(0deg)";
    } else {
      navToggleBtn.firstElementChild.style.transform = "rotate(90deg)";
    }
  }

  navToggleBtn.addEventListener("click", function () {
    nav.classList.toggle("hidden");
    svgRotateHandeler();
  });

  closeBtn.addEventListener("click", function () {
    nav.classList.add("hidden");
    svgRotateHandeler();
  });
};
