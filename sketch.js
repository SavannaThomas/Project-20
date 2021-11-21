var bgImage
var cat,catImage1,catImage2
var canvas
var mouse,mouseImage1,mouseImage2
function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImage3 = loadAnimation ("images/cat4.png");
    mouseImage1 = loadAnimation ("images/mouse1.png");
    mouseImage2 = loadAnimation ("images/mouse2.png","images/mouse3.png");
    mouseImage3 = loadAnimation ("images/mouse4.png");

}

function setup(){
   canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("tomsleeping",catImage1);
    cat.scale = 0.2
    mouse = createSprite(200,600);
    mouse.addAnimation("mousestanding",mouseImage1);
    mouse.scale = 0.15

}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("catlastimage",catImage3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catlastimage");
        mouse.addAnimation("mouselastimage",mouseImage3);
        mouse.scale = 0.3
        mouse.changeAnimation("mouselastimage");   
    }
  
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation("catrunning",catImage2);
    cat.changeAnimation("catrunning");
    mouse.addAnimation("mouseteasing",mouseImage2);
    mouse.frameDelay = 25
    mouse.changeAnimation("mouseteasing");

}

}
