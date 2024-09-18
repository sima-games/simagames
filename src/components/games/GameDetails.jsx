import { useState } from 'react';

const GameDetails = ({ game }) => {
  const [isGameVisible, setGameVisible] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      {!isGameVisible && (
        <div className="bg-gray-200  w-[360px] h-[640px] flex justify-center items-center">
          <button className="btn" onClick={() => setGameVisible(true)}>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              role="img"
              version="1.1"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>{' '}
            Run game
          </button>
        </div>
      )}
      {isGameVisible && (
        <iframe
          src={game.url}
          allowFullScreen={true}
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          className="w-[360px] h-[640px]"
        ></iframe>
      )}
      <h1>{game.name}</h1>
      <p>{game.shortDescription}</p>
    </div>
  );
};

export default GameDetails;
