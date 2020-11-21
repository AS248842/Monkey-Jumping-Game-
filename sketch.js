
var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey , monkey_running;
var bananaImage, obstacle, obstacleImage,obstacleg;
var bananag;
var score=0;
var ground;
var survivalTime=0;
var food;
var bg,bgimg;
var position;
var monkey_stop;
function preload(){
  bgimg=loadImage("jungleimg.webp");
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 monkey_stop=loadAnimation("sprite_0.png") ;
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  bg=createSprite(0,200,600,400);
  bg.addImage("backround",bgimg);
  bg.velocityX=-4;
  bg.scale=3.5;
    
   monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.addAnimation("stop",monkey_stop);
  monkey.scale = 0.2;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  ground.visible=false;
  console.log(ground.x);
  
  bananag = new Group();
  obstacleg = new Group();

}


function draw() {
  background(0);
 



  
    monkey.collide(ground);
  
  if(gameState===PLAY){
    if(bg.x<0){
      bg.x=bg.width/2;
    }
  if(ground.x<0) {
    ground.x=ground.width/2;
    
   }
    
  if(keyDown("space")) {
    monkey.velocityY= -12;
    
  }
   monkey.velocityY=monkey.velocityY+0.8;
    
    banana();
   obstacl();
    if(bananag.isTouching(monkey))
    {
      bananag.destroyEach();
      score=score+1;
    }
       if(score === 5)
      {
        gameState = END;
      }
    if(obstacleg.isTouching(monkey))
    {
      gameState = END;
    }
  }

    if(gameState === END)
    {
       monkey.changeAnimation("stop",monkey_stop);
      ground.velocityX = 0;
      bg.velocityX=0;
      monkey.velocityX=0;
      monkey.velocityY=0;
      bananag.setVelocityXEach(0);
      obstacleg.setVelocityXEach(0);
  
    }
  

  
  drawSprites();
    stroke("white");
  textSize(20);
  fill("black");
  text("Score"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
 text("Survival Time"+survivalTime, 100,50);
}




function banana()
{  
  if(frameCount%80===0)
  {
    position = Math.round(random(1));
    food=createSprite(400,200,20,20);
    food.addImage("bannanaimg",bananaImage);
    food.scale=0.2;
    console.log(position)

    if(position===1)
    {
    
    food.x=400;
    food.velocityX=-(7+(score/4));
    }
   
    
    food.y=Math.round(random(50,250));
    food.setLifetime=100;
    bananag.add(food);
  
  }
}

function obstacl()
{
  if(frameCount%80===0)
    {
 obstacle=createSprite(400,310,20,20); 
      obstacle.addImage(obstacleImage); 
      obstacle.scale=0.2; 
      obstacle.velocityX=-(7+(score/4)); 
      obstacleg.add(obstacle)
    }      
    }

  
  
  
  
  
