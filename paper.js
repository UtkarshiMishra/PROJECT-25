class p{
    constructor(x,y){
        var options = {
            restitution:0.7,
            friction:1.0,
            density: 0.9
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.image = loadImage ("SPRITES/paper (1).png")
        this.width = 50;
        this.height = 50;
        World.add(world,this.body) 
    }

    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,50,50);
        fill(255);
        //rect(0,0,this.width,this.height);
        pop();
    }
}