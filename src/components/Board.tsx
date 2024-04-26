import { useEffect, useState } from "react";
import Square from "./Square";
import { BoardProps } from "../types/board";

const Board: React.FC<BoardProps> = ({
  playerX,
  playerO,
  lastStarter,
  setShowLeaderboard,
  onGameEnd,
}) => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState<boolean>(lastStarter === "X" ? true : false);

  const handleClick = (index: number) => {
    if (!playerX || !playerO || squares[index] || calculateWinner(squares)) {
      return;
    }

    const newSquares = [...squares];
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const draw = squares.every((square) => square !== "") && !winner;

  useEffect(() => {
    if (winner) {
      onGameEnd(winner);
    }
    if (draw) {
      onGameEnd("draw");
    }
  }, [winner, draw, setShowLeaderboard, onGameEnd]);

  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="text-xl mb-4">
        {playerX} (X) vs {playerO} (O)
      </div>
      <div className="grid grid-cols-3">
        {squares.map((square, index) => (
          <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
};

const calculateWinner = (squares: string[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
