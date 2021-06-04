var ball,bricks,paddle,edges,brick;
var score = 0;
var canvas
var ballImg


function preload(){
  ballImg=loadImage("ball.png")  
}
function setup(){
    canvas=createCanvas(400,400)
        ball = createSprite(200,200,10,10);
      ball.addImage("ball",ballImg)
        //ball.setAnimation("golfball_1");
       ball.scale = 0.05;
        paddle = createSprite(200, 350, 120, 10);
        paddle.shapeColor = color(0,0,255);

        edges=createEdgeSprites();

        bricks = createGroup();
}

function createBrickRow(y, color) {
    for(c=0; c<6; c++)
    {
      brick = createSprite(65+54*c,y,50, 25);
      brick.shapeColor = color;
      bricks.add(brick);
    }
  
 
  }


function draw() {
  background("black");

  textSize(20);
  text("Score: "+score,40,47);
  
  paddle.x = World.mouseX;
  
  if(paddle.x < 60)
  {
    paddle.x = 60;
  }
    
  if(paddle.x > 340)
  {
    paddle.x = 340;
  }


  drawSprites();

  createBrickRow(65, "red");
  createBrickRow(65+29, "orange");
  createBrickRow(65+29+29, "green");
  createBrickRow(65+29+29+29, "yellow");
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(paddle);
  ball.bounceOff(bricks, brickHit);
  
 // if(ball.bounceOff(paddle)){
   //playSound("sound://category_hits/puzzle_game_button_02.mp3");
 // }
}

function keyPressed()
{
  if (keyCode===32){
  ball.velocityX = 10;
  ball.velocityY = 10;
  }
}

function brickHit(ball, brick) {
 bricks.destroyEach();
 score = score + 5;
  
}