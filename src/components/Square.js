const styles = {
  background: "lightblue",
  border: "2px solid darkblue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, handleClick }) => (
  <button style={styles} onClick={handleClick}>
    {value}
  </button>
);

export default Square;
