$(function() {

  var rows = 3;
  var columns = 3;
  var gamePieces = ["X", "0"]
  var game = new TicTacToeGame();
  var $board = generateBoard(rows, columns);
  var currentPlayer = 1;
  var index = 0;

  function generateColumns (columns) {
    var $column = $("<tr>");
    var index = columns;
    while(index-- > 0) {
      $column.append("<td data-type=space>");
    }
    return $column;
  }

  function generateBoard (rows, columns) {
    var $board = $("<table>");
    var index = rows;
    var $row;

    while(index-- > 0) {
      $row = generateColumns(columns);
      $board.append($row);
    }
    return $board;
  }

  $("#game-board").append($board);

  $(document).on("keyup", function(event) {
    alert("Player #" +currentPlayer+ " , please click on the square on which you would like to play your piece.")
    $("#game-board").on("click", "td", function(e) {
      game.placePiece(e, gamePieces[index]);
      currentPlayer += 1;
      index += 1;
    })
  })
})