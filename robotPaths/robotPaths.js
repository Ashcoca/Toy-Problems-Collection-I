/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j) {
  let results = 0;
  var newBoard = makeBoard(n);
  if (n === 1) {
    results = 1;
    return results;
  };
  if (n === 2) {
    results = 2;
    return results;
  };
  var helper = function(i, j) {
    //set piece to true at start point
    newBoard.togglePiece(i, j)
    //base case === if we've reached the end (target at 4, 4 assuming 5x5 grid)
    if (i === n - 1 && j === n - 1) {
      results ++;
      return results;
    };
    //check if we can move up i == rows, j == columns
    if (i - 1 >= 0 && !newBoard.hasBeenVisited(i - 1)) {
      helper(i - 1, j)
    };
    //check if we can move down
    if (i + 1 < n && !newBoard.hasBeenVisited(i + 1)) {
      helper(i + 1, j)
    };
    //check if we can move to the right
    if (j + 1 < n && !newBoard.hasBeenVisited(j + 1)) {
      helper(i, j + 1)
    };
    //check if we can move to the left
    if (j - 1 >= 0 && !newBoard.hasBeenVisited(j - 1)) {
      helper(i, j - 1)
    };
  }
  helper(0, 0);
  return results;
};

