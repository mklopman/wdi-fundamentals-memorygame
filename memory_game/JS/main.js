var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");
var cardTwo = cards[1];
console.log("User flipped king");
cardsInPlay.push(cardTwo);
if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("You have found a match!");
}
else {
	alert("Sorry, try again!");
}
