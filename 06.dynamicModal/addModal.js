const body = document.getElementsByTagName("BODY")[0];

const addModal = (messageTitle, messageDesc) => {
  // console.log(messageTitle, messageDesc);
  const addmodalContainer = document.createElement("div");
  addmodalContainer.setAttribute("class", "modalContainer");
  const addmodalContents = document.createElement("div");
  addmodalContents.setAttribute("class", "contents");
  const addmodalTitle = document.createElement("div");
  addmodalTitle.setAttribute("class", "title");
  addmodalTitle.textContent = messageTitle;
  const addmodalDesc = document.createElement("div");
  addmodalDesc.setAttribute("class", "desc");
  addmodalDesc.textContent = messageDesc;
  const closeBtn = document.createElement("div");
  closeBtn.setAttribute("class", "closeBtn");
  closeBtn.textContent = "확인/닫기";
  addmodalContents.appendChild(addmodalTitle);
  addmodalContents.appendChild(addmodalDesc);
  addmodalContents.appendChild(closeBtn);
  addmodalContainer.appendChild(addmodalContents);
  body.appendChild(addmodalContainer);
  closeBtn.addEventListener("click", function () {
    closeModal();
  });
};

const closeModal = () => {
  const addmodalContainer = document.querySelector(".modalContainer");
  body.removeChild(addmodalContainer);
};
