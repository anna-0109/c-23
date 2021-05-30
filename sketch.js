const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
 var box1,ground1,box2;
function setup()
{
  createCanvas(400,400)
  myEngine = Engine.create();
  myWorld = myEngine.world;
box2 = new Box(200,100,50,50);
box1 = new Box(230,300,40,60);
ground1 = new ground(200,380,400,30);


}

function draw()
{
  background("black")
  
   //rect(200,200,50,50);
   Engine.update(myEngine);
   box1.display();
   ground1.display();
   box2.display();
}