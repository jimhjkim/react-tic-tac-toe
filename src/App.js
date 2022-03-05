import React from "react";
import Game from "./components/Game";

const App = () => <Game />;

export default App;

/**
 * Problem Statement
    Design and create a playable version of Tic-Tac-Toe in the browser

    Rules of the Game
    The game is to be played between two players.
    Player 1 plays with 'X' , Player 2 plays with 'O'.
    The game starts with Player 1.
    Both players take turns marking blank squares with their respective characters ('X' or 'O').
    The game ends when one of the players has one whole row/ column/ diagonal filled with their respective character ('X' or 'O').
    If all cells are filled and no winner has been determined, then the game is said to be a draw.
    Display the game's status/winner when the game is over (no additional moves can be made if the game is over).
    Confidential: Please do not share this assessment or your answers with anyone else.

    Page load
    - Load the board 3 x 3 (come back if you have time)
    - Prompt Player 1 to place their location

    States
    - represent the board as matrix state
    - turn state to indicate Player 1 vs 2

    UI
    - buttons for empty cells
    - <p> tags for filled in cells

    Game ends (clear winner or draw)
    - Indicate result
 */

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [player, setPlayer] = useState(1);
//   const [board, setBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

//   const winConditions = {
//     "012": ["z", "z", "z", "z", "z", "z", "z", "z", "z"];

//   }

//   // const [board, setBoard] = useState([
//   //   ["z", "z", "z"],
//   //   ["z", "z", "z"],
//   //   ["z", "z", "z"],
//   // ]);

//   const handleClick = (x_coord) => {
//     // check if this cell is empty?
//     // if not empty -> display a message "Click somewhere else"
//     // if empty -> update board state with corresponding player marker
//     if (board[x_coord] !== "") {
//       alert("Please click somewhere else!");
//     } else {
//       const newBoard = [...board];
//       newBoard[x_coord] = player === 1 ? "X" : "O";
//       setBoard(newBoard);
//       // ['X', 'X', X', 3, 4, 5, 6, 7, 8]
//       setPlayer(player === 1 ? 2 : 1);
//     }
//   };

//   const checkWin = () => {};

//   return (
//     <div className="App">
//       <h1>Play Tic Tac Toe</h1>
//       <h3>It's your turn player: {player}</h3>
//       <table>
//         <tr>
//           <th onClick={() => handleClick(0)}>{board[0]}</th>
//           <th onClick={() => handleClick(1)}>{board[1]}</th>
//           <th onClick={() => handleClick(2)}>{board[2]}</th>
//         </tr>
//         <tr>
//           <th onClick={() => handleClick(3)}>{board[3]}</th>
//           <th onClick={() => handleClick(4)}>{board[4]}</th>
//           <th onClick={() => handleClick(5)}>{board[5]}</th>
//         </tr>
//         <tr>
//           <th onClick={() => handleClick(6)}>{board[6]}</th>
//           <th onClick={() => handleClick(7)}>{board[7]}</th>
//           <th onClick={() => handleClick(8)}>{board[8]}</th>
//         </tr>
//       </table>
//     </div>
//   );
// }

// export default App;
