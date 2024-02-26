// initialize a command line app that plays tic tac toe with you
// 1. create a new game
function main() {
  const game = new Game();
  game.play();
}
// create a class called Game that serves as the main game engine
class Game {
  constructor() {
    this.board = new Board();
    this.players = [new Player('X'), new Player('O')];
    this.currentPlayer = this.players[0];
  }
  play() {
    while (!this.board.isGameOver()) {
      this.board.print();
      this.currentPlayer.play(this.board);
      this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    }
    this.board.print();
    console.log('The winner is', this.board.getWinner());
  }
}
// 2. play a move
// write a class called Player that represents a player
class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }
  play(board) {
    console.log('It is', this.symbol + "'s turn");
    const move = prompt('Enter your move');
    board.play(move, this.symbol);
  }
}
// write a function called prompt that prompts the user for input
function prompt(message) {
  return window.prompt(message);
}
// write a class called Board that represents the game board
class Board {
  constructor() {
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
  }
  play(move, symbol) {
    const [row, col] = move.split(' ');
    this.board[row][col] = symbol;
  }
  print() {
    console.log(this.board);
  }
  isGameOver() {
    return this.getWinner() !== null;
  }
  // write a function called getWinner that examines the board and determines if there are three in a row
  getWinner() {
    //write a function called checkRow that checks if there are three in a row
      //write a loop that checks the board to see if there are three in a row
      this.board.forEach((row) => {
        if(row.every((cell) => cell === row[0]){
            return true
        }
        for (let i = 0; i < 3; i++) {
            if (row[i] === row[0]) {
            return false;
            }
        }
    });
  }
  
  getWinner() {
    return null;
  }
}
// write a function called main that initializes a new game and starts playing
main();
// write a function called print that prints the board
// write a function called isGameOver that checks if the game is over
// write a function called getWinner that checks if there is a winner
// write a function called printWinner that prints the winner
// write a function called printCurrentPlayer that prints the current player
// write a function called printGameState that prints the current state of the game

// 3. print the board
// 4. check if the game is over
// 5. print the winner
// 6. print the current player
// 7. print the current state of the game

// Path: main.test.js
// write a test that checks if the game is over
// write a test that checks if the game is over

// write a test that checks if there is a winner
// write a test that checks if the board is printed
// write a test that checks if the current player is printed
// write a test that checks if the current state of the game is printed
// write a test that checks if the winner is printed

