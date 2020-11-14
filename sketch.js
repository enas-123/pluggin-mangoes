
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var tree;
var ground;
var boy;
var stone;
var m1,m2,m3;
var launcher;
function preload(){
boy = loadImage("images/boy.png");
}
function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
  world = engine.world;
  tree = new Tree(1050,340,450,500)
 ground= new Ground(width/2, 600, width,20)
 stone= new Stone(215,420,30);

 m1= new Mango(1100,100,30)
 m2= new Mango(1170,130,30)
 m3= new Mango(1010,140,30)


 launcher= new Launcher(stone.body,{x:245,y:420})
 var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1300,
    height: 600,
    wireframes: false
  }
});

Engine.run(engine);
Render.run(render);


}

function draw() {
 background(230);
 Engine.update(engine);
 image(boy,200,340,200,300);
tree.display();
ground.display();
stone.display();
m1.display();
m2.display();
m3.display();
launcher.display();
detectCollision(stone,m1)
detectCollision(stone,m2)
detectCollision(stone,m3)
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235,y:420});
    launcher.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  mangobody= lmango.body.position;
  stonebody= lstone.body.position;

  var distance= dist(stonebody.x, stonebody.y,mangobody.x,mangobody.y);

  if(distance<= lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}