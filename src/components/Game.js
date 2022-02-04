import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/game.scss";
import cesped_verde from "../images/cesped.png";
import yoda from "../images/yoda.jpg";
import dado_juego from "../images/dado_pres.png";
import galleta_azul from "../images/galleta.jpg";
import huevo_blanco from "../images/huevo.jpg";
import rana_verde from "../images/rana.jpg";
import vasija from "../images/vasija.jpg";
import App from "./App";

const Game = (props) => {
  let [rana, setRana] = useState(props.ranaPrueba);
  let [huevo, setHuevo] = useState(props.huevoPrueba);
  let [galleta, setGalleta] = useState(props.galletaPrueba);
  let [cesped, setCesped] = useState(props.cespedPrueba);
  let [dado, setDado] = useState(props.dadoPrueba);
  let [yoda, setYoda] = (useState = [""]);
  let [classRana1, setClassRana1] = useState("");

  console.log(props.dadoPrueba);
  const handleClick = () => {
    let imagen = Math.floor(Math.random() * dado.length);
    let resultadoDado = dado[imagen];

    console.log(imagen);
    console.log(dado[imagen]);
    return setClassRana1("hidden");
  };

  return (
    <div>
      <Link to="/">
        <button>MENU</button>
      </Link>{" "}
      <section>
        <button onClick={handleClick} className="dado">
          DADO
        </button>{" "}
      </section>
      <section className="armario">
        <section className="vasija_galleta_azul">
          <img className="images" src={galleta_azul} alt="galleta_azul" />
          <img className="images" src={galleta_azul} alt="galleta_azul" />
          <img className="images" src={galleta_azul} alt="galleta_azul" />
        </section>

        <section className="vasija_huevo_blanco">
          <img className="images" src={huevo_blanco} alt="huevo_blanco" />
          <img className="images" src={huevo_blanco} alt="huevo_blanco" />
          <img className="images" src={huevo_blanco} alt="huevo_blanco" />
        </section>
        <section className="vasija_rana_verde">
          <img
            className={`images ${classRana1}`}
            src={rana_verde}
            alt="rana_verde"
          />
          <img className="images" src={rana_verde} alt="rana_verde" />
          <img className="images" src={rana_verde} alt="rana_verde" />
        </section>
      </section>
      <section>
        {" "}
        <img className="yoda" src={yoda} alt="babyoda" />
        <img className="cesped" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped" src={cesped_verde} alt="cesped_verde" />
      </section>
    </div>
  );
};
export default Game;
