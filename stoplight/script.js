//Buttons
var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");

var stopLightRed = document.getElementById("stop-light-stop");
var stopLightYellow = document.getElementById("stop-light-slow");
var stopLightGreen = document.getElementById("stop-light-go");
var stopLightFlash;

stopButton.addEventListener("click",stopLightStop);
slowButton.addEventListener("click",stopLightSlow);
goButton.addEventListener("click",stopLightGo);
cautionButton.addEventListener("click",stopLightCaution);

function stopLightStop(event) {
  event.preventDefault();
  stopLightRed.classList.toggle("stoplight-stop");
  stopLightYellow.classList.remove("stoplight-slow");
  stopLightGreen.classList.remove("stoplight-go");
  clearInterval(stopLightFlash);
}

function stopLightSlow(event) {
  stopLightRed.classList.remove("stoplight-stop");
  stopLightYellow.classList.toggle("stoplight-slow");
  stopLightGreen.classList.remove("stoplight-go");
  clearInterval(stopLightFlash);
}

function stopLightGo(event) {
  event.preventDefault();
  stopLightRed.classList.remove("stoplight-stop");
  stopLightYellow.classList.remove("stoplight-slow");
  stopLightGreen.classList.toggle("stoplight-go");
  clearInterval(stopLightFlash);
}

function stopLightFlashing(event){
  stopLightRed.classList.remove("stoplight-stop");
  stopLightYellow.classList.toggle("stoplight-slow");
  stopLightGreen.classList.remove("stoplight-go");
}

function stopLightCaution(event) {
  stopLightFlash = setInterval(stopLightFlashing,1000);
}
