//LA PARTE VISUAL DEL BUSCADOR GOOGLE

textSize(80);

var xGoo=71; //60

fill(55, 0, 255);
text("G",xGoo,150);
text("g",xGoo+xGoo*9/4,150);

fill(255, 0, 0);
text("o",xGoo+xGoo*11/12,150);
text("e",xGoo+xGoo*61/20,150);

fill(255, 200, 0);
text("o",xGoo+xGoo*19/12,150);

fill(18, 166, 58);
text("l",xGoo+xGoo*17/6,150);

stroke(181, 181, 181);
fill(247, 247, 247);
rect(40,200,320,30);

strokeWeight(2.5);
ellipse (53,212,15,15);
line(60,218,70,225);

fill(227, 223, 227);
noStroke();
rect(90,270,98,30);
rect(200,270,98,30);

fill(69, 63, 63);
textSize(12);
text("Google Search",98,290);
textSize(11.5);
text("I'm Feeling Lucky",205,290);

