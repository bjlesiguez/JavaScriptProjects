//main.js - project2

function My_First_Function() {                                    
  var str = "Welcome!";                          
  document.getElementById("Button_Text").innerHTML = str;    
  
}

//a function that uses += operator
  function myFunction() {
      var sentence = "I am learning"; //creating the variable
      sentence += " a lot from this course!"; //using the += operator to add the variable
      document.getElementById("Concatenate").innerHTML = sentence;  //using document.getelementById()
  }
