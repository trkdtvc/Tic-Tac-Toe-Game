const { useState } = React;

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}

  function handleClick(index){
    if(calculateWinner(squares) || squares[index]){
      return;
    }

    if(squares[index]){
      return;
    }

    const newSquare = [...squares];
    newSquare[index] = xIsNext ? "X" : "O";

    setSquares(newSquare);
    setXIsNext(!xIsNext);
  }

  function handleReset(){
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  const draw = !winner && squares.every((square) => square != null);

  return(
    <div className="grid">
     {squares.map((value, index) => (
       <button
        key={index}
        className="square"
        onClick={() => handleClick(index)}
       >
        {value}
       </button>
     ))}

     <button id="reset" onClick={handleReset}>
      Reset
     </button>

     {winner && <p>Winner: {winner}</p>}
     {draw && <p>Draw</p>}
    </div>
  )
}