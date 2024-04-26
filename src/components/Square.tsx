import { SquareProps } from "../types/square";

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button
      className="border border-gray-400 h-20 w-20 sm:h-24 sm:w-24 flex justify-center items-center text-4xl sm:text-5xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
