import { use, useCallback, useState } from "react"
import { FirestoreContext } from "../contexts/FirestoreContext";

const WINNING_COMBOS = [
    [0,1,2], [3,4,5], [6,7,8], // COLLUMNS
    [0,3,6], [1,4,7], [2,5,8], // ROWS
    [0,4,8], [2,4,6] // DIAGONALS
]

const useGameLogic = (initialState: {
    gameId: string,
    board: (null | 'X' | 'O')[],
    turn: 'X' | 'O',
    moves: number,
    dissapeared: number[],
}) => {
    const [board, setBoard] = useState(initialState.board);
    const [turn, setTurn] = useState(initialState.turn);
    const [moves, setMoves] = useState(initialState.moves);
    const [xMoves, setXMoves] = useState(0);
    const [oMoves, setOMoves] = useState(0);
    const [dissapeared, setDissapeared] = useState(initialState.dissapeared);
    const [winner, setWinner] = useState<null | 'X' | 'O'>(null);

    const { updateTurn } = use(FirestoreContext);

    const checkWinner = (b: (null | 'X' | 'O')[]) => {
        for (const combo of WINNING_COMBOS) {
            const [a, b1, c] = combo;
            if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
        }
        return null;
    }

    const handleMove = useCallback((index: number) => {
        if (board[index] || winner) return;

        const updatedBoard = [...board];
        updatedBoard[index] = turn;
        const updatedMoves = moves + 1;

        let updatedXMoves = xMoves;
        let updatedOMoves = oMoves;

        if (turn === 'X') {
            updatedXMoves += 1;
            setXMoves(updatedXMoves);
        } else {
            updatedOMoves += 1;
            setOMoves(updatedOMoves);
        }


        const newDissapeared = dissapeared.filter(i => i !== index);
        if (
            (turn === 'X' && updatedXMoves % 3 === 0) ||
            (turn === 'O' && updatedOMoves % 3 === 0)
        ) {
            const filledIndices = updatedBoard
                .map((cell, idx) => (cell !== null && !dissapeared.includes(idx) ? idx : -1))
                .filter(idx => idx !== -1);

            if (filledIndices.length > 0) {
                const vanishIndex = filledIndices[Math.floor(Math.random() * filledIndices.length)];
                updatedBoard[vanishIndex] = null;
                newDissapeared.push(vanishIndex);
            }
        }


        const possibleWinner = checkWinner(updatedBoard);

        setBoard(updatedBoard);
        setMoves(updatedMoves);
        setTurn(turn === 'X' ? 'O' : 'X');
        setDissapeared(newDissapeared);
        setWinner(possibleWinner);

        updateTurn(initialState.gameId, updatedBoard, turn, updatedMoves, newDissapeared, possibleWinner);
    }, [board, turn, moves, dissapeared, winner, initialState.gameId, updateTurn]); 

    return {
        board,
        turn,
        moves,
        dissapeared,
        winner,
        handleMove
    }
}

export default useGameLogic;