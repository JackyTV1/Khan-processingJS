//HACER CLICK EN LA PANTALLA 
var kokoro= getImage("cute/Heart");


var Thead=104;  //225
var PosHx=Thead+Thead/9; //250
image(kokoro,100,360,10,10);

draw= function() {

background(0, 0, 0);
image(kokoro,mouseX-1,mouseY-250,79,60);



noStroke();
//body
fill(194, 153, 232);
//ellipse(150,280,180,180);

//head

fill(194, 153, 232);
ellipse(PosHx,PosHx-PosHx*4/9,Thead,Thead+Thead/45);

//mouth
fill(8, 7, 8);
bezier(PosHx-PosHx*49/250,PosHx-PosHx*41/125,PosHx+PosHx*29/125,PosHx-PosHx*63/250,PosHx-PosHx*71/250,PosHx-PosHx*63/125,PosHx-PosHx*9/250,PosHx-PosHx*6/25);
ellipse (PosHx-PosHx*16/125,PosHx-PosHx*7/25,Thead-Thead*8/9,Thead-Thead*8/9);

//eyes
fill(0, 0, 0);
ellipse(PosHx-PosHx/9,PosHx-PosHx*13/25,Thead-Thead*11/15,Thead-Thead*11/15); //up left
ellipse(PosHx+PosHx*4/25,+PosHx-PosHx*8/25,Thead-Thead*11/15,Thead-Thead*11/15);  //right


fill(255, 255, 255);
ellipse(PosHx-PosHx*2/25,PosHx-PosHx*27/50,Thead-Thead*41/45,Thead-Thead*41/45); //up left/big white
ellipse(PosHx+PosHx*9/50,PosHx-PosHx*42/125,Thead-Thead*41/45,Thead-Thead*41/45);  //right/big whit

ellipse(PosHx-PosHx*7/50,PosHx-PosHx/2,Thead-Thead*43/45,Thead-Thead*43/45); //up left/small white
ellipse(PosHx+PosHx*3/25,PosHx-PosHx*3/10,Thead-Thead*43/45,Thead-Thead*43/45);  //right/small white

//left ear -------------------

//base
fill(194, 153, 232);

triangle (PosHx-PosHx*7/25,PosHx-PosHx*18/25,PosHx-PosHx*2/5,PosHx-PosHx*49/50,PosHx-PosHx/25,40);//left ear

triangle (PosHx+PosHx*21/50,PosHx-PosHx*7/25,PosHx+PosHx*21/50,PosHx-PosHx*13/25,PosHx+PosHx*3/5,PosHx-PosHx*17/50); //right ear

//redondeo superior izquierdo
rotate(20);
ellipse (PosHx-PosHx/5,PosHx-PosHx*59/50,Thead-Thead*23/45,Thead-Thead*8/9);
//redondeo inferior izquierdo
rotate(45);
ellipse (PosHx-PosHx*151/250,PosHx-PosHx*77/50,Thead-Thead*11/9,Thead-Thead*41/45);

//triangulo interno rosa izquierdo
rotate(-45);
fill(209, 146, 189);
stroke(209, 146, 189);
triangle(PosHx-PosHx/5,PosHx-PosHx*28/25,PosHx-PosHx*19/50,PosHx-PosHx*57/50,PosHx-PosHx*6/25,PosHx-PosHx*53/50);




//redondeo superior derecho
stroke(194, 153, 232);
fill(194, 153, 232);
rotate(25);
ellipse (PosHx+PosHx*2/5,PosHx-PosHx*83/50,Thead-Thead*26/45,Thead-Thead*13/15);

//triangulo interno rosa
fill(209, 146, 189);

triangle(PosHx+PosHx*2/5,PosHx-PosHx*41/25,PosHx+PosHx*13/25,PosHx-PosHx*407/250,PosHx+PosHx*23/50,PosHx-PosHx*38/25);

 if (mouseIsPressed) {
        Thead++;
        PosHx++;
    } else {
        Thead=Thead;
    }


};

   