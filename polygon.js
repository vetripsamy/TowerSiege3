class Polygon {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution: 0.2
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.image=loadImage("polygon.png");
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };