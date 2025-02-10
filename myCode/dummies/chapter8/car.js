var favorite ={
    "hobby":"Content Creation",
    "Passion":"Data Analytics",
    "Place":"Cafe",
    "Friends": 2
};
console.log(favorite)
var dreamCar = {
    model: "Suv",
    make: "Oldsmobile",
    year: 1980,
    color: "brown",
    price: 4500,
    bodyStyle: "Luxury Car",
    carName :"Maserati"
};


document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").innerHTML = dreamCar.carName + " " + dreamCar.model;
document.getElementById("body").style.background = dreamCar.color;