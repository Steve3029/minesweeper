document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
     row: 0, 
     col: 0,
     isMine: false,
     hidden: true
    },
    {
     row: 0, 
     col: 1,
     isMine: false,
     hidden: true
    },
    {
     row: 0, 
     col: 2,
     isMine: false,
     hidden: true
    },
    {
      row: 0,
      col: 3,
      isMine: false,
      hidden: true
    },
    {
      row: 0,
      col: 4,
      isMine: true,
      hidden: true,
      isMarked: false
    },
    {
      row: 0,
      col: 5,
      isMine: false,
      hidden: true
    },
    {
     row: 1, 
     col: 0,
     isMine: false,
     hidden: true
    },
    {
     row: 1, 
     col: 1,
     isMine: true,
     hidden: true,
     isMarked: false
    },
    {
     row: 1, 
     col: 2,
     isMine: false,
     hidden: true
    },
    {
      row: 1,
      col: 3,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 4,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 5,
      isMine: false,
      hidden: true
    },
    {
     row: 2, 
     col: 0,
     isMine: false,
     hidden: true
    },
    {
     row: 2, 
     col: 1,
     isMine: false,
     hidden: true
    },
    {
     row: 2, 
     col: 2,
     isMine: false,
     hidden: true
    },
    {
      row: 2,
      col: 3,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 4,
      isMine: true,
      hidden: true
    },
    {
      row: 2,
      col: 5,
      isMine: false,
      hidden: true
    },
    {
      row: 3,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 3,
      col: 1,
      isMine: false,
      hidden: true
    },
    {
      row: 3,
      col: 2,
      isMine: false,
      hidden: true
    },
    {
      row: 3,
      col: 3,
      isMine: false,
      hidden: true
    },
    {
      row: 3,
      col: 4,
      isMine: false,
      hidden: true
    },
    {
      row: 3,
      col: 5,
      isMine: true,
      hidden: true,
      isMarked: false
    },
    {
      row: 4, 
      col: 0,
      isMine: false,
      hidden: true
     },
     {
      row: 4, 
      col: 1,
      isMine: false,
      hidden: true
     },
     {
      row: 4, 
      col: 2,
      isMine: false,
      hidden: true
     },
     {
       row: 4,
       col: 3,
       isMine: false,
       hidden: true
     },
     {
       row: 4,
       col: 4,
       isMine: true,
       hidden: true
     },
     {
       row: 4,
       col: 5,
       isMine: false,
       hidden: true
     },
     {
      row: 5, 
      col: 0,
      isMine: false,
      hidden: true
     },
     {
      row: 5, 
      col: 1,
      isMine: false,
      hidden: true
     },
     {
      row: 5, 
      col: 2,
      isMine: false,
      hidden: true
     },
     {
       row: 5,
       col: 3,
       isMine: false,
       hidden: true
     },
     {
       row: 5,
       col: 4,
       isMine: true,
       hidden: true,
       isMarked: false
     },
     {
       row: 5,
       col: 5,
       isMine: false,
       hidden: true
     },
  ]
};

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++) {
    var counts = countSurroundingMines(board.cells[i]);
    board.cells[i].surroundingMines = counts;
    // console.log(board.cells[i].row + ',' + board.cells[i].col + ',' + board.cells[i].surroundingMines);
  }
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  // forEach solution
  // board.cells.forEach(function(cell) {
  //     cell.surroundingMines = countSurroundingMines(cell);
  //     console.log(cell.row + "," + cell.col + "," + cell.surroundingMines);
  //   }
  // );
  lib.initBoard()
  console.log(typeof board);
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  var mineIsMarked = false;
  var allCellsVisible = false;
  mineIsMarked = checkForAllMarkedOfMine(board.cells);
  // console.log('all mines are marked: '+mineIsMarked);
  if (mineIsMarked) {
    allCellsVisible = checkAllCellsVisible(board.cells);
    // console.log('all empty cell are visible: ' + allCellsVisible);
    if (allCellsVisible) {
      lib.displayMessage('You win!');
    }
  }
  //   lib.displayMessage('You win!')
}

// check if all mines has been marked.
// if any mine has not been marked this function will return false immediatly
// otherwise it will return true
function checkForAllMarkedOfMine (cells) {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].isMine == true) {
      if (cells[i].isMarked == false) {
        return false;
      }
    }
  }
  return true;
}

// check if all empty cells are visible.
// if any empty cell is not visible this function will return false immediatly
// otherwise it will return true
function checkAllCellsVisible(cells) {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].isMine == false) {
      if (cells[i].hidden == true) {
        return false;
      }
    }
  }
  return true;
}



// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine === true) {
      count++;
    }
  }
  return count;
}

