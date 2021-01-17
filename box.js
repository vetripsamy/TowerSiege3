class Box {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution: 0.3
      }
      this.body = Bodies.rectangle(x,y,30,40,options);
      this.image = loadImage("box.png");
      this.visibility = 255;
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(this.body.speed<4){
      imageMode(CENTER);
      fill("pink");
      stroke("black");
      image(this.image, pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-10;
        tint(255,this.visibility);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
    }
    score(){
      if(this.visibility<0 && this.visibility>-50){
        score=score+1;
      }
    }
  };