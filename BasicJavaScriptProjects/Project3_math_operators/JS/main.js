
function addition_Function() { //addition function
        var addition = 2 + 2;
        document.getElementById("Math_Addition").innerHTML = " 2 + 2 = " + addition; //printing result in HTML
}

function subtraction_Function() { //subtraction function
    var subtraction = 10 - 2;
    document.getElementById("Math_Subtraction").innerHTML = " 10 - 2 = " + subtraction; 
}

function multiplication() { //multiplication function
    var simple_Math = 91 * 26;
    document.getElementById("Multiplication").innerHTML = "9 * 6 = " + simple_Math;    
} 

function division() {   //division function
    var simple_Math = 99 / 6;
    document.getElementById("Division").innerHTML = "99 / 6 = " + simple_Math;    
} 

function more_Math() {  //random function (+,*,/,-)
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10,divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {   //modulus operator function
    var simple_Math = 25 % 6;
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {  //negation operator function
    var x = 10;
    document.getElementById("Binary_Operator").innerHTML = -x;
}

function Increment() {  //increment function
    var modulus = document.getElementById("IncrementText").innerHTML
    value++;
    document.getElementById("IncrementText").innerHTML
}

function Decrement() {  //deccrement function
    var modulus = document.getElementById("DecrementText").innerHTML
    value--;
    document.getElementById("DecrementText").innerHTML
}

var X = 5;
X++;

var Y = 5.25;
Y--;




window.alert(Math.random() * 100); //random method function