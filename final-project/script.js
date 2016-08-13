var skyColor = "#7dd3e2";

//Tester for creating divs and content
$("#mybutton").on("click",function(event){
  $("#content-creation").html('<img id="fox" src="images/fox.png">')
});


//RAIN
var canvas = document.getElementById("canvas");//Canvas
var ctx = canvas.getContext("2d");//It provides the 2D rendering context for the drawing surface
color = "#01235d"; //randomColor();

var height = window.innerHeight;
//height of the browser window's viewport
var width = window.innerWidth;
//width of the browser window's viewport

//Setting variables for width and height of canvas
canvas.width = width;
canvas.height = height;

//Setting variable names for rain count and drops (which is an array)
var rain_count = 100;
var rain_drops = [];

//Whats calling this?
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
