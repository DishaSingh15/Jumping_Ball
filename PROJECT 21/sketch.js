var canvas;
var music;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
      surface1 = createSprite (700,500,100,10);
      surface2 = createSprite (700,520,100,10);
      surface3 = createSprite (700,540,100,10);
      surface4 = createSprite (700,560,100,10);

      surface1.shapeColor = "green";
      surface2.shapeColor = "pink";
      surface3.shapeColor = "orange";
      surface4.shapeColor = "blue";

      //create box sprite and give velocity
        box = createSprite (random (20,750));
        box.velocityX = -2;

        music.mp3.play;


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff (edges);

    //add condition to check if box touching surface and make it box
    if (surface1.isTouching (box) && box.bounceOff (surface1)) {
        box.shapeColor = "green";
    }
    if (surface2.isTouching (box) && box.bounceOff (surface2)) {
        box.shapeColor = "pink";
    }
    if (surface3.isTouching (box) && box.bounceOff (surface3)) {
        box.shapeColor = "orange";
    }    
    if (surface4.isTouching (box) && box.bounceOff (surface4)) {
        box.shapeColor = "blue";
    }

    if (ball.isTouching(surface1)) {
        music.mp3.stop
    }
    if (ball.isTouching(surface2)) {
        music.mp3.stop
    }
    if (ball.isTouching(surface3)) {
        music.mp3.stop
    }
    if (ball.isTouching(surface4)) {
        music.mp3.stop
    }


     
}

