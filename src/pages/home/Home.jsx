import React from "react";
import { useFetch } from "../../hooks/useFetch";
import GameList from "../../components/GameList";

export default function Home() {
  const { data, pending, error } = useFetch("http://localhost:3000/library");

  return (
    <div className="home">
      <h2 className="page-title">Welcome to game library</h2>

      {pending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {data && <GameList games={data} />}
    </div>
  );
}
