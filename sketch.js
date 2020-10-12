
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1=new bob(800-80,675,40);
	bob2=new bob(800-40,675,40);
	bob3=new bob(800,675,40);
	bob4=new bob(800+40,675,40);
	bob5=new bob(800+80,675,40);

	roof = new Roof(width/2,height/4,width/7,20);
	

	rope1 = new rope(bob1.body,roof.body,-40*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bob1.display();

  roof.display();
  rope1.display();

  drawSprites();
 
}



