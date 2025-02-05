let myName = "LY";
let sheepCounted = 0
let myFamily = ["Siphosami", "Thando", "Thandeka"]



if (myName.length > 5){
    console.log("Hello "+ myName)
} else if (myName.length == 2){
    console.log("Try your fullname")
} else{
    console.log("Add your initials")
};

// while (sheepCounted < 10){
    // console.log("I have counted " + sheepCounted + " sheep!");
    // sheepCounted++;
// };
// console.log("Zzzzzzzzzzz");

for (var i=0; i<3; i++){
    console.log("I have counted " + i + " sheep!");
};

for (var i=0; i< myFamily.length; i++){
    console.log("This is my family member " + myFamily[i]);
};