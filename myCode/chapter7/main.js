var myName = prompt("What's your name?");
// console.log(myName)

if (myName.length >0){
  console.log("Hello " + myName);  
} else{
    console.log("Please enter your name")
};

var color = confirm("Is your favorite color green?");
if (color) {
console.log("Nice Choice");
} else {
console.log("Yeah, that's fine. You're still cool!");
}

alert("It's a Good Day Today !!!")

// Create an array of words
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];
// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
// The game loop
while (remainingLetters > 0) {
    // Show the player their progress
    console.log(word);
    alert(answerArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing." + word.toUpperCase());
    if (guess === null) {
        // Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);