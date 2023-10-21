class Spot {
    constructor(xCoord, yCoord, size, speed, dir){
       this.x = xCoord;
       this.y = yCoord;
       this.size = size;
       this.speed = speed;
       this.direction = dir;
       this.directionOffset = round(random(0, this.speed));
       console.log(this);
    }
    display(){
        push(); // Start a new drawing state

        fill(160);
        stroke(1);
        fill(180);
        ellipse(this.x, this.y, this.size, this.size);
        pop(); // Restore original state
    }

    move(){
        if(this.direction == "up"){
            this.y -= this.speed;
            this.x -= this.directionOffset;
        }
        else if(this.direction == "right"){
            this.x += this.speed;
            this.y -= this.directionOffset;
        }
        else if(this.direction == "down"){
            this.y += this.speed;
            this.x += this.directionOffset;
        }
        else {
            this.x -= this.speed;
            this.y += this.directionOffset;
        }
        
        //spots buiten beeld terug in beeld zetten
        let radius = this.size / 2;
        if(this.x > width + radius){
            this.x = 0 - radius;
        }
        if(this.x < 0 - radius){
            this.x = width + radius;
        }
        if(this.y > height + radius){
            this.y = 0 - radius;
        }
        if(this.y < 0 - radius){
            this.y = height + radius;
        }
    }
    
    isColliding(obj){
        let isHit = collideRectCircle(obj.x, obj.y, obj.size, obj.size, this.x, this.y, this.size )
        return isHit;
    }

    
}