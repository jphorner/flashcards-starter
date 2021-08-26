const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  it('should be a function', function() {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  });

  it('should contain multiple cards', function() {
    const card1 = 'Test 1';
    const card2 = 'Test 2';
    const card3 = 'Test 3';
    const deck = new Deck([ card1, card2, card3 ]);

    expect(deck.cards).to.deep.equal([ card1, card2, card3 ]);
  });

  it('should be able to count cards in deck', function() {
    const card4 = 'Test 4';
    const card5 = 'Test 5';
    const card6 = 'Test 6';
    const card7 = 'Test 7';
    const deck = new Deck([ card4, card5, card6, card7 ]);

    expect(deck.countCards()).to.equal(4);
  });

  it('should display deck as an array of Card objects', function() {
    let testCard1 = new Card(50, "What is Josh's favorite color?", [ 'white', 'blue', 'purple' ], 'purple');
    let testCard2 = new Card(51, "What instrument does Josh want to learn next?", [ 'banjo', 'piano', 'accordion' ], 'piano');
    let testCard3 = new Card(52, "What instrument is Josh's self-described 'orchestra crush'?", [ 'bassoon', 'glockenspiel', 'celeste' ], 'bassoon');
    const deck = new Deck([ testCard1, testCard2, testCard3 ]);
    expect(deck.cards).to.deep.equal([{
      id: 50,
      question: "What is Josh's favorite color?",
      answers: [ 'white', 'blue', 'purple' ],
      correctAnswer: 'purple'
    }, {
      id: 51,
      question: "What instrument does Josh want to learn next?",
      answers: [ 'banjo', 'piano', 'accordion' ],
      correctAnswer: 'piano'
    }, {
      id: 52,
      question: "What instrument is Josh's self-described 'orchestra crush'?",
      answers: [ 'bassoon', 'glockenspiel', 'celeste' ],
      correctAnswer: 'bassoon'
    }]);
  });
});
