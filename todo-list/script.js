//Define all variables
var form = document.querySelector("#new-item-form");
var formInput = document.querySelector("#new-item-input");
var unorderList = document.querySelector("#todo-list");

//Create each piece of the new line creates
function formSubmitted(event) {
  event.preventDefault();
  var listItem = document.createElement("li");
  var checkbox = document.createElement("input");
  var span = document.createElement("span");
  var label = document.createElement("label");

//Define the checkbox variable as a checkbox
  checkbox.setAttribute("type","checkbox")
//Set the content of the span created as the data inputted
  span.textContent = formInput.value;

//Build the new line - append the checkbox and span to the label, and the label to the list item and subsequently the list item to the unordered list (work inside out)
  label.appendChild(checkbox);
  label.appendChild(span);
  listItem.appendChild(label);
  unorderList.appendChild(listItem);

  unorderList.innerHTML = localStorage.getItem("listHTML");

  form.reset();
}
//Add the event listener to the button
form.addEventListener("submit", formSubmitted);

localStorage.setItem("listHTML", unorderedListItem);

//When the page loadsn(reload the page to its original state)
//  -Look in the localStorage to see if the HTML is there
//  -IF the HTML is there
//    -Set the HTML on the list to the HTML in localStorage
//    el.innerHTML = ....

//WHEN the user adds an item
//  -Do all the normal stuff
//  -Once the item is added to the list
//  -Save the HTML of the list to localStorage
//  localStorage.setItem("...",el.innerHTML)
