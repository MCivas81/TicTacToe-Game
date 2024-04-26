export interface BoardProps {
  playerX: string;
  playerO: string;
  lastStarter: string;
  setShowLeaderboard: React.Dispatch<React.SetStateAction<boolean>>;
  onGameEnd: (winner: string) => void;
}
