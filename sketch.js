
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball,ball2,ball3,ball4,ball5;
var chain,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 
  roof = new Roof(400,200,600,50);
  ball = new Ball(200,550,100);
  ball2 = new Ball(300,550,100);
  ball3 = new Ball(400,550,100);
  ball4 = new Ball(500,550,100);
  ball5 = new Ball(600,550,100);
  chain = new Chain(ball.body,{x:200,y:200});
  chain2 = new Chain(ball2.body,{x:300,y:200});
  chain3 = new Chain(ball3.body,{x:400,y:200});
  chain4 = new Chain(ball4.body,{x:500,y:200});
  chain5 = new Chain(ball5.body,{x:600,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  roof.display();
  ball.display();
   ball2.display();
ball3.display();
 ball4.display();
  ball5.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}



