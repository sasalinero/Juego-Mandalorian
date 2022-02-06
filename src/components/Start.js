import React from "react";
import { Link } from "react-router-dom";
import "../styles/start.scss";

const Start = () => {
  return (
    <div className="display">
      <Link to="/game">
        <button className="button_newGame">“Empezar nueva aventura”</button>
      </Link>
    </div>
  );
};

export default Start;
