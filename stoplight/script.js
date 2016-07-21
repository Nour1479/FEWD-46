//Buttons
var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");

//Assign variables to relevant div to be associated with each button
var stopLightRed = document.getElementById("stop-light-stop");
var stopLightYellow = document.getElementById("stop-light-slow");
var stopLightGreen = document.getElementById("stop-light-go");
var stopLightFlash;

//Add event listeners to each button calling associated funtion
stopButton.addEventListener("click",stopLightStop);
slowButton.addEventListener("click",stopLightSlow);
goButton.addEventListener("click",stopLightGo);
cautionButton.addEventListener("click",stopLightCaution);

//Red-light function: add's red-colored class to top light with 'toggle' on top div and removes the rest. Clears flashing light if running with clearInterval
function stopLightStop(event) {
  event.preventDefault();
  stopLightRed.classList.toggle("stoplight-stop");
  stopLightYellow.classList.remove("stoplight-slow");
  stopLightGreen.classList.remove("stoplight-go");
  clearInterval(stopLightFlash);
}

//Yellow-light function: add's yellow-colored class to middle light with 'toggle' on middle div and removes the rest. Clears flashing light if running with clearInterval, since these reman 2 seperate functions
function stopLightSlow(event) {
  event.preventDefault();
  stopLightRed.classList.remove("stoplight-stop");
  stopLightYellow.classList.toggle("stoplight-slow");
  stopLightGreen.classList.remove("stoplight-go");
  clearInterval(stopLightFlash);
}

//Green-light function: add's green-colored class to bottom light with 'toggle' on bottom div and removes the rest. Clears flashing light if running with clearInterval
function stopLightGo(event) {
  event.preventDefault();
  stopLightRed.classList.remove("stoplight-stop");
  stopLightYellow.classList.remove("stoplight-slow");
  stopLightGreen.classList.toggle("stoplight-go");
  clearInterval(stopLightFlash);
}

//Step 1 of creating flashing light. This is the function that will have an interval assigned to it at the next stage to create flashing effect (that function will get called ever second). It is very similar to the stopLightSlow function(in fact that can be used), but we assign it seperately so that a) We can clear the interval for stopLightSlow so the yellow circle can be shown without flashing and b) There is a specific function that doesn't have preventDefault for the purpose of this effect
function stopLightFlashing(event){
  stopLightRed.classList.remove("stoplight-stop");
  stopLightYellow.classList.toggle("stoplight-slow");
  stopLightGreen.classList.remove("stoplight-go");
}

//Step 2 of creating flashing light. This stopLightCaution function assigns an interval to  an empty variable we created early on - stopLightFlash - to the stopLightFlashing function running every second
function stopLightCaution(event) {
  stopLightFlash = setInterval(stopLightFlashing,1000);
}
