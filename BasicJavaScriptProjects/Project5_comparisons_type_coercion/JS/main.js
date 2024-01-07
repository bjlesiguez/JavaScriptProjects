
// utilizing type of operator
document.write(typeof 3);
document.write("<br>");

// utilizing type of coercion
document.write("10" + 5);
document.write("<br>");


// utilizing floating point , not a number, positive infinity, and negative infinity
document.write(-3E310);
document.write("<br>");
document.write(2E310);
document.write("<br>");



// utilizing boolean logic
document.write(10 < 2);
document.write("<br>");

console.log();



// utilizing double equals sign
document.write(10 == 10);
document.write("<br>");
document.write(3==11);
document.write("<br>");


// utilizing triple equals sign
X = 10;
Y = 10;
Z = 1;
document.write(X === Y);
document.write("<br>");
document.write(X === Z);
document.write("<br>");


// utilizing logiocal operators &&, ||, !
document.write(5 > 2 && 10 > 4);
document.write("<br>");
document.write(5 > 10 && 10 > 4);
document.write("<br>");
document.write(5 > 10 || 10 > 4);
document.write("<br>");
document.write(5 > 10 || 10 > 15);


// utilizing ! operator
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 40);
}