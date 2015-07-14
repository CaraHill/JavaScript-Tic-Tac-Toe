$(function() {

  var gamePieces = ["X", "O"]
  var $board = new TicTacToeBoardView();
  var game = new TicTacToeGameModel();
  var currentPlayer = 1;
  var index = 0;

  $board.generateBoard();

  $(document).on("keyup", function(event) {
    alert("Player #1, please click on the square on which you would like to play your piece.")
    $("#game-board").on("click", "td", function(e) {
      if(game.isFree(e)) {
        game.placePiece(e, gamePieces[index]);
        if(game.isWonHorizontal(e, gamePieces, index, currentPlayer)) {
          $board.resetBoard();
        } else {
          currentPlayer = (currentPlayer == 1 ? 2 : 1);
          index = (index == 0 ? 1 : 0);
          alert("Player #" +currentPlayer+ " , please click on the square on which you would like to play your piece.")
        }
      }
    })
  })
})