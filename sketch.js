
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,dustbin,paper;
	
function setup() {
  createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;

  dustbin = new d(680,640,120,190)
  paper = new p(100,670)
	ground = new Ground(400,700,800,20)

	Engine.run(engine); 
}

function draw() {
  //rectMode(CENTER);
  background("dark blue");
  Engine.update(engine);
  
  dustbin.display();
  ground.display();
  paper.display();
  
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:125});
  }
}



