var friends = ["Busi", "Hope", "Katlego"];
var parents = ["Mother", "Father"];

var family = [friends, parents];
console.log(family);

var pet1 = "Dog";
var pet2 = "Chicken";
var pet3 = "Rabit";

var myAnimals = [pet1, pet2, pet3];
console.log(family.concat(myAnimals));

myAnimals.unshift("Cat");
console.log(myAnimals);
console.log(myAnimals.pop());

console.log(friends.slice(1,3));

let longArray = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let shortArr = longArray.slice(3,5);
console.log(shortArr)