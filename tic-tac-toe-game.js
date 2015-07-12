function TicTacToeGame() {

}

TicTacToeGame.prototype = {
  placePiece: function(clickedSpace, playerOne) {
    if($(clickedSpace.target).data("type") == "space"){
      $(clickedSpace.target).text(playerOne);
    }
  }
}