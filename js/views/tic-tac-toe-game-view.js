function TicTacToeGameView() {
  this.boardElement = $("#game-board");
  this.gamePieces = ["X", "O"];
}

TicTacToeGameView.prototype = {
  registerPlayGameEventHandler: function(e, isFree, placePiece, isWonHorizontal, resetBoard) {
    var currentPlayer = 1;
    var index = 0;
    var that = this
    that.boardElement.on("click", "td", function(e) {
      if(that.isFree(e)) {
        placePiece(e, that.gamePieces[index]);
        if(isWonHorizontal(e,that.gamePieces, index, currentPlayer)) {
          resetBoard();
        } else {
          currentPlayer = (currentPlayer == 1 ? 2 : 1);
          index = (index == 0 ? 1 : 0);
          alert("Player #" +currentPlayer+ " , please click on the square on which you would like to play your piece.")
        }
      }
    })
  },
  startTheGame: function(e, isFree, placePiece, isWonHorizontal, resetBoard) {
    var that = this;
    $(document).on("keyup", function(event) {
      alert("Player #1, please click on the square on which you would like to play your piece.")
      that.registerPlayGameEventHandler(e, isFree, placePiece, isWonHorizontal, resetBoard)
    })
  },
  isFree: function(e) {
    return $(e.target).text().length == 0;
  }
}