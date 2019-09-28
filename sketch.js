function preload(){
  // put preload code here
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  var x = 0;
  var y = 50;
  var colorList = ['	#3dc9b3',
                 '#309383',
                 '	#101010',
                 '	#a1a0a0',
                 '	#e1e1e1'
                              ];


  for(var x = 0; x < windowWidth; x+=100)
  {
  for(var y = 0; y < windowHeight+50; y+=50)
  {
    var x2 = x+100;
    var y2 = y-50;
    var x3 = x+100;
    var y3 = y;
    var x4 = x;
    var y4 = y+50;
    noStroke();

    if (random()<0.2)
    { fill(colorList[3]); }

    else if(0.2< random() <0.4)
    { fill(colorList[0]);}

    else if(0.4< random() <0.6)
    { fill(colorList[2]); }

    else if(0.6< random() <0.8)
    { fill(colorList[4]); }

    else {  fill(colorList[1]);  }

  quad(x, y, x2, y2, x3, y3, x4, y4) ;
  }
}

}

function draw() {
  // put drawing code here
}
