import cookieClickerPreview from '../assets/images/games/cookieClickerPreview.png';
import CookieClicker from '../phaser/games/1_cookie_cliker/CookieClicker';

const games = [
  {
    icon: null,
    title: 'Cookie Clicker',
    url: 'cookie-clicker',
    shortDescription:
      'The network track can now show you critical information from the Network panel.',
    description: '',
    previewImage: cookieClickerPreview,
    game: <CookieClicker />,
  },
  {
    icon: null,
    title: 'Cookie Clicker 1',
    url: 'cookie-clicker',
    shortDescription:
      'The network track can now show you critical information from the Network panel.',
    description: '',
    previewImage: cookieClickerPreview,
  },
  {
    icon: null,
    title: 'Cookie Clicker 2',
    url: 'cookie-clicker',
    shortDescription:
      'The network track can now show you critical information from the Network panel.',
    description: '',
    previewImage: cookieClickerPreview,
  },
  {
    icon: null,
    title: 'Cookie Clicker 3',
    url: 'cookie-clicker',
    shortDescription:
      'The network track can now show you critical information from the Network panel.',
    description: '',
    previewImage: cookieClickerPreview,
  },
];

const getGames = () => games;
const getGameByUrl = (url) => games.filter((game) => game.url == url)[0];

export { getGames, getGameByUrl };
