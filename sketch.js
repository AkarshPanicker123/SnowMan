var backgroundimg;
var snow1 , snowimg , snow2 , snow3 , snow4 , snow5 , snow6; 
var snowman_img , snowman ;
function preload(){
  backgroundimg = loadImage("snow2.jpg");
  snowimg = loadImage("snow4.webp");
  // snowman_img = loadImage("icon_snowman_1024_right.png")
}
function setup() {
  createCanvas(900,500);
  snow1=createSprite(520,90,10,10);
  snow1.addImage(snowimg);
  snow1.scale = 0.2;

  snow6=createSprite(120,100,10,10);
  snow6.addImage(snowimg);
  snow6.scale = 0.2;

  snow5=createSprite(590,220,10,10);
  snow5.addImage(snowimg);
  snow5.scale = 0.2;

  snow4=createSprite(421,150,10,10);
  snow4.addImage(snowimg);
  snow4.scale = 0.2;

  snow3=createSprite(220,180,10,10);
  snow3.addImage(snowimg);
  snow3.scale = 0.2;

  snow2=createSprite(750,120,10,10);
  snow2.addImage(snowimg);
  snow2.scale = 0.2;
  // snowman.addImage(snowman_img);
}

function draw() {
  background(backgroundimg);  
  drawSprites();
}