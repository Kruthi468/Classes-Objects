const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground1;
var log1,log2,log3,log4;
var pig1,pig2;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    box3 = new box(700,240,70,70);
    box4 = new box(920,340,70,70);
    box5 = new box(810,160,70,70);
    ground1 = new ground(600,height,1200,20);
    pig1 = new pig(810,350);
    pig2 = new pig(810,220);
    bird1 = new bird(100,100);
    log1 = new log(810,260,400,200);
    log2 = new log(810,180,200,400);
    log3 = new log(760,120,150,PI/7);
    log4 = new log(870,120,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground1.display();
    pig1.display();
    pig2.display();
    bird1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}