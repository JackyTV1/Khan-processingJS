
//presionar la tarjeta para tener la respuesta
draw = function() {
    background(165, 219, 162);
    fill(255, 254, 222);
    rect(20, 100, 364, 200);

    fill(0, 0, 0);
    textSize(20);
   // text("What programming language is this?", 39, 200);
    
    
    if (mouseIsPressed){
       text("Javascript", 150, 200);
    } else { text("What programming language is this?", 39, 200); }
    
};
