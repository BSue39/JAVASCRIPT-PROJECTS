//Global Variable
let carName = "Volvo";
myFunction();

function myFunction() {
    document.getElementById("Global").innerHTML = "I can display " + carName;
}

//Local Variable
my_Function();

function my_Function() {
    let carName2 = "Ford";
    document.getElementById("Local").innerHTML = typeof carName2 + " " + carName2;
}

document.getElementById("Local2").innerHTML = typeof carName2;

//Function with an error in it
function Add_numbers_5() {
    var Z = 10;
    console.log(15 + Z);
}
function Add_numbers_6() {
    console.log(Z + 100);
}
Add_numbers_5();
Add_numbers_6();

//Function with an if statement that utilizes Date().getHours() method
function get_Data() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

if (new Date().getHours() > 18) {
    document.getElementById("Evening").innerHTML = "Good evening!"
}

//Function that includes an if statement and else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to drink!";
    }
    else {
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink;
}

//Else If
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon."
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}