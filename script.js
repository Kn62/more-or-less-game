const randomNumber = Math.floor(Math.random() * 101 );
let userChoices;
let numberOfTry = 0;

while (userChoices !== randomNumber) {
    userChoices = Number(prompt("choose a number between 1-100"))
    if (userChoices < randomNumber) {
        alert("it's more");
    } else if (userChoices > randomNumber) {
        alert("it's less");
    } else {
        alert(`You won, you find ${randomNumber} within ${numberOfTry} Try`);
    }
    numberOfTry++
}