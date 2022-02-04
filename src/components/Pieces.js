import React from "react";
import { Link } from "react-router-dom";
import "../styles/pieces.scss";

const Pieces = () => {
  return (
    <div>
      <Link to="/">
        <button>MENU</button>
      </Link>
      <h1>Fichas</h1>
      <ul>
        <li>Ficha de zona de carga (x6)</li>
        <li>Ficha de armario (x1)</li>
        <li>Ficha de recipiente (x3)</li>
        <li>Cajas de galleta_azuls 🍪🍪🍪 (x3)</li>
        <li>rana_verdes 🐸 🐸 🐸(x3)</li>
        <li>huevo_blancos de rana_verde 🥚🥚🥚 (x3)</li>
        <li>Dado (x1)</li>
        <li>Grogu (x1)</li>
      </ul>
    </div>
  );
};

export default Pieces;
