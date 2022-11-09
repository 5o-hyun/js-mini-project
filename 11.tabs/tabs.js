const tabItems = [
  {
    id: 1,
    imgPath: "./images/image1.jpeg",
    category: "history",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
  {
    id: 2,
    imgPath: "./images/image2.jpeg",
    category: "vision",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 3,
    imgPath: "./images/image3.jpeg",
    category: "goals",
    desc: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
  },
];

const tabBtnG = document.querySelectorAll(".tabBtn");
const changeImg = document.querySelector(".changeImg");
const changeTitle = document.querySelector(".changeTitle");
const changeDesc = document.querySelector(".changeDesc");

tabBtnG.forEach((btn) => {
  btn.addEventListener("click", function () {
    for (let i = 0; i < btn.parentNode.children.length; i++) {
      btn.parentNode.children[i].classList.remove("active");
    }
    btn.classList.add("active");
    const categoryItem = tabItems.filter((item) => {
      if (btn.textContent == item.category) {
        return item;
      }
    });
    // console.log(categoryItem[0]);
    makingCategoryItems(categoryItem[0]);
  });
});

function makingCategoryItems(insertItem) {
  changeImg.setAttribute("src", insertItem.imgPath);
  changeTitle.textContent = insertItem.category;
  changeDesc.textContent = insertItem.desc;
}
