
function Button() {
	console.log("hello");
}
///  myGameArea.start();

function startGame() {
  var audio = new Audio('Audio/Ball.mp3');
  audio.play();
}
///while (true) {
	///var audio = new Audio('Audio/Ball.mp3');
	///audio.play();
///}


var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
}
