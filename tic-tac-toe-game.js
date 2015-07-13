function TicTacToeGame() {

}

TicTacToeGame.prototype = {
  placePiece: function(clickedSpace, currentPlayer) {
    if($(clickedSpace.target).data("type") == "space"){
      $(clickedSpace.target).text(currentPlayer);
    }
  },

}