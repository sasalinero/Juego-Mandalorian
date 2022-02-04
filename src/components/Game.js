import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/game.scss";
import cesped_verde from "../images/cesped.png";
import grogu from "../images/yoda.jpg";
import dado_juego from "../images/dado_pres.png";
import galleta_azul from "../images/galleta.jpg";
import huevo_blanco from "../images/huevo.jpg";
import rana_verde from "../images/rana.jpg";
import vasija from "../images/vasija.jpg";
import App from "./App";

const Game = () => {
  const [rana, setRana] = useState(3);
  const [huevo, setHuevo] = useState(3);
  const [galleta, setGalleta] = useState(3);
  const [cesped, setCesped] = useState(6);
  const [dado, setDado] = useState(["rana", "huevo", "galleta", "grogu"]);
  const [yoda, setYoda] = useState(0);

  const [classRana1, setClassRana1] = useState("");
  const [classRana2, setClassRana2] = useState("");
  const [classRana3, setClassRana3] = useState("");

  const [classHuevo1, setClassHuevo1] = useState("");
  const [classHuevo2, setClassHuevo2] = useState("");
  const [classHuevo3, setClassHuevo3] = useState("");

  const [classGalleta1, setClassGalleta1] = useState("");
  const [classGalleta2, setClassGalleta2] = useState("");
  const [classGalleta3, setClassGalleta3] = useState("");

  const removeRana = () => {
    if (rana === 3) {
      setClassRana3("hidden");
    } else if (rana === 2) {
      setClassRana2("hidden");
    } else if (rana === 1) {
      setClassRana1("hidden");
    } else if (rana === 0) {
      setYoda(yoda + 1);
    }
    setRana(rana - 1);
  };

  const removeHuevo = () => {
    if (huevo === 3) {
      setClassHuevo3("hidden");
    } else if (huevo === 2) {
      setClassHuevo2("hidden");
    } else if (huevo === 1) {
      setClassHuevo1("hidden");
    } else if (huevo === 0) {
      setYoda(yoda + 1);
    }
    setHuevo(huevo - 1);
  };
  const removeGalleta = () => {
    if (galleta === 3) {
      setClassGalleta3("hidden");
    } else if (galleta === 2) {
      setClassGalleta2("hidden");
    } else if (galleta === 1) {
      setClassGalleta1("hidden");
    } else if (galleta === 0) {
      setYoda(yoda + 1);
    }
    setGalleta(galleta - 1);
  };

  const handleClick = () => {
    let imagen = Math.floor(Math.random() * dado.length);
    let resultadoDado = dado[imagen];

    console.log(imagen);
    console.log(dado[imagen]);

    switch (resultadoDado) {
      case "rana":
        removeRana();

        break;
      case "huevo":
        removeHuevo();
        break;
      case "galleta":
        removeGalleta();
        break;
      default:
        break;
    }
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
          <img
            className={`images ${classGalleta1}`}
            src={galleta_azul}
            alt="galleta_azul"
          />
          <img
            className={`images ${classGalleta2}`}
            src={galleta_azul}
            alt="galleta_azul"
          />
          <img
            className={`images ${classGalleta3}`}
            src={galleta_azul}
            alt="galleta_azul"
          />
        </section>

        <section className="vasija_huevo_blanco">
          <img
            className={`images ${classHuevo1}`}
            src={huevo_blanco}
            alt="huevo_blanco"
          />
          <img
            className={`images ${classHuevo2}`}
            src={huevo_blanco}
            alt="huevo_blanco"
          />
          <img
            className={`images ${classHuevo3}`}
            src={huevo_blanco}
            alt="huevo_blanco"
          />
        </section>
        <section className="vasija_rana_verde">
          <img
            className={`images ${classRana1}`}
            src={rana_verde}
            alt="rana_verde"
          />
          <img
            className={`images ${classRana2}`}
            src={rana_verde}
            alt="rana_verde"
          />
          <img
            className={`images ${classRana3}`}
            src={rana_verde}
            alt="rana_verde"
          />
        </section>
      </section>
      <section>
        {" "}
        <img className="yoda" src={grogu} alt="babyoda" />
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
