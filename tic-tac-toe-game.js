function TicTacToeGame() {

}

TicTacToeGame.prototype = {
  placeX: function(clickedSpace, playerOne) {
    if($(clickedSpace.target).data("type") == "space"){
      $(clickedSpace.target).text(playerOne);
    }
  }
}