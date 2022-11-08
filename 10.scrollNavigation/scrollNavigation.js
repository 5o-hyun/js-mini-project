const header = document.querySelector(".header");
const btn = document.querySelectorAll(".link");
const main = document.querySelector("main");
const navBtn = document.querySelector(".nav-toggle");
const linkGroup = document.querySelector(".linkGroup");

const contentsItems = [
  {
    id: 1,
    title: "scroll project",
    contents: "ss",
    button: "reservation class",
  },
  {
    id: 2,
    title: "about bakery",
    contents: "ss",
    button: "go to about story",
  },
  {
    id: 3,
    title: "sell product",
    contents: "ss",
    button: "buy product",
  },
  {
    id: 4,
    title: "our class list",
    contents: "ss",
    button: "reservation class",
  },
];

function contentsItemsInnerWidth() {
  let contents = contentsItems.map((item) => {
    return `<section id="${item.id}">
      <article class="textContainer">
        <h1>${item.title}</h1>
        <p>
          ${item.contents}
        </p>
        <button class="listBtn">${item.button}</button>
      </article>
    </section>`;
  });
  contents = contents.join("");
  main.innerHTML = contents;
}
contentsItemsInnerWidth();

// 스크롤시 헤더 따라오게
window.addEventListener("scroll", function () {
  const windowHeight = window.pageYOffset;
  if (windowHeight > 150) {
    header.style.position = "fixed";
    header.style.backgroundColor = "#fff";
  } else {
    header.style.position = "absolute";
    header.style.backgroundColor = "transparent";
  }
});

// 버튼 클릭시 해당페이지로 이동
btn.forEach((btn) =>
  btn.addEventListener("click", function () {
    const scrollPosition = document.getElementById(
      this.dataset.target
    ).offsetTop;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  })
);

// 첫페이지에 '클래스예약' 특정버튼 클릭시, 클래스예약부분으로 이동
document.querySelector(".listBtn").addEventListener("click", function () {
  const reservationSection = document.getElementById(
    btn[3].dataset.target
  ).offsetTop;
  window.scrollTo({ top: reservationSection, behavior: "smooth" });
});

// 모바일시 header
navBtn.addEventListener("click", function () {
  linkGroup.classList.toggle("hidden");
});
