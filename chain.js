class chain{
    constructor(a,b){
        var options ={
            bodyA:a,
            bodyB:b,
            stifness:2,
            length:80
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain)
    }
    display(){
        var pointa= this.chain.bodyA.position
        var pointb= this.chain.bodyB.position
        strokeWeight(4);
        line(pointa.x,pointa.y,pointb.x,pointb.y)
    }
}