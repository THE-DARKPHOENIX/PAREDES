var box

function setup() {
  createCanvas(400,400);
  box = createSprite(306,209,10,100);
}

function draw() 
{
  background("blue");

  if (keyDown(RIGHT_ARROW)) {
 
      box.position.x = box.position.x + 3;   
  }

  if (keyDown(LEFT_ARROW)) {
 
    box.position.x = box.position.x - 3;   
}

  drawSprites();
}




