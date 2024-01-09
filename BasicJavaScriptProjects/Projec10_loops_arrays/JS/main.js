
//utilizing while loop
function Call_Loop() {
  var Digit = "";
  var X = 1;
  while (X < 11) {
    Digit += "<br>" + X;
    X++;
  }
  document.getElementById("Loop").innerHTML = Digit;
}


//utilizing for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
  Content += Instruments[Y] + "<br>";  
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}

//utilizing arrays and objects
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "Sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

//utilizing const
function Constant_Function() {
  const Sports_Ball = {type:"basketball", brand:"Spalding", color:"Orange"};
  Sports_Ball.color = "black";
  Sports_Ball.price = "$50";
  document.getElementById("Constant").innerHTML = "The cost of the " + 
      Sports_Ball.type + " was " + Sports_Ball.price;
}















