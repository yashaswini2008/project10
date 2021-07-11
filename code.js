var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["883601f6-fea7-4f3d-9be2-da6d2b739eee","51a79b2c-3e16-4428-a6e6-da6c16969020","9d7930c0-72d7-45d8-b4f3-363a9166a1f1"],"propsByKey":{"883601f6-fea7-4f3d-9be2-da6d2b739eee":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png"},"51a79b2c-3e16-4428-a6e6-da6c16969020":{"name":"paddle","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"soUypf.16_WIj57.rxEDB3sLKXKGNcY7","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/51a79b2c-3e16-4428-a6e6-da6c16969020.png"},"9d7930c0-72d7-45d8-b4f3-363a9166a1f1":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/4phLTHjHz6LTATVviIO56W0iUSonnkZ3/category_backgrounds/texture_12.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"4phLTHjHz6LTATVviIO56W0iUSonnkZ3","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4phLTHjHz6LTATVviIO56W0iUSonnkZ3/category_backgrounds/texture_12.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200, 200);
b.setAnimation("b")




//creating plddle and the ball
var paddle = createSprite(200, 375, 50, 15);
paddle.setAnimation("paddle");
paddle.scale = 0.9

var ball = createSprite(150, 250, 20, 20);
ball.setAnimation("ball");
ball.scale = 0.06

//creating gamestate variable
var gameState= 'serve'
var score=0;

//first row of boxes
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="pink";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="purple";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="pink";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="purple";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="pink";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="purple";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="pink";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="purple";

//second row of boxes
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="purple";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="pink";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="purple";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="pink";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="purple";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="pink";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="purple";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="pink";


function draw() {
  background("white");
  
  //display score
  textSize(15);
  stroke("red");
 
  text("Score :"+score,330,20);
 
  
  
  
  if(gameState === 'serve' ){
    
     textSize(25)
  fill("green")
  text("Press Enter to serve the ball",30,190);
  
   
  //Moving the ball on pressing enter key
  if(keyDown("enter")){
    ball.velocityX = 3;
    ball.velocityY = 4;
      gameState = 'play'
  }
    
  
    
  }
  
  
  
  if(gameState === 'play'){
    
    
     //Moving the paddle with mouse along the x-axis
  paddle.x=World.mouseX;
  
  if(ball.isTouching(bottomEdge) || score === 16){
    gameState ='end'
  }
 
    
  }
  if(gameState === 'end'){
    
    ball.setVelocity(0,0)
    
      textSize(30)
  fill("red")
  text("Game Over !!!!!!!!",30,190);
    
  }
  
  
  
  
  
 
  
  //Making the ball bounceOff the paddle and three sides of canvas
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);

 
  
  //destroy the boxes when ball touches them
  if(ball.isTouching(box1))
  {
    score=score+1;
    box1.destroy();
  }
  
  if(ball.isTouching(box2))
  {
    score=score+1;
    box2.destroy();
  }
  
  if(ball.isTouching(box3))
  {
    score=score+1;
    box3.destroy();
  }
  
  if(ball.isTouching(box4))
  {
    score=score+1;
    box4.destroy();
  }
  
  if(ball.isTouching(box5))
  {
    score=score+1;
    box5.destroy();
  }
  
  if(ball.isTouching(box6))
  {
    score=score+1;
    box6.destroy();
  }
  
  if(ball.isTouching(box7))
  {
    score=score+1;
    box7.destroy();
  }
  
  if(ball.isTouching(box8))
  {
    score=score+1;
    box8.destroy();
  }
  
  if(ball.isTouching(box9))
  {
    score=score+1;
    box9.destroy();
  }
  
  if(ball.isTouching(box10))
  {
    score=score+1;
    box10.destroy();
  }
  if(ball.isTouching(box11))
  {
    score=score+1;
    box11.destroy();
  }
  if(ball.isTouching(box12))
  {
    score=score+1;
    box12.destroy();
  }
  if(ball.isTouching(box13))
  {
    score=score+1;
    box13.destroy();
  }
  if(ball.isTouching(box14))
  {
    score=score+1;
    box14.destroy();
  }
  if(ball.isTouching(box15))
  {
    score=score+1;
    box15.destroy();
  }
  if(ball.isTouching(box16))
  {
    score=score+1;
    box16.destroy();
  }
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
