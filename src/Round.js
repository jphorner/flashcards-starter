const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards.find(card => card.played === false);
    this.turns = 0;
    this.turn;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(currentGuess) {
    this.turn = new Turn(currentGuess, this.currentCard);
    if (currentGuess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push(this.currentCard.id);
    } else if (currentGuess === this.currentCard.correctAnswer) {
      this.correctGuesses.push(this.currentCard.id);
    }
    this.turn.giveFeedback();
    this.currentCard.played = true;
    this.turns += 1;
    this.currentCard = this.deck.cards.find(card => card.played === false);
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
