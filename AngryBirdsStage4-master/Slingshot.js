class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.img2=loadImage("sprites/sling3.png")
       this.img1=loadImage("sprites/sling2.png")
       this.img=loadImage("sprites/sling1.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
if(pointA.x<200) {
strokeWeight(8)
}
else{
    strokeWeight(2)
}

            strokeWeight(4);
            stroke(42,22,8)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            image(this.img,200,20)
            image(this.img1,175,20)
            image(this.img2,pointA.x,pointA.y)
            line(pointA.x, pointA.y, pointB.x + 30, pointB.y)

        }
    }
    
}