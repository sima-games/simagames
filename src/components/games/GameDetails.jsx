const GameDetails = ({ game }) => (
  <div>
    <iframe
      src={game.url}
      allowFullScreen={true}
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      className="w-full min-w-screen min-h-screen"
    ></iframe>
    <h2>{game.name}</h2>
    <p>{game.shortDescription}</p>
  </div>
);

export default GameDetails;
