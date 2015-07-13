function TicTacToeGame() {

}

TicTacToeGame.prototype = {
  placePiece: function(clickedSpace, currentPlayer) {
    if($(clickedSpace.target).data("type") == "space"){
      $(clickedSpace.target).text(currentPlayer);
    }
  },
  isFree: function(clickedSpace) {
     return $(clickedSpace.target).text().length == 0
  },
  isWonHorizontal: function(clickedSpace, gamePiece, index, currentPlayer) {
    var winState = [];
    $(clickedSpace.target).parent().children().each(function() {
      if($(this).text() == gamePiece[index]) {
        winState.push(gamePiece[index])
      }
    })
    if(winState.length == 3) {
      alert("Player #" +currentPlayer+ " has won the game!")
      return true
    }
  }
}