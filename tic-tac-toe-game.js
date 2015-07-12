function TicTacToeGame() {

}

TicTacToeGame.prototype = {
  placePiece = function(clickedSpace) {
    var $piece = "X";
    clickedSpace.append($piece);
  }
}