import React from "react";
import { Link } from "react-router-dom";
import "../styles/start.scss";

const Start = () => {
  return (
    <div>
      <Link to="/game">
        <button>Empezar nueva aventura</button>
      </Link>
    </div>
  );
};

export default Start;
