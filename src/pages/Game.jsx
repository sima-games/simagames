import { useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import GameDetails from '../components/games/GameDetails';
import Navigation from '../components/navigation/Navigation';
import { getGameByRoute } from '../services/games';

export async function gameLoader({ params }) {
  const game = getGameByRoute(params.route);
  return { game };
}

const Game = () => {
  const { game } = useLoaderData();
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <GameDetails game={game} />
      <Footer />
    </div>
  );
};

export default Game;
