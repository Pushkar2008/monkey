
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var Bananag, obstacleGroup
var SurvivalTime
var ground


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  SurvivalTime=0;
  
  monkey= createSprite(25,200,20,20)
  monkey.scale=0.1;
  monkey.addAnimation("monkey",monkey_running)
  
  ground= createSprite(0,350,1000,20)
  
Bananag=new Group();
obstacleGroup=new Group();
  
}


function draw() {
  background("white")
  textSize(20)
  
  ground.velocityX=-2;
  if(ground.x<0){
     ground.x=ground.width/2
  }
  Bananas();
  obstacles();
  
  if(keyDown("space")){
    monkey.velocityY=-7
  }
  SurvivalTime=SurvivalTime+1
  text("Survival Time : "+SurvivalTime,100,100)
  
  if(monkey.isTouching(Bananag)){
    Bananag.destroyEach();
  }
  
  monkey.velocityY=monkey.velocityY+1
  monkey.collide(ground)

  drawSprites();
}

function Bananas(){
  if(frameCount%90===0){
  banana= createSprite(400,200,20,20)
  banana.addImage(bananaImage)
  banana.velocityX=-4;
  banana.scale=0.1
  banana.y=Math.round(random(150,200))
  Bananag.add(banana)
  }
}
function obstacles(){
  if(frameCount%90===0){
    obstacle= createSprite(400,330,20,20)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-5;
    obstacle.scale=0.1;
    obstacle.y=Math.round(random(330,340))
    obstacleGroup.add(obstacle)
  }
}




