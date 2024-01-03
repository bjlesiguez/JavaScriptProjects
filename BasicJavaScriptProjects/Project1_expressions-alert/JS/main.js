//main.js

//window.alert method

var X = "Hello, World!";

window.alert(X); 


//document.write method

document.write("Hi this is B.\n");

//document.write method and creating two variables
var A = "This is a string.";
var myName = "Ben";
var B = "Ben told JM, \"Pass the ball! or I'll tell the coach!";
var C = "Device"+"s";
var D = "Conacatenated" + "String";
var Family = "The Co's", Dad = "Sid", Mom = "Es";
//creating two variables
var Sent1 = "This is the beginning of the string";
var Sent2 = " and this is the end of the string.\n";

//concatenating the two variables (Sent1 and Sent2) using document.write method
document.write(Sent1+Sent2);            

//an expression
document.write(8 * 8);



//event element 
function My_First_Function() {                                  //Defining a function and naming it
    var str = "This is the button text!";                       //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str;     //Putting the value of the variable ino the HTML ElementFromPoint with the "Button_Text" id
}