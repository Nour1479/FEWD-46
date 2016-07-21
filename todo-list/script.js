var form = document.querySelector("#new-item-form");
var formInput = document.querySelector("#new-item-input");
var unorderList = document.querySelector("#todo-list");

function formSubmitted(event) {
  event.preventDefault();
  var listItem = document.createElement("li");
  var checkbox = document.createElement("input");
  var span = document.createElement("span");
  var label = document.createElement("label");

  checkbox.setAttribute("type","checkbox")
  span.textContent = formInput.value;

  label.appendChild(checkbox);
  label.appendChild(span);
  listItem.appendChild(label);
  unorderList.appendChild(listItem);

  form.reset();
  }

form.addEventListener("submit", formSubmitted);
