// Create variables for all the KEYS. For example
var keyA  , keyAS ,keyB ,keyC,keyCS,keyD,keyDS,keyE,keyF,keyFS,keyG,keyGS,  KEYS; 
var piano,piano1;
var soundA,soundAS,soundB,soundC,soundCS,soundD,soundDS,soundE,soundF,soundFS,soundG,soundGS,sounds;
function setup (){
   keyC = createSprite(50,250,50,200);
   keyD = createSprite(100,250,50,200);
   keyE = createSprite(150,250,50,200);
   keyF = createSprite(200,250,50,200);
   keyG = createSprite(250,250,50,200);
   keyA = createSprite(300,250,50,200);
   keyB = createSprite(350,250,50,200);
   piano = createSprite(12.5,250,25,200);
   pianoP = createSprite(200,100,400,100);
   piano1 = createSprite(387.5,250,25,200);
   keyCS = createSprite(75,215,30,130);
   keyDS = createSprite(125,215,30,130);
   keyFS = createSprite(225,215,30,130);
   keyGS = createSprite(275,215,30,130);
   keyAS = createSprite(325,215,30,130);
  C = createSprite(40,326,5,5);
  D = createSprite(100,326,5,5);
  E = createSprite(150,326,5,5);
  F = createSprite(204,326,5,5);
   G = createSprite(250,326,5,5);
  A = createSprite(300,326,5,5);
  B = createSprite(350,326,5,5);
  CS = createSprite(75,260,5,5);
  DS = createSprite(120,260,5,5);
  FS = createSprite(224,260,5,5);
  GS = createSprite(272,260,5,5);
  AS= createSprite(324,260,5,5);

  keyC.shapeColor = "white";
  keyD.shapeColor = "beige";
  keyE.shapeColor = "white";
  keyF.shapeColor = "beige";
  keyG.shapeColor = "white";
  keyA.shapeColor = "beige";
  keyB.shapeColor = "white";
  piano.shapeColor = "purple";
  pianoP.shapeColor = "purple";
  piano1.shapeColor = "purple";
  keyCS.shapeColor = "black";
  keyDS.shapeColor = "black";
  keyFS.shapeColor = "black";
  keyGS.shapeColor = "black";
  keyAS.shapeColor = "black";

/*C.setAnimation("C.PNG_1");
C.scale = 0.1;
D.setAnimation("D.PNG_1");
D.scale = 0.1;
E.setAnimation("E.PNG_1");
E.scale = 0.1;
F.setAnimation("F.PNG_1");
F.scale = 0.1;
G.setAnimation("G.PNG_1");
G.scale = 0.1;
A.setAnimation("A.PNG_1");
A.scale = 0.2;
B.setAnimation("B.PNG_1");
B.scale = 0.2;
CS.setAnimation("C#.PNG");
DS.setAnimation("D#.PNG_1");
FS.setAnimation("F#.PNG_1");
GS.setAnimation("G#.PNG_1");
AS.setAnimation("A#.PNG_1");*/
}

function preLoad(){
  
  soundC = loadSound("piano_middle_C.mp3"); 
  soundD = loadSound("piano_D.mp3"); 
  soundE = loadSound("piano_E.mp3"); 
  soundF = loadSound("piano_F.mp3"); 
  soundG= loadSound("piano_G.mp3"); 
  soundA = loadSound("piano_A.mp3"); 
  soundB = loadSound("piano_B.mp3"); 
  soundCS = loadSound("piano_C_sharp.mp3"); 
  soundDS = loadSound("piano_D_sharp.mp3"); 
  soundFS = loadSound("piano_F_sharp.mp3"); 
  soundGS = loadSound("piano_G_sharp.mp3"); 
  soundAS = loadSound("piano_A_sharp.mp3"); 
}


function draw() {
  
   background("YELLOW");
   
   createEdgeSprites();
  
  if(mousePressedOver(keyC)){
    soundC.play();
  }
  
  if(mousePressedOver(keyD)){
    soundC.play();
  }
  
  if(mousePressedOver(keyE)){
    soundC.play();
  }
  
  if(mousePressedOver(keyF)){
    soundC.play();
  }
  
  if(mousePressedOver(keyG)){
    soundC.play();
  }
  
  if(mousePressedOver(keyA)){
    soundC.play();
  }
  
  if(mousePressedOver(keyB)){
    soundC.play();
  }
  
  if(mousePressedOver(keyCS)){
    soundC.play();
  }
  
  if(mousePressedOver(keyDS)){
    soundC.play();
  }
  
  if(mousePressedOver(keyFS)){
    soundC.play();
  }
  
  if(mousePressedOver(keyGS)){
    soundC.play();
  }
  
  if(mousePressedOver(keyAS)){
    soundC.play();
  }
  textSize(19);
  textFont("Algerian");
  text("PRESS THE KEYS TO PLAY THE PIANO",40,30);
  
  textSize(10);
  text("C",40,168);
  
   drawSprites();
  
}
