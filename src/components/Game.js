import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/game.scss";
import green_grass from "../images/cesped.png";
import grogu from "../images/yoda.jpg";
import dice from "../images/dado.jpg";
import blue_cookie from "../images/galleta.jpg";
import white_egg from "../images/huevo.jpg";
import green_frog from "../images/rana.png";
import recipient from "../images/vasija.png";
import App from "./App";
import wardrobe from "../images/armario2.png";
import arrow from "../images/flecha.png";

const Game = () => {
  /////////////////////////////////////////VARIABLES DE ESTADO/////////////////////////////////////////////////////////////////////////////////

  const [frog, setFrog] = useState(3);
  const [egg, setEgg] = useState(3);
  const [galleta, setGalleta] = useState(3);
  const [cesped, setCesped] = useState(6);
  const [dice, setDice] = useState(["frog", "egg", "galleta", "grogu"]);
  const [grogu, setGrogu] = useState(0);

  const [classFrog1, setClassFrog1] = useState("");
  const [classFrog2, setClassFrog2] = useState("");
  const [classFrog3, setClassFrog3] = useState("");

  const [classEgg1, setClassEgg1] = useState("");
  const [classEgg2, setClassEgg2] = useState("");
  const [classEgg3, setClassEgg3] = useState("");

  const [classGalleta1, setClassGalleta1] = useState("");
  const [classGalleta2, setClassGalleta2] = useState("");
  const [classGalleta3, setClassGalleta3] = useState("");

  const [classMoveGrogu1, setClassMoveGrogu1] = useState("hidden");
  const [classMoveGrogu2, setClassMoveGrogu2] = useState("hidden");
  const [classMoveGrogu3, setClassMoveGrogu3] = useState("hidden");
  const [classMoveGrogu4, setClassMoveGrogu4] = useState("hidden");
  const [classMoveGrogu5, setClassMoveGrogu5] = useState("hidden");
  const [classMoveGrogu6, setClassMoveGrogu6] = useState("hidden");

  ///////////////////////////////////////////////////////////FUNCIONES DEL SWITCH PARA ELIMINAR COMIDAS DEL ARMARIO//////////////////////////////////////////////////////
  ////////////////ELIMINAR LAS RANAS///////////////////
  const removeFrog = () => {
    if (frog === 3) {
      setClassFrog3("hidden");
    } else if (frog === 2) {
      setClassFrog2("hidden");
    } else if (frog === 1) {
      setClassFrog1("hidden");
    } else if (frog === 0) {
      moveGrogu();
    }
    setFrog(frog - 1);
  };
  /////////////////////////ELIMINAR LOS HUEVOS////////////////////
  const removeEgg = () => {
    if (egg === 3) {
      setClassEgg3("hidden");
    } else if (egg === 2) {
      setClassEgg2("hidden");
    } else if (egg === 1) {
      setClassEgg1("hidden");
    } else if (egg === 0) {
      moveGrogu();
    }
    setEgg(egg - 1);
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
    setGrogu(grogu + 1);

    if (grogu === 0) {
      setClassMoveGrogu1("");
    } else if (grogu === 1) {
      setClassMoveGrogu2("");
      setClassMoveGrogu1("hidden");
    } else if (grogu === 2) {
      setClassMoveGrogu3("");
      setClassMoveGrogu2("hidden");
    } else if (grogu === 3) {
      setClassMoveGrogu4("");
      setClassMoveGrogu3("hidden");
    } else if (grogu === 4) {
      setClassMoveGrogu5("");
      setClassMoveGrogu4("hidden");
    } else if (grogu === 5) {
      setClassMoveGrogu6("");
      setClassMoveGrogu5("hidden");
    }
  };

  ////////////////////////////////////////CUANDO PRESIONO EL DADO/////////////////////////////////////////////////////////

  const handleClick = () => {
    let imagen = Math.floor(Math.random() * dice.length);
    let resultadoDice = dice[imagen];

    switch (resultadoDice) {
      case "frog":
        removeFrog();

        break;
      case "egg":
        removeEgg();
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
    <div className="background_game">
      <Link to="/">
        <button>
          <img className="arrow" src={arrow} alt="arrow" />
        </button>
      </Link>{" "}
      <section>
        <button onClick={handleClick} className="dice">
          {" "}
          <img className="dice_imagen" src={dice} alt="dice" />
        </button>{" "}
      </section>{" "}
      <section className="grid">
        <img src={recipient} className="recipient1" alt="recipient" />
        <img src={recipient} className="recipient2" alt="recipient" />
        <img src={recipient} className="recipient3" alt="recipient" />
        <img
          className={`images_galletas ${classGalleta1}`}
          src={blue_cookie}
          alt="blue_cookie"
        />
        <img
          className={`images_galletas ${classGalleta2}`}
          src={blue_cookie}
          alt="blue_cookie"
        />
        <img
          className={`images_galletas ${classGalleta3}`}
          src={blue_cookie}
          alt="blue_cookie"
        />
        <img
          className={`images_egg ${classEgg1}`}
          src={white_egg}
          alt="white_egg"
        />
        <img
          className={`images_egg ${classEgg2}`}
          src={white_egg}
          alt="white_egg"
        />
        <img
          className={`images_egg ${classEgg3}`}
          src={white_egg}
          alt="white_egg"
        />

        <img
          className={`images_frog ${classFrog1}`}
          src={green_frog}
          alt="green_frog"
        />
        <img
          className={`images_frog ${classFrog2}`}
          src={green_frog}
          alt="green_frog"
        />
        <img
          className={`images_frog ${classFrog3}`}
          src={green_frog}
          alt="green_frog"
        />
        <img
          className={`grogu grogu1  ${classMoveGrogu1}`}
          src={grogu}
          alt="babgrogu"
        />
        <img
          className={`grogu grogu2  ${classMoveGrogu2}`}
          src={grogu}
          alt="babgrogu"
        />
        <img
          className={`grogu grogu3  ${classMoveGrogu3}`}
          src={grogu}
          alt="babgrogu"
        />
        <img
          className={`grogu grogu4  ${classMoveGrogu4}`}
          src={grogu}
          alt="babgrogu"
        />
        <img
          className={`grogu grogu5  ${classMoveGrogu5}`}
          src={grogu}
          alt="babgrogu"
        />
        <img
          className={`grogu grogu6  ${classMoveGrogu6}`}
          src={grogu}
          alt="babgrogu"
        />

        <img className="cesped cesped1" src={green_grass} alt="green_grass" />
        <img className="cesped cesped2" src={green_grass} alt="green_grass" />
        <img className="cesped cesped3" src={green_grass} alt="green_grass" />
        <img className="cesped cesped4" src={green_grass} alt="green_grass" />
        <img className="cesped cesped5" src={green_grass} alt="green_grass" />
        <img className="cesped cesped6" src={green_grass} alt="green_grass" />
        <img className="wardrobe" src={wardrobe} alt="wardrobe" />

        {/* <img className="wardrobe" src={wardrobe} alt="wardrobe" /> */}
      </section>
    </div>
  );
};
export default Game;
