$("form").on("submit",function lookUpMovie(event){
  event.preventDefault()
  var url = ("http://omdbapi.com/?s=") + $("new-item-input".value);
  $("ul").textContent = "";
  get(url, function showMovieInfo(results){
    JSON.parse(results).Search.forEach(function(movie){
      console.log("so far so good");
    })
  })
})



//WHEN the value is input and the form is submitted
//The value inpit is appended to the URL, and the get function is triggered executing an HTTP requst
//WHEN the data is received as JSON data, it is parsed
//The data is in array format
//A forEach function is thus necessary
//'spaces' are necessary for each part of the data
//The content of each element created is then assigned from the array of JSON data
//Then everything gets appended
//function showMovieInfo(results){
//  console.log("oh hay");
//}






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
