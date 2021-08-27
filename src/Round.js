const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = null;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(currentGuess) {
    let currentCard = this.returnCurrentCard();
    let turn = new Turn(currentGuess, currentCard);
    if (currentGuess !== currentCard.correctAnswer) {
      this.incorrectGuesses.push(currentCard.id);
    } else if (currentGuess === currentCard.correctAnswer) {
      this.correctGuesses.push(currentCard.id);
    }
    currentCard.played = true;
    this.turns += 1;
    this.currentCard = this.deck.cards.find(card => card.played === false);
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let answerSum = this.correctGuesses.length + this.incorrectGuesses.length;
    let answerPercent = this.correctGuesses.length / answerSum;
    let returnedPercent = Math.round(answerPercent * 100);
    return returnedPercent;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
};

module.exports = Round;
