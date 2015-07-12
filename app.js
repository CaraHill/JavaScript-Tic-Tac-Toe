$(function() {

  var rows = 2;
  var columns = 3;
  var $board = generateBoard(rows, columns);

  function generateColumns (columns) {
    var $column = $("<tr>");
    var index = columns;
    while(index-- > 0) {
      $column.append("<td id=space-"+index+">");
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
    alert("Player 1, please click on the square on which you would like to play your piece.")
  })
})