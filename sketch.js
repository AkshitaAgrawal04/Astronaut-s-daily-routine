var astronaut; //astronautimg;
var issimg, iss;
var bathimg, brushimg, drinkimg, eatimg, gymimg, moveimg, sleepimg;

function preload(){
  issimg= loadImage("images/iss.png");

  bathimg= loadAnimation("images/bath1.png","images/bath2.png");
  brushimg= loadImage("images/brush.png");
  drinkimg= loadAnimation("images/drink1.png","images/drink2.png");
  eatimg= loadAnimation("images/eat1.png","images/eat2.png");
  gymimg= loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  moveimg= loadAnimation("images/move.png");
  sleepimg= loadImage("images/sleep.png");   
}

function setup() {
  createCanvas(650, 400);

  iss= createSprite(300, 150);
  iss.addImage("iss", issimg);
  iss.scale= 0.15;

  astronaut= createSprite(300,200);
  astronaut.addImage("aslabel", sleepimg);
  astronaut.scale=0.1;

 

  //astronaut.setCollider("circle", 30, 0, 0);
  astronaut.debug="true";
}
function draw() {
  background(220);
  drawSprites();

   fill("white")
  text("Instructions", 80, 36);
  text("Up Arrow= brushing", 80, 46);
  text("Down Arrow= gymming", 80, 56);
  text("Right Arrow= eating", 80, 66);
  text("Left Arrow= bathing", 80, 76);
  text("m key= moving", 80, 86);

  edges= createEdgeSprites();

  astronaut.bounceOff(edges);
}

function keyPressed(){

  if (keyCode===UP_ARROW) {
    astronaut.addImage("aslabel", brushimg);
   astronaut.setVelocity(0,0);
  }

  if (keyCode===DOWN_ARROW) {
    astronaut.addAnimation("aslabel", gymimg);
   astronaut.setVelocity(0,0);
  }

  if (keyCode===LEFT_ARROW) {
    astronaut.addAnimation("aslabel", bathimg);
   astronaut.setVelocity(0,0);
  }

  if (keyCode===RIGHT_ARROW) {
    astronaut.addAnimation("aslabel", eatimg);
   astronaut.setVelocity(0,0);
  }
  
  if (keyDown("m")) {
    astronaut.setVelocity(-3.5, 2);
    astronaut.addAnimation("aslabel", moveimg);
  }
}
