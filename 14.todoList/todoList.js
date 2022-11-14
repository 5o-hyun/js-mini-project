const inputText = document.querySelector(".inputText");
const addBtn = document.querySelector(".submit");
const addWrapper = document.querySelector(".textWrapper");

function addTodo() {
  const result = document.createElement("li");
  result.setAttribute("class", "list");
  const todoName = document.createElement("p");
  todoName.setAttribute("class", "name");
  todoName.textContent = inputText.value;
  const todobtnG = document.createElement("div");
  todobtnG.setAttribute("class", "btnG");
  const todoCheckBox = document.createElement("input");
  todoCheckBox.setAttribute("type", "checkbox");
  todoCheckBox.setAttribute("id", "checkbox");
  const todoDeleteBtn = document.createElement("button");
  todoDeleteBtn.setAttribute("class", "delete");
  const todoDeleteIcon = document.createElement("img");
  todoDeleteIcon.setAttribute("src", "./images/trash.svg");
  todoDeleteBtn.appendChild(todoDeleteIcon);
  todobtnG.appendChild(todoCheckBox);
  todobtnG.appendChild(todoDeleteBtn);
  result.appendChild(todoName);
  result.appendChild(todobtnG);
  addWrapper.appendChild(result);
  inputText.value = "";
  todoCheckBox.addEventListener("change", todoStyle);
  todoDeleteBtn.addEventListener("click", todoDelete);
}

addBtn.addEventListener("click", addTodo);

const checkbox = document.getElementById("checkbox");
const deleteBtn = document.querySelector(".delete");
const listGroup = document.querySelector(".textWrapper");

const todoStyle = (e) => {
  const checked = e.target.checked;
  const nameText = e.target.parentNode.parentNode.firstElementChild;
  if (checked == true) {
    nameText.style.color = "red";
    nameText.style.textDecoration = "line-through";
  } else {
    nameText.style.color = "black";
    nameText.style.textDecoration = "none";
  }
};

const todoDelete = (e) => {
  const deleteLine = e.target.parentNode.parentNode.parentNode;
  listGroup.removeChild(deleteLine);
};

const clearListBtn = document.querySelector(".clearList");
clearListBtn.addEventListener("click", function (e) {
  const lists = document.querySelectorAll(".list");
  console.log(listGroup, lists);
  listGroup.removeChild(lists);
});
