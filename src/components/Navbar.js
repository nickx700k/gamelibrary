import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useHistory, useLocation } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const [display, setDisplay] = useState(true);

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${search}`);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  });

  useEffect(() => {
    if (!search) {
      history.push("/");
    }
  }, [search]);

  return (
    <div className="navbar">
      <div className="flex">
        <Link to="/">Game Library</Link>
        {display && (
          <div className="action">
            <form onSubmit={handleSubmit}>
              <div className="search-bar">
                <input
                  className="input"
                  placeholder="Search Here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
            <button onClick={() => history.push("/create")} className="btn">
              Create
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
