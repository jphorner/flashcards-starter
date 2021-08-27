const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should take a guess argument', function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", "object");
    const turn = new Turn("object", card);
    expect(turn.guess).to.equal('object');
  });

  it('should take a card argument', function() {
    const card = new Card(1, "What allows you to define a set of related information using key-value pairs?", "object");
    const turn = new Turn("object", card);
    expect(turn.card).to.be.an.instanceof(Card);
  });


  describe('Methods', function() {
    it("should be able to return the player's guess", function() {
      const card = new Card(2, "What is a comma-separated list of related values?", [ "array", "object", "function" ], "array");
      const turn = new Turn("array", card);
      expect(turn.returnGuess()).to.equal('array');
    });

    it('should be able to return the active card', function() {
      const card = new Card(2, "What is a comma-separated list of related values?", [ "array", "object", "function" ], "array");
      const turn = new Turn("array", card);
      expect(turn.returnCard()).to.deep.equal({
        id: 2,
        question: "What is a comma-separated list of related values?",
        answers: [ "array", "object", "function" ],
        correctAnswer: "array"
      });
    });

    it('should be able to evaluate a guess', function() {
      const card = new Card(3, "What type of prototype method directly modifies the existing array?", [ "mutator method", "accessor method", "iteration method" ], "mutator method");
      const turn = new Turn("mutator method", card);
      expect(turn.evaluateGuess()).to.deep.equal(true);
    });

    it('should be able to evaluate an incorrect guess', function() {
      const card = new Card(3, "What type of prototype method directly modifies the existing array?", [ "mutator method", "accessor method", "iteration method" ], "mutator method");
      const turn = new Turn("for loop", card);
      expect(turn.evaluateGuess()).to.deep.equal(false);
    });

    it('should be able to give the user feedback', function() {
      const card = new Card(3, "What type of prototype method directly modifies the existing array?", [ "mutator method", "accessor method", "iteration method" ], "mutator method");
      const turn = new Turn("mutator method", card);
      expect(turn.giveFeedback()).to.equal("correct!");
    });

    it('should be able to give the user negative feedback', function() {
      const card = new Card(3, "What type of prototype method directly modifies the existing array?", [ "mutator method", "accessor method", "iteration method" ], "mutator method");
      const turn = new Turn("for loop", card);
      expect(turn.giveFeedback()).to.equal("incorrect!");
    });
  });
});
