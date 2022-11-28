xpos = 200
ypos = 200
dx = 5;
dy = 3;
function setup() {
  // put setup code here
  createCanvas(600, 500);
}

function draw() {
  background('skyblue');
  rect(10,ypos,10,80); // W/H of rectangle
  rect(580,mouseY,10,80); // W/H of rectangle
  ellipse(xpos,ypos,20,20); // Size for ellipse
  if (xpos>=width-20 || xpos==20) //The length the ball goes across the canvas 
    {
      dx = -dx
    }
  if (ypos>=height-20 || ypos==20)
    {
      dy = -dy
    }
  fill('white');
  textSize(20); //20px font
  textFont('Sans-serif'); //font family
  textStyle(ITALIC); //font style
  fill("effa1c");
  text('Boring Game',250,20);
  for (var i=0; i < 400; i+=20) {
     
  } 
  xpos = xpos +dx;
  ypos = ypos +dy;
}

  
  
 
 