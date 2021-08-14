 const Engine=Matter.Engine
 const World=Matter.World
 const Bodies=Matter.Bodies
 var engine 
 var world 
 var bgimage
 var snow=[]
 var maxSnow=1000
var randomx, randomy
 function preload(){
bgimage=loadImage("snow1.jpg")

 }


function setup() {
  createCanvas(1900,800);

  engine=Engine.create()
  world=engine.world
  for(var i=0;i<maxSnow;i++){
  snow.push(new Snow(random(0,1000),random(0,800),20))
  }
}

function draw() {
  background(bgimage);  
  Engine.update(engine)
  for(var i=0;i<maxSnow;i++){
  snow[i].display()
  }
 
}