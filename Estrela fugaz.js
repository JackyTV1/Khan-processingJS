//estrella fugaz sencilla

var xPos = 390;
var yPos = 0;

var xNuD=260;
var yNuD=70;

var xNuI=50;
var yNuI=120;

draw = function() {
    background(29, 40, 115);
    
    //shooting stars
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos-300, yPos+1, 10, 10);
   ellipse(xPos-30, yPos+1, 5, 5);
   ellipse(xPos-150, yPos-60, 5, 5);
    ellipse(xPos+350, yPos+30, 5, 5);
    
    ellipse(xPos+250, yPos-10, 5, 5);
    xPos-=2; 
    yPos+=1;
//luna    
 fill(201, 195, 201);
ellipse(70,70,80,80);

 fill(166, 156, 166);
 stroke(166, 156, 166);
ellipse(45,70,15,15);
ellipse(55,80,25,25);
ellipse(95,65,15,15);

//nubes
fill (247, 247, 247);
 stroke(247, 247, 247);
 //nube izquierda
ellipse(xNuI,yNuI,200,45);
ellipse(xNuI,yNuI,105,55);
 //nube derecha
ellipse(xNuD,yNuD,200,45);
ellipse(xNuD,yNuD,105,55);

xNuI++;
xNuD--;
stroke(61, 35, 35);
fill(107, 70, 70);
rect(250,200,70,170);
rect(320,235,70,160);
rect(140,180,50,170);
rect(70,200,70,170);
rect(10,235,70,160);

fill (41, 77, 47);
stroke(41, 77, 47);
triangle(1,400,200,300,399,400);
ellipse(200,313,48,25);



//ventanas rectangulares
//izquiera
fill(176, 232, 33);
stroke(176, 232, 33);
rect(15,255,35,10);
rect(35,275,35,10);
rect(15,300,35,10);
rect(35,320,35,10);

//cenrtro iz
rect(75,220,25,10);
rect(105,225,25,10);
rect(95,248,35,10);
rect(85,265,25,10);
rect(95,285,35,10);

//cenrtro centro
rect(155,220,25,6);
rect(155,200,25,6);
rect(155,238,25,6);
rect(155,255,25,6);
rect(155,270,25,6);

//derecha

rect(335,255,35,10);
rect(350,275,35,10);
rect(329,300,35,10);
rect(345,320,35,10);

//cenrtro der
rect(280,230,25,10);
rect(260,255,25,10);
rect(280,275,35,10);
rect(329,300,35,10);
rect(260,300,35,10);

};


