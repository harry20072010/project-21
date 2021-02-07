class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:0.2
        }
        this.body = Bodies.circle(x,y,radius/2,options)
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var poss = this.body.position
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(poss.x,poss.y,this.radius,this.radius);
    }
}