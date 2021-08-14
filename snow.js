class Snow{
constructor(x,y,r){
var abc={
friction:.1,
density:.1,
restitution:.1
}
this.body=Bodies.circle(x,y,r,abc)
this.image=loadImage("snow4.webp")
this.r=r
World.add(world,this.body)
}
display(){
imageMode(CENTER)
image (this.image,this.body.position.x,this.body.position.y,this.r,this.r)
}
}
