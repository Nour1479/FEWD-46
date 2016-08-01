//Create variable for form and add event listener
var form = document.querySelector("form");
var ul = document.querySelector("ul");
form.addEventListener("submit", lookUpMovie);

//Create variables for inputted value and append it to base URL
function lookUpMovie(event){
  event.preventDefault()
  var input = document.querySelector("#new-item-input");
  var url = ("http://omdbapi.com/?s=") + input.value;

  ul.textContent="";
  get(url, showMovieInfo);
}

function showMovieInfo(results){

//Assign variable for all parsed JSON data to turn it into an object
  var movieResults = JSON.parse(results);
  var moviesArray = movieResults.Search;
  moviesArray.forEach(function(movie) {
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    li1.id = "li1";
    var div = document.createElement("div");
    var href = document.createElement("a");
    li1.textContent = movie.Title;
    li2.textContent = movie.Year;
    href.setAttribute = ("http://omdbapi.com/?s=")+movie.Title

    ul.appendChild(div);
    div.appendChild(li1)
    div.appendChild(li2)
  })
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
