
//utilizing global and local functions

var X = 82;

{
  let X = 33;
  document.write("<br>" + X);
}
document.write("<br>" + X);
document.write("<br>");

var Y = 82;
document.write(Y);
{
  var X = 33;
  document.write("<br>" + Y);
}
document.write("<br>" + X);

document.write(X);

document.write("<br>");


//utilizing let keyword with an object
let car = {
  make: "Toyota ",
  model: "Camry ",
  year: "2023 ",
  color: "black ",
  description : function() {
    return "The car is a " + "" + this.year + this.color + this.make + this.model;
  }
};
 document.getElementById("Car_Object").innerHTML = car.description();




