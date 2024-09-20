import cookieClickerPreview from '../assets/images/games/cookieClickerPreview.png';

const games = [
  {
    id: 1,
    icon: null,
    name: 'Cookie Clicker',
    slug: 'cookie-clicker',
    url: 'https://sima-games.github.io/phaser-cookie-clicker/',
    shortDescription:
      'The network track can now show you critical information from the Network panel.',
    description: '',
    previewImage: cookieClickerPreview,
  },
  {
    id: 1,
    icon: null,
    name: 'Cookie Clicker',
    slug: 'cookie-clicker',
    url: 'https://sima-games.github.io/phaser-cookie-clicker/',
    shortDescription:
      'The network track can now show you critical information from the Network panel.',
    description: '',
    previewImage: cookieClickerPreview,
  },
  {
    id: 1,
    icon: null,
    name: 'Cookie Clicker',
    slug: 'cookie-clicker',
    url: 'https://sima-games.github.io/phaser-cookie-clicker/',
    shortDescription:
      'The network track can now show you critical information from the Network panel.',
    description: '',
    previewImage: cookieClickerPreview,
  },
  {
    id: 1,
    icon: null,
    name: 'Cookie Clicker',
    slug: 'cookie-clicker',
    url: 'https://sima-games.github.io/phaser-cookie-clicker/',
    shortDescription:
      'The network track can now show you critical information from the Network panel.',
    description: '',
    previewImage: cookieClickerPreview,
  },
];

const getGames = () => games;
const getGameBySlug = (slug) => games.filter((game) => game.slug == slug)[0];

export { getGames, getGameBySlug };
