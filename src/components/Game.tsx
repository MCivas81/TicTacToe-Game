import { useState } from "react";
import Board from "./Board";
import PlayerForm from "./PlayerForm";
import Leaderboard from "./Leaderboard";
import { Player } from "../types/player";

const Game: React.FC = () => {
  const [playerX, setPlayerX] = useState<Player>({ name: "", score: 0 });
  const [playerO, setPlayerO] = useState<Player>({ name: "", score: 0 });
  const [showLeaderboard, setShowLeaderboard] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");
  const [lastStarter, setLastStarter] = useState<string>("");

  const handleStartGame = (nameX: string, nameO: string) => {
    setPlayerX({ name: nameX, score: playerX.score });
    setPlayerO({ name: nameO, score: playerO.score });
    setLastStarter("X");
  };

  const handleGameEnd = (winnerName: string) => {
    setWinner(winnerName);
    setShowLeaderboard(true);

    if (winnerName !== "draw") {
      const winnerPlayer = winnerName === "X" ? playerX : playerO;
      const loserPlayer = winnerName === "X" ? playerO : playerX;
      setWinner(winnerPlayer.name);
      setPlayerX({
        ...playerX,
        score: winnerPlayer === playerX ? winnerPlayer.score + 1 : loserPlayer.score,
      });
      setPlayerO({
        ...playerO,
        score: winnerPlayer === playerO ? winnerPlayer.score + 1 : loserPlayer.score,
      });
    }
  };

  const switchPlayer = () => {
    setLastStarter(lastStarter === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setWinner("");
    setShowLeaderboard(false);
    switchPlayer();
  };

  const isGameReady = playerX.name && playerO.name;

  return (
    <main className="px-4">
      {!isGameReady ? (
        <PlayerForm onFormSubmit={handleStartGame} />
      ) : !showLeaderboard ? (
        <Board
          playerX={playerX.name}
          playerO={playerO.name}
          lastStarter={lastStarter}
          onGameEnd={handleGameEnd}
          setShowLeaderboard={setShowLeaderboard}
        />
      ) : (
        <Leaderboard
          winner={winner}
          playerX={playerX.name}
          playerO={playerO.name}
          playerXScore={playerX.score}
          playerOScore={playerO.score}
          onBack={resetGame}
        />
      )}
    </main>
  );
};

export default Game;
