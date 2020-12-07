class d{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution:0.9,
            friction:0.5,
            density:1.8
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage ("SPRITES/dustbingreen.png")
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,this.width, this.height);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}