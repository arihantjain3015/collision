
var mrect,frect
function setup() {
  createCanvas(1200,800);
  frect=createSprite(400, 200, 50, 80);
  mrect=createSprite(200,100,80,30);
  frect.shapeColor="green";
  mrect.shapeColor="green";
  frect.debug=true;
  mrect.debug=true;
}

function draw() {
  background(0);  
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

  if (frect.x-mrect.x < frect.width/2+mrect.width/2 &&
    mrect.x-frect.x<frect.width/2+mrect.width/2 &&
    frect.y-mrect.y < frect.height/2+mrect.height/2 &&
    mrect.y-frect.y<frect.height/2+mrect.height/2 ){
      frect.shapeColor="red";
     mrect.shapeColor="red";
    }
    else{
    frect.shapeColor="green";
    mrect.shapeColor="green";
    }
  drawSprites();
}