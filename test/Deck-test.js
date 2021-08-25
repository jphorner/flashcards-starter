const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Deck', function() {
  it.skip('should be a function', function() {
    const deck = new Deck();
    expect(deck).to.be.a('function');
  });

  it.skip('should contain multiple cards', function() {
    const card1 = ;
    const card2 = ;
    const card3 = ;
    const deck = new Deck([card1, card2, card3]);
    expect(deck).to.deep.equal([card1, card2, card3]);
  })
})
