function preload(){
  // put preload code here
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(18);






}

function draw() {

  var x = 0;
  var y = 50;
  var colorList = ['	#fff200',
                 '#ffb700',
                 '	#9533ff',
                 '	#3733ff'
                              ];


  for(var x = 0; x < windowWidth; x+=100)
  { for(var y = 0; y < windowHeight+50; y+=50)
  {
    var x2 = x+100;
    var y2 = y-50;
    var x3 = x+100;
    var y3 = y;
    var x4 = x;
    var y4 = y+50;
    noStroke();

    if (random()<0.5)
    { fill(colorList[2]); }

    else {  fill(colorList[3]);  }

  quad(x, y, x2, y2, x3, y3, x4, y4) ;
  }
  }

  //blue(color)

  for(var x = 0; x < windowWidth; x+=100)
  { for(var y = 0; y < windowHeight+50; y+=50)
  {
  var x2 = x+100;
  var y2 = y-50;
  var x3 = x+100;
  var y3 = y;
  var x4 = x;
  var y4 = y+50;
  noStroke();

  if (x==100 && y==-50 || x==100 && y==50 || x==100 && y==150 || x==100 && y==250 || x==100 && y==350 || x==100 && y==450 || x==100 && y==550 || x==100 && y==650 || x==100 && y==750 ||
    x==300 && y==-50 || x==300 && y==50 || x==300 && y==150 || x==300 && y==250 || x==300 && y==350 || x==300 && y==450 || x==300 && y==550 || x==300 && y==650 || x==300 && y==750 ||
    x==500 && y==-50 || x==500 && y==50 || x==500 && y==150 || x==500 && y==250 || x==500 && y==350 || x==500 && y==450 || x==500 && y==550 || x==500 && y==650 || x==500 && y==750 ||
    x==700 && y==-50 || x==700 && y==50 || x==700 && y==150 || x==700 && y==250 || x==700 && y==350 || x==700 && y==450 || x==700 && y==550 || x==700 && y==650 || x==700 && y==750 ||
    x==900 && y==-50 || x==900 && y==50 || x==900 && y==150 || x==900 && y==250 || x==900 && y==350 || x==900 && y==450 || x==900 && y==550 || x==900 && y==650 || x==900 && y==750 ||
    x==1100 && y==-50 || x==1100 && y==50 || x==1100 && y==150 || x==1100 && y==250 || x==1100 && y==350 || x==1100 && y==450 || x==1100 && y==550 || x==1100 && y==650 || x==1100 && y==750 ||
    x==1300 && y==-50 || x==1300 && y==50 || x==1300 && y==150 || x==1300 && y==250 || x==1300 && y==350 || x==1300 && y==450 || x==1300 && y==550 || x==1300 && y==650 || x==1300 && y==750 )
  { fill(colorList[1]);}

  else {  noFill();  }

  quad(x, y, x2, y2, x3, y3, x4, y4) ;
  }
  }

  //al contrario

  for(var x = 0; x < windowWidth; x+=100)
  { for(var y = -50; y < windowHeight+50; y+=50)
  {
  var x2 = x+100;
  var y2 = y+50;
  var x3 = x+100;
  var y3 = y+100;
  var x4 = x;
  var y4 = y+50;
  noStroke();

  if (x==100 && y==-50 || x==100 && y==50 || x==100 && y==150 || x==100 && y==250 || x==100 && y==350 || x==100 && y==450 || x==100 && y==550 || x==100 && y==650 || x==100 && y==750 ||
    x==300 && y==-50 || x==300 && y==50 || x==300 && y==150 || x==300 && y==250 || x==300 && y==350 || x==300 && y==450 || x==300 && y==550 || x==300 && y==650 || x==300 && y==750 ||
    x==500 && y==-50 || x==500 && y==50 || x==500 && y==150 || x==500 && y==250 || x==500 && y==350 || x==500 && y==450 || x==500 && y==550 || x==500 && y==650 || x==500 && y==750 ||
    x==700 && y==-50 || x==700 && y==50 || x==700 && y==150 || x==700 && y==250 || x==700 && y==350 || x==700 && y==450 || x==700 && y==550 || x==700 && y==650 || x==700 && y==750 ||
    x==900 && y==-50 || x==900 && y==50 || x==900 && y==150 || x==900 && y==250 || x==900 && y==350 || x==900 && y==450 || x==900 && y==550 || x==900 && y==650 || x==900 && y==750 ||
    x==1100 && y==-50 || x==1100 && y==50 || x==1100 && y==150 || x==1100 && y==250 || x==1100 && y==350 || x==1100 && y==450 || x==1100 && y==550 || x==1100 && y==650 || x==1100 && y==750 ||
    x==1300 && y==-50 || x==1300 && y==50 || x==1300 && y==150 || x==1300 && y==250 || x==1300 && y==350 || x==1300 && y==450 || x==1300 && y==550 || x==1300 && y==650 || x==1300 && y==750
      )
  { fill(colorList[0]);
    noStroke();}

  else {  noFill();  }

  quad(x, y, x2, y2, x3, y3, x4, y4) ;
  }
  }


}
