
var dreamCar = {
    model: "Suv",
    make: "Oldsmobile",
    year: 2000,
    color: "pink",
    price: 4500,
    bodyStyle: "Luxury Car",
    carName :"Maserati"
};


document.getElementById("pricetag").innerHTML = dreamCar["price"];
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").innerHTML = dreamCar.carName + " " + dreamCar.model;
document.getElementById("body").style.background = dreamCar.color;