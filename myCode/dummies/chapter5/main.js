let myLikesHeader = document.getElementById("likes");
let item1;
let item2;
let item3;

myLikesHeader.innerHTML = "Passions";
document.getElementById("button").onclick = newList;

function newList(){
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");
    updateList();
};
function updateList() {
    document.getElementById("firstThing").innerHTML = item1;
    document.getElementById("thirdThing").innerHTML = item3;
    document.getElementById("secondThing").innerHTML = item2;
}