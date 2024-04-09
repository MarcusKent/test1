var topPosition = 100;
var leftPosition = 100;

var intevalId = setInterval(ballMove, 100);
var ball = document.getElementById("ball");
ball.style.position = "absolute";

// Soccer Ball moves by itself
function ballMove() {
  ball.style.left = leftPosition + "px";
  ball.style.top = topPosition + "px";

  topPosition += 5;
  leftPosition += 20;

  if (leftPosition >= window.innerWidth - 100) {
    topPosition = 100;
    leftPosition = 200;
  }
}
