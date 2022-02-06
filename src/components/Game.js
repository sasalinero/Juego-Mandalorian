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
import armario from "../images/armario.png";

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

  const [moveYoda1, setmoveYoda1] = useState("");
  const [moveYoda2, setmoveYoda2] = useState("");
  const [moveYoda3, setmoveYoda3] = useState("");
  const [moveYoda4, setmoveYoda4] = useState("");
  const [moveYoda5, setmoveYoda5] = useState("");
  const [moveYoda6, setmoveYoda6] = useState("");

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
      setYoda(yoda + 1);
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
      setYoda(yoda + 1);
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
      setYoda(yoda + 1);
    }
    setGalleta(galleta - 1);
  };

  const moveGrogu = () => {
    if (yoda === 3) {
      setYoda("hidden");
      // console.log("Aqui yoda");
      //setmoveYoda1("hidden");
    }
  };

  ////////////////////////////////////////CUANDO PRESIONO EL DADO/////////////////////////////////////////////////////////

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
      case "grogu":
        moveGrogu();
        break;
      default:
        break;
    }
  };

  /////////////////////////////LO QUE SE PINTA////////////////////////////////////

  return (
    <div>
      <Link to="/">
        <button>MENU</button>
      </Link>{" "}
      <section>
        <button onClick={handleClick} className="dado">
          {/* <img className="dado" src={dado_juego} alt="dado" /> */}
          DADO
        </button>{" "}
      </section>{" "}
      <section className="grid">
        <img className="yoda yoda1" src={grogu} alt="babyoda" />
        <img className="yoda yoda2" src={grogu} alt="babyoda" />
        <img className="yoda yoda3" src={grogu} alt="babyoda" />
        <img className="yoda yoda4" src={grogu} alt="babyoda" />
        <img className="yoda yoda5" src={grogu} alt="babyoda" />
        <img className="yoda yoda6" src={grogu} alt="babyoda" />

        <img className="cesped cesped1" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped cesped2" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped cesped3" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped cesped4" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped cesped5" src={cesped_verde} alt="cesped_verde" />
        <img className="cesped cesped6" src={cesped_verde} alt="cesped_verde" />
      </section>
      <section className="armario">
        <img className="armario" src={armario} alt="armario" />
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
      </section>
    </div>
  );
};
export default Game;
