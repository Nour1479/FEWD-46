var form = document.querySelector("#new-item-form");
var formInput = document.querySelector("#new-item-input");
var button = document.querySelector("button");
var body = document.querySelector("body");
var unorderList = document.querySelector("#todo-list");

function formSubmitted(event) {
  event.preventDefault();
  var listItem = document.createElement("li");
  var checkbox = document.createElement("input");
  var span = document.createElement("span");
  var label = document.createElement("label");

  //listItem.setAttribute("id","todo-list li");
  checkbox.setAttribute("type","checkbox")
  span.textContent = formInput.value;

  unorderList.appendChild(checkbox);
  unorderList.appendChild(label);
  unorderList.appendChild(span);
  unorderList.appendChild(listItem);
  form.reset();
}

form.addEventListener("submit", formSubmitted);
