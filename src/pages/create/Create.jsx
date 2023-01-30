import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Create.css";
export default function Create() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [genre, setGenre] = useState([]);
  const [release, setRelease] = useState("");
  const [info, setInfo] = useState("");

  const { postData, data, error } = useFetch(
    "http://localhost:3000/library",
    "POST"
  );
  const history = useHistory();

  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(toString(Math.floor(0, 50)));
    postData({
      id,
      title,
      genre,
      release,
      info,
    });
    history.push("/");
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const ge = newGenre.trim();

    if (ge && !genre.includes(ge)) {
      setGenre((prevGenres) => [...prevGenres, ge]);
    }
    setNewGenre("");
    ref.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Create Your Own</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            className="input form-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="genre">
          <input
            type="text"
            className="input form-input1"
            placeholder="Genre"
            value={newGenre}
            ref={ref}
            onChange={(e) => setNewGenre(e.target.value)}
          />
          <button className="btn" onClick={handleAdd}>
            Add
          </button>
        </label>
        <p>
          {genre.map((ge) => (
            <em key={ge}>{ge}, </em>
          ))}
        </p>
        <label>
          <input
            type="text"
            className="input form-input"
            placeholder="Release"
            value={release}
            onChange={(e) => setRelease(e.target.value)}
          />
        </label>
        <label>
          <textarea
            type="text"
            className="input form-input"
            placeholder="Info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </label>
        <button className="btn">Create</button>
      </form>
    </div>
  );
}
