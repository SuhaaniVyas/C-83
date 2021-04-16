canvas = document.getElementById("ca");
ctx = canvas.getContext("2d");

var width= screen.width;
var height= screen.height;

if (width<900) {
    canvas.width= width-70;
    canvas.height= height-300;
    document.body.style.overflow= "hidden";
}
var startx, starty, endx, endy;
canvas.addEventListener("touchstart", MyTouchStart);
function MyTouchStart(e) {
  startx= e.touches[0].clientX-canvas.offsetLeft;
  starty= e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", MyTouchMove);
function MyTouchMove(e) {
    endx= e.touches[0].clientX-canvas.offsetLeft;
  endy= e.touches[0].clientY-canvas.offsetTop;
  ctx.beginPath();
  ctx.strokestyle= "blue";
  ctx.lineWidth= 1;
  ctx.moveTo(startx, starty);
  ctx.lineTo(endx, endy);
  ctx.stroke();
  startx=endx;
  starty=endy;
}