$(document).ready(function () {
  $(function () {
    const users = [
      {
        id: 1,
        img: "images/1.jpg",
        name: "susan smith",
        job: "web developer",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit.",
      },
      {
        id: 2,
        img: "images/2.jpg",
        name: "seung been",
        job: "web frontend developer",
        comment:
          "I will launch a TV restaurant service. But I don't watch TV. I don't even think about watching TV. I have no intention of watching TV in the future. I'm constantly developing right now, but I'm too sleepy. zzZ",
      },
      {
        id: 3,
        img: "images/3.jpg",
        name: "hyun duck",
        job: "web backend developer",
        comment:
          "My dog's name is Haru. Haru go to kindergarten. So I am tired every morning and evening. But Haru is so cute. Haru is my best friend. Will you be with me for the rest of my life, best friend?",
      },
      {
        id: 4,
        img: "images/4.jpg",
        name: "so hyun",
        job: "web publisher",
        comment:
          "I haven't studied at all lately. I have a very boring life. But recently, I have a field of study that I am interested in. I enjoy learning JavaScript. I will continue to study in the future. How long will my thoughts never change?",
      },
    ];

    const changeImg = document.querySelector(".imgBox img");
    const changeName = document.querySelector(".userName");
    const changeJob = document.querySelector(".userJob");
    const changeComment = document.querySelector(".userComment p");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const randomBtn = document.querySelector(".random");

    let currentItem = 0;
    currentHandler(currentItem);

    function currentHandler() {
      const currentReview = users[currentItem];
      changeImg.src = currentReview.img;
      changeName.textContent = currentReview.name;
      changeJob.textContent = currentReview.job;
      changeComment.textContent = currentReview.comment;
    }

    nextBtn.addEventListener("click", function () {
      currentItem++;
      if (currentItem > users.length - 1) {
        currentItem = 0;
      }
      currentHandler(currentItem);
    });

    prevBtn.addEventListener("click", function () {
      currentItem--;
      if (currentItem < 0) {
        currentItem = users.length - 1;
      }
      currentHandler(currentItem);
    });

    randomBtn.addEventListener("click", function () {
      const randomNumber = Math.floor(Math.random() * users.length);
      currentItem = randomNumber;
      currentHandler(currentItem);
    });
  });
});
