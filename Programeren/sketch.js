let img;
let gov;

let sp1;
let sp2;
let sp3;
let sp4;
let sp5;
let sp6;
let sp7;
let sp8;

let spots;

let player;
let gameOver;

var song;
let poef;

function preload() {
  img = loadImage('Afbeeldingen/Achtergrond.jpg');
  gov = loadImage('Afbeeldingen/gameOverFoto.jpg')
  song = loadSound("Muziek/lone-wolf-10374.mp3");
  poef = loadSound("Muziek/game over.mp3"); 
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  image(img,0,0);
  song.play();
  song.setVolume(0.5);

  player = new Player(width/2 - 15, height/2 - 15);
  sp1 = new Spot(0, 300, 50, 1, "up");
  sp2 = new Spot(0, 200, 100, 0.5, "down");
  sp3 = new Spot(0, 400, 75, 3, "right");
  sp4 = new Spot(0, 300, 20, 1, "left");
  sp5 = new Spot(0,600,200,2, "right");
  sp6 = new Spot(0,100,80,4, "down");
  sp7 = new Spot(0,500,200,5,"left");
  sp8 = new Spot(0,700,30,8, "up");
  spots = [sp1, sp2,sp3,sp4,sp5,sp6,sp7,sp8];
  setInterval(spawnNewSpot,4000);
  gameOver = false;
}

function draw(){
  background(img,0,0); // zet foto op achtergrond
  

  if(gameOver == false){
    player.display(); // display speler
    player.move();    // beweging speler

    if(spots.length <=2){
      spawnNewSpot();
      spawnNewSpot();
      spawnNewSpot();
    }

    for(let i = 0; i <spots.length; i++){  // deze code detecteerd of een meteoor en de speler gebotst
      spots[i].display();
      spots[i].move();
      if(spots[i].isColliding(player)){
        poef.play();
        gameOver = true;
      }
      
    }
  }else{
    push(); // Start a new drawing state
    song.stop();
    background(gov,160,160);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);
    text("You're smashed ! :-(", width/2, height/2);
    pop(); // Restore original state
  }
}

function spawnNewSpot(){ // spawnt nieuwe komeet
  let xPos;
  let yPos;
  let randomSize = round(random(20,200));
  let randomSpeed = round(random(1,10));

  const availableDirections = ["right","left", "up", "down"]; // kiest richting die beschikbaar is
  const randomIndex = round(random(0,3));
  const randomDirection = availableDirections[randomIndex]; 
  
  if(randomDirection == "up"){   // riching komeet omhoog
    xPos = random(0, width + randomSize/2);
    yPos = height + randomSize/2; 
  }
  else if(randomDirection == "down"){ // richting komeet omlaag
    xPos = random(0, width + randomSize/2);
    yPos = 0 - randomSize/2;
  }
  else if(randomDirection == "left"){ // richting komeet links
    xPos = width + randomSize/2;
    yPos = random(0, height + randomSize/2);
  }
  else if(randomDirection == "right"){ // richting komeet rechts
    xPos = 0 - randomSize/2;
    yPos = random(0, height + randomSize/2);
  }
  else{
    console.warn("no random direction selected", randomDirection); // geef waarschuwing in console als er geen richting gekozen is.
  }

  const spot = new Spot(xPos, yPos,randomSize,randomSpeed, randomDirection); // maak nieuwe komeet aan, x en y positie, grote en snelheid + richting.
  spots.push(spot);
}

function keyPressed(e) { // als je enter drukt gebeurd....
  e.preventDefault();
  if(gameOver && e.keyCode == 13){
    location.reload()
    spots = [];
    player = new Player(width/2 - 15, height/2 - 15);
    song.play();
    gameOver = false;
  }
}

  // De code hierodner zorgt ervoor dat er een timer is. (Bron Staat bij bronnen Word document)

  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  var totalSeconds = 0;
  setInterval(setTime, 1000);

  function setTime(){
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds%60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
    }

  function pad(val){
    var valString = val + "";
    if(valString.length < 2){
                return "0" + valString;
            }
            else
            {
                return valString;
            }
        }
