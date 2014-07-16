describe ("scrabble", function() {
  it("returns a value when a letter is entered", function() {
    scrabble("a").should.equal(1);
  });


  it("gives a score for every letter in the word ACT", function() {
    scrabble("act").should.equal(5)
  });
});
