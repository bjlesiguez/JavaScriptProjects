// utilizing ternary operators
function vote_Function() {
    var Age, Can_Vote;
    Height = document.getElementById("Vote").value;
    Can_Vote = (Age > 18) ? "You are still a minor.":"Yes, you can vote!";
    document.getElementById("Vote").innerHTML = Can_Vote;
}

// utilizing this, new, var oop keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Ben = new Vehicle("Toyota", "Corolla", 2021, "Black");
var Jess = new Vehicle("Honda", "Civic", 2022, "Blue");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Ben drives a " + Ben.Vehicle_Color +"-colored" + Ben.Vehicle_Model + 
    " manufactured in " + Ben.Vehicle_Year;
 }

 function Laptop(Make, Model, Year, Color) {
  this.Laptop_Make = Make;
  this.Laptop_Model = Model;
  this.Laptop_Year = Year;
  this.Laptop_Color = Color;
  
}

var Es = new Laptop("Lenovo", "Ideapad 3", 2020, "Silver");
var Ben = new Laptop("HP", "Pavillon", 2021, "Black", "Feb");
var Jess = new Laptop("Dell", "Inspiron", 2022, "Gray");
function natFunction() {
  document.getElementById("New_and_This").innerHTML = 
  "Ben has a " + Ben.Laptop_Color +" colored " + Ben.Laptop_Make + "  " + Ben.Laptop_Model + 
  " manufactured in " + Ben.Laptop_Year;
}







