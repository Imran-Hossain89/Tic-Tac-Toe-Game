import React, { useState } from "react";
import "./Style.css";
import Square from "./Square";

const Game = () => {
  const [num, setNum] = useState([...Array(9).fill(null)]);
  const [condition, setCondition] = useState(true);

  const handleChange = (index) => {
    if (num[index] != null) {
      return;
    }
    let copyArray = [...num];
    copyArray[index] = condition ? "X" : "0";
    setNum(copyArray);
    console.log(copyArray);
    setCondition(!condition);
  };

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winner.length; i++) {
      let [a, b, c] = winner[i];
      if (num[a] != null && num[a] == num[b] && num[b] == num[c]) {
        return num[a];
      }
    }
  };

  let result = checkWinner();

  const playAgain = () => {
    setNum([...Array(9).fill(null)]);
  };

  return (
    <div className="container">
      {result ? (
        <div className="result">
          <h1>Congratulation {condition ? "0" : "X"} :You win</h1>{" "}
          <button id="play-btn" onClick={playAgain}>
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <div className="head">
            <button id="tile-btn">Tic Tac Toe</button>
            <button className="restart-btn" onClick={playAgain}>
              Restart
            </button>
            <h2>Now {condition ? "X" : "0"}: your turn</h2>
          </div>
          <div className="row">
            <Square onClick={() => handleChange(0)} value={num[0]} />
            <Square onClick={() => handleChange(1)} value={num[1]} />
            <Square onClick={() => handleChange(2)} value={num[2]} />
          </div>

          <div className="row">
            <Square onClick={() => handleChange(3)} value={num[3]} />
            <Square onClick={() => handleChange(4)} value={num[4]} />
            <Square onClick={() => handleChange(5)} value={num[5]} />
          </div>

          <div className="row">
            <Square onClick={() => handleChange(6)} value={num[6]} />
            <Square onClick={() => handleChange(7)} value={num[7]} />
            <Square onClick={() => handleChange(8)} value={num[8]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
