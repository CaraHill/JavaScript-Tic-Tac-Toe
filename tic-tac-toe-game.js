function TicTacToeGame() {

}

TicTacToeGame.prototype = {
  placePiece: function(clickedSpace, currentPlayer) {
    if($(clickedSpace.target).data("type") == "space"){
      $(clickedSpace.target).text(currentPlayer);
    }
  },
  isFree: function(clickedSpace) {
    console.log($(clickedSpace.target).text().length)
     return $(clickedSpace.target).text().length == 0
  }
}