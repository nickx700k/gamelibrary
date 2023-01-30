import React from "react";
import "./Games.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Games() {
  const { id } = useParams();

  const url = "http://localhost:3000/library/" + id;

  const { data: game, pending, error } = useFetch(url);

  return (
    <>
      {pending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {game && (
        <div className="games">
          <img className="large-photo" src={game.large} />

          <div className="game-info">
            <h3>{game.title}</h3>
            <ul>
              {game.genre &&
                game.genre.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
            <h5>{game.release}</h5>
            <p>{game.info}</p>
          </div>
        </div>
      )}
    </>
  );
}
