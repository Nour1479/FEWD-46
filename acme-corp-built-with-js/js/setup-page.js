var body = document.querySelector("body");

// Create the <header> and append it to the body...
var header = document.createElement("header");
body.appendChild(header);

var a = document.createElement("a");
a.setAttribute("href", "index.html");
header.appendChild(a);

var img = document.createElement("img");
img.setAttribute("src", "images/acme-corp");
a.appendChild(img);

var nav = document.createElement("nav");
header.appendChild(nav);

var ol = document.createElement("ol");
nav.appendChild(ol);

var li1 = document.createElement("li");
ol.appendChild(li);

var li2 = document.createElement("li");
ol.appendChild(li);

var main = document.createElement("main");
body.appendChild(main);

var h1 = document.createElement("h1");
main.appendChild(h1);

var p = document.createElement("p");
main.appendChild(p);
p.textContent = "Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla
pariatur.";






// You do the rest...
