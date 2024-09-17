import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import config from './main';

const CookieClicker = () => {
  const gameContainerRef = useRef(null);
  let game;

  useEffect(() => {
    if (gameContainerRef.current) {
      const cfg = {
        ...config,
        parent: gameContainerRef.current,
      };
      game = new Phaser.Game(cfg);
    }

    return () => {
      if (game) {
        game.destroy(true);
      }
    };
  }, []);

  return (
    <div ref={gameContainerRef} style={{ width: '100%', height: '100%' }} />
  );
};

export default CookieClicker;
