import React from "react";
import Game from "./Game";
import Pieces from "./Pieces";
import Rules from "./Rules";
import { Link } from "react-router-dom";
import "../styles/layout.scss";

const Layout = () => {
  const handleClick = () => {
    console.log("me han clickado en JUGAR");

    return (
      <Link to="/start">
        <button>Empezar nueva aventura</button>
      </Link>
    );
  };

  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            {" "}
            <Link to="/start">
              <button onClick={handleClick}>JUGAR</button>
            </Link>
          </li>
          <li>
            <Link to="/pieces">
              <button onClick={handleClick}>PIECES</button>
            </Link>
          </li>
          <li>
            <Link to="/rules">
              <button onClick={handleClick}>RULES</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
