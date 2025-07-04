//The + Operator
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

//The - Operator
function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Minus").innerHTML = "5 - 2 = " + Subtraction;
}

//The * Operator
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Times").innerHTML = "6 * 8 = " + simple_Math;
}

//The / Operator
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Divide").innerHTML = "48 / 6 = " + simple_Math;
}

//Multiple Operators
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Multiple").innerHTML = "1 plus 2, multiplied byy 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

//The Modulus Operator
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//The Unary Operator
function negation_Operator() {
    var x = 10;
    document.getElementById("Negate").innerHTML = -x;
}

//Increment Operator
let a = 5;
let b = a++;
document.getElementById("a").innerHTML = "Value of a: " + a;
document.getElementById("b").innerHTML = "Value of b: " + b;

//Decrement Operator
let c = 13;
let d = c--;
document.getElementById("c").innerHTML = "Value of c: " + c;
document.getElementById("d").innerHTML = "Value of d: " + d;

//Math.Random
window.alert(Math.random() * 100);

//Math Object
document.getElementById("Math_Object").innerHTML = Math.PI;