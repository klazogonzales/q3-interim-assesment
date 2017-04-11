var x = 300;
var y = 200;
var speedx = 8;
var speedy = 6;
//arrays
var numbers=[15,22,48,37];
var budi=["mr.","budi","is","lit"];
var k=0;

function setup(){
    createCanvas(600,400);
}
function draw(){
    background(0,255,255);
    var x=0;
while(x<650){
    fill(0,255,0);
ellipse(x, 255, 25, 25);
x=x+50;
}
for(var x= 0; x<650; x=x+50){
    fill(255,0,0)
ellipse(100,x, 25, 25);
}
for(var x= 0; x<650; x=x+50){
    fill(66, 226, 244)
ellipse(200,x, 25, 25);
}
for(var x= 0; x<650; x=x+50){
    fill(119, 48, 160)
ellipse(300,x, 25, 25);
}
 flower(100,300);
 flower(200,300);
 flower(300,300);
 flower(400,300);
 flower(500,300);
 bouncingBall();
 for(var i = 0; i < 4; i++){
        ellipse((i+1)*100,200,numbers[i], numbers[i]);
    }
    
    fill(255);
    textSize(50);
    text(budi[k], 230, 150);
}

function mousePressed(){
    k++;
    if(k==budi.length){
        k=0;
    }

 
}

function flower(x,y){
    fill(25,150,50);
    rect(x-5,y,10,100);
    
    noStroke();
    fill(174, 106, 226);
    ellipse(x+10,y-10,35,35);
    ellipse(x+10,y+10,35,35);
    ellipse(x-10,y-10,35,35);
    ellipse(x-10,y+10,35,35);
    
    fill(255,200,0);
    ellipse(x,y,25,25);
    }
    
    function bouncingBall(){
        stroke(255);
    strokeWeight(4);
    fill(0,250,0);
    ellipse(x, y, 50, 50);

    y = y + speedy;
    x = x + speedx;
    
    if(x>600 || x<0){
        speedx = -speedx;
    }
     if(y>400 || y<0){
        speedy = -speedy;
    }
    
}