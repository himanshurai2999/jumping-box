var canvas;
var music;
var block1,block2,block3,block4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,590,350,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,590,200,30)
    block2.shapeColor = "orange";

    
    block3 = createSprite(530,590,200,30)
    block3.shapeColor = "purple";

    block4 = createSprite(760,590,200,30)
    block4.shapeColor = "green";


    //create box sprite and give velocity
    ball = createSprite(random(20,750),50,40,40);
    ball.shapeColor = "white"
    ball.velocityX = 4;
    ball.velocityY = 9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();


    //add condition to check if box touching surface and make it box
function isTouching(){
    
            movingball .ShapeColor = "white"
            fixedRect .ShapeColor = "blue"
        
            movingball .ShapeColor = "white"
            fixedRect .ShapeColor = "yellow"
        
            movingball .ShapeColor = "white"
            fixedRect .ShapeColor = "purple"
        
            movingball .ShapeColor = "white"
            fixedRect .ShapeColor = "green"
        
        }
        else{
            movingball .ShapeColor = "white"
            fixedRect .ShapeColor = "blue"
        
            movingball .ShapeColor = "white"
            fixedRect .ShapeColor = "yellow"
        
            movingball .ShapeColor = "white"
            fixedRect .ShapeColor = "purple"
        
            movingball .ShapeColor = "white"
            fixedRect .ShapeColor = "green"  
        }
        drawSprites();
        }

   

    function isTouching(ball,block1,block2,block3,block4){
    if(movingball.x- fixedRect.x<fixedRect.width/2+ movingball.width/2
        && fixedRect.x- movingball.x<fixedRect.width/2+ movingball.width/2
        && movingball.x- fixedRect.x<fixedRect.width/2+ movingball.width/2
        && fixedRect.x- movingball.x<fixedRect.width/2+ movingball.width/2){
        return true;  
}
else{
    return false;
}
}



