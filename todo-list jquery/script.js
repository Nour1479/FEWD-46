//When you submit the form, it sets off the function that will create the line hat appears
$("#new-item-form").on("submit", formSubmitted);

function addListItem(listItemText) {
//Create a lit item and append it to the todo list
  var listItem = $("<li>").appendTo("#todo-list");
//Create a label and append it to the list item
  var label = $("<label>").appendTo(listItem);
//Create the input and define it as a checkbox, then append it to the label
  $("<input>").attr("type", "checkbox").appendTo(label);
//Create the span, then take the text content of the list item and append that to the label
  $("<span>").text(listItemText.trim()).appendTo(label);
}

function formSubmitted(event) {
  event.preventDefault();
//Splits the inputs at the commas then call function to add them as a list item
  $("#new-item-input").val().split(",").forEach(addListItem);
}
