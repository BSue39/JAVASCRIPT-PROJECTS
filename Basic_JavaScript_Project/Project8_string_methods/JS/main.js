//Contcat() Method
let text1 = "Hello ";
let text2 = "world! ";
let text3 = "Have a nice day!";
let result = text1.concat(text2, text3);
document.getElementById("Concatenate").innerHTML = result;

//Slice() Method
function slice_Method() {
    var Sentence = "Even though you're growing up, you should never stop having fun. - Nina Dobrev";
    var section = Sentence.slice(32,63);
    document.getElementById("Slice").innerHTML = section;
}

//toUpperCase() Method
let text = "Hello World!"
let result2 = text.toUpperCase();
document.getElementById("Upper").innerHTML = result2;

//search() Method
let text4 = "Mr. Blue has a blue house"
let position = text.search("Blue");
document.getElementById("Search").innerHTML = position;

//Numbers Method
function string_Method() {
    var X = 119;
    document.getElementById("Numbers-to-string").innerHTML = X.toString();
}

//toPrecision() Method
let Z = 18.7341;
document.getElementById("Precision").innerHTML = Z.toPrecision();

//toFixed() Method
let num = 5.56789;
let n = num.toFixed();
document.getElementById("Fixed").innerHTML = n;

//valueOF() Method
//Create a new Number object with value of 12
let num2 = new Number(12);
//Output: [Number: 12]
console.log(num);
//Output: 12
console.log(num.valueOf());