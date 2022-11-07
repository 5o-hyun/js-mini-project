const menu = [
  {
    id: 1,
    category: "breakfast",
    imgPath: "./images/image1.jpeg",
    title: "butter pancakes",
    price: "$15.99",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
  },
  {
    id: 2,
    category: "shakes",
    imgPath: "./images/image2.jpeg",
    title: "strawberry latte",
    price: "$6.50",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making",
  },
  {
    id: 3,
    category: "dinner",
    imgPath: "./images/image3.jpeg",
    title: "hamburger set",
    price: "$18.00",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
  },
  {
    id: 4,
    category: "dinner",
    imgPath: "./images/image4.jpeg",
    title: "steak",
    price: "$24.54",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  },
  {
    id: 5,
    category: "lunch",
    imgPath: "./images/image5.jpeg",
    title: "pasta",
    price: "$15.04",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  },
  {
    id: 6,
    category: "shakes",
    imgPath: "./images/image6.jpeg",
    title: "juice",
    price: "$6.82",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  },
];

window.onload = function () {
  displayMenuItem(menu);
};

const gallery = document.querySelector(".gallery");

function displayMenuItem(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menuWrapper">
          <div class="menuImg"><img src="${item.imgPath}" alt="image"></div>
          <div class="menuContents">
            <div class="top">
              <p class="title">${item.title}</p>
              <p class="price">${item.price}</p>
            </div>
            <div class="bottom">
            ${item.description}
            </div>
          </div>
        </div>`;
  });
  displayMenu = displayMenu.join("");
  gallery.innerHTML = displayMenu;
}

const categoryBtns = document.querySelectorAll(".category");
categoryBtns[0].classList.add("active"); /* 처음 버튼 active */

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    /* 버튼 active 제거및추가 */
    for (let i = 0; i < btn.parentNode.children.length; i++) {
      btn.parentNode.children[i].classList.remove("active");
    }
    btn.classList.add("active");

    /* 클릭한카테고리랑 일치하는객체를, 새로운배열로반환*/
    const category = e.target.dataset.id;
    const menuCategory = menu.filter((menu) => {
      if (menu.category === category) {
        return menu;
      }
    });
    // console.log(menuCategory);

    /* all선택시 객체전체넣기, 개별메뉴선택시 새로맞춘배열객체넣기 */
    if (category === "all") {
      displayMenuItem(menu);
    } else {
      displayMenuItem(menuCategory);
    }
  });
});
