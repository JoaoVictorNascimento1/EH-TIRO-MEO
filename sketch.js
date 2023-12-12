var tela=1;
var largura=200;
var altura=50;
var xbotao=150;
var ybotao1=150;
var ybotao2=230;
var ybotao3=303;
var x=76;
var y=200
var z=298
var speed1=7
var speed2=5
var speed3=3

var img;

//parte vetor
var contImg = 0
var imagens = []
var explodindo = false  
var xExp 
var yExp

function preload() {
  img = loadImage('cenarioc.png');
  img2 = loadImage('cenariot2c.png')
  img3= loadImage('cenariot3c.png');
  img4= loadImage('cenariot42c.png');
  for(i=0; i<6; i++){
    imagens[i] = loadImage(`s${i+1}.png`)
  }
}
function setup() {
  createCanvas(500, 500);
}

function draw() {
  textStyle(NORMAL);
if (tela==1){
  background(img);
  
// JOGAR 
  textAlign(CENTER)
  textSize(40)
  
  noStroke()
  noFill()
  rect(xbotao, ybotao1, largura, altura)
  if(mouseX>=xbotao && mouseX<=350 && mouseY>=150 && mouseY<=200 && mouseIsPressed == true){
    tela=2
}
  fill(240)
  noStroke()
  text("JOGAR", 250, 185)
//AJUDA  
  noStroke();
  noFill();
  rect(xbotao, ybotao2, largura, altura);
  if(mouseX>=xbotao && mouseX<=350 && mouseY>=230 && mouseY<=280 && mouseIsPressed == true){
    tela=3
  }
  
  fill(240)
  noStroke()
  text("AJUDA", 250, 265)
//CRÉDITOS
  noStroke(200);
  noFill();
  rect(xbotao, ybotao3, largura, altura);
  
  fill(240)
  noStroke()
  text("INFO", 250, 340)
    if(mouseX>=xbotao && mouseX<=350 && mouseY>=303 && mouseY<=353 && mouseIsPressed == true){
    tela=4
  }
}
if(tela==2){
  background(img2)
  textAlign(CENTER)
  textSize(18)
  
  stroke(200);
  fill(20);
  rect(20, 440, 60, 50);
  if(explodindo) {
    image(imagens[parseInt(contImg)],xExp,yExp,50,50)
    contImg = contImg + 0.3 
    if ( contImg>=6){
      contImg = 0
      explodindo = false      
    }
  }
  if(mouseX>=20 && mouseX<=80 && mouseY>=440 && mouseY<=490 && mouseIsPressed == true){
    tela=1
}
  //bloco vermelho
  stroke(200)
  fill(200)
  text("voltar", 50,470)
  
  noStroke()
  fill(255, 0, 0);
  rect(x, 118, 30, 30);
  x=x+speed1
if(x>390||x<80){
  speed1=-speed1
}  
  //bloco verde
  noStroke()
  fill(0, 255, 0);
  rect(y, 195, 30, 30);

  y=y+speed2
if(y>390||y<80){
  speed2=-speed2
}
//bloco azul
  noStroke()
  fill(0, 0, 255);
  rect(z, 290, 30, 30);

  z=z+speed3
if(z>390||z<80){
  speed3=-speed3
}
}  
if(tela==3){
  background(img3)
  textAlign(CENTER)
  textSize(18)
  
  noStroke(200)
  noFill()
  rect(140, ybotao2, 230, 50)

  fill(240)
  noStroke()
  text("Basta clicar nos blocos\n"+ "coloridos", 250, 250)
  
  stroke(200)
  fill(20)
  rect(20, 150, 60, 50)
    if(mouseX>=20 && mouseX<=80 && mouseY>=150 && mouseY<=200 && mouseIsPressed == true){
    tela=1
}
  
  stroke(200)
  fill(200)
  text("voltar", 50,180)
}
if(tela==4){
  background(img4)
  textAlign(CENTER)
  textSize(18)
  
  noStroke(200)
  noFill()
  rect(140, ybotao1, 230, 200)

  fill(240)
  noStroke()
  text("Jogo feito por\n"+"João Victor do N.R de\n"+ "Andrade\n"+"UFRN\n"+" Prof.Orivaldo Santana", 250, 195)
  stroke(200)
  fill(20)
  rect(20, 150, 60, 50)
    if(mouseX>=20 && mouseX<=80 && mouseY>=150 && mouseY<=200 && mouseIsPressed == true){
    tela=1
}
  
  stroke(200)
  fill(200)
  text("voltar", 50,180)
}
}

function mouseClicked(){
  if(tela==2){
  if(mouseX>=x && mouseY>=118 && mouseY<=148){
    x=600
}
if(mouseX>=y && mouseY>=197 && mouseY<=227){
    y=600
}
if(mouseX>=z && mouseY>=292 && mouseY<=322){
    z=600
}
if(x>=500&&x<=700&&y>=500&&y<=700&&z>=500&&z<=700){
  x=390
  y=200
  z=280
}
}
  explodindo = true 
  xExp = mouseX-30
  yExp = mouseY-30
}