import { useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import GameDetails from '../components/games/GameDetails';
import Navigation from '../components/navigation/Navigation';
import { getGameByUrl } from '../services/Games';

export async function gameLoader({ params }) {
  const game = getGameByUrl(params.gameUrl);
  return { game };
}

const Game = () => {
  const { game } = useLoaderData();
  return (
    <>
      <Navigation />
      <GameDetails game={game} />
      <Footer />
    </>
  );
};

export default Game;
