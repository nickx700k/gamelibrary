import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import GameList from "../../components/GameList";

export default function Search() {
  const qString = useLocation().search;
  const queryParams = new URLSearchParams(qString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/library?q=" + query;

  const { data, pending, error } = useFetch(url);

  return (
    <div className="search">
      {pending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {data && <GameList games={data} />}
    </div>
  );
}
