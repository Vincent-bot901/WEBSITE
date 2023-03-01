// Set up the canvas 
var canvas = document.getElementById("game-canvas"); 
var ctx = canvas.getContext("2d"); 
ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);


// Variables for Circle position 
var xPos = 100; 
var yPos = 200; 


// speed

var speed = 20
var SpeedMin = 400

// Draw the stick figure 
function drawCircle() { 
  ctx.beginPath();
  ctx.arc(xPos, yPos, 20, 0, 2 * Math.PI, false); 
  ctx.stroke(); 
}  

// Variables for enemy Circle position 

var fPos = (Math.random() * 400); 
var gPos = (Math.random() * 500); 

function drawenemyCircle() { 
  ctx.beginPath();
  ctx.arc(fPos, gPos, 20, 0, 2 * Math.PI, false); 
  ctx.stroke(); 
}  

var x = 20;

var y = 20;

var score = 0;

// Draw the obstacle 
function moveEnemy() { 
  fPos += x
  gPos += y
  if (fPos >= 500) {
   x = Math.random() * -1* speed

  }
  if (fPos <= -20) {
     x = Math.random() * speed
  }
  if (gPos >= 500) {
   y = Math.random() * -1 * speed
  }
  if (gPos <= -0) {
   y = Math.random() * speed
  }
} 

function COLL() { 
  let dx = fPos - xPos;

  let dy = gPos - yPos;

  let distance = Math.sqrt(dx * dx + dy * dy); 

  let sumR = 30;

  if ( distance < sumR || distance === sumR ){
     console.log("smashed IT");
     DEAD()}

  if (distance > sumR || distance != sumR ) {
    score++;
    const element = document.getElementById("id01");
    element.innerHTML = score;

  }

  if (score > SpeedMin) {
    speed += 30;
    SpeedMin *= 2;
    Num = Math.random() * 5
    ctx.fillStyle = List[Num];

  }
}

function DEAD() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
  xPos = Math.random() * 400
  yPos = Math.random() * 400
  score = 0
  speed = 20
  ctx.fillStyle = "green";
  }


// Animate the stick figure 
function animate() { 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  drawenemyCircle();
  moveEnemy();
  COLL();
} 

// Listen for arrow key presses 
document.onkeydown = function(event) { 
  switch (event.keyCode) { 

    case 65: // Left arrow 
      if (xPos <= 20) {
        xPos -= 0 ;
        break;
      }
      else{
        xPos -= 20;
        break;
      }

    
     
    case 68: // Right arrow 
      if (xPos >= 480) {
        xPos -= 0 ;
        break; 
      }
      else{
        xPos += 20
        break; 
      }
  
  case 87: // Up arrow
      if (yPos <= 20) {
        yPos += 0 ;
        break;
      }
      else{
        yPos -= 20;
        break;
      }
    case 83: // Down arrow 
       if (yPos >= 480) {
        yPos += 0 ;
        break;
      }
      else{
        yPos += 20;
        break;
      }
  } 
}; 


setInterval(animate, 50); 
