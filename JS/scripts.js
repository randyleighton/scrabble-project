var scrabble = function(word) {

    var scoreWord = word.toUpperCase();
    var valueTable = {
        'A':1, 
        'B':3, 
        'C':3, 
        'D':2,
        'E':1,
        'F':4,
        'G':2,
        'H':4,
        'I':1,
        'J':8,
        'K':5,
        'L':1,
        'M':3,
        'N':1,
        'O':1,
        'P':3,
        'Q':10,
        'R':1,
        'S':1,
        'T':1,
        'U':1,
        'V':4,
        'W':4,
        'X':8,
        'Y':4,
        'Z':10 };

    var sum=0;
    for (var i = 0; i < scoreWord.length; i+=1) {
        sum += valueTable[scoreWord.charAt(i)] || 0;
    }
    return sum;
};

$(document).ready(function() {
    document.forms['scrabform'].elements['score-word'].focus();
    $("#sub-but").click(function(event) {
        var wordtoCalculate = $("input#score-word").val();
        var finalScore = scrabble(wordtoCalculate);
        $("#result").text(finalScore);
        event.preventDefault();
    });
    $("#reset-text").click(function() {
        document.forms['scrabform'].elements['score-word'].focus();
    });
    
});  
