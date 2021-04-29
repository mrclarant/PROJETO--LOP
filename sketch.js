var largura = 220;
var altura = 45;
var xMenu = 50;
var yMenu1 = 200;
var yMenu2 = 270;
var yMenu3 = 340;
var tela = 1
var j = 0;
var i = 0 , ObX=0 , ObY=0 , x = 20 ,  y = 20 ;
var velocidadeX = 3 , velocidadeY = 2 ;
var gravidade = 5  ;
var vidas = 2  ;
var nivel = 1 ;
var coo = [ ];
var inc = 0 ;
var img , porta , prova , inicio , chuva = [ ] , tiro = [ ] ;
var p1 = 400 , p2 = 0 , p3 = 0 , a = 0 ;
var x 
var y 

var img //  personagem princial
var img1// prova final
var img3 // cai do ceu (msk)(chuva)prova
var img4 // inicio
var img5 // cenário t2
var img6 // muro 
var img1

function preload() {
  img =  loadImage('perso3.png')// personagem
  img1 = loadImage('prova.png') // porta objetivo
  img3 = loadImage('t2- compri(m).JPG')
  img5 = loadImage("cenario.jpg")
  img6= loadImage('me.jpeg')
  
  
}

function setup() {
   createCanvas(430, 425);   
 // o for irá setar coordenadas aleatórias	
	for(var k=0;k<20;k++){coo[k]=random(30,360);
	chuva[k]=random(50,380);
}
}

function draw() {
  background(img5);
  textStyle(BOLDITALIC);
 // TELA 1
if (tela == 1 ){
  
  //INICIAR O JOGO
   textAlign(CENTER);
   textSize(26);
    
  // INSTRU 1 (tela 1 conf)(mouse)
  if(mouseX > xMenu && mouseX < xMenu + largura &&  mouseY > yMenu1 && mouseY < yMenu1 + altura){
    stroke(color(0, 0, 255));
      fill(color(0, 0, 255));
      rect(xMenu, yMenu1, largura, altura, 15);
    if(mouseIsPressed){
      tela = tela +1;
    }
  }
  // INSTRU 1.1 C(tela 1) TEXT
    fill(500);
    noStroke();
    text("Jogar", 160, 230);
    noFill();
    stroke(color(0, 0, 255));
    rect(xMenu, yMenu1, largura, altura, 15);
  
   // INSTRU 2 (tela 2 conf)(mouse)
     if (mouseX > xMenu && mouseX < xMenu + largura &&      mouseY > yMenu2 && mouseY < yMenu2 + altura){
      stroke(color(0, 0, 255));
      fill(color(0, 0, 255));
      rect(xMenu, yMenu2, largura, altura, 15);
      if(mouseIsPressed){
      tela = tela+2;
   }
   }
   // INSTRU 2.2 C (tela 1) TEXT2
    fill(500);
    noStroke();
    text("Informações", 165, 300);
    noFill();
    stroke(color(0, 0, 255));
    rect(xMenu, yMenu2, largura, altura, 15);
    
               // (mouse) T1
   if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
      stroke(200);
      fill(color(0, 0, 255));
      rect(xMenu, yMenu3, largura, altura, 15);
      if (mouseIsPressed){
        tela = tela +3;
      } 
   }
    // 
    fill(500);
    noStroke();
    text("Créditos", 160, 365);
    noFill();
    stroke(color(0, 0, 255));
    rect(xMenu, yMenu3, largura, altura, 15);
  

} // TELA 2
  else if (tela == 2){
    
    // cenario
    
    stroke(255);
    fill(20);
    background(img5,x,y,50,40) ;
    if(keyIsDown(13)){j=400}
	
	image(img,x,y,50,60);//personagem
	textSize(20);
	fill(330,499);
    
    //cor de fundo
	text('Vidas: '+vidas,300,30);
	text('Nivel: '+nivel,300,50);
    textSize(20);
	fill(0);
    text('cla',355,340);
	fill(255,100,100); //cor do objetivo
    image(img1,375,375,50,60)//objetivo
	fill('rgba(0,255,0, 0.25)')
	rect(05,87,150,10);//primeira plataforma
	rect(190,180,180,15);//segunda plataforma
	rect(0,260,200,10);//terceira plataforma
	rect(250,340,150,10);//quarta plataforma;
    
    //ESPINHOS		
fill(255, 204, 0)
triangle(0+ObY,400,40+ObY,400,20+ObY,340);
triangle(40+ObY,400,80+ObY,400,60+ObY,340);
triangle(80+ObY,400,120+ObY,400,100+ObY,340);
triangle(120+ObY,400,160+ObY,400,140+ObY,340);


    //OBJETOS MOVÉIS
fill('red');
ellipse(p1,150,40,40);
p1= p1-velocidadeX;
  
fill(255, 220, 100)
ellipse(p2,230,40,40);
p2= p2+velocidadeX;
    
//DIFICULDADES
if(nivel>1){for(k=0;k<5+nivel;k++){
image(img3,chuva[k],ObX,20,25);
if(dist(x,y,ObX,chuva[k])<15){morte();}}
ObX=ObX+velocidadeY;}//Provas irão cair a partir do nivel 3
if(ObX>400){ObX=0}
    
  //rentagulos azuis darão vida ao personagem		
    for(k=0;k<=(nivel*1);k++){
	rect(coo[k]+inc,coo[k],20,20)
	if(dist(x,y,coo[k],coo[k])<15){
	vidas=vidas+1;
	coo[k]=-35;
}}
    
//CONDIÇÕES
if(x<15){x=15}// impede que o personagem saia da tela no eixo X
if(x>380){x=380}// impede que o personagem saia da tela no eixo X
if(y<15){y=15}// impede que o personagem saia da tela no eixo Y
if(y>380){y=380}// impede que o personagem saia da tela no ei
    
//Condições para que o personagem fique sob às plataformas
if(y>0&&x<150&&y<30){y=20}
if(y==120&&x>200&&y<130){y=115}
if(y==200&&x<200){y=195}
if(y==280&&x>250){y=275}

    //colisão com os espinhos
if(dist(x,y,ObY,400)<30){morte();
	}
if(dist(x,y,ObY+60,400)<40){morte();
	}
if(dist(x,y,ObY+100,400)<40){morte();
	}
if(dist(x,y,ObY+140,400)<40){morte();
	}
for(var k=0;k<=nivel;k++){
	if(dist(x,y,p1,115)<=20||dist(x,y,p2,200)<=20){morte();}
  
//se algum objeto atingir o personagem ele perderá uma vida e retornará ao inicio do cenário	
}  
 }
  if(vidas<1){
	clear();
	fill(0);
	rect(0,0,400,400);
	textSize(20);
	fill(255);
	text('game over',125,200);
	text('Press enter para voltar',125,250);
if(keyIsDown(13)){ 
	
		tela=1
  
}
  
}  
  
for(k=0;k<=nivel;k++){
		fill(0,0,200)
		rect(coo[k],coo[k],20,20)
	}
   if(x>=365&&y>360){
		textSize(20);
		fill(255);
		text('Press F',200,200);
		if(keyIsDown(70)){

		levelup();
	}}	
  if(vidas>=5){vidas=5}//limitador da quantidade de vidas	
y=y+gravidade;
if(nivel>7){
      fill(0);  
	  background(0)
	  fill(255);
	  textSize(20);
	  text("Voce venceu"+"\n"+"'Enter' para continuar",90,150)}
if(keyIsDown(13)){restart()
                 }
  
  //INTERAÇÕES
if(keyIsDown(65)||keyIsDown(37)){x-=4}//LEFT_ARROW ou "A" levam o personagem para esquerda

if(keyIsDown(68)||keyIsDown(39)){x+=4}//RIGHT_ARROW ou "D" levam o personagem para esquerda
	
if(keyIsDown(32)){y=y-15}//ESPAÇO faz o personagem pular	
//Uma variável i determinada previamente servirá de condição inicial para que objetos apareçam no cenário, 
//quando as  coordenadas deste objetos forem superiores às coordenadas da tela, deverá aparecer outro objeto em uma posição diferente do cenário*/
if(y>110){i=1;}
if(y>140){i=2;}
if(y>200){i=3;
	 }
if(p1<200){velocidadeX=-3
					p1=200}
if(p1>400){velocidadeX=3
					}	
if(p2>200){velocidadeX=-3
					p2=200}
if(p2<0){velocidadeX=3}

if(p3<230){p3=400}	 

if(y>=200){move_espinhos();}
  
 // infor 
if(tela == 3){
  clear();
	fill(0);
	rect(0,0,400,400);
	textSize(20);
	fill(255);
	text('a definir ',125,200);
	
if(keyIsDown(13)){ 
	
		tela=2-1
  
}}
  

  

    
  
 if(tela == 4){
   clear();
	fill(0);
	rect(0,0,400,400);
	textSize(20);
	fill(255);
	text('Maria Clara André',125,200);
	text('press enter para voltar ao menu inicial',125,250);
    image(img6, 140, 230, 140, 170)
if(keyIsDown(13)){ 
	
		tela=2-1
  
}
 
}
  
}
function restart(){
	nivel=1;
		x=10
		y=20
		vidas=3
		a =0
}
function morte(){
	vidas--
	x=20; 
	y=10;

}
function levelup(){
nivel=nivel+1
		x=20;
		y=10;
		i=1
		ObX=0
}
function clear(){	
	for(var k=0;k<20;k++)
    {coo[k]=-20;
	prova[k]=-20;}
	ObX=0
    ObY=0
    x=-20 
    y=-25;
	p1=-400
    p2=-300
    a=0 
}

function move_espinhos(){
ObY=ObY+1+inc
if(ObY>150){inc=-2}
if(ObY<0){inc=0}}

