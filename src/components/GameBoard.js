export default function GameBoard({ onPlayerChange, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key="rowIndex">
          <ol>
            {row.map((col, colIndex) => (
              <li key="colIndex">
                <button
                  onClick={() => onPlayerChange(rowIndex, colIndex)}
                  disabled={col !== null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
