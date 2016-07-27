//Create variable for form and add event listener
var form = document.querySelector("form");
form.addEventListener("submit", lookUpMovie);
//works till here

//Create variables for inputted value and append it to base URL
function lookUpMovie(event){
  event.preventDefault()
  var input = document.querySelector("#new-item-input");
  var url = ("http://omdbapi.com/?s=") + input.value;
  console.log("works till here");
  ;
//I have no idea why this is not working

//Calls get function with arguments of url variable  that we jusr defined and showInfo function
  get(url, showMovie);
}

//Get function executing HTTP request
function get(url, callback) {
  var request = new XMLHttpRequest();

  request.open("GET", url, true);

  request.addEventListener("readystatechange", handleReadyStateChange)

  function handleReadyStateChange() {
    if (request.readyState == 4 && request.status == 200) {
      callback(request.responseText);
    }
  };

  request.send();
}
//End get function
