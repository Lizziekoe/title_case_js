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
});
