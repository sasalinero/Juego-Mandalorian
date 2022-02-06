import React from "react";
import { Link } from "react-router-dom";
import "../styles/pieces.scss";
import green_grass from "../images/cesped.png";
import wardrobe from "../images/armario2.png";
import recipient from "../images/vasija.png";
import blue_cookie from "../images/galleta.jpg";
import white_egg from "../images/huevo.png";
import green_frog from "../images/rana.png";
import grogu from "../images/yoda.jpg";
import dice from "../images/dado.jpg";
import arrow from "../images/flecha.png";

const Pieces = () => {
  return (
    <div className="background_pieces">
      <Link to="/">
        <button>
          <img className="arrow" src={arrow} alt="arrow" />
        </button>
      </Link>
      <h1>Fichas</h1>
      <ul>
        <li>
          Ficha de zona de carga{" "}
          <img className="grass_pieces" src={green_grass} alt="" />
          <img className="grass_pieces" src={green_grass} alt="" />
          <img className="grass_pieces" src={green_grass} alt="" />
          <img className="grass_pieces" src={green_grass} alt="" />
          <img className="grass_pieces" src={green_grass} alt="" />
          <img className="grass_pieces" src={green_grass} alt="" />
          (x6)
        </li>
        <li>
          Ficha de armario{" "}
          <img className="wardrobe_pieces" src={wardrobe} alt="wardrobe" />
          (x1)
        </li>
        <li>
          Ficha de recipiente{" "}
          <img className="recipient_pieces" src={recipient} alt="recipient" />
          <img className="recipient_pieces" src={recipient} alt="recipient" />
          <img className="recipient_pieces" src={recipient} alt="recipient" />
          (x3)
        </li>
        <li>
          Galletas azules
          <img className="blue_cookie" src={blue_cookie} alt="recipient" />
          <img className="blue_cookie" src={blue_cookie} alt="recipient" />
          <img className="blue_cookie" src={blue_cookie} alt="recipient" />
          (x3)
        </li>
        <li>
          Ranas verdes
          <img className="green_frog" src={green_frog} alt="recipient" />
          <img className="green_frog" src={green_frog} alt="recipient" />
          <img className="green_frog" src={green_frog} alt="recipient" />
          (x3)
        </li>
        <li>Huevos blancos de rana 🥚🥚🥚 (x3)</li>
        <li>
          Dice <img className="dice_pieces" src={dice} alt="dice" /> (x1)
        </li>
        <li>
          Grogu <img className="grogu_pieces" src={grogu} alt="grogu" /> (x1)
        </li>
      </ul>
    </div>
  );
};

export default Pieces;
