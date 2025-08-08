const gameBoardController = (function () {

    const createGameBoard = {
        createBoard: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }

    const getGameBoardDisplay = () => createGameBoard.createBoard;

    const getPlayerMove = (position1, position2, playerSymbol) => {
        if (createGameBoard.createBoard[position1][position2] === '') {
            createGameBoard.createBoard[position1][position2] = playerSymbol;
        } else {
            console.log('Invalid move! Position already taken.');
        }
    }

    const selectPlayers = (players) => {
        const selectPlayers = players == 'Player1' ? 'Player2' : 'Computer';;
        const getPlayers = {
            player1: 'Player1',
            player2: selectPlayers
        }
        return getPlayers;
    }

    const selectSymbols = (playerSymbol) => {        
        const selectSymbol = playerSymbol == 'X' ? 'O' : 'X';
        const currentSymbols = {
            player1: playerSymbol,
            player2: selectSymbol
        }
        return currentSymbols;
    } 

    const computerSelection = () => {
        let position1, position2;
        do {
            position1 = Math.floor(Math.random() * 3);
            position2 = Math.floor(Math.random() * 3);
        } while (createGameBoard.createBoard[position1][position2] !== '');
        return { position1, position2 };
    }

    const validdateWinner = () => {
        const winningCombinations = [
            // Rows
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // Columns
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // Diagonals
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

        for (const combination of winningCombinations) {
            const [firstSquare, secondSquare, thirdSquare] = combination;
            if (createGameBoard.createBoard[firstSquare[0]][firstSquare[1]] &&
                createGameBoard.createBoard[firstSquare[0]][firstSquare[1]] === createGameBoard.createBoard[secondSquare[0]][secondSquare[1]] &&
                createGameBoard.createBoard[firstSquare[0]][firstSquare[1]] === createGameBoard.createBoard[thirdSquare[0]][thirdSquare[1]]) {
                return createGameBoard.createBoard[firstSquare[0]][firstSquare[1]];
            }
        }
        return null;
    }

    const currentPlayer = () => {
        return player === 'Player1' ? 'Player2' : 'Player1';
    }

    const playGame = () => {        
        let currentPlayer = 'Player1';
        

    }

    const resetGameBoard = () => {
        createGameBoard.createBoard = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
    }

    return {
        getGameBoardDisplay,
        getPlayerMove,
        selectPlayers,
        selectSymbols,
        computerSelection,
        validdateWinner,
        resetGameBoard
    }

})();

const displayController = (function () {

})();

let gameBoard = gameBoardController.getGameBoardDisplay();
console.table(gameBoard);