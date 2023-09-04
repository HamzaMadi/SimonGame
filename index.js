var gamePattern= [];
var buttonColours  = ["green","red","yellow","blue"];

function nextSequence(){
    var randomNumber= Math.floor(4*Math.random());
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#randomChosenColour").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  }
