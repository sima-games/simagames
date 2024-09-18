import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <Link to={game.route}>
      <div className="card card-compact md:card-normal bg-base-100 shadow-xl hover:shadow-2xl m-4 max-w-96">
        <figure>
          <img
            src={game.previewImage}
            alt={game.name}
            className="w-full h-auto"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{game.name}</h2>
          <p>{game.shortDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
