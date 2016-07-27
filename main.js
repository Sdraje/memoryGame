var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
}
}
function isMatch(card) {
	if (card[0] === card[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
  }
  for (var i = 0; i < cards.length; i++) {
    document.getElementsByClassName('card')[i].innerHTML = " ";
  }
}
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://opengameart.org/sites/default/files/king_of_hearts2.png'>";
	} else {
		this.innerHTML = "<img src='http://opengameart.org/sites/default/files/queen_of_diamonds2.png'>";
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

createBoard();