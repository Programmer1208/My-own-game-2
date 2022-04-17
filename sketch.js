var gameState = 0;


 // This makes the ball by using a variable.
 var ball;
 //This gives the ball a red colour

 ball = createSprite(200,200,10,10);
 ball.shapeColor='red';

 // From line 6-27 makes the walls.
 var wall1=createSprite(0,0,50,300);
 wall1.shapeColor='orange';
 var wall2= createSprite(70,0,30,300);
 wall2.shapeColor='orange';
 var wall3= createSprite(0,180,300,20);
 wall3.shapeColor='orange';
 var wall4= createSprite(250,135,340,30);
 wall4.shapeColor='orange';
 var wall5= createSprite(230,230,20,120);
 wall5.shapeColor='orange';
 var wall6= createSprite(380,180,200,20);
 wall6.shapeColor='orange';
 var wall7= createSprite(350,225,120,20);
 wall7.shapeColor='orange';
 var wall8= createSprite(321,280,170,20);
 wall8.shapeColor='orange';
 var wall9= createSprite(141,230,180,20);
 wall9.shapeColor='orange';
 var wall10= createSprite(72,280,180,20);
 wall10.shapeColor='orange';
 var wall11= createSprite(95,325,130,20);
 wall11.shapeColor='orange';
 var wall12= createSprite(150,360,20,80);
 wall12.shapeColor='orange';
 var wall13= createSprite(57,390,170,20);
 wall13.shapeColor='orange';
 var wall14= createSprite(302,320,200,20);
 wall14.shapeColor='orange';
 var wall15= createSprite(397,294,20,40);
 wall15.shapeColor='orange';
 var wall16= createSprite(212,340,20,20);
 wall16.shapeColor='orange';
 var wall17= createSprite(212,390,20,40);
 wall17.shapeColor='orange';
 var wall18= createSprite(316,350,20,50);
 wall18.shapeColor='orange';
 var wall19= createSprite(0,156,50,50);
 wall19.shapeColor='orange';
 var wall20= createSprite(395,161,20,40);
 wall20.shapeColor='orange';
 var wall21= createSprite(392,250,20,40);
 wall21.shapeColor='orange';
 var wall22= createSprite(4,225,20,100);
 wall22.shapeColor='orange';
 var cup = createSprite(400,365,20,70);
 cup.shapeColor='yellow';
 

 // createCanvas(700,700);

 

/*wall1.scale=1.5
wall2.scale=1.5
wall3.scale=1.5
wall4.scale=1.5
wall5.scale=1.5
wall6.scale=1.5
wall7.scale=1.5
wall8.scale=1.5
wall9.scale=1.5
wall10.scale=1.5
wall11.scale=1.5
wall12.scale=1.5
wall13.scale=1.5
wall14.scale=1.5
wall15.scale=1.5
wall16.scale=1.5
wall17.scale=1.5
wall18.scale=1.5
wall19.scale=1.5
wall20.scale=1.5
wall21.scale=1.5
wall22.scale=1.5*/







function draw() 
{
    background("white");
 //   ball.velocityX=0;
   // ball.velocityY=0;
    if (keyDown("UP_ARROW")) {
  
        ball.velocityX=0;
        ball.velocityY=-4;
        }
        if (keyDown("DOWN_ARROW")) {
          
        ball.velocityX=0;
        ball.velocityY=4;
        }
        if (keyDown("LEFT_ARROW")) {
        
        ball.velocityX=-4;
        ball.velocityY=0;
        }
        if (keyDown("RIGHT_ARROW")) {
          
        ball.velocityX=4;
        ball.velocityY=0;
        }
    


ball.bounceOff(wall1);
ball.bounceOff(wall2);
ball.bounceOff(wall3);
ball.bounceOff(wall4);
ball.bounceOff(wall5);
ball.bounceOff(wall6);
ball.bounceOff(wall7);
ball.bounceOff(wall8);
ball.bounceOff(wall9);
ball.bounceOff(wall10);
ball.bounceOff(wall11);
ball.bounceOff(wall12);
/*Sofia.bounceOff(cardboard13);
Sofia.bounceOff(cardboard14);
Sofia.bounceOff(cardboard15);
Sofia.bounceOff(cardboard16);
Sofia.bounceOff(cardboard17);
Sofia.bounceOff(cardboard18);
Sofia.bounceOff(cardboard19);
Sofia.bounceOff(cardboard20);
Sofia.bounceOff(cardboard21);
Sofia.bounceOff(cardboard22);

/*if (ball.isTouching(cup))
{
    text("You Win", 200,200)
 //   gameState=0;
}*/
createEdgeSprites();
ball.bounceOff(edges);
drawSprites();
}