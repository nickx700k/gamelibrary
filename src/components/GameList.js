import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./GameList.css";

export default function GameList({ games }) {
  const history = useHistory();

  return (
    <div className="game-list">
      {games &&
        games.map((game, index) => (
          <div className="card" key={index}>
            <img className="card-img" src={game.small} alt="No Photo" />
            <div className="card-body">
              <h4>{game.title}</h4>
              <div className="flex-gap">
                {game.genre &&
                  game.genre.map((genre) => <em key={genre}> {genre} </em>)}
              </div>

              <span>{game.release}</span>
              <p>{game.info.substring(0, 50)}...</p>
            </div>
            <Link to={`/games/${game.id}`}>
              <button
                onClick={() => history.push(`/games/${game.id}`)}
                className="btn"
              >
                More Info
              </button>
            </Link>
          </div>
        ))}
    </div>
  );
}
