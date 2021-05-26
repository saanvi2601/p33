class Snow {
    constructor(x, y,r) {

        var options ={
            restitution:0.4,
            friction:0.4

        }
        this.r=r;
      
        this.image = loadImage("snow5.webp");
        this.body = Bodies.circle(x, y, this.r,options);       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
    
        rotate(angle);
    
        image(this.image,pos.x,pos.y,this.r,this.r);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};