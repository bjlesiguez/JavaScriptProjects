
//utilizing getElementsByClassName method
function Hello_World_Function() {
  var A = document.getElementsByClassName("Click");
  A[0].innerHTML = "The text has changed!";
}

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Create a Gradient
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// Draw a filled Rectangle
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);