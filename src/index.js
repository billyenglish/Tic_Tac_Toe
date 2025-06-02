import "./styles.css";

const playerOneSelection = (function() {
    const playerSymbol = "X";
    return playerSymbol;
})();

const computerSelection = (function() {
    const computerSymbol = "O";
    return computerSymbol;
})();

const createGameBoard = (function() {
    const gameBoard = {
        playerOne: playerOneSelection,
        computer: computerSelection,
        currentBoard: [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ],
    };

    return gameBoard.currentBoard;
})();

const gameController = (function() {
})();

console.log(createGameBoard[0][0] = playerOneSelection);
console.log(createGameBoard[1][1] = playerOneSelection);
console.log(createGameBoard[2][2] = playerOneSelection);

console.log(createGameBoard);

const gameSquaresSpaces = document.querySelectorAll(".game-squares");

gameSquaresSpaces.forEach(squares => {
    squares.addEventListener("click", () => {

        console.log(squares.className === "square-one");
    });
})