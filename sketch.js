var speed, weight 
var bullet,wall
var thickness


function setup() {
  createCanvas(1600,400);
  speed=random(90,55)
height=random(400,1500)
  bullet=createSprite(50,200,20,50);
wall=createSprite(1500,200,thickness,height/2)

bullet.shapeColor=color(255);
 wall.shapeColor=color(80,80,80);

 bullet.velocityX=speed;

}


function draw() {
  background(0,0,0);  

  thickness = random(22,83)

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
var deformation=0.5 * weight * speed* speed/22509;
if(deformation>180)
{
  bullet.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
  bullet.shapeColor=color(255,255,0);
}
if(deformation<100)
{
  bullet.shapeColor=color(0,255,0);
}
}
drawSprites();

}

  
