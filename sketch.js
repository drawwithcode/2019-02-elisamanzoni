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
  var colorList = ['	#000000',
                 '#ffffff',

                 '	#9533ff',
                 '	#3733ff',

                 '	#4cff3d',
                 '	#79b521',

                 '	#ed1c24',
                 '	#b44b24',

                 '	#bcbec0',
                 '	#6d6e71',

                 '	#4cf070',
                 '	#00a79d',

                 '	#ff0a65',
                 '	#b531b0',

                 '	#fff200',
                 '	#fbb040',
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

    if (random()<=0.5 && pmouseX<250)
    { fill(colorList[2]); }

    else if (random()>=0.5 && pmouseX<250)
    { fill(colorList[3]); }


    else if (random()<=0.5 && pmouseX<450 && pmouseX>250)
    { fill(colorList[4]); }

    else if (random()>=0.5 && pmouseX<450 && pmouseX>250)
    { fill(colorList[5]); }


    else if (random()<=0.5 && pmouseX<650 && pmouseX>450)
    { fill(colorList[6]); }

    else if (random()>=0.5 && pmouseX<650 && pmouseX>450)
    { fill(colorList[7]); }


    else if (random()<=0.5 && pmouseX<850 && pmouseX>650)
    { fill(colorList[8]); }

    else if (random()>=0.5 && pmouseX<850 && pmouseX>650)
    { fill(colorList[9]); }


    else if (random()<=0.5 && pmouseX<1050 && pmouseX>850)
    { fill(colorList[10]); }

    else if (random()>=0.5 && pmouseX<1050 && pmouseX>850)
    { fill(colorList[11]); }


    else if (random()<=0.5 && pmouseX<1250 && pmouseX>1050)
    { fill(colorList[12]); }

    else if (random()>=0.5 && pmouseX<1250 && pmouseX>1050)
    { fill(colorList[13]); }


    else if (random()<=0.5 && pmouseX<1450 && pmouseX>1250)
    { fill(colorList[14]); }

    else if (random()>=0.5 && pmouseX<1450 && pmouseX>1250)
    { fill(colorList[15]); }

    else { noFill(); }

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
