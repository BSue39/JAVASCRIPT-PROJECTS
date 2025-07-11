//"Type of" Operator
Document.write(typeof 19);

//Type Coercion
Document.write("32" + 5);

//NaN Function to display "true"
document.getElementById("True").innerHTML = isNaN('Words are not numbers');

//NaN Function to display "false"
document.getElementById("False").innerHTML = isNaN('1963');

//To display infinity
Document.write(3E510);

//To display -infinity
Document.write(-4E210);

//Boolean Logic to display "false"
Document.write(17 > 9);

//Boolean Logice to display "true"
Document.write(47 < 63);

//Console.log() Function
console.log(8 + 5);

//Displaying a false result in the console using Boolean logice and the console.log() method
console.log(5 > 7);

//Double Equal Signs to display "true"
Document.write((21 - 2) == 19);

//Double Equal signs to display "false"
Document.write(14 == 11);

//Triple Equal signs to display "true" matching the data type and value
let a = 5;
document.getElementById("A").innerHTML = (a === 5);

//Triple Equal signs to display "false" with different data type and different value
let b = 9;
document.getElementById("B").innerHTML = (b === "9");

//Triple Equal signs to display "false" with different data type but the same value for both
let c = 12;
let d = "12";
document.getElementById("CD").innerHTML = (c === d);

//Triple Equal signs to display "false" with same data type but a different value for both
let e = 6;
let f = 3;
document.getElementById("EF").innerHTML = (e === f);

//The OR operator to display "true"
let g = 6;
let h = 3;
document.getElementById("GH").innerHTML = (g == 6 || h == 0);

//The OR operator to display "false"
let i = 16;
let j = 12;
document.getElementById("IJ").innerHTML = (i == 5 || j == 5);

//NOT Operator to display "true"
function not_Fuction() {
    document.getElementById("Not").innerHTML = ! (5 > 10);
}

//Not Operator to display "false"
function not_Fuction() {
    document.getElementById("Not2").innerHTML = ! (22 < 17);
}

//AND Operator
let k = 6;
let l = 3;
document.getElementById("KL").innerHTML = (x < 10 && y > 1) + "<br>" + (x < 10 && y < 1);