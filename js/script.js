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
        const players = {
            player1: 'Player1',
            player2: selectPlayers
        }
        return players;
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
        resetGameBoard
    }

})();

const displayController = (function () {

})();

let gameBoard = gameBoardController.getGameBoardDisplay();
console.table(gameBoard);