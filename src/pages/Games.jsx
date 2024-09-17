import { useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';
import GamesList from '../components/games/GamesList';
import Navigation from '../components/navigation/Navigation';
import { getGames } from '../services/Games';

export async function gamesLoader() {
  const games = getGames();
  return { games };
}

const Games = () => {
  const { games } = useLoaderData();
  return (
    <>
      <Navigation />
      <GamesList games={games} />
      <Footer />
    </>
  );
};

export default Games;
