var titleCase = function(phrase){

  var newPhrase = "";
  var connectingWords = ['a', 'of', 'the', 'to', 'and', 'by', 'or', 'is']
  var timeThroughLoop = 1;

  var words = phrase.split(" ");
  words.forEach(function(word) {
    if (connectingWords.indexOf(word.toLowerCase()) === -1 || timeThroughLoop === 1) {
      var firstLetter = word[0].toUpperCase();
      var remainingLetters = word.slice(1).toLowerCase();
      var newWord = firstLetter + remainingLetters;
      newPhrase = newPhrase + newWord + " ";
    } else {
      newPhrase = newPhrase + word.toLowerCase() + " ";
    }
    timeThroughLoop += 1;
  });

  newPhrase = newPhrase.slice(0, newPhrase.length - 1);
  return newPhrase;

};

$(document).ready(function() {

  $("form#titleForm").submit(function(event) {

    var title = $("input#title").val();
    var newTitle = titleCase(title);

    $("#results p").text(newTitle)

    event.preventDefault();
  });

});
