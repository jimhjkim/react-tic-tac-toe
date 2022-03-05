import Square from "./Square";

const styles = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, handleClick }) => (
  <div style={styles}>
    {squares.map((square, i) => (
      <Square key={i} value={square} handleClick={() => handleClick(i)} />
    ))}
  </div>
);

export default Board;
