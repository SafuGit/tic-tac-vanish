const GameBoard = () => {
  return (
    <div className='grid grid-cols-3 border-white border-1 w-[20%] mx-auto'>
      <button className='btn-square border h-15 text-4xl text-red-600'>X</button>
      <button className='btn-square border h-15'>X</button>
      <button className='btn-square border h-15'>X</button>
      <button className='btn-square border h-15'>X</button>
      <button className='btn-square border h-15'>X</button>
      <button className='btn-square border h-15'>X</button>
      <button className='btn-square border h-15'>X</button>
      <button className='btn-square border h-15'>X</button>
      <button className='btn-square border h-15'>X</button>
    </div>
  );
};

export default GameBoard;