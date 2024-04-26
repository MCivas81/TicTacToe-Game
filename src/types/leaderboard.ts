export interface LeaderboardProps {
  winner: string;
  playerX: string;
  playerXScore: number;
  playerO: string;
  playerOScore: number;
  onBack: () => void;
}
