var canvas, edges;
var playBox, surf1, surf2, surf3, surf4, surf5;
var song1;

function preload(){
    // song1 = loadSound('bad_guy_remix.mp3')
}


function setup(){
    canvas = createCanvas(800,600);
    //create edgeSprite
    edges = createEdgeSprites();
    // song1.play();

    //create 5 different surfaces
    surf1 = createSprite(80,560,120,15);
    surf1.shapeColor = 'yellow';

    surf2 = createSprite(240,560,120,15);
    surf2.shapeColor = 'pink';

    surf3 = createSprite(400,560,120,15);
    surf3.shapeColor = 'Black';

    surf4 = createSprite(560,560,120,15);
    surf4.shapeColor = 'green';

    surf5 = createSprite(720,560,120,15);
    surf5.shapeColor = 'orange';

    //create box sprite and give velocity
    playBox = createSprite(50,50,30,30);
    playBox.velocityY = 7;
    playBox.velocityX = 7;
}

function draw() {
    background(rgb(50, 95, 241));
    drawSprites();

    playBox.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    changeColor();
}

function changeColor(){
    if (playBox.isTouching(surf1)){
        playBox.shapeColor = surf1.shapeColor;
        playBox.bounceOff(surf1);
    }
    if (playBox.isTouching(surf2)){
        playBox.shapeColor = surf2.shapeColor;
        playBox.bounceOff(surf2);
    }
    if (playBox.isTouching(surf3)){
        playBox.shapeColor = surf3.shapeColor;
        playBox.bounceOff(surf3);
        playBox.velocityX = 0;
        playBox.velocityY = 0;
    }
    if (playBox.isTouching(surf4)){
        playBox.shapeColor = surf4.shapeColor;
        playBox.bounceOff(surf4);
    }
    if (playBox.isTouching(surf5)){
        playBox.shapeColor = surf5.shapeColor;
        playBox.bounceOff(surf5);
    }
}