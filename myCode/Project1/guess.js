let secret = Math.floor(Math.random()*21);
console.log(secret)
let answer = prompt("Please guess the secret number between (1-20)");
// Convert the string guess to an integer so that we can compare
var guess = parseInt (answer);


if (secret === guess){
    alert("Correct Guess!");

}else{
    alert("Sorry incorrect Guess!")
}

while (guess !== secret){
    if (guess<7){
        alert("Incorrect, too low!");
    }else{
        alert("Incorrect, too high!");
    }
    break
}