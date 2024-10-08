import { useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import GamesList from '../components/games/GamesList';
import Navigation from '../components/navigation/Navigation';
import { getGames } from '../services/games';

export async function gamesLoader() {
  const games = getGames();
  return { games };
}

const Games = () => {
  const { games } = useLoaderData();
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <GamesList games={games} />
      <Footer />
    </div>
  );
};

export default Games;
