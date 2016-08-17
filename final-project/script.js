//Creating reactive divs and content
function createFox(event){
  $("#fox-creation").html('<img id="fox" src="images/fox.png">');
}

function removeFox(event){
  $("#fox").fadeOut(2000, function(){
    $("fox").remove();
  })
}

function createTrees(event){
  $("#trees1-creation").html('<img id="trees1" src="images/tree.png">');
}

function removeTree(event){
  $("#trees1").fadeOut(1500,function(){
    $("#trees1").remove();
  })
}

function createMoreTrees(event){
  $("#trees2-creation").html('<img id="trees2" src="images/more-trees.png">');
}

function removeMoreTrees(event){
  $("#trees2").fadeOut(1500, function(){
    $("#trees2").remove();
  })
}

//Raising water level
var waterHeight = -180; //How do I set ths to the style and not just the arbitrary number
var waterImg = document.getElementById("water");
function raiseWater(event){
  waterHeight = waterHeight+5;
  $("#water").css({"bottom":waterHeight+"px"});
}

function lowerWater(event){
  waterHeight = waterHeight-5;
  $("#water").css({"bottom":waterHeight+"px"});
  }

//RAIN

//Variable sets sky color
var skyColor = "#7dd3e2";

var canvas = document.getElementById("canvas");//Canvas
var ctx = canvas.getContext("2d");//It provides the 2D rendering context for the drawing surface

color = "#01235d"; //rain color

var height = window.innerHeight;
//height of the browser window's viewport
var width = window.innerWidth;
//width of the browser window's viewport

//Setting variables for width and height of canvas
canvas.width = width;
canvas.height = height;

//Setting variable names for rain count and drops (which is an array)
var rain_count = 50;
var rain_drops = [];

//This function controls the number of raindrops, increasing them till they match the rain count set
var generate = function() {
    for (var i = 0; i < rain_count; i++) {
        rain_drops.push(new rain());
    }
}

//This function conrols the behavior of the rain drops - speed, location, acceleration
function rain() {
    this.speed = {
        y: 2.5 + Math.random() * 5
    }

    this.location = {
        x: 0 + Math.random() * width,
        y: -100 + Math.random() * 100
    }

    this.accel = {
        y: 1.5 + Math.random() * 3
    }
}

var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = skyColor;//Background color
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    for (var i = 0; i < rain_drops.length; i++) {
        var r = rain_drops[i];

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(r.location.x, r.location.y, 0.5, 75);
        ctx.fill();

        r.speed.y += r.accel.y;

        r.location.y += r.speed.y;
    }
}

var generateInterval;

function startRain() {
  generateInterval = setInterval(generate, 100);
  setInterval(draw, 30);
}

function stopRain() {
  clearInterval(generateInterval);
}

//End of RAIN

//Change nQuestions according to the number of questions
var nQuestions = 5;
var score;
var percent;
var progressBar = document.querySelector(".meter");
minScore=50;
maxScore=180;

$("input").on("click",function(){
  updateScore();
  displayScore();
  percentageWidth(score);
})

//This function updates the score in the HTML
function displayScore(){
  document.getElementById("myresults").innerHTML = "" + score +"/100";//Replaced score with percent
}

//This function creates a starter variable, newScore. It loops over as long as i<the number of questions
function updateScore() {
  var newScore = 0;
  for (var i=0; i<nQuestions; i++) {
    newScore += getCheckedValue("question"+i);//New score is increase by value returned by the function
  }

  //Update score for each iteration
  score = Math.round(((newScore - minScore) / (maxScore - minScore)) * 100);
  return score;
}

//'RadioName' is just question0, question1 etc
//If the choice is checked,
function getCheckedValue(radioName){
  var radios = document.getElementsByName( radioName ); // Get radio group by-name i.e question0, question1 etc
  for (var y=0; y<radios.length; y++) {
    if(radios[y].checked) {
      return parseInt(radios[y].value);
    }
  }
}

function percentageWidth(score){
  var statusBarValue = document.querySelector("progress-bar");
  percent = (score / nQuestions)*100;
  $(".meter>span").css({"width": score+"%"});
}
// End of calculation segment



//Setting what appears and disappears
$("input").on("click",function(){
    if (score>=80) {
        startRain();
    } else {
        stopRain();
    }

    if (score>=70){
      createFox();
    } else{
      removeFox();
    }

    if (score>=60){
      createMoreTrees();
    } else {
      removeMoreTrees();
    }

    if(score>=50){
      createTrees();
    } else {
      removeTree();
    }

    if(score>=80){
      $("#water").css({"bottom":"-175px"});
    } else if (score>=60){
      $("#water").css({"bottom":"-170px"});
    } else {
      $("#water").css({"bottom":"-165px"});  
    }
})
