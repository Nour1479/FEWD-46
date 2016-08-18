window.onload = function(){
    score=0;
    $(".meter>span").css({"width": score+"%"});
    var rain_count=0;
    startRain();
    $("#water").css({"bottom":"-110px"});
};


function createFox(event){
  $("#fox").removeClass("fox-out");
  $("#fox").addClass("fox-jump");
}

function removeFox(event){
  $("#fox").addClass("fox-out");
}

function createTrees(event){
  $("#trees1").removeClass("trees-out");
}

function removeTree(event){
    $("#trees1").addClass("trees-out");
  // })
}

function createMoreTrees(event){
  $("#trees2").removeClass("trees-out");
}

function removeMoreTrees(event){
    $("#trees2").addClass("trees-out");
  }


function createEvenMoreTrees(event){
    $("#trees3").removeClass("trees-out");
}

function removeEvenMoreTrees(event){
    $("#trees3").addClass("trees-out");
}


function flyingEagle(event){
  $("#eagle").removeClass("eagle-out");
  $("#eagle").removeClass("eagle-none");
  $("#eagle").addClass("eagle-flying");
}

function singleEagle(event){
  $("#eagle").removeClass("eagle-flying");
  $("#eagle").removeClass("eagle-none");
  $("#eagle").addClass("eagle-out")
}

function createEagle(event){
  $("#eagle-creation").html('<img id="eagle" src="images/eagle.png" class="eagle-out">');
}

function removeEagle(event){
  $("#eagle").fadeOut(1500,function(){
    $("#eagle").removeClass();
  })
}

//RAIN

//Variable sets sky color
// var skyColor = "#7dd3e2";
var skyColor = "#aabe7e";


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
var rain_count;
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
// This function can also be used to stop rain falling, but is a little glitchy
// function stopRain() {
//   clearInterval(generateInterval);
// }

//End of RAIN

//Change nQuestions according to the number of questions
var nQuestions = 5;
var score;
var percent;
var progressBar = document.querySelector(".meter");
minScore=45;
maxScore=150;

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

  if(score>=10){
      skyColor = "#7dd3e2";
  } else {
      skyColor = "#aabe7e";
  }

  if(score>=30){
    createTrees();
  } else {
    removeTree();
  }

  if(score>=50){
    createMoreTrees();
  } else {
    removeMoreTrees();
  }

  if(score>=50){
    createEagle();
  } else {
    removeEagle();
  }

  if (score>=70){
    createEvenMoreTrees();
  } else{
    removeEvenMoreTrees();
  }

  if (score>=90){
    rain_count=100;
  } else if (score>=70){
    rain_count=60;
  } else if (score>=50){
    rain_count=30;
  } else{
    rain_count=0;
  }

  if (score>=75){
    createFox();
  } else{
    removeFox();
  }

  if(score>=70){
    $("#water").css({"bottom":"-190px"});
  } else if (score>=50){
    $("#water").css({"bottom":"-160px"});
  } else if (score>=30){
    $("#water").css({"bottom":"-140px"});
  } else if (score>=10){
    $("#water").css({"bottom":"-110px"});
  }

    if (score>=70){
      flyingEagle();
    } else if (score>=40){
      singleEagle();
    }
})



//OLD CODE
// function createTrees(event){
//   $("#trees1-creation").html('<img id="trees1" src="images/tree.png" class="trees-visible">');
// }

//Raising water level
// var waterHeight = -185;
//How do I set ths to the style and not just the arbitrary number?
// var waterImg = document.getElementById("water");
// function raiseWater(event){
//   waterHeight = waterHeight+5;
//   $("#water").css({"bottom":waterHeight+"px"});
// }
//
// function lowerWater(event){
//   waterHeight = waterHeight-5;
//   $("#water").css({"bottom":waterHeight+"px"});
//   }

//Creating reactive divs and content
//These don't work because of the underlying mechanism of the rain. Figure this out later or another method to get smoot thansitions
// function sadSky(){
//   $("#canvas").addClass("bleak");
//   $("#canvas").removeClass("hopeful");
// }
//
// function happySky(){
//   $("#canvas").removeClass("bleak");
//   $("#canvas").addClass("hopeful");
// }
