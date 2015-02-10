var titleCase = function(phrase){

  var newPhrase = "";
  var connectingWords = ['a', 'of', 'the', 'to', 'and', 'by', 'or', 'is']

  var words = phrase.split(" ");
  words.forEach(function(word) {
    if (connectingWords.indexOf(word) === -1) {
      var firstLetter = word[0].toUpperCase();
      var remainingLetters = word.slice(1);
      var newWord = firstLetter + remainingLetters;
      newPhrase = newPhrase + newWord + " ";
    } else {
      newPhrase = newPhrase + word + " ";
    }
  });

  newPhrase = newPhrase.slice(0, newPhrase.length - 1);
  return newPhrase;

};
