import Game from "./components/Game";

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">Tic Tac Toe</h1>
      <Game />
    </div>
  );
};

export default App;
