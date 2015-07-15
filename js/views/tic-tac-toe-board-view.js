function TicTacToeBoardView() {
  this.row = 3;
  this.column = 3;
}

TicTacToeBoardView.prototype = {
  generateBoard: function() {
    var $board = $("<table>"
          +"<tr data-type=0>"
            +"<td data-type=0>"
            +"<td data-type=1>"
            +"<td data-type=2>"
          +"<tr data-type=1>"
            +"<td data-type=0>"
            +"<td data-type=1>"
            +"<td data-type=2>"
          +"<tr data-type=2>"
            +"<td data-type=0>"
            +"<td data-type=1>"
            +"<td data-type=2>");
    $("#game-board").append($board);
  },
  resetBoard: function() {
    var $board = $("#game-board");
    $board.off();
    $board.find("td").empty();
  }
}