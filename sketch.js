var ladrao,diamente,laser1,laser2,paredes
var estadojogo

function setup(){
 createCanvas(400,400);
montarjogo()
estadojogo= "parado"
}
function draw(){
background(0);

drawSprites()
if(estadojogo == "parado"){
textSize(20)
fill("white")
text("Pressione 'ESPAÇO' para Iniciar",60,160)
if(keyDown("SPACE")){
laser1.velocityY= 5
laser2.velocityY= -5
estadojogo = "play"
}
}

if(estadojogo == "play"){
laser1.bounceOff(paredes)
laser2.bounceOff(paredes)
if(keyDown("a"))
{ladrao.x=ladrao.x + -4}
//
else if(keyDown("d"))
{ladrao.x=ladrao.x + 4}
//
else if(keyDown("w"))
{ladrao.y=ladrao.y + -4}
//
else if
(keyDown("s"))
{ladrao.y=ladrao.y + 4}

ladrao.collide(paredes)
  
if(ladrao.isTouching(laser1)||ladrao.isTouching(laser2))
{
  estadojogo = "gameover"
fimjogo()



}
}
if(ladrao.isTouching(diamente))
{
  estadojogo = "winner"


}

  if( estadojogo == "gameover"){

fill("white")
textSize(30)
text("O Ladrão Foi Capturado",50,200)
textSize(15)
text("pressione 'R' para Reniciar",100,250)


if(keyDown("r")){
estadojogo = "parado"
montarjogo()
}

}
if(estadojogo == "winner"){
fimjogo()
textSize(30)
fill("white")
text("O Diamente foi Roubado",50,200)
textSize(15)
text("pressione 'R' para Reniciar",100,250)
if(keyDown("r")){
estadojogo = "parado"
montarjogo()
}
}
  
}
  

  




function montarjogo(){
ladrao = createSprite(200,390,20,20)
diamente = createSprite(360,20,20,20)
laser1 = createSprite(100,200,200,10)
laser1.shapeColor = "red"
laser2 = createSprite(300,200,200,10)
laser2.shapeColor = "red"
paredes = createEdgeSprites()
}
function fimjogo(){
ladrao.remove()
diamente.remove()
laser1.remove()
laser2.remove()
}

