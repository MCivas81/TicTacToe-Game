import { LeaderboardProps } from "../types/leaderboard";

const Leaderboard: React.FC<LeaderboardProps> = ({
  winner,
  playerX,
  playerXScore,
  playerO,
  playerOScore,
  onBack,
}) => {
  const leaderboardData = [
    { name: playerX, score: playerXScore },
    { name: playerO, score: playerOScore },
  ];

  const winnerText = winner === "draw" ? "Pareggio!" : `${winner} ha vinto!`;
  console.log("winner", winner);

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="text-xl mb-4">{winnerText}</div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Giocatore</th>
            <th className="px-4 py-2">Punteggio</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{player.name}</td>
              <td className="border px-4 py-2">{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onBack} className="btn mt-8">
        Torna al gioco
      </button>
    </div>
  );
};

export default Leaderboard;
