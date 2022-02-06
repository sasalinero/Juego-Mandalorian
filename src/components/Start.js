import React from "react";
import { Link } from "react-router-dom";
import "../styles/start.scss";

const Start = () => {
  return (
    <div className="background_start">
      <Link to="/game">
        <section className="display">
          <button className="button_newGame">Empezar nueva aventura</button>
        </section>
      </Link>
    </div>
  );
};

export default Start;
