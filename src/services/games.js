import cookieClickerPreview from '../assets/images/games/cookieClickerPreview.png';

const games = [
  {
    id: 1,
    icon: null,
    name: 'Cookie Clicker',
    route: 'cookie-clicker',
    url: 'https://sima-games.github.io/phaser-cookie-clicker/',
    shortDescription:
      'The network track can now show you critical information from the Network panel.',
    description: '',
    previewImage: cookieClickerPreview,
  },
];

const getGames = () => games;
const getGameByRoute = (route) =>
  games.filter((game) => game.route == route)[0];

export { getGames, getGameByRoute };
