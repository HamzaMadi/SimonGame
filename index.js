var colors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var level = 0;
var playerPattern = [];
var started = false;
if (!started) {
  $(document).on("keydown", function (event) {
    nextSequence();
    started = true;
  });
}

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  console.log(userChosenColor);
  $(this).fadeOut(100).fadeIn(100).animate({ backgroundColor: "gray" });

  var userButtonAudio = new Audio("./sounds/" + userChosenColor + ".mp3");
  userButtonAudio.play();
  playerPattern.push(userChosenColor);
  checkAnswer(playerPattern.length - 1);
});

function nextSequence() {
  playerPattern = [];
  $("#level-title").text("Level " + level);
  var randomColor = Math.floor(Math.random() * 4);
  var randomChosenColor = colors[randomColor];
  var audio = new Audio("./sounds/" + randomChosenColor + ".mp3");
  setTimeout(function () {
    audio.play();
    $("#" + randomChosenColor)
      .fadeOut()
      .fadeIn();
  }, 1000);
  gamePattern.push(randomChosenColor);
  level++;
}

function checkAnswer(cuurenLevel) {
  if (gamePattern[cuurenLevel] === playerPattern[cuurenLevel]) {
    if (gamePattern.length === playerPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    $("h1").text("Game Over, Press Any Key to Restart");
    var gameOver = new Audio("./sounds/wrong.mp3");
    gameOver.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over", 2000);
    }, 200);
    startOver();
  }
}
function startOver() {
  level = 0;
  gamePattern = [];
  playerPattern = [];
  started = false;
}
