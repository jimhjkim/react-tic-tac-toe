import { useState } from "react";
import { calculateWinner } from "../helpers/calculateWinner";
import Board from "./Board";

const styles = {};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const newBoard = [...board];
    // If a user clicks an occupied square or if game is won, return
    if (winner || newBoard[i]) return;
    // Put an X or an O in the clicked square
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  return (
    <>
      <Board squares={board} handleClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
      </div>
    </>
  );
};
export default Game;
