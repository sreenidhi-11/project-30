
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;
var backgroundIMG;

function preload(){
  polygonImg=loadImage("polygon.png");
  
}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  box1=new Box(480,275,30,40);
  box2=new Box(510,275,30,40);
  box3=new Box(540,275,30,40);
  box4=new Box(570,275,30,40);
  box5=new Box(600,275,30,40);
  box6=new Box(450,275,30,40);
  box7=new Box(630,275,30,40);
  box8=new Box(480,235,30,40);
  box9=new Box(510,235,30,40);
  box10=new Box(540,235,30,40);
  box11=new Box(570,235,30,40);
  box12=new Box(600,235,30,40);
  box13=new Box(510,195,30,40);
  box14=new Box(530,195,30,40);
  box15=new Box(560,195,30,40);
  box16=new Box(530,155,30,40);
  box17=new Box(800,100,30,40);
  box18=new Box(800,140,30,40);
  box19=new Box(830,140,30,40);
  box20=new Box(770,140,30,40);
  box21=new Box(800,180,30,40);
  box22=new Box(830,180,30,40);
  box23=new Box(860,180,30,40);
  box24=new Box(770,180,30,40);
  box25=new Box(740,180,30,40);
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(550,305,250,20);
  ground3=new Ground(800,205,250,20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {
  background("orange"); 
  Engine.update(engine);
  fill("white");
  textSize(15);
  text("press Space key to get another chance",400,100);
  fill("yellow");
  box1.display();
  //fill("black");
  box2.display();
  //fill("white");
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("white");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("yellow");
  box13.display();
  box14.display();
  box15.display();
  fill("white");
  box16.display();
  fill("yellow");
  box17.display();
  fill("white");
  box18.display();
  box19.display();
  box20.display();
  fill("yellow");
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  
  
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}
function keyPressed(){
    if(keyCode === 32){
        chain1.attach(this.polygon);
    }
    
  }