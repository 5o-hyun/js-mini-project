const data = [
  { id: 1, imgPath: "https://via.placeholder.com/800x300/F7A4A4/fff?text=1" },
  {
    id: 2,
    imgPath: "https://via.placeholder.com/800x300/FEBE8C/fff?text=2",
  },
  { id: 3, imgPath: "https://via.placeholder.com/800x300/FFFBC1/fff?text=3" },
  {
    id: 4,
    imgPath: "https://via.placeholder.com/800x300/B6E2A1/fff?text=4",
  },
];

const sliderContainer = document.querySelector(".sliderContainer");
const imgGroup = document.querySelector(".imgGroup");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const addImage = (item) => {
  const imgConponent = document.createElement("img");
  imgConponent.setAttribute("src", item.imgPath);
  imgGroup.appendChild(imgConponent);
};

data.map((item) => {
  addImage(item);
});

let currentIndex = 0;

prevBtn.addEventListener("click", function () {
  currentIndex -= 1;
  imgGroup.style.transform = "translateX(-" + currentIndex * 100 + "%)";
  showBtn();
});

nextBtn.addEventListener("click", function () {
  imgGroup.style.transform = "translateX(-" + (currentIndex + 1) * 100 + "%)";
  currentIndex += 1;
  showBtn();
});

prevBtn.style.display = "none";
function showBtn() {
  if (currentIndex === 0) {
    prevBtn.style.display = "none";
  } else if (currentIndex === data.length - 1) {
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  }
}
