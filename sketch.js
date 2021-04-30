
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var stone,rubber,iron,sand1,hammer,plain,sand2,sand3,sand4,sand5,sand6,san7,sand8,sand9,sand10
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plain = new Plain(600,700,1200,20)
    
    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);

    sand1 = new Sand(505,450,10);
    sand2 = new Sand(510,450,10);
    sand3 = new Sand(515,450,10);
    sand4 = new Sand(520,450,10);
    sand5 = new Sand(525,450,10);
    sand6 = new Sand(515,445,10);
    sand7 = new Sand(520,445,10);
    sand8 = new Sand(525,445,10);
    sand9 = new Sand(530,445,10);
    sand10 = new Sand(535,445,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.Display()
  plain.Display()
  rubber.Display()
  sand1.Display()
  hammer.Display()
  iron.Display()
  sand2.Display()
  sand3.Display()
  sand4.Display()
  sand5.Display()
  sand6.Display()
  sand7.Display()
  sand8.Display()
  sand9.Display()
  sand10.Display()
  drawSprites();
 
}



