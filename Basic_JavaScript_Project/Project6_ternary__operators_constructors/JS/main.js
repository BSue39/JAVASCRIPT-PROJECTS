//Ternary Operators and Constructors Assignment
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//Keywords and Contructors Assignment using "this" and "new"
function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myfunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//New Keyword Assignment using "this" and "new"
//Constructor function for Person objects
function Person(first, last, age, eye) {
    this.Person_firstName = first;
    this.Person_lastName = last;
    this.Person_age = age;
    this.Person_eyeColor = eye;
}
//Create two Person object and display it
var myFather = new Person("Jay", "Fenske", 66, "hazel");
var myMother = new Person("Sue", "Fenske", 69, "brown");
function my_Function() {
    document.getElementById("New_and_This").innerHTML = "My father is " + myFather.Person_age + ". My mother is " + myMother.Person_age + ".";
}
//Assigning a variable the value of a reserved word
myFather.native = "English";
document.getElementById("Nationality").innerHTML = "My father is " + myFather.native;

//Nested Function
document.getElementById("Nested_Function").innerHTML = add();
function add() {
    let counter = 0;
    function plus() {counter += 1;}
    plus();
    return counter;
}
