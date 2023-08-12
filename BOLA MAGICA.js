// PENSAR UNA PREGUNTA Y HACER CLICK PARA OBTENER LA RESPUESTA

fill(0, 0, 0);
ellipse(200, 200, 375, 375);


mouseClicked =function () {
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 6));
if (answer ===5) {
    text(answer, 196, 200);
    text(" DO IT !", 159, 229); 
} else if (answer <=3) {
  text(answer, 196, 200);
    text("OF COURSE ", 159, 229);    
} else  {
    text (answer,196,200);
    text ("NEVERMIND",159,229);}
};


