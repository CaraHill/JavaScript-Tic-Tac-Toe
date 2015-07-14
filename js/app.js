$(function() {

  // var gamePieces = ["X", "O"]
  var $board = new TicTacToeBoardView();
  var game = new TicTacToeGameModel();
  var play = new TicTacToeGameView();
  // var currentPlayer = 1;
  // var index = 0;

  $board.generateBoard();

  $(document).on("keyup", function(event) {
    alert("Player #1, please click on the square on which you would like to play your piece.")
    play.registerPlayGameEventHandler(event, game.isFree, game.placePiece, game.isWonHorizontal, $board.resetBoard)
  })
})