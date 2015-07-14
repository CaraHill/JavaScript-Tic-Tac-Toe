$(function() {

  var $board = new TicTacToeBoardView();
  var game = new TicTacToeGameModel();
  var play = new TicTacToeGameView();

  $board.generateBoard();

  play.startTheGame(event, game.isFree, game.placePiece, game.isWonHorizontal, $board.resetBoard);

})