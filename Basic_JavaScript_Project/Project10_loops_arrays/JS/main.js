//While Loop Example
function Call_Loop() {
    let text = "";
    let i = 0;
    while (i < 10) {
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}

//String Length Example
let greeting = "Hello World!";
let length = greeting.length;
document.getElementById("length").innerHTML = length;

//For Loop Example
var Instruments = ["Guitar", "Violin", "Piano", "Saxaphone", "Drums", "Bass"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array Example
function array_Funcion() {
    const cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("Array").innerHTML = cars;
}

//Constant Keyword Example
function constant_function() {
    const Puppy = {breed:"retriever", type:"labrador", color:"black"};
    Puppy.color = "yellow";
    Puppy.price = "$250";
    document.getElementById("Constant").innerHTML = "The cost of the  " + Puppy.type + " was " + Puppy.price;
}

//Let Keyword Example
//Here x is 10
let x = 10;
{
    //Here x is 2
    let x = 2;
}
//Here x is 10
document.getElementById("Let").innerHTML = x;

//return Statement Example
function myFunction() {
    return Math.PI;
}
document.getElementById("return").innerHTML = myFunction();

//Object Example
let car = {
    make: "Ford",
    model: "Fusion",
    year: "2021",
    color: "red",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

//Break Statement Example
let text = ""
for (let h = 0; h < 10; h++) {
    if (h === 3) { break; }
    text += "The number is " + h + "<br>";
}
document.getElementById("break").innerHTML = text;

//Continue Statement Example
let text1 = ""
for (let j = 0; j < 10; j++) {
    if (j === 3) { continue; }
    text += "The number is " + j + "<br>";
}
document.getElementById("continue").innerHTML = text1;