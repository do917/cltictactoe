const prompt = require('prompt');



const ticTacToe = function() {
  // board setup should be an array of string with 'x', 'o', ' '
  this.boardData = [];
  // hardcoding boardsize to be three for now
  this.boardSize = 3;
  // indicates whos turn it is
  this.playerTurn;
}



ticTacToe.prototype.playGame = function() {
  this.initiateBoard(this.boardSize);
  console.log('Welcome to Tic Tac Toe in CLI!');
  console.log('What player do you want to be?');

  prompt.get('X or O?', (err, res) => {
    this.playerTurn = res['X or O?'].toUpperCase();
    this.initiateTurn();
  });
};


ticTacToe.prototype.initiateBoard = function(n) {
  for (let i = 0; i < n * n; i++) {
    this.boardData.push(' ');
  }
}

ticTacToe.prototype.createCliBoard = function() {
  let cliBoard = '';

  for (let i = 0; i < this.boardSize; i++) {

    cliBoard += '|';
    for (let j = 0; j < this.boardSize; j++) {
      let pieceIndex = this.boardSize * i + j;
      let piece = this.boardData[pieceIndex];
      cliBoard += piece + '|';
    }

    cliBoard += '\n';
    if (i !== this.boardSize - 1) {
      cliBoard += '-';
      for (let i = 0; i < this.boardSize * 2; i++) {
        cliBoard += '-';
      }
      cliBoard += '\n';
    }
  }

  return cliBoard;
}

ticTacToe.prototype.checkWin = function() {
  
}

ticTacToe.prototype.makeMove = function(coordinates) {
  let x = coordinates.split(', ')[0] - 1;
  let y = coordinates.split(', ')[1] - 1;

  this.boardData[this.boardSize * x + y] = this.playerTurn;
}

ticTacToe.prototype.initiateTurn = function() {
  console.log(this.createCliBoard());
  console.log(`It's ${this.playerTurn}'s turn`);
  console.log("Enter where you'd like to place your coordinates as a string, ie. '3, 1'");
  prompt.get('coordinates', (err, res) => {
    this.makeMove(res.coordinates);
  });
}


let x = new ticTacToe();
x.playGame();