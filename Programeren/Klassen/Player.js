class Player {
    constructor(xCoord, yCoord, size){
      this.x = xCoord;
      this.y = yCoord;
      this.size = 40;
    }
    
    display(){
        push(); // Start a new drawing state
        fill(255);
        rectMode(CORNER);
        rect(this.x - 20, this.y - 20, this.size, this.size);
        pop(); // Restore original state

        push(); // speler astronaut
        rectMode(CENTER);
        strokeWeight(1);
        fill(225,225,225);
        rect(this.x, this.y, 45, 50,10) // lichaam
        circle(this.x,this.y - 42,40); // hoofd
        fill(0,0,0);
        circle(this.x,this.y - 42,30); // zonnescherm
        fill(225,225,225);
        circle(this.x + 5,this.y - 46,10); // witte lens flare
        rect(this.x - 12, this.y + 40, 15, 30,10); // been links
        rect(this.x + 12, this.y + 40, 15, 30,10); // been rechts
        rect(this.x - 25, this.y - 5, 13, 35,10); // arm links
        rect(this.x + 25, this.y - 5, 13,35,10); // arm rechts
        circle(this.x + 17,this.y - 60,15);// lampje
        fill(255,255,0);
        circle(this.x + 17,this.y -60,10); // binnekant lamp
        pop();

    }

    move(){ 
        let speed = 10;   
        if(keyIsDown(LEFT_ARROW)){// links 
            this.x = this.x - speed;
        }
        if(keyIsDown(RIGHT_ARROW)){// rechts
            this.x = this.x + speed;
        }
        if(keyIsDown(DOWN_ARROW)){// omlaag
            this.y = this.y + speed;
        }
        if(keyIsDown(UP_ARROW)){// omhoog
            this.y = this.y - speed;
        }
    }

}


