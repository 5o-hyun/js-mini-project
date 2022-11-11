const text = [
  `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
  `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
  `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable`,
  `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
  `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
];
const inputBox = document.querySelector(".inputBox");
const generateBtn = document.querySelector(".generateBtn");
const resultBlank = document.querySelector(".result");
const copyBtn = document.querySelector(".copy");

// let randomStr = Math.random().toString(36).slice(2, 12);
// console.log(randomStr);

generateBtn.addEventListener("click", function () {
  const value = parseInt(inputBox.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value <= 0 || value > 9) {
    resultBlank.innerHTML = `<p class="resultDesc">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map((item) => {
        return `<p class="resultDesc">${item}</p>`;
      })
      .join("");
    resultBlank.innerHTML = tempText;
  }
});

function copyHandler() {
  const data = document.querySelectorAll(".resultDesc");
  let sendText = "";
  data.forEach((item) => {
    sendText += item.textContent;
  });
  let tempInput = document.createElement("input");
  tempInput.value = sendText;

  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

copyBtn.addEventListener("click", function () {
  copyHandler();
  alert("복사되었습니다.");
});
