// HACER CLICK EN LA PANTALLA PARA AÑADIR PECES EN LA PECERA
background(89, 216, 255);

var rocas = function (x,y,t){
noStroke();
fill (99, 92, 92);
ellipse(x,y,t,t);

};

rocas(28,381,90);
rocas(333,369,90);

var pez = function(centerX,centerY,bodyColor,eyecolor) {
//var centerX = 200;
//var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
//var bodyColor = color(162, 0, 255);
//var eyecolor = color(255, 0, 0);
noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(eyecolor);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
         
};

mouseClicked = function(){

pez (mouseX,mouseY,color(random(0,225),random(0,225), random(0,225), random(0,225)), color(random(0,225),random(0,255), random(0,255), random(0,255)));     

};



