$("#new-item-form").on("submit", formSubmitted);

function addListItem(listItemText) {
  var listItem = $("<li>").appendTo("#todo-list");
  var label = $("<label>").appendTo(listItem);
  $("<input>").attr("type", "checkbox").appendTo(label);
  $("<span>").text(listItemText.trim()).appendTo(label);
}

function formSubmitted(event) {
  event.preventDefault();

  $("#new-item-input").val().split(",").forEach(addListItem);
}
