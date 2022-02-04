import React from "react";
import { Link } from "react-router-dom";

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
