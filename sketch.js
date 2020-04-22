const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground2,ground3;
var box,box2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(100,100);

    ground = new Ground(600,570,1200,60);
    stage = new Ground(150,465,300,150)

    ground2 = new Ground(550,450,400,20);
    ground3 = new Ground2(900,300,400,20);

    box = new Box(625,410,50,60);
    box2 = new Box2(425,410,50,60);
    box3 = new Box3(475,410,50,60);
    box4 = new Box4(525,410,50,60);
    box5 = new Box2(575,410,50,60);
    box6 = new Box3(675,410,50,60);

    box7 = new Box(475,350,50,60);
    box8 = new Box2(525,350,50,60);
    box9 = new Box3(575,350,50,60);
    box10 = new Box4(625,350,50,60);

    box11 = new Box4(525,290,50,60);
    box12 = new Box(575,290,50,60);
    box13 = new Box3(550,230,50,60);

    box14 = new Box(775,260,50,60);
    box15 = new Box2(825,260,50,60);
    box16 = new Box3(875,260,50,60);
    box17 = new Box4(925,260,50,60);
    box18 = new Box2(975,260,50,60);
    box19 = new Box3(1025,260,50,60);

    box20 = new Box(825,200,50,60);
    box21 = new Box2(875,200,50,60);
    box22 = new Box3(925,200,50,60);
    box23 = new Box4(975,200,50,60);

    box24 = new Box4(875,140,50,60);
    box25 = new Box(925,140,50,60);
    box26 = new Box3(900,80,50,60);

    slingShot = new SlingShot(ball.body,{x:200,y:300});
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    stage.display();
    ground2.display();
    fill(550,450,400,20);
    ground3.display();

    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();

    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    box20.display();
    box21.display();
    box22.display();
    box23.display();

    box24.display();
    box25.display();
    box26.display();

    ball.display();
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
