const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Game', function() {
  it('should be a function', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  })

  it('should track the current round', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
    const card3 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck)
    const game = new Game(round);
    expect(game.currentRound).to.be.an.instanceof(Round);
  })

  describe('Start', function() {
    it('should be a function', function() {
      const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
      const card3 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method");
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck)
      const game = new Game(round);
      // console.log(round);
      expect(game.start).to.be.a('function');
    })

    it('should create cards', function() {
      const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
      const card3 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method");
      const deck = [ card1, card2, card3 ];
      const round = new Round(deck)
      const game = new Game(round);
      game.start();
      expect(round.deck).to.be.an('object');
    })

    it('should put cards in a deck', function() {
      const game = new Game(round);
      game.start();
      expect(game.currentRound.deck).to.be.an.instanceof(Deck);
    })

    it('should start a new round', function() {
      const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method");
      const card3 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method");
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      const game = new Game(round);
      expect(game.currentRound).to.be.an.instanceof(Round);
    })
  })
});
