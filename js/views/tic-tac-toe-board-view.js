function TicTacToeBoardView() {
  this.row = 3;
  this.column = 3;
}

TicTacToeBoardView.prototype = {
  generateColumns: function() {
    var $column = $("<tr>");
    var index = this.column;
    while(index-- > 0) {
      $column.append("<td data-type=space>");
    }
    return $column;
  },
  generateBoard: function() {
    var $board = $("<table>");
    var index = this.row;
    var $row;

    while(index-- > 0) {
      $row = this.generateColumns(this.column);
      $board.append($row);
    }
    $("#game-board").append($board);
  },
  resetBoard: function() {
    var $board = $("#game-board");
    $board.off();
    $board.find("td").empty();
  }
}