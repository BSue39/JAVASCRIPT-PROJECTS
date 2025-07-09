//Dictionary containing KVPs of a car
function my_Dictionary() {
    var Car = {
        Make: "Ford",
        Model: "Mustang",
        Color: "Blue",
        Year: " 2023",
        Engine: "2.5L 4-cylinder",
        Transmission: "Automatic",
        Sound: "Vroom!"
    };
    delete Car.Make;
    document.getElementById("Dictionary").innerHTML = Car.Make;
}