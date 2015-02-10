describe('titleCase', function() {

  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it('capitalizes the first letter of every word in a phrase', function() {
    expect(titleCase("this crazy cat")).to.equal("This Crazy Cat");
  });

  it('does not capitzlize a, of, the, to, and, by & or', function() {
    expect(titleCase("this is a crazy cat or dog")).to.equal("This is a Crazy Cat or Dog");
  });

  it('does capitalize connecting words if is first word', function() {
    expect(titleCase("the crazy cat is on your head")).to.equal("The Crazy Cat is On Your Head");
  });

  it('only capitalizes the first letter even if its entered in caps', function() {
    expect(titleCase("THAT CAT IS CRAZY")).to.equal("That Cat is Crazy");
  });

});
