// utilizing else statement
function age_Function() {
  
  Age = document.getElementById("Age").value;
  if (Age >= 18)  {
      Vote = "You are old enough to vote!";
  }
  else {
      Vote = "You are not old enough to vote.";
  }
  document.getElementById("How_old_are_you?").innerHTML= Vote;
}

document.write("<br>");



// if statement sample
if (1 < 2) {
    document.write("The left number is smaller than the number on the right.")
}
document.write("<br>");

var X = "Ben";

document.write(X);

document.write("<br>");



// utilizing global variable
var A = 18;
function Add_numbers_1() {
    document.write(20 + A + "<br>");
}

function Add_numers_2() {
    document.write(A + 200);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>");

// utilizing local variable
function Add_numbers_1() {
    var B = 10;
    document.write(40 + B + "<br>");
}
function Add_numbers_2() {
    document.write(B + 200);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>");


// utilizing time function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}



