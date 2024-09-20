import GameCard from './GameCard';

const GamesList = ({ games }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GamesList;
