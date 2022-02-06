import "../styles/layout.scss";

import React from "react";
import Game from "./Game";
import Pieces from "./Pieces";
import Rules from "./Rules";
import { Link } from "react-router-dom";

const Layout = () => {
  const handleClick = () => {
    return (
      <Link to="/start">
        <button>Empezar nueva aventura</button>
      </Link>
    );
  };

  return (
    <div className="background_layout">
      <nav className="nav">
        <ul className="ul_layout">
          <li>
            <Link to="/pieces">
              <button className="button_layout" onClick={handleClick}>
                PIECES
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/start">
              <button onClick={handleClick} className="button_game">
                GAME
              </button>
            </Link>
          </li>
          <li>
            <Link to="/rules">
              <button onClick={handleClick} className="button_rules">
                RULES
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
