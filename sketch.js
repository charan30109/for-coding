var coins1=0;
var groundi;
var hero;
var heroi;
var snake;
var i;
var tower;
var coins;
var coinsi;
var charangroup;
var charan2;






function preload(){
groundi=loadImage("bacground2.jpg");
  heroi=loadImage("real hero.jpg");
 i=loadImage("i am a snake..jpg")
 coinsi=loadImage("coins.jpg");

}

function setup() {
   createCanvas(500,500);
   tower = createSprite(300,300);
   tower.addImage("tower",groundi);
   tower.velocityY = 1;
   tower.scale=3.2;
  
  
  hero=createSprite(250,350,20,20)
  hero.addImage("hi2",heroi);
  hero.scale=0.1;
  charangroup=new Group();
  charan2=new Group();
 
}

function draw() {
  textSize(24);
  text("hello + coins"+coins,300,50)
  background("black")
  drawSprites();
  if(tower.y > 300){
    tower.y = 250

  }
  charan();
  charan1();
  if (keyDown("left_arrow")){
 hero.x=hero.x - 3;
  }
   
  if(keyDown("right_arrow")){
    hero.x = hero.x + 3;
  }

  if(charan2.isTouching(hero)) {
  coins1=coins1+1;
  charan2.destroyEach();


  }
  if(charangroup.isTouching(hero)) {
    textSize(24);
  text("hello" + "coins" + coins1,200,50)
   text("gameover",250,250);
    charangroup.setvelocityEachY(0);
    charan2.setvelocityEachY(0);
    


  }
  
  
  
}


function charan(){
  if (frameCount%120===0){
    var one=Math.round(random(50,450));
snake=createSprite(one,100,10,10)
snake.velocityY=1;
snake.addImage("im",i);
snake.scale=.2
charangroup.add(snake)

  }


}

function charan1(){
  if (frameCount%100===0){
    var one=Math.round(random(50,450));
coins=createSprite(one,100,10,10)
coins.velocityY=1;
coins.addImage("ima",coinsi);
coins.scale=.2
charan2.add(coins)

  }
  


}