import React from "react";
import { Link } from "react-router-dom";
import "../styles/start.scss";
import arrow from "../images/flecha.png";

const Start = () => {
  return (
    <div className="background_start">
      <Link to="/">
        <button>
          <img className="arrow" src={arrow} alt="arrow" />
        </button>
      </Link>{" "}
      <Link to="/game">
        <section className="display">
          <button className="button_newGame">Nueva Aventura</button>
        </section>
      </Link>
    </div>
  );
};

export default Start;
