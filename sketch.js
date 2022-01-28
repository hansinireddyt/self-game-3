var student, studentImg
var book
var bookGroup
var PLAY = 1;
var END = 0;
var gameState = PLAY; 

function preload(){
 studentImg = loadImage("Assets/student1.png");
 backgroundImg = loadImage("Assets/Background.png"); 
 englishBookImg = loadImage("Assets/englishbook.png");
 mathBookImg = loadImage("Assets/Mathbook.png")
 historyBookImg = loadImage("Assets/historybook.png")
 geographyBookImg = loadImage("Assets/geographyBook.png")
 scienceBookImg = loadImage("Assets/ScienceBook.png")
 startButtonImg = loadImage("Assets/startButton.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  //bg = createSprite(300,200,windowWidth,windowHeight);
  //bg.addImage(backgroundImg)
  //bg.scale = 1

  student = createSprite(750,520, 50, 50);
  student.addImage(studentImg);
  student.scale = 0.9

  //englishBook = createSprite(130,0,20,20)
  //englishBook.addImage(englishBookImg)
  //englishBook.scale = 0.3

  //mathBook = createSprite(370,0,20,20)
  //mathBook.addImage(mathBookImg)
  //mathBook.scale = 0.3

  //historyBook = createSprite(690,0,20,20)
  //historyBook.addImage(historyBookImg)
  //historyBook.scale = 0.3

 //geographyBook = createSprite(1008,0,20,20)
 //geographyBook.addImage(geographyBookImg)
 //geographyBook.scale = 0.3

  //scienceBook = createSprite(1280,0,20,20)
  //scienceBook.addImage(scienceBookImg)
  //scienceBook.scale = 0.3


  

  start = createSprite(740,350,200,100);
  start.addImage(startButtonImg);
  start.scale = 0.9

   bookGroup = new Group()

  student.visible = false;
  //englishBook.visible = false
  //mathBook.visible = false
  //historyBook.visible = false
  //geographyBook.visible = false
  //scienceBook.visible = false




 



  
}

function draw() {
  background(backgroundImg);
  //background("black")
 
  
if(mousePressedOver(start)){
  spawnBooks();
  student.x = mouseX
  start.visible = false;
  student.visible = true;
  spawnObstacles();


  

}

  drawSprites();
}

function spawnBooks(){
 if (frameCount%100===0){
 book = createSprite(random(50,800), 50, 100, 100)
 var rand = Math.round(random(1,5)); 
   switch(rand){
   case 1:book.addImage(englishBookImg)
   break;
     case 2: book.addImage(mathBookImg)
     break;
     case 3: book.addImage(historyBookImg)
     break;
     case 4: book.addImage(geographyBookImg)
     break;
     case 5: book.addImage(scienceBookImg)
     break;
     default:break
     
   }
   book.scale = 0.3
   book.velocityY = 7
   book.lifetime = 300
    bookGroup.add(book);
   }
  
 }

 function spawnObstacles(){

 }

function reset(){

}




