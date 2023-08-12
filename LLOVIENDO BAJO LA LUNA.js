//LLOVIENDO BAJO LA LUNA

var xPositions = [200];
var yPositions = [0];
var gotas = 0;
var left = 162;
var right = 269;
var agua = random (0.5,1.8);

while (gotas<165) {
    xPositions.push(random(0,400));
    yPositions.push(random(0,400));
    gotas++;
}



draw = function() {
    background(45, 33, 105);
    
     image (getImage("avatars/duskpin-ultimate"),220,240,180,170);
     ellipse(60,70, 80, 80);
     fill(45, 33, 105);
     ellipse(75,69, 70, 70);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(208, 221, 224);
        ellipse(xPositions[i], yPositions[i], agua, 10);
        yPositions[i] += 5;
         if (yPositions[i]>390) {
               yPositions[i]=0;
                                }
    }
    
    
    if  (mouseIsPressed) {
        background (189, 232, 242);
        
        fill (240, 237, 56);
        ellipse(190,40,70,70);
        
       //grass
       
       
       
       for (var ñ=-25; ñ<400; ñ+=42) {
           
           for (var m=280 ; m<400; m+=40) {
           image (getImage("cute/TreeUgly"),ñ,m,80,80);
           } 
       }
       
       image (getImage("cute/CharacterPrincessGirl"),190,200,100,150);
       image (getImage("space/rocketship"),right-240 ,20,100,150);
       image (getImage("avatars/old-spice-man-blue"),1 ,190,90,120);
       
        //nubes
        
        fill (245, 226, 227);
        //izquierda
        ellipse (left,70,126,97);
        ellipse (left +62,70,70,60);
        ellipse (left -62,70,70,60);
        
        //derecha
        ellipse (right,150,126,97);
        ellipse (right +62,150,70,60);
        ellipse (right -62,150,70,60);
        left--;
        right++;
    }
    
};
