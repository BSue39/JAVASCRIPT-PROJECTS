//Assigning two variables and utilizing the document.getElementById method//
const price1 = 13;
const price2 = 11;
let total = price1 + price2;
document.getElementById("price").innerHTML = "The total is: " + total;
function myFunction() {
    alert("Total price is 24");
}

//Using the document.getElementById method in order to display the concatenated string//
function newFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this course!";
    document.getElementById("Concatenate").innerHTML = sentence;
}