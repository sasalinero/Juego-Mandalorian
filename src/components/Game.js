import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/game.scss";
import cesped_verde from "../images/cesped.png";
import grogu from "../images/yoda.jpg";
import dado_juego from "../images/dado_pres.png";
import galleta_azul from "../images/galleta.jpg";
import huevo_blanco from "../images/huevo.jpg";
import rana_verde from "../images/rana.png";
import vasija from "../images/vasija.png";
import App from "./App";
import armario from "../images/armario2.png";

const Game = () => {
  /////////////////////////////////////////VARIABLES DE ESTADO/////////////////////////////////////////////////////////////////////////////////

  const [rana, setRana] = useState(3);
  const [huevo, setHuevo] = useState(3);
  const [galleta, setGalleta] = useState(3);
  const [cesped, setCesped] = useState(6);
  const [dado, setDado] = useState(["rana", "huevo", "galleta", "yoda"]);
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

  const [classMoveYoda1, setClassMoveYoda1] = useState("hidden");
  const [classMoveYoda2, setClassMoveYoda2] = useState("hidden");
  const [classMoveYoda3, setClassMoveYoda3] = useState("hidden");
  const [classMoveYoda4, setClassMoveYoda4] = useState("hidden");
  const [classMoveYoda5, setClassMoveYoda5] = useState("hidden");
  const [classMoveYoda6, setClassMoveYoda6] = useState("hidden");

  ///////////////////////////////////////////////////////////FUNCIONES DEL SWITCH PARA ELIMINAR COMIDAS DEL ARMARIO//////////////////////////////////////////////////////
  ////////////////ELIMINAR LAS RANAS///////////////////
  const removeRana = () => {
    if (rana === 3) {
      setClassRana3("hidden");
    } else if (rana === 2) {
      setClassRana2("hidden");
    } else if (rana === 1) {
      setClassRana1("hidden");
    } else if (rana === 0) {
      moveGrogu();
    }
    setRana(rana - 1);
  };
  /////////////////////////ELIMINAR LOS HUEVOS////////////////////
  const removeHuevo = () => {
    if (huevo === 3) {
      setClassHuevo3("hidden");
    } else if (huevo === 2) {
      setClassHuevo2("hidden");
    } else if (huevo === 1) {
      setClassHuevo1("hidden");
    } else if (huevo === 0) {
      moveGrogu();
    }
    setHuevo(huevo - 1);
  };
  ///////////////////////ELIMINAR LAS GALLETAS/////////////////////
  const removeGalleta = () => {
    if (galleta === 3) {
      setClassGalleta3("hidden");
    } else if (galleta === 2) {
      setClassGalleta2("hidden");
    } else if (galleta === 1) {
      setClassGalleta1("hidden");
    } else if (galleta === 0) {
      moveGrogu();
    }
    setGalleta(galleta - 1);
  };

  //////////////////////MOVER A GROGU//////////////////////////////////

  const moveGrogu = () => {
    setYoda(yoda + 1);

    if (yoda === 0) {
      setClassMoveYoda1("");
    } else if (yoda === 1) {
      setClassMoveYoda2("");
      setClassMoveYoda1("hidden");
    } else if (yoda === 2) {
      setClassMoveYoda3("");
      setClassMoveYoda2("hidden");
    } else if (yoda === 3) {
      setClassMoveYoda4("");
      setClassMoveYoda3("hidden");
    } else if (yoda === 4) {
      setClassMoveYoda5("");
      setClassMoveYoda4("hidden");
    } else if (yoda === 5) {
      setClassMoveYoda6("");
      setClassMoveYoda5("hidden");
    }
  };

  ////////////////////////////////////////CUANDO PRESIONO EL DADO/////////////////////////////////////////////////////////

  const handleClick = () => {
    let imagen = Math.floor(Math.random() * dado.length);
    let resultadoDado = dado[imagen];

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
      case "yoda":
        moveGrogu();
        break;
      default:
        break;
    }
  };

  /////////////////////////////LO QUE SE PINTA////////////////////////////////////

  return (
    <div className="background_game">
      <Link to="/">
        <button>MENU</button>
      </Link>{" "}
      <section>
        <button onClick={handleClick} className="dado">
          {" "}
          <img className="dado_imagen" src={dado_juego} alt="dado" />
        </button>{" "}
      </section>{" "}
      <section className="grid">
        <img src={vasija} className="vasija1" alt="vasija" />
        <img src={vasija} className="vasija2" alt="vasija" />
        <img src={vasija} className="vasija3" alt="vasija" />
        <img
          className={`images_galletas ${classGalleta1}`}
          src={galleta_azul}
          alt="galleta_azul"
        />
        <img
          className={`images_galletas ${classGalleta2}`}
          src={galleta_azul}
          alt="galleta_azul"
        />
        <img
          className={`images_galletas ${classGalleta3}`}
          src={galleta_azul}
          alt="galleta_azul"
        />
        <img
          className={`images_huevo ${classHuevo1}`}
          src={huevo_blanco}
          alt="huevo_blanco"
        />
        <img
          className={`images_huevo ${classHuevo2}`}
          src={huevo_blanco}
          alt="huevo_blanco"
        />
        <img
          className={`images_huevo ${classHuevo3}`}
          src={huevo_blanco}
          alt="huevo_blanco"
        />

        <img
          className={`images_rana ${classRana1}`}
          src={rana_verde}
          alt="rana_verde"
        />
        <img
          className={`images_rana ${classRana2}`}
          src={rana_verde}
          alt="rana_verde"
        />
        <img
          className={`images_rana ${classRana3}`}
          src={rana_verde}
          alt="rana_verde"
        />
        <img
          className={`yoda yoda1  ${classMoveYoda1}`}
          src={grogu}
          alt="babyoda"
        />
        <img
          className={`yoda yoda2  ${classMoveYoda2}`}
          src={grogu}
          alt="babyoda"
        />
        <img
          className={`yoda yoda3  ${classMoveYoda3}`}
          src={grogu}
          alt="babyoda"
        />
        <img
          className={`yoda yoda4  ${classMoveYoda4}`}
          src={grogu}
          alt="babyoda"
        />
        <img
          className={`yoda yoda5  ${classMoveYoda5}`}
          src={grogu}
          alt="babyoda"
        />
        <img
          className={`yoda yoda6  ${classMoveYoda6}`}
          src={grogu}
          alt="babyoda"
        />

        <img className="cesped cesped1" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped cesped2" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped cesped3" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped cesped4" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped cesped5" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped cesped6" src={cesped_verde} alt="cesped_verde" />
        <img className="armario" src={armario} alt="armario" />

        {/* <img className="armario" src={armario} alt="armario" /> */}
      </section>
    </div>
  );
};
export default Game;
