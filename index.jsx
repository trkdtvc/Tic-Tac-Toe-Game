const { useState } = React;

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index){
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
    </div>
  )
}