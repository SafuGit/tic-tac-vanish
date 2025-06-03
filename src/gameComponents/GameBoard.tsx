import useGameLogic from '../hooks/useGameLogic';

const GameBoard = ({id} : {id: string}) => {
  const {
    board,
    turn,
    moves,
    dissapeared,
    winner,
    handleMove
  } = useGameLogic({
    gameId: id,
    board: Array(9).fill(null),
    turn: 'X',
    moves: 0,
    dissapeared: []
  });

  console.log("Game Board State:", { board, turn, moves, dissapeared, winner });

  return (
    <div className='grid grid-cols-3 border-white border-1 w-[20%] mx-auto'>
      {board.map((cell, index) => {
        const isVanished = dissapeared.includes(index);
        const displayCell = isVanished ? null : cell;

        return (
          <button
            key={index}
            className={`hover:cursor-pointer btn-square border h-15 text-2xl ${
              displayCell === 'X'
                ? 'bg-blue-500 text-white'
                : displayCell === 'O'
                ? 'bg-red-500 text-white'
                : 'bg-gray-200'
            }`}
            onClick={() => handleMove(index)}
          >
            {displayCell}
          </button>
        );
      })}

    </div>
  );
};

export default GameBoard;